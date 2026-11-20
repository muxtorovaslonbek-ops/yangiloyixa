export interface MikrobiologiyaTopicSection {
  heading: string;
  content: string;
  highlights?: string[];
}

export interface MikrobiologiyaTopicTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface MikrobiologiyaKeyConcept {
  term: string;
  definition: string;
}

export interface MikrobiologiyaSelfCheck {
  question: string;
  answer: string;
}

export interface MikrobiologiyaPdfDocument {
  title: string;
  url: string;
  kind?: string;
}

export interface MikrobiologiyaTopic {
  id: string;
  order: number;
  code: string;
  topicLabel: string;
  module:
    | "I bo‘lim: Umumiy mikrobiologiya va ekologiya"
    | "II bo‘lim: Patogen kokklar va enterobakteriyalar"
    | "III bo‘lim: Xavfli infeksiyalar, anaeroblar va hujayra ichi parazitlar";
  title: string;
  syllabusPoints: string[];
  studyNotes: string;
  overview: string;
  sections: MikrobiologiyaTopicSection[];
  comparisonTable: MikrobiologiyaTopicTable;
  keyConcepts: MikrobiologiyaKeyConcept[];
  selfCheckQuestions: MikrobiologiyaSelfCheck[];
  keyTerms: string[];
  references: string;
  pdfUrl: string;
  pdfTitle: string;
  pdfDocuments?: MikrobiologiyaPdfDocument[];
}

export const MIKROBIOLOGIYA_TOPICS: MikrobiologiyaTopic[] = [
  {
    id: "mikro-1",
    order: 1,
    code: "1",
    topicLabel: "1-mavzu",
    module: "I bo‘lim: Umumiy mikrobiologiya va ekologiya",
    title:
      "Kirish. Mikrobiologiya va virusologiya fanining maqsadi va vazifalari, rivojlanish tarixi",
    syllabusPoints: [
      "Mikrobiologiya va virusologiya fanining predmeti, maqsadi va asosiy vazifalari",
      "Fanning asosiy bo‘limlari (umumiy, tibbiy, qishloq xo‘jaligi, sanoat, ekologiya) va boshqa fanlar bilan aloqasi",
      "Mikrobiologiyaning rivojlanish bosqichlari: evristik, morfologik, fiziologik, immunologik va molekulyar-genetik davrlar",
      "Buyuk olimlar hissasi: A. Levenguk, L. Paster, R. Kox (Kox postulatlari), I. Mechnikov, P. Erlix, D. Ivanovskiy, S. Vinogradskiy, M. Beyerink, A. Fleming",
      "Zamonaviy mikrobiologik tadqiqot usullari va fanning amaliy ahamiyati",
    ],
    studyNotes:
      "L. Paster o‘z-o‘zidan paydo bo‘lish nazariyasini rad etib, bijg‘ish va vaksinalar asosini yaratdi; R. Kox sof kultura usuli va 4 ta Kox postulatini ishlab chiqdi; D. Ivanovskiy 1892-yilda viruslarni kashf etdi.",
    overview:
      "Mikrobiologiya ko‘z bilan ko‘rinmaydigan mikroorganizmlarning (bakteriyalar, arxeylar, mikroskopik zamburug‘lar, sodda hayvonlar) tuzilishi, hayot faoliyati, ekologiyasi va amaliy ahamiyatini o‘rganadi; virusologiya esa hujayrasiz hayot shakli — viruslarni tadqiq etadi. Ushbu kirish ma’ruzasi fanning 5 ta tarixiy bosqichini, Kox postulatlarini va zamonaviy molekulyar-genetik metodlarni qamrab oladi.",
    sections: [
      {
        heading: "1.1. Fanning predmeti, maqsadi va asosiy bo‘limlari",
        content:
          "Mikrobiologiya (yunoncha mikros — kichik, bios — hayot, logos — ta’limot) mikroskopik organizmlar dunyosini, virusologiya esa obligat hujayra ichi parazitlari bo‘lgan viruslarni o‘rganadi. Fanning asosiy maqsadi mikroorganizmlar xilma-xilligini bilish, foydali shtammlardan biotexnologiya va tibbiyotda foydalanish hamda yuqumli kasalliklarning oldini olishdir.",
        highlights: [
          "Umumiy mikrobiologiya — mikroblar morfologiyasi, fiziologiyasi, genetikasi va ekologiyasi",
          "Tibbiy va veterinariya mikrobiologiyasi — patogen qo‘zg‘atuvchilar, tashxis, davolash va profilaktika",
          "Sanoat va oziq-ovqat mikrobiologiyasi — antibiotiklar, fermentlar, aminokislotalar, sut mahsulotlari va nonvoylik",
          "Qishloq xo‘jaligi va tuproq mikrobiologiyasi — azot fiksatsiyasi, gumus hosil bo‘lishi, bioo‘g‘itlar",
        ],
      },
      {
        heading: "1.2. Mikrobiologiyaning 5 ta tarixiy rivojlanish bosqichi",
        content:
          "Mikrobiologiya fanining shakllanishi ko‘p asrlik kuzatuvlardan boshlanib, zamonaviy genomika va metagenomikagacha bo‘lgan beshta asosiy davrni bosib o‘tgan.",
        highlights: [
          "Evristik davr (XVII asrgacha) — J. Frakastoro «kontagiy» g‘oyasi, ko‘rinmas yuqumli zarrachalar haqida farazlar",
          "Morfologik davr (XVII–XIX asr o‘rtasi) — Antoni van Levenguk 1674–1683-yillarda 300× gacha kattalashtiruvchi linza bilan «animalkulalar»ni kashf etdi",
          "Fiziologik davr (XIX asr II yarmi) — Lui Paster (bijg‘ish, pasterizatsiya, quturish va kuydirgi vaksinalari) va Robert Kox (zich muhitlar, sof kultura, sil va vabo qo‘zg‘atuvchilari)",
          "Immunologik davr (XIX asr oxiri – XX asr I yarmi) — I. Mechnikov (hujayraviy immunitet/fagotsitoz), P. Erlix (gumoral immunitet), D. Ivanovskiy (tamaki mozaikasi virusi, 1892)",
          "Molekulyar-genetik davr (XX asr II yarmi – hozirgacha) — DNK strukturasi, PZR, sekvenirlash, CRISPR-Cas, mikrobiom tadqiqotlari",
        ],
      },
      {
        heading: "1.3. Robert Koxning 4 ta postulati",
        content:
          "R. Kox muayyan mikroorganizmning konkret yuqumli kasallik qo‘zg‘atuvchisi ekanligini ilmiy isbotlash uchun to‘rtta qat’iy mezonni (Kox postulatlarini) shakllantirdi. Bugungi kunda ham ular klinik mikrobiologiyaning poydevori bo‘lib qolmoqda.",
        highlights: [
          "1-postulat: Qo‘zg‘atuvchi har bir bemor organizmida topilishi, sog‘lom organizmda esa uchramasligi kerak",
          "2-postulat: Mikroorganizm bemordan ajratib olinib, sun’iy oziqa muhitida sof kultura holda o‘stirilishi shart",
          "3-postulat: Ajratilgan sof kultura sezgir tajriba hayvoniga kiritilganda aynan o‘sha kasallikni chaqirishi kerak",
          "4-postulat: Kasallangan tajriba hayvonidan aynan o‘sha mikroorganizm qayta sof kultura holda ajratib olinishi lozim",
        ],
      },
      {
        heading: "1.4. Tuproq mikrobiologiyasi, antibiotiklar va tadqiqot metodlari",
        content:
          "S. Vinogradskiy xemosintez va azot aylanishini, M. Beyerink esa erkin yashovchi azot fiksatorlari (Azotobacter) hamda virus tushunchasini chuqurlashtirdi. 1928-yilda A. Fleming penitsillinni, 1943-yilda Z. Vaksman streptomitsinni kashf etib, antibiotiklar erasini boshlab berdi.",
        highlights: [
          "Mikroskopik usul — yorug‘lik (immersion), qorong‘i maydon, faza-kontrast, lyuminessent va elektron mikroskopiya",
          "Bakteriologik (kultural) usul — sof kultura ajratish va biokimyoviy identifikatsiya",
          "Biologik (eksperimental) va serologik (antigen-antitana) usullar",
          "Molekulyar-genetik usullar — PZR, 16S rRNK sekvenirlash, MALDI-TOF mass-spektrometriya",
        ],
      },
    ],
    comparisonTable: {
      title: "Mikrobiologiya va virusologiya rivojiga hissa qo‘shgan asosiy olimlar",
      columns: ["Olim", "Yil / Davr", "Asosiy kashfiyoti", "Ilmiy-amaliy ahamiyati"],
      rows: [
        [
          "Antoni van Levenguk",
          "1674–1683",
          "Mikroblarni («animalkulalar») birinchi bo‘lib ko‘rdi",
          "Morfologik davr va mikroskopiya asoschisi",
        ],
        [
          "Lui Paster",
          "1857–1885",
          "Bijg‘ish, pasterizatsiya, quturish/kuydirgi vaksinalari",
          "Fiziologik mikrobiologiya va vaksina profilaktikasi",
        ],
        [
          "Robert Kox",
          "1876–1883",
          "Zich muhit, sof kultura, sil va vabo qo‘zg‘atuvchilari",
          "Kox postulatlari va bakteriologik tashxis",
        ],
        [
          "Dmitriy Ivanovskiy",
          "1892",
          "Tamaki mozaikasi filtrlanuvchi virusi",
          "Virusologiya fanining asoschisi",
        ],
        [
          "I. Mechnikov va P. Erlix",
          "1883–1908",
          "Fagotsitoz va gumoral antitanalar nazariyasi",
          "Immunologiya asoslari (1908-yil Nobel mukofoti)",
        ],
        [
          "Aleksandr Fleming",
          "1928",
          "Penicillium notatum zamburug‘idan penitsillin",
          "Antibiotiklar davrining boshlanishi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Mikrobiologiya",
        definition:
          "Ko‘z bilan ko‘rinmaydigan mikroskopik organizmlarning tuzilishi, fiziologiyasi, ekologiyasi va ahamiyatini o‘rganuvchi biologiya fani.",
      },
      {
        term: "Virusologiya",
        definition:
          "Hujayrasiz tuzilishga ega obligat hujayra ichi parazitlari — viruslarning tuzilishi, ko‘payishi va kasalliklarini o‘rganuvchi fan.",
      },
      {
        term: "Kox postulatlari",
        definition:
          "Muayyan mikroorganizmning aniq bir yuqumli kasallik sababchisi ekanligini isbotlovchi 4 ta eksperimental qoida.",
      },
      {
        term: "Sof kultura",
        definition:
          "Faqat bitta turga (shtammga) mansub mikroorganizm hujayralaridan iborat laboratoriya populyatsiyasi.",
      },
      {
        term: "Xemosintez",
        definition:
          "S. Vinogradskiy kashf etgan, noorganik moddalarning oksidlanish energiyasi hisobiga organik modda sintez qilish jarayoni.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Lui Paster oqqush bo‘yinli kolba tajribasi orqali qaysi nazariyani uzil-kesil rad etdi?",
        answer:
          "Paster mikroorganizmlarning o‘z-o‘zidan paydo bo‘lishi (abiogenez) nazariyasini rad etib, steril bulonda mikroblar faqat tashqi havodagi mikrob zarrachalari tushgandagina ko‘payishini isbotladi.",
      },
      {
        question: "Robert Kox postulatlari qaysi hollarda cheklanishlarga duch keladi?",
        answer:
          "Sun’iy oziqa muhitlarida o‘smaydigan obligat parazitlar (viruslar, moxov qo‘zg‘atuvchisi Mycobacterium leprae, zaxm treponemasi), shartli patogenlar va sog‘lom tashuvchilik holatlarida klassik postulatlar molekulyar-genetik mezonlar bilan to‘ldiriladi.",
      },
      {
        question: "Virusologiya fanining tug‘ilish sanasi qaysi kashfiyot bilan bog‘liq?",
        answer:
          "1892-yilda D.I. Ivanovskiy tamaki mozaikasi kasalligi qo‘zg‘atuvchisi bakterial Shamberlan filtrlaridan o‘tib ketishini isbotlagan va bu sana virusologiyaning boshlanishi hisoblanadi.",
      },
    ],
    keyTerms: [
      "mikrobiologiya",
      "virusologiya",
      "Levenguk",
      "Lui Paster",
      "Robert Kox",
      "Kox postulatlari",
      "Ivanovskiy",
      "Mechnikov",
      "Fleming",
      "sof kultura",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/01-mavzu_Mikrobiologiya_va_virusologiya_faniga_kirish_27ed6047.pdf",
    pdfTitle: "1-mavzu: Mikrobiologiya va virusologiya faniga kirish (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "1-mavzu: Mikrobiologiya va virusologiya faniga kirish (Ma’ruza matni)",
        url: "/assets/aistudio/01-mavzu_Mikrobiologiya_va_virusologiya_faniga_kirish_27ed6047.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-2",
    order: 2,
    code: "2",
    topicLabel: "2-mavzu",
    module: "I bo‘lim: Umumiy mikrobiologiya va ekologiya",
    title:
      "Mikroorganizmlar (bakteriyalar) tasnifi, morfologiyasi va nomenklaturasi. Tashqi va ichki tuzilishi",
    syllabusPoints: [
      "Bakteriyalar taksonomiyasi, binar nomenklatura va 16S rRNK asosidagi zamonaviy filogenetik tasnif",
      "Bakteriyalarning asosiy morfologik shakllari: kokklar, tayoqchalar (batsilla va klostridiya), buralgan shakllar (vibrion, spirilla, spiroxeta)",
      "Bakteriya hujayrasining doimiy tuzilmalari: nukleoid, 70S ribosomalar, sitoplazmatik membrana, peptidoglikanli hujayra devori",
      "Doimiy bo‘lmagan (fakultativ) tuzilmalar: kapsula, xivchinlar (H-antigen), pili (fimbriyalar), plazmidlar va endospora",
      "Gram usuli bilan bo‘yash mexanizmi, Gr+ va Gr− hujayra devori farqlari hamda maxsus bo‘yash usullari (Sil-Nilsen, Burri-Gins, Nayser, Ojeshko)",
    ],
    studyNotes:
      "Gram-musbat bakteriyalarda qalin peptidoglikan (20–80 nm) va teyxoy kislotalari bor (binafsha rang); Gram-manfiylarda yupqa peptidoglikan (2–7 nm) va lipopolisaxaridli (LPS — endotoksin) tashqi membrana mavjud (qizil rang).",
    overview:
      "Bakteriyalar shakllangan yadro va membranali organoidlarga ega bo‘lmagan prokariot organizmlardir. Ushbu mavzuda bakteriyalar taksonomiyasi, sharsimon, tayoqchasimon va spiralsimon morfologik guruhlari, hujayraning doimiy va qo‘shimcha tuzilmalari, shuningdek mikrobiologik tashxisning asosi bo‘lgan Gram va maxsus bo‘yash usullari batafsil tahlil qilinadi.",
    sections: [
      {
        heading: "2.1. Tasnif, taksonomiya va binar nomenklatura",
        content:
          "K. Vyoze (1977) 16S rRNK ketma-ketligi asosida tirik tabiatni 3 domenga ajratdi: Bacteria, Archaea va Eukarya. Bakteriyalar K. Linneyning binar nomenklaturasi (avlod + tur, masalan, Escherichia coli) va Bergey qo‘llanmasi asosida tasniflanadi.",
        highlights: [
          "Asosiy taksonlar: Domen → Tip → Sinf → Tartib → Oila → Avlod → Tur → Shtamm / Klon",
          "Shtamm — turli manbalardan yoki turli vaqtda ajratilgan bitta tur kulturasi",
          "Biovar, serovar, fagovar, rezistovar — tur ichidagi amaliy farqlash birliklari",
        ],
      },
      {
        heading: "2.2. Bakteriyalarning asosiy morfologik shakllari",
        content:
          "Bakteriya hujayrasining shakli va bo‘linishdan keyingi joylashuvi mikroskopik tashxisda birlamchi identifikatsiya belgisi bo‘lib xizmat qiladi.",
        highlights: [
          "Kokklar (sharsimon): mikrokokk (yakka), diplokokk (juft — pnevmokokk, meningokokk, gonokokk), streptokokk (zanjir), tetrakokk (4 ta), sarsina (8–16 kubsimon paket), stafilokokk (uzum boshi)",
          "Tayoqchasimonlar: bakteriyalar (spora hosil qilmaydi), batsillalar (spora diametri hujayradan oshmaydi), klostridiyalar (spora diametri katta — baraban cho‘pi yoki tennis raketkasi)",
          "Buralgan shakllar: vibrion (vergulsimon — 1 buram), spirilla (qattiq spiralsimon, 2–3 buram), spiroxeta (ingichka, egiluvchan, ko‘p buramli)",
        ],
      },
      {
        heading: "2.3. Doimiy va fakultativ tuzilmalar",
        content:
          "Har bir tipik bakteriya hujayrasida nukleoid (halqasimon qo‘sh zanjirli DNK, gistonlarsiz), 70S ribosomalar (30S + 50S), mezosomali sitoplazmatik membrana va murein (peptidoglikan) devor mavjud (mikoplazmalar bundan mustasno).",
        highlights: [
          "Kapsula — polisaxarid (kuydirgida D-glutamat polipeptid) qavat, fagotsitozdan himoya qiladi (Burri-Gins usuli)",
          "Xivchinlar — flagellin oqsilidan tuzilgan harakat organi (H-antigen): monotrix, lofotrix, amfitrix, peritrix",
          "Pili (fimbriyalar) — umumiy pili (adgeziya) va jinsiy F-pili (konyugatsiya orqali plazmid uzatish)",
          "Endospora — noqulay sharoitda (Bacillus, Clostridium) saqlanish shakli, kalsiy dipikolinatga boy, ko‘payish organi emas!",
          "Kiritmalar — volyutin (Babeş-Ernst donachalari, difteriya — Nayser usuli), glikogen, kraxmal, oltingugurt",
        ],
      },
      {
        heading: "2.4. Gram usuli va maxsus bo‘yash usullari",
        content:
          "1884-yilda Xans Kristian Gram taklif etgan differensial bo‘yash usuli bakteriyalarni hujayra devori tuzilishiga ko‘ra ikki yirik guruhga ajratadi: Gram-musbat (binafsha) va Gram-manfiy (pushti-qizil).",
        highlights: [
          "Gram bosqichlari: 1) Gensian violet (1–2 daq) → 2) Lyugol eritmasi (1 daq, fiksatsiya) → 3) 96% spirt (20–30 soniya, rangsizlantirish) → 4) Pfeyffer fuksini (1–2 daq)",
          "Sil-Nilsen usuli — kislotaga chidamli mikobakteriyalar (qizil tayoqchalar ko‘k fonda)",
          "Burri-Gins usuli — kapsulani aniqlash (qora tush fonda rangsiz halqa)",
          "Ojeshko usuli — sporalarni qizil, vegetativ tanani ko‘k rangga bo‘yash",
        ],
      },
    ],
    comparisonTable: {
      title: "Gram-musbat (Gr+) va Gram-manfiy (Gr−) bakteriyalar hujayra devori farqlari",
      columns: ["Belgi", "Gram-musbat (Gr+)", "Gram-manfiy (Gr−)"],
      rows: [
        [
          "Peptidoglikan (murein) qalinligi",
          "Qalin (20–80 nm), ko‘p qavatli (40–90%)",
          "Yupqa (2–7 nm), 1–2 qavatli (5–10%)",
        ],
        [
          "Tashqi membrana va LPS (endotoksin)",
          "Mavjud emas",
          "Mavjud (lipopolisaxarid — O-antigen + lipid A)",
        ],
        ["Teyxoy va lipoteyxoy kislotalari", "Mavjud", "Mavjud emas"],
        ["Periplazmatik bo‘shliq", "Juda tor yoki yo‘q", "Aniq rivojlangan (fermentlarga boy)"],
        [
          "Gram bo‘yicha rangi",
          "To‘q binafsha (spirtda rangsizlanmaydi)",
          "Pushti-qizil (spirtda rangsizlanib, fuksin oladi)",
        ],
        [
          "Penitsillin va lizotsimga sezgirlik",
          "Yuqori sezgir",
          "Nisbatan chidamli (tashqi membrana to‘sqinlik qiladi)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Peptidoglikan (murein)",
        definition:
          "N-atsetilglyukozamin va N-atsetilmuram kislotasidan tashkil topgan, faqat bakteriyalarga xos qattiq hujayra devori polimeri.",
      },
      {
        term: "Nukleoid",
        definition:
          "Yadro qobig‘isiz sitoplazmada erkin joylashgan, bitta halqasimon qo‘sh zanjirli DNKdan iborat bakteriya irsiy apparati.",
      },
      {
        term: "Endospora",
        definition:
          "Noqulay muhit omillariga (qaynash, quritish, dezinfektantlar) o‘ta chidamli tinim shakli; bir hujayradan faqat bitta spora hosil bo‘ladi.",
      },
      {
        term: "Lipopolisaxarid (LPS)",
        definition:
          "Gram-manfiy bakteriyalar tashqi membranasining asosiy komponenti bo‘lib, lipid A qismi endotoksin xususiyatiga ega.",
      },
      {
        term: "Plazmid",
        definition:
          "Xromosomadan tashqaridagi kichik halqasimon DNK; antibiotik chidamliligi (R-plazmid) va virulentlik genlarini tashiydi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun Gram-musbat bakteriyalar spirt bilan yuvilganda binafsha rangini saqlab qoladi?",
        answer:
          "Ularning qalin peptidoglikan qavati spirt ta’sirida suvsizlanib zichlashadi va gensian violet + yod kompleksi hujayra ichidan yuvilib chiqa olmaydi.",
      },
      {
        question: "Bakteriya endosporasi ko‘payish organi hisoblanadimi? Javobingizni asoslang.",
        answer:
          "Yo‘q, endospora ko‘payish organi emas, balki noqulay sharoitdan saqlanish (omon qolish) shaklidir, chunki bitta vegetativ hujayradan faqat bitta spora hosil bo‘ladi va undan yana bitta hujayra unib chiqadi.",
      },
      {
        question: "70S ribosomalar bakteriyalarni davolashda qanday amaliy ahamiyatga ega?",
        answer:
          "Odam hujayralarida 80S ribosomalar bo‘lgani sababli tetratsiklinlar, aminoglikozidlar va makrolidlar kabi antibiotiklar tanlab bakteriyaning 70S ribosomasida oqsil sintezini bloklaydi.",
      },
    ],
    keyTerms: [
      "Gram usuli",
      "peptidoglikan",
      "murein",
      "nukleoid",
      "70S ribosoma",
      "kapsula",
      "endospora",
      "xivchin",
      "pili",
      "Sil-Nilsen",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/02-mavzu_Bakteriyalar_tasnifi_morfologiyasi_va_tuzili_6cb44cdd.pdf",
    pdfTitle: "2-mavzu: Bakteriyalar tasnifi, morfologiyasi va tuzilishi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "2-mavzu: Bakteriyalar tasnifi, morfologiyasi va tuzilishi (Ma’ruza matni)",
        url: "/assets/aistudio/02-mavzu_Bakteriyalar_tasnifi_morfologiyasi_va_tuzili_6cb44cdd.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-3",
    order: 3,
    code: "3",
    topicLabel: "3-mavzu",
    module: "I bo‘lim: Umumiy mikrobiologiya va ekologiya",
    title:
      "Mikroorganizmlar ekologiyasi va atrof-muhit mikroflorasi. Tashqi muhit omillarining ta’siri. Sterillash",
    syllabusPoints: [
      "Mikroorganizmlar ekologiyasi va biotik o‘zaro munosabat shakllari (mutualizm, kommensalizm, metabioz, antagonizm, parazitizm, raqobat)",
      "Tuproq, suv va havo mikroflorasi hamda ichimlik suvining sanitar-mikrobiologik ko‘rsatkichlari (mikrob soni, koli-indeks, koli-titr)",
      "Odam organizmining normal mikroflorasi (mikrobiom), ahamiyati, disbakterioz va probiotiklar",
      "Fizik va kimyoviy tashqi muhit omillari ta’siri: harorat (psixrofil, mezofil, termofil), pH, osmos, UB nurlanish (254 nm), kislorod",
      "Sterillash, dezinfeksiya va antiseptika usullari: avtoklavlash, quruq issiq pech, tindalizatsiya, pasterizatsiya, membranali filtrlash, 70% spirt va biologik nazorat",
    ],
    studyNotes:
      "Ichimlik suvi me’yori: mikrob soni ≤50 KHB/ml, koli-indeks ≤3, koli-titr ≥300 ml. Eng ishonchli sterillash usuli — avtoklavlash (1 atm, 121°C, 20 daqiqa), 70% spirt 96% spirtga qaraganda samaraliroq antiseptikdir.",
    overview:
      "Mikroorganizmlar biosferaning barcha qatlamlarida — tuproq, suv, havo hamda tirik organizmlar yuzasi va bo‘shliqlarida yashaydi. Ushbu ma’ruzada mikroblararo ekologik aloqalar, sanitar-ko‘rsatkich bakteriyalar, odam mikrobiomi (10¹³–10¹⁴ hujayra, 1,5–3 kg), fizik-kimyoviy omillar va tibbiy amaliyotda hal qiluvchi ahamiyatga ega sterillash usullari yoritiladi.",
    sections: [
      {
        heading: "3.1. Mikroblararo ekologik munosabatlar",
        content:
          "Tabiatda mikroorganizmlar yakka holda emas, balki murakkab konsorsiumlar va biopardalar (biofilm) shaklida yashaydi hamda o‘zaro hamkorlik yoki kurash munosabatlariga kirishadi.",
        highlights: [
          "Mutualizm — ikki tomonlama foyda (dukkakli o‘simlik ildizidagi Rhizobium, ichakdagi Bifidobacterium)",
          "Kommensalizm — biri foyda ko‘radi, ikkinchisiga zarar yo‘q (teri saprofitlari)",
          "Metabioz — bir mikrobning hayot faoliyati mahsuloti boshqasiga ozuqa bo‘ladi (ammonifikatorlar → nitrifikatorlar)",
          "Antagonizm — bir tur boshqasini antibiotik, bakteriosin yoki kislota bilan bostirishi (antibiotiklarning asosi)",
          "Parazitizm — patogen bakteriya yoki virusning xo‘jayin hisobiga yashab zarar yetkazishi",
        ],
      },
      {
        heading: "3.2. Tuproq, suv, havo va odam normal mikroflorasi",
        content:
          "Tuproqning 1 grammida 10⁸–10⁹ mikroorganizm yashaydi va u klostridiya (qoqshol, gazli gangrena, botulizm) hamda kuydirgi sporalarining asosiy rezervuari hisoblanadi. Suvning ifloslanishi sanitar-ko‘rsatkich mikroorganizmlar (E. coli, enterokokklar) orqali baholanadi.",
        highlights: [
          "Ichimlik suvi standarti: umumiy mikrob soni ≤50 KHB/ml, koli-indeks (1 litrdagi E. coli) ≤3, koli-titr ≥300 ml",
          "Havo sanitar ko‘rsatkichlari: gemolitik streptokokk va tilla stafilokokk (operatsiya xonasida 0 bo‘lishi shart)",
          "Odam mikrobiomi: 10¹³–10¹⁴ mikrob (1,5–3 kg); eng boy joyi — yo‘g‘on ichak (90–95% obligat anaeroblar: Bifidobacterium, Bacteroides, Lactobacillus)",
          "Funksiyalari: kolonizatsion rezistentlik, K va B guruh vitaminlari sintezi, immunitetni o‘qitish; buzilishi — disbakterioz (probiotik va prebiotik bilan tiklanadi)",
        ],
      },
      {
        heading: "3.3. Tashqi muhit fizik va kimyoviy omillari",
        content:
          "Harorat, kislotalilik (pH), osmotik bosim, ultrabinafsha nurlanish va kislorod konsentratsiyasi mikroorganizmlarning o‘sishi yoki halokatini belgilaydi.",
        highlights: [
          "Harorat bo‘yicha: psixrofillar (opt 10–15°C), mezofillar (opt 30–37°C — aksariyat patogenlar), termofillar (opt 55–75°C)",
          "Kislorodga munosabat: obligat aeroblar (M. tuberculosis, P. aeruginosa), fakultativ anaeroblar (E. coli), mikroaerofillar, obligat anaeroblar (Clostridium)",
          "Osmotik bosim: yuqori tuz (10–20% NaCl) va shakar (60–70%) plazmoliz chaqiradi (mahsulotlarni tuzlash va murabbo tayyorlash)",
          "UB nurlar (254–260 nm): DNKda timin dimerlari hosil qilib bakteritsid ta’sir ko‘rsatadi, lekin shishadan o‘tmaydi (faqat sirt va havo)",
        ],
      },
      {
        heading: "3.4. Sterillash, dezinfeksiya va antiseptika",
        content:
          "Sterillash — obyektda barcha mikroorganizmlar va ularning sporalarini 100% yo‘q qilishdir. Dezinfeksiya — tashqi muhitdagi patogenlarni yo‘qotish, antiseptika — tirik to‘qimalardagi (teri, yara) mikroblarni zararsizlantirishdir.",
        highlights: [
          "Avtoklavlash (bosim ostida to‘yingan bug‘): 1 atm / 121°C / 20 daq (sporalar uchun 134°C) — eng ishonchli usul",
          "Quruq issiq pech (Paster pechi): 160°C da 2 soat yoki 180°C da 1 soat — shisha idish va metall asboblar",
          "Tindalizatsiya (bo‘lib-bo‘lib isitish): 56–60°C da 3 kun ketma-ket 1 soatdan — termolabil zardoblar uchun",
          "Membranali filtrlash (0,22 mkm): antibiotik, vitamin va zardoblarni qizdirmasdan sterillash",
          "70% etil spirti 96% ga qaraganda kuchliroq: 96% spirt tashqi oqsilni darhol koagulyatsiya qilib ichkariga o‘tishni to‘sadi",
          "Sterillashning biologik nazorati: Geobacillus stearothermophilus sporalari",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy sterillash va zararsizlantirish usullarining qiyosiy jadvali",
      columns: ["Usul", "Rejim / Parametr", "Nimani yo‘qotadi", "Qo‘llanish sohasi"],
      rows: [
        [
          "Avtoklavlash (nam bug‘)",
          "121°C, 1 atm, 20–30 daq",
          "Barcha mikroblar + sporalar (100%)",
          "Oziqa muhitlar, bog‘lov materiallari, jarrohlik asboblari",
        ],
        [
          "Quruq issiq pech",
          "160°C — 2 soat / 180°C — 1 soat",
          "Barcha mikroblar + sporalar (100%)",
          "Petri kosachalari, probirkalar, pipetkalar, shisha idishlar",
        ],
        [
          "Pasterizatsiya",
          "63°C — 30 daq yoki 72°C — 15 soniya",
          "Vegetativ patogenlar (sporalar qoladi)",
          "Sut, sharbat, vino mahsulotlarini saqlash",
        ],
        [
          "Membranali filtrlash",
          "G‘ovak diametri 0,22 mkm",
          "Bakteriyalarni mexanik tutib qoladi",
          "Issiqqa chidamsiz zardoblar, vitaminlar, antibiotik eritmalari",
        ],
        [
          "Tindalizatsiya",
          "56–60°C, 3 kun × 1 soat",
          "Vegetativ shakllar + unib chiqqan sporalar",
          "Oqsilga boy issiqqa sezgir oziqa muhitlari",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Koli-indeks va koli-titr",
        definition:
          "Koli-indeks — 1 litr suvdagi ichak tayoqchalari (E. coli) soni (me’yor ≤3); koli-titr — bitta E. coli topiladigan eng kam suv hajmi (me’yor ≥300 ml).",
      },
      {
        term: "Normal mikroflora (mikrobiom)",
        definition:
          "Sog‘lom odam terisi va shilliq qavatlarida doimiy yashovchi, kolonizatsion rezistentlik va vitamin sintezini ta’minlovchi foydali mikroblar majmuasi.",
      },
      {
        term: "Disbakterioz",
        definition:
          "Antibiotiklar, stress yoki noto‘g‘ri ovqatlanish tufayli normal mikroflora muvozanatining buzilishi va shartli patogenlarning ko‘payishi.",
      },
      {
        term: "Sterillash",
        definition:
          "Obyektdagi barcha mikroorganizmlar va ularning sporalarini to‘liq (100%) yo‘qotish jarayoni.",
      },
      {
        term: "Antiseptika va aseptika",
        definition:
          "Aseptika — mikroblarning yaraga tushishini oldini olish; antiseptika — yaraga tushgan mikroblarni kimyoviy yoki biologik vositalar bilan yo‘qotish.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun tibbiyotda terini antiseptik ishlashda 96% emas, aynan 70% li etil spirti ishlatiladi?",
        answer:
          "96% li spirt bakteriya yuzasidagi oqsillarni bir zumda koagulyatsiya qilib zich parda hosil qiladi va spirtning hujayra ichiga kirishiga to‘sqinlik qiladi; 70% li spirt esa asta-sekin kirib barcha hujayra oqsillarini denaturatsiya qiladi.",
      },
      {
        question:
          "Nima sababdan suv sifatini baholashda bevosita qorin tifi yoki vabo qo‘zg‘atuvchisini emas, E. coli ni qidiradilar?",
        answer:
          "E. coli najasda juda ko‘p miqdorda bo‘ladi, suvda patogen ichak bakteriyalaridan ko‘ra uzoqroq saqlanadi va uni aniqlash tez hamda arzon; uning mavjudligi suvning fekal ifloslanganidan darak beradi.",
      },
      {
        question:
          "Avtoklavda 100°C qaynatishdan farqli o‘laroq nima uchun bakteriya sporalari ham halok bo‘ladi?",
        answer:
          "Avtoklavda 1 atmosfera qo‘shimcha bosim ostida to‘yingan bug‘ harorati 121°C ga ko‘tariladi, bu esa issiqqa o‘ta chidamli bakteriya sporalarining oqsillarini 20 daqiqada to‘liq denaturatsiya qiladi.",
      },
    ],
    keyTerms: [
      "ekologiya",
      "koli-indeks",
      "koli-titr",
      "mikrobiom",
      "disbakterioz",
      "avtoklav",
      "pasterizatsiya",
      "tindalizatsiya",
      "sterillash",
      "antiseptika",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/03-mavzu_Mikroorganizmlar_ekologiyasi_muhit_omillari__a9c27b4b.pdf",
    pdfTitle: "3-mavzu: Mikroorganizmlar ekologiyasi, muhit omillari va sterillash (Ma’ruza matni)",
    pdfDocuments: [
      {
        title:
          "3-mavzu: Mikroorganizmlar ekologiyasi, muhit omillari va sterillash (Ma’ruza matni)",
        url: "/assets/aistudio/03-mavzu_Mikroorganizmlar_ekologiyasi_muhit_omillari__a9c27b4b.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-4",
    order: 4,
    code: "4",
    topicLabel: "4-mavzu",
    module: "I bo‘lim: Umumiy mikrobiologiya va ekologiya",
    title:
      "Oziqa muhitlar va mikrobiologik tekshirish usullari. Mikroorganizmlarni ko‘paytirishda ishlatiladigan oziqa muhitlari",
    syllabusPoints: [
      "Mikroorganizmlarning oziqlanish tiplari (autotrof/geterotrof, fototrof/xemotrof, prototrof/auksotrof) va moddalar transporti",
      "Oziqa muhitlarga qo‘yiladigan asosiy talablar va ularning konsistensiyasi (suyuq, yarim suyuq 0,5–0,7% agar, zich 1,5–2% agar)",
      "Oziqa muhitlarning maqsadiga ko‘ra tasnifi: asosiy (MPA, MPB), boyitilgan (qonli, shokoladli), elektiv/selektiv, differensial-diagnostik (Endo, Levin, Ploskirev) va transport muhitlari",
      "Sof kultura ajratishning 4 kunlik klassik bosqichi, ekish usullari (Kox, Drigalskiy, strix, Shukevich) va identifikatsiya (antibiotikogramma, MALDI-TOF)",
      "Bakteriya populyatsiyasining o‘sish egri chizig‘i (lag, logarifmik, statsionar, o‘lim fazalari) va generatsiya vaqti",
    ],
    studyNotes:
      "Klinik oltin qoida: «Avval ekma — keyin antibiotik!» Agar-agar qizil suvo‘tlardan olinib 100°C da eriydi, 42°C da qotadi va ko‘pchilik bakteriyalar tomonidan parchalanmaydi. E. coli generatsiya vaqti ~20 daq, sil tayoqchasi — 14–24 soat.",
    overview:
      "Mikroorganizmlarni laboratoriyada o‘stirish va sof kultura ajratish aniq tashxis hamda antibiotik sezgirligini belgilashning asosiy yo‘lidir. Ushbu mavzuda oziqlanish tiplari, agarli va suyuq muhitlar tasnifi, elektiv va differensial muhitlarning ishlash tamoyili, 4 kunlik sof kultura ajratish algoritmi va bakteriya o‘sish fazalari batafsil bayon qilinadi.",
    sections: [
      {
        heading: "4.1. Oziqlanish tiplari va oziqa muhitlarga talablar",
        content:
          "Uglerod manbaiga ko‘ra mikroblar autotroflar (CO₂) va geterotroflarga (organik modda — barcha patogenlar), o‘sish omillariga talabiga ko‘ra esa prototroflar va auksotroflarga (tayyor vitamin/aminokislota talab qiluvchi) bo‘linadi.",
        highlights: [
          "Oziqa muhitga 6 ta talab: ozuqaviy to‘liqlik, optimal pH (7,2–7,4), izotoniklik (0,85% NaCl), sterillik, shaffoflik va kerakli namlik/redoks-potensial",
          "Agar-agar (Gelidium, Gracilaria qizil suvo‘tlaridan): zich muhit 1,5–2%, yarim suyuq muhit 0,5–0,7% (harakatchanlikni tekshirish)",
          "Agar afzalligi: 95–100°C da eriydi, 42–45°C da qotadi (37°C termostatda erimaydi) va bakteriya fermentlari uni parchalay olmaydi",
        ],
      },
      {
        heading: "4.2. Oziqa muhitlarning maqsadiga ko‘ra tasnifi",
        content:
          "Zamonaviy mikrobiologiyada har bir patogen guruhi uchun uning metabolik xususiyatlariga mos maxsus muhitlar tanlanadi.",
        highlights: [
          "Asosiy (universal) muhitlar: go‘sht-peptonli bulon (MPB) va go‘sht-peptonli agar (MPA)",
          "Boyitilgan muhitlar (injiq patogenlar uchun): qonli agar (5–10% qon — gemolizni ko‘rsatadi), shokoladli agar (qizdirilgan qon — neysseriyalar, gemofil tayoqcha), zardobli agar",
          "Elektiv/selektiv muhitlar (bitta turni tanlab o‘stiradi): 7,5–10% NaCl li sarali agar (stafilokokk), ishqoriy pepton suvi pH 8,5–9,0 (vabo), Levenshteyn-Yensen (sil), Kitt-Tarossi (anaeroblar), Saburo (zamburug‘lar)",
          "Differensial-diagnostik muhitlar: Endo, Levin, Ploskirev (laktoza+ E. coli qizil/binafsha, laktoza− Salmonella va Shigella rangsiz), Giss qisqa qatori (uglevodlar)",
          "Transport muhitlari: Styuart, Eymis, Keri-Bler — oziqa bermaydi, faqat mikrobni laboratoriyagacha tirik saqlaydi",
        ],
      },
      {
        heading: "4.3. Sof kultura ajratish bosqichlari va ekish texnikasi",
        content:
          "Bemor materialida odatda bir nechta turdagi mikroblar aralash bo‘ladi. Aniq tashxis uchun aralashmadan bitta koloniyadan o‘sgan sof kultura ajratish shart.",
        highlights: [
          "1-kun: Materialni mikroskopiya qilish va zich muhitga sektorli strix (Gold usuli) yoki Drigalskiy shpateli bilan ekib 37°C da 18–24 soat inkubatsiya qilish",
          "2-kun: Yakka koloniyalarni (S — silliq, R — g‘adir-budur, M — shilliq) o‘rganish va qiya agarga ko‘chirib toza kultura to‘plash",
          "3-kun: Sof kultura tozaligini Gram bo‘yicha tekshirish, Giss qatori, serologik agglyutinatsiya va antibiotikogramma (Kirbi-Bauer disk-diffuziya) qo‘yish",
          "4-kun: Yakuniy identifikatsiya va shifokorga javob berish (zamonaviy MALDI-TOF mass-spektrometriya buni 5–10 daqiqagacha qisqartiradi)",
        ],
      },
      {
        heading: "4.4. Bakteriya populyatsiyasining o‘sish egri chizig‘i",
        content:
          "Yopiq suyuq oziqa muhitida bakteriyalar sonining vaqt bo‘yicha o‘zgarishi to‘rtta klassik fazadan iborat S-simon egri chiziq hosil qiladi.",
        highlights: [
          "1. Lag-faza (moslashish, 1–4 soat): hujayralar yangi muhitga moslashadi, fermentlar sintezlaydi, soni hali ko‘paymaydi",
          "2. Logarifmik (eksponensial) faza: maksimal tezlikda binar bo‘linish (2ⁿ); antibiotiklarga eng sezgir davr!",
          "3. Statsionar faza: ozuqa kamayib, toksik metabolitlar to‘planadi — yangi hujayralar soni o‘layotganlariga tenglashadi (sporalar va antibiotiklar shu fazada ko‘p hosil bo‘ladi)",
          "4. O‘lim (halokat) fazasi: o‘layotgan hujayralar soni keskin ustunlik qiladi",
        ],
      },
    ],
    comparisonTable: {
      title: "Klinik mikrobiologiyada eng ko‘p ishlatiladigan maxsus oziqa muhitlari",
      columns: ["Oziqa muhiti", "Turi", "Qaysi mikroorganizm uchun", "Xarakterli o‘sish belgisi"],
      rows: [
        [
          "Qonli agar",
          "Boyitilgan + differensial",
          "Streptokokklar, stafilokokklar, pnevmokokklar",
          "α (yashil), β (tiniq shaffof zona) yoki γ-gemoliz",
        ],
        [
          "Endo agari",
          "Differensial-diagnostik",
          "Enterobakteriyalar (E. coli, Salmonella, Shigella)",
          "Laktoza+ (E. coli) — metall yaltiroqli qizil; laktoza− — rangsiz",
        ],
        [
          "Tuzli-sarali agar (JSA)",
          "Elektiv / selektiv",
          "Stafilokokklar (S. aureus)",
          "7,5–10% NaCl boshqalarni bostiradi; lesitinaza+ halqa",
        ],
        [
          "Ishqoriy pepton suvi",
          "Elektiv (pH 8,5–9,0)",
          "Vabo vibrioni (Vibrio cholerae)",
          "6–8 soatda sirtda nozik moviy parda hosil qiladi",
        ],
        [
          "Levenshteyn-Yensen",
          "Elektiv (tuxum-kartoshkali)",
          "Sil qo‘zg‘atuvchisi (M. tuberculosis)",
          "3–6 haftada quruq, burishgan «gulkaram» koloniyalar",
        ],
        [
          "Kitt-Tarossi muhiti",
          "Anaerob muhit",
          "Klostridiyalar (C. tetani, C. botulinum, C. perfringens)",
          "Jigar bo‘lakchalari va vazelin moyi ostida gaz/loyqalanish",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Agar-agar",
        definition:
          "Qizil suvo‘tlardan olinadigan polisaxarid; oziqa muhitini 1,5–2% konsentratsiyada zich qiladi va bakteriyalar tomonidan hazm qilinmaydi.",
      },
      {
        term: "Koloniya (KHB)",
        definition:
          "Zich muhitda bitta bakteriya hujayrasining ko‘payishidan hosil bo‘lgan va ko‘z bilan ko‘rinadigan mikrob to‘plami (klon).",
      },
      {
        term: "Generatsiya vaqti",
        definition:
          "Bakteriya hujayralari sonining ikki baravar ko‘payishi uchun ketadigan vaqt (E. coli — 20 daqiqa, M. tuberculosis — 14–24 soat).",
      },
      {
        term: "Kirbi-Bauer usuli",
        definition:
          "Zich agarda antibiotik shimdirilgan qog‘oz disklar atrofida o‘sishdan to‘xtash zonasini o‘lchab sezgirlikni aniqlash (antibiotikogramma).",
      },
      {
        term: "Elektiv muhit",
        definition:
          "Tarkibidagi maxsus moddalar tufayli faqat bitta kerakli mikroorganizm turining o‘sishiga qulaylik yaratib, boshqalarini bostiruvchi muhit.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun klinik amaliyotda «Avval ekma — keyin antibiotik» qoidasiga qat’iy amal qilinadi?",
        answer:
          "Agar bemor material olishdan oldin antibiotik ichib qo‘ysa, qo‘zg‘atuvchi o‘sishi to‘xtaydi yoki nobud bo‘ladi, natijada bakteriologik ekma yolg‘on-manfiy chiqadi va to‘g‘ri antibiotikogramma aniqlab bo‘lmaydi.",
      },
      {
        question:
          "Bakteriya o‘sish egri chizig‘ining qaysi fazasida hujayralar antibiotiklarga eng sezgir bo‘ladi?",
        answer:
          "Logarifmik (eksponensial) fazada hujayra devori va oqsillar maksimal tezlikda sintezlanayotgani uchun hujayralar bakteritsid antibiotiklarga eng sezgir bo‘ladi.",
      },
      {
        question: "Endo muhitida E. coli va Salmonella koloniyalari bir-biridan qanday farqlanadi?",
        answer:
          "E. coli laktozani parchalab kislota va aldegid hosil qilgani uchun metall yaltiroqli to‘q qizil koloniyalar beradi; Salmonella esa laktozani parchalamaydi va rangsiz, shaffof koloniyalar hosil qiladi.",
      },
    ],
    keyTerms: [
      "oziqa muhit",
      "agar-agar",
      "Endo agari",
      "qonli agar",
      "Kitt-Tarossi",
      "sof kultura",
      "antibiotikogramma",
      "logarifmik faza",
      "generatsiya vaqti",
      "MALDI-TOF",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/04-mavzu_Oziqa_muhitlar_va_mikrobiologik_tekshirish_u_2aa017b5.pdf",
    pdfTitle: "4-mavzu: Oziqa muhitlar va mikrobiologik tekshirish usullari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "4-mavzu: Oziqa muhitlar va mikrobiologik tekshirish usullari (Ma’ruza matni)",
        url: "/assets/aistudio/04-mavzu_Oziqa_muhitlar_va_mikrobiologik_tekshirish_u_2aa017b5.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-5",
    order: 5,
    code: "5",
    topicLabel: "5-mavzu",
    module: "I bo‘lim: Umumiy mikrobiologiya va ekologiya",
    title: "Mikroorganizmlar ishtirokida boradigan bijg‘ish jarayonlari",
    syllabusPoints: [
      "Bijg‘ish tushunchasi, L. Paster ta’rifi va energiya olish usullari taqqoslanishi (aerob nafas 38 ATF, anaerob nafas 15–25 ATF, bijg‘ish 2 ATF, Paster effekti)",
      "Spirtli bijg‘ish: Saccharomyces cerevisiae, kimyoviy tenglama, nonvoychilik va vinochilikdagi roli (12–14% spirt chegarasi)",
      "Sut kislotali bijg‘ish: gomofermentativ (>90% sut kislota) va geterofermentativ (~50% + spirt + CO₂) turlari, sut mahsulotlari va tabiiy konservatsiya (pH 4,0–4,5)",
      "Moy kislotali (Clostridium butyricum), sirka kislotali (Acetobacter — chala oksidlanish), propion (pishloq ko‘zchalari) va chumoli kislotali bijg‘ish",
      "Bijg‘ish jarayonlarining tabiatdagi (uglerod aylanishi) va xalq xo‘jaligidagi (silos, biogaz 60–70% metan, biotexnologiya) ahamiyati",
    ],
    studyNotes:
      "Bijg‘ishda 1 mol glyukozadan atigi 2 ATF hosil bo‘ladi (aerob nafasda 38 ATF), shuning uchun bijg‘ituvchi mikroblar juda ko‘p substrat sarflaydi. Sirka kislotali bijg‘ish aslida anaerob bijg‘ish emas, balki Acetobacter ning aerob chala oksidlanishidir.",
    overview:
      "Bijg‘ish — organik moddalarning (asosan uglevodlarning) kislorod ishtirokisiz anaerob sharoitda chala parchalanib, substrat fosforillanishi orqali ATF hosil qiladigan energiya olish jarayonidir. Ushbu mavzuda spirtli, sut kislotali, moy kislotali, propion va sirka kislotali bijg‘ishlarning biokimyosi, qo‘zg‘atuvchilari hamda oziq-ovqat va qishloq xo‘jaligidagi amaliy qo‘llanilishi yoritiladi.",
    sections: [
      {
        heading: "5.1. Bijg‘ishning biologik mohiyati va energetikasi",
        content:
          "Lui Paster bijg‘ishni «kislorodsiz hayot» deb ta’riflagan. Bijg‘ishda elektronlarning oxirgi akseptori noorganik modda emas, balki organik oraliq mahsulot (masalan, piruvat yoki atsetaldegid) hisoblanadi.",
        highlights: [
          "Aerob nafas olish: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATF (maksimal samaradorlik)",
          "Anaerob nafas olish (NO₃⁻, SO₄²⁻ akseptor): 15–25 ATF",
          "Bijg‘ish (substrat fosforillanishi): atigi 2 ATF / mol glyukoza",
          "Paster effekti: muhitga kislorod kiritilganda fakultativ anaeroblar (achitqilar) bijg‘ishdan aerob nafasga o‘tib, glyukoza sarfini keskin kamaytiradi",
        ],
      },
      {
        heading: "5.2. Spirtli bijg‘ish",
        content:
          "Asosiy qo‘zg‘atuvchisi — Saccharomyces cerevisiae (novvoylik va vino achitqisi). Tenglama: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + 2 ATF. Piruvat piruvatdekarboksilaza yordamida atsetaldegidga, u esa alkogoldegidrogenaza ta’sirida etanolga aylanadi.",
        highlights: [
          "Nonvoychilikda asosiy mahsulot — CO₂ gazi (xamirni g‘ovak qilib ko‘taradi), spirt esa pishirishda bug‘lanib ketadi",
          "Vinochilikda spirt konsentratsiyasi 12–14% ga yetganda achitqilarning o‘zi zaharlanib bijg‘ish to‘xtaydi",
          "Bioetanol ishlab chiqarish — qayta tiklanuvchi ekologik yoqilg‘i",
        ],
      },
      {
        heading: "5.3. Sut kislotali bijg‘ish (gomo- va geterofermentativ)",
        content:
          "Sut kislotali bakteriyalar (Lactobacillus, Lactococcus, Streptococcus thermophilus, Leuconostoc, Bifidobacterium) qatiq, yogurt, kefir, pishloq tayyorlash, sabzavot tuzlash va siloslashning asosini tashkil etadi.",
        highlights: [
          "Gomofermentativ bijg‘ish: glyukoza → 2 mol sut kislotasi (>90% sof sut kislota) — L. bulgaricus, S. thermophilus, L. acidophilus",
          "Geterofermentativ bijg‘ish: glyukoza → sut kislota (~50%) + etanol/sirka kislota + CO₂ — Leuconostoc, Bifidobacterium (kefir va tuzlangan karamga o‘ziga xos ta’m va gaz beradi)",
          "Tabiiy konservatsiya: pH 4,0–4,5 gacha pasayib, chirish bakteriyalari (Clostridium) o‘sishini butunlay to‘xtatadi",
        ],
      },
      {
        heading: "5.4. Moy, propion, sirka va chumoli kislotali bijg‘ishlar",
        content:
          "Uglevodlar va spirtlarning boshqa mikroorganizmlar ishtirokidagi o‘zgarishlari ham tabiatda va sanoatda katta rol o‘ynaydi.",
        highlights: [
          "Moy kislotali bijg‘ish (Clostridium butyricum, obligat anaerob): moy kislota + CO₂ + H₂; oziq-ovqatni (pishloq, silos) aynitib qo‘lansa hid beradi, lekin zig‘ir/kanop ivitishda foydali",
          "Propion kislotali bijg‘ish (Propionibacterium shermanii): sut kislotadan propion kislota + CO₂ + B₁₂ vitamini hosil qilib, Shveysariya pishloqlarida katta «ko‘zchalar» yaratadi",
          "Sirka kislotali bijg‘ish (Acetobacter aceti): C₂H₅OH + O₂ → CH₃COOH + H₂O — qat’iy AEROB chala oksidlanish (vino ochiq qolsa sirkaga aylanadi)",
          "Siloslash (pH 4,0–4,2) va biogaz qurilmalari (metanogen arxeylar 60–70% CH₄ hosil qiladi)",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy bijg‘ish turlarining qiyosiy tavsifi",
      columns: [
        "Bijg‘ish turi",
        "Asosiy qo‘zg‘atuvchisi",
        "Asosiy mahsulotlar",
        "Kislorodga munosabat / Ahamiyati",
      ],
      rows: [
        [
          "Spirtli",
          "Saccharomyces cerevisiae",
          "Etanol + CO₂ + 2 ATF",
          "Fakultativ anaerob · Nonvoylik, vinochilik, bioetanol",
        ],
        [
          "Gomofermentativ sut kislotali",
          "Lactobacillus bulgaricus, S. thermophilus",
          "Sut kislotasi (>90%) + 2 ATF",
          "Aerotolerant anaerob · Qatiq, yogurt, smetana, silos",
        ],
        [
          "Geterofermentativ sut kislotali",
          "Leuconostoc, Bifidobacterium",
          "Sut kislota + etanol/sirka + CO₂",
          "Anaerob · Kefir, tuzlangan sabzavotlar, probiotiklar",
        ],
        [
          "Moy kislotali",
          "Clostridium butyricum",
          "Moy kislotasi + CO₂ + H₂",
          "Obligat anaerob · Zig‘ir ivitish; pishloq/silos buzilishi",
        ],
        [
          "Propion kislotali",
          "Propionibacterium shermanii",
          "Propion + sirka kislota + CO₂ + B₁₂",
          "Anaerob · Qattiq pishloq ko‘zchalari, B₁₂ sintezi",
        ],
        [
          "Sirka kislotali (oksidlanish)",
          "Acetobacter aceti",
          "Sirka kislotasi (CH₃COOH) + H₂O",
          "Obligat AEROB · Tabiiy olma/uzum sirkasi ishlab chiqarish",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Bijg‘ish",
        definition:
          "Organik moddalarning kislorodsiz sharoitda chala parchalanib, substrat fosforillanishi orqali energiya (ATF) ajralib chiqish jarayoni.",
      },
      {
        term: "Paster effekti",
        definition:
          "Kislorod paydo bo‘lganda bijg‘ishning susayib, tejamkor aerob nafas olishga o‘tish hodisasi.",
      },
      {
        term: "Gomofermentativ sut kislotali bijg‘ish",
        definition: "Glyukozaning 90% dan ortig‘i faqat sof sut kislotasiga aylanadigan jarayon.",
      },
      {
        term: "Siloslash",
        definition:
          "Yashil yem-xashakni zichlab anaerob sharoitda sut kislotali bijg‘itish (pH 4,0–4,2) orqali uzoq muddat saqlash usuli.",
      },
      {
        term: "Biogaz",
        definition:
          "Organik chiqindilarning anaerob parchalanishi va metanogen arxeylar faoliyatida hosil bo‘luvchi 60–70% metanli yonilg‘i gaz.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Nima uchun sirka kislotali bijg‘ish klassik anaerob bijg‘ishdan farq qiladi?",
        answer:
          "Chunki Acetobacter bakteriyalari etanolni sirka kislotasigacha aylantirish uchun atmosfera kislorodini (O₂) talab qiladi — bu aslida aerob chala oksidlanish jarayonidir.",
      },
      {
        question:
          "Tuzlangan karam yoki qatiq uzoq vaqt chirimasdan saqlanishining mikrobiologik siri nimada?",
        answer:
          "Sut kislotali bakteriyalar hosil qilgan sut kislotasi muhit pH ini 4,0–4,5 gacha tushiradi, bu kislotali muhitda esa chirish va patogen bakteriyalar ko‘paya olmaydi.",
      },
      {
        question:
          "Shveysariya pishlog‘idagi yirik teshikchalar (ko‘zchalar) qaysi bijg‘ish natijasida hosil bo‘ladi?",
        answer:
          "Propionibacterium shermanii bakteriyalari sut kislotasini propion kislotasiga aylantirayotganda ko‘p miqdorda CO₂ gazi ajralib chiqadi va pishloq massasida xarakterli ko‘zchalar hosil qiladi.",
      },
    ],
    keyTerms: [
      "bijg‘ish",
      "Paster effekti",
      "Saccharomyces cerevisiae",
      "spirtli bijg‘ish",
      "sut kislotali bijg‘ish",
      "Lactobacillus",
      "Clostridium butyricum",
      "Acetobacter",
      "Propionibacterium",
      "biogaz",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/05-mavzu_Mikroorganizmlar_ishtirokidagi_bijg_ish_jara_436ffb95.pdf",
    pdfTitle: "5-mavzu: Mikroorganizmlar ishtirokidagi bijg‘ish jarayonlari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "5-mavzu: Mikroorganizmlar ishtirokidagi bijg‘ish jarayonlari (Ma’ruza matni)",
        url: "/assets/aistudio/05-mavzu_Mikroorganizmlar_ishtirokidagi_bijg_ish_jara_436ffb95.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-6",
    order: 6,
    code: "6",
    topicLabel: "6-mavzu",
    module: "I bo‘lim: Umumiy mikrobiologiya va ekologiya",
    title:
      "Faglarning xossalari, virulent faglarni o‘rganish usullari, materialni tayyorlash, sifat usuli",
    syllabusPoints: [
      "Bakteriofaglar kashf etilishi (E. Xenkin 1896, F. Tuort 1915, F. d’Errel 1917), morfologiyasi va T-juft faglar tuzilishi",
      "Virulent faglar va litik siklning 5 bosqichi (adsorbsiya, penetratsiya, reproduksiya, yig‘ilish, lizis — 30–40 daq, 100–200 fag); Xershi-Cheyz tajribasi (1952)",
      "Mo‘tadil faglar, lizogeniya, profag, fag konversiyasi (difteriya, botulotoksin, xolerogen, skarlatina, Shiga-toksin) va transduksiya",
      "Virulent faglarni o‘rganish usullari: material tayyorlash (0,22–0,45 mkm filtr), sifat usuli (steril dog‘/plak), miqdor usullari (Appelman suyuq va Grasia ikki qavatli zich usuli — FHB/ml)",
      "Faglarning tabiatdagi roli (CRISPR-Cas, viral shunt), fagotiplash va zamonaviy fagoterapiya",
    ],
    studyNotes:
      "Bakteriofaglar (bakteriya viruslari) qat’iy tur va shtamm spetsifikligiga ega. Sifat usulida bakteriya gazonida tiniq «steril dog‘» ko‘rinadi; miqdor Grasia usulida FHB/ml (fag hosil qiluvchi birliklar) bilan o‘lchanadi.",
    overview:
      "Bakteriofaglar — faqat bakteriyalarni zararlaydigan viruslar bo‘lib, Yer yuzidagi eng ko‘p sonli biologik obyektlardir (~10³¹ zarracha). Ushbu ma’ruzada T-juft faglar tuzilishi, virulent faglarning litik sikli, mo‘tadil faglarning lizogeniya va fag konversiyasidagi o‘rni, laboratoriyada material tayyorlash, sifat/miqdor (Appelman, Grasia) usullari hamda antibiotik rezistentligiga qarshi fagoterapiya yoritiladi.",
    sections: [
      {
        heading: "6.1. Bakteriofaglar kashfi va tuzilishi",
        content:
          "1896-yilda E. Xenkin Gang daryosi suvida vabo vibrionini erituvchi omilni kuzatdi, 1915-yilda F. Tuort va 1917-yilda Feliks d’Errel uni mustaqil kashf etib «bakteriofag» (bakteriya yutuvchi) deb atadi.",
        highlights: [
          "T-juft faglar (T2, T4 — spermatozoidsimon): ikosaedrik bosh (ichida qo‘sh zanjirli DNK), ichi bo‘sh o‘zakli qisqaruvchi dum g‘ilofi, bazal plastinka, tishchalar va 6 ta dum ipchalari (retseptor tanish)",
          "Boshqa shakllari: ipsimon (M13), kubsimon dumiz (φX174, MS2 — RNK li)",
          "Faglar haroratga (65–75°C da inaktivlanadi) va UB nurlarga sezgir, lekin ko‘pchilik antibiotik va xloroformga chidamli",
        ],
      },
      {
        heading: "6.2. Virulent faglar va litik sikl (5 bosqich)",
        content:
          "Virulent faglar bakteriya hujayrasiga kirgach, uni 30–40 daqiqa ichida parchalab (lizis), 100–200 ta yangi fag zarrachasini chiqaradi. 1952-yilda A. Xershi va M. Cheyz ³²P (DNK) va ³⁵S (oqsil) izotoplari bilan hujayra ichiga faqat fag DNKsi kirishini isbotladi.",
        highlights: [
          "1. Adsorbsiya — dum ipchalari bakteriya yuzasidagi spetsifik retseptorlarga bog‘lanadi",
          "2. Penetratsiya — lizotsim devorni teshib, dum g‘ilofi shprits kabi qisqarib DNKni sitoplazmaga in’eksiya qiladi",
          "3. Reproduksiya (eklips davri) — bakteriya metabolizmi fag DNKsi va oqsillarini sintezlashga qayta dasturlanadi",
          "4. Yig‘ilish (morfogenez) — bosh, dum va DNKdan yetuk virionlar shakllanadi",
          "5. Lizis — fag endolizinlari hujayra devorini yorib, 100–200 ta yangi fagni ozod qiladi",
        ],
      },
      {
        heading: "6.3. Mo‘tadil faglar, lizogeniya va fag konversiyasi",
        content:
          "Mo‘tadil faglar (masalan, λ-fag) bakteriyani darhol o‘ldirmasdan, o‘z DNKsini bakteriya xromosomasiga biriktirib (profag) u bilan birga bo‘linib yuradi. Bu holat lizogeniya deyiladi.",
        highlights: [
          "Lizogen konversiya (fag konversiyasi) — profag bakteriyaga yangi toksin ishlab chiqarish xususiyatini beradi",
          "Klassik misollar: difteriya toksini (C. diphtheriae), botulotoksin (C. botulinum), vabo xolerogeni (CTXφ), skarlatina eritrogen toksini, Shiga-toksin",
          "Transduksiya — faglar orqali bakteriya genlarining bir hujayradan ikkinchisiga ko‘chirilishi (umumiy va spetsifik)",
        ],
      },
      {
        heading: "6.4. Virulent faglarni o‘rganish: material tayyorlash, sifat va miqdor usullari",
        content:
          "Faglarni najas, yiring, oqova suv yoki tuproqdan ajratish uchun avval barcha bakteriyalar filtratsiya yoki xloroform bilan yo‘qotiladi, so‘ngra sezgir indikator bakteriya gazonida tekshiriladi.",
        highlights: [
          "Material tayyorlash: bulonda emulsiya → sentrifugalash → 0,22–0,45 mkm membranali bakterial filtrdan o‘tkazish (fag filtrdan o‘tadi, bakteriya qoladi) yoki xloroform qo‘shish",
          "Sifat usuli (Otto / steril dog‘ usuli): Petri kosachasidagi zich agarga indikator bakteriya gazoni ekilib, ustiga filtrat tomiziladi; musbat natija — tiniq lizis («steril dog‘» / plak)",
          "Appelman usuli (suyuq muhitda ketma-ket 10 baravar suyultirish): bulonni to‘liq tiniqlashtirgan oxirgi suyultirish darajasi fag titri deyiladi (masalan, 10⁻⁸)",
          "Grasia ikki qavatli agar usuli: yarim suyuq 0,7% agar + bakteriya + filtrat aralashmasi quyilib, aniq negativ koloniyalar (FHB/ml) sanaladi",
          "Amaliy qo‘llanilishi: bakteriyalarni fagotiplash (epidemik manbani aniqlash) va antibiotikka chidamli infeksiyalarda fagoterapiya",
        ],
      },
    ],
    comparisonTable: {
      title: "Virulent va mo‘tadil bakteriofaglarning qiyosiy jadvali",
      columns: ["Belgi", "Virulent fag (T4)", "Mo‘tadil fag (λ-fag)"],
      rows: [
        ["Hayot sikli", "Faqat litik sikl", "Lizogen yoki litik sikl (induksiya bilan)"],
        [
          "Bakteriya taqdiri",
          "30–40 daqiqada to‘liq lizis (halokat)",
          "Tirik qoladi, profagni nasldan-naslga o‘tkazadi",
        ],
        ["Xromosomaga integratsiya", "Kuzatilmaydi", "Profag holatida integratsiyalanadi"],
        ["Fag konversiyasi", "Yo‘q", "Mavjud (difteriya, vabo, botulizm toksinlari)"],
        [
          "Tibbiy qo‘llanilishi",
          "Fagoterapiya va fagotiplashda asosiy vosita",
          "Gen muhandisligida vektor (klonlash)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Bakteriofag",
        definition: "Faqat bakteriyalarni tanlab zararlaydigan va ular ichida ko‘payadigan virus.",
      },
      {
        term: "Profag va lizogeniya",
        definition:
          "Bakteriya xromosomasiga integratsiyalangan mo‘tadil fag DNKsi (profag) va uning xo‘jayin bilan birga tinch bo‘linib yashash holati (lizogeniya).",
      },
      {
        term: "Steril dog‘ (negativ koloniya / plak)",
        definition:
          "Zich oziqa muhitidagi bakteriya gazonida bitta fag zarrachasining ketma-ket lizisi natijasida hosil bo‘lgan tiniq bo‘sh zona.",
      },
      {
        term: "Grasia usuli (FHB/ml)",
        definition:
          "Ikki qavatli agar yordamida 1 ml suyuqlikdagi faol fag zarrachalari (fag hosil qiluvchi birliklar) sonini aniq hisoblash usuli.",
      },
      {
        term: "Fagoterapiya",
        definition:
          "Antibiotiklarga chidamli bakterial infeksiyalarni (stafilokokk, ko‘k-yashil yiring, dizenteriya) maxsus virulent faglar yordamida davolash usuli.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Fag ajratishda bemor materialidan bakteriyalarni yo‘qotib, faglarni saqlab qolish uchun qanday usul qo‘llaniladi?",
        answer:
          "Material sentrifugalanib, 0,22–0,45 mkm li membranali bakterial filtrdan o‘tkaziladi (bakteriyalar filtrda ushlanib qoladi, kichik faglar o‘tadi) yoki xloroform bilan ishlanadi.",
      },
      {
        question: "Fag konversiyasi tibbiyotda nima uchun juda muhim?",
        answer:
          "Chunki ba’zi bakteriyalar (masalan, difteriya tayoqchasi yoki vabo vibrioni) faqat tarkibida toksin genini tashuvchi mo‘tadil profag bo‘lgandagina xavfli ekzotoksin ishlab chiqara oladi.",
      },
      {
        question: "Fagoterapiyaning antibiotiklarga nisbatan asosiy afzalligi nimada?",
        answer:
          "Faglar qat’iy spetsifik bo‘lib, faqat patogen bakteriyani yo‘qotadi, normal ichak mikroflorasini buzmaydi va infeksiya o‘chog‘ida o‘zi ko‘payib boradi.",
      },
    ],
    keyTerms: [
      "bakteriofag",
      "virulent fag",
      "litik sikl",
      "mo‘tadil fag",
      "lizogeniya",
      "profag",
      "fag konversiyasi",
      "Appelman usuli",
      "Grasia usuli",
      "fagoterapiya",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/06-mavzu_Bakteriofaglar_xossalari_va_o_rganish_usulla_f8476f9c.pdf",
    pdfTitle: "6-mavzu: Bakteriofaglar xossalari va o‘rganish usullari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "6-mavzu: Bakteriofaglar xossalari va o‘rganish usullari (Ma’ruza matni)",
        url: "/assets/aistudio/06-mavzu_Bakteriofaglar_xossalari_va_o_rganish_usulla_f8476f9c.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-7",
    order: 7,
    code: "7",
    topicLabel: "7-mavzu",
    module: "I bo‘lim: Umumiy mikrobiologiya va ekologiya",
    title: "Antibiotiklarga umumiy tavsif. Infeksiyaning umumiy tavsifi va infeksion jarayonlar",
    syllabusPoints: [
      "Antibioz va antibiotiklar tarixi (A. Fleming 1928, Flori va Cheyn 1940, Z. Vaksman 1943), tasnifi (kelib chiqishi, bakteritsid/bakteriostatik, tor/keng spektr)",
      "Antibiotiklarning 5 ta asosiy molekulyar ta’sir mexanizmi (hujayra devori, membrana, 30S/50S ribosoma, nuklein kislotalar, folat) va ratsional antibiotikoterapiya (MIK)",
      "Antibiotiklarga chidamlilik (rezistentlik) mexanizmlari: R-plazmidlar, beta-laktamaza, PBP2a (MRSA), efflux nasoslari, VRE, ESBL va MDR-TB",
      "Infeksiya tushunchasi, patogenlik (sifat belgisi) va virulentlik (miqdor belgisi — LD₅₀, DLM), patogenlik omillari, ekzotoksin vs endotoksin, anatoksin",
      "Infeksion jarayon shakllari (bakteriemiya, sepsis, septikopiemiya, toksinemiya), 4 ta davri va epidemik zanjirning 3 bo‘g‘ini",
    ],
    studyNotes:
      "Antibiotiklar viruslarga (gripp, O‘RVI) mutlaqo ta’sir qilmaydi! Patogenlik — turga xos sifat belgisi, virulentlik — shtammga xos miqdor belgisi. Ekzotoksin oqsil tabiatli va formalinda anatoksinga aylanadi; endotoksin esa Gr− LPS lipid A qismidir.",
    overview:
      "Antibiotiklarning kashf etilishi tibbiyot tarixidagi eng katta yutuq bo‘lib, o‘rtacha umr ko‘rishni keskin oshirdi; ammo noto‘g‘ri qo‘llash oqibatida global antibiotik rezistentligi (MRSA, ESBL, MDR-TB) yuzaga keldi. Ma’ruzaning ikkinchi qismi infeksion jarayon mohiyati, patogenlik omillari, ekzo- va endotoksinlar farqi hamda epidemik jarayon qonuniyatlariga bag‘ishlanadi.",
    sections: [
      {
        heading: "7.1. Antibiotiklar tasnifi va 5 ta ta’sir mexanizmi",
        content:
          "Antibiotiklar (zamburug‘lar, aktinomitsetlar, bakteriyalar yoki yarim sintetik/sintetik yo‘l bilan olinadi) bakteritsid (hujayrani o‘ldiruvchi) yoki bakteriostatik (ko‘payishini to‘xtatuvchi) ta’sirga ega.",
        highlights: [
          "1. Hujayra devori (peptidoglikan) sintezini bloklash — beta-laktamlar (penitsillinlar, sefalosporinlar, karbapenemlar) va vankomitsin (bakteritsid)",
          "2. Sitoplazmatik membrana o‘tkazuvchanligini buzish — polimiksinlar, amfoteritsin B",
          "3. Oqsil sintezini (70S ribosoma) bloklash — 30S (aminoglikozidlar, tetratsiklinlar) va 50S (makrolidlar, levomitsetin, linkozamidlar)",
          "4. Nuklein kislota sintezini to‘xtatish — ftorxinolonlar (DNK-giraza), rifampitsin (RNK-polimeraza)",
          "5. Folat kislotasi antimetabolitlari — sulfanilamidlar va trimetoprim",
        ],
      },
      {
        heading: "7.2. Antibiotiklarga chidamlilik va ratsional qo‘llash",
        content:
          "Rezistentlik tabiiy (masalan, mikoplazmalarda devor yo‘qligi sabab penitsillinga mutlaq chidamlilik) yoki orttirilgan (mutatsiya, R-plazmid konyugatsiyasi) bo‘ladi.",
        highlights: [
          "Fermentativ inaktivatsiya — beta-laktamazalar (ESBL, karbapenemaza) antibiotik halqasini parchalaydi",
          "Nishon o‘zgarishi — MRSA da PBP2a oqsili paydo bo‘lib beta-laktamlarni bog‘lamaydi",
          "Efflux nasoslari — antibiotikni hujayradan faol haydab chiqarish (P. aeruginosa)",
          "Ratsional qoidalar: faqat shifokor retsepti bilan, virusli O‘RVIda bermaslik, kursni erta to‘xtatmaslik, MIK (minimal ingibitsiyalovchi konsentratsiya) asosida tanlash",
        ],
      },
      {
        heading: "7.3. Patogenlik, virulentlik va toksinlar",
        content:
          "Patogenlik — mikroorganizm turining kasallik chaqira olish qobiliyati (sifat belgisi), virulentlik esa muayyan shtammning patogenlik darajasi (miqdor belgisi: LD₅₀, DLM). Patogenlik omillariga adgeziya (pili), invaziya (gialuronidaza), fagotsitozdan himoya (kapsula) va toksinlar kiradi.",
        highlights: [
          "Ekzotoksinlar — tirik hujayra (ko‘pincha Gr+) ajratadigan kuchli oqsillar, termolabil, spetsifik nishonli (neyro-, sito-, enterotoksin), 0,4% formalin + 37°C da anatoksinga aylanadi",
          "Endotoksinlar — faqat Gr− bakteriya parchalanganda chiqadigan LPS (lipid A), termostabil, umumiy isitma va endotoksik shok chaqiradi, anatoksin bermaydi",
        ],
      },
      {
        heading: "7.4. Infeksion jarayon shakllari, bosqichlari va epidemik zanjir",
        content:
          "Infeksion kasallik 4 bosqichdan o‘tadi: inkubatsion (yashirin), prodromal (darakchi), avj olish (klinik belgilar) va rekonvalessensiya (sog‘ayish yoki tashuvchilik). Epidemik jarayon 3 bo‘g‘insiz davom etmaydi: infeksiya manbai → yuqish mexanizmi → sezgir organizm.",
        highlights: [
          "Bakteriemiya — bakteriyalarning qonga vaqtincha o‘tishi; sepsis — qonda faol ko‘payishi va og‘ir tizimli javob",
          "Septikopiemiya — qon orqali boshqa a’zolarda ikkilamchi yiringli o‘choqlar paydo bo‘lishi",
          "Toksinemiya — qonda qo‘zg‘atuvchi emas, faqat uning ekzotoksini aylanishi (qoqshol, difteriya, botulizm)",
          "Yuqish yo‘llari: havo-tomchi, fekal-oral, transmissiv (qon so‘ruvchilar), kontakt-maishiy, parenteral/vertikal",
        ],
      },
    ],
    comparisonTable: {
      title: "Ekzotoksin va endotoksinning asosiy farqlari",
      columns: ["Mezon", "Ekzotoksin", "Endotoksin"],
      rows: [
        ["Kimyoviy tabiati", "Oqsil (polipeptid)", "Lipopolisaxarid (LPS, faol qismi — lipid A)"],
        [
          "Qaysi bakteriyalar hosil qiladi",
          "Asosan Gr+ (ba’zan Gr−: vabo, Shiga)",
          "Faqat Gram-manfiy bakteriyalar",
        ],
        [
          "Ajralish usuli",
          "Tirik hujayra tashqi muhitga sekretlaydi",
          "Hujayra devori parchalanganda (lizisda) chiqadi",
        ],
        [
          "Issiqqa chidamliligi",
          "Termolabil (60–80°C da buziladi; S. aureus istisno)",
          "Termostabil (100°C da uzoq saqlanadi)",
        ],
        [
          "Zaharlik kuchi va ta’siri",
          "O‘ta kuchli, a’zoga spetsifik (neyro-, enterotoksin)",
          "Nisbatan kuchsiz, umumiy isitma, intoksikatsiya, shok",
        ],
        [
          "Anatoksin hosil qilishi",
          "Ha (formalinda zararsizlanib vaksina bo‘ladi)",
          "Yo‘q (anatoksin hosil qilmaydi)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "MIK (Minimal ingibitsiyalovchi konsentratsiya)",
        definition:
          "Muayyan mikroorganizmning ko‘rinadigan o‘sishini to‘xtata oladigan antibiotikning eng kam konsentratsiyasi (mkg/ml).",
      },
      {
        term: "Beta-laktamaza (ESBL)",
        definition:
          "Penitsillin va sefalosporinlarning beta-laktam halqasini parchalab, ularni faolsizlantiruvchi bakterial ferment.",
      },
      {
        term: "Anatoksin (toksoid)",
        definition:
          "Formalin va harorat ta’sirida zaharliligi yo‘qotilgan, ammo immunogenligi to‘liq saqlangan ekzotoksin (difteriya, qoqshol vaksinalari).",
      },
      {
        term: "Virulentlik",
        definition:
          "Muayyan mikroorganizm shtammining patogenlik darajasi; LD₅₀ (tajriba hayvonlarining 50% ini o‘ldiruvchi doza) bilan o‘lchanadi.",
      },
      {
        term: "Epidemik zanjir",
        definition:
          "Yuqumli kasallik tarqalishining uzluksiz 3 bo‘g‘ini: infeksiya manbai → yuqish mexanizmi → sezgir organizm.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun gripp yoki oddiy virusli shamollashda antibiotik ichish foydasiz va zararli?",
        answer:
          "Viruslarda peptidoglikanli hujayra devori va 70S ribosomalar yo‘q, shuning uchun antibiotiklar ularga ta’sir qilmaydi; aksincha, normal mikroflorani o‘ldirib disbakterioz va antibiotikka chidamli bakteriyalar paydo bo‘lishiga olib keladi.",
      },
      {
        question: "Sepsis va toksinemiya o‘rtasidagi asosiy farq nimada?",
        answer:
          "Sepsisda bakteriyalarning o‘zi qonda ko‘payib butun organizmga tarqaladi; toksinemiyada esa bakteriya kirish joyida (yara yoki tomoqda) qolib, qonga faqat uning ekzotoksini so‘riladi (qoqshol, difteriya).",
      },
      {
        question: "Epidemik zanjirni uzish uchun profilaktika qaysi uch yo‘nalishda olib boriladi?",
        answer:
          "1) Infeksiya manbaini izolyatsiya va davolash; 2) Yuqish yo‘llarini dezinfeksiya, dezinseksiya va sanitar gigiyena bilan to‘sish; 3) Sezgir aholini emlash (vaksinatsiya) orqali immunitet hosil qilish.",
      },
    ],
    keyTerms: [
      "antibiotiklar",
      "beta-laktamaza",
      "MRSA",
      "MIK",
      "patogenlik",
      "virulentlik",
      "ekzotoksin",
      "endotoksin",
      "anatoksin",
      "epidemik zanjir",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/07-mavzu_Antibiotiklar_va_infeksion_jarayonning_umumi_93229ecb.pdf",
    pdfTitle: "7-mavzu: Antibiotiklar va infeksion jarayonning umumiy tavsifi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "7-mavzu: Antibiotiklar va infeksion jarayonning umumiy tavsifi (Ma’ruza matni)",
        url: "/assets/aistudio/07-mavzu_Antibiotiklar_va_infeksion_jarayonning_umumi_93229ecb.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-8",
    order: 8,
    code: "8",
    topicLabel: "8-mavzu",
    module: "II bo‘lim: Patogen kokklar va enterobakteriyalar",
    title: "Gram-musbat kokklar: stafilokokklar, streptokokklar, pnevmokokklar",
    syllabusPoints: [
      "Kokklarning joylashuvi va Gram bo‘yash bo‘yicha umumiy tasnifi (katalaza sinamasi bilan farqlash)",
      "Stafilokokklar (S. aureus): morfologiyasi, 7,5–10% NaCl sarali agar, tilla pigment, plazmokoagulaza+, A-oqsil, issiqqa chidamli enterotoksin (100°C/30 daq), TSST-1 va MRSA",
      "Stafilokokk infeksiyalari (yiringli jarayonlar, oziq-ovqat zaharlanishi, kasalxona infeksiyalari), tashxis (antibiotikogramma, fagotiplash) va davolash (vankomitsin, linezolid)",
      "Streptokokklar (S. pyogenes): zanjir joylashuv, α/β/γ-gemoliz, Lensfild A/B/D tasnifi, M-oqsil, streptolizin O (ASLO), antigen mimikriyasi (revmatizm, glomerulonefrit)",
      "Pnevmokokklar (S. pneumoniae): lansetsimon diplokokk, kapsula (asosiy virulentlik omili), α-gemoliz, optoxinga sezgirlik, o‘t tuzlarida erish, PPV23/PCV13 vaksinalari",
    ],
    studyNotes:
      "Katalaza sinamasi stafilokokklarni (katalaza+) streptokokk va pnevmokokklardan (katalaza−) tezkor ajratadi. S. aureus enterotoksini qaynatishga (100°C/30 daq) chidamli; S. pyogenes penitsillinga hali ham yuqori sezgir.",
    overview:
      "Gram-musbat yiring chaqiruvchi kokklar (Staphylococcus, Streptococcus, Streptococcus pneumoniae) insoniyatda teri-yumshoq to‘qima yiringli infeksiyalari, angina, skarlatina, revmatizm, oziq-ovqat zaharlanishi va zotiljamning eng ko‘p uchraydigan sababchilaridir. Ushbu mavzuda ularning morfologik, biokimyoviy, patogenlik omillari va laboratoriya differensial tashxisi yoritiladi.",
    sections: [
      {
        heading: "8.1. Stafilokokklar (Staphylococcus aureus) xossalari va patogenligi",
        content:
          "Stafilokokklar uzum shingili kabi joylashgan Gr+ kokklar, katalaza-musbat, fakultativ anaerob va yuqori tuz konsentratsiyasiga (7,5–10% NaCl) chidamli. Asosiy patogen turi — S. aureus (tilla stafilokokk).",
        highlights: [
          "Asosiy patogenlik belgisi — plazmokoagulaza (plazmani ivitib fibrin parda hosil qiladi) va lesitinaza (sarali agarda kamalaksimon halqa)",
          "A-oqsil — IgG ning Fc qismini bog‘lab opsonizatsiya va fagotsitozni bloklaydi",
          "Enterotoksin — krem, tort, sut mahsulotlarida to‘planib 2–6 soatda o‘tkir zaharlanish beradi; 100°C da 30 daqiqa qaynatishga chidamli!",
          "TSST-1 (toksik shok sindromi toksini) va eksfoliatin (kuygan teri sindromi)",
          "MRSA (metitsillinga chidamli S. aureus) — mecA geni orqali PBP2a hosil qiladi; davolash: vankomitsin, linezolid",
        ],
      },
      {
        heading: "8.2. Streptokokklar (Streptococcus pyogenes — A guruhi)",
        content:
          "Streptokokklar zanjir shaklida joylashgan Gr+ kokklar, katalaza-manfiy, oziqa muhitiga injiq (qonli va shakarli agarda o‘sadi). Qonli agarda gemolizga (α, β, γ) va Lensfild bo‘yicha C-polisaxaridiga (A, B, C, D...) ko‘ra tasniflanadi.",
        highlights: [
          "S. pyogenes (β-gemolitik A guruhi): M-oqsil (fagotsitozdan himoya), gialuron kislotali kapsula, streptolizin O va S, streptokinaza, eritrogen toksin (skarlatina toshmasi)",
          "O‘tkir kasalliklari: angina (faringit), saramas (roja), impetigo, skarlatina, nekrotizatsiyalovchi fastsiit",
          "Autoimmun asoratlari (antigen mimikriyasi): revmatizm (yurak klapanlari shikastlanishi) va o‘tkir glomerulonefrit; tashxisda ASLO titri o‘lchanadi",
          "Muhim xususiyati: S. pyogenes hozirgacha penitsillinlarga yuqori sezgirligini saqlab qolgan",
        ],
      },
      {
        heading: "8.3. Pnevmokokklar (Streptococcus pneumoniae)",
        content:
          "Pnevmokokklar sham alangasiga o‘xshash lansetsimon juft (diplokokk) Gr+ bakteriyalar bo‘lib, o‘tkir bakterial zotiljam (pnevmoniya), otit, sinusit va meningitning yetakchi qo‘zg‘atuvchisidir.",
        highlights: [
          "Asosiy patogenlik omili — qalin polisaxarid kapsula (90+ serotip); kapsulasiz R-shtammlar avirulent (F. Griffit 1928 transformatsiya va O. Everi 1944 DNK isboti aynan pnevmokokkda o‘tkazilgan!)",
          "Qonli agarda α-gemoliz (yashil zona) hosil qiladi",
          "Viridans streptokokklardan farqi: optoxin diskiga sezgir, o‘t tuzlarida eriydi va inulinni parchalaydi",
          "Profilaktika: bolalar uchun konyugirlangan PCV10/PCV13 va kattalar uchun polisaxaridli PPV23 vaksinalari",
        ],
      },
      {
        heading: "8.4. Laboratoriya tashxisi va differensial algoritm",
        content:
          "Yiring, balg‘am, tomoq surtmasi yoki qondan olingan material Gram usulida bo‘yaladi va qonli hamda tuzli-sarali agarga ekiladi.",
        highlights: [
          "1-qadam (Katalaza sinamasi, 3% H₂O₂): pufakchalar (+) → Staphylococcus; pufakchasiz (−) → Streptococcus",
          "2-qadam (Stafilokokklar): koagulaza (+) → S. aureus; koagulaza (−) → S. epidermidis / S. saprophyticus",
          "3-qadam (Streptokokklar): β-gemoliz + batsitratsinga sezgir → S. pyogenes; α-gemoliz + optoxinga sezgir → S. pneumoniae",
        ],
      },
    ],
    comparisonTable: {
      title: "Stafilokokk, streptokokk va pnevmokokkning qiyosiy diagnostik jadvali",
      columns: ["Belgi", "S. aureus", "S. pyogenes (A guruh)", "S. pneumoniae"],
      rows: [
        [
          "Morfologiyasi",
          "Uzum boshi (to‘p-to‘p)",
          "Uzun zanjirlar",
          "Lansetsimon diplokokk, kapsulali",
        ],
        ["Katalaza sinamasi", "Musbat (+)", "Manfiy (−)", "Manfiy (−)"],
        [
          "Oziqa muhit talabi",
          "Oddiy MPA, 7,5–10% NaCl sarali agar",
          "Qonli, shakarli agar (injiq)",
          "Qonli/shokoladli agar, 5% CO₂",
        ],
        [
          "Qonli agarda gemoliz",
          "β-gemoliz (ko‘pincha)",
          "Aniq β-gemoliz",
          "α-gemoliz (yashil zona)",
        ],
        [
          "Kalit differensial test",
          "Plazmokoagulaza (+), mannitol (+)",
          "Batsitratsinga sezgir, ASLO",
          "Optoxinga sezgir, o‘tda eriydi",
        ],
        [
          "Asosiy kasalliklari",
          "Furonkul, osteomiyelit, zaharlanish, MRSA",
          "Angina, skarlatina, saramas, revmatizm",
          "Krup zotiljam, otit, meningit",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Plazmokoagulaza",
        definition:
          "S. aureus ishlab chiqaradigan va qon plazmasini ivitib bakteriya atrofida himoya fibrin devori yaratadigan patogenlik fermenti.",
      },
      {
        term: "MRSA",
        definition:
          "mecA geni va PBP2a oqsili hisobiga barcha beta-laktam antibiotiklarga (metitsillin, oksatsillin, sefalosporin) chidamli tilla stafilokokk shtammi.",
      },
      {
        term: "Antigen mimikriyasi",
        definition:
          "S. pyogenes M-oqsili va hujayra komponentlarining odam yurak mushagi va buyrak to‘qimalariga o‘xshashligi tufayli autoimmun revmatizm va glomerulonefrit rivojlanishi.",
      },
      {
        term: "ASLO (Antistreptolizin-O)",
        definition:
          "Streptolizin O ga qarshi hosil bo‘lgan antitanalar; ularning qondagi yuqori titri yaqinda o‘tkazilgan A-streptokokk infeksiyasi va revmatizm xavfini ko‘rsatadi.",
      },
      {
        term: "Optoxin testi",
        definition:
          "Pnevmokokkni (optoxinga sezgir) og‘iz bo‘shlig‘ining normal yashil streptokokklaridan (chidamli) ajratuvchi diagnostik sinama.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun tilla stafilokokk bilan zararlangan krem yoki salatlarni qaynatish ham oziq-ovqat zaharlanishining oldini ololmaydi?",
        answer:
          "Stafilokokk bakteriyasining o‘zi qaynatishda halok bo‘lsa-da, u mahsulotda ilgari to‘plab ulgurgan enterotoksin issiqqa o‘ta chidamli (100°C da 30 daqiqa parchalanmaydi) bo‘lib, o‘tkir zaharlanish chaqiradi.",
      },
      {
        question:
          "Balg‘am ekmasidan o‘sgan α-gemolitik kokkning pnevmokokk ekanligini qanday tasdiqlaysiz?",
        answer:
          "Gramda lansetsimon kapsulali diplokokk ko‘rinadi, katalaza-manfiy, optoxin diski atrofida o‘sish to‘xtash zonasi hosil qiladi va 10% o‘t tuzlarida eriydi.",
      },
      {
        question:
          "Streptokokkli anginani penitsillin bilan to‘liq kurs davolash nima uchun hayotiy muhim?",
        answer:
          "To‘liq davolanmagan A guruh β-gemolitik streptokokk infeksiyasi 2–3 haftadan so‘ng antigen mimikriyasi tufayli yurak klapanlarini shikastlovchi revmatizm yoki buyrak glomerulonefritiga olib kelishi mumkin.",
      },
    ],
    keyTerms: [
      "stafilokokk",
      "S. aureus",
      "plazmokoagulaza",
      "MRSA",
      "streptokokk",
      "S. pyogenes",
      "ASLO",
      "pnevmokokk",
      "optoxin",
      "katalaza",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/08-mavzu_Grammusbat_kokklar_stafilokokk_streptokokk_p_6fef6617.pdf",
    pdfTitle: "8-mavzu: Gram-musbat kokklar: stafilokokk, streptokokk, pnevmokokk (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "8-mavzu: Gram-musbat kokklar: stafilokokk, streptokokk, pnevmokokk (Ma’ruza matni)",
        url: "/assets/aistudio/08-mavzu_Grammusbat_kokklar_stafilokokk_streptokokk_p_6fef6617.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-9",
    order: 9,
    code: "9",
    topicLabel: "9-mavzu",
    module: "II bo‘lim: Patogen kokklar va enterobakteriyalar",
    title: "Enterokokklar, gram-manfiy kokklar: meningokokklar va gonokokklar",
    syllabusPoints: [
      "Enterokokklar (E. faecalis, E. faecium): favqulodda chidamlilik (6,5% NaCl, pH 9,6, 60°C/30 daq), sanitar ko‘rsatkich ahamiyati, shartli patogenlik va VRE",
      "Neysseriyalar (Neisseria) umumiy tavsifi: loviyasimon Gr− diplokokk, oksidaza+ va katalaza+, injiqligi (shokoladli agar, 5–10% CO₂) va tashqi muhitda beqarorligi",
      "Meningokokk (N. meningitidis): kapsula (A, B, C, W-135, Y seroguruhlar), glyukoza + maltoza, nazofaringit → meningit → meningokokkemiya (yulduzsimon gemorragik toshma, Uoterxaus-Fridriksen sindromi)",
      "Gonokokk (N. gonorrhoeae): pili, faqat glyukozani parchalaydi, neytrofillar ichida tugallanmagan fagotsitoz, gonoreya, ayollarda belgisiz kechish (bepushtlik) va chaqaloqlar blennoreyasi (Matveyev-Krede)",
      "Gram-manfiy kokklarning bakteriologik, mikroskopik va PZR tashxisi hamda zamonaviy antibiotik chidamliligi",
    ],
    studyNotes:
      "Neysseriyalar sovuq va quritishga o‘ta sezgir — material 37°C termosda 30–60 daqiqada laboratoriyaga yetkazilishi shart! Meningokokk glyukoza + maltozani, gonokokk esa faqat glyukozani parchalaydi.",
    overview:
      "Ushbu mavzuda ichakning chidamli kommensallari va kasalxona infeksiyasi qo‘zg‘atuvchilari bo‘lgan enterokokklar (E. faecalis, E. faecium) hamda inson uchun obligat patogen gram-manfiy loviyasimon diplokokklar — meningokokk (N. meningitidis) va gonokokk (N. gonorrhoeae) biologiyasi, klinikasi va tashxis xususiyatlari o‘rganiladi.",
    sections: [
      {
        heading: "9.1. Enterokokklar (Enterococcus faecalis va E. faecium)",
        content:
          "Ilgari D guruh streptokokklarga kiritilgan enterokokklar hozir alohida avlodga ajratilgan. Ular odam ichagining doimiy a’zolari bo‘lib, tashqi muhitga favqulodda chidamliligi bilan ajralib turadi.",
        highlights: [
          "Ekstremal chidamlilik: 6,5% NaCl, 40% o‘t, pH 9,6 va 60°C da 30 daqiqa qizdirishga bardosh beradi; 10–45°C da o‘sadi",
          "Sanitar mikrobiologiya: suv va tuproqda uzoq saqlangani uchun fekal ifloslanishning ishonchli ko‘rsatkichi",
          "Klinik ahamiyati: siydik yo‘llari infeksiyalari, endokardit, kasalxona yara infeksiyalari; VRE (vankomitsinga chidamli enterokokklar) global muammo",
        ],
      },
      {
        heading: "9.2. Neysseriyalar: umumiy xossalar va material tashish qoidasi",
        content:
          "Neisseria avlodining ikki patogen vakili (N. meningitidis va N. gonorrhoeae) bir-biriga botiq tomoni bilan qaragan loviya yoki kofe donasi shaklidagi Gr− diplokokklardir.",
        highlights: [
          "Ikkalasi ham oksidaza-musbat (+) va katalaza-musbat (+), qat’iy aerob/kapnofil (5–10% CO₂)",
          "Oddiy MPAdagi o‘smaydi — faqat shokoladli, zardobli yoki Tayer-Martin (selektiv) agarda o‘sadi",
          "Tashqi muhitda o‘ta beqaror (sovuqda va quriganda bir necha daqiqada halok bo‘ladi) → likvor va surtmani 37°C termosda zudlik bilan 30–60 daqiqada yetkazish shart!",
        ],
      },
      {
        heading: "9.3. Meningokokk (Neisseria meningitidis) va meningokokk infeksiyasi",
        content:
          "Antroponoz havo-tomchi infeksiya; aksariyat hollarda sog‘lom burun-halqum tashuvchiligi (5–15%) yoki nazofaringit ko‘rinishida kechadi, ammo qonga o‘tsa hayotga xavfli shakllarni beradi.",
        highlights: [
          "Polisaxarid kapsula bo‘yicha 13 seroguruh, asosiylari: A, B, C, W-135, Y (glyukoza + maltoza parchalaydi)",
          "Yiringli meningit: keskin bosh og‘rig‘i, qusish, bo‘yin mushaklari rigidligi, Kernig va Brudzinskiy belgilari",
          "Meningokokkemiya (sepsis): endotoksin (LOS) tufayli oyoq-qo‘l va dumbada noto‘g‘ri yulduzsimon gemorragik toshmalar (stakan testi — bosganda oqarmaydi!)",
          "Uoterxaus-Fridriksen sindromi: buyrak usti bezlariga qon quyilishi bilan kechuvchi yashin tezligidagi endotoksik shok",
        ],
      },
      {
        heading: "9.4. Gonokokk (Neisseria gonorrhoeae) va gonoreya",
        content:
          "Faqat odamda uchraydigan, asosan jinsiy yo‘l bilan yuqadigan (antroponoz) infeksiya qo‘zg‘atuvchisi. Kapsulasi yo‘q, lekin adgeziya va antigen o‘zgaruvchanligini ta’minlovchi kuchli pililarga ega.",
        highlights: [
          "Biokimyoviy farqi: faqat glyukozani parchalaydi (maltoza −)",
          "Mikroskopiyada xarakterli manzara: neytrofil leykotsitlar sitoplazmasi ichida joylashgan Gr− loviyasimon diplokokklar (tugallanmagan fagotsitoz)",
          "Erkaklarda o‘tkir yiringli uretrit; ayollarda 50–80% belgisiz kechib, kichik chanoq yallig‘lanishi va bepushtlikka olib keladi",
          "Chaqaloqlar blennoreyasi (tug‘ruq yo‘lidan yuqib ko‘rlikka olib kelishi mumkin) — Matveyev-Krede profilaktikasi (tug‘ilganda ko‘zga antibakterial tomchi/malham)",
          "Pili antigenlari doim o‘zgarib turgani uchun barqaror immunitet va vaksina shakllanmaydi; zamonaviy tashxis — PZR (NAAT)",
        ],
      },
    ],
    comparisonTable: {
      title: "Meningokokk va gonokokkning qiyosiy tavsifi",
      columns: ["Belgi", "Neisseria meningitidis", "Neisseria gonorrhoeae"],
      rows: [
        [
          "Morfologiya va Gram",
          "Gr− loviyasimon diplokokk",
          "Gr− loviyasimon diplokokk (leykotsit ichida)",
        ],
        [
          "Kapsula",
          "Mavjud (A, B, C, W-135, Y seroguruhlar)",
          "Yo‘q (asosiy omil — o‘zgaruvchan pili)",
        ],
        [
          "Uglevodlarni parchalashi",
          "Glyukoza (+) va Maltoza (+)",
          "Faqat Glyukoza (+), Maltoza (−)",
        ],
        ["Yuqish mexanizmi", "Havo-tomchi", "Jinsiy yo‘l (chaqaloqlarda tug‘ruq yo‘li)"],
        [
          "Asosiy klinik shakllar",
          "Nazofaringit, yiringli meningit, meningokokkemiya",
          "Uretrit, servitsit, bepushtlik, blennoreya",
        ],
        [
          "Vaksina profilaktikasi",
          "Mavjud (MenACWY, MenB)",
          "Mavjud emas (antigen o‘zgaruvchanligi)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "VRE (Vancomycin-Resistant Enterococci)",
        definition:
          "Zaxira antibiotigi hisoblangan vankomitsinga chidamlilik kasb etgan va kasalxona infeksiyalarida xavfli bo‘lgan enterokokk shtammlari.",
      },
      {
        term: "Oksidaza sinamasi",
        definition:
          "Sitoxrom-c-oksidaza fermentini aniqlovchi tezkor test; Neisseria va Pseudomonas larda musbat (+, binafsha rang).",
      },
      {
        term: "Meningokokkemiya",
        definition:
          "Meningokokkning qonga o‘tishi va endotoksin ta’sirida yulduzsimon gemorragik toshmalar hamda shok bilan kechuvchi og‘ir sepsis shakli.",
      },
      {
        term: "Tugallanmagan fagotsitoz",
        definition:
          "Gonokokklarning neytrofil leykotsitlar tomonidan yutilib, ammo ichida parchalanmasdan tirik saqlanishi (diagnostik belgi).",
      },
      {
        term: "Matveyev-Krede profilaktikasi",
        definition:
          "Yangi tug‘ilgan chaqaloqlarda gonokokkli ko‘z yallig‘lanishi (blennoreya) va ko‘rlikning oldini olish uchun tug‘ruqdan so‘ng darhol ko‘zga antiseptik/antibiotik tomizish.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Meningitga shubha qilingan bemordan olingan orqa miya suyuqligini (likvor) nima uchun muzlatgichga qo‘yish qat’iyan man etiladi?",
        answer:
          "Meningokokk past haroratda tez nobud bo‘lib autolizga uchraydi; shuning uchun likvor 37°C termosda iliq holda 30–60 daqiqa ichida laboratoriyaga yetkazilishi shart.",
      },
      {
        question:
          "Laboratoriyada meningokokk va gonokokkni qaysi oddiy biokimyoviy sinama bilan farqlash mumkin?",
        answer:
          "Uglevodlarni parchalash testi: meningokokk ham glyukozani, ham maltozani parchalaydi; gonokokk esa faqat glyukozani parchalaydi.",
      },
      {
        question:
          "Enterokokklar qaysi ekstremal sharoitlarga chidamliligi bilan streptokokklardan ajralib turadi?",
        answer:
          "Enterokokklar 6,5% NaCl, 40% o‘t, pH 9,6 muhitida o‘sa oladi hamda 60°C da 30 daqiqa qizdirishga chidamli.",
      },
    ],
    keyTerms: [
      "enterokokk",
      "VRE",
      "Neisseria",
      "meningokokk",
      "meningokokkemiya",
      "gonokokk",
      "blennoreya",
      "oksidaza",
      "shokoladli agar",
      "Uoterxaus-Fridriksen",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/09-mavzu_Enterokokklar_va_grammanfiy_kokklar_6df54d07.pdf",
    pdfTitle: "9-mavzu: Enterokokklar va gram-manfiy kokklar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "9-mavzu: Enterokokklar va gram-manfiy kokklar (Ma’ruza matni)",
        url: "/assets/aistudio/09-mavzu_Enterokokklar_va_grammanfiy_kokklar_6df54d07.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-10",
    order: 10,
    code: "10",
    topicLabel: "10-mavzu",
    module: "II bo‘lim: Patogen kokklar va enterobakteriyalar",
    title: "Esherixiylar, salmonellalar, qorin tifi va paratif qo‘zg‘atuvchilari",
    syllabusPoints: [
      "Enterobacteriaceae oilasining umumiy tavsifi: Gr− tayoqchalar, oksidaza−, katalaza+, glyukoza+, O/H/K/Vi antigenlar va differensial jadval",
      "Escherichia coli: normal ichak florasidagi o‘rni (K, B vitaminlari), Endo muhitida metall yaltiroqli qizil koloniya, diareyagen shtammlar (ETEC, EPEC, EIEC, EHEC O157:H7 → GUS) va siydik yo‘llari infeksiyasi (70–80%)",
      "Salmonella avlodi: laktoza−, H₂S+, harakatchan, Kaufman-Uayt tasnifi (2500+ serovar), Vi-antigen",
      "Qorin tifi (S. Typhi) va paratiflar A/B: antroponoz, Peyer pilakchalari patogenezi, bakteriemiya, 8–10-kun rozeola, 3-hafta yara/perforatsiya, 3–5% surunkali tashuvchilik («Tif Meri»)",
      "Zoonoz salmonellyozlar (regidratatsiya asosiy davo) va qorin tifining haftalar bo‘yicha bosqichma-bosqich tashxisi (gemokultura → Vidal reaksiyasi → koprokultura)",
    ],
    studyNotes:
      "Qorin tifi tashxisi haftaga qarab o‘zgaradi: 1-hafta — gemokultura (o‘t buloni/Rappoport), 2-haftadan — Vidal serologik reaksiyasi (1:200, juft zardobda 4× o‘sish), 3-hafta — koprokultura va urokultura. EHEC O157:H7 da antibiotik berish GUS xavfini oshirgani uchun man etiladi!",
    overview:
      "Enterobacteriaceae oilasi odam va hayvonlar ichagida yashovchi keng gram-manfiy tayoqchalar guruhi bo‘lib, kommensal E. coli dan tortib o‘ta xavfli qorin tifi (Salmonella enterica serovar Typhi) va oziq-ovqat salmonellyozlari qo‘zg‘atuvchilarigacha o‘z ichiga oladi. Ushbu ma’ruza ularning antigen tuzilishi, diareyagen patovarlar farqi, qorin tifi patogenezi va bosqichma-bosqich laboratoriya tashxisini tizimli tushuntiradi.",
    sections: [
      {
        heading: "10.1. Enterobacteriaceae oilasining umumiy belgilari va antigenlari",
        content:
          "Barcha enterobakteriyalar — sporasiz Gr− tayoqchalar, fakultativ anaerob, oksidaza-manfiy (−), katalaza-musbat (+), glyukozani parchalaydi va nitratlarni nitritlarga qaytaradi.",
        highlights: [
          "O-antigen (somatik, LPS) — issiqqa chidamli, seroguruhni belgilaydi",
          "H-antigen (xivchin oqsili) — termolabil, harakatchan turlarda (Shigella va Klebsiella da yo‘q!)",
          "K-antigen (kapsula/yuzaki) — qorin tifi tayoqchasida virulentlik Vi-antigeni ko‘rinishida",
          "Differensial kalit: E. coli laktoza (+), Salmonella va Shigella laktoza (−); Salmonella H₂S (+) va harakatchan, Shigella H₂S (−) va harakatsiz",
        ],
      },
      {
        heading: "10.2. Escherichia coli: normal kommensal va patogen shtammlar",
        content:
          "Sog‘lom ichakda E. coli patogenlarga qarshi antagonizm ko‘rsatib, K va B guruh vitaminlarini sintezlaydi; ammo ichakdan tashqariga chiqsa (siydik yo‘llari infeksiyasining 70–80%) yoki patogen shtammlar tushsa kasallik chaqiradi.",
        highlights: [
          "ETEC (enterotoksigen) — «sayohatchilar diareyasi», vaboga o‘xshash suvli ich ketish",
          "EPEC (enteropatogen) — 1 yoshgacha go‘daklarda og‘ir enterit",
          "EIEC (enteroinvaziv) — dizenteriyaga o‘xshash qonli-shilliq ich ketish",
          "EHEC (enterogemorragik, O157:H7) — Shiga-simon verotoksin; gemolitik-uremik sindrom (GUS — o‘tkir buyrak yetishmovchiligi) chaqiradi; antibiotik berish toksin chiqishini kuchaytirgani uchun MAN ETILADI!",
        ],
      },
      {
        heading: "10.3. Qorin tifi (Salmonella Typhi) va paratiflar",
        content:
          "Qorin tifi — faqat odamdan odamga (antroponoz) fekal-oral (asosan suv) yo‘l bilan yuqadigan tizimli infeksiya. Kaufman-Uayt sxemasida 2500 dan ortiq salmonella serovari bor, lekin qorin tifini S. Typhi chaqiradi.",
        highlights: [
          "Patogenez bosqichlari: ingichka ichak Peyer pilakchalarida ko‘payish → qonga o‘tish (bakteriemiya, 1-hafta) → jigar/taloq/o‘t pufagiga tarqalish → 8–10-kuni qorin terisida rozeola toshmalari → o‘t orqali ichakka qaytib 3-haftada allergik nekroz, yara, qon ketish yoki perforatsiya",
          "3–5% tuzalgan bemorlarda o‘t pufagida umrbod bakteriya tashuvchilik qoladi (mashhur tarixiy misol — «Tif Meri»)",
          "Oziq-ovqat salmonellyozlari (S. Typhimurium, S. Enteritidis) — zoonoz (tuxum, parranda go‘shti); asosiy davo — regidratatsiya (asoratsiz shaklda antibiotik tashuvchilikni uzaytiradi)",
        ],
      },
      {
        heading: "10.4. Qorin tifining haftalar bo‘yicha laboratoriya tashxisi",
        content:
          "Qorin tifi patogenezi dinamik bo‘lgani uchun material tanlash kasallik haftasiga bog‘liq.",
        highlights: [
          "1-hafta (eng aniq erta tashxis): Gemokultura — 10 ml qonni 100 ml o‘t buloni (Rappoport muhiti) ga ekish (bakteriemiya davri)",
          "2-haftadan boshlab: Serologik Vidal agglyutinatsiya reaksiyasi (diagnostik titr ≥1:200; eng ishonchlisi — juft zardobda titrning 4 baravar o‘sishi) va RNGA",
          "3-haftadan boshlab: Koprokultura (najas) va urokultura (siydik) — Endo/Ploskirev/vismut-sulfit agarga ekish",
          "Surunkali tashuvchilarni aniqlash: qonda Vi-antitanalarni (RNGA) topish va o‘t suyuqligini ekish",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy enterobakteriyalar va qorin tifi/salmonellyozning qiyosiy jadvali",
      columns: [
        "Belgi",
        "E. coli",
        "Salmonella Typhi (qorin tifi)",
        "Salmonella spp. (salmonellyoz)",
      ],
      rows: [
        [
          "Laktozani parchalash",
          "Musbat (+) — Endo qizil",
          "Manfiy (−) — Endo rangsiz",
          "Manfiy (−) — Endo rangsiz",
        ],
        ["H₂S (vodorod sulfid)", "Manfiy (−)", "Kuchsiz musbat (+)", "Kuchli musbat (+)"],
        [
          "Harakatchanlik",
          "Harakatchan (peritrix)",
          "Harakatchan (peritrix)",
          "Harakatchan (peritrix)",
        ],
        [
          "Infeksiya manbai",
          "Odam/hayvon (kommensal/patovar)",
          "Faqat odam (antroponoz)",
          "Hayvonlar, tuxum, parranda (zoonoz)",
        ],
        [
          "Bakteriemiya va rozeola",
          "Odatda yo‘q",
          "Doimiy (1-hafta gemokultura)",
          "Kuzatilmaydi (o‘tkir gastroenterit)",
        ],
        [
          "Asosiy davo yondashuvi",
          "Sezgirlikka ko‘ra (EHEC da yo‘q!)",
          "Antibiotikoterapiya shart",
          "Regidratatsiya (suyuqlik tiklash)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "EHEC O157:H7 va GUS",
        definition:
          "Shiga-simon toksin ishlab chiqarib, qonli diareya va o‘tkir buyrak yetishmovchiligi (gemolitik-uremik sindrom) chaqiruvchi E. coli shtammi.",
      },
      {
        term: "Kaufman-Uayt tasnifi",
        definition:
          "Salmonellalarni O-somatik va H-xivchin antigenlari kombinatsiyasi asosida 2500 dan ortiq serovarga ajratuvchi antigen sxemasi.",
      },
      {
        term: "Vidal reaksiyasi",
        definition:
          "Qorin tifi va paratiflarni 2-haftadan boshlab O- va H-diagnostikumlar bilan aniqlovchi serologik agglyutinatsiya reaksiyasi.",
      },
      {
        term: "Vi-antigen",
        definition:
          "Qorin tifi tayoqchasining yuzaki kapsulasimon virulentlik antigeni; surunkali tashuvchilarni Vi-RNGA orqali aniqlashda ishlatiladi.",
      },
      {
        term: "Peyer pilakchalari",
        definition:
          "Ingichka ichak devoridagi limfoid tuzilmalar bo‘lib, qorin tifida birlamchi ko‘payish va 3-haftada yara/perforatsiya o‘chog‘iga aylanadi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Qorin tifiga shubha qilingan bemor kasallikning 4-kunida murojaat qilsa, eng samarali laboratoriya usuli qaysi?",
        answer:
          "1-haftada bakteriemiya avjida bo‘lgani uchun gemokultura (qonni o‘tli bulon / Rappoport muhitiga ekish) eng aniq usuldir; Vidal reaksiyasi hali manfiy bo‘ladi.",
      },
      {
        question: "Nima uchun EHEC O157:H7 infeksiyasida antibiotik buyurish xavfli hisoblanadi?",
        answer:
          "Antibiotiklar bakteriyalarning ommaviy lizisiga va profag induksiyasiga sabab bo‘lib, qonga ko‘p miqdorda Shiga-toksin ajralishini hamda gemolitik-uremik sindrom (GUS) xavfini keskin oshiradi.",
      },
      {
        question:
          "Surunkali qorin tifi tashuvchisi («Tif Meri» fenomeni) qayerda bakteriyani saqlaydi va u qanday aniqlanadi?",
        answer:
          "S. Typhi o‘t pufagida uzoq yillar saqlanadi; tashuvchini aniqlash uchun qonda Vi-antitanalar (RNGA) tekshiriladi va najas/o‘t ekiladi.",
      },
    ],
    keyTerms: [
      "Enterobacteriaceae",
      "E. coli",
      "EHEC O157:H7",
      "GUS",
      "Salmonella Typhi",
      "qorin tifi",
      "Kaufman-Uayt",
      "gemokultura",
      "Vidal reaksiyasi",
      "Vi-antigen",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/10-mavzu_Esherixiylar_va_salmonellalar_qorin_tifi_va__6bf5bbb6.pdf",
    pdfTitle: "10-mavzu: Esherixiylar, salmonellalar, qorin tifi va paratiflar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "10-mavzu: Esherixiylar, salmonellalar, qorin tifi va paratiflar (Ma’ruza matni)",
        url: "/assets/aistudio/10-mavzu_Esherixiylar_va_salmonellalar_qorin_tifi_va__6bf5bbb6.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-11",
    order: 11,
    code: "11",
    topicLabel: "11-mavzu",
    module: "II bo‘lim: Patogen kokklar va enterobakteriyalar",
    title:
      "Shigellalar – dizenteriya qo‘zg‘atuvchisi, klebsiyellalar, vulgar proteylar, enterokolit iyersiniyalar",
    syllabusPoints: [
      "Shigella avlodi (S. dysenteriae, S. flexneri, S. boydii, S. sonnei): harakatsizligi, H₂S−, laktoza−, past infeksion doza (10–100 hujayra) va Shiga-toksin",
      "Bakterial dizenteriya (shigellyoz): yo‘g‘on ichak epiteliy invaziyasi, tenezmlar, qonli-shilliq najas, koprokultura tashxisi",
      "Klebsiyellalar (K. pneumoniae — Fridlender tayoqchasi, K. ozaenae, K. rhinoscleromatis): qalin shilliq kapsula, harakatsiz, kasalxona pnevmoniyasi va ESBL/KPC chidamlilik",
      "Proteylar (Proteus vulgaris, P. mirabilis): peritrix harakatchanlik, H-shaklda o‘rmalab o‘sish (Shukevich usuli), kuchli ureaza (buyrak toshlari)",
      "Enterokolit iyersiniyalar (Yersinia enterocolitica, Y. pseudotuberculosis): psixrofillik (muzlatgichda +4°C da ko‘payish!), psevdoappenditsit va «sovuqda boyitish» usuli",
    ],
    studyNotes:
      "Shigella harakatsiz va H₂S− (salmonelladan farqi); Klebsiella qalin shilliq kapsulali va harakatsiz; Proteus agarda to‘lqinsimon o‘rmalab o‘sadi (Shukevich) va kuchli ureaza+; Y. enterocolitica muzlatgichda (+4°C) ham ko‘payadi!",
    overview:
      "Ushbu ma’ruza Enterobacteriaceae oilasining to‘rt muhim guruhini qamrab oladi: obligat patogen dizenteriya qo‘zg‘atuvchilari (Shigella), kapsulali kasalxona patogenlari (Klebsiella), o‘rmalab o‘suvchi va siydik toshi chaqiruvchi proteylar (Proteus) hamda sovuqda ko‘payish qobiliyatiga ega zoonoz enterokolit qo‘zg‘atuvchilari (Yersinia enterocolitica).",
    sections: [
      {
        heading: "11.1. Shigellalar va bakterial dizenteriya",
        content:
          "K. Shiga (1898) kashf etgan Shigella avlodi — faqat odamda kasallik chaqiruvchi (antroponoz) harakatsiz, kapsulasiz, laktoza− (S. sonnei kech parchalaydi) va H₂S− tayoqchalardir. Xivchin yo‘qligi uchun faqat O-antigeni bor.",
        highlights: [
          "4 turi: S. dysenteriae (eng og‘ir — kuchli Shiga-ekzotoksin), S. flexneri (ko‘p tarqalgan), S. boydii, S. sonnei (sut mahsulotlari orqali)",
          "O‘ta past infeksion doza: kasallik boshlanishi uchun bor-yo‘g‘i 10–100 ta bakteriya kifoya («kir qo‘llar kasalligi»)",
          "Patogenez: yo‘g‘on ichak epiteliy hujayralariga kirib ko‘payadi, eroziya va yara hosil qiladi; qonga deyarli o‘tmaydi (bakteriemiya yo‘q)",
          "Klinik triada: qorinning chap pastki qismida sanchiq, og‘riqli yolg‘on chaqiriqlar (tenezm) va kam-kam qonli-shilliq najas («rektal tupuk»)",
        ],
      },
      {
        heading: "11.2. Klebsiyellalar (K. pneumoniae va b.)",
        content:
          "Klebsiyellalar qalin polisaxarid kapsulali, harakatsiz, laktoza+ Gr− tayoqchalar bo‘lib, oziqa muhitida yirik, cho‘ziluvchan shilliq (M-shakl) koloniyalar beradi.",
        highlights: [
          "K. pneumoniae (Fridlender tayoqchasi): og‘ir destruktiv pnevmoniya («malina jelesi» balg‘am), kasalxona sepsisi, siydik yo‘llari infeksiyasi",
          "Zamonaviy xavfi: ESBL va karbapenemaza (KPC) ishlab chiqaruvchi polirezistent shtammlar",
          "K. ozaenae — ozena (badbo‘y tumov); K. rhinoscleromatis — rinoskleroma (burun-halqum granulomasi)",
        ],
      },
      {
        heading: "11.3. Proteylar (Proteus vulgaris va P. mirabilis)",
        content:
          "Proteylar kuchli peritrix xivchinlarga ega bo‘lib, nam zich agarda parda shaklida butun kosachani qoplab «o‘rmalab o‘sish» (H-shakl, Shukevich fenomeni) xususiyatiga ega.",
        highlights: [
          "Kuchli ureaza fermenti: siydikdagi mochevinani ammiakka parchalab siydikni ishqoriylashtiradi → struvit buyrak toshlari hosil bo‘lishiga olib keladi",
          "O‘rmalab o‘sishni to‘xtatish (O-shakl olish) uchun agarga 3% agar, o‘t tuzlari yoki fenol qo‘shiladi",
          "Veyl-Feliks reaksiyasida P. vulgaris OX19, OX2, OXK shtammlari rikketsiozlarga qarshi serologik tashxisda ishlatiladi (antigen o‘xshashligi)",
        ],
      },
      {
        heading: "11.4. Enterokolit iyersiniyalar (Y. enterocolitica va Y. pseudotuberculosis)",
        content:
          "Zoonoz ichak infeksiyalari qo‘zg‘atuvchilari; asosiy rezervuari — kemiruvchilar, cho‘chqalar va sabzavot omborxonalari.",
        highlights: [
          "Psixrofillik — noyob xususiyati: +4°C muzlatgich haroratida ham ko‘paya oladi («muzlatgich kasalligi» — saqlangan salat, karam, sut mahsulotlari)",
          "Haroratga bog‘liq harakatchanlik: 22–25°C da harakatchan, 37°C da harakatsiz!",
          "Klinikasi: enterokolit, mezadenit (ko‘pincha o‘tkir appenditsitni taqlid qiladi — «psevdoappenditsit»), keyinchalik reaktiv artrit",
          "Laboratoriya usuli: «sovuqda boyitish» (materialni +4°C da fosfat buferda saqlash — boshqa flora nobud bo‘ladi, iyersiniya ko‘payadi)",
        ],
      },
    ],
    comparisonTable: {
      title: "Shigella, Klebsiella, Proteus va Yersinia enterocolitica qiyosiy jadvali",
      columns: ["Belgi", "Shigella", "Klebsiella", "Proteus", "Y. enterocolitica"],
      rows: [
        [
          "Harakatchanlik",
          "Harakatsiz (−)",
          "Harakatsiz (−)",
          "Juda faol (o‘rmalab)",
          "25°C (+), 37°C (−)",
        ],
        ["Kapsula", "Yo‘q", "Qalin shilliq kapsula", "Yo‘q", "Yo‘q"],
        ["Laktoza", "Manfiy (−)", "Musbat (+)", "Manfiy (−)", "Manfiy (−)"],
        ["Ureaza", "Manfiy (−)", "Sekin musbat (+)", "Kuchli tez musbat (+++)", "Musbat (+)"],
        ["H₂S hosil qilish", "Manfiy (−)", "Manfiy (−)", "Musbat (+)", "Manfiy (−)"],
        [
          "O‘ziga xos belgisi",
          "Tenezm, Shiga-toksin, 10–100 doza",
          "Shilliq koloniya, ESBL/KPC",
          "Shukevich o‘sishi, struvit tosh",
          "+4°C da o‘sadi, psevdoappenditsit",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Shiga-toksin",
        definition:
          "Shigella dysenteriae 1-tipi ajratadigan, ichak va buyrak endoteliy hujayralarida 60S ribosomani bloklovchi kuchli ekzotoksin.",
      },
      {
        term: "Tenezm",
        definition:
          "Bakterial dizenteriyaga xos yo‘g‘on ichakning og‘riqli, samarasiz (yolg‘on) hojat chaqiriqlari.",
      },
      {
        term: "Shukevich usuli (o‘rmalab o‘sish)",
        definition:
          "Proteylarni aniqlash uchun qiya agar kondensat suviga ekilganda bakteriyaning butun agar yuzasi bo‘ylab parda bo‘lib yuqoriga o‘rmalab chiqishi.",
      },
      {
        term: "KPC / ESBL Klebsiella",
        definition:
          "Keng spektrli beta-laktamazalar va karbapenemazalar ishlab chiqarib, kasalxona sharoitida ko‘pchilik antibiotiklarga chidamli bo‘lgan Klebsiella shtammlari.",
      },
      {
        term: "Sovuqda boyitish usuli",
        definition:
          "Yersinia enterocolitica ni ajratish uchun materialni +4°C da inkubatsiya qilish usuli.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Shigellalarni laboratoriya sinamalarida salmonellalardan qaysi ikki asosiy belgi bilan ajratasiz?",
        answer:
          "Shigellalar harakatsiz (xivchini yo‘q) va H₂S hosil qilmaydi; salmonellalar esa harakatchan va H₂S hosil qiladi.",
      },
      {
        question:
          "Proteus mirabilis keltirib chiqargan surunkali siydik yo‘llari infeksiyasida nima uchun buyrak toshlari paydo bo‘ladi?",
        answer:
          "Proteyning kuchli ureaza fermenti mochevinani ammiakka parchalab siydik pH ini ishqoriy tomonga suradi, natijada magniy-ammoniy fosfat (struvit) tuzlari cho‘kib tosh hosil qiladi.",
      },
      {
        question:
          "Nima uchun Yersinia enterocolitica infeksiyasini ko‘pincha «muzlatgich kasalligi» deb atashadi?",
        answer:
          "U psixrofil xususiyatga ega bo‘lib, +4°C muzlatgichda saqlangan sabzavot, salat va go‘sht-sut mahsulotlarida ham faol ko‘payib boradi.",
      },
    ],
    keyTerms: [
      "Shigella",
      "dizenteriya",
      "Shiga-toksin",
      "tenezm",
      "Klebsiella pneumoniae",
      "Proteus",
      "Shukevich usuli",
      "ureaza",
      "Yersinia enterocolitica",
      "psevdoappenditsit",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/11-mavzu_Shigellalar_klebsiyellalar_proteylar_va_iyer_40818e64.pdf",
    pdfTitle: "11-mavzu: Shigellalar, klebsiyellalar, proteylar va iyersiniyalar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "11-mavzu: Shigellalar, klebsiyellalar, proteylar va iyersiniyalar (Ma’ruza matni)",
        url: "/assets/aistudio/11-mavzu_Shigellalar_klebsiyellalar_proteylar_va_iyer_40818e64.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-12",
    order: 12,
    code: "12",
    topicLabel: "12-mavzu",
    module: "III bo‘lim: Xavfli infeksiyalar, anaeroblar va hujayra ichi parazitlar",
    title:
      "Ko‘k-yashil yiring tayoqchasi, vabo qo‘zg‘atuvchisi, toun va brutsellyoz qo‘zg‘atuvchilari",
    syllabusPoints: [
      "Ko‘k-yashil yiring tayoqchasi (Pseudomonas aeruginosa): obligat aerob, oksidaza+, piotsianin/pioverdin pigmenti, jasmin hidi, bioparda va kasalxona infeksiyalari",
      "Vabo vibrioni (Vibrio cholerae): vergulsimon monotrix, oksidaza+, O1 (klassik va El-Tor) va O139, ishqoriy pepton suvi (pH 8,5–9,0), xolerogen (cAMP)",
      "Vabo klinikasi («guruch qaynatmasi» najas, keskin suvsizlanish — ekssikoz), tezkor regidratatsiya, laboratoriya tashxisi va karantin profilaktikasi",
      "Toun qo‘zg‘atuvchisi (Yersinia pestis): bipolyar bo‘yaluvchi ovoid tayoqcha, tabiiy o‘choqli transmissiv infeksiya (burga — Xenopsylla cheopis), bubon, o‘pka va septik shakllari",
      "Brutsellyoz qo‘zg‘atuvchilari (B. melitensis, B. abortus, B. suis): zoonoz (xom sut, pishloq), to‘lqinsimon isitma, Rayt, Xeddelson reaksiyalari va Byurne teri-allergik sinamasi",
    ],
    studyNotes:
      "Vabo, toun va brutsellyoz alohida xavfli / zoonoz infeksiyalar sirasiga kiradi. Vaboda o‘lim sababi — gipovolemik shok, shuning uchun №1 davo regidratatsiya! Tounda bipolyar tayoqcha va burga yuqish mexanizmi; brutsellyozda Rayt/Xeddelson va Byurne sinamasi kalit hisoblanadi.",
    overview:
      "Ushbu mavzuda to‘rtta ulkan klinik va epidemiologik ahamiyatga ega gram-manfiy bakteriya ko‘rib chiqiladi: zamonaviy kasalxona infeksiyalarining ramzi — ko‘k-yashil yiring tayoqchasi, yetti pandemiya sababchisi — vabo vibrioni, o‘ta xavfli karantin infeksiyasi — toun qo‘zg‘atuvchisi hamda O‘zbekiston chorvachiligi va tibbiyoti uchun dolzarb zoonoz — brutsellyoz qo‘zg‘atuvchilari.",
    sections: [
      {
        heading: "12.1. Ko‘k-yashil yiring tayoqchasi (Pseudomonas aeruginosa)",
        content:
          "Pseudomonadaceae oilasiga mansub obligat aerob, oksidaza-musbat (+), monotrix harakatchan Gr− tayoqcha. Minimal ozuqada (hatto distillangan suv va ba’zi antiseptiklarda!) yashay oladi.",
        highlights: [
          "Xarakterli belgilari: piotsianin (ko‘k-yashil) va pioverdin (sariq-yashil fluoressent) pigmentlari, jasmin (gul) hidi",
          "Kasalxona (nozokomial) infeksiyalari: kuyish yaralari, kateter, O‘SV (IVL) pnevmoniyasi, mukovissidoz bemorlarda surunkali bronxit",
          "Chidamlilik sabablari: zich bioparda (biofilm), efflux nasoslari va tabiiy antibiotik rezistentligi",
        ],
      },
      {
        heading: "12.2. Vabo qo‘zg‘atuvchisi (Vibrio cholerae) va vabo kasalligi",
        content:
          "R. Kox (1883) kashf etgan, vergulsimon egilgan, bitta uzun xivchinli (monotrix — tezkor «chivin raqsi» harakati), oksidaza+, qat’iy ishqorsevar (pH 8,5–9,0) bakteriya.",
        highlights: [
          "Pandemik seroguruhlar: O1 (klassik va hozirgi 7-pandemiya El-Tor biovari) hamda O139 (Bengal)",
          "Xolerogen (ekzotoksin, CTXφ profag kodlaydi): enterotsitlarda adenilattsiklazani faollashtirib cAMP ni oshiradi → suv va Na⁺/Cl⁻/K⁺ ionlarining ichak bo‘shlig‘iga ommaviy oqib chiqishi",
          "Klinika: isitmasiz va og‘riqsiz «guruch qaynatmasi» ko‘rinishidagi suvli diareya va qusish, kuniga 10–20 litr suyuqlik yo‘qotish → og‘ir degidratatsiya va gipovolemik shok",
          "Tashxis va davo: ishqoriy pepton suvi (6–8 soatda moviy parda), TCBS agar (sariq koloniyalar); zudlik bilan oral/venoz regidratatsiya (Regidron, Trisol) + doksitsiklin",
        ],
      },
      {
        heading: "12.3. Toun qo‘zg‘atuvchisi (Yersinia pestis) va toun (o‘lat)",
        content:
          "A. Yersen (1894) kashf etgan, o‘ta xavfli karantin (1-guruh biologik xavf) zoonoz-transmissiv infeksiya qo‘zg‘atuvchisi. Tabiiy o‘choqlari (yumronqoziq, qumsichqon, sug‘ur) Markaziy Osiyoda ham mavjud.",
        highlights: [
          "Morfologiya: uchlaridan to‘q bo‘yaladigan (bipolyar — «to‘g‘nog‘ich» ko‘rinishli) ovoid Gr− tayoqcha, kapsulali, harakatsiz",
          "Yuqish: kasal kemiruvchi → burga (Xenopsylla cheopis) chaqishi (burga oshqozonida «toun tiqini»); o‘pka shaklida — odamdan odamga havo-tomchi!",
          "Klinik shakllari: bubon (limfa tugunlarining o‘ta og‘riqli shishi), o‘pka (qonli balg‘am, davosiz ~100% o‘lim) va septik (qora teri qon quyilishi — «Qora o‘lim»)",
          "Profilaktika: maxsus vaboga/tounga qarshi himoya kostyumi, karantin, EV tirik vaksinasi, streptomitsin/doksitsiklin",
        ],
      },
      {
        heading: "12.4. Brutsellyoz qo‘zg‘atuvchilari (Brucella avlodi)",
        content:
          "Mayda, harakatsiz, sekin o‘suvchi (2–4 hafta) Gr− kokkobakteriyalar; fakultativ hujayra ichi (makrofaglarda) parazitlari. Chorvachilik hududlarida muhim zoonoz.",
        highlights: [
          "Asosiy turlari: B. melitensis (qo‘y-echki — odam uchun eng og‘ir!), B. abortus (qoramol), B. suis (cho‘chqa)",
          "Yuqish: qaynatilmagan xom sut, brinza/pishloq (alimentar) va kasal hayvon tug‘rug‘iga yordam berishda (kontakt)",
          "Klinika: to‘lqinsimon (undulyatsiyalanuvchi) isitma, kuchli terlash, bo‘g‘im og‘riqlari, gepatoliyenal sindrom, surunkali kechishga moyillik",
          "Tashxis: Xeddelson (tezkor plastinkali) va Rayt (probirkali, ≥1:200) agglyutinatsiya reaksiyalari, Byurne teri-allergik sinamasi (brutsellin), PZR; profilaktika — sutni qaynatish/pasterizatsiya",
        ],
      },
    ],
    comparisonTable: {
      title: "P. aeruginosa, V. cholerae, Y. pestis va Brucella qiyosiy jadvali",
      columns: ["Belgi", "P. aeruginosa", "V. cholerae", "Y. pestis", "Brucella spp."],
      rows: [
        [
          "Shakl / Harakat",
          "Tayoqcha, monotrix",
          "Vergulsimon, monotrix",
          "Bipolyar ovoid, harakatsiz",
          "Mayda kokkobakteriya, harakatsiz",
        ],
        ["Oksidaza", "Musbat (+)", "Musbat (+)", "Manfiy (−)", "Musbat (+)"],
        [
          "Infeksiya turi",
          "Kasalxona (shartli patogen)",
          "Antroponoz (suv orqali)",
          "O‘ta xavfli tabiiy o‘choqli",
          "Zoonoz (sut, chorva)",
        ],
        [
          "Kalit omil / belgi",
          "Piotsianin, bioparda",
          "Xolerogen → cAMP, guruch najas",
          "Burga chaqishi, bubon/o‘pka",
          "Hujayra ichi, to‘lqinsimon isitma",
        ],
        [
          "Maxsus muhit / test",
          "Ko‘k-yashil pigment, jasmin",
          "Ishqoriy pepton suvi, TCBS",
          "1-guruh BSL-3, bipolyar bo‘yash",
          "Rayt, Xeddelson, Byurne sinamasi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Piotsianin",
        definition:
          "Pseudomonas aeruginosa ishlab chiqaradigan, yiring va oziqa muhitini ko‘k-yashil rangga bo‘yovchi pigment va virulentlik omili.",
      },
      {
        term: "Xolerogen",
        definition:
          "Vabo vibrionining AB-ekzotoksini; ichak hujayralarida cAMP ni keskin oshirib halokatli suvli diareya chaqiradi.",
      },
      {
        term: "Bubon",
        definition:
          "Toun qo‘zg‘atuvchisi burga chaqqan joydan limfa orqali yaqin limfa tuguniga o‘tganda hosil bo‘ladigan yirik, o‘ta og‘riqli yallig‘lanish shishi.",
      },
      {
        term: "Rayt va Xeddelson reaksiyalari",
        definition:
          "Brutsellyozni aniqlash uchun qo‘llaniladigan probirkali (miqdoriy) va shisha plastinkali (tezkor) serologik agglyutinatsiya usullari.",
      },
      {
        term: "Byurne sinamasi",
        definition:
          "Teri ichiga brutsellin yuborib, 24–48 soatdan keyin sekin tipdagi allergik reaksiyani baholash orqali brutsellyozni aniqlash testi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Vabo kasalligida bemor hayotini saqlab qoluvchi birinchi raqamli davo chorasi nima va nima uchun?",
        answer:
          "Zudlik bilan yo‘qotilgan suv va elektrolitlarni (tuzlarni) og‘iz orqali yoki vena ichiga quyish (regidratatsiya), chunki vaboda bemor toksin chaqirgan gipovolemik shok va suvsizlanishdan nobud bo‘ladi.",
      },
      {
        question:
          "Nima uchun toun kasalligining o‘pka shakli bubon shaklidan epidemiologik jihatdan ancha xavfli?",
        answer:
          "Bubon shakli asosan burga chaqishi bilan yuqsa, o‘pka shaklida bemor yo‘talganda balg‘am tomchilari bilan to‘g‘ridan-to‘g‘ri havo-tomchi yo‘l orqali atrofdagilarga tez yuqtiradi.",
      },
      {
        question: "Brutsellyozning oldini olishda oddiy iste’molchi uchun eng samarali chora nima?",
        answer:
          "Xom sutni albatta qaynatish yoki pasterizatsiya qilish, yangi (yetilmagan) uy pishlog‘i va qaymoqni tekshirilmagan chorvadan xomligicha iste’mol qilmaslik.",
      },
    ],
    keyTerms: [
      "Pseudomonas aeruginosa",
      "piotsianin",
      "Vibrio cholerae",
      "xolerogen",
      "El-Tor",
      "Yersinia pestis",
      "toun",
      "bubon",
      "Brucella",
      "Rayt reaksiyasi",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/12-mavzu_Ko_kyashil_yiring_tayoqchasi_vabo_toun_va_br_aa6f1b11.pdf",
    pdfTitle: "12-mavzu: Ko‘k-yashil yiring tayoqchasi, vabo, toun va brutsellyoz (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "12-mavzu: Ko‘k-yashil yiring tayoqchasi, vabo, toun va brutsellyoz (Ma’ruza matni)",
        url: "/assets/aistudio/12-mavzu_Ko_kyashil_yiring_tayoqchasi_vabo_toun_va_br_aa6f1b11.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-13",
    order: 13,
    code: "13",
    topicLabel: "13-mavzu",
    module: "III bo‘lim: Xavfli infeksiyalar, anaeroblar va hujayra ichi parazitlar",
    title: "Sil qo‘zg‘atuvchisi, patogen anaeroblar, qoqshol va gazli gangrena qo‘zg‘atuvchilari",
    syllabusPoints: [
      "Mikobakteriyalar (M. tuberculosis — Kox tayoqchasi 1882, M. bovis): lipid-mum qavat (mikol kislotalar), kislotaga chidamlilik, Sil-Nilsen usuli va kord-omil",
      "Sil kasalligi: havo-tomchi yuqish, granuloma (tuberkula), Levenshteyn-Yensen muhiti (3–6 hafta), Mantu sinamasi / Diaskintest / GeneXpert, BSJ vaksinasi va MDR-TB",
      "Patogen obligat anaeroblar (Clostridium avlodi) umumiy tavsifi: spora hosil qilish, tuproq rezervuari, anaerostat va Kitt-Tarossi muhiti",
      "Qoqshol qo‘zg‘atuvchisi (C. tetani): terminal spora («baraban cho‘pi»), tetanospazmin (tormozlovchi neyronlarni bloklash), trizm, sardonik tabassum, opistotonus, AKDS/ADS-M va shoshilinch profilaktika",
      "Gazli gangrena qo‘zg‘atuvchilari (C. perfringens va b.): kapsulali harakatsiz yirik tayoqcha, α-toksin (lesitinaza), sutda «bo‘ronli ivish», krepitatsiya, jarrohlik + polivalent zardob",
    ],
    studyNotes:
      "Sil tayoqchasi lipidlarga (mikol kislotalar) boyligi uchun kislotaga chidamli va Sil-Nilsen usulida qizil bo‘yaladi. Qoqshol (C. tetani) «baraban cho‘pi» ko‘rinishida bo‘lib spastik tirishish (opistotonus) beradi; gazli gangrenada (C. perfringens) lesitinaza to‘qimalarni eritib gaz (krepitatsiya) to‘playdi.",
    overview:
      "Ushbu mavzuda ikki alohida xususiyatli gram-musbat tayoqchalar guruhi o‘rganiladi: hujayra devorida ko‘p miqdorda mikol kislotalari va mum saqlovchi sekin o‘suvchi mikobakteriyalar (sil qo‘zg‘atuvchisi) hamda kislorodsiz yara muhitida sporalardan unib chiqib halokatli ekzotoksinlar ajratuvchi patogen obligat anaerob klostridiyalar (qoqshol va gazli gangrena).",
    sections: [
      {
        heading: "13.1. Sil qo‘zg‘atuvchisi (Mycobacterium tuberculosis) xossalari",
        content:
          "1882-yil 24-martda Robert Kox kashf etgan (shu kun — Jahon silga qarshi kurash kuni). Odamda 90–95% holatni M. tuberculosis, qolgan qismini sut orqali yuqadigan M. bovis chaqiradi.",
        highlights: [
          "Hujayra devorining 40–60% i lipidlar va mikol kislotalardan iborat → kislota, ishqor, spirt va quritishga o‘ta chidamli (quruq balg‘amda oylab tirik qoladi)",
          "Gramda yomon bo‘yaladi — faqat Sil-Nilsen usulida qizdirib bo‘yaladi (ko‘k fonda qizil tayoqchalar)",
          "Kord-omil (tregaloza dimikolat) — bakteriyalarni arqonsimon («soch o‘rimi») bog‘lab, makrofag ichida fagolizosoma qo‘shilishini bloklaydi",
          "Sekin o‘sadi: generatsiya vaqti 14–24 soat; Levenshteyn-Yensen muhitida 3–6 haftada quruq «gulkaram» koloniyalar beradi",
        ],
      },
      {
        heading: "13.2. Sil tashxisi, davosi va profilaktikasi",
        content:
          "Sil infeksiyasi havo-tomchi yo‘l bilan yuqib, ko‘pincha latent (yashirin) holda saqlanadi va immunitet pasayganda (OIV, diabet, stress) faol tuberkulalarga aylanadi.",
        highlights: [
          "Tashxis: balg‘amni 3 marta Sil-Nilsen mikroskopiyasi, Levenshteyn-Yensen ekmasi, tezkor molekulyar GeneXpert MTB/RIF (2 soatda sil + rifampitsin chidamliligini aniqlaydi!)",
          "Skrining: Mantu teri-allergik sinamasi (tuberkulin), Diaskintest, IGRA (QuantiFERON)",
          "Davolash: kamida 6 oy 4 ta dori (izoniazid, rifampitsin, pirazinamid, etambutol) bilan uzluksiz DOTS sxemasi; buzilsa — MDR-TB (ko‘p dorilarga chidamli sil) rivojlanadi",
          "Profilaktika: chaqaloqlarga tug‘ruqxonada tirik susaytirilgan BSJ (BCG — Kalmett-Geren) vaksinasi",
        ],
      },
      {
        heading: "13.3. Qoqshol qo‘zg‘atuvchisi (Clostridium tetani)",
        content:
          "Obligat anaerob, peritrix Gr+ tayoqcha; uchki (terminal) dumaloq spora hosil qilib «baraban cho‘pi» shaklini oladi. Sporalari o‘g‘itlangan tuproqda o‘nlab yillar saqlanadi va chuqur iflos yaralarga tushganda unib chiqadi.",
        highlights: [
          "Tetanospazmin — tabiatdagi eng kuchli neyrotoksinlardan biri; nerv tolalari bo‘ylab orqa miyaga ko‘tarilib, tormozlovchi mediatorlar (glitsin, GAMK) ajralishini bloklaydi",
          "Klinik triada: chaynov mushaklari spazmi (trizm), yuz mushaklari tortishishi (sardonik tabassum) va butun tana yoydek egilishi (opistotonus); bemor hushida bo‘ladi, nafas mushaklari falajidan o‘lim xavfi yuqori",
          "Rejali profilaktika: AKDS / ADS-M tarkibidagi qoqshol anatoksini",
          "Jarohatlanganda shoshilinch profilaktika: yara ishlovi + qoqshol anatoksini + qoqsholga qarshi zardob/immunoglobulin (aktiv-passiv immunizatsiya)",
        ],
      },
      {
        heading: "13.4. Gazli gangrena qo‘zg‘atuvchilari (Clostridium perfringens)",
        content:
          "Tuproq bilan ifloslangan chuqur, ezilgan va kislorodsiz yaralarda rivojlanadigan yashin tezligidagi anaerob infeksiya (80% holatda C. perfringens, shuningdek C. novyi, C. septicum).",
        highlights: [
          "C. perfringens — yirik, harakatsiz (boshqa klostridiyalardan farqli!), organizmda kapsula hosil qiluvchi Gr+ tayoqcha",
          "Asosiy omil — α-toksin (lesitinaza / fosfolipaza C): hujayra membranalarini parchalab gemoliz va mushak nekrozini keltirib chiqaradi",
          "Klinika: kuchli shish, to‘qimalarda gaz to‘planishi (bosganda qor g‘irchillashi — krepitatsiya), tez intoksikatsiya",
          "Laboratoriya belgisi: lakmusli sutda 6–8 soatda gaz bilan «bo‘ronli ivish», Kitt-Tarossi muhitida gaz va loyqalanish; davo — shoshilinch keng jarrohlik (kislorod kiritish), giperbarik oksigenatsiya, polivalent zardob va penitsillin/metronidazol",
        ],
      },
    ],
    comparisonTable: {
      title: "M. tuberculosis, C. tetani va C. perfringens ning qiyosiy tavsifi",
      columns: [
        "Belgi",
        "M. tuberculosis",
        "C. tetani (qoqshol)",
        "C. perfringens (gazli gangrena)",
      ],
      rows: [
        [
          "Kislorodga munosabat",
          "Obligat aerob",
          "Obligat anaerob",
          "Obligat anaerob (aerotolerantroq)",
        ],
        [
          "Spora va shakli",
          "Spora yo‘q; ingichka tayoqcha",
          "Terminal spora («baraban cho‘pi»)",
          "Subterminal spora (muhitda kam), kapsulali",
        ],
        [
          "Harakatchanlik",
          "Harakatsiz",
          "Harakatchan (peritrix)",
          "Harakatsiz (klostridiyalar ichida istisno)",
        ],
        [
          "Asosiy patogen omil",
          "Mikol kislotalar, kord-omil",
          "Tetanospazmin (neyrotoksin)",
          "α-toksin (lesitinaza), kollagenaza, gaz",
        ],
        [
          "Asosiy davo / profilaktika",
          "DOTS (4 dori, 6 oy), BSJ",
          "AKDS anatoksin, qoqshol zardobi",
          "Jarrohlik tozalash, GBO, polivalent zardob",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Sil-Nilsen usuli",
        definition:
          "Kislotaga chidamli mikobakteriyalarni issiq karbol fuksin bilan bo‘yab, kislota bilan rangsizlantirib, metilen ko‘ki bilan kontrastlash usuli (qizil tayoqchalar ko‘k fonda).",
      },
      {
        term: "BSJ (BCG) vaksinasi",
        definition:
          "M. bovis ning 13 yil davomida kuchsizlantirilgan tirik shtammidan tayyorlangan, chaqaloqlarda silning og‘ir shakllaridan himoyalovchi vaksina.",
      },
      {
        term: "Tetanospazmin",
        definition:
          "C. tetani neyrotoksini; markaziy asab tizimidagi tormozlovchi neyronlarni (glitsin, GAMK) bloklab uzluksiz mushak tirishishini chaqiradi.",
      },
      {
        term: "Opistotonus va trizm",
        definition:
          "Qoqsholning klassik belgilari: jag‘ mushaklari qulflanib og‘iz ochilmasligi (trizm) va orqa mushaklar qisqarib tana yoy shaklida bukilishi (opistotonus).",
      },
      {
        term: "Krepitatsiya",
        definition:
          "Gazli gangrenada C. perfringens ajratgan gaz pufakchalarining teri osti va mushaklarda to‘planib, bosganda qor g‘irchillashiga o‘xshash ovoz berishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun sil qo‘zg‘atuvchisi oddiy dezinfektantlar va kislotalarga o‘ta chidamli hamda Gram usulida yaxshi bo‘yalmaydi?",
        answer:
          "Uning hujayra devori 40–60% gacha gidrofob lipidlar, mumlar va mikol kislotalardan iborat bo‘lib, oddiy suvli bo‘yoqlar va kimyoviy moddalarni o‘tkazmaydi.",
      },
      {
        question:
          "Chuqur iflos yara olgan bemor qoqsholga qarshi 10 yildan ortiq emlanmagan bo‘lsa, shoshilinch profilaktika qanday o‘tkaziladi?",
        answer:
          "Aktiv-passiv immunizatsiya qo‘llaniladi: bir vaqtning o‘zida (turli joylarga) qoqshol anatoksini (faol immunitet uyg‘otish uchun) va tayyor qoqsholga qarshi zardob yoki odam immunoglobulini (darhol toksinni neytrallash uchun) yuboriladi.",
      },
      {
        question:
          "Gazli gangrenani davolashda nima uchun jarohatni keng ochib kislorod kiritish (va giperbarik oksigenatsiya) hal qiluvchi rol o‘ynaydi?",
        answer:
          "C. perfringens obligat anaerob bo‘lgani uchun yuqori kislorod bosimi uning ko‘payishini va α-toksin (lesitinaza) sintezini keskin to‘xtatadi.",
      },
    ],
    keyTerms: [
      "Mycobacterium tuberculosis",
      "Sil-Nilsen",
      "Levenshteyn-Yensen",
      "BSJ",
      "MDR-TB",
      "Clostridium tetani",
      "tetanospazmin",
      "opistotonus",
      "Clostridium perfringens",
      "lesitinaza",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/13-mavzu_Sil_qo_zg_atuvchisi_patogen_anaeroblar_qoqsh_46977cbc.pdf",
    pdfTitle: "13-mavzu: Sil qo‘zg‘atuvchisi, qoqshol va gazli gangrena (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "13-mavzu: Sil qo‘zg‘atuvchisi, qoqshol va gazli gangrena (Ma’ruza matni)",
        url: "/assets/aistudio/13-mavzu_Sil_qo_zg_atuvchisi_patogen_anaeroblar_qoqsh_46977cbc.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-14",
    order: 14,
    code: "14",
    topicLabel: "14-mavzu",
    module: "III bo‘lim: Xavfli infeksiyalar, anaeroblar va hujayra ichi parazitlar",
    title:
      "Botulizm qo‘zg‘atuvchisi, zaxm qo‘zg‘atuvchisi, qaytalama tif va toshmali tif qo‘zg‘atuvchilari",
    syllabusPoints: [
      "Botulizm qo‘zg‘atuvchisi (Clostridium botulinum): «tennis raketkasi» subterminal spora, botulotoksin (A–G tiplar — tabiatdagi eng kuchli zahar), atsetilxolin blokadasi, ptoz/diplopiya/disfagiya, uy konservalari, neytralizatsiya sinamasi va polivalent zardob",
      "Spiroxetalar (Spirochaetales) umumiy tavsifi: ingichka buralgan shakl, o‘q iplari (endoflagellalar), qorong‘i maydon mikroskopiyasi va Romanovskiy-Gimza usuli",
      "Zaxm qo‘zg‘atuvchisi (Treponema pallidum): 8–12 tekis buram, sun’iy muhitda o‘smaydi, birlamchi (qattiq shankr), ikkilamchi (toshmalar), uchlamchi (gumma) va tug‘ma zaxm; Vasserman (RPR), RIBT, RIF, penitsillin",
      "Qaytalama tif qo‘zg‘atuvchilari (Borrelia recurrentis — bitli epidemik; B. duttonii va b. — kanali endemik): 3–8 notekis buram, antigen o‘zgaruvchanligi tufayli takroriy isitma xurujlari, qalin qon tomchisi",
      "Leptospirozlar (Leptospira interrogans): uchlari ilgaksimon («S/C» shakl), suv orqali zoonoz, sariqlik va buyrak-jigar shikastlanishi (Veyl kasalligi) hamda toshmali tifga kirish",
    ],
    studyNotes:
      "Botulotoksin — eng kuchli biologik zahar (spora 100°C da 5–6 soat chidaydi, lekin toksinning o‘zi 100°C da 10–15 daqiqa qaynatilganda to‘liq parchalanadi!). Zaxm (T. pallidum) qorong‘i maydonda ko‘riladi, penitsillinga mutlaqo sezgir.",
    overview:
      "Ushbu mavzuda tabiatdagi eng kuchli ekzotoksin bilan bog‘liq og‘ir oziq-ovqat zaharlanishi — botulizm (Clostridium botulinum) hamda alohida buralgan morfologik guruh — spiroxetalar keltirib chiqaradigan zaxm (Treponema pallidum), epidemik va endemik qaytalama tif (Borrelia) va leptospiroz (Leptospira) qo‘zg‘atuvchilari batafsil tahlil qilinadi.",
    sections: [
      {
        heading: "14.1. Botulizm qo‘zg‘atuvchisi (Clostridium botulinum)",
        content:
          "E. van Ermengem (1896) kashf etgan, obligat anaerob, peritrix Gr+ tayoqcha. Subterminal sporasi tufayli «tennis raketkasi» ko‘rinishiga ega. Sporalari o‘ta chidamli: 100°C da 5–6 soat, 120°C avtoklavda 20–30 daqiqa.",
        highlights: [
          "Botulotoksin (A, B, E tiplari odamda eng ko‘p): tabiatdagi eng kuchli biologik zahar! Nerv-mushak sinapslarida atsetilxolin ajralishini bloklab, bo‘shashgan (vyaliy) falaj chaqiradi (qoqsholdan teskari!)",
          "Xavfli manba: germetik yopilgan uy konservalari (qo‘ziqorin, bodring, pomidor, go‘sht-baliq — anaerob sharoitda spora unib toksin to‘playdi; ba’zan banka qopqog‘i shishadi — bombaj)",
          "Klinika (12–36 soatda): ko‘rish buzilishi (diplopiya — ikkilanish, ptoz — qovoq tushishi), yutish va gapirish qiyinlashuvi (disfagiya, afoniya), nafas mushaklari falaji; harorat odatda normal!",
          "Tashxis va davo: oq sichqonlarda botulotoksinni neytralizatsiya qilish biologik sinamasi; zudlik bilan polivalent (A+B+E) botulizmga qarshi zardob! Profilaktika: uy konservasini iste’moldan oldin 15–20 daqiqa qaynatish toksinni to‘liq yo‘qotadi",
        ],
      },
      {
        heading: "14.2. Zaxm qo‘zg‘atuvchisi (Treponema pallidum)",
        content:
          "F. Shaudin va E. Xoffman (1905) kashf etgan ingichka, 8–12 ta tekis buramli spiroxeta. Sun’iy oziqa muhitlarida o‘smaydi, Gramda bo‘yalmaydi (Romanovskiy-Gimzada och pushti — shuning uchun «oqish treponema»).",
        highlights: [
          "Tashqi muhitda o‘ta nozik; asosan jinsiy va vertikal (yo‘ldosh orqali — tug‘ma zaxm) yo‘l bilan yuqadi",
          "3 bosqichi: I davr (3 hafta inkubatsiya → og‘riqsiz qattiq shankr + limfadenit), II davr (6–8 haftadan so‘ng tana va kaft-tovonda rozeola-papula toshmalari — o‘ta yuqumli), III davr (yillardan keyin ichki a’zolar, aorta va miyada gumma — neyrosifilis)",
          "Tashxis: I davrda shankr suyuqligini qorong‘i maydon mikroskopiyasi; serologiya — notriponem (Vasserman, RPR — skrining) va spetsifik treponem testlari (RIF, RIBT, IFA, TPHA)",
          "Davolash: T. pallidum penitsillinga hali ham 100% sezgir (benzatin penitsillin G)",
        ],
      },
      {
        heading: "14.3. Qaytalama tif qo‘zg‘atuvchilari (Borrelia)",
        content:
          "Borreliyalar yirik, 3–8 ta notekis buramli spiroxetalar bo‘lib, Romanovskiy-Gimza usulida ko‘k-binafsha bo‘yaladi. Qon so‘ruvchi bo‘g‘imoyoqlilar orqali yuqadi.",
        highlights: [
          "Epidemik qaytalama tif (B. recurrentis): antroponoz, kiyim biti orqali (bit ezilganda gemolimfasi teri tirnalishiga tushadi)",
          "Endemik qaytalama tif (B. duttonii, B. persica): zoonoz, tabiiy o‘choqli, ornithodoros kanasi chaqishi orqali",
          "Takroriy isitma xurujlari mexanizmi: organizm birinchi avlod borreliyalarga antitana hosil qilganda, tirik qolgan qismi yuzaki oqsil antigenlarini o‘zgartirib yangi isitma to‘lqinini (3–5 marta) boshlaydi!",
          "Tashxis: aynan isitma xuruji paytida olingan qalin qon tomchisini Romanovskiy-Gimza bo‘yicha mikroskopiya qilish",
        ],
      },
      {
        heading: "14.4. Leptospirozlar (Leptospira interrogans)",
        content:
          "Leptospiralar juda mayda, ko‘p zich buramli, uchlari ilgakdek qayrilgan («S» yoki «C» harfi kabi) spiroxetalardir. Asosiy manba — kalamush va chorva hayvonlari siydigi bilan ifloslangan suv havzalari.",
        highlights: [
          "Yuqish: shikastlangan teri va shilliq qavatlar orqali iflos suvda cho‘milish yoki qishloq xo‘jaligi ishlarida",
          "Klinika: yuqori isitma, boldir mushaklarida kuchli og‘riq, jigar-buyrak shikastlanishi va sariqlik (og‘ir Veyl-Vasilyev kasalligi)",
          "Tashxis: qon/siydikni qorong‘i maydon mikroskopiyasi, mikroagglyutinatsiya reaksiyasi (RMA) va PZR",
        ],
      },
    ],
    comparisonTable: {
      title: "Botulizm va uchta asosiy patogen spiroxetaning qiyosiy jadvali",
      columns: [
        "Belgi",
        "C. botulinum",
        "Treponema pallidum",
        "Borrelia recurrentis",
        "Leptospira interrogans",
      ],
      rows: [
        [
          "Guruhi va shakli",
          "Gr+ spora («tennis raketkasi»)",
          "Spiroxeta (8–12 tekis buram)",
          "Spiroxeta (3–8 notekis buram)",
          "Spiroxeta (ilgakli uchlari)",
        ],
        [
          "Yuqish yo‘li",
          "Alimentar (uy konservalari)",
          "Jinsiy / vertikal (yo‘ldosh)",
          "Transmissiv (bit / kana)",
          "Suv / kontakt (hayvon siydigi)",
        ],
        [
          "Asosiy klinik belgi",
          "Ptoz, diplopiya, vyaliy falaj",
          "Qattiq shankr, toshma, gumma",
          "Takroriy isitma xurujlari",
          "Isitma, boldir og‘rig‘i, sariqlik",
        ],
        [
          "Asosiy tashxis",
          "Sichqonlarda neytralizatsiya",
          "Qorong‘i maydon, RPR, RIBT/RIF",
          "Isitmada qalin qon tomchisi",
          "RMA (mikroagglyutinatsiya), PZR",
        ],
        [
          "Asosiy davo",
          "Polivalent A+B+E zardob",
          "Penitsillin (100% sezgir)",
          "Doksitsiklin / penitsillin",
          "Penitsillin / doksitsiklin",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Botulotoksin",
        definition:
          "C. botulinum ajratadigan, nerv-mushak sinapslarida atsetilxolin chiqishini to‘sib bo‘shashgan falaj keltirib chiqaruvchi eng kuchli biologik zahar.",
      },
      {
        term: "Qattiq shankr",
        definition:
          "Birlamchi zaxmda qo‘zg‘atuvchi kirgan joyda paydo bo‘ladigan, tubi zich, chetlari tekis va og‘riqsiz yara.",
      },
      {
        term: "Vasserman (RPR) va RIBT/RIF",
        definition:
          "Zaxmni aniqlovchi skrining notriponem (RPR/Vasserman) va yuqori aniqlikdagi tasdiqlovchi treponem (RIBT — treponema immobilizatsiyasi, RIF) serologik testlari.",
      },
      {
        term: "Qorong‘i maydon mikroskopiyasi",
        definition:
          "Oddiy mikroskopda ko‘rinmaydigan ingichka tirik spiroxetalarni (T. pallidum, Leptospira) yon yorug‘likda qora fonda yaltirab turgan holda ko‘rish usuli.",
      },
      {
        term: "Antigen o‘zgaruvchanligi (Borrelia)",
        definition:
          "Borreliyalarning qonda yuzaki oqsillarini o‘zgartirib, immunitetdan qochishi va qaytalama isitma xurujlarini keltirib chiqarish mexanizmi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Qoqshol toksini (tetanospazmin) va botulotoksin ta’siri bir-biridan qanday keskin farq qiladi?",
        answer:
          "Tetanospazmin markaziy tormozlovchi neyronlarni bloklab qattiq spastik tirishish (opistotonus) chaqiradi; botulotoksin esa periferik sinapslarda atsetilxolin ajralishini to‘sib, bo‘shashgan (vyaliy) falaj keltirib chiqaradi.",
      },
      {
        question:
          "Uy sharoitida tayyorlangan konservadan botulizm bilan zaharlanishning eng ishonchli oldini olish chorasi nima?",
        answer:
          "Konserva mahsulotini iste’moldan oldin 15–20 daqiqa davomida 100°C da qaynatish botulotoksinni to‘liq parchalaydi; shuningdek qopqog‘i shishgan (bombaj) bankalarni mutlaqo yemaslik kerak.",
      },
      {
        question:
          "Qaytalama tifga shubha qilingan bemordan qon surtmasi qaysi paytda olinishi kerak va nima uchun?",
        answer:
          "Aynan isitma ko‘tarilgan (xuruj) paytda olinishi kerak, chunki isitma tushgan (apireksiya) davrda borreliyalar qondan ichki a’zolarga o‘tib ketadi va qon tomchisida topilmaydi.",
      },
    ],
    keyTerms: [
      "Clostridium botulinum",
      "botulotoksin",
      "ptoz",
      "diplopiya",
      "Treponema pallidum",
      "zaxm",
      "qattiq shankr",
      "RIBT",
      "Borrelia recurrentis",
      "Leptospira",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/14-mavzu_Botulizm_zaxm_qaytalama_tif_va_toshmali_tif_394297cf.pdf",
    pdfTitle: "14-mavzu: Botulizm, zaxm, qaytalama tif va leptospiroz (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "14-mavzu: Botulizm, zaxm, qaytalama tif va leptospiroz (Ma’ruza matni)",
        url: "/assets/aistudio/14-mavzu_Botulizm_zaxm_qaytalama_tif_va_toshmali_tif_394297cf.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-15",
    order: 15,
    code: "15",
    topicLabel: "15-mavzu",
    module: "III bo‘lim: Xavfli infeksiyalar, anaeroblar va hujayra ichi parazitlar",
    title:
      "Rikketsiyalar. Toshmali terlama, endemik toshmali terlama, chechaksimon va paroksizmal rikketsioz qo‘zg‘atuvchilari",
    syllabusPoints: [
      "Rikketsiyalar umumiy tavsifi va tasnifi: bakteriya tuzilishiga ega, ammo obligat hujayra ichi parazitlari; G. Rikkets va S. Prowazek; polimorfizm, Zdrodovskiy/Gimza bo‘yash",
      "Epidemik toshmali terlama (Rickettsia prowazekii): kiyim biti orqali antroponoz, qon tomir endoteliyi shikastlanishi (vaskulit), rozeola-petexial toshma va kechki qaytalanish — Brill-Sinsser kasalligi",
      "Endemik (kalamush) toshmali terlama (Rickettsia typhi): kalamush → burga orqali zoonoz, yengilroq kechishi",
      "Chechaksimon rikketsioz (Rickettsia akari — sichqon kanasi, birlamchi affekt + vezikula) va kanali paroksizmal / dog‘li isitma rikketsiozlari",
      "Rikketsiozlarning laboratoriya tashxisi (Veyl-Feliks, RSK, RNGA, IFA, PZR), davolash (doksitsiklin/tetratsiklin) va pedikulyozga qarshi profilaktika",
    ],
    studyNotes:
      "Rikketsiyalar bakteriya va viruslar oralig‘ida turadi: ularning hujayra devori, DNK+RNKsi bor va binar bo‘linadi (shuning uchun antibiotik — doksitsiklin ta’sir qiladi), lekin faqat tirik hujayra ichida ko‘payadi. Toshmali terlamaning asosiy patogenezi — qon tomir endoteliyi vaskuliti!",
    overview:
      "Rikketsiyalar bo‘g‘imoyoqlilar (bit, burga, kana) orqali yuqadigan transmissiv infeksiyalar qo‘zg‘atuvchilari bo‘lib, urushlar va ijtimoiy ofatlar davrida millionlab insonlar hayotiga zomin bo‘lgan. Ushbu ma’ruzada rikketsiyalarning biologiyasi, epidemik toshmali terlama va Brill-Sinsser retsidivi, kalamush toshmali terlamasi, chechaksimon rikketsioz hamda ularning serologik tashxisi va davosi yoritiladi.",
    sections: [
      {
        heading: "15.1. Rikketsiyalar: bakteriyalar va viruslar oralig‘idagi xossalar",
        content:
          "Guruh amerikalik olim G. Rikkets va avstriyalik olim S. Prowazek (ikkalasi ham rikketsiozlarni tadqiq qilayotib halok bo‘lgan) sharafiga nomlangan.",
        highlights: [
          "Bakteriya belgilari: peptidoglikanli Gr− hujayra devori, ham DNK ham RNK, 70S ribosomalar, binar bo‘linish, tetratsiklin/doksitsiklinga sezgirlik",
          "Virusga o‘xshash belgisi: obligat hujayra ichi parazitligi — sun’iy oziqa muhitlarida o‘smaydi (faqat tovuq embrioni sarig‘ xaltasi yoki hujayra kulturasida o‘stiriladi)",
          "Polimorf (kokksimon, tayoqchasimon, ipsimon); Zdrodovskiy (qizil) va Romanovskiy-Gimza usulida bo‘yaladi",
        ],
      },
      {
        heading:
          "15.2. Epidemik toshmali terlama (Rickettsia prowazekii) va Brill-Sinsser kasalligi",
        content:
          "Antroponoz transmissiv infeksiya; tashuvchisi — kiyim biti (Pediculus humanus corporis). Bitning o‘zi ham rikketsiyadan 1–2 haftada halok bo‘ladi; odamga bit chaqqan joyni qashiganda bit najasidagi rikketsiyalar teriga ishqalanib yuqadi.",
        highlights: [
          "Patogenez: rikketsiyalar mayda qon tomirlar endoteliy hujayralarida ko‘payib ularni yoradi → generalizatsiyalangan trombovaskulit (ayniqsa bosh miyada — hush buzilishi, alahsirash)",
          "Klinika: 10–14 kun inkubatsiya, keskin 39–40°C isitma, yuz qizarishi, 4–5-kuni tana yonboshi va qo‘l-oyoqda mo‘l rozeola-petexial toshma (kaft va tovonda bo‘lmaydi!)",
          "Brill-Sinsser kasalligi: o‘tmishda toshmali terlama o‘tkazgan keksalarda o‘nlab yillar limfa tugunlarida saqlangan R. prowazekii ning qayta faollashuvi (bitsiz ham paydo bo‘ladi, ammo bit bo‘lsa yangi epidemiya manbaiga aylanadi!)",
        ],
      },
      {
        heading: "15.3. Endemik toshmali terlama, chechaksimon va paroksizmal rikketsiozlar",
        content:
          "Epidemik shakldan farqli ravishda, bu rikketsiozlar zoonoz bo‘lib, kemiruvchilar va ularning ektoparazitlari bilan bog‘liq.",
        highlights: [
          "Endemik (kalamush) toshmali terlama (Rickettsia typhi): manba — kalamush, tashuvchi — kalamush burgasi; issiq port shaharlarida uchraydi, yengilroq kechadi va retsidiv bermaydi",
          "Chechaksimon rikketsioz (Rickettsia akari): manba — uy sichqoni, tashuvchi — gamaz kanasi; chaqish joyida qora qasmoqli birlamchi affekt va suvchechakka o‘xshash pufakchali (vezikulyar) toshma",
          "Kanali paroksizmal va dog‘li isitmalar (R. rickettsii, R. sibirica): iksod kanalar chaqishi orqali yuqadi, vaskulit va toshmalar bilan kechadi",
        ],
      },
      {
        heading: "15.4. Laboratoriya tashxisi, davolash va profilaktika",
        content:
          "Rikketsiyalarni tirik holda ajratish laboratoriya xodimlari uchun o‘ta xavfli bo‘lgani sababli amaliyotda asosan serologik va PZR usullari qo‘llaniladi.",
        highlights: [
          "Tarixiy Veyl-Feliks reaksiyasi: bemor zardobining Proteus vulgaris OX19 shtammi bilan agglyutinatsiyasi (umumiy antigenlar tufayli)",
          "Zamonaviy aniq usullar: bilvosita immunofluoressensiya (NIF/IFA — «oltin standart»), RNGA, RSK (juft zardobda 4× o‘sish) va PZR",
          "Tanlov dorisi: doksitsiklin (tetratsiklinlar guruhi) — 24–48 soatda isitmani tushiradi! (Sulfanilamidlar rikketsiyalar o‘sishini rag‘batlantirgani uchun MAN ETILADI!)",
          "Profilaktika: pedikulyoz (bit) ga qarshi kurash, sanitar ishlov, deratizatsiya (kemiruvchilarni yo‘qotish)",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy rikketsiozlarning qiyosiy tavsifi",
      columns: ["Kasallik", "Qo‘zg‘atuvchi", "Manba / Tashuvchi", "O‘ziga xos klinik belgi"],
      rows: [
        [
          "Epidemik toshmali terlama",
          "Rickettsia prowazekii",
          "Odam / Kiyim biti",
          "Og‘ir vaskulit, rozeola-petexiya (kaft/tovonsiz), alahsirash",
        ],
        [
          "Brill-Sinsser kasalligi",
          "Rickettsia prowazekii (endogen)",
          "Ilgari kasallangan bemor (bitsiz)",
          "Yengilroq kechuvchi kechki qaytalanish (IgG ustun)",
        ],
        [
          "Endemik toshmali terlama",
          "Rickettsia typhi",
          "Kalamush / Burga",
          "Zoonoz, nisbatan yengil, o‘lim kam, retsidiv yo‘q",
        ],
        [
          "Chechaksimon rikketsioz",
          "Rickettsia akari",
          "Uy sichqoni / Gamaz kanasi",
          "Birlamchi affekt (qora yara) + suvchechakka o‘xshash vezikula",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Obligat hujayra ichi paraziti",
        definition:
          "Sun’iy oziqa muhitlarida ko‘paya olmaydigan, faqat tirik eukariot hujayra ichida ko‘payadigan mikroorganizm (rikketsiyalar, xlamidiyalar, viruslar).",
      },
      {
        term: "Trombovaskulit",
        definition:
          "Rikketsiyalarning qon tomir endoteliy hujayralarini shikastlashi natijasida devor yallig‘lanishi, tromb hosil bo‘lishi va toshmalar paydo bo‘lishi.",
      },
      {
        term: "Brill-Sinsser kasalligi",
        definition:
          "Epidemik toshmali terlama o‘tkazgandan yillar o‘tib organizmda saqlanib qolgan R. prowazekii ning qayta faollashishi bilan kechuvchi retsidiv.",
      },
      {
        term: "Veyl-Feliks reaksiyasi",
        definition:
          "Rikketsiyalar va Proteus vulgaris OX19 o‘rtasidagi umumiy antigenlar asosida bemor qonida antitanalarni aniqlovchi tarixiy agglyutinatsiya testi.",
      },
      {
        term: "Pedikulyoz",
        definition:
          "Kiyim yoki bosh bitlari bilan zararlanish; epidemik toshmali terlama va epidemik qaytalama tif tarqalishining asosiy omili.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Rikketsiyalar faqat tirik hujayra ichida ko‘paysa ham, nima uchun virus emas, balki bakteriya hisoblanadi?",
        answer:
          "Chunki rikketsiyalarda peptidoglikanli hujayra devori, ham DNK ham RNK, 70S ribosomalar mavjud, ular binar bo‘linish bilan ko‘payadi va doksitsiklin kabi antibiotiklarga sezgir.",
      },
      {
        question:
          "Toshmali terlama o‘tkazgan odamda yillar o‘tib bitsiz ham kasallik qaytalanishi nimaga bog‘liq va qanday ataladi?",
        answer:
          "Bu Brill-Sinsser kasalligi bo‘lib, ilgari o‘tkazilgan infeksiyadan so‘ng limfa tugunlarida uzoq yillar saqlangan R. prowazekii immunitet pasayganda qayta faollashishi natijasida yuzaga keladi.",
      },
      {
        question:
          "Rikketsiozlarni davolashda qaysi antibiotik tanlov dorisi hisoblanadi va qaysi dori guruhi man etiladi?",
        answer:
          "Doksitsiklin (tetratsiklinlar) asosiy tanlov dorisidir; sulfanilamidlar esa rikketsiyalarning ko‘payishini tezlashtirgani uchun qat’iyan man etiladi.",
      },
    ],
    keyTerms: [
      "Rickettsia prowazekii",
      "toshmali terlama",
      "kiyim biti",
      "vaskulit",
      "Brill-Sinsser",
      "Rickettsia typhi",
      "Rickettsia akari",
      "Veyl-Feliks",
      "doksitsiklin",
      "pedikulyoz",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/15-mavzu_Rikketsiyalar_va_rikketsiozlar_6bcbb35b.pdf",
    pdfTitle: "15-mavzu: Rikketsiyalar va rikketsiozlar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "15-mavzu: Rikketsiyalar va rikketsiozlar (Ma’ruza matni)",
        url: "/assets/aistudio/15-mavzu_Rikketsiyalar_va_rikketsiozlar_6bcbb35b.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "mikro-16",
    order: 16,
    code: "16",
    topicLabel: "16-mavzu",
    module: "III bo‘lim: Xavfli infeksiyalar, anaeroblar va hujayra ichi parazitlar",
    title:
      "Bartonellyoz qo‘zg‘atuvchisi, patogen xlamidiyalar, endemik traxoma, urogenital xlamidioz, patogen mikoplazmalar va siydik-tanosil a’zolari mikoplazmozi",
    syllabusPoints: [
      "Bartonellalar (Bartonella henselae, B. quintana, B. bacilliformis): oraliq hujayra ichi/tashqarisi yashash, mushuk tirnashi kasalligi, okopli isitma, Karion kasalligi va batsillyar angiomatoz",
      "Xlamidiyalar (Chlamydia trachomatis): obligat hujayra ichi «energiya parazitlari», ikki shaklli rivojlanish sikli (elementar tanacha — yuqumli, retikulyar tanacha — ko‘payuvchi, 48–72 soat)",
      "Traxoma (A–C serovarlari — dunyoda yuqumli ko‘rlikning yetakchi sababi) va paratraxoma / chaqaloqlar konyunktiviti",
      "Urogenital xlamidioz (D–K serovarlari): jinsiy yo‘l bilan yuqadigan eng keng tarqalgan bakterial infeksiya, yashirin kechishi, bepushtlik, Reyter sindromi va PZR tashxisi",
      "Mikoplazmalar (Mycoplasma pneumoniae, M. genitalium, M. hominis, Ureaplasma urealyticum): hujayra devori UMUMAN YO‘Q, membranasida sterollar, «qovurilgan tuxum» koloniyalari, penitsillinga mutlaq chidamlilik",
    ],
    studyNotes:
      "Xlamidiyalar — ATF sintezlay olmaydigan obligat hujayra ichi «energiya parazitlari» (elementar + retikulyar tanacha). Mikoplazmalarda peptidoglikanli hujayra devori mutlaqo yo‘q — shuning uchun beta-laktamlar (penitsillin, sefalosporin) ularga 0% ta’sir qiladi; davolash: makrolidlar (azitromitsin) yoki doksitsiklin!",
    overview:
      "Yakuniy 16-mavzuda odatdagi bakteriyalardan keskin farq qiluvchi va maxsus tashxis hamda davolash yondashuvini talab etuvchi uchta o‘ziga xos guruh o‘rganiladi: bartonellalar (mushuk tirnashi kasalligi), ikki fazali rivojlanish sikliga ega obligat hujayra ichi parazitlari — xlamidiyalar (traxoma va urogenital xlamidioz) hamda hujayra devorisiz eng kichik mustaqil ko‘payuvchi organizmlar — mikoplazmalar va ureaplazmalar.",
    sections: [
      {
        heading: "16.1. Bartonellalar va bartonellyozlar",
        content:
          "Perulik olim A. Barton sharafiga nomlangan, 1993-yildan rikketsiyalardan alohida ajratilgan mayda polimorf Gr− tayoqchalar; qon hujayralari (eritrotsitlar) va endoteliyda hamda maxsus sun’iy muhitlarda o‘sa oladi.",
        highlights: [
          "Bartonella henselae — «mushuk tirnashi kasalligi» (tirnalgan joyda papula va regional limfa tugunlari kattalashishi); OITS bemorlarida batsillyar angiomatoz",
          "Bartonella quintana — okopli (besh kunlik) isitma (kiyim biti orqali yuqadi)",
          "Bartonella bacilliformis — Janubiy Amerikada moshka orqali yuqadigan Karion kasalligi (Oroya isitmasi — og‘ir gemolitik anemiya va Peru so‘gali)",
        ],
      },
      {
        heading: "16.2. Xlamidiyalar: ikki shaklli rivojlanish sikli",
        content:
          "Chlamydia trachomatis, C. pneumoniae va C. psittaci — obligat hujayra ichi parazitlari bo‘lib, o‘z ATF ini sintezlay olmagani uchun xo‘jayin hujayra ATF idan foydalanadi («energiya parazitlari»).",
        highlights: [
          "1. Elementar tanacha (ET, 0,2–0,3 mkm) — zich, metabolik nofaol, tashqi muhitga chidamli YUQUMLI shakl",
          "2. Retikulyar tanacha (RT, 0,8–1,0 mkm) — hujayra ichida (vakuola — Provachek-Xalbershtedter inkluziyasi) binar bo‘linish bilan KO‘PAYUVCHI shakl",
          "To‘liq sikl 48–72 soat davom etadi, so‘ngra RT lar yana ET ga aylanib hujayrani yorib chiqadi",
        ],
      },
      {
        heading: "16.3. Endemik traxoma va urogenital xlamidioz",
        content:
          "Chlamydia trachomatis serovarlariga qarab ko‘z, siydik-tanosil a’zolari yoki limfa tizimini shikastlaydi.",
        highlights: [
          "A, B, Ba, C serovarlari — endemik traxoma: surunkali follikulyar konyunktivit → qovoq chandiqlanishi, kipriklarning ichkariga qayrilishi (trixiaz) va shox parda xiralashib ko‘rlikka olib kelishi (JSST SAFE strategiyasi)",
          "D–K serovarlari — urogenital xlamidioz (dunyoda eng ko‘p tarqalgan bakterial JYYK): 70–80% ayollarda va 50% erkaklarda belgisiz kechadi → bachadon naylari bitishi, bepushtlik, bachadondan tashqari homiladorlik",
          "Reyter sindromi (reaktiv artrit triadasi): uretrit + konyunktivit + artrit",
          "L1–L3 serovarlari — venerik limfogranuloma; tashxisda «oltin standart» — PZR (NAAT); davo: azitromitsin yoki doksitsiklin (ikkala jinsiy sherik birga!)",
        ],
      },
      {
        heading: "16.4. Mikoplazmalar va siydik-tanosil a’zolari mikoplazmozi",
        content:
          "Mycoplasma va Ureaplasma — hujayra devori UMUMAN BO‘LMAGAN, sun’iy oziqa muhitida mustaqil o‘sa oladigan eng kichik prokariotlar (0,2–0,3 mkm, bakterial filtrdan o‘tadi).",
        highlights: [
          "Devor o‘rniga uch qavatli sterol (xolesterin) ga boy elastik membrana → kuchli polimorfizm va penitsillin/sefalosporinlarga 100% TABIIY CHIDAMLILIK!",
          "Zich muhitda markazi agar ichiga o‘sib kirgan xarakterli «qovurilgan tuxum» (glazunya) ko‘rinishli mikrokoloniyalar beradi",
          "M. pneumoniae — «atipik» (yurib o‘tkaziladigan) pnevmoniya; M. genitalium — nogonokokk uretrit va servitsitning muhim qo‘zg‘atuvchisi",
          "M. hominis va Ureaplasma urealyticum (mochevinani parchalaydi) — ko‘pincha shartli patogen bo‘lib, faqat yuqori titr va klinik belgilar bo‘lganda makrolidlar (azitromitsin, jozamitsin) yoki doksitsiklin bilan davolanadi",
        ],
      },
    ],
    comparisonTable: {
      title: "Bartonellalar, xlamidiyalar va mikoplazmalarning qiyosiy jadvali",
      columns: ["Belgi", "Bartonella", "Chlamydia trachomatis", "Mycoplasma / Ureaplasma"],
      rows: [
        [
          "Hujayra devori",
          "Mavjud (Gr−)",
          "Mavjud (peptidoglikansiz o‘ziga xos)",
          "UMUMAN YO‘Q (sterolli membrana)",
        ],
        [
          "Sun’iy muhitda o‘sishi",
          "Ha (sekin, qonli agarda)",
          "Yo‘q (obligat hujayra ichi)",
          "Ha («qovurilgan tuxum» koloniyasi)",
        ],
        [
          "Rivojlanish xususiyati",
          "Eritrotsit va endoteliyda",
          "Ikki shakl: ET (yuqumli) ↔ RT (ko‘payuvchi)",
          "Eng kichik mustaqil hujayra, polimorf",
        ],
        ["Penitsillinga sezgirlik", "Cheklangan", "Samarasiz", "0% (mutlaq tabiiy chidamli!)"],
        [
          "Asosiy kasalliklar",
          "Mushuk tirnashi, okopli isitma",
          "Traxoma, urogenital xlamidioz, Reyter",
          "Atipik pnevmoniya, urogenital mikoplazmoz",
        ],
        [
          "Tashxis va tanlov dorisi",
          "PZR, IFA · Azitromitsin/doksitsiklin",
          "PZR (NAAT) · Azitromitsin/doksitsiklin",
          "PZR, kultura · Makrolidlar/doksitsiklin",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Elementar tanacha (ET) va Retikulyar tanacha (RT)",
        definition:
          "Xlamidiyalarning ikki rivojlanish shakli: ET — tashqi muhitda yuqumli zarracha; RT — hujayra ichida bo‘linib ko‘payuvchi shakl.",
      },
      {
        term: "Traxoma",
        definition:
          "Chlamydia trachomatis (A–C serovarlari) chaqiradigan surunkali ko‘z infeksiyasi bo‘lib, davolanmasa qovoq chandiqlanishi va ko‘rlikka olib keladi.",
      },
      {
        term: "Reyter sindromi",
        definition:
          "Urogenital xlamidiozdan keyin rivojlanadigan reaktiv autoimmun triada: uretrit + konyunktivit + bo‘g‘imlar artriti.",
      },
      {
        term: "Mikoplazmalar",
        definition:
          "Peptidoglikanli hujayra devori umuman yo‘q, sterolli membranali eng kichik prokariotlar; beta-laktam antibiotiklarga tabiiy chidamli.",
      },
      {
        term: "Mushuk tirnashi kasalligi",
        definition:
          "Bartonella henselae keltirib chiqaradigan, mushuk tirnashi yoki tishlashidan keyin regional limfa tugunlarining uzoq kattalashishi bilan kechuvchi bartonellyoz.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun mikoplazma chaqirgan pnevmoniya yoki uretritda amoksitsillin va seftriakson kabi beta-laktam antibiotiklar mutlaqo samara bermaydi?",
        answer:
          "Beta-laktam antibiotiklar peptidoglikanli hujayra devori sintezini bloklaydi; mikoplazmalarda esa hujayra devori umuman mavjud emas, shuning uchun ularning ta’sir nishoni yo‘q.",
      },
      {
        question:
          "Xlamidiyalarning elementar tanachasi va retikulyar tanachasi vazifasi jihatidan qanday farqlanadi?",
        answer:
          "Elementar tanacha hujayradan tashqarida yashovchan va yangi hujayralarni zararlash (yuqish) uchun javobgar; retikulyar tanacha esa faqat hujayra ichida binar bo‘linish orqali ko‘payadi va tashqarida yuqumsiz.",
      },
      {
        question: "Urogenital xlamidioz nima uchun reproduktiv salomatlikka jiddiy tahdid soladi?",
        answer:
          "U 70–80% ayollarda belgisiz kechib, sezilmasdan bachadon naylarida surunkali yallig‘lanish va chandiqlar hosil qiladi, bu esa bepushtlik va bachadondan tashqari homiladorlikka olib keladi.",
      },
    ],
    keyTerms: [
      "Bartonella",
      "mushuk tirnashi kasalligi",
      "Chlamydia trachomatis",
      "elementar tanacha",
      "retikulyar tanacha",
      "traxoma",
      "urogenital xlamidioz",
      "Reyter sindromi",
      "Mycoplasma",
      "Ureaplasma",
    ],
    references: "Xalimova N.T. · Navoiy Davlat Universiteti · 2026",
    pdfUrl: "/assets/aistudio/16-mavzu_Bartonellyoz_xlamidiyalar_va_mikoplazmalar_6578aa20.pdf",
    pdfTitle: "16-mavzu: Bartonellyoz, xlamidiyalar va mikoplazmalar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "16-mavzu: Bartonellyoz, xlamidiyalar va mikoplazmalar (Ma’ruza matni)",
        url: "/assets/aistudio/16-mavzu_Bartonellyoz_xlamidiyalar_va_mikoplazmalar_6578aa20.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
];
