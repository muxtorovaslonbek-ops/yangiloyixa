export interface BiokimyoTopicSection {
  heading: string;
  content: string;
  highlights?: string[];
}

export interface BiokimyoTopicTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface BiokimyoKeyConcept {
  term: string;
  definition: string;
}

export interface BiokimyoSelfCheck {
  question: string;
  answer: string;
}

export interface BiokimyoTopic {
  id: string;
  order: number;
  code: string;
  topicLabel: string;
  module:
    | "I bo‘lim: Biomolekulalar"
    | "II bo‘lim: Biokataliz va regulyatsiya"
    | "III bo‘lim: Moddalar almashinuvi";
  title: string;
  syllabusPoints: string[];
  studyNotes: string;
  overview: string;
  sections: BiokimyoTopicSection[];
  comparisonTable: BiokimyoTopicTable;
  keyConcepts: BiokimyoKeyConcept[];
  selfCheckQuestions: BiokimyoSelfCheck[];
  keyTerms: string[];
  references: string;
  pdfUrl: string;
  pdfTitle: string;
}

export const BIOKIMYO_TOPICS: BiokimyoTopic[] = [
  {
    id: "biokimyo-1",
    order: 1,
    code: "1",
    topicLabel: "1-mavzu",
    module: "I bo‘lim: Biomolekulalar",
    title: "Biokimyo fanining maqsadi, vazifalari, metodlari va rivojlanish tarixi",
    syllabusPoints: [
      "Biokimyo fanining predmeti, maqsadi va asosiy vazifalari hamda tirik organizmlarning elementar va molekulyar tarkibi.",
      "Biokimyoning asosiy bo‘limlari: statik, dinamik, funksional va molekulyar biokimyo; amaliy tarmoqlari.",
      "Biokimyoning rivojlanish tarixi (4 ta asosiy davr) va O‘zbekistonda biokimyo maktablarining shakllanishi.",
      "Zamonaviy biokimyoviy tadqiqot metodlari: gomogenizatsiya, sentrifugalash, xromatografiya, elektroforez, spektrofotometriya va YaMR.",
    ],
    studyNotes:
      "Biokimyo tirik materiyaning kimyoviy tarkibi, undagi moddalar va energiya almashinuvi hamda hayotiy jarayonlarning molekulyar mexanizmlarini o‘rganadi. Tirik hujayra massasining 70–80 foizini suv, quruq massasining asosiy qismini esa oqsillar, nuklein kislotalar, uglevodlar va lipidlar tashkil etadi.",
    overview:
      "Biokimyo (biologik kimyo) hayot hodisalarini molekulyar darajada tushuntirib beruvchi fundamental fan bo‘lib, kimyo va biologiya fanlari tutashgan chegarada rivojlangan. U tibbiyot, farmakologiya, biotexnologiya va qishloq xo‘jaligining ilmiy poydevorini yaratadi.",
    sections: [
      {
        heading: "1. Biokimyo fanining predmeti va tirik organizmning kimyoviy tarkibi",
        content:
          "Biokimyo tirik organizmlar tarkibiga kiruvchi kimyoviy birikmalarning tuzilishi, xossalari va o‘zaro aylanish qonuniyatlarini o‘rganadi. Tirik materiya tarkibida 70 dan ortiq kimyoviy element aniqlangan bo‘lib, ular miqdoriga ko‘ra makrobioelementlar (C, H, O, N — 96%, shuningdek Ca, P, K, S, Na, Cl, Mg) va mikrobioelementlarga (Fe, Zn, Cu, Mn, I, Co, Se) ajratiladi.",
        highlights: [
          "Suv (70–80%) — universal erituvchi, termoregulyator va gidroliz reaksiyalari muhiti",
          "Oqsillar (quruq massaning ~50%) — katalitik, strukturaviy, transport va himoya vazifalari",
          "Nuklein kislotalar (DNK, RNK) — irsiy axborotni saqlash va oqsil biosintezini boshqarish",
          "Uglevodlar va lipidlar — energiya manbai, zaxira va hujayra membranasi asosi",
        ],
      },
      {
        heading: "2. Biokimyoning asosiy bo‘limlari va amaliy yo‘nalishlari",
        content:
          "O‘rganish yondashuviga ko‘ra biokimyo uch asosiy pog‘onaga bo‘linadi: statik biokimyo (biomolekulalar kimyoviy tuzilishi), dinamik biokimyo (metabolizm, fermentativ reaksiyalar va bioenergetika) hamda funksional biokimyo (to‘qima va organlar faoliyatining molekulyar asoslari). Shuningdek, tibbiy biokimyo, o‘simliklar biokimyosi, evolutsion biokimyo va gen muhandisligi bilan bog‘liq molekulyar biologiya tarmoqlari rivojlangan.",
      },
      {
        heading: "3. Biokimyoning rivojlanish tarixi va O‘zbekistondagi tadqiqotlar",
        content:
          "Biokimyo tarixi to‘rt davrga bo‘linadi: yatrokimyo va organik sintez davri (Sheyele, Lavuazye, Vyoler — mochevina sintezi), klassik statik biokimyo davri (Misher — nuklein, Buxner — hujayrasiz bijg‘ish), dinamik biokimyo davri (Krebs sikli, ATF roli, Samner — fermentlar kristallizatsiyasi) hamda molekulyar biokimyo davri (1953-yil Uotson va Krikning DNK qo‘sh spirali modeli, PZR va CRISPR texnologiyalari). O‘zbekistonda Yo.X. To‘raqulov (qalqonsimon bez gormonlari biokimyosi), A.S. Sodiqov, B.O. Toshmuhamedov va Sh.I. Solihovlar maktablari jahon miqyosida e’tirof etilgan.",
      },
      {
        heading: "4. Biokimyoviy tadqiqot metodlari",
        content:
          "Biomolekulalarni o‘rganish uchun ularni hujayradan buzmasdan ajratib olish va fizik-kimyoviy xossalariga ko‘ra tahlil qilish usullari qo‘llaniladi. Tajribalar in vivo (tirik organizmda), in vitro (probirkada) va in silico (kompyuter modellashtirish) sharoitida olib boriladi.",
        highlights: [
          "Gomogenizatsiya va differensial sentrifugalash — organoidlarni (yadro, mitoxondriya, ribosoma) massa va zichlik bo‘yicha ajratish",
          "Xromatografiya (qog‘oz, yupqa qatlamli, ion-almashinuv, affin) — moddalar aralashmasini sorbent va erituvchi o‘rtasida taqsimlash",
          "Elektroforez — zaryadlangan oqsil va nuklein kislotalarni elektr maydonida molekulyar massasiga ko‘ra ajratish",
          "Spektrofotometriya (260 nm NK, 280 nm oqsillar), nishonlangan atomlar va YaMR/rentgenstrukturaviy tahlil",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy biokimyoviy tadqiqot metodlari va qo‘llanilishi",
      columns: ["Metod nomi", "Asosiy tamoyili", "Amaliy qo‘llanilishi"],
      rows: [
        [
          "Differensial sentrifugalash",
          "Markazdan qochma kuch ta’sirida cho‘kish tezligi farqi",
          "Yadro, mitoxondriya, lizosoma va mikrosoma fraksiyalarini ajratish",
        ],
        [
          "Xromatografiya",
          "Qo‘zg‘almas va qo‘zg‘aluvchan fazalar o‘rtasida taqsimlanish",
          "Aminokislotalar, fermentlar, gormonlar va vitaminlarni tozalash",
        ],
        [
          "Elektroforez",
          "Elektr maydonida zaryad va o‘lcham bo‘yicha harakatlanish",
          "Qon zardobi oqsillari, DNK fragmentlari va izofermentlarni tahlil qilish",
        ],
        [
          "Spektrofotometriya",
          "Ma’lum to‘lqin uzunligidagi yorug‘likni yutish (Buger–Lambert–Ber)",
          "Ferment faolligi va eritmadagi modda konsentratsiyasini aniqlash",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Statik va dinamik biokimyo",
        definition:
          "Statik biokimyo biomolekulalarning tarkibi va tuzilishini, dinamik biokimyo esa ularning organizmdagi fermentativ aylanishi va energiya almashinuvini o‘rganadi.",
      },
      {
        term: "Differensial sentrifugalash",
        definition:
          "Hujayra gomogenatini ortib boruvchi tezliklarda aylantirib, organoidlarni o‘lchami va zichligiga qarab ketma-ket cho‘ktirish usuli.",
      },
      {
        term: "Affin xromatografiya",
        definition:
          "Oqsillarni maxsus ligandga (masalan, substrat yoki antiteloga) tanlab bog‘lanish qobiliyatiga asoslangan eng yuqori aniqlikdagi tozalash usuli.",
      },
      {
        term: "In vivo va in vitro",
        definition:
          "In vivo — bevosita tirik organizm ichida kechadigan tajriba; in vitro — organizmdan tashqarida, laboratoriya idishida o‘tkaziladigan tadqiqot.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Statik, dinamik va funksional biokimyo o‘zaro qanday bog‘liq?",
        answer:
          "Statik biokimyo tirik hujayra molekulalarining kimyoviy tuzilishini aniqlaydi, dinamik biokimyo bu molekulalarning metabolik yo‘llardagi o‘zgarishini o‘rganadi, funksional biokimyo esa ushbu kimyoviy reaksiyalarni organ va to‘qimalarning fiziologik faoliyati bilan bog‘laydi.",
      },
      {
        question:
          "Oqsillar va nuklein kislotalarni spektrofotometrik aniqlashda qaysi to‘lqin uzunliklaridan foydalaniladi?",
        answer:
          "Nuklein kislotalar azot asoslari hisobiga 260 nm da, oqsillar esa aromatik aminokislotalar (triptofan, tirozin) hisobiga 280 nm to‘lqin uzunligida ultrabinafsha nurlarni maksimal yutadi.",
      },
      {
        question:
          "Hujayra organoidlarini buzmasdan fraksiyalarga ajratishda qaysi usul qo‘llaniladi?",
        answer:
          "Izotonik bufer muhitda ehtiyotkorlik bilan gomogenizatsiya qilingandan so‘ng differensial (yoki zichlik gradientli) sentrifugalash usuli qo‘llaniladi.",
      },
    ],
    keyTerms: [
      "Biokimyo",
      "Makroelementlar",
      "Gomogenizatsiya",
      "Xromatografiya",
      "Elektroforez",
      "YaMR",
    ],
    references: "Biokimyo · 1-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/01-mavzu_Biokimyo_fanining_maqsadi_vazifalari_metodla_41bd55d6.pdf",
    pdfTitle: "1-mavzu PDF: Biokimyo fanining maqsadi, vazifalari, metodlari va tarixi",
  },
  {
    id: "biokimyo-2",
    order: 2,
    code: "2",
    topicLabel: "2-mavzu",
    module: "I bo‘lim: Biomolekulalar",
    title: "Oqsillarning kimyoviy tarkibi va funksiyasi. Aminokislotalar va ularning xossalari",
    syllabusPoints: [
      "Oqsillarning elementar tarkibi (azot miqdori ~16%, Kyeldal koeffitsiyenti 6,25) va organizmdagi 11 asosiy biologik funksiyasi.",
      "Oqsillarning shakli (globulyar va fibrillar) hamda asosiy fizik-kimyoviy xossalari: gidratatsiya, zaryad, izoelektrik nuqta (pI), tuzlash va denaturatsiya.",
      "Oqsillarni ajratib olish, tozalash (dializ, gel-filtratsiya) hamda sifat va miqdoriy aniqlash reaksiyalari (biuret, ksantoprotein, ninhidrin, Foll).",
      "20 ta proteinogen α-aminokislotaning tuzilishi, radikal bo‘yicha klassifikatsiyasi, almashinadigan/almashinmaydigan turlari va amfoter xossalari.",
    ],
    studyNotes:
      "Oqsillar — α-aminokislotalardan peptid bog‘lari orqali tuzilgan yuqori molekulyar biopolimerlar bo‘lib, o‘rtacha 16% azot saqlaydi. Anfinsen tajribasi oqsilning uch o‘lchamli konformatsiyasi uning aminokislotalar ketma-ketligi bilan belgilanishini isbotlagan.",
    overview:
      "Oqsillar tirik organizmdagi deyarli barcha hayotiy jarayonlarning asosiy ijrochilaridir. Ularning turli-tumanligi 20 xil proteinogen aminokislotaning cheksiz kombinatsiyalari va yon radikallarining (R-guruh) qutbli, qutbsiz yoki ionogen xususiyatlari bilan belgilanadi.",
    sections: [
      {
        heading: "1. Oqsillarning biologik funksiyalari va elementar tarkibi",
        content:
          "Oqsillar tarkibida C (50–55%), O (21–24%), N (15–17%), H (6,5–7,3%) va S (0,3–2,5%) elementlari bo‘lib, azot miqdorining doimiyligi (16%) tufayli oqsil massasi N × 6,25 formulasi bilan hisoblanadi. Tirik tizimda oqsillar katalitik (fermentlar), strukturaviy (kollagen, elastin), transport (gemoglobin, albumin), himoya (antitelolar, interferon), qisqaruvchi (aktin, miozin), regulyator (insulin), retseptor, zaxira va bufer vazifalarini bajaradi.",
      },
      {
        heading: "2. Oqsillarning fizik-kimyoviy xossalari va denaturatsiya",
        content:
          "Oqsil eritmalari yuqori molekulyar kolloid eritmalar xossasiga ega. Molekula sirtidagi gidrat qobiq va bir xil ishorali zaryad oqsilning eritmada barqaror turishini ta’minlaydi. Muhit pH i izoelektrik nuqtaga (pI) tenglashganda umumiy zaryad nolga tushib, eruvchanlik pasayadi. Yuqori harorat, kislota/ishqor yoki og‘ir metall tuzlari ta’sirida peptid bog‘lari saqlangan holda tabiiy fazoviy struktura buziladi — bu denaturatsiya deyiladi.",
        highlights: [
          "Tuzlash (visalivaniye) — (NH₄)₂SO₄ bilan gidrat qobiqni tortib olib, oqsilni denaturatsiyalamasdan cho‘ktirish",
          "Dializ — yarim o‘tkazuvchan membrana orqali yirik oqsil molekulalarini kichik tuz ionlaridan tozalash",
          "Renaturatsiya — denaturatsiyalovchi omil olinganda oqsilning dastlabki biologik faol shakliga qaytishi",
        ],
      },
      {
        heading: "3. Oqsillar va aminokislotalarning sifat reaksiyalari",
        content:
          "Laboratoriya amaliyotida oqsillarni aniqlash uchun universal va spetsifik rangli reaksiyalar qo‘llaniladi: biuret reaksiyasi barcha peptid bog‘lariga xos (binafsha rang), ninhidrin reaksiyasi erkin α-aminogruppa bilan ko‘k-binafsha rang beradi, ksantoprotein reaksiyasi aromatik halqalarni (Phe, Tyr, Trp), Foll reaksiyasi esa oltingugurt saqlovchi aminokislotalarni (Cys, Met) aniqlaydi.",
      },
      {
        heading: "4. Proteinogen α-aminokislotalar klassifikatsiyasi",
        content:
          "Oqsillar tarkibiga kiruvchi 20 ta L-α-aminokislota yon radikalining kimyoviy tabiatiga ko‘ra 4 asosiy guruhga bo‘linadi: qutbsiz gidrofob (Gly, Ala, Val, Leu, Ile, Pro, Phe, Trp, Met), qutbli zaryadsiz (Ser, Thr, Cys, Tyr, Asn, Gln), manfiy zaryadli kislotali (Asp, Glu) va musbat zaryadli asosli (Lys, Arg, His). Neytral pH da aminokislotalar ichki tuz — svitterion shaklida mavjud bo‘ladi.",
        highlights: [
          "Almashinmaydigan aminokislotalar (8 ta kattalarda): Val, Leu, Ile, Thr, Met, Lys, Phe, Trp (bolalarda yana Arg va His)",
          "Optik faollik: glitsindan tashqari barcha aminokislotalarda xiral α-uglerod atomi mavjud",
        ],
      },
    ],
    comparisonTable: {
      title: "Aminokislotalar va oqsillarni aniqlashning asosiy rangli reaksiyalari",
      columns: ["Reaksiya nomi", "Aniqlanuvchi guruh", "Reaktiv va rangli natija"],
      rows: [
        [
          "Biuret reaksiyasi",
          "Peptid bog‘i (-CO-NH-)",
          "Ishqoriy muhitda CuSO₄ → ko‘k-binafsha rang",
        ],
        [
          "Ninhidrin reaksiyasi",
          "Erkin α-aminogruppa (-NH₂)",
          "Ninhidrin bilan qizdirish → ko‘k-binafsha (prolin — sariq)",
        ],
        [
          "Ksantoprotein reaksiyasi",
          "Aromatik halqa (Tyr, Trp, Phe)",
          "Konsentrlangan HNO₃ → sariq rang (NH₃ ta’sirida to‘q sariq)",
        ],
        [
          "Foll reaksiyasi",
          "Sisteindagi -SH guruhi",
          "Qo‘rg‘oshin atsetat + NaOH → qora PbS cho‘kmasi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Izoelektrik nuqta (pI)",
        definition:
          "Oqsil yoki aminokislota molekulasining umumiy elektr zaryadi nolga teng bo‘ladigan muhit pH qiymati.",
      },
      {
        term: "Svitterion (bipolyar ion)",
        definition:
          "Neytral pH da bir vaqtning o‘zida musbat zaryadlangan (-NH₃⁺) va manfiy zaryadlangan (-COO⁻) guruhlarga ega aminokislota shakli.",
      },
      {
        term: "Denaturatsiya",
        definition:
          "Birlamchi struktura saqlangan holda oqsilning ikkilamchi, uchlamchi va to‘rtlamchi fazoviy tuzilishi hamda biologik faolligining buzilishi.",
      },
      {
        term: "Kyeldal usuli",
        definition:
          "Organik moddadagi umumiy azotni aniqlab, uni 6,25 koeffitsiyentiga ko‘paytirish orqali oqsil miqdorini hisoblash metodi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Nima uchun oqsil molekulalari izoelektrik nuqtada (pI) eritmadan oson cho‘kadi?",
        answer:
          "Izoelektrik nuqtada oqsil molekulasidagi musbat va manfiy zaryadlar tenglashib, umumiy zaryad nolga tushadi. Elektrostatik itarilish yo‘qolishi natijasida molekulalar bir-biriga yaqinlashib agregatsiya hosil qiladi va cho‘kmaga tushadi.",
      },
      {
        question: "Tuzlash (visalivaniye) denaturatsiyadan qaysi jihati bilan farq qiladi?",
        answer:
          "Neytral tuzlar (masalan, ammoniy sulfat) bilan tuzlashda oqsilning faqat gidrat qobig‘i yo‘qoladi va uning nativ fazoviy strukturasi saqlanib qoladi; tuz olib tashlanganda oqsil yana erib, biologik faolligini davom ettiradi.",
      },
      {
        question: "Qaysi proteinogen aminokislotada optik izomeriya (xirallik) mavjud emas?",
        answer:
          "Glitsin (Gly) aminokislotasining α-uglerod atomiga ikkita vodorod atomi birikkanligi sababli unda assimetrik uglerod yo‘q va u optik jihatdan nofaoldir.",
      },
    ],
    keyTerms: [
      "Aminokislotalar",
      "Svitterion",
      "Izoelektrik nuqta",
      "Denaturatsiya",
      "Biuret",
      "Globulyar oqsillar",
    ],
    references: "Biokimyo · 2-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl:
      "/assets/aistudio/02-mavzu_Oqsillarning_kimyoviy_tarkibi_va_funksiyasi___1__c4891127.pdf",
    pdfTitle: "2-mavzu PDF: Oqsillarning kimyoviy tarkibi, funksiyasi va aminokislotalar",
  },
  {
    id: "biokimyo-3",
    order: 3,
    code: "3",
    topicLabel: "3-mavzu",
    module: "I bo‘lim: Biomolekulalar",
    title: "Oqsillarning strukturasi va klassifikatsiyasi",
    syllabusPoints: [
      "Peptid bog‘ining hosil bo‘lishi, yarim qo‘shbog‘ (rezonans) xossasi, N-uchi va C-uchi hamda biologik faol peptidlar.",
      "Oqsilning birlamchi strukturasi (Senger va Edman usullari) va genetik kasalliklar misoli (o‘roqsimon anemiya — HbS).",
      "Ikkilamchi struktura (α-spiral, β-burmali qavat, kollagen uchli spirali) va uchlamchi struktura (domenlar, shaperonlar).",
      "To‘rtlamchi struktura (gemoglobin kooperativligi) hamda oddiy va murakkab oqsillar klassifikatsiyasi.",
    ],
    studyNotes:
      "Oqsil funksiyasi uning to‘rt darajali strukturaviy tashkil topishiga bog‘liq. Birlamchi strukturadagi bitta aminokislotaning o‘zgarishi (masalan, gemoglobin β-zanjirining 6-o‘rnida Glu → Val almashinuvi) o‘roqsimon hujayrali anemiyaga olib keladi.",
    overview:
      "Polipeptid zanjirining noyob uch o‘lchamli shaklga o‘ralishi (folding) kovalent peptid va disulfid bog‘lar hamda ko‘plab nokovalent (vodorod, ion, gidrofob, Van-der-Vaals) ta’sirlar muvozanati orqali boshqariladi.",
    sections: [
      {
        heading: "1. Peptid bog‘i va birlamchi struktura",
        content:
          "Bir aminokislotaning α-karboksil guruhi va ikkinchisining α-aminoguruhi o‘rtasida suv ajralishi bilan peptid bog‘i (-CO-NH-) hosil bo‘ladi. Rezonans tufayli C-N bog‘i qisman qo‘shbog‘ xususiyatiga ega bo‘lib, barcha 6 atom bir tekislikda (trans-konfiguratsiyada) yotadi. Birlamchi struktura — polipeptid zanjiridagi aminokislotalar qoldiqlarining qat’iy ketma-ketligi bo‘lib, F. Senger (insulin, 1953) va avtomatik sekvenator usullari bilan aniqlangan.",
        highlights: [
          "Biologik faol peptidlar: glutation (antioksidant tripeptid), oksitotsin va vazopressin (nonapeptid gormonlar), endorfinlar",
          "Patologiya: o‘roqsimon hujayrali anemiya (HbS) birlamchi strukturadagi bitta nuqtali mutatsiya natijasidir",
        ],
      },
      {
        heading: "2. Ikkilamchi struktura: α-spiral va β-burmali qavat",
        content:
          "L. Poling va R. Kori tomonidan kashf etilgan ikkilamchi struktura polipeptid o‘qining qo‘shni peptid guruhlari orasidagi vodorod bog‘lari hisobiga tartibli taxlanishidir. α-spiralda har bir o‘ramga 3,6 aminokislota qoldig‘i to‘g‘ri keladi va vodorod bog‘i i va i+4 qoldiqlar orasida hosil bo‘ladi. β-burmali qavatda esa parallel yoki antiparallel zanjirlar o‘zaro vodorod bog‘lari bilan bog‘lanadi (ipak fibroini). Kollagen esa glitsin, prolin va oksiprolinga boy uchli spiral hosil qiladi.",
      },
      {
        heading: "3. Uchlamchi va to‘rtlamchi strukturalar. Shaperonlar",
        content:
          "Uchlamchi struktura — yon radikallar (R-guruhlar) o‘rtasidagi gidrofob ta’sir, ion bog‘lar, vodorod bog‘lari va sisteindan hosil bo‘ladigan disulfid (-S-S-) ko‘priklar yordamida shakllanadigan kompakt uch o‘lchamli globuladir. Hujayrada yangi sintezlangan oqsillarning to‘g‘ri o‘ralishiga shaperon oqsillari (Hsp) ko‘maklashadi; noto‘g‘ri folding amiloidoz, Altsgeymer va prion kasalliklariga sabab bo‘ladi. To‘rtlamchi struktura esa bir nechta subbirliklar (protomerlar) birlashgan oligomer oqsillarga (masalan, α₂β₂ gemoglobin) xos bo‘lib, allosterik boshqaruv va kooperativlikni ta’minlaydi.",
      },
      {
        heading: "4. Oqsillarning klassifikatsiyasi",
        content:
          "Kimyoviy tarkibiga ko‘ra oqsillar oddiy (faqat aminokislotalardan iborat — albuminlar, globulinlar, gistonlar, protaminlar, skleroproteinlar) va murakkab (prostetik guruh saqlovchi) oqsillarga bo‘linadi. Murakkab oqsillarga nukleoproteinlar (xromatin, ribosoma), xromoproteinlar (gemoglobin, sitoxromlar), glikoproteinlar (musin, immunoglobulinlar), lipoproteinlar (qon plazmasi XZLP, YuZLP), fosfoproteinlar (kazein) va metalloproteinlar (ferritin, seruloplazmin) kiradi.",
      },
    ],
    comparisonTable: {
      title: "Oqsil strukturasining 4 darajasi va barqarorlashtiruvchi bog‘lar",
      columns: ["Struktura darajasi", "Asosiy ta’rifi", "Barqarorlashtiruvchi bog‘lar", "Misol"],
      rows: [
        [
          "Birlamchi",
          "Aminokislotalarning chiziqli ketma-ketligi",
          "Kovalent peptid bog‘lari",
          "Insulin A va B zanjirlari",
        ],
        [
          "Ikkilamchi",
          "Polipeptid o‘qining lokal spiral yoki qavatlanishi",
          "Peptid guruhlari orasida vodorod bog‘lari",
          "Keratin α-spirali, fibroin β-qavati",
        ],
        [
          "Uchlamchi",
          "Yagona zanjirning uch o‘lchamli fazoviy shakli",
          "Gidrofob, ion, vodorod va disulfid (-S-S-) bog‘lar",
          "Mioglobin, lizosim, tripsin",
        ],
        [
          "To‘rtlamchi",
          "Bir nechta subbirliklarning yagona kompleksga birlashishi",
          "Subbirliklararo nokovalent (ba’zan S-S) bog‘lar",
          "Gemoglobin (α₂β₂), LDG tetrameri",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Peptid bog‘i",
        definition:
          "Aminokislotalarni zanjirga bog‘lovchi, qisman qo‘shbog‘ xususiyati tufayli tekis va qattiq tuzilishga ega kovalent amid bog‘i.",
      },
      {
        term: "Shaperonlar",
        definition:
          "Hujayrada yangi sintezlangan yoki stressga uchragan oqsillarning noto‘g‘ri agregatsiyasini oldini olib, to‘g‘ri uchlamchi strukturaga o‘ralishini ta’minlovchi maxsus oqsillar.",
      },
      {
        term: "Domen",
        definition:
          "Yirik oqsilning mustaqil ravishda o‘ralgan va alohida biologik vazifa (masalan, ATF bog‘lash) bajaradigan ixcham strukturaviy bo‘lagi.",
      },
      {
        term: "Prostetik guruh",
        definition:
          "Murakkab oqsil tarkibidagi oqsil bo‘lmagan (nooksi) qism — masalan, gemoglobindagi gem yoki glikoproteindagi oligosaxarid.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Gemoglobin va mioglobin oqsil strukturasining qaysi darajasi bilan farqlanadi?",
        answer:
          "Mioglobin bitta polipeptid zanjiridan iborat bo‘lib uchlamchi struktura darajasiga ega; gemoglobin esa 4 ta subbirlikdan (2α va 2β) tuzilgan to‘rtlamchi strukturaga ega va kislorodni kooperativ tarzda bog‘laydi.",
      },
      {
        question:
          "O‘roqsimon hujayrali anemiya qanday molekulyar o‘zgarish oqibatida kelib chiqadi?",
        answer:
          "Gemoglobin β-zanjirining 6-holatidagi qutbli glutamat (Glu) aminokislotasi o‘rniga qutbsiz valin (Val) joylashib qolishi natijasida molekulalar yopishib tolalar hosil qiladi va eritrotsit shakli o‘roqsimon bo‘lib qoladi.",
      },
      {
        question:
          "Ikkilamchi va uchlamchi strukturani ushlab turuvchi kuchlar orasidagi asosiy farq nima?",
        answer:
          "Ikkilamchi struktura asosan polipeptid asosidagi C=O va N-H guruhlari orasidagi vodorod bog‘lari bilan ushlab turiladi, uchlamchi struktura esa yon radikallar (R-guruhlar) o‘rtasidagi gidrofob, ion, vodorod va disulfid bog‘lari hisobiga shakllanadi.",
      },
    ],
    keyTerms: [
      "Peptid bog‘i",
      "Alfa-spiral",
      "Beta-qavat",
      "Shaperonlar",
      "Gemoglobin",
      "Murakkab oqsillar",
    ],
    references: "Biokimyo · 3-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/03-mavzu_Oqsillarning_strukturasi_va_klassifikatsiyas_45d3aad1.pdf",
    pdfTitle: "3-mavzu PDF: Oqsillarning strukturasi va klassifikatsiyasi",
  },
  {
    id: "biokimyo-4",
    order: 4,
    code: "4",
    topicLabel: "4-mavzu",
    module: "I bo‘lim: Biomolekulalar",
    title: "Nuklein kislotalar va ularning kimyoviy tarkibi",
    syllabusPoints: [
      "Nuklein kislotalarning kashf etilish tarixi: F. Misher (nuklein), Griffit, Everi, Chargaff, R. Franklin, Uotson va Krik.",
      "Nuklein kislotalarning kimyoviy tarkibi: purin (A, G) va pirimidin (C, T, U) azot asoslari, minor asoslar hamda purin almashinuvi (podagra).",
      "Uglevod komponentlari (D-riboza va 2-dezoksi-D-riboza) va fosfat kislota qoldig‘i; nukleozid va nukleotidlar.",
      "Erkin nukleotidlar (ATF, sAMF, sGMF, NAD⁺, FAD) va polinukleotid zanjirida 3′→5′-fosfodiefir bog‘lari, Chargaff qoidalari.",
    ],
    studyNotes:
      "Nuklein kislotalar (DNK va RNK) mononukleotidlardan 3′→5′-fosfodiefir bog‘lari orqali tuzilgan polinukleotid zanjirlardir. DNK tarkibida adenin timin bilan 2 ta (A=T), guanin sitozin bilan 3 ta (G≡C) vodorod bog‘i orqali komplementar juftlashadi.",
    overview:
      "Nuklein kislotalar barcha tirik organizmlarda irsiy axborotni avloddan-avlodga o‘tkazish va hujayrada oqsil sintezini boshqarish vazifasini bajaradi. Bundan tashqari, erkin nukleotidlar hujayraviy energetika va signal uzatishning bosh vositachilaridir.",
    sections: [
      {
        heading: "1. Nuklein kislotalarning kashfiyot tarixi",
        content:
          "1869-yilda shveysariyalik olim Fridrix Misher leykotsitlar yadrosidan fosforga boy kislotali moddani ajratib olib, uni «nuklein» deb atadi. Keyinchalik F. Griffit (1928) bakteriyalarda transformatsiyani kuzatdi, O. Everi (1944) esa irsiy belgini uzatuvchi omil aynan DNK ekanligini isbotladi. E. Chargaff (1949) asoslar ekvimolyarlik qonunini ochdi, R. Franklin rentgenogrammasi asosida J. Uotson va F. Krik (1953) DNK ning qo‘sh spiral modelini yaratdi.",
      },
      {
        heading: "2. Azot asoslari, pentozalar va fosfat kislota",
        content:
          "Nukleotid uch komponentdan tuzilgan: azot asosi + pentoza + fosfat kislota. Azot asoslari ikki halqali purinlarga (Adenin — A, Guanin — G) va bir halqali pirimidinlarga (Sitozin — C, Timin — T, Uratsil — U) bo‘linadi. RNK da D-riboza va uratsil, DNK da esa 2′-uglerodida kislorodi bo‘lmagan 2-dezoksi-D-riboza va timin uchraydi. Ayrim RNK larda metillangan minor asoslar ham mavjud.",
        highlights: [
          "Tibbiy bog‘liqlik: odamda purin asoslari oksidlanib siydik kislotasiga aylanadi; uning ortishi podagra kasalligini keltirib chiqaradi",
          "Nukleozid = Azot asosi + Pentoza (N-glikozid bog‘i); Nukleotid = Nukleozid + Fosfat kislota (efir bog‘i)",
        ],
      },
      {
        heading: "3. Biologik muhim erkin nukleotidlar",
        content:
          "Nukleotidlar nafaqat DNK/RNK monomeri, balki mustaqil biofaol molekulalardir: ATF (adenozintrifosfat) — ikkita makroergik fosfoangidrid bog‘iga ega universal energiya manbai; sAMF va sGMF — gormonlar ta’sirini hujayra ichiga uzatuvchi ikkilamchi vositachilar; NAD⁺, NADF⁺, FAD — oksidlanish-qaytarilish fermentlarining kofermentlari; Koenzim A (KoA) va UDF-glyukoza — guruh tashuvchi kofaktorlar.",
      },
      {
        heading: "4. Polinukleotid zanjiri va Chargaff qoidalari",
        content:
          "Nukleotidlar bir nukleotid pentozasining 3′-OH guruhi bilan keyingi nukleotidning 5′-fosfat guruhi orasida 3′→5′-fosfodiefir bog‘i orqali ulanadi. Har bir zanjirning 5′-fosfat uchi va 3′-gidroksil uchi mavjud. Chargaff qoidalariga ko‘ra ikki zanjirli DNK da A=T, G=C, shuningdek purinlar yig‘indisi pirimidinlar yig‘indisiga teng (A+G = T+C); (G+C)/(A+T) nisbati esa har bir tur uchun xos doimiy ko‘rsatkichdir.",
      },
    ],
    comparisonTable: {
      title: "DNK va RNK kimyoviy tarkibining qiyosiy jadvali",
      columns: ["Belgi", "DNK", "RNK"],
      rows: [
        ["Pentoza (qand)", "2-dezoksi-D-riboza", "D-riboza"],
        ["Purin asoslari", "Adenin (A), Guanin (G)", "Adenin (A), Guanin (G)"],
        ["Pirimidin asoslari", "Sitozin (C), Timin (T)", "Sitozin (C), Uratsil (U)"],
        [
          "Chargaff nisbati",
          "A = T va G = C (juft zanjir)",
          "Qat’iy tenglik shart emas (bir zanjir)",
        ],
        [
          "Ishqorga chidamlilik",
          "Chidamli (2′-OH guruhi yo‘q)",
          "Gidrolizga uchraydi (2′-OH ta’sirida)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "3′→5′-fosfodiefir bog‘i",
        definition:
          "Nuklein kislota zanjirining shakar-fosfat o‘qini hosil qiluvchi, qo‘shni nukleotidlarni bog‘laydigan mustahkam kovalent bog‘.",
      },
      {
        term: "Komplementarlik",
        definition:
          "Azot asoslarining fazoviy va vodorod bog‘lari jihatidan qat’iy mos juftlashishi: A=T (2 ta H-bog‘) va G≡C (3 ta H-bog‘).",
      },
      {
        term: "Giperxrom effekt",
        definition:
          "DNK qo‘sh spirali qizdirilib denaturatsiya qilinganda 260 nm dagi ultrabinafsha nur yutishining keskin ortishi.",
      },
      {
        term: "Erish harorati (Tm)",
        definition:
          "DNK molekulalarining 50 foizi bir zanjirli holatga o‘tadigan harorat; G≡C juftlari ko‘p bo‘lsa Tm yuqori bo‘ladi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Agar ikki zanjirli DNK tarkibida guanin (G) 22% bo‘lsa, timin (T) necha foizni tashkil etadi?",
        answer:
          "Chargaff qoidasiga ko‘ra G = C = 22%, demak G + C = 44%. Qolgan 56% A + T ga to‘g‘ri keladi va A = T bo‘lgani uchun timin miqdori 56% / 2 = 28% ni tashkil etadi.",
      },
      {
        question: "Nima uchun RNK ishqoriy muhitda tez gidrolizlanadi, DNK esa barqaror qoladi?",
        answer:
          "RNK ribozasining 2′-holatidagi erkin -OH guruhi ishqoriy muhitda fosfodiefir bog‘iga hujum qilib zanjirni uzadi; DNK dezoksiribozasida esa 2′-OH guruhi yo‘q.",
      },
      {
        question: "G≡C ga boy DNK bo‘lagining erish harorati (Tm) nima sababdan yuqori bo‘ladi?",
        answer:
          "Guanin va sitozin orasida 3 ta vodorod bog‘i mavjud (A=T da esa 2 ta), hamda G-C stacking o‘zaro ta’siri kuchliroq bo‘lgani uchun zanjirlarni ajratishga ko‘proq issiqlik energiyasi talab etiladi.",
      },
    ],
    keyTerms: ["Purin", "Pirimidin", "Nukleotid", "ATF", "Chargaff qoidasi", "Fosfodiefir bog‘i"],
    references: "Biokimyo · 4-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/04-mavzu_Nuklein_kislotalar_va_ularning_kimyoviy_tark_aee07703.pdf",
    pdfTitle: "4-mavzu PDF: Nuklein kislotalar va ularning kimyoviy tarkibi",
  },
  {
    id: "biokimyo-5",
    order: 5,
    code: "5",
    topicLabel: "5-mavzu",
    module: "I bo‘lim: Biomolekulalar",
    title: "DNK va RNK larning tuzilishi va ularning strukturalari",
    syllabusPoints: [
      "DNK ning hujayradagi lokalizatsiyasi (yadro, mitoxondriya, xloroplast, nukleoid, plazmid) va qo‘sh spiral strukturasi (B, A, Z-shakllari).",
      "DNK ning yadroda qadoqlanish darajalari: nukleosoma (giston oktameri H2A, H2B, H3, H4 + H1), solenoid, xromatin va epigenetika.",
      "RNK turlari va tuzilishi: mRNK (informatsion), tRNK («beda bargi» va L-shakl), rRNK (ribozim), snRNK, miRNK va siRNK.",
      "Genetik kod xususiyatlari, molekulyar biologiyaning markaziy dogmasi hamda zamonaviy metodlar (restriktazalar, PZR, CRISPR-Cas9).",
    ],
    studyNotes:
      "DNK ning fiziologik B-shaklida har bir spiral o‘ramida ~10,5 juft nukleotid bo‘lib, o‘ram qadami 3,4 nm ni tashkil etadi. Eukariot hujayrada 2 metrlik DNK giston oqsillari yordamida bir necha pog‘onali qadoqlanish orqali mikrometrli yadroga joylashadi.",
    overview:
      "Nuklein kislotalarning birlamchi, ikkilamchi va uchlamchi fazoviy strukturalari replikatsiya aniqligini, transkripsiya boshqaruvini va ribosomada oqsil biosintezining xatosiz kechishini ta’minlaydi.",
    sections: [
      {
        heading: "1. DNK qo‘sh spirali va uning A, B, Z konformatsiyalari",
        content:
          "Uotson–Krik modeliga binoan DNK ikki antiparallel (5′→3′ va 3′→5′) polinukleotid zanjirdan iborat o‘ngga burilgan spiraldir. Gidrofil shakar-fosfat o‘qi tashqarida, gidrofob azot asoslari esa ichkarida stacking ta’siri bilan joylashadi. Hujayra sharoitida eng keng tarqalgan B-DNK diametri 2,0 nm bo‘lib, katta va kichik egatlarga ega (oqsillar katta egatdan asoslar ketma-ketligini taniydi). Kam namlikda A-DNK, GC ga boy ayrim hududlarda esa chapga burilgan Z-DNK shakllanadi.",
      },
      {
        heading: "2. DNK qadoqlanishi: nukleosomadan xromosomagacha",
        content:
          "Eukariot yadrosida DNK manfiy zaryadli fosfat guruhlari hisobiga musbat zaryadli asosiy oqsillar — gistonlar (argen va lizinga boy) bilan bog‘lanib xromatin hosil qiladi. Birinchi pog‘ona — nukleosoma (147 juft nukleotid DNK sakkizta giston molekulasidan iborat oktamerga 1,65 marta o‘raladi, H1 gistoni esa bog‘lovchi DNK ni mahkamlaydi). Keyingi bosqichlarda 30 nm solenoid tolasi, ilgaklar va metafaza xromosomasi hosil bo‘ladi.",
        highlights: [
          "Euxromatin — bo‘sh qadoqlangan, transkripsiyaga ochiq faol hudud",
          "Geteroxromatin — zich kondensatsiyalangan, transkripsiyasi susaygan hudud",
        ],
      },
      {
        heading: "3. RNK turlari va ularning fazoviy strukturasi",
        content:
          "RNK odatda bir zanjirli bo‘lib, ichki komplementar qismlari «soch to‘g‘nog‘ichi» (hairpin) tuzilmalarini hosil qiladi:",
        highlights: [
          "mRNK (3–5%) — DNK dan olingan kodonlar ketma-ketligini ribosomaga yetkazadi (eukariotlarda 5′-kep va 3′-poli-A dumiga ega)",
          "tRNK (~15%) — 75–90 nukleotiddan iborat, ikkilamchi strukturasi «beda bargi», uchlamchi strukturasi L-shaklda; antikodon va 3′-CCA akseptor uchiga ega",
          "rRNK (~80%) — ribosoma o‘zagini tashkil etadi va peptid bog‘ini hosil qiluvchi ribozim (katalitik RNK) vazifasini bajaradi",
          "Kichik tartibga soluvchi RNK lar — snRNK (splaysing), miRNK va siRNK (RNK interferensiyasi orqali gen ekspressiyasini boshqaradi)",
        ],
      },
      {
        heading: "4. Genetik kod, Markaziy dogma va biotexnologik usullar",
        content:
          "Genetik kod 64 ta tripletdan (kodon) iborat: 61 tasi 20 ta aminokislotani kodlaydi (AUG — start va metionin), 3 tasi (UAA, UAG, UGA) — stop-kodonlardir. Kod tripletli, o‘qilishi uzluksiz, qoplanmaydigan, aynigan (sinonim kodonlar) va universaldir. Markaziy dogma axborot oqimini DNK → RNK → Oqsil tarzida ifodalaydi (retroviruslarda teskari transkripsiya mavjud). Amaliy biokimyoda restriktazalar, PZR (polimeraza zanjir reaksiyasi) va CRISPR-Cas9 tizimlari keng qo‘llaniladi.",
      },
    ],
    comparisonTable: {
      title: "DNK qo‘sh spiralining asosiy strukturaviy shakllari",
      columns: ["Parametr", "B-DNK (asosiy)", "A-DNK", "Z-DNK"],
      rows: [
        ["Burilish yo‘nalishi", "O‘ngga", "O‘ngga", "Chapga (zigzag)"],
        ["1 o‘ramdagi juftlar", "10,5 juft asos", "11 juft asos", "12 juft asos"],
        ["O‘ram qadami", "3,4 nm", "2,8 nm", "4,5 nm"],
        [
          "Biologik ahamiyati",
          "Hujayradagi normal fiziologik shakl",
          "DNK–RNK gibridlari va ikki zanjirli RNK",
          "Gen ekspressiyasini boshqaruvchi hududlar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Nukleosoma",
        definition:
          "H2A, H2B, H3 va H4 gistonlarining ikkitadan molekulasidan tuzilgan oktamer atrofiga ~147 juft asosli DNK o‘ralishidan hosil bo‘lgan xromatin birligi.",
      },
      {
        term: "Ribozim",
        definition:
          "Oqsil fermentlarisiz ham kimyoviy reaksiyalarni (masalan, rRNK dagi peptidiltransferaza reaksiyasini) katalizlay oladigan RNK molekulasi.",
      },
      {
        term: "PZR (Polimeraza zanjir reaksiyasi)",
        definition:
          "Termostabil Taq-polimeraza yordamida DNK ning kerakli fragmentini in vitro sharoitda millionlab marta ko‘paytirish usuli.",
      },
      {
        term: "Splaysing",
        definition:
          "Pre-mRNK dan kodlamaydigan intronlarni kesib tashlab, kodlovchi ekzonlarni birlashtirish (snRNK ishtirokida) jarayoni.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "tRNK molekulasining ikkilamchi va uchlamchi strukturasi qanday ko‘rinishga ega va uning asosiy funksional qismlari qaysilar?",
        answer:
          "tRNK ning ikkilamchi strukturasi «beda bargi» (4 ta qo‘lcha va ildiz), uchlamchi strukturasi esa ixcham L-shaklga ega. Asosiy qismlari — mRNK kodonini taniydigan antikodon halqasi hamda aminokislota birikadigan 3′-CCA akseptor uchidir.",
      },
      {
        question:
          "Giston oqsillarining kimyoviy xususiyati DNK bilan bog‘lanishda qanday rol o‘ynaydi?",
        answer:
          "Gistonlar tarkibida lizin va arginin kabi musbat zaryadlangan aminokislotalar juda ko‘p; bu ularga manfiy zaryadli DNK fosfat guruhlari bilan mustahkam ion bog‘lari hosil qilish imkonini beradi.",
      },
      {
        question: "Genetik kodning «aynish» (degeneratsiya) xossasi nimani anglatadi?",
        answer:
          "61 ta ma’noli kodon atigi 20 ta aminokislotani kodlagani uchun bitta aminokislota (Met va Trp dan tashqari) 2 tadan 6 tagacha sinonim kodonlar bilan ifodalanishi mumkin; bu nuqtali mutatsiyalar zararini kamaytiradi.",
      },
    ],
    keyTerms: ["B-DNK", "Nukleosoma", "Gistonlar", "tRNK", "Genetik kod", "PZR"],
    references: "Biokimyo · 5-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/05-mavzu_DNK_va_RNK_larning_tuzilishi_va_strukturalar_a50dcf0c.pdf",
    pdfTitle: "5-mavzu PDF: DNK va RNK larning tuzilishi va ularning strukturalari",
  },
  {
    id: "biokimyo-6",
    order: 6,
    code: "6",
    topicLabel: "6-mavzu",
    module: "I bo‘lim: Biomolekulalar",
    title: "Uglevodlar va ularning tirik organizmlardagi ahamiyati",
    syllabusPoints: [
      "Uglevodlarning tasnifi (monosaxaridlar, oligosaxaridlar, polisaxaridlar) va tirik organizmdagi 7 ta asosiy biologik funksiyasi.",
      "Monosaxaridlar: aldoza va ketozalar, D/L-izomeriya, siklik piranoza/furanoza shakllari, α/β-anomerlar, mutarotatsiya va Trommer reaksiyasi.",
      "Disaxaridlar (saxaroza, laktoza, maltoza, sellobioza): qaytaruvchi va qaytarmaydigan disaxaridlar hamda laktaza yetishmovchiligi.",
      "Gomo- va geteropolisaxaridlar: kraxmal (amiloza, amilopektin), glikogen, sellyuloza, xitin, gialuron kislota, geparin; glikemik indeks va HbA1c.",
    ],
    studyNotes:
      "Uglevodlar hujayraning birlamchi va tezkor energiya manbaidir (1 g oksidlanganda 17,6 kJ energiya beradi). Kraxmal va glikogenda glyukoza α(1→4) va α(1→6) bog‘lari bilan, sellyulozada esa odam fermentlari parchalay olmaydigan β(1→4) bog‘lari bilan bog‘langan.",
    overview:
      "Uglevodlar Yer yuzidagi eng ko‘p tarqalgan organik birikmalar bo‘lib, fotosintez jarayonida sintezlanadi. Ular nafaqat energiya ta’minoti, balki hujayra devori mustahkamligi, bo‘g‘im suyuqligi, nuklein kislota tarkibi va hujayralararo tanishda hal qiluvchi rol o‘ynaydi.",
    sections: [
      {
        heading: "1. Uglevodlarning biologik vazifalari va tasnifi",
        content:
          "Uglevodlarning umumiy formulasi ko‘pincha Cn(H₂O)m ko‘rinishida bo‘ladi. Ular gidrolizlanish qobiliyatiga ko‘ra monosaxaridlarga (oddiy qandlar), oligosaxaridlarga (2–10 monomer, asosan disaxaridlar) va polisaxaridlarga (10 dan minglab monomergacha) bo‘linadi. Asosiy vazifalari: energetik (miya va eritrotsitlarning bosh yoqilg‘isi), zaxira (kraxmal, glikogen), strukturaviy (sellyuloza, xitin), himoya (geparin — qon ivishini to‘xtatuvchi), plastik (riboza/dezoksiriboza), retseptor (glikokaliks) va osmotik boshqaruv.",
      },
      {
        heading: "2. Monosaxaridlar tuzilishi va xossalari",
        content:
          "Monosaxaridlar karbonil guruhi tabiatiga ko‘ra aldozalar (glyukoza, galaktoza, riboza) va ketozalarga (fruktoza, ribuloza) bo‘linadi. Suvli eritmada pentoza va geksozalar yarimatsetal bog‘i hosil qilib 5-a’zoli furanoza yoki 6-a’zoli piranoza halqasiga yopiladi; bunda C1 atomida α- va β-anomerlar vujudga kelib, mutarotatsiya hodisasi kuzatiladi. Erkin yarimatsetal gidroksili bo‘lgan barcha monosaxaridlar mis (II) gidroksidni qaytaradi (Trommer va Feling reaksiyalari).",
        highlights: [
          "D-Glyukoza (uzum qandi) — qonda me’yorda 3,3–5,5 mmol/l (och qoringa); miya va eritrotsitlar uchun zarur",
          "D-Fruktoza — meva qandi, eng shirin tabiiy monosaxarid, insulinga bog‘liq bo‘lmagan holda hujayraga kiradi",
        ],
      },
      {
        heading: "3. Disaxaridlar va laktaza intoleranti",
        content:
          "Ikkita monosaxarid O-glikozid bog‘i bilan birikishidan disaxaridlar hosil bo‘ladi. Maltoza (2 ta glyukoza, α-1,4), sellobioza (2 ta glyukoza, β-1,4) va laktoza (galaktoza + glyukoza, β-1,4) ikkinchi monosaxaridining yarimatsetal guruhi erkin bo‘lgani uchun qaytaruvchi disaxaridlar hisoblanadi. Saxaroza (glyukoza + fruktoza, α1→β2) da esa ikkala anomer uglerod bog‘langanligi sababli u qaytaruvchi xossaga ega emas. Ichakda laktaza fermenti yetishmasa, sut qandi (laktoza) hazm bo‘lmay qoladi.",
      },
      {
        heading: "4. Gomo- va geteropolisaxaridlar. Klinik ahamiyati",
        content:
          "Gomopolisaxaridlar bir xil monomerlardan tuziladi: kraxmal (20% chiziqli amiloza + 80% shoxlangan amilopektin, yod bilan ko‘k rang), glikogen («hayvon kraxmali», jigar va mushakda α-1,4 va har 8–12 qoldiqda α-1,6 bog‘li juda shoxlangan zaxira), sellyuloza (β-1,4 bog‘li o‘simlik klechatkasi, ichak peristaltikasini ta’minlaydi) va xitin (N-atsetilglyukozamin polimeri). Geteropolisaxaridlar (glikozaminoglikanlar): gialuron kislota (bo‘g‘im va ko‘zda amortizator), xondroitin sulfat (tog‘ay) va geparin (tabiiy antikoagulyant). Qandli diabet nazoratida 3 oylik o‘rtacha qand darajasini aks ettiruvchi glikirlangan gemoglobin (HbA1c) baholanadi.",
      },
    ],
    comparisonTable: {
      title: "Asosiy polisaxaridlarning tuzilishi va biologik roli",
      columns: ["Polisaxarid", "Monomeri va bog‘ turi", "Biologik vazifasi", "Odam hazm tizimida"],
      rows: [
        [
          "Kraxmal (amiloza/amilopektin)",
          "α-D-glyukoza; α(1→4) va α(1→6)",
          "O‘simliklarning asosiy zaxira uglevodi",
          "Amilaza bilan to‘liq hazm bo‘ladi",
        ],
        [
          "Glikogen",
          "α-D-glyukoza; kuchli shoxlangan α(1→4), α(1→6)",
          "Jigar va mushaklardagi tezkor energiya zaxirasi",
          "Glikogenoliz orqali parchalanadi",
        ],
        [
          "Sellyuloza",
          "β-D-glyukoza; chiziqli β(1→4)",
          "O‘simlik hujayra devori tayanch tolasi",
          "Hazm bo‘lmaydi (oziq tolasi vazifasi)",
        ],
        [
          "Gialuron kislota va Geparin",
          "Uron kislota + aminosaxarid",
          "Biriktiruvchi to‘qima matritsi va antikoagulyant",
          "To‘qimalarda maxsus vazifa bajaradi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Anomerlar (α va β)",
        definition:
          "Siklik monosaxaridning yangi hosil bo‘lgan xiral C1 markazidagi -OH guruhining fazoviy joylashuvi bilan farqlanadigan izomerlari.",
      },
      {
        term: "Qaytaruvchi qandlar",
        definition:
          "Erkin yarimatsetal (aldegid) guruhiga ega bo‘lganligi sababli Cu²⁺ kabi oksidlovchilarni qaytara oladigan mono- va disaxaridlar (saxaroza bundan mustasno).",
      },
      {
        term: "Glikozaminoglikanlar",
        definition:
          "Tarkibida aminosaxarid va uron kislotalar bo‘lgan, suvni ushlab turuvchi hamda qon ivishini boshqaruvchi geteropolisaxaridlar.",
      },
      {
        term: "HbA1c (Glikirlangan gemoglobin)",
        definition:
          "Eritrotsitlarda glyukozaning gemoglobin bilan nofermentativ birikish darajasi; oxirgi 2–3 oydagi o‘rtacha qon qandini ko‘rsatadi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Nima uchun saxaroza Trommer reaksiyasida qizil Cu₂O cho‘kmasini hosil qilmaydi?",
        answer:
          "Saxarozada α-D-glyukozaning C1 va β-D-fruktozaning C2 anomer uglerodlari o‘zaro glikozid bog‘i hosil qilishga sarflangan, shuning uchun halqa ochilib qaytaruvchi aldegid guruhi yuzaga kelmaydi.",
      },
      {
        question:
          "Kraxmal va sellyuloza ikkalasi ham faqat glyukozadan tuzilgan bo‘lsa-da, nima uchun odam kraxmalni hazm qiladi, sellyulozani esa hazm qilolmaydi?",
        answer:
          "So‘lak va me’da osti bezi α-amilazasi faqat α(1→4)-glikozid bog‘larini parchalashga moslashgan; sellyulozadagi β(1→4) bog‘larini uzadigan sellyulaza fermenti odam organizmida sintezlanmaydi.",
      },
      {
        question: "Glikogen nima sababdan kraxmalga qaraganda tezroq glyukozaga parchalanadi?",
        answer:
          "Glikogen molekulasi amilopektinga nisbatan ancha kuchli shoxlangan (har 8–12 qoldiqda shox), bu esa glikogenfosforilaza fermenti bir vaqtning o‘zida hujum qiladigan oxirgi uchlari sonini keskin oshiradi.",
      },
    ],
    keyTerms: ["Monosaxaridlar", "Saxaroza", "Kraxmal", "Glikogen", "Sellyuloza", "Geparin"],
    references: "Biokimyo · 6-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/06-mavzu_Uglevodlar_va_ularning_tirik_organizmlardagi_be8e581b.pdf",
    pdfTitle: "6-mavzu PDF: Uglevodlar va ularning tirik organizmlardagi ahamiyati",
  },
  {
    id: "biokimyo-7",
    order: 7,
    code: "7",
    topicLabel: "7-mavzu",
    module: "I bo‘lim: Biomolekulalar",
    title: "Lipidlar va ularning xususiyatlari",
    syllabusPoints: [
      "Lipidlarning umumiy ta’rifi, gidrofob tabiati, energiya sig‘imi (38,9 kJ/g), endogen suv manbai va asosiy biologik funksiyalari.",
      "Lipidlarning tasnifi: oddiy lipidlar (triatsilglitserinlar, mumlar), murakkab lipidlar (fosfolipidlar, glikolipidlar) va lipid hosilalari (steroidlar, karotinoidlar).",
      "To‘yingan va to‘yinmagan yog‘ kislotalar (ω-3, ω-6 — F vitamini), sis- va trans-izomeriya hamda yog‘larning fizik-kimyoviy xossalari.",
      "Biologik membranalarning suyuq-mozaik modeli, xolesterin, XZLP va YuZLP lipoproteinlar, o‘t kislotalari va sifat ko‘rsatkichlari (yod, kislota, sovunlanish sonlari).",
    ],
    studyNotes:
      "Lipidlar suvda erimaydigan, qutbsiz erituvchilarda (efir, xloroform, aseton) eriydigan heterogen biomolekulalardir. 1 g yog‘ to‘liq oksidlanganda 38,9 kJ energiya hamda ~1,07 g metabolik suv ajralib chiqadi.",
    overview:
      "Lipidlar hujayra membranalarining strukturaviy qobig‘ini hosil qilish bilan birga organizmning eng sig‘imli energiya ombori, issiqlik izolatori, yog‘da eriydigan vitaminlar tashuvchisi va steroid gormonlar o‘tmishdoshi hisoblanadi.",
    sections: [
      {
        heading: "1. Lipidlarning biologik roli va tasnifi",
        content:
          "Lipidlar tarkibida kislorod ulushi kam, uglerod va vodorod ko‘p bo‘lgani uchun yuqori energiya beradi. Sovunlanish qobiliyatiga ko‘ra ular sovunlanadigan (tarkibida murakkab efir bog‘li yog‘ kislotasi bor — triatsilglitserinlar, mumlar, fosfolipidlar, glikolipidlar) va sovunlanmaydigan (steroidlar, terpenlar, yog‘da eriydigan vitaminlar) guruhlarga bo‘linadi.",
      },
      {
        heading: "2. Yog‘ kislotalar, triatsilglitserinlar va mumlar",
        content:
          "Tabiiy yog‘ kislotalari odatda juft sonli uglerod atomiga (16–20 ta) va sis-qo‘shbog‘larga ega. To‘yingan kislotalar (palmitin C₁₆:₀, stearin C₁₈:₀) hayvon yog‘larida qattiq konsistensiyani bersa, to‘yinmagan kislotalar (olein C₁₈:₁, linol C₁₈:₂ ω-6, linolen C₁₈:₃ ω-3, araxidon C₂₀:₄) o‘simlik moylarini suyuq holda saqlaydi. Linol va linolen kislotalar odamda sintezlanmaydi (almashtirib bo‘lmaydigan, F vitamini). Sanoatda moylarni gidrogenlashda hosil bo‘ladigan trans-yog‘lar ateroskleroz xavfini oshiradi.",
        highlights: [
          "Triatsilglitserinlar (neytral yog‘lar) — glitserin va 3 ta yog‘ kislotaning murakkab efirlari; zaxira yog‘ to‘qimasida to‘planadi",
          "Mumlar — yuqori yog‘ kislota + yuqori bir atomli spirt efirlari; o‘simlik bargi kutikulasi va asalari mumida himoya qiladi",
        ],
      },
      {
        heading: "3. Murakkab lipidlar va biologik membrana strukturasi",
        content:
          "Fosfolipidlar (glitserofosfolipidlar: fosfatidilxolin/letsitin, fosfatidiletanolamin/kefalin va sfingomiyelin) hamda glikolipidlar amfifil xossaga ega: qutbli gidrofil «boshcha» va ikkita gidrofob «dumcha»dan tuzilgan. Suvli muhitda ular o‘z-o‘zidan lipid qo‘sh qavatini (bilayer) hosil qiladi. S. Singer va G. Nikolsonning suyuq-mozaik modeliga ko‘ra, oqsillar shu dinamik fosfolipid dengizida suzib yuradi; xolesterin esa membrananing oquvchanligi va mustahkamligini tartibga soladi.",
      },
      {
        heading: "4. Steroidlar, lipoproteinlar va lipid xossalari",
        content:
          "Steroidlar asosida siklopentanpergidrofenantren halqasi yotadi. Xolesterindan o‘t kislotalari (yog‘larni emulsiyalash), D vitamini va jinsiy hamda buyrak usti bezi korteks gormonlari sintezlanadi. Qonda lipidlar lipoproteinlar tarkibida tashiladi: XZLP («yomon» xolesterinni to‘qimalarga tashiydi) va YuZLP («yaxshi» xolesterinni jigarga qaytarib olib keladi). Yog‘ sifati kislota soni (erkin yog‘ kislota miqdori), sovunlanish soni (zanjir uzunligi) va yod soni (to‘yinmaganlik darajasi) bilan baholanadi; LPO (lipidlar perekisli oksidlanishi) dan hujayrani E vitamini va glutation himoya qiladi.",
      },
    ],
    comparisonTable: {
      title: "Asosiy lipid sinflarining kimyoviy tarkibi va funksiyalari",
      columns: ["Lipid sinfi", "Tarkibiy komponentlari", "Qutbliligi", "Asosiy biologik vazifasi"],
      rows: [
        [
          "Triatsilglitserinlar (TAG)",
          "Glitserin + 3 ta yog‘ kislota",
          "To‘liq gidrofob",
          "Asosiy energiya zaxirasi va termoisolatsiya",
        ],
        [
          "Fosfolipidlar",
          "Glitserin/Sfingozin + 2 yog‘ kislota + fosfat + spirt",
          "Amfifil (boshcha + dumcha)",
          "Hujayra membranasi lipid qo‘sh qavati",
        ],
        [
          "Glikolipidlar",
          "Sfingozin + yog‘ kislota + oligosaxarid",
          "Amfifil",
          "Nerv to‘qimasi va hujayralararo tanish",
        ],
        [
          "Steroidlar (Xolesterin)",
          "4 halqali steran skeleti",
          "Kuchsiz amfifil",
          "Membrana barqarorligi, gormon va o‘t kislota sintezi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Amfifillik",
        definition:
          "Bitta molekulaning o‘zida ham suvga intiluvchi gidrofil (qutbli), ham suvdan qochuvchi gidrofob (qutbsiz) qismlarning mavjudligi.",
      },
      {
        term: "Yod soni",
        definition:
          "100 g yog‘ga birika oladigan yod grammlari soni; yog‘ tarkibidagi to‘yinmagan qo‘shbog‘lar miqdorini ko‘rsatadi.",
      },
      {
        term: "Sovunlanish reaksiyasi",
        definition:
          "Yog‘larning ishqorlar (NaOH, KOH) bilan qizdirilganda glitserin va yog‘ kislota tuzlari (sovun) ga gidrolizlanishi.",
      },
      {
        term: "XZLP va YuZLP",
        definition:
          "Past zichlikdagi lipoproteinlar (XZLP) xolesterinni tomir devorida to‘plashi mumkin, yuqori zichlikdagilar (YuZLP) esa ortiqcha xolesterinni jigarga olib ketadi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun fosfolipidlar suvda tomchi bo‘lib yig‘ilmasdan, ikki qavatli membrana yoki liposoma hosil qiladi?",
        answer:
          "Fosfolipidlar amfifil tuzilishga ega: qutbli fosfat boshchalari tashqariga — suv molekulalariga qaraydi, ikkita gidrofob yog‘ kislota dumchasi esa suvdan yashirinib ichkari tomonga yo‘naladi va qo‘sh qavat hosil qiladi.",
      },
      {
        question:
          "Qish uyqusiga ketadigan hayvonlar va cho‘l tuyalari organizmida yog‘ zaxirasi qanday qo‘shaloq vazifa bajaradi?",
        answer:
          "Yog‘lar nafaqat yuqori kaloriyali energiya manbai (38,9 kJ/g), balki to‘liq oksidlanganda ko‘p miqdorda endogen (metabolik) suv ajratib, suvsiz davrda organizmni suv bilan ta’minlaydi.",
      },
      {
        question: "O‘simlik moylari va hayvon yog‘laridan qaysi birining yod soni yuqori bo‘ladi?",
        answer:
          "O‘simlik moylari tarkibida to‘yinmagan yog‘ kislotalari (olein, linol, linolen) ko‘p bo‘lganligi uchun ular ko‘proq yod biriktiradi va yod soni yuqori bo‘ladi.",
      },
    ],
    keyTerms: [
      "Triatsilglitserin",
      "Fosfolipidlar",
      "Xolesterin",
      "Suyuq-mozaik model",
      "Omega-3",
      "Yod soni",
    ],
    references: "Biokimyo · 7-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/07-mavzu_Lipidlar_va_ularning_xususiyatlari_dc732223.pdf",
    pdfTitle: "7-mavzu PDF: Lipidlar va ularning xususiyatlari",
  },
  {
    id: "biokimyo-8",
    order: 8,
    code: "8",
    topicLabel: "8-mavzu",
    module: "II bo‘lim: Biokataliz va regulyatsiya",
    title: "Fermentlar, ularning tuzilishi va ta’sir qilish mexanizmlari",
    syllabusPoints: [
      "Enzimologiya tarixi (Buxner, Samner — ureaza, Mixaelis–Menten) va fermentlarning anorganik katalizatorlardan 6 ta asosiy farqi.",
      "Oddiy va murakkab fermentlar (apoferment + kofaktor/koferment/prostetik guruh = xoloferment), faol markaz va allosterik markaz.",
      "Profermentlar (zimogenlar — pepsinogen, tripsinogen) va izofermentlar (LDG₁–LDG₅ ning diagnostik ahamiyati).",
      "Fermentativ kataliz mexanizmi (Ea ni pasaytirish, ES/EP bosqichlari), Fisher «kalit–qulf» va Koshland «induksiyalangan moslashuv» nazariyalari, xoslik va EC 6 sinfi.",
    ],
    studyNotes:
      "Fermentlar (enzimlar) — tirik hujayrada sintezlanadigan va kimyoviy reaksiyalarni 10⁶–10¹² marta tezlashtiradigan yuqori xoslikka ega biologik katalizatorlardir. Ular reaksiyaning muvozanat konstantasini o‘zgartirmaydi, faqat faollanish energiyasini (Ea) pasaytiradi.",
    overview:
      "Metabolizmning minglab reaksiyalari organizmning 37 °C harorati va neytral pH muhitida hayot uchun yetarli tezlikda kechishi faqat fermentlarning mukammal tuzilishi hamda substratga tanlab moslashishi tufayli mumkin bo‘ladi.",
    sections: [
      {
        heading: "1. Biokatalizatorlarning umumiy xususiyatlari",
        content:
          "Anorganik katalizatorlardan farqli ravishda fermentlar oqsil tabiatiga ega (ayrim ribozimlar bundan mustasno), yumshoq fiziologik sharoitda ishlaydi, nihoyatda yuqori katalitik samaradorlik va mutlaq/guruhiy xoslik namoyon etadi, termolabil bo‘lib, hujayra ehtiyojiga qarab allosterik va kovalent yo‘llar bilan nozik boshqariladi.",
      },
      {
        heading: "2. Fermentlarning tuzilishi: xoloferment, faol va allosterik markazlar",
        content:
          "Oddiy fermentlar faqat aminokislotalardan (pepsin, amilaza, ribonukleaza), murakkab fermentlar esa oqsil qismi (apoferment) va nooqsil qismi (kofaktor: metall ionlari yoki organik koferment) birikmasidan — faol xolofermentdan iborat. Ferment molekulasida substratni bog‘lovchi (bog‘lash uchastkasi) va kimyoviy o‘zgarishni amalga oshiruvchi (katalitik uchastka) fazoviy hudud — faol markaz mavjud. Ayrim fermentlarda tartibga soluvchi (effektor) birikadigan alohida allosterik markaz ham bor.",
        highlights: [
          "Profermentlar (zimogenlar) — proteaza fermentlari o‘z to‘qimalarini hazm qilib yubormasligi uchun nofaol holda sintezlanib, kerakli joyda (pepsinogen → pepsin) faollashadi",
          "Izofermentlar — bitta reaksiyani katalizlaydigan, ammo turli to‘qimalarda turlicha subbirlik tarkibiga ega shakllar (masalan, yurak miokard infarktida LDG₁, jigar kasalliklarida LDG₅ oshadi)",
        ],
      },
      {
        heading: "3. Fermentlarning ta’sir mexanizmi va nazariyalari",
        content:
          "Ferment substrat bilan E + S ⇌ ES → EP → E + P bosqichlari orqali oraliq kompleks hosil qiladi va reaksiya uchun zarur bo‘lgan faollanish energiyasini (Ea) keskin kamaytiradi. E. Fisher (1894) faol markaz va substrat o‘rtasidagi moslikni qattiq «kalit va qulf» ga o‘xshatgan. D. Koshland (1958) esa «induksiyalangan moslashuv» («qo‘l va qo‘lqop») nazariyasini taklif etib, substrat bog‘langanda ferment faol markazi konformatsiyasini dinamik tarzda o‘zgartirishini ko‘rsatdi.",
      },
      {
        heading: "4. Fermentlar xosligi va xalqaro klassifikatsiyasi (EC)",
        content:
          "Fermentlar mutlaq xoslik (ureaza faqat mochevinani parchalaydi), guruhiy xoslik (tripsin asosiy aminokislotalar hosil qilgan peptid bog‘larni uzadi) va stereokimyoviy xoslik (faqat L- yoki D-izomerga ta’sir etadi) ko‘rsatadi. Xalqaro biokimyo ittifoqi tasnifiga ko‘ra barcha fermentlar 6 asosiy sinfga bo‘linadi: 1. Oksidoreduktazalar; 2. Transferazalar; 3. Gidrolazalar; 4. Liazalar; 5. Izomerazalar; 6. Ligazalar (sintetazalar).",
      },
    ],
    comparisonTable: {
      title: "Fermentlarning xalqaro klassifikatsiyasi (EC 6 ta asosiy sinfi)",
      columns: ["EC raqami", "Sinf nomi", "Katalizlanuvchi reaksiya turi", "Misol"],
      rows: [
        [
          "EC 1",
          "Oksidoreduktazalar",
          "Oksidlanish-qaytarilish (e⁻ va H tashish)",
          "Katalaza, laktatdegidrogenaza",
        ],
        ["EC 2", "Transferazalar", "Funksional guruhlarni ko‘chirish", "Geksokinaza, ALT, AST"],
        ["EC 3", "Gidrolazalar", "Suv ishtirokida bog‘larni uzish", "Amilaza, pepsin, lipaza"],
        [
          "EC 4",
          "Liazalar",
          "Suvsiz qo‘shbog‘ hosil qilish yoki uzish",
          "Piruvatdekarboksilaza, fumaraza",
        ],
        ["EC 5", "Izomerazalar", "Molekula ichida qayta guruhlanish", "Fosfoglyukozizomeraza"],
        [
          "EC 6",
          "Ligazalar (sintetazalar)",
          "ATF energiyasi hisobiga bog‘ hosil qilish",
          "DNK-ligaza, piruvatkarboksilaza",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Xoloferment",
        definition:
          "Oqsil qism (apoferment) va nooqsil kofaktor birikishidan hosil bo‘ladigan to‘liq va katalitik jihatdan faol ferment kompleksi.",
      },
      {
        term: "Faollanish energiyasi (Ea)",
        definition:
          "Boshlang‘ich modda molekulalarini reaksiya o‘tish holatiga keltirish uchun zarur bo‘lgan minimal energiya; fermentlar uni kamaytiradi.",
      },
      {
        term: "Zimogen (proferment)",
        definition:
          "Cheklangan proteoliz orqali bir qismi kesilgandan keyin faol holatga o‘tadigan nofaol ferment o‘tmishdoshi (tripsinogen → tripsin).",
      },
      {
        term: "Induksiyalangan moslashuv",
        definition:
          "Koshland modeli: substrat faol markazga yaqinlashganda ferment oqsilining fazoviy tuzilishi substrat shakliga mos ravishda qayta moslashishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun me’da osti bezi hazm fermentlarini (tripsinogen, ximotripsinogen) faol emas, zimogen shaklida sintezlaydi?",
        answer:
          "Agar proteolitik fermentlar bez hujayralarining o‘zida faol holatda sintezlansa, ular bez to‘qimalarining oqsillarini parchalab o‘tkir pankreatitga sabab bo‘ladi; shu bois ular himoya chorasi sifatida o‘n ikki barmoq ichakda faollashadi.",
      },
      {
        question: "Fisher va Koshland modellarining asosiy farqi nimada?",
        answer:
          "Fisher modeli faol markazni qattiq o‘zgarmas qulf deb hisoblagan bo‘lsa, Koshlandning induksiyalangan moslashuv modeli faol markazning moslashuvchan ekanligini va substrat bog‘lanishi bilan optimal katalitik shakl olishini tushuntiradi.",
      },
      {
        question: "Ferment reaksiyaning termodinamik muvozanatini o‘zgartira oladimi?",
        answer:
          "Yo‘q, fermentlar faqat faollanish energiyasini pasaytirib, to‘g‘ri va teskari reaksiyani bir xil darajada tezlashtiradi va kimyoviy muvozanatga tezroq yetishishni ta’minlaydi.",
      },
    ],
    keyTerms: [
      "Xoloferment",
      "Koferment",
      "Zimogen",
      "Izoferment",
      "Koshland modeli",
      "EC klassifikatsiya",
    ],
    references: "Biokimyo · 8-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl:
      "/assets/aistudio/08-mavzu_Fermentlar_ularning_tuzilishi_va_ta_sir_mexa__1__b407d68f.pdf",
    pdfTitle: "8-mavzu PDF: Fermentlar tuzilishi va ta’sir qilish mexanizmlari",
  },
  {
    id: "biokimyo-9",
    order: 9,
    code: "9",
    topicLabel: "9-mavzu",
    module: "II bo‘lim: Biokataliz va regulyatsiya",
    title: "Fermentlarning biologik, fizik va kimyoviy xossalari",
    syllabusPoints: [
      "Fermentlarning oqsil tabiatini isbotlovchi dalillar, faollik birliklari (U, katal) va aylanish soni (kcat).",
      "Harorat (optimal harorat 37–40 °C, termofil bakteriyalar), muhit pH i (pepsin 1,5–2; amilaza 6,8; tripsin 8,0) va substrat konsentratsiyasi ta’siri.",
      "Mixaelis–Menten kinetikasi: Vmax va Km (Mixaelis konstantasi) ning biologik ma’nosi.",
      "Ferment aktivatorlari va ingibitorlari (qaytar raqobatli, raqobatsiz va qaytmas; tibbiyotda dori vositalari), kofermentlar va boshqaruv mexanizmlari.",
    ],
    studyNotes:
      "Mixaelis konstantasi (Km) — reaksiya tezligi maksimal tezlikning yarmiga (½ Vmax) teng bo‘lgandagi substrat konsentratsiyasi. Km qanchalik kichik bo‘lsa, fermentning substratga yaqinligi (affiniteti) shunchalik yuqori bo‘ladi.",
    overview:
      "Fermentlar kinetikasi va faolligini boshqaruvchi omillarni bilish nafaqat hujayra metabolizmini tushunish, balki zamonaviy dori vositalarini (ingibitorlarni) yaratish hamda klinik enzimodiagnostikani o‘tkazish uchun ham zarurdir.",
    sections: [
      {
        heading: "1. Ferment faolligiga harorat, pH va substrat konsentratsiyasining ta’siri",
        content:
          "Harorat ortishi bilan reaksiya tezligi dastlab (Vant-Goff qoidasiga yaqin tarzda) oshadi, ammo 50–60 °C dan yuqorida oqsil denaturatsiyasi tufayli faollik keskin tushadi (istisno: PZR da qo‘llaniladigan Taq-polimeraza 72 °C da faol). Har bir ferment o‘zining pH-optimumiga ega, chunki faol markazdagi ionogen guruhlar zaryadi muhit pH iga bog‘liq. Substrat konsentratsiyasi [S] ortganda reaksiya tezligi giperbolik tarzda o‘sib, fermentning barcha faol markazlari band bo‘lganda Vmax chegarasiga yetadi.",
        highlights: [
          "Pepsin (me’da): pH 1,5–2,0 | So‘lak amilazasi: pH 6,8–7,0 | Tripsin (ichak): pH 7,8–8,2 | Arginaza: pH 9,5",
          "1 xalqaro birlik (U) — 1 minutda 1 mkmol substratni aylantiruvchi ferment miqdori; 1 katal = 1 mol/sekund",
        ],
      },
      {
        heading: "2. Mixaelis–Menten tenglamasi va Km ning ma’nosi",
        content:
          "V = (Vmax · [S]) / (Km + [S]) tenglamasi fermentativ reaksiya tezligini substrat konsentratsiyasiga bog‘laydi. [S] << Km bo‘lganda tezlik [S] ga proporsional (birinchi tartibli), [S] >> Km bo‘lganda esa ferment to‘yinib V ≈ Vmax bo‘ladi (nol tartibli). Km qiymati fermentning substratga bo‘lgan yaqinligini aks ettiradi va ikki sharoitda (masalan, geksokinaza va glyukokinaza farqini) tushuntirishda hal qiluvchi ahamiyatga ega.",
      },
      {
        heading: "3. Aktivatorlar va ingibitorlar. Farmakologik ahamiyati",
        content:
          "Aktivatorlar ferment faolligini oshiradi (masalan, Cl⁻ ionlari so‘lak amilazasini, HCl pepsinogenni, Mg²⁺ kinazalarni faollashtiradi). Ingibitorlar esa faollikni susaytiradi:",
        highlights: [
          "Qaytar raqobatli ingibirlash — ingibitor tuzilishi substratga o‘xshash bo‘lib faol markaz uchun kurashadi (Km ortadi, Vmax o‘zgarmaydi); masalan, malon kislota suksinatdegidrogenazani, sulfanilamidlar bakteriyalarda foliy kislota sintezini, etanol esa metanol zaharlanishida alkogoldegidrogenazani raqobatli to‘sadi",
          "Qaytar raqobatsiz ingibirlash — ingibitor faol markazdan tashqariga bog‘lanadi (Km o‘zgarmaydi, Vmax kamayadi)",
          "Qaytmas ingibirlash — faol markaz bilan kovalent bog‘ hosil qiladi (aspirin siklooksigenazani, sianid sitoxromoksidazani, og‘ir metallar -SH guruhini bloklaydi)",
        ],
      },
      {
        heading: "4. Hujayrada fermentlar faolligini boshqarish va kofermentlar",
        content:
          "Hujayra ferment faolligini 4 asosiy yo‘l bilan tartibga soladi: 1) Allosterik boshqaruv va retroingibirlash (oxirgi mahsulot zanjir boshidagi fermentni tormozlaydi); 2) Kovalent modifikatsiya (proteinkinaza bilan fosforlanish / fosfataza bilan defosforlanish); 3) Cheklangan proteoliz (zimogen faollashuvi); 4) Ferment sintezi tezligini genetik boshqarish (induksiya va repressiya). Ko‘pchilik murakkab fermentlarning kofermentlari B guruhi vitaminlarining hosilalaridir (B₁→TDF, B₂→FAD, B₃→NAD⁺, B₆→PALF).",
      },
    ],
    comparisonTable: {
      title: "Qaytar va qaytmas ingibirlash turlarining kinetik qiyoslanishi",
      columns: [
        "Ingibirlash turi",
        "Bog‘lanish joyi va tabiati",
        "Km ga ta’siri",
        "Vmax ga ta’siri",
        "Misol",
      ],
      rows: [
        [
          "Qaytar raqobatli",
          "Faol markazga (nokovalent); [S] ni oshirish bilan yengiladi",
          "Ortadi",
          "O‘zgarmaydi",
          "Malonat, statinlar, metanol-etanol",
        ],
        [
          "Qaytar raqobatsiz",
          "Faol markazdan tashqari hududga (nokovalent)",
          "O‘zgarmaydi",
          "Kamayadi",
          "Ayrim dori moddalari va allosterik tormozlar",
        ],
        [
          "Qaytmas",
          "Faol markaz aminokislotasiga kovalent bog‘ bilan",
          "Katalitik faol ferment kamayadi",
          "Keskin kamayadi",
          "Aspirin, sianid, fosfororganik zaharlar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Mixaelis konstantasi (Km)",
        definition:
          "Fermentativ reaksiya tezligi maksimal qiymatining yarmiga (0,5 Vmax) teng bo‘lgan substrat konsentratsiyasi.",
      },
      {
        term: "Retroingibirlash (teskari aloqa)",
        definition:
          "Metabolik zanjirning oxirgi mahsuloti ko‘payganda, shu zanjirning birinchi tartibga soluvchi fermentini allosterik ravishda susaytirishi.",
      },
      {
        term: "Aylanish soni (kcat)",
        definition:
          "To‘yingan sharoitda bitta ferment molekulasi 1 sekundda mahsulotga aylantiradigan substrat molekulalari soni (katalazada ~4×10⁷ s⁻¹).",
      },
      {
        term: "Antimetabolitlar",
        definition:
          "Tabiiy substratlarga tuzilishi o‘xshash bo‘lib, kasallik qo‘zg‘atuvchi yoki o‘sma hujayralar fermentlarini raqobatli ingibirlovchi dorilar.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Metanol (texnik spirt) bilan zaharlanganda bemorga shoshilinch ravishda nima uchun etanol beriladi?",
        answer:
          "Alkogoldegidrogenaza fermenti metanolni o‘ta zaharli formaldegid va chumoli kislotaga aylantiradi. Etanol shu ferment uchun raqobatli substrat/ingibitor bo‘lib, metanol oksidlanishini to‘xtatadi va uning o‘zgarmagan holda chiqib ketishiga yordam beradi.",
      },
      {
        question:
          "Ikki fermentning bir xil substratga nisbatan Km qiymatlari 0,05 mmol/l va 5 mmol/l bo‘lsa, qaysi birining substratga yaqinligi yuqori?",
        answer:
          "Km = 0,05 mmol/l bo‘lgan fermentning yaqinligi (affiniteti) 100 barobar yuqori, chunki u juda kam substrat konsentratsiyasida ham yarim maksimal tezlikka erishadi.",
      },
      {
        question:
          "Nima uchun kovalent modifikatsiya (fosforlanish) allosterik boshqaruvdan keyin ham uzoqroq ta’sirga ega bo‘ladi?",
        answer:
          "Fosforlanishda fermentga fosfat guruhi mustahkam kovalent bog‘ bilan birikadi va maxsus fosfataza fermenti uni uzmaguncha oqsil faol yoki nofaol holatda qoladi.",
      },
    ],
    keyTerms: [
      "Mixaelis-Menten",
      "Km",
      "pH optimum",
      "Raqobatli ingibirlash",
      "Allosterik boshqaruv",
      "Kofaktor",
    ],
    references: "Biokimyo · 9-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/09-mavzu_Fermentlarning_biologik_fizik_va_kimyoviy_xo_2fbad7b9.pdf",
    pdfTitle: "9-mavzu PDF: Fermentlarning biologik, fizik va kimyoviy xossalari",
  },
  {
    id: "biokimyo-10",
    order: 10,
    code: "10",
    topicLabel: "10-mavzu",
    module: "II bo‘lim: Biokataliz va regulyatsiya",
    title: "Biologik faol birikmalar: Vitaminlar klassifikatsiyasi, tuzilishi va funksiyasi",
    syllabusPoints: [
      "Vitaminologiya tarixi (N.I. Lunin, K. Eykman, K. Funk) va asosiy tushunchalar: avitaminoz, gipovitaminoz, gipervitaminoz, provitamin va antivitamin.",
      "Suvda eriydigan vitaminlar (B₁, B₂, B₃/PP, B₅, B₆, B₇/H, B₉, B₁₂, C): koferment shakllari, metabolik roli va yetishmovchilik kasalliklari.",
      "Yog‘da eriydigan vitaminlar (A, D, E, K): ko‘rish sikli, kalsiy-fosfor almashinuvi, antioksidant himoya va qon ivishi.",
      "Vitaminlarning organizmda so‘rilishi, saqlanishi (B₁₂ jigarda zaxiralanishi, Kasl omili) hamda vitaminga o‘xshash moddalar.",
    ],
    studyNotes:
      "Vitaminlar organizmda umuman sintezlanmaydigan yoki yetarli miqdorda hosil bo‘lmaydigan, kichik dozalarda moddalar almashinuvini boshqaradigan muhim organik birikmalardir. Suvda eriydigan vitaminlarning deyarli barchasi kofermentlar tarkibiga kiradi.",
    overview:
      "Vitaminlar energetik yoki plastik qurilish materiali bo‘lmasa-da, ularsiz fermentlar katalitik faoliyat yurita olmaydi, erkin radikallar zararsizlantirilmaydi hamda qon ivishi, suyak mineralizatsiyasi va ko‘rish kabi asosiy fiziologik jarayonlar izdan chiqadi.",
    sections: [
      {
        heading: "1. Vitaminlar haqida umumiy tushuncha va buzilish holatlari",
        content:
          "1880-yilda N.I. Lunin sun’iy toza oziqa bilan boqilgan sichqonlarda hayot uchun zarur «qo‘shimcha omillar» mavjudligini isbotladi. 1912-yilda Kazimir Funk guruch po‘stidan ajratilgan moddani «vitamin» (vita + amin) deb nomladi. Organizmdagi balans buzilishlari uch shaklda kechadi: avitaminoz (vitaminning to‘liq yo‘qligi — beri-beri, singa, pellagra), gipovitaminoz (yetishmovchilik — eng keng tarqalgan) va gipervitaminoz (asosan yog‘da eriydigan A va D vitaminlarining ortiqcha to‘planishidan zaharlanish).",
      },
      {
        heading: "2. Suvda eriydigan vitaminlar va koferment funksiyalari",
        content:
          "Suvda eriydigan vitaminlar organizmda deyarli to‘planmaydi (B₁₂ dan tashqari) va ortiqchasi siydik bilan chiqariladi. Ular kofermentlarning tayanch qismini tashkil etadi:",
        highlights: [
          "B₁ (Tiamin → TDF) — piruvat va α-ketoglutarat dekarboksillanishi; yetishmasa beri-beri (polinevrit)",
          "B₂ (Riboflavin → FMN, FAD) va B₃/PP (Nikotinamid → NAD⁺, NADF⁺) — hujayra nafas olishi va oksidlanish-qaytarilish; PP yetishmasa pellagra («3D»: dermatit, diareya, demensiya)",
          "B₅ (Pantotenat → Koenzim A) — atsil guruhlarini tashish; B₆ (Piridoksin → PALF) — aminokislotalar transaminlanishi va dekarboksillanishi",
          "B₇/H (Biotin) — karboksillanish (xom tuxum oqidagi avidin bilan bloklanadi); B₉ (Folat) va B₁₂ (Kobalamin, Kasl ichki omili bilan so‘riladi) — DNK sintezi va qon hosil bo‘lishi (megaloblast/pernitsioz anemiya)",
          "C (Askorbin kislota) — kollagen gidroksillanishi, antioksidant himoya va temir so‘rilishi; yetishmasa singa (milk qonashi)",
        ],
      },
      {
        heading: "3. Yog‘da eriydigan vitaminlar (A, D, E, K)",
        content:
          "Yog‘da eriydigan vitaminlar ichakda o‘t kislotalari yordamida mitsellalar tarkibida so‘riladi va jigar hamda yog‘ to‘qimasida zaxiralanadi. Vitamin A (retinol, provitamin β-karotin) rodopsin ko‘rish pigmenti tarkibiga kiradi va epiteliy o‘sishini boshqaradi (yetishmasa shabko‘rlik). Vitamin D (kalsiferol, quyosh nuri ta’sirida terida xolesterin hosilasidan boshlanadi) kalsitriolga aylanib ichakda Ca²⁺ va fosfat so‘rilishini kuchaytiradi (bolalarda raxit, kattalarda osteomalatsiya). Vitamin E (tokoferol) membrana lipidlarini perekisli oksidlanishdan himoyalovchi bosh yog‘ eruvchi antioksidantdir. Vitamin K (filloxinon) jigarda II, VII, IX, X qon ivish omillarining γ-karboksillanishi uchun zarur (antivitamini — varfarin).",
      },
      {
        heading: "4. Antivitaminlar va vitaminga o‘xshash moddalar",
        content:
          "Antivitaminlar tuzilishi vitaminlarga o‘xshash bo‘lib, ularni kofermentdan siqib chiqaradi (masalan, sulfanilamidlar — PABA antivitamini, metotreksat — folat antivitamini, dikumarol va varfarin — K vitamini antivitamini). Vitaminga o‘xshash moddalarga (xolin, inozitol, L-karnitin, ubixinon/KoQ, lipoy kislota, bioflavonoidlar/P) organizm qisman o‘zi sintezlay oladigan biofaol birikmalar kiradi.",
      },
    ],
    comparisonTable: {
      title: "Asosiy vitaminlarning koferment/faol shakllari va yetishmovchilik belgilari",
      columns: [
        "Vitamin",
        "Eruvchanligi",
        "Faol shakli / Mexanizmi",
        "Avitaminoz / Yetishmovchilik",
      ],
      rows: [
        [
          "B₁ (Tiamin)",
          "Suvda",
          "Tiamindifosfat (TDF) — dekarboksillash",
          "Beri-beri, Verner-Korsakov sindromi",
        ],
        [
          "B₃ / PP (Niatsin)",
          "Suvda",
          "NAD⁺, NADF⁺ — degidrogenazalar",
          "Pellagra (dermatit, diareya, demensiya)",
        ],
        [
          "B₁₂ (Kobalamin)",
          "Suvda",
          "Metilkobalamin — DNK va mielin sintezi",
          "Pernitsioz (megaloblast) anemiya",
        ],
        [
          "C (Askorbin kislota)",
          "Suvda",
          "Prolin/lizin gidroksillanishi, antioksidant",
          "Singa (milk qonashi, tomir mo‘rtligi)",
        ],
        [
          "A (Retinol)",
          "Yog‘da",
          "11-sis-retinal (rodopsin), retinoik kislota",
          "Shabko‘rlik, kseroftalmiya",
        ],
        [
          "D (Kalsiferol)",
          "Yog‘da",
          "Kalsitriol — Ca²⁺ so‘rilishi va suyak",
          "Bolalarda raxit, osteomalatsiya",
        ],
        [
          "E (Tokoferol)",
          "Yog‘da",
          "Lipid radikallarini neytrallash",
          "Eritrotsit gemolizi, mushak distrofiyasi",
        ],
        [
          "K (Filloxinon)",
          "Yog‘da",
          "Protrombin va ivish omillari karboksillanishi",
          "Gemorragik sindrom (qon to‘xtamasligi)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Provitamin",
        definition:
          "Organizmga kirgach fermentativ yoki fotokimyoviy reaksiya natijasida faol vitaminga aylanadigan o‘tmishdosh modda (masalan, β-karotin → A vitamini).",
      },
      {
        term: "Kaslning ichki omili",
        definition:
          "Me’da parietal hujayralari ishlab chiqaradigan glikoprotein; B₁₂ vitaminini himoyalab yonbosh ichakda so‘rilishini ta’minlaydi.",
      },
      {
        term: "Antivitaminlar",
        definition:
          "Vitaminlarning kofermentga aylanishini yoki ferment bilan bog‘lanishini raqobatli ravishda to‘suvchi birikmalar (varfarin, metotreksat).",
      },
      {
        term: "Raxit",
        definition:
          "Bolalarda D vitamini yetishmovchiligi tufayli kalsiy va fosfor almashinuvi buzilib, suyaklarning yumshashi va qiyshayishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Nima uchun B₁₂ vitamini yetishmovchiligi ko‘pincha ovqatda B₁₂ kamligidan emas, me’da shilliq qavatining atrofiyasidan kelib chiqadi?",
        answer:
          "Chunki B₁₂ ingichka ichakda so‘rilishi uchun me’da parietal hujayralari ajratadigan Kasl ichki omili bilan kompleks hosil qilishi shart; me’da atrofiyasida bu omil yetishmaydi va pernitsioz anemiya rivojlanadi.",
      },
      {
        question:
          "Xom tuxum oqini ko‘p iste’mol qilish qaysi vitamin yetishmovchiligiga olib keladi?",
        answer:
          "Xom tuxum oqidagi avidin oqsili biotin (B₇/H vitamini) bilan parchalanmaydigan mustahkam kompleks hosil qilib, uning ichakdan so‘rilishini to‘sib qo‘yadi (pishirilganda avidin denaturatsiyalanadi).",
      },
      {
        question:
          "Nima sababdan yog‘da eriydigan vitaminlarda gipervitaminoz xavfi suvda eriydiganlarga nisbatan ancha yuqori?",
        answer:
          "Suvda eriydigan vitaminlar ortiqchasi buyraklar orqali siydik bilan oson chiqariladi; yog‘da eriydigan vitaminlar (ayniqsa A va D) esa jigar va yog‘ to‘qimasida to‘planib zaharli darajaga yetishi mumkin.",
      },
    ],
    keyTerms: ["Vitaminlar", "Koferment", "Avitaminoz", "Singa", "Raxit", "Antioxidant"],
    references: "Biokimyo · 10-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/10-mavzu_Vitaminlar_klassifikatsiyasi_tuzilishi_va_fu_b3f2d94f.pdf",
    pdfTitle: "10-mavzu PDF: Vitaminlar klassifikatsiyasi, tuzilishi va funksiyasi",
  },
  {
    id: "biokimyo-11",
    order: 11,
    code: "11",
    topicLabel: "11-mavzu",
    module: "II bo‘lim: Biokataliz va regulyatsiya",
    title: "Gormonlar. Ularning klassifikatsiyasi va funksiyasi",
    syllabusPoints: [
      "Gormonlar haqida umumiy tushuncha, signal turlari (endokrin, parakrin, autokrin), gipotalamo-gipofizar iyerarxiya va manfiy teskari aloqa.",
      "Gormonlarning kimyoviy klassifikatsiyasi: oqsil-peptid (insulin, STG), steroid (kortizol, jinsiy) va aminokislota hosilalari (adrenalin, T3/T4).",
      "Ta’sir mexanizmlari: membrana retseptorlari + ikkilamchi vositachilar (sAMF, IF₃/DAG, Ca²⁺) hamda hujayra ichidagi yadro retseptorlari (genomik mexanizm).",
      "Asosiy endokrin bezlar gormonlari, to‘qima gormonlari (eykozanoidlar, gistamin, leptin), antagonistik juftliklar va endokrin patologiyalar.",
    ],
    studyNotes:
      "Gormonlar ichki sekretsiya bezlarida sintezlanib qonga ajraladigan va nihoyatda past konsentratsiyalarda (10⁻¹²–10⁻⁹ M) nishon hujayralar metabolizmini boshqaradigan signal molekulalaridir. Suvda eriydigan gormonlar membrana retseptorlari, yog‘da eriydiganlar esa yadro retseptorlari orqali ta’sir ko‘rsatadi.",
    overview:
      "Endokrin tizim asab tizimi bilan birgalikda organizm gomeostazini, o‘sish, rivojlanish, moddalar almashinuvi, stressga javob va ko‘payish jarayonlarini muvofiqlashtiradi. Signal amplifikatsiyasi tufayli bitta gormon molekulasi millionlab ferment molekulalarini faollashtira oladi.",
    sections: [
      {
        heading: "1. Endokrin boshqaruv iyerarxiyasi va kimyoviy tasnif",
        content:
          "Gormonal boshqaruv gipotalamus (rilizing-omillar: liberin va statinlar) → gipofiz (trop gormonlar: TTG, AKTG, FSG, LG) → periferik bezlar (qalqonsimon bez, buyrak usti bezi, jinsiy bezlar) zanjiri bo‘yicha manfiy teskari aloqa tamoyilida ishlaydi. Kimyoviy tabiatiga ko‘ra gormonlar 3 sinfga bo‘linadi: oqsil-peptid gormonlar (gipotalamus, gipofiz, me’da osti bezi, paratgormon), aminokislota hosilalari (tirozindan T3/T4 va katexolaminlar; triptofandan melatonin) hamda xolesterindan sintezlanadigan steroidlar (kortizol, aldosteron, jinsiy gormonlar, kalsitriol).",
      },
      {
        heading: "2. Gormonlarning hujayraviy ta’sir mexanizmlari",
        content:
          "Gormonning nishon hujayraga ta’siri uning eruvchanligiga qarab ikki asosiy yo‘l bilan amalga oshadi:",
        highlights: [
          "Membrana retseptori + ikkilamchi vositachi (oqsil-peptid va katexolaminlar): G-oqsil adenilatsiklazani faollashtirib ATF dan sAMF hosil qiladi, bu esa proteinkinaza A orqali fermentlarni fosforlaydi (adrenalin, glyukagon); yoki fosfolipaza C orqali IF₃/DAG va Ca²⁺ ajraladi. Insulin esa tirozin-kinaza retseptori orqali GLUT4 ni membranaga chiqaradi",
          "Hujayra ichidagi/yadro retseptori (steroidlar va T3/T4): lipid membranadan o‘tib sitozol yoki yadro retseptoriga birikadi va DNK ning maxsus qismiga bog‘lanib yangi mRNK hamda oqsil sintezini (genomik mexanizm) boshqaradi",
        ],
      },
      {
        heading: "3. Asosiy bezlar, gormonlar va patologik holatlar",
        content:
          "Gipofiz oldingi bo‘lagining somatotrop gormoni (STG) yetishmasa gipofizar nanizm, ortiqcha bo‘lsa gigantizm va akromegaliya yuzaga keladi; orqa bo‘lakdan vazopressin (ADG — qandsiz diabetda yetishmaydi) va oksitotsin ajraladi. Qalqonsimon bez T3/T4 gormonlari asosiy moddalar almashinuvini tezlashtiradi (yod yetishmasa endemik buqoq, bolalarda kretinizm; ortiqchasi — Bazedov kasalligi). Paratgormon qon kalsiyini oshiradi, kalsitonin esa pasaytiradi.",
        highlights: [
          "Me’da osti bezi: β-hujayralar insulini qondagi glyukozani pasaytiradi (yetishmasa qandli diabet), α-hujayralar glyukagoni esa oshiradi",
          "Buyrak usti bezi: kortizol (stress va glyukoneogenez), aldosteron (Na⁺ ushlab qolish), adrenalin/noradrenalin («ur yoki qoch»)",
        ],
      },
      {
        heading: "4. To‘qima gormonlari va antagonistik tizim",
        content:
          "Maxsus bezlardan tashqari to‘qimalarda mahalliy ta’sir etuvchi bioregulyatorlar sintezlanadi: araxidon kislotadan eykozanoidlar (prostaglandinlar, tromboksanlar, leykotrienlar), yallig‘lanishda gistamin, ovqatlanish markazida leptin (to‘qlik) va grelin (ochlik). Organizm muvozanati insulin–glyukagon, paratgormon–kalsitonin va melatonin–kortizol kabi antagonistik juftliklar orqali barqaror saqlanadi.",
      },
    ],
    comparisonTable: {
      title: "Gormonlarning kimyoviy guruhlari va ta’sir mexanizmlari",
      columns: [
        "Gormon sinfi",
        "Eruvchanligi va tashilishi",
        "Retseptor joylashuvi",
        "Ta’sir mexanizmi va tezligi",
      ],
      rows: [
        [
          "Oqsil va peptidlar (insulin, STG, glyukagon)",
          "Suvda eriydi, qonda erkin",
          "Hujayra plazmatik membranasi",
          "Ikkilamchi vositachi (sAMF, Ca²⁺) yoki kinaza; tez (sekund–minut)",
        ],
        [
          "Katexolaminlar (adrenalin)",
          "Suvda eriydi, qonda erkin",
          "Plazmatik membrana (α/β-retseptor)",
          "G-oqsil, sAMF yoki IF₃/Ca²⁺; juda tez",
        ],
        [
          "Steroidlar (kortizol, testosteron, aldosteron)",
          "Lipofil, qonda oqsillar bilan",
          "Sitoplazma yoki yadro ichida",
          "Gen transkripsiyasini o‘zgartirish; sekin (soat–kun)",
        ],
        [
          "Tiroid gormonlar (T3, T4)",
          "Lipofil (yodli aminokislota hosilasi)",
          "Hujayra yadrosi",
          "Gen ekspressiyasi va mitoxondrial metabolizm",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Ikkilamchi vositachi (second messenger)",
        definition:
          "Membrana retseptoriga bog‘langan gormon (birinchi vositachi) signalini hujayra ichiga yetkazuvchi kichik molekula (sAMF, sGMF, IF₃, DAG, Ca²⁺).",
      },
      {
        term: "Manfiy teskari aloqa",
        definition:
          "Periferik bez gormoni qonda yetarli darajaga yetganda, gipotalamus va gipofizning rag‘batlantiruvchi gormonlari sekretsiyasini tormozlovchi mexanizm.",
      },
      {
        term: "Signal amplifikatsiyasi",
        definition:
          "Gormon–retseptor kompleksi ferment kaskadini ishga tushirib, bitta signal molekulasi hisobiga millionlab mahsulot hosil qilish hodisasi.",
      },
      {
        term: "Eykozanoidlar",
        definition:
          "Araxidon kislotadan sintezlanadigan, yallig‘lanish, qon ivishi va silliq mushak tonusini boshqaruvchi mahalliy gormonlar (prostaglandinlar).",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Adrenalin ta’siri bir necha soniyada namoyon bo‘ladi, kortizol ta’siri esa nega bir necha soatdan keyin yuzaga chiqadi?",
        answer:
          "Adrenalin membrana retseptori orqali sAMF kaskadini ishga tushirib, hujayrada tayyor turgan fermentlarni fosforlash yo‘li bilan darhol faollashtiradi; kortizol esa yadroga kirib DNK dan yangi mRNK va ferment oqsillarini sintezlash uchun ko‘proq vaqt talab qiladi.",
      },
      {
        question: "Qandli diabet va qandsiz diabet qaysi gormonlar yetishmovchiligi bilan bog‘liq?",
        answer:
          "Qandli diabetning 1-turi me’da osti bezi insulini yetishmasligidan (qonda glyukoza ortadi), qandsiz diabet esa gipofiz orqa bo‘lagidan ajraladigan vazopressin (antidiuretik gormon) yetishmasligidan kelib chiqadi.",
      },
      {
        question: "Nima uchun aspirin (atsetilsalitsil kislota) og‘riq va isitmani tushiradi?",
        answer:
          "Aspirin siklooksigenaza fermentini qaytmas ingibirlab, araxidon kislotadan yallig‘lanish va og‘riq mediatorlari bo‘lgan prostaglandinlar sintezini to‘xtatadi.",
      },
    ],
    keyTerms: ["Gormonlar", "sAMF", "Insulin", "Kortizol", "Gipofiz", "Retseptor"],
    references: "Biokimyo · 11-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/11-mavzu_Gormonlar_ularning_klassifikatsiyasi_va_funk_10652bf5.pdf",
    pdfTitle: "11-mavzu PDF: Gormonlar, klassifikatsiyasi va funksiyasi",
  },
  {
    id: "biokimyo-12",
    order: 12,
    code: "12",
    topicLabel: "12-mavzu",
    module: "III bo‘lim: Moddalar almashinuvi",
    title: "Moddalar almashinuvi haqida umumiy tushuncha. Lipidlar almashinuvi",
    syllabusPoints: [
      "Metabolizm tushunchasi: katabolizm (energetik), anabolizm (plastik) va amfibolik yo‘llar (Krebs sikli); katabolizmning 3 bosqichi.",
      "Bioenergetika va ATF: makroergik bog‘lar (30,5 kJ/mol), substrat fosforlanish, mitoxondriya nafas zanjiri va P. Mitchellning xemiosmotik nazariyasi.",
      "Lipidlarning hazm bo‘lishi (o‘t kislotalari emulsiyasi, pankreatik lipaza, mitsellalar), so‘rilishi va xilomikronlar hamda lipoproteinlar (JPZLP, XZLP, YuZLP).",
      "Lipoliz (gormonga sezgir lipaza), yog‘ kislotalarining karnitin orqali mitoxondriyaga kirishi va β-oksidlanishi (palmitat → 106 ATF), keton tanachalari va lipogenez.",
    ],
    studyNotes:
      "Metabolizm — hujayrada ATF va qaytaruvchi ekvivalentlar (NADH, NADFH, FADH₂) orqali bog‘langan katabolizm va anabolizm jarayonlari birligidir. 1 mol palmitin kislotasining (C₁₆) to‘liq β-oksidlanishi va Krebs siklida yonishidan sof 106 mol ATF hosil bo‘ladi.",
    overview:
      "Moddalar almashinuvining markazida energiya almashinuvi turadi. Ayniqsa lipidlar almashinuvi organizmga ochlik va uzoq jismoniy yuklama sharoitida eng katta energiya zaxirasidan foydalanish imkonini beradi.",
    sections: [
      {
        heading: "1. Katabolizm, anabolizm va bioenergetika (ATF sintezi)",
        content:
          "Katabolizm murakkab oziq moddalarni CO₂ va H₂O gacha parchalab ATF hosil qiluvchi oksidlovchi (ekzergonik) jarayon bo‘lsa, anabolizm oddiy molekulalardan ATF va NADFH sarflab biopolimerlar quruvchi qaytaruvchi (endergonik) jarayondir. Katabolizm 3 bosqichda boradi: hazm qilish (monomerlargacha), umumiy oraliq mahsulot — atsetil-KoA hosil bo‘lishi va Krebs sikli + nafas zanjiri. ATF fosfat bog‘lari gidrolizida 30,5 kJ/mol energiya ajraladi. Mitoxondriya ichki membranasida NADH (~2,5 ATF) va FADH₂ (~1,5 ATF) elektronlari nafas zanjiridan o‘tayotganda hosil bo‘lgan proton gradienti (ΔμH⁺) P. Mitchell xemiosmotik nazariyasiga ko‘ra ATF-sintaza orqali ATF sintezlaydi.",
        highlights: [
          "Ajratuvchilar (2,4-dinitrofenol, qo‘ng‘ir yog‘ to‘qimasidagi termogenin/UCP1) proton gradientini ATF siz issiqlikka aylantiradi",
        ],
      },
      {
        heading: "2. Lipidlarning hazm bo‘lishi va lipoproteinlar transporti",
        content:
          "Suvda erimaydigan yog‘lar o‘n ikki barmoq ichakda o‘t kislotalari yordamida mayda tomchilarga emulsiyalanadi va pankreatik lipaza (kolipaza ishtirokida) ta’sirida 2-monoatsilglitserin hamda erkin yog‘ kislotalarga parchalanadi. Bular o‘t tuzlari bilan aralash mitsellalar hosil qilib enterotsitlarga so‘riladi, ichak devorida qayta TAG ga yig‘ilib xilomikronlar shaklida avval limfaga, so‘ng qonga o‘tadi. Endogen lipidlar jigardan JPZLP shaklida chiqariladi.",
      },
      {
        heading: "3. Lipoliz va yog‘ kislotalarining β-oksidlanishi",
        content:
          "Ochlikda va jismoniy harakatda glyukagon hamda adrenalin yog‘ to‘qimasidagi gormonga sezgir lipazani faollashtirib, TAG ni glitserin va yog‘ kislotalarga parchalaydi (lipoliz). Uzun zanjirli yog‘ kislotalar asil-KoA ga faollashgach (2 ta makroergik bog‘ sarflanadi), karnitin tizimi (karnitin-asiltransferaza I/II) yordamida mitoxondriya matriksiga kiradi. Matriksda har bir β-oksidlanish sikli 4 reaksiyadan (degidrogenlash → gidratlash → degidrogenlash → tioliz) iborat bo‘lib, zanjirdan 2 uglerodli atsetil-KoA, 1 NADH va 1 FADH₂ ajratadi. Palmitin kislota (C₁₆) 7 siklda 8 atsetil-KoA berib, jami 106 ATF hosil qiladi.",
      },
      {
        heading: "4. Keton tanachalari, lipogenez va klinik jihatlar",
        content:
          "Uzoq ochlikda yoki dekompensatsiyalangan diabetda atsetil-KoA ko‘payib, jigarda keton tanachalari (atsetoatsetat, β-oksimoy kislota, atseton) sintezlanadi — ular miya va mushak uchun muqobil yoqilg‘idir, ammo ortiqchasi ketoatsidozga olib keladi. To‘q holatda esa sitoplazmada atsetil-KoA dan atsetil-KoA-karboksilaza va yog‘ kislotasi sintaza fermentlari NADFH ishtirokida palmitin kislotani sintezlaydi (lipogenez). Jigarda fosfatidlar (lipotrop omillar: xolin, metionin) yetishmasa jigar steatozi rivojlanadi.",
      },
    ],
    comparisonTable: {
      title: "Yog‘ kislotalarining β-oksidlanishi va lipogenez sintezi farqlari",
      columns: ["Belgi", "β-Oksidlanish (parchalanish)", "Lipogenez (biosintez)"],
      rows: [
        ["Hujayradagi joyi", "Mitoxondriya matriksi", "Sitoplazma (sitozol)"],
        ["Atsil tashuvchisi", "Koenzim A (HS-KoA)", "Atsil tashuvchi oqsil (ATO/ACP)"],
        ["Kofaktorlari", "FAD va NAD⁺ (hosil bo‘ladi)", "NADFH (sarflanadi) + ATF"],
        ["2-uglerod birligi", "Atsetil-KoA ajraladi", "Malonil-KoA qo‘shiladi (CO₂ chiqadi)"],
        [
          "Asosiy gormonal signal",
          "Glyukagon, adrenalin (faollashtiradi)",
          "Insulin (faollashtiradi)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Xemiosmotik nazariya",
        definition:
          "P. Mitchell nazariyasi: nafas zanjiri elektron tashishi hisobiga hosil bo‘ladigan protonlar elektrokimyoviy gradienti ATF-sintaza ishini harakatlantiradi.",
      },
      {
        term: "Karnitin shuttle tizimi",
        definition:
          "Uzun zanjirli yog‘ kislota qoldiqlarini mitoxondriyaning ichki membranasidan matriksga β-oksidlanish uchun o‘tkazuvchi transport tizimi.",
      },
      {
        term: "Xilomikronlar",
        definition:
          "Ichak hujayralarida oziq yog‘laridan hosil bo‘lib, limfa orqali qonga chiqadigan eng yirik va eng kam zichlikdagi lipoproteinlar.",
      },
      {
        term: "Keton tanachalari",
        definition:
          "Jigar mitoxondriyalarida ortiqcha atsetil-KoA dan hosil bo‘ladigan suvda eruvchan energiya tashuvchilari (atsetoatsetat, β-gidroksibutirat, atseton).",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Qo‘ng‘ir yog‘ to‘qimasidagi termogenin oqsili yangi tug‘ilgan chaqaloqlarda nima uchun muhim?",
        answer:
          "Termogenin (UCP1) mitoxondriya ichki membranasida protonlar uchun muqobil kanal ochib, oksidlanishni fosforlanishdan ajratadi; natijada energiya ATF ga emas, bevosita tana haroratini saqlovchi issiqlikka aylanadi.",
      },
      {
        question:
          "Nima uchun miya hujayralari erkin yog‘ kislotalardan emas, ochlikda keton tanachalaridan foydalanadi?",
        answer:
          "Uzun zanjirli yog‘ kislotalari qonda albuminga bog‘langan holda yurgani uchun gematoensefalik to‘siqdan o‘ta olmaydi; suvda eruvchan kichik keton tanachalari esa miyaga bemalol kirib atsetil-KoA ga aylanadi.",
      },
      {
        question:
          "Palmitin kislota (C₁₆) to‘liq β-oksidlanishida nechta sikl ketadi va nechta atsetil-KoA hosil bo‘ladi?",
        answer:
          "16 ta uglerodli zanjirni 2 uglerodli bo‘laklarga bo‘lish uchun (16/2) - 1 = 7 ta β-oksidlanish sikli ketadi va natijada 8 ta atsetil-KoA, 7 ta NADH hamda 7 ta FADH₂ hosil bo‘ladi.",
      },
    ],
    keyTerms: [
      "Metabolizm",
      "ATF",
      "Mitchell nazariyasi",
      "Beta-oksidlanish",
      "Karnitin",
      "Keton tanachalari",
    ],
    references: "Biokimyo · 12-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/12-mavzu_Moddalar_almashinuvi_haqida_umumiy_tushuncha_38e16871.pdf",
    pdfTitle: "12-mavzu PDF: Moddalar almashinuvi va lipidlar almashinuvi",
  },
  {
    id: "biokimyo-13",
    order: 13,
    code: "13",
    topicLabel: "13-mavzu",
    module: "III bo‘lim: Moddalar almashinuvi",
    title: "Uglevodlar almashinuvi. Aerob va anaerob parchalanish",
    syllabusPoints: [
      "Uglevodlarning hazm bo‘lishi (so‘lak va pankreatik α-amilaza, parietal disaxaridazalar) va SGLT1 / GLUT1–GLUT5 tashuvchilari orqali so‘rilishi.",
      "Geksokinaza va jigar glyukokinazasi farqlari, qon glyukozasi gomeostazi (3,3–5,5 mmol/l) va buyrak chegarasi (8,8–10 mmol/l).",
      "Glikogen almashinuvi: glikogenez (glikogenin, UDF-glyukoza, glikogensintaza) va glikogenoliz (glikogenfosforilaza), glikogenozlar (Girke, Pompe, Mak-Ardl).",
      "Glyukozaning anaerob (2 ATF, laktat, Kori sikli) vs aerob (30–32 ATF) parchalanishi, pentozofosfat yo‘li (NADFH, riboza-5-fosfat) va glyukoneogenez.",
    ],
    studyNotes:
      "Glyukozaning hujayraga kirishi va dastlabki fosforlanishidan so‘ng u sharoitga qarab anaerob glikolizda (2 ATF, kislorodsiz), aerob nafas olishda (30–32 ATF) yoki biosintez uchun zarur NADFH va riboza-5-fosfat beruvchi pentozofosfat yo‘lida sarflanadi.",
    overview:
      "Uglevodlar almashinuvi qondagi glyukoza konsentratsiyasini tor fiziologik me’yorda ushlab turish, jigar va mushaklarda glikogen zaxiralash hamda barcha to‘qimalarni tezkor energiya va pentozalar bilan ta’minlashga qaratilgan.",
    sections: [
      {
        heading: "1. Uglevodlar hazmi, GLUT tashuvchilari va glyukoza fosforlanishi",
        content:
          "Kraxmal hazmi og‘iz bo‘shlig‘ida α-amilaza bilan boshlanib, o‘n ikki barmoq ichakda davom etadi; hosil bo‘lgan maltoza, saxaroza va laktoza enterotsit mikrovorsinkalaridagi maltaza, saxaraza va laktaza fermentlari bilan monosaxaridlarga parchalanadi (parietal hazm). Glyukoza ichakka Na⁺-bog‘liq ikkilamchi faol transport (SGLT1) orqali kiradi. To‘qimalarga esa GLUT1–GLUT4 (mushak va yog‘ to‘qimasida insulinga sezgir GLUT4) orqali kirib, darhol geksokinaza (barcha to‘qima, Km past) yoki glyukokinaza (jigar, Km yuqori, glyukoza-6-fosfat bilan tormozlanmaydi) yordamida glyukoza-6-fosfatga aylantiriladi.",
      },
      {
        heading: "2. Glikogenez, glikogenoliz va glikogenozlar",
        content:
          "To‘q holatda insulin glikogensintazani faollashtirib, UDF-glyukozadan glikogen sintezini (glikogenez) kuchaytiradi. Ochlikda (glyukagon) yoki jismoniy zo‘riqishda (adrenalin) glikogenfosforilaza glikogenni glyukoza-1-fosfatga parchalaydi (glikogenoliz). Jigarda glyukoza-6-fosfataza fermenti mavjudligi uchun u qonga erkin glyukoza chiqara oladi, mushakda esa bu ferment yo‘q — mushak glikogeni faqat o‘z qisqarishi uchun sarflanadi. Irsiy ferment nuqsonlari glikogenozlarga (Girke — I tip, Pompe — II tip, Mak-Ardl — V tip) olib keladi.",
      },
      {
        heading: "3. Aerob va anaerob parchalanish, Kori sikli",
        content:
          "Kislorod yetishmaganda (og‘ir jismoniy mashqda mushaklarda) yoki mitoxondriyasi yo‘q eritrotsitlarda glyukoza piruvat orqali laktatga aylanib atigi 2 mol ATF beradi (anaerob glikoliz). Mushakda to‘plangan laktat qon bilan jigarga borib glyukoneogenez yo‘li bilan yana glyukozaga aylanadi va mushakka qaytadi — bu Kori (glyukoza-laktat) sikli deyiladi. Kislorod yetarli bo‘lganda esa piruvat mitoxondriyada to‘liq oksidlanib 30–32 mol ATF hosil qiladi.",
        highlights: [
          "Glyukoneogenez — ochlikda laktat, piruvat, glitserin va glyukogen aminokislotalardan jigarda (90%) va buyrakda (10%) yangi glyukoza sintezi",
        ],
      },
      {
        heading: "4. Pentozofosfat yo‘li (Pentoza sikli)",
        content:
          "Sitoplazmada ATF hosil qilmasdan kechadigan glyukoza-6-fosfat oksidlanishining muqobil yo‘li bo‘lib, ikki muhim mahsulot beradi: 1) yog‘ kislota, xolesterin sintezi va eritrotsitlarda glutationni qaytarilgan holda saqlash uchun zarur NADFH (glyukoza-6-fosfatdegidrogenaza yetishmasa gemolitik anemiya kuzatiladi); 2) nuklein kislotalar (DNK, RNK) va ATF sintezi uchun riboza-5-fosfat.",
      },
    ],
    comparisonTable: {
      title: "Glyukoza metabolizmi asosiy yo‘llarining qiyosiy tahlili",
      columns: [
        "Jarayon nomi",
        "Hujayradagi joyi",
        "Asosiy mahsuloti",
        "Energetik / Biologik roli",
      ],
      rows: [
        [
          "Anaerob glikoliz",
          "Sitoplazma",
          "2 Laktat + 2 ATF",
          "Kislorodsiz sharoitda tezkor energiya (eritrotsit, mushak)",
        ],
        [
          "Aerob parchalanish",
          "Sitoplazma + Mitoxondriya",
          "6 CO₂ + 6 H₂O + 30–32 ATF",
          "Asosiy va maksimal energiya samaradorligi",
        ],
        [
          "Pentozofosfat yo‘li",
          "Sitoplazma",
          "NADFH + Riboza-5-fosfat",
          "Anabolik sintez, antioksidant himoya va NK sintezi",
        ],
        [
          "Glyukoneogenez",
          "Jigar va buyrak (sitozol + mitox.)",
          "Glyukoza (laktat, alanin, glitserindan)",
          "Ochlikda miya uchun qon qandini saqlash (6 ATF sarflaydi)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "GLUT4 tashuvchisi",
        definition:
          "Skelet mushagi va yog‘ to‘qimasida joylashgan, faqat insulin ta’sirida membrana yuzasiga chiqib glyukozani hujayraga kiritadigan tashuvchi oqsil.",
      },
      {
        term: "Kori sikli",
        definition:
          "Mushakda anaerob glikolizda hosil bo‘lgan laktatning jigarga borib glyukoneogenez orqali yana glyukozaga aylanishi va mushakka qaytish sikli.",
      },
      {
        term: "Glyukoza-6-fosfataza",
        definition:
          "Jigar va buyrakda mavjud bo‘lib, glyukoza-6-fosfatdan fosfatni uzib qonga erkin glyukoza chiqarish imkonini beruvchi ferment.",
      },
      {
        term: "Buyrak glyukoza chegarasi",
        definition:
          "Qonda glyukoza 8,8–10 mmol/l dan oshganda buyrak kanalchalari reabsorbsiyasi ulgura olmay siydikda qand (glyukozuriya) paydo bo‘lish darajasi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Mushak hujayralarida katta glikogen zaxirasi bo‘lsa-da, nima uchun mushak ochlikda qondagi glyukoza miqdorini oshira olmaydi?",
        answer:
          "Mushak hujayralarida glyukoza-6-fosfatni erkin glyukozaga aylantiruvchi glyukoza-6-fosfataza fermenti yo‘q; shuning uchun mushak glikogeni faqat shu hujayraning o‘zida glikolizga sarflanadi.",
      },
      {
        question:
          "Glyukoza-6-fosfatdegidrogenaza (G6FD) fermenti yetishmovchiligida nima uchun eritrotsitlar yemirilishi (gemoliz) yuz beradi?",
        answer:
          "Eritrotsitlarda pentozofosfat yo‘li NADFH hosil qiluvchi yagona manbadir; NADFH yetishmasa glutation qaytarilmaydi va vodorod peroksid eritrotsit membranasini yemiradi.",
      },
      {
        question: "Geksokinaza va glyukokinaza fermentlari qanday farqlanadi?",
        answer:
          "Geksokinaza barcha to‘qimalarda bo‘lib, Km qiymati juda kichik (past qandda ham ishlaydi) va glyukoza-6-fosfat bilan tormozlanadi; glyukokinaza esa faqat jigar va β-hujayralarda uchraydi, Km qiymati yuqori va ovqatdan keyingi ortiqcha glyukozani ushlab qoladi.",
      },
    ],
    keyTerms: [
      "Glikogen",
      "Kori sikli",
      "GLUT4",
      "Pentozofosfat yo‘li",
      "Glyukoneogenez",
      "Glikogenoz",
    ],
    references: "Biokimyo · 13-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/13-mavzu_Uglevodlar_almashinuvi_Aerob_va_anaerob_parc_a4f409af.pdf",
    pdfTitle: "13-mavzu PDF: Uglevodlar almashinuvi, aerob va anaerob parchalanish",
  },
  {
    id: "biokimyo-14",
    order: 14,
    code: "14",
    topicLabel: "14-mavzu",
    module: "III bo‘lim: Moddalar almashinuvi",
    title: "Glikoliz. Krebs sikli",
    syllabusPoints: [
      "Glikolizning 10 ta reaksiyasi: tayyorgarlik davri (1–5-bosqich, 2 ATF sarfi) va energiya ajraluvchi davr (6–10-bosqich, 4 ATF + 2 NADH hosil bo‘lishi).",
      "Glikolizning qaytarilmas boshqaruv nuqtalari (fosfofruktokinaza-1), Paster effekti va o‘sma hujayralaridagi Varburg effekti; bijg‘ish turlari.",
      "Piruvatning oksidlovchi dekarboksillanishi: piruvatdegidrogenaza majmuasi (E₁, E₂, E₃; 5 ta koferment — TDF, lipoat, KoA, FAD, NAD⁺).",
      "Krebs (limon kislota) siklining 8 ta reaksiyasi, energetik balansi (1 atsetil-KoA → 10 ATF; 1 glyukoza → 30–32 ATF), amfibolik roli va anaplerotik reaksiyalar.",
    ],
    studyNotes:
      "Glikolizning bosh regulyatori — fosfofruktokinaza-1 (PFK-1) bo‘lib, ATF va sitrat bilan tormozlanadi, AMF va fruktoza-2,6-bisfosfat bilan faollanadi. Mitoxondriyadagi Krebs siklida 1 mol atsetil-KoA dan 3 NADH, 1 FADH₂ va 1 GTF (~10 ATF) hosil bo‘ladi.",
    overview:
      "Glikoliz va Krebs sikli barcha tirik organizmlarda markaziy energiya ishlab chiqarish magistralini tashkil etadi. Bundan tashqari, Krebs sikli oraliq mahsulotlari aminokislotalar, gem va yog‘ kislotalar sintezi uchun boshlang‘ich xomashyo beradigan amfibolik markazdir.",
    sections: [
      {
        heading: "1. Glikoliz bosqichlari va regulyatsiyasi",
        content:
          "Glikoliz sitoplazmada 10 ta fermentativ bosqichda kechib, 1 molekula glyukozani 2 molekula piruvatga aylantiradi. 1–5-bosqichlarda (geksokinaza, PFK-1) 2 ATF sarflanib, fruktoza-1,6-bisfosfat ikkita trioza-fosfatga bo‘linadi. 6–10-bosqichlarda (fosfoglitseratkinaza va piruvatkinaza bosqichlarida substrat fosforlanishi orqali) 4 ATF hamda 2 NADH hosil bo‘ladi — sof foyda 2 ATF + 2 NADH. Paster effekti kislorod paydo bo‘lishi bilan glikoliz tejamkorlikka o‘tib sekinlashishini, Varburg effekti esa saraton hujayralarida kislorod bo‘lsa ham glikolizning tez ketishini (aerob glikoliz) ifodalaydi. Mikroorganizmlarda piruvat spirtli, sut kislotali yoki moy kislotali bijg‘ishga uchraydi.",
      },
      {
        heading: "2. Piruvatdegidrogenaza majmuasi (PDG)",
        content:
          "Sitoplazmadagi piruvat mitoxondriyaga kirib, uchta ferment (E₁, E₂, E₃) va beshta koferment (TDF, lipoy kislota, KoA, FAD, NAD⁺) dan iborat PDG majmuasi ishtirokida qaytarilmas ravishda oksidlovchi dekarboksillanishga uchraydi: Piruvat + NAD⁺ + HS-KoA → Atsetil-KoA + NADH + CO₂.",
      },
      {
        heading: "3. Krebs siklining 8 ta reaksiyasi va energetik balansi",
        content:
          "H. Krebs (1937) ochgan trikarbon kislotalar sikli oksaloatsetat (C₄) bilan atsetil-KoA (C₂) birikib sitrat (C₆) hosil qilishi (sitratsintaza) bilan boshlanadi. Keyin akonitaza izomerlanishi, izotsitratdegidrogenaza (1-NADH + CO₂), α-ketoglutaratdegidrogenaza (2-NADH + CO₂), suksinil-KoA sintetaza (substrat fosforlanishi → GTF/ATF), suksinatdegidrogenaza (ichki membranada joylashgan, FADH₂), fumaraza va malatdegidrogenaza (3-NADH, oksaloatsetat tiklanishi) ketma-ket boradi.",
        highlights: [
          "1 ta atsetil-KoA siklda: 3 NADH (7,5 ATF) + 1 FADH₂ (1,5 ATF) + 1 GTF (1 ATF) = 10 ATF beradi",
          "1 molekula glyukoza aerob oksidlanishida jami: Glikoliz (2 ATF + 2 NADH) + 2 PDG (2 NADH) + 2 Krebs sikli (20 ATF) = 30–32 ATF",
        ],
      },
      {
        heading: "4. Krebs siklining amfibolik tabiati va anaplerotik reaksiyalar",
        content:
          "Krebs sikli bir vaqtda ham katabolik (energiya beruvchi), ham anabolik vazifa bajaradi: sitrat yog‘ kislotalari sinteziga, α-ketoglutarat va oksaloatsetat aminokislotalarga, suksinil-KoA esa gemoglobin gemi sinteziga sarflanadi. Sarflangan oraliq moddalarni to‘ldiruvchi reaksiyalar anaplerotik reaksiyalar deyiladi (eng muhimi — piruvatkarboksilaza orqali piruvatdan oksaloatsetat hosil bo‘lishi). Laboratoriyada malon kislota suksinatdegidrogenazani raqobatli ingibirlaydi.",
      },
    ],
    comparisonTable: {
      title: "1 molekula glyukozaning aerob oksidlanishidagi energetik balans (zamonaviy hisob)",
      columns: ["Metabolik bosqich", "Bevosita ATF / GTF", "NADH va FADH₂", "Jami ATF ekvivalenti"],
      rows: [
        [
          "Glikoliz (sitoplazma)",
          "2 ATF (4 hosil − 2 sarf)",
          "2 NADH (malat/glitserofosfat mokisi)",
          "5 yoki 7 ATF",
        ],
        ["Piruvat → Atsetil-KoA (×2)", "0", "2 NADH (mitoxondriyada)", "5 ATF"],
        ["Krebs sikli (×2 aylanish)", "2 GTF (= 2 ATF)", "6 NADH + 2 FADH₂", "20 ATF"],
        ["JAMI (1 glyukoza)", "4 ATF", "10 NADH + 2 FADH₂", "30 yoki 32 ATF"],
      ],
    },
    keyConcepts: [
      {
        term: "Fosfofruktokinaza-1 (PFK-1)",
        definition:
          "Glikoliz tezligini belgilovchi asosiy allosterik ferment; hujayrada energiya ko‘pligida (ATF, sitrat) tormozlanadi, yetishmaganda (AMF) faollanadi.",
      },
      {
        term: "Piruvatdegidrogenaza (PDG)",
        definition:
          "Glikolizni Krebs sikli bilan bog‘lovchi, 5 ta koferment (B₁, B₂, B₃, B₅ va lipoat) yordamida atsetil-KoA hosil qiluvchi ko‘p fermentli majmua.",
      },
      {
        term: "Anaplerotik reaksiyalar",
        definition:
          "Biosintezga sarflanib kamaygan Krebs sikli oraliq moddalarini (ayniqsa oksaloatsetatni) qayta to‘ldirib turuvchi reaksiyalar.",
      },
      {
        term: "Varburg effekti",
        definition:
          "O‘sma hujayralarining kislorod yetarli bo‘lishiga qaramay energiyani asosan tezlashtirilgan anaerob glikoliz (laktat hosil qilish) orqali olishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Krebs sikli reaksiyalarida molekulyar kislorod (O₂) bevosita ishtirok etmasa ham, nima uchun sikl kislorodsiz to‘xtab qoladi?",
        answer:
          "Krebs siklida hosil bo‘ladigan NADH va FADH₂ nafas zanjirida kislorod ishtirokidagina NAD⁺ va FAD ga qayta oksidlanadi; O₂ bo‘lmasa kofermentlar tiklanmaydi va siklning degidrogenaza bosqichlari to‘xtaydi.",
      },
      {
        question:
          "Krebs siklining qaysi bitta fermenti matriksda erkin emas, mitoxondriya ichki membranasiga birikkan holda joylashgan?",
        answer:
          "Suksinatdegidrogenaza — u bir vaqtning o‘zida ham Krebs sikli fermenti, ham nafas zanjirining II kompleksi hisoblanadi.",
      },
      {
        question:
          "B₁ vitamini (tiamin) yetishmaganda qonda nima sababdan piruvat va laktat miqdori keskin oshib ketadi?",
        answer:
          "Chunki tiamindifosfat (TDF) piruvatdegidrogenaza va α-ketoglutaratdegidrogenaza majmualarining majburiy kofermentidir; B₁ tanqisligida piruvat Krebs sikliga kira olmay laktatga aylanadi.",
      },
    ],
    keyTerms: [
      "Glikoliz",
      "Krebs sikli",
      "Fosfofruktokinaza",
      "Piruvatdegidrogenaza",
      "Atsetil-KoA",
      "32 ATF",
    ],
    references: "Biokimyo · 14-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/14-mavzu_Glikoliz_Krebs_sikli_038a3dad.pdf",
    pdfTitle: "14-mavzu PDF: Glikoliz va Krebs sikli",
  },
  {
    id: "biokimyo-15",
    order: 15,
    code: "15",
    topicLabel: "15-mavzu",
    module: "III bo‘lim: Moddalar almashinuvi",
    title: "Oqsillar va nuklein kislotalar almashinuvi",
    syllabusPoints: [
      "Oqsillarning hazm bo‘lishi (pepsin, tripsin, ximotripsin, karboksipeptidazalar), so‘rilishi va yo‘g‘on ichakda chirish mahsulotlarining jigarda zararsizlantirilishi.",
      "Azot muvozanati (nol, musbat va manfiy), aminokislotalar pereaminlanishi (ALT, AST, PALF kofermenti) va oksidlovchi dezaminlanish (transdezaminlanish).",
      "Aminokislotalar dekarboksillanishi (biogen aminlar: gistamin, serotonin, GAMK, dofamin) va ammiakning ornitin (siydikchil) siklida zararsizlantirilishi.",
      "Oqsil biosintezi (translyatsiya), proteasoma va nuklein kislotalar almashinuvi (de novo va salvage sintez, podagra, Lesh–Nayxan sindromi).",
    ],
    studyNotes:
      "Boshqa sinf moddalaridan farqli o‘laroq oqsillar organizmda zaxira qilinmaydi; aminokislotalar parchalanishida ajraladigan zaharli ammiak (NH₃) jigardagi ornitin (Krebs–Xenzeleyt) siklida zararsiz siydikchilga (mochevinaga) aylantirilib buyrak orqali chiqariladi.",
    overview:
      "Oqsillar va nuklein kislotalar almashinuvi organizmning azot balansini, hujayralar yangilanishini, neyromediatorlar sintezini hamda irsiy materialning uzluksiz qayta tiklanishini ta’minlaydi.",
    sections: [
      {
        heading: "1. Oqsillar hazmi, ichakda chirish va azot muvozanati",
        content:
          "Oqsil hazmi me’dada HCl va pepsin ta’sirida boshlanib, ingichka ichakda tripsin, ximotripsin, elastaza va peptidazalar ishtirokida erkin aminokislotalargacha tugaydi. So‘rilmagan aminokislotalar yo‘g‘on ichak bakteriyalari ta’sirida chirib zaharli indol, skatol, fenol va krezol hosil qiladi; ular qopqa vena orqali jigarga borib sulfat va glyukuron kislota bilan konyugatsiya qilinib zararsizlantiriladi. Kattalarda kirgan va chiqqan azot teng (nol muvozanat), o‘sish va tiklanishda musbat, ochlik va og‘ir kasalliklarda esa manfiy azot muvozanati kuzatiladi.",
      },
      {
        heading: "2. Pereaminlanish, dezaminlanish va dekarboksillanish",
        content: "Aminokislotalar katabolizmining markaziy bosqichi — aminogruppani ajratishdir:",
        highlights: [
          "Pereaminlanish (transaminlanish) — aminotransferazalar (ALT, AST, kofermenti B₆-fosfat/PALF) aminogruppani α-ketoglutaratga o‘tkazib glutamat hosil qiladi; qonda ALT oshishi jigar, AST oshishi yurak mushagi zararlanishining muhim belgisidir",
          "Oksidlovchi dezaminlanish — glutamatdegidrogenaza glutamatdan NH₃ va α-ketoglutarat ajratadi (transdezaminlanish)",
          "Dekarboksillanish (CO₂ ajralishi) — biologik faol aminlar beradi: gistidin → gistamin, glutamat → GAMK (tormozlovchi mediator), triptofan → serotonin, DOFA → dofamin → adrenalin",
        ],
      },
      {
        heading: "3. Ammiakni zararsizlantirish: Ornitin (siydikchil) sikli",
        content:
          "Erkin ammiak (NH₃) ayniqsa markaziy asab tizimi uchun o‘ta zaharlidir. To‘qimalardan ammiak qon orqali zararsiz glutamin va alanin shaklida (glyukoza–alanin sikli) jigarga tashiladi. Jigar hujayralarida (dastlabki 2 bosqich mitoxondriyada, qolgan 3 tasi sitozolda) karbamoilfosfatsintetaza I va arginaza kabi fermentlar ishtirokida ornitin sikli kechib, 2 ta NH₃ + CO₂ + 3 ATF sarfidan bitta siydikchil (mochevina) molekulasi sintezlanadi va siydik bilan chiqariladi.",
      },
      {
        heading: "4. Oqsil yangilanishi va nuklein kislotalar almashinuvi",
        content:
          "Hujayrada nuqsonli yoki eskirgan oqsillar ubikvitin bilan belgilanib proteasomalarda parchalanadi; yangi oqsillar ribosomada mRNK va tRNK asosida translyatsiya yo‘li bilan (har bir peptid bog‘iga 4 makroergik bog‘ sarflab) sintezlanadi. Nuklein kislotalar tarkibidagi purin va pirimidin nukleotidlari ham yangidan (de novo — riboza-5-fosfat, glitsin, glutamin, aspartat va folatdan), ham tayyor asoslarni qayta ishlatish (salvage yo‘li) orqali hosil bo‘ladi. Purinlar parchalanishining yakuniy mahsuloti siydik kislotasidir; uning to‘planishi podagrani keltirib chiqaradi (allopurinol ksantinoksidazani to‘sib davolaydi), HGPRT fermenti yetishmasligi esa Lesh–Nayxan sindromiga sabab bo‘ladi.",
      },
    ],
    comparisonTable: {
      title: "Aminokislotalar aylanishining asosiy yo‘llari va mahsulotlari",
      columns: [
        "Reaksiya turi",
        "Asosiy ferment va koferment",
        "Hosil bo‘ladigan mahsulot",
        "Biologik va klinik ahamiyati",
      ],
      rows: [
        [
          "Pereaminlanish",
          "ALT, AST (koferment — PALF / B₆)",
          "Glutamat + yangi ketokislota",
          "Almashinadigan AK sintezi va klinik diagnostika",
        ],
        [
          "Transdezaminlanish",
          "Aminotransferaza + Glutamatdegidrogenaza",
          "NH₃ + α-ketoglutarat",
          "Aminokislota azotini ammiakka ajratish",
        ],
        [
          "Dekarboksillanish",
          "Dekarboksilazalar (PALF)",
          "Biogen aminlar + CO₂",
          "Gistamin, serotonin, GAMK, dofamin sintezi",
        ],
        [
          "Ornitin sikli",
          "Karbamoilfosfatsintetaza I, Arginaza",
          "Siydikchil (mochevina)",
          "Jigarda zaharli ammiakni to‘liq zararsizlantirish",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Transdezaminlanish",
        definition:
          "Barcha aminokislotalar aminogruppasini avval pereaminlanish bilan glutamatga yig‘ib, so‘ng glutamatdegidrogenaza yordamida ammiak ajratishning yagona universal mexanizmi.",
      },
      {
        term: "Ornitin sikli",
        definition:
          "Faqat jigar hujayralarida ammiak va CO₂ dan ATF sarflab siydikchil (mochevina) hosil qiluvchi 5 bosqichli sikl.",
      },
      {
        term: "Biogen aminlar",
        definition:
          "Aminokislotalarning dekarboksillanishi natijasida hosil bo‘ladigan kuchli fiziologik faol moddalar (gistamin, serotonin, GAMK, dofamin).",
      },
      {
        term: "Allopurinol va Podagra",
        definition:
          "Podagrada bo‘g‘imlarda siydik kislota tuzlari to‘planadi; allopurinol ksantinoksidaza fermentini raqobatli ingibirlab siydik kislotasi hosil bo‘lishini kamaytiradi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Qon tahlilida ALT va AST fermentlari faolligining oshishi shifokorga qaysi a’zolar haqida ma’lumot beradi?",
        answer:
          "ALT (alaninaminotransferaza) asosan gepatotsitlarda ko‘p bo‘lgani uchun gepatit va jigar zararlanishida keskin ko‘tariladi; AST (aspartataminotransferaza) esa miokardda yuqori bo‘lib, yurak infarktida tez oshadi.",
      },
      {
        question:
          "Nima sababdan og‘ir jigar yetishmovchiligida (sirrozda) bemorda miya faoliyati buzilishi (giperammoniyemiya) rivojlanadi?",
        answer:
          "Chunki ammiakni zararsiz siydikchilga aylantiruvchi ornitin sikli faqat jigarda to‘liq ishlaydi; jigar shikastlanganda qonda NH₃ to‘planib neyronlarga zaharli ta’sir ko‘rsatadi.",
      },
      {
        question:
          "Purin va pirimidin nukleotidlari parchalanishi yakuniy mahsulotlari bilan qanday farqlanadi?",
        answer:
          "Purinlar (A, G) parchalanishidan kam eriydigan siydik kislotasi hosil bo‘ladi (podagra xavfi); pirimidinlar (C, U, T) esa to‘liq eriydigan β-alanin, NH₃ va CO₂ gacha parchalanadi.",
      },
    ],
    keyTerms: [
      "Pereaminlanish",
      "ALT/AST",
      "Ornitin sikli",
      "Biogen aminlar",
      "Siydik kislotasi",
      "Proteasoma",
    ],
    references: "Biokimyo · 15-mavzu ma’ruza matni (Xalimova N.T.)",
    pdfUrl: "/assets/aistudio/15-mavzu_Oqsillar_va_nuklein_kislotalar_almashinuvi__1__653378e3.pdf",
    pdfTitle: "15-mavzu PDF: Oqsillar va nuklein kislotalar almashinuvi",
  },
];
