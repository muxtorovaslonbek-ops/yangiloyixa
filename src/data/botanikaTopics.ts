export interface BotanikaTopicSection {
  heading: string;
  content: string;
  highlights?: string[];
}

export interface BotanikaTopicTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface BotanikaKeyConcept {
  term: string;
  definition: string;
}

export interface BotanikaSelfCheck {
  question: string;
  answer: string;
}

export interface BotanikaTopic {
  id: string;
  order: number;
  code: string;
  topicLabel: string;
  semester: "I semestr" | "II semestr";
  title: string;
  syllabusPoints: string[];
  studyNotes: string;
  overview: string;
  sections: BotanikaTopicSection[];
  comparisonTable: BotanikaTopicTable;
  keyConcepts: BotanikaKeyConcept[];
  selfCheckQuestions: BotanikaSelfCheck[];
  keyTerms: string[];
  references: string;
  pdfUrl?: string;
  pdfTitle?: string;
}

export const BOTANIKA_TOPICS: BotanikaTopic[] = [
  {
    id: "bot-1",
    order: 1,
    code: "1",
    topicLabel: "1-mavzu",
    semester: "I semestr",
    title: "Kirish. O‘simliklar dunyosi va uning xilma-xilligi.",
    syllabusPoints: [
      "Botanika fanining predmeti, obyekti, maqsadi va asosiy bo‘limlari (morfologiya, anatomiya, sitologiya, fiziologiya, sistematika, geobotanika).",
      "O‘simliklar dunyosining xilma-xilligi (suvo‘tlar, yo‘sinlar, plaunlar, qirqbo‘g‘imlar, qirqquloqlar, ochiq va yopiq urug‘lilar).",
      "O‘simliklarning tabiatda, biosferada (kislorod va moddalar aylanishida) hamda inson hayotidagi ahamiyati.",
      "O‘zbekistonda botanika fanining rivojlanish tarixi va akademik olimlarning hissasi.",
    ],
    studyNotes:
      "Botanika — o‘simliklar olami, ularning ichki va tashqi tuzilishi, hayotiy jarayonlari, tarqalishi, tasnifi hamda muhofazasini o‘rganadigan kompleks biologik fan. Yer yuzida 390 mingdan ortiq o‘simlik turi mavjud bo‘lib, ular fotosintez orqali organik modda va erkin kislorod hosil qiluvchi asosiy produtsentlardir.",
    overview:
      "Botanika biologiyaning eng qadimiy va keng qamrovli tarmoqlaridan biri bo‘lib, o‘simlik organizmlarini molekulyar-hujayraviy darajadan to yirik o‘simlik jamoalari (fitotsenoz) va biosfera darajasigacha tadqiq etadi. O‘simliklar quyosh energiyasini kimyoviy bog‘lar energiyasiga aylantirib, Yer yuzidagi barcha geterotrof organizmlar uchun oziqa hamda nafas olish uchun kislorod manbayini yaratadi.",
    sections: [
      {
        heading: "1. Botanika fanining predmeti va asosiy bo‘limlari",
        content:
          "Botanika (yunoncha 'botane' — o‘t, o‘simlik) o‘simliklarning tuzilishi, rivojlanishi, ko‘payishi va atrof-muhit bilan o‘zaro ta’sirini o‘rganadi. Zamonaviy botanika quyidagi yirik yo‘nalishlarga bo‘linadi:",
        highlights: [
          "O‘simliklar morfologiyasi — tashqi tuzilish, organlar shakli va evolyutsion o‘zgarishlarini o‘rganadi",
          "O‘simliklar anatomiyasi va sitologiyasi — hujayra va to‘qimalarning mikroskopik ichki tuzilishini tadqiq etadi",
          "O‘simliklar sistematikasi — 390 000+ turni qarindoshlik darajasiga ko‘ra tasniflaydi va ilmiy nomlaydi",
          "Geobotanika va ekologiya — o‘simlik jamoalari (o‘rmon, dasht, cho‘l) va muhit omillarini o‘rganadi",
        ],
      },
      {
        heading: "2. O‘simliklar dunyosining xilma-xilligi",
        content:
          "Evolyutsion taraqqiyot davomida o‘simliklar olami sodda suv muhiti shakllaridan murakkab gulli o‘simliklargacha rivojlangan. Tuban o‘simliklarga (suvo‘tlar) tanasi tallomdan iborat organizmlar kirsa, yuksak o‘simliklar haqiqiy to‘qima va organlarga (ildiz, poya, barg) ega: yo‘sintoifalar, plauntoifalar, qirqbo‘g‘imtoifalar, qirqquloqtoifalar (sporali yuksak o‘simliklar) hamda ochiq urug‘lilar va yopiq urug‘lilar (urug‘li o‘simliklar — eng katta xilma-xillik, ~300 ming tur).",
      },
      {
        heading: "3. O‘simliklarning biosfera va inson hayotidagi o‘rni",
        content:
          "O‘simliklar har yili fotosintez jarayonida milliardlab tonna organik modda sintezlab, atmosferaga erkin O2 chiqaradi va CO2 balansini saqlaydi. Insoniyat uchun ular oziq-ovqat (don, sabzavot, meva), dori-darmon (alkaloidlar, vitaminlar, glikozidlar), sanoat xomashyosi (tola, yog‘och, kauchuk, qog‘oz), chorva ozuqasi hamda tuproqni eroziyadan himoya qiluvchi asosiy ekologik qalqondir.",
      },
      {
        heading: "4. O‘zbekistonda botanika fanining rivojlanishi",
        content:
          "Markaziy Osiyo va O‘zbekiston florasini o‘rganishda E.P. Korovin, K.Z. Zokirov, I.I. Granitov, M.V. Kultiasov, A.J. Butkov, S.S. Sahobiddinov va O‘.P. Pratov kabi olimlar ulkan hissa qo‘shgan. Bugungi kunda O‘zR FA Botanika instituti, Milliy gerbariy fondi va Qizil kitob doirasida noyob va endemik turlarni muhofaza qilish ishlari olib borilmoqda.",
      },
    ],
    comparisonTable: {
      title: "Botanikaning asosiy bo‘limlari va o‘rganish obyektlari",
      columns: ["Bo‘lim nomi", "O‘rganish darajasi", "Asosiy vazifasi"],
      rows: [
        [
          "Sitologiya",
          "Hujayra darajasi",
          "O‘simlik hujayrasi organoidlari va bo‘linishini o‘rganish",
        ],
        [
          "Gistologiya va Anatomiya",
          "To‘qima va organlar",
          "Ichki mikroskopik tuzilishni aniqlash",
        ],
        [
          "Morfologiya",
          "Organizm tashqi shakli",
          "Vegetativ va generativ organlar tuzilishi va metamorfozi",
        ],
        ["Sistematika", "Tur va taksonlar", "O‘simliklarni tasniflash va binar nomlash"],
        ["Geobotanika", "Fitotsenozlar", "O‘simliklar qoplamining geografik tarqalishi"],
      ],
    },
    keyConcepts: [
      {
        term: "Botanika",
        definition:
          "O‘simliklar tuzilishi, hayot faoliyati, tasnifi va ekologiyasini o‘rganuvchi fan.",
      },
      {
        term: "Produtsent",
        definition:
          "Fotosintez orqali anorganik moddalardan birlamchi organik modda yaratuvchi avtotrof organizm.",
      },
      {
        term: "Flora",
        definition:
          "Muayyan geografik hududda tarixan shakllangan barcha o‘simlik turlari majmuasi.",
      },
      {
        term: "Fitotsenoz",
        definition:
          "Bir xil muhit sharoitida birgalikda yashovchi va o‘zaro ta’sirlashuvchi o‘simliklar jamoasi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Botanika fanining morfologiya va anatomiya bo‘limlari o‘rtasida qanday farq bor?",
        answer:
          "Morfologiya o‘simlik va uning organlarining tashqi shakli, tuzilishi va o‘zgarishlarini o‘rgansa, anatomiya organlarning ichki hujayra va to‘qima darajasidagi mikroskopik tuzilishini tadqiq qiladi.",
      },
      {
        question: "O‘simliklarning biosferadagi eng asosiy ekologik roli nimadan iborat?",
        answer:
          "Ular quyosh energiyasidan foydalanib birlamchi organik modda sintezlaydi, atmosferadagi karbonat angidridni yutib kislorod ishlab chiqaradi hamda oziq zanjirining asosini tashkil etadi.",
      },
      {
        question: "O‘simliklar dunyosi qaysi ikki yirik evolyutsion darajaga bo‘linadi?",
        answer:
          "Tanasi tallomdan iborat tuban o‘simliklar (suvo‘tlar) hamda haqiqiy to‘qima va organlarga ega yuksak o‘simliklar (yo‘sinlardan gulli o‘simliklargacha) guruhlariga bo‘linadi.",
      },
    ],
    keyTerms: ["Botanika", "Morfologiya", "Anatomiya", "Sistematika", "Flora", "Biosfera"],
    references: "1-ma’ruza PDF taqdimoti va o‘quv dasturi",
    pdfUrl: "/assets/aistudio/M01_Kirish_O_simliklar_dunyosi_va_uning_xilmaxilligi_e37f360a.pdf",
    pdfTitle: "1-ma’ruza PDF: Kirish. O‘simliklar dunyosi va uning xilma-xilligi",
  },
  {
    id: "bot-2",
    order: 2,
    code: "2",
    topicLabel: "2-mavzu",
    semester: "I semestr",
    title: "O‘simlik hujayrasining tuzilishi, kimyoviy tarkibi, vazifasi va bo‘linish usullari.",
    syllabusPoints: [
      "O‘simlik hujayrasining hayvon hujayrasidan farq qiluvchi asosiy belgilari (sellyuloza qobig‘i, plastidalar, markaziy vakuola).",
      "Protoplast organoidlari (yadro, mitoxondriya, endoplazmatik to‘r, Golji apparati, ribosomalar) va plastidalar tiplari.",
      "Vakuola shirasidagi zaxira moddalar (kraxmal, aleyron, inulin) va hujayra qobig‘ining ikkilamchi o‘zgarishlari.",
      "Hujayraning bo‘linish usullari: amitoz, mitoz va meyoz.",
    ],
    studyNotes:
      "O‘simlik hujayrasi qattiq sellyuloza hujayra devori, plastidalar (xloroplast, xromoplast, leykoplast) hamda yirik markaziy vakuolaga egaligi bilan ajralib turadi. Sitoplazmatik ko‘prikchalar — plazmodesmalar qo‘shni hujayralarni yagona tizimga bog‘laydi. Bo‘linish mitoz (somatik o‘sish) va meyoz (spora hosil bo‘lish) orqali boradi.",
    overview:
      "Hujayra barcha tirik organizmlar kabi o‘simliklarning ham asosiy strukturaviy, funksional va irsiy birligidir. O‘simlik hujayrasi avtotrof oziqlanish va harakatsiz hayot tarziga moslashgani sababli qattiq pektin-sellyuloza qobiq, fotosintezlovchi plastidalar hamda osmotik bosim (turgor)ni ushlab turuvchi vakuolalar bilan ta’minlangan.",
    sections: [
      {
        heading: "1. O‘simlik hujayrasining o‘ziga xos tarkibiy qismlari",
        content:
          "O‘simlik hujayrasi tashqi tomondan sellyuloza mikrofibrillalaridan tuzilgan hujayra devori (qobig‘i) bilan o‘ralgan bo‘lib, qo‘shni hujayralar bilan plazmodesmalar orqali bog‘lanadi. Plazmalemma ostida sitoplazma va organoidlar (protoplast) joylashadi.",
        highlights: [
          "Xloroplastlar — xlorofill a va b saqlovchi, tilakoidlar va granalarda fotosintez olib boruvchi yashil plastidalar",
          "Xromoplastlar — karotinoidlar (karotin, ksantofill) saqlab gul va mevalarga sariq-qizil tus beradi",
          "Leykoplastlar — rangsiz plastidalar bo‘lib, ildiz va tugunaklarda kraxmal, oqsil va moy to‘playdi",
        ],
      },
      {
        heading: "2. Vakuola, turgor bosimi va hujayra kiritmalari",
        content:
          "Voyaga yetgan o‘simlik hujayrasi hajmining 70–90 foizini tonoplast membranasi bilan o‘ralgan markaziy vakuola egallaydi. Undagi hujayra shirasi suvda erigan qandlar, organik kislotalar, antotsian pigmentlari va alkaloidlarni tutib, hujayra devoriga ichki turgor bosimi beradi. Zaxira va chiqindi moddalar kiritmalar shaklida to‘planadi: birlamchi va zaxira kraxmal donachalari, aleyron donachalari (oqsil), inulin hamda kaltsiy oksalat kristallari (druza, rafida).",
      },
      {
        heading: "3. Hujayra qobig‘ining kimyoviy o‘zgarishlari",
        content:
          "Hujayralar bajaradigan vazifasiga qarab qobig‘iga turli moddalar singadi: yog‘ochlanish (lignifikatsiya — lignin singib, mexanik mustahkamlik beradi), po‘kaklanish (suberinizatsiya — suberin suv va gaz o‘tkazmaydigan himoya qiladi), kutikulanish (kutin — yer ustki organlarda bug‘lanishni kamaytiradi), shilimshiqlanish (zig‘ir va behi urug‘larida suv tutish) va minerallashish (SiO2 — qirqbo‘g‘im va g‘alladoshlarda).",
      },
      {
        heading: "4. Hujayralarning bo‘linish usullari",
        content:
          "Yangi hujayralar faqat oldingi hujayralarning bo‘linishi yo‘li bilan hosil bo‘ladi. Mitoz — somatik hujayralarning teng bo‘linishi (2n → 2n) bo‘lib, meristemalarda o‘sish va regeneratsiyani ta’minlaydi (o‘simliklarda sentriolalar bo‘lmaydi, sitokinez phragmoplast yordamida o‘rtadan chetga boradi). Meyoz — sporangiylarda sporalar shakllanishida xromosoma sonini ikki barobar kamaytiruvchi reduksion bo‘linish (2n → n). Amitoz esa qarigan yoki patologik hujayralarda to‘g‘ridan-to‘g‘ri yadro bo‘linishidir.",
      },
    ],
    comparisonTable: {
      title: "O‘simlik plastidalarining tuzilishi va vazifalari",
      columns: ["Plastida tipi", "Asosiy pigmenti", "Vazifasi", "Uchraydigan organlar"],
      rows: [
        [
          "Proplastid",
          "Pigmentsiz",
          "Barcha plastidalarga asos bo‘ladi",
          "Meristema (o‘sish konusi)",
        ],
        [
          "Xloroplast",
          "Xlorofill a, b + karotinoid",
          "Fotosintez (ATF va glyukoza sintezi)",
          "Barglar, yosh yashil poyalar",
        ],
        [
          "Xromoplast",
          "Karotin, likopin, ksantofill",
          "Changlatuvchi va tarqatuvchilarni jalb qilish",
          "Gul tojbarglari, pishgan mevalar, sabzi",
        ],
        [
          "Leykoplast",
          "Pigment yo‘q",
          "Kraxmal (amiloplast), oqsil va yog‘ zaxiralash",
          "Kartoshka tugunagi, urug‘lar, ildiz",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Protoplast",
        definition:
          "O‘simlik hujayrasining hujayra devoridan tashqari barcha tirik tarkibiy qismi (sitoplazma + organoidlar + yadro).",
      },
      {
        term: "Tonoplast",
        definition:
          "Markaziy vakuolani sitoplazmadan ajratib turuvchi tanlab o‘tkazuvchi membrana.",
      },
      {
        term: "Plazmodesma",
        definition:
          "Qo‘shni o‘simlik hujayralarining qobiq teshikchalari orqali o‘tuvchi ingichka sitoplazmatik ipchalar.",
      },
      {
        term: "Turgor",
        definition:
          "Vakuola shirasining hujayra qobig‘iga ko‘rsatadigan ichki gidrostatik bosimi (o‘simlik tarangligi).",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "O‘simlik hujayrasida mitozning oxirgi bosqichi — sitokinez hayvon hujayrasidan qanday farq qiladi?",
        answer:
          "Hayvon hujayrasi chetdan markazga qarab tortilib bo‘linadi; o‘simlik hujayrasida esa qattiq devor borligi sababli markazda phragmoplast hosil bo‘lib, o‘rtadan chetlarga qarab yangi hujayra to‘sig‘i quriladi.",
      },
      {
        question:
          "Yashil pomidor pishganda qizarishi va bahorgi kartoshka yasharib ketishi qaysi jarayon bilan bog‘liq?",
        answer:
          "Plastidalarning o‘zaro bir-biriga aylanishi bilan bog‘liq: pomidorda xloroplastlar xromoplastlarga, yorug‘likka chiqqan kartoshka tugunagida esa leykoplastlar xloroplastlarga aylanadi.",
      },
      {
        question:
          "Hujayra devorida lignin va suberin to‘planishi qanday vazifalarga xizmat qiladi?",
        answer:
          "Lignin qobiqni qattiqlashtirib mexanik tayanch va suv o‘tkazishga moslaydi; suberin esa suv va gaz o‘tkazmaydigan po‘kak qatlamini hosil qilib himoya vazifasini bajaradi.",
      },
    ],
    keyTerms: ["Sellyuloza", "Plastidalar", "Vakuola", "Turgor", "Plazmodesma", "Mitoz"],
    references: "2-ma’ruza PDF taqdimoti va o‘quv dasturi",
    pdfUrl: "/assets/aistudio/M02_O_simlik_hujayrasi_tuzilishi_kimyoviy_tarkibi_va_7d81c0f9.pdf",
    pdfTitle: "2-ma’ruza PDF: O‘simlik hujayrasi tuzilishi, kimyoviy tarkibi va bo‘linishi",
  },
  {
    id: "bot-3",
    order: 3,
    code: "3",
    topicLabel: "3-mavzu",
    semester: "I semestr",
    title: "To‘qimalar haqida umumiy tushuncha. Hosil qiluvchi va qoplovchi to‘qimalar.",
    syllabusPoints: [
      "O‘simlik to‘qimalari haqida tushuncha, ularning kelib chiqishi va tasnifi (sodda va murakkab to‘qimalar).",
      "Hosil qiluvchi to‘qimalar (meristemalar): apikal, lateral (kambiy, fellogen), interkalyar va yara meristemalari.",
      "Birlamchi qoplovchi to‘qima — epiderma (epidermis), og‘izcha apparati va trixomalar.",
      "Ikkilamchi va uchlamchi qoplovchi to‘qimalar — periderma (yasmiqchalar) va po‘stloq (ritidom).",
    ],
    studyNotes:
      "To‘qima — kelib chiqishi, tuzilishi va bajaradigan vazifasi umumiy bo‘lgan hujayralar tizimi. Meristemalar o‘simlikning umr bo‘yi o‘sishini ta’minlaydi, qoplovchi to‘qimalar (epiderma, periderma, po‘stloq) esa tashqi noqulay omillardan himoya qiladi hamda gaz almashinuvini boshqaradi.",
    overview:
      "Yuksak o‘simliklarning suvdan quruqlikka chiqishi bilan tana qismlari o‘rtasida mehnat taqsimoti yuzaga kelib, maxsus ixtisoslashgan to‘qimalar shakllandi. Har bir doimiy to‘qima faqat meristema (hosil qiluvchi) to‘qima hujayralarining bo‘linishi va differensiallashuvi natijasida vujudga keladi.",
    sections: [
      {
        heading: "1. To‘qimalar tasnifi va meristemalarning joylashuvi",
        content:
          "Bir xil hujayralardan tuzilgan to‘qimalar sodda (parenxima, kollenxima), har xil hujayralardan iborat to‘qimalar esa murakkab (ksilema, floema, epiderma) deyiladi. Meristema hujayralari kichik, yupqa devorli, yirik yadroli va vakuolasiz bo‘lib, uzluksiz bo‘linish qobiliyatiga ega:",
        highlights: [
          "Apikal (uchki) meristema — ildiz va novda uchida (o‘sish konusida) joylashib, bo‘yiga o‘sishni ta’minlaydi",
          "Lateral (yon) meristema — kambiy va fellogen bo‘lib, ildiz va poyaning eniga yo‘g‘onlashuvini ta’minlaydi",
          "Interkalyar (oraliq) meristema — g‘alladoshlar bo‘g‘im oraliqlari asosida joylashib, tez bo‘yiga cho‘ziladi",
          "Travmatik (yara) meristema — o‘simlik shikastlangan joylarda kallus hosil qilib jarohatni bitiradi",
        ],
      },
      {
        heading: "2. Birlamchi qoplovchi to‘qima — Epiderma",
        content:
          "Yosh novdalar, barglar va gullarni qoplovchi bir qavatli tirik to‘qima. Hujayralari zich jipslashgan, xloroplastsiz (yopuvchi hujayralardan tashqari) va tashqi devori mumsimon kutikula bilan qoplangan. Epidermada gaz almashinuvi hamda suv bug‘latishni boshqaruvchi og‘izcha apparati (2 ta loviyasimon yopuvchi hujayra va tirqish) joylashadi. Trixomalar — epiderma o‘simtalari bo‘lib, qoplovchi tuklar (issiqlik va zararkunandalardan himoya), bezli tuklar (efir moyi), achitqi tuklar (qichitqi o‘t) hamda urug‘ tuklari (g‘o‘za tolasi) shaklida uchraydi.",
      },
      {
        heading: "3. Ikkilamchi va uchlamchi qoplovchi to‘qimalar",
        content:
          "Ko‘p yillik o‘simliklar poyasi yo‘g‘onlashganda epiderma yorilib, uning o‘rnini ikkilamchi qoplovchi to‘qima — periderma egallaydi. Periderma 3 qavatdan iborat: fellogen (po‘kak kambiysi), u tashqariga hosil qilgan o‘lik po‘kak hujayralari — fellema (suberinli, havo to‘la) hamda ichkariga hosil qilgan tirik parenxima — felloderma. Po‘kakdagi gaz almashinuvini maxsus g‘ovak teshikchalar — yasmiqchalar (chechevichkalar) ta’minlaydi. Daraxt qariganda bir necha qavat periderma va o‘lik lub qatlamlari qo‘shilib qalin po‘stloq — ritidomni hosil qiladi.",
      },
    ],
    comparisonTable: {
      title: "Qoplovchi to‘qimalarning qiyosiy tavsifi",
      columns: ["To‘qima", "Kelib chiqishi", "Hujayra holati", "Gaz almashinuv organi"],
      rows: [
        [
          "Epiderma (birlamchi)",
          "Protoderma (apikal meristema)",
          "1 qavatli tirik hujayralar + kutikula",
          "Og‘izchalar (ustitsalar)",
        ],
        [
          "Periderma (ikkilamchi)",
          "Fellogen (po‘kak kambiysi)",
          "Ko‘p qavatli o‘lik po‘kak (suberin)",
          "Yasmiqchalar (chechevichkalar)",
        ],
        [
          "Po‘stloq / Ritidom (uchlamchi)",
          "Bir necha fellogen qavatlari",
          "O‘lik periderma + nobud bo‘lgan lub",
          "Yoriqlar va yasmiqcha izlari",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Meristema",
        definition:
          "Uzluksiz mitoz bo‘linish orqali boshqa barcha to‘qimalarga asos beruvchi hosil qiluvchi to‘qima.",
      },
      {
        term: "Epiderma",
        definition: "Barg va yosh novdalarni qoplab turuvchi birlamchi tirik qoplovchi to‘qima.",
      },
      {
        term: "Periderma",
        definition:
          "Fellogen, fellema (po‘kak) va fellodermadan tashkil topgan ikkilamchi himoya kompleksi.",
      },
      {
        term: "Yasmiqcha",
        definition:
          "Periderma qatlamida ichki tirik to‘qimalarga kislorod kirishini ta’minlovchi g‘ovak tuzilma.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "G‘alladoshlar (bug‘doy, bambuk) poyasi nima uchun juda tez bo‘yiga o‘sadi?",
        answer:
          "Chunki ularda uchki meristemadan tashqari har bir bo‘g‘im oralig‘i asosida faol bo‘linuvchi interkalyar (oraliq) meristemalar mavjud.",
      },
      {
        question:
          "Epidermadagi og‘izcha yopuvchi hujayralari boshqa epiderma hujayralaridan nimasi bilan farq qiladi?",
        answer:
          "Yopuvchi hujayralarda xloroplastlar mavjud bo‘lib, kun yorug‘ligida turgor bosimini o‘zgartirish hisobiga og‘izcha tirqishini ochib-yopadi.",
      },
      {
        question:
          "Periderma tarkibidagi fellema hujayralari nima uchun tirik emas, ammo himoya uchun juda qulay?",
        answer:
          "Ularning devoriga suberin moddasi singib, protoplasti nobud bo‘ladi va bo‘shlig‘i havo bilan to‘ladi — bu suv bug‘lanishi, sovuq va mikroblardan mukammal izolyatsiya yaratadi.",
      },
    ],
    keyTerms: ["Meristema", "Kambiy", "Epiderma", "Trixoma", "Periderma", "Ritidom"],
    references: "3-ma’ruza PDF taqdimoti va o‘quv dasturi",
    pdfUrl: "/assets/aistudio/M03_To_qimalar_haqida_umumiy_tushuncha_Meristema_va__976e9aa6.pdf",
    pdfTitle: "3-ma’ruza PDF: To‘qimalar haqida umumiy tushuncha. Meristema va qoplovchi to‘qima",
  },
  {
    id: "bot-4",
    order: 4,
    code: "4",
    topicLabel: "4-mavzu",
    semester: "I semestr",
    title: "Asosiy va ajratuvchi to‘qimalarning tuzilishi va vazifalari.",
    syllabusPoints: [
      "Asosiy to‘qimalar (parenxima) turlari: assimilyatsion (xlorenxima), g‘amlovchi, suv saqlovchi va havo saqlovchi (aerenxima).",
      "So‘ruvchi to‘qimalar: ildiz rizodermasi (epiblema), parazit o‘simliklar gaustoriyasi va epifitlar velameni.",
      "Tashqi ajratuvchi to‘qimalar: nektardonlar, gidatodalar (gutatsiya), bezli tuklar va tuz bezlari.",
      "Ichki ajratuvchi to‘qimalar: idioblastlar, sxizogen va lizogen bo‘shliqlar, sut yo‘llari.",
    ],
    studyNotes:
      "Asosiy to‘qimalar o‘simlik tanasining asosiy massasini tashkil etib, fotosintez (xlorenxima), zaxira to‘plash, suv hamda havo saqlash vazifalarini bajaradi. Ajratuvchi to‘qimalar esa nektar, shira, smola, efir moylari va sut shirasi (lateks) ishlab chiqarib, o‘simlikni himoya qiladi va changlatuvchilarni jalb etadi.",
    overview:
      "Asosiy to‘qima (parenxima) tirik, yupqa devorli hujayralardan iborat bo‘lib, o‘simlikning metabolik markazini tashkil etadi — unda fotosintez, nafas olish va oziq moddalar zaxirasi amalga oshadi. Ajratuvchi (sekretor) to‘qimalar esa moddalar almashinuvi mahsulotlarini tashqariga chiqarish yoki maxsus ichki kanallarda saqlashga ixtisoslashgan.",
    sections: [
      {
        heading: "1. Asosiy to‘qima (Parenxima) xillari",
        content: "Bajaradigan funksiyasiga qarab parenxima 4 asosiy turga bo‘linadi:",
        highlights: [
          "Assimilyatsion to‘qima (xlorenxima) — xloroplastga boy bo‘lib, barglarda ustunsimon (zich) va g‘ovak (hujayralararo bo‘shliqli) qavatlarni hosil qiladi",
          "G‘amlovchi parenxima — urug‘, tugunak, ildizmeva va poya o‘zagida kraxmal, oqsil va moy zaxiralaydi",
          "Suv saqlovchi parenxima — cho‘l sukkulentlarida (kaktus, aloe, agava) yirik shilimshiqli hujayralarda suv to‘playdi",
          "Havo saqlovchi parenxima (aerenxima) — suv va botqoq o‘simliklarida (nilufar, qamish, sholi) kislorod o‘tkazuvchi keng havo kanallari hosil qiladi",
        ],
      },
      {
        heading: "2. So‘ruvchi to‘qimalar",
        content:
          "Suv, mineral tuzlar yoki tayyor oziq moddalarni tashqi muhitdan yutishga ixtisoslashgan to‘qimalar. Eng muhimi yosh ildizning so‘rish zonasidagi rizoderma (epiblema) bo‘lib, uning uzun ildiz tukchalari so‘rish yuzasini o‘nlab marta oshiradi. Tropik epifit orxideyalarda havo namini shimgichdek yutuvchi ko‘p qavatli o‘lik velamen to‘qimasi, parazit o‘simliklarda (zarpechak, shumg‘iya) esa xo‘jayin to‘qimasiga kiruvchi gaustoriyalar mavjud.",
      },
      {
        heading: "3. Tashqi va ichki ajratuvchi to‘qimalar",
        content:
          "Sekret mahsulotining to‘planish joyiga ko‘ra ajratuvchi to‘qimalar ikki guruhga bo‘linadi. Tashqi ajratuvchi tuzilmalar: hasharotlarni jalb qiluvchi nektardonlar, ortiqcha suvni tomchi holida chiqaruvchi gidatodalar (gutatsiya hodisasi — qulupnay, bug‘doy uchida), yalpiz va rayhon bargidagi efir moyli bezli tuklar hamda sho‘rxok o‘simliklaridagi tuz bezlari. Ichki ajratuvchilar: alohida yirik hujayralar — idioblastlar, ignabarglilardagi sxizogen smola yo‘llari (hujayralar surilishi hisobiga), sitrus po‘stidagi lizogen efir moyi bo‘shliqlari (hujayra erishi hisobiga) hamda qoqio‘t, ko‘knori va sutlamalardagi lateks saqlovchi sut yo‘llari.",
      },
    ],
    comparisonTable: {
      title: "Ichki ajratuvchi bo‘shliqlarning hosil bo‘lish mexanizmlari",
      columns: ["Tuzilma turi", "Hosil bo‘lish usuli", "Sekret moddasi", "Misollar"],
      rows: [
        [
          "Sxizogen yo‘llar",
          "Hujayralar o‘zaro ajralib orasi kengayadi",
          "Smola (qatron), balzam",
          "Qarag‘ay, archa, kungaboqar",
        ],
        [
          "Lizogen bo‘shliqlar",
          "Markaziy hujayralar erib ketadi",
          "Efir moylari",
          "Limon, apelsin, evkalipt",
        ],
        [
          "Sut yo‘llari",
          "Bo‘g‘imli yoki bo‘g‘imsiz uzun naychalar",
          "Lateks (kauchuk, alkaloid)",
          "Ko‘knori, qoqio‘t, geveya",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Xlorenxima",
        definition:
          "Tarkibida ko‘plab xloroplastlar tutuvchi asosiy fotosintezlovchi parenxima to‘qimasi.",
      },
      {
        term: "Aerenxima",
        definition:
          "Suv va botqoq o‘simliklari organlarini havo bilan ta’minlovchi keng hujayralararo bo‘shliqli to‘qima.",
      },
      {
        term: "Gidatoda",
        definition:
          "Barg chetida ortiqcha suvni tomchi holida tashqariga chiqaruvchi (gutatsiya) maxsus suv og‘izchasi.",
      },
      {
        term: "Lateks",
        definition:
          "Sut yo‘llari ichida to‘planadigan, o‘simlikni jarohat va zararkunandalardan asrovchi sutsimon shira.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Gidatodalar orqali kechadigan gutatsiya oddiy transpiratsiyadan nimasi bilan farq qiladi?",
        answer:
          "Transpiratsiyada suv og‘izchalar orqali bug‘ holatida chiqariladi va tirik yopuvchi hujayralar bilan boshqariladi; gutatsiyada esa havo namligi 100% ga yaqin paytda suv doim ochiq gidatodalar orqali suyuq tomchi shaklida ajraladi.",
      },
      {
        question:
          "Qarag‘ayning smola yo‘llari bilan apelsin po‘stidagi efir moyi bo‘shliqlari kelib chiqishi qanday farqlanadi?",
        answer:
          "Qarag‘aydagi smola yo‘llari sxizogen usulda (hujayralar bir-biridan surilib bo‘shliq ochilishi), apelsindagi bo‘shliqlar esa lizogen usulda (markazdagi hujayralarning erishi natijasida) hosil bo‘ladi.",
      },
      {
        question:
          "Nima uchun sholi va nilufar ildizlari kislorodsiz suv tubida ham chirib ketmaydi?",
        answer:
          "Ularning poya va ildizlarida kuchli rivojlangan aerenxima to‘qimasi bo‘lib, barglardan ildizlarga uzluksiz havo (kislorod) yetkazib turadi.",
      },
    ],
    keyTerms: ["Parenxima", "Xlorenxima", "Aerenxima", "Rizoderma", "Nektardon", "Sut yo‘llari"],
    references: "4-ma’ruza PDF taqdimoti va o‘quv dasturi",
    pdfUrl: "/assets/aistudio/M04_Asosiy_va_ajratuvchi_to_qimalar_04000ea9.pdf",
    pdfTitle: "4-ma’ruza PDF: Asosiy va ajratuvchi to‘qimalar tuzilishi va vazifalari",
  },
  {
    id: "bot-5",
    order: 5,
    code: "5",
    topicLabel: "5-mavzu",
    semester: "I semestr",
    title: "Mexanik va o‘tkazuvchi to‘qimalarning tuzilishi va ahamiyati.",
    syllabusPoints: [
      "Mexanik to‘qimalar: tirik kollenxima (burchakli, plastinkali, g‘ovak) va nobud sklerenxima (tolalar va sklereidlar).",
      "O‘tkazuvchi to‘qimalar: ksilema (traxeidalar, traxeya/naylar, libriform, parenxima) — yuqoriga oqim.",
      "Floema (elaksimon naylar, yo‘ldosh hujayralar, lub tolalari va parenxima) — pastga oqim.",
      "O‘tkazuvchi boylamlar tiplari: kollateral (ochiq va yopiq), bikollateral, konsentrik va radial.",
    ],
    studyNotes:
      "Mexanik to‘qimalar o‘simlik skeleti vazifasini o‘tab, shamol va og‘irlikka qarshilik ko‘rsatadi (kollenxima va sklerenxima). O‘tkazuvchi to‘qimalar esa ildizdan barglarga suv va mineral tuzlarni (ksilema) hamda barglardan barcha organlarga organik moddalarni (floema) tashiydi.",
    overview:
      "Yuksak o‘simliklarning tik o‘sishi va o‘nlab metr balandlikka ko‘tarilishi ikkita o‘zaro bog‘liq tizimga tayanadi: mustahkam tayanch beruvchi mexanik to‘qimalar hamda yer ostki va yer ustki organlar o‘rtasida moddalar transportini ta’minlovchi o‘tkazuvchi to‘qimalar.",
    sections: [
      {
        heading: "1. Mexanik to‘qimalar: Kollenxima va Sklerenxima",
        content:
          "Mexanik to‘qima hujayralarining devori notekis yoki tekis qalinlashgan bo‘ladi. Kollenxima — yosh o‘sayotgan organlarda (poya, barg bandi) epidermis ostida joylashuvchi tirik, sellyuloza devori notekis qalinlashgan to‘qima (burchakli, plastinkali va g‘ovak xillari bor); u o‘sishga to‘sqinlik qilmay egiluvchan tayanch beradi. Sklerenxima esa o‘sishdan to‘xtagan organlarda bo‘lib, devori bir tekis qalinlashgan va ligninlangan nobud hujayralardan iborat: uzun uchli sklerenxima tolalari (zig‘ir, kanop lub tolalari — to‘qimachilikda qimmatli) hamda qattiq toshsimon hujayralar — sklereidlar (nok etidagi toshchalar, yong‘oq va olcha danagi po‘chog‘i).",
      },
      {
        heading: "2. Ksilema (Yog‘ochlik) — yuqoriga yo‘nalgan oqim",
        content:
          "Ksilema ildizdan so‘rilgan suv va mineral tuzlarni poya bo‘ylab barglarga ko‘taradi. U murakkab to‘qima bo‘lib 4 xil hujayradan tuzilgan: 1) Traxeidalar — uchlari o‘tkirlashgan, qalin devorli nobud hujayralar (poralar orqali sekin o‘tkazadi; ochiq urug‘lilarda asosiy); 2) Traxeya (naylar) — ko‘ndalang to‘siqlari erib ketgan nobud hujayralar zanjiri (yopiq urug‘lilarda suvni juda tez o‘tkazadi; halqali, spiralli, to‘rsimon, nuqtali qalinlashuvli); 3) Yog‘ochlik tolalari (libriform) — mexanik mustahkamlik; 4) Yog‘ochlik parenximasi — tirik zaxira saqlovchi hujayralar.",
      },
      {
        heading: "3. Floema (Lub) — pastga yo‘nalgan oqim",
        content:
          "Floema barglarda fotosintez natijasida hosil bo‘lgan organik moddalarni (saxaroza, aminokislotalar) o‘sish nuqtalari, ildiz va mevalarga tashiydi. Asosiy elementlari: elaksimon naylar — ko‘ndalang devorida mayda teshikli elak plastinkasi bo‘lgan tirik, ammo yadrosiz hujayralar; ularning hayotiy faoliyatini va modda yuklashini boshqaruvchi yirik yadroli yo‘ldosh hujayralar (faqat gulli o‘simliklarda); mexanik lub tolalari hamda lub parenximasi.",
      },
      {
        heading: "4. O‘tkazuvchi boylamlarning tiplari",
        content: "Ksilema va floema birgalikda o‘tkazuvchi boylamlarni hosil qiladi:",
        highlights: [
          "Kollateral ochiq boylam: ksilema ichkarida, floema tashqarida, orasida kambiy qavati bor (ikki pallalilar va ochiq urug‘lilar poyasi)",
          "Kollateral yopiq boylam: kambiy yo‘q, ikkilamchi yo‘g‘onlashish bo‘lmaydi (bir pallalilar — makkajo‘xori, bug‘doy)",
          "Bikollateral boylam: ksilemaning ikki tomonida ham floema joylashadi (qovoqdoshlar, ituzumdoshlar)",
          "Konsentrik (amfikribral / amfivazal) va Radial boylam: radial boylamda ksilema va floema navbatma-navbat joylashadi (barcha birlamchi ildizlar)",
        ],
      },
    ],
    comparisonTable: {
      title: "Ksilema va Floemaning tuzilish va funksiya qiyosi",
      columns: ["Belgi", "Ksilema (Yog‘ochlik)", "Floema (Lub)"],
      rows: [
        [
          "Asosiy o‘tkazuvchi hujayra",
          "Traxeya (naylar) va traxeidalar",
          "Elaksimon naylar + yo‘ldosh hujayralar",
        ],
        [
          "O‘tkazuvchi hujayra holati",
          "Nobud (bo‘sh, ligninli devor)",
          "Tirik (sitoplazmali, yadrosiz)",
        ],
        [
          "Transport yo‘nalishi",
          "Ildizdan bargga (yuqoriga oqim)",
          "Bargdan barcha organlarga (ikki yo‘nalishli)",
        ],
        [
          "Tashiladigan modda",
          "Suv va mineral tuzlar",
          "Organik moddalar (saxaroza, fitogormonlar)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Kollenxima",
        definition:
          "Yosh organlarda uchraydigan tirik, plastik egiluvchanlik beruvchi mexanik to‘qima.",
      },
      {
        term: "Sklerenxima",
        definition:
          "Ligninlangan qalin devorli nobud hujayralardan (tolalar va sklereidlar) iborat mustahkam tayanch to‘qima.",
      },
      {
        term: "Elaksimon nay",
        definition:
          "Floemaning ko‘ndalang devorlari elakdek teshikli tirik yadrosiz o‘tkazuvchi hujayrasi.",
      },
      {
        term: "Kollateral boylam",
        definition:
          "Ksilema va floema bir radiusda yonma-yon joylashgan eng keng tarqalgan o‘tkazuvchi boylam tipi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Daraxt poyasining po‘stlog‘ini halqa shaklida shilib tashlansa, nima uchun daraxt quriydi?",
        answer:
          "Po‘stloq ichki qismida joylashgan floema (lub) qatlami uziladi; natijada barglardan ildizga organik oziq moddalar yetib bormaydi, ildiz ochlikdan nobud bo‘lib, suv berish to‘xtaydi.",
      },
      {
        question: "Traxeya (naylar) bilan traxeidalar o‘rtasidagi asosiy anatomik farq nimada?",
        answer:
          "Traxeida — uchlari berk bitta uzunchoq hujayra (suv poralar orqali sekin o‘tadi); traxeya esa ko‘ndalang to‘siqlari butunlay erib ketgan ko‘plab hujayralardan tuzilgan yaxlit ochiq naychadir.",
      },
      {
        question: "Zig‘ir tolasidan mato tayyorlashda uning qaysi to‘qimasidan foydalaniladi?",
        answer:
          "Sklerenximaning po‘stloq qismida joylashgan juda uzun, mustahkam va ligninlanmagan sellyulozali lub tolalaridan foydalaniladi.",
      },
    ],
    keyTerms: ["Kollenxima", "Sklerenxima", "Ksilema", "Floema", "Traxeya", "O‘tkazuvchi boylam"],
    references: "5-ma’ruza PDF taqdimoti va o‘quv dasturi",
    pdfUrl: "/assets/aistudio/M05_Mexanik_va_o_tkazuvchi_to_qimalar_f0f8030f.pdf",
    pdfTitle: "5-ma’ruza PDF: Mexanik va o‘tkazuvchi to‘qimalar tuzilishi va ahamiyati",
  },
  {
    id: "bot-6",
    order: 6,
    code: "6",
    topicLabel: "6-mavzu",
    semester: "I semestr",
    title: "Ildiz tizimining shakllanishi, tuzilishi, tiplari va shakl o‘zgarishlari.",
    syllabusPoints: [
      "Ildizning asosiy vazifalari va o‘sish zonalari (ildiz qalpoqchasi, bo‘linish, cho‘zilish, so‘rish, o‘tkazish).",
      "Kelib chiqishiga ko‘ra ildiz turlari (bosh, yon, qo‘shimcha) va ildiz tizimi tiplari (o‘q, popuk, aralash).",
      "Ildizlarning shakl o‘zgarishlari (metamorfozlari): ildizmeva, ildiz tuganagi, tayanch, havo, nafas va so‘ruvchi ildizlar.",
      "Ildiz simbiozi: mikoriza (ekto- va endomikoriza) hamda azot to‘plovchi tuganak bakteriyalari.",
    ],
    studyNotes:
      "Ildiz — cheksiz uchki o‘sishga, musbat geotropizmga ega va barg hosil qilmaydigan asosiy vegetativ organ. Ildiz bo‘ylama kesmasida 5 ta zona ajraladi. Ikki pallalilarda o‘q ildiz tizimi, bir pallalilarda esa popuk ildiz tizimi rivojlanadi; simbioz (mikoriza, Rhizobium) esa mineral oziqlanishni kuchaytiradi.",
    overview:
      "Ildiz o‘simlikni tuproqda mustahkam ushlab turuvchi (ankerlik), suv va mineral tuzlarni so‘ruvchi hamda oziq moddalar va fitogormonlar (sitokinin) sintezlovchi asosiy vegetativ organdir. Novdadan farqli o‘laroq ildiz uchki qismi qalpoqcha bilan himoyalangan va unda hech qachon barg yoki tugun-bo‘g‘im oraliqlari bo‘lmaydi.",
    sections: [
      {
        heading: "1. Ildizning o‘sish zonalari",
        content:
          "Yosh ildiz uchidan yuqoriga qarab bir-biriga silliq o‘tuvchi 5 ta morfologik-fiziologik zona farqlanadi:",
        highlights: [
          "Ildiz qalpoqchasi (kaliptra) — nozik o‘sish konusini tuproq zarralaridan himoya qiladi, shilimshiq ajratadi va statolit kraxmali orqali geotropizmni sezadi",
          "Bo‘linish zonasi — meristema hujayralari tinimsiz mitoz yo‘li bilan ko‘payadi (1–2 mm)",
          "Cho‘zilish (o‘sish) zonasi — vakuolalar suv shimib hujayralar bo‘yiga tez uzayadi va ildizni tuproqqa suradi",
          "So‘rish (tukchali) zonasi — rizodermadagi bir hujayrali ildiz tukchalari suv va ionlarni faol so‘radi",
          "O‘tkazish zonasi — tukchalar to‘kiladi, suv yuqoriga tashiladi va peritsikldan yon ildizlar chiqadi",
        ],
      },
      {
        heading: "2. Ildiz turlari va ildiz tizimlari",
        content:
          "Kelib chiqishiga ko‘ra: Bosh ildiz — urug‘ murtagining boshlang‘ich ildizchasidan rivojlanadi; Yon ildizlar — bosh, qo‘shimcha va boshqa yon ildizlardan endogen yo‘l bilan (peritsikldan) chiqadi; Qo‘shimcha ildizlar — poya va barglardan rivojlanadi (makkajo‘xori, qalamcha, qulupnay). Ikki urug‘pallali va ochiq urug‘lilarda bosh ildiz ustunlik qiladigan o‘q ildiz tizimi (g‘o‘za, sabzi, eman), bir urug‘pallalilarda esa bosh ildiz erta qurib poyadan ko‘plab qo‘shimcha ildizlar chiqadigan popuk ildiz tizimi (bug‘doy, piyoz, makkajo‘xori) shakllanadi.",
      },
      {
        heading: "3. Ildiz metamorfozlari va simbioz",
        content:
          "Qo‘shimcha funksiyalarni bajarish uchun ildizlar keskin o‘zgargan: ildizmevalar (sabzi, lavlagi, turp — zaxira to‘plovchi bosh ildiz va gipokotil); ildiz tuganaklari (georgina, batat — yon va qo‘shimcha ildizlar); tayanch va taxta ildizlar (makkajo‘xori, banyan); havo ildizlari (monstera, orxideya); botqoq daraxtlaridagi nafas ildizlari — pnevmatoforlar; parazit gaustoriyalar va piyozboshni tuproqqa tortuvchi kontraktil ildizlar. Simbiozning ikki muhim shakli keng tarqalgan: Mikoriza (o‘simlik ildizi va zamburug‘ gifalari hamkorligi — daraxtlar va orxideyalarda fosfor/suv so‘rishni keskin oshiradi) hamda dukkakdoshlar (loviya, beda, no‘xat) ildizida havo azotini (N2 → NH3) fiksatsiya qiluvchi Rhizobium tuganak bakteriyalari.",
      },
    ],
    comparisonTable: {
      title: "O‘q ildiz va Popuk ildiz tizimlarining qiyosiy tavsifi",
      columns: ["Mezon", "O‘q ildiz tizimi", "Popuk ildiz tizimi"],
      rows: [
        [
          "Asosiy ildiz",
          "Bosh ildiz yaxshi rivojlangan va yo‘g‘on",
          "Bosh ildiz erta nobud bo‘ladi yoki ajralmaydi",
        ],
        [
          "Shakllantiruvchi ildizlar",
          "Bosh ildiz + undan chiqqan yon ildizlar",
          "Poya asosidan chiqqan ko‘p qo‘shimcha ildizlar",
        ],
        [
          "Tuproqqa kirishi",
          "Chuqur qatlamlargacha (yantoq 15–20 m)",
          "Yuza qatlamda keng tarqaladi (chim hosil qiladi)",
        ],
        [
          "Xos bo‘lgan o‘simliklar",
          "Ikki pallalilar (g‘o‘za, olma, qoqio‘t) va qarag‘ay",
          "Bir pallalilar (bug‘doy, piyoz, jo‘xori)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Ildiz qalpoqchasi",
        definition:
          "Ildizning apikal meristemasini mexanik shikastlanishdan saqlovchi va geotropizmni sezuvchi qismi.",
      },
      {
        term: "Ildiz tukchasi",
        definition:
          "So‘rish zonasi rizoderma hujayrasining suv va mineral tuzlarni shimuvchi mikroskopik o‘simtasi.",
      },
      {
        term: "Mikoriza",
        definition: "Zamburug‘ mitseliysi va yuksak o‘simlik ildizining o‘zaro manfaatli simbiozi.",
      },
      {
        term: "Tuganak bakteriyalari",
        definition:
          "Dukkakli o‘simliklar ildizida atmosfera azotini o‘zlashtiruvchi Rhizobium bakteriyalari.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Sabzi ildizmevasi bilan georgina ildiz tuganagi kelib chiqishiga ko‘ra qanday farq qiladi?",
        answer:
          "Sabzi ildizmevasi asosan bitta bosh ildiz (va gipokotil) ning yo‘g‘onlashuvidan hosil bo‘ladi; georgina ildiz tuganagi esa bir nechta yon va qo‘shimcha ildizlarning zaxira oziqa to‘plab yo‘g‘onlashuvidir.",
      },
      {
        question:
          "Nima uchun sabzavot ko‘chatlarini ko‘chirib o‘tqazganda (pikirovka) bosh ildiz uchi chilpib qo‘yiladi?",
        answer:
          "Uchki o‘sish vaqtincha to‘xtab, yon ildizlarning jadal shoxlanishini rag‘batlantiradi — natijada oziqa maydoni unumdor yuza qatlamda kengayadi.",
      },
      {
        question: "Dukkakli ekinlar (beda, no‘xat) tuproq unumdorligini qanday oshiradi?",
        answer:
          "Ularning ildizidagi tuganak bakteriyalari (Rhizobium) havodagi molekulyar azotni o‘simlik o‘zlashtiradigan birikmalarga aylantirib, tuproqni tabiiy azot bilan boyitadi.",
      },
    ],
    keyTerms: [
      "O‘q ildiz",
      "Popuk ildiz",
      "Ildiz qalpoqchasi",
      "Rizoderma",
      "Ildizmeva",
      "Mikoriza",
    ],
    references: "6-ma’ruza PDF taqdimoti va o‘quv dasturi",
    pdfUrl: "/assets/aistudio/M06_Ildiz_tizimi_tuzilishi_tiplari_va_shakl_o_zgaris_5df154b1.pdf",
    pdfTitle: "6-ma’ruza PDF: Ildiz tizimi tuzilishi, tiplari va shakl o‘zgarishlari",
  },
  {
    id: "bot-7",
    order: 7,
    code: "7",
    topicLabel: "7-mavzu",
    semester: "I semestr",
    title: "Ildizning birlamchi va ikkilamchi anatomik tuzilishi.",
    syllabusPoints: [
      "Ildizning uchki birlamchi meristemalari: protoderma, asosiy meristema va prokambiy.",
      "Ildizning birlamchi anatomik tuzilishi: rizoderma, birlamchi po‘stloq (ekzoderma, mezoderma, endoderma + Kaspari belbog‘i).",
      "Markaziy silindr (stela): peritsikl va radial o‘tkazuvchi boylam. Suvning apoplast va simplast yo‘llari.",
      "Ikki pallali va ochiq urug‘li o‘simliklar ildizida ikkilamchi tuzilishga o‘tish (kambiy va fellogen). Ildizmevalar anatomiyasi.",
    ],
    studyNotes:
      "Ildizning birlamchi anatomik tuzilishida tashqaridan ichkariga rizoderma, qalin birlamchi po‘stloq (endodermada Kaspari belbog‘i) hamda peritsikl bilan o‘ralgan radial o‘tkazuvchi boylam joylashadi. Bir pallalilarda bu tuzilish umr bo‘yi saqlanadi; ikki pallalilarda esa kambiy faoliyati bilan ikkilamchi yog‘ochlik va lub hosil bo‘ladi.",
    overview:
      "Ildizning ko‘ndalang kesmasi suv va mineral tuzlarni tuproqdan olib, filtrlab, markaziy ksilema naylariga bosim ostida uzatishga nihoyatda mukammal moslashgan. Ayniqsa, endoderma qavatidagi Kaspari belbog‘i va radial boylam tuzilishi ildizni poyadan keskin ajratib turadigan klassik anatomik belgilardir.",
    sections: [
      {
        heading: "1. Birlamchi anatomik tuzilish (so‘rish zonasi kesmasi)",
        content:
          "Birlamchi meristemalardan (protoderma, asosiy meristema, prokambiy) uchta asosiy qavat shakllanadi: 1) Rizoderma (epiblema) — ildiz tukchalari chiqaruvchi bir qavatli yupqa devorli to‘qima; 2) Birlamchi po‘stloq — tashqi himoya qavati (ekzoderma), ko‘p qavatli tirik kraxmal saqlovchi o‘rta qavat (mezoderma) va ichki bir qavatli endoderma. Endoderma hujayralarining radial va ko‘ndalang devorlarida suberin va lignindan iborat suv o‘tkazmaydigan Kaspari belbog‘lari mavjud; 3) Markaziy silindr (stela) — tirik peritsikl halqasi (undan yon ildizlar va kambiy boshlanadi) hamda markazdagi radial o‘tkazuvchi boylam (ksilema nurlari orasida floema joylashadi).",
      },
      {
        heading: "2. Suvning ko‘ndalang transport yo‘llari va Kaspari belbog‘i",
        content:
          "Rizodermadan markaziy ksilema naylarigacha suv va ionlar uch yo‘l bilan harakatlanadi: hujayra devorlari va hujayralararo bo‘shliqlar bo‘ylab — apoplast yo‘li; plazmodesmalar orqali sitoplazmadan — simplast yo‘li; hamda vakuolalardan membranadan o‘tib — transmembrana yo‘li. Endodermaga yetganda Kaspari belbog‘i apoplast yo‘lini to‘liq to‘sib qo‘yadi; natijada suv va tuzlar endodermaning tirik membranasi (simplast) orqali nazorat ostida o‘tkaziladi, bu esa zararli ionlarni ushlab qolish va ildiz bosimini saqlash imkonini beradi.",
      },
      {
        heading: "3. Ildizning ikkilamchi tuzilishga o‘tishi",
        content:
          "Bir urug‘pallali o‘simliklarda (bug‘doy, makkajo‘xori, piyoz) birlamchi tuzilish butun umr saqlanadi (faqat endoderma va ekzoderma kuchli qalinlashadi). Ikki urug‘pallali va ochiq urug‘lilarda esa birlamchi floema ostidagi parenxima va ksilema nurlari qarshisidagi peritsikl hujayralaridan uzluksiz kambiy halqasi hosil bo‘ladi. Kambiy ichkariga ko‘p ikkilamchi ksilema (yog‘ochlik), tashqariga esa ikkilamchi floema (lub) ajratib, ildizni yo‘g‘onlashtiradi. Peritsikldan hosil bo‘lgan fellogen esa tashqarida himoya peridermasini (po‘kak) shakllantiradi, natijada birlamchi po‘stloq qurib tushadi.",
      },
      {
        heading: "4. Ildizmevalarning anatomik tiplari",
        content:
          "Zaxira modda qaysi to‘qimada to‘planishiga qarab ildizmevalar uch xil anatomik tuzilishga ega:",
        highlights: [
          "Turp (sholg‘om, rediska) tipi — asosiy etli qismni kambiy ichkariga ajratgan yog‘ochlik (ksilema) parenximasi tashkil etadi",
          "Sabzi tipi — asosiy etli va shirador qismini kambiy tashqariga ajratgan lub (floema) parenximasi hosil qiladi",
          "Lavlagi (qizilcha) tipi — polikambial tuzilishli: asosiy parenximada bir nechta konsentrik qo‘shimcha kambiy halqalari hosil bo‘ladi",
        ],
      },
    ],
    comparisonTable: {
      title: "Birlamchi ildiz va birlamchi poya anatomiyasining farqlari",
      columns: ["Anatomik belgi", "Birlamchi ildiz", "Birlamchi poya"],
      rows: [
        [
          "Tashqi qoplovchi qavat",
          "Rizoderma (ildiz tukchalari bor, kutikula yo‘q)",
          "Epiderma (kutikula va og‘izchalar bor)",
        ],
        [
          "Birlamchi po‘stloq qalinligi",
          "Juda keng (ildiz diametrining katta qismi)",
          "Nisbatan yupqa",
        ],
        ["Endoderma", "Aniq Kaspari belbog‘lariga ega", "Odatda kraxmal qobiqli qavat"],
        [
          "O‘tkazuvchi boylam tipi",
          "Radial (ksilema va floema navbatlashgan)",
          "Kollateral (floema tashqarida, ksilema ichkarida)",
        ],
        [
          "Yon shoxlanish manbayi",
          "Endogen — ichki peritsikldan",
          "Ekzogen — tashqi qo‘ltiq kurtaklardan",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Kaspari belbog‘i",
        definition:
          "Endoderma hujayralari devoridagi suv o‘tkazmaydigan suberin-lignin tasmasi (apoplast to‘sig‘i).",
      },
      {
        term: "Peritsikl",
        definition:
          "Markaziy silindrning tashqi faol qavati; yon ildizlar, kambiy va fellogen manbayi.",
      },
      {
        term: "Radial boylam",
        definition:
          "Ksilema nurlari orasida floema guruhlari navbatlashib joylashgan birlamchi ildiz o‘tkazuvchi tizimi.",
      },
      {
        term: "Apoplast va Simplast",
        definition:
          "Suvning ildiz bo‘ylab hujayra devorlari (apoplast) yoki tirik sitoplazma (simplast) orqali harakati.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Endoderma hujayralaridagi Kaspari belbog‘i o‘simlik uchun qanday hayotiy vazifa bajaradi?",
        answer:
          "U suv va erigan tuzlarning hujayra devorlari (apoplast) orqali nazoratsiz o‘tishini to‘sib, barcha eritmani tirik plazmalemma orqali tanlab o‘tkazishga hamda ksilemada ildiz bosimini ushlab turishga majbur qiladi.",
      },
      {
        question:
          "Nima uchun yon ildizlar ichki peritsikldan (endogen) chiqadi, yosh poya shoxlari esa sirtdan (ekzogen) rivojlanadi?",
        answer:
          "Ildizda o‘tkazuvchi boylamlar chuqur markazda joylashgani uchun yon ildizlar bevosita suv o‘tkazuvchi tizim bilan bog‘lanishi va tuproqdagi ishqalanishdan himoyalanishi uchun endogen hosil bo‘ladi.",
      },
      {
        question:
          "Sabzi, turp va qand lavlagi ildizmevalarining etli qismlari anatomik jihatdan nimasi bilan farq qiladi?",
        answer:
          "Turpda oziq to‘qima asosan ksilema parenximasidan, sabzida floema (lub) parenximasidan, lavlagida esa bir nechta konsentrik kambiy halqalari hosil qilgan qavatlardan iborat.",
      },
    ],
    keyTerms: [
      "Rizoderma",
      "Endoderma",
      "Kaspari belbog‘i",
      "Peritsikl",
      "Radial boylam",
      "Apoplast",
    ],
    references: "7-ma’ruza PDF taqdimoti va o‘quv dasturi",
    pdfUrl: "/assets/aistudio/M07_Ildizning_birlamchi_va_ikkilamchi_anatomik_tuzil_c3d1ffa9.pdf",
    pdfTitle: "7-ma’ruza PDF: Ildizning birlamchi va ikkilamchi anatomik tuzilishi",
  },
  {
    id: "bot-8",
    order: 8,
    code: "8",
    topicLabel: "8-mavzu",
    semester: "I semestr",
    title: "Novda va kurtak haqida umumiy tushuncha. Poya va uning vazifasi.",
    syllabusPoints: [
      "Novda va kurtak haqida umumiy tushuncha. Poya va uning vazifasi. Poyada barglarning joylashuvi.",
      "Novdalar tizimining paydo bo‘lishi, o‘sishi va shoxlanishi.",
      "Dixotomik, monopodial, simpodial va soxta dixotomik shoxlanishning tuzilishi va o‘simlik hayotidagi ahamiyati.",
    ],
    studyNotes:
      "Novda — barg va kurtaklar joylashgan poyadan iborat yuksak o‘simliklarning asosiy vegetativ organi. Kurtak esa boshlang‘ich novda bo‘lib, o‘sish konusi va boshlang‘ich bargchalardan tashkil topadi. Poyada barglar navbatli, qarama-qarshi va halqasimon joylashadi. Shoxlanishning 4 asosiy tipi mavjud: dixotomik, monopodial, simpodial va soxta dixotomik.",
    overview:
      "Yuksak o‘simliklarning yer ustki qismini tashkil etuvchi asosiy vegetativ organlar majmuasi novda tizimi hisoblanadi. Novda ildizdan farqli ravishda o‘sish konusida barg boshlang‘ichlarini hosil qilishi va o‘zida kurtaklar tutishi bilan ajralib turadi. Poya esa novdaning o‘q qismi bo‘lib, tayanch va o‘tkazuvchanlik vazifalarini bajaradi hamda barglarni quyosh nuriga qulay yo‘naltirib beradi.",
    sections: [
      {
        heading: "1. Novda tuzilishi va poyaning asosiy funksiyalari",
        content:
          "Novda — poya, undagi barglar va kurtaklardan iborat yaxlit tizimdir. Poyaning barg birikkan joyi bo‘g‘im, ikki qo‘shni bo‘g‘im orasidagi qismi esa bo‘g‘im oralig‘i deyiladi. Barg bandi bilan poya orasidagi yuqori burchak barg qo‘ltig‘i deb ataladi. Poya ildizdan kelgan suv va mineral tuzlarni barglarga, barglarda sintezlangan organik moddalarni esa ildiz va boshqa organlarga yetkazadi; shuningdek, mexanik tayanch, zaxira moddalar to‘plash va vegetativ ko‘payish vazifalarini bajaradi.",
        highlights: [
          "Uzaygan novdalar — bo‘g‘im oraliqlari uzun (masalan, terak, tol novdalari)",
          "Qisqargan novdalar — bo‘g‘im oraliqlari juda qisqa, meva va gul kurtaklari joylashadi (olma, olcha)",
        ],
      },
      {
        heading: "2. Kurtak tuzilishi va tasnifi",
        content:
          "Kurtak — hali rivojlanmagan boshlang‘ich novda bo‘lib, uning markazida hujayralari tinimsiz bo‘linuvchi meristema — o‘sish konusi joylashadi. Tashqi tomondan kurtaklar zich qoplovchi tangachalar (shakli o‘zgargan barglar) bilan sovuq va qurishdan himoyalanadi. Joylashuviga ko‘ra uchki (apikal), yon (qo‘ltiq) va qo‘shimcha kurtaklar; tuzilishiga ko‘ra vegetativ (barg hosil qiluvchi), generativ (gul/to‘pgul hosil qiluvchi) va aralash kurtaklarga bo‘linadi. Uxlovchi kurtaklar daraxt kesilganda yoki shikastlanganda faollashadi.",
      },
      {
        heading: "3. Poyada barglarning joylashuvi (Fillotaksis)",
        content:
          "Barglar poyada bir-biriga soya solmasligi va yorug‘likdan maksimal foydalanishi uchun qat’iy geometrik tartibda (barg mozaikasi) joylashadi. Uchta asosiy barg joylashish tipi farqlanadi:",
        highlights: [
          "Navbatli (spiral) joylashuv: har bir bo‘g‘imdan bittadan barg chiqadi (olma, g‘o‘za, bug‘doy)",
          "Qarama-qarshi joylashuv: bir bo‘g‘imdan qarama-qarshi ikkita barg chiqadi (rayhon, yalpiz, chinnigul)",
          "Halqasimon (to‘p) joylashuv: bir bo‘g‘imdan uchta va undan ortiq barg doira bo‘lib chiqadi (sambitgul, qirqbo‘g‘im)",
        ],
      },
      {
        heading: "4. Novdalarning shoxlanish tiplari va evolyutsion ahamiyati",
        content:
          "Shoxlanish tufayli o‘simlikning assimilyatsiya yuzasi (barg sathi) keskin ortadi va keng maydon egallanadi. Eng qadimgi dixotomik shoxlanishda o‘sish konusi teng ikkiga ajraladi (plaunlar, ayrim suvo‘tlar). Monopodial shoxlanishda bosh o‘q umr bo‘yi ustunlik qilib yuqoriga o‘sadi, yon shoxlar undan kuchsizroq bo‘ladi (qarag‘ay, archa, eman). Simpodial shoxlanishda bosh o‘q o‘sishdan to‘xtaydi yoki gul bilan tugaydi, o‘sishni esa yon kurtak davom ettiradi (olma, shaftoli, pomidor). Soxta dixotomik shoxlanishda uchki kurtak nobud bo‘lib, uning ostidagi ikkita qarama-qarshi yon kurtak teng rivojlanadi (nastarin, chinor, yong‘oq).",
      },
    ],
    comparisonTable: {
      title: "Novdalarning shoxlanish tiplarini qiyosiy tavsifi",
      columns: ["Shoxlanish tipi", "O‘sish xususiyati", "Biologik afzalligi", "Misollar"],
      rows: [
        [
          "Dixotomik",
          "Uchki nuqta ikkiga bo‘linadi",
          "Eng sodda shoxlanish usuli",
          "Plaunlar, riniyalar",
        ],
        [
          "Monopodial",
          "Asosiy o‘q cheksiz ustun o‘sadi",
          "Baland, tik va mustahkam tana",
          "Qarag‘ay, archa, terak",
        ],
        [
          "Simpodial",
          "Yon kurtaklar asosiy o‘q o‘rnini oladi",
          "Yoyiq, yorug‘sevar va serhosil shox-shabba",
          "Olma, o‘rik, g‘o‘za",
        ],
        [
          "Soxta dixotomik",
          "Uchki kurtak ostidan 2 ta yon shox chiqadi",
          "Keng va simmetrik soya hosil qiladi",
          "Nastarin (siren), otkashtan",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Novda",
        definition:
          "Poya, barglar va kurtaklardan tashkil topgan yuksak o‘simliklar vegetativ organi.",
      },
      {
        term: "Bo‘g‘im oralig‘i",
        definition: "Poyadagi ikki qo‘shni barg birikkan bo‘g‘imlar orasidagi masofa.",
      },
      {
        term: "Fillotaksis",
        definition:
          "Barglarning poyada spiral, qarama-qarshi yoki halqasimon joylashish qonuniyati.",
      },
      {
        term: "Monopodial shoxlanish",
        definition: "Uchki kurtak faoliyati hisobiga asosiy o‘qning doimiy ustun bo‘lib o‘sishi.",
      },
      {
        term: "Simpodial shoxlanish",
        definition: "Asosiy o‘q o‘sishi to‘xtab, yon kurtak hisobiga o‘sish davom etishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Vegetativ va generativ kurtaklarning ichki tuzilishida qanday farq bor?",
        answer:
          "Vegetativ kurtak ichida faqat boshlang‘ich poya va bargchalar bo‘ladi; generativ (gul) kurtak esa yirikroq va yumaloq bo‘lib, unda gul yoki to‘pgul boshlang‘ichlari joylashadi.",
      },
      {
        question: "Mevali daraxtlar (olma, olcha) qaysi shoxlanish tipiga mansub va nima uchun?",
        answer:
          "Mevali daraxtlar simpodial shoxlanishga mansub, chunki ularning uchki kurtaklari gul bilan tugaydi yoki o‘sishdan to‘xtaydi va shox-shabba yon kurtaklar hisobiga yoyiq rivojlanadi.",
      },
      {
        question: "Uxlovchi kurtaklar o‘simlik hayotida qanday ahamiyatga ega?",
        answer:
          "Ular bir necha yil davomida tinim holatida saqlanadi va daraxt kesilganda, muzlaganda yoki zararlanganda uyg‘onib, novda va barglarni qayta tiklaydi.",
      },
    ],
    keyTerms: ["Novda", "Kurtak", "Fillotaksis", "Monopodial", "Simpodial", "Dixotomik"],
    references: "[2, 3, 8, 12]",
    pdfUrl: "/assets/aistudio/M08_Novda_va_kurtak_Novdalarning_o_sishi_va_shoxlani_1da63e9f.pdf",
    pdfTitle: "8-ma’ruza PDF: Novda va kurtak. Novdalarning o‘sishi va shoxlanishi",
  },
  {
    id: "bot-9",
    order: 9,
    code: "9",
    topicLabel: "9-mavzu",
    semester: "I semestr",
    title:
      "Poyaning birlamchi va ikkilamchi anatomik tuzilishi, shakli o‘zgargan novdalarning tuzilishi.",
    syllabusPoints: [
      "Poyaning birlamchi va ikkilamchi anatomik tuzilishi, ularning o‘xshashlik va farqlari, daraxt poyasining tuzilishi.",
      "Yer ostki va yer ustki shakli o‘zgargan novdalar, ularning kelib chiqishi va ahamiyati.",
    ],
    studyNotes:
      "Poyaning birlamchi tuzilishi apikal meristema faoliyati natijasida hosil bo‘lib, epidermis, birlamchi po‘stloq va markaziy silindrdan iborat. Ikki urug‘pallali va ochiq urug‘li o‘simliklarda kambiy hisobiga ikkilamchi yo‘g‘onlashish sodir bo‘ladi. Shakli o‘zgargan yer ostki novdalarga ildizpoya, tugunak va piyozbosh; yer ustkilarga esa gajak, tikan va fillokladiy kiradi.",
    overview:
      "O‘simliklarning o‘sishi va uzoq yil yashashi poyaning ichki anatomik tuzilishi bilan bevosita bog‘liq. Birlamchi tuzilish yosh novdalarda va ko‘pchilik bir urug‘pallali o‘tlarda butun umr saqlanadi, ikkilamchi tuzilish esa daraxt va butalarda kambiy hamda fellogen faoliyati tufayli poyaning yo‘g‘onlashuvini ta’minlaydi. Tashqi muhit sharoitlariga moslashish jarayonida novdalar turli metamorfozlarga uchragan.",
    sections: [
      {
        heading: "1. Poyaning birlamchi anatomik tuzilishi",
        content:
          "Yosh novdaning ko‘ndalang kesmasida tashqaridan ichkariga qarab uchta asosiy anatomik zona ajraladi: 1) Epidermis (bir qavatli tirik qoplovchi to‘qima, ustida kutikula va og‘izchalar bor); 2) Birlamchi po‘stloq (kollenxima mexanik to‘qimasi, xlorofil saqlovchi parenxima va ichki qavat — kraxmal qobiqli endoderma); 3) Markaziy silindr (stela) — peritsikl, kollateral o‘tkazuvchi boylamlar (floema tashqarida, ksilema ichkarida) va markaziy parenxima (o‘zak).",
        highlights: [
          "Bir urug‘pallalilarda (makkajo‘xori, bug‘doy) o‘tkazuvchi boylamlar yopiq (kambiysiz) bo‘lib, asosiy parenximada tarqoq joylashadi",
          "Ikki urug‘pallalilarda o‘tkazuvchi boylamlar ochiq (kambiyli) bo‘lib, halqa shaklida joylashadi",
        ],
      },
      {
        heading: "2. Ikkilamchi tuzilish va daraxt poyasining anatomiyasi",
        content:
          "Ikki urug‘pallali o‘tlar va barcha daraxt-butalarda boylamlararo va boylam ichki kambiylari qo‘shilib uzluksiz kambiy halqasini hosil qiladi. Kambiy ichkariga ko‘p miqdorda ikkilamchi ksilema (yog‘ochlik), tashqariga esa ikkilamchi floema (lub) hujayralarini ajratadi. Bahorda yirik bo‘shliqli traxeya va traxeidlar, kuzda esa mayda va qalin devorli hujayralar shakllanishi natijasida yillik halqalar vujudga keladi. Tashqarida esa epidermis o‘rnini fellogen hosil qilgan ko‘p qavatli po‘kak (periderma) va po‘stloq (ritidom) egallaydi.",
      },
      {
        heading: "3. Yer ostki shakli o‘zgargan novdalar",
        content:
          "Yer ostki metamorfozlar noqulay fasl (qish, qurg‘oqchilik)ni o‘tkazish, oziq modda to‘plash va vegetativ ko‘payish vazifasini bajaradi. Ularni ildizdan farqlaydigan belgilar: bo‘g‘imlar, tangachasimon barglar va qo‘ltiq kurtaklarining mavjudligidir.",
        highlights: [
          "Ildizpoya: gorizontal o‘sadigan yer ostki novda (g‘umay, ajriq, gulsafsar, landish)",
          "Tugunak: o‘q qismi kuchli yo‘g‘onlashgan, kraxmal to‘plovchi novda; ko‘zchalarida kurtaklari bor (kartoshka, topinambur)",
          "Piyozbosh: poya qismi qisqargan tub (donsa) bo‘lib, shira to‘plovchi etli barglardan iborat (piyoz, lola, sarimsoq)",
        ],
      },
      {
        heading: "4. Yer ustki shakli o‘zgargan novdalar",
        content:
          "Yer ustki novdalar yorug‘likka intilish, himoya yoki fotosintez funksiyasini o‘z zimmasiga olish uchun o‘zgaradi. Masalan, tok va qovoqning gajaklari tayanchga ilashish uchun; do‘lana va gledichiyaning tikanlari hayvonlardan himoyalanish uchun; kaktusning etli sukkulent poyasi suv saqlash uchun; iglitsa (Ruscus) va sparjaning yassi bargsimon novdalari (fillokladiy va kladodiy) esa fotosintez uchun xizmat qiladi.",
      },
    ],
    comparisonTable: {
      title: "Birlamchi va ikkilamchi poya tuzilishining farqlari",
      columns: ["Belgi", "Birlamchi tuzilish", "Ikkilamchi tuzilish"],
      rows: [
        [
          "Hosil qiluvchi to‘qima",
          "Apikal (uchki) meristema",
          "Lateral meristema (kambiy va fellogen)",
        ],
        [
          "Qoplovchi to‘qima",
          "Bir qavatli epidermis",
          "Ko‘p qavatli periderma (po‘kak) va po‘stloq",
        ],
        [
          "O‘tkazuvchi tizim",
          "Alohida o‘tkazuvchi boylamlar",
          "Yaxlit yog‘ochlik va lub qatlamlari",
        ],
        ["Yillik halqalar", "Mavjud emas", "Mavsumiy iqlimda aniq ko‘rinadi"],
        [
          "Qaysi guruhda uchraydi",
          "Yosh novdalar, bir urug‘pallalilar",
          "Daraxtlar, butalar, ko‘p yillik ikki pallalilar",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Kambiy",
        definition:
          "Ichkariga yog‘ochlik (ksilema), tashqariga lub (floema) hosil qiluvchi ikkilamchi hosil qiluvchi to‘qima.",
      },
      {
        term: "Yillik halqa",
        definition:
          "Kambiyning bir vegetatsiya davrida (bahor va kuzda) hosil qilgan yog‘ochlik qavati.",
      },
      {
        term: "Tugunak",
        definition:
          "Zaxira oziq modda to‘plash uchun bo‘g‘im oraliqlari yo‘g‘onlashgan yer ostki novda (masalan, kartoshka).",
      },
      {
        term: "Fillokladiy",
        definition:
          "Barg vazifasini bajaruvchi, yassi bargsimon shakl olgan o‘sishi cheklangan yon novda.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Kartoshka tugunagini ildizmevadan (sabzi, sholg‘om) qanday ajratish mumkin?",
        answer:
          "Kartoshka tugunagida ildiz qalpog‘i bo‘lmaydi, aksincha spiral joylashgan ko‘zchalar (kurtaklar) va mayda barg izlari mavjud bo‘lib, bu uning novda ekanligini isbotlaydi.",
      },
      {
        question:
          "Nima uchun bir urug‘pallali o‘simliklar (masalan, bug‘doy, palma) poyasi ikkilamchi yo‘g‘onlashmaydi?",
        answer:
          "Chunki ularning o‘tkazuvchi boylamlari yopiq tipda bo‘lib, ksilema va floema orasida kambiy qavati bo‘lmaydi.",
      },
      {
        question: "Daraxt poyasida yillik halqalar nimalarni aniqlashga yordam beradi?",
        answer:
          "Yillik halqalar soni bo‘yicha daraxtning yoshi, qalinligi bo‘yicha esa o‘tgan yillardagi iqlim sharoiti (namgarchilik yoki qurg‘oqchilik — dendroxronologiya) aniqlanadi.",
      },
    ],
    keyTerms: ["Kambiy", "Yillik halqa", "Ildizpoya", "Tugunak", "Piyozbosh", "Fillokladiy"],
    references: "[1, 5, 6, 8]",
    pdfUrl: "/assets/aistudio/M09_Poyaning_anatomik_tuzilishi_va_shakli_o_zgargan__e390a922.pdf",
    pdfTitle: "9-ma’ruza PDF: Poyaning anatomik tuzilishi va shakli o‘zgargan novdalar",
  },
  {
    id: "bot-10",
    order: 10,
    code: "10",
    topicLabel: "10-mavzu",
    semester: "I semestr",
    title: "Bargning morfologik va anatomik tuzilishi, asosiy vazifasi.",
    syllabusPoints: [
      "Bargning morfologik tuzilishi, shakllari va asosiy vazifasi. Shakli o‘zgargan barglar (metamorfozi).",
      "Bargning anatomik tuzilishi, tiplari. Krans hujayrali va krans hujayrasiz barglarning tuzilishi.",
      "Bir urug‘pallali va ikki urug‘pallali o‘simliklar barglarining anatomik tuzilishi.",
    ],
    studyNotes:
      "Barg fotosintez, transpiratsiya va gaz almashinuvini ta’minlovchi asosiy organ bo‘lib, yaproq, band, asos va yonbargchalardan iborat. Anatomik jihatdan epidermis, ustunsimon hamda g‘ovak mezofill va o‘tkazuvchi boylamlardan tashkil topadi. C4 o‘simliklarda tomirlar atrofida xarakterli Krans anatomiyasi uchraydi.",
    overview:
      "Barg yuksak o‘simliklarning asosiy avtotrof organi bo‘lib, quyosh energiyasi yordamida anorganik moddalardan (CO2 va H2O) organik moddalar sintezlaydi. Uning yassi shakli maksimal yorug‘lik yutishga, ichki to‘qimalarining joylashuvi esa gaz almashinuvi va suv bug‘latishni aniq boshqarishga moslashgan.",
    sections: [
      {
        heading: "1. Bargning morfologiyasi va qismlari",
        content:
          "To‘liq barg barg yaprog‘i, barg bandi, barg asosi va yonbargchalardan tashkil topadi. Bandi bo‘lmagan barglar bandsiz (o‘troq) barg deyiladi (lola, g‘alladoshlar qini). Yaproqlar soniga ko‘ra barglar oddiy (bitta bandda bitta yaproq: olma, terak) va murakkab (bitta umumiy band — raxilda bir nechta yaproqchalar: uch yaproqli — beda, panjasimon — kashtan, juft va toq patsimon — yong‘oq, akatsiya) bo‘ladi. Tomirlanish turlari: patsimon va panjasimon (ikki pallalilarda to‘rsimon), parallel va yoysimon (bir pallalilarda).",
      },
      {
        heading: "2. Bargning anatomik tuzilishi va mezofill tiplari",
        content:
          "Barg ko‘ndalang kesmasida yuqori va pastki epidermis orasida asosiy fotosintezlovchi to‘qima — mezofill (xlorenxima) joylashadi. Ikki urug‘pallali o‘simliklarning ko‘pchiligida barg dorsoventral tuzilishga ega: yuqori epidermis ostida silindrsimon, xloroplastga boy ustunsimon parenxima; pastki tomonida esa hujayralararo bo‘shliqlari keng g‘ovak parenxima joylashadi. Gaz almashinuvi va transpiratsiyani ikkita loviyasimon yopuvchi hujayradan iborat og‘izchalar (ustitsa) boshqaradi.",
        highlights: [
          "Dorsoventral barg: ustunsimon to‘qima yuqorida, g‘ovak to‘qima pastda (olma, nastarin)",
          "Izolateral barg: ustunsimon to‘qima ikkala tomonda ham bo‘ladi (yorug‘sevar dasht o‘simliklari)",
          "Sentrik (radial) barg: silindrsimon barg markazida o‘tkazuvchi boylam, atrofida mezofill (qayrag‘och emas, qarag‘ay ignabargi, piyoz)",
        ],
      },
      {
        heading: "3. Krans anatomiyali (C4) va oddiy (C3) barglar",
        content:
          "C3 o‘simliklarda (bug‘doy, g‘o‘za, olma) mezofill odatiy ustunsimon va g‘ovak qavatlarga bo‘linadi va o‘tkazuvchi boylam qobiq hujayralarida xloroplast kam bo‘ladi. Issiq va quruq iqlimga moslashgan C4 o‘simliklarda (makkajo‘xori, jo‘xori, shakarqamish) esa o‘tkazuvchi boylam atrofini yirik, xloroplastga juda boy qalin devorli hujayralar halqa (nemischa 'Kranz' — gulchambar) shaklida o‘rab turadi. Bu tuzilish fotorespiratsiyani bartaraf etib, fotosintez unumdorligini keskin oshiradi.",
      },
      {
        heading: "4. Barg metamorfozlari va xazonrezgilik",
        content:
          "Tashqi muhit ta’sirida barglar gajaklarga (no‘xat — tayanchga ilashish), tikanlarga (kaktus, zirk — suv bug‘lanishini kamaytirish va himoya), tangachalarga (piyoz po‘sti, kurtak tangachasi), zaxira etli barglarga (aloe, karam) hamda hasharot tutuvchi a’zolarga (rosyanka, nepentes — azot tanqisligini qoplash) aylangan. Kuzda poya va barg asosi o‘rtasida ajratuvchi qavat hosil bo‘lib, barglar to‘kiladi (xazonrezgilik), bu o‘simlikni qishki qurish va zararli moddalardan xalos etadi.",
      },
    ],
    comparisonTable: {
      title: "Bir urug‘pallali va ikki urug‘pallali o‘simliklar bargi qiyosi",
      columns: ["Belgi", "Ikki urug‘pallali o‘simliklar", "Bir urug‘pallali o‘simliklar"],
      rows: [
        [
          "Barg shakli va bandi",
          "Bandli, yaprog‘i keng va turli shaklda",
          "Ko‘pincha bandsiz (qinli), uzun tasmasimon",
        ],
        ["Tomirlanishi", "To‘rsimon (patsimon yoki panjasimon)", "Parallel yoki yoysimon"],
        [
          "Mezofill tuzilishi",
          "Ustunsimon va g‘ovak qavatlarga aniq bo‘linadi",
          "Ko‘pincha bir xil g‘ovak hujayralardan iborat",
        ],
        [
          "Og‘izchalar joylashuvi",
          "Asosan bargning ostki epidermisida",
          "Ikkala epidermisda ham deyarli teng miqdorda",
        ],
        [
          "Motor (harakat) hujayralar",
          "Odatda bo‘lmaydi",
          "G‘alladoshlarda bargni o‘rash uchun mavjud",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Mezofill",
        definition:
          "Bargning yuqori va pastki epidermislari orasida joylashgan asosiy fotosintezlovchi to‘qima.",
      },
      {
        term: "Krans anatomiya",
        definition:
          "C4 o‘simliklarda o‘tkazuvchi boylam atrofini yirik xloroplastli hujayralar gulchambar tarzida o‘rab turuvchi tuzilish.",
      },
      {
        term: "Og‘izcha (ustitsa)",
        definition:
          "Ikki yopuvchi hujayra va tirqishdan iborat gaz almashinuvi hamda transpiratsiya apparati.",
      },
      {
        term: "Transpiratsiya",
        definition: "O‘simlik barglari orqali suvning bug‘ holatida ajralib chiqish jarayoni.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Dorsoventral bargda ustunsimon mezofill nima uchun aynan yuqori epidermis ostida joylashadi?",
        answer:
          "Yuqori tomonga quyosh nurlari bevosita tushadi; zich joylashgan ustunsimon hujayralar esa yorug‘likni maksimal darajada yutib, fotosintezni jadal olib boradi.",
      },
      {
        question: "C4 o‘simliklarda Krans anatomiya qanday ekologik ustunlik beradi?",
        answer:
          "Kuchli yorug‘lik, yuqori harorat va suv tanqisligida og‘izchalar yarim yopiq bo‘lsa ham CO2 ni samarali bog‘lash va suvni tejash imkonini beradi.",
      },
      {
        question: "Oddiy barg va murakkab bargni xazonrezgilik paytida qanday farqlash mumkin?",
        answer:
          "Oddiy barg bandi bilan bitta yaxlit holda tushadi; murakkab bargda esa avval alohida bargchalar, so‘ngra umumiy barg bandi to‘kiladi va har bir barg qo‘ltig‘ida kurtak bo‘ladi.",
      },
    ],
    keyTerms: ["Mezofill", "Og‘izcha", "Krans anatomiya", "Transpiratsiya", "Metamorfoz"],
    references: "[2, 3, 5, 8]",
    pdfUrl: "/assets/aistudio/M10_Bargning_morfologik_va_anatomik_tuzilishi_37802d4b.pdf",
    pdfTitle: "10-ma’ruza PDF: Bargning morfologik va anatomik tuzilishi",
  },
  {
    id: "bot-11",
    order: 11,
    code: "11",
    topicLabel: "11-mavzu",
    semester: "I semestr",
    title:
      "O‘simliklarning qayta tiklanish va ko‘payish. O‘simliklarning jinssiz va jinsiy ko‘payishi.",
    syllabusPoints: [
      "O‘simliklarning vegetativ ko‘payishi – tabiiy va sun’iy vegetativ ko‘paytirish (in-situ, ex-situ, in-vitro) usullari.",
      "O‘simliklarning jinssiz va jinsiy ko‘payishi, uning biologik ahamiyati. Sporalar yordamida ko‘payish. Gametalar va zigotalar.",
      "Yuksak o‘simliklardagi jinssiz (sporofit) va jinsiy (gametofit) naslning gallanishlari. Ochiq urug‘li o‘simliklarning urug‘lar yordamida ko‘payishi.",
    ],
    studyNotes:
      "Ko‘payish tirik organizmlarning nasl qoldirish xususiyatidir. Vegetativ ko‘payish tabiiy va sun’iy (in-situ, ex-situ, in-vitro) turlarga bo‘linadi. Jinssiz ko‘payish sporalar orqali, jinsiy ko‘payish esa gametalar qo‘shilishi natijasida zigota hosil bo‘lishi bilan boradi va hayot siklida sporofit (2n) hamda gametofit (n) nasllar gallanadi.",
    overview:
      "Ko‘payish — barcha tirik organizmlarga xos bo‘lgan, turning saqlanib qolishi va tarqalishini ta’minlovchi fundamental jarayon. O‘simliklar olamida regeneratsiya qobiliyati nihoyatda yuqori bo‘lib, ko‘payishning uchta asosiy shakli (vegetativ, jinssiz va jinsiy) evolutsiya davomida o‘zaro uyg‘unlashgan.",
    sections: [
      {
        heading: "1. Vegetativ ko‘payish va zamonaviy biotexnologik usullar",
        content:
          "Vegetativ ko‘payish ona o‘simlikning somatik (tanaviy) hujayralari va organlaridan (ildizpoya, tugunak, piyozbosh, jingalak, qalamcha) yangi organizm rivojlanishidir. Bu usulda ona o‘simlikning irsiy belgilari (klon) o‘zgarishsiz saqlanadi. Tabiatni muhofaza qilish va qishloq xo‘jaligida uchta yondashuv qo‘llaniladi:",
        highlights: [
          "In-situ: o‘simliklarni o‘zining tabiiy o‘sish muhitida muhofaza qilib ko‘paytirish (qo‘riqxonalar)",
          "Ex-situ: tabiiy areali tashqarisida — botanika bog‘lari va urug‘ banklarida ko‘paytirish",
          "In-vitro (mikroklonal ko‘paytirish): steril oziqa muhitida hujayra yoki meristemadan (totipotentlik asosida) viruslardan toza minglab ko‘chat olish",
        ],
      },
      {
        heading: "2. Jinssiz ko‘payish — sporalar va sporangiylar",
        content:
          "Haqiqiy jinssiz ko‘payish sporangiylar ichida meyoz yo‘li bilan hosil bo‘ladigan maxsus bir hujayrali gaploid tuzilmalar — sporalar yordamida kechadi. Suv muhitida harakatchan xivchinli zoosporalar, quruqlikda esa shamol orqali tarqaladigan aplanosporalar uchraydi. Teng sporali (izosporali — yo‘sinlar, ko‘pchilik qirqquloqlar) va har xil sporali (mikrospora va megaspora — selaginella, urug‘li o‘simliklar) turlari mavjud.",
      },
      {
        heading: "3. Jinsiy ko‘payish tiplari va biologik ahamiyati",
        content:
          "Jinsiy ko‘payishda ikki xil jinsiy hujayra — gaploid gametalar (n) qo‘shilib, diploid zigota (2n) hosil qiladi. Evolutsiya davomida izogamiya (bir xil harakatchan gametalar), geterogamiya (urg‘ochi gameta yirikroq, harakatchan) va oogamiya (yirik harakatsiz tuxum hujayra va kichik harakatchan spermatozoid yoki harakatsiz spermiy) shakllangan. Jinsiy ko‘payish irsiy belgilarning qayta kombinatsiyasini ta’minlab, moslanuvchanlikni oshiradi.",
      },
      {
        heading: "4. Nasllarning gallanishi va ochiq urug‘lilarda urug‘ bilan ko‘payish",
        content:
          "Yuksak o‘simliklar hayot siklida diploid jinssiz nasl — sporofit (2n) va gaploid jinsiy nasl — gametofit (n) muntazam almashinib turadi. Yo‘sinlarda gametofit ustunlik qilsa, qirqquloqlardan boshlab sporofit ustunlik qiladi. Ochiq urug‘lilarda (qarag‘ay, archa) gametofit juda kichrayib sporofit hisobiga yashaydi, suvga bog‘liqlik yo‘qoladi (chang naychasi orqali urug‘lanish) va meva devorisiz ochiq holda urug‘ shakllanadi.",
      },
    ],
    comparisonTable: {
      title: "Ko‘payish usullarining biologik xususiyatlari",
      columns: ["Usul", "Asosiy tuzilma", "Irsiy o‘zgaruvchanlik", "Natija"],
      rows: [
        [
          "Vegetativ",
          "Somatik organlar, qalamcha, meristema",
          "Yo‘q (aniq genetik klon)",
          "Tez ko‘payish, nav belgilarini saqlash",
        ],
        [
          "Jinssiz (spora)",
          "Sporangiy va gaploid sporalar (n)",
          "Meyoz tufayli qisman bor",
          "Katta miqdorda tarqalish",
        ],
        [
          "Jinsiy",
          "Gametalar (n) qo‘shilishi → zigota (2n)",
          "Yuqori (rekombinatsiya)",
          "Yangi moslanish va evolyutsion taraqqiyot",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "In-vitro ko‘paytirish",
        definition:
          "O‘simlik meristema hujayralaridan steril sharoitda oziq muhitda yangi o‘simliklar yetishtirish biotexnologiyasi.",
      },
      {
        term: "Sporofit (2n)",
        definition:
          "O‘simlik hayot siklidagi diploid nasl bo‘lib, meyoz orqali sporalar hosil qiladi.",
      },
      {
        term: "Gametofit (n)",
        definition:
          "O‘simlik hayot siklidagi gaploid nasl bo‘lib, mitoz orqali gametalar hosil qiladi.",
      },
      {
        term: "Oogamiya",
        definition:
          "Yirik harakatsiz tuxum hujayraning kichik spermatozoid yoki spermiy bilan urug‘lanishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Sporofit va gametofit nasllar xromosoma to‘plamiga ko‘ra qanday farqlanadi?",
        answer:
          "Sporofit diploid (2n) bo‘lib zigotadan rivojlanadi; gametofit esa gaploid (n) bo‘lib meyoz natijasida hosil bo‘lgan sporadan rivojlanadi.",
      },
      {
        question: "In-vitro usulida o‘simlik ko‘paytirish qaysi hujayra xususiyatiga asoslanadi?",
        answer:
          "O‘simlik hujayralarining totipotentlik xususiyatiga — ya’ni bitta somatik hujayradan butun bir organizmni qayta tiklay olish qobiliyatiga asoslanadi.",
      },
      {
        question: "Nima uchun urug‘li o‘simliklar quruqlikda hukmronlikni egallagan?",
        answer:
          "Chunki ularda urug‘lanish jarayoni suv muhitiga bog‘liq emas va murtak zaxira oziqa hamda himoya qobiqli urug‘ ichida rivojlanadi.",
      },
    ],
    keyTerms: ["Vegetativ ko‘payish", "In-vitro", "Sporofit", "Gametofit", "Nasl gallanishi"],
    references: "[1, 2, 3, 8]",
    pdfUrl: "/assets/aistudio/M11_O_simliklarning_ko_payishi_vegetativ_jinssiz_va__6759b29f.pdf",
    pdfTitle: "11-ma’ruza PDF: O‘simliklarning ko‘payishi (vegetativ, jinssiz va jinsiy)",
  },
  {
    id: "bot-12",
    order: 12,
    code: "12",
    topicLabel: "12-mavzu",
    semester: "I semestr",
    title: "Gulning tuzilishi, tiplari va vazifasi.",
    syllabusPoints: [
      "Gulning tuzilishi, xillari va vazifasi. Gul qismlarining joylashishi. Gul formulasi va diagrammasi.",
      "Androtsey va mikrosporogenez haqida umumiy tushuncha. Chang donachalarining tuzilishi va turlari.",
      "Ginetseyning tuzilishi va turlari. Megasporogenez va urg‘ochi gametofit. Urug‘ kurtakning tuzilishi.",
    ],
    studyNotes:
      "Gul — yopiq urug‘li o‘simliklarning jinsiy ko‘payish organi. U gulband, gul o‘rni, kosachabarglar, tojbarglar, androtsey va ginetseydan iborat. Changdonlarda mikrosporogenez orqali chang donachalari, urug‘kurtak ichida esa megasporogenez orqali 8 yadroli murtak xaltasi shakllanadi.",
    overview:
      "Gul — yopiq urug‘li (gulli) o‘simliklarga xos bo‘lgan, jinsiy ko‘payish, changlanish, urug‘lanish va meva-urug‘ hosil qilishga moslashgan shakli o‘zgargan qisqargan novdadir. Gul qismlarining tuzilishi va joylashuvi o‘simlik sistematikasida turlarni aniqlashning eng ishonchli mezoni hisoblanadi.",
    sections: [
      {
        heading: "1. Gul qismlari, simmetriyasi va formulasi",
        content:
          "Gul poyaga gulband orqali birikadi (bandsiz gullar — o‘troq gul). Gulbandning kengaygan uchi gul o‘rni bo‘lib, unda steril (gulqo‘rg‘on) va fertil (changchi va urug‘chi) qismlar joylashadi. Gulqo‘rg‘on murakkab (yashil kosachabarg K va rangli tojbarg C) yoki oddiy (P — lola, bug‘doy) bo‘ladi. Simmetriyasiga ko‘ra aktinomorf (to‘g‘ri, bir nechta simmetriya tekisligi: olma, lola, `*`), zigomorf (qiyshiq, bitta tekislik: loviya, rayhon, `↑`) va asimmetrik gullar farqlanadi. Ikki jinsli gullarda androtsey va ginetsey birga bo‘ladi; bir jinsli gullarda esa faqat changchili yoki faqat urug‘chili gul bo‘ladi (bir uyli: makkajo‘xori, bodring; ikki uyli: tol, terak, ismaloq).",
      },
      {
        heading: "2. Androtsey va mikrosporogenez",
        content:
          "Guldagi changchilar yig‘indisi androtsey (A) deyiladi. Har bir changchi changchi ipi va 2 ta changxaltali (4 ta mikrosporangiy — uyali) changdondan iborat. Changdonda arxesporiy hujayralaridan mikrospora ona hujayralari (2n) shakllanadi va meyoz orqali 4 ta gaploid mikrospora (n) hosil qiladi (mikrosporogenez). Har bir mikrospora mitoz bo‘linib 2 hujayrali chang donachasiga (erkak gametofit) aylanadi: katta vegetativ hujayra (chang naychasini hosil qiladi) va kichik generativ hujayra (keyinchalik 2 ta spermiy beradi). Chang po‘sti mustahkam ekzina va ichki intinadan iborat.",
      },
      {
        heading: "3. Ginetsey, urug‘kurtak va megasporogenez",
        content:
          "Urug‘chilar majmuasi ginetsey (G) deb atalib, bitta yoki bir nechta mevabarglardan (karpella) hosil bo‘ladi: erkin (apokarp) va qo‘shilgan (senokarp) turlari bor. Urug‘chi tumshuqcha, ustuncha va tugunchadan iborat (tuguncha ustki, o‘rta yoki ostki bo‘lishi mumkin). Tuguncha ichida urug‘kurtak joylashadi (nutsellus, 1-2 ta integument va mikropile teshigi). Nutsellusda bitta megaspora ona hujayrasi (2n) meyoz bo‘linib 4 ta gaploid megaspora beradi; 3 tasi nobud bo‘lib, bitta faol megaspora yadrosi 3 marta ketma-ket mitoz bo‘linishi natijasida 8 yadroli, 7 hujayrali murtak xaltasi (urg‘ochi gametofit)ni hosil qiladi.",
        highlights: [
          "Mikropile tomonida: 1 ta tuxum hujayra (n) + 2 ta sinergid hujayra",
          "Markazda: 2 ta qutb yadro qo‘shilishidan hosil bo‘lgan diploid markaziy hujayra (2n)",
          "Xalaza (qarama-qarshi) tomonida: 3 ta antipod hujayra",
        ],
      },
    ],
    comparisonTable: {
      title: "Gul formulasi asosiy shartli belgilari",
      columns: ["Belgi", "Ma’nosi", "Qo‘llanilish namunasi"],
      rows: [
        [
          "*  yoki  ↑",
          "Aktinomorf (to‘g‘ri) / Zigomorf (qiyshiq)",
          "* K(5) C5 — olcha guli simmetriyasi",
        ],
        [
          "Ca / K  va  Co / C",
          "Kosachabarglar (K) va Tojbarglar (C)",
          "K4 C4 — karamdoshlar gulqo‘rg‘oni",
        ],
        ["P", "Oddiy gulqo‘rg‘on (perigoniy)", "P3+3 — loladoshlar gulqo‘rg‘oni"],
        [
          "A  va  G",
          "Androtsey (changchilar) va Ginetsey (urug‘chi)",
          "A∞ G(5) — ko‘p changchili va 5 mevabargli",
        ],
        [
          "( )  va  ∞",
          "Qismlar qo‘shilganligi / Ko‘p sonli (>12)",
          "G(2) — 2 ta qo‘shilgan mevabarg",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Androtsey",
        definition: "Bitta gul tarkibidagi barcha changchilar majmuasi.",
      },
      {
        term: "Ginetsey",
        definition: "Bitta yoki bir nechta mevabarglardan shakllangan urug‘chilar yig‘indisi.",
      },
      {
        term: "Murtak xaltasi",
        definition: "Yopiq urug‘li o‘simliklarning 8 yadroli, 7 hujayrali urg‘ochi gametofiti.",
      },
      {
        term: "Mikropile",
        definition: "Urug‘kurtak po‘stidagi chang naychasi kiradigan maxsus teshikcha.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Murtak xaltasi necha hujayra va nechta yadrodan iborat bo‘ladi?",
        answer:
          "Yetilgan murtak xaltasi 7 ta hujayra va 8 ta yadrodan iborat: tuxum hujayra, 2 ta sinergid, 3 ta antipod (har biri 1 yadroli) hamda 2 ta qutb yadroli markaziy hujayra.",
      },
      {
        question: "Gul formulasida son atrofida qavs `()` qo‘yilishi nimani anglatadi?",
        answer:
          "Gulning shu a’zolari (masalan, kosachabarglar, tojbarglar yoki mevabarglar) o‘zaro tutashib-qo‘shilib ketganligini bildiradi.",
      },
      {
        question: "Bir uyli va ikki uyli o‘simliklarning farqi nimada?",
        answer:
          "Bir uyli o‘simliklarda changchili va urug‘chili gullar bitta o‘simlikda joylashadi (makkajo‘xori); ikki uylilarda esa changchili gullar bir tupda, urug‘chili gullar boshqa tupda bo‘ladi (terak, tol).",
      },
    ],
    keyTerms: ["Androtsey", "Ginetsey", "Gul formulasi", "Mikrosporogenez", "Megasporogenez"],
    references: "[2, 5, 8]",
    pdfUrl: "/assets/aistudio/M12_Gulning_tuzilishi_formulasi_va_diagrammasi_a8b9d703.pdf",
    pdfTitle: "12-ma’ruza PDF: Gulning tuzilishi, formulasi va diagrammasi",
  },
  {
    id: "bot-13",
    order: 13,
    code: "13",
    topicLabel: "13-mavzu",
    semester: "I semestr",
    title: "To‘pgullarning tuzilishi, ularning asosiy morfologik belgilariga ko‘ra tiplari.",
    syllabusPoints: [
      "To‘pgullarning tuzilishi, ularning asosiy morfologik belgilariga ko‘ra tiplarga bo‘linishi.",
      "Oddiy va murakkab to‘pgullar va ularning turlari haqida nazariy ma’lumotlar asosida bilimlarni shakllantirish.",
    ],
    studyNotes:
      "To‘pgul — bitta umumiy o‘qqa ma’lum tartibda joylashgan gullar majmuasi bo‘lib, changlanish samaradorligini oshiradi. Monopodial to‘pgullarda asosiy o‘q uzoq o‘sadi (shingil, boshoq, soyabon, savatcha); simpozidial to‘pgullarda esa asosiy o‘q gul bilan tugaydi (monoxaziy, dixaziy, pleyoxaziy).",
    overview:
      "Ko‘pchilik yopiq urug‘li o‘simliklarda gullar yakka-yakka emas, balki mayda gullar guruhi — to‘pgullar shaklida rivojlanadi. To‘pgul hasharotlarni uzoqdan jalb qilish, shamol yordamida changlanish ehtimolini oshirish hamda har xil vaqtlarda ochiluvchi gullar hisobiga urug‘ hosil bo‘lishini kafolatlash kabi muhim biologik vazifalarni bajaradi.",
    sections: [
      {
        heading: "1. Oddiy monopodial (botrik) to‘pgullar",
        content:
          "Botrik to‘pgullarda bosh o‘q uzoq o‘sadi va gullar pastdan yuqoriga (yoki chetdan markazga — akropetal) qarab ketma-ket ochiladi. Bosh o‘qning shoxlanmagan turlari oddiy to‘pgul deyiladi:",
        highlights: [
          "Shingil: uzun bosh o‘qda gullar bandi bilan ketma-ket joylashadi (karam, jag‘-jag‘, oq akatsiya)",
          "Oddiy boshoq: uzun bosh o‘qda bandsiz (o‘troq) gullar joylashadi (zubturum)",
          "So‘ta: o‘qi etli va yo‘g‘onlashgan boshoq (makkajo‘xori urg‘ochi to‘pguli, kuchala — tol va terakda osilib turuvchi boshoq)",
          "Soyabon: bosh o‘q juda qisqarib, bir nuqtadan teng uzunlikdagi gulbandlar chiqadi (olcha, primula, piyoz)",
          "Qalqon: pastki gullar bandi uzunroq, yuqoridagilarniki qisqaroq bo‘lib, hamma gullar bir tekislikda joylashadi (nok, do‘lana)",
          "Savatcha va Boshcha: kengaygan lagansimon o‘qda ko‘p bandsiz gullar o‘rama barglar bilan joylashadi (kungaboqar, qoqio‘t — savatcha; sebarga — boshcha)",
        ],
      },
      {
        heading: "2. Murakkab monopodial to‘pgullar",
        content:
          "Murakkab to‘pgullarda bosh o‘q shoxlanadi va uning yon shoxlarida oddiy to‘pgullar joylashadi. Bularga murakkab boshoq (bug‘doy, arpa, javdar — bosh o‘qda oddiy boshoqchalar joylashadi), murakkab soyabon (sabzi, ukrop, kashnich — soyabon o‘rnida kichik soyabonchalar joylashadi), murakkab shingil — ro‘vak (uzum, sholi, suli, mastak) hamda murakkab qalqon (bo‘ymodaron) kiradi.",
      },
      {
        heading: "3. Simpozidial (simoz) to‘pgullar",
        content:
          "Simoz to‘pgullarda bosh o‘q ham, yon o‘qlar ham uchki gul bilan tugaydi va o‘sish pastki yon shoxlar hisobiga davom etadi (gullar yuqoridan pastga yoki markazdan chetga ochiladi). Uch asosiy xili ajratiladi: Monoxaziy (har bir o‘q ostidan bitta yon shox chiqadi: ilonizi — gladiolus, burama — g‘o‘zavosh/bo‘tako‘z, ituzum); Dixaziy (har gul ostidan ikkita qarama-qarshi yon shox chiqadi: chinnigul, yulduzo‘t); Pleyoxaziy (gul ostidan ko‘p yon shox halqasimon chiqadi: sutlama).",
      },
    ],
    comparisonTable: {
      title: "Asosiy to‘pgul turlari va o‘simlik vakillari",
      columns: ["To‘pgul nomi", "Guruhi", "Tuzilish xususiyati", "Vakillari"],
      rows: [
        ["Shingil", "Oddiy botrik", "Uzun o‘q + bandli gullar", "Karam, marvaridgul, no‘xat"],
        [
          "Savatcha",
          "Oddiy botrik",
          "Kengaygan yassi o‘q + o‘troq gullar",
          "Kungaboqar, romashka, qoqio‘t",
        ],
        [
          "Murakkab boshoq",
          "Murakkab botrik",
          "Bosh o‘qda mayda boshoqchalar",
          "Bug‘doy, arpa, javdar",
        ],
        [
          "Murakkab soyabon",
          "Murakkab botrik",
          "Har bir nur uchida kichik soyabon",
          "Sabzi, shivit (ukrop), petrushka",
        ],
        [
          "Ro‘vak",
          "Murakkab botrik",
          "Yon shoxlarda shingil yoki boshoqchalar",
          "Sholi, suli, tok (uzum), nastarin",
        ],
        ["Dixaziy", "Simoz", "Uchki gul ostidan 2 ta teng shox", "Chinnigul, bo‘znoch"],
      ],
    },
    keyConcepts: [
      {
        term: "Botrik to‘pgul",
        definition:
          "Asosiy o‘qi uzoq o‘sib, gullari pastdan yuqoriga yoki chetdan markazga ochiladigan to‘pgul.",
      },
      {
        term: "Simoz to‘pgul",
        definition: "Asosiy o‘qi gul bilan tugab, yon shoxlar hisobiga rivojlanadigan to‘pgul.",
      },
      {
        term: "Savatcha",
        definition:
          "Qoqio‘tdoshlar (murakkabguldoshlar) oilasiga xos kengaygan o‘qda bandsiz gullar joylashgan to‘pgul.",
      },
      {
        term: "Ro‘vak",
        definition:
          "Asosiy o‘qining yon shoxlari pastdan yuqoriga qarab qisqarib boradigan murakkab to‘pgul.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Kungaboqarning yirik sariq 'guli' aslida nima?",
        answer:
          "U bitta gul emas, balki chetki tilsimon (hasharotlarni jalb qiluvchi) va o‘rtadagi naychasimon (hosil beruvchi) yuzlab mayda gullardan tashkil topgan savatcha to‘pgulidir.",
      },
      {
        question: "Oddiy soyabon bilan murakkab soyabonning asosiy farqi nimada?",
        answer:
          "Oddiy soyabonda bosh o‘qdan chiqqan bandlar uchida bevosita gullar turadi (olcha); murakkab soyabonda esa shu bandlar uchida yana kichik soyabonchalar joylashadi (sabzi, ukrop).",
      },
      {
        question: "Bug‘doy boshoqchasi va zubturum boshog‘i qaysi to‘pgul turiga kiradi?",
        answer:
          "Zubturum — oddiy boshoq, bug‘doy esa murakkab boshoq (o‘qida bir nechta boshoqchalar joylashgan) to‘pguliga kiradi.",
      },
    ],
    keyTerms: ["Shingil", "Boshoq", "Soyabon", "Savatcha", "Ro‘vak", "Simoz to‘pgul"],
    references: "[4, 6, 7, 8]",
    pdfUrl: "/assets/aistudio/M13_To_pgullarning_tuzilishi_va_tiplari_43c8d931.pdf",
    pdfTitle: "13-ma’ruza PDF: To‘pgullarning tuzilishi va tiplari",
  },
  {
    id: "bot-14",
    order: 14,
    code: "14",
    topicLabel: "14-mavzu",
    semester: "I semestr",
    title: "Gulli o‘simliklarda changlanish va urug‘lanish.",
    syllabusPoints: [
      "Changlanish. Gullarni changlanishga moslanish xususiyatlari. Chetdan va o‘zidan changlanishning biologik ahamiyati.",
      "Gulli o‘simliklarda urug‘lanish. Qo‘sh urug‘lanish jarayoni va uning biologik ahamiyati.",
      "Gulli o‘simliklar embrioni (murtak)ning taraqqiyot sikli haqida nazariy ma’lumotlar.",
    ],
    studyNotes:
      "Changlanish — chang donachalarining urug‘chi tumshuqchasiga tushish jarayoni. S.G. Navashin kashf etgan qo‘sh urug‘lanishda ikki spermiydan biri tuxum hujayra bilan diploid murtak (2n), ikkinchisi esa markaziy hujayra bilan triploid endosperm (3n) hosil qiladi.",
    overview:
      "Urug‘lanish sodir bo‘lishi uchun avval chang donachasi urug‘chi tumshuqchasiga yetib borishi — changlanish jarayoni yuz berishi shart. Gulli o‘simliklar bu jarayonni samarali amalga oshirish uchun ajoyib biologik va tuzilish moslanishlariga ega bo‘lib, faqat shu guruhgagina xos bo‘lgan qo‘sh urug‘lanish mexanizmiga egadir.",
    sections: [
      {
        heading: "1. O‘zidan va chetdan changlanish xillari",
        content:
          "O‘zidan changlanish (avtogamiya) — bitta gul changining o‘z urug‘chi tumshuqchasiga tushishi (bug‘doy, arpa, no‘xat, g‘o‘za — qisman). Ba’zan gullar umuman ochilmasdan (kleystogamiya — binafsha, yeryong‘oq) changlanadi. Biroq doimiy o‘zidan changlanish naslni zaiflashtirishi mumkin, shu bois ko‘pchilik gullar chetdan changlanishga (ksenogamiya) moslashgan. O‘zidan changlanishning oldini oluvchi mexanizmlar: ikki uylilik, dixogamiya (changchi va urug‘chi har xil vaqtda yetilishi — protandriya, protoginiya) va geterostiliya (ustunchalar uzunligi har xilligi).",
      },
      {
        heading: "2. Chetdan changlanish agentlari va moslanishlar",
        content:
          "Changni tashuvchi omilga qarab chetdan changlanish abiotik (shamol va suv) hamda biotik (hasharotlar, qushlar, ko‘rshapalaklar) turlarga bo‘linadi:",
        highlights: [
          "Entomofiliya (hasharotlar): yirik, yorqin gulqo‘rg‘on, nektar, xushbo‘y hid, yirik yopishqoq va g‘adir-budur chang (olma, kungaboqar, bedapoya)",
          "Anemofiliya (shamol): mayda ko‘rimsiz gullar, nektarsiz va hidsiz, patsimon yirik tumshuqcha, uzun changchi iplari, millionlab yengil quruq chang (javdar, makkajo‘xori, yong‘oq, qayin)",
          "Gidrofiliya (suv): suv ichida o‘sadigan o‘simliklarda chang suv oqimi bilan tashiladi (vallisneriya, elodeya)",
        ],
      },
      {
        heading: "3. Qo‘sh urug‘lanish mexanizmi (S.G. Navashin, 1898)",
        content:
          "Tumshuqchaga tushgan chang donachasi shira ta’sirida o‘sib, chang naychasini chiqaradi. Vegetativ hujayra yadrosi chang naychasini ustuncha bo‘ylab tuguncha tomon boshqaradi, generativ hujayra esa bo‘linib ikkita gaploid spermiy (n) hosil qiladi. Chang naychasi mikropile orqali murtak xaltasiga kirib yoriladi va ikkala spermiyni bo‘shatadi. Birinchi spermiy (n) tuxum hujayra (n) bilan qo‘shilib diploid zigota (2n) hosil qiladi (undan murtak rivojlanadi). Ikkinchi spermiy (n) esa markaziy hujayra (2n) bilan qo‘shilib triploid hujayra (3n) hosil qiladi — undan murtakni oziqlantiruvchi endosperm rivojlanadi.",
      },
      {
        heading: "4. Embriogenez — murtakning rivojlanishi",
        content:
          "Qo‘sh urug‘lanishdan so‘ng triploid endosperm zigotadan oldinroq bo‘lina boshlaydi va oziqa muhitini tayyorlaydi. So‘ngra zigota ko‘ndalang bo‘linib ikkita hujayra hosil qiladi: mikropile tomonidagi bazal hujayradan suspensor (murtakni endosperm ichiga itaruvchi qism), apikal hujayradan esa haqiqiy murtak (boshlang‘ich ildizcha, poyacha, kurtakcha va urug‘pallalar) shakllanadi.",
      },
    ],
    comparisonTable: {
      title: "Shamol va hasharotlar bilan changlanadigan o‘simliklar qiyosi",
      columns: ["Belgi", "Hasharot bilan (Entomofil)", "Shamol bilan (Anemofil)"],
      rows: [
        ["Gulqo‘rg‘on", "Yirik, yorqin rangli, chiroyli", "Mayda, ko‘rimsiz yoki yo‘q"],
        ["Hid va nektar", "Kuchli xushbo‘y hid va shirin nektar bor", "Hid va nektar bo‘lmaydi"],
        [
          "Chang donachalari",
          "Yirik, og‘ir, yopishqoq, tikanchali",
          "Mayda, yengil, silliq, juda ko‘p",
        ],
        [
          "Changchi va tumshuqcha",
          "Gul ichida yashiringan",
          "Tashqariga osilgan, tumshuqcha patsimon",
        ],
        ["Misollar", "Olma, gilos, beda, paxta", "Qayin, yong‘oq, javdar, makkajo‘xori"],
      ],
    },
    keyConcepts: [
      {
        term: "Avtogamiya",
        definition: "Bitta gulning o‘z changi bilan changlanishi (o‘zidan changlanish).",
      },
      {
        term: "Qo‘sh urug‘lanish",
        definition:
          "Yopiq urug‘lilarda ikki spermiyning bir vaqtda tuxum hujayra (2n) va markaziy hujayrani (3n) urug‘lantirishi.",
      },
      {
        term: "Endosperm (3n)",
        definition:
          "Ikkinchi spermiy va markaziy hujayra qo‘shilishidan hosil bo‘lgan murtak uchun zaxira oziq to‘qimasi.",
      },
      {
        term: "Dixogamiya",
        definition:
          "O‘zidan changlanishga to‘sqinlik qiluvchi changchi va urug‘chining bir vaqtda yetilmasligi.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Agar o‘simlikning somatik hujayrasida 2n = 14 xromosoma bo‘lsa, uning endospermi va murtagida nechta xromosoma bo‘ladi?",
        answer:
          "Murtak diploid (2n) bo‘lgani uchun 14 ta, endosperm triploid (3n) bo‘lgani uchun 21 ta xromosomaga ega bo‘ladi.",
      },
      {
        question: "Gulli o‘simliklarda qo‘sh urug‘lanishning asosiy biologik afzalligi nimada?",
        answer:
          "Zaxira oziq to‘qima (endosperm) faqat muvaffaqiyatli urug‘lanishdan keyingina rivojlanadi — o‘simlik bo‘sh urug‘larga energiya sarflamaydi; qolaversa, 3n endosperm ona va ota belgilariga ega bo‘lib murtagi juda baquvvat rivojlanadi.",
      },
      {
        question: "Kleystogamiya qanday hodisa va qaysi o‘simliklarda uchraydi?",
        answer:
          "Ochilmagan g‘uncha ichida sodir bo‘ladigan majburiy o‘zidan changlanish (masalan, yeryong‘oq va ayrim binafshalar).",
      },
    ],
    keyTerms: ["Changlanish", "Qo‘sh urug‘lanish", "Endosperm (3n)", "Zigot", "Embriogenez"],
    references: "[4, 5, 8]",
    pdfUrl: "/assets/aistudio/M14_Gulli_o_simliklarda_changlanish_va_urug_lanish_0718672d.pdf",
    pdfTitle: "14-ma’ruza PDF: Gulli o‘simliklarda changlanish va urug‘lanish",
  },
  {
    id: "bot-15",
    order: 15,
    code: "15",
    topicLabel: "15-mavzu",
    semester: "I semestr",
    title: "Yopiq urug‘li o‘simliklar urug‘ining tuzilishi.",
    syllabusPoints: [
      "Gulli o‘simliklar urug‘ining tuzilishi. Bir pallali va ikki pallali o‘simliklar urug‘lari tuzilishidagi asosiy farqlari.",
      "O‘ziga xos xususiyatlari hamda o‘simlik hayotidagi ahamiyati.",
      "Urug‘larning unishi. Maysalarning tuzilishi haqida nazariy ma’lumotlar asosida bilimlarni shakllantirish.",
    ],
    studyNotes:
      "Urug‘ urug‘kurtakdan rivojlanib, urug‘ po‘sti, murtak hamda zaxira oziq modda (endosperm yoki perisperm) dan tashkil topadi. Ikki urug‘pallalilarda ikkita urug‘palla barg, bir urug‘pallalilarda esa bitta qalqoncha shaklidagi urug‘palla mavjud.",
    overview:
      "Urug‘ — yopiq va ochiq urug‘li o‘simliklarning ko‘payish va tarqalish organi bo‘lib, o‘zida yangi organizm murtagi hamda uning dastlabki o‘sishi uchun zarur bo‘lgan oziqa zaxirasini saqlaydi. Mustahkam urug‘ po‘sti murtagini noqulay sharoitlardan ishonchli himoya qiladi va turning uzoq yillar saqlanishini ta’minlaydi.",
    sections: [
      {
        heading: "1. Urug‘ning umumiy tuzilishi va zaxira to‘qimalari",
        content:
          "Urug‘langan urug‘kurtakdan urug‘ shakllanadi: integumentlardan — urug‘ po‘sti (spermoderm), zigotadan — murtak, markaziy hujayradan esa — endosperm rivojlanadi. Urug‘ po‘stida kindikcha (urug‘bandi izi) va mikropile (suv kiradigan teshikcha) saqlanadi. Murtak to‘rtta qismdan iborat: boshlang‘ich ildizcha, boshlang‘ich poyacha (gipokotil), kurtakcha (epikotil) va urug‘palla barglar. Ayrim o‘simliklarda (lavlagi, qora murch, chinnigul) zaxira oziqa nutsellus qoldig‘idan hosil bo‘lgan diploid perisperm ichida to‘planadi.",
      },
      {
        heading: "2. Ikki urug‘pallali o‘simliklar urug‘i (loviya, kanakunjut)",
        content:
          "Ikki urug‘pallali o‘simliklar urug‘i oziq moddasining joylashuviga ko‘ra ikki xil bo‘ladi. Endospermsiz urug‘larda (loviya, no‘xat, qovoq, kungaboqar) rivojlanayotgan murtak barcha endospermni yutib, zaxira moddalarni (kraxmal, oqsil, moy) ikkita yirik etli urug‘palla barglari ichida to‘playdi. Endospermli ikki pallalilarda (kanakunjut, pomidor, sabzi, ko‘knori) esa murtak kichikroq bo‘lib, oziqa modda alohida endosperm to‘qimasida saqlanadi.",
      },
      {
        heading: "3. Bir urug‘pallali o‘simliklar urug‘i (bug‘doy, makkajo‘xori)",
        content:
          "Bug‘doy va makkajo‘xori doni aslida urug‘ po‘sti meva devori bilan zich birikkan doncha mevasidir. Uning asosiy qismini kraxmalga boy endosperm egallaydi; endospermning tashqi qavati oqsilga boy aleyron qatlamidan iborat. Murtak chetda joylashgan bo‘lib, bitta urug‘pallasi endospermga yopishgan qalqoncha (skutellum) ga aylangan va unayotganda endosperm oziqasini so‘rib murtakka uzatadi. Murtak kurtakchasi maxsus g‘ilof — koleoptil, ildizchasi esa koleoriza bilan o‘ralgan.",
      },
      {
        heading: "4. Urug‘ning unishi va maysalar turlari",
        content:
          "Urug‘ unishi uchun 3 ta asosiy shart — suv (shishish va fermentlar faollashuvi), havo (kislorod — nafas olish) va maqbul harorat zarur. Avval ildizcha urug‘ po‘stini yorib chiqib tuproqqa mustahkamlanadi. Agar gipokotil (urug‘palla osti tizzasi) tez cho‘zilib urug‘pallalarni yer yuzasiga olib chiqsa — yer ustki unish (loviya, g‘o‘za, kungaboqar); agar urug‘pallalar tuproq ostida qolib, faqat epikotil o‘ssa — yer ostki unish (no‘xat, bug‘doy, eman) deyiladi.",
      },
    ],
    comparisonTable: {
      title: "Bir pallali va ikki pallali urug‘lar qiyosiy jadvali",
      columns: [
        "Mezon",
        "Ikki urug‘pallali (Masalan: Loviya)",
        "Bir urug‘pallali (Masalan: Bug‘doy)",
      ],
      rows: [
        ["Urug‘pallalar soni", "2 ta simmetrik urug‘palla", "1 ta (qalqoncha shaklida)"],
        [
          "Endosperm",
          "Ko‘pincha bo‘lmaydi (oziqa urug‘pallada) yoki mavjud",
          "Yaxshi rivojlangan, yirik (aleyron + kraxmal)",
        ],
        [
          "Urug‘ po‘sti va meva devori",
          "Ajralgan (po‘stini osongina archish mumkin)",
          "Doncha meva devori bilan zich birikkan",
        ],
        ["Koleoptil va koleoriza", "Mavjud emas", "Kurtakcha va ildizchani himoyalaydi"],
      ],
    },
    keyConcepts: [
      {
        term: "Qalqoncha (Skutellum)",
        definition:
          "G‘alladoshlarda urug‘pallaning endosperm bilan chegaralangan, oziq so‘ruvchi shakli.",
      },
      {
        term: "Perisperm",
        definition:
          "Ayrim urug‘larda urug‘kurtak nutsellusidan hosil bo‘ladigan diploid (2n) zaxira to‘qima.",
      },
      {
        term: "Koleoptil",
        definition:
          "Bir pallali o‘simliklar murtagining kurtakchasini tuproqdan chiqishda himoyalovchi g‘ilof.",
      },
      {
        term: "Gipokotil",
        definition:
          "Murtakning ildizcha bo‘g‘zi bilan urug‘pallalar orasidagi boshlang‘ich poyacha qismi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Bug‘doy donida qalqoncha qanday vazifani bajaradi?",
        answer:
          "Urug‘ unayotganda endospermga fermentlar ajratib, parchalangan shakar va aminokislotalarni so‘rib murtakning o‘sayotgan qismlariga uzatadi.",
      },
      {
        question:
          "Nima uchun chuqur haydalgan yoki botqoqlangan tuproqda urug‘ chirib ketadi, unmaydi?",
        answer:
          "Chunki urug‘ning jadal nafas olishi va zaxira moddalarni parchalashi uchun kislorod (havo) yetishmaydi.",
      },
      {
        question: "Loviya va no‘xat unishida qanday asosiy farq kuzatiladi?",
        answer:
          "Loviya yer ustki unish (urug‘pallalari tuproq yuziga chiqadi), no‘xat esa yer ostki unish (urug‘pallalari tuproq ostida qoladi) xususiyatiga ega.",
      },
    ],
    keyTerms: ["Urug‘ po‘sti", "Murtak", "Urug‘palla", "Endosperm", "Maysa", "Unish"],
    references: "O‘quv dasturi asosiy manbalari",
    pdfUrl: "/assets/aistudio/M15_Urug_ning_tuzilishi_va_unib_chiqishi_ece369cf.pdf",
    pdfTitle: "15-ma’ruza PDF: Urug‘ning tuzilishi va unib chiqishi",
  },
  {
    id: "bot-16",
    order: 16,
    code: "16",
    topicLabel: "16-mavzu",
    semester: "I semestr",
    title: "Mevalarning tuzilishi va xilma-xilligi, klassifikatsiyasi.",
    syllabusPoints: [
      "Mevalarning tuzilishi va xilma-xilligi, klassifikatsiyasi haqida nazariy ma’lumotlar asosida bilimlarni shakllantirish.",
      "Ochiq va yopiq urug‘li o‘simliklar urug‘ va mevalarning tarqalishining o‘ziga xos moslanishlari.",
    ],
    studyNotes:
      "Meva urug‘lanishdan keyin tugunchadan rivojlanadi. Meva devori (perikarpiy) ekzokarpiy, mezokarpiy va endokarpiydan iborat. Mevalar ho‘l (rezavor, danakli, olma, qovoq) va quruq (ko‘sakcha, dukkak, qo‘zoq, doncha, pista) turlarga bo‘linadi; tarqalishi anemo-, zoo-, gidro- va avtoxoriya orqali boradi.",
    overview:
      "Meva faqat yopiq urug‘li (gulli) o‘simliklarga xos organ bo‘lib, urug‘larni shakllanishi davomida himoya qilish hamda pishgandan keyin ularni uzoq masofalarga tarqatish vazifasini bajaradi. Ochiq urug‘lilarda esa haqiqiy meva bo‘lmaydi, urug‘lar qubba tangachalarida ochiq yetiladi.",
    sections: [
      {
        heading: "1. Mevaning tuzilishi va hosil bo‘lish xillari",
        content:
          "Meva asosan gulning tuguncha devoridan rivojlanadi. Agar meva faqat tugunchadan hosil bo‘lsa haqiqiy meva (olcha, pomidor), agar gul o‘rni, kosachabarg yoki gulqo‘rg‘on qismlari ham ishtirok etsa soxta meva (olma, nok, qulupnay, na’matak) deyiladi. Bitta murakkab to‘pguldan qo‘shilib o‘sgan mevalar to‘pmeva deb ataladi (tut, ananas, anjir). Meva devori — perikarpiy 3 qavatdan iborat: tashqi — ekzokarpiy (po‘st), o‘rta — mezokarpiy (etli yoki tolali qism) va ichki — endokarpiy (parda yoki qattiq danak).",
      },
      {
        heading: "2. Ho‘l mevalar tasnifi",
        content:
          "Pishganida mezokarpiysi sersuv va etli bo‘lgan mevalar ho‘l mevalar guruhini tashkil etadi:",
        highlights: [
          "Rezavor meva: ko‘p urug‘li, etli va danaksiz (uzum, pomidor, qorag‘at, banan)",
          "Danakli meva: bitta (ba’zan 2-3) urug‘li, endokarpiysi toshdek qattiq danak hosil qiladi (o‘rik, olcha, shaftoli, olxo‘ri)",
          "Olma meva (soxta meva): etli qismini gul o‘rni hosil qiladi, urug‘lari parda xonalarda joylashadi (olma, nok, behi)",
          "Qovoq meva: tashqi po‘sti qattiq, ichi seret va ko‘p urug‘li (tarvuz, qovun, bodring, qovoq)",
          "Sitrus (gesperidiy): efir moyli qalin po‘stli, ichi shirador bo‘lakchali meva (apelsin, limon, mandarin)",
        ],
      },
      {
        heading: "3. Quruq mevalar — ochiladigan va ochilmaydigan",
        content:
          "Pishganda perikarpiysi quriydigan mevalar ikkiga bo‘linadi. Ochiladigan (ko‘p urug‘li) mevalar: bargak (1 chokdan ochiladi — isfarak), dukkak (2 chokdan ochilib, urug‘lar meva qopqog‘iga birikadi — loviya, no‘xat), qo‘zoq va qo‘zoqcha (2 chokdan ochiladi, o‘rtada pardasi bor — karam, rediska, jag‘-jag‘) hamda ko‘sakcha (tirqish, tishcha yoki qopqoq bilan ochiladi — g‘o‘za, lola, ko‘knori). Ochilmaydigan (bir urug‘li) mevalar: doncha (bug‘doy, makkajo‘xori), pista (kungaboqar), yong‘oq va yong‘oqcha (o‘rmon yong‘og‘i), qanotli meva (zarang, qayrag‘och).",
      },
      {
        heading: "4. Urug‘ va mevalarning tarqalish moslanishlari",
        content:
          "O‘simliklar avlodining yangi hududlarni egallashi va ota-ona o‘simlik bilan raqobatdan qochishi uchun tarqalish moslanishlari muhim: Anemoxoriya (shamol: tukcha-popuklar — qoqio‘t, terak, g‘o‘za; qanotchalar — zarang); Zooxoriya (hayvonlar va qushlar: ilgakchali — qariqiz/repeynik; sersuv rangli meva — gilos, zirk); Gidroxoriya (suv: havo bo‘shliqli po‘st — kokos, nilufar); Avtoxoriya (o‘z-o‘zidan sochish: meva qopqoqlarining buralib otilishi — xina, yovvoyi bodring).",
      },
    ],
    comparisonTable: {
      title: "Asosiy meva turlarining strukturaviy jadvali",
      columns: ["Meva turi", "Guruhi", "Urug‘ soni", "Perikarpiy xususiyati"],
      rows: [
        ["Rezavor", "Ho‘l", "Ko‘p urug‘li", "Etli mezo- va endokarpiy"],
        [
          "Danakli",
          "Ho‘l",
          "1 ta (kamdan-kam ko‘p)",
          "Sersuv mezokarpiy + yog‘ochlashgan endokarpiy",
        ],
        ["Dukkak", "Quruq ochiladigan", "Ko‘p urug‘li", "2 ta qopqoq, ichki to‘siq pardasi yo‘q"],
        ["Qo‘zoq", "Quruq ochiladigan", "Ko‘p urug‘li", "2 ta qopqoq + o‘rtada yupqa to‘siq parda"],
        [
          "Pista",
          "Quruq ochilmaydigan",
          "1 ta urug‘li",
          "Qattiq po‘st urug‘ bilan birikmagan (kungaboqar)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Perikarpiy",
        definition: "Mevaning ekzokarpiy, mezokarpiy va endokarpiy qavatlaridan iborat devori.",
      },
      {
        term: "Soxta meva",
        definition:
          "Shakllanishida tugunchadan tashqari gul o‘rni yoki kosachabarg ham qatnashgan meva (olma, qulupnay).",
      },
      {
        term: "Anemoxoriya",
        definition:
          "Meva va urug‘larning qanotcha yoki tukchalar yordamida shamol orqali tarqalishi.",
      },
      {
        term: "Avtoxoriya",
        definition:
          "Pishgan mevalarning keskin yorilishi natijasida urug‘larning otilib tarqalishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Dukkak meva bilan qo‘zoq mevaning o‘xshash va farqli tomoni nimada?",
        answer:
          "Ikkalasi ham quruq, ko‘p urug‘li va ikki pallaga ochiladi; ammo dukkakda o‘rta to‘siq parda bo‘lmaydi va urug‘lar pallalarga birikadi, qo‘zoqda esa o‘rtada yupqa parda bo‘lib, urug‘lar o‘sha pardaga birikadi.",
      },
      {
        question: "Tut mevasi botanika nuqtayi nazaridan nima deb ataladi?",
        answer:
          "Tut — bitta guldan emas, balki butun bir to‘pguldan gullarning etli gulqo‘rg‘onlari birikib o‘sishi natijasida hosil bo‘lgan to‘pmevadir.",
      },
      {
        question: "Pista meva (kungaboqar) doncha meva (bug‘doy)dan qanday farq qiladi?",
        answer:
          "Ikkalasi ham bir urug‘li quruq ochilmaydigan meva; farqi shundaki, pista mevada meva devori urug‘ po‘stiga yopishmaydi, donchada esa zich birikib ketadi.",
      },
    ],
    keyTerms: ["Perikarpiy", "Ho‘l mevalar", "Quruq mevalar", "Anemoxoriya", "Zooxoriya"],
    references: "[4, 6, 7, 8]",
    pdfUrl: "/assets/aistudio/M16_Mevalarning_tuzilishi_va_tasnifi_719aad98.pdf",
    pdfTitle: "16-ma’ruza PDF: Mevalarning tuzilishi va tasnifi",
  },
  {
    id: "bot-17",
    order: 17,
    code: "17",
    topicLabel: "17-mavzu",
    semester: "I semestr",
    title: "O‘simliklarning yashash sharoitiga moslanishlari va ekologik guruhlari.",
    syllabusPoints: [
      "O‘simliklarning yashash sharoitiga moslanish belgilari va organlarining tuzilishi.",
      "Ekologik guruhlar va o‘simliklarning hayotiy shakllari haqida tushuncha.",
    ],
    studyNotes:
      "Namlikka munosabatiga ko‘ra: gidrofitlar, gigrofitlar, mezofitlar va kserofitlar (sukkulenlar va sklerofitlar). Yorug‘likka ko‘ra: geliofitlar va ssiofitlar. Raunkiyer bo‘yicha hayotiy shakllar: fanerofitlar, xamefitlar, gemikriptofitlar, kriptofitlar va terofitlar.",
    overview:
      "Har bir o‘simlik turi o‘z yashash muhitining abiotik omillariga (namlik, yorug‘lik, harorat, tuproq tarkibi) uzoq evolutsiya jarayonida moslashib, o‘ziga xos anatomik, morfologik va fiziologik xususiyatlarni shakllantirgan. O‘xshash sharoitga moslashgan har xil tur o‘simliklar ekologik guruhlar va hayotiy shakllarni hosil qiladi.",
    sections: [
      {
        heading: "1. Suv omiliga munosabatiga ko‘ra ekologik guruhlar",
        content:
          "Suv ta’minoti o‘simlik tashqi ko‘rinishi va ichki to‘qimalariga eng kuchli ta’sir ko‘rsatadigan omildir. 4 asosiy guruh ajratiladi:",
        highlights: [
          "Gidrofitlar (suv o‘simliklari): suvda yoki uning yuzasida o‘sadi, aerenxima (havo saqlovchi to‘qima) kuchli rivojlangan, kutikula va mexanik to‘qima zaif (nilufar, elodeya, sholipoya o‘tlari)",
          "Gigrofitlar: ortiqcha nam tuproq va nam havoda o‘sadi, barglari yirik va yupqa, ildiz tizimi yuza (qamish, sholi, bog‘ o‘tlari)",
          "Mezofitlar: o‘rtacha namlik sharoitida yashaydi, ko‘pchilik qishloq xo‘jaligi ekinlari va bargli daraxtlar (olma, g‘o‘za, bug‘doy, beda)",
          "Kserofitlar: cho‘l va chala cho‘l kabi qurg‘oqchil muhitga moslashgan. Ikkiga bo‘linadi: Sukkulenlar — etli poya yoki bargida suv to‘playdi (kaktus, aloe, agava); Sklerofitlar — qattiq mayda bargli, qalin kutikulali, tukli, ildizi o‘ta chuqur (saksovul, yantoq, shuvoq)",
        ],
      },
      {
        heading: "2. Yorug‘lik va tuproq omillariga moslanish",
        content:
          "Yorug‘likka ko‘ra: Geliofitlar (yorug‘sevarlar — ochiq maydon o‘simliklari, ko‘p qavatli ustunsimon mezofill, kungaboqar, qarag‘ay); Ssiofitlar (soyasevarlar — o‘rmon tagi o‘simliklari, keng yupqa bargli, xloroplastlari yirik, qirqquloq, marvaridgul) va soyaga chidamlilar. Tuproq sho‘rlanishiga moslashgan sho‘rxok o‘simliklar galofitlar (qorabaroq, sarsazan, yulg‘un), qumli cho‘l o‘simliklari esa psammofitlar (qandim, cherkez, oq saksovul) deb ataladi.",
      },
      {
        heading: "3. K. Raunkiyerning hayotiy shakllar tizimi",
        content:
          "Daniyalik botanik Xristian Raunkiyer (1905) o‘simliklarni noqulay fasl (qish yoki qurg‘oqchilik)ni yangilanish kurtaklari tuproq sathidan qanchalik balandda va qanday himoyada o‘tkazishiga qarab 5 ta hayotiy shaklga ajratgan: 1) Fanerofitlar — kurtaklar yerdan balandda (>30 sm, daraxt va butalar); 2) Xamefitlar — kurtaklar yerga yaqin (<20-30 sm, chala butalar, shuvoq); 3) Gemikriptofitlar — kurtaklar tuproq sathida quruq barg va qor ostida qishlaydi (qoqio‘t, g‘umay); 4) Kriptofitlar (geofitlar) — kurtaklar tuproq yoki suv ostida ildizpoya, piyozboshda saqlanadi (lola, boychechak); 5) Terofitlar — noqulay davrni faqat urug‘ holida o‘tkazuvchi bir yillik o‘tlar (efemerlar, jag‘-jag‘).",
      },
    ],
    comparisonTable: {
      title: "Namlik bo‘yicha ekologik guruhlarning anatomik belgilari",
      columns: [
        "Ekologik guruh",
        "Ildiz tizimi",
        "Barg va qoplovchi to‘qima",
        "O‘ziga xos to‘qima",
      ],
      rows: [
        [
          "Gidrofitlar",
          "Kuchsiz yoki umuman yo‘q",
          "Yupqa, suvosti barglarida og‘izcha yo‘q",
          "Keng havo saqlovchi aerenxima",
        ],
        [
          "Gigrofitlar",
          "Yuzaki va kuchsiz tarmoqlangan",
          "Katta, yupqa, kutikula deyarli yo‘q",
          "Yirik hujayralararo bo‘shliqlar",
        ],
        [
          "Mezofitlar",
          "O‘rtacha rivojlangan",
          "Me’yoriy epidermis, ustunsimon va g‘ovak qavat",
          "Muvozanatli o‘tkazuvchi tizim",
        ],
        [
          "Kserofitlar",
          "O‘ta chuqur (yantoq 20m gacha) yoki yuza",
          "Qalin kutikula, tuklar, chuqur og‘izchalar",
          "Sklerenxima (sklerofit) / suv saqlovchi parenxima",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Kserofitlar",
        definition:
          "Suv tanqis cho‘l va dasht hududlarida o‘sishga moslashgan, suvni tejovchi o‘simliklar guruhi.",
      },
      {
        term: "Aerenxima",
        definition:
          "Suv va botqoq o‘simliklarida kislorod zaxirasi hamda suzuvchanlikni ta’minlovchi havo to‘qimasi.",
      },
      {
        term: "Galofitlar",
        definition:
          "Tarkibida mineral tuzlar ko‘p bo‘lgan sho‘rlangan tuproqlarda yashashga moslashgan o‘simliklar.",
      },
      {
        term: "Terofitlar",
        definition:
          "Qish yoki yozgi jaziramani faqat urug‘ holida o‘tkazib, qulay bahorda tez gullab ulguruvchi bir yilliklar.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Saksovul va kaktus ikkalasi ham kserofit bo‘lsa-da, qurg‘oqchilikka qanday turlicha moslashgan?",
        answer:
          "Kaktus — sukkulent bo‘lib, yog‘ingarchilikda suvni etli poyasiga yig‘ib tejaydi va barglari tikanga aylangan; saksovul — sklerofit bo‘lib, barglari reduksiyalangan, yog‘ochligi zich va ildizlari yer osti suvlarigacha yetib boradi.",
      },
      {
        question: "Yorug‘sevar va soyasevar o‘simlik barglari anatomiyasida qanday farq bor?",
        answer:
          "Yorug‘sevar (geliofit) barglar qalinroq, bir necha qavatli ustunsimon mezofillga va ko‘p og‘izchalarga ega; soyasevar (ssiofit) barglar esa yupqa, to‘q yashil va yirik xloroplastli bo‘ladi.",
      },
      {
        question: "Lola va boychechak Raunkiyer tasnifining qaysi guruhiga kiradi?",
        answer:
          "Kriptofitlar (geofitlar) guruhiga, chunki ularning yangilanish kurtaklari noqulay mavsumda tuproq ostidagi piyozboshda saqlanadi.",
      },
    ],
    keyTerms: ["Kserofit", "Mezofit", "Gidrofit", "Geliofit", "Hayotiy shakllar"],
    references: "[4, 6, 7, 8]",
    pdfUrl: "/assets/aistudio/M17_O_simliklarning_ekologik_guruhlari_va_moslanishl_efdebf31.pdf",
    pdfTitle: "17-ma’ruza PDF: O‘simliklarning ekologik guruhlari va moslanishlari",
  },
  {
    id: "bot-18",
    order: 18,
    code: "18",
    topicLabel: "18-mavzu",
    semester: "I semestr",
    title: "Gulli o‘simliklar ontogenezi. O‘simliklarda mavsumiy o‘zgarishlar.",
    syllabusPoints: [
      "Gulli o‘simliklar ontogenezi haqida tushuncha, ularning rivojlanishi.",
      "O‘simliklarda uchraydigan mavsumiy o‘zgarishlar. O‘simliklar hayotining davomiyligi haqida nazariy ma’lumotlar.",
    ],
    studyNotes:
      "Ontogenez — urug‘langan tuxum hujayradan tortib tabiiy nobud bo‘lgungacha bo‘lgan individual rivojlanish davri (embrional, yuvenil, generativ va senil bosqichlar). Hayot davomiyligiga ko‘ra bir yillik, ikki yillik va ko‘p yillik o‘simliklar ajratiladi.",
    overview:
      "Har bir organizm hayoti davomida tug‘ilish, o‘sish, yetilish, ko‘payish va qarish kabi qonuniy bosqichlardan o‘tadi. Gulli o‘simliklarning individual rivojlanishi (ontogenezi) tashqi muhitning mavsumiy o‘zgarishlari — kun uzunligi, harorat va namgarchilik sikllari bilan uyg‘unlashgan holda kechadi.",
    sections: [
      {
        heading: "1. Gulli o‘simliklar ontogenezining asosiy bosqichlari",
        content:
          "T.A. Rabotnov va A.A. Uranov tasnifiga ko‘ra o‘simlik ontogenezi 4 yirik davrga bo‘linadi:",
        highlights: [
          "1) Latent (yashirin) davr: urug‘ning tinim holatidagi bosqichi; metabolizm juda sust",
          "2) Pregenerativ (vegetativ) davr: maysa, yuvenil (yoshlik — urug‘palla va dastlabki barglar), immatur va virginil (voyaga yetgan vegetativ) bosqichlar",
          "3) Generativ davr: gul, chang, meva va urug‘ hosil qilish bosqichi (yosh, o‘rta va qari generativ holatlar)",
          "4) Postgenerativ (senil — qarish) davr: gullash va mevalash to‘xtaydi, novdalar qurib, o‘simlik tabiiy nobud bo‘ladi",
        ],
      },
      {
        heading: "2. Hayot davomiyligiga ko‘ra o‘simlik guruhlari",
        content:
          "Ko‘payish soniga qarab o‘simliklar monokarpik (hayotida faqat bir marta gullab urug‘ beradi va quriydi) hamda polikarpik (har yili qayta-qayta gullab hosil beradi) guruhlarga bo‘linadi. Monokarpiklarga bir yillik o‘tlar (g‘o‘za, bug‘doy, pomidor), ikki yilliklar (sabzi, karam, lavlagi — 1-yili ildizmeva va to‘pbarg, 2-yili gul va urug‘) hamda ayrim ko‘p yillik monokarpiklar (agava, bambuk turlari) kiradi. Polikarpiklarga esa barcha daraxtlar, butalar va ko‘p yillik o‘tlar (beda, olma, eman) mansub.",
      },
      {
        heading: "3. Mavsumiy ritmlar, efemerlar va fotoperiodizm",
        content:
          "O‘simliklarda yillik mavsumiy o‘zgarishlar (fenofazalar: kurtak yozish, barglanish, gullash, mevalash, xazonrezgilik, tinim) ichki biologik soat va tashqi signallar orqali boshqariladi. Fotoperiodizm — kun va tun uzunligiga o‘simlikning gullash reaksiyasi (uzun kun o‘simliklari: bug‘doy, ismaloq; qisqa kun o‘simliklari: g‘o‘za, makkajo‘xori, sholi). Cho‘l va adir hududlarimizda bahorgi namlikdan foydalanib 1–1,5 oyda rivojlanishini tugatadigan bir yillik efemerlar (yaltirbosh, qumoq) va ko‘p yillik efemeroidlar (lola, boychechak, qo‘ng‘irbosh) keng tarqalgan.",
      },
    ],
    comparisonTable: {
      title: "O‘simliklarning hayot davomiyligiga ko‘ra tasnifi",
      columns: ["Guruh", "Hayot davomiyligi", "Ko‘payish sikli", "Misollar"],
      rows: [
        [
          "Efemerlar",
          "Bir necha hafta (1–2 oy)",
          "Bir marta (monokarpik)",
          "Yaltirbosh, qizg‘aldoq, qum jag‘-jag‘i",
        ],
        [
          "Oddiy bir yilliklar",
          "1 vegetatsiya mavsumi",
          "Bir marta (monokarpik)",
          "Bug‘doy, g‘o‘za, kungaboqar",
        ],
        [
          "Ikki yilliklar",
          "2 yil",
          "2-yil oxirida bir marta",
          "Sabzi, sholg‘om, qizil lavlagi, karam",
        ],
        [
          "Ko‘p yillik o‘tlar",
          "Bir necha yildan o‘nlab yilgacha",
          "Har yili (polikarpik)",
          "Beda, gulsafsar, lola (efemeroid)",
        ],
        [
          "Daraxt va butalar",
          "O‘nlab yildan minglab yilgacha",
          "Ko‘p marta (polikarpik)",
          "Olma, chinor, archa (1000+ yil)",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Ontogenez",
        definition:
          "Organizmning zigota yoki urug‘dan boshlab tabiiy nobud bo‘lgungacha bo‘lgan individual rivojlanishi.",
      },
      {
        term: "Monokarpik o‘simlik",
        definition:
          "Butun umri davomida faqat bir marta gullab meva tugib, so‘ngra nobud bo‘luvchi o‘simlik.",
      },
      {
        term: "Efemeroidlar",
        definition:
          "Erta bahorda tez gullab, yozgi qurg‘oqchilikda yer ustki qismi quriydigan, piyozbosh yoki ildizpoyasi tirik qoluvchi ko‘p yilliklar.",
      },
      {
        term: "Fotoperiodizm",
        definition:
          "O‘simliklarning o‘sishi va gullash jarayonining kun hamda tun uzunligiga bog‘liq javob reaksiyasi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Efemerlar va efemeroidlar o‘rtasidagi asosiy farq nimada?",
        answer:
          "Efemerlar — bir yillik o‘simliklar bo‘lib yozga kelib urug‘ qoldirib butunlay nobud bo‘ladi; efemeroidlar esa ko‘p yillik bo‘lib yer ostki organlari (piyozbosh, tugunak, ildizpoya) tuproqda tirik saqlanadi.",
      },
      {
        question:
          "Ikki yillik o‘simliklar (sabzi, karam) birinchi va ikkinchi yilda qanday o‘sadi?",
        answer:
          "Birinchi yili vegetativ organlar — ildizmeva yoki boshkaram shaklida zaxira oziqa to‘playdi; qishlab chiqqach, ikkinchi yili gul poya chiqarib urug‘ beradi va quriydi.",
      },
      {
        question: "Ontogenezning qaysi bosqichi latent davr deb ataladi?",
        answer:
          "Urug‘ (yoki spora) ning unishgacha bo‘lgan tinim holatidagi davri latent davr deyiladi.",
      },
    ],
    keyTerms: ["Ontogenez", "Yuvenil davr", "Generativ davr", "Efemerlar", "Mavsumiy ritm"],
    references: "[4, 6, 7, 8]",
    pdfUrl: "/assets/aistudio/M18_O_simliklar_ontogenezi_va_mavsumiy_o_zgarishlar_38d3651c.pdf",
    pdfTitle: "18-ma’ruza PDF: O‘simliklar ontogenezi va mavsumiy o‘zgarishlar",
  },
  {
    id: "bot-19",
    order: 19,
    code: "19",
    topicLabel: "19-mavzu",
    semester: "II semestr",
    title:
      "O‘simliklar sistematikasining maqsad va vazifalari, tarixi. Tuban va yuksak o‘simliklar.",
    syllabusPoints: [
      "O‘simliklar sistematikasining maqsad va vazifalari, tarixi. Organik olam klassifikatsiyasi, uning amaliy va nazariy ahamiyati.",
      "Tuban (Thallobionta) va yuksak o‘simliklar (Cormobionta) haqida umumiy tushuncha. Taksonomik birliklar va ularga ta’rif.",
      "Sistematikaning rivojlanishida evolyutsion nazariyalarning ahamiyati. Viruslar, bakteriyalar va ularning hujayra tuzilishi, ko‘payishi klassifikatsiyasi, tabiatda tarqalishi.",
    ],
    studyNotes:
      "O‘simliklar sistematikasi turlarni tasniflash, nomlash (binar nomenklatura) va filogenetik qarindoshlikni aniqlash bilan shug‘ullanadi. Tuban o‘simliklar tanasi tallom (qatana) dan iborat bo‘lib, haqiqiy to‘qima va organlarga ajralmagan; yuksak o‘simliklar esa poya, barg va ildizga ega.",
    overview:
      "II semestrda Botanika fanining ikkinchi yirik bo‘limi — O‘simliklar sistematikasi o‘rganiladi. Yer yuzida 350 mingdan ortiq o‘simlik turi mavjud bo‘lib, sistematika ularni tartibga solish, ilmiy nomlash hamda eng sodda prokariot va tuban formalardan murakkab gulli o‘simliklargacha bo‘lgan evolyutsion yo‘lni ochib beradi.",
    sections: [
      {
        heading: "1. Sistematikaning maqsadi, tarixi va binar nomenklatura",
        content:
          "Sistematika (yunoncha 'systematikos' — tartibli) turlarni tasvirlaydi (taksonomiya), ilmiy nomlaydi (nomenklatura) va kelib chiqishiga ko‘ra tizimga soladi (filogeniya). Qadimda Teofrast dastlabki tasnifni yaratgan. XVIII asrda shved olimi Karl Linney 'Species plantarum' (1753) asarida sun’iy tizim hamda hozirgacha qo‘llaniladigan binar (ikki nomli) nomenklaturani joriy etdi: har bir tur lotin tilida ikki so‘z bilan ataladi — birinchisi turkum nomi (bosh harf), ikkinchisi tur epiteti (masalan, Malus domestica — xonaki olma). Ch. Darvinning evolyutsion nazariyasidan keyin esa qarindoshlikka asoslangan filogenetik tizimlar yaratildi.",
      },
      {
        heading: "2. Taksonomik birliklar iyerarxiyasi",
        content:
          "Organik olamni tasniflashda kichik birlikdan yirik birlikka qarab qat’iy taksonomik pog‘onalar qo‘llaniladi. Eng asosiy elementar birlik — Tur (Species) bo‘lib, u bir xil morfologik, fiziologik belgilarga ega, erkin chatishib serpusht nasl beradigan individlar majmuasidir. O‘simliklar sistematikasida iyerarxiya quyidagicha tuziladi: Tur (Species) → Turkum (Genus) → Oila (Familia, -aceae) → Tartib (Ordo, -ales) → Sinf (Classis, -opsida) → Bo‘lim (Divisio, -phyta) → Dunyo (Regnum).",
      },
      {
        heading: "3. Tuban (Thallobionta) va Yuksak (Cormobionta) o‘simliklar",
        content:
          "Tuzilish darajasiga ko‘ra o‘simliklar dunyosi ikki katta guruhga ajratiladi. Tuban o‘simliklar (suvo‘tlar, zamburug‘lar, lishayniklar an’anaviy tarzda) tanasi tallom (qatana) deb atalib, haqiqiy to‘qimalarga va organlarga (ildiz, poya, barg) bo‘linmagan, ko‘payish organlari bir hujayrali. Yuksak o‘simliklar (yo‘sinlar, plaunlar, qirqbo‘g‘imlar, qirqquloqlar, ochiq va yopiq urug‘lilar) esa haqiqiy to‘qimalarga, vegetativ organlarga hamda ko‘p hujayrali arxegoniy va anteridiylarga ega; zigotadan ko‘p hujayrali murtak rivojlanadi.",
      },
      {
        heading: "4. Viruslar va bakteriyalar — hujayrasiz va prokariot olam",
        content:
          "Klassik botanika kursida mikroorganizmlar ham qisqacha ko‘rib chiqiladi. Viruslar — hujayrasiz hayot shakli bo‘lib, faqat tirik hujayra ichida (obligat parazit) DNK yoki RNK va oqsil qobig‘i (kapsid) orqali ko‘payadi (masalan, tamaki mozaikasi virusi — TMV). Bakteriyalar — prokariot (shakllangan yadrosiz, nukleoidli) bir hujayrali mikroorganizmlar bo‘lib, shakliga ko‘ra kokk, batsilla, vibrion, spirilla bo‘ladi; tabiatda azot fiksatsiyasi (tugunak bakteriyalari), organik qoldiqlarni chirishda va moddalar aylanishida beqiyos rol o‘ynaydi.",
      },
    ],
    comparisonTable: {
      title: "Tuban va yuksak o‘simliklarning asosiy farqlari",
      columns: ["Belgi", "Tuban o‘simliklar (Thallobionta)", "Yuksak o‘simliklar (Cormobionta)"],
      rows: [
        [
          "Tana tuzilishi",
          "Tallom (qatana), organlarga bo‘linmagan",
          "Ildiz, poya va bargga (kormus) bo‘lingan",
        ],
        [
          "To‘qimalar",
          "Haqiqiy to‘qimalar shakllanmagan",
          "Qoplovchi, o‘tkazuvchi, mexanik, asosiy to‘qimalar bor",
        ],
        [
          "Jinsiy organlar",
          "Bir hujayrali gametangiy",
          "Ko‘p hujayrali anteridiy va arxegoniy (yoki chang/murtak xaltasi)",
        ],
        [
          "Murtak (embrion)",
          "Zigotadan haqiqiy murtak hosil bo‘lmaydi",
          "Ko‘p hujayrali murtak shakllanadi",
        ],
        [
          "Yashash muhiti",
          "Asosan suv yoki sernam joylar",
          "Quruqlikda hukmron, ayrimlari ikkilamchi suvda",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Binar nomenklatura",
        definition:
          "Karl Linney tomonidan kiritilgan har bir turni ikki lotincha nom (turkum + tur) bilan atash qoidasi.",
      },
      {
        term: "Takson",
        definition:
          "Sistematikada qarindoshlik darajasiga ko‘ra ajratilgan guruh (tur, oila, bo‘lim va b.).",
      },
      {
        term: "Tallom (qatana)",
        definition:
          "Tuban o‘simliklarning haqiqiy to‘qima va vegetativ organlarga ajralmagan tanasi.",
      },
      {
        term: "Prokariot",
        definition:
          "Hujayrasida membrana bilan o‘ralgan haqiqiy yadro va membranalari organoidlar bo‘lmagan organizm (bakteriyalar).",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "O‘simliklar sistematikasida oila va bo‘lim nomlari qaysi lotincha qo‘shimchalar bilan tugaydi?",
        answer:
          "Oila nomi `-aceae` (masalan, Rosaceae), tartib `-ales`, bo‘lim esa `-phyta` (masalan, Magnoliophyta) qo‘shimchasi bilan tugaydi.",
      },
      {
        question:
          "Nima uchun tuban o‘simliklarni 'sporofitsiz' yoki 'murtaksiz' organizmlar guruhiga kiritishadi?",
        answer:
          "Chunki ularda jinsiy organlar bir hujayrali bo‘lib, urug‘langan tuxum hujayradan ko‘p hujayrali murtak rivojlanmaydi.",
      },
      {
        question: "Viruslarning bakteriyalardan tub farqi nimada?",
        answer:
          "Bakteriyalar hujayra tuzilishiga ega mustaqil tirik organizm, viruslar esa hujayrasiz tuzilma bo‘lib, faqat tirik hujayra ichidagina ko‘paya oladi.",
      },
    ],
    keyTerms: ["Sistematika", "Takson", "Binar nomenklatura", "Thallobionta", "Cormobionta"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-20",
    order: 20,
    code: "20",
    topicLabel: "20-mavzu",
    semester: "II semestr",
    title: "Suvo‘tlarining tuzilishi, ko‘payishi, tarqalishi va klassifikatsiyasi.",
    syllabusPoints: [
      "Suvo‘tlarining tuzilishi, ko‘payishi, tarqalishi va klassifikatsiyasi.",
      "Ko‘k yashil suvo‘tlari bo‘limiga umumiy xarakteristika va asosiy vakillari, tarqalishi, ahamiyati.",
      "Yashil suv o‘tlar bo‘limi (Chlorophyta). Umumiy xarakteristika, tana tuzilishining asosiy xususiyatlari. Ko‘payish usullari, klassifikatsiyasi.",
      "Xara (nurli) suvo‘tlar bo‘limi. Tuzilishi, ko‘payishi va rivojlanish sikli, tarqalishi.",
    ],
    studyNotes:
      "Suvo‘tlar xlorofill saqlovchi, asosan suv muhitida yashovchi avtotrof tallomli organizmlardir. Ko‘k-yashil suvo‘tlar (sianobakteriyalar) prokariot hujayraga ega; Yashil suvo‘tlar xlorofill a va b saqlaydi; Xara suvo‘tlari murakkab tashqi tuzilishi bilan yuksak o‘simliklarga o‘xshaydi.",
    overview:
      "Suvo‘tlar — Yer yuzidagi eng qadimgi fotosintezlovchi organizmlar bo‘lib, atmosferadagi erkin kislorodning asosiy qismini ishlab chiqaradi va suv ekotizimlari oziq zanjirining boshlang‘ich bo‘g‘ini hisoblanadi. Ular bir hujayrali mikroskopik formalardan tortib, o‘nlab metrlik yirik dengiz o‘tlarigacha xilma-xildir.",
    sections: [
      {
        heading: "1. Suvo‘tlarining umumiy xususiyatlari va tallom tiplari",
        content:
          "Suvo‘tlarda haqiqiy ildiz, poya va barg bo‘lmaydi, barcha moddalarni butun tana (tallom) sathi orqali so‘radi. Xloroplastlari xromatofor deb ataladi (kosasimon, lentasimon, yulduzsimon). Tallom tuzilish darajasiga ko‘ra: monad (xivchinli harakatchan — Xlamidomonada), kokkoid (xivchinsiz bir hujayrali — Xlorella), kolonial (Volvoks), ipsimon (Ulotriks, Spirogira), plastinkasimon (Ulva) va sifonli turlarga bo‘linadi.",
      },
      {
        heading: "2. Ko‘k-yashil suvo‘tlar (Cyanophyta / Sianobakteriyalar)",
        content:
          "Bu bo‘lim prokariot tuzilishli bo‘lib, hujayrasida shakllangan yadro va xloroplast yo‘q, pigmentlari (xlorofill a, fikosian — ko‘k, fikoeritrin — qizil) hujayra chetki — xromatoplazma qismida tilakoidlarda joylashadi. Zaxira moddasi — glikogen (sianofit kraxmal). Ular jinsiy ko‘paymaydi, faqat hujayraning bo‘linishi yoki iplarning (garmogoniyalar) uzilishi bilan ko‘payadi. Geterotsist deb ataluvchi maxsus hujayralari yordamida atmosfera azotini o‘zlashtiradi (Nostoc, Anabaena — sholipoyalarda tabiiy o‘g‘it; Oscillatoria; Spirulina — oqsilga boy ozuqa).",
      },
      {
        heading: "3. Yashil suvo‘tlar bo‘limi (Chlorophyta)",
        content:
          "Yashil suvo‘tlar eukariot organizmlar bo‘lib, tarkibida yuksak o‘simliklardagidek xlorofill `a` va `b` hamda karotinoidlar saqlaydi; zaxira moddasi kraxmaldir (pirenoid atrofida to‘planadi). Evolyutsiya nuqtayi nazaridan yuksak o‘simliklar qadimgi yashil suvo‘tlardan kelib chiqqan. Vakillari: Xlamidomonada (2 xivchinli, qizil ko‘zchali bir hujayrali), Xlorella (xivchinsiz, tez ko‘payuvchi — kosmik tadqiqotlar va chorvachilikda ishlatiladi), Volvoks (sharsimon koloniya), Ulotriks (shoxlanmagan ipcha, zoospora va izogamiya), Spirogira (konyugatsiya usulida ko‘payuvchi spiral xromatoforli ipcha).",
      },
      {
        heading: "4. Xara (nurli) suvo‘tlar bo‘limi (Charophyta)",
        content:
          "Xara suvo‘tlari (Chara, Nitella) chuchuk ko‘l va hovuzlar tubida o‘sib, tashqi ko‘rinishi qirqbo‘g‘imga o‘xshaydi: bo‘g‘im va bo‘g‘im oraliqlaridan iborat o‘qi va halqasimon yon shoxlari bor, tubiga rizoidlar bilan birikadi. Ular boshqa suvo‘tlardan ko‘p hujayrali jinsiy organlarga (oogoniysimon nukula va anteridiysimon globula) egaligi bilan ajralib turadi va yuksak o‘simliklarga eng yaqin turadi.",
      },
    ],
    comparisonTable: {
      title: "Ko‘k-yashil, Yashil va Xara suvo‘tlarining qiyosiy jadvali",
      columns: [
        "Belgi",
        "Ko‘k-yashil (Cyanobacteria)",
        "Yashil (Chlorophyta)",
        "Xara (Charophyta)",
      ],
      rows: [
        ["Hujayra tipi", "Prokariot (yadrosiz)", "Eukariot (yadro va xromatofor bor)", "Eukariot"],
        [
          "Asosiy pigmentlar",
          "Xlorofill a, fikosian",
          "Xlorofill a va b (sof yashil)",
          "Xlorofill a va b",
        ],
        ["Zaxira modda", "Sianofit kraxmali (glikogen)", "Haqiqiy kraxmal", "Kraxmal"],
        [
          "Jinsiy ko‘payish",
          "Kuzatilmaydi",
          "Izogamiya, oogamiya, konyugatsiya",
          "Faqat oogamiya (ko‘p hujayrali organlar)",
        ],
        [
          "Vakillari",
          "Nostoc, Spirulina, Anabaena",
          "Xlorella, Ulotriks, Spirogira",
          "Chara, Nitella",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Xromatofor",
        definition:
          "Suvo‘t hujayralaridagi turli shaklli (spiral, kosa, yulduzsimon) fotosintezlovchi plastida.",
      },
      {
        term: "Konyugatsiya",
        definition:
          "Spirogira kabi suvo‘tlarda ikki vegetativ hujayra protoplastining ko‘prikcha orqali qo‘shilib zigota hosil qilishi.",
      },
      {
        term: "Geterotsista",
        definition:
          "Ko‘k-yashil suvo‘tlarda atmosfera azotini fiksatsiya qiluvchi maxsus qalin qobiqli hujayra.",
      },
      {
        term: "Pirenoid",
        definition:
          "Yashil suvo‘t xromatoforida kraxmal sintezlanadigan va to‘planadigan oqsilli tuzilma.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Yashil suvo‘tlardan qaysi biri yuksak o‘simliklarning kelib chiqishiga asos bo‘lgan deb hisoblanadi?",
        answer:
          "Qadimgi yashil va xara suvo‘tlari, chunki ularda ham xlorofill a va b, kraxmal zaxirasi va sellyuloza hujayra devori mavjud.",
      },
      {
        question:
          "Nima uchun ko‘k-yashil suvo‘tlarni zamonaviy biologiyada sianobakteriyalar deb atashadi?",
        answer:
          "Chunki ularning hujayrasi prokariot tuzilishga ega — shakllangan yadrosi va xromatofori yo‘q, bo‘linishi ham bakteriyalarnikiga o‘xshaydi.",
      },
      {
        question: "Sholipoyalarda Anabaena va Nostoc suvo‘tlarining ahamiyati nimada?",
        answer:
          "Ular havodagi erkin azotni o‘zlashtirib, tuproqni azotli moddalar bilan boyitadi va sholi hosildorligini oshiradi.",
      },
    ],
    keyTerms: ["Tallom", "Xromatofor", "Chlorophyta", "Sianobakteriya", "Xara suvo‘tlari"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-21",
    order: 21,
    code: "21",
    topicLabel: "21-mavzu",
    semester: "II semestr",
    title:
      "Sariq yashil (Xanthophyta), Diatom (Diatomophyta), Qo‘ng‘ir (Phaeophyta) va Qizil (Rhodophyta) suv o‘tlari bo‘limlarining umumiy tavsifi.",
    syllabusPoints: [
      "Sariq yashil suvo‘tlar bo‘limi (Xanthophyta) va Diatom (Diatomophyta) suv o‘tlar bo‘limi umumiy ta’rifi, ekologiyasi, klassifikatsiyasi.",
      "Qo‘ng‘ir suv o‘tlari bo‘limi (Phaeophyta). Tarqalishi, ichki va tashqi tuzilishi, ko‘payish usullari va asosiy vakillari.",
      "Qizil suv o‘tlar bo‘limi (Rhodophyta). Rivojlanishining o‘ziga xos tomonlari. Suv o‘tlarining tabiatda va inson hayotidagi ahamiyati.",
    ],
    studyNotes:
      "Diatom suvo‘tlar kremniyli (SiO2) ikki pallali qobiqqa ega fitoplanktonlardir. Qo‘ng‘ir suvo‘tlar (Laminariya, Fukus) fukoksantin pigmentiga ega bo‘lib alginatlar manbai; Qizil suvo‘tlar (Porfira, Gellidium) fikoeritrin tufayli chuqur suvlarda yashaydi va agar-agar beradi.",
    overview:
      "Chuchuk suvlar, dengiz va okeanlarda yashil suvo‘tlardan tashqari o‘ziga xos pigmentlari, mineral qobiqlari va murakkab tana tuzilishiga ega bo‘lgan boshqa yirik suvo‘t bo‘limlari keng tarqalgan. Ular okean biologik mahsuldorligini belgilaydi hamda oziq-ovqat, tibbiyot va sanoat uchun qimmatli xomashyo beradi.",
    sections: [
      {
        heading: "1. Sariq-yashil (Xanthophyta) va Diatom suvo‘tlar (Diatomophyta)",
        content:
          "Sariq-yashil suvo‘tlar (masalan, Vaucheriya, Tribonema) xlorofill bilan birga ko‘p miqdorda ksantofill pigmenti tutadi va zaxirasi yog‘ hamda xrizolaminarin bo‘ladi. Diatom suvo‘tlar (Navicula, Pinnularia, Melozira) bir hujayrali yoki kolonial organizmlar bo‘lib, tanasi kremniy oksidi (SiO2) singdirilgan qattiq shishasimon ikki pallali sovut — epiteka (qopqoq) va gipoteka (quti) dan iborat. Okean fitoplanktonining 50% gacha qismini tashkil etadi; halok bo‘lgan diatomlarning kremniyli qobiqlari million yillar davomida diatomit va trepel cho‘kindi tog‘ jinslarini hosil qilgan (filtrlash va dinamit ishlab chiqarishda qo‘llanadi).",
      },
      {
        heading: "2. Qo‘ng‘ir suvo‘tlar bo‘limi (Phaeophyta)",
        content:
          "Asosan sovuq va mo‘tadil dengizlarda yashovchi faqat ko‘p hujayrali yirik suvo‘tlardir (uzunligi 30–60 metrgacha — Makrotsistis). Xlorofill bilan birga fukoksantin pigmenti ko‘pligi tufayli rangi sarg‘ish-qo‘ng‘ir. Zaxira moddasi — laminarin polisaxaridi va mannit spirti. Tanasi dengiz tubiga rizoidlar bilan yopishadi, poyasimon va bargsimon bo‘laklarga (Laminariya — dengiz karami, Fukus, Sargass) hamda havo pufakchalariga ega; ayrimlarida elaksimon naychalarga o‘xshash o‘tkazuvchi hujayralar shakllangan. Laminariya yod, mikroelementlar va to‘qimachilik/tibbiyotda ishlatiladigan algin kislotasi tuzlari (alginatlar) olishda katta ahamiyatga ega.",
      },
      {
        heading: "3. Qizil suvo‘tlar — Bagryankalar bo‘limi (Rhodophyta)",
        content:
          "Dengiz va okeanlarning 100–200 metrgacha chuqurliklarida yashay oladigan ko‘p hujayrali suvo‘tlar (Porfira, Gellidium, Fillofora). Ularda qizil — fikoeritrin va ko‘k — fikosian pigmentlari mavjud bo‘lib, chuqurlikka kirib boradigan qisqa to‘lqinli ko‘k-yashil nurlarni yutib fotosintez qiladi. Zaxira moddasi — bagryanka kraxmali. Qizil suvo‘tlarning hayot sikli davomida hech bir bosqichda xivchinli harakatchan hujayralar (zoospora yoki spermatozoid) bo‘lmaydi! Ulardan mikrobiologiya va qandolatchilikda ajralmas modda — agar-agar olinadi; Porfira esa Osiyo mamlakatlarida (nori) oziq-ovqat sifatida yetishtiriladi.",
      },
    ],
    comparisonTable: {
      title: "Suvo‘t bo‘limlarining qiyosiy tavsifi",
      columns: [
        "Bo‘lim",
        "Asosiy pigment",
        "Hujayra devori / xususiyat",
        "Amaliy ahamiyati va vakillari",
      ],
      rows: [
        [
          "Diatomophyta",
          "Xlorofill a, c + diatomin",
          "Kremniyli (SiO2) 2 pallali sovut",
          "Diatomit jinsi; Navicula, Pinnularia",
        ],
        [
          "Phaeophyta",
          "Xlorofill a, c + fukoksantin",
          "Selluloza + alginatlar",
          "Yod, alginat, dengiz karami (Laminariya, Fukus)",
        ],
        [
          "Rhodophyta",
          "Xlorofill a, d + fikoeritrin",
          "Pektin + agar-agar; xivchini yo‘q",
          "Agar-agar, oziq-ovqat (Porfira, Gellidium)",
        ],
        [
          "Xanthophyta",
          "Xlorofill + ksantofill",
          "Ikki qismli pektinli qobiq",
          "Vaucheriya, Tribonema",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Epiteka va gipoteka",
        definition:
          "Diatom suvo‘tlarning quticha va qopqoqqa o‘xshash bir-biriga kirib turuvchi ikki pallali kremniyli sovuti.",
      },
      {
        term: "Fukoksantin",
        definition: "Qo‘ng‘ir suvo‘tlarga o‘ziga xos qo‘ng‘ir tus beruvchi karotinoid pigment.",
      },
      {
        term: "Fikoeritrin",
        definition:
          "Qizil suvo‘tlarga chuqur dengiz tubida ko‘k nurlarni yutib fotosintez qilish imkonini beruvchi qizil pigment.",
      },
      {
        term: "Agar-agar",
        definition:
          "Qizil suvo‘tlardan olinadigan, mikrobiologiyada oziqa muhitlar va oziq-ovqatda jele tayyorlashda ishlatiladigan polisaxarid.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Qizil suvo‘tlar boshqa barcha suvo‘tlardan qaysi muhim hujayraviy belgisi bilan farq qiladi?",
        answer:
          "Qizil suvo‘tlarning hayot siklida hech qachon xivchinli harakatchan hujayralar (na zoosporalar, na spermatozoidlar) bo‘lmaydi; ular fikoeritrin pigmenti tufayli eng chuqur suvlarda o‘sadi.",
      },
      {
        question: "Diatom suvo‘tlar o‘lganidan keyin hosil bo‘ladigan tog‘ jinsi nima deb ataladi?",
        answer:
          "Diatomit (yoki tog‘ uni) deb ataladi; u g‘ovak va kimyoviy chidamli bo‘lgani uchun filtrlar va issiqlik izolyatsiyasida qo‘llanadi.",
      },
      {
        question:
          "Dengiz karami nomi bilan tanilgan suvo‘t qaysi bo‘limga kiradi va qanday moddaga boy?",
        answer:
          "Laminariya — qo‘ng‘ir suvo‘tlar (Phaeophyta) bo‘limiga kiradi, yod elementi, laminarin va alginatlarga nihoyatda boy.",
      },
    ],
    keyTerms: ["Diatomophyta", "Phaeophyta", "Rhodophyta", "Laminariya", "Agar-agar"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-22",
    order: 22,
    code: "22",
    topicLabel: "22-mavzu",
    semester: "II semestr",
    title: "Zamburug‘lar bo‘limi (Mycophyta, Fungi).",
    syllabusPoints: [
      "Zamburug‘lar bo‘limi (Mycophyta, Fungi) ning umumiy xarakteristikasi. Vegetativ tanasi (gifa va mitseliylar)ning tuzilishi, oziqlanish usullari.",
      "Zamburug‘lar bo‘limining klassifikatsiyasi: Zigomitsetsimonlar (Zygomycetes), Askomitsetsimonlar (Ascomycetes) va Bazidomitsetsimonlar (Basidiomycetes) sinflari.",
      "Asosiy vakillarining o‘ziga xos xususiyatlari, morfologik va biologik xususiyatlari.",
    ],
    studyNotes:
      "Zamburug‘lar — xlorofillsiz, geterotrof eukariot organizmlar bo‘lib, hujayra devori xitindan iborat va zaxira moddasi glikogendir. Tanasi gifalardan tuzilgan mitseliydan iborat. Asosiy sinflari: Zigomitsetlar (mukor), Askomitsetlar (achitqi, penitsill) va Bazidomitsetlar (qo‘ziqorinlar, zang va qorakuya zamburug‘lari).",
    overview:
      "Zamburug‘lar — bir vaqtning o‘zida ham o‘simliklarga (harakatsiz o‘sishi, sporalar bilan ko‘payishi, qattiq hujayra devori), ham hayvonlarga (xlorofillsiz geterotrof oziqlanishi, devorda xitin va zaxirada glikogen to‘plashi) xos belgilarni mujassam etgan alohida mustaqil tirik organizmlar dunyosidir (Fungi).",
    sections: [
      {
        heading: "1. Zamburug‘larning tuzilishi va oziqlanish usullari",
        content:
          "Zamburug‘larning vegetativ tanasi mitseliy (zamburug‘ ipi) deb atalib, u ingichka shoxlangan iplar — gifalardan tuzilgan. Tuban zamburug‘larda gifalar hujayralarga bo‘linmagan ko‘p yadroli yaxlit naycha (senotsitik mitseliy), yuksak zamburug‘larda esa ko‘ndalang to‘siqlar (septalar) bilan bo‘lingan. Oziqlanishi geterotrof (so‘rish — osmotrof yo‘li bilan): Saprotroflar (chirindilar bilan oziqlanib tabiatda moddalarni minerallashtiradi), Parazitlar (tirik o‘simlik va hayvonlar hisobiga yashaydi) va Simbiotroflar (daraxt ildizlari bilan mikoriza hosil qiladi — o‘simlikka suv va fosfor berib, o‘zi uglevod oladi).",
      },
      {
        heading: "2. Zigomitsetsimonlar sinfi (Zygomycetes)",
        content:
          "Bu sinf vakillarida (masalan, non yoki sabzavotlarda o‘sadigan oq mog‘or — Mukor) mitseliy to‘siqsiz (bir hujayrali ko‘p yadroli) bo‘ladi. Jinssiz ko‘payishida tik o‘sgan sporangiybandlar uchida sharsimon qora sporangiylar yetiladi. Jinsiy ko‘payishi — zigogamiya: ikkita har xil jinsli (`+` va `-`) gifa uchlari qo‘shilib, qalin qora po‘stli zigospora hosil qiladi va qulay sharoitda undan yangi sporangiy o‘sib chiqadi.",
      },
      {
        heading: "3. Askomitsetsimonlar — Xaltali zamburug‘lar sinfi (Ascomycetes)",
        content:
          "Hujayralarga bo‘lingan (septali) mitseliyga ega yuksak zamburug‘larning eng yirik sinfi. Asosiy belgisi — jinsiy jarayon natijasida ichida odatda 8 ta askospora yetiladigan maxsus xaltachalar (askalar) hosil bo‘lishidir. Ko‘pchiligida jinssiz ko‘payish konidiya (zanjirsimon sporalar) orqali boradi. Asosiy vakillari: Achitqi zamburug‘lar (Saccharomyces — bir hujayrali, kurtaklanib ko‘payadi, nonvoychilik va bijg‘ishda asosiy rol o‘ynaydi); Penitsill va Aspergill (tibbiyotda penitsillin antibiotigi manbai); Qo‘zizamburug‘ (Smorchok), Tryufel va o‘simlik kasalligi qo‘zg‘atuvchi unshudring.",
      },
      {
        heading: "4. Bazidomitsetsimonlar sinfi (Basidiomycetes)",
        content:
          "Eng murakkab yuksak zamburug‘lar sinfi bo‘lib, dikariotik (2 yadroli hujayralardan iborat) mitseliyga ega. Jinsiy sporalari — 4 ta bazidiospora to‘g‘nog‘ichsimon bazidiya ustida tashqi tomonda (ekzogen) yetiladi. Bunga qalpoqchali yeyiladigan qo‘ziqorinlar (oq qo‘ziqorin, shampinon, veshanka) va zaharli qo‘ziqorinlar (muxomor, oq poganka), daraxt po‘kak zamburug‘lari hamda g‘alla ekinlariga katta zarar keltiruvchi parazit zang va qorakuya zamburug‘lari kiradi.",
      },
    ],
    comparisonTable: {
      title: "Zamburug‘larning asosiy sinflari qiyosiy jadvali",
      columns: ["Sinf", "Mitseliy tuzilishi", "Jinsiy ko‘payish organi", "Asosiy vakillari"],
      rows: [
        [
          "Zygomycetes",
          "To‘siqsiz (ko‘p yadroli bir hujayrali)",
          "Zigospora (zigogamiya)",
          "Mukor (oq mog‘or)",
        ],
        [
          "Ascomycetes",
          "To‘siqli (septali) ko‘p hujayrali",
          "Aska (xalta) — ichida 8 ta askospora",
          "Achitqi, Penitsill, Smorchok, Unshudring",
        ],
        [
          "Basidiomycetes",
          "To‘siqli, dikariotik mitseliy",
          "Bazidiya — ustida 4 ta bazidiospora",
          "Shampinon, oq qo‘ziqorin, qorakuya, zang",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Gifa va Mitseliy",
        definition:
          "Zamburug‘ tanasini tashkil etuvchi mikroskopik iplar (gifa) va ularning chirmashgan to‘ri (mitseliy).",
      },
      {
        term: "Mikoriza",
        definition:
          "Zamburug‘ mitseliysi bilan yuksak o‘simlik ildizlarining o‘zaro foydali simbioz holati.",
      },
      {
        term: "Aska va Bazidiya",
        definition:
          "Askomitsetlarda sporalarni ichida (endogen), bazidomitsetlarda esa tashqarida (ekzogen) hosil qiluvchi tuzilmalar.",
      },
      {
        term: "Konidiya",
        definition:
          "Askomitsetlar va deyteromitsetlarda ekzogen holda hosil bo‘luvchi jinssiz sporalar.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Zamburug‘lar nima sababdan o‘simliklardan ajratilib alohida dunyoga kiritilgan?",
        answer:
          "Chunki ularda xloroplast yo‘q (geterotrof), hujayra devori sellyulozadan emas xitindan iborat va zaxira oziq moddasi kraxmal emas glikogendir.",
      },
      {
        question:
          "Askomitsetlar va bazidomitsetlarning jinsiy spora hosil qilish usulida qanday farq bor?",
        answer:
          "Askomitsetlarda 8 ta askospora xalta (aska) ichida shakllanadi; bazidomitsetlarda esa 4 ta bazidiospora bazidiya hujayrasining tashqi o‘simtalarida shakllanadi.",
      },
      {
        question: "Penitsill zamburug‘ining tibbiyotdagi tarixiy ahamiyati nimada?",
        answer:
          "A. Fleming Penicillium zamburug‘idan bakteriyalarga qarshi birinchi antibiotik — penitsillinni kashf etgan.",
      },
    ],
    keyTerms: ["Gifa", "Mitseliy", "Xitin", "Askomitsetlar", "Bazidomitsetlar", "Mikoriza"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-23",
    order: 23,
    code: "23",
    topicLabel: "23-mavzu",
    semester: "II semestr",
    title: "Lishayniklar bo‘limi (Lichenes).",
    syllabusPoints: [
      "Lishayniklarda zamburug‘ va suvo‘tlarning o‘zaro munosabatlari. Lishayniklarning tarkibiy qismlari.",
      "Lishayniklarning morfologiyasi (yopishqoq, bargsimon, butasimon) va anatomik tuzilishi.",
      "Lishayniklarning ko‘payishi, ekologik guruhlari, xilma-xilligi, ahamiyati va sistematikasi.",
    ],
    studyNotes:
      "Lishayniklar — zamburug‘ (mikobiont) va bir hujayrali yashil yoki ko‘k-yashil suvo‘t (fikobiont) ning simbiozidan tashkil topgan murakkab organizmlardir. Morfologik jihatdan yopishqoq, bargsimon va butasimon bo‘ladi; havo tozaligining eng nozik bioindikatori hisoblanadi.",
    overview:
      "Lishayniklar tabiatdagi eng g‘aroyib simbiotik (o‘zaro hamkorlikka asoslangan) organizmlar guruhi bo‘lib, qoyalar yuzasidan tortib tundragacha bo‘lgan eng og‘ir sharoitlarda ham yashay oladi. Ular bir butun organizm sifatida harakat qilsa-da, tarkiban ikki xil dunyo vakillaridan iborat.",
    sections: [
      {
        heading: "1. Lishayniklarning tarkibiy qismlari va simbiotik tabiati",
        content:
          "Lishaynik tanasi zamburug‘ gifalari — mikobiont (90% dan ortiq hollarda askomitsetlar) hamda bir hujayrali yashil suvo‘t (Trebuxiya) yoki ko‘k-yashil suvo‘t (Nostoc) hujayralari — fikobiont (fotobiont) dan tashkil topadi. Zamburug‘ suv va mineral tuzlarni so‘rib, suvo‘tni qurish va quyosh radiatsiyasidan himoya qiladi; suvo‘t esa fotosintez orqali organik uglevodlar (glukoza) sintezlab zamburug‘ni oziqlantiradi.",
      },
      {
        heading: "2. Morfologik tiplari va anatomik tuzilishi",
        content: "Tashqi shakliga ko‘ra lishayniklar 3 ta asosiy morfologik guruhga bo‘linadi:",
        highlights: [
          "Yopishqoq (qobiqsimon) lishayniklar: tosh va daraxt po‘stlog‘iga mahkam yopishgan yupqa qobiq ko‘rinishida (Lekanora, Rizokarpon)",
          "Bargsimon lishayniklar: chetlari ko‘tarilgan yassi plastinkalar shaklida, rizoidlar bilan birikadi (Ksantoriya — devor lishaynigi, Parmeliya)",
          "Butasimon lishayniklar: tarmoqlangan shoxchalar yoki osilib turuvchi ipchalar shaklida (Kladoniya — bug‘u lishaynigi / yagel, Usneya)",
        ],
      },
      {
        heading: "3. Anatomiyasi, ko‘payishi va lixenoindikatsiya",
        content:
          "Anatomik kesmasida gomeomer (suvo‘t va gifalar bir tekis aralashgan — Kallema) va geteromer (qatlamli: yuqori po‘stloq → suvo‘t qavati → g‘ovak o‘zak → pastki po‘stloq — aksariyat bargsimon va butasimonlar) tallom ajratiladi. Ko‘payishi asosan tallom bo‘laklari hamda maxsus vegetativ tuzilmalar — sorediylar (zamburug‘ gifasi bilan o‘ralgan suvo‘t hujayralari sharchasi) va izidiylar (tallom ustidagi o‘simtalar) orqali boradi. Lishayniklar havodagi oltingugurt gazi (SO2) va og‘ir metallarga o‘ta sezgir bo‘lib, havosi ifloslangan shahar markazlarida nobud bo‘ladi — shu bois ular lixenoindikatsiyada (ekologik monitoringda) keng qo‘llaniladi.",
      },
    ],
    comparisonTable: {
      title: "Lishayniklarning morfologik guruhlari va ahamiyati",
      columns: ["Morfologik tip", "Tuzilish darajasi", "Yashash joyi", "Vakillari"],
      rows: [
        [
          "Yopishqoq (qobiqsimon)",
          "Eng sodda, substratdan ajralmaydi",
          "Tog‘ qoyalari, daraxt po‘stlog‘i",
          "Lekanora, Grafis",
        ],
        [
          "Bargsimon",
          "O‘rtacha, plastinkalar rizoid bilan birikadi",
          "Daraxt po‘stlog‘i, toshlar",
          "Ksantoriya, Parmeliya",
        ],
        [
          "Butasimon",
          "Eng murakkab, tik yoki osiluvchan buta",
          "Tundra tuprog‘i, qarag‘ay shoxlari",
          "Kladoniya (yagel), Usneya, Setrariya",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Mikobiont va Fikobiont",
        definition:
          "Lishaynik tanasini tashkil etuvchi zamburug‘ komponenti (mikobiont) va fotosintezlovchi suvo‘t komponenti (fikobiont).",
      },
      {
        term: "Sorediy va Izidiy",
        definition:
          "Lishaynikning zamburug‘ va suvo‘tni birgalikda tarqatuvchi maxsus vegetativ ko‘payish tuzilmalari.",
      },
      {
        term: "Lixenoindikatsiya",
        definition:
          "Lishaynik turlarining tarqalishi va holatiga qarab atmosfera havosining tozalik darajasini aniqlash usuli.",
      },
      {
        term: "Geteromer tallom",
        definition:
          "Suvo‘t hujayralari alohida qavat bo‘lib joylashgan ko‘p qatlamli lishaynik ichki tuzilishi.",
      },
    ],
    selfCheckQuestions: [
      {
        question: "Lishayniklarda zamburug‘ va suvo‘t o‘rtasidagi munosabat qanday taqsimlangan?",
        answer:
          "Zamburug‘ suv, mineral tuzlar bilan ta’minlaydi va himoya qiladi; suvo‘t esa fotosintez qilib organik modda (uglevodlar) yetkazib beradi.",
      },
      {
        question:
          "Nima uchun sanoatlashgan shaharlar markazida daraxt tanalarida lishayniklar uchramaydi?",
        answer:
          "Chunki lishayniklar havodagi zaharli gazlar (ayniqsa SO2)ni to‘g‘ridan-to‘g‘ri tanasi orqali yutadi va zamburug‘-suvo‘t muvozanati buzilib nobud bo‘ladi (bioindikator xususiyati).",
      },
      {
        question:
          "Lishayniklarning qaysi turi Shimoliy tundra bug‘ulari uchun asosiy qishki ozuqa hisoblanadi?",
        answer: "Butasimon lishaynik — Kladoniya (bug‘u lishaynigi yoki yagel).",
      },
    ],
    keyTerms: ["Simbioz", "Mikobiont", "Fikobiont", "Bargsimon", "Butasimon", "Bioindikator"],
    references: "[1, 2, 3, 4, 5]",
  },
  {
    id: "bot-24",
    order: 24,
    code: "24",
    topicLabel: "24-mavzu",
    semester: "II semestr",
    title:
      "Yuksak o‘simliklarning umumiy ta’rifi. Yo‘sintoifa (Bryophyta) va Plauntoifa (Lycopodiophyta) bo‘limlari.",
    syllabusPoints: [
      "Yuksak o‘simliklar (Cormobionta) ning umumiy ta’rifi, kelib chiqishi va quruqlikka chiqishi.",
      "Yo‘sintoifa (Bryophyta) bo‘limi tuzilishi, hayot siklida gametofitning ustunligi va asosiy vakillari (Funariya, Sfagnum).",
      "Plauntoifa (Lycopodiophyta) bo‘limi vakillarining tuzilishi, sporofit ustunligi va ahamiyati.",
    ],
    studyNotes:
      "Yuksak o‘simliklar haqiqiy to‘qima va vegetativ organlarga, shuningdek ko‘p hujayrali anteridiy va arxegoniyga ega. Yo‘sintoifa o‘simliklarda gametofit ustunlik qiladi va rizoidlar bo‘ladi; Plauntoifa o‘simliklarda esa haqiqiy ildizli sporofit avlod ustunlik qiladi.",
    overview:
      "Taxminan 450 million yil avval (Silur–Devon davrlarida) o‘simliklarning suvdan quruqlikka chiqishi tirik tabiat tarixidagi eng muhim burilish nuqtasi bo‘ldi. Quruqlikdagi qurg‘oqchilik, yorug‘lik va gravitatsiya sharoitiga moslashish natijasida yuksak sporalilar — Riniyatoifalar, Yo‘sintoifalar va Plauntoifalar shakllandi.",
    sections: [
      {
        heading: "1. O‘simliklarning quruqlikka chiqishi va asosiy aromorfozlar",
        content:
          "Quruqlikda yashash uchun o‘simliklarda quyidagi tuzilish yutuqlari paydo bo‘ldi: bug‘lanishdan saqlovchi kutikula va gaz almashinuvi uchun og‘izchalar; suv va organik moddalarni tashuvchi ksilema va floema; tik turish uchun mexanik to‘qima; suv shimuvchi ildiz tizimi hamda jinsiy hujayralarni qurishdan saqlovchi ko‘p hujayrali jinsiy organlar — erkak anteridiy (spermatozoid hosil qiladi) va urg‘ochi kolbasimon arxegoniy (tuxum hujayra tutadi). Eng qadimgi qirilib ketgan quruqlik o‘simliklari Riniyatoifalar (psilofitlar) bo‘lgan.",
      },
      {
        heading: "2. Yo‘sintoifa o‘simliklar bo‘limi (Bryophyta)",
        content:
          "Yo‘sinlar — yuksak o‘simliklar ichida evolyutsion boshi berk yo‘nalish bo‘lib, ularning hayot siklida yashil gametofit (n) ustunlik qiladi, sporofit (2n — quticha va oyoqcha, ya’ni sporogon) esa gametofit ustida parazitdek o‘sib, undan oziqlanadi. Haqiqiy ildizlari yo‘q, ularning vazifasini rizoidlar bajaradi; o‘tkazuvchi to‘qimalari kuchsiz. Urug‘lanish uchun albatta tomchi suv zarur (spermatozoid suzib arxegoniyga boradi). Asosiy sinflari: Jigarsimonlar (Marhansiya — tallomli yo‘sin) va Barg-poyali yo‘sinlar (Kakkuzig‘ir — Polytrichum, Funariya, Oq torf yo‘sini — Sfagnum). Sfagnumda rizoid yo‘q, ammo o‘lik suv saqlovchi gialin hujayralari hisobiga o‘z vaznidan 20–25 barobar ko‘p suv shimadi va botqoqlarda torf konlarini hosil qiladi.",
      },
      {
        heading: "3. Plauntoifa o‘simliklar bo‘limi (Lycopodiophyta)",
        content:
          "Qadimgi sporalilar orasida eng birinchilardan bo‘lib haqiqiy ildiz va poya-barg tizimiga ega bo‘lgan o‘simliklar. Yo‘sinlardan farqli ravishda, barcha boshqa yuksak o‘simliklar kabi ularda sporofit (2n) avlod ustunlik qiladi; gametofiti (o‘simtasi) esa kichik va mustaqil yashaydi (ba’zan zamburug‘ bilan simbiozda 10–15 yilda rivojlanadi). Poyasi dixotomik shoxlanib, mayda tangachasimon barglar bilan qoplangan, shox uchlarida sporali boshoqlar — strobillar hosil bo‘ladi.",
        highlights: [
          "Teng sporali plaunlar (Lycopodium clavatum): barcha sporalari bir xil, ikki jinsli gametofit beradi; sporalari (likopodiy) tibbiyot va metallurgiyada ishlatiladi",
          "Har xil sporali plaunlar (Selaginella): kichik mikrospora (erkak gametofit) va yirik megaspora (urg‘ochi gametofit) hosil qiladi — bu urug‘ hosil bo‘lishiga evolyutsion qadamdir",
          "Toshko‘mir davrida ulkan daraxtsimon plaunlar (Lepidodendron, Sigillariya) yashab, toshko‘mir qatlamlarini hosil qilgan",
        ],
      },
    ],
    comparisonTable: {
      title: "Yo‘sintoifa va Plauntoifa bo‘limlarining qiyosiy jadvali",
      columns: ["Mezon", "Yo‘sintoifa (Bryophyta)", "Plauntoifa (Lycopodiophyta)"],
      rows: [
        [
          "Hayot siklida ustun nasl",
          "Gametofit (n) — yashil o‘simlik",
          "Sporofit (2n) — ildiz, poya, bargli o‘simlik",
        ],
        [
          "Sporofit holati",
          "Gametofitga birikkan quticha (sporogon)",
          "Mustaqil yashovchi ko‘p yillik yashil o‘simlik",
        ],
        [
          "Ildiz tizimi",
          "Yo‘q (faqat rizoidlar; Sfagnumda ular ham yo‘q)",
          "Haqiqiy qo‘shimcha ildizlar mavjud",
        ],
        [
          "O‘tkazuvchi to‘qima",
          "Devorli haqiqiy naychalar yo‘q",
          "Shakllangan ksilema va floema mavjud",
        ],
        [
          "Vakillari",
          "Funariya, Kakkuzig‘ir, Sfagnum, Marhansiya",
          "To‘g‘nog‘ichsimon plaun (Lycopodium), Selaginella",
        ],
      ],
    },
    keyConcepts: [
      {
        term: "Anteridiy va Arxegoniy",
        definition:
          "Yuksak sporalilarda erkak gametalar (spermatozoid) va urg‘ochi gameta (tuxum hujayra) hosil qiluvchi ko‘p hujayrali jinsiy organlar.",
      },
      {
        term: "Sporogon",
        definition:
          "Yo‘sinlarning gametofit hisobiga oziqlanadigan quticha va banddan iborat sporofit nasli.",
      },
      {
        term: "Gialin hujayralar",
        definition:
          "Sfagnum yo‘sini bargida katta hajmda suv to‘playdigan o‘lik bo‘shliqli hujayralar.",
      },
      {
        term: "Strobil",
        definition:
          "Plaun va qirqbo‘g‘imlarning shox uchlarida spora hosil qiluvchi barglardan tuzilgan boshoqcha.",
      },
    ],
    selfCheckQuestions: [
      {
        question:
          "Yo‘sinlarning hayot sikli boshqa yuksak o‘simliklardan (plaun, qirqquloq) nimasi bilan tubdan farq qiladi?",
        answer:
          "Yo‘sinlarda yashil mustaqil o‘simlik — gaploid gametofit (n) ustunlik qiladi, diploid sporofit (2n) esa mustaqil yashay olmaydi; boshqa yuksak o‘simliklarda esa aksincha sporofit ustunlik qiladi.",
      },
      {
        question: "Sfagnum yo‘sinining botqoqlanish va torf hosil qilishdagi roli nimada?",
        answer:
          "Sfagnum gialin hujayralarida ulkan miqdorda suv saqlaydi, pastki qismi kislorod va bakteriyalar yetishmasligi tufayli chirimay siqilib, qimmatli torf qatlamini hosil qiladi.",
      },
      {
        question:
          "Plauntoifalarda har xil sporalilik (geterosporiya) paydo bo‘lishining evolyutsion ahamiyati nimada?",
        answer:
          "Mikrospora va megasporaning ajralishi erkak va urg‘ochi gametofitlarning ixtisoslashuviga olib kelib, kelajakda urug‘li o‘simliklar paydo bo‘lishiga zamin yaratgan.",
      },
    ],
    keyTerms: ["Cormobionta", "Anteridiy", "Arxegoniy", "Bryophyta", "Lycopodiophyta", "Rizoid"],
    references: "[1, 2, 3, 4, 5]",
  },
];
