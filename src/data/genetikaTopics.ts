export interface GenetikaTopicSection {
  heading: string;
  content: string;
  highlights?: string[];
}

export interface GenetikaTopicTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface GenetikaKeyConcept {
  term: string;
  definition: string;
}

export interface GenetikaSelfCheck {
  question: string;
  answer: string;
}

export interface GenetikaPdfDocument {
  title: string;
  url: string;
  kind?: string;
}

export interface GenetikaTopic {
  id: string;
  order: number;
  code: string;
  topicLabel: string;
  module:
    | "I bo‘lim: Genetika va irsiylanish asoslari"
    | "II bo‘lim: Xromosoma nazariyasi va o‘zgaruvchanlik"
    | "III bo‘lim: Populyatsion va tibbiy genetika";
  title: string;
  syllabusPoints: string[];
  studyNotes: string;
  overview: string;
  sections: GenetikaTopicSection[];
  comparisonTable: GenetikaTopicTable;
  keyConcepts: GenetikaKeyConcept[];
  selfCheckQuestions: GenetikaSelfCheck[];
  keyTerms: string[];
  references: string;
  pdfUrl: string;
  pdfTitle: string;
  pdfDocuments?: GenetikaPdfDocument[];
}

export const GENETIKA_TOPICS: GenetikaTopic[] = [
  {
    id: "genetika-1",
    order: 1,
    code: "1",
    topicLabel: "1-mavzu",
    module: "I bo‘lim: Genetika va irsiylanish asoslari",
    title:
      "Genetika va genomika asoslari faniga kirish. Fanning predmeti, vazifalari, rivojlanishi va metodlari",
    syllabusPoints: [
      "Genetika va genomika asoslari fanining predmeti, maqsadi va vazifalari.",
      "Irsiyat va o‘zgaruvchanlik – fanning ikki asosiy tushunchasi.",
      "Genetikaning tabiiy fanlar tizimida tutgan o‘rni va bo‘limlari.",
      "Genetikaning rivojlanish tarixi va asosiy bosqichlari.",
      "Genetikaning tadqiqot metodlari; nazariy va amaliy ahamiyati.",
    ],
    studyNotes:
      "Irsiylanadigan narsa belgining o‘zi emas, balki genotip asosida muayyan reaksiya normasi doirasida shu belgini shakllantirish qobiliyatidir: Fenotip = Genotip + Tashqi muhit ta’siri.",
    overview:
      "Genetika organizmlarning irsiyati va o‘zgaruvchanligi qonuniyatlarini hamda ularni boshqarish usullarini o‘rganuvchi biologiya fanidir. Genomika esa XX asr oxirida shakllanib, alohida genni emas, balki organizmning butun genomini yaxlit tizim sifatida tadqiq etadi.",
    sections: [
      {
        heading: "1. Genetika va genomika fanining predmeti, maqsadi va vazifalari",
        content:
          "Genetikaning obyekti viruslar, bakteriyalar, zamburug‘lar, o‘simliklar, hayvonlar va odamdan iborat barcha tirik organizmlardir. Predmeti esa shu organizmlarda irsiy axborotning saqlanishi, avlodga uzatilishi, amalga oshirilishi va o‘zgarishi qonuniyatlaridir. Genetikaning bosh maqsadi belgilarning avlodlarda namoyon bo‘lishini oldindan raqamli bashorat qila olish (masalan, F₂ da 3:1 ajralish) va irsiyatni boshqarish imkoniyatini yaratishdir.",
        highlights: [
          "Strukturaviy genomika — genomning nukleotid ketma-ketligini aniqlash va xaritalash",
          "Funksional genomika — genlarning qachon, qayerda va qanday faollashishini o‘rganish",
          "Taqqoslama genomika — turli organizmlar genomini solishtirib, evolyutsion qarindoshlikni aniqlash",
          "C-qiymat paradoksi — genom hajmi va organizm murakkabligi o‘rtasida bevosita bog‘liqlik yo‘qligi",
        ],
      },
      {
        heading: "2. Irsiyat, o‘zgaruvchanlik va reaksiya normasi",
        content:
          "Irsiyat organizmlarning o‘z belgilari va rivojlanish xususiyatlarini avlodlarga uzatish qobiliyati bo‘lib, uning moddiy asosi DNK molekulasidagi nukleotidlar ketma-ketligidir. O‘zgaruvchanlik esa organizmlarning ota-onasidan va bir-biridan farq qilish qobiliyati bo‘lib, irsiy (genotipik: mutatsion va kombinativ) hamda irsiy bo‘lmagan (modifikatsion) turlarga bo‘linadi. Genotipning turli muhit sharoitlarida bera oladigan fenotiplar doirasi reaksiya normasi deyiladi.",
      },
      {
        heading: "3. Genetikaning bo‘limlari va model obyektlari",
        content:
          "Genetika sitologiya, biokimyo, molekulyar biologiya, evolyutsion ta’limot, matematika, tibbiyot va seleksiya bilan ikki tomonlama aloqada rivojlanadi. U klassik (mendel) genetika, sitogenetika, molekulyar genetika, populyatsion genetika, evolyutsion genetika, odam genetikasi hamda genomika bo‘limlarini o‘z ichiga oladi. Tadqiqotlar uchun tez ko‘payadigan, ko‘p avlod beradigan va aniq belgili model obyektlar (no‘xat, drozofila, E. coli, Arabidopsis thaliana, sichqon) tanlanadi.",
      },
      {
        heading: "4. Genetikaning rivojlanish bosqichlari va tadqiqot metodlari",
        content:
          "Genetika rivojlanishi to‘rt davrga bo‘linadi: I bosqich — klassik genetika (1865–1900; G. Mendel, 1900-yilda de Friz, Korrens va Chermak qayta kashfi, V. Betson); II bosqich — xromosoma nazariyasi (1900–1940; V. Iogansen, T. Morgan, G. Myoller, N. I. Vavilov, S. S. Chetverikov); III bosqich — molekulyar genetika (1944–1990; Everi–Mak-Leod–Mak-Karti, Uotson va Krik, Nirenberg, K. Myullis PZR); IV bosqich — genomika davri (1990-yildan; «Odam genomi», NGS va CRISPR-Cas9). Tadqiqotda gibridologik, sitogenetik, genealogik, egizaklar, populyatsion-statistik, biokimyoviy, molekulyar-genetik va biometrik metodlar qo‘llaniladi.",
      },
    ],
    comparisonTable: {
      title: "Genetikaning asosiy tadqiqot metodlari va qo‘llanilishi",
      columns: ["Metod", "Mohiyati", "Nimani aniqlaydi"],
      rows: [
        [
          "Gibridologik",
          "Ma’lum belgilari bo‘yicha farq qiluvchi organizmlarni chatishtirib, avlodlarni tahlil qilish",
          "Irsiylanish tipi, genlar soni, dominantlik",
        ],
        [
          "Sitogenetik",
          "Xromosomalarni mikroskopda o‘rganish, kariotip tuzish",
          "Xromosoma soni va tuzilishi buzilishlari",
        ],
        [
          "Genealogik",
          "Nasl-nasab (rodoslovnaya) tahlili",
          "Odamda irsiylanish tipi, kasallik xavfi",
        ],
        [
          "Egizaklar metodi",
          "Bir va ikki tuxumli egizaklarni taqqoslash",
          "Belgida irsiyat va muhit ulushi",
        ],
        [
          "Molekulyar-genetik",
          "PZR, sekvenlash, gibridizatsiya",
          "Nukleotid ketma-ketligi, aniq mutatsiya",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Genetika",
        definition:
          "Organizmlarning irsiyati va o‘zgaruvchanligi qonuniyatlarini hamda ularni boshqarish usullarini o‘rganuvchi biologiya fani.",
      },
      {
        term: "Genomika",
        definition:
          "Organizmning butun genomini — barcha genlari va boshqaruvchi ketma-ketliklarini yaxlit tizim sifatida o‘rganuvchi yo‘nalish.",
      },
      {
        term: "Reaksiya normasi",
        definition:
          "Genotipning turli muhit sharoitlarida bera oladigan fenotiplar doirasi (miqdoriy belgilarda keng, sifat belgilarda tor).",
      },
      {
        term: "Gibridologik metod",
        definition:
          "Toza liniyalarni aniq alternativ belgilar bo‘yicha chatishtirib, har bir avlodda alohida va statistik tahlil qilish usuli.",
      },
      {
        term: "C-qiymat paradoksi",
        definition:
          "Genom hajmi va organizm tuzilishining murakkabligi o‘rtasida to‘g‘ridan-to‘g‘ri bog‘liqlik yo‘qligi hodisasi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Genetika qaysi yilda mustaqil fan sifatida shakllangan deb hisoblanadi va «gen», «genotip», «fenotip» atamalarini kim kiritgan?",
        answer:
          "Genetika 1900-yilda Mendel qonunlarining G. de Friz, K. Korrens va E. Chermak tomonidan qayta kashf etilishi bilan shakllangan. «Gen», «genotip» va «fenotip» atamalarini 1909-yilda V. Iogansen kiritgan (1906-yilda V. Betson «genetika» atamasini taklif qilgan).",
      },
      {
        question:
          "Gibridologik metod ishonchli natija berishi uchun qanday 4 ta asosiy shart bajarilishi kerak?",
        answer:
          "1) Ota-ona shakllari toza liniya (gomozigota) bo‘lishi; 2) chatishtirish aniq farq qiluvchi alternativ belgilar bo‘yicha olib borilishi; 3) har bir avlodda belgilar alohida-alohida hisobga olinishi; 4) avlodlar soni statistik tahlilga yetarli darajada ko‘p bo‘lishi kerak.",
      },
      {
        question:
          "Odam genetikasida gibridologik metod o‘rnini asosan qaysi metod bosadi va seleksiya uchun reaksiya normasining ahamiyati nimada?",
        answer:
          "Odamda gibridologik metod o‘rnini asosan genealogik (shajara) metod bosadi. Reaksiya normasi keng bo‘lgan belgilarda (hosildorlik, sut miqdori) agrotexnika va parvarish katta samara bersa, reaksiya normasi tor belgilarda natijani faqat genotipni o‘zgartirish (chatishtirish va tanlash) orqali yaxshilash mumkin.",
      },
    ],
    keyTerms: [
      "Genetika",
      "Genomika",
      "Irsiyat",
      "O‘zgaruvchanlik",
      "Reaksiya normasi",
      "Gibridologik metod",
      "Model obyekt",
    ],
    references: "Genetika va genomika asoslari · 1-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/01-mavzu_Genetika_va_genomika_asoslari_faniga_kirish_61107b8f.pdf",
    pdfTitle:
      "1-mavzu: Genetika va genomika asoslari faniga kirish. Fanning predmeti, vazifalari, rivojlanishi va metodlari — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "1-mavzu: Genetika va genomika asoslari faniga kirish (Ma’ruza matni)",
        url: "/assets/aistudio/01-mavzu_Genetika_va_genomika_asoslari_faniga_kirish_61107b8f.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-2",
    order: 2,
    code: "2",
    topicLabel: "2-mavzu",
    module: "I bo‘lim: Genetika va irsiylanish asoslari",
    title:
      "Gen, genom va genetik tahlil haqida tushuncha. Transmission genetika va genlar tuzilishi",
    syllabusPoints: [
      "Gen haqidagi tasavvurlarning rivojlanishi va genning zamonaviy ta’rifi.",
      "Prokariot va eukariot organizmlarda gen tuzilishi.",
      "Genom tushunchasi, genom darajalari va genom tashkiloti.",
      "Transmission genetika: irsiy axborotning avlodga uzatilishi.",
      "Genetik tahlil: mohiyati, bosqichlari va usullari.",
    ],
    studyNotes:
      "Gen — ma’lum bir polipeptid yoki funksional RNK sintezi haqidagi axborotni saqlovchi va uning o‘qilishini ta’minlovchi boshqaruvchi ketma-ketliklarni o‘z ichiga olgan DNK bo‘lagidir.",
    overview:
      "Genetikaning markaziy tushunchasi bo‘lgan gen haqidagi tasavvur Mendelning «irsiy omili»dan zamonaviy DNKning funksional bo‘lagigacha rivojlandi. Eukariotlarda genlar alohida emas, ekzon-intronli tuzilishga ega bo‘lib, genom tizimi tarkibida faoliyat yuritadi.",
    sections: [
      {
        heading: "1. Genning zamonaviy ta’rifi va tasnifi",
        content:
          "Gen haqidagi tasavvurlar Mendel–Iogansen (bo‘linmas birlik), Morgan (xromosomadagi lokus), Bidl va Tatum («bir gen — bir ferment», keyinroq «bir gen — bir polipeptid») bosqichlaridan o‘tib, zamonaviy DNKning funksional bo‘lagi ta’rifiga keldi. Vazifasiga ko‘ra genlar strukturaviy, boshqaruvchi (regulyator), modifikator va letal genlarga bo‘linadi.",
        highlights: [
          "Lokus — genning xromosomadagi aniq o‘rni",
          "Allel — bitta genning gomologik xromosomalardagi muqobil shakllari",
          "Alternativ splaysing tufayli odamdagi ~20 ming gendan bir necha barobar ko‘p oqsil sintezlanadi",
        ],
      },
      {
        heading: "2. Prokariot va eukariotlarda gen tuzilishi",
        content:
          "Prokariotlarda genning kodlovchi ketma-ketligi uzluksiz (intronsiz) bo‘lib, promotor, operator, kodlovchi soha va terminatordan tashkil topadi hamda ko‘pincha operon tizimiga (masalan, lac-operon) birlashadi. Eukariot genlari esa ekzon (kodlovchi) va intron (pre-mRNK dan splaysingda kesib tashlanadigan) bo‘laklardan iborat mozaik tuzilishga ega bo‘lib, promotor, enhanser, silenser va poli-A signali bilan boshqariladi.",
      },
      {
        heading: "3. Genom tashkiloti va sitoplazmatik irsiyat",
        content:
          "Genom organizmning gaploid to‘plamidagi barcha DNK bo‘lib, nukleotid → kodon → gen → xromosoma → genom iyerarxik darajalaridan iborat. Eukariot genomi noyob ketma-ketliklar, o‘rtacha va yuqori takrorlanuvchi ketma-ketliklar, psevdogenlar hamda transpozonlardan tashkil topgan. Odam genomining atigi ~1,5% qismi oqsil kodlaydi. Mitoxondriya va xloroplast DNKsi esa ona tomonidan sitoplazmatik irsiylanishni ta’minlaydi.",
      },
      {
        heading: "4. Transmission genetika va genetik tahlil usullari",
        content:
          "Transmission genetika irsiy axborotning avlodlarga uzatilishini mitoz, meyoz, gametogenez va urug‘lanish asosida o‘rganadi. Geterozigota juftlar soni n bo‘lsa, organizm 2ⁿ xil gameta, 4ⁿ kombinatsiya va 3ⁿ genotip sinfi beradi. Genetik tahlil analiz chatishtirish (1:1 nisbat geterozigotalikni ko‘rsatadi), xi-kvadrat (χ² = Σ(O−E)²/E) statistik mezoni hamda PZR, sekvenlash, DNK-markerlar, GWAS va CRISPR usullarini qamrab oladi.",
      },
    ],
    comparisonTable: {
      title: "Prokariot va eukariot genlarining qiyosiy tavsifi",
      columns: ["Belgi", "Prokariotlar", "Eukariotlar"],
      rows: [
        ["Intronlar", "Yo‘q (kamdan-kam)", "Bor, ko‘pincha ekzondan uzun"],
        ["Operon", "Xos (masalan, lac-operon)", "Xos emas"],
        ["Transkripsiya joyi", "Sitoplazma", "Yadro"],
        ["Transkripsiya va translyatsiya", "Bir vaqtda kechadi", "Vaqt va makonda ajralgan"],
        ["mRNK ga ishlov", "Deyarli yo‘q", "Kepka, splaysing, poli-A dumi"],
        ["Genom hajmi", "Kichik (0,5–10 Mb)", "Katta (10 Mb – 100 Gb)"],
      ],
    },
    keyConcepts: [
      {
        term: "Operon",
        definition:
          "Prokariotlarda bitta metabolik yo‘lga tegishli genlarning yagona promotor va operator boshqaruvi ostida birlashishi.",
      },
      {
        term: "Ekzon va Intron",
        definition:
          "Eukariot genida ekzon — yetuk mRNK da qolib oqsilni kodlovchi bo‘lak; intron — splaysingda kesib tashlanadigan qism.",
      },
      {
        term: "Alternativ splaysing",
        definition:
          "Pre-mRNK ekzonlarining turlicha kombinatsiyada birlashishi natijasida bitta gendan bir necha xil oqsil hosil bo‘lishi.",
      },
      {
        term: "Analiz chatishtirish",
        definition:
          "Dominant fenotipli organizmning genotipini aniqlash uchun uni retsessiv gomozigota (aa) bilan chatishtirish usuli.",
      },
      {
        term: "Sitoplazmatik irsiyat",
        definition:
          "Mitoxondriya va plastidalar DNKsi orqali, asosan ona tuxum hujayrasi sitoplazmasi bilan barcha bolalarga uzatiladigan irsiyat.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Analiz chatishtirishda avlodda 1:1 nisbatda ajralish kuzatilsa, tekshirilayotgan organizmning genotipi qanday?",
        answer:
          "Tekshirilayotgan dominant fenotipli organizm geterozigota (Aa) hisoblanadi; agar avlod 100% bir xil dominant bo‘lsa, u gomozigota (AA) bo‘ladi.",
      },
      {
        question:
          "Odam genomida taxminan nechta oqsil kodlovchi gen bor va ular genomning necha foizini egallaydi?",
        answer:
          "Odam genomining umumiy hajmi ~3,2 mlrd juft nukleotid bo‘lib, taxminan ~20 000 ta oqsil kodlovchi gen mavjud va ular genomning atigi ~1,5% qismini tashkil etadi.",
      },
      {
        question:
          "Mitoxondrial kasallik nima uchun kasal otadan farzandlarga o‘tmaydi, kasal onadan esa barcha bolalarga o‘tadi?",
        answer:
          "Urug‘lanishda zigota sitoplazmasi va undagi mitoxondriyalar deyarli faqat tuxum hujayradan o‘tadi, spermatozoid mitoxondriyalari esa zigotaga kirmaydi.",
      },
    ],
    keyTerms: [
      "Lokus",
      "Ekzon",
      "Intron",
      "Operon",
      "Splaysing",
      "Transmission genetika",
      "Xi-kvadrat",
      "Psevdogen",
    ],
    references: "Genetika va genomika asoslari · 2-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/02-mavzu_Gen_genom_va_genetik_tahlil_genlar_tuzilishi_e99e0ca8.pdf",
    pdfTitle:
      "2-mavzu: Gen, genom va genetik tahlil haqida tushuncha. Transmission genetika va genlar tuzilishi — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "2-mavzu: Gen, genom va genetik tahlil haqida tushuncha (Ma’ruza matni)",
        url: "/assets/aistudio/02-mavzu_Gen_genom_va_genetik_tahlil_genlar_tuzilishi_e99e0ca8.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-3",
    order: 3,
    code: "3",
    topicLabel: "3-mavzu",
    module: "I bo‘lim: Genetika va irsiylanish asoslari",
    title:
      "Genetik xilma-xillik. DNK replikatsiyasi va rekombinatsiyasining molekulyar mexanizmlari, transduksiya va transpozitsiya",
    syllabusPoints: [
      "Genetik xilma-xillik: mohiyati, manbalari va biologik ahamiyati.",
      "DNK replikatsiyasining molekulyar mexanizmi.",
      "Genetik rekombinatsiya va uning turlari.",
      "Bakteriyalarda genetik materialning ko‘chishi: transformatsiya, konyugatsiya, transduksiya.",
      "Transpozitsiya va mobil genetik elementlar.",
    ],
    studyNotes:
      "DNK replikatsiyasi yarim konservativ tamoyil asosida 5′→3′ yo‘nalishda boradi; rekombinatsiya, gorizontal gen ko‘chishi va transpozonlar esa genetik xilma-xillikni doimiy yangilab turadi.",
    overview:
      "Hujayra irsiy axborotni yuqori aniqlikda nusxalash (replikatsiya) bilan birga mavjud genlarni qayta birlashtirish (rekombinatsiya) va gorizontal ko‘chirish orqali populyatsiyaning moslashuvchanligi hamda evolyutsion rivojlanishini ta’minlaydi.",
    sections: [
      {
        heading: "1. Genetik xilma-xillik manbalari va ahamiyati",
        content:
          "Genetik xilma-xillik mutatsiyalar, meyozdagi krossingover, xromosomalarning mustaqil taqsimlanishi, gametalarning tasodifiy uchrashuvi, gen oqimi va gorizontal gen uzatilishi hisobiga yuzaga keladi. Genetik jihatdan bir xil (monomorf) populyatsiyalar kasallik va iqlim o‘zgarishiga chidamsiz bo‘ladi (masalan, 1845-yil Irlandiya kartoshka ocharchiligi).",
      },
      {
        heading: "2. DNK replikatsiyasining molekulyar mexanizmi",
        content:
          "Meselson va Stal tajribasi (1958) DNK replikatsiyasining yarim konservativ ekanini isbotladi: har bir qiz DNK bitta ona va bitta yangi zanjirdan iborat. Replikatsiya initsiatsiya, elongatsiya va terminatsiya bosqichlaridan iborat. DNK-polimeraza faqat 5′→3′ yo‘nalishda ishlagani uchun yetakchi zanjir uzluksiz, orqada qoluvchi zanjir esa Okazaki fragmentlari holida sintezlanib ligaza bilan ulanadi.",
        highlights: [
          "Xelikaza qo‘sh spiralni ochadi, topoizomeraza burama zo‘riqishni yo‘qotadi, SSB-oqsillar zanjirlarni barqarorlashtiradi",
          "Primaza RNK-praymer sintezlaydi, DNK-polimeraza I praymerni DNK bilan almashtiradi",
          "Xatolik darajasi (~10⁻⁹) uch bosqichli nazorat va 3′→5′ korreksiya bilan ta’minlanadi",
          "Eukariot xromosoma uchlari telomeraza fermenti yordamida uzaytiriladi",
        ],
      },
      {
        heading: "3. Genetik rekombinatsiya va gorizontal gen uzatilishi",
        content:
          "Gomologik rekombinatsiyada RecA (Rad51) oqsili ishtirokida Xolliday xochsimon strukturasi hosil bo‘lib, rezolyutsiya natijasida krossingoverli yoki krossingoversiz mahsulotlar yuzaga keladi. Bakteriyalarda gorizontal gen uzatilishi uch usulda kechadi: transformatsiya (erkin DNKni qabul qilish — F. Griffit, 1928; Everi, 1944), konyugatsiya (F-plazmid va jinsiy pili orqali — Lederberg va Teytem, 1946) va transduksiya (bakteriofag vositasida — Zinder va Lederberg, 1952).",
      },
      {
        heading: "4. Transpozitsiya va mobil genetik elementlar",
        content:
          "Barbara Mak-Klintok makkajo‘xori donlarida kashf etgan transpozonlar genom ichida bir joydan ikkinchi joyga ko‘chib yura oladi. Ular IS-elementlar, murakkab transpozonlar (Tn), DNK-transpozonlar («kes va joylashtir») hamda RNK va teskari transkriptaza orqali ko‘chuvchi retrotranspozonlarga («nusxa ko‘chir va joylashtir») bo‘linadi. Odam genomining ~45% qismi mobil elementlar qoldig‘idan iborat.",
      },
    ],
    comparisonTable: {
      title: "Bakteriyalarda gorizontal gen uzatilishi usullarining qiyosi",
      columns: ["Usul", "Vosita", "Uzatiladigan material", "Kashf etgan olimlar"],
      rows: [
        ["Transformatsiya", "Erkin DNK", "Ixtiyoriy DNK bo‘lagi", "F. Griffit, 1928"],
        [
          "Konyugatsiya",
          "Jinsiy pili",
          "Plazmid yoki xromosoma qismi",
          "Lederberg va Teytem, 1946",
        ],
        [
          "Transduksiya",
          "Bakteriofag",
          "Fag kapsidiga sig‘adigan bo‘lak",
          "Zinder va Lederberg, 1952",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Yarim konservativ replikatsiya",
        definition:
          "Sintezlangan har bir qiz DNK molekulasida bitta eski (ona) va bitta yangi zanjirning saqlanishi tamoyili.",
      },
      {
        term: "Okazaki fragmentlari",
        definition:
          "Orqada qoluvchi zanjirda uzuq-uzuq sintezlanib, keyin DNK-ligaza bilan biriktiriladigan qisqa DNK bo‘laklari.",
      },
      {
        term: "Xolliday strukturasi",
        definition:
          "Gomologik rekombinatsiya va krossingover jarayonida ikki DNK molekulasi orasida hosil bo‘ladigan xochsimon oraliq tuzilma.",
      },
      {
        term: "Transduksiya",
        definition:
          "Bakteriofag yig‘ilishi paytida tasodifan bakteriya DNK bo‘lagini olib boshqa hujayraga ko‘chirishi (umumiy va maxsus turlari bor).",
      },
      {
        term: "Retrotranspozon",
        definition:
          "Avval RNKga transkripsiyalanib, so‘ng teskari transkriptaza yordamida DNK shaklida yangi joyga qo‘shiluvchi mobil element.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "DNK replikatsiyasida qo‘sh spiralni qaysi ferment ochadi va Okazaki fragmentlarini qaysi ferment birlashtiradi?",
        answer:
          "DNK qo‘sh spiralidagi vodorod bog‘larni xelikaza fermenti uzib ochadi; Okazaki fragmentlarini esa DNK-ligaza fermenti bir-biriga ulaydi.",
      },
      {
        question:
          "Antibiotiklarga chidamlilikning kasalxona ichida turli bakteriya turlariga tez tarqalishi qaysi jarayon bilan bog‘liq?",
        answer:
          "Chidamlilik genlari ko‘pincha R-plazmidlarda joylashgani uchun konyugatsiya va gorizontal gen uzatilishi orqali bir necha soat ichida turli mikrob turlariga tarqalishi mumkin.",
      },
      {
        question:
          "Barbara Mak-Klintok tomonidan kashf etilgan mobil genetik elementlar genomda qanday oqibatlarga olib kelishi mumkin?",
        answer:
          "Transpozon gen ichiga tushsa insersion mutatsiya va gen faoliyatining to‘xtashiga, promotor yaqiniga tushsa ekspressiya o‘zgarishiga, ikki nusxa orasidagi rekombinatsiya esa deletsiya, duplikatsiya yoki inversiyaga sabab bo‘ladi.",
      },
    ],
    keyTerms: [
      "Replikatsiya vilkasi",
      "Xelikaza",
      "Ligaza",
      "Okazaki fragmenti",
      "Xolliday strukturasi",
      "Transformatsiya",
      "Konyugatsiya",
      "Transduksiya",
      "Transpozon",
    ],
    references: "Genetika va genomika asoslari · 3-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/03-mavzu_DNK_replikatsiyasi_va_rekombinatsiyasi_trans_cbd61eef.pdf",
    pdfTitle:
      "3-mavzu: Genetik xilma-xillik. DNK replikatsiyasi va rekombinatsiyasining molekulyar mexanizmlari, transduksiya va transpozitsiya — Ma’ruza matni",
    pdfDocuments: [
      {
        title:
          "3-mavzu: DNK replikatsiyasi, rekombinatsiya, transduksiya va transpozitsiya (Ma’ruza matni)",
        url: "/assets/aistudio/03-mavzu_DNK_replikatsiyasi_va_rekombinatsiyasi_trans_cbd61eef.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-4",
    order: 4,
    code: "4",
    topicLabel: "4-mavzu",
    module: "I bo‘lim: Genetika va irsiylanish asoslari",
    title: "Bir gen allellarining o‘zaro ta’sirida belgilarning irsiylanishi",
    syllabusPoints: [
      "Mendel tajribalari va monoduragay chatishtirish qonuniyatlari.",
      "To‘liq dominantlik holati; dominantlikning molekulyar asoslari.",
      "To‘liqsiz dominantlik va kodominantlik.",
      "Seriya (ko‘p) allellik va uning genetik ahamiyati.",
      "Letal allellar va ajralish nisbatlarining o‘zgarishi.",
    ],
    studyNotes:
      "Bir gen allellarining o‘zaro ta’siri to‘liq dominantlik (3:1), to‘liqsiz dominantlik (1:2:1), kodominantlik (AB0 tizimi), seriya allellik va letal allellar (2:1) kabi aniq ajralish nisbatlarini beradi.",
    overview:
      "Gregor Mendel no‘xat ustidagi monoduragay tajribalari bilan bir xillik, ajralish va gametalar sofligi qonuniyatlarini ochdi. Keyingi tadqiqotlar dominantlik mutlaq emasligini, to‘liqsiz dominantlik, kodominantlik, ko‘p allellik hamda letal allellar tufayli klassik nisbatlar o‘zgarishini isbotladi.",
    sections: [
      {
        heading: "1. Mendelning monoduragay chatishtirish qonunlari",
        content:
          "G. Mendel (1856–1863) toza liniyali ekma no‘xat (Pisum sativum) ustida yetti juft alternativ belgini kuzatib, ikki asosiy qonunni kashf etdi: I qonun — F₁ duragaylarining bir xilligi qonuni (AA × aa → barcha Aa); II qonun — F₂ da belgilarning ajralish qonuni (fenotip bo‘yicha 3:1, genotip bo‘yicha 1 AA : 2 Aa : 1 aa). Bu qonuniyat meyozda gomologik xromosomalarning ajralishi (gametalar sofligi gipotezasi) bilan izohlanadi.",
      },
      {
        heading: "2. To‘liq dominantlikning molekulyar asoslari, penetrantlik va ekspressivlik",
        content:
          "Ko‘pincha dominant allel faol ferment sintezini ta’minlaydi: bitta faol allel normal fenotip uchun kifoya bo‘lsa gaplo-yetarlilik (nuqson retsessiv), yetmasa gaplo-yetarsizlik (nuqson dominant), nuqsonli oqsil normalini ham buzsa dominant-negativ ta’sir kuzatiladi. Penetrantlik gen mavjud shaxslarning necha foizida belgi namoyon bo‘lishini, ekspressivlik esa belgining kuchli yoki kuchsiz ifodalanish darajasini ko‘rsatadi.",
      },
      {
        heading: "3. To‘liqsiz dominantlik va kodominantlik",
        content:
          "To‘liqsiz dominantlikda (namozshomgul guli rangi) geterozigota Aa ikki gomozigota orasidagi oraliq fenotipni (pushti) beradi va F₂ da fenotip ham, genotip ham 1:2:1 nisbatda ajraladi. Kodominantlikda esa (odamning AB0 tizimida IᴬIᴮ yoki shorthorn qoramolida chipor rang) geterozigotada ikkala allel ham aralashmasdan, mustaqil va to‘liq namoyon bo‘ladi.",
      },
      {
        heading: "4. Seriya allellik va letal allellar",
        content:
          "Seriya allellikda bitta genning populyatsiyada ikkitadan ortiq alleli uchraydi (masalan, odamda Iᴬ, Iᴮ, i; quyonda C > c^ch > c^h > c). Agar populyatsiyada n ta allel bo‘lsa, diploidlarda n(n+1)/2 ta genotip hosil bo‘ladi. Letal allellar esa gomozigota holatda organizmni nobud qiladi (sariq sichqonlar A^Y A^Y, qorako‘l qo‘ylarida shirazi qo‘zilar) va F₂ dagi 3:1 nisbatni 2:1 ga o‘zgartiradi.",
        highlights: [
          "To‘liq letal — gomozigotalarning 100% nobud bo‘lishi",
          "Yarim letal (subletal) — yashovchanlik keskin pasayishi",
          "Shartli letal — faqat ma’lum harorat yoki muhitda o‘ldirishi",
          "Dominant letal — geterozigotada ham o‘ldirib, populyatsiyadan tez yo‘qolishi",
        ],
      },
    ],
    comparisonTable: {
      title: "Bir gen allellarining o‘zaro ta’sir turlari va F₂ nisbatlari",
      columns: ["Ta’sir turi", "Geterozigota fenotipi", "F₂ fenotip ajralishi", "Misol"],
      rows: [
        ["To‘liq dominantlik", "Dominant gomozigota kabi", "3 : 1", "No‘xat urug‘i rangi"],
        ["To‘liqsiz dominantlik", "Oraliq belgi", "1 : 2 : 1", "Namozshomgul guli rangi"],
        ["Kodominantlik", "Ikkala belgi birga mustaqil", "1 : 2 : 1", "AB0 qon guruhi (IᴬIᴮ)"],
        [
          "Retsessiv letal allel",
          "Tirik (dominant belgili)",
          "2 : 1",
          "Sariq sichqonlar, shirazi qo‘ylar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Gametalar sofligi qonuni",
        definition:
          "Geterozigota organizmda allellar aralashib ketmay, gameta hosil bo‘lishida har bir gametaga juftning faqat bittasi toza holda o‘tishi.",
      },
      {
        term: "Kodominantlik",
        definition:
          "Geterozigotada bitta genning ikkala alleli ham bir-birini bosmasdan, to‘liq va mustaqil namoyon bo‘lishi.",
      },
      {
        term: "Seriya allellik",
        definition:
          "Bitta genning mutatsiyalar natijasida populyatsiyada ikkitadan ortiq muqobil allel shakliga ega bo‘lishi.",
      },
      {
        term: "Penetrantlik",
        definition:
          "Muayyan genotipga ega shaxslarning necha foizida tegishli belgining fenotipda namoyon bo‘lish ko‘rsatkichi.",
      },
      {
        term: "Letal allel",
        definition:
          "Asosan gomozigota (ba’zan geterozigota) holatda organizmning rivojlanishini to‘xtatib, nobud bo‘lishiga olib keluvchi allel.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "To‘liqsiz dominantlik va kodominantlikni bir-biridan qanday mezon bilan ajratamiz?",
        answer:
          "To‘liqsiz dominantlikda geterozigotada ikki belgi orasida aralashgan oraliq belgi hosil bo‘ladi (qizil × oq → pushti), kodominantlikda esa ikkala belgi ham alohida va to‘liq namoyon bo‘ladi (IV qon guruhi eritrotsitlarida A va B antigenlari birga).",
      },
      {
        question:
          "Nima uchun shirazi rangli qorako‘l qo‘ylaridan o‘zaro chatishtirish orqali toza shirazi liniya olib bo‘lmaydi?",
        answer:
          "Shirazi rang geterozigota holatiga bog‘liq bo‘lib, uning dominant alleli yashovchanlik bo‘yicha retsessiv letaldir; shu sababli gomozigota qo‘zilar oshqozon-ichak nuqsoni bilan nobud bo‘ladi va avlodda 2 shirazi : 1 qora ajralish kuzatiladi.",
      },
      {
        question:
          "Seriya allellikda populyatsiyada n = 4 ta allel bo‘lsa, diploid organizmlarda nechta turli genotip bo‘lishi mumkin?",
        answer:
          "n(n+1)/2 formulasiga ko‘ra 4·5/2 = 10 ta turli genotip (4 ta gomozigota va 6 ta geterozigota) hosil bo‘ladi.",
      },
    ],
    keyTerms: [
      "Monoduragay chatishtirish",
      "To‘liq dominantlik",
      "To‘liqsiz dominantlik",
      "Kodominantlik",
      "Seriya allellik",
      "Letal gen",
      "Penetrantlik",
      "Ekspressivlik",
    ],
    references: "Genetika va genomika asoslari · 4-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/04-mavzu_Allel_genlarning_o_zaro_ta_siri_va_belgilarn_ad24a5cf.pdf",
    pdfTitle:
      "4-mavzu: Bir gen allellarining o‘zaro ta’sirida belgilarning irsiylanishi — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "4-mavzu: Bir gen allellarining o‘zaro ta’siri (Ma’ruza matni)",
        url: "/assets/aistudio/04-mavzu_Allel_genlarning_o_zaro_ta_siri_va_belgilarn_ad24a5cf.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-5",
    order: 5,
    code: "5",
    topicLabel: "5-mavzu",
    module: "I bo‘lim: Genetika va irsiylanish asoslari",
    title:
      "Genlarning komplementar, epistatik va polimer ta’siri. Strukturaviy va modifikatsion genlar",
    syllabusPoints: [
      "Allel bo‘lmagan genlarning o‘zaro ta’siri haqida umumiy tushuncha.",
      "Komplementar (to‘ldiruvchi) ta’sir va uning ajralish nisbatlari.",
      "Epistaz: dominant va retsessiv epistaz.",
      "Polimer ta’sir haqida dastlabki tushuncha.",
      "Strukturaviy, boshqaruvchi va modifikator genlar; pleyotropiya.",
    ],
    studyNotes:
      "Allel bo‘lmagan genlar o‘zaro ta’sirida F₂ dagi jami 16 ulush saqlanadi, ammo 9:3:3:1 nisbati komplementarlik (9:7, 9:3:4, 9:6:1), epistaz (12:3:1, 13:3, 9:3:4) va polimeriya (15:1, 1:4:6:4:1) ko‘rinishida o‘zgaradi.",
    overview:
      "Aksariyat belgilar bitta gen bilan emas, balki ketma-ket biokimyoviy reaksiyalar zanjirida qatnashuvchi bir necha allel bo‘lmagan genlar tizimi orqali shakllanadi. Bu esa komplementarlik, epistaz, polimeriya, modifikator ta’sir va pleyotropiya hodisalarini yuzaga keltiradi.",
    sections: [
      {
        heading: "1. Allel bo‘lmagan genlar ta’siri va biokimyoviy asos",
        content:
          "Turli lokuslarda joylashgan genlarning bitta belgi shakllanishida birgalikda qatnashishi allel bo‘lmagan genlar o‘zaro ta’siri deyiladi. Diduragay chatishtirishda F₂ bo‘yicha 16 ta kombinatsiya saqlanib qolsa-da, fenotipik sinflar nisbati 9:3:3:1 dan farqlanadi. Ikki bosqichli pigment sintezida A va B fermentlaridan biri yetishmasa komplementarlik, bir gen mahsuloti boshqasini to‘ssa epistaz, bir nechta gen bir yo‘nalishda ta’sir etsa polimeriya yuzaga keladi.",
      },
      {
        heading: "2. Komplementar (to‘ldiruvchi) ta’sir",
        content:
          "Komplementarlikda ikki dominant allelning birgalikda bo‘lishi (A_B_) har biri alohida bera olmaydigan yangi belgini beradi. Masalan, xushbo‘y no‘xatning ikki oq gulli liniyasi (AAbb × aaBB) F₁ da qizil gul (AaBb), F₂ da esa 9 qizil : 7 oq nisbatini beradi. Genlardan biri alohida ham ta’sir qilsa 9:3:4, ikkalasi alohida bir xil oraliq belgi bersa (qovoq shakli) 9:6:1 nisbat kuzatiladi. Tovuqlarda toj shakli R va P genlari bilan 9:3:3:1 (yong‘oqsimon, atirgulsimon, no‘xatsimon, oddiy) nisbatda ajraladi.",
      },
      {
        heading: "3. Epistaz va Bombay fenomeni",
        content:
          "Epistazda bostiruvchi gen (epistatik/supressor) boshqa gen (gipostatik) namoyon bo‘lishiga to‘sqinlik qiladi. Dominant epistazda F₂ da 12:3:1 (qovoq rangi) yoki 13:3 (tovuq pat rangi) nisbati chiqadi. Retsessiv epistazda esa aa (yoki cc) gomozigotasi boshqa gen ta’sirini to‘sadi (9:3:4). Odamdagi Bombay fenomeni retsessiv epistazning klassik misolidir: hh genotipli shaxslarda H-modda sintezlanmagani uchun Iᴬ yoki Iᴮ allellari bo‘lsa ham qon guruhi I (0) ko‘rinadi.",
      },
      {
        heading: "4. Polimeriya, genlar tasnifi va pleyotropiya",
        content:
          "Polimeriyada bir xil yo‘nalishda ta’sir etuvchi polimer genlar (A₁, A₂) nokumulyativ (15:1 — cho‘pon hamyonchasi mevasi) va kumulyativ (1:4:6:4:1 — bug‘doy doni rangi) bo‘ladi. Vazifasiga ko‘ra genlar strukturaviy, boshqaruvchi (regulyator) va modifikator genlarga bo‘linadi. Bitta genning bir necha belgiga ta’sir etishi pleyotropiya deyiladi (Marfan sindromi, fenilketonuriya, o‘roqsimon-hujayrali anemiya).",
      },
    ],
    comparisonTable: {
      title: "Allel bo‘lmagan genlar o‘zaro ta’sirida F₂ ajralish nisbatlari",
      columns: ["Ta’sir turi", "F₂ nisbati", "Mohiyati"],
      rows: [
        ["Mustaqil (ta’sirsiz)", "9 : 3 : 3 : 1", "Har bir gen o‘z belgisini mustaqil beradi"],
        ["Komplementarlik", "9 : 7", "Faqat A_B_ genotipi yangi belgini beradi"],
        ["Komplementarlik", "9 : 6 : 1", "Alohida genlar bir xil oraliq belgi beradi"],
        [
          "Dominant epistaz",
          "12 : 3 : 1 / 13 : 3",
          "Dominant allel boshqa gen ta’sirini bostiradi",
        ],
        ["Retsessiv epistaz", "9 : 3 : 4", "Retsessiv gomozigota (aa yoki hh) bostiradi"],
        [
          "Polimeriya (kumulyativ)",
          "1 : 4 : 6 : 4 : 1",
          "Belgi darajasi dominant allellar soniga bog‘liq",
        ],
        [
          "Polimeriya (nokumulyativ)",
          "15 : 1",
          "Belgi namoyon bo‘lishi uchun bitta dominant allel yetarli",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Komplementarlik",
        definition:
          "Ikki yoki undan ortiq allel bo‘lmagan dominant allellarning birgalikda yangi, alohida bera olmaydigan belgini hosil qilishi.",
      },
      {
        term: "Epistaz (supressor gen)",
        definition:
          "Bir gen allellarining boshqa lokusdagi gipostatik gen allellari namoyon bo‘lishini bostirishi.",
      },
      {
        term: "Bombay fenomeni",
        definition:
          "Odamda hh retsessiv gomozigotasi H-modda hosil qilolmagani sababli Iᴬ va Iᴮ allellarining namoyon bo‘lmay qolishi (retsessiv epistaz).",
      },
      {
        term: "Pleyotropiya",
        definition:
          "Bitta gen mahsuloti organizmning turli jarayonlarida qatnashgani uchun bir necha belgiga bir vaqtda ta’sir ko‘rsatishi.",
      },
      {
        term: "Modifikator gen",
        definition:
          "Mustaqil belgi bermay, asosiy gen belgisining namoyon bo‘lish darajasini kuchaytiruvchi yoki susaytiruvchi gen.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Komplementatsiya testi genetik tahlilda qanday savolga javob beradi?",
        answer:
          "Ikki retsessiv mutant organizm chatishtirilganda F₁ da normal fenotip tiklansa, mutatsiyalar turli genlarda (komplementar); tiklanmasa — bitta gendagi allellarda joylashganini ko‘rsatadi.",
      },
      {
        question: "Nima uchun pleyotropiya amaliy seleksiyada ehtiyotkorlikni talab qiladi?",
        answer:
          "Pleyotropiya tufayli bitta foydali xo‘jalik belgisini kuchaytirishga qaratilgan tanlov bir vaqtning o‘zida boshqa belgining (masalan, suyak-mushak tizimi yoki hayotchanlikning) yomonlashishiga olib kelishi mumkin.",
      },
      {
        question:
          "Komplementarlik va retsessiv epistazning ikkalasida ham 9:3:4 nisbat uchrashi mumkin; ularni qanday ajratish mumkin?",
        answer:
          "Ularning biokimyoviy yo‘lini tahlil qilish orqali ajratiladi: komplementarlikda ikki gen birgalikda yangi mahsulot hosil qiladi, epistazda esa yuqori bosqich genining retsessiv gomozigotasi keyingi bosqichni butunlay to‘sib qo‘yadi.",
      },
    ],
    keyTerms: [
      "Allel bo‘lmagan genlar",
      "Komplementarlik",
      "Epistaz",
      "Bombay fenomeni",
      "Supressor gen",
      "Polimeriya",
      "Pleyotropiya",
      "Modifikator gen",
    ],
    references: "Genetika va genomika asoslari · 5-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/05-mavzu_Allel_bo_lmagan_genlarning_o_zaro_ta_siri_4ec1fd10.pdf",
    pdfTitle:
      "5-mavzu: Genlarning komplementar, epistatik va polimer ta’siri. Strukturaviy va modifikatsion genlar — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "5-mavzu: Genlarning komplementar, epistatik va polimer ta’siri (Ma’ruza matni)",
        url: "/assets/aistudio/05-mavzu_Allel_bo_lmagan_genlarning_o_zaro_ta_siri_4ec1fd10.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-6",
    order: 6,
    code: "6",
    topicLabel: "6-mavzu",
    module: "I bo‘lim: Genetika va irsiylanish asoslari",
    title:
      "Polimeriya. Miqdor belgilar genetikasi. Kumulyativ va nokumulyativ polimeriya. Transgressiya",
    syllabusPoints: [
      "Sifat va miqdoriy belgilar; miqdoriy belgilarning o‘ziga xosligi.",
      "Polimeriya: kumulyativ va nokumulyativ turlari.",
      "Miqdoriy belgilarni biometrik tahlil qilish usullari.",
      "Irsiylanish koeffitsiyenti va uning seleksiyadagi ahamiyati.",
      "Transgressiya: ijobiy va salbiy transgressiya.",
    ],
    studyNotes:
      "Miqdoriy belgilar poligen (kumulyativ polimer) asosga ega bo‘lib, o‘rtacha arifmetik (M), dispersiya (σ²), variatsiya koeffitsiyenti (Cv), irsiylanish koeffitsiyenti (h² = σ²G/σ²P) va seleksiya samarasi (R = h²·S) bilan tahlil qilinadi.",
    overview:
      "Hosildorlik, bo‘y, sut miqdori va tola uzunligi kabi iqtisodiy muhim belgilar uzluksiz variatsiyalanadi. Nilson-Ele va Ist tajribalari bu belgilar ham Mendel qonunlariga bo‘ysunishini, faqat ko‘p sonli polimer genlarning jamlanuvchi ta’siri va tashqi muhit bilan shakllanishini isbotladi.",
    sections: [
      {
        heading: "1. Sifat, miqdoriy va chegaraviy belgilar",
        content:
          "Sifat belgilari (qon guruhi, gul rangi) diskret bo‘lib, 1–2 gen bilan boshqariladi va sanash orqali baholanadi. Miqdoriy belgilar esa uzluksiz oraliq qiymatlarga ega, poligen tizimlar (QTL) va muhit ta’sirida shakllanadi hamda normal taqsimot beradi. Oraliq guruh — chegaraviy (thresholdli) belgilar poligen asosga ega bo‘lsa-da, ma’lum chegara oshilganda fenotipda «bor/yo‘q» shaklida namoyon bo‘ladi (masalan, 2-tip diabet).",
      },
      {
        heading: "2. Kumulyativ va nokumulyativ polimeriya",
        content:
          "Nokumulyativ polimeriyada bitta dominant allel yetarli bo‘lib, F₂ da 15:1 nisbati olinadi (cho‘pon hamyonchasi mevasi). Kumulyativ polimeriyada esa belgi darajasi dominant allellar soniga proporsional ortadi: ikki genli tizimda F₂ taqsimoti 1:4:6:4:1 (5 sinf), umumiy holda n ta gen uchun 2n + 1 ta fenotip sinfi va (1/4)ⁿ ekstremal sinf ulushi kuzatiladi.",
      },
      {
        heading: "3. Biometrik tahlil va irsiylanish koeffitsiyenti (h²)",
        content:
          "Miqdoriy belgilarni o‘rganishda variatsion qator, o‘rtacha arifmetik (M = Σx/n), dispersiya (σ²), standart og‘ish (σ), variatsiya koeffitsiyenti (Cv = σ/M · 100%) va korrelyatsiya koeffitsiyenti (r) hisoblanadi. Fenotipik dispersiya genotipik va muhit dispersiyalari yig‘indisiga teng: σ²P = σ²G + σ²E. Irsiylanish koeffitsiyenti h² = σ²G/σ²P bo‘lib, seleksiya samarasi R = h² · S formulasi bilan bashorat qilinadi.",
      },
      {
        heading: "4. Ijobiy va salbiy transgressiya",
        content:
          "Transgressiya — F₂ va keyingi duragay avlodlarda belgining ikkala ota-ona ko‘rsatkichidan yuqori (ijobiy) yoki past (salbiy) bo‘lib chiqishi. U fenotip jihatdan o‘xshash, ammo ijobiy polimer allellari turli lokuslarda joylashgan ota-onalar (A₁A₁a₂a₂ × a₁a₁A₂A₂) chatishtirilganda yuzaga keladi. Geterozisdan farqli ravishda transgressiv shakllar gomozigota holatga keltirilsa, avlodlarda barqaror saqlanadi va yangi nav yaratishga asos bo‘ladi.",
      },
    ],
    comparisonTable: {
      title: "Transgressiya va geterozisning qiyosiy tavsifi",
      columns: ["Mezon", "Transgressiya", "Geterozis"],
      rows: [
        ["Qaysi bo‘g‘inda namoyon bo‘ladi", "F₂ va keyingi avlodlarda", "Asosan F₁ bo‘g‘inda"],
        ["Genotip holati", "Gomozigota bo‘lishi mumkin", "Geterozigotalikka bog‘liq"],
        ["Avlodga uzatilishi", "Barqaror mustahkamlanadi", "Keyingi bo‘g‘inlarda pasayadi"],
        [
          "Seleksion qiymati",
          "Yangi barqaror navlar yaratish",
          "Duragay urug‘chilikda foydalanish",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Kumulyativ polimeriya",
        definition:
          "Belgining namoyon bo‘lish darajasi genotipdagi dominant polimer allellarning umumiy soniga proporsional ortib boradigan ta’sir turi.",
      },
      {
        term: "Variatsiya koeffitsiyenti (Cv)",
        definition:
          "Standart og‘ishning o‘rtacha arifmetik qiymatga foizdagi nisbati; Cv > 20% bo‘lganda tanlov uchun material yetarlicha xilma-xil hisoblanadi.",
      },
      {
        term: "Irsiylanish koeffitsiyenti (h²)",
        definition:
          "Muayyan populyatsiya va sharoitda umumiy fenotipik o‘zgaruvchanlikning genotip hissasiga to‘g‘ri keladigan ulushi (0 dan 1 gacha).",
      },
      {
        term: "Seleksiya samarasi (R)",
        definition:
          "Tanlangan ota-onalar (tanlov differensiali S) hisobiga keyingi avlodda o‘rtacha ko‘rsatkichning siljishi: R = h² · S.",
      },
      {
        term: "Transgressiya",
        definition:
          "Turli lokuslardagi ijobiy polimer allellarning F₂ da qo‘shilishi natijasida belgining ikkala ota-onadan ham oshib ketishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Podada o‘rtacha sut miqdori 4200 kg, tanlangan 50 ta sigirning o‘rtacha ko‘rsatkichi 5400 kg va h² = 0,25 bo‘lsa, seleksiya samarasi R va yangi avlod o‘rtachasi qancha bo‘ladi?",
        answer:
          "Tanlov differensiali S = 5400 − 4200 = 1200 kg. Seleksiya samarasi R = 0,25 · 1200 = 300 kg. Yangi avlodda kutilgan o‘rtacha sut miqdori 4200 + 300 = 4500 kg bo‘ladi.",
      },
      {
        question:
          "4 ta polimer gen ishtirok etganda F₂ da nechta fenotip sinfi hosil bo‘ladi va maksimal transgressiv genotipning ehtimoli qancha?",
        answer:
          "Fenotip sinflari soni 2n + 1 = 2(4) + 1 = 9 ta; barcha 8 ta dominant allelning bitta organizmda to‘planish ehtimoli (1/4)⁴ = 1/256 ga teng.",
      },
      {
        question:
          "Nima uchun bir populyatsiyada h² yuqori bo‘lishi ikki turli populyatsiya orasidagi farq faqat irsiy ekanini anglatmaydi?",
        answer:
          "Chunki h² faqat aynan shu populyatsiya ichidagi va aynan shu sharoitdagi o‘zgaruvchanlikda genotip ulushini ko‘rsatadi; ikki populyatsiya o‘rtasidagi farq esa muhit (ovqatlanish, agrotexnika) tafovutidan kelib chiqishi mumkin.",
      },
    ],
    keyTerms: [
      "Miqdoriy belgi",
      "Kumulyativ polimeriya",
      "Variatsiya koeffitsiyenti",
      "Irsiylanish koeffitsiyenti",
      "Seleksiya samarasi",
      "Transgressiya",
      "QTL",
    ],
    references: "Genetika va genomika asoslari · 6-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/06-mavzu_Polimeriya_va_miqdor_belgilar_genetikasi_f0d1720d.pdf",
    pdfTitle:
      "6-mavzu: Polimeriya. Miqdor belgilar genetikasi. Kumulyativ va nokumulyativ polimeriya. Transgressiya — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "6-mavzu: Polimeriya va miqdor belgilar genetikasi (Ma’ruza matni)",
        url: "/assets/aistudio/06-mavzu_Polimeriya_va_miqdor_belgilar_genetikasi_f0d1720d.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-7",
    order: 7,
    code: "7",
    topicLabel: "7-mavzu",
    module: "I bo‘lim: Genetika va irsiylanish asoslari",
    title:
      "Genlarning kombinirlangan tipdagi ta’sirida miqdor belgilarning irsiylanishi. G‘o‘zada tola chiqishi va chigit tuklanishining irsiylanishi",
    syllabusPoints: [
      "Genlarning kombinirlangan tipdagi ta’siri haqida tushuncha.",
      "G‘o‘za – genetik tadqiqot obyekti sifatida; asosiy xo‘jalik belgilari.",
      "Tola chiqishi (tola chiqimi) belgisining irsiylanishi.",
      "Chigit tuklanishi belgisining irsiylanishi va uning genetik nazorati.",
      "Chatishtirish (atash) sxemalari va seleksion tahlil.",
    ],
    studyNotes:
      "Kombinirlangan ta’sirda bitta belgi shakllanishida asosiy (major) genlar, minor polimer genlar (QTL), modifikatorlar, epistaz hamda genotip × muhit o‘zaro ta’siri bir vaqtda qatnashadi.",
    overview:
      "Amaliy seleksiyada belgilar kamdan-kam hollarda sof bir xil ta’sirda bo‘ladi. O‘zbekiston paxtachiligining asosiy belgilari — g‘o‘zada tola chiqishi va chigit tuklanishi kombinirlangan irsiylanish, manfiy korrelyatsiyalar hamda diallel, topkross va bekkross sxemalarining klassik obyektlaridir.",
    sections: [
      {
        heading: "1. Kombinirlangan ta’sir va major/minor QTL tushunchasi",
        content:
          "Kombinirlangan (aralash) tipdagi ta’sirda belgining umumiy darajasi polimer (minor) genlar bilan birga fenotipik o‘zgaruvchanlikning 10% dan ortig‘ini tushuntiruvchi asosiy (major) QTL lar, modifikatorlar, ayrim lokuslardagi epistaz va genotip × muhit o‘zaro ta’siri orqali shakllanadi. Shu bois zamonaviy seleksiyada markerli tanlov (MAS) usuli qo‘llaniladi.",
      },
      {
        heading: "2. G‘o‘za turlari va tola chiqishining genetik nazorati",
        content:
          "Dunyoda ekiladigan madaniy g‘o‘zalar tetraploid (2n = 52: G. hirsutum ~90%, G. barbadense ~8%) va diploid (2n = 26: G. arboreum, G. herbaceum) turlardan iborat. Tola chiqishi (%) = (tola massasi / paxta xomashyosi massasi) · 100 bo‘lib, o‘rta tolali navlarda 33–38% ni tashkil etadi. U 5–12 ta polimer gen (additiv ta’sir ustun, h² = 0,5–0,7) bilan boshqariladi. Tola chiqishi va tola uzunligi o‘rtasida manfiy korrelyatsiya mavjudligi sababli tanlov kompleks indeks asosida olib boriladi.",
      },
      {
        heading: "3. Chigit tuklanishining kombinirlangan irsiylanishi",
        content:
          "G‘o‘za chigiti yuzasida uzun tola (lint) va kalta tuk (linter) mavjud. Chigit tuklanishi asosiy N₁ va N₂ genlari (retsessiv n₁n₁n₂n₂ lintersizlikni beradi, F₂ da ~15:1 nokumulyativ ajralish) hamda tuk zichligi va uzunligini o‘zgartiruvchi polimer modifikator genlar bilan boshqariladi. Lintersiz chigit sepgichni tiqmasligi va kislotali delintatsiyani talab qilmasligi bilan qulay.",
      },
      {
        heading: "4. Chatishtirish sxemalari va kombinatsion qobiliyat",
        content:
          "Seleksiyada oddiy juft (A×B), qaytar (bekkross — bitta belgini asosiy navga ko‘chirish), murakkab, topkross (UKQni baholash), diallel (UKQ va XKQni aniqlash) hamda reciprok (A×B va B×A orqali sitoplazmatik erkak sterilligi — SESni aniqlash) sxemalar qo‘llaniladi. Additiv ta’sir bilan bog‘liq UKQ nav yaratishda, dominantlik va epistaz bilan bog‘liq XKQ esa F₁ duragay urug‘chiligida muhim.",
      },
    ],
    comparisonTable: {
      title: "G‘o‘zada qo‘llaniladigan chatishtirish sxemalari va maqsadlari",
      columns: ["Sxema", "Mohiyati", "Seleksion maqsadi"],
      rows: [
        ["Oddiy juft", "A × B", "Ikki navning qimmatli belgilarini birlashtirish"],
        [
          "Qaytar (bekkross)",
          "(A × B) × A",
          "Bitta kerakli belgini asosiy moslashgan navga ko‘chirish",
        ],
        [
          "Topkross",
          "Ko‘p liniya × bitta tester",
          "Umumiy kombinatsion qobiliyatni (UKQ) baholash",
        ],
        [
          "Diallel",
          "n ta nav o‘zaro barcha juftlarda",
          "UKQ va xususiy kombinatsion qobiliyatni (XKQ) aniqlash",
        ],
        ["Reciprok", "A × B va B × A", "Sitoplazmatik (onalik) ta’sir va SESni aniqlash"],
      ],
    },
    keyConcepts: [
      {
        term: "Major va minor QTL",
        definition:
          "Miqdoriy belgi o‘zgaruvchanligiga 10% dan ortiq hissa qo‘shuvchi asosiy lokuslar (major) va kichik hissali ko‘p sonli lokuslar (minor).",
      },
      {
        term: "Tola chiqishi",
        definition:
          "Paxta xomashyosi umumiy massasidagi sof tola ulushining foizdagi ifodasi; o‘rta tolali G. hirsutum navlarida 33–38%.",
      },
      {
        term: "Bekkross (qaytar chatishtirish)",
        definition:
          "Duragayni ota-ona navlaridan biri bilan takror chatishtirish orqali kerakli belgini asosiy nav genofondiga kiritish usuli.",
      },
      {
        term: "UKQ va XKQ",
        definition:
          "Umumiy kombinatsion qobiliyat (additiv ta’sir) va xususiy kombinatsion qobiliyat (dominantlik va epistaz samarasi).",
      },
      {
        term: "Linter (kalta tuk)",
        definition:
          "G‘o‘za chigiti yuzasini qoplovchi kalta tuk; N₁ va N₂ asosiy genlari hamda polimer modifikatorlar bilan boshqariladi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "G‘o‘zada tola chiqishi va tola uzunligi o‘rtasida qanday korrelyatsiya kuzatiladi va buning sababi nimada?",
        answer:
          "Ular o‘rtasida manfiy korrelyatsiya mavjud, chunki har ikki belgi ham chigit yuzasidagi epidermal hujayralarning tola hosil qilish soni va cho‘zilish resursiga bog‘liq.",
      },
      {
        question:
          "Hosildor, mahalliy sharoitga moslashgan tukli «S» naviga lintersiz «L» namunasidan lintersizlik belgisini o‘tkazish uchun qaysi chatishtirish sxemasi tanlanadi?",
        answer:
          "Qaytar chatishtirish (bekkross) sxemasi tanlanadi: har bir avlodda lintersiz avlodlar asosiy «S» nav bilan qayta chatishtirilib, «S» genomi ulushi 50%, 75%, 87,5%, 93,75% gacha tiklanadi (retsessiv lintersizlikni aniqlash uchun har bosqich orasida o‘zaro changlash yoki probali ajralish o‘tkaziladi).",
      },
      {
        question:
          "Reciprok chatishtirish (A × B va B × A) natijalari farq qilsa, bu nimadan dalolat beradi?",
        answer:
          "Bu belgining ona sitoplazmasidagi plastida yoki mitoxondriya genlari orqali (sitoplazmatik irsiylanish) boshqarilishini ko‘rsatadi va sitoplazmatik erkak sterilligini (SES) aniqlashda qo‘llaniladi.",
      },
    ],
    keyTerms: [
      "Kombinirlangan ta’sir",
      "QTL",
      "Gossypium hirsutum",
      "Tola chiqishi",
      "Linter",
      "Bekkross",
      "Diallel chatishtirish",
      "Topkross",
      "UKQ va XKQ",
    ],
    references: "Genetika va genomika asoslari · 7-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/07-mavzu_Miqdor_belgilarning_kombinirlangan_irsiylani_ae049cee.pdf",
    pdfTitle:
      "7-mavzu: Genlarning kombinirlangan tipdagi ta’sirida miqdor belgilarning irsiylanishi. G‘o‘zada tola chiqishi va chigit tuklanishining irsiylanishi — Ma’ruza matni",
    pdfDocuments: [
      {
        title:
          "7-mavzu: Miqdor belgilarning kombinirlangan irsiylanishi va g‘o‘za genetikasi (Ma’ruza matni)",
        url: "/assets/aistudio/07-mavzu_Miqdor_belgilarning_kombinirlangan_irsiylani_ae049cee.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-8",
    order: 8,
    code: "8",
    topicLabel: "8-mavzu",
    module: "II bo‘lim: Xromosoma nazariyasi va o‘zgaruvchanlik",
    title:
      "Xromosoma. Xromosomalarning molekulyar tuzilishi. Kariotip, morfologiya, o‘lcham va struktura",
    syllabusPoints: [
      "Xromosoma haqida tushuncha; kashf etilishi va o‘rganilishi.",
      "Xromosomaning molekulyar tuzilishi: DNK dan xromosomagacha.",
      "Xromosomaning morfologiyasi va asosiy qismlari.",
      "Kariotip, idiogramma va xromosomalarning tasniflanishi.",
      "Maxsus tipdagi xromosomalar va xromatin turlari.",
    ],
    studyNotes:
      "Odam hujayrasidagi ~2 metrli DNK nukleosoma → solenoid → ilmoqli domen → xromatid → metafaza xromosomasi darajalari orqali ~10 000 marta ixchamlashib 6 mkm yadroga joylashadi.",
    overview:
      "Xromosomalar eukariot hujayralarda irsiy axborotni saqlovchi va bo‘linishda teng taqsimlovchi dezoksiribonukleoprotein tuzilmalaridir. Ularning molekulyar ixchamlashishi epigenetik boshqaruvni ta’minlaydi, morfologik belgilari esa kariotip tahlili va tibbiy diagnostika asosini yaratadi.",
    sections: [
      {
        heading: "1. Xromosomalarning kashf etilishi va asosiy xususiyatlari",
        content:
          "1879-yilda V. Flemming bo‘linayotgan hujayralarda xromosomalarni tasvirladi, 1888-yilda V. Valdeyer atamani kiritdi. Setton va Boveri (1902–1903) irsiyatning xromosoma gipotezasini, J. Tjio va A. Levan (1956) odamda 2n = 46 ekanini aniqladilar. Xromosomalarga individuallik, juftlik, doimiylik va uzluksizlik xos bo‘lib, ularning soni organizm murakkabligini belgilamaydi (ot askaridasida 2n = 2, odamda 46, paporotnikda 1000+).",
      },
      {
        heading: "2. DNKning ko‘p bosqichli ixchamlashishi",
        content:
          "Xromosoma ~35–40% DNK, ~35–40% giston oqsillari (H1, H2A, H2B, H3, H4) va ~20% nogiston oqsillardan iborat. DNK (2 nm) avval 8 ta gistondan iborat oktamer atrofiga 1,75 marta o‘ralib nukleosomani (11 nm), H1 ishtirokida solenoidni (30 nm), nogiston karkasda ilmoqli domenni (300 nm), xromatidni (700 nm) va metafaza xromosomasini (1400 nm) hosil qiladi. Gistonlarning atsetillanishi va metillanishi genlar faolligini epigenetik boshqaradi.",
      },
      {
        heading: "3. Xromosoma morfologiyasi va kariotip tahlili",
        content:
          "Metafaza xromosomasi ikki opa-singil xromatiddan, kinetoxor joylashgan sentromeradan (birlamchi belbog‘), kalta (p) va uzun (q) yelkalardan, ikkilamchi belbog‘ (yadrocha tashkilotchisi), sputnik va telomeralardan iborat. Sentromera o‘rniga ko‘ra metasentrik (p ≈ q), submetasentrik (p < q), akrosentrik (p ≪ q) va telosentrik (p yo‘q) turlarga bo‘linadi. Differensial bo‘yash (G-, Q-, R-, C-bo‘yash, FISH) har bir xromosomani band naqshi bilan aniq aniqlashga imkon beradi.",
      },
      {
        heading: "4. Maxsus xromosomalar va xromatin turlari",
        content:
          "Ikki qanotlilar lichinkasining so‘lak bezlarida endoreduplikatsiya natijasida hosil bo‘ladigan politen (gigant) xromosomalar va amfibiya-qushlar tuxum hujayrasida faol transkripsiyalanuvchi «lampa cho‘tkasi» xromosomalari uchraydi. Interfazada bo‘sh o‘ralgan faol qism euxromatin, zich o‘ralgan nofaol qism esa geteroxromatin (konstitutiv va fakultativ — Barr tanachasi, ayol hujayrasidagi laionizatsiya) deb ataladi.",
      },
    ],
    comparisonTable: {
      title: "Xromosomalarning sentromera joylashuviga ko‘ra tasnifi",
      columns: ["Turi", "Sentromera o‘rni", "Yelkalar nisbati", "Shakli"],
      rows: [
        ["Metasentrik", "O‘rtada", "p ≈ q", "Teng yelkali, V-simon"],
        ["Submetasentrik", "O‘rtadan siljigan", "p < q", "Noteng yelkali, L-simon"],
        ["Akrosentrik", "Uchiga yaqin", "p ≪ q", "Tayoqsimon, kalta yelka juda kichik"],
        ["Telosentrik", "Uchida (odamda yo‘q)", "p yo‘q", "Bitta yelkali"],
      ],
    },
    keyConcepts: [
      {
        term: "Nukleosoma",
        definition:
          "Sakkizta giston molekulasidan (H2A, H2B, H3, H4 dan ikkitadan) iborat o‘zak atrofiga DNKning 1,75 marta o‘ralgan 11 nm li birlamchi birligi.",
      },
      {
        term: "Sentromera va kinetoxor",
        definition:
          "Sentromera — opa-singil xromatidlarni birlashtiruvchi birlamchi belbog‘; kinetoxor — unga bo‘linish urchug‘i iplari birikadigan oqsil kompleksi.",
      },
      {
        term: "Idiogramma",
        definition:
          "Kariotipdagi xromosomalarning kattaligi bo‘yicha kamayish tartibida juft-juft qilib chizilgan sxematik tasviri.",
      },
      {
        term: "Politen xromosoma",
        definition:
          "Endoreduplikatsiya tufayli mingdan ortiq xromonemadan iborat bo‘lib, faol transkripsiya joylarida pufaklar (puff) hosil qiluvchi gigant xromosoma.",
      },
      {
        term: "Barr tanachasi (laionizatsiya)",
        definition:
          "Ayol hujayrasida ikkita X-xromosomadan birining erta embrional bosqichda tasodifiy nofaollashib, yadro chetida zich fakultativ geteroxromatin holida ko‘rinishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Metafaza xromosomasigacha DNK taxminan necha marta ixchamlashadi va bundagi 5 ta ketma-ket daraja qaysilar?",
        answer:
          "Umumiy ixchamlashish ~10 000 martani tashkil etadi: DNK (2 nm) → nukleosoma (11 nm) → solenoid (30 nm) → ilmoqli domen (300 nm) → xromatid (700 nm) → metafaza xromosomasi (1400 nm).",
      },
      {
        question:
          "Euxromatin va geteroxromatin tuzilishi, gen zichligi hamda replikatsiya vaqti bo‘yicha qanday farq qiladi?",
        answer:
          "Euxromatin bo‘sh o‘ralgan, interfazada despirallashgan, gen zichligi yuqori, transkripsiyaga faol va S-bosqich boshida replikatsiyalanadi; geteroxromatin esa zich o‘ralgan, genlarga kambag‘al, transkripsiyaga deyarli nofaol va S-bosqich oxirida replikatsiyalanadi.",
      },
      {
        question:
          "Odamning 2-xromosomasi va shimpanze kariotipi taqqoslanishi evolyutsiya haqida qanday dalil beradi?",
        answer:
          "Shimpanzeda 48, odamda 46 ta xromosoma bo‘lib, odamning 2-xromosomasi shimpanzedagi ikkita alohida xromosomaning birlashishi natijasida hosil bo‘lganini G-band naqshi va ichki telomera qoldiqlari tasdiqlaydi.",
      },
    ],
    keyTerms: [
      "Xromosoma",
      "Nukleosoma",
      "Giston",
      "Sentromera",
      "Telomera",
      "Kariotip",
      "Idiogramma",
      "Politen xromosoma",
      "Euxromatin",
      "Geteroxromatin",
    ],
    references: "Genetika va genomika asoslari · 8-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/08-mavzu_Xromosoma_molekulyar_tuzilishi_kariotip_va_m_adde347e.pdf",
    pdfTitle:
      "8-mavzu: Xromosoma. Xromosomalarning molekulyar tuzilishi. Kariotip, morfologiya, o‘lcham va struktura — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "8-mavzu: Xromosoma molekulyar tuzilishi va kariotip (Ma’ruza matni)",
        url: "/assets/aistudio/08-mavzu_Xromosoma_molekulyar_tuzilishi_kariotip_va_m_adde347e.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-9",
    order: 9,
    code: "9",
    topicLabel: "9-mavzu",
    module: "II bo‘lim: Xromosoma nazariyasi va o‘zgaruvchanlik",
    title:
      "T. Morganning irsiyatni xromosoma nazariyasi. Ko‘payishning sitologik asoslari. Genlarning birikkan holda irsiylanishi va krossingover",
    syllabusPoints: [
      "Irsiyatning xromosoma nazariyasi va uning asosiy qoidalari.",
      "Jinssiz va jinsiy ko‘payishning sitologik asoslari: mitoz va meyoz.",
      "Genlarning birikkan holda irsiylanishi; birikish guruhlari.",
      "Krossingover: mexanizmi, turlari va chastotasi.",
      "Jins genetikasi va jinsga birikkan belgilarning irsiylanishi.",
    ],
    studyNotes:
      "Bitta xromosomadagi genlar birikish guruhini tashkil qilib birga irsiylanadi, ammo meyoz profazasi I dagi krossingover chastotasi genlar orasidagi masofaga proporsional (1% RF = 1 sM) bo‘lib, maksimal 50% gacha yetadi.",
    overview:
      "T. Morgan va uning shogirdlari drozofila ustidagi tajribalar orqali genetikani sitologiya bilan birlashtirdi. Ular genlarning xromosomalarda chiziqli joylashishini, birikish guruhlari soni gaploid xromosomalar soniga tengligini hamda jinsga birikkan belgilar qonuniyatini isbotladilar.",
    sections: [
      {
        heading: "1. T. Morganning xromosoma nazariyasi qoidalari",
        content:
          "1911–1926-yillarda drozofila (4 juft xromosoma, 10–12 kunlik avlod) ustida yaratilgan nazariyaga ko‘ra: genlar xromosomalarda chiziqli tartibda ma’lum lokuslarda joylashadi; bitta xromosomadagi genlar birikish guruhini (n ga teng: drozofilada 4, no‘xatda 7, odamda 23 ta) tashkil qiladi; krossingover chastotasi genlar orasidagi masofaga to‘g‘ri proporsional bo‘ladi.",
      },
      {
        heading: "2. Mitoz va meyozning sitologik-genetik ahamiyati",
        content:
          "Mitoz somatik hujayralarning bir marta bo‘linishi bo‘lib, ona hujayraga aynan o‘xshash ikki diploid qiz hujayra (2n → 2n) hosil qiladi. Meyoz esa ketma-ket ikki bo‘linishdan iborat: Profaza I (leptotena, zigotena — konyugatsiya va bivalent, paxitena — krossingover, diplotena — xiazma) va Anafaza I da gomologik xromosomalar ajralishi hisobiga 4 ta gaploid va genetik xilma-xil hujayra (2n → n) hosil bo‘ladi.",
      },
      {
        heading: "3. Birikkan irsiylanish, krossingover va interferensiya",
        content:
          "Krossingover bo‘lmasa to‘liq birikish (drozofila erkaklari va ipak qurti urg‘ochilarida — 1:1 nisbat), bo‘lsa to‘liqsiz birikish (ko‘p ota-ona tipi va kam krossoverlar) kuzatiladi. Bitta xromosomada ikkala dominant allel joylashsa sis-holat (AB/ab), turli xromosomalarda bo‘lsa trans-holat (Ab/aB) deyiladi. Krossingover chastotasi RF (%) = (krossoverlar / jami avlod) · 100 bo‘lib, 1% = 1 santimorgan (sM). Bir krossingoverning qo‘shnisiga to‘sqinligi interferensiya (I = 1 − K) bilan baholanadi.",
      },
      {
        heading: "4. Jinsni belgilash tizimlari va jinsga birikkan irsiylanish",
        content:
          "Jins xromosomal belgilash XY (sutemizuvchilar, drozofila), XO (chigirtka), ZW (qushlar, ipak qurti), ZO va gaplo-diploid (asalari) tizimlarida uchraydi. Odamda Y-xromosomadagi SRY geni erkak jinsini belgilaydi. Erkaklarda X-xromosoma bitta (gemizigota) bo‘lgani uchun gemofiliya va daltonizm kabi X-birikkan retsessiv kasalliklar erkaklarda ko‘proq namoyon bo‘ladi, Y-birikkan (golandrik) belgilar esa faqat otadan o‘g‘ilga o‘tadi.",
      },
    ],
    comparisonTable: {
      title: "Jinsni xromosomal belgilash tizimlarining qiyosiy tavsifi",
      columns: ["Tizim", "Urg‘ochi jins", "Erkak jins", "Misollar"],
      rows: [
        ["XY tipi", "XX (gomogametali)", "XY (geterogametali)", "Sutemizuvchilar, odam, drozofila"],
        ["XO tipi", "XX", "XO", "Chigirtkalar, ba’zi hasharotlar"],
        ["ZW tipi", "ZW (geterogametali)", "ZZ (gomogametali)", "Qushlar, kapalaklar, ipak qurti"],
        [
          "Gaplo-diploid",
          "Diploid (urug‘langan)",
          "Gaploid (urug‘lanmagan)",
          "Asalari, chumolilar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Birikish guruhi",
        definition:
          "Bitta xromosomada joylashgan va birga irsiylanuvchi genlar majmui; soni gaploid xromosomalar soniga (n) teng.",
      },
      {
        term: "Sis- va trans-holat",
        definition:
          "Sis-holatda dominant allellar bitta gomologda (AB/ab), trans-holatda esa qarama-qarshi gomologlarda (Ab/aB) joylashadi.",
      },
      {
        term: "Santimorgan (sM)",
        definition:
          "Genetik xaritadagi nisbiy masofa birligi bo‘lib, 1% krossingover chastotasiga (RF) teng.",
      },
      {
        term: "Gemizigota",
        definition:
          "Diploid organizmning jinsiy xromosomasida (masalan, XY erkaklarda X-xromosomada) genning faqat bitta allel bilan ifodalanish holati.",
      },
      {
        term: "Golandrik irsiylanish",
        definition:
          "Y-xromosomada joylashgan genlarning (masalan, quloq suprasi tuklanishi) faqat otadan barcha o‘g‘illarga uzatilishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Makkajo‘xorida CSh/csh × csh/csh analiz chatishtirishida 8368 ta dondan 149 ta rangli-burishgan va 152 ta rangsiz-silliq krossover olindi. Genlar orasidagi masofa necha sM?",
        answer:
          "Krossoverlar soni = 149 + 152 = 301 ta. RF = (301 / 8368) · 100 ≈ 3,6%. Demak, C va Sh genlari orasidagi genetik masofa 3,6 santimorgan (sM) ga teng va ular sis-holatda joylashgan.",
      },
      {
        question:
          "Sog‘lom tashuvchi ona (XᴴXʰ) va sog‘lom ota (XᴴY) nikohidan tug‘iladigan bolalarda gemofiliya xavfi qanday?",
        answer:
          "Barcha qizlar fenotip jihatdan sog‘lom bo‘ladi (ularning 50% i XᴴXʰ tashuvchi), o‘g‘illarning esa 50% i (XʰY) gemofiliya bilan kasal tug‘iladi (barcha farzandlar orasida 25% ehtimol).",
      },
      {
        question:
          "Nima uchun drozofila genetikada eng qulay model obyektlardan biri bo‘lgan va qaysi jinsida krossingover sodir bo‘lmaydi?",
        answer:
          "Drozofila 10–12 kunda avlod beradi, atigi 4 juft xromosomaga, so‘lak bezida politen xromosomalarga va aniq mutant belgilarga ega; drozofila erkaklarida esa krossingover kuzatilmaydi (to‘liq birikish).",
      },
    ],
    keyTerms: [
      "Xromosoma nazariyasi",
      "Birikish guruhi",
      "Krossingover",
      "Xiazma",
      "Santimorgan",
      "Interferensiya",
      "Gemizigota",
      "Gemofiliya",
      "Golandrik irsiylanish",
    ],
    references: "Genetika va genomika asoslari · 9-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/09-mavzu_Xromosoma_nazariyasi_birikkan_irsiylanish_va_48f67292.pdf",
    pdfTitle:
      "9-mavzu: T. Morganning irsiyatni xromosoma nazariyasi. Ko‘payishning sitologik asoslari. Genlarning birikkan holda irsiylanishi va krossingover — Ma’ruza matni",
    pdfDocuments: [
      {
        title:
          "9-mavzu: Xromosoma nazariyasi, birikkan irsiylanish va krossingover (Ma’ruza matni)",
        url: "/assets/aistudio/09-mavzu_Xromosoma_nazariyasi_birikkan_irsiylanish_va_48f67292.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-10",
    order: 10,
    code: "10",
    topicLabel: "10-mavzu",
    module: "II bo‘lim: Xromosoma nazariyasi va o‘zgaruvchanlik",
    title:
      "Genetik va sitologik xaritalar. Odam kariotipi va xromosoma guruhlari, autosoma va jinsiy xromosomalar",
    syllabusPoints: [
      "Genetik xarita tushunchasi va uni tuzish tamoyillari.",
      "Uch nuqtali analiz chatishtirish va genlar tartibini aniqlash.",
      "Sitologik va fizik xaritalar; ularning genetik xarita bilan munosabati.",
      "Odam kariotipi: Denver va Parij tasniflari, xromosoma guruhlari.",
      "Autosomalar va jinsiy xromosomalar; odam genomini xaritalash.",
    ],
    studyNotes:
      "Uch nuqtali analiz chatishtirish ota-ona tipi bilan ikkitalik krossoverlarni solishtirib o‘rtadagi genni va masofalarni (sM) aniqlaydi; fizik xarita esa nukleotid juftlaridagi (kb, Mb) aniq masofani ko‘rsatadi.",
    overview:
      "A. Stertevant 1913-yilda krossingover chastotasidan foydalanib birinchi genetik xaritani tuzdi. Bugungi kunda genetik, sitologik va fizik (sekvenlash) xaritalar hamda Denver va Parij kariotip tasniflari odam genomi va irsiy kasalliklarni aniq xaritalashda qo‘llaniladi.",
    sections: [
      {
        heading: "1. Genetik xarita va uch nuqtali analiz chatishtirish",
        content:
          "Genetik xarita xromosomadagi genlarning chiziqli tartibi va ular orasidagi nisbiy masofani santimorganda (1 sM = 1% RF) ko‘rsatadi. Ikki nuqtali tahlil tartibni bermaydi; shu bois uch nuqtali chatishtirish (AaBbCc × aabbcc) qo‘llaniladi. Avlodda 8 ta fenotip sinfi hosil bo‘ladi: eng ko‘pi ota-ona tipi, eng kami ikkitalik krossoverlardir. Ota-ona va ikkitalik krossoverlarda o‘rni almashgan gen o‘rtada joylashgan bo‘ladi.",
        highlights: [
          "Yakka krossover sinflariga har doim ikkitalik krossoverlar soni ham qo‘shiladi",
          "Uzoq oraliqlarda ikkitalik krossingover tufayli additivlik buziladi; Xoldeyn va Kosambi funksiyalari qo‘llaniladi",
        ],
      },
      {
        heading: "2. Sitologik va fizik xaritalar, DNK-markerlar",
        content:
          "Sitologik xarita deletsiya tahlili, politen xromosoma disklari va FISH orqali genni xromosoma bandlariga bog‘laydi. Fizik xarita esa nukleotid juftlarida (kb, Mb) mutlaq masofani beradi. Sentromerada krossingover bostirilgani, telomerada esa tez-tez kechgani uchun genetik va fizik xaritalar doimo bir xil proporsiyada bo‘lmaydi (odamda o‘rtacha 1 sM ≈ 1 Mb). Zamonaviy xaritalashda RFLP, SSR va SNP markerlari ishlatiladi.",
      },
      {
        heading: "3. Odam kariotipi: Denver (1960) va Parij (1971) tasniflari",
        content:
          "Odam kariotipi 46 ta xromosomadan (22 juft autosoma + XX yoki XY) iborat. Denver tasnifi xromosomalarni o‘lchami va sentromera o‘rniga ko‘ra 7 guruhga (A: 1–3, B: 4–5, C: 6–12 va X, D: 13–15 sputnikli, E: 16–18, F: 19–20, G: 21–22 va Y) ajratadi. Parij tasnifi esa G-bandlar bo‘yicha aniq belgilashni (masalan, 46,XY,del(5)(p15)) joriy etdi.",
      },
      {
        heading: "4. Autosomalar, jinsiy xromosomalar va Odam genomi dasturi",
        content:
          "X-xromosoma (~155 Mb, ~1100 gen) submetasentrik, Y-xromosoma (~57 Mb, ~70 gen) esa akrosentrik va sputniksizdir. Ular uchlaridagi psevdoautosomal sohalar tufayli meyozda konyugatsiyalanadi; Y-xromosomadagi SRY geni jins shakllanishini boshqaradi. 1990–2003 (va 2022 T2T) «Odam genomi» dasturi ~3,1 mlrd j.n., ~19–20 ming gen (~1,5% kodlovchi qism) va odamlar orasidagi ~0,1% genetik farqni aniqlab, farmakogenetikaga asos soldi.",
      },
    ],
    comparisonTable: {
      title: "Genetik, sitologik va fizik xaritalarning qiyosiy tavsifi",
      columns: ["Mezon", "Genetik xarita", "Sitologik xarita", "Fizik xarita"],
      rows: [
        [
          "Masofa birligi",
          "Santimorgan (sM)",
          "Band / disk raqami",
          "Nukleotid jufti (j.n., kb, Mb)",
        ],
        [
          "Qanday olinadi",
          "Chatishtirish, RF hisobi",
          "Mikroskopiya, FISH, deletsiya",
          "Restriksiya, klonlash, sekvenlash",
        ],
        ["Aniqligi", "Nisbiy", "O‘rtacha", "Mutlaq"],
        [
          "Qo‘llanilishi",
          "Markerli seleksiya",
          "Aberratsiyalar tahlili",
          "Genomika, kasallik genini izlash",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Uch nuqtali tahlil",
        definition:
          "Uchta gen bo‘yicha triduragay analiz chatishtirish o‘tkazib, ikkitalik krossoverlar orqali o‘rtadagi gen va ular orasidagi masofalarni aniqlash usuli.",
      },
      {
        term: "Denver tasnifi (1960)",
        definition:
          "Odamning 46 ta xromosomasini o‘lchami va sentromera joylashuviga qarab A dan G gacha yettita guruhga bo‘lish tizimi.",
      },
      {
        term: "Psevdoautosomal soha",
        definition:
          "X va Y xromosomalar uchlaridagi gomologik qismlar; meyozda X va Y juftlashib to‘g‘ri ajralishini ta’minlaydi.",
      },
      {
        term: "SRY geni",
        definition:
          "Y-xromosomaning kalta yelkasida joylashgan va embrional bezning moyakka rivojlanishini ishga tushiruvchi asosiy gen.",
      },
      {
        term: "SNP va SSR markerlar",
        definition:
          "Genom bo‘ylab tarqalgan bitta nukleotid polimorfizmi (SNP) va qisqa mikrosatellit takrorlari (SSR) asosidagi zamonaviy genetik markerlar.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Uch nuqtali analiz chatishtirishda 2000 ta avlod ichida yakka krossoverlar 310 va 220 ta, ikkitalik krossoverlar esa 20 ta chiqsa, oraliq masofalar va interferensiya qanday topiladi?",
        answer:
          "RF₁ = (310 + 20)/2000 · 100 = 16,5 sM; RF₂ = (220 + 20)/2000 · 100 = 12,0 sM. Kutilgan ikkitalik krossover = 0,165 · 0,12 · 2000 = 39,6 ta; K = 20 / 39,6 ≈ 0,505; Interferensiya I = 1 − 0,505 = 0,495 (musbat interferensiya).",
      },
      {
        question:
          "Tibbiy-genetik xulosadagi 47,XX,+21 va 45,X kariotip formulalari nimani anglatadi?",
        answer:
          "47,XX,+21 — ayol jinsida 21-xromosoma bo‘yicha trisomiya (Daun sindromi); 45,X — bitta X-xromosoma yetishmovchiligi (Shereshevskiy-Terner sindromi, Barr tanachasi yo‘q).",
      },
      {
        question:
          "Nima uchun normal kariotip natijasi irsiy kasallik yo‘qligini 100% isbotlay olmaydi?",
        answer:
          "Oddiy kariotip tahlili faqat 5–10 million nukleotiddan yirik xromosoma o‘zgarishlarini ko‘rsatadi; nuqtaviy mutatsiyalar va mikrodeletsiyalarni aniqlash uchun FISH, mikromassiv (array-CGH) yoki sekvenlash zarur.",
      },
    ],
    keyTerms: [
      "Genetik xarita",
      "Sitologik xarita",
      "Fizik xarita",
      "Uch nuqtali chatishtirish",
      "Denver tasnifi",
      "Parij tasnifi",
      "SRY geni",
      "Odam genomi dasturi",
    ],
    references: "Genetika va genomika asoslari · 10-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/10-mavzu_Genetik_va_sitologik_xaritalar_odam_kariotip_82d71bcd.pdf",
    pdfTitle:
      "10-mavzu: Genetik va sitologik xaritalar. Odam kariotipi va xromosoma guruhlari, autosoma va jinsiy xromosomalar — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "10-mavzu: Genetik va sitologik xaritalar, odam kariotipi (Ma’ruza matni)",
        url: "/assets/aistudio/10-mavzu_Genetik_va_sitologik_xaritalar_odam_kariotip_82d71bcd.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-11",
    order: 11,
    code: "11",
    topicLabel: "11-mavzu",
    module: "II bo‘lim: Xromosoma nazariyasi va o‘zgaruvchanlik",
    title:
      "Genetik materialning o‘zgaruvchanligi. O‘zgaruvchanlik va uning xillari. Mutatsion o‘zgaruvchanlik",
    syllabusPoints: [
      "O‘zgaruvchanlik haqida tushuncha va uning tasnifi.",
      "Modifikatsion o‘zgaruvchanlik va reaksiya normasi.",
      "Kombinativ o‘zgaruvchanlik va uning manbalari.",
      "Mutatsion o‘zgaruvchanlik: mutatsiyalarning umumiy tavsifi.",
      "Mutagen omillar va mutatsiyalarni keltirib chiqarish usullari.",
    ],
    studyNotes:
      "O‘zgaruvchanlik irsiy bo‘lmagan (modifikatsion — reaksiya normasi bilan chegaralangan) va irsiy (kombinativ hamda mutatsion) xillarga bo‘linadi; Vavilovning gomologik qatorlar qonuni esa yaqin turlarda o‘xshash mutatsiyalarni oldindan bashorat qiladi.",
    overview:
      "Tirik organizmlarning moslashuvi va evolyutsiyasi o‘zgaruvchanlikka tayanadi. Modifikatsion o‘zgaruvchanlik genotipni o‘zgartirmay muhitga moslashishni ta’minlasa, kombinativ va mutatsion o‘zgaruvchanlik seleksiya va evolyutsiya uchun yangi genetik variantlarni yaratadi.",
    sections: [
      {
        heading: "1. O‘zgaruvchanlik tasnifi va Vavilovning gomologik qatorlar qonuni",
        content:
          "O‘zgaruvchanlik modifikatsion (irsiy bo‘lmagan — Darvin bo‘yicha aniq/guruhli) va genotipik (irsiy: kombinativ va mutatsion — noaniq/individual) xillarga ajratiladi. N. I. Vavilov (1920) yaratgan gomologik qatorlar qonuniga ko‘ra, genetik jihatdan yaqin tur va avlodlar irsiy o‘zgaruvchanlikning o‘xshash qatorlari bilan tavsiflanadi, bu seleksionerga hali topilmagan shakllarni izlash yo‘nalishini ko‘rsatadi.",
      },
      {
        heading: "2. Modifikatsion o‘zgaruvchanlik, reaksiya normasi va fenokopiyalar",
        content:
          "Modifikatsion o‘zgaruvchanlik genotip o‘zgarmagan holda muhit ta’sirida yuzaga kelib, guruhli, yo‘naltirilgan, qaytar, moslashuvchan bo‘ladi va reaksiya normasi doirasida variatsion egri chiziq hosil qiladi (baqachanoq barglari, gimalay quyoni juni). Muhit ta’sirida irsiy kasallikka o‘xshab ko‘rinuvchi, ammo irsiylanmaydigan holatlar fenokopiya deyiladi.",
      },
      {
        heading: "3. Kombinativ o‘zgaruvchanlik, inbriding va autbriding",
        content:
          "Kombinativ o‘zgaruvchanlik meyozda xromosomalarning mustaqil taqsimlanishi, krossingover va urug‘lanishda gametalarning tasodifiy qo‘shilishi natijasida yangi gen birikmalarini yaratadi. Seleksiyada yaqin qarindoshlik chatishtirishi (inbriding) liniyani gomozigotalashtirib, inbred depressiya chaqirsa, uzoq chatishtirish (autbriding) F₁ da geterozis — duragay kuchini beradi.",
      },
      {
        heading: "4. Mutatsion nazariya, mutagenlar va antimutagenlar",
        content:
          "G. de Friz (1901) «mutatsiya» atamasini kiritdi: mutatsiyalar to‘satdan, irsiylanadigan, yo‘naltirilmagan, takrorlanuvchi va turg‘undir. Spontan mutatsiya chastotasi bitta genda ~10⁻⁵–10⁻⁶ ni tashkil etadi. Mutagenlar fizik (rentgen, UB nurlar — G. Myoller, 1927), kimyoviy (alkillovchi, asos analoglari — 5-bromurasil, deaminlovchi, interkalyatorlar — Saxarov, Lobashev, Rapoport) va biologik (viruslar, transpozonlar) bo‘ladi. Mutatsiya chastotasini pasaytiruvchi moddalar antimutagenlar (A, C, E vitaminlari) deyiladi.",
      },
    ],
    comparisonTable: {
      title: "O‘zgaruvchanlik turlarining qiyosiy tavsifi",
      columns: ["Mezon", "Modifikatsion", "Kombinativ", "Mutatsion"],
      rows: [
        [
          "Genotip holati",
          "O‘zgarmaydi",
          "Yangi gen birikmasi hosil bo‘ladi",
          "Genetik material o‘zgaradi",
        ],
        ["Irsiylanishi", "Irsiylanmaydi", "Irsiylanadi", "Irsiylanadi"],
        ["Yo‘nalishi", "Yo‘naltirilgan, guruhli", "Tasodifiy", "Tasodifiy"],
        ["Chegarasi", "Reaksiya normasi bilan", "Mavjud allellar soni bilan", "Chegarasiz"],
        [
          "Evolyutsiyadagi roli",
          "Individual moslashuv",
          "Materialni qayta taqsimlash",
          "Birlamchi yangilik materiali",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Gomologik qatorlar qonuni",
        definition:
          "N. I. Vavilov ta’riflagan qonun: kelib chiqishi yaqin tur va avlodlarda irsiy o‘zgaruvchanlikning o‘xshash qatorlari kuzatiladi.",
      },
      {
        term: "Fenokopiya",
        definition:
          "Tashqi muhit (masalan, dorilar yoki infeksiya) ta’sirida yuzaga kelgan, lekin irsiy kasallikka o‘xshab ko‘rinuvchi irsiylanmaydigan holat.",
      },
      {
        term: "Inbriding va inbred depressiya",
        definition:
          "Qarindosh organizmlarni chatishtirish natijasida gomozigotalik ortib, yashirin zararli retsessiv allellarning namoyon bo‘lishi.",
      },
      {
        term: "Generativ va somatik mutatsiya",
        definition:
          "Generativ mutatsiya jinsiy hujayralarda sodir bo‘lib avlodga o‘tadi; somatik mutatsiya tana hujayralarida mozaiklik yoki o‘sma hosil qiladi.",
      },
      {
        term: "Antimutagenlar",
        definition:
          "Mutagenlar ta’sirini neytrallab mutatsiya chastotasini kamaytiruvchi moddalar (vitaminlar, antioksidantlar, o‘simlik ekstraktlari).",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Issiqxonada bargi mayda bo‘lgan 18 ta pomidor ko‘chati normal sharoitga ko‘chirilganda 15 tasi tuzaldi, 3 tasida va ularning urug‘ avlodida belgi saqlandi. Bu qanday o‘zgaruvchanliklar?",
        answer:
          "Normal sharoitda asl holiga qaytgan 15 ta o‘simlikdagi o‘zgarish — modifikatsion o‘zgaruvchanlik; urug‘ orqali avlodga o‘tgan 3 ta o‘simlikdagi o‘zgarish esa generativ mutatsiyadir.",
      },
      {
        question:
          "Kimyoviy mutagenlardan 5-bromurasil va akridin bo‘yoqlari DNKga qanday mexanizm bilan ta’sir qiladi?",
        answer:
          "5-bromurasil azot asoslari analogi sifatida replikatsiyada noto‘g‘ri juftlashishga olib kelsa, akridin bo‘yoqlari interkalyator sifatida DNK zanjirlari orasiga kirib o‘qish ramkasining siljishi (frameshift) mutatsiyasini chaqiradi.",
      },
      {
        question:
          "An’anaviy sun’iy mutagenez va zamonaviy CRISPR texnologiyasi o‘rtasidagi asosiy farq nimada?",
        answer:
          "Sun’iy mutagenez «ko‘r» usul bo‘lib, tasodifiy joylarda ko‘plab zararli mutatsiyalar beradi; CRISPR-Cas9 esa genomning aniq belgilangan nuqtasiga maqsadli tahrir kiritish imkonini beradi.",
      },
    ],
    keyTerms: [
      "Modifikatsion o‘zgaruvchanlik",
      "Kombinativ o‘zgaruvchanlik",
      "Mutatsion o‘zgaruvchanlik",
      "Fenokopiya",
      "Inbriding",
      "Mutagen",
      "Antimutagen",
      "Gomologik qatorlar",
    ],
    references: "Genetika va genomika asoslari · 11-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/11-mavzu_O_zgaruvchanlik_va_uning_xillari_mutatsion_o_ab9b43b8.pdf",
    pdfTitle:
      "11-mavzu: Genetik materialning o‘zgaruvchanligi. O‘zgaruvchanlik va uning xillari. Mutatsion o‘zgaruvchanlik — Ma’ruza matni",
    pdfDocuments: [
      {
        title:
          "11-mavzu: O‘zgaruvchanlik va uning xillari, mutatsion o‘zgaruvchanlik (Ma’ruza matni)",
        url: "/assets/aistudio/11-mavzu_O_zgaruvchanlik_va_uning_xillari_mutatsion_o_ab9b43b8.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-12",
    order: 12,
    code: "12",
    topicLabel: "12-mavzu",
    module: "II bo‘lim: Xromosoma nazariyasi va o‘zgaruvchanlik",
    title: "Gen yoki nuqtaviy mutatsiyalar. Xromosoma va genom mutatsiyalari",
    syllabusPoints: [
      "Gen (nuqtaviy) mutatsiyalar: turlari va molekulyar mexanizmi.",
      "Gen mutatsiyalarining oqsil tuzilishiga ta’siri.",
      "Xromosoma mutatsiyalari (aberratsiyalar): ichki va o‘zaro turlari.",
      "Genom mutatsiyalari: poliploidiya va aneuploidiya.",
      "Mutatsiyalarning oqibatlari, reparatsiya va amaliy ahamiyati.",
    ],
    studyNotes:
      "Mutatsiyalar molekulyar darajadagi gen mutatsiyalari (sens, missens, nonsens, siljish), xromosoma tuzilishi aberratsiyalari va xromosoma sonini o‘zgartiruvchi genom mutatsiyalariga (poliploidiya, aneuploidiya) bo‘linadi.",
    overview:
      "Genetik materialning o‘zgarish darajasiga qarab mutatsiyalarni aniqlash usullari va klinik oqibatlari ham keskin farq qiladi. Hujayradagi maxsus DNK reparatsiya tizimlari bu xatolarni tuzatib, barqarorlikni hamda saratondan himoyani ta’minlaydi.",
    sections: [
      {
        heading: "1. Gen (nuqtaviy) mutatsiyalar va oqsilga ta’siri",
        content:
          "Gen mutatsiyalari purin↔purin / pirimidin↔pirimidin almashinuvi (tranzitsiya), purin↔pirimidin almashinuvi (transversiya) hamda insersiya va deletsiya natijasida yuzaga keladi. Genetik kod degeneratsiyasi sababli kodon o‘zgarsa ham aminokislota o‘zgarmasligi sens (sinonim), boshqa aminokislotaga almashishi missens (masalan, o‘roqsimon-hujayrali anemiyada GAG→GTG, Glu→Val), stop-kodon paydo bo‘lishi nonsens, uchga karrali bo‘lmagan insersiya/deletsiya esa o‘qish ramkasi siljishi (frameshift) deb ataladi.",
      },
      {
        heading: "2. Xromosoma aberratsiyalari: ichki va xromosomalararo",
        content:
          "Ichki aberratsiyalar qatoriga deletsiya (masalan, 5p− «mushuk faryodi» sindromi), duplikatsiya (evolyutsiyada yangi genlar manbai) va 180° burilishli inversiya (perisentrik va parasentrik — «supergenlar») kiradi. Xromosomalararo aberratsiyalarga translokatsiya, reciprok translokatsiya (t(9;22) Filadelfiya xromosomasi — surunkali miyeloleykoz) va ikki akrosentrik xromosomaning sentromerada birikishi — Robertson translokatsiyasi (irsiy Daun sindromi) kiradi.",
      },
      {
        heading: "3. Genom mutatsiyalari: poliploidiya va aneuploidiya",
        content:
          "Poliploidiya xromosoma to‘plamining butun sonli ortishidir (autopoliploidiya va allopoliploidiya — Karpechenkoning raphanobrassica, yumshoq bug‘doy 2n = 42, sun’iy kolxitsin bilan olish). Aneuploidiyada esa meyozdagi nondisyunksiya oqibatida ayrim xromosomalar soni o‘zgaradi: nullisomiya (2n−2), monosomiya (2n−1: 45,X — Terner), trisomiya (2n+1: 47,+21 — Daun; 47,XXY — Klaynfelter).",
      },
      {
        heading: "4. DNK reparatsiya tizimlari va onkogenez",
        content:
          "Hujayrada fotoreaktivatsiya, asos eksizion (BER), nukleotid eksizion (NER — nuqsoni pigmentli kserodermani beradi), mismatch-repair (MMR — nuqsoni Linch sindromini chaqiradi) va rekombinatsion reparatsiya tizimlari ishlaydi. Somatik hujayralarda protoonkogenlarning faollashishi, p53/RB kabi o‘sma bostiruvchi genlar hamda reparatsiya va apoptozning izdan chiqishi saraton rivojlanishiga olib keladi.",
      },
    ],
    comparisonTable: {
      title: "Nuqtaviy mutatsiyalarning oqsil tuzilishiga ta’siri",
      columns: ["Turi", "Kodondagi o‘zgarish", "Oqsilga ta’siri", "Klinik misol"],
      rows: [
        [
          "Sens (sinonim)",
          "Kodon o‘zgaradi, aminokislota o‘sha",
          "Ta’siri yo‘q",
          "GGA → GGG (Glitsin)",
        ],
        [
          "Missens",
          "Aminokislota almashadi",
          "Oqsil xossasi o‘zgaradi",
          "O‘roqsimon anemiya (HbS)",
        ],
        ["Nonsens", "Stop-kodon hosil bo‘ladi", "Oqsil kalta va nofaol", "Beta-talassemiya"],
        [
          "Siljish (frameshift)",
          "O‘qish ramkasi siljiydi",
          "Keyingi barcha aminokislotalar buziladi",
          "Dyushenn miodistrofiyasi",
        ],
        [
          "Splaysing sohasida",
          "Intron kesilishi buziladi",
          "Noto‘g‘ri yetuk mRNK",
          "Ayrim talassemiyalar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Tranzitsiya va transversiya",
        definition:
          "Tranzitsiyada purin purinaga (A↔G) yoki pirimidin pirimidinga (C↔T), transversiyada esa purin pirimidinga almashadi.",
      },
      {
        term: "Missens va nonsens mutatsiya",
        definition:
          "Missensda kodon boshqa aminokislota kodoniga, nonsensda esa ma’nosiz stop-kodonga (UAG, UAA, UGA) aylanadi.",
      },
      {
        term: "Robertson translokatsiyasi",
        definition:
          "Ikki akrosentrik xromosomaning sentromera sohasida qo‘shilib bitta metatsentrik xromosoma hosil qilishi; tashuvchi sog‘lom, lekin avlodda nomuvozanat gametalar beradi.",
      },
      {
        term: "Nondisyunksiya",
        definition:
          "Meyoz I da gomologik xromosomalar yoki meyoz II da xromatidlarning ajralmay qolishi natijasida aneuploidiya yuzaga kelishi.",
      },
      {
        term: "Allopoliploidiya",
        definition:
          "Turlararo duragayda ikki har xil turning xromosoma to‘plamlari qo‘shilib, kolxitsin yoki tabiiy ikkilanish orqali unumdor shakl (masalan, raphanobrassica) hosil bo‘lishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Ayol kariotipi 45,XX,der(14;21)(q10;q10) bo‘lib o‘zi sog‘lom, ammo takroriy homila tushishi kuzatilgan. Buning genetik sababi nimada?",
        answer:
          "Ayol 14 va 21-xromosomalar orasidagi muvozanatli Robertson translokatsiyasi tashuvchisi bo‘lgani uchun o‘zida genetik material to‘liq, lekin meyozda nomuvozanat gametalar (trisomiya-21 yoki monosomiya) hosil qiladi.",
      },
      {
        question:
          "O‘roqsimon-hujayrali anemiya va «mushuk faryodi» sindromi mutatsiyalarning qaysi turlariga kiradi?",
        answer:
          "O‘roqsimon-hujayrali anemiya gen (nuqtaviy missens) mutatsiyasi natijasi bo‘lsa, «mushuk faryodi» sindromi 5-xromosoma kalta yelkasining deletsiyasi (5p−), ya’ni xromosoma aberratsiyasidir.",
      },
      {
        question:
          "Toq sonli poliploidlar (masalan, triploid 3n tarvuz yoki banan) nima uchun urug‘siz bo‘ladi?",
        answer:
          "Toq sonli poliploidlarda meyoz paytida uchta gomologik xromosoma qutblarga teng taqsimlana olmaydi, natijada hayotga yaroqsiz nomuvozanat gametalar hosil bo‘lib, o‘simlik steril (urug‘siz) qoladi.",
      },
    ],
    keyTerms: [
      "Tranzitsiya",
      "Missens",
      "Nonsens",
      "Siljish mutatsiyasi",
      "Deletsiya",
      "Inversiya",
      "Robertson translokatsiyasi",
      "Poliploidiya",
      "Aneuploidiya",
      "Nondisyunksiya",
      "Reparatsiya",
    ],
    references: "Genetika va genomika asoslari · 12-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/12-mavzu_Gen_xromosoma_va_genom_mutatsiyalari_709d730f.pdf",
    pdfTitle:
      "12-mavzu: Gen yoki nuqtaviy mutatsiyalar. Xromosoma va genom mutatsiyalari — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "12-mavzu: Gen, xromosoma va genom mutatsiyalari (Ma’ruza matni)",
        url: "/assets/aistudio/12-mavzu_Gen_xromosoma_va_genom_mutatsiyalari_709d730f.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-13",
    order: 13,
    code: "13",
    topicLabel: "13-mavzu",
    module: "III bo‘lim: Populyatsion va tibbiy genetika",
    title:
      "Populyatsion genetika. Populyatsiyalarda genetik muvozanat va uni nazariy asoslash (Xardi-Vaynberg qonuni)",
    syllabusPoints: [
      "Populyatsiya haqida tushuncha; populyatsiyaning genetik tuzilmasi.",
      "O‘z-o‘zidan va chetdan urug‘lanuvchi populyatsiyalarning genetik xususiyatlari.",
      "Xardi-Vaynberg qonuni va uning matematik asosi.",
      "Qonunning amaliy qo‘llanilishi va hisob-kitoblar.",
      "Genetik muvozanatni buzuvchi omillar va mikroevolyutsiya.",
    ],
    studyNotes:
      "Ideal panmikstik populyatsiyada allel (p + q = 1) va genotip (p² + 2pq + q² = 1) chastotalari bitta avlodda muvozanatga kelib, elementar evolyutsion omillar ta’sir qilmaguncha o‘zgarmaydi.",
    overview:
      "Evolyutsiyaning elementar birligi alohida organizm emas, balki umumiy gen fondiga ega populyatsiyadir. Xardi-Vaynberg qonuni haqiqiy populyatsiyalarda tanlanish, gen drifi, mutatsiya va migratsiya ta’sirini o‘lchash uchun nol-gipoteza hamda tibbiy genetikada tashuvchilar sonini hisoblash quroli vazifasini bajaradi.",
    sections: [
      {
        heading: "1. Populyatsiyaning genetik tuzilmasi va o‘z-o‘zidan/chetdan urug‘lanish",
        content:
          "Populyatsiya gen fondi allel chastotalari (p = (2·AA+Aa)/2N, q = (2·aa+Aa)/2N) va genotip chastotalari (D + H + R = 1) bilan ifodalanadi. O‘z-o‘zidan urug‘lanuvchi (avtogam) populyatsiyalarda geterozigotalar ulushi har avlodda (1/2)ⁿ ga kamayib, toza liniyalar hosil bo‘ladi; chetdan urug‘lanuvchi (allogam) populyatsiyalarda esa geterozigotalik va yashirin genetik yuk yuqori saqlanadi.",
      },
      {
        heading: "2. Xardi-Vaynberg qonuni va amal qilish shartlari",
        content:
          "1908-yilda G. Xardi va V. Vaynberg mustaqil ta’riflagan qonunga ko‘ra, cheksiz katta, panmikstik populyatsiyada mutatsiya, migratsiya va tabiiy tanlanish bo‘lmasa, barcha genotiplar teng yashovchan bo‘lsa, genotip chastotalari (p + q)² = p² + 2pq + q² = 1 ko‘rinishida avlodlar davomida saqlanadi. Bu dominant allelning o‘z-o‘zidan ko‘payib ketmasligini isbotladi.",
      },
      {
        heading: "3. Qonunning tibbiy-genetik hisoblashlarda qo‘llanilishi",
        content:
          "Autosom-retsessiv kasallik chastotasi q² bo‘yicha avval q = √q², p = 1 − q va geterozigota tashuvchilar ulushi 2pq topiladi. Masalan, fenilketonuriya 1:10 000 (q = 0,01) bo‘lganda tashuvchilar ~2% (har 50 kishidan 1 tasi) ni tashkil etadi. X-birikkan belgilarda erkaklarda kasallik chastotasi q, ayollarda esa q² ga teng bo‘ladi.",
      },
      {
        heading: "4. Elementar evolyutsion omillar va muvozanatli polimorfizm",
        content:
          "Xardi-Vaynberg muvozanatini buzuvchi omillar mikroevolyutsiyani keltirib chiqaradi: mutatsion bosim, tabiiy tanlanish (harakatlantiruvchi, barqarorlashtiruvchi, ajratuvchi, jinsiy), gen drifi (asoschi va bo‘g‘iz/butilka effektlari), migratsiya (gen oqimi) hamda tasodifiy bo‘lmagan chatishish (inbriding, assortativ). Geterozigotalar ustunligi (masalan, bezgak zonasida HbA HbS genotipi) zararli allellarni populyatsiyada muvozanatli polimorfizm holida saqlab qoladi.",
      },
    ],
    comparisonTable: {
      title: "O‘z-o‘zidan va chetdan urug‘lanuvchi populyatsiyalarning qiyosiy tavsifi",
      columns: ["Belgi", "O‘z-o‘zidan urug‘lanuvchi", "Chetdan urug‘lanuvchi"],
      rows: [
        ["Geterozigotalik", "Tez kamayadi (1/2ⁿ)", "Yuqori darajada saqlanadi"],
        ["Tuzilmasi", "Toza liniyalar aralashmasi", "Genetik jihatdan yaxlit"],
        ["Genetik yuk", "Kam (ochilib, yo‘qoladi)", "Ko‘p (yashirin holda)"],
        ["Inbred depressiya", "Deyarli yo‘q", "Kuchli"],
        ["Seleksiya usuli", "Individual tanlov, liniyalar", "Ommaviy tanlov, F₁ duragaylar"],
      ],
    },
    keyConcepts: [
      {
        term: "Xardi-Vaynberg qonuni",
        definition:
          "Ideal panmikstik populyatsiyada tashqi omillar bo‘lmaganda p² + 2pq + q² = 1 muvozanatining avlodlar davomida saqlanishi qonuni.",
      },
      {
        term: "Gen drifi",
        definition:
          "Kichik populyatsiyalarda allel chastotalarining tasodifiy, yo‘naltirilmagan tebranishi (asoschi effekti va bo‘g‘iz/butilka effekti).",
      },
      {
        term: "Geterozigotalar ustunligi",
        definition:
          "Geterozigota genotipning (masalan, HbA HbS) har ikki gomozigotadan ko‘ra yuqori moslashuvchanlikka ega bo‘lib, polimorfizmni saqlashi.",
      },
      {
        term: "Gen fondi",
        definition:
          "Muayyan populyatsiyadagi barcha individlarning genlari va allellari yig‘indisi.",
      },
      {
        term: "Valund effekti",
        definition:
          "Populyatsiya bir necha izolyatsiyalangan subpopulyatsiyalarga bo‘linib ketishi natijasida umumiy tanlanmada geterozigotalarning kamayib ko‘rinishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Hududda tug‘ma kar-soqovlikning retsessiv shakli 10 000 ta tug‘ilishdan 4 tasida uchraydi. q, p va 500 000 aholi orasidagi tashuvchilar sonini toping.",
        answer:
          "q² = 4 / 10 000 = 0,0004 → q = 0,02; p = 1 − 0,02 = 0,98. Tashuvchilar ulushi 2pq = 2 · 0,98 · 0,02 = 0,0392 (3,92%). 500 000 aholili viloyatda 500 000 · 0,0392 = 19 600 nafar tashuvchi mavjud.",
      },
      {
        question:
          "Daltonizm erkaklarda 8% chastotada uchrasa, ayollarda kasallik va tashuvchilik chastotasi necha foiz bo‘ladi?",
        answer:
          "Erkaklarda gemizigota sababli q = 0,08, p = 0,92. Ayollarda kasallik chastotasi q² = 0,0064 (0,64%), tashuvchi ayollar ulushi esa 2pq = 2 · 0,92 · 0,08 = 0,1472 (14,72%).",
      },
      {
        question:
          "Nima uchun inbriding allel chastotalarini (p va q) o‘zgartirmaydi, lekin genotip chastotalarini o‘zgartiradi?",
        answer:
          "Qarindosh nikohlar populyatsiyaga yangi allel qo‘shmaydi yoki yo‘qotmaydi, faqat geterozigotalar (2pq) ulushini kamaytirib, gomozigotalar (AA va aa) ulushini oshiradi.",
      },
    ],
    keyTerms: [
      "Populyatsiya",
      "Gen fondi",
      "Xardi-Vaynberg qonuni",
      "Panmiksiya",
      "Gen drifi",
      "Asoschi effekti",
      "Bo‘g‘iz effekti",
      "Mikroevolyutsiya",
    ],
    references: "Genetika va genomika asoslari · 13-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/13-mavzu_Populyatsion_genetika_va_XardiVaynberg_qonun_de3a0f57.pdf",
    pdfTitle:
      "13-mavzu: Populyatsion genetika. Populyatsiyalarda genetik muvozanat va uni nazariy asoslash (Xardi-Vaynberg qonuni) — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "13-mavzu: Populyatsion genetika va Xardi-Vaynberg qonuni (Ma’ruza matni)",
        url: "/assets/aistudio/13-mavzu_Populyatsion_genetika_va_XardiVaynberg_qonun_de3a0f57.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-14",
    order: 14,
    code: "14",
    topicLabel: "14-mavzu",
    module: "III bo‘lim: Populyatsion va tibbiy genetika",
    title:
      "Tibbiyot va odam genetikasi. Odam irsiyatining moddiy asoslari va antropogenetikaning metodlari",
    syllabusPoints: [
      "Odam genetikasining predmeti, vazifalari va o‘rganishdagi qiyinchiliklar.",
      "Odam irsiyatining moddiy asoslari: genom va kariotip.",
      "Genealogik (shajara) metod va irsiylanish tiplarini aniqlash.",
      "Egizaklar, sitogenetik va populyatsion-statistik metodlar.",
      "Biokimyoviy va molekulyar-genetik metodlar; prenatal diagnostika.",
    ],
    studyNotes:
      "Odamda tajriba chatishtirish mumkin bo‘lmagani uchun genealogik (shajara), egizaklar (Xolzinger formulasi H), sitogenetik, biokimyoviy va zamonaviy molekulyar-genetik (PZR, NGS, NIPT) metodlar majmuasi qo‘llaniladi.",
    overview:
      "Odam genetikasi (antropogenetika) uzoq avlod oralig‘i va axloqiy cheklovlarga qaramay, maxsus tadqiqot usullari tufayli odam genomini barcha turlardan mukammalroq o‘rganib, irsiy kasalliklarni tug‘ilishdan oldin va chaqaloqlikda aniqlash imkonini yaratdi.",
    sections: [
      {
        heading: "1. Odam genetikasini o‘rganishdagi qiyinchiliklar va yechimlar",
        content:
          "Gibridologik metod qo‘llanilmasligi, avlod oralig‘ining uzunligi (20–25 yil), farzandlar sonining kamligi va axloqiy cheklovlar sababli odam genetikasida «tabiat tajribalari»dan foydalaniladi: chatishtirish o‘rniga shajara tahlili, muhit nazorati o‘rniga egizaklar metodi, xromosoma tahlilida differensial bo‘yash va FISH, kech namoyon bo‘luvchi belgilarda esa presimptomatik DNK-diagnostika ishlatiladi.",
      },
      {
        heading: "2. Yadro va mitoxondrial genom; irsiylanish tiplari",
        content:
          "Odamning yadro genomi ~3,1 mlrd j.n. (46 ta xromosoma, ~19–20 ming gen) va mitoxondrial genomi 16 569 j.n. (37 ta gen, faqat onadan o‘tadi, geteroplazmiya xos) dan tashkil topgan. Odam belgilari autosom-dominant (AD), autosom-retsessiv (AR), X-birikkan retsessiv (X-R), X-birikkan dominant, Y-birikkan va mitoxondrial tiplarda irsiylanadi. «Irsiy» va «tug‘ma» tushunchalarini farqlash muhim.",
      },
      {
        heading: "3. Genealogik (shajara) va egizaklar metodlari",
        content:
          "F. Galton (1865) taklif etgan shajara metodi probandadan boshlab qarindoshlar anamnezini maxsus belgilar (kvadrat — erkak, doira — ayol, nuqtali — tashuvchi, ikki chiziq — qarindosh nikoh) bilan chizib, AD/AR/X-R tipni va de novo mutatsiyalarni aniqlaydi. Egizaklar metodida bir tuxumli (monozigot, 100% umumiy gen) va ikki tuxumli (dizigot, ~50% umumiy gen) egizaklar konkordantligi Xolzinger formulasi H = (Cmz − Cdz) / (100 − Cdz) orqali taqqoslanadi.",
      },
      {
        heading: "4. Biokimyoviy, molekulyar-genetik va prenatal diagnostika",
        content:
          "Biokimyoviy skrining fenilketonuriya, galaktozemiya, gipotireoz va mukovissidozni erta aniqlaydi. Prenatal diagnostika noinvaziv (UTT, biokimyoviy skrining, 10-haftadan ona qonidagi homila DNKsini tekshiruvchi NIPT) va invaziv (10–13 haftada xorion biopsiyasi, 16–20 haftada amniosentez, 20+ haftada kordosentez) usullarga bo‘linadi. Laboratoriyada PZR, Sanger, NGS, MLPA va mikromassiv (array) qo‘llaniladi.",
      },
    ],
    comparisonTable: {
      title: "Shajara tahlilida asosiy irsiylanish tiplarini ajratish mezonlari",
      columns: [
        "Belgi",
        "Autosom-dominant (AD)",
        "Autosom-retsessiv (AR)",
        "X-birikkan retsessiv (X-R)",
      ],
      rows: [
        [
          "Har bir avlodda uchrashi",
          "Ha (avlod oralab chiqmaydi)",
          "Yo‘q (avlodni oralaydi)",
          "Yo‘q (ko‘pincha avlod oralaydi)",
        ],
        [
          "Jinslar zararlanishi",
          "Erkak va ayolda teng",
          "Erkak va ayolda teng",
          "Asosan erkaklarda ko‘p",
        ],
        ["Qarindosh nikohida ortishi", "Yo‘q", "Ha (sezilarli ortadi)", "Yo‘q"],
        ["Otadan o‘g‘ilga o‘tishi", "Ha", "Ha", "Hech qachon o‘tmaydi"],
      ],
    },
    keyConcepts: [
      {
        term: "Probanda",
        definition:
          "Oila shajarasini tuzish va genetik tahlil qilish boshlanadigan shaxs (shajarada o‘q belgisi bilan ko‘rsatiladi).",
      },
      {
        term: "Geteroplazmiya",
        definition:
          "Bitta hujayrada normal va mutant mitoxondrial DNK nusxalarining aralash holda bo‘lishi; kasallik og‘irligini belgilaydi.",
      },
      {
        term: "Xolzinger formulasi",
        definition:
          "H = (Cmz − Cdz)/(100 − Cdz) formulasi bo‘lib, egizaklarda konkordantlik asosida belgida irsiyat ulushini baholaydi.",
      },
      {
        term: "NIPT (noinvaziv prenatal test)",
        definition:
          "Homiladorlikning 10-haftasidan boshlab ona qonida aylanib yuruvchi homila DNK bo‘laklarini xavfsiz tahlil qilish usuli.",
      },
      {
        term: "Dermatoglifika",
        definition:
          "Barmoq va kaft terisidagi irsiy naqshlarni o‘rganuvchi, ayrim xromosoma sindromlarida (Daun) yordamchi skrining usuli.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Tadqiqotda 120 juft monozigot egizakning 78 tasida, 180 juft dizigot egizakning 45 tasida kasallik ikkalasida ham kuzatildi. Xolzinger koeffitsiyenti H ni hisoblang.",
        answer:
          "Cmz = (78 / 120) · 100 = 65%; Cdz = (45 / 180) · 100 = 25%. Xolzinger formulasi: H = (65 − 25) / (100 − 25) = 40 / 75 ≈ 0,53 (irsiyat va muhitning birgalikdagi ta’siri).",
      },
      {
        question:
          "Sog‘lom ota-onada axondroplaziyali (autosom-dominant) bola tug‘ilsa, buni qanday genetik sabab bilan tushuntirish mumkin?",
        answer:
          "Axondroplaziya holatlarining ~80% qismi ota-onaning jinsiy hujayralarida paydo bo‘lgan yangi (de novo) mutatsiya natijasidir; shuning uchun bu irsiy patologiya hisoblanadi.",
      },
      {
        question:
          "Invaziv prenatal diagnostika usullari (amniosentez, xorion biopsiyasi) nima uchun faqat aniq tibbiy ko‘rsatma bo‘lganda o‘tkaziladi?",
        answer:
          "Chunki invaziv usullar aniq tashxis bersa-da, 0,5–1% holatlarda homila tushishi xavfini tug‘diradi; shu sababli dastlab UTT, biokimyoviy skrining va NIPT kabi xavfsiz usullar qo‘llaniladi.",
      },
    ],
    keyTerms: [
      "Antropogenetika",
      "Probanda",
      "Genealogik metod",
      "Monozigot egizaklar",
      "Konkordantlik",
      "Geteroplazmiya",
      "NIPT",
      "Amniosentez",
      "Dermatoglifika",
    ],
    references: "Genetika va genomika asoslari · 14-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/14-mavzu_Odam_genetikasi_moddiy_asoslari_va_o_rganish_dad1259d.pdf",
    pdfTitle:
      "14-mavzu: Tibbiyot va odam genetikasi. Odam irsiyatining moddiy asoslari va antropogenetikaning metodlari — Ma’ruza matni",
    pdfDocuments: [
      {
        title: "14-mavzu: Odam genetikasi va antropogenetika metodlari (Ma’ruza matni)",
        url: "/assets/aistudio/14-mavzu_Odam_genetikasi_moddiy_asoslari_va_o_rganish_dad1259d.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "genetika-15",
    order: 15,
    code: "15",
    topicLabel: "15-mavzu",
    module: "III bo‘lim: Populyatsion va tibbiy genetika",
    title:
      "Irsiy kasalliklar klassifikatsiyasi. Immunogenetika. Genetik xavfsizlik muammolari va tibbiy-genetik maslahat",
    syllabusPoints: [
      "Irsiy kasalliklarning klassifikatsiyasi va umumiy tavsifi.",
      "Gen (monogen) va xromosoma kasalliklari.",
      "Ko‘p omilli kasalliklar va genetik moyillik.",
      "Immunogenetika: HLA tizimi, qon guruhlari va transplantatsiya.",
      "Genetik xavfsizlik muammolari va tibbiy-genetik maslahat.",
    ],
    studyNotes:
      "Irsiy kasalliklar monogen, xromosoma, ko‘p omilli (chegara modeli) va mitoxondrial guruhlarga bo‘linadi; tibbiy-genetik maslahat esa ixtiyoriylik, maxfiylik va direktiv bo‘lmaganlik tamoyillariga asoslanadi.",
    overview:
      "Bugungi kunda 7 mingdan ortiq irsiy kasallik ma’lum bo‘lib, ularni erta skrining, patogenetik davolash, immunogenetik moslik (HLA, rezus-konflikt profilaktikasi), genetik monitoring hamda bioetik jihatdan to‘g‘ri tibbiy-genetik maslahat orqali samarali boshqarish mumkin.",
    sections: [
      {
        heading: "1. Monogen va xromosoma kasalliklari",
        content:
          "Monogen kasalliklar (~1:100) mendel qonunlari bo‘yicha irsiylanadi: AR (fenilketonuriya — maxsus parhez bilan davolanadi, mukovissidoz, galaktozemiya, albinizm), AD (axondroplaziya, Marfan, Xantington xoreyasi) va X-birikkan (gemofiliya, Dyushenn miodistrofiyasi). Xromosoma kasalliklari (~1:150) esa asosan yangi nondisyunksiya natijasi bo‘lib, Daun (47,+21), Patau (47,+13), Edvards (47,+18), Klaynfelter (47,XXY) va Shereshevskiy-Terner (45,X) sindromlarini o‘z ichiga oladi.",
      },
      {
        heading: "2. Ko‘p omilli kasalliklar, chegara modeli va farmakogenetika",
        content:
          "Gipertaniya, 2-tip qandli diabet, astma, lab-tanglay yorig‘i va ko‘pchilik saraton turlari ko‘p gen va muhit ta’siridagi multifaktorial kasalliklardir. Ular chegara (threshold) modeli bilan tushuntiriladi; turmush tarzini o‘zgartirish orqali ularning oldini olish mumkin. Farmakogenetika esa genotipga mos dori va doza tanlashni (shaxsiylashtirilgan tibbiyot) ta’minlaydi.",
      },
      {
        heading: "3. Immunogenetika: HLA tizimi va rezus-konflikt",
        content:
          "6-xromosomada joylashgan HLA (I va II sinf) kompleksi organizmning to‘qima mosligini ta’minlaydi va gaplotip sifatida irsiylanadi (aka-uka/opa-singillarda to‘liq mos kelish ehtimoli 25%). Rh(−) ona va Rh(+) homila o‘rtasidagi rezus-konfliktning oldini olish uchun birinchi tug‘ruqdan keyin 72 soat ichida anti-D immunoglobulin yuboriladi.",
      },
      {
        heading: "4. Genetik xavfsizlik, gen terapiyasi va tibbiy-genetik maslahat",
        content:
          "Aholi gen fondini himoya qilish uchun mutagen yuk ustidan genetik monitoring olib boriladi. Tibbiy-genetik maslahat tashxisni aniqlashtirish, shajara tuzish, xavfni baholash (<5% past, 6–20% o‘rtacha, >20% yuqori) bosqichlaridan iborat bo‘lib, ixtiyoriylik, maxfiylik, direktiv bo‘lmaganlik va kamsitmaslik tamoyillariga tayanadi. Somatik gen terapiyasi ruxsat etilgan, germinal tahrirlash esa bioetik jihatdan taqiqlangan.",
      },
    ],
    comparisonTable: {
      title: "Monogen va ko‘p omilli (multifaktorial) kasalliklarning farqi",
      columns: ["Mezon", "Monogen kasalliklar", "Ko‘p omilli kasalliklar"],
      rows: [
        ["Genlar soni", "Bitta gen", "Ko‘p sonli genlar"],
        [
          "Irsiylanish qonuni",
          "Mendel qonunlari bo‘yicha",
          "Oddiy mendel nisbatlariga bo‘ysunmaydi",
        ],
        ["Tashqi muhit roli", "Kam", "Hal qiluvchi"],
        ["Aholidagi chastotasi", "Kam uchraydi (~1:100)", "Keng tarqalgan (~1:20 va ko‘p)"],
        ["Xavf hisobi", "Nazariy aniq (25%, 50%)", "Empirik jadvallar bo‘yicha"],
        ["Profilaktika", "Cheklangan (parhez, skrinning)", "Samarali (sog‘lom turmush tarzi)"],
      ],
    },
    keyConcepts: [
      {
        term: "Chegara (threshold) modeli",
        definition:
          "Ko‘p omilli kasalliklarda genlar va muhit ta’sirida to‘plangan moyillik ma’lum kritik chegaradan oshgandagina kasallik namoyon bo‘lishi modeli.",
      },
      {
        term: "HLA tizimi",
        definition:
          "Odam 6-xromosomasining kalta yelkasida joylashgan, yuzlab allellarga ega to‘qima moslik va transplantatsiya kompleksi.",
      },
      {
        term: "Rezus-konflikt",
        definition:
          "Rh(−) onaning Rh(+) homila eritrotsitlariga qarshi anti-D antitanalar ishlab chiqarib, yangi tug‘ilganlar gemolitik kasalligini chaqirishi.",
      },
      {
        term: "Genetik yuk",
        definition:
          "Populyatsiya gen fondida yashirin geterozigota holatda saqlanib yuruvchi zararli retsessiv allellar majmui (har odamda o‘rtacha 5–8 ta).",
      },
      {
        term: "Direktiv bo‘lmagan maslahat",
        definition:
          "Tibbiy-genetik maslahatda shifokor xolis ilmiy ma’lumot va xavf foizini berishi, yakuniy qarorni esa oilaning o‘zi qabul qilishi tamoyili.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Birinchi farzandi fenilketonuriya (autosom-retsessiv) bilan tug‘ilgan sog‘lom ota-onaning ikkinchi farzandida kasallik takrorlanish va sog‘lom bolaning tashuvchi bo‘lish ehtimoli qancha?",
        answer:
          "Ota-ona ikkalasi ham geterozigota tashuvchi (Aa × Aa). Ikkinchi bolada kasallik (aa) takrorlanish xavfi 25% (1/4 — yuqori xavf guruhi). Sog‘lom tug‘ilgan uchta ehtimol (1 AA : 2 Aa) orasidan tashuvchi bo‘lish ehtimoli 2/3 (~66,7%) ni tashkil etadi.",
      },
      {
        question:
          "Transplantatsiyada aka-uka va opa-singillar o‘rtasida HLA tizimi bo‘yicha to‘liq mos kelish ehtimoli necha foiz?",
        answer:
          "HLA genlari 6-xromosomada gaplotip sifatida birikkan holda irsiylangani uchun ota va onadan 4 ta kombinasiyadan aynan bir xili tushish ehtimoli 25% ni tashkil etadi.",
      },
      {
        question:
          "Somatik gen terapiyasi va germinal (jinsiy hujayra) genom tahrirlash o‘rtasidagi axloqiy munosabat nima uchun keskin farq qiladi?",
        answer:
          "Somatik gen terapiyasi faqat bemorning tana hujayralariga ta’sir qilib avlodga o‘tmagani uchun axloqan ruxsat etilgan; germinal tahrirlash esa kelajak avlodlarga o‘tadigan o‘zgarishlar qilgani uchun ko‘pchilik davlatlarda taqiqlangan.",
      },
    ],
    keyTerms: [
      "Monogen kasallik",
      "Xromosoma kasalligi",
      "Ko‘p omilli kasallik",
      "HLA tizimi",
      "Rezus-konflikt",
      "Farmakogenetika",
      "Genetik monitoring",
      "Tibbiy-genetik maslahat",
      "Bioetika",
    ],
    references: "Genetika va genomika asoslari · 15-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/15-mavzu_Irsiy_kasalliklar_immunogenetika_va_genetik__d1779f69.pdf",
    pdfTitle:
      "15-mavzu: Irsiy kasalliklar klassifikatsiyasi. Immunogenetika. Genetik xavfsizlik muammolari va tibbiy-genetik maslahat — Ma’ruza matni",
    pdfDocuments: [
      {
        title:
          "15-mavzu: Irsiy kasalliklar, immunogenetika va tibbiy-genetik maslahat (Ma’ruza matni)",
        url: "/assets/aistudio/15-mavzu_Irsiy_kasalliklar_immunogenetika_va_genetik__d1779f69.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
];
