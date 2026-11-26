import type { BiotexnologiyaTopic } from "./biotexnologiyaTopics";

export const BIOTEXNOLOGIYA_TOPICS_PART_2: BiotexnologiyaTopic[] = [
  {
    id: "biotex-12",
    order: 12,
    code: "BT12",
    topicLabel: "12-mavzu",
    module: "II bo‘lim: Mikrobiologik sintez, fermentlar va bioprotsesslar",
    title: "Biologik faol moddalar va antibiotik ishlab chiqarish biotexnologiyasi",
    syllabusPoints: [
      "Antibiotiklar: tasnifi (beta-laktam, aminoglikozid, tetratsiklin, makrolid), ta’sir mexanizmi, manbalari va antibiotikka chidamlilik",
      "Antibiotik ishlab chiqarish texnologiyasi: ikkilamchi metabolizm, pretsursorlar va yarim sintetik antibiotiklar (6-APK)",
      "Vitaminlar ishlab chiqarish biotexnologiyasi: vitamin B12, riboflavin (B2) va askorbin kislota (C)",
      "Aminokislotalar olish texnologiyasi: Corynebacterium glutamicum, glutamin kislota, lizin va auksotrof shtammlar",
      "Mahsulotni ajratib olish, tozalash (downstream processing: ekstraksiya, xromatografiya) va GMP sifat nazorati",
    ],
    studyNotes:
      "Antibiotiklarning aksariyati statsionar fazada sintezlanuvchi ikkilamchi metabolitlardir; yarim sintetik penitsillinlar 6-APK yadrosini kimyoviy modifikatsiyalash orqali olinadi. Aminokislota sanoatida auksotrof shtammlar teskari aloqa ingibirlashini chetlab o‘tish imkonini beradi.",
    overview:
      "Antibiotiklar, vitaminlar va aminokislotalar sanoat mikrobiologiyasining eng yirik mahsulotlari hisoblanadi. Ma’ruzada Streptomyces va Penicillium shtammlari asosida antibiotik fermentatsiyasi, beta-laktamaza va efflyuks nasoslari kabi rezistentlik mexanizmlari, B12/B2/C vitaminlari biokonversiyasi, Corynebacterium glutamicum da lizin va glutamat sintezi hamda GMP talablari yoritilgan.",
    sections: [
      {
        heading: "12.1. Antibiotiklar tasnifi, ta’sir mexanizmi va chidamlilik",
        content:
          "Antibiotiklar aktinomitsetlar (Streptomyces — ma’lum antibiotiklarning katta qismi), mog‘or zamburug‘lari (penitsillin, sefalosporin) va bakteriyalardan (Bacillus) olinadi. Beta-laktamlar bakteriya hujayra devorini nishonga olgani uchun inson hujayrasiga nisbatan xavfsizdir.",
        highlights: [
          "Asosiy sinflar: beta-laktamlar (devor sintezi), aminoglikozidlar va tetratsiklinlar (ribosoma/oqsil sintezi), makrolidlar",
          "Chidamlilik mexanizmlari: beta-laktamaza bilan parchalash, nishonni o‘zgartirish, efflyuks nasoslari va membrana o‘tkazuvchanligini pasaytirish",
          "Yarim sintetik antibiotiklar: tabiiy penitsillindan fermentativ yo‘l bilan 6-APK ajratilib, yangi yon zanjirlar ulanadi",
        ],
      },
      {
        heading: "12.2. Vitaminlar va aminokislotalar biosintezi",
        content:
          "Vitamin B12 faqat mikrobiologik usulda (Propionibacterium, Pseudomonas) olinadi; riboflavin (Ashbya gossypii, Bacillus subtilis) va askorbin kislota (Reixshteyn usulida Gluconobacter ishtirokida biokonversiya) yirik sanoat miqyosida ishlab chiqariladi.",
        highlights: [
          "Corynebacterium glutamicum — L-glutamin kislota va L-lizin ishlab chiqarishning asosiy sanoat produtsenti",
          "Biotin yetishmovchiligi C. glutamicum membranasini o‘tkazuvchan qilib, glutamatning muhitga chiqishini ta’minlaydi",
          "Auksotrof va analog-chidamli mutantlar teskari aloqa ingibirlashini (feedback inhibition) chetlab o‘tib, o‘ta yuqori unum beradi",
        ],
      },
      {
        heading: "12.3. Ajratish, tozalash (downstream) va GMP nazorati",
        content:
          "Fermentatsiyadan so‘ng biomassa filtrlash yoki sentrifugalash bilan ajratiladi, maqsadli modda erituvchilar bilan ekstraksiya, ion-almashinuv xromatografiyasi va kristallash orqali tozalanadi.",
        highlights: [
          "GMP (Good Manufacturing Practice) — dori vositalarining tozaligi, sterilligi, barqarorligi va har bir partiya nazoratini kafolatlaydi",
          "Yakuniy nazorat: biologik faollik, endotoksin yo‘qligi, kimyoviy tozalik (HPLC) va saqlash muddati",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy biologik faol moddalar va ularning sanoat produtsentlari",
      columns: ["Mahsulot", "Produtsent organizm", "Metabolit turi", "Asosiy qo‘llanilishi"],
      rows: [
        [
          "Penitsillin / 6-APK",
          "Penicillium chrysogenum",
          "Ikkilamchi metabolit",
          "Bakterial infeksiyalar, yarim sintetik dorilar",
        ],
        [
          "Streptomitsin / Tetratsiklin",
          "Streptomyces turlari",
          "Ikkilamchi metabolit",
          "Keng spektrli antibakterial terapiya",
        ],
        [
          "Vitamin B12 (kobalamin)",
          "Propionibacterium / Pseudomonas",
          "Vitamin (biokatalitik)",
          "Tibbiyot, chorvachilik ozuqa qo‘shimchasi",
        ],
        [
          "L-glutamat va L-lizin",
          "Corynebacterium glutamicum",
          "Birlamchi metabolit",
          "Oziq-ovqat sanoati, yem qo‘shimchalari",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Ikkilamchi metabolit",
        definition:
          "Hujayraning asosiy o‘sishi tugagach, statsionar fazada sintezlanuvchi biologik faol birikma (antibiotik, pigment).",
      },
      {
        term: "6-APK (6-aminopenitsillan kislota)",
        definition:
          "Penitsillinlarning asosiy yadrosi; yarim sintetik penitsillinlar olish uchun xomashyo.",
      },
      {
        term: "Auksotrof shtamm",
        definition:
          "Muayyan aminokislota yoki vitaminni o‘zi sintezlay olmaydigan mutant; teskari aloqa blokini aylanib o‘tishda ishlatiladi.",
      },
      {
        term: "Beta-laktamaza",
        definition:
          "Chidamli bakteriyalar ajratadigan va penitsillin/sefalosporinning beta-laktam halqasini parchalovchi ferment.",
      },
      {
        term: "GMP standarti",
        definition:
          "Good Manufacturing Practice — farmatsevtika mahsulotlarini sifatli va xavfsiz ishlab chiqarish qoidalari tizimi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun beta-laktam antibiotiklar inson hujayralariga nisbatan tanlab ta’sir qiladi?",
        answer:
          "Beta-laktamlar bakteriya hujayra devoridagi peptidoglikan sintezini bloklaydi; inson hujayralarida esa peptidoglikanli hujayra devori mavjud emas.",
      },
      {
        question:
          "Aminokislota ishlab chiqarishda nima uchun auksotrof mutant shtammlardan foydalaniladi?",
        answer:
          "Auksotrof mutantlarda metabolik yo‘lning yon tarmog‘i bloklanadi, natijada oxirgi mahsulot to‘planib teskari aloqa ingibirlashini ishga tushirmaydi va maqsadli aminokislota ko‘p miqdorda sintezlanadi.",
      },
      {
        question: "Bakteriyalarda antibiotikka chidamlilikning asosiy mexanizmlari qaysilar?",
        answer:
          "Fermentativ parchalash (beta-laktamazalar), nishon molekula o‘zgarishi, efflyuks nasoslari orqali chiqarib tashlash, membrana o‘tkazuvchanligini kamaytirish va muqobil metabolik yo‘llar.",
      },
    ],
    keyTerms: [
      "antibiotik",
      "beta-laktam",
      "penitsillin",
      "6-APK",
      "Streptomyces",
      "vitamin B12",
      "riboflavin",
      "Corynebacterium glutamicum",
      "lizin",
      "auksotrof shtamm",
      "GMP",
    ],
    references: "Xalimova N.T. Biotexnologiya · 12-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/12-mavzu_Antibiotik_va_biologik_faol_moddalar_d4e755c0.pdf",
    pdfTitle: "12-mavzu: Antibiotik va biologik faol moddalar biotexnologiyasi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "12-mavzu: Antibiotik va biologik faol moddalar biotexnologiyasi (Ma’ruza matni)",
        url: "/assets/aistudio/12-mavzu_Antibiotik_va_biologik_faol_moddalar_d4e755c0.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "12-mavzu: Antibiotik va biologik faol moddalar biotexnologiyasi (Taqdimot)",
        url: "/assets/aistudio/12-mavzu_Antibiotik_va_biologik_faol_moddalar_31e35fa2.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-13",
    order: 13,
    code: "BT13",
    topicLabel: "13-mavzu",
    module: "II bo‘lim: Mikrobiologik sintez, fermentlar va bioprotsesslar",
    title: "Oziq-ovqat sanoatida qo‘llaniladigan organik kislotalar olish biotexnologiyasi",
    syllabusPoints: [
      "Organik kislotalarning sanoat ahamiyati va biotexnologik usulning kimyoviy sintezdan afzalliklari",
      "Limon kislotasi ishlab chiqarish texnologiyasi: Aspergillus niger, Krebs sikli muvozanatini buzish va temir (Fe²⁺) cheklovi",
      "Sirka kislotasi va atsetat fermentatsiyasi (Acetobacter, Gluconobacter): sirkulyatsion va chuqur usullar",
      "Glyukon (glyukozooksidaza), sut (Lactobacillus, L-izomer va polilaktid), fumar va itakon kislotalari",
      "Xomashyo (melassa, kraxmal), chiqindisiz texnologiya va tannarxni pasaytirish omillari",
    ],
    studyNotes:
      "Limon kislotasi to‘planishi uchun Aspergillus niger muhitida temir va marganets ionlari qat’iy cheklanadi (akonitaza faolligi pasayib Krebs sikli to‘xtaydi) hamda pH 2 gacha tushiriladi. Sut kislotasining biotexnologik sintezi biorazlanuvchi polilaktid (PLA) uchun zarur toza L-izomerni beradi.",
    overview:
      "Organik kislotalar ishlab chiqarish hujayra metabolizmini maqsadli ravishda muvozanatdan chiqarish mantig‘iga tayanadi. Ma’ruzada Aspergillus niger yordamida melassadan limon kislotasi olish, Acetobacter bilan sirka kislotasi ishlab chiqarish, Lactobacillus ishtirokida L-sut kislotasi va glyukon kislotasi texnologiyalari hamda jarayon iqtisodiyoti batafsil ko‘rib chiqiladi.",
    sections: [
      {
        heading: "13.1. Organik kislotalar olishning umumiy tamoyillari",
        content:
          "Biotexnologik usul arzon qayta tiklanuvchi xomashyo (melassa, kraxmal), mo‘tadil harorat, yuqori stereokimyoviy tanlanuvchanlik (faqat kerakli optik izomer) va «tabiiy mahsulot» maqomi bilan kimyoviy sintezdan ustundir.",
        highlights: [
          "Umumiy sxema: xomashyoni tayyorlash → sterilizatsiya → inokulyat → fermentatsiya → mitseliy/hujayrani ajratish → cho‘ktirish/ekstraksiya → kristallash",
          "Kislotalanish muammosi yechimi: pH ni bo‘r (CaCO₃) bilan neytrallash (sut kislotasi) yoki kislotaga chidamli shtamm ishlatish (A. niger, pH ~2)",
        ],
      },
      {
        heading: "13.2. Limon va sirka kislotalari texnologiyasi",
        content:
          "Aspergillus niger da limon kislotasi to‘planishi uchun Krebs siklidagi akonitaza fermentini susaytirish zarur — bu muhitda temir (Fe²⁺) konsentratsiyasini keskin cheklash va melassani ferrotsianid bilan tozalash orqali erishiladi.",
        highlights: [
          "Limon kislotasi: chuqur fermentatsiya (zamonaviy, 80% dan ortiq) va yuza fermentatsiya; ajratish — kalsiy sitrat cho‘kmasi + H₂SO₄ bilan parchalash",
          "Sirka kislotasi: Acetobacter va Gluconobacter etanolni ikki bosqichda (etanol → atsetaldegid → sirka kislotasi) aerob oksidlaydi",
          "Sirka jarayonida kuchli aeratsiya shart — kislorod bir necha soniya uzilsa ham Acetobacter tezda nobud bo‘ladi",
        ],
      },
      {
        heading: "13.3. Sut, glyukon va boshqa organik kislotalar",
        content:
          "Lactobacillus turlari anaerob sharoitda toza L-(+)-sut kislotasi hosil qiladi; u oziq-ovqat va ekologik biorazlanuvchi polimer (polilaktid — PLA) ishlab chiqarishda asosiy monomerdir.",
        highlights: [
          "Glyukon kislotasi — A. niger yoki Gluconobacter glyukozooksidazasi bilan glyukozani yumshoq oksidlash orqali olinadi",
          "Fumar va itakon kislotalari — qatronlar, polimerlar va oziq-ovqat qo‘shimchalari uchun istiqbolli biokimyoviy xomashyolar",
          "Chiqindisiz yondashuv: mitseliy chorva ozuqasiga, gips qurilish materiallariga yo‘naltiriladi",
        ],
      },
    ],
    comparisonTable: {
      title: "Sanoat ahamiyatiga ega asosiy organik kislotalar",
      columns: ["Kislota", "Produtsent", "Sharoit xususiyati", "Asosiy qo‘llanilishi"],
      rows: [
        [
          "Limon kislotasi",
          "Aspergillus niger",
          "Aerob, past pH (~2), Fe²⁺ cheklovi",
          "Ichimliklar, konservalash, farmatsevtika",
        ],
        [
          "Sirka kislotasi",
          "Acetobacter, Gluconobacter",
          "Kuchli aerob, etanoldan oksidlash",
          "Oziq-ovqat, kimyo sanoati",
        ],
        [
          "Sut kislotasi (L-izomer)",
          "Lactobacillus turlari",
          "Anaerob, CaCO₃ bilan neytrallash",
          "Oziq-ovqat, biorazlanuvchi plastmassa (PLA)",
        ],
        [
          "Glyukon kislotasi",
          "A. niger / Gluconobacter",
          "Aerob, glyukozooksidaza ishtirokida",
          "Farmatsevtika (Ca-glyukonat), tozalash",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Temir cheklovi (A. niger)",
        definition:
          "Muhitda Fe²⁺ miqdorini kamaytirib akonitaza fermentini susaytirish va limon kislotasi to‘planishini tezlashtirish usuli.",
      },
      {
        term: "Atsetat fermentatsiyasi",
        definition:
          "Acetobacter bakteriyalari tomonidan etanolning kislorod ishtirokida sirka kislotasiga oksidlanishi.",
      },
      {
        term: "Polilaktid (PLA)",
        definition:
          "Biotexnologik toza L-sut kislotasidan olinadigan ekologik biorazlanuvchi biopolimer.",
      },
      {
        term: "Chuqur fermentatsiya",
        definition:
          "Katta bioreaktorlarda uzluksiz aralashtirish va aeratsiya ostida hajmiy muhitda kultivatsiya qilish usuli.",
      },
      {
        term: "Melassa",
        definition:
          "Qand ishlab chiqarish chiqindisi bo‘lgan shakarli qiyom; organik kislotalar uchun asosiy arzon substrat.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Limon kislotasi olishda nima uchun melassadan temir ionlari olib tashlanadi?",
        answer:
          "Temir ionlari Krebs siklidagi akonitaza fermentining kofaktori hisoblanadi; temir cheklanganda limon kislotasining keyingi parchalanishi sekinlashadi va u muhitda to‘planadi.",
      },
      {
        question:
          "Sut kislotasini biotexnologik usulda olish kimyoviy sintezdan nimasi bilan ustun?",
        answer:
          "Kimyoviy sintez D- va L-izomerlar aralashmasini beradi, Lactobacillus ishtirokidagi biotexnologik jarayon esa polilaktid (PLA) va oziq-ovqat uchun zarur bo‘lgan toza L-izomerni sintezlaydi.",
      },
      {
        question: "Nima uchun sirka kislotasi ishlab chiqarishda aeratsiya uzilishi o‘ta xavfli?",
        answer:
          "Acetobacter qat’iy aerob bakteriya bo‘lib, kislorod yetkazib berish qisqa muddatga to‘xtasa ham hujayralar tezda nobud bo‘ladi va fermentatsiya buziladi.",
      },
    ],
    keyTerms: [
      "organik kislota",
      "limon kislotasi",
      "Aspergillus niger",
      "akonitaza",
      "sirka kislotasi",
      "Acetobacter",
      "sut kislotasi",
      "Lactobacillus",
      "polilaktid",
      "glyukon kislotasi",
      "melassa",
    ],
    references: "Xalimova N.T. Biotexnologiya · 13-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/13-mavzu_Organik_kislotalar_biotexnologiyasi_00422103.pdf",
    pdfTitle: "13-mavzu: Organik kislotalar olish biotexnologiyasi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "13-mavzu: Organik kislotalar olish biotexnologiyasi (Ma’ruza matni)",
        url: "/assets/aistudio/13-mavzu_Organik_kislotalar_biotexnologiyasi_00422103.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "13-mavzu: Organik kislotalar olish biotexnologiyasi (Taqdimot)",
        url: "/assets/aistudio/13-mavzu_Organik_kislotalar_biotexnologiyasi_c945eb22.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-14",
    order: 14,
    code: "BT14",
    topicLabel: "14-mavzu",
    module: "II bo‘lim: Mikrobiologik sintez, fermentlar va bioprotsesslar",
    title: "Tabiatda moddalar aylanishida mikroorganizmlarning roli",
    syllabusPoints: [
      "Mikroorganizmlarning biosferadagi umumiy roli: mineralizatsiya, redutsentlik va biogeokimyoviy sikllar",
      "Azot aylanishi va uning asosiy bosqichlari: azot fiksatsiyasi, ammonifikatsiya, nitrifikatsiya va denitrifikatsiya",
      "Biologik azot fiksatsiyasi mexanizmi: nitrogenaza kompleksi, Rhizobium–dukkaklilar simbiozi va leggemoglobin",
      "Uglerod (metanogenez), oltingugurt va fosfor aylanishida mikroorganizmlar faoliyati",
      "Azot fiksatsiyasining amaliy qo‘llanilishi va bioo‘g‘itlar: nitragin, azotobakterin, fosforobakterin, mikoriza",
    ],
    studyNotes:
      "Atmosfera azotini (N≡N) bog‘laydigan nitrogenaza fermenti faqat prokariotlarda mavjud bo‘lib, kislorodga o‘ta sezgir; dukkakli tuganaklarda leggemoglobin erkin kislorodni bog‘lab nitrogenazani himoya qiladi. Bioo‘g‘itlar mineral o‘g‘it sarfini va ekologik yukni sezilarli kamaytiradi.",
    overview:
      "Mikroorganizmlar biosferaning asosiy «kimyogarlari» sifatida organik qoldiqlarni mineral elementlarga qaytaradi va azot, uglerod, oltingugurt hamda fosforning uzluksiz aylanishini ta’minlaydi. Ma’ruzada nitrogenaza fermentining ishlash mexanizmi, Rhizobium va Azotobacter biologiyasi, nitrifikatsiya/denitrifikatsiya muvozanati hamda qishloq xo‘jaligi bioo‘g‘itlari yoritilgan.",
    sections: [
      {
        heading: "14.1. Mikroorganizmlarning biosferadagi mineralizatsiya roli",
        content:
          "Redutsent mikroorganizmlar o‘lik organik moddani gidrolitik fermentlar va oksidlanish orqali CO₂, H₂O, NH₄⁺, PO₄³⁻ va SO₄²⁻ kabi o‘simliklar o‘zlashtira oladigan mineral shaklga aylantiradi.",
        highlights: [
          "Mikroorganizmlarning noyob ustunliklari: ulkan metabolik xilma-xillik, nitrogenaza kabi noyob fermentlar, tez ko‘payish va ekstremal muhitga chidamlilik",
          "Asosiy funksiyalar: mineralizatsiya, birlamchi mahsulot (fotosintez/xemosintez), tuproq hosil qilish va tabiiy o‘z-o‘zini tozalash",
        ],
      },
      {
        heading: "14.2. Azot aylanishi va biologik azot fiksatsiyasi",
        content:
          "Atmosferada 78% N₂ bo‘lsa-da, uchqat kovalent bog‘ (N≡N) tufayli o‘simliklar uni bevosita o‘zlashtira olmaydi. Azotofiksatorlar (Rhizobium, Azotobacter, ko‘k-yashil suvo‘tlar) nitrogenaza yordamida N₂ ni NH₃ ga qaytaradi.",
        highlights: [
          "Azot sikli 4 bosqichi: Azot fiksatsiyasi (N₂ → NH₃) → Ammonifikatsiya (oqsil → NH₄⁺) → Nitrifikatsiya (NH₄⁺ → NO₂⁻ → NO₃⁻, Nitrosomonas/Nitrobacter) → Denitrifikatsiya (NO₃⁻ → N₂)",
          "Nitrogenaza kislorodda tez inaktivlanadi; dukkaklilar tuganagida leggemoglobin kislorodni tartibga solib uni himoyalaydi",
          "Azot fiksatsiyasi ko‘p energiya (har bir N₂ molekulasiga ~16 ATF) talab qiladi",
        ],
      },
      {
        heading: "14.3. Uglerod, oltingugurt, fosfor aylanishi va bioo‘g‘itlar",
        content:
          "Anaerob sharoitda metanogen arxeylar uglerodni metanga (CH₄) aylantiradi; oltingugurt bakteriyalari H₂S ↔ SO₄²⁻ o‘zgarishini boshqaradi; fosfor-mobilizatorlar esa erimaydigan fosfatlarni o‘simlikka qulay shaklga o‘tkazadi.",
        highlights: [
          "Nitragin (rizotorfin) — dukkakli ekinlar urug‘ini Rhizobium bilan emlash uchun bioo‘g‘it",
          "Azotobakterin — erkin yashovchi Azotobacter asosida (azot + o‘sish stimulyatorlari)",
          "Fosforobakterin (Bacillus megaterium) va mikoriza zamburug‘lari — fosfor va suv o‘zlashtirilishini keskin yaxshilaydi",
        ],
      },
    ],
    comparisonTable: {
      title: "Azot aylanishining asosiy mikrobiologik jarayonlari",
      columns: ["Jarayon", "Kimyoviy o‘zgarish", "Asosiy mikroorganizmlar", "Sharoit"],
      rows: [
        [
          "Azot fiksatsiyasi",
          "N₂ → NH₃",
          "Rhizobium, Azotobacter, Anabaena",
          "Nitrogenaza (O₂ dan himoyalangan)",
        ],
        [
          "Ammonifikatsiya",
          "Organik N → NH₄⁺",
          "Saprotrof bakteriya va zamburug‘lar",
          "Aerob va anaerob",
        ],
        [
          "Nitrifikatsiya",
          "NH₄⁺ → NO₂⁻ → NO₃⁻",
          "Nitrosomonas, Nitrobacter",
          "Qat’iy aerob (xemosintez)",
        ],
        [
          "Denitrifikatsiya",
          "NO₃⁻ → N₂O → N₂",
          "Pseudomonas, Paracoccus",
          "Anaerob (botqoq/zich tuproq)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Nitrogenaza",
        definition:
          "Atmosfera molekulyar azotini (N₂) ammiakka qaytaruvchi, kislorodga o‘ta sezgir prokariot ferment kompleksi.",
      },
      {
        term: "Leggemoglobin",
        definition:
          "Dukkakli o‘simliklar ildiz tuganaklaridagi qizil oqsil; nafas olish uchun O₂ tashib, nitrogenazani erkin kisloroddan himoyalaydi.",
      },
      {
        term: "Nitrifikatsiya",
        definition:
          "Ammoniy ionlarining avtotrof bakteriyalar tomonidan nitrit va nitratlargacha oksidlanish jarayoni.",
      },
      {
        term: "Denitrifikatsiya",
        definition:
          "Anaerob sharoitda nitratlarning gazsimon azotga (N₂) qaytarilib atmosferaga qaytishi.",
      },
      {
        term: "Nitragin va Azotobakterin",
        definition:
          "Simbiotik (Rhizobium) va erkin yashovchi (Azotobacter) azotofiksatorlar asosidagi ekologik bioo‘g‘itlar.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Dukkakli o‘simliklar tuganaklarida leggemoglobin qanday muhim vazifani bajaradi?",
        answer:
          "U bakteroidlar nafas olishi uchun bog‘langan kislorod yetkazib beradi, ayni paytda erkin kislorod konsentratsiyasini past ushlab nitrogenaza fermentini inaktivatsiyadan saqlaydi.",
      },
      {
        question:
          "Nima uchun qishloq xo‘jaligida tuproqni yumshatish denitrifikatsiyadan azot yo‘qotilishini kamaytiradi?",
        answer:
          "Denitrifikatsiya anaerob sharoitda (havo yetishmaydigan zich yoki botqoq tuproqda) kechadi; tuproq yaxshi shamollatilganda nitratlar gazsimon N₂ ga aylanib uchib ketmaydi.",
      },
      {
        question: "Nitragin va fosforobakterin bioo‘g‘itlarining vazifasi nimadan iborat?",
        answer:
          "Nitragin dukkaklilar ildizida atmosfera azotini fiksatsiya qiluvchi tuganaklar hosil bo‘lishini kuchaytiradi; fosforobakterin esa tuproqdagi qiyin eriydigan fosfatlarni o‘simlik o‘zlashtira oladigan shaklga o‘tkazadi.",
      },
    ],
    keyTerms: [
      "biogeokimyoviy aylanish",
      "mineralizatsiya",
      "azot fiksatsiyasi",
      "nitrogenaza",
      "Rhizobium",
      "Azotobacter",
      "leggemoglobin",
      "nitrifikatsiya",
      "denitrifikatsiya",
      "nitragin",
      "fosforobakterin",
      "mikoriza",
    ],
    references: "Xalimova N.T. Biotexnologiya · 14-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/14-mavzu_Moddalar_aylanishida_mikroorganizmlar_5df8c18d.pdf",
    pdfTitle: "14-mavzu: Tabiatda moddalar aylanishida mikroorganizmlarning roli (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "14-mavzu: Tabiatda moddalar aylanishida mikroorganizmlarning roli (Ma’ruza matni)",
        url: "/assets/aistudio/14-mavzu_Moddalar_aylanishida_mikroorganizmlar_5df8c18d.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "14-mavzu: Tabiatda moddalar aylanishida mikroorganizmlarning roli (Taqdimot)",
        url: "/assets/aistudio/14-mavzu_Moddalar_aylanishida_mikroorganizmlar_1a6ca0de.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-15",
    order: 15,
    code: "BT15",
    topicLabel: "15-mavzu",
    module: "II bo‘lim: Mikrobiologik sintez, fermentlar va bioprotsesslar",
    title: "Enzimatik muhandislik va fermentlar biotexnologiyasi",
    syllabusPoints: [
      "Fermentlarning tuzilishi (faol markaz, «induksiyalangan moslik», kofaktor/koferment) va 6 ta xalqaro sinfi",
      "Ferment faolligiga ta’sir qiluvchi omillar: Mixaelis-Menten kinetikasi (Km, Vmax), harorat, pH va ingibirlash",
      "Sanoat fermentlarini mikroorganizmlardan ishlab chiqarish (Bacillus, Aspergillus, Trichoderma) va afzalliklari",
      "Fermentlarning oziq-ovqat, kir yuvish (detergent), to‘qimachilik, qog‘oz va bioyonilg‘i sanoatida qo‘llanilishi",
      "Oqsil muhandisligi: ratsional dizayn (yo‘naltirilgan mutagenez) va yo‘naltirilgan evolyutsiya (F. Arnold, Nobel mukofoti)",
    ],
    studyNotes:
      "Fermentlar reaksiyani 10⁶–10¹² marta tezlashtiradi. Km qancha kichik bo‘lsa, fermentning substratga yaqinligi shuncha yuqori. Oqsil muhandisligida yo‘naltirilgan mutagenez va yo‘naltirilgan evolyutsiya orqali termostabil va ishqorga chidamli sanoat fermentlari yaratiladi.",
    overview:
      "Enzimatik muhandislik fermentlarni sanoat miqyosida ishlab chiqarish va ularning barqarorligi, faolligi hamda substrat xususiyligini maqsadli yaxshilash bilan shug‘ullanadi. Ma’ruzada fermentlarning 6 sinfi, Mixaelis-Menten tenglamasi, amilaza/proteaza/lipaza/sellulaza/pektinaza qo‘llanilishi hamda ratsional dizayn va yo‘naltirilgan evolyutsiya yondashuvlari yoritilgan.",
    sections: [
      {
        heading: "15.1. Fermentlar xossalari, 6 sinfi va kinetikasi",
        content:
          "Ferment faol markazi bog‘lovchi va katalitik uchastkalardan iborat bo‘lib, «induksiyalangan moslik» modeli bo‘yicha ishlaydi. Xalqaro tasnifga ko‘ra 6 asosiy sinf mavjud: oksidoreduktaza, transferaza, gidrolaza, liaza, izomeraza va ligaza.",
        highlights: [
          "Mixaelis-Menten tenglamasi: v = Vmax·[S] / (Km + [S]); Km — tezlik Vmax/2 ga teng bo‘lgan substrat konsentratsiyasi",
          "Optimal harorat va pH dan keskin og‘ish oqsil denaturatsiyasiga olib keladi",
          "Ingibirlash turlari: raqobatli (Km oshadi, Vmax o‘zgarmaydi), raqobatsiz (Vmax kamayadi) va qaytmas",
        ],
      },
      {
        heading: "15.2. Sanoat fermentlari va qo‘llanilish sohalari",
        content:
          "Sanoat fermentlarining 90% dan ortig‘i mikroorganizmlardan (Bacillus, Aspergillus, Trichoderma) olinadi, chunki ular yil davomida arzon xomashyoda tez va mo‘l sekretsiya qilinadi.",
        highlights: [
          "Amilazalar va glyukoamilaza — kraxmaldan glyukoza siropi, non va pivo sanoati",
          "Ishqoriy proteazalar va lipazalar — kir yuvish kukunlari (sovuq suvda dog‘ ketkazish, energiya tejash)",
          "Pektinazalar — meva sharbatlarini tiniqlashtirish; ximozin (rekombinant) — pishloq ivitish; sellulazalar — to‘qimachilik (jinsi «bio-polishing») va bioetanol",
        ],
      },
      {
        heading: "15.3. Oqsil muhandisligi va fermentlarni takomillashtirish",
        content:
          "Tabiiy fermentlar ko‘pincha sanoatning yuqori harorat, keskin pH yoki organik erituvchi sharoitlariga chidamsiz bo‘ladi. Oqsil muhandisligi ikki asosiy yo‘l bilan ularni yaxshilaydi.",
        highlights: [
          "Ratsional dizayn (sayt-yo‘naltirilgan mutagenez) — 3D struktura asosida aniq aminokislotani almashtirish (masalan, disulfid bog‘ qo‘shib termostabillikni oshirish)",
          "Yo‘naltirilgan evolyutsiya (F. Arnold, 2018-yil Nobel mukofoti) — tasodifiy mutagenez + yuqori tezlikli skrining sikllari orqali yangi xossali ferment tanlash",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy sanoat fermentlari va ularning qo‘llanilishi",
      columns: ["Ferment", "Asosiy produtsent", "Katalizlaydigan reaksiya", "Sanoat sohasi"],
      rows: [
        [
          "α-Amilaza / Glyukoamilaza",
          "Bacillus, Aspergillus",
          "Kraxmalni dekstrin va glyukozaga parchalash",
          "Oziq-ovqat, kraxmal-qiyom, non",
        ],
        [
          "Ishqoriy proteaza",
          "Bacillus licheniformis",
          "Oqsil bog‘larini gidrolizlash",
          "Kir yuvish vositalari, teri sanoati",
        ],
        [
          "Sellulaza",
          "Trichoderma reesei",
          "Sellyulozani glyukozaga parchalash",
          "To‘qimachilik, qog‘oz, bioetanol",
        ],
        [
          "Pektinaza",
          "Aspergillus niger",
          "Pektin moddalarini parchalash",
          "Sharbat va vino tiniqlashtirish",
        ],
        [
          "Glyukoza izomeraza",
          "Streptomyces / Bacillus",
          "Glyukozani fruktozaga aylantirish",
          "Yuqori fruktozali sirop (HFCS)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Faol markaz",
        definition:
          "Ferment molekulasining substratni bog‘lovchi va kimyoviy reaksiyani katalizlovchi maxsus uchastkasi.",
      },
      {
        term: "Mixaelis doimiysi (Km)",
        definition:
          "Reaksiya tezligi maksimal tezlikning yarmiga (Vmax/2) yetgandagi substrat konsentratsiyasi; fermentning substratga yaqinlik ko‘rsatkichi.",
      },
      {
        term: "Sayt-yo‘naltirilgan mutagenez",
        definition:
          "Genning aniq bitta kodonini o‘zgartirib, oqsildagi ma’lum aminokislotani maqsadli almashtirish usuli.",
      },
      {
        term: "Yo‘naltirilgan evolyutsiya",
        definition:
          "Laboratoriyada tasodifiy mutatsiyalar yaratish va kerakli xossali (termostabil, faol) fermentlarni saralab olish sikli.",
      },
      {
        term: "Termostabillik",
        definition:
          "Fermentning yuqori sanoat haroratlarida (60–95 °C) denaturatsiyaga uchramasdan faolligini saqlab qolish qobiliyati.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Ikki fermentdan birining Km qiymati 0,1 mM, ikkinchisiniki 5 mM bo‘lsa, qaysi biri substratga yuqori yaqinlikka ega?",
        answer:
          "Km = 0,1 mM bo‘lgan birinchi ferment substratga ancha yuqori yaqinlikka (affinitetga) ega, chunki u past substrat konsentratsiyasida ham yarim maksimal tezlikka erishadi.",
      },
      {
        question: "Ratsional dizayn yo‘naltirilgan evolyutsiyadan nimasi bilan farq qiladi?",
        answer:
          "Ratsional dizayn fermentning aniq 3D strukturasini bilishni va maqsadli nuqtaviy mutatsiya kiritishni talab qiladi; yo‘naltirilgan evolyutsiya esa 3D strukturasiz ham tasodifiy mutatsiya va skrining orqali yaxshi variantni topadi.",
      },
      {
        question:
          "Nima uchun sanoat fermentlari asosan hayvon yoki o‘simliklardan emas, mikroorganizmlardan olinadi?",
        answer:
          "Mikroorganizmlar tez va arzon o‘sadi, mavsumga bog‘liq emas, genetik modifikatsiyaga qulay va fermentlarni ko‘p miqdorda to‘g‘ridan-to‘g‘ri muhitga ajratadi.",
      },
    ],
    keyTerms: [
      "enzimatik muhandislik",
      "faol markaz",
      "Mixaelis-Menten",
      "Km",
      "Vmax",
      "amilaza",
      "proteaza",
      "sellulaza",
      "pektinaza",
      "oqsil muhandisligi",
      "yo‘naltirilgan mutagenez",
      "yo‘naltirilgan evolyutsiya",
    ],
    references: "Xalimova N.T. Biotexnologiya · 15-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/15-mavzu_Enzimatik_muhandislik_va_fermentlar_90f55ca0.pdf",
    pdfTitle: "15-mavzu: Enzimatik muhandislik va fermentlar biotexnologiyasi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "15-mavzu: Enzimatik muhandislik va fermentlar biotexnologiyasi (Ma’ruza matni)",
        url: "/assets/aistudio/15-mavzu_Enzimatik_muhandislik_va_fermentlar_90f55ca0.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "15-mavzu: Enzimatik muhandislik va fermentlar biotexnologiyasi (Taqdimot)",
        url: "/assets/aistudio/15-mavzu_Enzimatik_muhandislik_va_fermentlar_533f9a4c.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-16",
    order: 16,
    code: "BT16",
    topicLabel: "16-mavzu",
    module: "II bo‘lim: Mikrobiologik sintez, fermentlar va bioprotsesslar",
    title: "Ferment va mikroorganizm hujayralarini immobilizatsiya qilish",
    syllabusPoints: [
      "Immobilizatsiya tushunchasi, maqsadi, afzalliklari va faollik pasayishi sabablari (diffuziya cheklovi)",
      "Fizik immobilizatsiya usullari: adsorbsiya, gelga kiritish (kalsiy alginat, agaroza, karragenan) va mikrokapsulalash",
      "Kimyoviy immobilizatsiya usullari: tashuvchiga kovalent bog‘lash va glutar aldegid bilan ko‘ndalang bog‘lash (CLEA)",
      "Tashuvchilar (matritsalar) turlari (tabiiy, sintetik, noorganik) va ularga qo‘yiladigan texnologik talablar",
      "Immobillangan tizimlarning sanoatda qo‘llanilishi: HFCS (glyukoza izomeraza), 6-APK (penitsillin atsilaza), laktozasiz sut, kolonka reaktorlari",
    ],
    studyNotes:
      "Immobilizatsiyada ferment faolligi 20–40% kamaysa ham, uni o‘nlab-yuzlab marta qayta ishlatish va uzluksiz kolonka reaktorida qo‘llash tufayli ulkan iqtisodiy samara olinadi. Kalsiy alginat geliga kiritish tirik hujayralar uchun eng yumshoq usuldir.",
    overview:
      "Erkin ferment bir martalik reaksiyadan so‘ng mahsulot bilan birga yo‘qotiladi. Immobilizatsiya biokatalizatorni erimaydigan matritsaga biriktirish orqali uni qayta ishlatish, mahsulotni toza olish va uzluksiz reaktorlar qurish imkonini beradi. Ma’ruzada fizik va kimyoviy usullar, tashuvchilar tanlovi va sanoat misollari yoritilgan.",
    sections: [
      {
        heading: "16.1. Immobilizatsiya mohiyati, afzalliklari va cheklovlari",
        content:
          "Immobilizatsiya ferment yoki tirik hujayrani erimaydigan tashuvchi bilan bog‘lash yoki yarim o‘tkazuvchan fazo ichida ushlab turishdir. U katalizator xarajatini keskin kamaytiradi, uzluksiz jarayonni ta’minlaydi va ko‘pincha operatsion barqarorlikni oshiradi.",
        highlights: [
          "Faollik kamayishi sabablari: faol markazning qisman to‘silishi, konformatsiya o‘zgarishi, substrat diffuziya cheklovi va noto‘g‘ri yo‘nalishda birikish",
          "Hujayralarni immobilizatsiya qilish qimmat ferment ajratish bosqichini yo‘qotadi va koferment regeneratsiyasini saqlab qoladi",
        ],
      },
      {
        heading: "16.2. Fizik va kimyoviy immobilizatsiya usullari",
        content:
          "Usul tanlovi biokatalizator barqarorligi va bog‘ mustahkamligi o‘rtasidagi muvozanatga bog‘liq: fizik usullar yumshoq, kimyoviy usullar esa juda mustahkamdir.",
        highlights: [
          "Adsorbsiya (fizik) — eng sodda va yumshoq, lekin pH/tuz o‘zgarsa ferment yuvilib ketishi (desorbsiya) mumkin",
          "Gelga kiritish (kalsiy alginat, karragenan, agaroza, poliakrilamid) — tirik hujayralar uchun qulay; yirik substratlar uchun diffuziya cheklovi bor",
          "Kovalent bog‘lash — tashuvchi bilan mustahkam kimyoviy bog‘ (yuvilmaydi), ammo faol markaz zararlanish xavfi bor",
          "Ko‘ndalang bog‘lash (glutar aldegid bilan CLEA) — tashuvchisiz ferment molekulalarini o‘zaro bog‘lash",
        ],
      },
      {
        heading: "16.3. Matritsalar va sanoat tatbiqlari",
        content:
          "Ideal matritsa mexanik mustahkam, kimyoviy inert, g‘ovakdor (katta yuzali), mikroblarga chidamli, toksik bo‘lmagan va arzon bo‘lishi kerak.",
        highlights: [
          "Yuqori fruktozali makkajo‘xori siropi (HFCS) — immobillangan glyukoza izomeraza kolonkasida yiliga millionlab tonna ishlab chiqariladi",
          "6-APK olish — immobillangan penitsillin atsilaza yordamida yarim sintetik penitsillinlar asosini olish",
          "Laktozasiz sut (immobillangan β-galaktozidaza), L-aminokislotalarni optik ajratish (aminoatsilaza) va oqava suv biofiltrlari",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy immobilizatsiya usullarining qiyosiy tavsifi",
      columns: ["Usul", "Bog‘lanish tabiati", "Bog‘ mustahkamligi", "Faollik saqlanishi / Obyekt"],
      rows: [
        [
          "Adsorbsiya",
          "Vodorod, ion, hidrofob",
          "Past (desorbsiya xavfi)",
          "Juda yuqori; ferment va hujayra",
        ],
        [
          "Gelga kiritish (Ca-alginat)",
          "Teshikchali panjara ichida",
          "O‘rtacha",
          "Yuqori; ayniqsa tirik hujayralar uchun",
        ],
        [
          "Kapsulalash",
          "Yarim o‘tkazuvchan membrana",
          "Yuqori",
          "Yuqori; kichik substratlar uchun",
        ],
        [
          "Kovalent bog‘lash",
          "Mustahkam kovalent bog‘",
          "Juda yuqori (yuvilmaydi)",
          "O‘rtacha; toza fermentlar uchun",
        ],
        [
          "Ko‘ndalang bog‘lash",
          "Glutar aldegid ko‘priklari",
          "Yuqori (tashuvchisiz)",
          "O‘rtacha; CLEA preparatlari",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Immobilizatsiya",
        definition:
          "Ferment yoki hujayrani erimaydigan matritsaga bog‘lab, qayta ishlatish va uzluksiz jarayon olib borish texnologiyasi.",
      },
      {
        term: "Kalsiy alginat",
        definition:
          "Natriy alginat va CaCl₂ reaksiyasida hosil bo‘luvchi tabiiy gel; tirik hujayralarni yumshoq immobilizatsiya qilishda keng qo‘llaniladi.",
      },
      {
        term: "Diffuziya cheklovi",
        definition:
          "Substratning matritsa ichidagi fermentga yetib borishi yoki mahsulotning chiqib ketishi sekinlashishi hodisasi.",
      },
      {
        term: "Glutar aldegid",
        definition:
          "Fermentlarning aminoguruhlari orasida kovalent ko‘ndalang bog‘lar hosil qiluvchi bifunksional reagent.",
      },
      {
        term: "Kolonka reaktori",
        definition:
          "Immobillangan biokatalizator bilan to‘ldirilgan, substrat uzluksiz oqib mahsulotga aylanuvchi oqimli reaktor.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Immobilizatsiyadan keyin ferment faolligi pasaysa ham nima uchun u sanoatda foydali?",
        answer:
          "Ferment mahsulotdan oson ajraladi va o‘nlab-yuzlab sikl qayta ishlatiladi, operatsion barqarorligi oshadi hamda uzluksiz ishlab chiqarish imkonini beradi.",
      },
      {
        question:
          "Tirik mikroorganizm hujayralarini immobilizatsiya qilishda nima uchun kovalent bog‘lash emas, kalsiy alginat geliga kiritish afzal?",
        answer:
          "Kovalent bog‘lashdagi kimyoviy reagentlar hujayra membranasini shikastlab nobud qiladi; kalsiy alginat geliga kiritish esa xona haroratida yumshoq kechib hujayra tirikligini saqlaydi.",
      },
      {
        question: "Immobillangan fermentlarning ikkita yirik sanoat tatbiqiga misol keltiring.",
        answer:
          "1) Glyukoza izomeraza kolonkasida yuqori fruktozali sirop (HFCS) olish; 2) Penitsillin atsilaza yordamida yarim sintetik penitsillinlar uchun 6-APK ishlab chiqarish.",
      },
    ],
    keyTerms: [
      "immobilizatsiya",
      "matritsa",
      "adsorbsiya",
      "gelga kiritish",
      "kalsiy alginat",
      "kovalent bog‘lash",
      "glutar aldegid",
      "diffuziya cheklovi",
      "kolonka reaktori",
      "glyukoza izomeraza",
    ],
    references: "Xalimova N.T. Biotexnologiya · 16-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/16-mavzu_Immobilizatsiya_texnologiyasi_17eaaac3.pdf",
    pdfTitle: "16-mavzu: Ferment va hujayralarni immobilizatsiya qilish (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "16-mavzu: Ferment va hujayralarni immobilizatsiya qilish (Ma’ruza matni)",
        url: "/assets/aistudio/16-mavzu_Immobilizatsiya_texnologiyasi_17eaaac3.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "16-mavzu: Ferment va hujayralarni immobilizatsiya qilish (Taqdimot)",
        url: "/assets/aistudio/16-mavzu_Immobilizatsiya_texnologiyasi_d6fe624e.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-17",
    order: 17,
    code: "BT17",
    topicLabel: "17-mavzu",
    module: "II bo‘lim: Mikrobiologik sintez, fermentlar va bioprotsesslar",
    title: "Biosensorlar, biologik chiplar va bioreaktorlar",
    syllabusPoints: [
      "Biosensorlar tuzilishi (biologik tanib oluvchi element + transdyuser + kuchaytirgich) va ishlash tamoyili",
      "Biosensor turlari (amperometrik, potensiometrik, optik, immunosensor, DNK-sensor) va glyukometr misoli",
      "Biologik chiplar (DNK mikromassivlari, oqsil chiplari, lab-on-a-chip mikroflyuidika)",
      "Bioreaktorlar tuzilishi (aralashtirgich, barbotyor, sovutish ko‘ylagi, pH va DO datchiklari) va turlari (CSTR, airlift, fotobioreaktor, bir martalik)",
      "Bioreaktorda jarayonni avtomatik boshqarish (PID, SCADA, PAT) va sterillik nazorati",
    ],
    studyNotes:
      "Biosensor namunani murakkab tayyorlashsiz bir necha soniyada aniq natija beradi (masalan, glyukozooksidazali amperometrik glyukometr). Bioreaktorlarda jarayon harorat, pH, erigan kislorod (DO) va ko‘pik datchiklari orqali SCADA tizimida avtomatik boshqariladi.",
    overview:
      "Zamonaviy biotexnologiya jarayonni aniq o‘lchash (biosensor va biochiplar) hamda optimal boshqarish (bioreaktor va SCADA) uyg‘unligiga asoslanadi. Ma’ruzada ferment, antitana va DNK-zondli biosensorlar, DNK mikromassivlari va lab-on-a-chip qurilmalari, mexanik aralashtirgichli va airlift bioreaktorlar hamda bir martalik (single-use) tizimlar batafsil yoritiladi.",
    sections: [
      {
        heading: "17.1. Biosensorlar tuzilishi, turlari va glyukometr",
        content:
          "Biosensor biologik tanib oluvchi elementni (ferment, antitana, DNK-zond, hujayra, aptamer) fizik transdyuser bilan birlashtirib, kimyoviy o‘zgarishni elektr yoki optik signalga aylantiradi.",
        highlights: [
          "Transdyuser turlari: amperometrik (tok kuchi — eng keng tarqalgan), potensiometrik, optik (SPR, fluoressensiya), kalorimetrik, piezoelektrik",
          "Glyukoza biosensori (glyukometr) — glyukozooksidaza glyukozani oksidlab elektronlar oqimini hosil qiladi; qandli diabet nazoratida inqilobiy vosita",
          "Immunosensorlar (antigen–antitana) patogen va gormonlarni, hujayra biosensorlari esa suvning umumiy toksikligini aniqlaydi",
        ],
      },
      {
        heading: "17.2. Biologik chiplar va lab-on-a-chip",
        content:
          "Biochip bitta kichik shisha yoki kremniy plastinkada minglab biologik tahlillarni bir vaqtda o‘tkazish imkonini beradi.",
        highlights: [
          "DNK mikromassivlari (DNK-chiplar) — komplementar gibridizatsiya orqali bir vaqtda o‘n minglab genlar ekspressiyasini va mutatsiyalarni tahlil qiladi",
          "Oqsil chiplari — antitanalar va biomarkerlarni parallel aniqlash",
          "Lab-on-a-chip (mikroflyuidika) — butun laboratoriya bosqichlarini bitta chipga joylab, mikrolitr namuna bilan tezkor diagnostika o‘tkazadi",
        ],
      },
      {
        heading: "17.3. Bioreaktorlar tuzilishi va avtomatik boshqarish",
        content:
          "Bioreaktor mikroorganizmlar yoki hujayralar uchun ideal steril muhit yaratuvchi apparatdir. Mexanik aralashtirgichli (CSTR), pnevmatik/airlift (hayvon va o‘simlik hujayralari uchun yumshoq), fotobioreaktor (mikrosuvo‘tlar) va bir martalik (single-use) polimer qoplar keng qo‘llaniladi.",
        highlights: [
          "Asosiy uzellar: sterilizatsiyalanuvchi korpus, aralashtirgich (meshalka), havo purkovchi barbotyor, sovutish ko‘ylagi, ko‘pik so‘ndirgich, pH/T/DO datchiklari",
          "Avtomatik boshqaruv (PID va SCADA) — real vaqtda kislota/ishqor, oziqa va havo uzatilishini sozlab partiyalar takrorlanuvchanligini kafolatlaydi",
          "Bir martalik bioreaktorlar — yuvish va bug‘ bilan sterilizatsiya (CIP/SIP) xarajatini bartaraf etib biofarmatsevtikada tez ommalashmoqda",
        ],
      },
    ],
    comparisonTable: {
      title: "Biosensorlarning biologik elementlari va aniqlash tamoyillari",
      columns: [
        "Biologik element",
        "Tanib olish mexanizmi",
        "Aniqlanadigan moddalar",
        "Misol / Qo‘llanilish",
      ],
      rows: [
        [
          "Ferment",
          "Substrat xususiyligi",
          "Glyukoza, laktat, mochevina",
          "Glyukometr (glyukozooksidaza)",
        ],
        [
          "Antitana",
          "Antigen–antitana bog‘lanishi",
          "Oqsillar, gormonlar, patogenlar",
          "Immunosensorlar, ekspress-testlar",
        ],
        [
          "DNK zond",
          "Komplementar gibridizatsiya",
          "Genlar, mutatsiyalar, viruslar",
          "DNK-sensor, DNK mikromassiv",
        ],
        [
          "Tirik hujayra",
          "Umumiy fiziologik javob",
          "Toksiklik, BPK, og‘ir metallar",
          "Ekologik suv monitoringi",
        ],
        [
          "Aptamer",
          "Sun’iy DNK/RNK affiniteti",
          "Kichik molekulalar, toksinlar",
          "Barqaror yangi avlod sensorlari",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Biosensor",
        definition:
          "Biologik tanib oluvchi element va fizik transdyuserni birlashtirgan tezkor analitik qurilma.",
      },
      {
        term: "Transdyuser",
        definition:
          "Biologik reaksiyadagi kimyoviy/fizik o‘zgarishni o‘lchanadigan elektr yoki optik signalga aylantiruvchi element.",
      },
      {
        term: "Lab-on-a-chip",
        definition:
          "Namuna tayyorlash, reaksiya va aniqlashni mikrokanallarda bitta chip ustida bajaruvchi mikroflyuidik tizim.",
      },
      {
        term: "Airlift bioreaktor",
        definition:
          "Mexanik parraklarsiz, faqat gaz pufakchalari oqimi bilan yumshoq aralashtiruvchi bioreaktor (nozik hujayralar uchun).",
      },
      {
        term: "SCADA tizimi",
        definition:
          "Bioreaktor datchiklari (pH, T, erigan kislorod) ko‘rsatkichlarini real vaqtda yig‘ib avtomatik boshqaruvchi dasturiy-apparat majmua.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Biosensorning an’anaviy laboratoriya tahliliga nisbatan eng katta amaliy ustunligi nimada?",
        answer:
          "Namunani uzoq va murakkab tayyorlash shart emas — biosensor bir tomchi qon yoki suvga tegizilishi bilan soniyalar ichida yuqori tanlanuvchan natija beradi.",
      },
      {
        question:
          "Hayvon va o‘simlik hujayralarini o‘stirishda nima uchun oddiy tezkor aralashtirgichli reaktor emas, airlift yoki yumshoq reaktorlar qo‘llaniladi?",
        answer:
          "Hayvon hujayralarida mustahkam hujayra devori yo‘q va o‘simlik hujayralari yirik bo‘lgani uchun kuchli mexanik kesish kuchi (shear stress) ularni yorib nobud qiladi.",
      },
      {
        question:
          "Bir martalik (single-use) bioreaktorlarning biofarmatsevtikadagi afzalligi nimada?",
        answer:
          "Oldindan gamma-nurlangan steril polimer qoplar yuvish va bug‘ bilan sterilizatsiya (CIP/SIP) vaqtini, validatsiya xarajatini va o‘zaro ifloslanish xavfini keskin kamaytiradi.",
      },
    ],
    keyTerms: [
      "biosensor",
      "transdyuser",
      "amperometrik",
      "glyukometr",
      "glyukozooksidaza",
      "immunosensor",
      "biochip",
      "mikromassiv",
      "lab-on-a-chip",
      "bioreaktor",
      "airlift",
      "SCADA",
    ],
    references: "Xalimova N.T. Biotexnologiya · 17-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/17-mavzu_Biosensorlar_biochiplar_va_bioreaktorlar_30530db0.pdf",
    pdfTitle: "17-mavzu: Biosensorlar, biochiplar va bioreaktorlar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "17-mavzu: Biosensorlar, biochiplar va bioreaktorlar (Ma’ruza matni)",
        url: "/assets/aistudio/17-mavzu_Biosensorlar_biochiplar_va_bioreaktorlar_30530db0.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "17-mavzu: Biosensorlar, biochiplar va bioreaktorlar (Taqdimot)",
        url: "/assets/aistudio/17-mavzu_Biosensorlar_biochiplar_va_bioreaktorlar_c5ef57da.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-18",
    order: 18,
    code: "BT18",
    topicLabel: "18-mavzu",
    module: "III bo‘lim: Amaliy biotexnologiya va soha kelajagi",
    title: "O‘simlik hujayra va to‘qima muhandisligi (in vitro kultura)",
    syllabusPoints: [
      "In vitro kultura asoslari, totipotentlik hodisasi, eksplant tanlash va sterilizatsiya (endofit infeksiya muammosi)",
      "Oziqa muhitlari (Murashige–Skug — MS) va fitogormonlar nisbati (auksin/sitokinin: kallus, ildiz, novda organogenezi)",
      "Kallus, suspenziya kulturasi, protoplastlar olish va somatik gibridizatsiya",
      "Mikroklonal ko‘paytirish bosqichlari, meristema kulturasi, termoterapiya orqali virussiz ekish materiali olish va akklimatizatsiya",
      "Hujayra kulturalaridan qimmatli ikkilamchi metabolitlar (paklitaksel, shikonin, jenshen) olish, elisitorlar va kriosaqlash",
    ],
    studyNotes:
      "O‘simlik hujayralarining totipotentligi bitta hujayradan butun o‘simlik tiklash imkonini beradi. Auksin/sitokinin nisbati morfogenezni belgilaydi: teng nisbat → kallus; auksin ko‘p → ildiz; sitokinin ko‘p → novda. Apikal meristema kulturasi kartoshka va mevali daraxtlarni viruslardan tozalashning eng ishonchli usulidir.",
    overview:
      "O‘simlik hujayra va to‘qima muhandisligi totipotentlik tamoyiliga tayanib, uchta ulkan amaliy vazifani hal qiladi: qimmatli navlarni tez mikroklonal ko‘paytirish, virussiz sog‘lom ekish materiali olish hamda bioreaktorda hujayra kulturasidan noyob dorivor ikkilamchi metabolitlar ishlab chiqarish.",
    sections: [
      {
        heading: "18.1. Totipotentlik, eksplant, Murashige–Skug muhiti va gormonlar",
        content:
          "O‘simlik hujayralari to‘liq genomni saqlab qolgani uchun tashqi gormonal signal ta’sirida dedifferensiatsiyalanib butun organizmni tiklay oladi (totipotentlik). Standart oziqa — Murashige–Skug (MS) muhiti (makro/mikroelementlar, saxaroza, vitaminlar, agar).",
        highlights: [
          "Eksplant sterillash zanjiri: yuvish → 70% spirt → natriy gipoxlorit → steril suvda yuvish; laminar shkafda qat’iy aseptika",
          "Fitogormon qoidasi (Skug–Miller): auksin ≈ sitokinin → kallus; auksin > sitokinin → ildiz hosil bo‘lishi; sitokinin > auksin → novdalar o‘sishi",
          "Somatik embriogenez — jinsiy hujayralarsiz somatik hujayralardan to‘liq murtak (sun’iy urug‘) olish",
        ],
      },
      {
        heading: "18.2. Mikroklonal ko‘paytirish, virussiz material va protoplastlar",
        content:
          "Mikroklonal ko‘paytirish bitta ona o‘simlikdan bir yilda yuz minglab genetik bir xil ko‘chat olish imkonini beradi. Apikal meristema (0,1–0,3 mm) da o‘tkazuvchi naylar yo‘qligi va hujayralar tez bo‘linishi sababli viruslar u yerga yetib bora olmaydi.",
        highlights: [
          "Virussiz material olish: meristema kulturasi + termoterapiya (37–40 °C) / xemoterapiya + ELISA/PZR nazorati",
          "Akklimatizatsiya (adaptatsiya) — probirkadan chiqqan nozik niholni yuqori namlikdan asta-sekin dalaga moslashtirish (eng nozik bosqich)",
          "Protoplastlar (sellulaza + pektinaza bilan devori eritilgan hujayralar) — jinsiy chatishmaydigan turlarni somatik gibridizatsiya qilish",
        ],
      },
      {
        heading: "18.3. Ikkilamchi metabolitlar sintezi va kriosaqlash",
        content:
          "Dorivor o‘simliklarning suspenziya kulturalarini bioreaktorda o‘stirib, tabiatda noyob va sekin o‘sadigan o‘simliklardan (masalan, Taxus dan saratonga qarshi paklitaksel, Lithospermum dan shikonin, jenshen) yil davomida mahsulot olinadi.",
        highlights: [
          "Elisitorlar (metil yasmonat, zamburug‘ ekstraktlari) — himoya reaksiyasini qo‘zg‘atib ikkilamchi metabolit unumini bir necha barobar oshiradi",
          "Kriosaqlash (−196 °C suyuq azot) — noyob navlar va genofondni somaklonal o‘zgarishsiz uzoq yillar saqlash",
        ],
      },
    ],
    comparisonTable: {
      title: "In vitro o‘simlik kulturalari turlari va amaliy maqsadlari",
      columns: [
        "Kultura turi",
        "Boshlang‘ich material",
        "Asosiy xususiyati",
        "Amaliy qo‘llanilishi",
      ],
      rows: [
        [
          "Meristema kulturasi",
          "Apikal meristema (0,1–0,3 mm)",
          "Viruslardan xoli bo‘linuvchi to‘qima",
          "Kartoshka, uzum, mevalilarni sog‘lomlashtirish",
        ],
        [
          "Kallus kulturasi",
          "Har qanday eksplant bo‘lagi",
          "Tartibsiz bo‘linuvchi hujayra massasi",
          "Regeneratsiya, transformatsiya, seleksiya",
        ],
        [
          "Suspenziya kulturasi",
          "Suyuq muhitdagi kallus",
          "Bioreaktorda o‘stirishga qulay",
          "Paklitaksel, shikonin, jenshen metabolitlari",
        ],
        [
          "Protoplast kulturasi",
          "Devoridan ajratilgan hujayra",
          "Boshqa tur bilan qo‘shila oladi",
          "Somatik gibridizatsiya, DNK kiritish",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Totipotentlik",
        definition:
          "Differensiatsiyalangan o‘simlik hujayrasining mos sharoitda butun yetuk o‘simlik organizmini qayta tiklay olish qobiliyati.",
      },
      {
        term: "Murashige–Skug (MS) muhiti",
        definition:
          "O‘simlik hujayra va to‘qimalarini in vitro o‘stirish uchun eng keng qo‘llaniladigan standart mineral-organik oziqa muhiti.",
      },
      {
        term: "Kallus",
        definition:
          "Eksplant yuzasida fitogormonlar ta’sirida hosil bo‘luvchi differensiatsiyalanmagan (tartibsiz) bo‘linuvchi hujayralar massasi.",
      },
      {
        term: "Meristema kulturasi",
        definition:
          "O‘simlikning eng uchki o‘sish nuqtasini ajratib o‘stirish orqali viruslardan tozalangan ekish materiali olish usuli.",
      },
      {
        term: "Elisitor",
        definition:
          "O‘simlik hujayra kulturasida himoya mexanizmini faollashtirib, qimmatli ikkilamchi metabolitlar sintezini kuchaytiruvchi modda.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Oziqa muhitida auksin va sitokinin nisbati o‘zgarganda eksplantda qanday organogenez ketadi?",
        answer:
          "Auksin va sitokinin muvozanatda bo‘lsa kallus hosil bo‘ladi; auksin ustunlik qilsa ildiz (rizogenez), sitokinin ustunlik qilsa kurtak va novdalar (kaulogenez) rivojlanadi.",
      },
      {
        question:
          "Nima uchun apikal meristema kulturasi virus bilan kasallangan kartoshkadan sog‘lom urug‘lik olish imkonini beradi?",
        answer:
          "0,1–0,3 mm li uchki meristemada viruslar tarqaladigan o‘tkazuvchi naylar hali shakllanmagan va hujayralar virus ko‘payishidan tezroq bo‘linadi.",
      },
      {
        question:
          "In vitro olingan o‘simliklarni dalaga ko‘chirishda akklimatizatsiya nima uchun zarur?",
        answer:
          "Probirkadagi nihol 100% namlik va sun’iy saxarozaga o‘rgangan bo‘lib, kutikulasi yupqa va og‘izchalari zaif ishlaydi; bosqichma-bosqich adaptatsiyasiz u ochiq havoda tezda qurib qoladi.",
      },
    ],
    keyTerms: [
      "in vitro",
      "totipotentlik",
      "eksplant",
      "kallus",
      "Murashige-Skug",
      "auksin",
      "sitokinin",
      "mikroklonal ko‘paytirish",
      "meristema kulturasi",
      "virussiz material",
      "protoplast",
      "elisitor",
    ],
    references: "Xalimova N.T. Biotexnologiya · 18-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/18-mavzu_O_simlik_hujayra_va_to_qima_muhandisligi_bb662b7d.pdf",
    pdfTitle: "18-mavzu: O‘simlik hujayra va to‘qima muhandisligi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "18-mavzu: O‘simlik hujayra va to‘qima muhandisligi (Ma’ruza matni)",
        url: "/assets/aistudio/18-mavzu_O_simlik_hujayra_va_to_qima_muhandisligi_bb662b7d.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "18-mavzu: O‘simlik hujayra va to‘qima muhandisligi (Taqdimot)",
        url: "/assets/aistudio/18-mavzu_O_simlik_hujayra_va_to_qima_muhandisligi_f8225baf.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-19",
    order: 19,
    code: "BT19",
    topicLabel: "19-mavzu",
    module: "III bo‘lim: Amaliy biotexnologiya va soha kelajagi",
    title: "Agrobiotexnologiya va qishloq xo‘jaligi biotexnologiyasi",
    syllabusPoints: [
      "Agrobiotexnologiya vazifalari va markerlarga asoslangan seleksiya (MAS — GMO hisoblanmaydi, seleksiyani keskin tezlashtiradi)",
      "Zararkunandalarga chidamli ekinlar va Bt-texnologiya (Bacillus thuringiensis, Cry-oqsillar, boshpana/refuge strategiyasi)",
      "Gerbitsidga (glifosat, EPSPS), qurg‘oqchilik va sho‘rlanishga (osmoprotektorlar, ion nasoslari) chidamli navlar",
      "Mahsulot sifatini yaxshilash (biofortifikatsiya, «Oltin guruch»), bioo‘g‘itlar va biopestitsidlar",
      "GMO xavfsizligi, xalqaro tartibga solish (Kartaxena protokoli) va ekologik/ijtimoiy munozaralar",
    ],
    studyNotes:
      "Markerga asoslangan seleksiya (MAS) begona gen kiritmaydi — DNK-markerlar yordamida an’anaviy chatishtirishni bir necha barobar tezlashtiradi. Bt-ekinlarda Cry-oqsillar faqat maqsadli hasharot ichagining ishqoriy muhitida faollashadi; zararkunanda chidamliligining oldini olish uchun dalada «boshpana» (Bt-bo‘lmagan) maydon qoldiriladi.",
    overview:
      "Agrobiotexnologiya oziq-ovqat xavfsizligini ta’minlash bilan birga qishloq xo‘jaligining ekologik yukini kamaytirishga qaratilgan. Ma’ruzada MAS texnologiyasi, Bt-g‘o‘za va Bt-makkajo‘xori, glifosatga chidamli ekinlar, qurg‘oqchilik va sho‘rlanishga moslashish genlari (O‘zbekiston sharoiti uchun o‘ta dolzarb), «Oltin guruch» hamda Kartaxena protokoli tahlil qilinadi.",
    sections: [
      {
        heading: "19.1. Agrobiotexnologiya yo‘nalishlari va MAS seleksiyasi",
        content:
          "Ekin maydonlarini kengaytirish cheklangan sharoitda birlik maydondan hosilni oshirish, biotik/abiotik stresslarga chidamli navlar yaratish va kimyoviy pestitsid sarfini kamaytirish asosiy vazifadir.",
        highlights: [
          "Markerga asoslangan seleksiya (MAS) — nihol bosqichida DNK-marker orqali kerakli genotipni aniqlaydi; GMO emas va huquqiy cheklovsiz qo‘llaniladi",
          "Biopestitsidlar (Bt-preparatlar, Trichoderma, entomopatogen viruslar) va bioo‘g‘itlar organik dehqonchilik asosidir",
        ],
      },
      {
        heading: "19.2. Bt-texnologiya, gerbitsid va abiotik stresslarga chidamlilik",
        content:
          "Bacillus thuringiensis bakteriyasining Cry-oqsillari faqat maqsadli zararkunanda lichinkalari ichagining ishqoriy pH ida faollashib ichak devorini teshadi — odam va issiqqonli hayvonlar uchun xavfsiz (oshqozon kislotali, retseptor yo‘q).",
        highlights: [
          "Glifosatga chidamli ekinlar — bakterial EPSPS fermenti hisobiga begona o‘tlar yo‘qotilganda ekin zararlanmaydi",
          "Abiotik stresslar (qurg‘oqchilik, sho‘rlanish): prolin/glitsinbetain osmoprotektorlari, vakuolaga Na⁺ haydovchi NHX nasoslari va DREB transkripsiya omillari",
          "Zararkunanda rezistentligini oldini olish uchun Bt-ekinlar yonida Bt-bo‘lmagan «boshpana» (refuge) zonasi ekiladi",
        ],
      },
      {
        heading: "19.3. Biofortifikatsiya va GMO bioxavfsizligi",
        content:
          "Biofortifikatsiya ekinlarning ozuqaviy qiymatini oshiradi: «Oltin guruch» tarkibida beta-karotin (A provitamini) sintezlanib, rivojlanayotgan mamlakatlarda bolalar ko‘rligi oldini olishga qaratilgan.",
        highlights: [
          "Kartaxena protokoli (2000) — tirik modifikatsiyalangan organizmlarning transchegaraviy harakati va xavfini baholash bo‘yicha xalqaro hujjat",
          "Xavfsizlik tekshiruvi: toksiklik, allergenlik, ozuqaviy ekvivalentlik va yovvoyi turlarga gen ko‘chish (changlanish) xavfi",
        ],
      },
    ],
    comparisonTable: {
      title: "Agrobiotexnologiyaning asosiy yondashuvlari qiyosi",
      columns: ["Yo‘nalish", "Mexanizm / Gen", "GMO maqomi", "Amaliy foydasi"],
      rows: [
        [
          "MAS (DNK-marker seleksiyasi)",
          "Kerakli belgi DNK-markerini aniqlash",
          "GMO emas",
          "Seleksiya muddatini 2–3 barobar qisqartiradi",
        ],
        [
          "Bt-ekinlar (g‘o‘za, makkajo‘xori)",
          "Bacillus thuringiensis Cry-geni",
          "Transgen (GMO)",
          "Insektitsid sarfini keskin kamaytiradi",
        ],
        [
          "Glifosatga chidamli ekinlar",
          "Bakterial EPSPS fermenti",
          "Transgen (GMO)",
          "Begona o‘tlarga qarshi samarali kurash",
        ],
        [
          "«Oltin guruch»",
          "Beta-karotin biosintez genlari",
          "Transgen (GMO)",
          "A vitamini yetishmovchiligiga qarshi biofortifikatsiya",
        ],
        [
          "CRISPR tahrirlangan navlar",
          "O‘z genida aniq tahrir (begona DNK siz)",
          "Ko‘p davlatlarda GMO emas",
          "Qurg‘oqchilik, sho‘r va kasallikka chidamlilik",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Markerga asoslangan seleksiya (MAS)",
        definition:
          "Begona gen kiritmasdan, DNK-markerlar yordamida kerakli belgiga ega duragaylarni yosh niholligida tanlab olish usuli.",
      },
      {
        term: "Cry-oqsillar (Bt-toksin)",
        definition:
          "Bacillus thuringiensis oqsillari; faqat nishon hasharotlarning ishqoriy ichagida faollashib zararkunandani yo‘qotadi.",
      },
      {
        term: "Biofortifikatsiya",
        definition:
          "Qishloq xo‘jaligi ekinlarida vitamin va mikroelementlar miqdorini genetik yoki seleksion usulda oshirish (masalan, «Oltin guruch»).",
      },
      {
        term: "Osmoprotektorlar",
        definition:
          "Qurg‘oqchilik va sho‘rlanish sharoitida hujayra turgorini va oqsillarini himoyalovchi moddalar (prolin, tregaloza, glitsinbetain).",
      },
      {
        term: "Kartaxena protokoli",
        definition:
          "Biologik xilma-xillik konvensiyasi doirasida GMO xavfsizligi va transchegaraviy nazoratini tartibga soluvchi xalqaro bitim.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Markerga asoslangan seleksiya (MAS) transgen (GMO) texnologiyasidan nimasi bilan farq qiladi?",
        answer:
          "MAS da boshqa turdan begona gen kiritilmaydi; u faqat an’anaviy chatishtirishda olingan nihollarni DNK-marker orqali tez tanlab olishga xizmat qiladi va GMO hisoblanmaydi.",
      },
      {
        question:
          "Nima uchun Bt-ekinlarning Cry-oqsili zararkunanda lichinkasini o‘ldiradi, lekin odam uchun xavfsiz?",
        answer:
          "Cry-oqsil faqat hasharot ichagining ishqoriy muhitida faollashadi va hasharot ichak epiteliyasidagi maxsus retseptorlarga bog‘lanadi; odam oshqozoni kislotali bo‘lib, bunday retseptorlar yo‘q.",
      },
      {
        question:
          "O‘zbekiston kabi sho‘rlangan va qurg‘oqchil hududlar uchun agrobiotexnologiyaning qaysi mexanizmlari ayniqsa dolzarb?",
        answer:
          "Osmoprotektorlar (prolin, glitsinbetain) sintezini kuchaytirish, hujayra vakuolasiga ortiqcha Na⁺ ionlarini chiqaruvchi NHX nasoslari hamda qurg‘oqchilikka chidamli DREB genlarini joriy etish.",
      },
    ],
    keyTerms: [
      "agrobiotexnologiya",
      "Bt-ekin",
      "Bacillus thuringiensis",
      "Cry-oqsillar",
      "glifosat",
      "abiotik stress",
      "osmoprotektor",
      "oltin guruch",
      "biofortifikatsiya",
      "markerlarga asoslangan seleksiya",
      "GMO",
      "Kartaxena protokoli",
    ],
    references: "Xalimova N.T. Biotexnologiya · 19-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/19-mavzu_Agrobiotexnologiya_edf94961.pdf",
    pdfTitle: "19-mavzu: Agrobiotexnologiya va qishloq xo‘jaligi biotexnologiyasi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "19-mavzu: Agrobiotexnologiya va qishloq xo‘jaligi biotexnologiyasi (Ma’ruza matni)",
        url: "/assets/aistudio/19-mavzu_Agrobiotexnologiya_edf94961.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "19-mavzu: Agrobiotexnologiya va qishloq xo‘jaligi biotexnologiyasi (Taqdimot)",
        url: "/assets/aistudio/19-mavzu_Agrobiotexnologiya_a4efa7c6.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-20",
    order: 20,
    code: "BT20",
    topicLabel: "20-mavzu",
    module: "III bo‘lim: Amaliy biotexnologiya va soha kelajagi",
    title: "Tibbiyot biotexnologiyasi, gen diagnostikasi va genoterapiya",
    syllabusPoints: [
      "Rekombinant oqsil dorilar: inson insulini (1982) va insulin analoglari, o‘sish gormoni, eritropoetin, interferonlar va biosimilyarlar",
      "Monoklonal antitanalar texnologiyasi: gibridoma (Keler–Milshteyn), ximer, insonlashtirilgan va to‘liq inson antitanalari",
      "Vaksinalar evolyutsiyasi: an’anaviy, rekombinant (gepatit B), virusga o‘xshash zarracha (VLP — VPV) va mRNK vaksinalar",
      "Molekulyar va gen diagnostikasi: PZR, ELISA, NGS sekvenlash, prenatal skrining va farmakogenomika",
      "Gen terapiyasi (in vivo / ex vivo, AAV, CRISPR) va hujayra terapiyasi (CAR-T onkologiyada, iPSC ildiz hujayralari)",
    ],
    studyNotes:
      "1982-yilda bozorga chiqqan rekombinant inson insulini tibbiyot biotexnologiyasini boshlab berdi. Monoklonal antitanalar (gibridoma → insonlashtirilgan → to‘liq inson) onkologiya va autoimmun kasalliklarda nishonli terapiya asosidir; CAR-T va CRISPR terapiyasi esa ilgari davosiz bo‘lgan kasalliklarni davolashga yo‘l ochdi.",
    overview:
      "Tibbiyot biotexnologiyasi («qizil biotexnologiya») sohaning iqtisodiy jihatdan eng yirik yo‘nalishi bo‘lib, diagnostika, profilaktika (vaksinalar) va nishonli davolash vositalarini yaratadi. Ma’ruzada rekombinant oqsillar, monoklonal antitanalar, mRNK va VLP vaksinalar, molekulyar diagnostika, farmakogenomika, gen terapiyasi va CAR-T hujayra terapiyasi tizimli yoritilgan.",
    sections: [
      {
        heading: "20.1. Rekombinant oqsil dorilar va monoklonal antitanalar",
        content:
          "Hayvon to‘qimasidan olinadigan oqsillardan farqli o‘laroq, rekombinant inson oqsillari cheksiz hajmda, infeksiya xavfisiz va minimal immunogenlik bilan ishlab chiqariladi. Monoklonal antitanalar esa bitta aniq epitopga bog‘lanuvchi «sehrli o‘q» vazifasini bajaradi.",
        highlights: [
          "Insulin analoglari — aminokislota o‘zgarishi orqali tezkor yoki uzoq ta’sirli shakllar yaratilgan; eritropoetin va antitanalar CHO hujayralarida olinadi",
          "Gibridoma texnologiyasi (Keler va Milshteyn, Nobel): B-limfotsit + miyeloma hujayrasi → cheksiz bo‘linib bir xil antitana chiqaradi",
          "Immunogenlikni kamaytirish evolyutsiyasi: sichqon (-omab) → ximer (-ximab) → insonlashtirilgan (-zumab) → to‘liq inson (-umab)",
          "Biosimilyar — patenti tugagan original biopreparatning yuqori darajada o‘xshash, ammo arzonroq muqobili",
        ],
      },
      {
        heading: "20.2. Zamonaviy vaksinalar va molekulyar diagnostika",
        content:
          "Rekombinant subbirlik (gepatit B), VLP (odam papilloma virusi) va mRNK vaksinalar (lipid nanozarrachada) tirik patogensiz kuchli immunitet uyg‘otadi va pandemiya sharoitida rekord tezlikda ishlab chiqiladi.",
        highlights: [
          "Molekulyar diagnostika: Real-time PZR (yuqori sezgirlik), ELISA (antitana/antigen), NGS sekvenlash (irsiy mutatsiyalar va onkogenetika)",
          "Farmakogenomika — bemor genotipiga qarab eng samarali va nojo‘ya ta’sirsiz dori hamda dozani shaxsiylashtirib tanlash",
        ],
      },
      {
        heading: "20.3. Gen terapiyasi va hujayra terapiyasi (CAR-T, iPSC)",
        content:
          "Gen terapiyasi kasallik alomatini emas, uning genetik sababini tuzatadi: in vivo (AAV vektori to‘g‘ridan-to‘g‘ri organizmga) yoki ex vivo (hujayralar tashqarida tahrirlanib qaytariladi).",
        highlights: [
          "CAR-T terapiya — bemor T-limfotsitlariga o‘sma hujayrasini taniydigan sun’iy retseptor (CAR) kiritilib, leykoz va limfomalarda yuqori remissiya olinadi",
          "iPSC (induksiyalangan pluripotent ildiz hujayralari, S. Yamanaka) — yetuk somatik hujayrani qayta dasturlab regenerativ tibbiyotda qo‘llash",
          "CRISPR asosidagi ilk klinik gen terapiyasi (o‘roqsimon anemiya va beta-talassemiya) amaliyotga tasdiqlandi",
        ],
      },
    ],
    comparisonTable: {
      title: "Zamonaviy vaksina platformalarining qiyosi",
      columns: ["Vaksina turi", "Tarkibi", "Afzalligi", "Misol / Xususiyat"],
      rows: [
        [
          "Rekombinant subbirlik",
          "Bitta toza virus oqsili",
          "Tirik patogen yo‘q, juda xavfsiz",
          "Gepatit B (achitqida HBsAg)",
        ],
        [
          "VLP (virusga o‘xshash)",
          "DNK/RNK siz virus qobig‘i",
          "Kuchli immun javob, infeksiyasiz",
          "Odam papilloma virusi (VPV)",
        ],
        [
          "Virus vektorli",
          "Zararsiz adenovirusda antigen geni",
          "Kuchli hujayraviy va gumoral javob",
          "Ebola, COVID-19 vaksinalari",
        ],
        [
          "mRNK vaksina",
          "Lipid nanozarrachadagi mRNK",
          "Eng tez loyihalash, genomga kirmaydi",
          "Sovuq zanjir talab qiladi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Monoklonal antitana",
        definition:
          "Bitta hujayra kloni tomonidan ishlab chiqariladigan va faqat bitta aniq antigen epitopiga bog‘lanadigan o‘ta xususiy antitana.",
      },
      {
        term: "Gibridoma",
        definition:
          "Antitana ishlab chiqaruvchi B-limfotsit va cheksiz bo‘linuvchi miyeloma hujayrasining qo‘shilishidan olingan gibrid hujayra.",
      },
      {
        term: "mRNK vaksina",
        definition:
          "Lipid nanozarrachalar ichida patogen oqsilini kodlovchi mRNK yetkazib, hujayraning o‘zida xavfsiz antigen sintezlatuvchi vaksina.",
      },
      {
        term: "CAR-T terapiya",
        definition:
          "Bemorning T-hujayralarini genetik modifikatsiyalab, saraton hujayralarini nishonli yo‘qotishga yo‘naltirilgan hujayra terapiyasi.",
      },
      {
        term: "Farmakogenomika",
        definition:
          "Insonning genetik xususiyatlari uning dorilarga javobi va nojo‘ya ta’sirlariga qanday ta’sir qilishini o‘rganuvchi yo‘nalish.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Monoklonal antitanalar nima uchun sichqon antitanalaridan insonlashtirilgan va to‘liq inson shakliga o‘tkazilgan?",
        answer:
          "Sichqon antitanalari inson immun tizimi tomonidan begona oqsil sifatida tanilib immun reaksiya chaqiradi va tez chiqarib yuboriladi; insonlashtirish immunogenlikni keskin kamaytiradi.",
      },
      {
        question: "In vivo va ex vivo gen terapiyasi o‘rtasidagi farq nimada?",
        answer:
          "In vivo terapiyada genetik vektor (masalan, AAV) to‘g‘ridan-to‘g‘ri bemor organizmiga yuboriladi; ex vivo terapiyada esa bemor hujayralari ajratib olinib laboratoriyada tahrirlanadi (masalan, CAR-T) va keyin qayta kiritiladi.",
      },
      {
        question: "mRNK vaksinalar inson genomini o‘zgartira oladimi?",
        answer:
          "Yo‘q, mRNK hujayra yadrosiga kirmaydi va DNK ga integratsiyalanmaydi; u sitoplazmada ribosomalar orqali vaqtinchalik oqsil sintezlagach tezda parchalanadi.",
      },
    ],
    keyTerms: [
      "tibbiyot biotexnologiyasi",
      "rekombinant insulin",
      "monoklonal antitana",
      "gibridoma",
      "biosimilyar",
      "mRNK vaksina",
      "VLP",
      "ELISA",
      "farmakogenomika",
      "gen terapiyasi",
      "CAR-T",
      "iPSC",
    ],
    references: "Xalimova N.T. Biotexnologiya · 20-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/20-mavzu_Tibbiyot_biotexnologiyasi_6b513f37.pdf",
    pdfTitle:
      "20-mavzu: Tibbiyot biotexnologiyasi, gen diagnostikasi va genoterapiya (Ma’ruza matni)",
    pdfDocuments: [
      {
        title:
          "20-mavzu: Tibbiyot biotexnologiyasi, gen diagnostikasi va genoterapiya (Ma’ruza matni)",
        url: "/assets/aistudio/20-mavzu_Tibbiyot_biotexnologiyasi_6b513f37.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "20-mavzu: Tibbiyot biotexnologiyasi, gen diagnostikasi va genoterapiya (Taqdimot)",
        url: "/assets/aistudio/20-mavzu_Tibbiyot_biotexnologiyasi_4c2e79de.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-21",
    order: 21,
    code: "BT21",
    topicLabel: "21-mavzu",
    module: "III bo‘lim: Amaliy biotexnologiya va soha kelajagi",
    title: "Ekologik biotexnologiya, biometanogenez va bioremediatsiya",
    syllabusPoints: [
      "Ekologik biotexnologiyaning vazifalari, mikroorganizmlarning metabolik ustunliklari va asosiy cheklovi (og‘ir metallar parchalanmaydi)",
      "Oqava suvlarni biologik tozalash: BPK ko‘rsatkichi, aerotenk, faol loyqa, biofiltr va azot/fosforni yo‘qotish",
      "Biometanogenez va biogaz olish texnologiyasi: 4 bosqichli anaerob parchalanish va metanogen arxeylar",
      "Bioremediatsiya tamoyillari va usullari: in situ / ex situ, biostimulyatsiya, bioaugmentatsiya, fitoremediatsiya va bioleaching",
      "Chiqindisiz texnologiyalar, aylanma iqtisodiyot (circular bioeconomy) va ksenobiotiklar biodegradatsiyasi",
    ],
    studyNotes:
      "Ekologik biotexnologiya chiqindini resursga aylantiradi (oqava suvdan biogaz, organik chiqindidan o‘g‘it). Muhim qoida: og‘ir metallar kimyoviy element bo‘lgani uchun mikroorganizmlar ularni yo‘q qilolmaydi — faqat kam zaharli shaklga o‘tkazadi yoki biosorbsiya qilib to‘playdi.",
    overview:
      "Ekologik biotexnologiya («kulrang biotexnologiya») atrof-muhit ifloslanishining oldini olish va zararlangan tuproq hamda suv ekotizimlarini biologik tiklashga qaratilgan. Ma’ruzada aerotenk va faol loyqa ishlashi, metanotenkda 4 bosqichli biometanogenez, neft va ksenobiotiklar bioremediatsiyasi, fitoremediatsiya, bioleaching hamda aylanma bioiqtisodiyot yoritiladi.",
    sections: [
      {
        heading: "21.1. Oqava suvlarni biologik tozalash va faol loyqa",
        content:
          "Biologik tozalash fizik-kimyoviy usullarga qaraganda kam energiya va reagent sarflaydi hamda kam ikkilamchi chiqindi qoldiradi. Aerotenklarda bakteriyalar, sodda hayvonlar va zamburug‘lardan iborat faol loyqa organik ifloslantiruvchilarni (BPK) parchalaydi.",
        highlights: [
          "Tozalash bosqichlari: mexanik (panjara, tindirgich) → biologik (aerotenk/biofiltr, faol loyqa) → chuqur tozalash (azot va fosforni chiqarish) → zararsizlantirish",
          "BPK (kislorodga biologik ehtiyoj) — suvdagi biologik parchalanuvchi organik ifloslanishning asosiy mezoni",
          "Cheklov: og‘ir metallar parchalanmaydi — ular faqat biosorbsiya, cho‘ktirish yoki valentligini o‘zgartirish orqali ajratib olinadi",
        ],
      },
      {
        heading: "21.2. Biometanogenez va biogaz texnologiyasi",
        content:
          "Metanotenklarda anaerob mikroorganizmlar konsorsiumi chorva go‘ngi, oqava suv cho‘kmasi va organik chiqindilardan biogaz (55–70% metan CH₄ + 30–40% CO₂) va sifatli bioo‘g‘it (digestat) hosil qiladi.",
        highlights: [
          "Anaerob parchalanishning 4 bosqichi: 1) Gidroliz → 2) Atsidogenez → 3) Atsetogenez → 4) Metanogenez (metanogen arxeylar)",
          "Harorat rejimlari: mezofil (35–38 °C, barqaror) va termofil (52–55 °C, tez va patogenlarni yo‘qotadi)",
        ],
      },
      {
        heading: "21.3. Bioremediatsiya, fitoremediatsiya va bioleaching",
        content:
          "Bioremediatsiya neft mahsulotlari, pestitsidlar va ksenobiotiklar bilan ifloslangan tuproq hamda yerosti suvlarini mikroorganizmlar va o‘simliklar yordamida tiklaydi.",
        highlights: [
          "In situ (joyida, tuproqni qazimasdan arzon) vs Ex situ (qazib olib biopayl/bioreaktorda tez va nazoratli tozalash)",
          "Biostimulyatsiya — mahalliy mikrofloraga oziqa (N, P) va kislorod berish; Bioaugmentatsiya — faol parchalovchi maxsus shtammlar (Pseudomonas, Alcanivorax) kiritish",
          "Fitoremediatsiya — giperakkumulyator o‘simliklar orqali og‘ir metallarni yig‘ish; Bioleaching (Acidithiobacillus) — kambag‘al rudalardan mis, oltin va uran ajratib olish (Navoiy kon-metallurgiya sanoati uchun muhim)",
        ],
      },
    ],
    comparisonTable: {
      title: "Biologik va fizik-kimyoviy tozalash hamda bioremediatsiya qiyosi",
      columns: ["Mezon / Usul", "Fizik-kimyoviy / Ex situ", "Biologik / In situ"],
      rows: [
        [
          "Energiya va reagent sarfi",
          "Yuqori energiya va ko‘p reagent",
          "Past energiya, deyarli reagentsiz",
        ],
        [
          "Ikkilamchi chiqindi",
          "Ko‘p (kimyoviy cho‘kmalar)",
          "Kam; organik chiqindi biogaz/o‘g‘itga aylanadi",
        ],
        [
          "Tezlik va sezgirlik",
          "Tez, toksin/haroratga chidamli",
          "Sekinroq; harorat, pH va toksinlarga sezgir",
        ],
        [
          "Og‘ir metallar",
          "Kimyoviy cho‘ktirish / ion almashish",
          "Parchalanmaydi; biosorbsiya va fitoremediatsiya",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Faol loyqa",
        definition:
          "Aerotenklarda oqava suv organik moddalarini parchalovchi aerob bakteriyalar, sodda hayvonlar va mikroorganizmlar biotsenozi.",
      },
      {
        term: "Biometanogenez",
        definition:
          "Anaerob sharoitda 4 bosqichda (gidroliz, atsidogenez, atsetogenez, metanogenez) organik chiqindidan biogaz (CH₄) hosil bo‘lishi.",
      },
      {
        term: "Biostimulyatsiya va Bioaugmentatsiya",
        definition:
          "Biostimulyatsiya — mahalliy mikroblarga oziqa/O₂ berib faollashtirish; bioaugmentatsiya — maxsus parchalovchi shtamm kiritish.",
      },
      {
        term: "Fitoremediatsiya",
        definition:
          "Ifloslangan tuproq va suvni maxsus o‘simliklar (giperakkumulyatorlar) hamda ularning rizosfera mikroblari yordamida tozalash.",
      },
      {
        term: "Bioleaching (biogidrometallurgiya)",
        definition:
          "Xemosintezlovchi bakteriyalar (Acidithiobacillus ferrooxidans) yordamida rudalardan mis, oltin va boshqa metallarni ajratib olish.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Biologik tozalash usullari og‘ir metallarni parchalab yo‘q qila oladimi?",
        answer:
          "Yo‘q, og‘ir metallar kimyoviy element bo‘lgani uchun parchalanmaydi. Mikroorganizmlar yoki o‘simliklar ularni faqat kam harakatchan/kam zaharli shaklga o‘tkazadi yoki biomassasida to‘playdi, so‘ng ular ajratib olinadi.",
      },
      {
        question: "Biometanogenez jarayonining to‘rtta ketma-ket bosqichini sanang.",
        answer:
          "1) Gidroliz (polimerlar monomerlarga); 2) Atsidogenez (uchuvchan yog‘ kislotalari); 3) Atsetogenez (atsetat, H₂, CO₂); 4) Metanogenez (metanogen arxeylar CH₄ hosil qiladi).",
      },
      {
        question:
          "Neft bilan ifloslangan tuproqni tozalashda biostimulyatsiya va bioaugmentatsiya qanday farqlanadi?",
        answer:
          "Biostimulyatsiyada tuproqdagi mavjud tabiiy bakteriyalar azot/fosfor o‘g‘itlari va aeratsiya bilan faollashtiriladi; bioaugmentatsiyada esa neft parchalovchi tayyor sanoat shtammlari tashqaridan kiritiladi.",
      },
    ],
    keyTerms: [
      "ekologik biotexnologiya",
      "faol loyqa",
      "aerotenk",
      "BPK",
      "biometanogenez",
      "biogaz",
      "metanogen arxeylar",
      "bioremediatsiya",
      "biostimulyatsiya",
      "bioaugmentatsiya",
      "fitoremediatsiya",
      "bioleaching",
      "ksenobiotik",
    ],
    references: "Xalimova N.T. Biotexnologiya · 21-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/21-mavzu_Ekologik_biotexnologiya_eb4912ae.pdf",
    pdfTitle:
      "21-mavzu: Ekologik biotexnologiya, biometanogenez va bioremediatsiya (Ma’ruza matni)",
    pdfDocuments: [
      {
        title:
          "21-mavzu: Ekologik biotexnologiya, biometanogenez va bioremediatsiya (Ma’ruza matni)",
        url: "/assets/aistudio/21-mavzu_Ekologik_biotexnologiya_eb4912ae.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "21-mavzu: Ekologik biotexnologiya, biometanogenez va bioremediatsiya (Taqdimot)",
        url: "/assets/aistudio/21-mavzu_Ekologik_biotexnologiya_0323040f.pdf",
        kind: "Taqdimot",
      },
    ],
  },
  {
    id: "biotex-22",
    order: 22,
    code: "BT22",
    topicLabel: "22-mavzu",
    module: "III bo‘lim: Amaliy biotexnologiya va soha kelajagi",
    title: "Biotexnologiya mahsulotlari, ishlab chiqarish blok-sxemalari va fan kelajagi",
    syllabusPoints: [
      "Biotexnologik mahsulotlarning tasnifi: biomassa, birlamchi/ikkilamchi metabolitlar, fermentlar, rekombinant oqsillar va qiymat–hajm qonuniyati",
      "Ishlab chiqarishning umumiy blok-sxemasi: Upstream (shtamm, muhit, sterilizatsiya) → Fermentatsiya → Downstream (ajratish, tozalash, qadoqlash)",
      "Jarayonni iqtisodiy va texnologik baholash: unum, mahsuldorlik, tannarx tuzilmasi, masshtablash, GMP va validatsiya",
      "Biotexnologiyaning zamonaviy yutuqlari: sintetik biologiya, sun’iy intellekt (AlphaFold, oqsil dizayni), CRISPR, shaxsiylashtirilgan tibbiyot va bioiqtisodiyot",
      "Sohaning istiqbollari, biologik xavfsizlik, bioetika va mas’uliyatli innovatsiya tamoyillari",
    ],
    studyNotes:
      "Mahsulot turi butun texnologiyani belgilaydi: arzon yirik hajmli mahsulotda (etanol, limon kislota) xomashyo narxi va unum hal qiluvchi; qimmat mahsulotda (monoklonal antitana) esa tozalik, validatsiya va GMP xavfsizligi birinchi o‘rinda turadi.",
    overview:
      "Yakunlovchi ma’ruza butun biotexnologiya kursini yagona muhandislik va strategik tizimga birlashtiradi. Unda mahsulotlar tasnifi, upstream–fermentatsiya–downstream blok-sxemasi, iqtisodiy baholash va masshtablash muammolari, sintetik biologiya va sun’iy intellekt integratsiyasi hamda bioetika va barqaror rivojlanish istiqbollari tahlil qilinadi.",
    sections: [
      {
        heading: "22.1. Biotexnologik mahsulotlar tasnifi va ishlab chiqarish mantig‘i",
        content:
          "Birlamchi metabolitlar hujayra o‘sishi bilan parallel, ikkilamchi metabolitlar esa o‘sish to‘xtagach sintezlanadi. Qiymat va hajm o‘rtasida teskari bog‘liqlik mavjud: arzon mahsulotlarda har bir tiyin (xomashyo va unum), biofarmatsevtikada esa har bir nanogramm tozaligi hal qiluvchi ahamiyatga ega.",
        highlights: [
          "5 asosiy guruh: biomassa (achitqi, probiotik), birlamchi metabolitlar (aminokislota, organik kislota), ikkilamchi metabolitlar (antibiotik), fermentlar va rekombinant terapevtik oqsillar",
          "Umumiy blok-sxema: Upstream (bank shtamm → inokulyat → oziqa sterilizatsiyasi) → Bioreaktor (fermentatsiya) → Downstream (ajratish, xromatografiya, liofilizatsiya, GMP nazorat)",
        ],
      },
      {
        heading: "22.2. Texnologik-iqtisodiy baholash, masshtablash va GMP",
        content:
          "Laboratoriya kolbasidan 100 m³ sanoat bioreaktoriga o‘tish (masshtablash / scale-up) chiziqli emas — aralashtirish, issiqlik olib ketish va kislorod uzatish (k_La) murakkablashadi.",
        highlights: [
          "Asosiy iqtisodiy mezonlar: substratdan unum (Y_p/s), hajmiy mahsuldorlik (g/l·soat), yakuniy konsentratsiya (titr) va downstream xarajati (ko‘pincha tannarxning 50–80%)",
          "GMP va validatsiya — jarayonning har bir bosqichi hujjatlashtirilgan, tekshirilgan va barqaror sifatli mahsulot berishini rasmiy tasdiqlash",
        ],
      },
      {
        heading: "22.3. Zamonaviy tendensiyalar, sintetik biologiya va bioetika",
        content:
          "Bugungi biotexnologiya raqamli texnologiyalar bilan uyg‘unlashib, yangi avlod materiallari, toza energiya va aniq tibbiyotga asoslangan bioiqtisodiyotni shakllantirmoqda.",
        highlights: [
          "Sun’iy intellekt va oqsil muhandisligi (AlphaFold va de novo ferment dizayni) — yangi dorilar va biokatalizatorlar yaratishni yillardan haftalarga qisqartirmoqda",
          "Sintetik biologiya — standart genetik qismlardan yangi metabolik yo‘llar va biosensor organizmlar loyihalash",
          "Mas’uliyatli innovatsiya: biologik xavfsizlik, dual-use (ikki maqsadli) xavflar nazorati, genetik ma’lumotlar maxfiyligi va texnologiyalardan adolatli foydalanish",
        ],
      },
    ],
    comparisonTable: {
      title: "Biotexnologik mahsulot guruhlari va texnologik ustuvorliklar",
      columns: ["Mahsulot guruhi", "Misollar", "Reaktor hajmi", "Asosiy ustuvor mezon"],
      rows: [
        [
          "Biomassa",
          "Novvoylik achitqisi, probiotiklar, bioo‘g‘it",
          "Juda yirik",
          "Tez o‘sish, arzon xomashyo",
        ],
        [
          "Birlamchi metabolitlar",
          "Etanol, limon/sut kislota, lizin",
          "Yirik (100+ m³)",
          "Unum (Y_p/s), substrat tannarxi",
        ],
        [
          "Ikkilamchi metabolitlar",
          "Penitsillin, streptomitsin, pigment",
          "O‘rta–yirik",
          "Ikkilamchi faza nazorati, shtamm faolligi",
        ],
        [
          "Sanoat fermentlari",
          "Amilaza, proteaza, sellulaza",
          "Yirik",
          "Sekretsiya darajasi, barqarorlik",
        ],
        [
          "Rekombinant dorilar",
          "Insulin, monoklonal antitana, vaksina",
          "Kichik–o‘rta",
          "99,9%+ tozalik, GMP, xavfsizlik",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Upstream va Downstream",
        definition:
          "Upstream — shtamm va muhitni fermentatsiyaga tayyorlash; Downstream — fermentatsiyadan keyingi ajratish, tozalash va qadoqlash.",
      },
      {
        term: "Masshtablash (Scale-up)",
        definition:
          "Biotexnologik jarayonni laboratoriya hajmidan pilot va sanoat bioreaktorlariga o‘tkazishda issiqlik va massa almashinuvini saqlab qolish.",
      },
      {
        term: "Validatsiya",
        definition:
          "Ishlab chiqarish jarayoni va jihozlari doimiy ravishda belgilangan sifat standartlariga mos mahsulot berishini hujjatli isbotlash.",
      },
      {
        term: "Sintetik biologiya",
        definition:
          "Muhandislik tamoyillari asosida tirik tizimlarga yangi standartlashtirilgan genetik zanjirlar va funksiyalar loyihalash fani.",
      },
      {
        term: "Bioiqtisodiyot",
        definition:
          "Qazilma resurslar o‘rniga qayta tiklanuvchi biologik xomashyo va biotexnologiyaga tayangan barqaror iqtisodiy model.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Etanol va monoklonal antitana ishlab chiqarish texnologiyalarining iqtisodiy mantig‘i nimasi bilan farq qiladi?",
        answer:
          "Etanol arzon va yirik hajmli mahsulot bo‘lib, unda xomashyo narxi va unum hal qiluvchi; monoklonal antitana esa yuqori qiymatli dori bo‘lib, unda mutlaq tozalik, GMP va xavfsizlik asosiy ustuvorlikdir.",
      },
      {
        question:
          "Biotexnologik ishlab chiqarishning umumiy blok-sxemasi qaysi uch yirik qismdan iborat?",
        answer:
          "1) Upstream (shtamm banki, inokulyat, oziqa muhitini tayyorlash va sterilizatsiya); 2) Fermentatsiya (bioreaktorda asosiy biosintez); 3) Downstream (ajratish, tozalash, quritish va sifat nazorati).",
      },
      {
        question:
          "Sun’iy intellekt (masalan, AlphaFold) zamonaviy biotexnologiyani qanday o‘zgartirmoqda?",
        answer:
          "U oqsillarning 3D strukturasini aniq bashorat qilib, yangi termostabil fermentlar, antitanalar va dorilarni kompyuterda loyihalash hamda tajriba vaqtini keskin qisqartirish imkonini bermoqda.",
      },
    ],
    keyTerms: [
      "biotexnologik mahsulot",
      "blok-sxema",
      "upstream",
      "downstream",
      "masshtablash",
      "GMP",
      "validatsiya",
      "sintetik biologiya",
      "AlphaFold",
      "bioiqtisodiyot",
      "bioetika",
      "barqaror rivojlanish",
    ],
    references: "Xalimova N.T. Biotexnologiya · 22-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/22-mavzu_Biotexnologiya_mahsulotlari_va_kelajagi_e34e6c15.pdf",
    pdfTitle: "22-mavzu: Biotexnologiya mahsulotlari, blok-sxemalari va kelajagi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "22-mavzu: Biotexnologiya mahsulotlari, blok-sxemalari va kelajagi (Ma’ruza matni)",
        url: "/assets/aistudio/22-mavzu_Biotexnologiya_mahsulotlari_va_kelajagi_e34e6c15.pdf",
        kind: "Ma’ruza matni",
      },
      {
        title: "22-mavzu: Biotexnologiya mahsulotlari, blok-sxemalari va kelajagi (Taqdimot)",
        url: "/assets/aistudio/22-mavzu_Biotexnologiya_mahsulotlari_va_kelajagi_b6419175.pdf",
        kind: "Taqdimot",
      },
    ],
  },
];
