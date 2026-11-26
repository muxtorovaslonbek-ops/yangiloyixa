export interface GidrobiologiyaTopicSection {
  heading: string;
  content: string;
  highlights?: string[];
}

export interface GidrobiologiyaTopicTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface GidrobiologiyaKeyConcept {
  term: string;
  definition: string;
}

export interface GidrobiologiyaSelfCheck {
  question: string;
  answer: string;
}

export interface GidrobiologiyaPdfDocument {
  title: string;
  url: string;
  kind?: string;
}

export interface GidrobiologiyaTopic {
  id: string;
  order: number;
  code: string;
  topicLabel: string;
  module:
    | "I bo‘lim: Gidrobiologiya asoslari, suv muhiti va gidrobiontlar"
    | "II bo‘lim: Fitoplankton, suv hayvonlari, oziq zanjirlari va mahsuldorlik"
    | "III bo‘lim: Evtrofikatsiya, monitoring, bioresurslar va zamonaviy muammolar";
  title: string;
  syllabusPoints: string[];
  studyNotes: string;
  overview: string;
  sections: GidrobiologiyaTopicSection[];
  comparisonTable: GidrobiologiyaTopicTable;
  keyConcepts: GidrobiologiyaKeyConcept[];
  selfCheckQuestions: GidrobiologiyaSelfCheck[];
  keyTerms: string[];
  references: string;
  pdfUrl: string;
  pdfTitle: string;
  pdfDocuments?: GidrobiologiyaPdfDocument[];
}

export const GIDROBIOLOGIYA_TOPICS: GidrobiologiyaTopic[] = [
  {
    id: "gidro-1",
    order: 1,
    code: "G01",
    topicLabel: "1-mavzu",
    module: "I bo‘lim: Gidrobiologiya asoslari, suv muhiti va gidrobiontlar",
    title:
      "Gidrobiologiya faniga kirish. Fanning predmeti, maqsadi va vazifalari, rivojlanish tarixi",
    syllabusPoints: [
      "Gidrobiologiya fanining predmeti, obyekti, maqsadi va asosiy vazifalari",
      "Gidrobiologiyaning asosiy bo‘limlari (limnologiya, potamologiya, okeanologiya) va amaliy yo‘nalishlari",
      "Gidrobiologiya fanining rivojlanish tarixi va buyuk olimlar hissasi (V. Gensen, F. Forel, S.A. Zernov, G.G. Vinberg, R. Lindeman)",
      "Gidrobiologik tadqiqot usullari va namuna olish asboblari (Apshteyn/Juday to‘ri, Ruttner batometri, Petersen dnochegirgichi, Sekki diski, eDNA)",
      "Gidrobiologiyaning xalq xo‘jaligi, baliqchilik, suv ta’minoti va Orol dengizi muammosidagi ahamiyati",
    ],
    studyNotes:
      "Yer yuzasining 71% ini suv qoplagan, lekin chuchuk suv zaxirasi gidrosferaning 1% idan ham kam. V. Gensen 1887-yilda «plankton» atamasini kiritdi, «Chellenjer» ekspeditsiyasi (1872–1876) 4700 dan ortiq yangi dengiz turini kashf etdi, R. Lindeman 1942-yilda trofik-dinamik konsepsiyani asosladi.",
    overview:
      "Gidrobiologiya (yunoncha hydor — suv, bios — hayot, logos — fan) — suv muhitida yashovchi tirik organizmlar (gidrobiontlar), ularning populyatsiyalari, jamoalari va suv ekotizimlarining abiotik muhit bilan o‘zaro ta’sirini o‘rganuvchi fundamental ekologik fandir. Ushbu kirish ma’ruzasi gidrosfera tarkibi, fanning bo‘limlari, tarixiy rivojlanish bosqichlari, zamonaviy dala-laboratoriya usullari hamda O‘zbekiston suv havzalari va Orol dengizi ekologik muammosini yoritadi.",
    sections: [
      {
        heading: "1.1. Gidrobiologiya fanining predmeti, maqsadi va asosiy bo‘limlari",
        content:
          "Gidrobiologiya barcha suv havzalaridagi — okeanlar, dengizlar, daryolar, ko‘llar, suv omborlari, botqoqliklar va yer osti suvlaridagi tirik organizmlar hamda biologik jarayonlar qonuniyatlarini tadqiq etadi. Fanning asosiy maqsadi suv ekotizimlarining barqaror ishlash mexanizmlarini aniqlash, biologik resurslardan oqilona foydalanish va suv havzalarini muhofaza qilishning ilmiy asoslarini yaratishdir.",
        highlights: [
          "Limnologiya — ko‘llar, suv omborlari va sekin oquvchi ichki suv havzalari gidrobiologiyasi",
          "Potamologiya — daryolar, soylar va oqar suv havzalari biologiyasi hamda ekologiyasi",
          "Okeanologiya (dengiz gidrobiologiyasi) — dunyo okeani va sho‘r dengizlar ekotizimlari",
          "Amaliy yo‘nalishlar: baliqchilik gidrobiologiyasi, sanitar gidrobiologiya, texnik gidrobiologiya va qishloq xo‘jaligi gidrobiologiyasi",
        ],
      },
      {
        heading: "1.2. Gidrobiologiyaning rivojlanish tarixi va ilmiy kashfiyotlar",
        content:
          "Suv hayotini o‘rganish qadimgi Aristotel kuzatuvlaridan boshlanib, mikroskopixtira qilingach sifat jihatidan yangi bosqichga chiqdi. XIX asr oxiridagi yirik okeanografik ekspeditsiyalar va XX asrdagi energetik ekologiya maktablari gidrobiologiyani mustaqil fundamental fanga aylantirdi.",
        highlights: [
          "A. Levenguk (XVII asr) — mikroskop orqali suvda yashovchi mikroskopik organizmlarni ilk bor kashf etdi",
          "«Chellenjer» ekspeditsiyasi (1872–1876) — 4700 dan ortiq yangi dengiz turini kashf etib, zamonaviy okeanologiyaga asos soldi",
          "V. Gensen (1887) — «plankton» atamasini kiritdi va miqdoriy gidrobiologik usullarni yaratdi",
          "F. Forel — Jeneva ko‘lini tadqiq qilib limnologiya faniga asos soldi; A. Tinemann va E. Naumann ko‘llarning trofik tasnifini ishlab chiqdi",
          "S.A. Zernov (1913) — birinchi universitet gidrobiologiya kafedrasini tashkil etdi; G.G. Vinberg mahsuldorlik nazariyasini, R. Lindeman (1942) esa trofik-dinamik konsepsiyani yaratdi",
        ],
      },
      {
        heading: "1.3. Gidrobiologik tadqiqot usullari va zamonaviy texnologiyalar",
        content:
          "Gidrobiologik tadqiqotlar dala ekspeditsiyalari, laboratoriya tajribalari va matematik modellashtirish uyg‘unligida olib boriladi. An’anaviy mexanik namuna oluvchilar bilan bir qatorda bugungi kunda molekulyar-genetik va masofaviy zondlash usullari keng qo‘llanilmoqda.",
        highlights: [
          "Plankton to‘rlari (Apshteyn, Juday) — suv ustunidan fitoplankton va zooplanktonni miqdoriy yig‘ish",
          "Ruttner va Niskin batometrlari — belgilangan chuqurlikdan aniq hajmdagi suv namunasi olish",
          "Petersen va Ekman-Berdj dnochegirgichlari — suv tubi cho‘kindilaridan bentos organizmlarini yig‘ish",
          "Sekki diski — suvning shaffofligini o‘lchash; qorong‘i va yorug‘ shishalar hamda 14C usuli — birlamchi mahsuldorlikni aniqlash",
          "Atrof-muhit DNKsi (eDNA) va sun’iy yo‘ldosh monitoringi — organizmlarni suv namunasidagi DNK izlari orqali aniqlash",
        ],
      },
      {
        heading: "1.4. Gidrobiologiyaning xalq xo‘jaligi va O‘zbekistondagi ahamiyati",
        content:
          "Gidrobiologiya baliqchilik va akvakulturani rivojlantirish, ichimlik suvini biologik tozalash, suv inshootlarini biokorroziya va o‘sib ketishdan (biofouling) himoya qilishda hal qiluvchi ahamiyatga ega. Markaziy Osiyoda Orol dengizining qurishi gidrobiologik inqirozning eng yaqqol global misolidir.",
        highlights: [
          "Orol dengizi 1960-yilda 68 000 km² maydonga va ~10‰ sho‘rlikka ega bo‘lib, boy baliqchilik bazasi edi",
          "2000-yilga kelib sho‘rlik 60–80‰ va undan yuqori ko‘tarilib, mahalliy chuchuk suv faunasi va baliqchilik butunlay tanazzulga uchradi",
          "O‘zbekiston suv omborlari (Chorvoq, Tuyabo‘g‘iz, Aydar-Arnasoy ko‘llar tizimi) biologik monitoringi va akvakultura rivoji gidrobiologik bilimlarga tayanadi",
        ],
      },
    ],
    comparisonTable: {
      title: "Yer gidrosferasi tarkibi va asosiy gidrobiologik namuna olish vositalari",
      columns: ["Gidrosfera qismi / Asbob", "Ulushi yoki vazifasi", "Gidrobiologik ahamiyati"],
      rows: [
        [
          "Dunyo okeani va dengizlar",
          "96,5% (sho‘r suv, o‘rtacha 35‰)",
          "Yer biomassa almashinuvi, iqlim va global baliqchilikning asosiy manbai",
        ],
        [
          "Muzliklar va yer osti suvlari",
          "Muzliklar 1,74%, yer osti 1,69%",
          "Chuchuk suvning asosiy qismi muzlagan yoki chuqur qatlamlarda saqlanadi",
        ],
        [
          "Ko‘llar va daryolar",
          "Ko‘llar 0,013%, daryolar 0,0002%",
          "Foydalanish mumkin bo‘lgan chuchuk suv <1%, eng yuqori biologik xilma-xillik zonasi",
        ],
        [
          "Apshteyn / Juday to‘ri va Ruttner batometri",
          "Plankton va chuqurlik suvi namunalari",
          "Fitoplankton, zooplankton soni va kimyoviy ko‘rsatkichlarni aniq o‘lchash",
        ],
        [
          "Petersen dnochegirgichi va Sekki diski",
          "Tub bentosi va suv shaffofligi",
          "Suv tubi hayoti biomassasi va yorug‘lik kirish chuqurligini baholash",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Gidrobiologiya",
        definition:
          "Suv muhitida yashovchi tirik organizmlar (gidrobiontlar), ularning jamoalari va suv ekotizimlaridagi biologik jarayonlarni o‘rganuvchi fan.",
      },
      {
        term: "Gidrobiontlar",
        definition:
          "Butun hayot siklini yoki uning muhim bosqichlarini suv muhitida o‘tkazuvchi barcha tirik organizmlar (bakteriyalar, suvo‘tlar, makrofitlar, umurtqasizlar, baliqlar).",
      },
      {
        term: "Limnologiya",
        definition:
          "Ko‘llar, suv omborlari va boshqa sekin oquvchi quruqlik ichki suv havzalarining fizik-kimyoviy va biologik xususiyatlarini o‘rganuvchi bo‘lim.",
      },
      {
        term: "Potamologiya",
        definition:
          "Daryolar, soylar va boshqa doimiy oqimga ega suv havzalarining gidrologiyasi hamda ekologiyasini o‘rganuvchi yo‘nalish.",
      },
      {
        term: "Sekki diski",
        definition:
          "Suvning nisbiy shaffofligi va yorug‘lik kirish chuqurligini aniqlash uchun ishlatiladigan oq (yoki oq-qora) standart disk.",
      },
      {
        term: "eDNA (Atrof-muhit DNKsi)",
        definition:
          "Suv namunasidagi tirik organizmlardan ajralgan DNK qoldiqlarini tahlil qilib, turlar tarkibini organizmlarni tutmasdan aniqlashning zamonaviy usuli.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Gidrobiologiya fanining asosiy predmeti va limnologiyaning vazifasi nimadan iborat?",
        answer:
          "Gidrobiologiya suv muhitidagi barcha tirik organizmlar (gidrobiontlar) va ularning suv ekotizimlari bilan o‘zaro ta’sirini o‘rganadi. Limnologiya esa ko‘llar va suv omborlari kabi ichki sekin oquvchi suv havzalari biologiyasiga ixtisoslashgan bo‘limdir.",
      },
      {
        question:
          "«Chellenjer» ekspeditsiyasi va V. Gensenning gidrobiologiyaga qo‘shgan hissasi nima?",
        answer:
          "1872–1876-yillardagi «Chellenjer» ekspeditsiyasi 4700 dan ortiq yangi dengiz turini kashf etib zamonaviy okeanologiyani boshlab berdi; V. Gensen 1887-yilda «plankton» atamasini kiritdi va miqdoriy tadqiqot usullariga asos soldi.",
      },
      {
        question: "Plankton, bentos va suv shaffofligini o‘lchashda qaysi asboblar qo‘llaniladi?",
        answer:
          "Plankton — Apshteyn va Juday to‘rlari, chuqurlik suvi — Ruttner batometri, bentos — Petersen dnochegirgichi, suv shaffofligi esa Sekki diski yordamida o‘lchanadi.",
      },
      {
        question:
          "Orol dengizidagi ekologik o‘zgarishlar gidrobiologik nuqtayi nazardan nimani ko‘rsatadi?",
        answer:
          "1960-yilda 68 000 km² maydon va ~10‰ sho‘rlikka ega bo‘lgan Orol dengizida 2000-yilga kelib sho‘rlik 60–80‰ ga yetdi, natijada chuchuk suv ekotizimi va baliqchilik zaxiralari butunlay izdan chiqdi.",
      },
    ],
    keyTerms: [
      "gidrobiologiya",
      "gidrobiontlar",
      "limnologiya",
      "potamologiya",
      "okeanologiya",
      "Chellenjer",
      "Gensen",
      "Forel",
      "Lindeman",
      "Vinberg",
      "Sekki diski",
      "Ruttner batometri",
      "Petersen dnochegirgichi",
      "eDNA",
      "Orol dengizi",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 1-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/01-mavzu_Gidrobiologiya_faniga_kirish__1__fcf250ea.pdf",
    pdfTitle: "1-mavzu: Gidrobiologiya faniga kirish (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "1-mavzu: Gidrobiologiya faniga kirish (Ma’ruza matni)",
        url: "/assets/aistudio/01-mavzu_Gidrobiologiya_faniga_kirish__1__fcf250ea.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "1-mavzu: Gidrobiologiya faniga kirish (Taqdimot)",
        url: "/assets/aistudio/01-mavzu_Gidrobiologiya_faniga_kirish_cc3eedf4.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-2",
    order: 2,
    code: "G02",
    topicLabel: "2-mavzu",
    module: "I bo‘lim: Gidrobiologiya asoslari, suv muhiti va gidrobiontlar",
    title: "Suv muhitining asosiy xususiyatlari. Suv ekotizimlari va ularning turlari",
    syllabusPoints: [
      "Suv muhitining fizik xossalari: zichlik, qovushqoqlik, +4 °C zichlik anomaliyasi, yuqori issiqlik sig‘imi va sirt tarangligi",
      "Harorat rejimi (stratifikatsiya, termoklin, gomotermiya), yorug‘lik zonalari va gidrostatik bosim",
      "Suvning kimyoviy tarkibi: erigan kislorod (O₂), CO₂ karbonat bufer tizimi, sho‘rlik va biogen elementlar (Libix qonuni)",
      "Chuchuk suv ekotizimlari: lentik (ko‘llar, suv omborlari) va lotik (daryolar, River Continuum Concept) tizimlar",
      "Dengiz va okean ekotizimlari: vertikal zonalar, apvelling, marjon riflari va teskari biomassa piramidasi",
    ],
    studyNotes:
      "Suv zichligi havodan ~800 marta, qovushqoqligi ~55 marta yuqori; +4 °C da maksimal zichlikka ega bo‘lgani uchun muz suv yuzasida suzadi va qishda tubdagi hayotni saqlab qoladi. Chuchuk suvda asosiy cheklovchi element — fosfor (P), dengizda esa azot (N).",
    overview:
      "Suv muhitining o‘ziga xos fizik va kimyoviy xossalari gidrobiontlarning tuzilishi, moddalar almashinuvi va fazoviy tarqalishini belgilab beradi. Ushbu mavzuda suvning zichlik anomaliyasi, termik stratifikatsiya (epilimnion, metalimnion, gipolimnion), erigan gazlar, sho‘rlik to‘sig‘i (5–8‰), shuningdek chuchuk suv (lentik, lotik) va okean ekotizimlarining zonal tuzilishi batafsil tahlil qilinadi.",
    sections: [
      {
        heading: "2.1. Suv muhitining fizik xossalari va ekologik ahamiyati",
        content:
          "Suv molekulalarining vodorod bog‘lari tufayli suv muhiti havodan keskin farq qiluvchi fizik xususiyatlarga ega. Bu xossalar yirik organizmlarning tayanch skeletisiz suzishiga, haroratning keskin o‘zgarmasligiga va qishki muzlashdan himoyalanishga imkon beradi.",
        highlights: [
          "Zichlik havodan ~800 marta, qovushqoqlik ~55 marta yuqori — Arximed kuchi tufayli gidrobiontlar suzib yuradi",
          "+4 °C zichlik anomaliyasi — muz (0 °C) suyuq suvdan yengil bo‘lib yuzada qoladi va qishda suv havzasi tubigacha muzlamaydi",
          "Yuqori solishtirma issiqlik sig‘imi (4,18 kJ/kg·K) — suv harorati quruqlikka nisbatan sekin isib, sekin soviydi",
          "Sirt tarangligi — suv yuzasida mustahkam plyonka hosil qilib, neyston organizmlari (suv o‘lchagichlar) harakatini ta’minlaydi",
        ],
      },
      {
        heading: "2.2. Harorat, yorug‘lik va gidrostatik bosim omillari",
        content:
          "Harorat moddalar almashinuvi tezligini Vant-Goff qoidasiga ko‘ra har +10 °C da 2–3 barobar oshiradi. Chuqur ko‘llarda yozgi va qishki termik stratifikatsiya kuzatiladi, bahor va kuzda esa to‘liq aralashish (gomotermiya) ro‘y beradi.",
        highlights: [
          "Termik stratifikatsiya qatlamlari: iliq ustki epilimnion, keskin harorat pasayuvchi metalimnion (termoklin) va sovuq tub gipolimnion",
          "Yorug‘lik zonalari: fotosintez kechuvchi fotik zona, yarim qorong‘i disfotik zona va to‘liq qorong‘i afotik zona",
          "Kompensatsiya chuqurligi (fotosintez = nafas olish) odatda Sekki diski ko‘rinish chuqurligidan 2–3 barobar chuqurroqda joylashadi",
          "Gidrostatik bosim har 10 m chuqurlikda 1 atmosferaga ortadi; chuqur suv organizmlari barofil xususiyatga ega",
        ],
      },
      {
        heading: "2.3. Suvning kimyoviy tarkibi: kislorod, karbonat bufer, sho‘rlik va biogenlar",
        content:
          "Suvda erigan kislorod miqdori havodagiga (210 mg/l) qaraganda 20–30 marta kam (6–10 mg/l) bo‘lib, harorat oshishi bilan yanada kamayadi. Kislorodning keskin kamayishi qishki yoki yozgi baliq o‘limi — «zamor»ga olib keladi.",
        highlights: [
          "CO₂ va karbonat bufer tizimi tabiiy suvlar pH ko‘rsatkichini barqaror 6,5–8,5 oralig‘ida ushlab turadi",
          "Sho‘rlikka munosabat bo‘yicha organizmlar stenogalin (tor diapazon) va evrigalin (keng diapazon) guruhlarga bo‘linadi",
          "5–8‰ sho‘rlik oralig‘i «kritik sho‘rlik to‘sig‘i» bo‘lib, unda turlar soni eng kam (chuchuk suv turlari uchun juda sho‘r, dengiz turlari uchun juda chuchuk)",
          "Libix minimum qonuni: chuchuk suvda birlamchi mahsuldorlikni ko‘pincha fosfor (P), dengizlarda esa azot (N) cheklaydi",
        ],
      },
      {
        heading: "2.4. Chuchuk suv va okean ekotizimlarining zonal tuzilishi",
        content:
          "Chuchuk suv ekotizimlari sekin oquvchi lentik (ko‘llar, suv omborlari) va tez oquvchi lotik (daryolar, soylar) tizimlarga bo‘linadi. Okeanlar esa chuqurlik bo‘yicha epipelagialdan xadopelagialgacha beshta zonaga ajratiladi.",
        highlights: [
          "Ko‘l zonalari: litoral (qirg‘oq), sublitoral, pelagial (ochiq suv), profundal (chuqur tub) va bental; trofik turlari: oligotrof, mezotrof, evtrof va distrof",
          "Daryolar konsepsiyasi (River Continuum Concept) — yuqori oqimda tashqi organik modda ustun, o‘rta oqimda fotosintez kuchli, quyi oqimda esa mayda detrit yig‘iladi",
          "Suv omborlarida dastlabki 3–5 yilda «trofik portlash» (suvdagi biogenlar ko‘payishi tufayli mahsuldorlik sakrashi) kuzatiladi",
          "Okean apvelling zonalari okean maydonining atigi ~1% ini egallasa-da, dunyo baliq ovining >20% ini beradi; marjon riflari <0,1% maydonda dengiz turlarining 25% ini saqlaydi",
        ],
      },
    ],
    comparisonTable: {
      title: "Dunyo okeani va chuchuk ko‘llarning vertikal zonalari",
      columns: [
        "Zona nomi",
        "Chuqurlik / Joylashuv",
        "Yorug‘lik va harorat",
        "Xarakterli hayot shakllari",
      ],
      rows: [
        [
          "Epipelagial (fotik)",
          "0 – 200 m",
          "Yorug‘lik yetarli, harorat mavsumiy o‘zgaruvchan",
          "Fitoplankton, zooplankton, ko‘pchilik baliqlar va dengiz sutemizuvchilari",
        ],
        [
          "Mezopelagial (disfotik)",
          "200 – 1000 m",
          "Xira yorug‘lik, asosiy termoklin qatlami",
          "Vertikal migratsiya qiluvchi baliqlar, kalmarlar, bioluminessent turlar",
        ],
        [
          "Batipelagial va abissopelagial",
          "1000 – 6000 m",
          "To‘liq zulmat, 1–4 °C, yuqori bosim",
          "Yirtqich chuqur suv baliqlari, «dengiz qori» detritofaglari",
        ],
        [
          "Xadopelagial (ultraabissal)",
          "> 6000 m (okean cho‘kmalari)",
          "Ekstremal bosim (>600 atm), qorong‘i",
          "Barofil bakteriyalar, amfipodalar, maxsus tub umurtqasizlari",
        ],
        [
          "Ko‘l litorali va profundali",
          "Qirg‘oq (sayoz) / chuqur tub",
          "Litoral iliq va yorug‘; profundal sovuq va qorong‘i",
          "Litoralda makrofitlar va mollyuskalar; profundalda xironomidlar va oligoxetalar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Termik stratifikatsiya",
        definition:
          "Chuqur suv havzalarida suv ustunining harorat va zichlik bo‘yicha epilimnion, metalimnion (termoklin) va gipolimnion qatlamlariga ajralishi.",
      },
      {
        term: "Kompensatsiya chuqurligi",
        definition:
          "Fotosintezda ajralayotgan kislorod miqdori organizmlarning nafas olishiga sarflanayotgan kislorodga tenglashadigan chegara chuqurlik (P = R).",
      },
      {
        term: "Lentik va lotik ekotizimlar",
        definition:
          "Lentik — turg‘un yoki sekin oquvchi suv havzalari (ko‘l, hovuz, suv ombori); lotik — doimiy oqimga ega suv havzalari (daryo, soy, buloq).",
      },
      {
        term: "Apvelling",
        definition:
          "Shamol va oqimlar ta’sirida biogen elementlarga boy sovuq chuqur okean suvlarining sirtqi fotik qatlamga ko‘tarilish hodisasi.",
      },
      {
        term: "Zamor (kislorod tanqisligi)",
        definition:
          "Suvda erigan kislorodning keskin kamayib ketishi natijasida baliqlar va boshqa gidrobiontlarning ommaviy halok bo‘lishi.",
      },
      {
        term: "Stenogalin va evrigalin organizmlar",
        definition:
          "Stenogalinlar faqat tor sho‘rlik diapazonida yashaydi; evrigalinlar (masalan, losos, ugor) keng sho‘rlik o‘zgarishlariga moslasha oladi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Suvning +4 °C da maksimal zichlikka ega bo‘lishi qishda suv hayotini qanday saqlaydi?",
        answer:
          "Suv +4 °C dan past soviganda zichligi kamayadi va 0 °C da muzlab sirtda suzib qoladi. Muz qatlami issiqlik izolyatori vazifasini bajarib, tubda +4 °C li suyuq suvda gidrobiontlarning qishlashini ta’minlaydi.",
      },
      {
        question:
          "Yozgi stratifikatsiya davrida epilimnion, metalimnion va gipolimnion qanday farqlanadi?",
        answer:
          "Epilimnion — quyoshdan isigan, kislorodga boy yuqori qatlam; metalimnion (termoklin) — harorat keskin pasayadigan o‘tish qatlami; gipolimnion — sovuq, zich va aralashmaydigan tub qatlam.",
      },
      {
        question: "Nima uchun 5–8‰ sho‘rlik oralig‘ida turlar soni eng kam bo‘ladi?",
        answer:
          "Bu «kritik sho‘rlik to‘sig‘i» bo‘lib, osmoregulyatsiya jihatidan chuchuk suv turlari uchun haddan tashqari sho‘r, dengiz turlari uchun esa haddan tashqari chuchuk hisoblanadi.",
      },
      {
        question: "Apvelling zonalari okean baliqchiligida nima uchun ulkan ahamiyatga ega?",
        answer:
          "Chuqurdan ko‘tariladigan suvlar azot va fosfor kabi biogenlarga juda boy bo‘lib, fitoplanktonning jadal rivojlanishiga va oziq zanjiri orqali ulkan baliq zaxiralarining shakllanishiga olib keladi (okeanning 1% maydonidan >20% baliq ovi).",
      },
    ],
    keyTerms: [
      "zichlik anomaliyasi",
      "epilimnion",
      "metalimnion",
      "termoklin",
      "gipolimnion",
      "gomotermiya",
      "fotik zona",
      "kompensatsiya chuqurligi",
      "zamor",
      "stenogalin",
      "evrigalin",
      "lentik",
      "lotik",
      "apvelling",
      "marjon riflari",
      "Libix qonuni",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 2-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl:
      "/assets/aistudio/02-mavzu_Suv_muhitining_xususiyatlari_va_suv_ekotizim__1__8ebffa93.pdf",
    pdfTitle: "2-mavzu: Suv muhitining xususiyatlari va suv ekotizimlari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "2-mavzu: Suv muhitining xususiyatlari va suv ekotizimlari (Ma’ruza matni)",
        url: "/assets/aistudio/02-mavzu_Suv_muhitining_xususiyatlari_va_suv_ekotizim__1__8ebffa93.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "2-mavzu: Suv muhitining xususiyatlari va suv ekotizimlari (Taqdimot)",
        url: "/assets/aistudio/02-mavzu_Suv_muhitining_xususiyatlari_va_suv_ekotiz__1___1__de144bd0.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-3",
    order: 3,
    code: "G03",
    topicLabel: "3-mavzu",
    module: "I bo‘lim: Gidrobiologiya asoslari, suv muhiti va gidrobiontlar",
    title:
      "Gidrobiontlar va ularning ekologik guruhlari. Plankton, zooplankton, nekton va bentos organizmlar",
    syllabusPoints: [
      "Gidrobiontlarning asosiy ekologik guruhlari: plankton, nekton, bentos, neyston, pleyston va perifiton",
      "Plankton organizmlarning o‘lcham tasnifi (femto- dan megaplanktongacha), goloplankton va meroplankton, flotatsiya moslashuvlari (Stoks qonuni)",
      "Zooplankton biologiyasi: Rotifera, Cladocera (dafniya), Copepoda, partenogenez, sutkalik vertikal migratsiya va biomanipulyatsiya",
      "Nekton organizmlar: baliqlar va dengiz sutemizuvchilarining gidrodinamik moslashuvlari, anadrom va katadrom migratsiyalar",
      "Bentos jamoalari: fitobentos, zoobentos, epifauna va infauna, bioturbatsiya va makrozoobentos bioindikatsiyasi",
    ],
    studyNotes:
      "Plankton oqimga qarshi faol suza olmaydi va cho‘kishni sekinlashtirish uchun Stoks qonuni bo‘yicha sirt/hajm nisbatini oshiradi (o‘simtalar, yog‘ tomchilari, gaz vakuolalari). Makrozoobentos (bir kunliklar, veshnyankalar, ruchayniklar vs tubifisidlar) suv tozaligining eng ishonchli bioindikatoridir.",
    overview:
      "Suv havzasining turli qatlamlarida yashovchi gidrobiontlar harakatlanish usuli va biotopga bog‘lanishiga ko‘ra oltita asosiy ekologik guruhga ajratiladi. Ma’ruzada planktonning flotatsiya mexanizmlari va siklomorfozi, zooplanktonning sutkalik vertikal migratsiyasi va trofik kaskaddagi o‘rni, nektonning gidrodinamik konvergensiyasi hamda bentosning bioturbatsiya va bioindikatsiya ahamiyati keng yoritilgan.",
    sections: [
      {
        heading: "3.1. Gidrobiontlarning ekologik guruhlari va plankton tasnifi",
        content:
          "Gidrobiontlar yashash o‘rni va faol harakatlanish qobiliyatiga ko‘ra plankton, nekton, bentos, neyston, pleyston va perifiton guruhlariga bo‘linadi. V. Gensen (1887) tomonidan nomlangan plankton suv qatlamida muallaq suzib yuruvchi organizmlar bo‘lib, o‘lchamiga ko‘ra femtoplanktondan (0,02–0,2 mkm) megaplanktongacha (>20 sm) tasniflanadi.",
        highlights: [
          "Goloplankton — butun hayoti davomida planktonda yashovchilar (diatomlar, kopepodalar, dafniyalar)",
          "Meroplankton — faqat lichinka yoki tuxum davrida planktonda bo‘luvchilar (krab, mollyuska va ko‘pchilik baliq lichinkalari)",
          "Stoks qonuni bo‘yicha flotatsiya moslashuvlari: mayda o‘lcham, uzun shoxchalar va tikanlar, yog‘ tomchilari, shilimshiq qobiq, gaz vakuolalari",
          "Siklomorfoz — yozda suv qovushqoqligi kamayganda dafniya va boshqa planktonlarda bosh qismiga «shlem» o‘sib chiqishi",
        ],
      },
      {
        heading: "3.2. Zooplankton ekologiyasi, migratsiyasi va trofik kaskad",
        content:
          "Zooplankton fitoplankton va bakteriyalarni iste’mol qilib, ularning energiyasini baliqlar va yuqori trofik darajalarga uzatuvchi asosiy bo‘g‘indir. Chuchuk suv zooplanktonida asosan aylanuvchi qurtlar (Rotifera), shoxdor mo‘ylovli qisqichbaqasimonlar (Cladocera — dafniya) va eshkakoyoqlilar (Copepoda) hukmronlik qiladi.",
        highlights: [
          "Protozooplankton (bayraqchalilar, infuzoriyalar) — «mikrob halqasi» orqali bakteriya biomassasini oziq to‘riga qaytaradi",
          "Partenogenez va tinch tuxumlar (efippiylar) — qulay sharoitda tez ko‘payish va qishlash/qurg‘oqchilikdan omon qolish strategiyasi",
          "Sutkalik vertikal migratsiya — kunduzi yirtqich baliqlardan qochib chuqur qorong‘i qatlamga tushish, kechasi esa oziqlanish uchun yuzaga ko‘tarilish",
          "Biomanipulyatsiya — yirik filtrator dafniyalarni ko‘paytirish orqali suv gullashini biologik nazorat qilish",
        ],
      },
      {
        heading: "3.3. Nekton organizmlar va ularning moslashuvlari",
        content:
          "Nekton suv oqimiga qarshi erkin va uzoq masofalarga faol suza oladigan yirik organizmlardir (34 000 dan ortiq baliq turlari, boshoyoqli mollyuskalar, dengiz toshbaqalari, kitlar va delfinlar). Turli sistematik guruhlarda (akula, tunets, delfin, ixtiozavr) o‘xshash duksimon tana shakli — evolyutsion konvergensiya yorqin namoyon bo‘ladi.",
        highlights: [
          "Anadrom migratsiya — dengizda o‘sib, uvildiriq tashlash uchun daryolarga ko‘tariluvchi baliqlar (qizilbaliq/losos, osetr)",
          "Katadrom migratsiya — chuchuk suvda o‘sib, ko‘payish uchun okeanga tushuvchi baliqlar (daryo ugori)",
          "Chuqur suv nektonida bioluminessensiya (yorug‘lik chiqarish), katta og‘iz va sezgir yon chiziq rivojlangan",
        ],
      },
      {
        heading: "3.4. Bentos jamoalari, bioturbatsiya va bioindikatsiya",
        content:
          "Bentos suv havzasi tubida va cho‘kindi ichida yashovchi o‘simliklar (fitobentos), hayvonlar (zoobentos) va mikroorganizmlardan (bakteriobentos) iborat. Bentos organizmlari tub yuzasida yashovchi epifauna va loyqa ichiga ko‘miluvchi infaunaga, harakatlanishiga ko‘ra esa o‘troq (sessil) va harakatchan (vagil) turlarga bo‘linadi.",
        highlights: [
          "Bioturbatsiya — infauna organizmlarining loyqani aralashtirishi natijasida tubga kislorod kirishi va biogen moddalarning qaytishi",
          "Toza suv bioindikatorlari: bir kunliklar (Ephemeroptera), veshnyankalar (Plecoptera) va ruchayniklar (Trichoptera) lichinkalari",
          "Kuchli organik ifloslanish indikatorlari: tubifisid qurtlar (Tubifex) va qizil xironomid lichinkalari (motil)",
          "Makrozoobentos tarkibi asosida Vudivis biotik indeksi va Shennon xilma-xillik indeksi hisoblanadi",
        ],
      },
    ],
    comparisonTable: {
      title: "Gidrobiontlarning asosiy ekologik guruhlari qiyosiy tavsifi",
      columns: [
        "Ekologik guruh",
        "Yashash muhiti (biotop)",
        "Harakatlanish xususiyati",
        "Asosiy vakillari",
      ],
      rows: [
        [
          "Plankton",
          "Ochiq suv qatlami (pelagial)",
          "Oqimga qarshi faol suza olmaydi, muallaq suzadi",
          "Diatom va yashil suvo‘tlar, dafniya, siklop, meduzalar",
        ],
        [
          "Nekton",
          "Ochiq suv qatlami (pelagial)",
          "Oqimga qarshi faol va tez suza oladi",
          "Baliqlar, kalmarlar, delfinlar, kitlar, tyulenlar",
        ],
        [
          "Bentos",
          "Suv tubi yuzasi va cho‘kindi ichi (bental)",
          "O‘troq (sessil), sudraluvchi yoki loyqaga ko‘miluvchi",
          "Mollyuskalar, xironomidlar, tubifisidlar, qisqichbaqalar, suvo‘tlar",
        ],
        [
          "Neyston va pleyston",
          "Suv-havo chegara plyonkasi",
          "Sirt tarangligi yoki gaz pufaklari hisobiga sirtda turadi",
          "Suv o‘lchagichlar (Gerridae), ryaska, fizaliya («portugal kemachasi»)",
        ],
        [
          "Perifiton (o‘smalar)",
          "Suv ostidagi tosh, qoziq, o‘simlik va kema yuzasi",
          "Qattiq substratga yopishib o‘suvchi jamoalar",
          "Yopishqoq diatomlar, ipsimon suvo‘tlar, gidralar, mshankalar, dreysena",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Goloplankton va meroplankton",
        definition:
          "Goloplankton butun umri davomida planktonda yashaydi; meroplankton esa faqat lichinka bosqichida planktonda bo‘lib, voyaga yetgach bentos yoki nektonga o‘tadi.",
      },
      {
        term: "Siklomorfoz",
        definition:
          "Yil fasllari va suv harorati o‘zgarishiga javoban plankton organizmlarda (masalan, dafniyalarda) tana shakli va o‘simtalarining mavsumiy o‘zgarishi.",
      },
      {
        term: "Sutkalik vertikal migratsiya",
        definition:
          "Zooplanktonning kunduzi yirtqichlardan saqlanish uchun chuqur qatlamga tushib, kechasi fitoplankton bilan oziqlanish uchun yuzaga ko‘tarilish ritmi.",
      },
      {
        term: "Anadrom va katadrom baliqlar",
        definition:
          "Anadromlar (losos, osetr) ko‘payish uchun dengizdan daryoga o‘tadi; katadromlar (ugor) esa daryodan dengizga tushadi.",
      },
      {
        term: "Bioturbatsiya",
        definition:
          "Bentos hayvonlarining tub cho‘kindilarini qazish va aralashtirish orqali loyqaning kislorod va biogen rejimini yaxshilash jarayoni.",
      },
      {
        term: "Perifiton",
        definition:
          "Suv ostidagi qattiq narsalar (toshlar, o‘simlik poyalari, gidrotexnik inshootlar) yuzasiga yopishib yashovchi mikroorganizmlar, suvo‘tlar va umurtqasizlar jamoasi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Plankton organizmlar suv tubiga cho‘kib ketmaslik uchun qanday moslashuvlarga ega?",
        answer:
          "Stoks qonuniga muvofiq ular mayda tana o‘lchamiga, uzun shoxchalar va tikanlarga (sirt/hajm nisbatini oshirish), yog‘ tomchilari, gaz vakuolalari va yengil shilimshiq qobiqlarga ega.",
      },
      {
        question: "Zooplankton nima uchun sutkalik vertikal migratsiya amalga oshiradi?",
        answer:
          "Kunduzi yorug‘ ustki qatlamda yirtqich baliqlarga oson yem bo‘lmaslik uchun qorong‘i chuqurlikka tushadi, kechasi esa xavf kamaygach fitoplankton ko‘p bo‘lgan sirtqi qatlamga ko‘tarilib oziqlanadi.",
      },
      {
        question: "Anadrom va katadrom baliqlar o‘rtasidagi farqni misollar bilan tushuntiring.",
        answer:
          "Anadrom baliqlar (qizilbaliq, osetr) dengizda oziqlanib o‘sadi va uvildiriq tashlash uchun chuchuk daryolarga ko‘tariladi; katadrom baliqlar (daryo ugori) aksincha daryoda o‘sib, okeanda ko‘payadi.",
      },
      {
        question:
          "Makrozoobentos yordamida suv havzasining ifloslanish darajasini qanday aniqlash mumkin?",
        answer:
          "Toza, kislorodga boy suvlarda bir kunliklar, veshnyankalar va ruchayniklar lichinkalari ko‘p uchraydi; kuchli organik ifloslangan va kislorodsiz suvlarda esa faqat chidamli tubifisid qurtlar va qizil xironomidlar qoladi.",
      },
    ],
    keyTerms: [
      "plankton",
      "zooplankton",
      "nekton",
      "bentos",
      "neyston",
      "pleyston",
      "perifiton",
      "goloplankton",
      "meroplankton",
      "Stoks qonuni",
      "siklomorfoz",
      "partenogenez",
      "anadrom",
      "katadrom",
      "bioturbatsiya",
      "dafniya",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 3-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/03-mavzu_Gidrobiontlarning_ekologik_guruhlari__1__39aa95fa.pdf",
    pdfTitle: "3-mavzu: Gidrobiontlarning ekologik guruhlari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "3-mavzu: Gidrobiontlarning ekologik guruhlari (Ma’ruza matni)",
        url: "/assets/aistudio/03-mavzu_Gidrobiontlarning_ekologik_guruhlari__1__39aa95fa.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "3-mavzu: Gidrobiontlarning ekologik guruhlari (Taqdimot)",
        url: "/assets/aistudio/03-mavzu_Gidrobiontlarning_ekologik_guruhlari_0aacce33.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-4",
    order: 4,
    code: "G04",
    topicLabel: "4-mavzu",
    module: "I bo‘lim: Gidrobiologiya asoslari, suv muhiti va gidrobiontlar",
    title:
      "Suv o‘simliklari biologiyasi. Makrofitlarning tuzilishi, ekologik guruhlari va ahamiyati",
    syllabusPoints: [
      "Yuksak suv o‘simliklari (makrofitlar) ning quruqlikdan suvga ikkilamchi qaytish tarixi va dalillari",
      "Makrofitlarning ekologik guruhlari va qirg‘oqdan chuqurlikka tomon zonal joylashuvi",
      "Makrofitlarning anatomik-morfologik va fiziologik moslashuvlari: aerenxima, geterofiliya, gidrokarbonat (HCO₃⁻) assimilyatsiyasi",
      "Suv o‘simliklarining ko‘payish xususiyatlari: vegetativ ustunlik, turionlar, gidrofiliya va invaziv tarqalish (elodeya)",
      "Makrofitlarning ekologik, baliqchilik va fitomelioratsiya (constructed wetlands, eyxorniya, oq amur) ahamiyati",
    ],
    studyNotes:
      "Yuksak suv o‘simliklari quruqlik ajdodlaridan kelib chiqqan (ustitsalar, o‘tkazuvchi naylar, suv ustida gullash dalildir). Gazlar suvda havoga nisbatan 10 000 marta sekin diffuziyalanadi, shuning uchun makrofitlar poyasining 60–70% ini havo to‘qimasi — aerenxima egallaydi.",
    overview:
      "Makrofitlar — ko‘z bilan ko‘rinadigan yuksak suv o‘simliklari, qirqquloqlar, yo‘sinlar va yirik xara suvo‘tlari majmuasidir. Ushbu mavzuda makrofitlarning gigrofitlardan chuqur gidatofitlargacha bo‘lgan zonal qatori, aerenxima va geterofiliya (strelolist) kabi anatomik moslashuvlari, tez vegetativ ko‘payish strategiyalari hamda oqova suvlarni tozalashdagi fitomeliorativ roli o‘rganiladi.",
    sections: [
      {
        heading: "4.1. Makrofitlarning kelib chiqishi va zonal ekologik guruhlari",
        content:
          "Ko‘pchilik gulli suv o‘simliklari evolyutsiya jarayonida quruqlikdan suv muhitiga ikkilamchi qaytgan organizmlardir. Ular qirg‘oqdan suv havzasi markaziga tomon chuqurlik ortishi bilan qonuniy ekologik kamarlarni (zonal qatorni) hosil qiladi.",
        highlights: [
          "Quruqlik kelib chiqishi dalillari: qoldiq ustitsalar, o‘tkazuvchi to‘qimalar va ko‘pchilik turlarning suv ustida gullashi",
          "Gigrofitlar (0 m, nam qirg‘oq) → Gelofitlar (0–1,5 m, qamish Phragmites, qo‘g‘a Typha)",
          "Suzuvchi bargli makrofitlar (0,5–3 m): oq nilufar (Nymphaea), sariq kubishka (Nuphar), suv yong‘og‘i",
          "Erkin suzuvchi pleystofitlar: ryaska (Lemna), salviniya, suv giatsinti (eyxorniya), pistiya",
          "To‘liq suv ostida o‘suvchi gidatofitlar (1–6 m): elodeya (Elodea), rogolistnik, urut, rdest va xara suvo‘tlari",
        ],
      },
      {
        heading: "4.2. Anatomik-morfologik va fiziologik moslashuvlar",
        content:
          "Suvda gazlarning diffuziyasi havodagiga qaraganda 10 000 barobar sekin kechadi va yorug‘lik tez so‘nadi. Shu sababli makrofitlarda noyob anatomik va fiziologik moslashuvlar shakllangan.",
        highlights: [
          "Aerenxima (havo saqlovchi parenxima) — poya va ildizpoya hajmining 60–70% ini egallab, barglardan ildizlarga kislorod uzatadi va suzuvchanlik beradi",
          "Geterofiliya (har xil barglilik) — masalan, strelolist (Sagittaria) da suv osti barglari lentasimon, suzuvchi barglari yumaloq, havo barglari esa o‘qsimon bo‘ladi",
          "Mexanik to‘qima va kutikula reduksiyalanadi, suv osti barglari butun yuzasi bilan suv va mineral tuzlarni shimadi",
          "Gidrokarbonat (HCO₃⁻) dan foydalanish — erkin CO₂ yetishmaganda elodeya va rdest HCO₃⁻ ni o‘zlashtirib, barg yuzasida CaCO₃ ohak qoplami hosil qiladi",
        ],
      },
      {
        heading: "4.3. Ko‘payish strategiyalari va invaziv tarqalish",
        content:
          "Suv muhitida gullash va changlanish qiyinlashgani sababli ko‘pchilik makrofitlarda vegetativ ko‘payish ustunlik qiladi. Ayrim turlar suv ostida changlanish — gidrofiliyaga moslashgan.",
        highlights: [
          "Vegetativ ko‘payish: ildizpoya, stolonlar, poya bo‘laklari va qishlovchi kurtaklar — turionlar orqali",
          "Kanada elodeyasi (Elodea canadensis) — 1836-yilda Irlandiyaga faqat urg‘ochi nusxalari kirib kelib, birgina poya bo‘laklari bilan butun Yevropani egallagan",
          "Ryaska (Lemna) qulay sharoitda har 2–3 kunda biomassasini ikki barobar oshiradi",
          "Gidrofiliya (suv orqali changlanish) — valisneriya (suyuluvchi gulchanglar) va dengiz o‘ti zosterada uchraydi",
        ],
      },
      {
        heading: "4.4. Ekologik, xo‘jalik va fitomelioratsiya ahamiyati",
        content:
          "Makrofitlar suv havzalarida kislorod ishlab chiqaradi, qirg‘oqni eroziyadan himoyalaydi, baliqlar uchun uvildiriq tashlash (nerest) va yosh chavoqlar yashirinish maskani bo‘lib xizmat qiladi. Biroq haddan tashqari o‘sib ketish (zarasat) kechasi kislorod yetishmovchiligi va botqoqlanishga olib kelishi mumkin.",
        highlights: [
          "Fitomelioratsiya va sun’iy botqoqliklar (constructed wetlands) — qamish, qo‘g‘a va eyxorniya yordamida oqova suvlarni biogenlar va og‘ir metallardan tozalash",
          "Suv giatsinti (Eichhornia crassipes) kuniga suvdagi biogen moddalarning 20% gacha qismini o‘zlashtira oladi",
          "Biologik nazorat — o‘txo‘r oq amur (Ctenopharyngodon idella) baliqlari kanallar va hovuzlarni ortiqcha makrofitlardan samarali tozalaydi",
        ],
      },
    ],
    comparisonTable: {
      title: "Makrofitlarning ekologik guruhlari va zonal taqsimlanishi",
      columns: [
        "Ekologik guruh",
        "Chuqurlik diapazoni",
        "Morfologik xususiyatlari",
        "Asosiy vakillari",
      ],
      rows: [
        [
          "Gigrofitlar",
          "0 m (nam qirg‘oq)",
          "Ildizlari nam tuproqda, tanasi havoda",
          "Qiyoq (Carex), yalpiz, qirg‘oq o‘tlari",
        ],
        [
          "Gelofitlar (havo-suv)",
          "0 – 1,5 m",
          "Poyaning pastki qismi suvda, yuqori qismi havoda; kuchli aerenxima",
          "Qamish (Phragmites), qo‘g‘a (Typha), qirqbo‘g‘im",
        ],
        [
          "Suzuvchi barglilar",
          "0,5 – 3,0 m",
          "Ildizlari tubda, uzun bandli barglar sirtda suzadi, ustitsalar barg ustida",
          "Oq nilufar (Nymphaea), sariq kubishka (Nuphar)",
        ],
        [
          "Erkin suzuvchilar (pleystofitlar)",
          "Suv yuzasi",
          "Tubga yopishmagan, erkin suzuvchi poya va ildizlar",
          "Ryaska (Lemna), salviniya, eyxorniya, pistiya",
        ],
        [
          "Gidatofitlar (suv osti)",
          "1,0 – 6,0 m",
          "To‘liq suv ostida, nozik lentasimon/patsimon barglar, HCO₃⁻ shimadi",
          "Elodeya, rogolistnik, valisneriya, rdest, xara",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Makrofitlar",
        definition:
          "Suv havzalarida o‘suvchi ko‘z bilan ko‘rinadigan yuksak gulli o‘simliklar, qirqquloqlar, yo‘sinlar va yirik suvo‘tlar (masalan, xara).",
      },
      {
        term: "Aerenxima",
        definition:
          "Suv o‘simliklari poya va ildizpoyalarining 60–70% hajmini egallaydigan, gaz almashinuvi va suzuvchanlikni ta’minlovchi havo saqlovchi to‘qima.",
      },
      {
        term: "Geterofiliya",
        definition:
          "Bitta suv o‘simligida (masalan, strelolistda) suv osti, suv yuzasi va havo muhitiga moslashgan har xil shakldagi barglarning rivojlanishi.",
      },
      {
        term: "Turionlar",
        definition:
          "Ko‘pchilik suv o‘simliklarida kuzda shakllanib, suv tubida qishlaydigan va bahorda yangi o‘simlik beradigan maxsus vegetativ kurtaklar.",
      },
      {
        term: "Gidrofiliya",
        definition:
          "Gulchanglarning suv yuzasi yoki suv qatlami orqali ko‘chishi bilan sodir bo‘ladigan changlanish turi (valisneriya, zostera).",
      },
      {
        term: "Fitomelioratsiya",
        definition:
          "Suv o‘simliklari (qamish, qo‘g‘a, eyxorniya) yordamida ifloslangan oqova suvlarni biogenlar, organik moddalar va og‘ir metallardan biologik tozalash.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Yuksak suv o‘simliklarining quruqlik ajdodlaridan kelib chiqqanligini qanday dalillar isbotlaydi?",
        answer:
          "Ularda quruqlik o‘simliklariga xos ustitsalar (yoki qoldiqlari), o‘tkazuvchi nay tizimi, gullar va ko‘pchilik turlarda changlanishning suv ustida — havoda amalga oshishi bu ikkilamchi qaytishni isbotlaydi.",
      },
      {
        question: "Aerenxima to‘qimasi suv o‘simliklari uchun nima uchun hayotiy zarur?",
        answer:
          "Suvda gazlarning diffuziyasi havodagidan 10 000 marta sekin bo‘lgani uchun aerenxima kanallari barglarda hosil bo‘lgan kislorodni kislorodsiz loyqadagi ildizlarga yetkazib beradi hamda o‘simlikni tik tutib turadi.",
      },
      {
        question: "Kanada elodeyasi Yevropada urug‘ hosil qilmasdan qanday qilib keng tarqalgan?",
        answer:
          "1836-yilda Irlandiyaga uning faqat urg‘ochi o‘simliklari keltirilgan bo‘lsa-da, elodeya uzilgan har bir kichik poya bo‘lagidan juda tez vegetativ ko‘payish qobiliyati tufayli butun Yevropaga tarqalib ketgan.",
      },
      {
        question:
          "Kanallar va hovuzlarda makrofitlarning ortiqcha o‘sib ketishini biologik usulda qanday nazorat qilish mumkin?",
        answer:
          "O‘txo‘r oq amur (Ctenopharyngodon idella) baliqlarini suv havzasiga qo‘yib yuborish orqali ortiqcha suv o‘simliklari xavfsiz va iqtisodiy samarali tarzda nazorat qilinadi.",
      },
    ],
    keyTerms: [
      "makrofitlar",
      "aerenxima",
      "geterofiliya",
      "gelofitlar",
      "gidatofitlar",
      "turionlar",
      "gidrofiliya",
      "elodeya",
      "ryaska",
      "eyxorniya",
      "fitomelioratsiya",
      "oq amur",
      "strelolist",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 4-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl:
      "/assets/aistudio/04-mavzu_Suv_o_simliklari_biologiyasi_va_makrofitlar__1__83947436.pdf",
    pdfTitle: "4-mavzu: Suv o‘simliklari biologiyasi va makrofitlar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "4-mavzu: Suv o‘simliklari biologiyasi va makrofitlar (Ma’ruza matni)",
        url: "/assets/aistudio/04-mavzu_Suv_o_simliklari_biologiyasi_va_makrofitlar__1__83947436.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "4-mavzu: Suv o‘simliklari biologiyasi va makrofitlar (Taqdimot)",
        url: "/assets/aistudio/04-mavzu_Suv_o_simliklari_biologiyasi_va_makrofitla_2357cf46.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-5",
    order: 5,
    code: "G05",
    topicLabel: "5-mavzu",
    module: "II bo‘lim: Fitoplankton, suv hayvonlari, oziq zanjirlari va mahsuldorlik",
    title: "Fitoplankton va suv havzalaridagi birlamchi mahsuldorlik",
    syllabusPoints: [
      "Fitoplanktonning asosiy taksonomik guruhlari: diatomlar, yashil suvo‘tlar, ko‘k-yashil suvo‘tlar (sianobakteriyalar), dinoflagellatalar, evglenalar",
      "Fitoplanktonning mavsumiy dinamikasi (bahorgi/kuzgi diatom cho‘qqilari, tiniq suv fazasi, yozgi sianobakteriya) va vertikal taqsimoti",
      "Suvda fotosintez va birlamchi mahsuldorlik (Pg, Pn, R, P/R nisbati va kompensatsiya nuqtasi)",
      "Birlamchi mahsuldorlikni o‘lchash usullari: qorong‘i-yorug‘ shishalar, radiouglerod (14C), xlorofill «a» va sun’iy yo‘ldosh monitoringi",
      "«Suv gullashi» (sianobakteriyalar, sianotoksinlar, qizil suv toshqini) va unga qarshi kurash choralari",
    ],
    studyNotes:
      "Diatom suvo‘tlari dunyo okeani birlamchi mahsulotining 40% dan ortig‘ini yaratadi. Sof birlamchi mahsuldorlik Pn = Pg − R. Oligotrof havzalarda mahsuldorlik <50, mezotrofda 50–150, evtrofda 150–500, gipertrofda >500 g C/m²·yil ni tashkil etadi.",
    overview:
      "Fitoplankton — suv ekotizimlarining bosh produtsenti bo‘lib, quyosh energiyasini organik moddalar kimyoviy energiyasiga aylantiradi va Yer atmosferasidagi kislorodning katta qismini ta’minlaydi. Ma’ruzada fitoplanktonning olti asosiy guruhi, yillik ikki cho‘qqili dinamikasi, birlamchi mahsuldorlikni o‘lchash metodlari hamda zaharli «suv gullashi» (mikrotsistin, anatoksin, saksitoksin) mexanizmlari yoritilgan.",
    sections: [
      {
        heading: "5.1. Fitoplanktonning asosiy sistematik guruhlari",
        content:
          "Fitoplankton tarkibiga fotosintezlovchi mikroskopik eukariot suvo‘tlar hamda prokariot sianobakteriyalar kiradi. Har bir guruh pigment tarkibi, zaxira moddasi va ekologik talabi bilan ajralib turadi.",
        highlights: [
          "Diatom suvo‘tlar (Bacillariophyta) — kremniy dioksidli ikki pallali pansirga ega, yog‘ to‘playdi, sovuq suvni sevadi va okean birlamchi mahsulotining >40% ini beradi",
          "Yashil suvo‘tlar (Chlorophyta: Chlorella, Scenedesmus, Volvox) — xlorofill a va b, zaxira moddasi kraxmal, oziq qiymati yuqori",
          "Ko‘k-yashil suvo‘tlar (Cyanobacteria: Microcystis, Anabaena, Aphanizomenon) — prokariot, gaz vakuolalari bilan suzadi, N₂ fiksatsiya qiladi, issiq suvda «suv gullashi» chaqiradi",
          "Dinoflagellatalar (Dinophyta) — ikki xivchinli, ayrimlari miksotrof, dengizlarda zaharli «qizil suv toshqini» (red tide) hosil qiladi",
          "Evglenalar (organik moddaga boy suvlarda) va oltin suvo‘tlar (toza oligotrof ko‘llarda)",
        ],
      },
      {
        heading: "5.2. Mavsumiy suksessiya va vertikal taqsimot",
        content:
          "Mo‘tadil iqlim ko‘llarida fitoplankton biomassasi yil davomida harorat, yorug‘lik, biogenlar va zooplankton bosimiga bog‘liq holda ikki cho‘qqili (bahorgi va kuzgi) qonuniy almashinuvni ko‘rsatadi.",
        highlights: [
          "Bahorgi cho‘qqi — muz erib biogenlar aralashgach, diatom suvo‘tlari jadal rivojlanadi",
          "«Tiniq suv fazasi» (bahor oxiri) — ko‘payib ketgan zooplankton fitoplanktonni yeb bitirishi natijasida suv keskin tiniqlashadi",
          "Yozgi davr — yuqori harorat va azot tanqisligida yashil va ko‘k-yashil suvo‘tlar (sianobakteriyalar) ustunlik qiladi",
          "Kuzgi cho‘qqi — kuzgi gomotermiya biogenlarni tubdan ko‘targach, diatomlar yana rivojlanadi; vertikalda esa eng kuchli fotosintez sirtda fotoingibirlanish tufayli 2–10 m chuqurlikda kuzatiladi",
        ],
      },
      {
        heading: "5.3. Birlamchi mahsuldorlik va uni o‘lchash usullari",
        content:
          "Birlamchi mahsuldorlik — ma’lum maydon yoki hajmda vaqt birligi ichida fotosintez orqali yaratilgan organik modda miqdori (g C/m²·yil). Yalpi birlamchi mahsuldorlikdan (Pg) nafas olish sarfi (R) ayrilganda sof birlamchi mahsuldorlik (Pn = Pg − R) olinadi.",
        highlights: [
          "Avtotrof tizimda P/R > 1 (organik modda to‘planadi), geterotrof tizimda P/R < 1 (organik modda parchalanishi ustun)",
          "Qorong‘i va yorug‘ shishalar usuli (Vinkler kislorod titrlashi) — yorug‘ shishada Pg − R, qorong‘ida R o‘lchanadi",
          "Radiouglerod (14C) usuli — juda kam mahsuldor oligotrof okean suvlari uchun yuqori sezgir metod",
          "Xlorofill «a» konsentratsiyasi va sun’iy yo‘ldosh spektral monitoringi — katta akvatoriyalarda mahsuldorlikni tezkor baholash",
        ],
      },
      {
        heading: "5.4. Suv gullashi, sianotoksinlar va qarshi kurash choralari",
        content:
          "Suv havzasiga ortiqcha fosfor va azot tushishi sianobakteriyalarning ommaviy ko‘payishi — «suv gullashi»ga sabab bo‘ladi. Bu jarayon suv sifatini buzadi, tungi kislorod tanqisligini keltirib chiqaradi va xavfli toksinlar ajralishi bilan tahdid soladi.",
        highlights: [
          "Asosiy sianotoksinlar: mikrotsistin (gepatotoksin — jigarni zararlaydi), anatoksin (neyrotoksin) va saksitoksin (falajlovchi toksin)",
          "Eng samarali uzoq muddatli kurash usuli — havzaga kirayotgan tashqi biogen (ayniqsa fosfor) oqimini kamaytirish",
          "Qo‘shimcha choralar: aeratsiya, biomanipulyatsiya, suv yuzasidan biomassani mexanik yig‘ish va qirg‘oq bufer zonalarini yaratish",
        ],
      },
    ],
    comparisonTable: {
      title: "Suv ekotizimlarining birlamchi mahsuldorlik darajalari (g C/m²·yil)",
      columns: [
        "Suv havzasi / Trofik tur",
        "Birlamchi mahsuldorlik",
        "Xlorofill va shaffoflik",
        "Asosiy xususiyatlari",
      ],
      rows: [
        [
          "Oligotrof ko‘llar va ochiq okean",
          "< 50 g C/m²·yil",
          "Juda kam xlorofill, yuqori shaffoflik",
          "Biogenlar tanqis, kislorod barcha qatlamlarda ko‘p",
        ],
        [
          "Mezotrof suv havzalari",
          "50 – 150 g C/m²·yil",
          "O‘rtacha xlorofill va shaffoflik",
          "Muvozanatli baliqchilik va boy biologik xilma-xillik",
        ],
        [
          "Evtrof ko‘llar va suv omborlari",
          "150 – 500 g C/m²·yil",
          "Yuqori xlorofill, past shaffoflik",
          "Yozda suv gullashi va tubda kislorod kamayishi kuzatiladi",
        ],
        [
          "Gipertrof havzalar",
          "> 500 g C/m²·yil",
          "Juda loyqa yashil suv",
          "Kuchli antropogen ifloslanish, tez-tez zamor va sianotoksinlar",
        ],
        [
          "Marjon riflari va estuariylar",
          "1500 – 3500 g C/m²·yil",
          "Yuqori moddalar aylanishi",
          "Yerdagi eng mahsuldor ekotizimlar qatoriga kiradi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Birlamchi mahsuldorlik (Pg va Pn)",
        definition:
          "Produtsentlar tomonidan fotosintez jarayonida birlik vaqt va maydonda yaratilgan organik modda miqdori; Pn = Pg − R.",
      },
      {
        term: "Diatom suvo‘tlar",
        definition:
          "Kremniyli ikki pallali pansirga ega, yog‘ to‘plovchi va okean birlamchi mahsulotining 40% dan ortig‘ini ta’minlovchi fitoplankton guruhi.",
      },
      {
        term: "Tiniq suv fazasi",
        definition:
          "Bahor oxirida zooplanktonning keskin ko‘payib bahorgi fitoplanktonni yeb bitirishi natijasida ko‘l suvining vaqtincha juda tiniqlashishi.",
      },
      {
        term: "Fotoingibirlanish",
        definition:
          "Suvning eng ustki qatlamida haddan tashqari kuchli quyosh nurlanishi ta’sirida fotosintez tezligining pasayishi (maksimum 2–10 m da kuzatiladi).",
      },
      {
        term: "Sianotoksinlar",
        definition:
          "Ko‘k-yashil suvo‘tlar (sianobakteriyalar) suv gullashi davrida ajratadigan xavfli zaharli moddalar: mikrotsistin, anatoksin va saksitoksin.",
      },
      {
        term: "Qorong‘i-yorug‘ shishalar usuli",
        definition:
          "Suv namunalarini yorug‘ va qorong‘i shishalarda inkubatsiya qilib, kislorod o‘zgarishi bo‘yicha fotosintez va nafas olish tezligini o‘lchash metodi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Yalpi (Pg) va sof (Pn) birlamchi mahsuldorlik hamda P/R nisbati nimani bildiradi?",
        answer:
          "Pg — fotosintezda yaratilgan jami organik modda, Pn = Pg − R esa nafas olish sarfi ayrilgandan keyin qolgan sof o‘sishdir. P/R > 1 bo‘lsa ekotizim avtotrof, P/R < 1 bo‘lsa geterotrof hisoblanadi.",
      },
      {
        question:
          "Mo‘tadil ko‘llarda nima uchun fitoplankton ikki marta (bahor va kuzda) maksimal cho‘qqiga chiqadi?",
        answer:
          "Bahor va kuzda suv ustuni to‘liq aralashib (gomotermiya) tubdagi biogen elementlarni yorug‘ ustki qatlamga ko‘taradi, natijada diatom suvo‘tlari jadal ko‘payadi.",
      },
      {
        question: "Sianobakteriyalarning «suv gullashi» qanday xavf tug‘diradi?",
        answer:
          "Ular suvni loyqalashtiradi, tunda va nobud bo‘lganda parchalanish jarayonida kislorodni tugatib baliq o‘limiga (zamorga) sabab bo‘ladi hamda jigar va asab tizimini zararlovchi mikrotsistin, anatoksin, saksitoksin ajratadi.",
      },
      {
        question:
          "Qaysi hollarda qorong‘i-yorug‘ shishalar o‘rniga radiouglerod (14C) usuli afzal ko‘riladi?",
        answer:
          "Oligotrof ochiq okean suvlarida fotosintez tezligi juda past bo‘lgani uchun kislorod o‘zgarishini Vinkler usulida sezish qiyin; 14C usuli esa yuzlab marta yuqori sezgirlikka ega.",
      },
    ],
    keyTerms: [
      "fitoplankton",
      "birlamchi mahsuldorlik",
      "diatom suvo‘tlar",
      "sianobakteriyalar",
      "dinoflagellatalar",
      "tiniq suv fazasi",
      "fotoingibirlanish",
      "qorong‘i-yorug‘ shishalar",
      "radiouglerod 14C",
      "xlorofill a",
      "suv gullashi",
      "mikrotsistin",
      "sianotoksin",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 5-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/05-mavzu_Fitoplankton_va_birlamchi_mahsuldorlik__1__0e84dfe5.pdf",
    pdfTitle: "5-mavzu: Fitoplankton va birlamchi mahsuldorlik (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "5-mavzu: Fitoplankton va birlamchi mahsuldorlik (Ma’ruza matni)",
        url: "/assets/aistudio/05-mavzu_Fitoplankton_va_birlamchi_mahsuldorlik__1__0e84dfe5.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "5-mavzu: Fitoplankton va birlamchi mahsuldorlik (Taqdimot)",
        url: "/assets/aistudio/05-mavzu_Fitoplankton_va_birlamchi_mahsuldorlik_aebabc83.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-6",
    order: 6,
    code: "G06",
    topicLabel: "6-mavzu",
    module: "II bo‘lim: Fitoplankton, suv hayvonlari, oziq zanjirlari va mahsuldorlik",
    title: "Suv hayvonlari ekologiyasi. Baliqlar ekologiyasi va biologiyasi",
    syllabusPoints: [
      "Suv hayvonlarining fiziologik moslashuvlari: osmoregulyatsiya (chuchuk suv, dengiz, akula), jabra nafas olishi (qarshi oqim tamoyili) va termoregulyatsiya",
      "Suv umurtqasizlari ekologiyasi: filtrator mollyuskalar (midiya), xironomidlar, tubifisidlar va bir kunliklar",
      "Baliqlarning morfofiziologik xususiyatlari: suzgichlar, suzgich pufagi, yon chiziq, Veber apparati va tana shakllari",
      "Baliqlarning oziqlanish ekologik guruhlari va polikultura tamoyili (oq dumba, chipor dumba, oq amur, sazan)",
      "Baliqlarning ko‘payishi, nerest (uvildiriq tashlash) ekologik guruhlari va populyatsiya yosh tuzilmasi",
    ],
    studyNotes:
      "Chuchuk suv baliqlari muhitga nisbatan gipertonik (suv ichmaydi, ko‘p suyultirilgan siydik chiqaradi); dengiz baliqlari gipotonik (ko‘p suv ichib, ortiqcha tuzni jabra orqali chiqaradi). Jabralarda qarshi oqim tamoyili suvdan 80–90% kislorodni o‘zlashtirish imkonini beradi.",
    overview:
      "Suv hayvonlari — filtrator mollyuskalardan tortib yuqori rivojlangan baliqlargacha — suv muhitining bosimi, sho‘rligi va past kislorod miqdoriga mukammal fiziologik moslashuvlarga ega. Ushbu ma’ruza osmoregulyatsiya mexanizmlari, jabra nafas olishining qarshi oqim tamoyili, baliqlarning sezgi organlari, oziqlanish guruhlari, hovuz polikulturasi hamda nerest ekologik guruhlarini qamrab oladi.",
    sections: [
      {
        heading: "6.1. Osmoregulyatsiya, nafas olish va termoregulyatsiya",
        content:
          "Suv hayvonlarining ichki muhit osmotik bosimini ushlab turish mexanizmi ularning chuchuk yoki sho‘r suvda yashashiga qarab tubdan farq qiladi. Nafas olishda esa jabralarning «qarshi oqim» (countercurrent) tizimi juda yuqori samaradorlikni ta’minlaydi.",
        highlights: [
          "Chuchuk suv baliqlari (gipertonik) — suv organizmga osmos bilan kiradi; ular suv ichmaydi, ko‘p miqdorda suyultirilgan siydik chiqaradi va tuzlarni jabralar orqali faol yutadi",
          "Dengiz suyakli baliqlari (gipotonik) — tanadan suv yo‘qotiladi; ular ko‘p dengiz suvi ichadi, kam konsentrlangan siydik ajratadi va ortiqcha tuzlarni jabra xlorid hujayralari orqali chiqaradi",
          "Akula va skatlar (tog‘ayli baliqlar) — qonda mochevina to‘plab, osmotik bosimni dengiz suviga tenglashtiradi",
          "Qarshi oqim tamoyili — jabra kapillyarlaridagi qon oqimi suv oqimiga qarama-qarshi yo‘nalgani sababli suvdagi kislorodning 80–90% i o‘zlashtiriladi",
        ],
      },
      {
        heading: "6.2. Suv umurtqasizlari va baliqlarning morfofiziologik tuzilishi",
        content:
          "Umurtqasizlar suvni biologik tozalash va baliqlar uchun oziq bazasini yaratishda hal qiluvchi rol o‘ynaydi (masalan, bitta midiya sutkasiga 40–70 litr suvni filtrlaydi). Baliqlarda esa suvda mo‘ljal olish va harakatlanish uchun maxsus organlar rivojlangan.",
        highlights: [
          "Suzgich pufagi — gidrostatik organ bo‘lib, baliqqa istalgan chuqurlikda energiya sarflamasdan muallaq turish imkonini beradi",
          "Yon chiziq organi — suv tebranishlari, oqim yo‘nalishi va yaqinlashayotgan to‘siq/o‘ljani sezadi",
          "Veber apparati (karpimonlarda) — suzgich pufagini ichki quloq bilan bog‘lab, eshitish sezgirligini keskin kuchaytiradi",
          "Oltita asosiy tana shakli: torpedo (tunets), o‘qsimon (cho‘rtan), yassi-tik (leshch), yassi-gorizontal (kambala), ilonsimon (ugor) va sharsimon",
        ],
      },
      {
        heading: "6.3. Baliqlarning oziqlanish guruhlari va polikultura tamoyili",
        content:
          "Baliqlar oziqlanish turiga ko‘ra fitofag, planktofag, bentofag, detritofag, yirtqich va evrifaglarga bo‘linadi. Turli oziq nishalarini egallovchi baliqlarni bitta hovuzda birgalikda yetishtirish (polikultura) tabiiy oziq bazasidan to‘liq foydalanish imkonini beradi.",
        highlights: [
          "Oq dumba (Hypophthalmichthys molitrix) — fitoplanktonni filtrlaydi",
          "Chipor dumba (Hypophthalmichthys nobilis) — zooplankton bilan oziqlanadi",
          "Oq amur (Ctenopharyngodon idella) — yuksak suv o‘simliklari (makrofitlar) ni yeydi",
          "Sazan / karp (Cyprinus carpio) — tub bentos va detrit bilan oziqlanadi; ushbu 4 turli polikultura monokulturaga nisbatan mahsulotni 1,5–2 barobar oshiradi",
        ],
      },
      {
        heading: "6.4. Baliqlarning ko‘payishi, nerest guruhlari va populyatsiya dinamikasi",
        content:
          "Baliqlar uvildiriq tashlaydigan substratiga qarab maxsus ekologik nerest guruhlariga ajratiladi. Populyatsiyaning yosh tuzilmasini kuzatish baliq zaxiralarini oqilona boshqarishning bosh mezonidir.",
        highlights: [
          "Litofil (tosh-shag‘alga: osetr, losos), fitofil (suv o‘simliklariga: sazan, cho‘rtan, leshch), psammofil (qumga: qumbaliq)",
          "Pelagofil (ochiq suv qatlamiga suzuvchi uvildiriq: oq amur, oq dumba, treska) va ostrakofil (mollyuska chig‘anog‘iga: gorchak)",
          "Avlodni himoya qiluvchilar (uyaga, og‘iz bo‘shlig‘iga: sudak, tilapiya, dengiz toychog‘i) kamroq, lekin yirik va yashovchan uvildiriq qo‘yadi",
          "Ortiqcha baliq ovlashning (overfishing) eng ishonchli belgisi — populyatsiyada keksa yosh guruhlarining yo‘qolib ketishi va o‘rtacha tana o‘lchamining kichrayishidir",
        ],
      },
    ],
    comparisonTable: {
      title: "Chuchuk suv, dengiz suyakli va tog‘ayli baliqlar osmoregulyatsiyasi qiyosi",
      columns: [
        "Ko‘rsatkich",
        "Chuchuk suv baliqlari",
        "Dengiz suyakli baliqlari",
        "Tog‘ayli baliqlar (akula, skat)",
      ],
      rows: [
        [
          "Ichki osmotik holat",
          "Gipertonik (tana muhitdan sho‘rroq)",
          "Gipotonik (tana dengizdan chuchukroq)",
          "Izotonik (qonda mochevina to‘planadi)",
        ],
        [
          "Suv harakati yo‘nalishi",
          "Suv osmos bilan tanaga kiradi",
          "Suv tanadan tashqariga chiqib ketadi",
          "Osmotik muvozanat saqlanadi",
        ],
        [
          "Suv ichish odati",
          "Suv ichmaydi",
          "Ko‘p miqdorda dengiz suvi ichadi",
          "Deyarli suv ichmaydi",
        ],
        [
          "Siydik xususiyati",
          "Ko‘p hajmli, juda suyultirilgan siydik",
          "Kam hajmli, konsentrlangan siydik",
          "O‘rtacha hajmli, mochevina qayta so‘riladi",
        ],
        [
          "Tuz almashinuvi",
          "Jabralar orqali tuzlarni faol yutadi",
          "Jabra xlorid hujayralari orqali tuz chiqaradi",
          "Rektal bez orqali ortiqcha NaCl chiqaradi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Osmoregulyatsiya",
        definition:
          "Suv hayvonlari organizmida suv va mineral tuzlar muvozanatini hamda ichki osmotik bosimni doimiy saqlashning fiziologik mexanizmi.",
      },
      {
        term: "Qarshi oqim tamoyili",
        definition:
          "Jabra yaproqchalarida qon va suvning qarama-qarshi yo‘nalishda oqishi tufayli gaz almashinuvi samaradorligining 80–90% ga yetishi.",
      },
      {
        term: "Veber apparati",
        definition:
          "Karpimon va laqqasimon baliqlarda suzgich pufagini ichki quloq bilan bog‘lab, tovush tebranishlarini kuchaytiruvchi suyakchalar tizimi.",
      },
      {
        term: "Polikultura",
        definition:
          "Bitta suv havzasida turli oziq bazasidan foydalanuvchi baliq turlarini (oq dumba, chipor dumba, oq amur, sazan) birgalikda parvarishlash usuli.",
      },
      {
        term: "Nerest ekologik guruhlari",
        definition:
          "Baliqlarning uvildiriq tashlash substratiga ko‘ra litofil, fitofil, psammofil, pelagofil va ostrakofil guruhlarga bo‘linishi.",
      },
      {
        term: "Filtrator mollyuskalar",
        definition:
          "Suvni jabralari orqali o‘tkazib, muallaq zarrachalar va planktonni ushlab qoluvchi organizmlar (bitta midiya sutkasiga 40–70 l suvni tozalaydi).",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Chuchuk suv va dengiz suyakli baliqlarining osmoregulyatsiyasi nimasi bilan tubdan farq qiladi?",
        answer:
          "Chuchuk suv baliqlari gipertonik bo‘lgani uchun suv ichmaydi, ko‘p suyultirilgan siydik chiqaradi va jabralar orqali tuz yutadi; dengiz baliqlari esa gipotonik bo‘lib, ko‘p dengiz suvi ichadi va ortiqcha tuzni jabra orqali chiqaradi.",
      },
      {
        question:
          "Nima uchun baliqlarda qarshi oqim tamoyili parallel oqimga qaraganda ancha samarali?",
        answer:
          "Qarshi oqimda jabra bo‘ylab qon doimo o‘zidan ko‘proq kislorodli suv bilan uchrashadi, natijada diffuziya gradienti butun uzunlik bo‘ylab saqlanib 80–90% kislorod o‘zlashtiriladi.",
      },
      {
        question:
          "Hovuz baliqchiligida 4 turli polikultura nima uchun hosildorlikni 1,5–2 barobar oshiradi?",
        answer:
          "Chunki oq dumba fitoplanktonni, chipor dumba zooplanktonni, oq amur makrofitlarni, sazan esa bentosni yeydi — ular bir-biri bilan raqobatlashmasdan barcha oziq zaxiralaridan to‘liq foydalanadi.",
      },
      {
        question:
          "Baliq populyatsiyasida ortiqcha ovlash (overfishing) boshlanganini qaysi belgidan aniqlash mumkin?",
        answer:
          "Eng ishonchli belgi — populyatsiyaning yosh tuzilmasida keksa va yirik yosh guruhlarining keskin kamayishi yoki yo‘qolib ketishi hamda ovlanayotgan baliqlarning maydalashishidir.",
      },
    ],
    keyTerms: [
      "osmoregulyatsiya",
      "qarshi oqim tamoyili",
      "suzgich pufagi",
      "yon chiziq",
      "Veber apparati",
      "polikultura",
      "oq dumba",
      "chipor dumba",
      "litofil",
      "fitofil",
      "pelagofil",
      "ostrakofil",
      "midiya",
      "overfishing",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 6-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/06-mavzu_Suv_hayvonlari_va_baliqlar_ekologiyasi__1__2fbd7097.pdf",
    pdfTitle: "6-mavzu: Suv hayvonlari va baliqlar ekologiyasi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "6-mavzu: Suv hayvonlari va baliqlar ekologiyasi (Ma’ruza matni)",
        url: "/assets/aistudio/06-mavzu_Suv_hayvonlari_va_baliqlar_ekologiyasi__1__2fbd7097.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "6-mavzu: Suv hayvonlari va baliqlar ekologiyasi (Taqdimot)",
        url: "/assets/aistudio/06-mavzu_Suv_hayvonlari_va_baliqlar_ekologiyasi_39fde505.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-7",
    order: 7,
    code: "G07",
    topicLabel: "7-mavzu",
    module: "II bo‘lim: Fitoplankton, suv hayvonlari, oziq zanjirlari va mahsuldorlik",
    title: "Suv havzalarida oziq zanjirlari va oziq to‘rlari. Moddalar aylanishi",
    syllabusPoints: [
      "Yaylov (o‘tloq) va detrit oziq zanjirlari, murakkab oziq to‘rlarining ekotizim barqarorligidagi o‘rni",
      "Trofik darajalar, ekologik piramidalar (sonlar, teskari biomassa piramidasi, doim to‘g‘ri energiya piramidasi) va P/B koeffitsiyenti",
      "Energiya oqimi, R. Lindemanning 10% qoidasi va zaharli moddalarning bioakkumulyatsiyasi (DDT, simob, PXB)",
      "Biogeokimyoviy aylanishlar: uglerod («biologik nasos»), azot (fiksatsiya, nitrifikatsiya, denitrifikatsiya) va fosfor («ichki yuklama»)",
      "«Mikrob halqasi» (microbial loop) konsepsiyasi va erigan organik modda (EOM) ning oziq to‘riga qaytishi",
    ],
    studyNotes:
      "Ochiq okean va ko‘llarda biomassa piramidasi teskari bo‘lishi mumkin (zooplankton biomassasi fitoplanktondan katta), chunki fitoplanktonning P/B koeffitsiyenti juda yuqori (100–300). Energiya piramidasi esa termodinamika qonuniga ko‘ra har doim to‘g‘ri bo‘ladi.",
    overview:
      "Suv ekotizimlarida energiya quyoshdan produtsentlar orqali bir yo‘nalishda oqadi, kimyoviy elementlar (C, N, P) esa yopiq biogeokimyoviy davralarda aylanadi. Ushbu ma’ruza yaylov va detrit zanjirlari, teskari biomassa piramidasi paradoksi, Lindeman qoidasi, bioakkumulyatsiya, azot-fosfor-uglerod sikllari hamda «mikrob halqasi» mexanizmini chuqur tahlil qiladi.",
    sections: [
      {
        heading: "7.1. Yaylov va detrit oziq zanjirlari, oziq to‘rlari",
        content:
          "Suv havzalarida energiya va moddalar ikki asosiy yo‘l orqali uzatiladi: tirik produtsentlardan boshlanuvchi yaylov zanjiri va o‘lik organik qoldiqlardan (detrit) boshlanuvchi detrit zanjiri. Tabiatda bu zanjirlar o‘zaro kesishib barqaror oziq to‘rlarini hosil qiladi.",
        highlights: [
          "Yaylov zanjiri (ochiq pelagialda ustun): Fitoplankton → Zooplankton → Planktofag baliqlar → Yirtqich baliqlar",
          "Detrit zanjiri (tub bental va daryolarda ustun): Detrit + bakteriyalar → Detritofaglar (xironomid, tubifisid) → Bentofag baliqlar",
          "Oziq to‘ri qanchalik murakkab va tarmoqdor bo‘lsa, biror tur kamayganda ekotizim shunchalik yuqori barqarorlikni saqlaydi",
        ],
      },
      {
        heading: "7.2. Trofik piramidalar, P/B koeffitsiyenti va Lindeman qoidasi",
        content:
          "R. Lindemanning 10% qoidasiga ko‘ra bir trofik darajadan keyingisiga energiyaning o‘rtacha 10% i (suvda 15–20% gacha) o‘tadi, qolgani nafas olish va issiqlik sifatida sarflanadi. Shu sababli oziq zanjiri odatda 4–6 bo‘g‘indan oshmaydi.",
        highlights: [
          "Teskari biomassa piramidasi — pelagialda fitoplanktonning P/B koeffitsiyenti 100–300 bo‘lib, juda tez ko‘payib darhol yeyiladi; natijada bir lahzadagi zooplankton biomassasi fitoplanktondan katta ko‘rinadi",
          "P/B (yillik mahsulot/biomassa) koeffitsiyenti: bakteriyalar 100–1000, fitoplankton 100–300, zooplankton 10–40, zoobentos 3–8, baliqlar 0,3–1,5",
          "Energiya piramidasi hech qachon teskari bo‘lmaydi (termodinamikaning II qonuni)",
          "Bioakkumulyatsiya va biomagnifikatsiya — DDT, metilsimob va PXB kabi moddalar oziq zanjirining har bir yuqori pog‘onasida konsentratsiyasini o‘nlab-yuzlab marta oshiradi",
        ],
      },
      {
        heading: "7.3. Uglerod, azot va fosforning biogeokimyoviy aylanishi",
        content:
          "Biogen elementlarning suv muhitidagi aylanishi mikroorganizmlar va gidrobiontlar faoliyati bilan uzviy bog‘liq. Ayniqsa fosfor siklining gaz fazasiga ega emasligi suv havzalarining evtrofikatsiyasida hal qiluvchi rol o‘ynaydi.",
        highlights: [
          "Uglerod sikli va «biologik nasos» — fitoplankton sirtda CO₂ ni bog‘laydi, nobud bo‘lgach organik qoldiqlar chuqur okean tubiga cho‘kib uglerodni asrlar davomida saqlab qoladi",
          "Azot sikli 5 bosqichdan iborat: azotfiksatsiya (sianobakteriyalar) → ammonifikatsiya → nitrifikatsiya (NH₄⁺ → NO₂⁻ → NO₃⁻) → assimilyatsiya → denitrifikatsiya (NO₃⁻ → N₂)",
          "Fosfor siklida gaz fazasi yo‘q; kislorodli sharoitda fosfor Fe(III) bilan cho‘kmaga tushadi, kislorodsiz (anoksik) tubda esa Fe(III) → Fe(II) ga qaytib fosfor suvga qayta ajraladi («ichki yuklama»)",
        ],
      },
      {
        heading: "7.4. «Mikrob halqasi» (Microbial Loop) konsepsiyasi",
        content:
          "Fitoplankton fotosintezda hosil qilgan organik moddaning 30–50% gacha qismi hujayradan suvga erigan organik modda (EOM) sifatida ajraladi. Oddiy zooplankton EOM ni to‘g‘ridan-to‘g‘ri iste’mol qila olmaydi — uni bakteriyalar oziq to‘riga qaytaradi.",
        highlights: [
          "Zanjir: EOM (30–50% birlamchi mahsulot) → Geterotrof bakteriyalar → Mikroflagellatalar (bayraqchalilar) → Infuzoriyalar → Zooplankton",
          "Mikrob halqasi ayniqsa oligotrof okean suvlarida modda va energiyani yo‘qotmasdan qayta aylanishga kiritishda beqiyos ahamiyatga ega",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy gidrobiont guruhlarining P/B koeffitsiyenti va aylanish tezligi",
      columns: [
        "Gidrobiont guruhi",
        "O‘rtacha yillik P/B koeffitsiyenti",
        "Biomassa yangilanish tezligi",
        "Oziq to‘ridagi roli",
      ],
      rows: [
        [
          "Suv bakteriyalari",
          "100 – 1000",
          "Bir necha soat – 1 sutka",
          "Redutsentlar va mikrob halqasining asosiy bo‘g‘ini",
        ],
        [
          "Fitoplankton",
          "100 – 300",
          "1 – 3 sutka",
          "Bosh produtsent; teskari biomassa piramidasini yuzaga keltiradi",
        ],
        [
          "Zooplankton",
          "10 – 40",
          "1 – 4 hafta",
          "I tartib konsument; energiyani baliqlarga uzatadi",
        ],
        [
          "Zoobentos",
          "3 – 8",
          "Bir necha oy",
          "Tub detritofaglari va bentofag baliqlar oziq bazasi",
        ],
        ["Baliqlar", "0,3 – 1,5", "1 – 3 yil", "Yuqori trofik daraja konsumentlari va bioresurs"],
      ],
    },
    keyConcepts: [
      {
        term: "Lindemanning 10% qoidasi",
        definition:
          "Bir trofik darajadan keyingisiga energiyaning o‘rtacha 10% i (suv ekotizimlarida 15–20% gacha) o‘tishi qonuniyati.",
      },
      {
        term: "Teskari biomassa piramidasi",
        definition:
          "Fitoplanktonning P/B koeffitsiyenti juda yuqori bo‘lgani sababli ochiq suvda zooplankton biomassasining bir lahzadagi fitoplankton biomassasidan katta bo‘lishi.",
      },
      {
        term: "Mikrob halqasi (Microbial loop)",
        definition:
          "Suvdagi erigan organik moddalarning (EOM) bakteriyalar, bayraqchalilar va infuzoriyalar orqali qayta zooplankton oziq to‘riga qo‘shilish mexanizmi.",
      },
      {
        term: "Biologik nasos",
        definition:
          "Okean sirtida fitoplankton bog‘lagan uglerodning o‘lik organik qoldiqlar shaklida chuqur tub qatlamlariga cho‘kib atmosfera CO₂ ini kamaytirish jarayoni.",
      },
      {
        term: "Fosforning ichki yuklamasi",
        definition:
          "Suv tubida kislorod tugaganda (anoksiya) temir(III) fosfatning temir(II) ga aylanishi va cho‘kindidan fosforning qayta suvga ajralib chiqishi.",
      },
      {
        term: "Biomagnifikatsiya",
        definition:
          "Parchalanmaydigan zaharli moddalarning (DDT, metilsimob, PXB) oziq zanjiri bo‘ylab yuqori yirtqichlarda yuzlab-minglab barobar to‘planib borishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Ochiq okeanda nima uchun biomassa piramidasi teskari bo‘lishi mumkin, energiya piramidasi esa hech qachon teskari bo‘lmaydi?",
        answer:
          "Fitoplanktonning P/B koeffitsiyenti (100–300) juda yuqori bo‘lib, ular tez ko‘payadi va darhol yeyiladi, shu bois bir onlik biomassasi zooplanktonnikidan kam bo‘lishi mumkin. Energiya esa har bosqichda 80–90% issiqlikka sarflangani uchun energiya piramidasi doimo to‘g‘ri qoladi.",
      },
      {
        question: "Fosfor siklining azot va uglerod sikllaridan asosiy farqi nimada?",
        answer:
          "Fosfor siklida atmosfera (gaz) fazasi mavjud emas. Shuning uchun suv havzasiga tushgan fosfor cho‘kindida to‘planadi va tubda kislorod tugaganda Fe(III)→Fe(II) qaytarilishi tufayli suvga qayta chiqib (ichki yuklama) evtrofikatsiyani davom ettiradi.",
      },
      {
        question: "«Mikrob halqasi» ekotizim energiya balansida qanday vazifani bajaradi?",
        answer:
          "Fitoplankton ajratgan erigan organik moddaning (birlamchi mahsulotning 30–50% i) bekorga yo‘qolishining oldini olib, uni bakteriyalar → bayraqchalilar → infuzoriyalar orqali yana zooplankton va baliqlar oziq to‘riga qaytaradi.",
      },
      {
        question: "Biomagnifikatsiya hodisasi inson salomatligi uchun qanday xavf tug‘diradi?",
        answer:
          "Suvda juda kam konsentratsiyada bo‘lgan simob, DDT yoki PXB oziq zanjiri bo‘ylab yirik yirtqich baliqlarda (tunets, akula, cho‘rtan) xavfli darajagacha to‘planib, ularni iste’mol qilgan insonda zaharlanish keltirib chiqarishi mumkin.",
      },
    ],
    keyTerms: [
      "oziq zanjiri",
      "oziq to‘ri",
      "yaylov zanjiri",
      "detrit zanjiri",
      "P/B koeffitsiyenti",
      "Lindeman 10% qoidasi",
      "teskari biomassa piramidasi",
      "bioakkumulyatsiya",
      "biomagnifikatsiya",
      "biologik nasos",
      "nitrifikatsiya",
      "denitrifikatsiya",
      "ichki yuklama",
      "mikrob halqasi",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 7-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/07-mavzu_Oziq_zanjirlari_va_moddalar_aylanishi__1__96593ef7.pdf",
    pdfTitle: "7-mavzu: Oziq zanjirlari va moddalar aylanishi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "7-mavzu: Oziq zanjirlari va moddalar aylanishi (Ma’ruza matni)",
        url: "/assets/aistudio/07-mavzu_Oziq_zanjirlari_va_moddalar_aylanishi__1__96593ef7.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "7-mavzu: Oziq zanjirlari va moddalar aylanishi (Taqdimot)",
        url: "/assets/aistudio/07-mavzu_Oziq_zanjirlari_va_moddalar_aylanishi_e3fd4e2b.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-8",
    order: 8,
    code: "G08",
    topicLabel: "8-mavzu",
    module: "II bo‘lim: Fitoplankton, suv hayvonlari, oziq zanjirlari va mahsuldorlik",
    title: "Suv havzalarining biologik mahsuldorligi",
    syllabusPoints: [
      "Biomassa («bank hisobi») va biologik mahsulot («yillik daromad») tushunchalari, P = B × (P/B), birlamchi va ikkilamchi mahsuldorlik",
      "Energiya balans tenglamasi (C = P + R + F + U), oziq koeffitsiyenti va suv havzalarining tabiiy baliq mahsuldorligi",
      "Biologik mahsuldorlikka ta’sir etuvchi abiotik, morfometrik, biotik va antropogen omillar",
      "Suv havzalarining trofik tasnifi (ultraoligotrofdan gipertrofgacha) va O‘zbekiston havzalari (Chorvoq, Tuyabo‘g‘iz, Aydar-Arnasoy)",
      "Mahsuldorlikni oshirish usullari, akklimatizatsiya, MSY (maksimal barqaror ov) va zamonaviy akvakultura (RAS)",
    ],
    studyNotes:
      "Biomassa — ma’lum lahzadagi tirik modda zaxirasi (B), mahsulot — vaqt birligida yaratilgan yangi biomassa (P = B × P/B). Balans tenglamasi: C = P + R + F + U. 2013-yildan boshlab jahon akvakulturasi mahsuloti tabiiy baliq ovidan oshib ketdi.",
    overview:
      "Suv havzasining biologik mahsuldorligi uning organik modda va inson uchun qimmatli bioresurslar (baliq, mollyuska, qisqichbaqasimonlar) yaratish qobiliyatidir. Ma’ruzada biomassa va mahsulot farqi, Vinberg balans tenglamasi, oziq koeffitsiyentlari, trofik tasnif chegaralari, O‘zbekiston suv omborlari xususiyatlari, akklimatizatsiyaning ijobiy va salbiy saboqlari hamda zamonaviy yopiq suv ta’minotli akvakultura (RAS) tizimlari yoritilgan.",
    sections: [
      {
        heading: "8.1. Biomassa, biologik mahsulot va balans tenglamasi",
        content:
          "Gidrobiologiyada biomassa («bank hisobidagi mablag‘») va biologik mahsulot («yillik foiz daromadi») aniq farqlanadi. Ikkilamchi mahsulot konsumentlarning oziqlanish va energiya taqsimoti qonuniyatlariga bo‘ysunadi.",
        highlights: [
          "Asosiy formula: P = B × (P/B), bunda B — o‘rtacha biomassa, P/B — solishtirma mahsuldorlik koeffitsiyenti",
          "Energiya balans tenglamasi: C = P + R + F + U (iste’mol qilingan oziq = o‘sish + nafas olish + hazm bo‘lmagan qoldiq + ajratish)",
          "Oziq koeffitsiyenti (1 kg baliq o‘sishi uchun zarur oziq): kombikorm 1,5–3, zooplankton 4–6, bentos 5–8, mollyuska 10–15, o‘simlik 20–40",
          "Tabiiy baliq mahsuldorligi: oligotrof 5–20, mezotrof 20–60, evtrof 60–200, o‘g‘itlangan hovuzlar 1000–3000, sadkalar >10 000 kg/ga·yil",
        ],
      },
      {
        heading: "8.2. Mahsuldorlik omillari va suv havzalarining trofik tasnifi",
        content:
          "Mahsuldorlik harorat, yorug‘lik, biogen elementlar (Libix cheklovchi omili), havzaning chuqurligi va qirg‘oq chizig‘i egri-bugriligi (morfometriya) bilan belgilanadi. Ochiq tropik okeanlar yorug‘ va iliq bo‘lsa-da, termoklin biogenlar ko‘tarilishini to‘sgani uchun «biologik cho‘l» hisoblanadi.",
        highlights: [
          "Ultraoligotrof (<5 mkg/l umumiy P) → Oligotrof (5–10 mkg/l) → Mezotrof (10–30 mkg/l) → Evtrof (30–100 mkg/l) → Gipertrof (>100 mkg/l)",
          "Chorvoq suv ombori — chuqur, sovuq va oligotrof-mezotrof xususiyatli (forel va sovuqsevar turlar uchun qulay)",
          "Tuyabo‘g‘iz (Toshkent dengizi) va Aydar-Arnasoy ko‘llar tizimi — iliq, mezotrof-evtrof va yuqori baliq mahsuldorligiga ega havzalar",
        ],
      },
      {
        heading: "8.3. Akklimatizatsiya, MSY va zamonaviy akvakultura",
        content:
          "Suv havzalari mahsuldorligini oshirish uchun o‘g‘itlash, melioratsiya, polikultura, ilmiy asoslangan akklimatizatsiya va intensiv akvakultura qo‘llaniladi. Biroq ilmiy tahlilsiz yangi tur kiritish og‘ir ekologik falokatlarga olib kelishi mumkin.",
        highlights: [
          "Ijobiy akklimatizatsiya: Uzoq Sharq Amur baliqlarining (oq amur, oq dumba) O‘zbekiston havzalariga muvaffaqiyatli moslashtirilishi",
          "Halokatli invaziyalar: Viktoriya ko‘liga Nil olabugasi kiritilishi 200 dan ortiq endemik tsixlid turlarini yo‘q qildi; Qora dengizda Mnemiopsis taroqchasi baliqchilikni izdan chiqardi",
          "MSY (Maksimal Barqaror Ov) — populyatsiyani qayta tiklanish qobiliyatiga putur yetkazmasdan har yili ovlash mumkin bo‘lgan eng yuqori miqdor",
          "Akvakultura turlari: ekstensiv, yarim intensiv, intensiv (sadka) va RAS (yopiq suv aylanish tizimi — suvning 95–99% ini qayta ishlatadi)",
        ],
      },
    ],
    comparisonTable: {
      title: "Suv havzalarining trofik tasnifi va baliq mahsuldorligi ko‘rsatkichlari",
      columns: [
        "Trofik daraja",
        "Umumiy fosfor (mkg/l)",
        "Sekki shaffofligi (m)",
        "Tabiiy baliq mahsuldorligi (kg/ga·yil)",
      ],
      rows: [
        ["Ultraoligotrof", "< 5", "> 12", "< 5"],
        ["Oligotrof", "5 – 10", "6 – 12", "5 – 20"],
        ["Mezotrof", "10 – 30", "3 – 6", "20 – 60"],
        ["Evtrof", "30 – 100", "1 – 3", "60 – 200"],
        ["Gipertrof / Intensiv hovuz", "> 100", "< 1", "Hovuzlar 1000–3000; sadkalar >10 000"],
      ],
    },
    keyConcepts: [
      {
        term: "Biomassa (B) va Mahsulot (P)",
        definition:
          "Biomassa — ma’lum paytdagi tirik organizmlar umumiy massasi; mahsulot — ma’lum vaqt ichida yaratilgan yangi biomassa o‘sishi (P = B × P/B).",
      },
      {
        term: "Balans tenglamasi (C = P + R + F + U)",
        definition:
          "Konsument iste’mol qilgan oziq energiyasining o‘sish (P), nafas olish (R), hazm bo‘lmagan qoldiq (F) va ajratish (U) o‘rtasida taqsimlanish qonuni.",
      },
      {
        term: "Oziq koeffitsiyenti",
        definition:
          "1 kg baliq tana massasi o‘sishini ta’minlash uchun sarflanadigan oziq miqdori (kombikorm uchun 1,5–3, o‘simlik oziqi uchun 20–40).",
      },
      {
        term: "MSY (Maximum Sustainable Yield)",
        definition:
          "Baliq populyatsiyasining barqaror qayta tiklanishini buzmasdan har yili doimiy ravishda ovlash mumkin bo‘lgan maksimal ov hajmi.",
      },
      {
        term: "RAS (Recirculating Aquaculture System)",
        definition:
          "Suvni mexanik va biologik filtrlar orqali tozalab, 95–99% qayta ishlatadigan zamonaviy yopiq suv ta’minotli intensiv baliqchilik tizimi.",
      },
      {
        term: "Akklimatizatsiya",
        definition:
          "Foydali gidrobiont turlarini yangi suv havzasiga ko‘chirib, ularning moslashishi va barqaror ko‘payishini ta’minlash jarayoni.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Biomassa va biologik mahsulot tushunchalarining farqini misol bilan tushuntiring.",
        answer:
          "Biomassa — ma’lum lahzada suvda mavjud bo‘lgan organizmlar og‘irligi («bank hisobi»), biologik mahsulot esa bir yil yoki mavsum davomida hosil bo‘lgan jami yangi tirik modda («yillik daromad»). Fitoplanktonning biomassasi kam bo‘lsa-da, mahsuloti ulkan bo‘ladi.",
      },
      {
        question:
          "Nima uchun ochiq tropik okeanlar quyosh nuri ko‘p bo‘lishiga qaramay «biologik cho‘l» deb ataladi?",
        answer:
          "Tropiklarda doimiy kuchli termoklin mavjud bo‘lib, u tubdagi biogen elementlarga boy suvning sirtqi yorug‘ qatlamga ko‘tarilishiga to‘sqinlik qiladi, natijada fitoplankton rivojlana olmaydi.",
      },
      {
        question:
          "Nil olabugasi va Mnemiopsis misollari akklimatizatsiya bo‘yicha qanday saboq beradi?",
        answer:
          "Ekologik oqibatlari chuqur o‘rganilmasdan yangi yirtqich yoki raqobatchi turlarni kiritish mahalliy endemik turlarning qirilib ketishiga va butun baliqchilik tizimining inqiroziga olib kelishi mumkin.",
      },
      {
        question:
          "Zamonaviy RAS akvakulturasining an’anaviy hovuz baliqchiligidan asosiy ustunliklari nimada?",
        answer:
          "RAS tizimida suvning 95–99% i tozalanib qayta ishlatiladi, harorat va kislorod yil bo‘yi to‘liq nazorat qilinadi, kichik maydondan ulkan hosil olinadi va tashqi suv havzalari ifloslanmaydi.",
      },
    ],
    keyTerms: [
      "biologik mahsuldorlik",
      "biomassa",
      "balans tenglamasi",
      "oziq koeffitsiyenti",
      "trofik tasnif",
      "Chorvoq",
      "Aydar-Arnasoy",
      "akklimatizatsiya",
      "Nil olabugasi",
      "Mnemiopsis",
      "MSY",
      "akvakultura",
      "RAS",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 8-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/08-mavzu_Suv_havzalarining_biologik_mahsuldorligi__1__ad866884.pdf",
    pdfTitle: "8-mavzu: Suv havzalarining biologik mahsuldorligi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "8-mavzu: Suv havzalarining biologik mahsuldorligi (Ma’ruza matni)",
        url: "/assets/aistudio/08-mavzu_Suv_havzalarining_biologik_mahsuldorligi__1__ad866884.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "8-mavzu: Suv havzalarining biologik mahsuldorligi (Taqdimot)",
        url: "/assets/aistudio/08-mavzu_Suv_havzalarining_biologik_mahsuldorligi_f24d6373.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-9",
    order: 9,
    code: "G09",
    topicLabel: "9-mavzu",
    module: "III bo‘lim: Evtrofikatsiya, monitoring, bioresurslar va zamonaviy muammolar",
    title:
      "Evtrofikatsiya jarayoni. Suv havzalarining ifloslanishi va suv ekotizimlarini muhofaza qilish",
    syllabusPoints: [
      "Suv ifloslanishining asosiy manbalari (nuqtaviy, tarqoq/diffuz, ichki) va turlari (mexanik, organik, toksik, biogen, issiqlik, neft)",
      "Evtrofikatsiya: tabiiy va antropogen evtrofikatsiya, 9 bosqichli rivojlanish zanjiri va Karlson TSI indeksi",
      "Evtrofikatsiyaga qarshi kurash strategiyalari: tashqi va ichki yuklamani kamaytirish, biomanipulyatsiya (Vashington ko‘li va Boltiq dengizi)",
      "Toksik ifloslanish ko‘rsatkichlari: LC50, PDK, BPK (biologik kislorod sarfi), XPK va saproblik zonalari",
      "Suv ekotizimlarini muhofaza qilish: havza tamoyili, Qizil kitob, qo‘riqxonalar, Ramsar konvensiyasi va CITES",
    ],
    studyNotes:
      "Tabiiy evtrofikatsiya minglab yil davom etsa, antropogen evtrofikatsiya 10–30 yilda ko‘lni tanazzulga olib keladi. Issiqlik ifloslanishi ikki tomonlama bosim yaratadi: kislorod eruvchanligini pasaytiradi va bir vaqtning o‘zida organizmlarning kislorodga ehtiyojini oshiradi.",
    overview:
      "Antropogen ta’sir tufayli suv havzalarining ifloslanishi va jadal evtrofikatsiyasi zamonaviy gidrobiologiyaning eng dolzarb muammolaridandir. Ushbu ma’ruzada ifloslanish turlari, suvning o‘z-o‘zini tozalash mexanizmlari, evtrofikatsiyaning 9 bosqichi, Karlson TSI indeksi, toksikologiya me’yorlari (PDK, LC50, BPK, saproblik zonalari) hamda suv ekotizimlarini xalqaro muhofaza qilish (Ramsar, CITES) tamoyillari bayon etilgan.",
    sections: [
      {
        heading: "9.1. Suv ifloslanishi manbalari, turlari va o‘z-o‘zini tozalash",
        content:
          "Suv havzalarini ifloslantiruvchi manbalar aniq quvurdan tushuvchi nuqtaviy (sanoat, maishiy oqova) va keng hududdan yuvilib keluvchi tarqoq/diffuz (qishloq xo‘jaligi o‘g‘itlari, pestitsidlar) manbalarga bo‘linadi. Tabiiy suv havzalari fizik, kimyoviy va biologik jarayonlar orqali ma’lum chegaragacha o‘z-o‘zini tozalash qobiliyatiga ega.",
        highlights: [
          "Asosiy ifloslanish turlari: mexanik (loyqa), organik (BPK oshishi), toksik (og‘ir metallar, pestitsidlar), biogen (N, P), biologik (patogenlar), neft va radioaktiv",
          "Issiqlik ifloslanishi (IES/AES sovutish suvlari) — ikki tomonlama bosim: suvda O₂ eruvchanligi kamayadi, gidrobiontlar metabolizmi va O₂ talabi esa ortadi",
          "O‘z-o‘zini tozalash — bakteriyalar, filtrator mollyuskalar, makrofitlar va fotokimyoviy oksidlanishning hamkorlikdagi jarayoni",
        ],
      },
      {
        heading: "9.2. Evtrofikatsiya bosqichlari, Karlson TSI va tiklash tajribasi",
        content:
          "Evtrofikatsiya — suv havzasining biogen elementlar (fosfor va azot) bilan boyishi natijasida birlamchi mahsuldorlikning haddan tashqari ortib ketishi va suv sifatining keskin yomonlashishidir. Holat Karlsonning trofik holat indeksi (TSI: 0–100) orqali baholanadi.",
        highlights: [
          "Evtrofikatsiya zanjiri: biogen ortishi → fitoplankton gullashi → shaffoflik pasayishi → makrofitlar halokati → organik cho‘kma → bakterial parchalanish → tub anoksiyasi → ichki fosfor yuklamasi → zamor va turlar qisqarishi",
          "Tashqi yuklamani kamaytirish (fosfatsiz yuvish vositalari, zamonaviy tozalash inshootlari) — Vashington ko‘lini 10 yilda muvaffaqiyatli tiklagan strategiya",
          "Biomanipulyatsiya — yirtqich baliqlarni ko‘paytirish → planktofag baliqlarni kamaytirish → yirik dafniyalarni ko‘paytirish → fitoplankton gullashini bostirish",
        ],
      },
      {
        heading: "9.3. Toksikologiya me’yorlari va saproblik zonalari",
        content:
          "Suv sifatining sanitar-toksikologik bahosida kimyoviy ko‘rsatkichlar (BPK, XPK, PDK) va biologik saproblik tizimi birgalikda qo‘llaniladi. Toza tabiiy suvlarda BPK₅ ko‘rsatkichi odatda 2 mg O₂/l dan past bo‘ladi.",
        highlights: [
          "LC50 — sinov organizmlarining 50% ini belgilangan muddatda (24–96 soat) nobud qiluvchi letal konsentratsiya",
          "PDK (ruxsat etilgan chegaraviy konsentratsiya) — suvda hayot va inson salomatligi uchun xavfsiz maksimal modda miqdori",
          "BPK (biologik kislorod sarfi) — mikroorganizmlarning organik moddani oksidlashga sarflaydigan O₂ miqdori; XPK — kimyoviy oksidlanish ko‘rsatkichi",
          "Saproblik zonalari: ksenosaprob (juda toza) → oligosaprob (toza) → β-mezosaprob (o‘rtacha) → α-mezosaprob (iflos) → polisaprob (juda iflos)",
        ],
      },
      {
        heading: "9.4. Suv ekotizimlarini muhofaza qilish va xalqaro konvensiyalar",
        content:
          "Suv havzalarini samarali muhofaza qilish alohida nuqtalarni emas, balki butun daryo havzasini yaxlit boshqarish (havza va ekotizimli tamoyil) ni talab etadi.",
        highlights: [
          "Ramsar konvensiyasi (1971) — xalqaro ahamiyatga ega suvli-botqoqli hududlarni muhofaza qilish (O‘zbekistonda Dengizko‘l, Aydar-Arnasoy, To‘dako‘l, Quyimozor, Sudochye)",
          "CITES konvensiyasi — yo‘qolib ketish xavfi ostidagi yovvoyi fauna va flora (osetr baliqlari, kurakburunlar) savdosini qat’iy nazorat qilish",
          "Qizil kitob, qo‘riqxonalar, buyurtmaxonalar, qirg‘oq muhofaza zonalari va noyob turlar gen banklari",
        ],
      },
    ],
    comparisonTable: {
      title: "Suv havzalarining saproblik zonalari va asosiy indikatorlari",
      columns: [
        "Saproblik zonasi",
        "Suv sifati va kislorod",
        "BPK₅ (mg O₂/l)",
        "Xarakterli bioindikatorlar",
      ],
      rows: [
        [
          "Ksenosaprob",
          "Eng toza tog‘ buloqlari, O₂ to‘yingan",
          "< 1,0",
          "Planariyalar, tog‘ veshnyankalari, forel",
        ],
        [
          "Oligosaprob",
          "Toza suv havzalari, O₂ yuqori",
          "1,0 – 2,0",
          "Bir kunliklar, ruchayniklar, oltin va diatom suvo‘tlar",
        ],
        [
          "β-mezosaprob",
          "O‘rtacha toza, muvozanatli",
          "2,0 – 5,0",
          "Yashil suvo‘tlar, ko‘pchilik mollyuskalar, dafniyalar",
        ],
        [
          "α-mezosaprob",
          "Sezilarli organik ifloslangan, O₂ past",
          "5,0 – 10,0",
          "Evglenalar, sianobakteriyalar, suv eshakchalari (Asellus)",
        ],
        [
          "Polisaprob",
          "Kuchli ifloslangan, anoksiya va H₂S",
          "> 10,0",
          "Tubifisidlar (Tubifex), qizil motil, oltingugurt bakteriyalari",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Antropogen evtrofikatsiya",
        definition:
          "Inson faoliyati natijasida suv havzalariga ortiqcha fosfor va azot tushib, 10–30 yil ichida jadal suv gullashi va kislorod tanqisligini keltirib chiqarishi.",
      },
      {
        term: "Karlson TSI indeksi",
        definition:
          "Xlorofill «a», umumiy fosfor va Sekki shaffofligi asosida suv havzasining trofik darajasini 0 dan 100 gacha shkalada baholovchi indeks.",
      },
      {
        term: "BPK va XPK",
        definition:
          "BPK — bakteriyalarning organik moddalarni parchalash uchun sarflaydigan kislorodi; XPK — kuchli oksidlovchi bilan kimyoviy oksidlanadigan barcha organik moddalar ko‘rsatkichi.",
      },
      {
        term: "LC50 (Mediana letal konsentratsiya)",
        definition:
          "Toksikologik tajribada ma’lum muddat ichida sinov gidrobiontlarining 50% ini halok qiluvchi zaharli modda konsentratsiyasi.",
      },
      {
        term: "Biomanipulyatsiya",
        definition:
          "Oziq to‘ridagi yirtqich baliqlar ulushini oshirib, yirik zooplankton (dafniya) orqali fitoplankton gullashini bostirishning ekologik usuli.",
      },
      {
        term: "Ramsar konvensiyasi",
        definition:
          "Xalqaro ahamiyatga ega suvli-botqoqli hududlar va suv qushlari yashash joylarini muhofaza qilish to‘g‘risidagi xalqaro shartnoma.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Issiqlik ifloslanishi suv organizmlariga qanday «ikki tomonlama bosim» ko‘rsatadi?",
        answer:
          "Harorat ko‘tarilganda bir vaqtning o‘zida fizik qonun bo‘yicha suvda kislorodning eruvchanligi pasayadi, Vant-Goff qoidasi bo‘yicha esa gidrobiontlarning metabolizmi va kislorodga ehtiyoji keskin ortadi.",
      },
      {
        question: "Vashington ko‘lini evtrofikatsiyadan tiklash tajribasi nimani isbotladi?",
        answer:
          "Maishiy oqovalarni ko‘ldan chetlatib tashqi fosfor yuklamasini keskin kamaytirish orqali hatto kuchli evtrofikatsiyaga uchragan yirik ko‘lni ham 10 yil ichida tiniq holatga qaytarish mumkinligini isbotladi.",
      },
      {
        question: "Biomanipulyatsiyada trofik kaskad qanday ishlaydi?",
        answer:
          "Yirtqich baliqlar ko‘paytirilganda ular planktofag baliqlarni kamaytiradi; natijada yirik filtrator zooplankton (dafniyalar) ko‘payib, fitoplanktonni yeb bitiradi va suv tiniqlashadi.",
      },
      {
        question: "Oligosaprob va polisaprob suv havzalari qanday farqlanadi?",
        answer:
          "Oligosaprob suvlar toza, kislorodga boy, BPK₅ < 2 mg/l bo‘lib bir kunliklar va ruchayniklar yashaydi; polisaprob suvlar esa kuchli organik ifloslangan, anoksik bo‘lib faqat tubifisidlar va qizil xironomidlar uchraydi.",
      },
    ],
    keyTerms: [
      "evtrofikatsiya",
      "Karlson TSI",
      "nuqtaviy ifloslanish",
      "tarqoq ifloslanish",
      "issiqlik ifloslanishi",
      "o‘z-o‘zini tozalash",
      "LC50",
      "PDK",
      "BPK",
      "XPK",
      "saproblik zonalari",
      "biomanipulyatsiya",
      "Ramsar konvensiyasi",
      "CITES",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 9-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl:
      "/assets/aistudio/09-mavzu_Evtrofikatsiya_ifloslanish_va_suvni_muhofaza__1__d83b3c2d.pdf",
    pdfTitle: "9-mavzu: Evtrofikatsiya, ifloslanish va suvni muhofaza qilish (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "9-mavzu: Evtrofikatsiya, ifloslanish va suvni muhofaza qilish (Ma’ruza matni)",
        url: "/assets/aistudio/09-mavzu_Evtrofikatsiya_ifloslanish_va_suvni_muhofaza__1__d83b3c2d.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "9-mavzu: Evtrofikatsiya, ifloslanish va suvni muhofaza qilish (Taqdimot)",
        url: "/assets/aistudio/09-mavzu_Evtrofikatsiya_ifloslanish_va_suvni_muhofa_bd815c8d.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-10",
    order: 10,
    code: "G10",
    topicLabel: "10-mavzu",
    module: "III bo‘lim: Evtrofikatsiya, monitoring, bioresurslar va zamonaviy muammolar",
    title:
      "Suv havzalarining biologik monitoringi. Suv bioresurslari va ulardan oqilona foydalanish",
    syllabusPoints: [
      "Biologik monitoring turlari (fon, impakt, mintaqaviy, global, operativ) va uning kimyoviy monitoringdan afzalliklari",
      "Bioindikatsiya (makrozoobentos EPT indeksi) va laboratoriya biotestlash (Daphnia magna, Chlorella, Paramecium)",
      "Asosiy gidrobiologik monitoring indekslari: Pantle-Bukk, Vudivis (TBI), BMWP, ASPT, Shennon, Simpson va eDNA metabarkodingi",
      "Suv bioresurslari zaxiralari: umumiy, promysel, nerest zaxirasi (eng muhimi), TAC, CPUE va O‘zbekiston havzalari",
      "Bioresurslardan oqilona foydalanish, IUU (noqonuniy ov) ga qarshi kurash va BMT 14-Barqaror rivojlanish maqsadi",
    ],
    studyNotes:
      "Kimyoviy tahlil faqat namuna olingan soniyadagi holatni ko‘rsatsa, biologik monitoring (bioindikatsiya) bir necha hafta va oylar davomidagi jami ifloslanish ta’sirini «ekologik xotira» sifatida qayd etadi. Biotestlashda standart organizm — Daphnia magna (24/48 soat).",
    overview:
      "Suv havzalarining ekologik holatini haqqoniy baholash va baliqchilik resurslarini saqlab qolish uchun tizimli biologik monitoring zarur. Ma’ruzada bioindikatsiya va biotestlash farqi, Pantle-Bukk, Vudivis, BMWP, EPT hamda Shennon indekslarini hisoblash tamoyillari, eDNA metabarkodingi, baliq zaxiralarini (nerest zaxirasi, TAC, CPUE) boshqarish va BMTning 14-maqsadi («Suv osti hayoti») yoritilgan.",
    sections: [
      {
        heading: "10.1. Biologik monitoring turlari, bioindikatsiya va biotestlash",
        content:
          "Biologik monitoring tirik organizmlar va jamoalar holatiga qarab suv muhitidagi o‘zgarishlarni uzluksiz kuzatish tizimidir. U fon (toza etalon), impakt (ifloslanish manbai yaqinida), mintaqaviy va global darajalarda olib boriladi.",
        highlights: [
          "Kimyoviy monitoringdan ustunligi: bir martalik yashirin zaharlanishni ham sezadigan «ekologik xotira» va moddalarning sinergik ta’sirini yaxlit baholash",
          "Bioindikatsiya (tabiiy sharoitda) — tor ekologik valentlikka ega indikator turlar tarkibini o‘rganish (EPT guruhi: Ephemeroptera, Plecoptera, Trichoptera)",
          "Biotestlash (laboratoriyada) — suv namunasiga standart test-obyektlarni joylab zaharlilikni (LC50) aniqlash",
          "Standart biotest obyektlari: Daphnia magna (24/48 soat harakatsizlanish), Chlorella vulgaris (o‘sish tezligi), Paramecium caudatum",
        ],
      },
      {
        heading: "10.2. Gidrobiologik monitoring indekslari va eDNA metabarkodingi",
        content:
          "Dala kuzatuvlari natijalarini solishtirish va suv sifatini sinflarga ajratish uchun xalqaro miqyosda qabul qilingan miqdoriy biotik va xilma-xillik indekslari qo‘llaniladi.",
        highlights: [
          "Pantle-Bukk saproblik indeksi: S = Σ(s · h) / Σh — indikator turlarning saprob qiymati (s) va uchrashish chastotasi (h) bo‘yicha",
          "Vudivis biotik indeksi (TBI, 0–10 ball) — makrozoobentosning sezgir guruhlari va umumiy taksonlar soni asosida",
          "BMWP va ASPT (o‘rtacha ball) — har bir umurtqasiz oilasiga 1 dan 10 gacha sezgirlik bali berish tizimi",
          "Shennon (H') va Simpson (D) indekslari — jamoaning turlar xilma-xilligini o‘lchaydi; eDNA metabarkodingi esa birgina suv namunasidan yuzlab turlarni tezkor aniqlaydi",
        ],
      },
      {
        heading: "10.3. Suv bioresurslari zaxiralari va oqilona boshqaruv",
        content:
          "Suv bioresurslari qayta tiklanuvchi, ammo cheklangan boylikdir. Ulardan barqaror foydalanish uchun populyatsiyaning umumiy, promysel (ovlanadigan) va ayniqsa nerest (ko‘payuvchi) zaxirasi qat’iy hisoblanadi.",
        highlights: [
          "Nerest zaxirasi (SSB) — populyatsiyaning eng muhim qismi; uni haddan tashqari kamaytirish zaxiraning to‘liq inqiroziga olib keladi",
          "TAC (Total Allowable Catch — ruxsat etilgan umumiy ov) va kvotalar, to‘r ko‘zi minimal o‘lchami, nerest davridagi mavsumiy taqiqlar",
          "CPUE (Catch Per Unit Effort — birlik ov kuchiga to‘g‘ri keluvchi ov) — zaxira zichligini kuzatuvchi asosiy ko‘rsatkich",
          "Yon ov (bycatch) va IUU (noqonuniy, hisobga olinmagan va tartibga solinmagan ov) ga qarshi kurash hamda BMT 14-maqsadi («Suv osti hayoti»)",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy gidrobiologik monitoring indekslari va qo‘llanilishi",
      columns: ["Indeks / Usul", "Formula yoki shkala", "Asosiy obyekt", "Nimani baholaydi"],
      rows: [
        [
          "Pantle-Bukk indeksi (S)",
          "S = Σ(s·h) / Σh (0,5 – 4,0)",
          "Plankton, perifiton, bentos",
          "Suvning organik ifloslanish va saproblik darajasini",
        ],
        [
          "Vudivis indeksi (TBI)",
          "0 (o‘lik) – 10 (juda toza)",
          "Makrozoobentos",
          "Daryo va soylarning integral ekologik tozaligini",
        ],
        [
          "BMWP / ASPT",
          "Har oila 1–10 ball; ASPT = BMWP/N",
          "Makrozoobentos oilalari",
          "Suv sifati sinfini tezkor va standartlashtirilgan baholash",
        ],
        [
          "EPT indeksi",
          "Ephemeroptera + Plecoptera + Trichoptera %",
          "Sezgir hasharot lichinkalari",
          "Kislorodga boy toza oqar suvlar holatini",
        ],
        [
          "Shennon indeksi (H') va Biotestlash",
          "H' = −Σ pᵢ ln(pᵢ); LC50 (24/48 s)",
          "Butun jamoa / Daphnia magna",
          "Biologik xilma-xillik va suvning o‘tkir toksikligini",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Bioindikatsiya va biotestlash",
        definition:
          "Bioindikatsiya — tabiiy havzadagi indikator turlar tarkibini tahlil qilish; biotestlash — laboratoriyada standart organizmlar (Daphnia magna) yordamida suv zaharliligini sinash.",
      },
      {
        term: "EPT guruhi",
        definition:
          "Toza suvga o‘ta talabchan uchta hasharot turkumi lichinkalari: bir kunliklar (Ephemeroptera), veshnyankalar (Plecoptera) va ruchayniklar (Trichoptera).",
      },
      {
        term: "Pantle-Bukk indeksi",
        definition:
          "Indikator organizmlarning saproblik qiymati va soni asosida suv havzasining organik ifloslanish darajasini hisoblovchi klassik formula: S = Σ(s·h)/Σh.",
      },
      {
        term: "TAC va CPUE",
        definition:
          "TAC — bir mavsumda ovlashga ruxsat etilgan umumiy baliq kvotasi; CPUE — birlik ov quroli/vaqtiga to‘g‘ri keluvchi ov hajmi.",
      },
      {
        term: "IUU ov (brakonyerlik)",
        definition:
          "Illegal, Unreported, Unregulated — noqonuniy, hisobga olinmagan va tartibga solinmagan baliq ovlash amaliyoti.",
      },
      {
        term: "Nerest zaxirasi",
        definition:
          "Populyatsiyaning voyaga yetgan va ko‘payishda ishtirok etuvchi qismi — bioresurs barqarorligining asosiy kafolati.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Biologik monitoring kimyoviy tahlilga qaraganda qanday muhim ustunlikka ega?",
        answer:
          "Kimyoviy tahlil faqat namuna olingan lahzadagi ayrim moddalarni ko‘rsatadi; biologik monitoring esa bir necha hafta-oylik barcha ifloslantiruvchilarning jamlangan va sinergik ta’sirini organizmlar jamoasi orqali aniqlaydi.",
      },
      {
        question: "Laboratoriya biotestlashida nima uchun Daphnia magna keng qo‘llaniladi?",
        answer:
          "Dafniya zaharli moddalarga juda sezgir, laboratoriyada oson va partenogenetik tez ko‘payadi (genetik bir xil klonlar), 24–48 soat ichida aniq LC50 natijasini beradi.",
      },
      {
        question:
          "Baliqchilikni boshqarishda nima uchun aynan nerest zaxirasini himoyalash hal qiluvchi ahamiyatga ega?",
        answer:
          "Chunki keyingi avlodlar soni bevosita ko‘payishga yetib borgan voyaga yetgan baliqlar (nerest zaxirasi) ga bog‘liq; ularni nerest davrida ovlash populyatsiyani tezda yo‘q qiladi.",
      },
      {
        question: "Suv bioresurslarini saqlashda qaysi tartibga solish choralari qo‘llaniladi?",
        answer:
          "Ruxsat etilgan umumiy ov (TAC) va kvotalar belgilash, to‘r ko‘zining minimal o‘lchamini nazorat qilish, nerest davrida ovni taqiqlash, yon ovni kamaytirish va IUU brakonyerlikka qarshi kurashish.",
      },
    ],
    keyTerms: [
      "biologik monitoring",
      "bioindikatsiya",
      "biotestlash",
      "Daphnia magna",
      "Pantle-Bukk",
      "Vudivis indeksi",
      "BMWP",
      "ASPT",
      "EPT indeksi",
      "Shennon indeksi",
      "TAC",
      "CPUE",
      "IUU",
      "nerest zaxirasi",
      "BMT 14-maqsadi",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 10-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/10-mavzu_Biologik_monitoring_va_bioresurslar__1__96dec29f.pdf",
    pdfTitle: "10-mavzu: Biologik monitoring va suv bioresurslari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "10-mavzu: Biologik monitoring va suv bioresurslari (Ma’ruza matni)",
        url: "/assets/aistudio/10-mavzu_Biologik_monitoring_va_bioresurslar__1__96dec29f.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "10-mavzu: Biologik monitoring va suv bioresurslari (Taqdimot)",
        url: "/assets/aistudio/10-mavzu_Biologik_monitoring_va_bioresurslar_2ae0c1a1.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "gidro-11",
    order: 11,
    code: "G11",
    topicLabel: "11-mavzu",
    module: "III bo‘lim: Evtrofikatsiya, monitoring, bioresurslar va zamonaviy muammolar",
    title: "Gidrobiologiyaning zamonaviy muammolari va istiqbollari",
    syllabusPoints: [
      "Global iqlim o‘zgarishining suv ekotizimlariga ta’siri: okean kislotalanishi, deoksigenatsiya («o‘lik zonalar»), fenologiya va marjon oqarishi",
      "Biologik invaziyalar: kema ballast suvlari, biofouling, «biotik gomogenizatsiya» va oldini olish strategiyalari",
      "Mikroplastik (<5 mm), nanoplastik (<1 mkm), «plastisfera» hamda yangi ifloslantiruvchilar (farmatsevtik qoldiqlar, antibiotikka chidamlilik genlari)",
      "Zamonaviy gidrobiologik texnologiyalar: eDNA, metagenomika, transkriptomika, barqaror izotoplar (δ¹³C, δ¹⁵N), mezokosmlar, sun’iy yo‘ldosh va dronlar",
      "Gidrobiologiya istiqbollari: mikrosuvo‘tlar biotexnologiyasi (spirulina, xlorella, biodizel), «Ko‘k iqtisodiyot» va prognostik gidrobiologiya",
    ],
    studyNotes:
      "Atmosfera CO₂ ining okeanda erishi (CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻) okean pH ini pasaytirib, marjonlar va mollyuskalarning CaCO₃ skeletlarini yemiradi. Mikroplastik (<5 mm) nafaqat mexanik xavf, balki zaharli kimyoviy moddalar va patogenlar tashuvchi «plastisfera» sorbentidir.",
    overview:
      "XXI asrda suv ekotizimlari iqlim o‘zgarishi, okean kislotalanishi, invaziv turlar, mikroplastik va farmatsevtik qoldiqlar kabi murakkab global tahdidlarga duch kelmoqda. Ushbu yakunlovchi ma’ruzada mazkur muammolarning ilmiy mexanizmlari, Markaziy Osiyo muzliklari qisqarishining oqibatlari, eDNA va barqaror izotoplar kabi eng ilg‘or tadqiqot texnologiyalari hamda mikrosuvo‘tlar biotexnologiyasi va «Ko‘k iqtisodiyot» istiqbollari tahlil qilinadi.",
    sections: [
      {
        heading: "11.1. Global iqlim o‘zgarishi, okean kislotalanishi va deoksigenatsiya",
        content:
          "Global isish suv haroratini ko‘tarish bilan birga okean kimyoviy tarkibini ham o‘zgartirmoqda. Markaziy Osiyoda esa Tyan-Shan va Pomir muzliklarining tez erishi Amudaryo va Sirdaryo suv rejimiga jiddiy xavf tug‘dirmoqda.",
        highlights: [
          "Okean kislotalanishi: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ — pH pasayishi kalsiy karbonat (CaCO₃) skeletli marjonlar, mollyuskalar va kokkolitoforidlarga og‘ir zarar yetkazadi",
          "Deoksigenatsiya va «o‘lik zonalar» — isish tufayli stratifikatsiya kuchayib, tub qatlamlarga kislorod tushishi to‘xtaydi",
          "Fenologik va trofik nomuvofiqlik (mismatch) — bahorgi fitoplankton gullashi va baliq lichinkalari chiqish vaqtlarining mos kelmay qolishi",
          "Marjon oqarishi (coral bleaching) — harorat +1–2 °C ko‘tarilganda marjonlar simbiotik zooksantella suvo‘tlarini yo‘qotib halok bo‘ladi",
        ],
      },
      {
        heading: "11.2. Invaziv turlar, mikroplastik va yangi ifloslantiruvchilar",
        content:
          "Xalqaro kema qatnovi va plastmassa ishlab chiqarishining keskin o‘sishi suv havzalarida mutlaqo yangi ekologik muammolarni — biotik gomogenizatsiya va «plastisfera»ni yuzaga keltirdi.",
        highlights: [
          "Invaziv turlarning asosiy kirish yo‘li — kema ballast suvlari va kema korpusiga yopishish (biofouling); oqibati — «biotik gomogenizatsiya» (mahalliy noyob turlar yo‘qolib, hamma joyda bir xil invaziv turlar qolishi)",
          "Invaziv turlarga qarshi yagona eng samarali strategiya — ularning kirib kelishini oldini olish (ballast suvlarini zararsizlantirish)",
          "Mikroplastik (<5 mm: birlamchi granulalar, ikkilamchi parchalar, sintetik mikrotolalar) va nanoplastik (<1 mkm) — zaharli moddalarni yutuvchi sorbent va patogenlar rivojlanuvchi «plastisfera»",
          "Yangi ifloslantiruvchilar: farmatsevtik qoldiqlar, antibiotikka chidamlilik genlari (ARG), endokrin tizimni buzuvchi gormonal moddalar va nanomateriallar",
        ],
      },
      {
        heading: "11.3. Zamonaviy tadqiqot texnologiyalari va kelajak istiqbollari",
        content:
          "Zamonaviy gidrobiologiya tasviriy fandan molekulyar-genetik, sun’iy yo‘ldosh va matematik bashoratga asoslangan «prognostik gidrobiologiya»ga aylanmoqda.",
        highlights: [
          "Omiks va molekulyar usullar: eDNA, metabarkoding, metagenomika, transkriptomika va DNA barcoding",
          "Barqaror izotoplar tahlili: δ¹³C (oziq manbasini aniqlash) va δ¹⁵N (oziq to‘ridagi trofik darajani aniqlash)",
          "Mezokosmlar (yarim tabiiy tajriba tizimlari), sun’iy yo‘ldoshlar, avtonom dronlar va fuqarolik ilmi (citizen science)",
          "Mikrosuvo‘tlar biotexnologiyasi (Spirulina, Chlorella oqsili, omega-3, biodizel, CO₂ ushlash) va BMTning «Ko‘k iqtisodiyot» (Blue Economy) konsepsiyasi",
        ],
      },
    ],
    comparisonTable: {
      title: "Gidrobiologiyaning zamonaviy global muammolari va ilmiy yechimlari",
      columns: [
        "Zamonaviy muammo",
        "Asosiy sabab / Mexanizm",
        "Ekologik oqibat",
        "Yechim va texnologiyalar",
      ],
      rows: [
        [
          "Okean kislotalanishi",
          "Atmosfera CO₂ ining okeanda erib H₂CO₃ hosil qilishi",
          "Marjon va mollyuska CaCO₃ skeletlarining yemirilishi",
          "CO₂ emissiyasini kamaytirish, ko‘k uglerod ekotizimlarini tiklash",
        ],
        [
          "Biologik invaziyalar",
          "Kema ballast suvlari, biofouling, nazoratsiz akvakultura",
          "Endemik turlar qirilishi, biotik gomogenizatsiya",
          "Ballast suvlarini UV/filtratsiya qilish, eDNA erta aniqlash tizimi",
        ],
        [
          "Mikroplastik va plastisfera",
          "<5 mm plastik parchalari va sintetik kiyim mikrotolalari",
          "Oziq to‘riga kirishi, toksinlar va patogenlar tashishi",
          "Plastikni kamaytirish, oqova suvlarni mikrofiltratsiya qilish",
        ],
        [
          "Yangi ifloslantiruvchilar",
          "Dori qoldiqlari, antibiotiklar, gormonlar",
          "Antibiotikka chidamlilik genlari, baliqlar reproduksiyasi buzilishi",
          "Ozonlash, faol ko‘mir va membranali chuqur tozalash",
        ],
        [
          "Resurs tanqisligi va iqlim",
          "Muzliklar qisqarishi, ortiqcha baliq ovi",
          "Chuchuk suv va oqsil tanqisligi",
          "RAS akvakultura, mikrosuvo‘tlar biotexnologiyasi, Ko‘k iqtisodiyot",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Okean kislotalanishi",
        definition:
          "Atmosferadagi ortiqcha CO₂ ning okean suvida erib karbonat kislota hosil qilishi tufayli suv pH ining pasayishi va kalsiy karbonat skeletlarga zarar yetishi.",
      },
      {
        term: "Biotik gomogenizatsiya",
        definition:
          "Invaziv turlarning global tarqalishi tufayli turli mintaqalardagi noyob mahalliy ekotizimlarning bir-biriga o‘xshash va kambag‘al jamoalarga aylanishi.",
      },
      {
        term: "Plastisfera",
        definition:
          "Suvdagi mikroplastik (<5 mm) zarrachalari yuzasida shakllanadigan va ko‘pincha patogen bakteriyalar hamda zaharli moddalarni tashiydigan maxsus mikrob bioqatlami.",
      },
      {
        term: "Barqaror izotoplar (δ¹³C, δ¹⁵N)",
        definition:
          "Gidrobiont to‘qimalaridagi uglerod-13 (oziq manbasi) va azot-15 (trofik daraja) izotoplari nisbati orqali oziq to‘rini aniq rekonstruksiya qilish usuli.",
      },
      {
        term: "Trofik nomuvofiqlik (Mismatch)",
        definition:
          "Iqlim isishi oqibatida fitoplankton rivojlanish davri bilan uni iste’mol qiluvchi zooplankton yoki baliq lichinkalari chiqish muddatining mos kelmay qolishi.",
      },
      {
        term: "Ko‘k iqtisodiyot (Blue Economy)",
        definition:
          "Suv va okean resurslaridan ekotizim salomatligini saqlagan holda barqaror iqtisodiy o‘sish, oziq-ovqat xavfsizligi va biotexnologiya uchun foydalanish konsepsiyasi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Okean kislotalanishi marjon riflari va mollyuskalarga qanday kimyoviy mexanizm bilan zarar yetkazadi?",
        answer:
          "CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ reaksiyasi natijasida H⁺ ionlari ko‘payib, suvdagi karbonat ionlarini (CO₃²⁻) kamaytiradi; natijada organizmlar CaCO₃ dan chig‘anoq va skelet qura olmaydi.",
      },
      {
        question: "Mikroplastik nima uchun oddiy qum zarrachasidan ancha xavfliroq?",
        answer:
          "Mikroplastik (<5 mm) hidrofob yuzasiga suvdagi pestitsidlar va og‘ir metallarni kuchli adsorbsiya qiladi, yuzasida patogen mikroorganizmlardan «plastisfera» hosil qiladi va plankton/baliqlar oshqozoniga kirib oziq to‘ri bo‘ylab tarqaladi.",
      },
      {
        question: "Barqaror izotoplar (δ¹³C va δ¹⁵N) gidrobiologiyada qanday masalalarni yechadi?",
        answer:
          "δ¹³C izotopi organizm qaysi birlamchi oziq manbasidan (pelagial fitoplanktonmi yoki qirg‘oq makrofitimi) oziqlanganini, δ¹⁵N esa uning oziq zanjirida qaysi trofik pog‘onada turishini aniq ko‘rsatib beradi.",
      },
      {
        question:
          "Mikrosuvo‘tlar biotexnologiyasi kelajakda qaysi global muammolarni hal qilishga yordam beradi?",
        answer:
          "Spirulina va Chlorella kabi mikrosuvo‘tlar unumdor yer talab qilmasdan yuqori sifatli oqsil, omega-3, biodizel ishlab chiqaradi, sanoat gazlaridan CO₂ ni yutadi va oqova suvlarni tozalaydi.",
      },
    ],
    keyTerms: [
      "iqlim o‘zgarishi",
      "okean kislotalanishi",
      "deoksigenatsiya",
      "marjon oqarishi",
      "invaziv turlar",
      "ballast suvi",
      "biotik gomogenizatsiya",
      "mikroplastik",
      "nanoplastik",
      "plastisfera",
      "barqaror izotoplar",
      "metagenomika",
      "spirulina",
      "Ko‘k iqtisodiyot",
    ],
    references: "Xalimova N.T. Gidrobiologiya · 11-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/11-mavzu_Zamonaviy_muammolar_va_istiqbollar__1__850a9234.pdf",
    pdfTitle: "11-mavzu: Gidrobiologiyaning zamonaviy muammolari va istiqbollari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "11-mavzu: Gidrobiologiyaning zamonaviy muammolari va istiqbollari (Ma’ruza matni)",
        url: "/assets/aistudio/11-mavzu_Zamonaviy_muammolar_va_istiqbollar__1__850a9234.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "11-mavzu: Gidrobiologiyaning zamonaviy muammolari va istiqbollari (Taqdimot)",
        url: "/assets/aistudio/11-mavzu_Zamonaviy_muammolar_va_istiqbollar_faa85734.pdf",
        kind: "Taqdimot",
      },
    ],
  },
];
