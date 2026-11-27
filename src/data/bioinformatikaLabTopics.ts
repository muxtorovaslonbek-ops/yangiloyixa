import type { BioinformatikaTopic } from "./bioinformatikaTopics";

export const BIOINFORMATIKA_LAB_TOPICS: BioinformatikaTopic[] = [
  {
    id: "bioinf-lab-1",
    order: 1,
    code: "L01",
    category: "laboratoriya",
    topicLabel: "1-laboratoriya ishi",
    module: "I qism: Ma’lumotlar bazalari, BLAST, ORF va filogenetika",
    title:
      "Bioinformatikaning zamonaviy ma’lumotlar bazalari bilan tanishish. Bibliografik ma’lumotlar bazalari. Matnli ma’lumotlarni qidirish vositalari",
    syllabusPoints: [
      "Biologik ma’lumotlar bazalarini turlari bo‘yicha (birlamchi, ikkilamchi, ixtisoslashgan) tasniflash",
      "INSDC xalqaro konsorsiumi (GenBank, ENA, DDBJ) va kirish raqami (accession/version) tamoyilini o‘rganish",
      "NCBI Entrez tizimida 30 dan ortiq bazalar bo‘yicha kesishma qidiruv va giperhavolalar bilan ishlash",
      "PubMed da Bul operatorlari (AND, OR, NOT), maydon teglari ([ti], [tiab], [au], [dp]) va MeSH atamalari bilan qidiruv",
      "Topilgan manbalarni Google Scholar, UniProt va RCSB PDB bilan taqqoslash hamda bibliografik rasmiylashtirish",
    ],
    studyNotes:
      "Biologik ma’lumotlar bazalari birlamchi arxiv (GenBank, ENA, DDBJ, PDB), ikkilamchi kuratorlik qilingan (RefSeq, Swiss-Prot, Pfam, InterPro) va ixtisoslashgan (KEGG, OMIM, GEO, TAIR) guruhlarga bo‘linadi. INSDC konsorsiumi har kuni ma’lumot almashadi; PubMed da aniq qidiruv uchun Bul operatorlari, [ti]/[tiab] maydon teglari va MeSH lug‘ati qo‘llaniladi.",
    overview:
      "1-laboratoriya ishida bioinformatikaning asosiy biologik va bibliografik ma’lumotlar bazalari, ularning o‘zaro bog‘liqligi (NCBI Entrez), INSDC almashinuv tizimi hamda PubMed da mantiqiy (Bul) operatorlar, maydon teglari va MeSH lug‘ati yordamida aniq adabiyot qidiruvi o‘zlashtiriladi.",
    sections: [
      {
        heading: "1.1. Biologik ma’lumotlar bazalari tasnifi va INSDC",
        content:
          "Genom loyihalari va NGS natijasida biologik ma’lumotlar hajmi har 18–24 oyda ikki baravar ortmoqda. Mazmuniga ko‘ra bazalar birlamchi (bevosita eksperimental arxivlar: GenBank, ENA, DDBJ, PDB), ikkilamchi (kuratorlik qilingan: RefSeq, UniProtKB/Swiss-Prot, Pfam, InterPro) va ixtisoslashgan (KEGG, OMIM, FlyBase, TAIR, GEO) turlarga ajraladi.",
        highlights: [
          "INSDC (GenBank – AQSh, ENA – Yevropa, DDBJ – Yaponiya) har kuni ma’lumotlarni sinxronlashtiradi",
          "Kirish raqami (accession number) o‘zgarmaydi; ketma-ketlik yangilanganda faqat versiya raqami oshadi (masalan, NM_000207.3)",
          "NCBI Entrez 30+ bazani (Gene, Nucleotide, Protein, Structure, Taxonomy, PubMed, PMC) giperhavolalar bilan birlashtiradi",
        ],
      },
      {
        heading: "1.2. Bibliografik bazalar va PubMed qidiruv vositalari",
        content:
          "PubMed 37 milliondan ortiq biotibbiyot bibliografik yozuvini, PMC (PubMed Central) esa to‘liq matnli bepul maqolalarni o‘z ichiga oladi. Ilmiy ko‘rsatkichlar (h-indeks, impakt-faktor, kvartil) uchun Scopus va Web of Science, keng qamrovli bepul qidiruv uchun Google Scholar qo‘llaniladi.",
        highlights: [
          "Bul operatorlari (katta harfda): AND (toraytiradi), OR (kengaytiradi), NOT (istisno qiladi)",
          "Maydon teglari: [ti] sarlavha, [tiab] sarlavha va annotatsiya, [au] muallif, [dp] nashr sanasi, [orgn] organizm, [MeSH] atama",
          'Qo‘shtirnoq aniq iborani ("gene expression"), yulduzcha (*) esa so‘z asosini qisqartirishni (plant* → plant, plants) bildiradi',
        ],
      },
      {
        heading: "1.3. Laboratoriya topshiriqlari va amaliy qadamlar",
        content:
          "Laboratoriya davomida NCBI «All Databases» da insulin bo‘yicha qidiruv o‘tkaziladi, Gene bazasidan INS (11p15.5, NM_000207, NP_000198) yozuvi tahlil qilinadi, PubMed so‘rovi bosqichma-bosqich toraytiriladi (bioinformatics → AND CRISPR → [ti] → 5 yil → Free full text) hamda natijalar Google Scholar, UniProt va PDB bilan solishtiriladi.",
        highlights: [
          "MeSH bazasida «Computational Biology» atamasining ierarxik daraxtini o‘rganish",
          "PubMed «Cite» funksiyasi orqali 3 ta maqolani bibliografik standart bo‘yicha rasmiylashtirish",
          "Kerakli vositalar: NCBI, PubMed, UniProt, RCSB PDB, Google Scholar, Zotero",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy biologik va bibliografik ma’lumotlar bazalarini taqqoslash",
      columns: ["Baza", "Turi", "Tashkilot", "Asosiy ma’lumot", "Kirish raqami namunasi"],
      rows: [
        [
          "GenBank",
          "Birlamchi (arxiv)",
          "NCBI (AQSh)",
          "Nukleotid ketma-ketliklari",
          "U12345 / NM_000207.3",
        ],
        [
          "UniProtKB/Swiss-Prot",
          "Ikkilamchi (kuratorlik)",
          "EMBL-EBI, SIB, PIR",
          "Oqsil ketma-ketligi va funksiyasi",
          "P01308 (INS_HUMAN)",
        ],
        [
          "PDB",
          "Birlamchi (arxiv)",
          "wwPDB konsorsiumi",
          "3D fazoviy strukturalar",
          "4INS, 4HHB, 1LYZ",
        ],
        [
          "PubMed / PMC",
          "Bibliografik / To‘liq matn",
          "NCBI / NLM",
          "Biotibbiyot ilmiy maqolalari",
          "PMID / PMCID",
        ],
        ["KEGG", "Ixtisoslashgan", "Kanehisa Labs", "Metabolik va signal yo‘llari", "hsa04910"],
      ],
    },
    keyConcepts: [
      {
        term: "Ma’lumotlar bazasi",
        definition:
          "Kompyuterda tartiblangan holda saqlanadigan va maxsus vositalar bilan qidiriladigan ma’lumotlar to‘plami.",
      },
      {
        term: "Kirish raqami (accession)",
        definition:
          "Ma’lumotlar bazasidagi yozuvning o‘zgarmas noyob identifikatori (masalan, NM_000207).",
      },
      {
        term: "INSDC",
        definition:
          "GenBank, ENA va DDBJ nukleotid bazalarining kunlik almashinuv xalqaro hamkorligi.",
      },
      {
        term: "Entrez",
        definition:
          "NCBI ning 30 dan ortiq bazasini yagona qidiruv va giperhavolalar bilan birlashtiruvchi tizimi.",
      },
      {
        term: "MeSH",
        definition:
          "PubMed da maqolalarni indekslash uchun ishlatiladigan nazorat qilinadigan atamalar lug‘ati.",
      },
      {
        term: "Bul operatorlari",
        definition: "Qidiruv so‘rovini mantiqiy birlashtiruvchi AND, OR va NOT operatorlari.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "GenBank ga topshirilgan ketma-ketlik nima uchun ENA bazasida ham bir xil kirish raqami bilan topiladi?",
        answer:
          "Chunki GenBank (NCBI), ENA (EMBL-EBI) va DDBJ (Yaponiya) INSDC xalqaro konsorsiumi doirasida har kuni o‘zaro ma’lumot almashadi.",
      },
      {
        question:
          "A = 1200 ta (CRISPR), B = 800 ta (rice), kesishmasi 150 ta bo‘lsa, «CRISPR OR rice» va «CRISPR NOT rice» nechta natija beradi?",
        answer:
          "CRISPR OR rice = 1200 + 800 − 150 = 1850 ta natija; CRISPR NOT rice = 1200 − 150 = 1050 ta natija beradi.",
      },
      {
        question: "PubMed da insulin[au] so‘rovining xatosi nimada?",
        answer:
          "[au] tegi muallif familiyasini qidiradi; maqola mavzusi/sarlavhasi bo‘yicha qidirish uchun insulin[ti] yoki insulin[tiab] ishlatilishi kerak.",
      },
    ],
    keyTerms: [
      "ma’lumotlar bazasi",
      "kirish raqami (accession)",
      "insdc",
      "entrez",
      "pubmed",
      "mesh",
      "bul operatorlari",
      "kuratorlik",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 1-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/01-1_laboratoriya_ishi_bioinformatikaning_zamonav_3cb49230.pdf",
    pdfTitle:
      "1-laboratoriya ishi — Bioinformatikaning zamonaviy va bibliografik ma’lumotlar bazalari",
    pdfDocuments: [
      {
        title:
          "1-laboratoriya ishi — Bioinformatikaning zamonaviy va bibliografik ma’lumotlar bazalari",
        url: "/assets/aistudio/01-1_laboratoriya_ishi_bioinformatikaning_zamonav_3cb49230.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
  {
    id: "bioinf-lab-2",
    order: 2,
    code: "L02",
    category: "laboratoriya",
    topicLabel: "2-laboratoriya ishi",
    module: "I qism: Ma’lumotlar bazalari, BLAST, ORF va filogenetika",
    title:
      "BLAST dasturi yordamida nukleotid ketma-ketliklarini solishtirish. BLAST dasturi yordamida aminokislota ketma-ketliklarini solishtirish va translyatsiyalarni olish",
    syllabusPoints: [
      "BLAST algoritmining 4 bosqichini (k-mer so‘zlarga bo‘lish, seed izlash, HSP kengaytirish, E-qiymat) o‘zlashtirish",
      "Beshta BLAST dasturini (blastn, blastp, blastx, tblastn, tblastx) so‘rov va baza turiga ko‘ra farqlash",
      "FASTA formatida ketma-ketlik tayyorlash va NCBI BLAST da NM_000207 (blastn) hamda P01308 (blastp) tahlilini bajarish",
      "Score, Bit ball (S′), E-qiymat, Identity, Positives va Query cover ko‘rsatkichlarini talqin qilish",
      "ExPASy Translate va blastx yordamida nukleotid ketma-ketligini 6 ta o‘qish ramkasida in silico translyatsiya qilish",
    ],
    studyNotes:
      "BLAST (Altschul et al., 1990) lokal o‘xshashliklarni topuvchi evristik algoritmdir. Statistik ishonchlilik E = m·n·2^(−S′) formula bilan baholanadi (E < 10⁻⁵ ishonchli gomologiya). Oqsil darajasidagi qidiruv (blastp, blastx) genetik kodning aynishi va BLOSUM62 matritsasi tufayli uzoq qarindosh gomologlarni nukleotid qidiruvidan ancha yaxshi topadi.",
    overview:
      "2-laboratoriya ishida NCBI BLAST xizmati bilan amaliy ishlash: FASTA formatini tayyorlash, blastn va blastp qidiruvlarini sozlash, BLOSUM62 matritsasi va statistik ko‘rsatkichlarni sharhlash hamda blastx va ExPASy Translate orqali nukleotid ketma-ketligidan oqsil translyatsiyasini olish o‘rganiladi.",
    sections: [
      {
        heading: "2.1. BLAST evristik algoritmi va 5 ta dastur turi",
        content:
          "BLAST so‘rovni qisqa k-mer so‘zlarga (nukleotidlarda 11, megablast da 28, oqsillarda 3–6) ajratib, bazada yuqori balli seed mosliklarini izlaydi, ularni ikki tomonga kengaytirib HSP (High-scoring Segment Pair) hosil qiladi va E-qiymat bo‘yicha saralaydi.",
        highlights: [
          "blastn — nukleotid so‘rovi → nukleotid bazasi (megablast juda yaqin turlar, blastn uzoqroq turlar uchun)",
          "blastp — oqsil so‘rovi → oqsil bazasi (BLOSUM62 matritsasi standart)",
          "blastx — nukleotid so‘rovi (6 ramkada translyatsiya) → oqsil bazasi (EST va noma’lum kDNK uchun)",
          "tblastn — oqsil so‘rovi → translyatsiyalangan nukleotid bazasi (genomda izohlanmagan genlarni izlash)",
        ],
      },
      {
        heading: "2.2. FASTA formati va statistik ko‘rsatkichlar",
        content:
          "FASTA faylining birinchi qatori «>» belgisi bilan boshlanuvchi sarlavha, keyingi qatorlar esa bir harfli nukleotid yoki aminokislota ketma-ketligidan iborat. Bit ball (S′) qidiruv parametrlaridan mustaqil bo‘lib, E-qiymat E = m·n·2^(−S′) orqali tasodifiy mosliklar sonini baholaydi.",
        highlights: [
          "Identity (%) — aynan bir xil pozitsiyalar ulushi; Positives (%) — oqsillarda fizik-kimyoviy o‘xshash qoldiqlar ulushi",
          "Query cover (%) — so‘rov ketma-ketligining tekislanishga kirgan qismi (ishonchli to‘liq gomologda odatda > 70 %)",
          "Odam preproinsulini (P01308): 110 ak — signal peptid (1–24), B-zanjir (25–54), C-peptid (57–87), A-zanjir (90–110)",
        ],
      },
      {
        heading: "2.3. Laboratoriya topshiriqlari: blastn, blastp va blastx",
        content:
          "Laboratoriyada NM_000207 (odam insulin mRNK) Homo sapiens chiqarib tashlangan holda nr/nt bazasida blastn bilan, P01308 oqsili esa Swiss-Prot bazasida blastp (BLOSUM62) bilan tahlil qilinadi; so‘ngra ExPASy Translate va blastx yordamida 6 ta ramkadagi translyatsiya tekshiriladi.",
        highlights: [
          "Odam va cho‘chqa insulinlari tekislanishida farq qiluvchi aminokislota qoldiqlarini aniqlash",
          "Noma’lum nukleotid ketma-ketligining kodlaydigan oqsilini blastx orqali topish",
          "Kerakli vositalar: NCBI BLAST (blast.ncbi.nlm.nih.gov), ExPASy Translate",
        ],
      },
    ],
    comparisonTable: {
      title: "BLAST dasturlari turlari va qo‘llanilish sohasi",
      columns: ["Dastur", "So‘rov turi", "Ma’lumotlar bazasi", "Asosiy qo‘llanilishi"],
      rows: [
        ["blastn", "Nukleotid", "Nukleotid", "Gen va mRNK o‘xshashligini qidirish, shtrixkodlash"],
        ["blastp", "Oqsil", "Oqsil", "Oqsil gomologlari va funksiyasini aniqlash (BLOSUM62)"],
        [
          "blastx",
          "Nukleotid (6 ramkada translyatsiya)",
          "Oqsil",
          "Yangi kDNK/EST fragmenti kodlaydigan oqsilni topish",
        ],
        [
          "tblastn",
          "Oqsil",
          "Nukleotid (6 ramkada translyatsiya)",
          "Genomda annotatsiyalanmagan genlarni qidirish",
        ],
        [
          "tblastx",
          "Nukleotid (translyatsiya)",
          "Nukleotid (translyatsiya)",
          "Uzoq qarindosh nukleotid ketma-ketliklarini solishtirish",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "BLAST",
        definition:
          "Basic Local Alignment Search Tool — lokal o‘xshashliklarni tez qidiruvchi evristik algoritm.",
      },
      {
        term: "Gomologiya",
        definition:
          "Ikki yoki undan ortiq ketma-ketlikning umumiy evolyutsion ajdoddan kelib chiqqanligi.",
      },
      {
        term: "HSP",
        definition:
          "High-scoring Segment Pair — seed kengaytirilishidan hosil bo‘lgan yuqori balli lokal tekislash juftligi.",
      },
      {
        term: "Bit ball (S′)",
        definition:
          "Turli matritsa va bazalar natijalarini taqqoslash imkonini beruvchi normallashtirilgan ball.",
      },
      {
        term: "BLOSUM62",
        definition:
          "Oqsillar tekislashida aminokislota almashinuvlarini baholovchi standart almashtirish matritsasi.",
      },
      {
        term: "Translyatsiya (in silico)",
        definition:
          "Nukleotid ketma-ketligini genetik kod jadvali asosida kompyuterda aminokislotalarga o‘tkazish.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "So‘rov uzunligi 300 nt, baza hajmi 5·10⁸ nt va bit ball 50 bo‘lsa, E-qiymat nechaga teng?",
        answer: "E = m·n·2^(−S′) = 300 · 5·10⁸ · 2^(−50) ≈ 1,5·10¹¹ / 1,126·10¹⁵ ≈ 1,3·10⁻⁴.",
      },
      {
        question:
          "Nima uchun oqsil darajasidagi qidiruv (blastp, blastx) uzoq gomologlarni nukleotid qidiruvidan yaxshiroq topadi?",
        answer:
          "Genetik kodning aynishi tufayli nukleotidlar o‘zgarsa ham aminokislotalar saqlanishi mumkin; shuningdek 20 harfli alifboda tasodifiy moslik past va BLOSUM62 kimyoviy o‘xshash almashinuvlarni hisobga oladi.",
      },
      {
        question:
          "Tekislash uzunligi 110, bir xil pozitsiyalar 92 va o‘xshash pozitsiyalar 101 bo‘lsa, Identity va Positives necha foiz?",
        answer: "Identity = (92 / 110) × 100 % = 83,6 %; Positives = (101 / 110) × 100 % = 91,8 %.",
      },
    ],
    keyTerms: [
      "blast",
      "gomologiya",
      "hsp",
      "e-qiymat",
      "bit ball",
      "fasta formati",
      "blosum62",
      "translyatsiya (in silico)",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 2-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/02-2_laboratoriya_ishi_blast_dasturi_yordamida_nu_a504eea5.pdf",
    pdfTitle:
      "2-laboratoriya ishi — BLAST yordamida nukleotid va oqsil ketma-ketliklarini solishtirish",
    pdfDocuments: [
      {
        title:
          "2-laboratoriya ishi — BLAST yordamida nukleotid va oqsil ketma-ketliklarini solishtirish",
        url: "/assets/aistudio/02-2_laboratoriya_ishi_blast_dasturi_yordamida_nu_a504eea5.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
  {
    id: "bioinf-lab-3",
    order: 3,
    code: "L03",
    category: "laboratoriya",
    topicLabel: "3-laboratoriya ishi",
    module: "I qism: Ma’lumotlar bazalari, BLAST, ORF va filogenetika",
    title: "Ochiq o‘qish ramkasini qidirish",
    syllabusPoints: [
      "Genetik kodning xossalari (64 kodon, ATG start, TAA/TAG/TGA stop) va DNK ning 6 ta o‘qish ramkasini o‘zlashtirish",
      "Teskari-komplementar zanjirni (5′→3′) to‘g‘ri tuzish va barcha 6 ramkada (+1, +2, +3, −1, −2, −3) translyatsiya qilish",
      "78 nt o‘quv ketma-ketligida ORF larni qo‘lda topib, natijani ExPASy Translate va SMS ORF Finder da tekshirish",
      "Prokariot (Shayn–Dalgarno, intronsiz) va eukariot (Kozak konsensusi, ekzon-intron) genlarida ORF qidirish farqlarini tahlil qilish",
    ],
    studyNotes:
      "Har qanday qo‘sh zanjirli DNK 6 ta o‘qish ramkasiga ega (+1, +2, +3 va −1, −2, −3). Ochiq o‘qish ramkasi (ORF) start kodondan (ATG) birinchi stop kodongacha davom etadi va uzunligi L_ORF = 3·(n + 1) nt ga teng. Tasodifiy ketma-ketlikda stop kodon o‘rtacha har 64/3 ≈ 21 kodonda uchragani uchun uzun ORF (>100 kodon) haqiqiy gen belgisi hisoblanadi.",
    overview:
      "3-laboratoriya ishida genetik kod va oltita o‘qish ramkasi nazariyasi, teskari-komplementar zanjir olish, qisqa DNK ketma-ketligida ochiq o‘qish ramkalarini (ORF) qo‘lda hamda ExPASy Translate / SMS dasturlarida topish va real NM_000207 mRNK sini tahlil qilish bajariladi.",
    sections: [
      {
        heading: "3.1. Genetik kod, oltita o‘qish ramkasi va teskari-komplementar zanjir",
        content:
          "64 ta kodondan 61 tasi 20 ta aminokislotani, 3 tasi (UAA, UAG, UGA; DNK da TAA, TAG, TGA) esa stop signallarini kodlaydi. AUG (ATG) metionin va asosiy start kodon hisoblanadi. Qo‘sh zanjirli DNK da har ikki zanjir 3 tadan ramkaga ega bo‘lib, jami 6 ta o‘qish ramkasi hosil bo‘ladi.",
        highlights: [
          "Teskari-komplementar qoida: A↔T, G↔C almashtirilib, 5′→3′ yo‘nalishda teskari o‘qiladi (5′-ATGCCG-3′ → 5′-CGGCAT-3′)",
          "ORF uzunligi formulasi: L_ORF = 3·(n + 1), bu yerda n — aminokislotalar soni, +1 esa stop kodon",
          "Tasodifiy 100 kodon ichida stop kodon uchramaslik ehtimoli: (61/64)¹⁰⁰ ≈ 0,008 (juda past)",
        ],
      },
      {
        heading: "3.2. Prokariot va eukariotlarda ORF qidirish mezonlari",
        content:
          "Prokariotlarda genlar intronsiz bo‘lgani sababli genomik DNK dan to‘g‘ridan-to‘g‘ri ORF izlash samarali; bakteriyalarda GTG va TTG muqobil start kodonlari hamda start kodondan 5–10 nt oldin Shayn–Dalgarno (AGGAGG) ketma-ketligi uchraydi. Eukariotlarda esa intronlar tufayli ORF asosan mRNK/kDNK da qidiriladi va Kozak konteksti (gccRccATGG) tekshiriladi.",
        highlights: [
          "Minimal uzunlik chegarasi (75 yoki 300 nt) qisqa tasodifiy ORF larni filtrlaydi",
          "Umurtqalilar mitoxondrial genetik kodida (2-jadval) TGA stop emas, triptofan (Trp) ni kodlaydi",
          "ORF — nazariy start-to-stop oraliq; CDS — biologik tasdiqlangan haqiqiy oqsil kodlovchi soha",
        ],
      },
      {
        heading: "3.3. Laboratoriya topshiriqlari: qo‘lda va dasturiy tekshiruv",
        content:
          "Talabalar 78 nt o‘quv ketma-ketligini barcha 6 ramkada translyatsiya qilib ORF larni topadi (eng uzuni −2 ramkada: 66 nt, 21 ak; +3 ramkada: 9–50 nt, 13 ak), natijani ExPASy Translate va SMS ORF Finder bilan solishtiradi, so‘ngra NM_000207 (110 ak insulin CDS) ni tekshiradi.",
        highlights: [
          "SMS ORF Finder da minimal uzunlik 30 kodon va 10 kodon natijalarini taqqoslash",
          "NM_000207 start kodoni atrofini Kozak konsensusi bilan solishtirish",
          "Kerakli vositalar: ExPASy Translate, Sequence Manipulation Suite (SMS), genetik kod jadvali",
        ],
      },
    ],
    comparisonTable: {
      title: "Asosiy kodonlar va prokariot/eukariot ORF xususiyatlari",
      columns: ["Element / Kodon", "mRNK / Motiv", "Ma’nosi", "Biologik ahamiyati"],
      rows: [
        ["ATG", "AUG", "Metionin (Met)", "Asosiy start kodon (translyatsiya boshlanishi)"],
        [
          "TAA, TAG, TGA",
          "UAA, UAG, UGA",
          "Stop kodonlar",
          "Translyatsiya tugashi (mitoxondriyada TGA = Trp)",
        ],
        ["GTG, TTG", "GUG, UUG", "Muqobil start", "Prokariotlarda ayrim genlar boshlanish kodoni"],
        [
          "Shayn–Dalgarno",
          "AGGAGG",
          "Ribosoma bog‘lanish joyi",
          "Bakteriyalarda start kodondan 5–10 nt oldin",
        ],
        [
          "Kozak ketma-ketligi",
          "gccRccATGG",
          "Translyatsiya konteksti",
          "Eukariot mRNK larida start kodonni tanish samaradorligi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Kodon",
        definition: "Bitta aminokislota yoki stop signalini kodlovchi ketma-ket uchta nukleotid.",
      },
      {
        term: "O‘qish ramkasi",
        definition:
          "Nukleotid ketma-ketligini kodonlarga ajratish usuli; har bir qo‘sh zanjirli DNK da 6 ta.",
      },
      {
        term: "ORF",
        definition:
          "Start kodondan birinchi stop kodongacha bo‘lgan ichida stop kodonsiz uzluksiz oraliq.",
      },
      {
        term: "Teskari-komplementar",
        definition:
          "Komplementar zanjirning 5′→3′ yo‘nalishda teskari tartibda yozilgan ko‘rinishi.",
      },
      {
        term: "Genetik kodning aynishi",
        definition: "Bitta aminokislotaning bir nechta sinonim kodonlar bilan kodlanish xossasi.",
      },
      {
        term: "CDS",
        definition:
          "GenBank yozuvida haqiqiy oqsilni kodlovchi tasdiqlangan soha (Coding Sequence).",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "300 aminokislotali oqsilni kodlovchi ORF uzunligi (stop kodon bilan) necha nukleotid bo‘ladi?",
        answer: "L_ORF = 3 · (300 + 1) = 903 nukleotid.",
      },
      {
        question: "5′-ATGGCTTAA-3′ ketma-ketligining teskari-komplementar zanjiri qanday yoziladi?",
        answer: "Komplementari 3′-TACCGAATT-5′, teskari-komplementari esa 5′-TTAAGCCAT-3′.",
      },
      {
        question:
          "Odam mitoxondrial COI genini standart kod bilan translyatsiya qilganda nima uchun ichki TGA stop kodon chiqadi?",
        answer:
          "Chunki umurtqalilar mitoxondrial genetik kodida (2-jadval) TGA stop kodon emas, balki triptofan (Trp) aminokislotasini kodlaydi.",
      },
    ],
    keyTerms: [
      "kodon",
      "o‘qish ramkasi",
      "orf",
      "start kodon",
      "stop kodon",
      "teskari-komplementar",
      "genetik kodning aynishi",
      "cds",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 3-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/03-3_laboratoriya_ishi_ochiq_oqish_ramkasini_qidi_c8bc9a36.pdf",
    pdfTitle: "3-laboratoriya ishi — Ochiq o‘qish ramkasini (ORF) qidirish",
    pdfDocuments: [
      {
        title: "3-laboratoriya ishi — Ochiq o‘qish ramkasini (ORF) qidirish",
        url: "/assets/aistudio/03-3_laboratoriya_ishi_ochiq_oqish_ramkasini_qidi_c8bc9a36.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
  {
    id: "bioinf-lab-4",
    order: 4,
    code: "L04",
    category: "laboratoriya",
    topicLabel: "4-laboratoriya ishi",
    module: "I qism: Ma’lumotlar bazalari, BLAST, ORF va filogenetika",
    title: "ORF Finder dasturi bilan ishlash",
    syllabusPoints: [
      "NCBI ORFfinder veb-dasturi interfeysi va parametrlarini (minimal uzunlik, genetik kod, start kodon, nested ORF) o‘rganish",
      "NM_000207 va NC_001416 (λ fag genomi) ketma-ketliklarini kirish raqami orqali kiritib ORF xaritasini tahlil qilish",
      "Minimal uzunlik (30, 75, 150, 300 nt), Ignore nested ORFs va muqobil start kodonlar ta’sirini tekshirish",
      "Topilgan ORF oqsil ketma-ketligini FASTA da eksport qilish va SmartBLAST/BLASTP hamda CDD orqali tasdiqlash",
    ],
    studyNotes:
      "NCBI ORFfinder 50 kb gacha bo‘lgan nukleotid ketma-ketliklarida 6 ta ramkadagi ORF larni grafik strelkalar ko‘rinishida topadi. Teskari zanjirdagi ORF da start koordinatasi stop koordinatasidan katta bo‘ladi (masalan, 276..40 → 237 nt). Bakteriya, arxey va xloroplastlar uchun 11-genetik kod jadvali, umurtqalilar mitoxondriyasi uchun 2-jadval tanlanadi.",
    overview:
      "4-laboratoriya ishi NCBI ORFfinder dasturida parametrlarni sozlash, grafik xarita va koordinatalar jadvalini o‘qish, haqiqiy genni tasodifiy ORF dan BLAST/CDD orqali ajratish hamda genom annotatsiyasi dasturlari (Prodigal, Glimmer, AUGUSTUS) tamoyillarini o‘rganishga bag‘ishlangan.",
    sections: [
      {
        heading: "4.1. NCBI ORFfinder asosiy parametrlari",
        content:
          "ORFfinder FASTA ketma-ketligi yoki NCBI kirish raqamini (50 kb gacha) qabul qiladi. Natijalar aniqligi to‘rtta asosiy parametrni to‘g‘ri tanlashga bog‘liq: minimal uzunlik, genetik kod jadvali, start kodon turi va ichma-ich (nested) ORF larni filtrlash.",
        highlights: [
          "Minimal uzunlik: 30, 75 (standart), 150, 300 yoki 600 nt — qiymat oshgani sari tasodifiy qisqa ORF lar kamayadi",
          "Genetik kod: 1 — standart (yadro), 2 — umurtqalilar mitoxondriyasi, 11 — bakteriyalar, arxeylar va plastidalar",
          "Ignore nested ORFs — uzunroq ORF ichida yotgan kichik ORF larni ro‘yxatdan chiqarib tashlaydi",
        ],
      },
      {
        heading: "4.2. Grafik xarita, koordinatalar va SmartBLAST tekshiruvi",
        content:
          "Grafik xaritada har bir ORF strelka bilan tasvirlanadi: strelka yo‘nalishi (+ yoki −) zanjirni, uzunligi esa kodlovchi o‘lchamni bildiradi. Teskari zanjirdagi ORF lar katta koordinatadan kichik koordinataga qarab yoziladi (masalan, 276..40, uzunligi 276 − 40 + 1 = 237 nt).",
        highlights: [
          "SmartBLAST — tanlangan ORF oqsilini eng yaqin kuratorlik qilingan gomologlar bilan tez taqqoslaydi",
          "4.1-rasmdagi 121..606 ORF uzunligi: 606 − 121 + 1 = 486 nt → (486/3) − 1 = 161 aminokislota",
          "Tanlangan ORF ni Protein FASTA shaklida to‘g‘ridan-to‘g‘ri yuklab olish mumkin",
        ],
      },
      {
        heading: "4.3. Haqiqiy genni tasodifiy ORF dan ajratish va genom annotatsiyasi",
        content:
          "ORFfinder topgan har bir ORF haqiqiy gen emas. Gen ekanligini isbotlash uchun 5 ta dalil tekshiriladi: BLAST gomologiyasi (E < 10⁻⁵), konservativ domenlar (CDD, Pfam), organizmga xos kodon usage, promotor/RBS signallari va RNK-seq ekspressiya ma’lumotlari.",
        highlights: [
          "Prokariot genom annotatsiyasi dasturlari: Prodigal, Glimmer, GeneMark-S",
          "Eukariot genlarini bashorat qilish dasturlari: AUGUSTUS, GENSCAN",
          "Kerakli vositalar: NCBI ORFfinder (ncbi.nlm.nih.gov/orffinder), SmartBLAST/BLASTP",
        ],
      },
    ],
    comparisonTable: {
      title: "Genetik kod jadvallari va genom annotatsiyasi vositalari",
      columns: ["Parametr / Dastur", "Turi / Raqami", "Qo‘llanish sohasi", "O‘ziga xos jihati"],
      rows: [
        [
          "Standart genetik kod",
          "1-jadval",
          "Eukariot yadro genlari",
          "ATG start; TAA, TAG, TGA stop",
        ],
        [
          "Mitoxondrial kod",
          "2-jadval",
          "Umurtqalilar mitoxondriyasi",
          "TGA triptofanni (Trp) kodlaydi",
        ],
        [
          "Bakterial/plastid kod",
          "11-jadval",
          "Bakteriya, arxey, xloroplast",
          "GTG va TTG muqobil start kodonlari keng",
        ],
        [
          "Prodigal / Glimmer",
          "Annotatsiya dasturi",
          "Prokariot genomlari",
          "Intronsiz genlar va RBS ni yuqori aniqlikda topadi",
        ],
        [
          "AUGUSTUS / GENSCAN",
          "Annotatsiya dasturi",
          "Eukariot genomlari",
          "Ekzon-intron chegaralari va splaysingni modellashtiradi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "ORFfinder",
        definition:
          "NCBI ning 50 kb gacha ketma-ketliklarda 6 ta ramka bo‘yicha ORF topuvchi veb-dasturi.",
      },
      {
        term: "Nested ORF",
        definition: "Boshqa uzunroq ochiq o‘qish ramkasining ichida joylashgan kichikroq ORF.",
      },
      {
        term: "SmartBLAST",
        definition:
          "Oqsil ketma-ketligini eng yaqin izohlangan etalon gomologlar bilan tez solishtiruvchi NCBI vositasi.",
      },
      {
        term: "CDD",
        definition:
          "Conserved Domain Database — konservativ oqsil domenlarini aniqlovchi NCBI bazasi.",
      },
      {
        term: "Genom annotatsiyasi",
        definition:
          "Genom ketma-ketligidagi genlar va funksional elementlarni aniqlash hamda izohlash jarayoni.",
      },
      {
        term: "Kodon usage",
        definition:
          "Muayyan organizmda sinonim kodonlardan foydalanishning xos chastota taqsimoti.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "ORF koordinatalari 276..40 ko‘rinishida berilgan bo‘lsa, u qaysi zanjirda va uzunligi qancha?",
        answer:
          "Start koordinatasi stop koordinatasidan katta bo‘lgani uchun u teskari (−) zanjirda joylashgan; uzunligi 276 − 40 + 1 = 237 nt (78 aminokislota + stop kodon).",
      },
      {
        question:
          "O‘simlik xloroplasti genomini tahlil qilishda qaysi genetik kod jadvali tanlanadi?",
        answer: "11-jadval (Bakteriyalar, arxeylar va o‘simlik plastidalari genetik kodi).",
      },
      {
        question:
          "Plazmidada 75 nt chegarasi bilan 38 ta qisqa qoplashgan ORF chiqsa, ularning hammasi gen hisoblanadimi?",
        answer:
          "Yo‘q; aksariyati tasodifiy qisqa va ichma-ich (nested) ORF lardir. Minimal uzunlikni 150–300 nt ga oshirish, «Ignore nested ORFs» ni yoqish va BLAST/CDD bilan tasdiqlash kerak.",
      },
    ],
    keyTerms: [
      "orffinder",
      "genetik kod jadvali",
      "nested orf",
      "smartblast",
      "genom annotatsiyasi",
      "cdd",
      "muqobil start kodon",
      "kodon usage",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 4-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/04-4_laboratoriya_ishi_orf_finder_dasturi_bilan_i_a3e92521.pdf",
    pdfTitle: "4-laboratoriya ishi — NCBI ORF Finder dasturi bilan ishlash",
    pdfDocuments: [
      {
        title: "4-laboratoriya ishi — NCBI ORF Finder dasturi bilan ishlash",
        url: "/assets/aistudio/04-4_laboratoriya_ishi_orf_finder_dasturi_bilan_i_a3e92521.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
  {
    id: "bioinf-lab-5",
    order: 5,
    code: "L05",
    category: "laboratoriya",
    topicLabel: "5-laboratoriya ishi",
    module: "I qism: Ma’lumotlar bazalari, BLAST, ORF va filogenetika",
    title:
      "Ketma-ketliklarning ko‘p martali tekislanishi va filogenetik daraxtlar qurish. Clustal W, T-Coffee va MegaX dasturlari. Ma’lumotlarni tahlil qilish",
    syllabusPoints: [
      "Ko‘p martali tekislashning (MSA) progressiv (Clustal W/Omega) va moslik (T-Coffee) algoritmlarini farqlash",
      "Clustal Omega va T-Coffee da 6–8 turdagi β-globin (HBB) ketma-ketliklarini tekislash va foiz o‘xshashlik matritsasini tuzish",
      "MEGA X da p-masofa va Juks–Kantor (d_JC) masofalarini hisoblash hamda eng mos evolyutsion modelni tanlash",
      "Neighbor-Joining (NJ) va Maximum Likelihood (ML) daraxtlarini 500 replikatsiyali butstrep tahlili bilan qurish va sharhlash",
    ],
    studyNotes:
      "Clustal W progressiv usulda ishlaydi («once a gap, always a gap»), T-Coffee esa moslik (consistency) kutubxonasi hisobiga yuqoriroq aniqlik beradi. Filogenetik daraxtlarda NJ evolyutsiya tezligi har xil bo‘lganda ham to‘g‘ri ishlaydi, ML esa evolyutsion model asosida eng ehtimolli daraxtni topadi; butstrep ≥ 70 % ishonchli shoxlanish mezonidir.",
    overview:
      "5-laboratoriya ishida Clustal Omega, T-Coffee va MEGA X dasturlari yordamida ketma-ketliklarni ko‘p martali tekislash, tekislash sifatini baholash va tozalash (trimming), evolyutsion masofalarni hisoblash hamda butstrep qo‘llab-quvvatlashli filogenetik daraxtlar qurish amaliyoti bajariladi.",
    sections: [
      {
        heading: "5.1. Progressiv (Clustal W/Omega) va moslik (T-Coffee) usullari",
        content:
          "Uch va undan ortiq ketma-ketlikni aniq dinamik dasturlash bilan tekislash eksponensial murakkab bo‘lgani uchun evristik usullar qo‘llaniladi. Clustal W juft masofalar asosida yo‘naltiruvchi daraxt (guide tree) qurib ketma-ket tekislaydi; Clustal Omega esa minglab ketma-ketliklarni tez ishlaydi. T-Coffee barcha juft global/lokal tekislashlardan kutubxona tuzib, yuqori moslikka erishadi.",
        highlights: [
          "Clustal W kamchiligi: boshlang‘ich bosqichda qo‘yilgan xato bo‘shliq keyin tuzatilmaydi («once a gap, always a gap»)",
          "T-Coffee rangli «score» xaritasi: qizil — yuqori ishonchli, ko‘k — past ishonchli ustunlar",
          "Katta to‘plamlar (500+ ketma-ketlik) uchun Clustal Omega, MAFFT yoki MUSCLE tezligi tufayli afzal",
        ],
      },
      {
        heading: "5.2. Evolyutsion masofalar va filogenetik daraxt qurish usullari",
        content:
          "p-masofa (p = n_d / n) farq qiluvchi pozitsiyalar ulushini ko‘rsatadi, Juks–Kantor tuzatmasi d_JC = −(3/4)·ln(1 − 4p/3) esa yashirin ko‘p martali almashinuvlarni hisobga oladi. Daraxt qurishning masofaviy (UPGMA, Neighbor-Joining) va belgiga asoslangan (MP, ML, Bayes) usullari mavjud.",
        highlights: [
          "UPGMA molekulyar soat (doimiy tezlik) ni talab qiladi; NJ tezlik turlicha bo‘lganda ham ildizsiz daraxt quradi",
          "Maximum Likelihood (ML) «Find Best DNA/Protein Models» orqali tanlangan evolyutsion modelga tayanadi",
          "Butstrep (500–1000 replikatsiya): ≥ 70 % — ishonchli shoxlanish; 40–55 % — statistik zaif shoxlanish",
        ],
      },
      {
        heading: "5.3. MEGA X da to‘liq filogenetik tahlil bosqichlari",
        content:
          "To‘liq filogenetik ish oqimi 7 bosqichdan iborat: ketma-ketliklarni yig‘ish → MSA → tekislashni tekshirish va tozalash (trimAl/Gblocks) → evolyutsion model tanlash → daraxt qurish (NJ/ML) → butstrep tahlili → kladlar va tashqi guruh asosida talqin qilish.",
        highlights: [
          "Uzun noyob insersiyalar va tekislanmagan uchlar filogenetik tahlildan oldin tozalanadi (trimming)",
          "MEGA formati (.meg) saqlanib, NJ va ML daraxtlari topologiyasi hamda butstrep qiymatlari solishtiriladi",
          "Kerakli vositalar: Clustal Omega, T-Coffee, MEGA X / MEGA 11",
        ],
      },
    ],
    comparisonTable: {
      title: "MSA va filogenetik daraxt qurish usullarining qiyosiy tavsifi",
      columns: ["Usul / Dastur", "Toifasi", "Afzalligi", "Cheklovi"],
      rows: [
        [
          "Clustal Omega",
          "Progressiv MSA (HMM)",
          "Juda tez, minglab ketma-ketlikka mos",
          "Dastlabki xatolar saqlanib qolishi mumkin",
        ],
        [
          "T-Coffee",
          "Moslik (Consistency) MSA",
          "Kichik to‘plamlarda yuqori aniqlik",
          "Hisoblash vaqti ko‘p, katta bazaga sekin",
        ],
        [
          "UPGMA",
          "Masofaviy (ildizli)",
          "Oddiy, tez hisoblanadi",
          "Evolyutsiya tezligi har xil bo‘lsa xato beradi",
        ],
        [
          "Neighbor-Joining (NJ)",
          "Masofaviy (ildizsiz)",
          "Tez, har xil evolyutsiya tezligiga mos",
          "Faqat juft masofalarga tayanadi",
        ],
        [
          "Maximum Likelihood (ML)",
          "Belgiga asoslangan",
          "Modelga asoslangan, eng aniq usullardan",
          "Hisoblash resursini ko‘proq talab qiladi",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "MSA",
        definition: "Uch va undan ortiq ketma-ketlikni gomologik pozitsiyalar bo‘yicha tekislash.",
      },
      {
        term: "Progressiv tekislash",
        definition:
          "Yo‘naltiruvchi daraxt (guide tree) tartibida ketma-ketliklarni bosqichma-bosqich qo‘shib tekislash.",
      },
      {
        term: "Yo‘naltiruvchi daraxt",
        definition:
          "Progressiv MSA da ketma-ketliklarni qo‘shish navbatini belgilovchi dastlabki daraxt.",
      },
      {
        term: "Butstrep (Bootstrap)",
        definition:
          "Tekislash ustunlarini 100–1000 marta tasodifiy qayta tanlab shoxlanish ishonchliligini baholash.",
      },
      {
        term: "Juks–Kantor modeli",
        definition:
          "Barcha nukleotid almashinuvlarini teng ehtimolli deb qabul qiluvchi bazaviy evolyutsion model.",
      },
      {
        term: "MEGA X",
        definition:
          "Tekislash, masofa hisoblash, model tanlash va filogenetik daraxt qurishni birlashtirgan bepul dastur.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "30 nt uzunlikdagi ikki ketma-ketlik 4 pozitsiyada farq qilsa, p-masofa va Juks–Kantor masofasi qancha?",
        answer: "p = 4 / 30 = 0,133; d_JC = −(3/4)·ln(1 − 4·0,133/3) ≈ 0,147.",
      },
      {
        question:
          "«Butstrep qiymati 100 % bo‘lsa, daraxt topologiyasi biologik jihatdan albatta to‘g‘ri» degan fikr to‘g‘rimi?",
        answer:
          "Noto‘g‘ri. Butstrep faqat berilgan tekislash ichidagi statistik barqarorlikni o‘lchaydi; agar tekislash noto‘g‘ri yoki sistematik xato (masalan, uzun shoxlar tortishishi) bo‘lsa, xato daraxt ham 100 % olishi mumkin.",
      },
      {
        question:
          "500 ta ketma-ketlikni tez tekislash uchun T-Coffee va Clustal Omega dan qaysi birini tanlaysiz?",
        answer:
          "Clustal Omega (yoki MAFFT), chunki u katta ketma-ketlik to‘plamlarida T-Coffee ga qaraganda ancha tez ishlaydi.",
      },
    ],
    keyTerms: [
      "msa",
      "progressiv tekislash",
      "yo‘naltiruvchi daraxt",
      "filogenetik daraxt",
      "klad",
      "butstrep",
      "juks–kantor modeli",
      "mega",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 5-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/05-5_laboratoriya_ishi_ketma_ketliklarning_kop_ma_2940b26a.pdf",
    pdfTitle:
      "5-laboratoriya ishi — Ko‘p martali tekislash va filogenetik daraxtlar (Clustal W, T-Coffee, MEGA X)",
    pdfDocuments: [
      {
        title:
          "5-laboratoriya ishi — Ko‘p martali tekislash va filogenetik daraxtlar (Clustal W, T-Coffee, MEGA X)",
        url: "/assets/aistudio/05-5_laboratoriya_ishi_ketma_ketliklarning_kop_ma_2940b26a.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
  {
    id: "bioinf-lab-6",
    order: 6,
    code: "L06",
    category: "laboratoriya",
    topicLabel: "6-laboratoriya ishi",
    module: "II qism: 3D vizuallashtirish, modellashtirish va molekulyar doking",
    title:
      "Biologik makromolekulalarni vizuallashtirish dasturlari. Aminokislota ketma-ketliklari bo‘yicha fazoviy strukturalarni qurish uchun ma’lumotlar bazalarini tahlil qilish",
    syllabusPoints: [
      "Oqsil strukturasining to‘rt darajasi (birlamchi, ikkilamchi, uchlamchi, to‘rtlamchi) va α-spiral parametrlarini o‘zlashtirish",
      "Tasvirlash usullari (wireframe, ball-and-stick, spacefill/CPK, cartoon, surface) va CPK rang sxemasini farqlash",
      "RCSB PDB (Mol*), ChimeraX va PyMOL da 4HHB (gemoglobin) va 1MBN (mioglobin) strukturalarini vizuallashtirish",
      "AlphaFold DB (pLDDT shkalasi) va SWISS-MODEL Repository bazalarida P01308 va boshqa oqsillar modellarini tahlil qilish",
    ],
    studyNotes:
      "Ikkilamchi strukturani ko‘rish uchun cartoon (lenta), faol markaz va ligand uchun ball-and-stick, sirt va bo‘shliqlar uchun surface/spacefill eng qulay. CPK sxemasida C — kulrang, O — qizil, N — ko‘k, S — sariq, H — oq. AlphaFold DB da pLDDT > 90 juda yuqori ishonch, < 50 esa ko‘pincha ichki tartibsiz soha (IDR) yoki signal peptidni bildiradi.",
    overview:
      "6-laboratoriya ishida biologik makromolekulalarni 3D vizuallashtirish dasturlari (Mol*, ChimeraX, PyMOL, RasMol, Jmol, VMD), tasvirlash modellari va CPK rang sxemasi hamda eksperimental (PDB) va bashorat qilingan (AlphaFold DB, SWISS-MODEL Repository) struktura bazalari o‘rganiladi.",
    sections: [
      {
        heading: "6.1. Oqsil struktura darajalari va tasvirlash modellari",
        content:
          "Oqsil strukturasi 4 darajada tashkil topgan: birlamchi (aminokislota ketma-ketligi), ikkilamchi (vodorod bog‘li α-spiral: 3,6 qoldiq/aylanish, qadam 5,4 Å, 1,5 Å/qoldiq; β-qatlam), uchlamchi (gidrofob, ion, disulfid bog‘li 3D taxlanish) va to‘rtlamchi (masalan, gemoglobin 4HHB — α₂β₂ tetramer: A, C — α; B, D — β).",
        highlights: [
          "Cartoon (lenta) — ikkilamchi strukturani (α-spiral, β-strelka) yaqqol ko‘rsatadi",
          "Ball-and-stick — ligand va faol markaz qoldiqlari bog‘larini ko‘rish uchun qulay",
          "Spacefill (CPK) — Van-der-Vaals radiusidagi sharlar; Molekulyar sirt (surface) — erituvchiga ochiq yuza va elektrostatik potensial",
          "CPK ranglari: C — kulrang, O — qizil, N — ko‘k, S — sariq, H — oq, P — to‘q sariq",
        ],
      },
      {
        heading: "6.2. Vizuallashtirish dasturlari va AlphaFold DB / SWISS-MODEL",
        content:
          "Eksperimental strukturalar soni (PDB da 200 ming+) ma’lum ketma-ketliklardan (UniProt da yuzlab million) ancha kam bo‘lgani uchun AlphaFold DB (200 million+ model) va SWISS-MODEL Repository yaratilgan. Har bir qoldiq uchun pLDDT (0–100) mahalliy ishonch ko‘rsatkichi beriladi.",
        highlights: [
          "Mol* (Mol-star) — RCSB PDB va PDBe ning tezkor veb-ko‘ruvchisi; PyMOL — chop etish sifati va Python skriptlari",
          "UCSF ChimeraX — strukturalarni ustma-ust qo‘yish, sirt va krio-EM xaritalari; VMD — molekulyar dinamika",
          "pLDDT > 90 (to‘q ko‘k) — juda yuqori ishonch; 70–90 — ishonchli; 50–70 — past; < 50 (to‘q sariq) — tartibsiz soha",
        ],
      },
      {
        heading: "6.3. Laboratoriya topshiriqlari: 4HHB, 1MBN va P01308",
        content:
          "RCSB PDB Mol* ko‘ruvchisida 4HHB ning cartoon, ball-and-stick, spacefill va surface ko‘rinishlari olinadi, gem guruhidan 5 Å masofadagi qoldiqlar ajratiladi; ChimeraX/PyMOL da 1MBN ochiladi hamda UniProt P01308 uchun AlphaFold DB va SWISS-MODEL modellarida signal peptid va C-peptidning pLDDT qiymatlari tahlil qilinadi.",
        highlights: [
          "Faol markaz slaydida oqsilni cartoon (yoki shaffof sirt), ligand va faol qoldiqlarni ball-and-stick ko‘rinishida birlashtirish tavsiya etiladi",
          "Kerakli vositalar: RCSB PDB (Mol*), AlphaFold DB, SWISS-MODEL Repository, ChimeraX / PyMOL",
        ],
      },
    ],
    comparisonTable: {
      title: "3D tasvirlash modellari va struktura bazalari",
      columns: ["Model / Baza", "Asosiy xususiyati", "Qachon qo‘llaniladi"],
      rows: [
        [
          "Wireframe (simli)",
          "Atomlararo bog‘lar yupqa chiziq bilan",
          "Kimyoviy bog‘lar tuzilishini tez ko‘rish",
        ],
        [
          "Ball-and-stick",
          "Shar atomlar va sterjen bog‘lar",
          "Ligand va katalitik faol markaz tahlili",
        ],
        [
          "Cartoon (lenta)",
          "Spiral va β-strelkalar ko‘rinishi",
          "Ikkilamchi va domen strukturasini ko‘rsatish",
        ],
        [
          "Surface / Spacefill",
          "Erituvchiga ochiq sirt / VdW sharlar",
          "Bog‘lanish cho‘ntaklari, shakl va zaryad taqsimoti",
        ],
        [
          "AlphaFold DB",
          "200M+ AI bashorat modeli (pLDDT)",
          "PDB da eksperimental strukturasi bo‘lmagan oqsillar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Cartoon (lenta) modeli",
        definition:
          "Oqsil asosiy zanjirini α-spirallar va β-strelkalar shaklida ko‘rsatuvchi tasvir usuli.",
      },
      {
        term: "Spacefill (CPK)",
        definition:
          "Atomlarni Van-der-Vaals radiusidagi to‘liq hajmli sharlar bilan tasvirlash usuli.",
      },
      {
        term: "Molekulyar sirt",
        definition: "Erituvchi molekulasi (suv) tega oladigan makromolekula tashqi yuzasi.",
      },
      {
        term: "AlphaFold DB",
        definition:
          "DeepMind va EMBL-EBI ning chuqur o‘rganish orqali bashorat qilingan 200M+ oqsil modellari bazasi.",
      },
      {
        term: "pLDDT",
        definition:
          "AlphaFold modelida har bir aminokislota qoldig‘i uchun mahalliy ishonchlilik bahosi (0–100).",
      },
      {
        term: "Mol*",
        definition: "RCSB PDB va PDBe portallarida o‘rnatilgan zamonaviy veb-asosli 3D ko‘ruvchi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "α-spiralda 1 qoldiqqa ko‘tarilish 1,5 Å va 3,6 qoldiq/aylanish bo‘lsa, 18 qoldiqli spiral uzunligi va aylanishlari soni qancha?",
        answer: "Uzunligi = 18 × 1,5 Å = 27 Å; aylanishlar soni = 18 / 3,6 = 5 aylanish.",
      },
      {
        question:
          "Nima uchun butun fermentni spacefill ko‘rinishida tasvirlaganda faol markazdagi ligand ko‘rinmay qoladi?",
        answer:
          "Spacefill atomlarni to‘liq Van-der-Vaals radiusida chizib, oqsil ichki bo‘shlig‘ini to‘sib qo‘yadi; oqsilni cartoon (yoki shaffof surface), ligandni esa ball-and-stick ko‘rinishida berish kerak.",
      },
      {
        question:
          "AlphaFold modelida N-terminal 1–40 qoldiqlarda pLDDT < 35 chiqishi nimani anglatishi mumkin?",
        answer:
          "Bu soha yuqori harakatchan, qat’iy 3D strukturaga ega bo‘lmagan ichki tartibsiz hudud (IDR) yoki kesilib ketadigan signal peptid bo‘lishi ehtimoli yuqori.",
      },
    ],
    keyTerms: [
      "vizuallashtirish",
      "cartoon (lenta) modeli",
      "spacefill (cpk)",
      "molekulyar sirt",
      "alphafold db",
      "plddt",
      "mol*",
      "to‘rtlamchi struktura",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 6-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/06-6_laboratoriya_ishi_biologik_makromolekulalarn_9893d43a.pdf",
    pdfTitle:
      "6-laboratoriya ishi — Biologik makromolekulalarni vizuallashtirish va struktura bazalari",
    pdfDocuments: [
      {
        title:
          "6-laboratoriya ishi — Biologik makromolekulalarni vizuallashtirish va struktura bazalari",
        url: "/assets/aistudio/06-6_laboratoriya_ishi_biologik_makromolekulalarn_9893d43a.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
  {
    id: "bioinf-lab-7",
    order: 7,
    code: "L07",
    category: "laboratoriya",
    topicLabel: "7-laboratoriya ishi",
    module: "II qism: 3D vizuallashtirish, modellashtirish va molekulyar doking",
    title:
      "PDB va UniProt ma’lumotlar bazalaridan foydalanish. Modeller dasturining ishlash tamoyili",
    syllabusPoints: [
      "UniProtKB/Swiss-Prot (reviewed) va TrEMBL (unreviewed) farqi hamda P69905 (HBA_HUMAN) yozuvi bo‘limlarini tahlil qilish",
      "PDB yozuvlaridan (4HHB, 1LYZ) eksperimental usul, ajratish qobiliyati (Å), R-work/R-free va ligandlarni ajratish",
      "PDB faylining 80 belgili tuzilishi (HEADER, EXPDTA, REMARK 2, SEQRES, HELIX, ATOM, HETATM) va mmCIF formatini o‘rganish",
      "Modeller dasturining fazoviy cheklovlar tamoyili, PIR (.ali) tekislash fayli, AutoModel skripti hamda DOPE/GA341 baholarini tahlil qilish",
    ],
    studyNotes:
      "PDB faylida standart aminokislota atomlari ATOM, ligandlar, ionlar va suv molekulalari esa HETATM qatorlarida yoziladi. Modeller (Šali va Blundell) shablon (.pdb) va PIR (.ali) tekislash fayli asosida fazoviy cheklovlarni optimallashtirib modellar quradi; DOPE qancha manfiy bo‘lsa va GA341 > 0,7 bo‘lsa, model shuncha sifatli hisoblanadi.",
    overview:
      "7-laboratoriya ishida UniProtKB va PDB ma’lumotlar bazalari yozuvlarini chuqur tahlil qilish, PDB faylining ATOM/HETATM tuzilishini o‘qish hamda Modeller dasturida gomologik modellashtirish bosqichlari va DOPE/GA341 sifat ko‘rsatkichlarini baholash o‘rganiladi.",
    sections: [
      {
        heading: "7.1. UniProtKB va PDB (wwPDB) bazalari tuzilishi",
        content:
          "UniProtKB mutaxassislar qo‘lda izohlagan Swiss-Prot (yarim million+ ishonchli yozuv) va avtomatik TrEMBL qismlaridan iborat. 1971-yilda tashkil topgan PDB (wwPDB: RCSB, PDBe, PDBj, BMRB) har bir 3D strukturaga 4 belgili PDB ID (4HHB, 1LYZ) beradi.",
        highlights: [
          "UniProt bo‘limlari: Function, Subcellular location, Disease & Variants (masalan, talassemiya mutatsiyalari), PTM/Processing, Structure",
          "Eksperimental usullar: Rentgen-struktura tahlili (X-ray), YaMR-spektroskopiya (NMR), Krio-EM (cryo-EM)",
          "R-free va R-work farqi 0,05 dan katta bo‘lsa, modelda ortiqcha moslashtirish (overfitting) xavfi mavjud",
        ],
      },
      {
        heading: "7.2. PDB fayl formati va mmCIF/PDBx",
        content:
          "An’anaviy PDB fayli qat’iy 80 belgili satrlardan iborat matn faylidir. Katta makromolekulyar komplekslar (99 999 dan ko‘p atom yoki 62 dan ko‘p zanjir) uchun hozirda kengayuvchan mmCIF/PDBx formati rasmiy standart hisoblanadi.",
        highlights: [
          "ATOM yozuvi maydonlari: atom raqami, atom nomi, qoldiq nomi, zanjir, qoldiq raqami, (x, y, z) Å, bandlik, B-faktor, element",
          "HETATM yozuvi — nostandart guruhlar (4HHB da HEM, PO4, HOH suv molekulalari)",
          "HEADER, EXPDTA, REMARK 2 (ajratish qobiliyati), SEQRES, HELIX/SHEET qatorlari metama’lumotlarni saqlaydi",
        ],
      },
      {
        heading: "7.3. Modeller yordamida gomologik modellashtirish",
        content:
          "Gomologik modellashtirish evolyutsiyada 3D struktura ketma-ketlikdan sekinroq o‘zgarishi tamoyiliga tayanadi. Modeller shablondan olingan masofa/burchak cheklovlari va CHARMM stereokimyoviy cheklovlarini birlashtirib, Python AutoModel skripti orqali bir nechta nomzod model quradi.",
        highlights: [
          "Kiruvchi fayllar: shablon koordinatalari (.pdb) va PIR formatidagi tekislash fayli (.ali — structureX va sequence)",
          "DOPE (Discrete Optimized Protein Energy) — qancha manfiy bo‘lsa, shuncha yaxshi (masalan, −12890 > −12450)",
          "GA341 — 0 dan 1 gacha shkala; > 0,7 qiymat to‘g‘ri taxlanishga ega ishonchli modelni bildiradi",
        ],
      },
    ],
    comparisonTable: {
      title: "PDB yozuv turlari va Modeller baholash ko‘rsatkichlari",
      columns: ["Element / Ko‘rsatkich", "Manba / Format", "Tavsifi", "Mezon / Misol"],
      rows: [
        [
          "ATOM",
          "PDB fayli",
          "Standart aminokislota va nukleotid atomlari",
          "ATOM 1 N VAL A 1 6.204 ...",
        ],
        ["HETATM", "PDB fayli", "Ligandlar, kofaktorlar, ionlar va suv", "HEM, PO4, HOH (4HHB)"],
        [
          "PIR (.ali)",
          "Modeller kirishi",
          "Shablon (structureX) va nishon (sequence) tekislashi",
          "Ketma-ketlik oxiri «*» bilan tugaydi",
        ],
        [
          "DOPE",
          "Modeller chiqishi",
          "Statistik energiya potensiali",
          "Qancha manfiy bo‘lsa, shuncha yaxshi",
        ],
        [
          "GA341",
          "Modeller chiqishi",
          "Kompozit taxlanish ishonchliligi",
          "0–1 oralig‘i; > 0,7 ishonchli",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "UniProtKB / Swiss-Prot",
        definition:
          "Oqsil ketma-ketliklari va funksiyalarining asosiy bazasi; Swiss-Prot — qo‘lda tekshirilgan qismi.",
      },
      {
        term: "PDB ID",
        definition:
          "Protein Data Bank dagi har bir 3D strukturaning 4 belgili noyob kodi (masalan, 4HHB, 1LYZ).",
      },
      {
        term: "HETATM",
        definition:
          "PDB faylida nostandart guruhlar (ligand, metall ioni, suv molekulasi) koordinatalari yozuvi.",
      },
      {
        term: "Shablon (Template)",
        definition:
          "Gomologik modellashtirishda asos sifatida olinadigan eksperimental ma’lum gomolog struktura.",
      },
      {
        term: "DOPE",
        definition:
          "Modeller da qurilgan modellarni saralash uchun statistik potensial (eng manfiy qiymat eng yaxshi).",
      },
      {
        term: "mmCIF / PDBx",
        definition:
          "Katta komplekslar va kengaytirilgan metama’lumotlar uchun zamonaviy standart struktura fayl formati.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Modeller qurgan 5 ta modelning DOPE ballari −12450, −12890, −12310, −12760, −12530 bo‘lsa, qaysi biri eng yaxshi?",
        answer:
          "2-model (DOPE = −12890), chunki DOPE statistik energiya bo‘lib, qiymati qancha manfiy bo‘lsa model shuncha sifatli.",
      },
      {
        question:
          "Shablon tanlashda A (65 % o‘xshashlik, 60 % qamrov, 2,8 Å) va B (48 % o‘xshashlik, 98 % qamrov, 1,6 Å) dan qaysi biri afzal?",
        answer:
          "B shabloni afzalroq (yoki ko‘p shablonli modellashtirish), chunki A da oqsilning 40 % qismi umuman qamralmaydi, B esa 98 % qamrov va juda yuqori 1,6 Å aniqlikka ega.",
      },
      {
        question:
          "PDB faylida (2,0; 3,0; 1,0) va (4,0; 6,0; 7,0) Å koordinatali ikki atom orasidagi masofa qancha?",
        answer: "d = √[(4−2)² + (6−3)² + (7−1)²] = √(4 + 9 + 36) = √49 = 7,0 Å.",
      },
    ],
    keyTerms: [
      "uniprotkb",
      "swiss-prot",
      "pdb id",
      "ajratish qobiliyati",
      "r-faktor",
      "hetatm",
      "shablon",
      "dope",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 7-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/07-7_laboratoriya_ishi_pdb_va_uniprot_malumotlar__8f9d361b.pdf",
    pdfTitle: "7-laboratoriya ishi — PDB, UniProt ma’lumotlar bazalari va Modeller tamoyili",
    pdfDocuments: [
      {
        title: "7-laboratoriya ishi — PDB, UniProt ma’lumotlar bazalari va Modeller tamoyili",
        url: "/assets/aistudio/07-7_laboratoriya_ishi_pdb_va_uniprot_malumotlar__8f9d361b.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
  {
    id: "bioinf-lab-8",
    order: 8,
    code: "L08",
    category: "laboratoriya",
    topicLabel: "8-laboratoriya ishi",
    module: "II qism: 3D vizuallashtirish, modellashtirish va molekulyar doking",
    title: "Aminokislota ketma-ketligi bo‘yicha fazoviy strukturani qurish",
    syllabusPoints: [
      "Anfinsen tajribasi, CASP tanlovi va 4 asosiy struktura bashorati usulini (gomologik, tredding, ab initio, deep learning) o‘rganish",
      "SWISS-MODEL serverida (SMTL, ProMod3) shablon qidirish, tanlash va 3D model qurishni bajarish",
      "Model sifatini 4 yo‘nalishda (GMQE, QMEAN Z-ball, Ramachandran diagrammasi, mahalliy sifat grafigi) kompleks baholash",
      "SWISS-MODEL va AlphaFold/ColabFold modellarini ChimeraX da eksperimental struktura bilan ustma-ust qo‘yib RMSD ni hisoblash",
    ],
    studyNotes:
      "Gomologik modellashtirish shablon o‘xshashligi > 30 % bo‘lganda, tredding (Phyre2, I-TASSER) 20–30 % («alacakorong‘i zona») da, AlphaFold2/3 va ESMFold esa chuqur o‘rganish orqali shablonsiz ham yuqori aniqlikda ishlaydi. Model sifati faqat GMQE (0–1) bilan emas, balki QMEAN Z-ball (> −4), mahalliy grafik, Ramachandran (> 90 % qulay) va Cα RMSD (< 2 Å) bilan kompleks baholanadi.",
    overview:
      "8-laboratoriya ishida aminokislota ketma-ketligidan oqsilning 3D strukturasini bashorat qilish usullari, SWISS-MODEL serverida model qurish va tekshirish hamda AlphaFold modeli bilan ChimeraX da ustma-ust qo‘yib RMSD hisoblash amaliyoti bajariladi.",
    sections: [
      {
        heading: "8.1. Struktura bashorati usullari va qo‘llanish chegaralari",
        content:
          "K. Anfinsen tajribalari oqsilning fazoviy tuzilishi uning aminokislota ketma-ketligi bilan belgilanishini isbotladi. Usullar har ikki yilda CASP tanlovida sinovdan o‘tadi va 4 asosiy yo‘nalishga bo‘linadi.",
        highlights: [
          "Gomologik modellashtirish (SWISS-MODEL, Modeller): shablon o‘xshashligi > 30 % (> 50 % da yuqori aniqlik)",
          "Tredding / Fold recognition (Phyre2, I-TASSER): 20–30 % «alacakorong‘i zona» (twilight zone)",
          "Ab initio / de novo (Rosetta): shablonsiz, fizik-kimyoviy tamoyillar va fragmentlar asosida",
          "Chuqur o‘rganish (AlphaFold2 — CASP14, AlphaFold3, RoseTTAFold, ESMFold): koevolyutsion MSA + neyron tarmoqlar",
        ],
      },
      {
        heading: "8.2. SWISS-MODEL ish bosqichlari va modelni kompleks baholash",
        content:
          "SWISS-MODEL nishon ketma-ketlikni qabul qilib SMTL kutubxonasidan BLAST/HHblits bilan shablon qidiradi, GMQE va oligomer holati bo‘yicha saralaydi, ProMod3 da model quradi va QMEAN bilan baholaydi.",
        highlights: [
          "Global sifat: GMQE (0–1, kattaroq yaxshi) va QMEAN Z-ball (−4 dan past qiymat sifatsiz model belgisi)",
          "Mahalliy sifat: har bir qoldiq bo‘yicha QMEAN (< 0,6 — past sifatli halqa/uch) va AlphaFold pLDDT",
          "Stereokimyoviy tekshiruv: Ramachandran (> 90–98 % qulay sohada, outliers < 2 %), MolProbity / SAVES (PROCHECK)",
          "Eksperimental taqqoslash: RMSD = √[(1/N)·Σ dᵢ²] — Cα RMSD < 2 Å juda o‘xshash strukturalarni ko‘rsatadi",
        ],
      },
      {
        heading: "8.3. Laboratoriya topshiriqlari: SWISS-MODEL, AlphaFold va ChimeraX",
        content:
          "Odam mioglobini (P02144) yoki o‘qituvchi bergan oqsil uchun SWISS-MODEL da 5 ta shablon jadvali tuziladi, eng yaxshi model qurilib «Structure Assessment» (Ramachandran) tekshiriladi, so‘ngra AlphaFold DB va PDB eksperimental strukturasi bilan ChimeraX da matchmaker #2,3 to #1 orqali RMSD solishtiriladi.",
        highlights: [
          "Yuqori global GMQE (0,82) bo‘lsa ham, faol markazdagi mahalliy QMEAN < 0,4 bo‘lsa doking uchun xavfli hisoblanadi",
          "Kerakli vositalar: SWISS-MODEL, AlphaFold DB / ColabFold, MolProbity, ChimeraX / PyMOL",
        ],
      },
    ],
    comparisonTable: {
      title: "Oqsil 3D strukturasini bashorat qilish usullari",
      columns: ["Usul", "Shablon o‘xshashligi", "Asosiy dasturlar", "Kuchli tomoni"],
      rows: [
        [
          "Gomologik modellashtirish",
          "> 30 % (> 50 % yuqori aniqlik)",
          "SWISS-MODEL, Modeller",
          "Tez, ishonchli va oligomer holatini saqlaydi",
        ],
        [
          "Tredding (Fold recognition)",
          "20–30 % (twilight zone)",
          "Phyre2, I-TASSER",
          "Uzoq gomolog taxlanishini aniqlaydi",
        ],
        [
          "Ab initio / de novo",
          "Shablon talab etilmaydi",
          "Rosetta",
          "Yangi taxlanish turlari uchun fizik asos",
        ],
        [
          "Chuqur o‘rganish (AI)",
          "Istalgan (MSA asosida)",
          "AlphaFold2/3, RoseTTAFold, ESMFold",
          "Eksperimental aniqlikka yaqin 3D bashorat",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Struktura bashorati",
        definition:
          "Oqsilning 3D fazoviy strukturasini faqat aminokislota ketma-ketligidan hisoblash yo‘li bilan aniqlash.",
      },
      {
        term: "Tredding (Fold recognition)",
        definition:
          "Ketma-ketlikni ma’lum fazoviy taxlanish turlariga moslashtirish orqali struktura bashorat qilish.",
      },
      {
        term: "CASP",
        definition:
          "Har ikki yilda o‘tkaziladigan oqsil strukturasini bashorat qilish usullari xalqaro tanlovi.",
      },
      {
        term: "GMQE",
        definition: "SWISS-MODEL dagi modelning 0 dan 1 gacha bo‘lgan global sifat bahosi.",
      },
      {
        term: "QMEAN",
        definition:
          "Model sifatini statistik potensiallar va eksperimental strukturalar bilan qiyoslab baholovchi funksiya.",
      },
      {
        term: "RMSD",
        definition:
          "Ustma-ust qo‘yilgan ikki strukturaning mos atomlari orasidagi o‘rtacha kvadratik chetlanish (Å).",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Beshta mos atom juftligi orasidagi masofalar 0,8; 1,2; 0,5; 2,0; 1,1 Å bo‘lsa, RMSD nechaga teng?",
        answer: "RMSD = √[(0,64 + 1,44 + 0,25 + 4,00 + 1,21) / 5] = √(7,54 / 5) = √1,508 ≈ 1,23 Å.",
      },
      {
        question:
          "Ramachandran tahlilida 82 % qulay, 10 % ruxsat etilgan va 8 % ruxsat etilmagan sohada chiqqan model sifatli hisoblanadimi?",
        answer:
          "Yo‘q; sifatli modelda > 90 % qoldiq qulay sohada, ruxsat etilmaganlar esa < 2 % bo‘lishi lozim. 8 % outlier stereokimyoviy xatolar va qayta optimallashtirish zarurligini ko‘rsatadi.",
      },
      {
        question:
          "Nima uchun faqat yuqori GMQE ko‘rsatkichiga tayanib modelni barcha sohalarda ishonchli deb bo‘lmaydi?",
        answer:
          "Chunki GMQE global o‘rtacha bahodir; umumiy taxlanish yaxshi bo‘lsa-da, ayrim halqalar yoki faol markaz qoldiqlarida mahalliy QMEAN past (< 0,6) bo‘lishi mumkin.",
      },
    ],
    keyTerms: [
      "struktura bashorati",
      "tredding",
      "casp",
      "gmqe",
      "qmean",
      "rmsd",
      "alphafold",
      "ramachandran diagrammasi",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 8-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/08-8_laboratoriya_ishi_aminokislota_ketma_ketligi_62350185.pdf",
    pdfTitle:
      "8-laboratoriya ishi — Aminokislota ketma-ketligi bo‘yicha fazoviy strukturani qurish",
    pdfDocuments: [
      {
        title:
          "8-laboratoriya ishi — Aminokislota ketma-ketligi bo‘yicha fazoviy strukturani qurish",
        url: "/assets/aistudio/08-8_laboratoriya_ishi_aminokislota_ketma_ketligi_62350185.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
  {
    id: "bioinf-lab-9",
    order: 9,
    code: "L09",
    category: "laboratoriya",
    topicLabel: "9-laboratoriya ishi",
    module: "II qism: 3D vizuallashtirish, modellashtirish va molekulyar doking",
    title: "Oqsil strukturalarini RasMol va Chimera dasturlarida tasvirlash",
    syllabusPoints: [
      "RasMol buyruqlar tili (load, restrict, cartoon, color structure/chain/temperature, ssbonds, select, write gif) ni o‘zlashtirish",
      "UCSF Chimera va ChimeraX atom spetsifikatorlari (# model, / zanjir, : qoldiq, @ atom) va buyruq satri bilan ishlash",
      "Lizotsimda (1LYZ) 4 ta disulfid bog‘ va katalitik Glu35/Asp52 qoldiqlarini, gemoglobinda (4HHB) proksimal gistidin (His87/His92) – Fe masofasini o‘lchash",
      "MatchMaker yordamida gemoglobin α-zanjiri (4HHB/A) va mioglobin (1MBN) ni ustma-ust qo‘yish hamda chop etishga tayyor tasvir olish",
    ],
    studyNotes:
      "RasMol yengil buyruq satri dasturi bo‘lib, color temperature B-faktor (qizil — yuqori harakatchanlik) ni ko‘rsatadi. ChimeraX da spetsifikator /A:87@NE2 (zanjir A, 87-qoldiq, NE2 atomi) ko‘rinishida yoziladi. Vodorod bog‘ining odatiy donor–akseptor masofasi 2,7–3,3 Å; gemoglobin α va mioglobin ketma-ketligi atigi ~25 % o‘xshash bo‘lsa-da, MatchMaker da Cα RMSD ~1,6 Å chiqib umumiy globin taxlanishini tasdiqlaydi.",
    overview:
      "9-laboratoriya ishida RasMol va UCSF Chimera / ChimeraX dasturlarida buyruqlar yordamida oqsil strukturalarini (1LYZ, 4HHB, 1MBN, 1HSG) tasvirlash, disulfid va vodorod bog‘larini aniqlash, atomlararo masofalarni o‘lchash hamda MatchMaker bilan strukturalarni solishtirish bajariladi.",
    sections: [
      {
        heading: "9.1. RasMol buyruqlar tili va rang sxemalari",
        content:
          "Rojer Seyl (1992) yaratgan RasMol kam resurs talab qiladi va grafik hamda buyruqlar oynasidan iborat. Murakkab tanlash ifodalari (select his and :A, select within(5.0, hem)) orqali istalgan qoldiq, ligand va disulfid bog‘larni (ssbonds 0.3) ajratish mumkin.",
        highlights: [
          "color cpk — atomlar bo‘yicha; color chain — zanjirlar; color group — N→C kamalak ranglari",
          "color structure — α-spiral pushti, β-qatlam sariq, burilish ko‘k",
          "color temperature — B-faktor bo‘yicha (ko‘k — qattiq/past B-faktor, qizil — harakatchan/yuqori B-faktor)",
        ],
      },
      {
        heading: "9.2. UCSF Chimera / ChimeraX spetsifikatorlari va tahlil vositalari",
        content:
          "UCSF Chimera va uning zamonaviy avlodi ChimeraX masofa/burchak o‘lchash, vodorod bog‘larini topish (hbonds / FindHBond), elektrostatik sirt (Coulombic surface coloring) va strukturalarni ketma-ketlik asosida ustma-ust qo‘yish (MatchMaker) imkonini beradi.",
        highlights: [
          "ChimeraX spetsifikatori: #model /zanjir :qoldiq @atom (masalan, /B:90-100 yoki /A:87@NE2)",
          "Vodorod bog‘i uchun odatiy donor–akseptor masofasi: 2,7–3,3 Å (4,5 Å da vodorod bog‘ hosil bo‘lmaydi)",
          "Chop etish sifati uchun: oq fon va save image.png supersample 3 buyrug‘i",
        ],
      },
      {
        heading: "9.3. Laboratoriya topshiriqlari: 1LYZ, 4HHB va globin taxlanishi",
        content:
          "1LYZ (lizotsim) da 8 ta sistein va 4 ta disulfid bog‘ hamda katalitik Glu35 va Asp52 qoldiqlari ko‘rsatiladi; 4HHB da proksimal gistidin (α-zanjirda His87, β-zanjirda His92) dan gem temirigacha masofa o‘lchanadi; 4HHB/A va 1MBN matchmaker bilan solishtiriladi.",
        highlights: [
          "Evolyutsion qonuniyat: ketma-ketlik o‘xshashligi past (~25 %) bo‘lsa ham, 3D globin taxlanishi (RMSD ≈ 1,6 Å) saqlanib qoladi",
          "Kerakli vositalar: RasMol 2.7, UCSF Chimera / ChimeraX, PDB fayllar (1CRN, 4HHB, 1LYZ, 1HSG)",
        ],
      },
    ],
    comparisonTable: {
      title: "RasMol va ChimeraX asosiy buyruqlarini taqqoslash",
      columns: ["Amal", "RasMol buyrug‘i", "ChimeraX buyrug‘i"],
      rows: [
        ["Faylni ochish", "load 1lyz.pdb", "open 1lyz (yoki open 4hhb)"],
        ["Lenta ko‘rinishi", "cartoon", "cartoon"],
        ["Zanjir bo‘yicha rang", "color chain", "color bychain"],
        ["Qoldiqni tanlash", "select 35,52 / select his and :A", "select :35,52 / select /A:his"],
        ["Vodorod bog‘lari / Masofa", "hbonds (asosiy)", "hbonds :hem reveal true / distance"],
        ["Tasvirni saqlash", "write gif lyz.gif", "save image.png supersample 3"],
      ],
    },
    keyConcepts: [
      {
        term: "RasMol",
        definition:
          "Rojer Seyl yaratgan, buyruqlar satri orqali boshqariluvchi yengil molekulyar grafika dasturi.",
      },
      {
        term: "UCSF Chimera / ChimeraX",
        definition:
          "Makromolekulalarni vizuallashtirish, tahlil qilish va yuqori sifatli tasvir olish dasturi.",
      },
      {
        term: "Atom spetsifikatori",
        definition:
          "Buyruqlarda aniq model (#), zanjir (/), qoldiq (:) yoki atom (@) ni belgilovchi sintaksis.",
      },
      {
        term: "Disulfid bog‘",
        definition:
          "Ikki sistein qoldig‘ining oltingugurt (SG) atomlari orasidagi kovalent bog‘ (1LYZ da 4 ta).",
      },
      {
        term: "MatchMaker",
        definition:
          "Chimera/ChimeraX da ikki oqsil strukturasini ustma-ust qo‘yib RMSD hisoblovchi vosita.",
      },
      {
        term: "Proksimal gistidin",
        definition:
          "Gemoglobin va mioglobinda gem guruhining temir (Fe) atomiga bevosita koordinatsiyalangan gistidin (His87/His92).",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "RasMol da faqat A zanjirdagi gistidinlarni sharlar bilan ko‘k rangda ko‘rsatish buyruqlarini yozing.",
        answer: "select his and :A; spacefill; color blue.",
      },
      {
        question:
          "ChimeraX da B zanjirining 90–100 qoldiqlarini tanlash spetsifikatori qanday yoziladi?",
        answer: "/B:90-100 (eski Chimera 1.x da esa :90-100.B).",
      },
      {
        question:
          "color temperature buyrug‘i bilan bo‘yalgan strukturada qizil rangli sohalar nimani bildiradi?",
        answer:
          "Yuqori B-faktorli sohalarni — ya’ni kristall strukturada atomlarning issiqlik harakatchanligi va noaniqligi yuqori bo‘lgan (odatda tashqi halqalar) qismlarni bildiradi.",
      },
    ],
    keyTerms: [
      "rasmol",
      "ucsf chimera",
      "chimerax",
      "atom spetsifikatori",
      "disulfid bog‘",
      "matchmaker",
      "b-faktor",
      "proksimal gistidin",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 9-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/09-9_laboratoriya_ishi_oqsil_strukturalarini_rasm_f51f5348.pdf",
    pdfTitle:
      "9-laboratoriya ishi — Oqsil strukturalarini RasMol va Chimera dasturlarida tasvirlash",
    pdfDocuments: [
      {
        title:
          "9-laboratoriya ishi — Oqsil strukturalarini RasMol va Chimera dasturlarida tasvirlash",
        url: "/assets/aistudio/09-9_laboratoriya_ishi_oqsil_strukturalarini_rasm_f51f5348.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
  {
    id: "bioinf-lab-10",
    order: 10,
    code: "L10",
    category: "laboratoriya",
    topicLabel: "10-laboratoriya ishi",
    module: "II qism: 3D vizuallashtirish, modellashtirish va molekulyar doking",
    title: "Ligand–retseptor o‘zaro ta’sirini bashorat qilish. AutoDock dasturi bilan ishlash",
    syllabusPoints: [
      "Ligand–retseptor nokovalent ta’sirlashuvlari, «kalit-qulf» va «induksiyalangan moslik» modellarini o‘zlashtirish",
      "Bog‘lanish energiyasi ΔG va dissotsiatsiya konstantasi K_d bog‘liqligini (ΔG = RT·ln K_d) hisoblash",
      "AutoDock Tools (ADT) da 1HSG (VICh-1 proteazasi) retseptori va MK1 (indinavir) ligandini PDBQT formatida tayyorlash",
      "Grid box ni faol markazga to‘g‘ri joylashtirib AutoDock Vina da doking o‘tkazish hamda redocking (RMSD < 2 Å) orqali tekshirish",
    ],
    studyNotes:
      "Molekulyar doking qidiruv algoritmi va baholash funksiyasidan (scoring function) iborat. AutoDock Vina PDBQT fayllari (PDB + qisman zaryad Q + atom turi T) bilan ishlaydi: retseptorga qutbli vodorodlar va Kollman zaryadlari, ligandga Gasteiger zaryadlari va torsiya daraxti beriladi. Redocking da RMSD < 2 Å parametrlar to‘g‘riligini isbotlaydi; 25 °C da RT = 0,593 kkal/mol.",
    overview:
      "10-laboratoriya ishida molekulyar doking nazariyasi, Gibbs erkin energiyasi (ΔG) va K_d hisoblashlari, AutoDock Tools va AutoDock Vina dasturlarida VICh-1 proteazasi (1HSG) hamda indinavir kompleksi bo‘yicha redocking o‘tkazish va faol markaz ta’sirlashuvlarini tahlil qilish o‘rganiladi.",
    sections: [
      {
        heading: "10.1. Ligand–retseptor ta’sirlashuvi, ΔG va K_d bog‘liqligi",
        content:
          "Ligand (substrat, ingibitor, dori) retseptor faol markazi bilan vodorod bog‘lari, ion (tuz ko‘prigi), gidrofob, Van-der-Vaals va π–π stekking kabi nokovalent ta’sirlashuvlar orqali bog‘lanadi. Bog‘lanish kuchi ΔG = RT·ln(K_d) yoki K_d = exp(ΔG / RT) bilan ifodalanadi (25 °C / 298 K da RT = 0,593 kkal/mol).",
        highlights: [
          "E. Fisher «kalit-qulf» modeli — qattiq mos kelish; D. Koshland «induksiyalangan moslik» — ligand ta’sirida konformatsion moslashuv",
          "ΔG = −6 kkal/mol → K_d ≈ 40 mkM; ΔG = −8 kkal/mol → K_d ≈ 1,4 mkM; ΔG = −10 kkal/mol → K_d ≈ 47 nM",
          "Samarali dori nomzodlari uchun odatda nanomolyar (nM) darajadagi K_d talab etiladi",
        ],
      },
      {
        heading: "10.2. AutoDock 4, AutoDock Vina va PDBQT tayyorlash bosqichlari",
        content:
          "AutoDock 4 oldindan hisoblangan AutoGrid xaritalari va Lamark genetik algoritmidan, AutoDock Vina (Trott va Olson, 2010) esa tezkor optimallashtirish va empirik baholash funksiyasidan foydalanadi. Ikkalasi ham PDBQT formatida ishlaydi.",
        highlights: [
          "Retseptor tayyorlash: suv (HOH) va ortiqcha ligandlarni o‘chirish → qutbli vodorodlar qo‘shish → Kollman zaryadlari → PDBQT",
          "Ligand tayyorlash: 3D struktura (PubChem SDF/PDB) → vodorodlar + Gasteiger zaryadlari → Torsion Tree (aylanuvchi bog‘lar) → PDBQT",
          "Grid box: faol markazni to‘liq qamrab oluvchi aniq o‘lcham (masalan, 22×22×22 Å); juda katta quti (60×60×60 Å) noto‘g‘ri sirt pozalariga olib keladi",
        ],
      },
      {
        heading: "10.3. Redocking validatsiyasi va ta’sirlashuvlarni tahlil qilish",
        content:
          "Doking protokoli to‘g‘riligini tekshirish uchun kristall ligand (1HSG da MK1 — indinavir) ajratilib qayta joylashtiriladi (redocking). Agar eng yaxshi poza va kristall struktura orasidagi RMSD < 2,0 Å bo‘lsa, grid box va exhaustiveness (odatda 8–16) to‘g‘ri tanlangan hisoblanadi.",
        highlights: [
          "Ishga tushirish buyrug‘i: vina --config conf.txt --log log.txt (num_modes = 9)",
          "1HSG faol markazining asosiy qoldiqlari: Asp25 (A), Asp25′ (B), Gly27, Ile50",
          "Faqat eng past ΔG ga tayanish yetarli emas — vodorod bog‘lari, faol markazdagi to‘g‘ri orientatsiya, ADMET va eksperimental tekshiruv zarur",
        ],
      },
    ],
    comparisonTable: {
      title: "Molekulyar doking asosiy bosqichlari va parametrlari",
      columns: ["Bosqich / Parametr", "Vosita / Format", "Asosiy amal", "Sifat mezoni"],
      rows: [
        [
          "Retseptor tayyorlash",
          "AutoDock Tools → .pdbqt",
          "Suvni o‘chirish, qutbli H, Kollman zaryadi",
          "Faol markaz ochiq va toza",
        ],
        [
          "Ligand tayyorlash",
          "ADT / Open Babel → .pdbqt",
          "Gasteiger zaryadi, Torsion Tree (aylanuvchi bog‘lar)",
          "To‘g‘ri 3D geometriya va protonatsiya",
        ],
        [
          "Grid box",
          "conf.txt (center, size)",
          "Faol markazni qamrab olish (targeted docking)",
          "Ligand + 8–10 Å zaxira (~22×22×22 Å)",
        ],
        [
          "Vina doking",
          "AutoDock Vina",
          "exhaustiveness = 8–16, num_modes = 9",
          "Affinity (kkal/mol), barqaror pozalar",
        ],
        [
          "Redocking tekshiruvi",
          "PyMOL / ChimeraX",
          "Kristall ligand bilan ustma-ust qo‘yish",
          "RMSD < 2,0 Å (protokol ishonchli)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Molekulyar doking",
        definition:
          "Ligandning retseptor faol markazidagi eng qulay pozasi va bog‘lanish energiyasini bashorat qilish usuli.",
      },
      {
        term: "Baholash funksiyasi",
        definition:
          "Scoring function — har bir ligand pozasining bog‘lanish energiyasini (ΔG, kkal/mol) hisoblovchi funksiya.",
      },
      {
        term: "Grid box",
        definition:
          "Retseptor faol markazi atrofida doking qidiruvi olib boriladigan 3D qidiruv sohasi.",
      },
      {
        term: "PDBQT",
        definition:
          "AutoDock fayl formati: koordinatalar (PDB) + qisman zaryadlar (Q) + atom turlari (T).",
      },
      {
        term: "Redocking",
        definition:
          "Kristall kompleksdagi ligandni qayta doking qilib protokol aniqligini (RMSD < 2 Å) tekshirish usuli.",
      },
      {
        term: "Virtual skrining",
        definition:
          "Katta kimyoviy kutubxonalardan istiqbolli dori nomzodlarini doking orqali saralab olish jarayoni.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "K_d = 10 nM (10⁻⁸ M) bo‘lgan ingibitor uchun 298 K (RT = 0,593 kkal/mol) da ΔG nechaga teng?",
        answer: "ΔG = RT·ln(K_d) = 0,593 · ln(10⁻⁸) = 0,593 · (−18,42) ≈ −10,9 kkal/mol.",
      },
      {
        question: "Redocking natijasida eng yaxshi poza RMSD = 3,8 Å chiqsa, bu nimani bildiradi?",
        answer:
          "Parametrlar yetarlicha aniq emas (ishonchli chegara RMSD < 2 Å). Grid box markazi va o‘lchamini faol markazga aniqlashtirish, exhaustiveness ni oshirish hamda protonatsiya/tuzilishni tekshirish zarur.",
      },
      {
        question:
          "Retseptor tayyorlashda Kollman, ligand tayyorlashda esa qaysi qisman zaryadlar beriladi?",
        answer:
          "Retseptor (oqsil) ga Kollman zaryadlari va faqat qutbli vodorodlar, kichik molekula (ligand) ga esa Gasteiger zaryadlari beriladi.",
      },
    ],
    keyTerms: [
      "ligand",
      "retseptor",
      "molekulyar doking",
      "baholash funksiyasi",
      "grid box",
      "pdbqt",
      "kd",
      "virtual skrining",
    ],
    references:
      "Ro‘ziboyev H., Komilova N., Rajabova G. Bioinformatika (2023) · 10-laboratoriya ishi",
    pdfUrl: "/assets/aistudio/10-10_laboratoriya_ishi_ligand_retseptor_ozaro_ta_9f558d2f.pdf",
    pdfTitle:
      "10-laboratoriya ishi — Ligand–retseptor o‘zaro ta’sirini bashorat qilish (AutoDock Vina)",
    pdfDocuments: [
      {
        title:
          "10-laboratoriya ishi — Ligand–retseptor o‘zaro ta’sirini bashorat qilish (AutoDock Vina)",
        url: "/assets/aistudio/10-10_laboratoriya_ishi_ligand_retseptor_ozaro_ta_9f558d2f.pdf",
        kind: "Laboratoriya",
      },
    ],
  },
];
