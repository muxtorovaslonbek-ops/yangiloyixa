import type { BiotexnologiyaTopic } from "./biotexnologiyaTopics";

export const BIOTEXNOLOGIYA_TOPICS_PART_1: BiotexnologiyaTopic[] = [
  {
    id: "biotex-1",
    order: 1,
    code: "BT01",
    topicLabel: "1-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Biotexnologiya fani predmeti, maqsadi, vazifalari va rivojlanish bosqichlari",
    syllabusPoints: [
      "Biotexnologiya fanining predmeti, maqsadi, vazifalari va kimyoviy sintez bilan qiyosi",
      "Asosiy tushunchalar: bioob’ekt, biokatalizator, bioreaktor va biokonversiya",
      "Biotexnologiyaning rivojlanish bosqichlari va fundamental kashfiyotlar (Paster, Fleming, Koen–Boyer 1973, 1982 rekombinant insulin, CRISPR)",
      "Biotexnologiyaning rangli tasnifi (qizil, yashil, oq, ko‘k, kulrang, sariq) va boshqa fanlar bilan aloqasi",
      "Molekulyar biotexnologiyaning shakllanishi, zamonaviy yo‘nalishlari va ijtimoiy-axloqiy jihatlari",
    ],
    studyNotes:
      "1973-yilda S. Koen va H. Boyer ilk bor genni bakteriyaga ko‘chirib ifodaladi; 1982-yilda birinchi rekombinant dori — inson insulini bozorga chiqdi. Ishlab chiqarish xarajatining eng katta qismi (50–80%) ajratish va tozalash (downstream processing) bosqichiga to‘g‘ri keladi.",
    overview:
      "Biotexnologiya tirik organizmlar, ularning hujayralari yoki fermentlaridan inson uchun zarur mahsulotlar olish va ekologik toza texnologiyalar yaratish haqidagi fanlararo sohadir. Ushbu kirish ma’ruzasida bioob’ekt, biokatalizator, bioreaktor va biokonversiya tushunchalari, an’anaviy hamda molekulyar biotexnologiya farqlari, rangli tasnif va tarixiy burilish nuqtalari batafsil yoritiladi.",
    sections: [
      {
        heading: "1.1. Biotexnologiya predmeti, maqsadi va asosiy tushunchalari",
        content:
          "Biotexnologiya tabiiy-ilmiy bilimlarni muhandislik yondashuvi bilan birlashtirib, murakkab molekulalarni mo‘tadil sharoitda (20–40 °C), yuqori stereokimyoviy tanlanuvchanlik va kam chiqindi bilan sintezlash imkonini beradi.",
        highlights: [
          "Bioob’ekt — mahsulot ishlab chiqaruvchi biologik tizim (mikroorganizmlar, o‘simlik/hayvon hujayralari, viruslar, fermentlar)",
          "Biokatalizator — kimyoviy reaksiyani tezlashtiruvchi ferment yoki uni saqlovchi tirik/immobillangan hujayra",
          "Bioreaktor (fermentyor) — harorat, pH, kislorod, aralashtirish va ko‘pik nazorat qilinadigan qurilma",
          "Biokonversiya — tayyor substratga bitta aniq kimyoviy o‘zgarish kiritish (masalan, steroid gormonlarni gidroksillash)",
        ],
      },
      {
        heading: "1.2. Rivojlanish bosqichlari va fundamental kashfiyotlar",
        content:
          "Biotexnologiya beshta tarixiy bosqichni bosib o‘tgan: an’anaviy (non, pivo, pishloq), ilmiy asoslangan (L. Paster), sanoat-klassik (antibiotiklar, aminokislotalar), molekulyar (1970-yillar, rekombinant DNK) va genomik (2000-yillardan, CRISPR va sintetik biologiya).",
        highlights: [
          "L. Paster fermentatsiya mikroorganizmlar faoliyati ekanini isbotladi; R. Kox sof kultura usulini yaratdi; A. Fleming (1928) penitsillinni kashf etdi",
          "J. Uotson va F. Krik (1953) DNK qo‘sh spiralini ochdi; P. Berg (1972) birinchi rekombinant DNK yaratdi",
          "S. Koen va H. Boyer (1973) genni bakteriyaga ko‘chirib ifodaladi → 1982-yilda rekombinant inson insulini bozorga chiqdi",
          "K. Myullis (1983) PZR ni, 2003-yilda Inson genomi loyihasi, 2012-yilda esa CRISPR/Cas9 genom tahrirlash tizimi yaratildi",
        ],
      },
      {
        heading: "1.3. Rangli tasnif va molekulyar biotexnologiya bosqichlari",
        content:
          "Xalqaro amaliyotda biotexnologiya yo‘nalishlari shartli ranglar bilan belgilanadi. Molekulyar biotexnologiya tasodifiy seleksiyadan farqli ravishda maqsadli gen kiritish orqali oldindan rejalashtirilgan natija beradi.",
        highlights: [
          "Qizil (tibbiyot va farmatsevtika), Yashil (qishloq xo‘jaligi), Oq (sanoat), Ko‘k (dengiz/suv), Kulrang (ekologiya), Sariq (oziq-ovqat)",
          "Molekulyar biotexnologiya 6 bosqichi: genni ajratish → vektorga ulash → transformatsiya → seleksiya → ekspressiya → ajratish va tozalash (downstream)",
          "Ijtimoiy masalalar: biologik xavfsizlik, bioetika, huquqiy tartibga solish va teng mavjudlik",
        ],
      },
    ],
    comparisonTable: {
      title: "Biotexnologik va kimyoviy sintez usullarining qiyosi",
      columns: ["Mezon", "Kimyoviy sintez", "Biotexnologik usul"],
      rows: [
        [
          "Harorat va bosim",
          "Ko‘pincha yuqori harorat va bosim",
          "Mo‘tadil sharoit (20–40 °C, atmosfera bosimi)",
        ],
        [
          "Tanlanuvchanlik va stereokimyo",
          "Yon mahsulot va izomerlar aralashmasi ko‘p",
          "Juda yuqori; faqat kerakli optik izomer",
        ],
        [
          "Xomashyo",
          "Neft va tiklanmaydigan kimyo xomashyosi",
          "Qayta tiklanuvchi biomassa va sanoat chiqindilari",
        ],
        [
          "Murakkab molekulalar",
          "Insulin, antitana sintezi amalda imkonsiz",
          "Hujayra tabiiy mexanizmlar bilan aniq sintezlaydi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Bioob’ekt",
        definition:
          "Biotexnologik jarayonda mahsulot ishlab chiqaruvchi tirik organizm, hujayra, to‘qima yoki ferment tizimi.",
      },
      {
        term: "Biokonversiya",
        definition:
          "Biologik agent yordamida tayyor substratga bitta aniq kimyoviy o‘zgarish kiritib qimmatroq mahsulot olish jarayoni.",
      },
      {
        term: "Downstream processing",
        definition:
          "Fermentatsiyadan keyingi ajratish, konsentrlash va tozalash bosqichlari (xarajatning 50–80% ini tashkil etadi).",
      },
      {
        term: "Qizil va oq biotexnologiya",
        definition:
          "Qizil — tibbiyot/farmatsevtika (insulin, vaksina); oq — sanoat (fermentlar, kislotalar, bioyonilg‘i).",
      },
      {
        term: "Molekulyar biotexnologiya",
        definition:
          "Gen va hujayra darajasida maqsadli o‘zgarishlar kiritib, oldindan rejalashtirilgan oqsil va mahsulotlar olish yo‘nalishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Biokonversiya to‘liq biosintezdan nimasi bilan farq qiladi?",
        answer:
          "Biosintezda hujayra oddiy oziqadan (masalan, glyukozadan) murakkab moddani noldan sintezlaydi; biokonversiyada esa tayyor substratga bitta aniq kimyoviy o‘zgarish kiritiladi.",
      },
      {
        question: "Nima uchun 1973-yilgi Koen va Boyer tajribasi burilish nuqtasi hisoblanadi?",
        answer:
          "Ilk bor bir organizm geni boshqa organizmga (bakteriyaga) ko‘chirilib ekspressiyasi ta’minlandi, natijada 1982-yilda rekombinant inson insulini ishlab chiqarildi.",
      },
      {
        question: "Biotexnologik ishlab chiqarishda qaysi bosqich odatda eng qimmat hisoblanadi?",
        answer:
          "Mahsulotni ajratib olish va tozalash (downstream processing) bosqichi, chunki mahsulot suyultirilgan muhitda minglab moddalar orasida bo‘ladi.",
      },
    ],
    keyTerms: [
      "biotexnologiya",
      "bioob’ekt",
      "biokatalizator",
      "bioreaktor",
      "biokonversiya",
      "Koen va Boyer",
      "rekombinant insulin",
      "qizil biotexnologiya",
      "yashil biotexnologiya",
      "oq biotexnologiya",
      "downstream processing",
    ],
    references: "Xalimova N.T. Biotexnologiya · 1-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/01-mavzu_Biotexnologiya_faniga_kirish_c992a9e2.pdf",
    pdfTitle: "1-mavzu: Biotexnologiya faniga kirish (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "1-mavzu: Biotexnologiya faniga kirish (Ma’ruza matni)",
        url: "/assets/aistudio/01-mavzu_Biotexnologiya_faniga_kirish_c992a9e2.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-2",
    order: 2,
    code: "BT02",
    topicLabel: "2-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Prokariot va eukariot hujayralar biotexnologik ob’ekt sifatida",
    syllabusPoints: [
      "Prokariot va eukariot hujayralar farqlarining biotexnologik oqibatlari (intronlar, glikozillash, o‘sish tezligi)",
      "Bakteriyalar biotexnologik ob’ekt sifatida: Escherichia coli, Bacillus subtilis, Corynebacterium, Streptomyces",
      "Achitqilar (Saccharomyces cerevisiae, Pichia pastoris) va mog‘or zamburug‘lari (Aspergillus, Penicillium, Trichoderma)",
      "O‘simlik hujayra kulturalari va hayvon hujayra liniyalari (CHO, HEK293, Vero, gibridoma)",
      "Viruslar va bakteriofaglarning vektor, fag displey, VLP va gen terapiyasidagi o‘rni",
    ],
    studyNotes:
      "E. coli tez (20 daq) va arzon o‘sadi, ammo intronlarni kesolmaydi, glikozillash qilolmaydi va endotoksin saqlaydi. Achitqi «oltin o‘rtalik», CHO hujayralari esa inson tipidagi glikozillash talab qiluvchi dorilar (eritropoetin, antitanalar) uchun asosiy tizimdir.",
    overview:
      "Bioob’ektni to‘g‘ri tanlash biotexnologik jarayon muvaffaqiyatini belgilaydi. Ma’ruzada prokariot va eukariot hujayralarning tuzilish farqlari, inklyuziya tanachalari, endotoksin muammosi, Pichia pastoris ning AOX1 promotori, CHO hayvon hujayra liniyalari hamda virus vektorlari (AAV, lentivirus, baculovirus) qiyosiy tahlil qilinadi.",
    sections: [
      {
        heading: "2.1. Prokariot va eukariot farqlarining texnologik oqibatlari",
        content:
          "Eukariot genlarda intronlar mavjudligi sababli ularni bakteriyaga to‘g‘ridan-to‘g‘ri kiritib bo‘lmaydi — intronsiz sDNK ishlatiladi. Murakkab posttranslyatsion modifikatsiyalar (glikozillash, disulfid ko‘priklar) bioob’ekt tanlovini hal qiladi.",
        highlights: [
          "Oddiy glikozillanmagan oqsil (insulin) → E. coli; oddiy glikozillash → achitqi; inson tipidagi murakkab glikozillash (eritropoetin) → CHO hujayralari",
          "E. coli cheklovlari: inklyuziya tanachalari (refolding talab etiladi) va Gram-manfiy devor endotoksini",
          "Bacillus subtilis — oqsilni muhitga ajratadi va endotoksini yo‘q (sanoat amilaza, proteazalari)",
        ],
      },
      {
        heading: "2.2. Achitqilar, zamburug‘lar, o‘simlik va hayvon hujayralari",
        content:
          "Saccharomyces cerevisiae GRAS maqomiga ega «oltin o‘rtalik» bo‘lsa, Pichia pastoris metanol bilan boshqariluvchi kuchli AOX1 promotori va insonga yaqinroq glikozillashi bilan ajralib turadi. Mog‘or zamburug‘lari litriga o‘nlab gramm ferment ajratadi.",
        highlights: [
          "Zamburug‘lar (Aspergillus niger, Trichoderma reesei) — sanoat fermentlari va limon kislotasi yetakchilari; qiyinchiligi — mitseliy qovushqoqligi",
          "CHO (xitoy xomyagi tuxumdoni) — monoklonal antitanalar va eritropoetin uchun yetakchi; sekin (18–24 soat) va qimmat muhit",
          "O‘simlik kulturalari (kallus, suspenziya, ildiz) — iqlimga bog‘liq bo‘lmagan holda noyob ikkilamchi metabolitlar olish",
        ],
      },
      {
        heading: "2.3. Viruslar va bakteriofaglar biotexnologiyada",
        content:
          "Viruslar hujayraga genetik material kiritishning tabiiy mexanizmiga ega bo‘lgani uchun vektor, vaksina (VLP) va fag displey texnologiyalarining asosiy vositasiga aylangan.",
        highlights: [
          "Lambda fagi — katta DNK klonlash; fag displey — kerakli oqsil/antitanani tanlash; fag terapiyasi — antibiotikka chidamli infeksiyalarga qarshi",
          "Virus vektorlari: Adenovirus (vaqtinchalik), AAV (xavfsiz, uzoq ekspressiya), Lentivirus (CAR-T), Baculovirus (hasharot hujayralarida oqsil)",
          "Xavfsizlik xavflari: ko‘payish qobiliyati tiklanishi, insersion mutagenez va immun javob",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy biotexnologik bioob’ekt tizimlarining qiyosi",
      columns: ["Tizim", "O‘sish tezligi", "Modifikatsiya (glikozillash)", "Asosiy qo‘llanilishi"],
      rows: [
        [
          "Escherichia coli",
          "Juda tez (20 daq)",
          "Yo‘q (intron kesolmaydi)",
          "Insulin, oddiy rekombinant oqsillar",
        ],
        [
          "Bacillus subtilis",
          "Tez",
          "Cheklangan (muhitga ajratadi)",
          "Sanoat fermentlari (amilaza, proteaza)",
        ],
        [
          "S. cerevisiae / P. pastoris",
          "Tez (90 daq)",
          "Qisman (giperglikozillash)",
          "Vaksina antigenlari (HBsAg), etanol, oqsillar",
        ],
        [
          "Mog‘or zamburug‘lari",
          "O‘rtacha",
          "Qisman (yuqori sekretsiya)",
          "Limon kislotasi, penitsillin, sellulaza",
        ],
        [
          "CHO hayvon hujayralari",
          "Sekin (18–24 soat)",
          "To‘liq inson tipida",
          "Monoklonal antitanalar, eritropoetin, VIII faktor",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "CHO hujayralari",
        definition:
          "Xitoy xomyagi tuxumdoni hujayra liniyasi; inson tipidagi glikozillashni eng yaqin takrorlaydigan sanoat tizimi.",
      },
      {
        term: "Inklyuziya tanachalari",
        definition:
          "E. coli hujayrasi ichida noto‘g‘ri buklangan rekombinant oqsilning erimaydigan to‘plamlari (refolding talab etadi).",
      },
      {
        term: "Endotoksin",
        definition:
          "Gram-manfiy bakteriyalar (E. coli) devoridagi lipopolisaxarid; in’eksiya dorilaridan to‘liq tozalanishi shart.",
      },
      {
        term: "GRAS maqomi",
        definition:
          "Generally Recognized As Safe — oziq-ovqat va farmatsevtika uchun xavfsiz deb tan olingan organizmlar (masalan, S. cerevisiae).",
      },
      {
        term: "VLP (Virusga o‘xshash zarracha)",
        definition:
          "Genetik materialsiz, faqat virus oqsil qobig‘idan iborat o‘ta xavfsiz zamonaviy vaksina shakli.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun eritropoetinni E. coli da emas, CHO hujayralarida ishlab chiqarish kerak?",
        answer:
          "Eritropoetinning biologik faolligi va qonda yashash muddati inson tipidagi glikozillash (uglevod zanjirlari) ga bog‘liq; bakteriyalar esa glikozillashni amalga oshira olmaydi.",
      },
      {
        question: "Bacillus subtilis ning E. coli ga nisbatan ikkita asosiy afzalligi nimada?",
        answer:
          "U maqsadli oqsilni bevosita tashqi muhitga ajratadi (tozalash osonlashadi) va hujayra devorida endotoksin mavjud emas.",
      },
      {
        question:
          "Nima uchun Saccharomyces cerevisiae biotexnologiyada «oltin o‘rtalik» deb ataladi?",
        answer:
          "U bakteriyaga yaqin tez o‘sish va arzon muhit afzalliklarini eukariotlarga xos oqsil modifikatsiyasi va sekretsiya qobiliyati bilan birlashtiradi.",
      },
    ],
    keyTerms: [
      "prokariot",
      "eukariot",
      "Escherichia coli",
      "Bacillus subtilis",
      "Saccharomyces cerevisiae",
      "Pichia pastoris",
      "CHO hujayralari",
      "inklyuziya tanachalari",
      "endotoksin",
      "posttranslyatsion modifikatsiya",
      "virus vektori",
      "AAV",
    ],
    references: "Xalimova N.T. Biotexnologiya · 2-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/02-mavzu_Hujayralar_biotexnologik_ob_ekt_sifatida_59e3867f.pdf",
    pdfTitle:
      "2-mavzu: Prokariot va eukariot hujayralar biotexnologik ob’ekt sifatida (Ma’ruza matni)",
    pdfDocuments: [
      {
        title:
          "2-mavzu: Prokariot va eukariot hujayralar biotexnologik ob’ekt sifatida (Ma’ruza matni)",
        url: "/assets/aistudio/02-mavzu_Hujayralar_biotexnologik_ob_ekt_sifatida_59e3867f.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-3",
    order: 3,
    code: "BT03",
    topicLabel: "3-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Hujayrada kechadigan genetik jarayonlar va molekulyar biologiyaning markaziy dogmasi",
    syllabusPoints: [
      "Nuklein kislotalar (DNK va RNK) tuzilishi, komplementarlik tamoyili va RNK turlari (mRNK, tRNK, rRNK, siRNK, ribozimlar)",
      "Molekulyar biologiyaning markaziy dogmasi (F. Krik, 1958) va teskari transkripsiyaning biotexnologik ahamiyati",
      "DNK replikatsiyasi va polimeraza zanjir reaksiyasi (PZR) — Taq-polimeraza va 3 bosqichli sikl",
      "Transkripsiya, gen tuzilishi (promotor–kodlovchi qism–terminator), splaysing va induksiyalanuvchi promotorlar",
      "Translyatsiya, genetik kod xossalari, kodon optimizatsiyasi va posttranslyatsion modifikatsiyalar",
    ],
    studyNotes:
      "Markaziy dogma (DNK → RNK → oqsil) gen muhandisligining «yo‘l xaritasi»dir. Teskari transkriptaza mRNK dan intronsiz sDNK olish imkonini berdi; PZR (94–96 °C → 50–65 °C → 72 °C) 30 siklda DNK ni ~1 milliard marta ko‘paytiradi.",
    overview:
      "Gen muhandisligining har bir amali hujayrada tabiiy kechadigan genetik jarayonlarga tayanadi. Ma’ruzada DNK/RNK komplementarligi, teskari transkripsiya va sDNK olish, PZR siklining harorat bosqichlari, muqobil splaysing, genetik kodning universalligi va kodon optimizatsiyasi orqali oqsil unumini oshirish mexanizmlari yoritiladi.",
    sections: [
      {
        heading: "3.1. Nuklein kislotalar va markaziy dogmaga kiritilgan tuzatishlar",
        content:
          "A=T (2 vodorod bog‘i) va G≡S (3 vodorod bog‘i) komplementarligi replikatsiya, PZR praymerlari, zondlar va yopishqoq uchlar ulanishining asosidir. F. Krikning markaziy dogmasiga teskari transkripsiya (Temin va Baltimor) hamda RNK replikatsiyasi qo‘shildi, lekin oqsildan DNK/RNK ga axborot o‘tmaydi.",
        highlights: [
          "Teskari transkriptaza mRNK asosida intronsiz sDNK olish va RT-PZR diagnostikasining asosiy fermentidir",
          "Ribozimlar — katalitik faollikka ega RNK molekulalari («RNK dunyosi» gipotezasi asosi)",
          "mikroRNK va siRNK — RNK-interferensiya orqali gen ekspressiyasini boshqaradi",
        ],
      },
      {
        heading: "3.2. DNK replikatsiyasi va PZR (Polimeraza zanjir reaksiyasi)",
        content:
          "Replikatsiya yarim konservativ usulda 5'→3' yo‘nalishda kechadi (xelikaza, praymaza, DNK-polimeraza, Okazaki fragmentlari, ligaza). PZR shu jarayonni termobardosh Taq-polimeraza yordamida probirkada avtomatik takrorlaydi.",
        highlights: [
          "PZR 3 bosqichi: Denaturatsiya (94–96 °C) → Annealing/bog‘lanish (50–65 °C) → Elongatsiya (72 °C)",
          "30 sikl davomida maqsadli DNK ~1 milliard (2³⁰) marta eksponensial ko‘payadi",
          "Qo‘llanilishi: gen klonlash, infeksiya diagnostikasi, mutatsiya tahlili, sud-tibbiyot va GMO aniqlash",
        ],
      },
      {
        heading: "3.3. Transkripsiya, splaysing va kodon optimizatsiyasi",
        content:
          "Gen konstruksiyasi PROMOTOR – [kodlovchi qism] – TERMINATOR sxemasida yig‘iladi. Genetik kodning universalligi inson genining bakteriyada o‘qilishiga imkon beradi, kodon optimizatsiyasi esa translyatsiya tezligini keskin oshiradi.",
        highlights: [
          "Muqobil splaysing bitta eukariot gendan ekzonlarni turlicha ulab bir necha xil oqsil olishni ta’minlaydi",
          "Induksiyalanuvchi promotorlar (lac, AOX1) — avval biomassa to‘planib, keyin oqsil sintezi yoqiladi",
          "Kodon optimizatsiyasi — aminokislota ketma-ketligini o‘zgartirmasdan kodonlarni hujayra-ega afzal ko‘radigan variantlarga almashtirish",
        ],
      },
    ],
    comparisonTable: {
      title: "Markaziy dogma jarayonlari va ularning biotexnologik qo‘llanilishi",
      columns: ["Jarayon", "Yo‘nalish", "Asosiy ferment", "Biotexnologik tatbiqi"],
      rows: [
        ["Replikatsiya", "DNK → DNK", "DNK-polimeraza (Taq, Pfu)", "PZR, genlarni ko‘paytirish"],
        ["Transkripsiya", "DNK → RNK", "RNK-polimeraza", "Kuchli va induksiyalanuvchi promotorlar"],
        ["Translyatsiya", "RNK → oqsil", "Ribosoma", "Kodon optimizatsiyasi, rekombinant oqsil"],
        [
          "Teskari transkripsiya",
          "RNK → DNK",
          "Teskari transkriptaza",
          "Intronsiz sDNK olish, RT-PZR",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Markaziy dogma",
        definition:
          "Genetik axborotning DNK → RNK → oqsil yo‘nalishidagi asosiy oqimi (F. Krik, 1958).",
      },
      {
        term: "PZR (Polimeraza zanjir reaksiyasi)",
        definition:
          "Termobardosh DNK-polimeraza yordamida kerakli DNK bo‘lagini probirkada millionlab-milliardlab marta ko‘paytirish usuli.",
      },
      {
        term: "Splaysing va muqobil splaysing",
        definition:
          "Pre-mRNK dan intronlar kesilib ekzonlar ulanishi; muqobil splaysing bir gendan bir necha oqsil hosil qiladi.",
      },
      {
        term: "Kodon optimizatsiyasi",
        definition:
          "Oqsilning aminokislota ketma-ketligini o‘zgartirmasdan, nukleotid kodonlarini hujayra-ega uchun qulay shaklda qayta yozish.",
      },
      {
        term: "Induksiyalanuvchi promotor",
        definition:
          "Faqat maxsus induktor modda (IPTG, metanol) berilgandagina gen transkripsiyasini yoquvchi boshqaruv sohasi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun eukariot genini bakteriyada ifodalashda genomik DNK emas, sDNK ishlatiladi?",
        answer:
          "Eukariot genomik DNK sida intronlar mavjud, bakteriyada esa splaysing mexanizmi yo‘q. Teskari transkriptaza yordamida yetuk mRNK dan olingan sDNK da intronlar bo‘lmaydi.",
      },
      {
        question: "PZR siklining uchta bosqichi va ularning harorat rejimlarini ayting.",
        answer:
          "1) Denaturatsiya (94–96 °C — zanjirlar ajraladi); 2) Annealing (50–65 °C — praymerlar bog‘lanadi); 3) Elongatsiya (72 °C — Taq-polimeraza yangi zanjir sintezlaydi).",
      },
      {
        question: "Kodon optimizatsiyasi oqsil tuzilishini o‘zgartirmasdan unumni qanday oshiradi?",
        answer:
          "Genetik kod degenerativ (bitta aminokislotani bir necha kodon kodlaydi); kam uchraydigan kodonlar hujayra-egada ko‘p tRNK si bor sinonim kodonlarga almashtirilganda translyatsiya tezlashadi.",
      },
    ],
    keyTerms: [
      "markaziy dogma",
      "komplementarlik",
      "teskari transkripsiya",
      "sDNK",
      "PZR",
      "Taq-polimeraza",
      "splaysing",
      "intron",
      "ekzon",
      "kodon optimizatsiyasi",
      "ribozim",
    ],
    references: "Xalimova N.T. Biotexnologiya · 3-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/03-mavzu_Markaziy_dogma_va_genetik_jarayonlar_6e868de3.pdf",
    pdfTitle: "3-mavzu: Markaziy dogma va genetik jarayonlar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "3-mavzu: Markaziy dogma va genetik jarayonlar (Ma’ruza matni)",
        url: "/assets/aistudio/03-mavzu_Markaziy_dogma_va_genetik_jarayonlar_6e868de3.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-4",
    order: 4,
    code: "BT04",
    topicLabel: "4-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Gen muhandisligining «molekulyar ashyolari» va fermentlari",
    syllabusPoints: [
      "Gen muhandisligining mohiyati, 6 asosiy bosqichi va «molekulyar konstruktor» vositalari",
      "Restriktazalar («molekulyar qaychilar»): palindrom tanish saytlari, yopishqoq va to‘mtoq uchlar, izoshizomerlar va yulduzcha faollik",
      "DNK-ligazalar (T4 DNK-ligaza, E. coli ligaza) va ishqoriy fosfatazaning vektor o‘z-o‘ziga ulanishini oldini olishdagi roli",
      "Polimerazalar (Taq vs Pfu, Klenov fragmenti, terminal transferaza) va nukleazalar (S1-nukleaza, DNaza, RNaza)",
      "Restriksion tahlil, agaroza gel-elektroforez va zamonaviy klonlash usullari (Gibson, Golden Gate, TA-klonlash)",
    ],
    studyNotes:
      "Restriktaza bakteriyani fag DNK sidan himoya qiladi (o‘z DNK si metilaza bilan himoyalangan). Yopishqoq uchli va ikki xil restriktaza bilan yo‘nalgan klonlash vektor o‘z-o‘ziga ulanishini oldini oladi; klonlash PZR ida korrektorlikka ega Pfu-polimeraza tanlanadi.",
    overview:
      "Gen muhandisligi tabiatdagi maxsus fermentlar — restriktaza (qaychi), DNK-ligaza (yelim), polimeraza (nusxalovchi), ishqoriy fosfataza va nukleazalarning uyg‘un ishlashiga asoslanadi. Ma’ruzada EcoRI/SmaI kesish turlari, T4 DNK-ligaza shartlari, Taq va Pfu farqi, restriksion xarita tuzish va agaroza gel-elektroforez tahlili yoritilgan.",
    sections: [
      {
        heading: "4.1. Restriktazalar — «molekulyar qaychilar»",
        content:
          "Restriksion endonukleazalar 4–8 nukleotidli palindrom ketma-ketlikni (masalan, EcoRI: 5'-GAATTC-3') tanib, aniq joydan kesadi. Bakteriya o‘z DNK sini metilaza bilan metillab himoya qiladi (restriksiya–modifikatsiya tizimi).",
        highlights: [
          "Yopishqoq uch (EcoRI, BamHI, HindIII) — komplementar bir zanjirli chiqiq qoldiradi, ulash oson va yo‘nalgan",
          "To‘mtoq uch (SmaI, EcoRV) — ikkala zanjir bir joyda kesiladi; istalgan to‘mtoq bo‘lak bilan ulanadi, ammo sekinroq",
          "Izoshizomerlar — bir xil saytni taniydigan turli fermentlar; izokaudomerlar — turli sayt, lekin bir xil yopishqoq uch beradi",
          "Yulduzcha faollik (star activity) — noto‘g‘ri bufer yoki ortiqcha fermentda noaniq joydan kesish",
        ],
      },
      {
        heading: "4.2. DNK-ligazalar, polimerazalar va yordamchi fermentlar",
        content:
          "DNK-ligaza ikki nukleotid orasida fosfodiefir bog‘ hosil qilib bo‘laklarni ulaydi. T4 DNK-ligaza ATF hisobiga ham yopishqoq, ham to‘mtoq uchlarni ulay oladigan universal fermentdir.",
        highlights: [
          "Ishqoriy fosfataza — vektorning 5'-fosfatini olib tashlab, uning o‘z-o‘ziga ulanib fon koloniyalar berishini to‘xtatadi",
          "Taq-polimeraza (oddiy PZR, korrektorligi yo‘q) vs Pfu-polimeraza (korrektorlik 3'→5' bor, klonlash va sekvenlash uchun zarur)",
          "Klenov fragmenti (uchlarni to‘ldirish), polinukleotid kinaza (5'-fosfat qo‘shish), terminal transferaza (matritsasiz nukleotid qo‘shish)",
        ],
      },
      {
        heading: "4.3. Restriksion tahlil, gel-elektroforez va zamonaviy muqobillar",
        content:
          "Restriktaza tanlashda sayt vektorda faqat 1 marta uchrashi va insert ichida bo‘lmasligi shart. Kesilgan bo‘laklar agaroza gelida (manfiy DNK musbat qutbga harakatlanadi, kichik bo‘laklar tezroq) tahlil qilinadi.",
        highlights: [
          "Restriksion tahlil plazmidada insert borligini, yo‘nalishini, restriksion xaritani va RFLP farqlarini ko‘rsatadi",
          "Zamonaviy usullar: Gibson assembly (bir nechta bo‘lak bir probirkada), Golden Gate (IIS restriktazalar, iz qolmaydi), TA-klonlash",
        ],
      },
    ],
    comparisonTable: {
      title: "Gen muhandisligining asosiy fermentlari va ularning vazifalari",
      columns: ["Ferment", "Katalitik vazifasi", "Xususiyati / Kofaktor", "Amaliy qo‘llanilishi"],
      rows: [
        [
          "Restriktazalar (EcoRI, SmaI)",
          "Palindrom saytdan DNK ni kesish",
          "Yopishqoq yoki to‘mtoq uch",
          "Vektor va insertni tayyorlash, RFLP",
        ],
        [
          "T4 DNK-ligaza",
          "Fosfodiefir bog‘ hosil qilib ulash",
          "ATF talab qiladi, to‘mtoqni ham ulaydi",
          "Rekombinant DNK yig‘ish",
        ],
        [
          "Taq / Pfu polimeraza",
          "DNK zanjirini sintezlash",
          "Termobardosh; Pfu da korrektorlik bor",
          "PZR, gen amplifikatsiyasi",
        ],
        [
          "Ishqoriy fosfataza",
          "5'-uchdan fosfatni olib tashlash",
          "Defosforillash",
          "Vektor o‘z-o‘ziga ulanishini oldini olish",
        ],
        [
          "Teskari transkriptaza",
          "RNK dan DNK sintezlash",
          "Retroviruslardan olinadi",
          "sDNK olish, RT-PZR",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Restriktaza",
        definition:
          "DNK ning 4–8 nukleotidli palindrom ketma-ketligini tanib, aniq nuqtadan kesuvchi endonukleaza.",
      },
      {
        term: "Yopishqoq va to‘mtoq uch",
        definition:
          "Yopishqoq uchda bir zanjirli komplementar chiqiq qoladi (EcoRI); to‘mtoq uchda ikkala zanjir bir tekis kesiladi (SmaI).",
      },
      {
        term: "Izoshizomerlar",
        definition:
          "Turli bakteriyalardan olingan, ammo aynan bir xil DNK tanish saytini kesuvchi restriktazalar.",
      },
      {
        term: "T4 DNK-ligaza",
        definition:
          "Bakteriofag T4 dan olingan, ATF ishtirokida yopishqoq hamda to‘mtoq DNK uchlarini ulovchi universal ferment.",
      },
      {
        term: "Ishqoriy fosfataza",
        definition:
          "Kesilgan vektorning 5'-fosfat guruhini olib tashlab, fonaviy (bo‘sh) vektor hosil bo‘lishini oldini oluvchi ferment.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Bakteriya o‘z restriktazalari tomonidan o‘z DNK si kesilib ketishidan qanday himoyalanadi?",
        answer:
          "Restriksiya–modifikatsiya tizimida metilaza fermenti bakteriyaning o‘z DNK sidagi tanish saytlarini metillab qo‘yadi va restriktaza uni kesmaydi.",
      },
      {
        question:
          "Klonlash uchun genni PZR bilan ko‘paytirishda nima uchun Taq emas, Pfu-polimeraza afzal?",
        answer:
          "Pfu-polimeraza 3'→5' ekzonukleaza korrektorlik faolligiga ega bo‘lib, sintez davomidagi xatolarni tuzatadi va gen ketma-ketligida mutatsiyalar to‘planishining oldini oladi.",
      },
      {
        question:
          "Agaroza gel-elektroforezida DNK bo‘laklari qaysi qutbga va qanday tezlikda harakatlanadi?",
        answer:
          "DNK fosfat guruhlari hisobiga manfiy zaryadli bo‘lgani uchun musbat qutbga (anodga) qarab harakatlanadi; kichik bo‘laklar gel teshiklaridan tezroq o‘tadi.",
      },
    ],
    keyTerms: [
      "restriktaza",
      "palindrom",
      "yopishqoq uch",
      "to‘mtoq uch",
      "EcoRI",
      "izoshizomer",
      "DNK-ligaza",
      "T4 ligaza",
      "ishqoriy fosfataza",
      "Pfu-polimeraza",
      "gel-elektroforez",
      "Gibson assembly",
      "Golden Gate",
    ],
    references: "Xalimova N.T. Biotexnologiya · 4-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/04-mavzu_Gen_muhandisligi_fermentlari_4ba9cb41.pdf",
    pdfTitle: "4-mavzu: Gen muhandisligi fermentlari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "4-mavzu: Gen muhandisligi fermentlari (Ma’ruza matni)",
        url: "/assets/aistudio/04-mavzu_Gen_muhandisligi_fermentlari_4ba9cb41.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-5",
    order: 5,
    code: "BT05",
    topicLabel: "5-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Klonlash uchun DNK manbalari va vektor molekulalar",
    syllabusPoints: [
      "Klonlash uchun DNK ning uch asosiy manbai (genomik DNK, sDNK, sintetik DNK) hamda genomik va sDNK kutubxonalari",
      "Toza DNK ajratib olish usullari, sifat nazorati (A260/A280 ≈ 1,8; A260/A230 ≈ 2,0–2,2) va ishqoriy lizis bilan plazmida ajratish",
      "Fosforamidit usulida DNK ning kimyoviy sintezi (3'→5') va oligo(dT) yordamida sDNK olish bosqichlari",
      "Plazmida vektorlari tuzilishi (ori, selektiv marker, MCS/polilinker, lacZ) va klassik vektorlar (pBR322, pUC19, pET, pGEX)",
      "Katta sig‘imli vektorlar: bakteriofag lambda (15–20 kb), kosmida (35–45 kb), BAC (100–300 kb), YAC (200–2000 kb), ekspression va shuttle vektorlar",
    ],
    studyNotes:
      "Toza DNK uchun A260/A280 ≈ 1,8. Vektor sig‘imi o‘sish tartibi: Plazmida (≤10 kb) < Fag λ (15–20 kb) < Kosmida (35–45 kb) < BAC (100–300 kb) < YAC (200–2000 kb). pUC19 da lacZ orqali ko‘k-oq seleksiya o‘tkaziladi (oq koloniya = insert bor).",
    overview:
      "Molekulyar klonlash uchun maqsadga mos DNK manbai (genomik DNK, sDNK yoki kimyoviy sintez) hamda kerakli sig‘imga ega vektor molekula tanlanishi shart. Ma’ruzada DNK ajratish va tozalik nazorati, ishqoriy lizis, oligo(dT) bilan sDNK sintezi, plazmida elementlari hamda katta sig‘imli BAC/YAC/kosmida tizimlari qiyosiy o‘rganiladi.",
    sections: [
      {
        heading: "5.1. DNK manbalari, ajratish va sifat nazorati",
        content:
          "Genomik kutubxona butun genom (intron va promotorlar bilan) tuzilishini beradi, sDNK kutubxonasi esa faqat ma’lum to‘qimada ifodalanayotgan intronsiz genlarni o‘z ichiga oladi. Kimyoviy fosforamidit usuli 3'→5' yo‘nalishda praymerlar va sun’iy genlar sintezlaydi.",
        highlights: [
          "Toza DNK mezonlari: A260/A280 ≈ 1,8 (<1,7 bo‘lsa oqsil iflosi); A260/A230 ≈ 2,0–2,2 (<1,8 bo‘lsa fenol/tuz qoldig‘i)",
          "Ishqoriy lizis — neytrallashda kichik halqasimon plazmida tez qayta tiklanib eritmada qoladi, uzun xromosoma DNK si esa cho‘kadi",
          "sDNK olishda oligo(dT) praymer faqat eukariot mRNK ning 3'-poli-A dumiga bog‘lanadi; RNK bilan ishlashda RNazasiz reaktivlar shart",
        ],
      },
      {
        heading: "5.2. Plazmida vektorlari va ularning elementlari",
        content:
          "Har qanday klonlash vektori mustaqil replikatsiya nuqtasi (ori), selektiv marker (ampR, kanR), bir marta uchraydigan restriktaza saytlari (polilinker/MCS) va kichik o‘lchamga ega bo‘lishi kerak.",
        highlights: [
          "pBR322 — ilk klassik vektor (ampR va tetR); pUC19 — yuqori nusxa sonli, lacZ bilan ko‘k-oq seleksiya",
          "pET tizimi — kuchli T7 promotori; pGEX — GST fyuzion tegi bilan oson tozalash",
          "Ekspression vektorlar oqsil olish uchun promotor, RBS, terminator, fyuzion teg va signal peptid saqlaydi; shuttle (qatnov) vektorlar esa ikki organizmda (masalan, bakteriya va achitqi) ishlaydi",
        ],
      },
      {
        heading: "5.3. Katta sig‘imli vektorlar: fag, kosmida, BAC va YAC",
        content:
          "Plazmidalar odatda 10 kb gacha bo‘lakni sig‘diradi. Katta genlar va genom loyihalari uchun yuqori sig‘imli vektor tizimlari ishlatiladi.",
        highlights: [
          "Bakteriofag lambda (15–20 kb) — in vitro packaging orqali yuqori samaradorlik bilan kiradi",
          "Kosmida (35–45 kb) — plazmida ori/markeri + fagning cos saytlarini birlashtiradi",
          "BAC (100–300 kb, bakteriya F-plazmidasi) — juda barqaror, Inson genomi loyihasining asosiy vektori; YAC (200–2000 kb, achitqi) — eng katta sig‘im",
        ],
      },
    ],
    comparisonTable: {
      title: "Vektor tizimlarining sig‘imi va qo‘llanilish sohasi",
      columns: ["Vektor turi", "Insert sig‘imi", "Hujayra-ega", "Asosiy qo‘llanilishi"],
      rows: [
        [
          "Plazmida (pUC19, pET)",
          "10 kb gacha",
          "Bakteriya",
          "Oddiy klonlash va oqsil ekspressiyasi",
        ],
        ["Bakteriofag lambda", "15 – 20 kb", "Bakteriya", "Genomik va sDNK kutubxonalar"],
        ["Kosmida", "35 – 45 kb", "Bakteriya", "Yirik gen klasterlarini klonlash"],
        [
          "BAC (bakterial sun’iy xromosoma)",
          "100 – 300 kb",
          "Bakteriya",
          "Genom loyihalari, yuqori barqarorlik",
        ],
        [
          "YAC (achitqi sun’iy xromosomasi)",
          "200 – 2000 kb",
          "Achitqi",
          "Eng katta genom bo‘laklarini klonlash",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "sDNK (komplementar DNK)",
        definition:
          "mRNK asosida teskari transkriptaza yordamida sintezlangan, intronlarsiz va bakteriyada ifodalanadigan DNK.",
      },
      {
        term: "Polilinker (MCS)",
        definition:
          "Vektorda faqat bir marta uchraydigan restriktaza tanish saytlari jamlangan klonlash sohasi.",
      },
      {
        term: "Kosmida",
        definition:
          "Plazmida (ori, marker) va bakteriofag (cos saytlari) afzalliklarini birlashtirgan, 35–45 kb sig‘imli vektor.",
      },
      {
        term: "BAC va YAC",
        definition:
          "BAC — bakteriyaning F-plazmidasi asosidagi sun’iy xromosoma (100–300 kb); YAC — achitqi sun’iy xromosomasi (2000 kb gacha).",
      },
      {
        term: "Shuttle (qatnov) vektor",
        definition:
          "Ikki xil organizmda (masalan, E. coli va achitqida) ko‘paya oladigan, ikkita ori va ikkita markerga ega vektor.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Ajratilgan DNK ning A260/A280 nisbati 1,8 bo‘lsa va 1,6 bo‘lsa nimani anglatadi?",
        answer:
          "A260/A280 ≈ 1,8 toza DNK ekanini ko‘rsatadi; 1,7 dan past qiymat (masalan, 1,6) esa namunada oqsil qoldig‘i borligidan darak beradi.",
      },
      {
        question: "Ishqoriy lizis usulida plazmida xromosoma DNK sidan qanday ajratiladi?",
        answer:
          "Neytrallash paytida kichik halqasimon plazmida tezda qo‘sh spiralga qayta tiklanib eritmada qoladi, ulkan xromosoma DNK si esa tartibsiz chigallashib oqsillar bilan cho‘kmaga tushadi.",
      },
      {
        question: "sDNK sintezida nima uchun aynan oligo(dT) praymer ishlatiladi?",
        answer:
          "Faqat eukariot mRNK ning 3' uchida poli-A dumi mavjud (rRNK va tRNK da yo‘q), shuning uchun oligo(dT) tanlab faqat mRNK dan sDNK sintezini boshlaydi.",
      },
    ],
    keyTerms: [
      "genomik DNK",
      "sDNK",
      "oligo(dT)",
      "A260/A280",
      "ishqoriy lizis",
      "plazmida",
      "pBR322",
      "pUC19",
      "pET",
      "polilinker",
      "kosmida",
      "BAC",
      "YAC",
      "shuttle vektor",
    ],
    references: "Xalimova N.T. Biotexnologiya · 5-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/05-mavzu_DNK_manbalari_va_vektorlar_7c050c42.pdf",
    pdfTitle: "5-mavzu: Klonlash uchun DNK manbalari va vektor molekulalar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "5-mavzu: Klonlash uchun DNK manbalari va vektor molekulalar (Ma’ruza matni)",
        url: "/assets/aistudio/05-mavzu_DNK_manbalari_va_vektorlar_7c050c42.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-6",
    order: 6,
    code: "BT06",
    topicLabel: "6-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Rekombinant DNK olish va gen konstruksiyalarini yaratish usullari",
    syllabusPoints: [
      "Rekombinant DNK olishning umumiy sxemasi, uchlar mosligi muammosi va 1975-yilgi Asilomar konferensiyasi",
      "Restriktaza-ligaza metodi, yo‘nalgan (direksion) klonlash va PZR praymerlari orqali sayt kiritish",
      "Linker, adapter, konnektor (gomopolimer dumlar) va TA-klonlash usullari",
      "Gen konstruksiyasini loyihalash: promotor, RBS, fyuzion teglar (His-teg, GST, MBP, FLAG) va o‘qish ramkasi (ramka siljishi)",
      "Zamonaviy yig‘ish usullari (Gibson assembly, Golden Gate, Gateway) va konstruksiyani tekshirish (koloniya PZR, sekvenlash)",
    ],
    studyNotes:
      "Yo‘nalgan klonlash (2 xil restriktaza) vektor o‘z-o‘ziga ulanishini oldini oladi va insertni bitta to‘g‘ri yo‘nalishda joylashtiradi. Adapterda yopishqoq uch tayyor bo‘lgani uchun genni ichidan kesish xavfi yo‘q. Har qanday yangi konstruksiya yakunda albatta sekvenlanishi shart.",
    overview:
      "Turli manbalardan olingan DNK bo‘laklarini sun’iy ravishda birlashtirib ishlaydigan gen konstruksiyasini yaratish gen muhandisligining markaziy amaliy bosqichidir. Ma’ruzada yo‘nalgan klonlash, linker va adapter farqi, TA-klonlash, His-teg/GST/MBP fyuzion teglari, ramka siljishi xatoligi hamda Gibson assembly va sekvenlash tekshiruvi yoritilgan.",
    sections: [
      {
        heading: "6.1. Restriktaza-ligaza, yo‘nalgan klonlash va PZR orqali sayt kiritish",
        content:
          "Bitta restriktaza bilan klonlashda vektor o‘z-o‘ziga ulanib ko‘p fon beradi va insertning yarmi teskari kiradi. Ikki xil restriktaza bilan yo‘nalgan klonlash bu ikki muammoni bir vaqtda hal qiladi.",
        highlights: [
          "PZR praymerining 5' uchiga kerakli restriktaza sayti hamda undan tashqarida 3–6 qo‘shimcha nukleotid qoldiriladi",
          "1975-yilgi Asilomar konferensiyasi — olimlar rekombinant DNK tajribalari uchun xavfsizlik qoidalarini o‘zlari ishlab chiqqan tarixiy voqea",
        ],
      },
      {
        heading: "6.2. Linker, adapter, konnektor va TA-klonlash",
        content:
          "Vektor va insert uchlari mos kelmaganda qisqa sintetik oligonukleotidlar yoki fermentativ uchlar qo‘llaniladi.",
        highlights: [
          "Linker — ikkala uchi to‘mtoq, ichida restriktaza sayti bor; ulanib keyin kesiladi (ichki saytlarni metilaza bilan himoyalash kerak)",
          "Adapter — bir uchi to‘mtoq, ikkinchisi tayyor yopishqoq; restriktaza bilan kesish shart emas, ichki saytlar xavfi yo‘q",
          "Konnektor usuli — terminal transferaza bilan vektorga poli-G, insertga poli-S dum qo‘shiladi (o‘z-o‘ziga ulanmaydi)",
          "TA-klonlash — Taq-polimeraza 3' uchga qoldiradigan adenin (A) va vektorning T-uchi komplementarligidan foydalanadi",
        ],
      },
      {
        heading: "6.3. Gen konstruksiyasini loyihalash va tekshirish",
        content:
          "Ekspression konstruksiya PROMOTOR – RBS – [START] – GEN – [STOP] – TERMINATOR ketma-ketligida tuziladi. Fyuzion teglar oqsilni bitta bosqichda tozalashni ta’minlaydi, lekin o‘qish ramkasi buzilmasligi shart.",
        highlights: [
          "Fyuzion teglar: His-teg (6 ta gistidin, nikel kolonka), GST (glutation kolonka), MBP (eruvchanlikni oshiradi), FLAG (antitana bilan aniqlash)",
          "Ramka siljishi (1–2 nukleotid ortiq/kamligi) — butunlay boshqa yoki kalta oqsil chiqishiga olib keluvchi xavfli xato",
          "Zamonaviy yig‘ish: Gibson assembly (20–40 nt qoplashuvchi uchlar, 5 tagacha bo‘lak bir probirkada) va Golden Gate (IIS restriktazalar, izsiz)",
          "Tekshirish zanjiri: koloniya PZR → restriksion tahlil → sekvenlash (majburiy yakuniy tasdiq) → SDS-PAGE/Vestern-blot",
        ],
      },
    ],
    comparisonTable: {
      title: "Linker va adapter hamda zamonaviy yig‘ish usullari qiyosi",
      columns: ["Usul / Vosita", "Tuzilishi yoki mexanizmi", "Kesish talabi", "Asosiy afzalligi"],
      rows: [
        [
          "Linker",
          "Ikkala uchi to‘mtoq, ichida sayt bor",
          "Ha, restriktaza bilan",
          "Arzon, sodda holatlar uchun",
        ],
        [
          "Adapter",
          "Biri to‘mtoq, biri tayyor yopishqoq",
          "Yo‘q",
          "Gen ichidagi saytlarni kesish xavfi yo‘q",
        ],
        [
          "TA-klonlash",
          "Taq qoldirgan 3'-A va vektor 3'-T uchi",
          "Yo‘q",
          "PZR mahsulotini tezkor klonlash",
        ],
        [
          "Gibson assembly",
          "20–40 nt qoplashuvchi uchlar + 3 ferment",
          "Yo‘q",
          "Bir vaqtda 5 tagacha bo‘lakni ulash",
        ],
        [
          "Golden Gate",
          "IIS tipidagi restriktazalar",
          "Saytdan tashqarida kesadi",
          "Ulanish joyida ortiqcha iz qolmaydi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Yo‘nalgan klonlash",
        definition:
          "Vektor va insertni ikki xil restriktaza bilan kesib, vektor o‘z-o‘ziga ulanishini oldini olish va aniq yo‘nalishni ta’minlash.",
      },
      {
        term: "Linker va Adapter",
        definition:
          "Linker — ikkala uchi to‘mtoq bo‘lib keyin kesiladi; adapterda esa bir uch tayyor yopishqoq bo‘lib kesish talab qilmaydi.",
      },
      {
        term: "His-teg",
        definition:
          "Oqsilga qo‘shib sintezlanadigan 6 ta gistidin qoldig‘i; nikel-affin xromatografiyasida tezkor tozalash uchun.",
      },
      {
        term: "Ramka siljishi",
        definition:
          "Konstruksiyada 3 ga karrali bo‘lmagan nukleotid qo‘shilishi/yo‘qolishi tufayli kodonlar o‘qilishining buzilishi.",
      },
      {
        term: "Gibson assembly",
        definition:
          "Qoplashuvchi uchli bir nechta DNK bo‘lagini bitta probirkada izsiz birlashtiruvchi zamonaviy klonlash usuli.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "PZR praymeriga restriktaza sayti kiritilganda nima uchun saytdan tashqarida 3–6 nukleotid qoldiriladi?",
        answer:
          "Restriktaza fermentlari DNK molekulasining eng chetki uchidan samarali kesa olmaydi; qo‘shimcha 3–6 nukleotid fermentning bog‘lanishi uchun joy yaratadi.",
      },
      {
        question: "Adapter linkerga qaraganda qanday muhim xavfni bartaraf etadi?",
        answer:
          "Adapterda yopishqoq uch tayyor bo‘lgani uchun restriktaza bilan qayta kesish shart emas, natijada insert ichida uchraydigan saytlardan genning parchalanish xavfi yo‘qoladi.",
      },
      {
        question: "Restriksion tahlil ijobiy chiqsa ham nima uchun sekvenlash majburiy?",
        answer:
          "Restriksion tahlil faqat insert uzunligini ko‘rsatadi, ammo PZR yoki ligirovkada kirgan nuqtaviy mutatsiya yoki ramka siljishini faqat sekvenlash aniqlay oladi.",
      },
    ],
    keyTerms: [
      "rekombinant DNK",
      "yo‘nalgan klonlash",
      "linker",
      "adapter",
      "konnektor",
      "TA-klonlash",
      "His-teg",
      "GST",
      "MBP",
      "ramka siljishi",
      "Gibson assembly",
      "Golden Gate",
      "Asilomar",
    ],
    references: "Xalimova N.T. Biotexnologiya · 6-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/06-mavzu_Rekombinant_DNK_va_gen_konstruksiyalari_1260d46f.pdf",
    pdfTitle: "6-mavzu: Rekombinant DNK va gen konstruksiyalari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "6-mavzu: Rekombinant DNK va gen konstruksiyalari (Ma’ruza matni)",
        url: "/assets/aistudio/06-mavzu_Rekombinant_DNK_va_gen_konstruksiyalari_1260d46f.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-7",
    order: 7,
    code: "BT07",
    topicLabel: "7-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Rekombinant va transgen hujayralarni seleksiya qilish va ko‘paytirish",
    syllabusPoints: [
      "Genetik materialni hujayraga kiritish usullari: kimyoviy transformatsiya (CaCl₂, 42 °C), elektroporatsiya, lipofeksiya, mikroin’eksiya, biolistika",
      "Selektiv markerlar (antibiotikka chidamlilik, auksotroflik, gerbitsid), satellit koloniyalar va insersion inaktivatsiya (pBR322)",
      "Skrining usullari: ko‘k-oq seleksiya (lacZα, X-gal, IPTG), koloniya PZR, koloniya gibridizatsiyasi va reporter genlar (GFP, lyusiferaza, GUS)",
      "Transformatsiyalanmagan hujayralardan ajratish, vaqtinchalik va barqaror ekspressiya hamda pozitsion effekt",
      "Rekombinant hujayralarni kultivatsiya qilish (batch, fed-batch, uzluksiz, perfuzion), plazmida beqarorligi va shtammlarni saqlash (−80 °C glitserin)",
    ],
    studyNotes:
      "Transformatsiyadan keyin 1 soat antibiotiksiz tiklanish vaqti berilishi shart (chidamlilik oqsili sintezlanishi uchun). Seleksiyada keraksiz hujayralar nobud bo‘ladi, skriningda esa barcha tirik koloniyalar ichidan tanlanadi. Plazmida beqarorligi plazmidasiz hujayralar tezroq o‘sishi tufayli yuzaga keladi.",
    overview:
      "Transformatsiya paytida hujayralarning 1% dan kamrog‘i begona DNK ni qabul qiladi. Ushbu mavzuda DNK kiritish texnikalari, transformatsiya samaradorligi (elektroporatsiyada 10⁸–10¹⁰/mkg DNK), seleksiya va skrining tamoyillari, GFP reporter geni, pozitsion effekt hamda sanoat shtammlarida plazmida barqarorligini saqlash va krioprezervatsiya qoidalari yoritiladi.",
    sections: [
      {
        heading: "7.1. DNK kiritish usullari va transformatsiya samaradorligi",
        content:
          "Bakteriyalarda sovuq CaCl₂ + issiqlik zarbasi (42 °C, 45 soniya) kimyoviy transformatsiyasi (10⁵–10⁷ koloniya/mkg DNK) yoki yuqori samarali elektroporatsiya (10⁸–10¹⁰ koloniya/mkg DNK) qo‘llaniladi. Eukariotlarda lipofeksiya, virus vektorlari, biolistika va mikroin’eksiya ishlatiladi.",
        highlights: [
          "Transformatsiyadan so‘ng 1 soat antibiotiksiz muhitda tiklanish vaqti berilmasa, chidamlilik oqsili hosil bo‘lishidan oldin hujayralar nobud bo‘ladi",
          "Samaradorlik omillari: kompetentlik, DNK tozaligi, halqasimon shakl va konstruksiya o‘lchami",
        ],
      },
      {
        heading: "7.2. Seleksiya, skrining va reporter genlar",
        content:
          "Seleksiya keraksiz hujayralarni muhitning o‘zi orqali nobud qiladi (antibiotik, auksotroflik markerlari LEU2/URA3), skrining esa tirik koloniyalar orasidan insert borlarini aniqlaydi.",
        highlights: [
          "Ampitsillin seleksiyasida beta-laktamaza tashqariga ajralib, koloniya atrofida plazmidasiz satellit koloniyalar o‘sishiga sabab bo‘lishi mumkin",
          "Ko‘k-oq skrining (lacZα + X-gal + IPTG): insert yo‘q → ko‘k koloniya; insert bor (lacZα buzilgan) → oq koloniya",
          "GFP (yashil fluoressent oqsil, Nobel mukofoti) — hujayrani o‘ldirmasdan tirik holda oqsil ekspressiyasini kuzatish",
          "Pozitsion effekt — barqaror transformatsiyada gen geteroxromatinga tushsa susayadi, faol sohaga tushsa kuchli ishlaydi",
        ],
      },
      {
        heading: "7.3. Kultivatsiya rejimlari, plazmida beqarorligi va shtamm saqlash",
        content:
          "Rekombinant plazmida hujayra uchun energiya yuki bo‘lgani sababli uzoq kultivatsiyada plazmidasiz hujayralar tezroq o‘sib populyatsiyani egallab oladi (plazmida beqarorligi).",
        highlights: [
          "Plazmida barqarorligini oshirish: selektiv bosim, induksiyalanuvchi promotor, xromosomaga integratsiya va toksin-antitoksin tizimlari",
          "Sanoatda fed-batch eng keng tarqalgan: yuqori hujayra zichligi va barqaror boshqaruv beradi",
          "Saqlash usullari: 20% glitserinli zaxira (−80 °C, yillar), liofilizatsiya (o‘nlab yillar), suyuq azot (−196 °C); har doim ikki joyda zaxira va pasport yuritiladi",
        ],
      },
    ],
    comparisonTable: {
      title: "Genetik material kiritish va kultivatsiya usullari qiyosi",
      columns: ["Usul / Rejim", "Obyekt", "Asosiy afzalligi", "Cheklovi"],
      rows: [
        [
          "Kimyoviy (CaCl₂)",
          "Bakteriya",
          "Sodda va arzon (10⁵–10⁷)",
          "Samaradorligi elektroporatsiyadan past",
        ],
        [
          "Elektroporatsiya",
          "Deyarli barcha hujayralar",
          "Juda yuqori samara (10⁸–10¹⁰)",
          "Maxsus jihoz kerak, qisman nobud bo‘lish",
        ],
        [
          "Lipofeksiya / Virus",
          "Hayvon hujayrasi",
          "Zararsiz / eng yuqori samaradorlik",
          "Virusda bioxavfsizlik nazorati shart",
        ],
        [
          "Fed-batch kultivatsiya",
          "Sanoat shtammlari",
          "Yuqori zichlik, kataboliy repressiya nazorati",
          "Oziqa qo‘shishni boshqarish murakkab",
        ],
        [
          "Uzluksiz / Perfuzion",
          "Bakteriya / hayvon hujayrasi",
          "Uzoq vaqt juda yuqori mahsuldorlik",
          "Ifloslanish va plazmida yo‘qolish xavfi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Kompetent hujayra",
        definition:
          "Sovuq CaCl₂ yoki maxsus ishlov orqali tashqaridan begona DNK qabul qilishga tayyorlangan bakteriya hujayrasi.",
      },
      {
        term: "Satellit koloniyalar",
        definition:
          "Ampitsillinli muhitda beta-laktamaza atrofdagi antibiotikni parchalagach, asosiy koloniya yonida o‘sib chiqadigan plazmidasiz koloniyalar.",
      },
      {
        term: "Ko‘k-oq seleksiya",
        definition:
          "lacZα genining insersion inaktivatsiyasi asosida X-gal muhitida insert bor (oq) va bo‘sh (ko‘k) koloniyalarni ajratish.",
      },
      {
        term: "Pozitsion effekt",
        definition:
          "Transgenning xromosoma genomida aynan qaysi sohaga (evxromatin yoki geteroxromatin) tushganiga qarab ekspressiyasining keskin farqlanishi.",
      },
      {
        term: "Plazmida beqarorligi",
        definition:
          "Uzoq kultivatsiyada plazmidasini yo‘qotgan hujayralar tezroq bo‘linib, ishlab chiqaruvchi populyatsiyani siqib chiqarishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Transformatsiyadan so‘ng nima uchun hujayralarni darhol antibiotikli plastinkaga ekib bo‘lmaydi?",
        answer:
          "Hujayralarga 1 soat antibiotiksiz tiklanish vaqti berilishi shart, aks holda chidamlilik geni ifodalanib himoya oqsili sintezlanishidan oldin transformantlar ham nobud bo‘ladi.",
      },
      {
        question: "Seleksiya va skrining tushunchalarining prinsipial farqi nimada?",
        answer:
          "Seleksiyada keraksiz hujayralar muhit sharoiti (antibiotik) ta’sirida nobud bo‘ladi; skriningda esa barcha hujayralar tirik qoladi va tadqiqotchi ular orasidan keraklisini (rang, PZR) tanlab oladi.",
      },
      {
        question:
          "Oziq-ovqat ishlab chiqarishda antibiotik qo‘shmasdan plazmida barqarorligini qanday ta’minlash mumkin?",
        answer:
          "Genni bevosita xromosomaga integratsiya qilish, auksotroflik markerlari yoki toksin-antitoksin tizimlaridan hamda induksiyalanuvchi promotorlardan foydalanish orqali.",
      },
    ],
    keyTerms: [
      "kompetent hujayra",
      "elektroporatsiya",
      "selektiv marker",
      "satellit koloniya",
      "ko‘k-oq seleksiya",
      "lacZ",
      "GFP",
      "pozitsion effekt",
      "plazmida beqarorligi",
      "fed-batch",
      "krioprezervatsiya",
    ],
    references: "Xalimova N.T. Biotexnologiya · 7-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/07-mavzu_Rekombinant_hujayralarni_seleksiya_qilish_e72b68ee.pdf",
    pdfTitle: "7-mavzu: Rekombinant hujayralarni seleksiya qilish va ko‘paytirish (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "7-mavzu: Rekombinant hujayralarni seleksiya qilish va ko‘paytirish (Ma’ruza matni)",
        url: "/assets/aistudio/07-mavzu_Rekombinant_hujayralarni_seleksiya_qilish_e72b68ee.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-8",
    order: 8,
    code: "BT08",
    topicLabel: "8-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Transgen ekin va ortiqcha gen ekspressiyasini ta’minlash texnologiyalari",
    syllabusPoints: [
      "O‘simliklarni transformatsiya qilish usullari: Agrobacterium, biolistika (gen to‘pponchasi), protoplast, elektroporatsiya",
      "Agrobacterium tumefaciens va Ti-plazmida (T-DNK, LB/RB chegaralari, vir genlar) hamda binar vektor tizimi",
      "Transgen o‘simliklarni regeneratsiya qilish (totipotentlik, auksin/sitokinin nisbati) va T1 avlodlar tahlili (3:1, 15:1)",
      "Gen ekspressiyasini kuchaytirish: promotorlar (35S, Ubiquitin, patatin, napin), intron effekti, organoidga yo‘naltirish va xloroplast transformatsiyasi",
      "Gen jim turishi (silencing), uning sabablari va ekspressiyani barcha darajada tasdiqlash (Southern, Northern/RT-qPZR, Vestern-blot, ELISA)",
    ],
    studyNotes:
      "Agrobacterium tabiatdagi yagona tabiiy transgenez tizimi bo‘lib, T-DNK ning LB/RB chegaralari orasiga qo‘yilgan har qanday genni ko‘chiradi (1–2 tartibli nusxa). Xloroplast transformatsiyasida transgen chang orqali yovvoyi turlarga tarqalmaydi.",
    overview:
      "O‘simlik hujayrasining totipotentligi bitta transformatsiyalangan hujayradan to‘liq transgen o‘simlik olish imkonini beradi. Ma’ruzada qurolsizlantirilgan Ti-plazmida va binar vektor tizimi, biolistika, promotor tanlovi (konstitutiv 35S vs to‘qimaga xos), intron effekti, xloroplast transformatsiyasi hamda gen jim turishi (RNK-interferensiya) mexanizmlari yoritiladi.",
    sections: [
      {
        heading: "8.1. Agrobacterium Ti-plazmida tizimi va biolistika",
        content:
          "Agrobacterium tumefaciens tabiatda toj g‘uddasi hosil qiladi: jarohat fenollarini sezib vir genlarini faollashtiradi va T-DNK ni o‘simlik genomiga o‘tkazadi. Biotexnologiyada gormon/opin genlari olib tashlanib («qurolsizlantirish») binar vektor tizimi (T-DNK kichik plazmidada + vir genlar helper plazmidada) qo‘llaniladi.",
        highlights: [
          "Agrobacterium ustunligi — kam (1–2) nusxa va tartibli integratsiya; biolistika ustunligi — barcha turlar (bir pallali g‘allalar, xloroplast) uchun universal",
          "T-DNK ni ko‘chirishda ichidagi genlar emas, LB va RB chegaraviy ketma-ketliklar hal qiluvchi ahamiyatga ega",
        ],
      },
      {
        heading: "8.2. Regeneratsiya, promotorlar va xloroplast transformatsiyasi",
        content:
          "Ko-kultivatsiya → bakteriyani sefotaksim bilan yo‘qotish → kanamitsin/gerbitsid seleksiyasi → kallus → organogenez → akklimatizatsiya bosqichlari orqali transgen nihol olinadi. Bitta insersiyali T0 o‘simlik T1 da 3:1 nisbatda ajraladi.",
        highlights: [
          "Promotorlar: 35S (CaMV, konstitutiv), Ubiquitin (bir pallalilar), Napin/fasolin (urug‘ga xos), Rubisco (bargga xos), Patatin (kartoshka tuganagiga xos)",
          "To‘qimaga xos promotor o‘simlikka ortiqcha energiya yuki tushishini oldini oladi; bir pallalilarda intron kiritish ekspressiyani bir necha barobar oshiradi",
          "Xloroplast transformatsiyasi — gomologik rekombinatsiya (pozitsion effekt yo‘q), yuzlab nusxa va eng muhimi chang orqali tarqalmasligi (bioxavfsizlik)",
        ],
      },
      {
        heading: "8.3. Gen jim turishi (silencing) va ko‘p darajali tahlil",
        content:
          "Ko‘p nusxa (ayniqsa biolistikada), bir konstruksiyada 35S promotorini takrorlash yoki geteroxromatinga tushish natijasida transgen ifodalanishi to‘xtab qolishi (transkripsiyagacha metillanish yoki posttranskripsion RNK-interferensiya) mumkin.",
        highlights: [
          "To‘liq tasdiqlash 4 darajada olib boriladi: DNK (PZR, Southern-blot) → mRNK (Northern-blot, RT-qPZR) → Oqsil (Vestern-blot, ELISA) → Biologik faollik va dala sinovi",
          "Gen jim turishini o‘rganish Nobel mukofotiga sazovor bo‘lgan RNK-interferensiya mexanizmini kashf etishga olib kelgan",
        ],
      },
    ],
    comparisonTable: {
      title: "Transgen o‘simlikni barcha molekulyar darajalarda tasdiqlash usullari",
      columns: ["Tekshiriladigan daraja", "Asosiy usul", "Nimani aniqlaydi"],
      rows: [
        [
          "DNK darajasi",
          "PZR, Southern-blot",
          "Gen mavjudligi, genomga integratsiya va nusxa soni",
        ],
        [
          "mRNK darajasi",
          "Northern-blot, RT-qPZR",
          "Transkripsiya faolligi va nisbiy ekspressiya (Ct)",
        ],
        [
          "Oqsil darajasi",
          "Vestern-blot, ELISA",
          "Oqsil o‘lchami va aniq miqdoriy konsentratsiyasi",
        ],
        [
          "Faollik va fenotip",
          "Ferment/biosinov, T1 ajralish",
          "Amaliy samara va Mendel qonuni (3:1) bo‘yicha irsiylanish",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Binar vektor tizimi",
        definition:
          "T-DNK chegaralari va kerakli gen kichik plazmidada (E. coli da ishlanadi), vir genlari esa Agrobacterium dagi yordamchi plazmidada joylashgan tizim.",
      },
      {
        term: "Ti-plazmidani qurolsizlantirish",
        definition:
          "O‘simta hosil qiluvchi gormon va opin genlarini T-DNK dan olib tashlab, o‘rniga kerakli gen va markerni joylashtirish.",
      },
      {
        term: "Gen jim turishi (silencing)",
        definition:
          "Ko‘p nusxa, promotor metillanishi yoki RNK-interferensiya tufayli genomdagi transgen ekspressiyasining o‘chib qolishi.",
      },
      {
        term: "Xloroplast transformatsiyasi",
        definition:
          "Genni xloroplast genomiga kiritish; yuqori ekspressiya beradi va chang orqali yovvoyi o‘simliklarga o‘tmaydi.",
      },
      {
        term: "Intron effekti",
        definition:
          "G‘alla ekinlari gen konstruksiyasiga intron kiritish orqali mRNK barqarorligi va ekspressiyasini bir necha barobar oshirish.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Agrobacterium usulining biolistikadan asosiy molekulyar ustunligi nimada?",
        answer:
          "Agrobacterium genomga odatda 1–2 nusxani tartibli kiritadi; biolistikada esa ko‘p nusxa tartibsiz qo‘shilib, gen jim turishi (silencing) xavfini oshiradi.",
      },
      {
        question:
          "Kartoshka tuganagida oqsil olishda nima uchun 35S emas, patatin promotori afzal?",
        answer:
          "35S konstitutiv promotor oqsilni barg va poyada ham ortiqcha sintezlab hosildorlikni pasaytiradi; patatin esa to‘qimaga xos bo‘lib faqat tuganakda ishlaydi.",
      },
      {
        question:
          "Nima uchun xloroplast transformatsiyasi GMO bioxavfsizligi uchun muhim hisoblanadi?",
        answer:
          "Ko‘pchilik gulli o‘simliklarda xloroplastlar faqat ona chizig‘i bilan o‘tadi va chang tarkibiga kirmaydi, shu sababli transgen yovvoyi qarindoshlarga o‘tib ketmaydi.",
      },
    ],
    keyTerms: [
      "Agrobacterium tumefaciens",
      "Ti-plazmida",
      "T-DNK",
      "binar vektor",
      "biolistika",
      "35S promotor",
      "patatin",
      "xloroplast transformatsiyasi",
      "gen jim turishi",
      "Southern-blot",
      "RT-qPZR",
    ],
    references: "Xalimova N.T. Biotexnologiya · 8-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/08-mavzu_Transgen_ekinlar_va_gen_ekspressiyasi_2a8899d0.pdf",
    pdfTitle: "8-mavzu: Transgen ekinlar va gen ekspressiyasi (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "8-mavzu: Transgen ekinlar va gen ekspressiyasi (Ma’ruza matni)",
        url: "/assets/aistudio/08-mavzu_Transgen_ekinlar_va_gen_ekspressiyasi_2a8899d0.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-9",
    order: 9,
    code: "BT09",
    topicLabel: "9-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Hayvonlar genetik muhandisligi va transgen hayvonlar olish",
    syllabusPoints: [
      "Transgen hayvon tushunchasi, germinativ liniyaga yetib borish sharti, mozaiklik va «3R» axloqiy tamoyili",
      "Pronukleusga mikroin’eksiya va embrion ildiz (ES) hujayralari (gomologik rekombinatsiya) usullari qiyosi",
      "Somatik hujayra yadrosini ko‘chirish (enukleatsiya, klonlash) va Dolli qo‘yi (1996) tajribasining ilmiy ahamiyati",
      "Nokaut, nokin, shartli nokaut (Cre-lox tizimi) va CRISPR/Cas9 (gRNK, NHEJ vs HDR)",
      "Transgen hayvonlardan foydalanish: biofabrikalar (sutda dori), ksenotransplantatsiya, kasallik modellari va bioetika",
    ],
    studyNotes:
      "Transgen avlodga o‘tishi uchun o‘zgarish germinativ liniyaga yetishi shart. Dolli qo‘yi (1996) differensiatsiyalangan yadro qayta dasturlanishi mumkinligini isbotladi. Shartli nokaut (Cre-lox) hayot uchun zarur genlarni faqat kerakli organda o‘chirish imkonini beradi.",
    overview:
      "Hayvon hujayralarida totipotentlik yo‘qligi sababli transgen hayvonlar olish embrionlar, ES hujayralari, somatik klonlash yoki CRISPR/Cas9 orqali amalga oshiriladi. Ma’ruzada mikroin’eksiya, gomologik rekombinatsiya, Dolli qo‘yi, shartli nokaut (Cre-lox), sut bezlarida dori oqsili olish (biofabrikalar) va ksenotransplantatsiya masalalari yoritilgan.",
    sections: [
      {
        heading: "9.1. Mikroin’eksiya, ES hujayralari va somatik klonlash",
        content:
          "Pronukleusga mikroin’eksiya ko‘p turlarda ishlaydi, lekin tasodifiy integratsiya va mozaiklik beradi hamda gen o‘chirishga yaroqsiz. Embrion ildiz (ES) hujayralari gomologik rekombinatsiya orqali aniq nokaut sichqonlar olish (Nobel mukofoti) imkonini berdi.",
        highlights: [
          "Somatik klonlash (Dolli qo‘yi, 1996) — teri fibroblasti yadrosi enukleatsiya qilingan tuxum hujayraga ko‘chiriladi; barcha hujayralar bir xil (mozaiklik yo‘q)",
          "Somatik klonlash muammolari: epigenetik qayta dasturlashning to‘liq emasligi, past samaradorlik va rivojlanish nuqsonlari",
          "Hayvon tajribalarida «3R» tamoyili majburiy: Replace (almashtirish), Reduce (kamaytirish), Refine (takomillashtirish)",
        ],
      },
      {
        heading: "9.2. Nokaut, shartli nokaut (Cre-lox) va CRISPR/Cas9",
        content:
          "Hayot uchun zarur genni butunlay o‘chirish embrionni nobud qiladi. Cre-lox shartli nokaut tizimi genni to‘qimaga xos promotor bilan faqat kerakli organda kesib tashlaydi.",
        highlights: [
          "CRISPR/Cas9 (2012, Nobel 2020) — yo‘naltiruvchi gRNK nishonni topadi, Cas9 ikki zanjirni kesadi",
          "NHEJ ta’mirlash yo‘li — xatolar kiritib genni buzadi (nokaut); HDR yo‘li (matritsa bilan) — aniq almashtirish (nokin)",
          "CRISPR cheklovlari: nishonsiz ta’sir (off-target), mozaiklik va HDR samaradorligining pastligi",
        ],
      },
      {
        heading: "9.3. Amaliy yo‘nalishlar: biofabrikalar va ksenotransplantatsiya",
        content:
          "Transgen hayvonlar tibbiyot va biotexnologiyada kasallik modellari, arzon dori oqsillari ishlab chiqarish hamda organ donorligi muammosini yechishda qo‘llanilmoqda.",
        highlights: [
          "Molekulyar dehqonchilik (biofabrikalar) — sut beziga xos promotor bilan echki/sigir sutida antitrombin, laktoferrin kabi dorilar olish",
          "Ksenotransplantatsiya — cho‘chqa genomida o‘tkir rad etish genlarini o‘chirib va endogen retroviruslarni inaktivatsiya qilib donor organ olish",
          "Inson germinativ liniyasini tahrirlash ko‘pchilik davlatlarda qonunan taqiqlangan",
        ],
      },
    ],
    comparisonTable: {
      title: "Transgen hayvon olish usullarining qiyosiy tavsifi",
      columns: ["Usul", "Integratsiya aniqligi", "Gen o‘chirish (nokaut)", "Asosiy xususiyati"],
      rows: [
        [
          "Pronukleusga mikroin’eksiya",
          "Tasodifiy",
          "Imkonsiz",
          "Sodda, ko‘p turlar; mozaiklik xavfi",
        ],
        [
          "ES hujayralari",
          "Aniq (gomologik rekombinatsiya)",
          "Mumkin",
          "Asosan sichqonlarda; ximer orqali liniya",
        ],
        [
          "Somatik klonlash",
          "Kulturada aniq tanlanadi",
          "Mumkin",
          "Mozaiklik yo‘q; yirik chorvada qulay, past samara",
        ],
        [
          "CRISPR/Cas9",
          "Nukleotid darajasida aniq",
          "NHEJ (nokaut) / HDR (nokin)",
          "Tez (haftalar), arzon, deyarli barcha turlar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Germinativ liniya",
        definition:
          "Jinsiy hujayralar liniyasi; transgen avlodlarga o‘tishi uchun genetik o‘zgarish shu liniyaga yetishi shart.",
      },
      {
        term: "Somatik klonlash",
        definition:
          "Differensiatsiyalangan tana hujayrasi yadrosini enukleatsiya qilingan tuxum hujayraga ko‘chirib organizm olish (Dolli qo‘yi).",
      },
      {
        term: "Shartli nokaut (Cre-lox)",
        definition:
          "Hayot uchun zarur genni to‘qimaga xos promotor yordamida faqat kerakli organ yoki yoshda o‘chirish tizimi.",
      },
      {
        term: "NHEJ va HDR",
        definition:
          "CRISPR kesimidan keyingi DNK ta’mirlash yo‘llari: NHEJ xatoli ulab nokaut beradi, HDR matritsa bo‘yicha aniq nokin beradi.",
      },
      {
        term: "Ksenotransplantatsiya",
        definition:
          "Immun rad etish genlari o‘chirilgan genetik modifikatsiyalangan hayvon (cho‘chqa) organlarini insonga ko‘chirish yo‘nalishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Mozaik hayvonda nima uchun dum tahlilida transgen chiqsa ham naslga o‘tmasligi mumkin?",
        answer:
          "Integratsiya embrion bo‘linishidan keyin kech sodir bo‘lgani uchun transgen faqat ayrim somatik to‘qimalarga tushib, jinsiy hujayralarga (germinativ liniyaga) yetib bormagan bo‘ladi.",
      },
      {
        question:
          "Dolli qo‘yi tajribasi hujayra biologiyasidagi qaysi tasavvurni tubdan o‘zgartirdi?",
        answer:
          "U differensiatsiyalangan somatik hujayra yadrosini qayta dasturlash mumkinligini isbotladi va keyinchalik iPSC texnologiyasiga nazariy asos bo‘ldi.",
      },
      {
        question:
          "Hayot uchun zarur genning jigardagi funksiyasini o‘rganishda qaysi usul qo‘llaniladi?",
        answer:
          "Cre-lox tizimi asosidagi shartli (conditional) nokaut qo‘llaniladi: Cre rekombinazasi jigarga xos promotor ostida faqat jigarda genni kesib tashlaydi.",
      },
    ],
    keyTerms: [
      "transgen hayvon",
      "mikroin’eksiya",
      "pronukleus",
      "ES hujayralari",
      "Dolli qo‘yi",
      "somatik klonlash",
      "nokaut",
      "Cre-lox",
      "CRISPR/Cas9",
      "NHEJ",
      "HDR",
      "ksenotransplantatsiya",
      "3R tamoyili",
    ],
    references: "Xalimova N.T. Biotexnologiya · 9-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/09-mavzu_Hayvonlar_genetik_muhandisligi_f2d161b0.pdf",
    pdfTitle: "9-mavzu: Hayvonlar genetik muhandisligi va transgen hayvonlar (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "9-mavzu: Hayvonlar genetik muhandisligi va transgen hayvonlar (Ma’ruza matni)",
        url: "/assets/aistudio/09-mavzu_Hayvonlar_genetik_muhandisligi_f2d161b0.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-10",
    order: 10,
    code: "BT10",
    topicLabel: "10-mavzu",
    module: "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi",
    title: "Zamonaviy gen muhandisligi va genomika yutuqlari",
    syllabusPoints: [
      "Genomika bo‘limlari, Senger usuli, yangi avlod sekvenlash (NGS), 3-avlod (Nanopor, PacBio) va Inson genomi loyihasi (1990–2003)",
      "Genom tahrirlash evolyutsiyasi: ZFN, TALEN, CRISPR/Cas9, asos tahrirlash (base editing), prime editing, CRISPRi/a",
      "Gen terapiyasi: ex vivo (CAR-T) va in vivo (AAV) yondashuvlari, 1999-yilgi tarixiy saboqlar",
      "Omiks texnologiyalari (genomika, transkriptomika, proteomika, metabolomika, epigenomika), bioinformatika (BLAST, GenBank) va shaxsiylashtirilgan tibbiyot",
      "Sintetik biologiya (biobricks, DBTL sikli, achitqida artemizinin sintezi) va mas’uliyatli innovatsiya",
    ],
    studyNotes:
      "Inson genomi (~3 mlrd j.a.) kutilgan 100 000 emas, atigi ~20 000 oqsil kodlovchi genga ega. CRISPR ning ZFN/TALEN dan ustunligi — nishonni o‘zgartirish uchun yangi oqsil emas, faqat 20 nt li gRNK almashtiriladi. Asos tahrirlash DNK ni kesmasdan bitta nukleotidni tuzatadi.",
    overview:
      "Arzon va tezkor sekvenlash (NGS) hamda aniq genom tahrirlash (CRISPR, base/prime editing) zamonaviy biotexnologiyada inqilob yasadi. Ma’ruzada sekvenlashning uch avlodi, omiks qatlamlarining o‘zaro bog‘liqligi, CAR-T va AAV gen terapiyasi, bioinformatika hamda sintetik biologiyaning muhandislik tamoyillari tahlil qilinadi.",
    sections: [
      {
        heading: "10.1. Genomika va sekvenlash texnologiyalari",
        content:
          "Inson genomi loyihasi (1990–2003) ~3 milliard juft asosni o‘qib, atigi ~20 ming oqsil kodlovchi gen borligini aniqladi — murakkablik gen soniga emas, boshqaruv va muqobil splaysingga bog‘liq.",
        highlights: [
          "1-avlod (Senger usuli) — didezoksinukleotidlar bilan juda aniq; bugun klonlarni yakuniy tasdiqlashda ishlatiladi",
          "2-avlod (NGS, Illumina) — millionlab bo‘lakni bir vaqtda o‘qib, genom narxini milliard dollardan bir necha yuz dollarga tushirdi",
          "3-avlod (Nanopor, PacBio) — juda uzun DNK bo‘laklarini real vaqtda o‘qiydi",
        ],
      },
      {
        heading: "10.2. Genom tahrirlashning yangi avlodlari va gen terapiyasi",
        content:
          "ZFN va TALEN da har nishon uchun oylab yangi oqsil loyihalanardi; CRISPR da esa 1 kunda 20 nukleotidli gRNK sintezlanadi. Zamonaviy base editing va prime editing ikki zanjirli uzilish hosil qilmagani uchun ancha xavfsiz.",
        highlights: [
          "Asos tahrirlash (base editing) — DNK ni kesmasdan bitta nukleotidni kimyoviy almashtiradi (nuqtaviy mutatsiyalar uchun ideal)",
          "Prime editing — gRNK + teskari transkriptaza yordamida kichik insersiya, deletsiya va aniq almashtirishlar",
          "Ex vivo gen terapiyasi (CAR-T) — hujayra tashqarida o‘zgartirilib tekshirilgach qaytariladi; in vivo (AAV) — jigar, ko‘z, mushak uchun",
          "1999-yilgi fojia (adenovirus immun javobi va retrovirus insersion mutagenezi) xavfsiz vektorlar va qat’iy klinik nazorat standartlarini yaratdi",
        ],
      },
      {
        heading: "10.3. Omiks texnologiyalari, bioinformatika va sintetik biologiya",
        content:
          "Genom («nima bo‘lishi mumkin») → Transkriptom («hozir nima ishlayapti») → Proteom («qaysi oqsil hosil bo‘ldi») → Metabolom («haqiqiy natija»). Faqat transkriptomikaga tayanish xato bo‘lishi mumkin, chunki mRNK miqdori har doim oqsil miqdoriga mos kelmaydi.",
        highlights: [
          "Bioinformatika vositalari: BLAST, GenBank, UniProt, PDB hamda oqsil strukturasini bashorat qiluvchi AI modellari",
          "Sintetik biologiya — standart genetik bloklar (biobricks), modullik va «loyihalash–qurish–sinash–o‘rganish» sikli",
          "Klassik yutuq — bezgakka qarshi artemizinin sintez yo‘lini o‘simlikdan achitqiga ko‘chirib arzon va barqaror olish",
        ],
      },
    ],
    comparisonTable: {
      title: "Omiks yo‘nalishlari va zamonaviy genom tahrirlash tizimlari",
      columns: ["Yo‘nalish / Tizim", "O‘rganish / Nishon mexanizmi", "Asosiy usul / Afzallik"],
      rows: [
        [
          "Genomika / Transkriptomika",
          "Barcha DNK genlari / barcha mRNK lar",
          "NGS sekvenlash / RNK-seq",
        ],
        [
          "Proteomika / Metabolomika",
          "Barcha oqsillar / barcha metabolitlar",
          "Mass-spektrometriya / Xromatografiya",
        ],
        ["CRISPR/Cas9", "20 nt gRNK + Cas9 nukleaza", "Sodda, arzon, multipleks tahrirlash"],
        [
          "Asos tahrirlash (Base editing)",
          "gRNK + modifikatsiyalangan Cas + deaminaza",
          "Ikki zanjirni kesmasdan bitta nukleotid tuzatish",
        ],
        [
          "Prime editing",
          "pegRNK + teskari transkriptaza",
          "Aniq kichik insersiya, deletsiya va almashtirish",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "NGS (Yangi avlod sekvenlash)",
        definition:
          "Millionlab DNK bo‘laklarini parallel o‘qib, butun genomni arzon va tez aniqlovchi ikkinchi avlod texnologiyasi.",
      },
      {
        term: "Asos tahrirlash (Base editing)",
        definition:
          "DNK qo‘sh zanjirini kesmasdan bitta nukleotid asosini kimyoviy o‘zgartiruvchi yuqori xavfsiz tahrirlash usuli.",
      },
      {
        term: "CAR-T terapiyasi",
        definition:
          "Bemor T-limfotsitlariga ex vivo usulda o‘simta antigenini tanuvchi ximer retseptor kiritib qon saratonini davolash.",
      },
      {
        term: "Omiks texnologiyalari",
        definition:
          "Genomika, transkriptomika, proteomika va metabolomika orqali hujayrani barcha molekulyar qatlamlarda yaxlit tahlil qilish.",
      },
      {
        term: "Sintetik biologiya",
        definition:
          "Standart genetik modullardan (biobricks) muhandislik tamoyillari asosida yangi biologik tizim va sintez yo‘llari qurish.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun CRISPR/Cas9 tizimi ZFN va TALEN ga nisbatan butun dunyoga tez tarqaldi?",
        answer:
          "ZFN va TALEN da har bir yangi nishon uchun oylab murakkab oqsil loyihalash kerak edi; CRISPR da esa faqat 20 nukleotidli gRNK ketma-ketligini almashtirish yetarli.",
      },
      {
        question:
          "Stress tahlilida mRNK ko‘p oshsa ham nima uchun oqsil miqdori o‘zgarmasligi mumkin?",
        answer:
          "Chunki translyatsiya tezligi, mRNK barqarorligi va oqsil parchalanishi alohida boshqariladi; shuning uchun transkriptomika natijalarini proteomika bilan tasdiqlash zarur.",
      },
      {
        question: "Ex vivo gen terapiyasi in vivo yondashuvdan nimasi bilan xavfsizroq?",
        answer:
          "Ex vivo da hujayralar bemordan olinib laboratoriyada o‘zgartiriladi, tekshiriladi va faqat to‘g‘ri o‘zgarganlari qaytariladi — nazorat darajasi ancha yuqori.",
      },
    ],
    keyTerms: [
      "genomika",
      "Senger usuli",
      "NGS",
      "Inson genomi loyihasi",
      "ZFN",
      "TALEN",
      "base editing",
      "prime editing",
      "CAR-T",
      "transkriptomika",
      "proteomika",
      "metabolomika",
      "bioinformatika",
      "sintetik biologiya",
      "artemizinin",
    ],
    references: "Xalimova N.T. Biotexnologiya · 10-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/10-mavzu_Zamonaviy_gen_muhandisligi_va_genomika_93f5740c.pdf",
    pdfTitle: "10-mavzu: Zamonaviy gen muhandisligi va genomika yutuqlari (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "10-mavzu: Zamonaviy gen muhandisligi va genomika yutuqlari (Ma’ruza matni)",
        url: "/assets/aistudio/10-mavzu_Zamonaviy_gen_muhandisligi_va_genomika_93f5740c.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
  {
    id: "biotex-11",
    order: 11,
    code: "BT11",
    topicLabel: "11-mavzu",
    module: "II bo‘lim: Mikrobiologik sintez, fermentlar va bioprotsesslar",
    title: "Mikroorganizmlar biotexnologiyasi va ularni kultivatsiya qilish",
    syllabusPoints: [
      "Sanoat mikroorganizmlariga qo‘yiladigan talablar va shtammlarni yaxshilash usullari (mutagenez, seleksiya, metabolik muhandislik)",
      "Oziqa muhitlari (sintetik, kompleks, sanoat — melassa, soya uni) va kataboliy repressiya hodisasi",
      "Mikroorganizmlarning o‘sish qonuniyatlari: 4 faza, solishtirma o‘sish tezligi (μ), Mono tenglamasi, birlamchi va ikkilamchi metabolitlar",
      "Kultivatsiya rejimlari (batch, fed-batch, uzluksiz/xemostat μ = D, perfuzion) va bioreaktor turlari",
      "Kislorod uzatish (OTR = k_La·(C* − C_L)), sterillik (121 °C bug‘, 0,2 mkm filtr) va masshtablash muammolari",
    ],
    studyNotes:
      "Mono tenglamasi: μ = μ_max·S/(K_s + S); xemostat barqaror holatida μ = D. Birlamchi metabolitlar log-fazada, ikkilamchi metabolitlar (antibiotiklar) statsionar fazada sintezlanadi. Aerob masshtablashda hal qiluvchi mezon — doimiy k_La.",
    overview:
      "Mikroorganizmlar sanoat biotexnologiyasining asosiy ishchi kuchi bo‘lib, yuqori unum olish uchun ularning o‘sish kinetikasi va bioreaktor muhandisligi aniq boshqarilishi kerak. Ma’ruzada sanoat shtammlari seleksiyasi, kataboliy repressiya, Mono tenglamasi, fed-batch va xemostat, kislorod uzatish koeffitsiyenti (k_La) hamda masshtablash qonuniyatlari yoritiladi.",
    sections: [
      {
        heading: "11.1. Sanoat shtammlari, oziqa muhitlari va kataboliy repressiya",
        content:
          "Sanoat shtammi yuqori mahsuldor, tez o‘suvchi, arzon muhitga (melassa, makkajo‘xori ekstrakti) moslashgan, patogen bo‘lmagan va genetik barqaror bo‘lishi lozim. Penitsillin unumi klassik mutagenez va seleksiya orqali minglab marta oshirilgan.",
        highlights: [
          "Kataboliy repressiya — muhitda ortiqcha glyukoza bo‘lganda boshqa genlar va ikkilamchi metabolit (antibiotik) sintezi o‘chib qoladi",
          "Yechim — glyukozani fed-batch rejimida asta-sekin qo‘shish yoki sekin o‘zlashtiriladigan laktoza/o‘simlik moyi ishlatish",
        ],
      },
      {
        heading: "11.2. O‘sish egri chizig‘i, Mono tenglamasi va kultivatsiya rejimlari",
        content:
          "Davriy kultivatsiya 4 fazadan iborat: lag-faza (moslashish), logarifmik faza (eksponensial o‘sish, birlamchi metabolitlar), statsionar faza (ikkilamchi metabolitlar) va o‘lish fazasi. Solishtirma o‘sish tezligi dX/dt = μ·X, ikkilanish vaqti t_d = ln2 / μ.",
        highlights: [
          "Mono tenglamasi: μ = μ_max · S / (K_s + S) — cheklovchi substrat orqali o‘sish tezligini boshqarishning nazariy asosi",
          "Xemostatda suyultirish tezligi D = F / V; barqaror holatda μ = D (agar D > μ_max bo‘lsa hujayralar yuvilib ketadi)",
          "Fed-batch sanoatda eng ommabop: kataboliy repressiyani to‘sadi, osmotik bosimni saqlaydi va yuqori hujayra zichligini beradi",
        ],
      },
      {
        heading: "11.3. Kislorod uzatish (k_La), sterillik va masshtablash",
        content:
          "Kislorod suvda juda kam eriydi (~8 mg/l) va zich kulturada bir necha soniyada tugaydi: OTR = k_La · (C* − C_L). Masshtablashda (0,1 l → 10 l → 1000 l → 10 000 l+) barcha parametrlarni bir vaqtda saqlash matematik imkonsiz, shuning uchun bitta hal qiluvchi mezon (ko‘pincha doimiy k_La) tanlanadi.",
        highlights: [
          "Sterillik: muhit va jihoz 121 °C bug‘ bilan, havo 0,2 mkm membrana filtr bilan sterillanadi, reaktorda ortiqcha bosim ushlanadi",
          "Masshtablash xatosi — katta reaktorda kichik reaktordagi bir xil aylanish tezligini mexanik takrorlash (bu kislorod tanqisligi va atsetat to‘planishiga olib keladi)",
        ],
      },
    ],
    comparisonTable: {
      title: "Birlamchi va ikkilamchi metabolitlar hamda o‘sish fazalari qiyosi",
      columns: ["Belgi", "Birlamchi metabolitlar", "Ikkilamchi metabolitlar"],
      rows: [
        ["Sintez fazasi", "Logarifmik (eksponensial) faza", "Statsionar faza"],
        [
          "O‘sish bilan bog‘liqligi",
          "Bevosita hujayra o‘sishi bilan bog‘liq",
          "O‘sish sekinlashganda/to‘xtaganda sintezlanadi",
        ],
        [
          "Hujayra uchun zarurligi",
          "Hayot va ko‘payish uchun shart",
          "O‘sish uchun shart emas (raqobat/himoya)",
        ],
        [
          "Sanoat misollari",
          "Aminokislotalar, vitaminlar, organik kislotalar, etanol",
          "Antibiotiklar, alkaloidlar, pigmentlar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Kataboliy repressiya",
        definition:
          "Muhitda oson o‘zlashtiriladigan glyukoza ko‘p bo‘lganda boshqa substrat va ikkilamchi metabolit genlarining o‘chirilishi.",
      },
      {
        term: "Mono tenglamasi",
        definition:
          "μ = μ_max · S / (K_s + S) — mikroorganizm solishtirma o‘sish tezligining cheklovchi substrat konsentratsiyasiga bog‘liqligi.",
      },
      {
        term: "Xemostat",
        definition:
          "Oziqa doimiy kiritilib, shuncha hajm chiqariladigan va μ = D tengligi bilan boshqariladigan uzluksiz kultivatsiya tizimi.",
      },
      {
        term: "k_La koeffitsiyenti",
        definition:
          "Bioreaktorda kislorodni gaz fazasidan suyuqlikka uzatish samaradorligini ko‘rsatuvchi hajmiy massa uzatish koeffitsiyenti.",
      },
      {
        term: "Masshtablash (scale-up)",
        definition:
          "Laboratoriya kolbasidan tajriba-sanoat va 10 000 l+ sanoat bioreaktorlariga jarayonni muhandislik jihatdan ko‘chirish.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Antibiotik ishlab chiqarishda muhitga glyukoza bir yo‘la ko‘p qo‘shilsa nima uchun mahsulot chiqmaydi?",
        answer:
          "Kataboliy repressiya yuz beradi: hujayralar jadal biomassa to‘playdi, ammo ikkilamchi metabolit (antibiotik) sintez genlari o‘chib qoladi.",
      },
      {
        question:
          "Xemostatda suyultirish tezligi D maksimal o‘sish tezligidan (μ_max) oshib ketsa nima sodir bo‘ladi?",
        answer:
          "Hujayralar bo‘linib ulgurmasdan reaktordan chiqib ketadi («yuvilib ketish» — washout hodisasi) va jarayon to‘xtaydi.",
      },
      {
        question: "Nima uchun aerob jarayonlarda kislorod eng asosiy cheklovchi omil hisoblanadi?",
        answer:
          "Kislorodning suvda eruvchanligi juda past (~8 mg/l) bo‘lib, zich kulturada u bir necha soniyada sarflanib qoladi; shuning uchun yuqori k_La talab etiladi.",
      },
    ],
    keyTerms: [
      "sanoat shtammi",
      "melassa",
      "kataboliy repressiya",
      "Mono tenglamasi",
      "solishtirma o‘sish tezligi",
      "xemostat",
      "fed-batch",
      "k_La",
      "masshtablash",
      "birlamchi metabolit",
      "ikkilamchi metabolit",
    ],
    references: "Xalimova N.T. Biotexnologiya · 11-mavzu ma’ruza matni (Navoiy DU, 2026)",
    pdfUrl: "/assets/aistudio/11-mavzu_Mikroorganizmlar_biotexnologiyasi_7c3fcfc3.pdf",
    pdfTitle: "11-mavzu: Mikroorganizmlar biotexnologiyasi va kultivatsiya (Ma’ruza matni)",
    pdfDocuments: [
      {
        title: "11-mavzu: Mikroorganizmlar biotexnologiyasi va kultivatsiya (Ma’ruza matni)",
        url: "/assets/aistudio/11-mavzu_Mikroorganizmlar_biotexnologiyasi_7c3fcfc3.pdf",
        kind: "Ma’ruza matni",
      },
    ],
  },
];
