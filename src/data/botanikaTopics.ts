export interface BotanikaTopic {
  id: string;
  order: number;
  code: string;
  topicLabel: string;
  semester: "I semestr" | "II semestr";
  title: string;
  syllabusPoints: string[];
  studyNotes: string;
  keyTerms: string[];
  references: string;
}

export const BOTANIKA_TOPICS: BotanikaTopic[] = [
  {
    id: "bot-1",
    order: 1,
    code: "1",
    topicLabel: "1-mavzu",
    semester: "I semestr",
    title: "Novda va kurtak haqida umumiy tushuncha. Poya va uning vazifasi.",
    syllabusPoints: [
      "Novda va kurtak haqida umumiy tushuncha. Poya va uning vazifasi. Poyada barglarning joylashuvi.",
      "Novdalar tizimining paydo bo‘lishi, o‘sishi va shoxlanishi.",
      "Dixotomik, monopodial, simpodial va soxta dixotomik shoxlanishning tuzilishi va o‘simlik hayotidagi ahamiyati.",
    ],
    studyNotes:
      "Novda — barg va kurtaklar joylashgan poyadan iborat yuksak o‘simliklarning asosiy vegetativ organi. Kurtak esa boshlang‘ich novda bo‘lib, o‘sish konusi va boshlang‘ich bargchalardan tashkil topadi. Poyada barglar navbatli, qarama-qarshi va halqasimon joylashadi. Shoxlanishning 4 asosiy tipi mavjud: dixotomik (ayrisimon), monopodial (asosiy o‘q cheksiz o‘sadi), simpodial (yon kurtaklar asosiy o‘q o‘rnini oladi) va soxta dixotomik.",
    keyTerms: ["Novda", "Kurtak", "Barg joylashuvi", "Monopodial", "Simpodial", "Dixotomik"],
    references: "[2, 3, 8, 12]",
  },
  {
    id: "bot-2",
    order: 2,
    code: "2",
    topicLabel: "2-mavzu",
    semester: "I semestr",
    title:
      "Poyaning birlamchi va ikkilamchi anatomik tuzilishi, shakli o‘zgargan novdalarning tuzilishi.",
    syllabusPoints: [
      "Poyaning birlamchi va ikkilamchi anatomik tuzilishi, ularning o‘xshashlik va farqlari, daraxt poyasining tuzilishi.",
      "Yer ostki va yer ustki shakli o‘zgargan novdalar, ularning kelib chiqishi va ahamiyati.",
    ],
    studyNotes:
      "Poyaning birlamchi tuzilishi apikal meristema faoliyati natijasida hosil bo‘lib, epidermis, birlamchi po‘stloq va markaziy silindrdan iborat. Ikki urug‘pallali va ochiq urug‘li o‘simliklarda kambiy va fellogen hisobiga ikkilamchi yo‘g‘onlashish sodir bo‘ladi (yog‘ochlik va lub qavatlari, yillik halqalar). Shakli o‘zgargan yer ostki novdalarga ildizpoya, tugunak va piyozbosh; yer ustki novdalarga esa gajak, tikan va fillokladiy kiradi.",
    keyTerms: ["Kambiy", "Yillik halqa", "Ildizpoya", "Tugunak", "Piyozbosh", "Fillokladiy"],
    references: "[1, 5, 6, 8]",
  },
  {
    id: "bot-3",
    order: 3,
    code: "3",
    topicLabel: "3-mavzu",
    semester: "I semestr",
    title: "Bargning morfologik va anatomik tuzilishi, asosiy vazifasi.",
    syllabusPoints: [
      "Bargning morfologik tuzilishi, shakllari va asosiy vazifasi. Shakli o‘zgargan barglar (metamorfozi).",
      "Bargning anatomik tuzilishi, tiplari. Krans hujayrali va krans hujayrasiz barglarning tuzilishi.",
      "Bir urug‘pallali va ikki urug‘pallali o‘simliklar barglarining anatomik tuzilishi.",
    ],
    studyNotes:
      "Barg fotosintez, transpiratsiya va gaz almashinuvini ta’minlovchi asosiy organ bo‘lib, barg yaprog‘i, bandi, asosi va yonbargchalardan iborat. Anatomik jihatdan yuqori va pastki epidermis, ustunsimon hamda g‘ovak mezofill va o‘tkazuvchi boylamlardan tashkil topadi. C4 o‘simliklarda tomirlar atrofida xarakterli Krans anatomiyasi (toj hujayralar) uchraydi. Metamorfozlarga tikanlar, gajaklar va hasharot tutuvchi barglar misol bo‘ladi.",
    keyTerms: ["Mezofill", "Og‘izcha", "Krans anatomiya", "Transpiratsiya", "Metamorfoz"],
    references: "[2, 3, 5, 8]",
  },
  {
    id: "bot-4",
    order: 4,
    code: "4",
    topicLabel: "4-mavzu",
    semester: "I semestr",
    title:
      "O‘simliklarning qayta tiklanish va ko‘payish. O‘simliklarning jinssiz va jinsiy ko‘payishi.",
    syllabusPoints: [
      "O‘simliklarning vegetativ ko‘payishi – tabiiy va sun’iy vegetativ ko‘paytirish (in-situ, ex-situ, in-vitro) usullari.",
      "O‘simliklarning jinssiz va jinsiy ko‘payishi, uning biologik ahamiyati. Sporalar yordamida ko‘payish. Gametalar va zigotalar.",
      "Yuksak o‘simliklardagi jinssiz (sporofit) va jinsiy (gametofit) naslning gallanishlari. Ochiq urug‘li o‘simliklarning urug‘lar yordamida ko‘payishi.",
    ],
    studyNotes:
      "Ko‘payish tirik organizmlarning nasl qoldirish xususiyatidir. Vegetativ ko‘payish tabiiy (ildizpoya, jingalak, tugunak) va sun’iy (qalamcha, payvand, in-vitro mikroklonal ko‘paytirish) turlarga bo‘linadi. Jinssiz ko‘payish sporalar orqali amalga oshadi. Jinsiy ko‘payishda gaploid gametalar qo‘shilib, diploid zigota hosil qiladi va hayot siklida sporofit (2n) hamda gametofit (n) nasllar gallanadi.",
    keyTerms: ["Vegetativ ko‘payish", "In-vitro", "Sporofit", "Gametofit", "Nasl gallanishi"],
    references: "[1, 2, 3, 8]",
  },
  {
    id: "bot-5",
    order: 5,
    code: "5",
    topicLabel: "5-mavzu",
    semester: "I semestr",
    title: "Gulning tuzilishi, tiplari va vazifasi.",
    syllabusPoints: [
      "Gulning tuzilishi, xillari va vazifasi. Gul qismlarining joylashishi. Gul formulasi va diagrammasi.",
      "Androtsey va mikrosporogenez haqida umumiy tushuncha. Chang donachalarining tuzilishi va turlari.",
      "Ginetseyning tuzilishi va turlari. Megasporogenez va urg‘ochi gametofit. Urug‘ kurtakning tuzilishi.",
    ],
    studyNotes:
      "Gul — yopiq urug‘li o‘simliklarning jinsiy ko‘payish organi. U gulband, gul o‘rni, kosachabarglar (K), tojbarglar (C), changchilar — androtsey (A) va urug‘chi — ginetseydan (G) iborat. Changdonlarda mikrosporogenez natijasida chang donachalari (erkak gametofit), urug‘kurtak ichida esa megasporogenez orqali 8 yadroli murtak xaltasi (urg‘ochi gametofit) shakllanadi.",
    keyTerms: ["Androtsey", "Ginetsey", "Gul formulasi", "Mikrosporogenez", "Megasporogenez"],
    references: "[2, 5, 8]",
  },
  {
    id: "bot-6",
    order: 6,
    code: "6",
    topicLabel: "6-mavzu",
    semester: "I semestr",
    title: "To‘pgullarning tuzilishi, ularning asosiy morfologik belgilariga ko‘ra tiplari.",
    syllabusPoints: [
      "To‘pgullarning tuzilishi, ularning asosiy morfologik belgilariga ko‘ra tiplarga bo‘linishi.",
      "Oddiy va murakkab to‘pgullar va ularning turlari haqida nazariy ma’lumotlar asosida bilimlarni shakllantirish.",
    ],
    studyNotes:
      "To‘pgul — bitta umumiy o‘qqa ma’lum tartibda joylashgan gullar majmuasi bo‘lib, changlanish samaradorligini oshiradi. Monopodial (botrik) to‘pgullarda asosiy o‘q uzoq o‘sadi (shingil, boshoq, soyabon, savatcha, so‘ta, qalqon); simpozidial (simoz) to‘pgullarda esa asosiy o‘q gul bilan tugaydi (monoxaziy, dixaziy, pleyoxaziy). Murakkab to‘pgullarga murakkab boshoq, murakkab soyabon va ro‘vak kiradi.",
    keyTerms: ["Shingil", "Boshoq", "Soyabon", "Savatcha", "Ro‘vak", "Simoz to‘pgul"],
    references: "[4, 6, 7, 8]",
  },
  {
    id: "bot-7",
    order: 7,
    code: "7",
    topicLabel: "7-mavzu",
    semester: "I semestr",
    title: "Gulli o‘simliklarda changlanish va urug‘lanish.",
    syllabusPoints: [
      "Changlanish. Gullarni changlanishga moslanish xususiyatlari. Chetdan va o‘zidan changlanishning biologik ahamiyati.",
      "Gulli o‘simliklarda urug‘lanish. Qo‘sh urug‘lanish jarayoni va uning biologik ahamiyati.",
      "Gulli o‘simliklar embrioni (murtak)ning taraqqiyot sikli haqida nazariy ma’lumotlar.",
    ],
    studyNotes:
      "Changlanish — chang donachalarining changdondan urug‘chi tumshuqchasiga tushish jarayoni (o‘zidan — avtogamiya, chetdan — ksenogamiya: entomofiliya, anemofiliya, gidrofiliya). S.G. Navashin tomonidan kashf etilgan qo‘sh urug‘lanishda ikki spermiydan biri tuxum hujayra bilan qo‘shilib diploid murtak (2n), ikkinchisi esa markaziy hujayra bilan qo‘shilib triploid endosperm (3n) hosil qiladi.",
    keyTerms: ["Changlanish", "Qo‘sh urug‘lanish", "Endosperm (3n)", "Zigot", "Embriogenez"],
    references: "[4, 5, 8]",
  },
  {
    id: "bot-8",
    order: 8,
    code: "8",
    topicLabel: "8-mavzu",
    semester: "I semestr",
    title: "Yopiq urug‘li o‘simliklar urug‘ining tuzilishi.",
    syllabusPoints: [
      "Gulli o‘simliklar urug‘ining tuzilishi. Bir pallali va ikki pallali o‘simliklar urug‘lari tuzilishidagi asosiy farqlari.",
      "O‘ziga xos xususiyatlari hamda o‘simlik hayotidagi ahamiyati.",
      "Urug‘larning unishi. Maysalarning tuzilishi haqida nazariy ma’lumotlar asosida bilimlarni shakllantirish.",
    ],
    studyNotes:
      "Urug‘ urug‘kurtakdan rivojlanib, urug‘ po‘sti, murtak (boshlang‘ich ildizcha, poyacha, kurtakcha va urug‘pallalar) hamda zaxira oziq modda (endosperm yoki perisperm) dan tashkil topadi. Ikki urug‘pallalilarda (masalan, loviya) ikkita urug‘palla barg bo‘lib, oziq modda ko‘pincha ularda to‘planadi; bir urug‘pallalilarda (masalan, bug‘doy) esa bitta urug‘palla — qalqoncha va yirik endosperm mavjud.",
    keyTerms: ["Urug‘ po‘sti", "Murtak", "Urug‘palla", "Endosperm", "Maysa", "Unish"],
    references: "O‘quv dasturi asosiy manbalari",
  },
  {
    id: "bot-9",
    order: 9,
    code: "9",
    topicLabel: "9-mavzu",
    semester: "I semestr",
    title: "Mevalarning tuzilishi va xilma-xilligi, klassifikatsiyasi.",
    syllabusPoints: [
      "Mevalarning tuzilishi va xilma-xilligi, klassifikatsiyasi haqida nazariy ma’lumotlar asosida bilimlarni shakllantirish.",
      "Ochiq va yopiq urug‘li o‘simliklar urug‘ va mevalarning tarqalishining o‘ziga xos moslanishlari.",
    ],
    studyNotes:
      "Meva urug‘lanishdan keyin tugunchadan (ba’zan gulning boshqa qismlari ishtirokida — soxta mevalar) rivojlanadi. Meva devori (perikarpiy) ekzokarpiy, mezokarpiy va endokarpiydan iborat. Mevalar ho‘l (rezavor, danakli, olma, qovoq) va quruq (ko‘sakcha, dukkak, qo‘zoq, doncha, yong‘oqcha, pista) turlarga bo‘linadi. Tarqalish usullari: anemoxoriya (shamol), zooxoriya (hayvonlar), gidroxoriya (suv) va avtoxoriya.",
    keyTerms: ["Perikarpiy", "Ho‘l mevalar", "Quruq mevalar", "Anemoxoriya", "Zooxoriya"],
    references: "[4, 6, 7, 8]",
  },
  {
    id: "bot-10",
    order: 10,
    code: "10",
    topicLabel: "10-mavzu",
    semester: "I semestr",
    title: "O‘simliklarning yashash sharoitiga moslanishlari va ekologik guruhlari.",
    syllabusPoints: [
      "O‘simliklarning yashash sharoitiga moslanish belgilari va organlarining tuzilishi.",
      "Ekologik guruhlar va o‘simliklarning hayotiy shakllari haqida tushuncha.",
    ],
    studyNotes:
      "Ekologik omillar (suv, yorug‘lik, harorat, tuproq) ta’sirida o‘simliklarda turli ekologik guruhlar shakllangan. Namlikka munosabatiga ko‘ra: gidrofitlar, gigrofitlar, mezofitlar va kserofitlar (sukkulenlar va sklerofitlar). Yorug‘likka ko‘ra: geliofitlar, ssiofitlar. Raunkiyer bo‘yicha hayotiy shakllar: fanerofitlar, xamefitlar, gemikriptofitlar, kriptofitlar va terofitlar.",
    keyTerms: ["Kserofit", "Mezofit", "Gidrofit", "Geliofit", "Hayotiy shakllar"],
    references: "[4, 6, 7, 8]",
  },
  {
    id: "bot-11",
    order: 11,
    code: "11",
    topicLabel: "11-mavzu",
    semester: "I semestr",
    title: "Gulli o‘simliklar ontogenezi. O‘simliklarda mavsumiy o‘zgarishlar.",
    syllabusPoints: [
      "Gulli o‘simliklar ontogenezi haqida tushuncha, ularning rivojlanishi.",
      "O‘simliklarda uchraydigan mavsumiy o‘zgarishlar. O‘simliklar hayotining davomiyligi haqida nazariy ma’lumotlar.",
    ],
    studyNotes:
      "Ontogenez — urug‘langan tuxum hujayradan tortib tabiiy nobud bo‘lgungacha bo‘lgan individual rivojlanish davri. U embrional, yuvenil (yoshlik), generativ (gullash va mevalash) hamda senil (qarish) bosqichlarini o‘z ichiga oladi. Hayot davomiyligiga ko‘ra o‘simliklar bir yillik (efemerlar), ikki yillik va ko‘p yilliklarga (daraxtlar, butalar, ko‘p yillik o‘tlar) bo‘linadi.",
    keyTerms: ["Ontogenez", "Yuvenil davr", "Generativ davr", "Efemerlar", "Mavsumiy ritm"],
    references: "[4, 6, 7, 8]",
  },
  {
    id: "bot-12",
    order: 12,
    code: "12",
    topicLabel: "12-mavzu",
    semester: "II semestr",
    title:
      "O‘simliklar sistematikasining maqsad va vazifalari, tarixi. Tuban va yuksak o‘simliklar.",
    syllabusPoints: [
      "O‘simliklar sistematikasining maqsad va vazifalari, tarixi. Organik olam klassifikatsiyasi, uning amaliy va nazariy ahamiyati.",
      "Tuban (Thallobionta) va yuksak o‘simliklar (Cormobionta) haqida umumiy tushuncha. Taksonomik birliklar va ularga ta’rif.",
      "Sistematikaning rivojlanishida evolyutsion nazariyalarning ahamiyati. Viruslar, bakteriyalar va ularning hujayra tuzilishi, ko‘payishi klassifikatsiyasi, tabiatda tarqalishi.",
    ],
    studyNotes:
      "O‘simliklar sistematikasi turlarni tasniflash, nomlash (Karl Linney binar nomenklaturasi) va ular orasidagi qarindoshlikni aniqlash bilan shug‘ullanadi. Taksonomik birliklar: Tur — Turkum — Oila — Tartib — Sinf — Bo‘lim — Dunyo. Tuban o‘simliklar tanasi tallom (qatana) dan iborat bo‘lib, haqiqiy to‘qima va organlarga ajralmagan; yuksak o‘simliklar esa poya, barg va ildizga ega.",
    keyTerms: ["Sistematika", "Takson", "Binar nomenklatura", "Thallobionta", "Cormobionta"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-13",
    order: 13,
    code: "13",
    topicLabel: "13-mavzu",
    semester: "II semestr",
    title: "Suvo‘tlarining tuzilishi, ko‘payishi, tarqalishi va klassifikatsiyasi.",
    syllabusPoints: [
      "Suvo‘tlarining tuzilishi, ko‘payishi, tarqalishi va klassifikatsiyasi.",
      "Ko‘k yashil suvo‘tlari bo‘limiga umumiy xarakteristika va asosiy vakillari, tarqalishi, ahamiyati.",
      "Yashil suv o‘tlar bo‘limi (Chlorophyta). Umumiy xarakteristika, tana tuzilishining asosiy xususiyatlari. Ko‘payish usullari, klassifikatsiyasi.",
      "Xara (nurli) suvo‘tlar bo‘limi. Tuzilishi, ko‘payishi va rivojlanish sikli, tarqalishi.",
    ],
    studyNotes:
      "Suvo‘tlar xlorofill saqlovchi, asosan suv muhitida yashovchi avtotrof tallomli organizmlardir. Ko‘k-yashil suvo‘tlar (sianobakteriyalar) prokariot hujayraga ega (Nostoc, Oscillatoria). Yashil suvo‘tlar (Chlorophyta) xlorofill a va b saqlaydi, bir hujayrali (Xlamidomonada, Xlorella), kolonial (Volvoks) va ko‘p hujayrali ipcha (Spirogira, Ulotriks) shakllarda uchraydi. Xara suvo‘tlari murakkab tashqi tuzilishi bilan yuksak o‘simliklarga o‘xshaydi.",
    keyTerms: ["Tallom", "Xromatofor", "Chlorophyta", "Sianobakteriya", "Xara suvo‘tlari"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-14",
    order: 14,
    code: "14",
    topicLabel: "14-mavzu",
    semester: "II semestr",
    title:
      "Sariq yashil (Xanthophyta), Diatom (Diatomophyta), Qo‘ng‘ir (Phaeophyta) va Qizil (Rhodophyta) suv o‘tlari bo‘limlarining umumiy tavsifi.",
    syllabusPoints: [
      "Sariq yashil suvo‘tlar bo‘limi (Xanthophyta) va Diatom (Diatomophyta) suv o‘tlar bo‘limi umumiy ta’rifi, ekologiyasi, klassifikatsiyasi.",
      "Qo‘ng‘ir suv o‘tlari bo‘limi (Phaeophyta). Tarqalishi, ichki va tashqi tuzilishi, ko‘payish usullari va asosiy vakillari.",
      "Qizil suv o‘tlar bo‘limi (Rhodophyta). Rivojlanishining o‘ziga xos tomonlari. Suv o‘tlarining tabiatda va inson hayotidagi ahamiyati.",
    ],
    studyNotes:
      "Diatom suvo‘tlar ikki pallali kremniyli (SiO2) qobiqqa ega bo‘lib, okean va ko‘llarda asosiy fitoplanktonni tashkil etadi (Navicula, Pinnularia). Qo‘ng‘ir suvo‘tlar (Laminariya, Fukus) fukoksantin pigmenti hisobiga qo‘ng‘ir rangda bo‘ladi va dengiz karami hamda alginatlar manbai hisoblanadi. Qizil suvo‘tlar (Porfira, Gellidium) fikoeritrin pigmenti tufayli chuqur suvlarda fotosintez qiladi va agar-agar olishda ishlatiladi.",
    keyTerms: ["Diatomophyta", "Phaeophyta", "Rhodophyta", "Laminariya", "Agar-agar"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-15",
    order: 15,
    code: "15",
    topicLabel: "15-mavzu",
    semester: "II semestr",
    title: "Zamburug‘lar bo‘limi (Mycophyta, Fungi).",
    syllabusPoints: [
      "Zamburug‘lar bo‘limi (Mycophyta, Fungi) ning umumiy xarakteristikasi. Vegetativ tanasi (gifa va mitseliylar)ning tuzilishi, oziqlanish usullari.",
      "Zamburug‘lar bo‘limining klassifikatsiyasi: Zigomitsetsimonlar (Zygomycetes), Askomitsetsimonlar (Ascomycetes) va Bazidomitsetsimonlar (Basidiomycetes) sinflari.",
      "Asosiy vakillarining o‘ziga xos xususiyatlari, morfologik va biologik xususiyatlari.",
    ],
    studyNotes:
      "Zamburug‘lar — xlorofillsiz, geterotrof (saprotrof, parazit yoki simbiotrof) eukariot organizmlar bo‘lib, hujayra devori xitindan iborat va zaxira moddasi glikogendir. Tanasi gifalardan tashkil topgan mitseliydan iborat. Zigomitsetlar (mukor), Askomitsetlar — xaltali zamburug‘lar (achitqi, penitsill, qo‘ziqorin) va Bazidomitsetlar — qalpoqchali hamda zang/qorakuya zamburug‘lari asosiy sinflaridir.",
    keyTerms: ["Gifa", "Mitseliy", "Xitin", "Askomitsetlar", "Bazidomitsetlar", "Mikori­za"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-16",
    order: 16,
    code: "16",
    topicLabel: "16-mavzu",
    semester: "II semestr",
    title: "Lishayniklar bo‘limi (Lichenes).",
    syllabusPoints: [
      "Lishayniklarda zamburug‘ va suvo‘tlarning o‘zaro munosabatlari. Lishayniklarning tarkibiy qismlari.",
      "Lishayniklarning morfologiyasi (yopishqoq, bargsimon, butasimon) va anatomik tuzilishi.",
      "Lishayniklarning ko‘payishi, ekologik guruhlari, xilma-xilligi, ahamiyati va sistematikasi.",
    ],
    studyNotes:
      "Lishayniklar — zamburug‘ (mikobiont) va bir hujayrali yashil yoki ko‘k-yashil suvo‘t (fikobiont) ning simbiozidan tashkil topgan murakkab organizmlardir. Morfologik jihatdan 3 xil bo‘ladi: yopishqoq (qobiqsimon), bargsimon (Ksantoriya) va butasimon (Kladoniya — bug‘u lishaynigi). Ular havo tozaligining eng nozik bioindikatori (lixenoindikatsiya) hisoblanadi.",
    keyTerms: ["Simbioz", "Mikobiont", "Fikobiont", "Bargsimon", "Butasimon", "Bioindikator"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-17",
    order: 17,
    code: "17",
    topicLabel: "17-mavzu",
    semester: "II semestr",
    title:
      "Yuksak o‘simliklarning umumiy ta’rifi. Yo‘sintoifa (Bryophyta) va Plauntoifa (Lycopodiophyta) bo‘limlari.",
    syllabusPoints: [
      "Yuksak o‘simliklar (Cormobionta) ning umumiy ta’rifi, kelib chiqishi va quruqlikka chiqishi.",
      "Yo‘sintoifa (Bryophyta) bo‘limi tuzilishi, hayot siklida gametofitning ustunligi va asosiy vakillari (Funariya, Sfagnum).",
      "Plauntoifa (Lycopodiophyta) bo‘limi vakillarining tuzilishi, sporofit ustunligi va ahamiyati.",
    ],
    studyNotes:
      "Yuksak o‘simliklar quruqlikda yashashga moslashgan bo‘lib, haqiqiy to‘qima va vegetativ organlarga (ildiz, poya, barg), shuningdek ko‘p hujayrali jinsiy organlarga (anteridiy va arxegoniy) ega. Yo‘sintoifa o‘simliklarda (Funariya, Marhansiya, Sfagnum) ildiz o‘rniga rizoidlar bo‘ladi va hayot siklida gametofit ustunlik qiladi. Plauntoifa o‘simliklarda (Lycopodium, Selaginella) esa haqiqiy ildizli sporofit avlod ustunlik qiladi.",
    keyTerms: ["Cormobionta", "Anteridiy", "Arxegoniy", "Bryophyta", "Lycopodiophyta", "Rizoid"],
    references: "[1, 2, 3, 4, 5]",
  },
];
