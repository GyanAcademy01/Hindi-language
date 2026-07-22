export interface Topic {
  id: string;
  number: string;
  title: string;
  fullTitle: string;
  hasTheory: boolean;
  hasTest: boolean;
  pdfUrl?: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  topicCount: number;
  color: string;
  color2: string;
  description: string;
  folder: string;
  firstChapter: string;
  topics: Topic[];
}

export const subjects: Subject[] = [
  {
    id: 'std6',
    name: 'कक्षा 6',
    icon: '📖',
    topicCount: 16,
    color: '#3b82f6',
    color2: '#8b5cf6',
    description: 'सेमेस्टर 1 & 2 — दयालु शिकारी, एक जगत एक लोक...',
    folder: 'STD6',
    firstChapter: '01_STD6_Sem1_Ch01_दयालु-शिकारी.pdf',
    topics: [
      { id: "ch1", number: "1", title: "दयालु शिकारी", fullTitle: "01_STD6_Sem1_Ch01_दयालु-शिकारी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/01_STD6_Sem1_Ch01_दयालु-शिकारी.pdf" },
      { id: "ch2", number: "2", title: "एक जगत एक लोक", fullTitle: "02_STD6_Sem1_Ch02_एक-जगत-एक-लोक", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/02_STD6_Sem1_Ch02_एक-जगत-एक-लोक.pdf" },
      { id: "ch3", number: "3", title: "समझदार नन्ही", fullTitle: "03_STD6_Sem1_Ch03_समझदार-नन्ही", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/03_STD6_Sem1_Ch03_समझदार-नन्ही.pdf" },
      { id: "ch4", number: "4", title: "गिनती ५१ से १००", fullTitle: "04_STD6_Sem1_Ch04_गिनती-५१-से-१००", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/04_STD6_Sem1_Ch04_गिनती-५१-से-१००.pdf" },
      { id: "ch5", number: "5", title: "धरती को महकाएं", fullTitle: "05_STD6_Sem1_Ch05_धरती-को-महकाएं", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/05_STD6_Sem1_Ch05_धरती-को-महकाएं.pdf" },
      { id: "ch6", number: "6", title: "सुबह", fullTitle: "06_STD6_Sem1_Ch06_सुबह", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/06_STD6_Sem1_Ch06_सुबह.pdf" },
      { id: "ch7", number: "7", title: "बूझो तो जानें", fullTitle: "07_STD6_Sem1_Ch07_बूझो-तो-जानें", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/07_STD6_Sem1_Ch07_बूझो-तो-जानें.pdf" },
      { id: "ch8", number: "8", title: "राजा का हिस्सा", fullTitle: "08_STD6_Sem1_Ch08_राजा-का-हिस्सा", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/08_STD6_Sem1_Ch08_राजा-का-हिस्सा.pdf" },
      { id: "ch9", number: "9", title: "इतनी शक्ति हमें देना दाता", fullTitle: "09_STD6_Sem2_Ch01_इतनी-शक्ति-हमें-देना-दाता", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/09_STD6_Sem2_Ch01_इतनी-शक्ति-हमें-देना-दाता.pdf" },
      { id: "ch10", number: "10", title: "अनूठे इन्सान", fullTitle: "10_STD6_Sem2_Ch02_अनूठे-इन्सान", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/10_STD6_Sem2_Ch02_अनूठे-इन्सान.pdf" },
      { id: "ch11", number: "11", title: "जरा मुस्कुराइए", fullTitle: "11_STD6_Sem2_Ch03_जरा-मुस्कुराइए", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/11_STD6_Sem2_Ch03_जरा-मुस्कुराइए.pdf" },
      { id: "ch12", number: "12", title: "पुस्तक हमारी मित्र", fullTitle: "12_STD6_Sem2_Ch04_पुस्तक-हमारी-मित्र", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/12_STD6_Sem2_Ch04_पुस्तक-हमारी-मित्र.pdf" },
      { id: "ch13", number: "13", title: "जय विज्ञान की", fullTitle: "13_STD6_Sem2_Ch05_जय-विज्ञान-की", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/13_STD6_Sem2_Ch05_जय-विज्ञान-की.pdf" },
      { id: "ch14", number: "14", title: "न्याय", fullTitle: "14_STD6_Sem2_Ch06_न्याय", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/14_STD6_Sem2_Ch06_न्याय.pdf" },
      { id: "ch15", number: "15", title: "यह भी एक परिक्षा", fullTitle: "15_STD6_Sem2_Ch07_यह-भी-एक-परिक्षा", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD6/15_STD6_Sem2_Ch07_यह-भी-एक-परिक्षा.pdf" },
      { id: "megatest", number: "🏆", title: "Mega Test (महा टेस्ट)", fullTitle: "16_STD6_MegaTest", hasTheory: false, hasTest: true, pdfUrl: "/pdfs/STD6/16_STD6_MegaTest.pdf" },
    ]
  },
  {
    id: 'std7',
    name: 'कक्षा 7',
    icon: '📚',
    topicCount: 19,
    color: '#10b981',
    color2: '#06b6d4',
    description: 'सेमेस्टर 1 & 2 — चित्र के संग-संग, बेटी...',
    folder: 'STD7',
    firstChapter: '18_STD7_Sem1_Ch01_चित्र-के-संग-संग.pdf',
    topics: [
      { id: "ch1", number: "1", title: "चित्र के संग-संग", fullTitle: "18_STD7_Sem1_Ch01_चित्र-के-संग-संग", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/18_STD7_Sem1_Ch01_चित्र-के-संग-संग.pdf" },
      { id: "ch2", number: "2", title: "तब याद तुम्हारी आती है", fullTitle: "19_STD7_Sem1_Ch02_तब-याद-तुम्हारी-आती-है", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/19_STD7_Sem1_Ch02_तब-याद-तुम्हारी-आती-है.pdf" },
      { id: "ch3", number: "3", title: "कुत्ते की वफ़ादारी", fullTitle: "20_STD7_Sem1_Ch03_कुत्ते-की-वफ़ादारी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/20_STD7_Sem1_Ch03_कुत्ते-की-वफ़ादारी.pdf" },
      { id: "ch4", number: "4", title: "कथनी और करनी", fullTitle: "21_STD7_Sem1_Ch04_कथनी-और-करनी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/21_STD7_Sem1_Ch04_कथनी-और-करनी.pdf" },
      { id: "ch5", number: "5", title: "हिन्द देश के निवासी", fullTitle: "22_STD7_Sem1_Ch05_हिन्द-देश-के-निवासी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/22_STD7_Sem1_Ch05_हिन्द-देश-के-निवासी.pdf" },
      { id: "ch6", number: "6", title: "डॉ. विक्रम साराभाई", fullTitle: "23_STD7_Sem1_Ch06_डॉ-विक्रम-साराभाई", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/23_STD7_Sem1_Ch06_डॉ-विक्रम-साराभाई.pdf" },
      { id: "ch7", number: "7", title: "ढूंढते रह जाओगे", fullTitle: "24_STD7_Sem1_Ch07_ढूंढते-रह-जाओगे", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/24_STD7_Sem1_Ch07_ढूंढते-रह-जाओगे.pdf" },
      { id: "ch8", number: "8", title: "दोहा-अष्टक", fullTitle: "25_STD7_Sem1_Ch08_दोहा-अष्टक", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/25_STD7_Sem1_Ch08_दोहा-अष्टक.pdf" },
      { id: "ch9", number: "9", title: "समय-सारिणी", fullTitle: "34_STD7_Sem1_Ch09_समय-सारिणी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/34_STD7_Sem1_Ch09_समय-सारिणी.pdf" },
      { id: "ch10", number: "10", title: "अंदाज अपना-अपना", fullTitle: "35_STD7_Sem1_Ch10_अंदाज-अपना-अपना", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/35_STD7_Sem1_Ch10_अंदाज-अपना-अपना.pdf" },
      { id: "ch11", number: "11", title: "बेटी", fullTitle: "26_STD7_Sem2_Ch01_बेटी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/26_STD7_Sem2_Ch01_बेटी.pdf" },
      { id: "ch12", number: "12", title: "हम भी बनें महान", fullTitle: "27_STD7_Sem2_Ch02_हम-भी-बनें-महान", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/27_STD7_Sem2_Ch02_हम-भी-बनें-महान.pdf" },
      { id: "ch13", number: "13", title: "सच्चा हीरा", fullTitle: "28_STD7_Sem2_Ch03_सच्चा-हीरा", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/28_STD7_Sem2_Ch03_सच्चा-हीरा.pdf" },
      { id: "ch14", number: "14", title: "देश के नाम संदेश", fullTitle: "29_STD7_Sem2_Ch04_देश-के-नाम-संदेश", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/29_STD7_Sem2_Ch04_देश-के-नाम-संदेश.pdf" },
      { id: "ch15", number: "15", title: "धरती की शान", fullTitle: "30_STD7_Sem2_Ch05_धरती-की-शान", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/30_STD7_Sem2_Ch05_धरती-की-शान.pdf" },
      { id: "ch16", number: "16", title: "मालवजी फ़ौजदार", fullTitle: "31_STD7_Sem2_Ch06_मालवजी-फ़ौजदार", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/31_STD7_Sem2_Ch06_मालवजी-फ़ौजदार.pdf" },
      { id: "ch17", number: "17", title: "बढे कहानी", fullTitle: "32_STD7_Sem2_Ch07_बढे-कहानी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/32_STD7_Sem2_Ch07_बढे-कहानी.pdf" },
      { id: "ch18", number: "18", title: "मुस्कान के मोती", fullTitle: "33_STD7_Sem2_Ch08_मुस्कान-के-मोती", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD7/33_STD7_Sem2_Ch08_मुस्कान-के-मोती.pdf" },
      { id: "megatest", number: "🏆", title: "Mega Test (महा टेस्ट)", fullTitle: "36_STD7_MegaTest", hasTheory: false, hasTest: true, pdfUrl: "/pdfs/STD7/36_STD7_MegaTest.pdf" }
    ]
  },
  {
    id: 'std8',
    name: 'कक्षा 8',
    icon: '📕',
    topicCount: 19,
    color: '#8b5cf6',
    color2: '#ec4899',
    description: 'सेमेस्टर 1 & 2 — तेरी है जमीं, ईदगाह...',
    folder: 'STD8',
    firstChapter: '38_STD8_Sem1_Ch01_तेरी-है-जमीं.pdf',
    topics: [
      { id: "ch1", number: "1", title: "तेरी है जमीं", fullTitle: "38_STD8_Sem1_Ch01_तेरी-है-जमीं", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/38_STD8_Sem1_Ch01_तेरी-है-जमीं.pdf" },
      { id: "ch2", number: "2", title: "ईदगाह", fullTitle: "39_STD8_Sem1_Ch02_ईदगाह", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/39_STD8_Sem1_Ch02_ईदगाह.pdf" },
      { id: "ch3", number: "3", title: "अंतरिक्ष परी सुनीता विलियम्स", fullTitle: "40_STD8_Sem1_Ch03_अंतरिक्ष-परी-सुनीता-विलियम्स", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/40_STD8_Sem1_Ch03_अंतरिक्ष-परी-सुनीता-विलियम्स.pdf" },
      { id: "ch4", number: "4", title: "उठो धरा के अमर सपूतों", fullTitle: "41_STD8_Sem1_Ch04_उठो-धरा-के-अमर-सपूतों", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/41_STD8_Sem1_Ch04_उठो-धरा-के-अमर-सपूतों.pdf" },
      { id: "ch5", number: "5", title: "सवाल बालमन के जवाब डॉ. कलाम के", fullTitle: "42_STD8_Sem1_Ch05_सवाल-बालमन-के-जवाब-डॉ-कलाम-के", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/42_STD8_Sem1_Ch05_सवाल-बालमन-के-जवाब-डॉ-कलाम-के.pdf" },
      { id: "ch6", number: "6", title: "भरत", fullTitle: "43_STD8_Sem1_Ch06_भरत", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/43_STD8_Sem1_Ch06_भरत.pdf" },
      { id: "ch7", number: "7", title: "सोच अपनी-अपनी", fullTitle: "44_STD8_Sem1_Ch07_सोच-अपनी-अपनी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/44_STD8_Sem1_Ch07_सोच-अपनी-अपनी.pdf" },
      { id: "ch8", number: "8", title: "माँ कह एक कहानी", fullTitle: "45_STD8_Sem1_Ch08_माँ-कह-एक-कहानी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/45_STD8_Sem1_Ch08_माँ-कह-एक-कहानी.pdf" },
      { id: "ch9", number: "9", title: "ममता", fullTitle: "46_STD8_Sem1_Ch09_ममता", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/46_STD8_Sem1_Ch09_ममता.pdf" },
      { id: "ch10", number: "10", title: "पत्र एवं डायरी", fullTitle: "47_STD8_Sem2_Ch01_पत्र-एवं-डायरी", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/47_STD8_Sem2_Ch01_पत्र-एवं-डायरी.pdf" },
      { id: "ch11", number: "11", title: "कच्छ की सैर", fullTitle: "48_STD8_Sem2_Ch02_कच्छ-की-सैर", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/48_STD8_Sem2_Ch02_कच्छ-की-सैर.pdf" },
      { id: "ch12", number: "12", title: "मत बाँटो इन्सान को", fullTitle: "49_STD8_Sem2_Ch03_मत-बाँटो-इन्सान-को", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/49_STD8_Sem2_Ch03_मत-बाँटो-इन्सान-को.pdf" },
      { id: "ch13", number: "13", title: "कर्मयोगी लालबहादुर शास्त्री", fullTitle: "50_STD8_Sem2_Ch04_कर्मयोगी-लालबहादुर-शास्त्री", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/50_STD8_Sem2_Ch04_कर्मयोगी-लालबहादुर-शास्त्री.pdf" },
      { id: "ch14", number: "14", title: "दोहे", fullTitle: "51_STD8_Sem2_Ch05_दोहे", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/51_STD8_Sem2_Ch05_दोहे.pdf" },
      { id: "ch15", number: "15", title: "तूफ़ानों की ओर", fullTitle: "52_STD8_Sem2_Ch06_तूफ़ानों-की-और", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/52_STD8_Sem2_Ch06_तूफ़ानों-की-और.pdf" },
      { id: "ch16", number: "16", title: "हार की जीत", fullTitle: "53_STD8_Sem2_Ch07_हार-की-जित", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/53_STD8_Sem2_Ch07_हार-की-जित.pdf" },
      { id: "ch17", number: "17", title: "हँसना मना है", fullTitle: "54_STD8_Sem2_Ch08_हँसाना-मना-है", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/54_STD8_Sem2_Ch08_हँसाना-मना-है.pdf" },
      { id: "ch18", number: "18", title: "उलझन-सुलझन", fullTitle: "55_STD8_Sem2_Ch09_उलझन-सुलझन", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/STD8/55_STD8_Sem2_Ch09_उलझन-सुलझन.pdf" },
      { id: "megatest", number: "🏆", title: "Mega Test (महा टेस्ट)", fullTitle: "56_STD8_MegaTest", hasTheory: false, hasTest: true, pdfUrl: "/pdfs/STD8/56_STD8_MegaTest.pdf" }
    ]
  },
  {
    id: 'std9',
    name: 'कक्षा 9',
    icon: '📘',
    topicCount: 25,
    color: '#3b82f6',
    color2: '#10b981',
    description: 'सेमेस्टर 1 & 2 — आराधना, न्यायमंत्री...',
    folder: 'STD9',
    firstChapter: 'std9_Sem1_Ch01_आराधना',
    topics: [
      { id: "ch1", number: "1", title: "आराधना", fullTitle: "std9_Sem1_Ch01_आराधना", hasTheory: true, hasTest: true },
      { id: "ch2", number: "2", title: "न्यायमंत्री", fullTitle: "std9_Sem1_Ch02_न्यायमंत्री", hasTheory: true, hasTest: true },
      { id: "ch3", number: "3", title: "क्या निराश हुआ जाए", fullTitle: "std9_Sem1_Ch03_क्या-निराश-हुआ-जाए", hasTheory: true, hasTest: true },
      { id: "ch4", number: "4", title: "कर्ण का जीवनदर्शन", fullTitle: "std9_Sem1_Ch04_कर्ण-का-जीवनदर्शन", hasTheory: true, hasTest: true },
      { id: "ch5", number: "5", title: "स्वराज्य की नींव", fullTitle: "std9_Sem1_Ch05_स्वराज्य-की-नींव", hasTheory: true, hasTest: true },
      { id: "ch6", number: "6", title: "मेरी बीमारी श्यामा ने ली", fullTitle: "std9_Sem1_Ch06_मेरी-बीमारी-श्यामा-ने-ली", hasTheory: true, hasTest: true },
      { id: "ch7", number: "7", title: "सूरदास के पद", fullTitle: "std9_Sem1_Ch07_सूरदास-के-पद", hasTheory: true, hasTest: true },
      { id: "ch8", number: "8", title: "गुलमर्ग की खिड़की से एक रात", fullTitle: "std9_Sem1_Ch08_गुलमर्ग-की-खिड़की-से-एक-रात", hasTheory: true, hasTest: true },
      { id: "ch9", number: "9", title: "निर्भय बनो", fullTitle: "std9_Sem1_Ch09_निर्भय-बनो", hasTheory: true, hasTest: true },
      { id: "ch10", number: "10", title: "भारत गौरव", fullTitle: "std9_Sem1_Ch10_भारत-गौरव", hasTheory: true, hasTest: true },
      { id: "ch11", number: "11", title: "एक यात्रा यह भी", fullTitle: "std9_Sem1_Ch11_एक-यात्रा-यह-भी", hasTheory: true, hasTest: true },
      { id: "ch12", number: "12", title: "रानी", fullTitle: "std9_Sem1_Ch12_रानी", hasTheory: true, hasTest: true },
      { id: "ch13", number: "13", title: "नीति के दोहे", fullTitle: "std9_Sem2_Ch13_नीति-के-दोहे", hasTheory: true, hasTest: true },
      { id: "ch14", number: "14", title: "युग और मैं", fullTitle: "std9_Sem2_Ch14_युग-और-मैं", hasTheory: true, hasTest: true },
      { id: "ch15", number: "15", title: "दाज्यू", fullTitle: "std9_Sem2_Ch15_दाज्यू", hasTheory: true, hasTest: true },
      { id: "ch16", number: "16", title: "भारतीय संस्कृति में गुरु-शिष्य संबंध", fullTitle: "std9_Sem2_Ch16_भारतीय-संस्कृति-में-गुरु-शिष्य-संबंध", hasTheory: true, hasTest: true },
      { id: "ch17", number: "17", title: "तुलसी के पद", fullTitle: "std9_Sem2_Ch17_तुलसी-के-पद", hasTheory: true, hasTest: true },
      { id: "ch18", number: "18", title: "अँधेरी नगरी", fullTitle: "std9_Sem2_Ch18_अँधेरी-नगरी", hasTheory: true, hasTest: true },
      { id: "ch19", number: "19", title: "महाकवि कालिदास", fullTitle: "std9_Sem2_Ch19_महाकवि-कालिदास", hasTheory: true, hasTest: true },
      { id: "ch20", number: "20", title: "धरती की शान", fullTitle: "std9_Sem2_Ch20_धरती-की-शान", hasTheory: true, hasTest: true },
      { id: "ch21", number: "21", title: "क्रान्तिकारी शेखर का बचपन", fullTitle: "std9_Sem2_Ch21_क्रान्तिकारी-शेखर-का-बचपन", hasTheory: true, hasTest: true },
      { id: "ch22", number: "22", title: "वीरों का कैसा हो वसन्त?", fullTitle: "std9_Sem2_Ch22_वीरों-का-कैसा-हो-वसन्त", hasTheory: true, hasTest: true },
      { id: "ch23", number: "23", title: "जब मैंने पहली पुस्तक खरीदी", fullTitle: "std9_Sem2_Ch23_जब-मैंने-पहली-पुस्तक-खरीदी", hasTheory: true, hasTest: true },
      { id: "ch24", number: "24", title: "कबीर के दोहे", fullTitle: "std9_Sem2_Ch24_कबीर-के-दोहे", hasTheory: true, hasTest: true },
      { id: "megatest", number: "🏆", title: "Mega Test (महा टेस्ट)", fullTitle: "std9_MegaTest", hasTheory: false, hasTest: true }
    ]
  },
  {
    id: 'grammar',
    name: 'व्याकरण',
    icon: '✏️',
    topicCount: 16,
    color: '#f59e0b',
    color2: '#d946ef',
    description: 'वर्ण विचार, संधि, समास, काल, मुहावरे...',
    folder: 'Grammar',
    firstChapter: '58_Grammar_Ch01_वर्ण-विचार-एवं-उच्चारण.pdf',
    topics: [
      { id: "ch1", number: "1", title: "वर्ण विचार एवं उच्चारण", fullTitle: "58_Grammar_Ch01_वर्ण-विचार-एवं-उच्चारण", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/58_Grammar_Ch01_वर्ण-विचार-एवं-उच्चारण.pdf" },
      { id: "ch2", number: "2", title: "वर्तनी शुद्धि", fullTitle: "59_Grammar_Ch02_वर्तनी-शुद्धि", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/59_Grammar_Ch02_वर्तनी-शुद्धि.pdf" },
      { id: "ch3", number: "3", title: "संधि", fullTitle: "60_Grammar_Ch03_संधि", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/60_Grammar_Ch03_संधि.pdf" },
      { id: "ch4", number: "4", title: "उपसर्ग और प्रत्यय", fullTitle: "61_Grammar_Ch04_उपसर्ग-और-प्रत्यय", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/61_Grammar_Ch04_उपसर्ग-और-प्रत्यय.pdf" },
      { id: "ch5", number: "5", title: "समास", fullTitle: "62_Grammar_Ch05_समास", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/62_Grammar_Ch05_समास.pdf" },
      { id: "ch6", number: "6", title: "विकारी शब्द", fullTitle: "63_Grammar_Ch06_विकारी-शब्द", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/63_Grammar_Ch06_विकारी-शब्द.pdf" },
      { id: "ch7", number: "7", title: "अविकारी शब्द अव्यय और कारक विभक्ति", fullTitle: "64_Grammar_Ch07_अविकारी-शब्द-अव्यय-और-कारक-विभक्ति", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/64_Grammar_Ch07_अविकारी-शब्द-अव्यय-और-कारक-विभक्ति.pdf" },
      { id: "ch8", number: "8", title: "काल वाच्य और वाक्य के प्रकार", fullTitle: "65_Grammar_Ch08_काल-वाच्य-और-वाक्य-के-प्रकार", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/65_Grammar_Ch08_काल-वाच्य-और-वाक्य-के-प्रकार.pdf" },
      { id: "ch9", number: "9", title: "मुहावरे एवं लोकोक्तियाँ", fullTitle: "66_Grammar_Ch09_मुहावरे-एवं-लोकोक्तियाँ", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/66_Grammar_Ch09_मुहावरे-एवं-लोकोक्तियाँ.pdf" },
      { id: "ch10", number: "10", title: "हिंदी साहित्य का विस्तृत परिचय", fullTitle: "67_Grammar_Ch10_हिंदी-साहित्य-का-विस्तृत-परिचय", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/67_Grammar_Ch10_हिंदी-साहित्य-का-विस्तृत-परिचय.pdf" },
      { id: "ch11", number: "11", title: "शब्द भंडार", fullTitle: "68_Grammar_Ch11_शब्द-भंडार", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/68_Grammar_Ch11_शब्द-भंडार.pdf" },
      { id: "ch12", number: "12", title: "अपठित बोध", fullTitle: "69_Grammar_Ch12_अपठित-बोध", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/69_Grammar_Ch12_अपठित-बोध.pdf" },
      { id: "ch13", number: "13", title: "रस", fullTitle: "70_Grammar_Ch13_रस", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/70_Grammar_Ch13_रस.pdf" },
      { id: "ch14", number: "14", title: "अलंकार", fullTitle: "71_Grammar_Ch14_अलंकार", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/71_Grammar_Ch14_अलंकार.pdf" },
      { id: "ch15", number: "15", title: "छंद", fullTitle: "72_Grammar_Ch15_छंद", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/72_Grammar_Ch15_छंद.pdf" },
      { id: "ch16", number: "16", title: "पद परिचय एवं विशेष व्याकरण", fullTitle: "73_Grammar_Ch16_पद-परिचय-एवं-विशेष-व्याकरण", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Grammar/73_Grammar_Ch16_पद-परिचय-एवं-विशेष-व्याकरण.pdf" }
    ]
  },
  {
    id: 'padhtishastra',
    name: 'पद्धतिशास्त्र',
    icon: '🎓',
    topicCount: 9,
    color: '#ef4444',
    color2: '#f97316',
    description: 'सीखना और अधिग्रहण, भाषा शिक्षण...',
    folder: 'Padhtishastra',
    firstChapter: '74_Padhtishastra_Ch01_सीखना-और-अधिग्रहण',
    topics: [
      { id: "ch1", number: "1", title: "सीखना और अधिग्रहण", fullTitle: "74_Padhtishastra_Ch01_सीखना-और-अधिग्रहण", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Padhtishastra/74_Padhtishastra_Ch01_सीखना-और-अधिग्रहण.pdf" },
      { id: "ch2", number: "2", title: "भाषा शिक्षण के सिद्धान्त", fullTitle: "75_Padhtishastra_Ch02_भाषा-शिक्षण-के-सिद्धान्त", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Padhtishastra/75_Padhtishastra_Ch02_भाषा-शिक्षण-के-सिद्धान्त.pdf" },
      { id: "ch3", number: "3", title: "भाषा विकास में सुनने और बोलने की भूमिका", fullTitle: "76_Padhtishastra_Ch03_भाषा-विकास-में-सुनने-और-बोलने-की-भूमिका", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Padhtishastra/76_Padhtishastra_Ch03_भाषा-विकास-में-सुनने-और-बोलने-की-भूमिका.pdf" },
      { id: "ch4", number: "4", title: "व्याकरण शिक्षण", fullTitle: "77_Padhtishastra_Ch04_व्याकरण-शिक्षण", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Padhtishastra/77_Padhtishastra_Ch04_व्याकरण-शिक्षण.pdf" },
      { id: "ch5", number: "5", title: "विविध कक्षाओं में भाषा शिक्षण की चुनौतियाँ", fullTitle: "78_Padhtishastra_Ch05_विविध-कक्षाओं-में-भाषा-शिक्षण-की-चुनौतियाँ", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Padhtishastra/78_Padhtishastra_Ch05_विविध-कक्षाओं-में-भाषा-शिक्षण-की-चुनौतियाँ.pdf" },
      { id: "ch6", number: "6", title: "भाषा कौशल", fullTitle: "79_Padhtishastra_Ch06_भाषा-कौशल", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Padhtishastra/79_Padhtishastra_Ch06_भाषा-कौशल.pdf" },
      { id: "ch7", number: "7", title: "भाषा कौशल की समझ एवं मूल्यांकन", fullTitle: "80_Padhtishastra_Ch07_भाषा-कौशल-की-समझ-एवं-मूल्यांकन", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Padhtishastra/80_Padhtishastra_Ch07_भाषा-कौशल-की-समझ-एवं-मूल्यांकन.pdf" },
      { id: "ch8", number: "8", title: "शिक्षण अधिगम सहायक सामग्री", fullTitle: "81_Padhtishastra_Ch08_शिक्षण-अधिगम-सहायक-सामग्री", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Padhtishastra/81_Padhtishastra_Ch08_शिक्षण-अधिगम-सहायक-सामग्री.pdf" },
      { id: "ch9", number: "9", title: "उपचारात्मक शिक्षण", fullTitle: "82_Padhtishastra_Ch09_उपचारात्मक-शिक्षण", hasTheory: true, hasTest: true, pdfUrl: "/pdfs/Padhtishastra/82_Padhtishastra_Ch09_उपचारात्मक-शिक्षण.pdf" }
    ]
  },
];
