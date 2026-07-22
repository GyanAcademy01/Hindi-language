import https from 'node:https';
import zlib from 'node:zlib';
import { performance } from 'node:perf_hooks';
import dns from 'node:dns/promises';
import { URL } from 'node:url';

const TARGET_URL = 'https://hindi-language.vercel.app/';

const USER_AGENTS = {
  mobile: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1',
  desktop: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
};

function decompressBuffer(buffer, encoding) {
  if (encoding === 'br') {
    return zlib.brotliDecompressSync(buffer);
  } else if (encoding === 'gzip') {
    return zlib.gunzipSync(buffer);
  } else if (encoding === 'deflate') {
    return zlib.inflateSync(buffer);
  }
  return buffer;
}

async function measureTiming(urlStr, userAgent) {
  const urlObj = new URL(urlStr);
  const hostname = urlObj.hostname;
  const path = urlObj.pathname + urlObj.search;

  const dnsStart = performance.now();
  try {
    await dns.lookup(hostname);
  } catch (err) {}
  const dnsEnd = performance.now();
  const dnsDurationMs = dnsEnd - dnsStart;

  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    let tcpTime = 0;
    let tlsTime = 0;
    let ttfb = 0;
    let totalTime = 0;

    let socketInit = 0;
    let tcpConnected = 0;

    const req = https.request(
      {
        hostname: hostname,
        port: 443,
        path: path,
        method: 'GET',
        headers: {
          'User-Agent': userAgent,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br',
          'Cache-Control': 'no-cache'
        }
      },
      (res) => {
        const firstByte = performance.now();
        ttfb = firstByte - startTime;

        const chunks = [];
        let compressedSize = 0;

        res.on('data', (chunk) => {
          chunks.push(chunk);
          compressedSize += chunk.length;
        });

        res.on('end', () => {
          const endTime = performance.now();
          totalTime = endTime - startTime;
          const rawBuffer = Buffer.concat(chunks);
          const encoding = res.headers['content-encoding'] || 'none';
          
          let decompressedBuffer = rawBuffer;
          try {
            decompressedBuffer = decompressBuffer(rawBuffer, encoding);
          } catch (e) {
            console.error('Decompress error:', e.message);
          }

          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            dnsMs: dnsDurationMs,
            tcpMs: tcpTime,
            tlsMs: tlsTime,
            ttfbMs: ttfb,
            totalMs: totalTime,
            transferSize: compressedSize,
            uncompressedSize: decompressedBuffer.length,
            contentEncoding: encoding,
            cacheControl: res.headers['cache-control'] || 'none',
            server: res.headers['server'] || 'unknown',
            html: decompressedBuffer.toString('utf-8')
          });
        });
      }
    );

    req.on('socket', (socket) => {
      socketInit = performance.now();

      socket.on('connect', () => {
        tcpConnected = performance.now();
        tcpTime = tcpConnected - socketInit;
      });

      socket.on('secureConnect', () => {
        const tlsHandshake = performance.now();
        tlsTime = tlsHandshake - tcpConnected;
      });
    });

    req.on('error', (err) => reject(err));
    req.end();
  });
}

function extractResources(html, baseUrlStr) {
  const baseUrl = new URL(baseUrlStr);
  const resources = [];

  // Script tags
  const scriptRegex = /<script[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    resources.push({ type: 'script', url: new URL(match[1], baseUrl).toString() });
  }

  // Link stylesheet or font or preload
  const linkRegex = /<link[^>]+href=["']([^"']+)["'][^>]*>/gi;
  while ((match = linkRegex.exec(html)) !== null) {
    const fullTag = match[0];
    const href = match[1];
    let type = 'other';
    if (fullTag.includes('rel="stylesheet"') || fullTag.includes("rel='stylesheet'")) {
      type = 'stylesheet';
    } else if (fullTag.includes('as="font"') || fullTag.includes("as='font'")) {
      type = 'font';
    } else if (fullTag.includes('as="script"') || fullTag.includes("as='script'")) {
      type = 'script';
    } else if (fullTag.includes('as="style"') || fullTag.includes("as='style'")) {
      type = 'stylesheet';
    } else if (href.endsWith('.css')) {
      type = 'stylesheet';
    } else if (href.endsWith('.js')) {
      type = 'script';
    }
    resources.push({ type, url: new URL(href, baseUrl).toString() });
  }

  // Image tags
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  while ((match = imgRegex.exec(html)) !== null) {
    resources.push({ type: 'image', url: new URL(match[1], baseUrl).toString() });
  }

  // Find Next.js static files matching `/_next/static/...` strings in scripts/JSON
  const nextStaticRegex = /\/_next\/static\/[a-zA-Z0-9_\-\.\/]+\.(?:js|css|woff2|png|jpg|jpeg|svg|webp|json)/gi;
  while ((match = nextStaticRegex.exec(html)) !== null) {
    let urlStr = match[0];
    let type = 'other';
    if (urlStr.endsWith('.js')) type = 'script';
    else if (urlStr.endsWith('.css')) type = 'stylesheet';
    else if (urlStr.endsWith('.woff2')) type = 'font';
    else if (/\.(png|jpg|jpeg|svg|webp)$/.test(urlStr)) type = 'image';
    resources.push({ type, url: new URL(urlStr, baseUrl).toString() });
  }

  // Deduplicate
  const uniqueMap = new Map();
  for (const res of resources) {
    if (!uniqueMap.has(res.url)) {
      uniqueMap.set(res.url, res.type);
    }
  }

  return Array.from(uniqueMap.entries()).map(([url, type]) => ({ url, type }));
}

async function fetchResourceDetails(resUrl, userAgent) {
  return new Promise((resolve) => {
    const urlObj = new URL(resUrl);
    const req = https.request(
      {
        hostname: urlObj.hostname,
        port: 443,
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        headers: {
          'User-Agent': userAgent,
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br'
        }
      },
      (res) => {
        const chunks = [];
        let transferBytes = 0;
        res.on('data', (c) => {
          chunks.push(c);
          transferBytes += c.length;
        });
        res.on('end', () => {
          const rawBuffer = Buffer.concat(chunks);
          const encoding = res.headers['content-encoding'] || 'none';
          let uncompressedBytes = transferBytes;
          try {
            uncompressedBytes = decompressBuffer(rawBuffer, encoding).length;
          } catch (e) {}

          resolve({
            url: resUrl,
            status: res.statusCode,
            transferBytes,
            uncompressedBytes,
            contentEncoding: encoding,
            cacheControl: res.headers['cache-control'] || 'none',
            contentType: res.headers['content-type'] || 'unknown'
          });
        });
      }
    );
    req.on('error', () => {
      resolve({
        url: resUrl,
        status: 0,
        transferBytes: 0,
        uncompressedBytes: 0,
        contentEncoding: 'error',
        cacheControl: 'error',
        contentType: 'error'
      });
    });
    req.end();
  });
}

async function runAudit() {
  console.log('🚀 Starting Comprehensive Web Performance Audit for https://hindi-language.vercel.app ...\n');

  const results = {};

  for (const [device, ua] of Object.entries(USER_AGENTS)) {
    console.log(`📡 Auditing ${device.toUpperCase()} ...`);

    const samples = [];
    for (let i = 0; i < 3; i++) {
      const sample = await measureTiming(TARGET_URL, ua);
      samples.push(sample);
      await new Promise((r) => setTimeout(r, 150));
    }

    const primarySample = samples[0];
    const avgDns = samples.reduce((a, b) => a + b.dnsMs, 0) / samples.length;
    const avgTcp = samples.reduce((a, b) => a + b.tcpMs, 0) / samples.length;
    const avgTls = samples.reduce((a, b) => a + b.tlsMs, 0) / samples.length;
    const avgTtfb = samples.reduce((a, b) => a + b.ttfbMs, 0) / samples.length;
    const avgTotal = samples.reduce((a, b) => a + b.totalMs, 0) / samples.length;

    const resources = extractResources(primarySample.html, TARGET_URL);
    console.log(`  └─ Found ${resources.length} unique resources in HTML for ${device}. Fetching asset details...`);

    const assetDetails = await Promise.all(
      resources.map((r) => fetchResourceDetails(r.url, ua))
    );

    const breakDown = {
      html: { count: 1, transferSize: primarySample.transferSize, uncompressedSize: primarySample.uncompressedSize },
      script: { count: 0, transferSize: 0, uncompressedSize: 0 },
      stylesheet: { count: 0, transferSize: 0, uncompressedSize: 0 },
      font: { count: 0, transferSize: 0, uncompressedSize: 0 },
      image: { count: 0, transferSize: 0, uncompressedSize: 0 },
      other: { count: 0, transferSize: 0, uncompressedSize: 0 }
    };

    let totalTransferBytes = primarySample.transferSize;
    let totalUncompressedBytes = primarySample.uncompressedSize;

    for (let i = 0; i < resources.length; i++) {
      const type = resources[i].type;
      const details = assetDetails[i];
      if (!breakDown[type]) breakDown[type] = { count: 0, transferSize: 0, uncompressedSize: 0 };
      breakDown[type].count += 1;
      breakDown[type].transferSize += details.transferBytes;
      breakDown[type].uncompressedSize += details.uncompressedBytes;
      totalTransferBytes += details.transferBytes;
      totalUncompressedBytes += details.uncompressedBytes;
    }

    results[device] = {
      statusCode: primarySample.statusCode,
      headers: primarySample.headers,
      timing: {
        dnsMs: avgDns,
        tcpMs: avgTcp,
        tlsMs: avgTls,
        ttfbMs: avgTtfb,
        totalMs: avgTotal
      },
      htmlTransferSize: primarySample.transferSize,
      htmlUncompressedSize: primarySample.uncompressedSize,
      contentEncoding: primarySample.contentEncoding,
      cacheControl: primarySample.cacheControl,
      server: primarySample.server,
      resourcesCount: resources.length + 1,
      totalTransferBytes,
      totalUncompressedBytes,
      breakDown,
      assetDetails
    };
  }

  console.log('\n================ AUDIT RESULTS JSON ================');
  console.log(JSON.stringify(results, null, 2));
}

runAudit().catch(console.error);
