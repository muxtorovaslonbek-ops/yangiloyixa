export interface BioinformatikaTopicSection {
  heading: string;
  content: string;
  highlights?: string[];
}

export interface BioinformatikaTopicTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface BioinformatikaGlossaryItem {
  term: string;
  definition: string;
}

export interface BioinformatikaSelfCheck {
  question: string;
  answer: string;
}

export interface BioinformatikaPdfDocument {
  title: string;
  url: string;
  kind?: "Amaliy mashg‘ulot" | "Ma’ruza matni" | "Laboratoriya" | "Taqdimot";
}

export type BioinformatikaCategory = "amaliy" | "maruza" | "laboratoriya";

export interface BioinformatikaTopic {
  id: string;
  order: number;
  code: string;
  category: BioinformatikaCategory;
  topicLabel: string;
  module:
    | "I qism: Axborot nazariyasi, bazalar va ketma-ketliklarni tekislash"
    | "II qism: Filogenetika, genom tahrirlash va oqsil strukturalari";
  title: string;
  syllabusPoints: string[];
  studyNotes: string;
  overview: string;
  sections: BioinformatikaTopicSection[];
  comparisonTable: BioinformatikaTopicTable;
  keyConcepts: BioinformatikaGlossaryItem[];
  selfCheckQuestions: BioinformatikaSelfCheck[];
  keyTerms: string[];
  references: string;
  pdfUrl: string;
  pdfTitle: string;
  pdfDocuments: BioinformatikaPdfDocument[];
}

export const BIOINFORMATIKA_PRACTICAL_TOPICS: BioinformatikaTopic[] = [
  {
    id: "bioinf-amaliy-1",
    order: 1,
    code: "A01",
    category: "amaliy",
    topicLabel: "1-amaliy mashg‘ulot",
    module: "I qism: Axborot nazariyasi, bazalar va ketma-ketliklarni tekislash",
    title:
      "Bioinformatikada axborot nazariyasiga oid masalalar tahlili: ketma-ketliklarning axborot entropiyasini hisoblash",
    syllabusPoints: [
      "Biologik ketma-ketliklarda axborot miqdori (bit) va Shennon entropiyasi formulasini o‘zlashtirish",
      "DNK va oqsil ketma-ketliklari uchun entropiya (H) hamda ortiqchalik (R) ko‘rsatkichlarini hisoblash",
      "Ko‘p martali tekislash ustunlari bo‘yicha axborot mazmuni (IC) va Sequence logo grafiklarini talqin qilish",
      "Past murakkablikdagi sohalar va metagenomikada Shennon xilma-xillik indeksini baholash",
    ],
    studyNotes:
      "Shennon entropiyasi H = -Σ pᵢ·log₂(pᵢ) biologik ketma-ketliklardagi noaniqlikni bitlarda o‘lchaydi. DNK uchun maksimal entropiya Hmax = log₂(4) = 2 bit, 20 ta aminokislotali oqsil uchun esa Hmax = log₂(20) ≈ 4,32 bitga teng. Konservativ ustunlarda entropiya nolga yaqin, axborot mazmuni IC = Hmax - H esa maksimal bo‘ladi.",
    overview:
      "Ushbu 1-amaliy mashg‘ulotda axborot nazariyasining bioinformatikadagi qo‘llanilishi — Shennon entropiyasi, ketma-ketlik ortiqchaligi (redundancy), tekislash ustunlaridagi axborot mazmuni (IC) va Sequence logo tasvirlarini qo‘lda hamda dasturiy vositalar yordamida hisoblash va talqin qilish masalalari yechiladi.",
    sections: [
      {
        heading: "1.1. Biologik ketma-ketliklarda axborot va Shennon entropiyasi",
        content:
          "K. Shennon (1948) taklif etgan axborot nazariyasi nukleotid va aminokislota ketma-ketliklaridagi tartiblilik hamda xilma-xillikni miqdoriy baholash imkonini beradi. Bitta belgidan olinadigan axborot I(x) = -log₂(p(x)) bit bilan o‘lchanadi, butun ketma-ketlikning o‘rtacha noaniqligi esa H = -Σ pᵢ·log₂(pᵢ) orqali topiladi.",
        highlights: [
          "DNK alifbosi (N = 4): barcha nukleotidlar teng ulushda (0,25) bo‘lganda Hmax = 2,0 bit",
          "Oqsil alifbosi (N = 20): barcha aminokislotalar teng ehtimolli bo‘lganda Hmax = log₂(20) ≈ 4,322 bit",
          "Faqat bitta belgi takrorlanganda (masalan, AAAAAAAA) p = 1 va entropiya H = 0 bit bo‘ladi",
        ],
      },
      {
        heading: "1.2. Ortiqchalik (Redundancy) va past murakkablikdagi sohalar",
        content:
          "Ketma-ketlikning ortiqchaligi R = 1 - H / Hmax formula bilan hisoblanadi. Entropiyasi past bo‘lgan takroriy uchastkalar (masalan, poli-A dumlari yoki oddiy tandem takrorlar) past murakkablikdagi sohalar (low-complexity regions) deb ataladi va BLAST qidiruvida soxta mosliklar bermasligi uchun filtrlanadi.",
        highlights: [
          "R = 0: maksimal xilma-xillik, barcha belgilar bir tekis taqsimlangan",
          "R → 1: kuchli takrorlanuvchanlik yoki bitta belgining ustunligi",
          "Metagenomikada Shennon indeksi mikrob jamoasining tur xilma-xilligini ko‘rsatadi",
        ],
      },
      {
        heading: "1.3. Axborot mazmuni (IC) va Sequence Logo tahlili",
        content:
          "Ko‘p martali tekislash (MSA) ustunida pozitsiyaning evolyutsion konservativligi axborot mazmuni IC = log₂(N) - H bilan ifodalanadi. WebLogo kabi vositalar har bir pozitsiyadagi belgilarning umumiy balandligini IC qiymatiga, har bir harf balandligini esa uning chastotasiga mutanosib qilib tasvirlaydi.",
        highlights: [
          "To‘liq konservativ DNK pozitsiyasida IC = 2 bit — promotor va transkripsiya omili bog‘lanish motivlarida yaqqol ko‘rinadi",
          "O‘zgaruvchan ustunlarda harflar kichik va IC qiymati past bo‘ladi",
          "Kerakli vositalar: kalkulyator, MS Excel / Python, WebLogo (weblogo.berkeley.edu)",
        ],
      },
    ],
    comparisonTable: {
      title: "Axborot nazariyasi ko‘rsatkichlarining qiyosiy tavsifi",
      columns: ["Ko‘rsatkich", "Formula", "O‘lchov birligi", "Biologik talqini"],
      rows: [
        [
          "Shennon entropiyasi (H)",
          "H = −Σ pᵢ · log₂(pᵢ)",
          "bit",
          "Ketma-ketlik yoki ustundagi xilma-xillik va noaniqlik darajasi",
        ],
        [
          "Maksimal entropiya (Hmax)",
          "Hmax = log₂(N)",
          "bit (DNK: 2; Oqsil: 4,32)",
          "Alifbodagi barcha belgilar teng ehtimolli bo‘lgandagi eng yuqori qiymat",
        ],
        [
          "Ortiqchalik (R)",
          "R = 1 − H / Hmax",
          "o‘lchovsiz (0 dan 1 gacha)",
          "Tarkibiy cheklov va takrorlanuvchanlik ulushi",
        ],
        [
          "Axborot mazmuni (IC)",
          "IC = Hmax − H",
          "bit",
          "Tekislash ustunining konservativlik darajasi (Sequence logo balandligi)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Bit",
        definition: "Ikki teng ehtimolli holatdan birini tanlashga mos keluvchi axborot birligi.",
      },
      {
        term: "Shennon entropiyasi",
        definition: "Tasodifiy belgining o‘rtacha noaniqlik (axborot) o‘lchovi.",
      },
      {
        term: "Ortiqchalik (Redundancy)",
        definition: "Entropiyaning maksimal nazariy qiymatdan nisbiy kamligi (R = 1 - H/Hmax).",
      },
      {
        term: "Axborot mazmuni (IC)",
        definition: "Ko‘p martali tekislash ustunidagi konservativlik o‘lchovi (bitlarda).",
      },
      {
        term: "Sequence logo",
        definition:
          "Pozitsiyalar bo‘yicha konservativlik va belgi chastotalarining grafik tasviri.",
      },
      {
        term: "Past murakkablikdagi soha",
        definition: "Kam sonli belgilar takrorlanuvchi, entropiyasi past ketma-ketlik qismi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "DNK va oqsil ketma-ketliklari uchun maksimal Shennon entropiyasi nimaga teng?",
        answer:
          "DNK uchun 4 xil nukleotid mavjudligi sababli Hmax = log₂(4) = 2 bit; oqsillar uchun 20 xil aminokislota bo‘lgani bois Hmax = log₂(20) ≈ 4,322 bitga teng.",
      },
      {
        question:
          "Agar tekislash ustunida 100 % faqat G nukleotidi uchrasa, H va IC qancha bo‘ladi?",
        answer:
          "p(G) = 1 bo‘lgani uchun H = -1·log₂(1) = 0 bit, axborot mazmuni esa IC = 2 - 0 = 2 bit (maksimal konservativlik) bo‘ladi.",
      },
      {
        question: "Nima uchun past murakkablikdagi sohalar BLAST qidiruvida filtrlanadi?",
        answer:
          "Chunki entropiyasi past takroriy sohalar evolyutsion qarindosh bo‘lmagan ketma-ketliklar bilan ham yuqori tasodifiy moslik (soxta musbat natija) beradi.",
      },
    ],
    keyTerms: [
      "bit",
      "shennon entropiyasi",
      "ortiqchalik",
      "axborot mazmuni (IC)",
      "sequence logo",
      "past murakkablikdagi soha",
      "alifbo",
      "shennon indeksi",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 1-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/11-1_amaliy_mashgulot_bioinformatikada_axborot_na_68418270.pdf",
    pdfTitle: "1-amaliy mashg‘ulot — Bioinformatikada axborot nazariyasiga oid masalalar tahlili",
    pdfDocuments: [
      {
        title: "1-amaliy mashg‘ulot — Bioinformatikada axborot nazariyasiga oid masalalar tahlili",
        url: "/assets/aistudio/11-1_amaliy_mashgulot_bioinformatikada_axborot_na_68418270.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
  {
    id: "bioinf-amaliy-2",
    order: 2,
    code: "A02",
    category: "amaliy",
    topicLabel: "2-amaliy mashg‘ulot",
    module: "I qism: Axborot nazariyasi, bazalar va ketma-ketliklarni tekislash",
    title:
      "Nukleotid va oqsil ketma-ketliklari ma’lumotlar bazalari (GenBank, UniProt) bilan amaliy ishlash: yozuvlarni qidirish va tahlil qilish",
    syllabusPoints: [
      "GenBank flat file formatining asosiy maydonlarini (LOCUS, DEFINITION, ACCESSION, FEATURES, ORIGIN) tahlil qilish",
      "FEATURES bo‘limidan CDS, ekzon, 5′/3′-UTR va oqsil translyatsiyasi (/translation) ma’lumotlarini ajratish",
      "RefSeq prefikslarini (NM_, NP_, NC_, XM_, XP_) farqlash va UniProt da kengaytirilgan qidiruv o‘tkazish",
      "Nukleotid ketma-ketligining GC-tarkibi hamda ExPASy ProtParam orqali oqsil parametrlarini hisoblash",
    ],
    studyNotes:
      "GenBank yozuvlari tuzilgan matnli flat file formatida saqlanadi; kuratorlik qilingan RefSeq yozuvlari NM_ (mRNK), NP_ (oqsil) va NC_ (xromosoma) prefikslari bilan ajralib turadi. UniProtKB/Swiss-Prot esa qo‘lda tekshirilgan yuqori ishonchlilikdagi oqsil annotatsiyalarini beradi.",
    overview:
      "2-amaliy mashg‘ulotda NCBI GenBank va UniProt biologik ma’lumotlar bazalaridan yozuvlarni samarali qidirish, GenBank flat file tuzilishini o‘qish, RefSeq identifikatorlarini sharhlash hamda ketma-ketliklarning GC-tarkibi va molekulyar massasini hisoblash ko‘nikmalari shakllantiriladi.",
    sections: [
      {
        heading: "2.1. GenBank Flat File tuzilishi va FEATURES bo‘limi",
        content:
          "GenBank yozuvi uchta asosiy blokdan iborat: sarlavha (LOCUS, DEFINITION, ACCESSION, VERSION, ORGANISM), annotatsiya jadvali (FEATURES) va ketma-ketlikning o‘zi (ORIGIN). FEATURES bo‘limi har bir funksional elementning koordinatalarini va /gene, /product, /codon_start, /translation kabi qualifier izohlarini o‘z ichiga oladi.",
        highlights: [
          "CDS (Coding Sequence) — start kodondan (ATG) stop kodongacha bo‘lgan oqsil kodlovchi qism",
          "5′-UTR va 3′-UTR — mRNK ning translyatsiya qilinmaydigan tartibga soluvchi uchlari",
          "join(...) yozuvi eukariot genlarida ekzonlarning ulanish koordinatalarini ko‘rsatadi",
        ],
      },
      {
        heading: "2.2. RefSeq identifikator prefikslari",
        content:
          "NCBI RefSeq bazasi ortiqchaliksiz, standartlashtirilgan va tekshirilgan etalon ketma-ketliklarni taqdim etadi. Prefiksga qarab yozuv turi va uning kuratorlik darajasini darhol aniqlash mumkin.",
        highlights: [
          "NM_ (mRNK), NR_ (kodlamaydigan RNK), NP_ (oqsil) — mutaxassislar tomonidan tekshirilgan yozuvlar",
          "XM_, XR_, XP_ — genom annotatsiyasi asosida avtomatik bashorat qilingan yozuvlar",
          "NC_ — to‘liq xromosoma yoki genom, NG_ — genomik soha, NT_/NW_ — kontiglar",
        ],
      },
      {
        heading: "2.3. UniProt qidiruv sintaksisi va ExPASy ProtParam tahlili",
        content:
          "UniProt da maydonli qidiruv operatorlari (masalan, gene:INS AND organism_id:9606 AND reviewed:true) aniq natija olishni tezlashtiradi. Olingan oqsil ketma-ketligi ExPASy ProtParam vositasiga kiritilib, molekulyar massa (Da/kDa), izoelektrik nuqta (pI), aminokislota tarkibi va barqarorlik indeksi hisoblanadi.",
        highlights: [
          "GC-tarkib (%) = ((G + C) / jami uzunlik) × 100 % — DNK erish harorati (Tm) bilan bog‘liq",
          "Swiss-Prot (reviewed) — qo‘lda kuratorlik qilingan; TrEMBL (unreviewed) — avtomatik annotatsiyalangan",
          "Kerakli vositalar: NCBI Nucleotide/Protein/Gene, UniProt, ExPASy ProtParam, MS Excel/Python",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy RefSeq prefikslari va GenBank/UniProt maydonlari",
      columns: ["Prefiks / Bo‘lim", "Ma’lumot turi", "Holati", "Amaliy vazifasi"],
      rows: [
        [
          "NM_ / NP_",
          "mRNK / Oqsil",
          "Kuratorlik qilingan",
          "Ishonchli etalon transkript va oqsil",
        ],
        ["XM_ / XP_", "mRNK / Oqsil", "Avtomatik bashorat", "Yangi sekvenlangan genom modellari"],
        ["NC_", "To‘liq xromosoma / genom", "Etalon yig‘ma", "Genomik koordinatalarni aniqlash"],
        [
          "FEATURES (CDS)",
          "GenBank annotatsiya",
          "Standart maydon",
          "Ekzonlar, kodlovchi soha va translyatsiya",
        ],
        [
          "ProtParam",
          "ExPASy veb-vositasi",
          "Tahlil kalkulyatori",
          "Molekulyar massa, pI, GRAVY, yarim yashash davri",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "GenBank flat file",
        definition: "GenBank ma’lumotlar bazasi yozuvining standart matnli formati.",
      },
      {
        term: "FEATURES",
        definition:
          "Yozuvdagi funksional elementlar (gen, CDS, ekzon, UTR) va koordinatalar jadvali.",
      },
      {
        term: "CDS",
        definition: "Oqsil ketma-ketligini bevosita kodlovchi nukleotid sohasi (Coding Sequence).",
      },
      {
        term: "RefSeq",
        definition: "NCBI ning kuratorlik qilingan, takrorlarsiz etalon ketma-ketliklar bazasi.",
      },
      {
        term: "GC-tarkib",
        definition:
          "Nukleotid ketma-ketligidagi guanin (G) va sitozin (C) asoslarining foiz ulushi.",
      },
      {
        term: "Qualifier",
        definition: "FEATURES elementining qo‘shimcha atributi (/gene, /product, /translation).",
      },
    ],
    selfCheckQuestions: [
      {
        question: "RefSeq bazasidagi NM_ va XM_ prefikslari bir-biridan nimasi bilan farq qiladi?",
        answer:
          "NM_ eksperimental tasdiqlangan va kuratorlar tomonidan tekshirilgan mRNK yozuvini, XM_ esa avtomatik algoritmlar yordamida bashorat qilingan model mRNK ni bildiradi.",
      },
      {
        question: "mRNK uzunligi bilan uning CDS uzunligi nima uchun bir xil bo‘lmaydi?",
        answer:
          "Chunki to‘liq mRNK tarkibida CDS dan tashqari translyatsiya qilinmaydigan 5′-UTR va 3′-UTR sohalari ham mavjud bo‘ladi.",
      },
      {
        question: "ExPASy ProtParam yordamida oqsilning qaysi fizik-kimyoviy xossalari aniqlanadi?",
        answer:
          "Aminokislotalar soni, molekulyar massa, nazariy izoelektrik nuqta (pI), musbat/manfiy zaryadli qoldiqlar soni, ekstinksiya koeffitsiyenti, barqarorlik indeksi va GRAVY qiymati.",
      },
    ],
    keyTerms: [
      "genbank flat file",
      "features",
      "cds",
      "refseq",
      "gc-tarkib",
      "protparam",
      "qualifier",
      "utr",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 2-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/12-2_amaliy_mashgulot_nukleotid_va_oqsil_ketma_ke_0b9af0e6.pdf",
    pdfTitle:
      "2-amaliy mashg‘ulot — Nukleotid va oqsil ketma-ketliklari bazalari (GenBank, UniProt)",
    pdfDocuments: [
      {
        title:
          "2-amaliy mashg‘ulot — Nukleotid va oqsil ketma-ketliklari bazalari (GenBank, UniProt)",
        url: "/assets/aistudio/12-2_amaliy_mashgulot_nukleotid_va_oqsil_ketma_ke_0b9af0e6.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
  {
    id: "bioinf-amaliy-3",
    order: 3,
    code: "A03",
    category: "amaliy",
    topicLabel: "3-amaliy mashg‘ulot",
    module: "I qism: Axborot nazariyasi, bazalar va ketma-ketliklarni tekislash",
    title:
      "Ketma-ketliklarning juft tekislanishiga oid masalalar yechish (Needleman–Wunsch va Smith–Waterman algoritmlari)",
    syllabusPoints: [
      "Moslik (match), nomoslik (mismatch) va bo‘shliq (gap) ballari hamda affin jarima tizimini o‘zlashtirish",
      "Needleman–Wunsch dinamik dasturlash matritsasini qo‘lda to‘ldirish va global tekislashni topish",
      "Smith–Waterman algoritmi asosida lokal tekislash matritsasini tuzish va eng o‘xshash qismni ajratish",
      "Orqaga qaytish (traceback) yo‘lini qurish hamda natijalarni EMBOSS Needle va Water dasturlarida tekshirish",
    ],
    studyNotes:
      "Global tekislash (Needleman–Wunsch) ikki ketma-ketlikni to‘liq uzunligi bo‘yicha moslashtiradi va o‘ng pastki katak F(n,m) dan (0,0) gacha orqaga qaytadi. Lokal tekislash (Smith–Waterman) esa manfiy qiymatlarni 0 bilan cheklaydi va matritsadagi eng katta qiymatdan birinchi 0 gacha orqaga qaytib eng o‘xshash domenni topadi.",
    overview:
      "3-amaliy mashg‘ulot dinamik dasturlash algoritmlari — Needleman–Wunsch (global) va Smith–Waterman (lokal) yordamida qisqa nukleotid va peptid ketma-ketliklari uchun ballar matritsasini to‘ldirish, optimal tekislanishni tiklash va EMBOSS vositalari bilan natijalarni tekshirishga bag‘ishlangan.",
    sections: [
      {
        heading: "3.1. Needleman–Wunsch global tekislash algoritmi",
        content:
          "Needleman–Wunsch (1970) ikki o‘xshash uzunlikdagi gomologik ketma-ketlikni boshidan oxirigacha tekislaydi. Birinchi satr va ustun bo‘shliq jarimalari bilan (i·d va j·d) initsializatsiya qilinadi, har bir katak esa rekurrent formula orqali uchta qo‘shni katakning maksimumi sifatida hisoblanadi: F(i,j) = max{ F(i-1,j-1)+s(xᵢ,yⱼ); F(i-1,j)+d; F(i,j-1)+d }.",
        highlights: [
          "Diagonal harakat — moslik yoki nomoslik (almashinuv)",
          "Yuqoriga harakat — ikkinchi ketma-ketlikda bo‘shliq (indel)",
          "Chapga harakat — birinchi ketma-ketlikda bo‘shliq (indel)",
        ],
      },
      {
        heading: "3.2. Smith–Waterman lokal tekislash algoritmi",
        content:
          "Smith–Waterman (1981) uzunligi har xil bo‘lgan yoki faqat bitta konservativ domenga ega ketma-ketliklarni solishtirishda qo‘llaniladi. Asosiy farqi: birinchi satr va ustun 0 lar bilan to‘ldiriladi, rekurrent formulaga esa 0 qo‘shiladi: H(i,j) = max{ 0; H(i-1,j-1)+s; H(i-1,j)+d; H(i,j-1)+d }.",
        highlights: [
          "Matritsada manfiy ballar bo‘lmaydi (minimal qiymat 0)",
          "Traceback matritsaning eng katta qiymatli katagidan boshlanib, 0 ga yetganda tugaydi",
          "Konservativ domenlar va qisqa motivlarni izlash uchun ideal",
        ],
      },
      {
        heading: "3.3. Affin jarima va almashtirish matritsalari",
        content:
          "Biologik evolyutsiyada bitta uzun delesiya bir nechta alohida uzilishga qaraganda ko‘proq ehtimolli bo‘lgani uchun affin jarima qo‘llaniladi: W(k) = g_open + (k - 1)·g_extend. Oqsillarni tekislashda esa aminokislotalarning fizik-kimyoviy o‘xshashligini hisobga oluvchi BLOSUM62 va PAM250 matritsalaridan foydalaniladi.",
        highlights: [
          "EMBOSS Needle — Needleman–Wunsch algoritmining rasmiy onlayn amalga oshirilishi",
          "EMBOSS Water — Smith–Waterman algoritmining onlayn amalga oshirilishi",
          "Ba’zan bitta matritsada bir xil maksimal ball beruvchi bir nechta optimal traceback yo‘li mavjud bo‘ladi",
        ],
      },
    ],
    comparisonTable: {
      title: "Needleman–Wunsch va Smith–Waterman algoritmlarini taqqoslash",
      columns: ["Parametr", "Needleman–Wunsch (Global)", "Smith–Waterman (Lokal)"],
      rows: [
        ["Maqsad", "Butun uzunlik bo‘yicha tekislash", "Eng o‘xshash qism (domen) ni topish"],
        [
          "Boshlang‘ich satr/ustun",
          "0, d, 2d, 3d, ... (manfiy o‘sadi)",
          "Barchasi 0 bilan to‘ldiriladi",
        ],
        ["Manfiy qiymatlar", "Ruxsat etiladi", "Taqiqlanadi (0 bilan cheklanadi)"],
        [
          "Traceback boshlanishi",
          "O‘ng pastki katak F(n, m)",
          "Matritsadagi maksimal qiymatli katak",
        ],
        ["Traceback tugashi", "(0, 0) katakda", "Qiymati 0 bo‘lgan katakka yetganda"],
        ["EMBOSS vositasi", "EMBOSS Needle", "EMBOSS Water"],
      ],
    },
    keyConcepts: [
      {
        term: "Global tekislash",
        definition:
          "Ikki ketma-ketlikni boshidan oxirigacha to‘liq uzunligi bo‘yicha moslashtirish.",
      },
      {
        term: "Lokal tekislash",
        definition: "Ketma-ketliklar ichidagi eng yuqori o‘xshashlikka ega qismlarni topish.",
      },
      {
        term: "Dinamik dasturlash",
        definition: "Murakkab masalani kichik qism masalalarga bo‘lib jadvalda yechish usuli.",
      },
      {
        term: "Orqaga qaytish (traceback)",
        definition:
          "To‘ldirilgan ballar matritsasidan optimal tekislanishni qayta tiklash bosqichi.",
      },
      {
        term: "Indel",
        definition:
          "Insersiya yoki delesiya hodisasi; tekislanishda chiziqcha (–) bilan belgilanadi.",
      },
      {
        term: "Affin jarima",
        definition: "Bo‘shliqni ochish va uni uzaytirish uchun alohida jarima ballari tizimi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Qachon global, qachon lokal tekislash usulini tanlash maqsadga muvofiq?",
        answer:
          "Uzunligi yaqin va butun uzunligi bo‘yicha gomologik bo‘lgan gen/oqsillar uchun global (Needleman–Wunsch), har xil uzunlikdagi yoki faqat alohida konservativ domenga ega ketma-ketliklar uchun esa lokal (Smith–Waterman) tekislash tanlanadi.",
      },
      {
        question: "Smith–Waterman algoritmida nima uchun 0 qiymati rekurrent formulaga kiritiladi?",
        answer:
          "U o‘xshash bo‘lmagan sohalarda to‘plangan manfiy ballarni nolga tushirib, yangi mahalliy o‘xshash uchastkani istalgan pozitsiyadan qaytadan boshlash imkonini beradi.",
      },
      {
        question:
          "Nima uchun bo‘shliqni ochish jarimasi uni uzaytirish jarimasidan kattaroq qilib olinadi?",
        answer:
          "Evolyutsion nuqtayi nazardan bitta ko‘p nukleotidli delesiya yoki insersiya hodisasi bir nechta mustaqil yakka uzilishlarga qaraganda ko‘proq ehtimollikka ega.",
      },
    ],
    keyTerms: [
      "tekislash",
      "global tekislash",
      "lokal tekislash",
      "dinamik dasturlash",
      "orqaga qaytish (traceback)",
      "indel",
      "affin jarima",
      "moslik matritsasi",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 3-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/13-3_amaliy_mashgulot_ketma_ketliklarning_juft_te_267139a0.pdf",
    pdfTitle:
      "3-amaliy mashg‘ulot — Ketma-ketliklarning juft tekislanishi (Needleman–Wunsch, Smith–Waterman)",
    pdfDocuments: [
      {
        title:
          "3-amaliy mashg‘ulot — Ketma-ketliklarning juft tekislanishi (Needleman–Wunsch, Smith–Waterman)",
        url: "/assets/aistudio/13-3_amaliy_mashgulot_ketma_ketliklarning_juft_te_267139a0.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
  {
    id: "bioinf-amaliy-4",
    order: 4,
    code: "A04",
    category: "amaliy",
    topicLabel: "4-amaliy mashg‘ulot",
    module: "I qism: Axborot nazariyasi, bazalar va ketma-ketliklarni tekislash",
    title:
      "Berilgan biologik ketma-ketliklar uchun BLAST-qidiruv natijalarini amaliy tahlil qilish",
    syllabusPoints: [
      "BLAST natija bloklari (Descriptions, Graphic Summary, Alignments, Taxonomy) tuzilishini o‘qish",
      "E-qiymat, Max score, Total score, Query cover va Per. Ident ko‘rsatkichlari bog‘liqligini tahlil qilish",
      "Statistik ishonchlilik chegaralari asosida haqiqiy gomologlarni tasodifiy mosliklardan ajratish",
      "16S rRNK va COI markerlari yordamida noma’lum ketma-ketlikni DNK-shtrixkodlash orqali identifikatsiya qilish",
    ],
    studyNotes:
      "E-qiymat bit ball (S′) bilan eksponensial bog‘langan: E = m·n·2^(−S′). Bit ball 10 ga oshganda E taxminan 1000 marta kamayadi. E < 10⁻⁵⁰ deyarli aniq gomologni bildiradi, lekin har doim Query cover va Per. Ident bilan birgalikda baholanishi shart.",
    overview:
      "4-amaliy mashg‘ulotda NCBI BLAST qidiruv natijalarini mustaqil talqin qilish, grafik xulosa va statistik ko‘rsatkichlarni kompleks baholash hamda 16S rRNK / COI ketma-ketliklari asosida noma’lum organizmlarni aniqlash (DNK-shtrixkodlash) amaliyoti bajariladi.",
    sections: [
      {
        heading: "4.1. BLAST hisobotining asosiy ustunlari va Graphic Summary",
        content:
          "BLAST qidiruvi yakunlangach natijalar to‘rtta oynada ko‘rinadi: Descriptions (jadval), Graphic Summary (rangli chiziqlar orqali tekislanish uzunligi va balli), Alignments (juft tekislanishlar) va Taxonomy (taksonomik taqsimot). Agar bitta bazaviy ketma-ketlikda bir nechta lokal moslik (HSP) topilsa, Total score Max score dan katta bo‘ladi.",
        highlights: [
          "Max score — eng yaxshi bitta lokal tekislash (HSP) ning bit bali",
          "Total score — bitta yozuvdagi barcha HSP lar bit ballari yig‘indisi",
          "Query cover — so‘rov ketma-ketligining tekislanish bilan qamrab olingan foizi",
        ],
      },
      {
        heading: "4.2. E-qiymat va statistik ishonchlilik chegaralari",
        content:
          "E-qiymat (Expect value) berilgan o‘lchamdagi ma’lumotlar bazasida shu yoki undan yuqori balli moslik tasodifan necha marta uchrashi mumkinligini ko‘rsatadi. Bazaning hajmi ortgani sari ayni bir bit ball uchun E-qiymat ham proporsional oshadi.",
        highlights: [
          "E < 10⁻⁵⁰ — deyarli aniq gomolog yoki bir xil gen",
          "10⁻⁵⁰ < E < 10⁻⁵ — ishonchli gomologik o‘xshashlik",
          "10⁻⁵ < E < 10⁻² — «kulrang zona» (qo‘shimcha domen va struktura tekshiruvi zarur)",
          "E > 0,05 — ko‘pincha statistik ishonchsiz tasodifiy moslik",
        ],
      },
      {
        heading: "4.3. DNK-shtrixkodlash (16S rRNK va COI) tamoyili",
        content:
          "Noma’lum namunaning turini aniqlashda bakteriyalar uchun 16S rRNK geni (odatda ≥97 % jins/tur chegarasi, ≥98,7 % tur darajasi), hayvonlar uchun esa mitoxondrial sitoxrom c oksidaza I (COI) geni (NCBI BLAST va BOLD Systems bazalari) standart shtrixkod sifatida ishlatiladi.",
        highlights: [
          "Yuqori Per. Ident (masalan, 100 %) lekin juda past Query cover (masalan, 8 %) tur identifikatsiyasi uchun yetarli emas",
          "Taxonomy report orqali eng yuqori natijalarning bitta tur yoki jinsga jamlanishi tekshiriladi",
          "Kerakli vositalar: NCBI BLAST (blastn, blastp, blastx), BOLD Systems, MS Excel",
        ],
      },
    ],
    comparisonTable: {
      title: "BLAST statistik ko‘rsatkichlarini amaliy baholash mezonlari",
      columns: ["Ko‘rsatkich", "Yuqori ishonchlilik", "Ehtiyot bo‘lish kerak", "Izoh"],
      rows: [
        [
          "E-qiymat",
          "< 10⁻⁵⁰ (yoki < 10⁻⁵)",
          "> 10⁻²",
          "Tasodifiy moslik ehtimoli; baza hajmiga bog‘liq",
        ],
        [
          "Query cover",
          "80 % – 100 %",
          "< 30 %",
          "Faqat qisqa qism mos kelsa, lokal domen bo‘lishi mumkin",
        ],
        [
          "Per. Ident",
          "≥ 97–99 % (shtrixkodda)",
          "< 30 % (oqsil: twilight zone)",
          "Bir xil pozitsiyalar ulushi",
        ],
        [
          "Total vs Max score",
          "Total = Max (1 ta HSP)",
          "Total >> Max",
          "Bir nechta ekzon yoki takroriy domen mavjudligini bildiradi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Graphic Summary",
        definition: "BLAST mosliklarining so‘rov ketma-ketligi bo‘ylab rangli grafik ko‘rinishi.",
      },
      {
        term: "Max score",
        definition: "Eng yuqori ball olgan bitta lokal tekislanish (HSP) ning bit bali.",
      },
      {
        term: "Total score",
        definition: "Bitta bazaviy ketma-ketlik bo‘yicha topilgan barcha HSP ballari yig‘indisi.",
      },
      {
        term: "Query cover",
        definition: "So‘rov ketma-ketligining tekislanishga kirgan qismi foiz ulushi.",
      },
      {
        term: "Per. Ident",
        definition: "Tekislangan pozitsiyalardagi aynan bir xil belgilar foizi.",
      },
      {
        term: "DNK-shtrixkodlash",
        definition:
          "Standart marker genlar (16S rRNK, COI, ITS) ketma-ketligi bo‘yicha turni aniqlash usuli.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Per. Ident = 100 % va Query cover = 12 % bo‘lgan BLAST natijasiga qanday baho berasiz?",
        answer:
          "Bu to‘liq gen mosligi emas; so‘rovning faqat juda qisqa uchastkasi (masalan, kichik konservativ motiv yoki praymer qismi) mos kelgan, shuning uchun turni aniqlashga yetarli emas.",
      },
      {
        question: "Bit ball 10 birlikka oshganda E-qiymat taxminan necha marta o‘zgaradi?",
        answer:
          "E = m·n·2^(−S′) bo‘lgani uchun bit ball 10 ga oshganda E-qiymat 2¹⁰ = 1024 (taxminan 1000) marta kamayadi.",
      },
      {
        question:
          "Bakteriyalar va hayvonlar uchun DNK-shtrixkodlashda qaysi marker genlar qo‘llaniladi?",
        answer:
          "Bakteriyalar uchun 16S rRNK geni, hayvonlar uchun mitoxondrial COI (sitoxrom c oksidaza I) geni qo‘llaniladi.",
      },
    ],
    keyTerms: [
      "graphic summary",
      "max score",
      "total score",
      "query cover",
      "per. ident",
      "dnk-shtrixkodlash",
      "16s rrnk",
      "coi",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 4-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/14-4_amaliy_mashgulot_berilgan_biologik_ketma_ket_2d4e92ad.pdf",
    pdfTitle: "4-amaliy mashg‘ulot — BLAST-qidiruv natijalarini amaliy tahlil qilish",
    pdfDocuments: [
      {
        title: "4-amaliy mashg‘ulot — BLAST-qidiruv natijalarini amaliy tahlil qilish",
        url: "/assets/aistudio/14-4_amaliy_mashgulot_berilgan_biologik_ketma_ket_2d4e92ad.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
  {
    id: "bioinf-amaliy-5",
    order: 5,
    code: "A05",
    category: "amaliy",
    topicLabel: "5-amaliy mashg‘ulot",
    module: "I qism: Axborot nazariyasi, bazalar va ketma-ketliklarni tekislash",
    title: "Ketma-ketliklarning ko‘p martali tekislanishi natijalarini tahlil qilish va sharhlash",
    syllabusPoints: [
      "Clustal formatidagi ko‘p martali tekislashni o‘qish va konservativlik belgilarini (*, :, .) sharhlash",
      "Tekislash ustunlari bo‘yicha konsensus ketma-ketlikni tuzish va polimorf/parsimon-informativ saytlarni ajratish",
      "Ketma-ketliklar juftlari uchun juft o‘xshashlik matritsasini (pairwise identity matrix) hisoblash",
      "Jalview va Clustal Omega yordamida tekislash sifatini hamda funksional muhim motivlarni baholash",
    ],
    studyNotes:
      "Clustal tekislashida «*» — to‘liq konservativ ustun, «:» — kuchli o‘xshash aminokislotalar guruhi (masalan, Leu↔Ile, Asp↔Glu), «.» — kuchsiz o‘xshash guruhni bildiradi. Konservativ sohalar odatda ferment faol markazi, ligand bog‘lanish joyi yoki disulfid bog‘ hosil qiluvchi sisteinlarga to‘g‘ri keladi.",
    overview:
      "5-amaliy mashg‘ulot ko‘p martali tekislash (MSA) natijalarini har tomonlama tahlil qilish: konservativ va o‘zgaruvchan ustunlarni farqlash, konsensus ketma-ketlik va juft o‘xshashlik matritsasini hisoblash hamda tekislashning biologik ahamiyatini sharhlashga bag‘ishlangan.",
    sections: [
      {
        heading: "5.1. Clustal konservativlik belgilari va o‘xshashlik guruhlari",
        content:
          "Clustal Omega kabi MSA dasturlari tekislangan ustunlar ostiga konservativlik satrini chiqaradi. Oqsil tekislashlarida kimyoviy xossalari yaqin aminokislotalar (masalan, gidrofob MILV, kislotali DE, asosli KR) o‘zaro almashinganda funksional xossa ko‘pincha saqlanib qoladi.",
        highlights: [
          "«*» (yulduzcha) — barcha ketma-ketliklarda 100 % aynan bir xil qoldiq",
          "«:» (ikki nuqta) — kuchli o‘xshash guruh ichidagi konservativ almashinuv (STA, NEQK, MILV, FYW)",
          "«.» (nuqta) — kuchsiz o‘xshash xossali almashinuv",
          "« » (bo‘sh joy) — nomos yoki bo‘shliq (indel) mavjud bo‘lgan o‘zgaruvchan pozitsiya",
        ],
      },
      {
        heading: "5.2. Konsensus ketma-ketlik, polimorf va parsimon-informativ saytlar",
        content:
          "Konsensus ketma-ketlik har bir ustunda eng ko‘p uchragan belgini (ko‘pchilik qoidasi bo‘yicha) aks ettiradi. Evolyutsion tahlilda kamida ikki xil holatga ega ustun polimorf sayt, kamida ikki xil belgining har biri kamida ikkita ketma-ketlikda uchragan ustun esa parsimon-informativ sayt deb ataladi.",
        highlights: [
          "Sinonim almashinuv — kodon o‘zgarsa-da kodlanadigan aminokislota o‘zgarmay qolishi",
          "Juft o‘xshashlik (%) = (bir xil pozitsiyalar soni / solishtirilgan uzunlik) × 100 %",
          "Ustun entropiyasi past bo‘lgan qismlarda tozalovchi (purifying) tanlanish bosimi kuchli bo‘ladi",
        ],
      },
      {
        heading: "5.3. Funksional motivlar va Jalview da vizual tahlil",
        content:
          "Jalview muharriri MSA natijalarini rang sxemalari (ClustalX, Hydrophobicity, Percentage Identity), konservativlik gistogrammasi va konsensus logosi bilan ko‘rsatib, noto‘g‘ri tekislangan uchlarni kesish va faol markaz motivlarini aniqlashga yordam beradi.",
        highlights: [
          "Konservativ uchastkalar: ferment faol markazi, ligand/kofaktor bog‘lanish joyi, disulfid bog‘li sisteinlar",
          "Yuqori o‘zgaruvchan va indellarga boy sohalar ko‘pincha oqsil yuzasidagi halqalarga (loops) to‘g‘ri keladi",
          "Kerakli vositalar: Jalview, MView, Clustal Omega, MS Excel",
        ],
      },
    ],
    comparisonTable: {
      title: "Clustal MSA belgilari va ustun toifalarining tavsifi",
      columns: [
        "Belgi / Tushuncha",
        "Ma’nosi",
        "Evolyutsion bosim",
        "Strukturaviy-funksional o‘rni",
      ],
      rows: [
        [
          "*",
          "To‘liq konservativ ustun",
          "Juda kuchli tozalovchi tanlanish",
          "Faol markaz, katalitik qoldiqlar",
        ],
        [":", "Kuchli o‘xshash guruh", "Yuqori cheklov", "Gidrofob yadro yoki zaryadli ko‘priklar"],
        [".", "Kuchsiz o‘xshash guruh", "O‘rtacha cheklov", "Yordamchi strukturaviy qismlar"],
        [
          "– (indel)",
          "Bo‘shliq (insersiya/delesiya)",
          "Past cheklov",
          "Ko‘pincha tashqi halqalar (loops)",
        ],
        [
          "Parsimon-informativ",
          "Kamida 2 belgi ≥2 martadan",
          "Filogenetik signal",
          "Shoxlanish tartibini aniqlashda foydali",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Konsensus ketma-ketlik",
        definition:
          "Tekislashning har bir ustunida eng ko‘p uchraydigan belgilardan tuzilgan umumlashma ketma-ketlik.",
      },
      {
        term: "Konservativ ustun",
        definition:
          "Evolyutsiya davomida o‘zgarmagan yoki kimyoviy yaqin qoldiqlar saqlangan pozitsiya.",
      },
      {
        term: "Polimorf sayt",
        definition:
          "Tekislangan ketma-ketliklarda bir nechta turli belgi uchraydigan o‘zgaruvchan ustun.",
      },
      {
        term: "Parsimon-informativ sayt",
        definition:
          "Kamida ikki xil holatning har biri kamida ikkita taksonda uchraydigan pozitsiya.",
      },
      {
        term: "Jalview",
        definition:
          "Ko‘p martali tekislashlarni vizual ko‘rish, tahrirlash va tahlil qilish dasturi.",
      },
      {
        term: "Motiv",
        definition:
          "Muayyan biologik funksiya bilan bog‘liq qisqa konservativ ketma-ketlik namunasi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Agar 30 pozitsiyali tekislashda Tur-1 va Tur-5 ketma-ketliklari 6 pozitsiyada farq qilsa, juft o‘xshashlik necha foiz?",
        answer:
          "Bir xil pozitsiyalar 30 − 6 = 24 ta. Juft o‘xshashlik = (24 / 30) × 100 % = 80 % ga teng.",
      },
      {
        question: "Clustal formatida «:» va «.» belgilari nimasi bilan farq qiladi?",
        answer:
          "«:» kuchli fizik-kimyoviy o‘xshash guruhlar ichidagi konservativ almashinuvlarni (masalan, Leu↔Ile), «.» esa kuchsizroq o‘xshashlikka ega almashinuvlarni bildiradi.",
      },
      {
        question: "Nima uchun konservativ sohalar odatda funksional jihatdan muhim bo‘ladi?",
        answer:
          "Chunki faol markaz yoki muhim strukturaviy elementdagi mutatsiyalar oqsil funksiyasini buzadi va tabiiy tanlanish (tozalovchi tanlanish) tomonidan bartaraf etiladi.",
      },
    ],
    keyTerms: [
      "konsensus ketma-ketlik",
      "konservativ ustun",
      "polimorf sayt",
      "parsimon-informativ sayt",
      "sinonim almashinuv",
      "jalview",
      "juft o‘xshashlik",
      "motiv",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 5-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/15-5_amaliy_mashgulot_ketma_ketliklarning_kop_mar_73468159.pdf",
    pdfTitle:
      "5-amaliy mashg‘ulot — Ko‘p martali tekislash natijalarini tahlil qilish va sharhlash",
    pdfDocuments: [
      {
        title:
          "5-amaliy mashg‘ulot — Ko‘p martali tekislash natijalarini tahlil qilish va sharhlash",
        url: "/assets/aistudio/15-5_amaliy_mashgulot_ketma_ketliklarning_kop_mar_73468159.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
  {
    id: "bioinf-amaliy-6",
    order: 6,
    code: "A06",
    category: "amaliy",
    topicLabel: "6-amaliy mashg‘ulot",
    module: "II qism: Filogenetika, genom tahrirlash va oqsil strukturalari",
    title: "Filogenetik daraxtlarni qurish va tahlil qilishga oid masalalar yechish",
    syllabusPoints: [
      "Filogenetik daraxt elementlari (barg, ichki tugun, shox, ildiz, klad) hamda kladogramma va filogrammani farqlash",
      "n ta takson uchun mumkin bo‘lgan ildizli va ildizsiz binar daraxtlar sonini hisoblash",
      "Masofa matritsasi asosida UPGMA algoritmi bo‘yicha qo‘lda filogenetik daraxt qurish",
      "Juks–Kantor (Jukes–Cantor) evolyutsion masofasini hisoblash va Newick formatida daraxt yozish",
    ],
    studyNotes:
      "n ta takson uchun ildizsiz daraxtlar soni (2n−5)!!, ildizli daraxtlar soni esa (2n−3)!! ga teng. UPGMA algoritmi molekulyar soat gipotezasiga tayanib, har qadamda eng kichik masofali juftni birlashtiradi; Newick formati esa daraxt topologiyasini qavslar yordamida yozadi: masalan, ((A,B),(C,D));.",
    overview:
      "6-amaliy mashg‘ulot filogenetik daraxtlar nazariyasi va hisoblash amaliyotiga bag‘ishlangan: mumkin bo‘lgan daraxtlar sonini baholash, Juks–Kantor tuzatishini qo‘llash, UPGMA klasterlashini qo‘lda bajarish, butstrep qiymatlarini sharhlash hamda Newick formatini o‘qish va yozish.",
    sections: [
      {
        heading: "6.1. Filogenetik daraxt tuzilishi va daraxtlar soni",
        content:
          "Filogenetik daraxt — turlar yoki genlar o‘rtasidagi evolyutsion munosabatlarni ifodalovchi graf. Barglar (terminal tugunlar) mavjud taksonlarni, ichki tugunlar faraziy umumiy ajdodlarni, klad esa bitta ajdod va uning barcha avlodlarini ifodalaydi. Taksonlar soni ortishi bilan mumkin bo‘lgan daraxtlar soni kombinatorik portlash tezligida o‘sadi.",
        highlights: [
          "Ildizsiz binar daraxtlar soni: N_ildizsiz = (2n − 5)!! = 1·3·5·…·(2n − 5)",
          "Ildizli binar daraxtlar soni: N_ildizli = (2n − 3)!! (n = 5 da 15 ta ildizsiz va 105 ta ildizli)",
          "Tashqi guruh (outgroup) ildizsiz daraxtga vaqt yo‘nalishi va ildiz berish uchun qo‘shiladi",
        ],
      },
      {
        heading: "6.2. UPGMA algoritmi va Juks–Kantor masofasi",
        content:
          "UPGMA (Unweighted Pair Group Method with Arithmetic Mean) — har qadamda masofa matritsasidagi eng kichik qiymatga ega ikki klasterni birlashtiruvchi va yangi masofalarni arifmetik o‘rtacha orqali qayta hisoblovchi usul. Ko‘p martali yashirin almashinuvlarni hisobga olish uchun kuzatilgan farq p dan Juks–Kantor masofasi d = −(3/4)·ln(1 − 4p/3) hisoblanadi.",
        highlights: [
          "UPGMA doimiy evolyutsiya tezligi (molekulyar soat) taxminida ultrametrik ildizli daraxt quradi",
          "Evolyutsiya tezligi turlicha bo‘lganda Neighbor-Joining (NJ), Maximum Likelihood (ML) yoki Bayesian usullari afzal",
          "Butstrep (bootstrap) ≥ 70 % shoxlanish ishonchliligini, < 50 % esa zaif qo‘llab-quvvatlashni bildiradi",
        ],
      },
      {
        heading: "6.3. Kladogramma, filogramma va Newick formati",
        content:
          "Kladogramma faqat shoxlanish tartibini (topologiyani), filogramma esa shox uzunliklari orqali evolyutsion o‘zgarishlar miqdorini ham ko‘rsatadi. Kompyuter dasturlarida (MEGA X, iTOL, FigTree) daraxtlar standart Newick matn formatida qavslar va nuqta-vergul (;) bilan saqlanadi.",
        highlights: [
          "Topologik misol: ((A,B),(C,D)); da A va B opa-singil taksonlar, ((A,C),(B,D)); esa boshqa topologiya",
          "Shox uzunliklari ikki nuqta orqali yoziladi: ((A:0.1,B:0.1):0.2,(C:0.15,D:0.15):0.15);",
          "Kerakli vositalar: MEGA X, iTOL (itol.embl.de), FigTree, kalkulyator",
        ],
      },
    ],
    comparisonTable: {
      title: "Filogenetik daraxt turlari va tushunchalari",
      columns: ["Tushuncha", "Asosiy xususiyati", "Qo‘llanilishi / Misol"],
      rows: [
        [
          "Kladogramma",
          "Faqat shoxlanish tartibini ko‘rsatadi",
          "Taksonlar qarindoshlik topologiyasi",
        ],
        [
          "Filogramma",
          "Shox uzunligi mutatsiyalar soniga proporsional",
          "Evolyutsiya tezligini baholash",
        ],
        [
          "Ildizli daraxt",
          "Umumiy ajdod (ildiz) va vaqt o‘qi aniq",
          "Tashqi guruh (outgroup) qo‘shilganda",
        ],
        [
          "UPGMA",
          "O‘rtacha arifmetik klasterlash, molekulyar soat",
          "Masofa matritsasi asosida qo‘lda qurish",
        ],
        ["Newick formati", "Qavslar bilan kodlangan matnli yozuv", "((A,B),(C,D));"],
      ],
    },
    keyConcepts: [
      {
        term: "Filogeniya",
        definition:
          "Organizmlar yoki genlarning evolyutsion kelib chiqishi va qarindoshlik tarixi.",
      },
      {
        term: "Klad",
        definition:
          "Bitta umumiy ajdod va uning barcha avlodlaridan tashkil topgan monofiletik guruh.",
      },
      {
        term: "Tashqi guruh (Outgroup)",
        definition: "Daraxtni ildizlash uchun tahlilga kiritiladigan uzoqroq qarindosh takson.",
      },
      {
        term: "UPGMA",
        definition: "O‘rtacha arifmetik masofaga asoslangan iyerarxik klasterlash algoritmi.",
      },
      {
        term: "Molekulyar soat",
        definition:
          "Evolyutsion almashinuvlar vaqtga proporsional doimiy tezlikda to‘planadi degan gipoteza.",
      },
      {
        term: "Newick formati",
        definition:
          "Filogenetik daraxtlarni qavslar va shox uzunliklari bilan yozishning standart matn formati.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "«Ildizsiz daraxtda chap tomondagi taksonlar eng qadimiy hisoblanadi» degan fikr to‘g‘rimi?",
        answer:
          "Noto‘g‘ri. Ildizsiz daraxtda evolyutsion vaqt yo‘nalishi va umumiy ajdod belgilanmagan; shuningdek, tugunlar atrofida shoxlarni aylantirish topologiyani o‘zgartirmaydi.",
      },
      {
        question: "Butstrep qiymati 45 % bo‘lgan shoxlanish qanday talqin qilinadi?",
        answer:
          "45 % juda past qo‘llab-quvvatlash hisoblanadi (ishonchli chegara odatda ≥70 %); bunday tugun statistik jihatdan ishonchsiz bo‘lib, qo‘shimcha ma’lumot talab qiladi.",
      },
      {
        question:
          "n = 5 ta takson uchun nechta ildizsiz va nechta ildizli binar daraxt qurish mumkin?",
        answer:
          "Ildizsiz daraxtlar: (2·5−5)!! = 5!! = 1·3·5 = 15 ta; ildizli daraxtlar: (2·5−3)!! = 7!! = 1·3·5·7 = 105 ta.",
      },
    ],
    keyTerms: [
      "filogeniya",
      "klad",
      "tashqi guruh",
      "upgma",
      "molekulyar soat",
      "kladogramma",
      "filogramma",
      "newick formati",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 6-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/16-6_amaliy_mashgulot_filogenetik_daraxtlarni_qur_8f251496.pdf",
    pdfTitle: "6-amaliy mashg‘ulot — Filogenetik daraxtlarni qurish va tahlil qilish",
    pdfDocuments: [
      {
        title: "6-amaliy mashg‘ulot — Filogenetik daraxtlarni qurish va tahlil qilish",
        url: "/assets/aistudio/16-6_amaliy_mashgulot_filogenetik_daraxtlarni_qur_8f251496.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
  {
    id: "bioinf-amaliy-7",
    order: 7,
    code: "A07",
    category: "amaliy",
    topicLabel: "7-amaliy mashg‘ulot",
    module: "II qism: Filogenetika, genom tahrirlash va oqsil strukturalari",
    title:
      "CRISPR texnologiyasi bilan genomni tahrirlash keyslarini tahlil qilish: olingan natijalarni tahlil qilish",
    syllabusPoints: [
      "CRISPR-Cas9 tizimi komponentlari (Cas9, sgRNK, protospaser) va PAM ketma-ketligining rolini o‘zlashtirish",
      "Berilgan DNK ketma-ketligida 5′-NGG-3′ PAM va 20 nt protospaser sohalarini hamda DSB kesish nuqtasini aniqlash",
      "NHEJ (nokaut/indellar) va HDR (aniq tahrirlash) tiklanish yo‘llarining natijalarini farqlash",
      "CRISPOR, CHOPCHOP, ICE/TIDE natijalari asosida tahrirlash samaradorligi, indel spektri va off-target xavfini baholash",
    ],
    studyNotes:
      "SpCas9 nukleazasi 5′-NGG-3′ PAM ketma-ketligini taniydi va undan 3 nukleotid yuqorida (5′ tomonda) ikki zanjirli uzilish (DSB) hosil qiladi. NHEJ natijasida 3 ga karrali bo‘lmagan indellar ramka siljishiga (frameshift) olib kelib gen nokautini yaratadi, HDR esa donor matritsa yordamida aniq tuzatish kiritadi.",
    overview:
      "7-amaliy mashg‘ulotda CRISPR-Cas9 tizimi yordamida genom tahrirlashning real ilmiy keyslari tahlil qilinadi: PAM va sgRNK tanlash, NHEJ va HDR oqibatlarini qiyoslash, indel spektridan nokaut ulushini hisoblash hamda off-target ta’sirini kamaytirish mezonlari o‘rganiladi.",
    sections: [
      {
        heading: "7.1. CRISPR-Cas9 tizimi, sgRNK va PAM ketma-ketligi",
        content:
          "CRISPR-Cas9 — prokariotlarning adaptiv immun tizimidan olingan genom tahrirlash texnologiyasi. Streptococcus pyogenes Cas9 (SpCas9) oqsili 20 nukleotidli yo‘naltiruvchi qismga ega sgRNK bilan kompleks hosil qiladi va faqat nishon yonida 5′-NGG-3′ PAM ketma-ketligi mavjud bo‘lgandagina DNK ning ikkala zanjirini PAM dan 3 bp oldin kesadi.",
        highlights: [
          "sgRNK = crRNK (20 nt nishon taniydigan qism) + tracrRNK (Cas9 ga bog‘lanuvchi karkas)",
          "PAM (Protospacer Adjacent Motif) — SpCas9 uchun 5′-NGG-3′; u sgRNK tarkibiga kiritilmaydi",
          "Seed (urug‘) sohasi — PAM ga eng yaqin 8–12 nukleotid; bu yerdagi nomoslik kesishni keskin kamaytiradi",
        ],
      },
      {
        heading: "7.2. DSB tiklanish yo‘llari: NHEJ va HDR",
        content:
          "Cas9 hosil qilgan ikki zanjirli uzilish (DSB) hujayraning ikki asosiy reparatsiya mexanizmi bilan tiklanadi. Gen nokauti uchun odatda NHEJ, aniq nuqtaviy mutatsiyani tuzatish yoki yangi gen kiritish (knock-in) uchun esa donor DNK bilan HDR yo‘li ishlatiladi.",
        highlights: [
          "NHEJ (Non-Homologous End Joining) — yuqori samaradorlik, xatoga moyil; tasodifiy indellar hosil qiladi",
          "3 ga karrali bo‘lmagan indellar (+1, −1, −2, −4 bp) ramka siljishi (frameshift) va muddatidan oldin stop-kodon keltirib chiqaradi",
          "3 ga karrali indellar (−3, +3, −6 bp) o‘qish ramkasini saqlab qoladi (in-frame), shuning uchun gen funksiyasi qisman saqlanishi mumkin",
          "HDR (Homology-Directed Repair) — pastroq samaradorlik (asosan S/G2 fazada), lekin yuqori aniqlik beradi",
        ],
      },
      {
        heading: "7.3. Tahrirlash samaradorligi, ICE/TIDE va off-target tahlili",
        content:
          "Senger sekvenlash xromatogrammalarini ICE yoki TIDE dasturlarida tahlil qilib, tahrirlangan allellar ulushi (indel %) va nokaut samaradorligi (knockout score — frameshift indellar ulushi) hisoblanadi. CRISPOR va CHOPCHOP vositalari sgRNK ning on-target faolligi va off-target xavfini baholaydi.",
        highlights: [
          "Gen nokauti uchun sgRNK odatda erta konstitutiv ekzonlarga (gen boshining birinchi 5–65 % qismiga) yo‘naltiriladi",
          "Off-target xavfini kamaytirish: yuqori o‘ziga xoslik bali, PAM ga yaqin nomosliklar, High-Fidelity Cas9 variantlari",
          "Kerakli vositalar: CRISPOR, CHOPCHOP, TIDE/ICE, MS Excel",
        ],
      },
    ],
    comparisonTable: {
      title: "NHEJ va HDR reparatsiya yo‘llarini taqqoslash",
      columns: ["Mezon", "NHEJ", "HDR"],
      rows: [
        ["Donor DNK matritsasi", "Talab qilinmaydi", "Gomologik yelkali donor DNK zarur"],
        ["Samaradorlik", "Yuqori (ko‘pincha 40–90 %)", "Past/o‘rtacha (odatda 1–20 %)"],
        ["Hujayra sikli fazasi", "Barcha fazalarda faol", "Asosan S va G2 fazalarda faol"],
        ["Natija turi", "Tasodifiy indellar, frameshift", "Aniq nuqtaviy tuzatish yoki knock-in"],
        [
          "Asosiy qo‘llanilishi",
          "Gen nokauti (funksiyani o‘chirish)",
          "Irsiy mutatsiyani tuzatish, teg kiritish",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "CRISPR",
        definition:
          "Prokariotlarning adaptiv immun tizimi va unga asoslangan genom tahrirlash texnologiyasi.",
      },
      {
        term: "Cas9",
        definition:
          "sgRNK yo‘naltirishi bo‘yicha nishon DNK da ikki zanjirli uzilish hosil qiluvchi nukleaza.",
      },
      {
        term: "sgRNK",
        definition: "crRNK va tracrRNK birlashmasidan iborat sun’iy yo‘naltiruvchi RNK.",
      },
      {
        term: "Protospaser",
        definition: "Nishon DNK dagi sgRNK ga komplementar 20 nukleotidli bog‘lanish sohasi.",
      },
      {
        term: "PAM",
        definition:
          "Protospaserga qo‘shni, Cas9 tanishi uchun zarur qisqa motiv (SpCas9 da 5′-NGG-3′).",
      },
      {
        term: "NHEJ / HDR",
        definition:
          "DSB ni tiklashning ikki yo‘li: gomologiyasiz uchlarni ulash (NHEJ) va gomologiyaga yo‘naltirilgan reparatsiya (HDR).",
      },
    ],
    selfCheckQuestions: [
      {
        question: "«Barcha indellar gen funksiyasini yo‘qotadi» degan tasdiq to‘g‘rimi?",
        answer:
          "Noto‘g‘ri. Agar indel uzunligi 3 ga karrali (masalan, −3 bp yoki +6 bp) bo‘lsa, o‘qish ramkasi siljimaydi (in-frame) va faqat 1–2 aminokislota o‘zgarib, oqsil funksiyasi saqlanib qolishi mumkin.",
      },
      {
        question:
          "Nima uchun PAM ga yaqin (seed sohasidagi) nomoslik off-target ta’sirini kuchliroq kamaytiradi?",
        answer:
          "Chunki Cas9-sgRNK kompleksi DNK ni ajratish va R-halqa hosil qilishni aynan PAM yonidagi seed sohasidan boshlaydi; bu yerdagi nomoslik kompleksning barqaror bog‘lanishiga yo‘l qo‘ymaydi.",
      },
      {
        question:
          "Gen nokautini olish uchun sgRNK ni genning qaysi qismiga yo‘naltirish maqsadga muvofiq?",
        answer:
          "Barcha izoformalar uchun umumiy bo‘lgan erta kodlovchi ekzonlarga (lekin muqobil start-kodon xavfi tufayli eng birinchi kodonlardan biroz keyinroq) yo‘naltiriladi.",
      },
    ],
    keyTerms: ["crispr", "cas9", "sgrnk", "protospaser", "pam", "dsb", "nhej", "hdr"],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 7-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/17-7_amaliy_mashgulot_crispr_texnologiyasi_bilan__35546601.pdf",
    pdfTitle:
      "7-amaliy mashg‘ulot — CRISPR texnologiyasi bilan genomni tahrirlash keyslari tahlili",
    pdfDocuments: [
      {
        title:
          "7-amaliy mashg‘ulot — CRISPR texnologiyasi bilan genomni tahrirlash keyslari tahlili",
        url: "/assets/aistudio/17-7_amaliy_mashgulot_crispr_texnologiyasi_bilan__35546601.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
  {
    id: "bioinf-amaliy-8",
    order: 8,
    code: "A08",
    category: "amaliy",
    topicLabel: "8-amaliy mashg‘ulot",
    module: "II qism: Filogenetika, genom tahrirlash va oqsil strukturalari",
    title:
      "PDB oqsil strukturalari ma’lumotlar bazasi bilan amaliy ishlash: fazoviy strukturalarni tahlil qilish",
    syllabusPoints: [
      "RCSB PDB bazasida Advanced Search va mantiqiy filtrlardan (usul, ajratish qobiliyati, organizm) foydalanish",
      "Struktura sifati ko‘rsatkichlarini (ajratish qobiliyati Å, R-work, R-free, B-faktor, Clashscore) taqqoslash",
      "Atomlarning 3D (x, y, z) koordinatalari asosida Evklid masofasini va RMSD qiymatini hisoblash",
      "Ramachandran diagrammasi (φ va ψ dihedral burchaklari) hamda PDBsum xulosalarini sharhlash",
    ],
    studyNotes:
      "Rentgen kristallografiyasida ajratish qobiliyati qanchalik kichik (masalan, < 2,0 Å) va R-free qanchalik past (< 0,25) bo‘lsa, oqsil 3D modeli shunchalik aniq hisoblanadi. Atomlar orasidagi masofa d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²] formula bilan topiladi; Ramachandran diagrammasida esa qoldiqlarning >95 % ruxsat etilgan sohalarda joylashishi lozim.",
    overview:
      "8-amaliy mashg‘ulotda RCSB PDB va PDBsum bazalarida kengaytirilgan qidiruv o‘tkazish, 3D struktura sifatini baholash mezonlarini solishtirish, atomlar orasidagi masofa va RMSD ni hisoblash hamda Ramachandran diagrammasini tahlil qilish masalalari yechiladi.",
    sections: [
      {
        heading: "8.1. RCSB PDB Advanced Search va struktura sifati ko‘rsatkichlari",
        content:
          "RCSB PDB Advanced Search mantiqiy operatorlar (AND, OR, NOT) orqali polimer turi, eksperimental usul (X-ray, Cryo-EM, NMR), ajratish qobiliyati va ligand mavjudligi bo‘yicha aniq tanlash imkonini beradi. Model sifati bir nechta mustaqil ko‘rsatkichlar yig‘indisi orqali baholanadi.",
        highlights: [
          "Ajratish qobiliyati (Resolution): < 1,5 Å — juda yuqori aniqlik; 1,5–2,5 Å — yaxshi; > 3,5 Å — past aniqlik",
          "R-free — modelni tekshirish to‘plamiga mosligi; R-work dan biroz yuqori bo‘ladi (farq > 0,05–0,07 ortiqcha moslashtirish belgisi)",
          "B-faktor (harorat faktori) — atomning kristalldagi issiqlik tebranishi va harakatchanligi o‘lchovi",
        ],
      },
      {
        heading: "8.2. 3D koordinatalar, atomlararo masofa va RMSD",
        content:
          "PDB faylidagi ATOM qatorlari har bir atomning fazodagi x, y, z koordinatalarini angstremlarda (Å) saqlaydi. Ikki atom orasidagi masofa orqali vodorod bog‘i (~2,5–3,5 Å), tuz ko‘prigi (< 4,0 Å) yoki disulfid bog‘i (S–S ≈ 2,05 Å) mavjudligi tekshiriladi. RMSD esa ikki ustma-ust qo‘yilgan struktura orasidagi o‘rtacha kvadratik og‘ishni o‘lchaydi.",
        highlights: [
          "Evklid masofasi: d = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²] (Å)",
          "RMSD < 1,0 Å — deyarli bir xil fazoviy konformatsiya; 1–2 Å — juda yaqin strukturalar",
          "Clashscore — 1000 atomga to‘g‘ri keluvchi sterik to‘qnashuvlar soni (kichik qiymat yaxshi)",
        ],
      },
      {
        heading: "8.3. Ramachandran diagrammasi va PDBsum tahlili",
        content:
          "Polipeptid zanjirining fazoviy bukilishi N–Cα (φ — fi) va Cα–C (ψ — psi) dihedral burchaklari bilan belgilanadi. Sterik to‘siqlar tufayli barcha juftliklar emas, faqat α-spiral va β-qatlamga mos ma’lum sohalargina qulay hisoblanadi; istisno sifatida glitsin (yon zanjiri −H) kengroq burchaklarni egallay oladi.",
        highlights: [
          "O‘ng aylanuvchi α-spiral: taxminan φ ≈ −60°, ψ ≈ −45°",
          "Antiparallel/parallel β-qatlam: taxminan φ ≈ −120°…−140°, ψ ≈ +115°…+135°",
          "Kerakli vositalar: RCSB PDB (rcsb.org), PDBsum (ebi.ac.uk/pdbsum), Mol* / ChimeraX, MS Excel",
        ],
      },
    ],
    comparisonTable: {
      title: "PDB oqsil strukturasi sifat ko‘rsatkichlari",
      columns: ["Ko‘rsatkich", "Yaxshi qiymat", "Muammoli belgi", "Nimani o‘lchaydi"],
      rows: [
        ["Resolution (Å)", "< 2,0 Å", "> 3,5 Å", "Elektron zichlik xaritasining tafsilot darajasi"],
        [
          "R-free",
          "< 0,22 – 0,25",
          "> 0,30",
          "Modelning mustaqil eksperimental ma’lumotlarga mosligi",
        ],
        ["B-faktor (Å²)", "10 – 40 Å²", "> 80–100 Å²", "Atomlarning harakatchanligi va noaniqligi"],
        ["Clashscore", "< 5", "> 20", "Atomlarning fizik mumkin bo‘lmagan ustma-ust kirishishi"],
        [
          "Ramachandran outliers",
          "< 0,5 – 1 %",
          "> 5 %",
          "Sterik noqulay (φ, ψ) burchakli qoldiqlar ulushi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Ajratish qobiliyati (Resolution)",
        definition:
          "Eksperimental strukturada alohida atomlarni farqlash aniqligi (angstremlarda, Å).",
      },
      {
        term: "R-free",
        definition:
          "Modelni qurishda ishlatilmagan refleksiyalar bo‘yicha hisoblanadigan xolis sifat ko‘rsatkichi.",
      },
      {
        term: "B-faktor",
        definition:
          "Atomning muvozanat holati atrofidagi issiqlik tebranishi va tartibsizligi ko‘rsatkichi.",
      },
      {
        term: "Dihedral burchak (φ va ψ)",
        definition:
          "Polipeptid asosiy zanjirining N–Cα (φ) va Cα–C (ψ) bog‘lari atrofidagi aylanish burchaklari.",
      },
      {
        term: "Clashscore",
        definition: "Strukturadagi atomlarning sterik jihatdan o‘zaro kirishib ketish chastotasi.",
      },
      {
        term: "PDBsum",
        definition:
          "PDB oqsil strukturalarining grafik xulosalari va Ramachandran tahlilini beruvchi resurs.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "1,6 Å va 3,2 Å ajratish qobiliyatiga ega ikki kristall strukturadan qaysi biri aniqroq?",
        answer:
          "1,6 Å strukturasi ancha aniqroq, chunki ajratish qobiliyati qiymati qanchalik kichik bo‘lsa, atomlar va yon zanjirlar shunchalik ravshan ko‘rinadi.",
      },
      {
        question:
          "Ramachandran diagrammasida nima uchun glitsin boshqa aminokislotalar kira olmaydigan sohalarda ham uchraydi?",
        answer:
          "Chunki glitsinning yon zanjiri faqat bitta vodorod atomidan iborat bo‘lib, sterik to‘siq eng kichik darajada bo‘ladi.",
      },
      {
        question: "Ikki oqsil modelini solishtirganda RMSD = 0,6 Å natija nimani bildiradi?",
        answer:
          "Bu ikki strukturaning fazoviy bukilishi deyarli bir xil (juda yuqori strukturaviy o‘xshashlik) ekanligini ko‘rsatadi.",
      },
    ],
    keyTerms: [
      "advanced search",
      "ajratish qobiliyati",
      "r-free",
      "b-faktor",
      "dihedral burchak",
      "φ (fi) va ψ (psi)",
      "clashscore",
      "pdbsum",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 8-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/18-8_amaliy_mashgulot_pdb_oqsil_strukturalari_mal_639b5550.pdf",
    pdfTitle: "8-amaliy mashg‘ulot — PDB oqsil strukturalari bazasi bilan amaliy ishlash",
    pdfDocuments: [
      {
        title: "8-amaliy mashg‘ulot — PDB oqsil strukturalari bazasi bilan amaliy ishlash",
        url: "/assets/aistudio/18-8_amaliy_mashgulot_pdb_oqsil_strukturalari_mal_639b5550.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
  {
    id: "bioinf-amaliy-9",
    order: 9,
    code: "A09",
    category: "amaliy",
    topicLabel: "9-amaliy mashg‘ulot",
    module: "II qism: Filogenetika, genom tahrirlash va oqsil strukturalari",
    title:
      "Gidrofoblik profillarini tahlil qilish va oqsil strukturasini bashorat qilishga oid masalalar yechish",
    syllabusPoints: [
      "Aminokislotalarning Kayt–Dulitl (Kyte–Doolittle) gidropatiya shkalasi va siljuvchi oyna usulini o‘zlashtirish",
      "Berilgan peptid ketma-ketligi uchun gidropatiya profilini qo‘lda va ProtScale orqali hisoblash",
      "Gidrofoblik cho‘qqilari asosida transmembrana segmentlari va signal peptidni farqlash",
      "GRAVY indeksini hisoblash hamda DeepTMHMM va PSIPRED ikkilamchi struktura bashoratlarini sharhlash",
    ],
    studyNotes:
      "Kayt–Dulitl shkalasida izoleysin (+4,5) eng gidrofob, arginin (−4,5) esa eng gidrofil aminokislotadir. 19–21 qoldiqli siljuvchi oynada o‘rtacha gidropatiya > +1,6 ga yetadigan cho‘qqilar ko‘pincha transmembrana α-spiralini ko‘rsatadi; musbat GRAVY gidrofob (membrana) oqsilga, manfiy GRAVY esa suvda eruvchi globulyar oqsilga xosdir.",
    overview:
      "9-amaliy mashg‘ulotda aminokislotalarning gidrofoblik xossalaridan foydalanib siljuvchi oyna usulida gidropatiya profilini qurish, GRAVY indeksini hisoblash, membrana kesib o‘tuvchi segmentlarni aniqlash hamda ikkilamchi strukturani bashorat qilish natijalarini tahlil qilish ko‘nikmalari egallanadi.",
    sections: [
      {
        heading: "9.1. Kayt–Dulitl shkalasi va siljuvchi oyna (Sliding Window) usuli",
        content:
          "J. Kayt va R. Dulitl (1982) har bir aminokislotaga gidrofoblik qiymatini belgilagan (+4,5 dan −4,5 gacha). Ketma-ketlik bo‘ylab toq uzunlikdagi oyna (masalan, w = 5, 7, 9 yuzaki sohalar uchun; w = 19 yoki 21 transmembrana spirallari uchun) bir qoldiqdan siljitilib, oynadagi qiymatlarning o‘rtachasi markaziy pozitsiyaga yoziladi.",
        highlights: [
          "Eng gidrofob qoldiqlar: Ile (+4,5), Val (+4,2), Leu (+3,8), Phe (+2,8), Cys (+2,5), Met (+1,9), Ala (+1,8)",
          "Eng gidrofil (zaryadli) qoldiqlar: Arg (−4,5), Lys (−3,9), Asp/Glu/Asn/Gln (−3,5)",
          "Oyna uzunligi kichik (5–9) bo‘lganda oqsil yuzasidagi gidrofil cho‘qqilar (antigen determinantlar) yaqqol ko‘rinadi",
        ],
      },
      {
        heading: "9.2. Transmembrana segmentlar, signal peptid va GRAVY indeksi",
        content:
          "Biologik membrananing gidrofob lipid qavatini (~30 Å) kesib o‘tish uchun taxminan 19–23 ta gidrofob aminokislotadan iborat α-spiral zarur. GRAVY (Grand Average of Hydropathy) — butun oqsil bo‘ylab barcha qoldiqlar gidropatiya qiymatlarining arifmetik o‘rtachasidir.",
        highlights: [
          "19 qoldiqli oynada o‘rtacha qiymat > +1,6 bo‘lgan keng cho‘qqi — transmembrana segment ehtimoli yuqori",
          "N-uchidagi (dastlabki 15–30 qoldiq) gidrofob cho‘qqi signal peptid bo‘lishi mumkin — DeepTMHMM/Phobius ularni ajratadi",
          "GRAVY > 0 — umumiy gidrofob oqsil; GRAVY < 0 — umumiy gidrofil, suvda eruvchi oqsil",
        ],
      },
      {
        heading: "9.3. Ikkilamchi strukturani bashorat qilish (PSIPRED)",
        content:
          "Zamonaviy dasturlar (PSIPRED) evolyutsion profil (PSI-BLAST PSSM) va neyron tarmoqlar yordamida har bir aminokislota qoldig‘ining α-spiral (H), β-zanjir (E) yoki tasodifiy halqa (C) holatida bo‘lish ehtimolini ~80–84 % aniqlik bilan bashorat qiladi.",
        highlights: [
          "Prolin (P) va glitsin (G) ko‘pincha α-spirallarni buzuvchi (helix breakers) qoldiqlar sifatida uchraydi",
          "ExPASy ProtScale — turli shkalalar bo‘yicha onlayn profil chizish vositasi",
          "Kerakli vositalar: ExPASy ProtScale, DeepTMHMM / Phobius, PSIPRED, MS Excel",
        ],
      },
    ],
    comparisonTable: {
      title: "Gidrofoblik va struktura bashorat vositalari hamda mezonlari",
      columns: ["Parametr / Vosita", "Ishlash tamoyili", "Asosiy ko‘rsatkich", "Amaliy xulosa"],
      rows: [
        [
          "Kayt–Dulitl (w = 7–9)",
          "Qisqa siljuvchi oyna",
          "Manfiy cho‘qqilar",
          "Oqsil yuzasidagi gidrofil va epitop sohalar",
        ],
        [
          "Kayt–Dulitl (w = 19–21)",
          "Uzun siljuvchi oyna",
          "O‘rtacha > +1,6",
          "Transmembrana α-spiral segmentlari",
        ],
        ["GRAVY indeksi", "Σ Hᵢ / L", "> 0 yoki < 0", "Oqsilning umumiy gidrofob/gidrofil tabiati"],
        [
          "DeepTMHMM / Phobius",
          "Chuqur o‘rganish / HMM",
          "TM va SP ehtimoli",
          "Signal peptidni TM spiralidan aniq farqlash",
        ],
        [
          "PSIPRED",
          "PSI-BLAST + neyron tarmoq",
          "H (spiral), E (β), C (halqa)",
          "Ikkilamchi struktura va ishonchlilik (Conf) bahosi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Gidropatiya",
        definition:
          "Aminokislota yon zanjirining suv bilan (gidrofil) yoki lipid muhit bilan (gidrofob) ta’sirlashish moyilligi.",
      },
      {
        term: "Kayt–Dulitl shkalasi",
        definition:
          "Aminokislotalarning +4,5 (Ile) dan −4,5 (Arg) gacha gidrofoblik qiymatlari jadvali.",
      },
      {
        term: "Siljuvchi oyna",
        definition:
          "Ketma-ketlik bo‘ylab ko‘chib yurib mahalliy o‘rtacha qiymat hisoblovchi qat’iy uzunlikdagi oraliq.",
      },
      {
        term: "GRAVY",
        definition:
          "Oqsil ketma-ketligidagi barcha aminokislotalar gidropatiya qiymatlarining umumiy o‘rtachasi.",
      },
      {
        term: "Transmembrana segment",
        definition: "Lipid qo‘shqavatini kesib o‘tuvchi, odatda 19–23 qoldiqli gidrofob α-spiral.",
      },
      {
        term: "Signal peptid",
        definition:
          "Oqsilni sekretor yo‘l yoki organellaga yo‘naltiruvchi N-terminal gidrofob ketma-ketlik.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Transmembrana segmentini topishda nima uchun oyna uzunligi 19–21 qoldiq qilib olinadi?",
        answer:
          "Chunki lipid qo‘shqavatining gidrofob qismi qalinligi ~30 Å bo‘lib, uni α-spiral shaklida kesib o‘tish uchun aynan 19–23 ta aminokislota talab etiladi.",
      },
      {
        question: "GRAVY indeksi −0,65 bo‘lgan oqsil haqida qanday xulosa chiqarish mumkin?",
        answer:
          "Manfiy GRAVY qiymati oqsilda gidrofil aminokislotalar ustunligini va uning katta ehtimol bilan suvda yaxshi eruvchi (sitoplazmatik yoki sekretor) globulyar oqsil ekanligini ko‘rsatadi.",
      },
      {
        question: "N-uchidagi gidrofob cho‘qqi har doim transmembrana segmentini bildiradimi?",
        answer:
          "Yo‘q, oqsilning N-uchidagi (dastlabki 15–30 qoldiq) gidrofob cho‘qqi ko‘pincha kesilib ketuvchi signal peptid bo‘ladi; uni TM segmentdan farqlash uchun DeepTMHMM yoki Phobius ishlatiladi.",
      },
    ],
    keyTerms: [
      "gidropatiya",
      "kayt–dulitl shkalasi",
      "siljuvchi oyna",
      "gravy",
      "transmembrana segment",
      "protscale",
      "psipred",
      "signal peptid",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 9-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/19-9_amaliy_mashgulot_gidrofoblik_profillarini_ta_e86255f8.pdf",
    pdfTitle:
      "9-amaliy mashg‘ulot — Gidrofoblik profillarini tahlil qilish va oqsil strukturasini bashorat qilish",
    pdfDocuments: [
      {
        title:
          "9-amaliy mashg‘ulot — Gidrofoblik profillarini tahlil qilish va oqsil strukturasini bashorat qilish",
        url: "/assets/aistudio/19-9_amaliy_mashgulot_gidrofoblik_profillarini_ta_e86255f8.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
  {
    id: "bioinf-amaliy-10",
    order: 10,
    code: "A10",
    category: "amaliy",
    topicLabel: "10-amaliy mashg‘ulot",
    module: "II qism: Filogenetika, genom tahrirlash va oqsil strukturalari",
    title:
      "TALEN texnologiyasini qo‘llash keyslarini tahlil qilish va transkripsiya jarayonini bioinformatika vositalari bilan tahlil qilish",
    syllabusPoints: [
      "TALE oqsilining 33–35 aminokislotali takrorlari va RVD kodi (NI→A, HD→C, NG→T, NN/NH→G) ni o‘zlashtirish",
      "Berilgan DNK ketma-ketligi uchun RVD kodini yozish hamda FokI dimerizatsiyasi uchun spaser oralig‘ini tahlil qilish",
      "TALEN va CRISPR-Cas9 genom tahrirlash texnologiyalarini aniqlik, murakkablik va qo‘llanish sohasi bo‘yicha qiyoslash",
      "EPD, JASPAR va UCSC Genome Browser yordamida promotor, TATA-boks, TSS (+1) va poli(A) signalini aniqlash",
    ],
    studyNotes:
      "TALEN — TALE DNK bog‘lovchi domeni (12–13-pozitsiyadagi RVD juftligi har bir nukleotidni taniydi: NI=A, HD=C, NG=T, NN/NH=G) va FokI nukleazasidan iborat sun’iy nukleaza. FokI faqat dimer holatida faol bo‘lgani uchun TALEN juftligi 12–20 bp spaser oralig‘i bilan qarama-qarshi zanjirlarga bog‘lanadi; transkripsiya tahlilida esa TATA-boks TSS (+1) dan 25–30 bp oldin joylashadi.",
    overview:
      "10-amaliy mashg‘ulotda TALEN genom tahrirlash texnologiyasining RVD kodi va loyihalash mantiqi, uni CRISPR bilan qiyoslash hamda eukariot genlarining promotor va transkripsiya tartibga soluvchi elementlarini (TATA-boks, TSS, TFBS, poli(A)) bioinformatika bazalarida aniqlash amaliyoti bajariladi.",
    sections: [
      {
        heading: "10.1. TALE takrorlari, RVD kodi va TALEN juftligi tuzilishi",
        content:
          "TALE (Transcription Activator-Like Effector) oqsillari Xanthomonas bakteriyalaridan olingan bo‘lib, har biri bitta nukleotidni taniydigan 33–35 aminokislotali takrorlardan tuzilgan. Tanish o‘ziga xosligini 12- va 13-pozitsiyalardagi RVD (Repeat Variable Diresidue) aminokislota juftligi belgilaydi.",
        highlights: [
          "Asosiy RVD kodi: NI → A (adenin), HD → C (sitozin), NG → T (timin), NN → G/A (NH → faqat G)",
          "5′-uch qoidasi: har bir TALEN bog‘lanish sohasi oldidan odatda T (timin) nukleotidi bo‘lishi talab etiladi",
          "FokI endonukleazasi faqat dimer holatida kesadi, shuning uchun chap va o‘ng TALEN juftligi 12–20 bp spaser bilan joylashtiriladi",
        ],
      },
      {
        heading: "10.2. TALEN va CRISPR texnologiyalarini taqqoslash",
        content:
          "TALEN oqsil–DNK tanishiga, CRISPR-Cas9 esa RNK–DNK komplementarligiga tayanadi. TALEN ni har bir yangi nishon uchun qayta klonlash murakkabroq bo‘lsa-da, u PAM chekloviga bog‘liq emas va dimerizatsiya talabi tufayli yuqori o‘ziga xoslik (past off-target) ko‘rsatishi mumkin.",
        highlights: [
          "CRISPR afzalligi: arzon, tez loyihalanadi, bir vaqtda bir nechta genni tahrirlash (multiplexing) oson",
          "TALEN afzalligi: PAM talab etilmaydi, mitoxondrial DNK tahrirlashda (mitoTALEN) qo‘llash mumkin",
          "Loyihalash vositalari: TALE-NT, Mojo Hand",
        ],
      },
      {
        heading: "10.3. Transkripsiya elementlarini bioinformatika vositalari bilan tahlil qilish",
        content:
          "Eukariot gen ekspressiyasini tahlil qilishda yadro promotori elementlari (TATA-boks — TSS dan −25…−30 bp oldin, Inr tashabbuskori +1 da, CAAT-boks va GC-boks), transkripsiya omillari bog‘lanish saytlari (JASPAR PWM matritsalari) va 3′-uchdagi poliadenillanish signali (AAUAAA) aniqlanadi.",
        highlights: [
          "EPD (Eukaryotic Promoter Database) — eksperimental tasdiqlangan TSS va promotor koordinatalari",
          "JASPAR — transkripsiya omillarining pozitsion og‘irlik matritsalari (PWM) va Sequence logolari",
          "UCSC Genome Browser — promotor, H3K4me3/H3K27ac epigenetik belgilar va RNK-seq qatlamlarini birgalikda ko‘rish",
        ],
      },
    ],
    comparisonTable: {
      title: "TALEN va CRISPR-Cas9 tizimlarining qiyosiy jadvali",
      columns: ["Mezon", "TALEN", "CRISPR-Cas9"],
      rows: [
        [
          "DNK tanish mexanizmi",
          "Oqsil–DNK (TALE RVD takrorlari)",
          "RNK–DNK (20 nt sgRNK komplementarligi)",
        ],
        ["Majburiy motiv", "5′-T (nishon boshida)", "PAM (SpCas9 uchun 5′-NGG-3′)"],
        ["Kesuvchi domen", "FokI dimeri (juft TALEN zarur)", "Cas9 (HNH va RuvC domenlari)"],
        [
          "Loyihalash qulayligi",
          "Murakkabroq (yangi oqsil yig‘ish)",
          "Juda oson va tezkor (yangi sgRNK)",
        ],
        [
          "Mitoxondrial DNK",
          "Qo‘llash mumkin (mitoTALEN)",
          "sgRNK importi qiyinligi sababli cheklangan",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "TALE",
        definition: "Xanthomonas bakteriyalarining DNK ga maxsus bog‘lanuvchi effektor oqsili.",
      },
      {
        term: "RVD",
        definition:
          "TALE takrorining 12- va 13-pozitsiyalaridagi, aniq nukleotidni belgilovchi ikki aminokislota.",
      },
      {
        term: "TALEN",
        definition:
          "TALE DNK bog‘lovchi domeni va FokI nukleazasidan tashkil topgan sun’iy nukleaza.",
      },
      {
        term: "FokI",
        definition: "Faqat dimer holatida DNK ni ikki zanjirli kesadigan endonukleaza domeni.",
      },
      {
        term: "Spaser",
        definition:
          "TALEN juftligining chap va o‘ng bog‘lanish sohalari orasidagi kesish sodir bo‘luvchi oraliq.",
      },
      {
        term: "TATA-boks va TSS",
        definition:
          "Yadro promotorining TSS (+1 — transkripsiya boshlanish nuqtasi) dan 25–30 bp oldin joylashgan konservativ elementi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "5′-ACGT-3′ nukleotid ketma-ketligini tanish uchun qanday RVD ketma-ketligi yoziladi?",
        answer:
          "Standart RVD kodiga ko‘ra: A → NI, C → HD, G → NN (yoki yuqori spetsifiklik uchun NH), T → NG; demak NI–HD–NN(NH)–NG.",
      },
      {
        question: "Nima uchun TALEN tizimi bitta emas, balki juft oqsil sifatida loyihalanadi?",
        answer:
          "Chunki FokI endonukleaza domeni faqat dimer holatida faol bo‘lib DNK ni kesadi; bu ayni paytda tasodifiy off-target kesish ehtimolini ham pasaytiradi.",
      },
      {
        question:
          "Eukariot yadro promotorida TATA-boks odatda TSS (+1) ga nisbatan qayerda joylashadi?",
        answer:
          "TATA-boks transkripsiya boshlanish nuqtasi (TSS, +1) dan taxminan 25–30 juft asos yuqorida (−25 dan −30 bp oralig‘ida) joylashadi.",
      },
    ],
    keyTerms: ["tale", "rvd", "talen", "foki", "spaser", "promotor", "tata-boks", "tss"],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 10-amaliy mashg‘ulot",
    pdfUrl: "/assets/aistudio/20-10_amaliy_mashgulot_talen_texnologiyasini_qoll_8847a135.pdf",
    pdfTitle:
      "10-amaliy mashg‘ulot — TALEN texnologiyasi keyslari va transkripsiya jarayoni tahlili",
    pdfDocuments: [
      {
        title:
          "10-amaliy mashg‘ulot — TALEN texnologiyasi keyslari va transkripsiya jarayoni tahlili",
        url: "/assets/aistudio/20-10_amaliy_mashgulot_talen_texnologiyasini_qoll_8847a135.pdf",
        kind: "Amaliy mashg‘ulot",
      },
    ],
  },
];

export const BIOINFORMATIKA_TOPICS: BioinformatikaTopic[] = [...BIOINFORMATIKA_PRACTICAL_TOPICS];
