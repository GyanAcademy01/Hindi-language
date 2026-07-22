import https from 'node:https';

const req = https.request('https://hindi-language.vercel.app/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept-Encoding': 'gzip, deflate, br'
  }
}, (res) => {
  const chunks = [];
  res.on('data', c => chunks.push(c));
  res.on('end', () => {
    // Note: Node automatically doesn't decompress unless using zlib or fetch with decompressed stream if raw https request
    console.log("Headers:", res.headers);
  });
});
req.end();
