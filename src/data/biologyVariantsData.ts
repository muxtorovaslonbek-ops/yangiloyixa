export interface BiologyQuestion {
  id: number;
  number: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface BiologyVariant {
  id: number;
  title: string;
  subtitle: string;
  questionCount: number;
  durationMinutes: number;
  questions: BiologyQuestion[];
}

export const BIOLOGY_VARIANTS: BiologyVariant[] = [
  {
    id: 1,
    title: "Variant 1",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Qaysi organizmlar \"tuxum-lichinka-voyaga yetgan davr‖ ketma-ketligida rivojlanadi. 1) suv qandalasi; 2) gul qandalasi; 3) xona kuyasi; 4) mita; 5) podoliya; 6) olma mevaxo'ri; 7) suluv ninachi; 8) osiyo chigirtkasi; 9) sariq suvarak.",
        options: ["A) 1.2.6.9", "B) 3.7.8.9", "C) 3.4.5.6", "D) 1.7.8.9"],
        correctAnswer: "C",
      },
      {
        id: 2,
        number: 2,
        question:
          "Qirqbo‘g‘imning generativ (a) va vegetativ (b) novdalari uchun xos bo‘lgan fikrlar qaysi javobda berilgan? 1- qirqquloqlarning soruslarini rangi singari ranga ega, 2- qirqquloqlarning game-tofitining rangi singari ranga ega, 3- bahorgi poya deb ataladi, 4- yozgi poya deb ataladi,5- assimilyatsion to‘qimaga ega, 6- shoxchalari bo‘g‘imida halqasimon joylashgan,7- sporalar hosil qilish vazifasini bajaradi,8- bo‘g‘imlarida shoxchalari bo‘lmaydi, 9- bo‘g‘imlarini ichi kovak bo‘ladi,10-undan jinssiz bo‘g‘in boshlanadi",
        options: [
          "A) a-1,3,6,9,10; b-2,4,8,9",
          "B) a- 1,4,5,9; b-2,5,6,9,10",
          "C) a-2,4,5,9; b-1,3,5,10",
          "D) a-1,3,8,10; b-2,5,9",
        ],
        correctAnswer: "C",
      },
      {
        id: 3,
        number: 3,
        question:
          "Orqa miyaning bel qismida (a), ko‘krak bo‘limi yuqorisida (b) va dumg‘aza qismida (c) joylashgan refleks markazlari nomini toping. 1-tizza refleksi, 2-ko‘z qorachig‘ini kengaytiruvchi, 3- siydik ajratuvchi,",
        options: ["A) a-1, b-2, c-3", "B) a-1, b-3, c-2", "C) a-2, b-3, c-1", "D) a-3, b-2, c-1"],
        correctAnswer: "B",
      },
      {
        id: 4,
        number: 4,
        question:
          "Ota sog‘lom, ona sog‘lom oilada daltonik o‘gillar tug‘illar tug‘ildi. Oilaga mos javobni toping.",
        options: [
          "A) oilada 100% qizlar sog‘lom",
          "B) kasal o‘g‘il ushbu genni otadan olgan",
          "C) oilada 50% farzand sog‘lom",
          "D) qizlarning 50% i kasal",
        ],
        correctAnswer: "A",
      },
      {
        id: 5,
        number: 5,
        question:
          "Suv tanqisligida tirik organizmlarning suv bug‗lanishini kamaytiruvchi moslanishlarini aniqlang. 1) yomg‗ir chuvalchangi tana massasining ancha qismini yo‗qotsa ham suv mavjudligida uni tez tiklashi; 2) qora qarag‗ay barglarining ignasimon shaklda bo‗lishi; 3) suv ko‗p yo‗qotganda lishayniklarning hayot faoliyatini saqlab qolishi; 4) yozgi qurg‗oqshilikda shuvoq barglarining to‗kilishi",
        options: ["A) 2, 4", "B) 1, 4", "C) 1, 3", "D) 2, 3"],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question: "Quyida rasmdagi to`rtinchi va beshinchi raqamli organni aniqlang.",
        options: [
          "A) oshqozonosti bezi va jigar",
          "B) jinsiy bez va buyrak",
          "C) jigar va me`daosti bezi",
          "D) o‘t pufagi va jigar",
        ],
        correctAnswer: "B",
      },
      {
        id: 7,
        number: 7,
        question:
          "Oraliq tipda irsiylanuvchi ikkita belgisi bilan farq qiluvchi gomozigota dominant va retsessiv organizmlar o‗zaro chatishtirilganda F2 da hosil bo‗lgan organizmlarning genotipik va fenotipik sinflarining nisbati qanday?",
        options: ["A) 1:1", "B) 1:2,25", "C) 1:1,5", "D) 1:3"],
        correctAnswer: "D",
      },
      {
        id: 8,
        number: 8,
        question: "Odam irsiyatini o'rganishning shajara usulini dastlab qaysi olim qo'llagan?",
        options: ["A) Gekkel", "B) Galton", "C) Myuller", "D) Ibn Sino"],
        correctAnswer: "B",
      },
      {
        id: 9,
        number: 9,
        question:
          "Dengiz tulkisining qon aylanish sistemasida qon harakati to‗g‗ri ko‗rsatilgan javobni aniqlang. a) jabralarga keladi; b) yurak bolmachasiga keladi; c) yurak qorinchasidan chiqadi; d) organlarga keladi; 1) arteriyalarda venoz qon; 2) yurak venasida arterial qon; 3) qorin aortasida arterial qon; 4) yurak venasida venoz qon; 5) orqa aortada venoz qon; 6) qorin aortasida venoz qon; 7) orqa aortada arterial qon; 8) venalarda venoz qon.",
        options: [
          "A) a - 1, b - 3, с - 5, d – 7",
          "B) a - 2, b - 5, с - 7, d – 8",
          "C) a - 1, b - 4, с - 6, d – 7",
          "D) a - 2, b - 3, с - 6, d – 8",
        ],
        correctAnswer: "C",
      },
      {
        id: 10,
        number: 10,
        question: "Quyidagi rasmda tasvirlangan meyoz fazasida qanday jarayon kuzatiladi",
        options: [
          "A) xromosomalarni spirallashish darajasi eng yuqori ko`rsatkichda bo`ladi",
          "B) gomologik xromosomalar yelkalari bir-biridan aniq ajraladi",
          "C) sentromera bilan birikkan xromatidalar bir-biridan ajraladi",
          "D) qisqa vaqt ichida yadro qobig`i hosil bo`ladi",
        ],
        correctAnswer: "C",
      },
      {
        id: 11,
        number: 11,
        question:
          "Plankton (I), nekton (II), bentos (III) organizmlarni ularga mos javoblar bilan juftlang. 1. bo‘shliqichlilar, 2. baliq tuxumlari, 3. krab, 4. kitsimonlar, 5. boshoyoqlilar, 6. zuluklar",
        options: [
          "A) I- 1,2; II- 4,6; III- 3,5",
          "B) I- 2,1; II- 4,5; III- 3,6",
          "C) I- 4,2; II- 1,6; III-3 ,5",
          "D) I- 1,2; II- 4,5; III- 3,6",
        ],
        correctAnswer: "D",
      },
      {
        id: 12,
        number: 12,
        question:
          "DNK zanjirida jami 6360 ta [H] bog‘ mavjud. Agar zanjirda A va G nisbati 3:2 bo‘lsa, shu zanjirdagi barcha nukleotidlar sonini aniqlang.",
        options: ["A) 10600 ta", "B) 6360 ta", "C) 5300 ta", "D) 2650 ta"],
        correctAnswer: "B",
      },
      {
        id: 13,
        number: 13,
        question:
          "Pisum sativumga xos xususiyatni ko`rsating. 1. gulining rangi mustaqil taqsimlanmasligi o`rganildi, 2. besh juft belgisi mustaqil taqsimlanishi o`rganildi, 3. hujayra profaza bosqichida 14 ta autosoma xromasomasi bor, 4. doninig burishgan shakli dominat holda irsiylanadi",
        options: ["A) 1,2", "B) 3,4", "C) 2,4", "D) 1,3"],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 14,
        question:
          "Quyidagi bog‘lanishlarni to‘g‘ri jutlang. 1) o‘txo‘r xayvonlarni oziqlanishi, 2) urg‘ochi qoraqurtni urug‘langandan keyingi oziqlanishi, 3) mog‘or zamburug‘ini antibiotiklar ishlab chiqarishi, 4) o‘simliklarning xashorotlarni tutishga moslanishlari, 5) gorchak baliq bilan molyuskaning munosabati, 6) aktiniya bilan qisqichbaqa munosabati a) xamsoyalik; b) protokooperatsiya; c) amensalizm; d) yirtqichlilik",
        options: [
          "A) 1,2,4-d; 3-c; 5-a; 6-b",
          "B) 1,4-d; 2,3-b; 5-a; 6-b",
          "C) 2,3-a; 1,4-b; 5-b; 6-a",
          "D) 1,4-a; 2,3-b; 5-b; 6-a",
        ],
        correctAnswer: "D",
      },
      {
        id: 15,
        number: 15,
        question:
          "Nuqtalar o‘rniga kerali javobni qo‘ying! ........... ning o‘pkasida bronxlar tarmoqlanib,bronxiolalar va alveolalar bilan tugaydi",
        options: [
          "A) sudralib yuruvchilar",
          "B) qushlar",
          "C) sutemizuvchilar",
          "D) suvda hamda quruqlikda yashovchilar",
        ],
        correctAnswer: "A",
      },
      {
        id: 16,
        number: 16,
        question:
          "Asosan savatcha to‘pgul hosil qiladigan gullari qiyshiq (a) va tog‘ri (b) bo‘lgan o‘simliklarni juftlang. 1) sachratqi, 2) qoqio‘t, 3) andiz, 4) shuvoq, 5) sebarga, 6) beda, 7) na‘matak, 8) topinambur, 9) maxsar",
        options: [
          "A) a-1,2,5,6; b-3,4,7,8",
          "B) a-1,2,9; b-3,4,8",
          "C) a-3,4,8; b-1,2,9",
          "D) a-3,4,5,6; b-1,2,7,9",
        ],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question:
          "Quyidagi kimyoviy elementlarni ularning bajaradigan vazifalari bilan juftlab bering. 1) Ca; 2) Fe; 3) Mg; 4) Zn; 5) Co; a) qonning normal ivishini ta‘minlaydi, b) suyak to‗qimalarini hosil qiladi va ularning mustahkamligini ta‘minlaydi, c) gazlarni tashiydi, d) biokimyoviy reaksiyalarni tezlashtiradi, e) xlorofill tarkibiga kiradi, f) jinsiy gormonlarning faolligini oshiradi, j) qon hosil bo‗lishida ishtirok etuvchi B vitamin tarkibida bo‗ladi 12",
        options: [
          "A) 1-a, b; 2-c; 3-d, e; 4-j; 5-f",
          "B) 1-a, b; 2-c; 3-d, e; 4-f; 5-j",
          "C) 1-b; 2-a, c; 3-d, e; 4-j; 5-f",
          "D) 1-a, b; 2-c, d; 3-j; 4-e; 5-f",
        ],
        correctAnswer: "A",
      },
      {
        id: 18,
        number: 18,
        question:
          "Quyida umurtqasiz hayvonlarning tayanch organlari keltrilgan. 3-rasmga xos bo‘lgan to‘g‘ri ma‘lumotni aniqlang.",
        options: [
          "A) to‘garak chuvalchanglar va halqali chuvalchanglar tipi vakillari uchun xos",
          "B) bo‘gimoyoqlilar tanasida tashqi skalet funksiyasini bajaradi",
          "C) suv shillig‘ida tanasida bosimni meyorlashtirib turish vazifasini bajaradi",
          "D) planariya tanasida tayanch funksiyani bajaradi",
        ],
        correctAnswer: "A",
      },
      {
        id: 19,
        number: 19,
        question:
          "AaBb × AaBb chatishtirishda olingan avlodlar orasida qanday genotipga ega organizmlar o‗zaro chatishtirilsa, genotipik jihatdan ajralish kuzatilmaydi?",
        options: ["A) AaBb", "B) aabb", "C) AaBB", "D) Aabb"],
        correctAnswer: "D",
      },
      {
        id: 20,
        number: 20,
        question:
          "To‗g‗ri fikrlar berilgan javobni aniqlang. 1) limfa organizmdagi ortiqcha suyuqlik va zararli mahsulotlarni to‗qimadan olib ketadi; 2) buyrak usti bezidan ajraladigan adrenalin gormoni qo‗rquv vaqtida ko‗p ajraladi; 3) yelkadagi uch boshli muskulning bo‗shashishi qo‗lni bilakdan bukadi; 4) skelet muskullari odam ixtiyoriga bog‗liq bo‗lmagan holda ishlaydi; 5) limfa sistemasi ochiq bo‗lib, to‗qima va organlardan boshlanadi.",
        options: ["A) 1, 3, 5", "B) 2, 3, 4", "C) 1, 2, 4", "D) 1, 4, 5"],
        correctAnswer: "D",
      },
      {
        id: 21,
        number: 21,
        question:
          "Quyonning somatik hujayrasida 42 ta autosoma xromosomalari mavjud. Uning organizmida kechadigan spermatogenez jarayonining profaza I davrida jami xromosomalar soni (a), xromatidalar soni (b), hujayra markazi soni (c), sentriolalar soni (d)ni aniqlang.",
        options: [
          "A) a- 84; b - 84; c - 1, d - 2",
          "B) a- 44; b - 88; c - 2, d - 4",
          "C) a- 42; b - 84; c - 2, d - 4",
          "D) a- 88; b - 88; c - 1, d - 2",
        ],
        correctAnswer: "D",
      },
      {
        id: 22,
        number: 22,
        question:
          "Hayvonlar qon aylanish sistemasining qaysi qismlarida arterial qon bo‗ladi? 1) yo‘rg‘a tuvaloqning o‗pka venasida, 2) chuchuk suv shillig‗ining yurak qorinchasida, 3) biyning yuragida, 4) xumboshning qorin aortasida, 5) lansetnikning orqa aortasida, 6) krevetkaning orqa qon tomirida",
        options: ["A) 2, 4", "B) 1, 3", "C) 2, 5", "D) 3,4"],
        correctAnswer: "D",
      },
      {
        id: 23,
        number: 23,
        question:
          "Tundra biomi uchun xos bo‘lgan o‘simliklar (a) va hayvonlar (b) ni toping. 1-qunduz, 2-qarag‘ay, 3-kedr, 4-kladoniya, 6-funariya, 7- eman, 8-norka, 9-qulon, 10-qandim, 11-silovsin, 12-qutb boyqushi, 13-los, 14-efemerlar, 15-lipa, 16-bo‘ri,",
        options: ["A) a-2,3; b-1,8,13", "B) a-4,5; b-12", "C) a-7,15; b-11,13", "D) a-10, b-9,16"],
        correctAnswer: "C",
      },
      {
        id: 24,
        number: 24,
        question:
          "Makkajo'xorining 2 ta past bo'yli navini o'zaro chatishtirish natijasida F da faqat bo'yi normal 1 duragaylar olingan. F da esa o'simliklarning 450 tasi 2 normal, 350 tasi past bo'yli bo'lgan. Past poyali o`simliklarni necha foizi tahliliy chatishtirishdan ajralish bemaydi?",
        options: ["A) 42,86%", "B) 14,28%", "C) 57,14%", "D) 28,57%"],
        correctAnswer: "A",
      },
      {
        id: 25,
        number: 25,
        question:
          "Katta yoshli sog‗lom odam og‗iz bo‗shlig‗idagi tishlar: kurak tishlar − a, katta oziq tishlar − b, kichik oziq tishlar − c, qoziq tishlar – d soni uchun to‗g‗ri javobni aniqlang. A) B) C) D)",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 26,
        question:
          "Bo`shliqichlilar tipi uchun tegishli bo`lgan fikrni aniqlang? a) bitta hujayrasida ikki xil vakuolaga ega b) regeneratsiya hususiyati kuchli rivojlangan c) nerv sistemasi sodda tuzilganligi tufayli ta`sirlanishi sekin amalga oshadi d) asosan ikkiga bo`linish yo`li bilan ko`payadi e) suvda erigan kislorod bilan nafas oladi f) hazm qilishi ikki bosqichda amalga oshadi",
        options: ["A) a,d,e", "B) b,c,f", "C) a,d,e,f", "D) b,c,e,f"],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 27,
        question:
          "Dostonni milk yallig`lanishi bezovta qilmoqda. U quyidagi usullardan qaysi birini qo`llashi kerak?",
        options: [
          "A) Isiriq qaynatmasi bilan yuzlarini yuvish",
          "B) Dorixonalarda sotiladigan qizilmiya siropini iste`mol qilish.",
          "C) Aloe bargini qirg`ichdan o`tkazib asal bilan birga iste`mol qilish.",
          "D) Yalpizning yer ustki qismidan tayyorlangan damlama iste`mol qilish.",
        ],
        correctAnswer: "C",
      },
      {
        id: 28,
        number: 28,
        question:
          "Toshko‗mir (a), silur (b) davrlariga xos evolyutsion o'zgarishlarni aniqlang. 1) ochiq urug'lilarning paydo bo'lishi, 2) qisqichbaqa va chayonlarning rivojlanishi, 3) uchuvchi hasharotlarning rivojlanishi, 4) arxeopteriksning paydo bo'lishi, 5) kaltakesak va toshbaqalar ajdodlarining paydo bo'lishi, 6) dastlabki sutemizuvchilarning paydo bo lishi.",
        options: [
          "A) a - 1, 2; b - 6",
          "B) a - 1, 4; b - 2 С) a - 2, 3; b - 5 D) a - 1, 3; b - 2",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 29,
        number: 29,
        question:
          "Genetika fani usullariga xos muvofiqlikni aniqlang. a) irsiyatning moddiy asosi bo‗lgan DNK va RNKning strukturasi va vazifasi o‗rganiladi; b) organizmlarning shaxsiy rivojlanish taraqqiyotida genotip va tashqi muhit omillarning ta‘siri fenotipning namoyon bo‗lishiga qanday ta‘sir qilishi o‗rganiladi. 1) sitogenetik; 2) genetik injeneriya; 3) ontogenetik; 4) molekular genetik",
        options: ["A) a – 4; b – 3", "B) a – 1; b – 3", "C) a – 2; b – 4", "D) a – 4; b – 1"],
        correctAnswer: "D",
      },
      {
        id: 30,
        number: 30,
        question: "Nuqtalar o‗rniga mos keluvchi javobni aniqlang. Deletsiya …..",
        options: [
          "A) genotipik o‗zgaruvchanlik, xromosoma mutatsiyasi",
          "B) fenotipik o‗zgaruvchanlik, genom mutatsiyasi",
          "C) modifikatsion o‗zgaruvchanlik, gen mutatsiyasi",
          "D) ontogenetik o‗zgaruvchanlik, gen mutatsiyasi",
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 2,
    title: "Variant 2",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Ta'riflardan qaysi biri bolaning rivojlanib borishi uchun noto‘g‘ri ifodalangan?",
        options: [
          "A) 3 oylik bola kuladi, qo‘llari bilan o‗yinchoqqa talpinadi",
          "B) 8 oylik bola buyumlarni ushlab o‗rnidan tura boshlaydi",
          "C) 5 oylik bola kuladi, yaqinlarini taniy boshlaydi",
          "D) 6 oylikda boshini tik tuta boshlaydi, bemalol o‘tiradi, emaklaydi",
        ],
        correctAnswer: "B",
      },
      {
        id: 2,
        number: 2,
        question:
          "Sinflar uchun tegishli ma‟lumotlarni juftlab ko'rsating. a) qushlar, b) sudralib yuruvchilar, c) qisqichbaqasimonlar, d) suvda hamda quruqlikda yashovchilar, e) sutemizuvchilar, 1) haqiqiy quruqlik hayvonlari; 2) dastlabki quruqlikda yashashga o'tgan hayvonlar; 3) birlamchi suv hayvonlari; 4) dastlabki issiqqonli hayvonlar",
        options: [
          "A) a-1; b-2; c-4; d-3",
          "B) a-2; b-3; c-1; d-4",
          "C) a-4; b-2; c-3; e-4",
          "D) a-4; b-1; c-3; d-2",
        ],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question:
          "Quyidagi rasmda akula, ixtiozavrlar va delfin tasvirlangan. Ushbu rasmga mos keluvchi javobni aniqlang.",
        options: [
          "A) bir populyatsiya doirasida bir-biridan farqlanuvchi bir nechta polimorf formalarning hosil bo‗lishi",
          "B) umurtqalilarning turli sistematik guruhlariga mansub hayvonlarda konvergensiya hodisasi",
          "C) bir sinfga mansub organizmlarning bir yo‗nalishda o‗xshash belgilarni paydo qilishi",
          "D) bir sinfga mansub organizmlarda ajdod tur belgilarining tarqalishini ifodalovchi divergent evolutsiya hodisasi",
        ],
        correctAnswer: "C",
      },
      {
        id: 4,
        number: 4,
        question:
          "Itlarga 30 kun davomida qo‘ng‘iroq chalib ovqat berilsa, ovqat berilishining 31-kuni elektr lampa ham ta`sir ettirilsa, bu yerda ovqat (a), qo‘ng‘iroq (b), lampa(c) qanday ta`sirlovchi hisoblanadi.",
        options: [
          "A) a – shartli tasirlovchi, b – shartsiz tasirlovchi, c – yot tasirlovchi",
          "B) a – shatrsiz tashirlovchi, b – yot tasirlovchi, c – shartli tasirlovchi",
          "C) a – shartli tasirlovchi, b – yot tasirlovchi, c – shartsiz tasirlovchi",
          "D) a – shartsiz tasirlovchi, b – shartli tasirlovchi, c – yot tasirlovchi",
        ],
        correctAnswer: "B",
      },
      {
        id: 5,
        number: 5,
        question:
          "Jig‗ildonga ega bo'lgan sovuqqonli (a) va issiqonli (b) hayvonlarga xos to‗g‗ri ma‘lumotlar qaysi javobda berilgan?",
        options: [
          "A) a-zuluklar bilan bir sinfga kiradi: b-4-6 ta tuxum qo'yadi, jish bola ochadi",
          "B) a-erkagini dumi ilmoqqa o‗xshash egilgan; b-ter bezlari rivojlanmagan, yiliga 5 marta bola ochadi",
          "C) a-yuragi ichagini ustida joylashgan, qoni kislorod tashimaydi; b-oshqozoni ikki kamerali, tirnoqlari kuchsiz tumshuq'i kuchlirivojlangan",
          "D) a-ozuqasi eshakqurt bilan bir xil; b-jarliklarga in quradi, uchganda yurak pulsi 3,33 marta tezlashadi",
        ],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question:
          "Tustovuq qushida partenogenes hodisasi kuzatiladi, shunga ko‘ra erkak individ yo‘q bo‘lgan tustovuq fermasida 40 ta tustovuq 10 kunda qo‘ygan tuxumlarni hosil qilish uchun spermatogenez jarayonining yetilish davrida nechta birlamchi hujayralar meyoz bo‘lingan? (har bitta tustovuq bir kunda bitta tuxum qo‘yadi)",
        options: ["A) 150", "B) 100", "C) 50", "D) 0"],
        correctAnswer: "A",
      },
      {
        id: 7,
        number: 7,
        question:
          "O‗simlik hujayrasining tilakoidlarida amalga oshadigan jarayonlarni aniqlang. 1) birlamchi uglevod – glukozaning sintezlanishi; 2) yorug‗lik energiyasi ta‘sirida suvning parchalanishi; 3) ADF va fosfat kislotadan ATF molekulasining sintezlanishi; 4) bir molekula glukozadan ikki molekula sut kislotaning hosil bo‗lishi; 5) sut kislotaning parchalanishi",
        options: ["A) 1, 5", "B) 2, 4", "C) 2, 3", "D) 1, 3"],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Ko‗lbuqaning ko‗l baqasidan farqli xususiyatlarini aniqlang. 1) kichik qon aylanish doirasi yuragining chap bo‗lmachasida yakunlanadi; 2) tana harorati tashqi muhit haroratiga bog‗liq emas; 3) bir marta olgan havosidan ikki marta nafas oladi; 4) orqa ichagining keyingi qismi kengayib, kloakani hosil qilgan; 5) bosh skeletlilar kenja tipi vakili; 6) qovurg‗alarining bir uchi ko‗krak umurtqalariga, ikkinchi uchi to‗sh suyagiga birikkan",
        options: ["A) 1, 4, 5", "B) 1, 5, 6", "C) 2, 3, 6", "D) 1, 3, 4"],
        correctAnswer: "D",
      },
      {
        id: 9,
        number: 9,
        question:
          "Ayolning otasi daltonizm bilan kasal, onasining ajdodlarida esa daltonizm uchramagan. Shu ayol somatik hujayrasining mitoz sikli anafazada hujayraning bir qutbidagi D (I), d (II) allellari sonini aniqlang.",
        options: ["A) I-2; II-2", "B) I-2; II-1", "C) I-1; II-1", "D) I-1; II-2"],
        correctAnswer: "D",
      },
      {
        id: 10,
        number: 10,
        question:
          "Odam ovqat hazm qilish sistemasida ishtirok etadigan tizimlarning faoliyati to‗g‗ri ko‗rsatilgan javobni aniqlang. a) simpatik nerv sistemasi; b) parasimpatik nerv sistemasi; c) qalqonsimon bez; d) gipofiz; 1) oshqozon bezlari faoliyatini kuchaytiradi; 2) ichak bezlari faoliyatini susaytiradi; 3) buyrakda reabsorbsiya jarayonini kuchaytiradi; 4) ichak muskullari qisqarishini kuchaytiradi; 5) ichak muskullari qisqarishini susaytiradi",
        options: [
          "A) a-5; b-4; c-2; d-1",
          "B) a-1, 4; b-5; c-2; d-1, 3",
          "C) a-5; b-4; c-1; d-2",
          "D) a-4; b-5; c-2; d-1, 3 9. Qirqbo‗g‗im va qarag‗ayga xos bo‗lgan umumiy tushunchalarni aniqlang. 1) arxegoniy; 2) anteridiy; 3) urug‗; 4) produtsent organizm; 5) urug‗kurtak; 6) fitosenoz vakili A) 2, 3, 5 B) 4, 5, 6 C) 1, 4, 6 D) 1, 2, 3 10. Soya va tariq o‗simliklarining asl vatanini aniqlang. A) Sharqiy Osiyo B) Janubiy Osiyo C) Janubi-g‗arbiy Osiyo D) Markaziy Amerika",
        ],
        correctAnswer: "B",
      },
      {
        id: 11,
        number: 11,
        question:
          "A o'simlikning murtak xaltasi va B o'simlikning endospermasidagi xromosomalar yig'indisi 180 ta. Ularning anafaza yakunidagi xromosomalar yig'indisi esa 140 ta bo'lsa, B o'simlikning arxeosporasidagi xromosomalar sonini aniqlang.",
        options: ["A) 40 ta", "B) 36 ta", "C) 52 ta", "D) 90 ta"],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 12,
        question:
          "Quyidagilardan nechtasi kichik molekulali organic moddalarga kiradi(a) va kirmaydi(b)? 1) K+ ; 2) natriy xlor; 3) eritroza; 4) gemoglobin; 4) xitin; 5) sulfat kislota; 6) amilaza; 7) adenin; 8) chumoli kislota; 9) tiamin; 10) kraxmal; 11) treonin; 12) lixenin",
        options: ["A) a-8; b-4", "B) a-5; b-3", "C) a-6; b-3", "D) a-6; b-6"],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question:
          "Quyida keltirilgan nerv sistemasiga mos keluvchi organizmlar qatorini toping 1) perlovitsa; 2) zuluk; 3) midiya; 4) tovusko‘z; 5) oq planariya; 6) karakatitsa; 7) nereida; 8) osminog; 9) qizil chuvalchang.",
        options: ["A) 1, 3, 6", "B) 2, 7", "C) 6, 8", "D) 4, 5, 9"],
        correctAnswer: "D",
      },
      {
        id: 14,
        number: 14,
        question:
          "Ajdod tur areali doirasi alohidalashgan individlarning ajdod turlardan urchish muddati va jinsiy jihatdan tafovut qilishi (a) va hujayra bo‘linishi anafazasida xromasomalarning ikki qutbga tarqalmasligi natijasida yuzaga keladigan o‘zgarish (b) qaysi hodisalarga misol bo‘ladi?",
        options: [
          "A) a-ekologik alohidalanish; b-simpatrik alohidalanish",
          "B) a-allopatrik alohidalanish; b-simpatrik alohidalanish",
          "C) a-allopatrik alohidalanish; b-geografik alohidalanish",
          "D) a-simpatrik alohidalanish; b-allopatrik alohidalanish",
        ],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 15,
        question:
          "Toʻrt yoshli sogʻlom bola yuqori jagʻida va pastki jagʻida nechtadan tishlari boʻladi va hayoti davomida nechta tish almashmaydi.",
        options: ["A) 10; 20", "B) 10; 12", "C) 20; 12", "D) 5; 32"],
        correctAnswer: "A",
      },
      {
        id: 16,
        number: 16,
        question:
          "Ayirish sistemasi malpigi naylaridan (a), yashil bezlardan (b), tasmasimon juft buyrakdan (c), yagona buyrakdan (d) iborat organizmlar to`g`ri juftlab ko`rsatilgan javobni aniqlang? 1) eshakqurt; 2) suvarak; 3) yaydoqchi; 4) bitiniya; 5) tridakna; 6) salamandra; 7) gulmoy;",
        options: [
          "A) a-2; b-1,3; c-7; d-6",
          "B) a-2; b-3,4; c-6; d-5",
          "C) a-4; b-1,2; c-6,7; d-5",
          "D) a-2,3; b-1; c-6,7; d-4,5",
        ],
        correctAnswer: "C",
      },
      {
        id: 17,
        number: 17,
        question:
          "Genotipi A A A а A a bo'lgan bo'yi 50 sm li va 1 1 2 2 3 3 genotipi A a a a a a bo'lgan bo'yi 35 sm li o`simliklar 1 1 2 2 3 3 chatishtirilganda (A geni 10 sm, a geni 5 sm) avlodining hosil qilgan trigeterozigota o`simligining uzunligini aniqlang.",
        options: ["A) 42sm", "B) 40sm", "C) 45sm", "D) 30sm"],
        correctAnswer: "A",
      },
      {
        id: 18,
        number: 18,
        question:
          "Хlamidomonadaga xos xususiyatlarni aniqlang. 1) chuchuk suv ekosistemasida tarqalgan; 2) xloroplastga ega tuban o‗simlik; 3) yorug‗da suvni, mineral tuzlarni po‗sti orqali shimib oladi; 4) ikkilamchi mahsulot biomassasini hosil qiladi",
        options: ["A) 1, 3", "B) 3, 4", "C) 2, 4", "D) 1, 2"],
        correctAnswer: "D",
      },
      {
        id: 19,
        number: 19,
        question:
          "Oqsil tuzilishi to‗g‗ri ko‗rsatilgan javobni aniqlang. 1) kollagen - ikkilamchi tuzilish; 2) gemoglobin - to‗rtlamchi tuzilish; 3) keratin - birlamchi tuzilish; 4) mioglobin - uchlamchi tuzilish; 5) radopsin - birlamchi tuzilish",
        options: ["A) 2, 3, 4", "B) 1, 2, 4", "C) 1, 3, 5", "D) 3, 4, 5"],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "Berilgan har bir maʼlumotni toʻgʻri deb qabul qilishingiz yoki notoʻgʻri deb inkor etishingiz mumkin. Berilgan toʻgʻri fikrga ―ha‖, notoʻgʻri fikrga ―yoʻq‖ deb javob bering. 1. Koʻrgalak va kojanning qanotlari oʻzaro gomologik organlardir. 2. Turning ildizmevasi va topinamburning tugunagi oʻzaro analogik organlardir.",
        options: [
          "A) 1 – ha; 2 – ha",
          "B) 1 – yoʻq; 2 – yoʻq",
          "C) 1 – yoʻq; 2 – ha",
          "D) 1 – ha; 2 – yoʻq",
        ],
        correctAnswer: "C",
      },
      {
        id: 21,
        number: 21,
        question:
          "Kolbasimon retseptorlarining funksiyasi normal bo‘lmagan (a) , qon plazmasidagi antigemofil omil haqida axborot saqlovchi gen retsessiv holatda bo‘lmagan (b) odamlar (♀ va ♂) genotipi noto‘gri berilgan javobni aniqlang. d d d H h H",
        options: [
          "A) a- X X ; X Y; b- X X ; X Y D d D H h H",
          "B) a- X X ; X Y; b- X X ; X Y d d d h h h",
          "C) a- X X ; X Y; b- X X ; X Y D D D h h h",
          "D) a- X X ; X Y; b- X X ; X Y",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 22,
        question: "Oshqozon va uning faoliyati uchun to`g`ri bo`lgan ma`lumotni aniqlang.",
        options: [
          "A) Aloe bargini qirg`ichdan o`tkazib asal bilan qo`shib istemol qilish oshqazon kasalliklari uchun foyda bo`ladi.",
          "B) Ayiqtovonni iste`mol qilish oshqozon faoliyatini yengillashtiradi.",
          "C) Sachratqini hali gullamagan paytdagi poyasidan tayyorlangan damlama oshqozon-ichak kasaliklarini davolashda foydalaniladi.",
          "D) To`raqulov oshqozon osti bezining bir qismini ko‗chirib o‗tkazish usulini ishlab chiqqan.",
        ],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 23,
        question:
          "Translatsiya va transkripsiya jarayoni sitoplazmada kechuvchi organizmlarni ko`rsating. 1) xrokok, 2) usneya, 3) nostok, 4) temir bakteriyasi, 5) klodoniya, 6) amyoba, 7) tripanasoma, 8) ossilatoriya",
        options: ["A) 2,3,4", "B) 1,4,8", "C) 4,7,6", "D) 6,7,2"],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question:
          "Dengiz tulkisi, dengiz cho‗chqasi, dengiz mushigining qon aylanish sistemasidagi o‗xshashlik(lar)ni aniqlang 1) yuragi 4 kamerali, issiqqonli xayvonlar; 2) yurak qorinchasidan chiquvchi qon tomirida arterial qon bo‗ladi; 3) qon aylanish sistemasi ikki doiradan iborat; 4) qon aylanish sistemasi yopiq; 5) o‗pka arteriyasida venoz qon bo‗ladi",
        options: ["A) 4, 5", "B) 4", "C) 3,4", "D) 1, 2, 3"],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 25,
        question: "Quyidagi sxemada berilgan noma‘lum X uchun mos bo‗lgan javobni aniqlang.",
        options: [
          "A) suv qaroqchisi, raffleziya",
          "B) safsan, chakanda",
          "C) baobab, ko‗rgalak",
          "D) maymunjon, qizilto‗sh",
        ],
        correctAnswer: "C",
      },
      {
        id: 26,
        number: 26,
        question:
          "Tashqi muhitga himoya rang (I) va ogohlantiruvchi rang (II) orqali moslashgan umurtqali (a), umurtqasiz (b) organizmlarni aniqlang. 1) korall aspidi; 2) yashil chigirtka; 3) belyanka; 4) kuropatka; 5) odimchi qurt; 6) amerika suviloni; 7) gelekonius; 8) kvaksha; 9) tugmachaqo‗ng‗iz",
        options: [
          "A) I − a − 4, 8; b − 2, 5; II − a − 1; b − 9",
          "B) I − a − 8; b − 2, 7; II − a − 1; b − 5, 9",
          "C) I − a − 4; b − 3; II − a − 2; b − 1",
          "D) I − a − 1, 8; b − 2, 5; II − a − 4; b – 3",
        ],
        correctAnswer: "C",
      },
      {
        id: 27,
        number: 27,
        question:
          "Bosh miyaning ostki yuzasida joylashgan bezdan ishlab chiqariladigan, garmon(lar)ning qaysilari aralash sekretsiya bezlari ishini boshqaradi? 1) Somatotrop gormoni, 2) tireotrop gormoni, 3) gonadotrop gormoni, 4) adrenokortikoid gormoni, 5) adrenalin gormoni, 6) androgen gormoni, 7) timozin gormoni,",
        options: ["A) 2,4", "B) 3", "C) 1", "D) 1,2,3,4"],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 28,
        question:
          "Quyida berilgan organizmlar a− yovvoyi bankiv tovug‗i, b− muflon, c− tapir, d− ko‗k qoya kaptarlaridan ongli tanlash asosida kelib chiqqan zotlarni mos ravishda juftlang. 1) Shortgorn; 2) Axaltaka; 3) Xolmogor; 4) Romanov; 5) Lekgorn; 6) Laqay; 7) Plimutrok; 8) Qozog‗iston oqboshi; 9) Murg‗ob; 10) Merinos; 11) Bo‗qoq kaptar; 12) Bushuyev; 13) Tovus kaptar.",
        options: [
          "A) a-5, 7; b-4, 10; c-1, 3, 8; d-11, 13",
          "B) a-5, 7, 9; b-4, 10; c-2, 6; d-11, 13",
          "C) a-5, 7; b-4, 12; d-11, 13",
          "D) a-5, 7; b-4, 10; d-11, 13",
        ],
        correctAnswer: "D",
      },
      {
        id: 29,
        number: 29,
        question:
          "Ikki organizmning genotipi bir xil bo‘lib, quyidagi ko‘rinishga ega: AaBbCcEE. Agar 1 – va 3 – alternativ genlar to‘liq, 2 – alternativ gen esa noto‘liq dominant irsiylanish xarakteriga ega bo‘lsa, ushbu organizmlar o‘zaro chatishtirilishidan hosil bo‘lgan fenotipik (a) va genotipik (b) sinflar sonini aniqlang.",
        options: [
          "A) a = 12; b = 27",
          "B) a = 18; b = 27",
          "C) a = 8; b = 27",
          "D) a = 18; b = 81",
        ],
        correctAnswer: "B",
      },
      {
        id: 30,
        number: 30,
        question:
          "Simbioz gipotezasiga ko‗ra qaysi organoidlar yadro membranalaridan kelib chiqqan?",
        options: [
          "A) endoplazmatik to‗r, Golji majmui",
          "B) xloroplast, sentrosoma",
          "C) lizosoma, ribosoma",
          "D) Golji majmui, lizosoma, sentrosoma",
        ],
        correctAnswer: "D",
      },
    ],
  },
  {
    id: 3,
    title: "Variant 3",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Floemada joylashgan hujayralarni aniqlang. 1) lub tolalari, 2) yog‘ochlik tolalari, 3) elaksimon naylar, 4) o‘tkazuvchi naylar, 5) lub parenxemasi, 6) yog‘ochli parenxemasi",
        options: ["A) 1,3,5", "B) 1,4,6", "C) 2,3,5", "D) 2,4,6"],
        correctAnswer: "A",
      },
      {
        id: 2,
        number: 2,
        question:
          "Quyidagi fikrlarning orasida nechtasi to`g`ri ifodalangan? 1) Trilobitlarning tuzilishi ko`p tukli halqalilarga o`xshash bo`lib, har bir tana bo`g`imida 2 tadan bir xil tuzilgan oyoqlari bo`lgan; 2) Uy pashshasi sil, sarg`ayma, ichburug`, qorin tifi, vabo, bo`g`ma kabi kasalliklarni hammasini tarqatadi; 3) Butli o`rgimchakning ikki tutam traxeyalari bo`lib, ularning har biri qorin bo`limida joylashgan alohida alohida teshik orqali atmosfera havosi bilan bog`langan bo`ladi; 4) Qisqichbaqaning qorinoyoqlarining 72% idan ko`prog`i 2 shoxli bo`ladi; 5) 650 ga yaqin turi bor bo`lgan sinf vakillari o`zining tip vakillari bilan oziqlanadi; 6) Eng yirik o`rgimchakning zahar bezi bo`lmaydi; 7) To`g`ri qanotlilarning oldingi qanotlari kalta va ensiz, orqa qanotlari esa yelpig`ichga o`xshab oldingi qanotlari ostiga taxlanib turadi; 8) Qandalalarning birinchi juft qanotlari qalinlashgan, ikkinchi juft qanotlari yupqa va shaffof",
        options: ["A) 2", "B) 3", "C) 4", "D) 5"],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question:
          "Xushbo‘y no‗xatga xos bo‗lmagan xususiyatni ko‗rsating. 1) gulining rangi mustaqil taqsimlanmasligi o‗rganildi; 2) besh juft belgisi mustaqil taqsimlanishi o‗rganildi; 3) hujayra profaza bosqichida 14 ta autosoma xromasomasi bor; 4) doninig burishgan shakli dominat holda irsiylanadi",
        options: ["A) 1, 2", "B) 3, 4", "C) 2, 4", "D) 1, 3"],
        correctAnswer: "C",
      },
      {
        id: 4,
        number: 4,
        question:
          "Quyida DNK strukturasi tasvirlangan. Ushbu molekulada I va II raqamlarga mos keluvchi javoblarni aniqlang.",
        options: [
          "A) I – monosaxarid; II – geksoza",
          "B) I – adenozintrisosfat; II – dezoksiriboza",
          "C) I – fosfat kislota; II – dezoksiriboza",
          "D) I – riboza; II – dezoksiroza",
        ],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Exinokokk, oq planariya, chuchuk suv shillig‗i. Berilgan organizmlar uchun xos bo‗lgan xususiyatlar mos ravishda to‗g‗ri ketma-ketlikda berilgan javobni aniqlang.",
        options: [
          "A) germafrodit hayvon; kipriklilar sinfiga mansub; yuragi ikki kamerali",
          "B) sezgi organlari yo‗q; metamorfoz bilan rivojlanadi; qon aylanish sistemasi yopiq",
          "C) ichaklarning uchi berk; tanasi epiteliy bilan qoplangan; jabralari orqali nafas oladi",
          "D) tanasi bo‗g‗imlardan iborat; tasmasimon chuvalchanglar sinfiga mansub; o‗pkasi bilan nafas oladi",
        ],
        correctAnswer: "D",
      },
      {
        id: 6,
        number: 6,
        question:
          "Ho`l mevalarni hosil qiluvchi(a) va qilmaydigan(b) o`simliklarni aniqlang. 1) Zarafshon, 2) Samarqand-3, 3) Buxoro-9, 4) Sohibi, 5) Qozi dastor, 6) Yulduz,",
        options: [
          "A) a-1,4,5; b-2,3,6",
          "B) a-2,3,6; b-1,4,5",
          "C) a-1,2,3; b-4,5,6",
          "D) a-4,5,6; b-1,2,3",
        ],
        correctAnswer: "A",
      },
      {
        id: 7,
        number: 7,
        question:
          "Avtopoliploidiyaning muvozanatsiz (a) va muvozanatli (b) turlarini ajrating. 1) 21 xromosomali bug‘doy, 2) 52 xromosomali go‘za, 3) 36 xromosomali xrizantema, 4) 72 xromosomali karam, 5) 24 xromosomali tog`olcha, 6) 21 xromosomali no‘xat,",
        options: [
          "A) a-2,3,4; b-1,5,6",
          "B) a-1,5,6; b-2,3,4",
          "C) a-2,5,6; b-1,3,4",
          "D) a-1,3,4; b-2,5,6",
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Tajriba maydonida seleksioner olim g‘o‘za o‘simligining tolalari oq va malla rangli xillarini chatishtirdi. F2 duragaylari 2192 tani tashkil qiladi. Ular orasidan 548 tasi malla, 1104 tasi novvot rang, 540 tasi oq rangda bo‘ldi. Ushbu tajribada olingan novvot rangli duragaylarning nazariy jihatdan olinishi kerak bo‘lgan novvot rangli duragaylardan farqini toping.",
        options: ["A) 4 ta ko‘p", "B) 8 ta ko‘p", "C) 8 ta kam", "D) 4 ta kam"],
        correctAnswer: "C",
      },
      {
        id: 9,
        number: 9,
        question:
          "Kaklik katta qon aylanish(a) va kichik qon aylanish(b) doirasi haqida to`g`ri fikrni aniqlang. 1) o`pka arteriyasi orqali o`tadi, 2) to`qimalarda CO2 bilan to`yinadi, 3) o`ng bo`lmachaga qon olib keladi, 4) chap bo`lmachaga qon olib keladi, 5) o`pka venalari orqali o`tadi, 6) o`ng qorinchadan boshlanadi, 7) chap qorinchadan boshlanadi",
        options: [
          "A) a-1,3,6; b-2,5,7",
          "B) a-1,4,5; b-2,3,7",
          "C) a-2,3,7; b-1,4,5",
          "D) a-4,5,7; b-1,2,3",
        ],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question: "Translyatsiya jarayonini boshlab beruvchi ―start kodon‖ berilgan qator?",
        options: ["A) AGU – serin", "B) AUG – metionin", "C) AAG – lizin", "D) AUC – izoleysin"],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 11,
        question:
          "Endositoz turlari va ularga xos muvofiqlikni aniqlang. a) pinositoz; b) fagositoz 1) har xil moddalarning eritma holida mayda tomchi shaklida hujayraga kirishi; 2) o‗simliklar, bakteriyalar va ko‗k-yashil suvo‗tlari hujayralari amalga oshmaydi; 3) hayvonot olamida keng tarqalgan; 4) oqsillar, polisaxaridlar va qattiq zarrachalar hujayra ichiga o‗tishi; 5) leykotsitlar faoliyatida kuzatiladi; 6) suyuqlikning mayda tomchi ko‗rinishida yutilishi ichish hodisasiga o‗xshaydi",
        options: [
          "A) a - 1, 2; b - 4, 6",
          "B) a - 3, 4; b - 2, 6",
          "C) a - 3, 5; b - 2, 4",
          "D) a - 1, 6; b - 3, 4",
        ],
        correctAnswer: "D",
      },
      {
        id: 12,
        number: 12,
        question: "Notogʻri ma‘lumotni aniqlang.",
        options: [
          "A) qulupnayni jingalagi novdani oʻzgarishidan xosil boʻladi.",
          "B) bodring gajaklari bargning oʻzgarishidan xosil boʻladi",
          "C) doʻlana tikani novda oʻzgarishidan xosil boʻladi",
          "D) akatsiya tikani yon bargni oʻzgarishidan xosil boʻladi",
        ],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question:
          "Ekologik piramida qoidasiga asoslanib 70 kg o‗simlikni iste‘mol qilgan bizon massasi qanchaga oshganligini (kg) aniqlang. (Bizonning biomassasi o‗simlikning 40% quruq moddasi massasi hisobiga ortadi.)",
        options: ["A) 42", "B) 28", "C) 4,2", "D) 2,8"],
        correctAnswer: "D",
      },
      {
        id: 14,
        number: 14,
        question:
          "Afrika qitʼasida yashovchi juft tuyoqlilar turkumiga mansub suv aygʻiri va Janubiy Amerika qitʼasida tarqalgan kemiruvchilar turkumiga mansub suv choʻchqasi tana tuzilishidagi oʻxshashlik evolyutsiyaning qaysi qonuniyatini aks ettiradi?",
        options: [
          "A) Mimikriya hodisasi",
          "B) Parallellelizm",
          "C) Konvergensiya",
          "D) Umumiy degeneratsiya",
        ],
        correctAnswer: "B",
      },
      {
        id: 15,
        number: 15,
        question:
          "Yaguar uchun mantiqiy bog'liq bo‗lgan tushunchalarni aniqlang. 1) muguz tumshuq; 2) to'rt kamerali yurak; 3) quloq suprasi; 4) tish; 5) metamorfoz; 6) bosh miya katta yarimsharlari",
        options: [
          "A) 1, 2, 6",
          "B) 3, 4, 5 С) 1, 4, 5 D) 2, 3, 6",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 16,
        number: 16,
        question:
          "Infuzoriyalilarda tanadagi ortiqcha suv va keraksiz moddalar tashqi muhitga qay tartibda chiqarib yuboriladi?",
        options: [
          "A) yig‘uvchi naycha, chiqarish nayi",
          "B) yig‘uvchi naycha, pufakcha, chiqarish naychasi",
          "C) faqat qisqaruvchi vakuola",
          "D) maxsus ayirish a‘zosiga ega emas",
        ],
        correctAnswer: "B",
      },
      {
        id: 17,
        number: 17,
        question:
          "Quyidagi jadvalda eukariot hujayra tarkibidagi organoidlar va ularning tarkibi ifodalangan. Shunga ko‗ra, organoidlarni tarkibi bilan to‗g‗ri juftlang.",
        options: [
          "A) 1-c; 2-a; 3-b; 4-d",
          "B) 1-b; 2-d; 3-a; 4-c",
          "C) 1-c; 2-b; 3-a; 4-d",
          "D) 1-a; 2-b; 3-d; 4-c",
        ],
        correctAnswer: "A",
      },
      {
        id: 18,
        number: 18,
        question:
          "Quyidagi xususiyatlarga ega bo‗lgan o‗simlikni aniqlang. Daryo va ko‗llar sohilidagi to‗qaylarda, sernam yerlarda o‗sadi; bo‗yining uzunligi 70-150 sm keladigan ko‗p yillik o‗t; ildizidan tayyorlangan damlama ilmiy tabobatda yo‗talga qarshi ishlatiladi.",
        options: [
          "A) yerbag‗ir tugmachagul",
          "B) dorivor gulxayri",
          "C) zangori sachratqi",
          "D) cherkez",
        ],
        correctAnswer: "C",
      },
      {
        id: 19,
        number: 19,
        question:
          "Odam organizmi sekretsiya bezlari haqidagi noto‗g‗ri ma‘lumotlarni aniqlang. 1) ichki sekretsiya bezi hisoblangan gipofizdan somatotrop gormoni ajraladi; 2) so‗lak bezlari tashqi, oshqozon osti bezi aralash, ter bezlari ichki sekretsiya bezlari hisoblanadi; 3) qalqonsimon bez tiroksin gormoni ishlab chiqaradi; 4) oshqozon osti bezi fermentlar ishlab chiqaradi; 5) buyrak usti bezidan ajraladigan adrenalin fermenti qonga quyiladi",
        options: ["A) 3, 5", "B) 2, 5", "C) 2, 4", "D) 1, 4"],
        correctAnswer: "D",
      },
      {
        id: 20,
        number: 20,
        question:
          "Labaratoriyada 3 ta petri idishiga 3 xil bakteriya solindi 1- petri idishiga, somon bakteriyasini, 2- petri idishiga tayoqchasimon bakteriyani, 3- petri idishiga esa, sharsimon bakteriya solindi. 2 soatdan so‘ng 1-chi petri idishida 256 ta, 2-chi petri idishida 64 ta va 3- petri idishida esa, 4096 ta bakteriyalar paydo bo‘lgan bo‘lsa, birinchi va uchinchi idishdagi bakteriyalarni bir martta bo‘linishiga jami qancha daqiqa ketgan?",
        options: ["A) 35", "B) 25", "C) 45", "D) 30"],
        correctAnswer: "C",
      },
      {
        id: 21,
        number: 21,
        question:
          "Barg og‘izchalari doim ochiq (a) va kunduzi yopiq yoki ochiq (b) bo‘lgan o‘simliklar namlikka bo‘lgan moslanishiga ko‘ra qanday guruhga mansubdirlar?",
        options: [
          "A) a – kserofitlar; b – gigrofitlar",
          "B) a – mezofitlar; b – gidrofitlar",
          "C) a – kserofitlar; b – mezofitlar",
          "D) a – gigrofitlar; b – mezofitlar",
        ],
        correctAnswer: "A",
      },
      {
        id: 22,
        number: 22,
        question:
          "Tikanli akula uchun mantiqiy bog‘liq bo‘lgan tushunchalarni aniqlang. 1) ichak; 2) ikki kamerali yurak; 3) umurtqa; 4) jabra yoriqlar; 5) kata qon aylanish doirasi; 6) suzgich pufagi;",
        options: ["A) 2,5,6", "B) 2,3,6", "C) 1,3,4", "D) 1,4,5"],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 23,
        question: "Ikkilamchi spermatotsitlardan . . . hosil bo‗ladi.",
        options: [
          "A) spermatogoniyalar",
          "B) spermatozoidlar",
          "C) spermatidalar",
          "D) yo‗naltiruvchi tanachalar",
        ],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question: "Ushbu o`simlik nomi va ko`payish usuli to`g`ri berilgan javobni belgilang.",
        options: [
          "A) begoniya, piyozidan ko‘payadi",
          "B) nargis, piyozboshdan ko‘payishi",
          "C) g‘umay, ildizpoyasidan ko‘payishi",
          "D) lola, piyozboshidan ko‘payishi",
        ],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 25,
        question:
          "A va B genlar autasomada joylashgan birikkan genlar bo‗lib, ular orasida chalkashuv 24% ni tashkil etsa, digeterozigotalar (dominant genlar faqat otadan yoki faqat onadan o‗tgan) hosil qiladigan gametalar miqdorini (%) aniqlang.",
        options: [
          "A) 38 - aB; 38 - ab; 12 - AB; 12 - Ab",
          "B) 12 - АВ; 12 - ab; 38 - aB; 38 - Ab",
          "C) 38 - АВ; 38 - ab; 12 - aB; 12 - Ab",
          "D) 38 - Аb; 38 - ab; 12 - aB; 12 - AB",
        ],
        correctAnswer: "D",
      },
      {
        id: 26,
        number: 26,
        question: "Jish bola ochuvchi qushlarning turkumlarini va turlarini aniqlang.",
        options: [
          "A) laylaksimonlar - oq laylak; yirtqichlar - miqqiy, suqsun; kaptarsimonlar - ko‗k kaptar, hakka.",
          "B) chumchuqsimonlar - qaldirg‗och, chumchuq; laylaksimonlar - oq laylak; yirtqichlar - suqsun",
          "C) kaptarsimonlar - ko‗k kaptar; chumchuqsimonlar qaldirg‗och, musicha; yirtqichlar - churrak",
          "D) kaptarsimonlar - musicha; chumchuqsimonlar - qarg‗a, qaldirg‗och; laylaksimonlar - oq laylak",
        ],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 27,
        question:
          "Ko‗p hujayrali organizmlarning jinssiz ko‗payish turlarini aniqlang. 1) shizogoniya; 2) spora orqali ko‗payish; 3) kurtaklanib ko‗payish; 4) fragmentatsiya orqali ko‗payish; 5) poliembrioniya; 6) binar bo‗linish",
        options: ["A) 2, 3, 5, 6", "B) 2, 3, 4, 5", "C) 1, 3, 4, 5", "D) 1, 2, 3, 6"],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 28,
        question: "Yo‗sinlarning jinsiy bo‗g‗ini uchun xos bo'lmagan javobni toping.",
        options: [
          "A) Gametofit nasl hisoblanadi, mustaqil oziqlanadi.",
          "B) Gametofit nasl hisoblanadi, ko‗p hujayrali, poya-bargli o‗simlik.",
          "C) Sporadan rivojlanadi, zigota hosil qiladi.",
          "D) Zigotadan rivojlanadi, sporofit hisobiga oziqlanadi.",
        ],
        correctAnswer: "B",
      },
      {
        id: 29,
        number: 29,
        question:
          "Drozofila melanagasterning qaysi belgilari har xil gomologik xromasomalarda joylashmagan? 1) qora tana qizil ko‗zli; 2) kulurang tana normal qanot; 3) normal qanot oq ko‗zli; 4) qora tana kalta qanot; 5) kulurang tana qizil ko‗zli; 6) qora tana uzun qanot",
        options: ["A) 1, 3, 5", "B) 2, 4, 6", "C) 1, 4, 6", "D) 2, 3, 5"],
        correctAnswer: "B",
      },
      {
        id: 30,
        number: 30,
        question:
          "3-bosqichda 1160 kj issiqlik energiyasi hosil bo‘lgan bo‘lsa, xloraplastlarda sintezlangan ATF miqdori ni aniqlang?",
        options: ["A) 1160", "B) 1140", "C) 2160", "D) 1080"],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 4,
    title: "Variant 4",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Urg‗ochi ko‗k kaptar (2n=80) gametogenezining yetilish davri anafaza II (a) va metafaza I (b) bosqichidagi xromosoma to‗plamini aniqlang.",
        options: [
          "A) a − 78+XX yoki 78+YY; b − 78+XY",
          "B) a − 78+XY; b − 78+XX",
          "C) a − 39+X; b − 39+X",
          "D) a − 39+X yoki 39+Y; b − 78+XY",
        ],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question:
          "Quyidagi keltirilgan o‗simliklarning generativ organlariga tegishli javobni aniqlang. a) dastargul; b) g‗o‗za; c) qovun; d) madaniy tok; e) karrak; f) qalampir; g) shaftoli; h) rediska; i) oqquray. 1) changchilari ko‗p, changchi iplari birikkan; 2) gullari ikki jinsli; 3) gullari to‗g‗ri, ayrim jinsli; 4) gultojibarglari qo‗shilgan; 5) gulkosachasi ikki qavat; 6) mevasi dukkak; 7) uch xil gultojibargga ega; 8) jingalaklari – shakli o‗zgargan barg; 9) to‗pguli murakkab shingil; 10) gulkosachasi juda qisqarib ketgan; 11) mevasi ko‗p urug‗li ho‗l meva; 12) jingalaklari − shakli o‗zgargan novda; 13) mevasi ko‗p urug‗li quruq meva; 14) mevasi bir urug‗li quruq meva; 15) mevasi rezavor meva; 16) gullari qiyshiq",
        options: [
          "A) a − 4, 10, 14; b − 1, 2, 13; c − 3, 4, 11; d − 9, 15; e − 4, 16; f − 2, 4; g − 2; h − 13; i − 2, 6, 16",
          "B) a − 4, 10, 13; b − 1, 2, 5; c − 3, 4, 15; d − 4, 9, 10, 12; e − 2, 4, 10, 15; f − 2, 4; g − 1, 11; h − 2; i − 2, 6, 7",
          "C) a − 2, 10, 14; b − 1, 5, 13; c − 3, 4, 11; d − 8, 10, 15; e − 2, 4, 13; f − 2, 4; g − 2, 15; h − 14; i − 2, 7, 16",
          "D) a − 10, 14, 16; b − 2, 4, 5; c − 3, 7, 11; d − 2, 4, 9, 11, 12; e − 3, 10, 14; f − 2, 13; g − 14, 11; h − 2, 13; i − 6, 7, 1, 14",
        ],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question:
          "Silovsinning sistematik o‗rni ketma-ketligi qaysi javobda berilgan? 1) suvsarsimonlar oilasi; 2) yirtqichlar turkumi,3) kemiruvchilar turkumi; 4) mushuksimonlar oilasi; 5) bosh skeletlilar kenja tipi; 6) yo‗ldoshlilar tipi; 7) sutemizuvchilar sinfi; 8) xordalilar tipi",
        options: ["A) 1-2-7-5-8", "B) 4-2-7-6", "C) 4-2-7-5", "D) 2-4-7-8"],
        correctAnswer: "D",
      },
      {
        id: 4,
        number: 4,
        question: "Quyidagi rasmda aks etgan jarayonda nima ro`y beradi",
        options: [
          "A) spermatogenezda birlamchi jinsiy hujayralar juda tez ko`payadi",
          "B) hujayralar gaploid to`plamga ega bo`ladi",
          "C) tuhum hujayra ayrim vaqtda yuz va ming martagacha kattalashadi",
          "D) jinsiy hujayralar ma`lum shakl va hajmga ega bo`ladi",
        ],
        correctAnswer: "A",
      },
      {
        id: 5,
        number: 5,
        question:
          "Lishayniklar faoliyati bilan bog'liq jarayonlarni aniqlang. 1) avtotrof; 2) spora hosil qilishi; 3) fotosintez; 4) g‗o‗zada vilt kasalligining yuzaga kelishi",
        options: ["A) 2,4", "B) 3,4", "C) 1,3", "D) 1,4"],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question:
          "Uchinchi qon guruhli bolaning onasi birinchi qon guruhi. Bolaning otasi nechinchi qon guruhi bo`lishi mumkin?",
        options: ["A) I, III, IV", "B) Faqat III", "C) Faqat II", "D) I, II, III, IV"],
        correctAnswer: "A",
      },
      {
        id: 7,
        number: 7,
        question:
          "Quyidagi tushunchalarga xos muvofiqlikni aniqlang. 1) o‗zgaruvchanlik; 2) irsiyat a) tirik organizmlarning o‗ziga xos belgi va xususiyatlarini kelgusi avlodlarga qoldirishi; b) organizmlarning yangi belgilari va xususiyatlarini namoyon etish qobiliyati; c) tur doirasidagi individlar bir- biridan farqlanishi; d) tur doirasidagi hamma individlar o‗xshash bo‗ladi.",
        options: [
          "A) 1 - b, c; 2 - a, d",
          "B) 1 - a, c; 2 - b, d",
          "C) 1 - c, d; 2 - a, b",
          "D) 1 - a, d; 2 - b, c",
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Qirqbo'g‘imlarga xos bo‘lmagan xususiyatlarni aniqlang. 1) ildizpoyali o'simlik; 2) anteridiyda ikki xivchinli spermatozoidlar yetiladi; 3) gametofit bo‗g‗in ustunlik qiladi; 4) barglari poyada halqasimon joylashgan; 5) hujayralari xitin qobiqqa ega; 6) tallomdan ajralgan o'simtalar orqali ko‗payadi; 7) erta bahorda sershox qirqbo'g‘imning ildizpoyasidagi kurtaklaridan qo'ng‘ir rangli shoxlanmagan generativ novda o‗sib chiqadi; 8) gametofiti bir uyli, ikki jinsli",
        options: [
          "A) 1, 2, 3, 5, 7, 8",
          "B) 1, 2, 5, 7, 3, 4",
          "C) 1, 2, 4, 5, 7, 8",
          "D) 2, 3, 5, 6, 7, 8",
        ],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 9,
        question:
          "Quyidagi rasmga mos boʻlmagan mulohazalarni koʻrsating? 1) miyelin qobiq; 2) dendrit; 3) mitoz boʻlinish; 4) qisqaruvchanlik; 5) retseptor oqsillar.",
        options: ["A) 1, 5", "B) 1, 3", "C) 2, 5", "D) 3, 4"],
        correctAnswer: "B",
      },
      {
        id: 10,
        number: 10,
        question:
          "Yorug‘lik mikroskopida okulyar- 20, obyektiv -30 bo‘lsa 0,2 mm kattalikdagi hujayrani qancha o‘lchamgacha kattalashtiradi?",
        options: ["A) 12 sm", "B) 1200 mm", "C) 600 mm", "D) 6 sm"],
        correctAnswer: "B",
      },
      {
        id: 11,
        number: 11,
        question:
          "Oddiy dukkakli, qizil gulli, uzun poyali trigeterozigota no‗xatlar o‗zaro chatishtirilishidan hosil bo‗lishi ehtimoli bo‗lgan avlodlarning quyidagi har bir fenotipi bo‗yicha genotiplari sonini aniqlang. 1) oddiy dukkakli, qizil gulli, uzun poyali; 2) oddiy dukkakli, qizil gulli, kalta poyali; 3) bo‗g‗imli dukkakli, qizil gulli, kalta poyali; 4) oddiy dukkakli, oq gulli, uzun poyali; 5) bo‗g‗imli dukkakli, oq gulli, uzun poyali; 6) bo‗g‗imli dukkakli, qizil gulli, uzun poyali.",
        options: [
          "A) 1, 2, 6 - to‗rt xil; 3, 4, 5 - ikki xil",
          "B) 2, 3, 5 - to‗rt xil; 4, 6 - ikki xil",
          "C) 1, 2 - sakkiz xil; 4, 5 - to‗rt xil",
          "D) 2, 4, 6 - to‗rt xil; 3, 5 - ikki xil",
        ],
        correctAnswer: "B",
      },
      {
        id: 12,
        number: 12,
        question:
          "Interferon quydagilarni qaysilarni ko‘payishiga to‘sqinlik qila oladi? a) qoqshol qo‘zg‘atuvchisi; b) quturish qo‘zag‘atuvchisi c) sil qo‘zg‘atuvchisi; d) vabo qo‘zg‘atuvchisi; e) kuydirgi qo‘zg‘atuvchisi; f) qizilcha qo‘zg‘atuvchisi; j) ensefalit qo‘zg‘atuvchisi; k) mikoz qo‘zg‘atuvchisi;",
        options: ["A) a, c, d, e", "B) b, f, j", "C) a, f, k", "D) b, d, j"],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question:
          "Quyida berilganlardan algologiya fanining o'rganish ob'yekti bo'lgan organizmlarni aniqlang. 1) parmeliya; 2) xara; 3) funariya; 4) ulotriks; 5) everniya; 6) psilofit; 7) spirogira; 8) usneya barbata.",
        options: ["A) 2,4,7", "B) 1,4,6", "C) 1,5,8", "D) 8,5,7"],
        correctAnswer: "C",
      },
      {
        id: 14,
        number: 14,
        question:
          "RNK polimeraza fermenti ta‘sirida sintezlangan nuklein kislota tarkibidagi guanin nukleotidi matritsa vazifasini bajargan zanjirdagi timindan 42 taga, adenindan 10 taga kam, guanindan esa 8 taga ko‗pligi aniqlandi. Agar i-RNK tarkibida 102 ta sitozin borligi ma‘lum bo‗lsa, DNK qo‗sh zanjiri tarkibidagi sitozin nukleotidlari sonini aniqlang.",
        options: ["A) 110", "B) 102", "C) 272", "D) 212"],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 15,
        question: "Meyozga xos bo`lmagan jarayoni ko`rsating.",
        options: [
          "A) mikrosporani hosil bo`lishi, glidechiya tuxum hujayrasini hosil bo`lishi",
          "B) arxeosporani bo`linishi, belugani spermatazoidini hosil bo`lishi",
          "C) vegetativ chang hujayrasini hosil bo`lishi, mikrosporani bo`linishi",
          "D) oqquyruq tuxum hujayrasini hosil bo`lishi",
        ],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 16,
        question:
          "Bolalarda bo‗y o‗sishi (akseleratsiya) yildan yilga yaxshilanib bormoqda. Gollandiyada 1890-1990-yillar oralig'idagi 18 yoshli o'smirlar bo‗yining o'rtacha uzunligi tekshirilganda har o‗n yilda bu ko‗rsatkich 0,6 cm oshganligi va 1890-yilda o'smirlar bo'yining o'rtacha uzunligi 166 cm bo'lganligi aniqlandi. Ushbu grafikdan foydalanib 1950-yildagi o'smirlar bo'yining o'rtacha uzunligi qaysi javobda to'g'ri ifodalangan?",
        options: ["A) d", "B) с", "C) f", "D) e"],
        correctAnswer: "B",
      },
      {
        id: 17,
        number: 17,
        question: "Yarimoysimon klapanlar...",
        options: [
          "A) qonni chap bo‗lmachadan chap qorinchaga o‗tkazadi",
          "B) o‗pka venalari va yurakning o‗ng qorinchasi o‗rtasida joylashgan",
          "C) qonni aorta qon tomiridan chap yurak qorinchasiga qaytishiga to‗sqinlik qiladi",
          "D) o‗ng qorincha va chap qorinchalar orasida bo‗lib, arteriya va vena qon tomirlarining aralashib ketishining oldini oladi",
        ],
        correctAnswer: "B",
      },
      {
        id: 18,
        number: 18,
        question: "Hayvonlarning muhit sharoiti o‗zgarishiga moslanish mexanizmlaridan biri . . .",
        options: ["A) metabolizm", "B) fototaksis", "C) migratsiya", "D) fotoperiodizm"],
        correctAnswer: "B",
      },
      {
        id: 19,
        number: 19,
        question:
          "Moddalar va energiyaning davriy aylanishi (1), dastlabki evolyutsion o‗zgarishlar (2), energiyani to‗plash va taqsimlash (3) jarayonlari tiriklikning qaysi darajalariga xos? a) hujayra; b) populyatsiya; c) biogeosenoz; d) molekula; e) biosfera",
        options: ["A) 1-e, 2-b, 3-c", "B) 1-a, 2-b, 3-c", "C) 1-e, 2-d, 3-a", "D) 1-b, 2-a, 3-c"],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question:
          "Avtotrof (a) va geterotrof (b) usulda oziqlanishuvchi zaharli organizmlarni aniqlang. 1) shampinion; 2) bangidevona; 3) sariq soxta qo‗ziqorin; 4) oq qo‗ziqorin; 5) kanakunjut; 6) qizil muxomor; 7) aloe; 8) mingdevona.",
        options: [
          "A) a - 5, 7; b - 3, 4",
          "B) a - 2, 5; b - 1, 6",
          "C) a - 2, 8; b - 3, 6",
          "D) a - 5, 8; b - 4, 6",
        ],
        correctAnswer: "D",
      },
      {
        id: 21,
        number: 21,
        question:
          "Pomidor o‗simliginda shoxlarini uzunligi bilan mevasini shaklini ifodalovchi genlar to‗liq birikkan holatda irsiylanadi. H-uzun poya, D-yumoloq meva, h- kalta poya, d-noksimon meva, yuzaga chiqaruvchi genlar orqali rivojlanadi. Tajribada F bilan taxliliy chatishtirish 1 o‗tkazilsa nechta fenotipik sinf yuzaga keladi ?",
        options: ["A) 5", "B) 2", "C) 4", "D) 9"],
        correctAnswer: "D",
      },
      {
        id: 22,
        number: 22,
        question: "Safsan xurmosi qaysi oilaga (a), xolmon isirg‘aguli qaysi sinfga (b) mansub?",
        options: [
          "A) a – qoqio‘tdoshlar; b – bir urug‘pallalilar",
          "B) a – xurmodoshlar; b – lolasimon",
          "C) a – ikki urug‘pallalilar; b – jo‘xori",
          "D) a – xurmodoshlar; b – loladoshlar",
        ],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 23,
        question:
          "Quyidagilardan tabiiy tanlanish natijasida paydo bo‗lgan organizmlarni aniqlang. 1) Qora-ola; 2) Gereford; 3) Yevropa turi; 4) Lekgorn; 5) latimeriya; 6) turman.",
        options: ["A) 3, 5", "B) 4, 6", "C) 3, 4", "D) 1, 2"],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question:
          "Omborda saqlanayotgan donning 1/3 qismini mitalar populyatsiyasi qolgan qismini esa, sichqonlar populyatsiyasi iste‘mol qilgani ma‘lum bo‘lsa, va shu ombordagi ikklamchi konusmentlarning massasi umumiy 4,5 kg semirgani ma‘lum bo‘lib, sichqonlar va mitalar populyatsiyasi iste‘mol qilgan donlarning farqi 150 kg ga teng bo‘lsa, sichqonlar populyatsiyasi qanchaga semirganini hisoblang.",
        options: ["A) 15 kg", "B) 30 kg", "C) 40 kg", "D) 25 kg"],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 25,
        question:
          "Agar o‘simlikning bitta tupi 50% ♀ va 50% ♂ gulli (a), 100% ♀ va 100% ♂ gulli (b) va bitta guli 50% ♀ va 50% ♂ (c) jinsli bo‘lsa u xolda o‘simlik qanday yo‘l bilan changlanishi mumkin? 1) o‘z-o‘zidan; 2) chetdan; 3) sun‘iy",
        options: [
          "A) a- 3; b- 1; c- 2,3",
          "B) a- 2,3; b- 2; c- 1,2",
          "C) a- 1; b-1,3; c-3",
          "D) a- 1,2; b-2,3; c-2",
        ],
        correctAnswer: "B",
      },
      {
        id: 26,
        number: 26,
        question:
          "Morgan va uning shogirdlari aniqlagan hodisalar qaysi javobda to‗g‗ri ko‗rsatilgan? 1) belgilarning mustaqil irsiylanish qonuni; 2) belgilarning birikkan holda irsiylanish qonuni; 3) irsiyatning xromosoma nazariyasi; 4) jinsga bog‗liq holda irsiylanish; 5) tahliliy chatishtirish; 6) gametalar sofligi gipotezasi; 7) bir xromosomada joylashgan genlarning ajralishi mumkinligi",
        options: ["A) 1, 3, 4, 5", "B) 2, 3, 4, 7", "C) 2, 5, 6, 7", "D) 1, 3, 5, 6"],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 27,
        question:
          "Yurak Qisqichbaqasimonlarda (I) …. , o‘rgimchaksimonlarda (II)…joylashgan 1) orqa tomonida, 2) qorin tomonida, a) boshko‘krakning; b) qorin bo‘limining",
        options: ["A) I-a-1; II-b-2", "B) I-a-1; II-b-1", "C) I-b-1; II-a-2", "D) I-a-2; II-b-1"],
        correctAnswer: "B",
      },
      {
        id: 28,
        number: 28,
        question: "Bakteriya, zamburug‘, o‘simlik va hayvon hujayrasi uchun umumiy jihatni toping?",
        options: [
          "A) Hujayra qobig‘ining tuzilishi",
          "B) Pinositoz jarayonni amalga oshishi",
          "C) Golji apparatini yadro atrofida joylashishi",
          "D) Umumiy organoidlarning barchasini mavjudligi",
        ],
        correctAnswer: "B",
      },
      {
        id: 29,
        number: 29,
        question:
          "Quyidagi bog‘lanishlarni to‘g‘ri jutlang. 1) o‘txo‘r xayvonlarni oziqlanishi; 2) urg‘ochi qoraqurtni urug‘langandan keyingi oziqlanishi; 3) mog‘or zamburug‘ini antibiotiklar ishlab chiqarishi; 4) o‘simliklarning hashorotlarni tutishga moslanishlari; 5) gorchak baliq bilan molyuskaning munosabati; 6) aktiniya bilan qisqichbaqa munosabati a) hamsoyalik, b) protokooperatsiya, c) amensalizm, d) yirtqichlilik,",
        options: [
          "A) 1,2,4-d, 3-c, 5-a, 6-b",
          "B) 1,4-d, 2,3-b, 5-a, 6-b",
          "C) 2,3-a, 1,4-b, 5-b, 6-a",
          "D) 1,4-a, 2,3-b, 5-b, 6-a",
        ],
        correctAnswer: "C",
      },
      {
        id: 30,
        number: 30,
        question:
          "Barglari poyasida qarama - qarshi (a) va halqa hosil qilib (b) o'rnashgan ildizpoyali o'simliklarni aniqlang.",
        options: [
          "A) a - nastarin; b - sambitgul",
          "B) a - yalpiz; b - qirqbo'g'im",
          "C) a - shirinmiya; b - qirqbo'g'im",
          "D) a - rayhon; b - qumrio't",
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 5,
    title: "Variant 5",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Qarag`ay toifa bo`limiga mansub o`simliklar organlarining tuzilishi haqida to`g`ri ma`lumotlarini aniqlang.",
        options: [
          "A) oddiy qarag`ayning urug`chilik qubbalaridagi tangachalarda 2 tadan chang donasi yetiladi",
          "B) sekvoyadendronning tuxum hujayrasi urug`chili qubbachalaridagi arxegonida yetiladi",
          "C) hayotiy shakli daraxt, buta va o‘t o`simlikdan iborat bo`lib, urug`chilik qubbalarida ochiq holda yetiladi",
          "D) barglari och yashil tusda ignasimon hamisha novdada 2 tadan iboorat joylashgan",
        ],
        correctAnswer: "B",
      },
      {
        id: 2,
        number: 2,
        question:
          "To‗g‗ri ma‘lumotlar keltirilgan javobni aniqlang. 1) ayrim jinsli organizmlarda jinslar nisbati odatda 1:1 ni tashkil etadi; 2) ma‘lum birikish guruhga kirgan gеnlarning joylashish tasviri gеnеtik xarita dеyiladi; 3) genlar xromosomada bir-biriga qancha uzoq joylashsa chalkashganda ular shuncha kam ajraladi; 4) drozofila pashshasining 4 ta xromosomasida 500 gen joylashgan; 5) kumulyativ polimeriyada duragaylarda belgining har xil darajada rivojlanishi dominant genlarning soniga bog‗liq bo‗ladi.",
        options: ["A) 2, 3, 5", "B) 1, 3, 4", "C) 1, 4, 5", "D) 2, 3, 4"],
        correctAnswer: "C",
      },
      {
        id: 3,
        number: 3,
        question:
          "Protenor uchun mos keladigan to‘g‘ri javobni toping. 1) oshqazoni ikki bo‘lmali bo‘ladi, 2) oshqazoni to‘rt bo‘lmali bo‘ladi, 3) tishlari ixtisoslashgan, 4) tishlar rivojlanmagan, 5) yuragi to‘rt kamerali, 6) oyoqlari bo‘g‘imlarga bo‘lingan, 7) zaharli moddalar almashinuvi mahsulotlari kiristallangan holda tashqi muhitga chiqariladi",
        options: ["A) 1,4,5", "B) 2,3,5", "C) 6,7", "D) 1,5,7"],
        correctAnswer: "C",
      },
      {
        id: 4,
        number: 4,
        question:
          "Quyida qon tomir jarohatlanganda qonning ivish sxemasi keltirilgan. Raqamlar bilan berilgan qismlar uchun to`g`ri javobni tanlang.",
        options: [
          "A) 1- fibrinogen oqsili erimaydigan fibringa aylanadi.",
          "B) 2- jigardan geparin ishlab chiqariladi",
          "C) 3- protrombin fermenti trombinga aylanadi",
          "D) 2- tromboplastin fermenti trombinga ta`sir etadi va protrombinga aylanadi.",
        ],
        correctAnswer: "A",
      },
      {
        id: 5,
        number: 5,
        question:
          "O‘quvchilar ekuskursiya vaqtida A va B o‘simliklarning gultuzilishini taqqoslab o‘rganishdi. A o‘simlikni gulida gultojibargalar gulkosachabarglardan 2 marta uzunligi, changchilari ko‘p, iplari esa qo‘shilganligini, B o‘simlikda esa gulbandi gulqo‘rg‘onidan bir necha marta uzunligi va changchilarini ikkita halqada 3 tadan joylashganligini aniqlashdi. O‘rganilgan A va B o‘simliklarni aniqlang.",
        options: [
          "A) A-achambiti;",
          "B) tabiiy tok B) A-yerbag‘ir tugmachagul; B- bosh piyoz",
          "C) A-oddiylavlagi; B- o‘tloqsebarga",
          "D) A-yovvoyi sabzi; B-na‘matak",
        ],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question: "Manta (a); forel (b); beluga (c) qaysi turkum vakillari hisoblanadi?",
        options: [
          "A) a- skatlar, b- lossosimonlar; c- bakra baliqlar",
          "B) a- tog‘ayli baliqlar; b- losossimonlar; c- suyak tog‘ayli baliqlar",
          "C) a- akulalar; b- lasossimonlar; c- bakra baliqlar",
          "D) a- skatlar; b- karpsimolar; c- bakra baliqlar",
        ],
        correctAnswer: "D",
      },
      {
        id: 7,
        number: 7,
        question:
          "Kartoshkaning poyasini uzunligi bir juft polimer genlar (C va C ) bilan belgilanadi. Dominant gomozigotalar 1 2 formaning poyasining uzunligi 32 sm, retsessiv gomozigotali formaning uzunligi 16 sm bo‗lsa, F2 da olingan 320 ta o‗simlikdan nechtasi 20 sm li poyali o‗simliklar bo‗ladi ?",
        options: ["A) 160", "B) 20", "C) 80", "D) 40"],
        correctAnswer: "D",
      },
      {
        id: 8,
        number: 8,
        question:
          "Vertitsill zamburug‗i uchun mos keluvchi ma‘lumotlar to‗g‗ri ko‗rsatilgan javobni aniqlang. 1) hujayra qobig‗i sellulozadan iborat; 2) prokariot organizm; 3) tanasi vegetativ organlarga bo‗linmagan; 4) ular uchun ozuqa, harorat va yorug‗lik yetarli bo‗lishi kerak; 5) spora orqali ko‗payadi; 6) geterotrof organizm.",
        options: ["A) 2, 6", "B) 3, 4", "C) 1, 5", "D) 3, 5"],
        correctAnswer: "D",
      },
      {
        id: 9,
        number: 9,
        question:
          "Quyida bir oilaning nasl-nasabi (shajarasi) ifodalangan. Ushbu oila uchun to‗g‗ri fikrni aniqlang.",
        options: [
          "A) ona taram-taram sochli, o‗g‗il va qizning sochlari silliq bo‗lishi mumkin",
          "B) ona to‗lqinsimon sochli, ota va qizining sochi jingalak bo‗lishi mumkin",
          "C) ona, ota va o‗g‗ilning sochi to‗lqinsimon bo‗lishi mumkin",
          "D) ota taram-taram sochli, ona, o‗g‗il va qizning sochlari jingalak bo‗lishi mumkin",
        ],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question:
          "Shimpanzening epiteliy hujayrasida kechadigan mitoz jarayonining metafaza davrida jami xromasomalar soni (a), xromatidalar soni (b), hujayra markazi soni (c), sentriolalar soni (d) ni aniqlang.",
        options: [
          "A) a- 96 b- 96 c- 2 d- 4",
          "B) a- 48 b- 96 c- 2 d- 4",
          "C) a- 48 b- 48 c- 2 d- 4",
          "D) a- 48 b- 96 c- 1 d- 4",
        ],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 11,
        question:
          "Qizilko‘z qon aylanish sistemasida venoz qon ... (I) va arterial qon ... (II). Nuqtalar o‗rniga mos keluvchi to‗g‗ri ma‘lumotlar ko‗rsatilgan javobni belgilang. 1) jabralardan orqa aortaga o‗tadi; 2) qorin aortasidan tana organlariga boradi; 3) qorinchadan qorin aortasiga o‗tadi; 4) orqa aortadan organlarga boradi; 5) qorinchadan orqa aortaga o‗tadi; 6) orqa aortadan jabralarga boradi; 7) jabralardan qorin aortasiga o‗tadi; 8) qorin aortadan jabra arteriyalarga o‗tadi.",
        options: [
          "A) I - 4, 8; II - 5, б",
          "B) 1-3, 8; I I - 1,4",
          "C) I - 3, 4; II - 1, 8",
          "D) I- 2, 8; II- 3, 7",
        ],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 12,
        question: "Jadvaldan no‘to‘g‘ri javobni aniqlang.",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correctAnswer: "B",
      },
      {
        id: 13,
        number: 13,
        question:
          "Spermatogenezning yetilish davrida I meyozdan keyin hosil bo‗lgan hujayra nima deb ataladi va uning tarkibidagi xromosoma nabori qanaqa bo‗ladi?",
        options: [
          "A) ikkilamchi spermatotsit, 1n",
          "B) ikkilamchi spermatotsit, 2n",
          "C) spermatida, 1n",
          "D) birlamchi spermatotsit, 1n",
        ],
        correctAnswer: "B",
      },
      {
        id: 14,
        number: 14,
        question:
          "Urg'ochilarida mitozning anafaza davrida hujayra qutblariga bir xil (a) va har xil (b) jinsiy xromosomalar tarqaladigan yirtqich organizmlarni belgilang. 1) kalxat; 2) qunduz; 3) qaldirg'och; 4) tulki; 5) gepard; 6) qashqaldoq; 7) qarchig'ay; 8) ukki",
        options: [
          "A) a-2, 4, 5; b-1, 7, 8",
          "B) a-1, 3, 8; b-2, 6, 5 С) a-1, 7, 8; b-2, 4, 5 D) a-1, 6, 8; b-3, 4, 7",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 15,
        question: "Qaysi modda hujayra membranasi tarkibiga kiradi?",
        options: [
          "A) kraxmal",
          "B) fosfolipidlar",
          "C) lipidlar va sellyuloza",
          "D) nuklein kislota va lipidlar",
        ],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 16,
        question:
          "Gelekonius uchun mos keladigan to‘g‘ri javobni toping. 1) oshqazoni ikki bo‘lmali bo‘ladi; 2) oshqazoni to‘rt bo‘lmali bo‘ladi; 3) tishlari ixtisoslashgan; 4) tishlar rivojlanmagan; 5) yuragi to‘rt kamerali; 6) oyoqlari bo‘g‘imlarga bo‘lingan; 7) zaharli moddalar almashinuvi mahsulotlari kiristallangan holda tashqi muhitga chiqariladi",
        options: ["A) 1,4,5", "B) 2,3,5", "C) 6,7", "D) 1,5,7"],
        correctAnswer: "A",
      },
      {
        id: 17,
        number: 17,
        question:
          "Fransuz olimi Lui Paster quyidagicha tajriba o'tkazdi. Ikkita kolbada go'sht qaynatib, birinchi idish og'zini ochiq qoldirdi. Ikkinchi idishga «S» shaklidagi naycha uladi. Uch kundan so‘ng tekshirilgan tajriba hulosasi qanday bo‘lgan va sababini to‘g‘ri izohlang.",
        options: [
          "A) birinchi idishdagi qaynatmaning aynib qolgan, unga bakteriyalar tushgan",
          "B) ikkinchi idishdagi qaynatmaning buzilmagan, unga havo kirmagan",
          "C) ikkinchi idishdagi qaynatmaning buzilmagan, unga faqat bakteriya sporalari tushgan",
          "D) birinchi idishdagi qaynatmaning aynib qolgan, unga bakteriyalar tusha olmagan",
        ],
        correctAnswer: "C",
      },
      {
        id: 18,
        number: 18,
        question:
          "Bir uylik bir yillik (a), ikki uylik bir yillik (b) bir uylik ko‘p yillik (c) va ikki uylik ko‘p yillik (d) gametofitga ega o‘simliklarni ajrating. 1) Zarafshon archa; 2) dala qirq bo‘g‘im; 3) zuhrasoch; 4) oddiy qarag‘ay; 5) funariya yo‘sini",
        options: [
          "A) a-5; b-2; c-4; d-1",
          "B) a-5; b-4; c-3; d-2",
          "C) a-2; b-5; c-3; d-4",
          "D) a-3; b-2; c-4; d-1",
        ],
        correctAnswer: "A",
      },
      {
        id: 19,
        number: 19,
        question:
          "Qorabayir va Plimutrok zotlari uchun umumiy bo‗lgan ma‘lumotlarni belgilang. 1) siydik yo‗li kloakaga ochiladi; 2) oshqozoni ikki bo‗lmali; 3) bosh va orqa miya rivojlangan; 4) xordalilar tipiga mansub; 5) embrioni faqat ona organizmida rivojlanadi; 6) yuragi to‗rt kamerali",
        options: ["A) 1, 2, 5", "B) 3, 4, 6", "C) 3, 5, 6", "D) 1, 2, 4"],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question:
          "Quyida berilgan hayvonlarning biosferadagi yashash muhitini aniqlang. a) karakatitsa; b) zaxkash; c) ko‗rsichqon",
        options: [
          "A) a - gidrosfera; b, c - litosfera",
          "B) a, c - gidrosfera; b - litosfera",
          "C) a - gidrosfera; b - litosfera; c - atmosfera",
          "D) a - litosfera; b, c - gidrosfera",
        ],
        correctAnswer: "B",
      },
      {
        id: 21,
        number: 21,
        question:
          "Tayoqchasimon jinsiy xromasomaga ega spermatozoid bilan tayoqchasimon jinsiy xromasomaga ega tuxum hujayraning qo‗shilishidan erkak jinsi hosil bo‗lmaydigan organizmlarni belgilang. 1) drozofila; 2) kayra; 3) shimpanze; 4) gekkon; 5) jigar qurti; 6) arxar; 7) nandu; 8) norka",
        options: ["A) 2, 4, 7", "B) 1, 3, 8", "C) 4, 5, 7", "D) 6, 7, 8"],
        correctAnswer: "A",
      },
      {
        id: 22,
        number: 22,
        question: "Oddiy to‗pgulli (a) va murakkab to‗pgulli (b) o‗simliklarni aniqlang.",
        options: [
          "A) a-olma, shashir, bodiyon; b-qashqarbeda, sebarga, sabzi",
          "B) a-olma, tol, qoqio‗t; b-petrushka, sabzi, ukrop С) a-tol, piyoz, shivit; b-zupturum, ukrop, petrushka B) a-yong‗oq, shashir, bodring; b-nok, ukrop, sabzi",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 23,
        number: 24,
        question:
          "Lama vikuniya va Romanov (qo'y) ichak epiteliysi hujayralaridagi xromosomalar soni yig'indisi 138 taga teng. Lamaning zigotasi uch marta ekvatorial, Romanovning zigotasi 4 marta meridian bo'linishidan hosil bo'lgan blastomerlardagi jami xromosomalar 13568 ta bo'lsa va Romanovning 2n holatidagi xromosomalar soni A o'simlikning kariotipidan tog'olchaning murtakdagi xromosomalar soniga teng holda ko'p. Lamaning 2n holatidagi xromosomalar soni B o'simlikning 2n xromosomalar sonidan herbatseum arxeosporasi xromosomalari soniga teng holda ko'p bo'lsa, A va B o'simlikning 2n holatdagi xromosomalar sonini aniqlang",
        options: ["A) A-32;", "B) 48 B) A-48; B-48", "C) A-52; B-72", "D) A-48; B-52"],
        correctAnswer: "C",
      },
      {
        id: 24,
        number: 25,
        question: "Atavizm hodisasiga misol berilgan javobni aniqlang.",
        options: [
          "A) kitning dumg‗aza va orqa oyoq skeleti qoldiqlari",
          "B) ba‘zan orqasida xira yo‗l-yo‗l chiziqlar bo‗lgan toychalarning tug‗ilishi",
          "C) pashshaning ikkinchi juft qanotlari",
          "D) otning ikkinchi va to‗rtinchi barmoqlari",
        ],
        correctAnswer: "B",
      },
      {
        id: 25,
        number: 26,
        question:
          "No‘xatda donning sariq rangli va silliq bo‘lishi, yashil va burishgan bo‘lishi ustidan to‘liq dominantlik qiladi. Tajriba uchun geterozigota sariq silliq donli no‘xat bilan gomozigota sariq, burishgan donli no‘xat o‘simliklari chatishtirilganda, hosil bo‘ladigan zigotalar (a) va fenotipik sinflar (b) sonini aniqlang.",
        options: [
          "A) a – 4 ta; b – 4 ta",
          "B) a – 8 ta; b – 4 ta",
          "C) a – 4 ta; b – 2 ta",
          "D) a – 16 ta; b – 4 ta",
        ],
        correctAnswer: "D",
      },
      {
        id: 26,
        number: 27,
        question: "Quyidagi rasmda qanday jarayon tasvirlangan?",
        options: [
          "A) Ossilotoriyada gormogoniylar hosil bo‘lishi",
          "B) Achirqi zambrug‘ida jinsiz ko‘payish",
          "C) Rizosferada oddiy ikkiga bo‘linish",
          "D) Oddiy amyobada ikkiga bo‘linishi",
        ],
        correctAnswer: "B",
      },
      {
        id: 27,
        number: 28,
        question:
          "Erkakning otasi daltonizm bo‗yicha sog‗, onasi esa daltonizm bilan kasallangan. Shu erkak somatik hujayrasining mitoz sikli telofazasining sitokinezidan so‗ng hujayradagi d (I), D (II) allellari sonini aniqlang.",
        options: ["A) I-1; II-0", "B) I-2; II-2", "C) I-0; II-2", "D) I-2; II-1"],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 29,
        question:
          "Hujayradagi ATF sintezida qatnashuvchi organoid(lar)ni belgilang. 1) mitoxondriya, 2) lizosoma, 3) xloroplast, 4) Golji maj muasi, 5) endoplazmatik to‗r",
        options: ["A) 1", "B) 2", "C) 2,4,5", "D) 1,3"],
        correctAnswer: "A",
      },
      {
        id: 29,
        number: 30,
        question:
          "Duragaylash yo`nalishidagi yangi turlarning hosil bo`lishiga tegishli javobni toping.",
        options: [
          "A) A turning o`zgarishidan B tur paydo bo`ladi",
          "B) A va B turdan yangi C tur paydo bo`ladi",
          "C) A turning o`zgarishidan A, B va E turlar paydo bo`ladi",
          "D) A turning o`zgarishidan A va B tur hosil bo`ladi",
        ],
        correctAnswer: "C",
      },
      {
        id: 30,
        number: 30,
        question:
          "Genetika qonuniyatlari: Mendelning birinchi va ikkinchi qonunlariga muvofiq F2 bo'g'indagi ajralish nisbatini ko'rsating.",
        options: [
          "A) Monoduragay chatishtirishda fenotip bo'yicha 3:1 nisbat",
          "B) Diduragay chatishtirishda genotip bo'yicha 9:3:3:1 nisbat",
          "C) Chala dominantlikda fenotip bo'yicha 3:1 nisbat",
          "D) Tahliliy chatishtirishda doimo 1:2:1 nisbat",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 6,
    title: "Variant 6",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Qaysi organizm zotlarida zigota jinsining urg‗ochi yoki erkak bo‗lishi erkaklik gametalariga bog‗liq?",
        options: [
          "A) Plimutrok, Nyugempshir, Shortgorn, Pervomaysk",
          "B) Kornuel, Zagorsk, Pervomaysk, Ukraina",
          "C) Simmental, Yaroslavl, Merinos, Gereford",
          "D) Pervomaysk, Pekin, Shvits, Santa-Gertruda",
        ],
        correctAnswer: "A",
      },
      {
        id: 2,
        number: 2,
        question:
          "Ituzumdoshlar oilasi (a), shuvoq turkumi (b), qizil suvo‗tlar bo‗limi (c), lolasimonlar sinfi (d) ga mansub o‗simliklarni aniqlang.",
        options: [
          "A) a − Oloy xiyoli, kartoshka; b − qora jusan, ermon shuvog‗i; c − fillofora, nemalion; d − xolmon, tog‗arpa",
          "B) a − Olga sorbariyasi, pomidor; b − qora jusan, yovshan shuvog‗i; c − porfira, fillofora; d − greyg lolasi, g‗umay",
          "C) a − mingdevona, qalampir; b − oq saksovul, qora saksovul; c − yapon laminariyasi, nemalion; d − qo‗ng‗irbosh, qo‗shbarg piyoz",
          "D) a − qora ituzum, kartoshkagul; b – oq shuvoq, turon shuvog‗i; c − ulva, nemalion; d − olg‗i, nor piyoz",
        ],
        correctAnswer: "C",
      },
      {
        id: 3,
        number: 3,
        question:
          "Genetik kod jadvalida triptofan - UGG, valin - GUU, leysin - UUA, treonin – ACC kodonlar yordamida ifodalansa, quyidagi t-RNK qaysi aminokislotani translatsiya joyiga tashib keltirishini aniqlang.",
        options: ["A) triptofan", "B) valin", "C) treonin", "D) leysin"],
        correctAnswer: "B",
      },
      {
        id: 4,
        number: 4,
        question:
          "Mitaxondriya uchun mos xususiyatlarni aniqlang? 1) energiya almashinuvini uchunchi bosqichida ishtirok etadi, 2) fosfolipidlardan tuzilgan tashqi va ichki membranaga ega, 3) 1 mol sut kislotadan 36 molekula ATF sintezlanadi, 4) irsiy axborat saqlaydi, 5) energiya nisbati 1:1; almashinuvining birinchi bosqichida ishtirok etadi, 6) jigar hujayrasida glikogen sintezlaydi",
        options: ["A) 3,5", "B) 1,3", "C) 2,4", "D) 4,6"],
        correctAnswer: "C",
      },
      {
        id: 5,
        number: 5,
        question:
          "Temir bakteriyalari (a), ammonifikator bakteriyalar (b), nitrifikator bakteriyalar (c), tugunak bakteriyalar (d) ga xos xususiyatlarni aniqlang. 1) aminokislotalardan ammiak hosil qiladi; 2) geterotrof organizm; 3) xemotrof; 4) produtsent; 5) erkin azotni o‗zlashtiradi; 6) ammiakni nitritga oksidlaydi; 7) anorganik moddalar oksidlanishidan hosil bo‗lgan energiyadan foydalanadi; 8) fototrof; 9) konsument; 10) redutsent; 11) avtotrof organizm; 12) nitritlarni erkin azotgacha qaytaradi",
        options: [
          "A) a-3, 4, 7; b-1, 4, 10; c-4, 6, 7, 12; d-1, 9",
          "B) a-3, 4, 7; b-1, 2, 10; c-3, 6, 7, 11; d-5",
          "C) a-3, 4, 11; b-1, 2, 7; c-3, 4, 6, 7; d-1, 8",
          "D) a-3, 7, 11; b-2, 4, 10; c-3, 6, 7, 9; d-2, 5",
        ],
        correctAnswer: "D",
      },
      {
        id: 6,
        number: 6,
        question:
          "Zarpechakda ildizning yo‗qligi (1), sebarga gulida nektar bezining bo‗lishi (2) qaysi jarayonlarga misol bo‗ladi? a) idioadaptatsiya; b) aromorfoz; c) biologic regress; d) degeneratsiya",
        options: ["A) 1 - b; 2 - a", "B) 1 - d; 2 - a", "C) 1 - c; 2 - b", "D) 1 - d; 2 - b"],
        correctAnswer: "A",
      },
      {
        id: 7,
        number: 7,
        question:
          "Ko‗sak meva hosil qiladigan (a) va qo‗zoq meva hosil qiladigan (b) o‗simliklarini aniqlang.",
        options: [
          "A) a-olma, behi, nok; b-rediska, turp",
          "B) a-g‗o‗za, lola, chuchmoma; b-karam, qurttana, rediska С) a-zarang, qayrag‗och; b-shumtol, turp D) a-boychechak, kungaboqar; b-zarang, shumtol",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 8,
        number: 8,
        question:
          "Odamda ko‗rlikning ikki turi uchraydi. Birinchi turi autosoma dominant holda, ikkinchisi autosoma retsessiv holda avloddan avlodga o‗tadi. Ko‗z qorachig‗ining to‗liq ko‗rinmasligi jinsiy X xromosomaga bog‗liq retsessiv belgi hisoblanadi. Qizning otasi ko‗rlikning ikki turi bilan kasallangan va digomozigota, ko‗z qorachig‗i normal ko‗rinadi, onasi normal ko‗radi, ko‗z qorachig‗i to‗liq ko‗rinmaydi va barcha belgilari bo‗yicha gomozigotali. Shu qiz sog‗lom, ko‗z qorachig‗i to‗liq ko‗rinmaydigan, ko‗rlikning ikkinchi turi bo‗yicha geterozigotali yigitga turmushga chiqdi. Ushbu nikohdan nazariy jihatdan tug‗ilishi mumkin bo‗lgan farzandlarga xos bo‗lgan to‗g‗ri fikrlarni aniqlang. 1) ko‗rlikning faqat birinchi turi bilan kasal, ko‗z qorachig‗i ko‗rinmaydigan farzandlarning ko‗rlikning faqat ikkinchi turi bo‗yicha kasal, ko‗z qorachig‗i normal farzandlarga bo‗lgan nisbati 3:1; 2) ko‗z qorachig‗i ko‗rinmaydigan farzandlarning ko‗z qorachig‗i ko‗rinadigan farzandlarga nisbati 1:2; 3) farzandlar orasida ko‗rlikning ikkala turi bo‗yicha sog‗lom bo‗lib tug‗ilish ehtimoli 25%; 4) ko‗z qorachig‗i ko‗rinadigan, ko‗rlikning faqat birinchi turi bilan kasal farzandlarning tug‗ilish ehtimoli 18,75%; 5) ko‗z qorachig‗i ko‗rinmaydigan, normal ko‗rish qobiliyatiga ega qizlarning ko‗z qorachig‗i normal, ko‗rlikning faqat birinchi turi bilan kasallangan o‗g‗il farzandlarga bo‗lgan 6) ko‗rlikning ikkala turi bo‗yicha kasallangan farzandlarning tug‗ilish ehtimoli 62,5%",
        options: ["A) 1, 4, 5", "B) 3, 5, 6", "C) 2, 4, 6", "D) 1, 2, 3"],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 9,
        question:
          "To‗g‗ri fikrlar berilgan javobni aniqlang. 1) ichki sekretsiya bezlariga gipofiz, epifiz, qalqonsimon, ayrisimon, buyrak usti bezlari kiradi; 2) gipofiz bezidan ajraladigan adrenalin gormoni qo‗rquv vaqtida ko‗p ajraladi; 3) yelkadagi ikki boshli muskulning bo‗shashishi qo‗lni bilakdan bukadi; 4) skelet muskullari odam ixtiyoriga bog‗liq holda ishlaydi; 5) limfa sistemasi ochiq bo‗lib, to‗qima va organlardan boshlanadi.",
        options: ["A) 1, 3, 5", "B) 2, 3, 4", "C) 1, 2, 4", "D) 1, 4, 5"],
        correctAnswer: "B",
      },
      {
        id: 10,
        number: 10,
        question:
          "Quyidagi olimlarning fanga qo‗shgan hissalari to‗g‗ri ko‗rsatilgan javobni aniqlang. a) E.Chermak; b) V.Bеtson; c) G.Shpeman 1) embrional induksiyani kashf etgan; 2) genetika atamasini fanga kiritgan; 3) xromosoma nazariyasini yaratgan; 4) Mendel tadqiqotlarini qayta kashf etgan; 5) embrional divergensiyaga asos solgan.",
        options: [
          "A) a - 3; b - 2; c - 5",
          "B) a - 4; b - 2; c – 5",
          "C) a - 4; b - 2; c - 1",
          "D) a - 4; b - 3; c – 1",
        ],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 11,
        question:
          "Quyidagi sxemada funariya yo‗sinining hayot sikli ifodalangan bo‗lib, X ni aniqlang.",
        options: ["A) tuguncha", "B) sporangiy", "C) ildizpoya", "D) zigota"],
        correctAnswer: "A",
      },
      {
        id: 12,
        number: 12,
        question:
          "Drozofilaga xos bo‗lmagan xususiyatlarni toping. 1) tangachaqanotlilar turkumi vakili; 2) o‗pka xaltasi yordamida nafas oladi; 3) ikkinchi juft qanoti rudiment organ; 4) to‗liq metamorfoz bilan rivojlanadi; 5) laboratoriyasharoitida har 10-15 kunda yangi nasl beradi; 6) ayirish sistemasi malpigi naychalaridan iborat; 7) tanasining rangi va qanotining uzunligi birikkan holda irsiylanadi; 8) qanotlari ko‗krakning orqa tomonidan chiqqan hosila; 9) genlarning birikish guruhi 8 ta; 10) pastki jag‗ va pastki lab qo‗shilib xartumni hosil qiladi",
        options: ["A) 1, 4, 6, 8, 10", "B) 7, 8, 9, 10", "C) 3, 4, 5, 6, 7", "D) 1, 2, 9, 10"],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question:
          "Arilarda qanotining osilib turgan holatda bo'lishini belgilaydigan gen faqat geterozigota holatda (Aa) namoyon bo'lib, gomozigota holatda o'limga olib keladi. Arilarning erkaklari urug`lanmagan tuxumdan rivojlanib, gomozigota (aa) bo'ladi. Osilgan qanotga ega bo'lgan arilarni normal trutenlar bilan chatishtirilganda 1200 ta avlod olingan, shu olingan ayloddan qanchasi nobud bo'lgan?",
        options: ["A) 600 tasi", "B) 400tasi", "C) 300 tasi", "D) 0 tasi"],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 14,
        question:
          "Meyozning qaysi davrida xromatidalarning ajralishi va ularning mustaqil xromosomaga aylanishi kuzatiladi?",
        options: ["A) anafaza I", "B) profaza II", "C) metafaza II", "D) anafaza II"],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 15,
        question:
          "Quyida berilgan orasidan sinflar (a) va tiplarni (b) aniqlang. 1) qisqichbaqasimonlar; 2) qorinoyoqli mollyuskalar; 3) bo‗g‗imoyoqlilar; 4) gidroid poliplar; 5) to‗garak chuvalchanglar; 6) ko‗p tuklilar; 7) falangalar",
        options: [
          "A) a - 1, 4; b - 2, 3",
          "B) a - 2, 6; b - 3, 5",
          "C) a - 1, 7; b - 3, 5",
          "D) a - 4, 6; b - 3, 6",
        ],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 16,
        question: "Quyida rasmda berilgan o`simlikning suv ostidagi barglari qanday shaklda",
        options: [
          "A) ingichka lentasimon",
          "B) patsimon qirqilgan",
          "C) voronkasimon",
          "D) yaxlit",
        ],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question:
          "Qaysi javobda disaxaridlar va ularning bajaradigan funksiyalari to‗g‗ri ko‗rsatilgan? a) laktoza; b) saxaroza; c) maltoza; d) riboza. 1) ATF va RNK molekulalari strukturasini tuzishda ishtirok etadi; 2) unayotgan urug‗ uchun energiya manbayi; 3) hayvonlarda qon ivishiga to‗sqinlik qiladi; 4) glukozaning asosiy manbayi; 5) hayvonlar to‗qimalarida zaxira modda sifatida to‗planadi; 6) sutemizuvchilarning suti tarkibiga kiradi",
        options: ["A) a-6; b-4; d-1", "B) a-6; b-4; c-2", "C) a-2; b-4; c-6", "D) a-5; b-4; c-3"],
        correctAnswer: "D",
      },
      {
        id: 18,
        number: 18,
        question:
          "Yapon laminariyasi (1), ulva (2), porfira (3), nemalion (4) lar qanday suvo‘ti hisoblanadi.",
        options: [
          "A) 1-qo‘ng‘ir, 2-yashil, 3-qizil, 4-qizil",
          "B) 1-qizil,2-yashil,3-qizil, 4-qo‘ng‘ir",
          "C) 1-yashil, 2-qizil, 3-qizil, 4-qo‘ng‘ir",
          "D) 1-qo‘ng‘ir, 2-ko‘k-yashil, 3-qizil, 4-yashil",
        ],
        correctAnswer: "D",
      },
      {
        id: 19,
        number: 19,
        question:
          "Murakkab oqsillar haqidagi ma‘lumotlardan nechtasi to‘g‘ri? 1) tarkibida aminokislotalardan tashqari oqsil bo‘lmagan birikmalar bo‘ladi; 2) lipoproteinlar transport va qurilish vazifasini bajaradi; 3) nukleoprotein oqsil va nuklein kislotaning birikishidan hosil bo‘lgan; 4) nukleoprotein yadro va lizosomaning ajralmas qismi hisoblanadi; 5) gemoglobin oqsili-xromoproteindir; 6) glikoproteinlar- monosaxaridlarning ajralmas qismi hisoblanadi;",
        options: ["A) 4", "B) 6", "C) 5", "D) 3"],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question:
          "Ulotriksning jinsiy (a) jinssiz (b) ko‘payishi bilan bog‘liq jarayonlarni aniqlang. 1) 4 xivchinli zoosporalar, 2) 2 xivchinli zoosporalar, 3) 2 xivchinli izogametalar, 4) 4 xivchinli izogameta, 5) tinim davri, 6)qulay sharoitda kechishi",
        options: [
          "A) a-2, 4; b-5, 7",
          "B) a-5, 6; b-1, 3",
          "C) a-1, 3; b-2, 4",
          "D) a-5, 3; b-1, 6",
        ],
        correctAnswer: "A",
      },
      {
        id: 21,
        number: 21,
        question:
          "Amensalizmga xos bo‘lgan javobni toping 1) bir populatsiya individlari boshqa populatsiya individlari uchun oziq vazifasini o‗taydi, 2) birgalikda yashaydigan organizmning biri ushbu munosabatdan foyda oladi, ikkinchisi hech qanday naf yoki zarar ko‗rmaydi, 3) bir turning faoliyati ikkinchi turga salbiy ta‘sir ko‗rsatadi, 4) Asalarilar gulli o‗simliklardan o‗ziga oziq (chang, nektar) olish davomida o‗simliklarni changlantiradi, 5) Mog‗or zamburug‗lari tashqi muhitga antibiotiklar ishlab chiqarib, bakteriyalarning o‗sishini va ko‗payishini to‗xtatib qo‗yadi",
        options: ["A) 1,5", "B) 2,4", "C) 3,5", "D) 2,3"],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 22,
        question:
          "Teng yelkali (a), tayoqchasimon (b) va teng bo‘lmagan yelkali (c) xromosoma shakllarini nomi bilan to‘g‘ri juftlab yozing.",
        options: [
          "A) a-akrosentrik, b-metasentrik, c-submetasentrik",
          "B) a-metasentrik, b-submetasentrik, c-akrosentrik",
          "C) a-metasentrik, b-akrosentrik, c-submetasentrik",
          "D) a-submetasentrik, b-akrosentrik, c-metasentrik",
        ],
        correctAnswer: "C",
      },
      {
        id: 23,
        number: 23,
        question:
          "Odamlarda katarakta va polidaktiliya autasomada joylashgan dominant gen tomonidan yuzaga chiqariladi. Bu genlar o‗zaro to‗liq bo‗g‗langan. Oilada tug‗ulgan farzandlaming 25 % i digomozigota dominant, 50% i digeterozigota, 25% i digomozigota retsessiv genotipli bo‗lgan. Nikoxlangan insonlarning ota-onasini genotipini toping?",
        options: ["A) AABB x aabb", "B) AaBb x Aabb", "C) AaBb x aaBb", "D) AaBb x AaBb"],
        correctAnswer: "C",
      },
      {
        id: 24,
        number: 24,
        question: "Rasmda tasvirlangan mitoz bosqichini aniqlang.",
        options: ["A) profaza", "B) metafaza", "C) telofaza", "D) anafaza"],
        correctAnswer: "D",
      },
      {
        id: 25,
        number: 25,
        question:
          "Na‘matak va qarag‗ayga xos bo‗lgan umumiy tushunchalarni aniqlang. 1) fitosenoz vakili; 2) murtak xalta; 3) urug‗; 4) fitofag; 5) urug‗kurtak; 6) tuguncha",
        options: ["A) 1, 3, 5", "B) 2, 4, 6", "C) 2, 3, 4", "D) 1, 5, 6"],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 26,
        question:
          "Berilgan hayvonlarning yurak faoliyatiga xos ma‘lumotlar to‗g‗ri keltirilgan javobni aniqlang. a) arxar; b) churrak",
        options: [
          "A) a − chap bo‗lmachadagi qonda kislorodning konsentratsiyasi karbonat angidridga nisbatan past bo‗ladi; b − o‗ng qorinchadagi qonda karbonat angidridning konsentratsiyasi kislorodga nisbatan past bo‗ladi",
          "B) a − o‗ng bo‗lmachadagi qonda kislorodning konsentratsiyasi karbonat angidridga nisbatan yuqori bo‗ladi; b − o‗ng qorinchadagi qonda karbonat angidridning konsentratsiyasi kislorodga nisbatan past bo‗ladi",
          "C) a − o‗ng bo‗lmachadagi qonda kislorodning konsentratsiyasi karbonat angidridga nisbatan past bo‗ladi; b − chap qorinchadagi qonda karbonat angidridning konsentratsiyasi kislorodga nisbatan past bo‗ladi",
          "D) a − chap bo‗lmachadagi qonda kislorodning konsentratsiyasi karbonat angidridga nisbatan past bo‗ladi; b − chap qorinchadagi qonda karbonat angidridning konsentratsiyasi kislorodga nisbatan past bo‗ladi",
        ],
        correctAnswer: "B",
      },
      {
        id: 27,
        number: 27,
        question:
          "Bakteriya yoki zamburug‗ bo‗linganida qiz hujayralar orasida tasodifiy ravishda taqsimlanadigan plazmid haqidagi to‗g‗ri fikrni aniqlang.",
        options: [
          "A) asosiy xromosomaga birika olmaydi",
          "B) plazmidning genlari asosiy xromosoma genlari bilan birikkan holda nasldan naslga beriladi",
          "C) asosiy xromosomalardan mustaqil ravishda o‗z-o‗zini replikatsiya yo‗li bilan ko‗paytira olmaydi",
          "D) asosiy xromosomaning maxsus DNK izchilligini kesib, rekombinatsiya bo‗la oladi",
        ],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 28,
        question: "Quyidagi hasharotning xartumi qanday hosil bo`ladi",
        options: [
          "A) pastli lab va pastki jag`ning qo`shilishidan",
          "B) pastki lab va jag`lari o`zgarib naysimon xartum hosil qiladi",
          "C) pastki labini uchi qalinlashib yostiqchasimon xartum",
          "D) xartumi bo`lmaydi",
        ],
        correctAnswer: "D",
      },
      {
        id: 29,
        number: 29,
        question:
          "Labaratoriyada 3 ta volvoks koloniyasi mavjud, ikkinchi volvoks koloniyasi birinchisiga nisbatan 10 ta kam noksimon hujayra saqlaydi, uchinchi volvoks koloniyasi esa ikkinchi volvoks koloniyasidan 10 ta kam noksimon hujayra saqlab, 3 ta koloniyadagi jami xivchinlar 540 ta bo‘lsa, ikkinchi volvoks koloniyasidagi jami noksimon hujayralar umumiy hujayralarni qancha qismini tashkil etadi",
        options: ["A) 3/4", "B) 3/5", "C) 2/3", "D) 1/3"],
        correctAnswer: "A",
      },
      {
        id: 30,
        number: 30,
        question:
          "Odam organizmidagi sekretsiya bezlari ishlab chiqaradigan biologik faol moddalar va ularga xos xususiyatlarni juftlab ko‗rsating. a) paratgormon; b) tiroksin; c) insulin; d) somatotrop. 1) asab tizimi funksional normal takomillashuvini ta‘minlaydi; 2) miqdori normadan kamaysa nerv muskul sistemasining qo‗zg‗aluvchanligi ortadi; 3) oqsillar sintezlanishini boshqaradi; 4) jinsiy bezlar funksiyasini pasaytiradi; 5) uglevod almashinuvini boshqaradi; 6) limfositlar hosil bo‗lishini kuchaytiradi; 7) qondagi ortiqcha glukozani kamaytiradi; 8) rearbsorbsiya jarayonini kuchaytiradi; 9) miqdori normadan ortsa nerv muskul sistemasining qo‗zg‗aluvchanligini pasayadi; 10) jigarda glikogen miqdorini kamaytiradi",
        options: [
          "A) a-2, 9; b-1; c-5, 7",
          "B) b-1, 6; c-1, 10; d-5",
          "C) a-2; b-7, 10; c-3, 4",
          "D) a-10; b-5, 7; c-3",
        ],
        correctAnswer: "C",
      },
    ],
  },
  {
    id: 7,
    title: "Variant 7",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "O‗simliklarning hayot sikli bosqichlariga mos xarakterli jihatlari to‗g‗ri ko‗rsatilgan javobni aniqlang. Hayot sikli bosqichlari: a) suv qirqqulog‗ining sporofiti; b) funariyaning sporofiti; c) dala qirqbo‗g‗imining sporofiti; d) zuhrasochning gametofiti. Xarakterli jihatlari: 1) sporadan rivojlanadi; 2) generativ novdaga ega; 3) murtak hosil qiladi; 4) tuxum hujayra hosil qiladi; 5) zigota hosil qiladi; 6) poya-bargli o‗simlik; 7) spora hosil qiladi; 8) barglari patsimon qirqilgan; 9) anteridiy hosil qiladi; 10) zigotadan rivojlanadi; 11) sporangiyga ega; 12) sporali ko‗sakcha; 13) fototrof organizm; 14) rizoid hosil qiladi; 15) barglari mayda; 16) qo‗shimcha ildizga ega",
        options: [
          "A) a − 7, 11, 13; b − 7, 11, 12; c − 7, 11, 16; d − 4, 5, 9, 13, 14",
          "B) a − 3, 6, 7, 13; b − 7, 11, 14; c − 2, 6, 7, 11, 15; d − 3, 5, 8, 13, 14",
          "C) a − 3, 6, 10, 13; b − 10, 11, 12; c − 3, 6, 7, 10, 15, 16; d − 1, 4, 6, 13, 14",
          "D) a − 6, 7, 10, 11; b − 7, 10, 12; c − 3, 6, 7, 10, 13, 16; d − 1, 4, 5, 7, 9, 14",
        ],
        correctAnswer: "B",
      },
      {
        id: 2,
        number: 2,
        question: "Quyidagi sxema asosida qanday atom davriy aylanishi kuzatiloyotganini aniqlang.",
        options: ["A) azot", "B) uglerod", "C) vodorod", "D) kislorod"],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question:
          "AaBb genotipli organizmlar o‘zaro chatishtirilganda olingan organizmlar necha foizi o‘ziga o‘xshagan genotipli oganizm bilan chatishtirilganda genotipda 1;2;1;2;4;2;1;2;1 nisbatda ajalish kuzatiladi?",
        options: ["A) 50%", "B) 18,75%", "C) 25%", "D) 75%"],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 4,
        question:
          "Salamandraga xos bo‗lgan xususiyatlarni aniqlang. 1) to‗sh va qovurg‗alari o‗zaro tutashib ko‗krak qafasini hosil qiladi; 2) gastrulatsiya jarayoni urg‗ochi organizmda kechadi; 3) ontogenez jarayoni bilvosita amalga oshadi; 4) triton bilan bir turkumga mansub; 5) povituxa bilan bir turkumga mansub",
        options: ["A) 2, 5", "B) 2, 4", "C) 1, 3", "D) 3, 4"],
        correctAnswer: "A",
      },
      {
        id: 5,
        number: 5,
        question:
          "Quyidagi holatlar o‗zgaruvchanlikning qaysi turiga misol bo‗lishini aniqlang. 1) daltonizm kasalligi; 2) translokatsiya hodisasi; 3) odamda ortiqcha barmoqlilik; 4) inversiya hodisasi; 5) tamakining 24, 48, 72 xromosomali turlarining borligi; 6) karamning poliploid navlarining mavjudligi; a) xromosoma mutatsiyasi; b) gen mutatsiyasi; c) genom mutatsiyasi",
        options: [
          "A) a − 4, 5; b − 2, 3; c − 1, 6",
          "B) a − 1, 4; b − 3, 5; c − 2, 6",
          "C) a − 2, 4; b − 1, 3; c − 5, 6",
          "D) a − 2, 6; b − 1, 4; c − 3, 5",
        ],
        correctAnswer: "C",
      },
      {
        id: 6,
        number: 6,
        question: "Jadvaldagi noma‘lum X o‗rniga mos keluvchi javobni aniqlang.",
        options: ["A) gulxayridoshlar", "B) ituzumdoshlar", "C) ra‘nodoshlar", "D) loladoshlar"],
        correctAnswer: "B",
      },
      {
        id: 7,
        number: 7,
        question:
          "Makkajo'xori o'simligining normal bo'yi ikkita dominant noallel genlar orqali boshqariladi. Retsessiv allellarning bir yoki ikki xili gomozigota holatda uchrasa, o'simlik bo'yining past bo'lishiga olib keladi. Past bo'yli makkajo'xorilar chatishtirilishidan normal bo'yga ega bo'lgan o'simlik olindi va ushbu duragaylarning o'zaro chatishtirish natijasida avlodda 902 ta normal, 703 ta past bo'yli o'simlik olindi. Past bo'yga ega bo'lgan o'simliklar nechta genotipik guruh hosil qiladi.",
        options: ["A) 5", "B) 3", "C) 4", "D) 2"],
        correctAnswer: "D",
      },
      {
        id: 8,
        number: 8,
        question:
          "Quyida keltirilgan hujayra tuzilmalariga xos xususiyatlar to‗g‗ri juftlangan javobni aniqlang. a) lizosoma; b) mitoxondriya; c) ribosoma; d) endoplazmatik to‗r; e) xloroplast. 1) RNKni nukleotidlargacha parchalaydi; 2) DNK ga ega; 3) glikogenni sintezlaydi; 4) Esherichia coli hujayrasida uchraydi; 5) uglevodni sintezlaydi; 6) zarpechak hujayrasida uchraydi; 7) Golji majmuasidan hosil bo‗ladi; 8) anabolizm jarayonida ishtirok etadi; 9) EcoRI ni sintezlaydi; 10) sut kislotani oksidlaydi; 11) polimerazani sintezlaydi; 12) katabolizm reaksiyalarida ishtirok etadi; 13) ikki qavat membranaga ega; 14) kollenxima hujayrasida uchraydi; 15) fag tarkibida uchraydi; 16) oqsillarni aminokislotagacha parchalaydi",
        options: [
          "A) a-1, 14, 16; b-6, 10, 13; c-6, 8, 11, 14; d-13, 4, 8, 9; e-2, 5, 6, 14, 13",
          "B) a-1, 14, 16; b-2, 6, 13; c-6, 8, 11, 14, 15; d-3, 7, 9; e-2, 5, 13, 14",
          "C) a-1, 7, 12, 16; b-2, 6, 10; c-4, 6, 8, 9, 11, 14; d-5, 6, 8; e- 2, 5, 8, 14",
          "D) a-7, 10, 16; b-2, 6, 12; c-6, 8, 11, 14, 15; d-3, 8, 9; e-2, 5, 8, 14",
        ],
        correctAnswer: "B",
      },
      {
        id: 9,
        number: 9,
        question: "Jadval asosida keltirilgan ma`lumotlar to`g`ri juftlangan javobni toping.",
        options: ["A) 1-c, 2-d", "B) 1-b, 3-c", "C) 4-a, 3-b", "D) 2-d, 3-b"],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question:
          "Quyidagi tasvirda m‘lum bir DNK ning 1/5 qismi berilgan. Bunga ko‘a to‘liq DNK tarkibidagi vodorod bog‘lar (I) va pirimidin asoslari (II) sonini aniqlang.",
        options: [
          "A) I – 15; II – 30",
          "B) I – 30; II – 35",
          "C) I – 35; II – 30",
          "D) I – 35; II – 15",
        ],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 11,
        question:
          "Nargis va lola (I), tugmachagul va g‗o‗za (II) o‗simliklari qaysi xususiyatlariga ko‗ra bir bo‗limga (a), bir sinfga (b) va bir oila (c) ga birlashtiriladi? 1) meva hosil qiladi; 2) gullari ikki jinsli; 3) changchilari oltita; 4) ildiz tizimi qo‗shimcha va yon ildizlardan iborat; 5) murtagi bir urug‗li; 6) barglari novdada ketma-ket o‗rnashgan; 7) gulqo‗rg‗oni oddiy; 8) o‗tkazuvchi naylarga ega; 9) gulli o‗simlik; 10) murtak xaltasiga ega; 11) endospermi triploid; 12) changchilari ko‗p; 13) gulqo‗rg‗oni murakkab; 14) tugunchasi ko‗p urug‗kurtakli; 15) murtagi ikki urug‗pallali; 16) ildiz tizimi asosiy va yon ildizlardan iborat; 17) bargi yonbargli; 18) guli ostkosachali",
        options: [
          "A) I-a-4, 10, 11; b-5, 7, 13; c-2, 6; II-a-2, 8, 11; b-12, 14, 15; c-2, 6, 17, 18",
          "B) I-a-1, 9, 11; b-4, 8; c-3, 6; II-a-1, 9, 11; b-13, 17; c-2, 6, 14, 18",
          "C) I-a-8, 9, 10; b-4, 7; c-2, 3; II-a-1, 10, 11; b-15, 16; c-2, 6, 12, 17",
          "D) I-a-8, 9, 11; b-5, 6; c-3, 7; II-a-1, 8, 9; b-13, 16, 18; c-2, 6, 14",
        ],
        correctAnswer: "A",
      },
      {
        id: 12,
        number: 12,
        question:
          "Quyidagi o‘simliklarni dorivorlik hususiyati bilan juftlang. a) yalpiz; b) aloe; d) shirinmiya 1) yosh bolalar shamollaganda ko'proq tavsiya etiladi; 2) bargini qirg'ichda qirib, asal bilan qo'shib iste'mol qilinsa, shamollash, oshqozon-ichak kasalliklarini davolashda foyda beradi; 3) balg'amni ko'chiradi, nafas yo'li kasalliklarining oldini olishda, jigar xastaliklarini davolashda keng qo'llaniladi; 4) mevasi odamning immunitetini oshiradi",
        options: [
          "A) a – 3; b – 4; d – 1",
          "B) a – 2; b – 1; d – 4",
          "C) a – 3; b – 2; d – 1",
          "D) a – 4; b – 3; d – 1",
        ],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question:
          "Eyler-Venn diagrammasidan foydalanib X va Y ni aniqlang. I − gidrofil; II − gidrofob; III − glikozid bog‗i mavjud",
        options: [
          "A) X - maltoza; Y – saxaroza",
          "B) X - saxaroza; Y - kraxmal",
          "C) X - selluloza; Y - laktoza",
          "D) X - maltoza; Y - glukoza",
        ],
        correctAnswer: "B",
      },
      {
        id: 14,
        number: 14,
        question:
          "Komplementar irsiylanishga xos bo‗lmagan belgilarni aniqlang 1) makkajo‗xori so‗tasining uzunligini irsiylanishi; 2) genotipik jihatdan 9 ta guruh hosil bo‗ladi; 3) no‗xatsimon va gulsimon tojli tovuqlardan yong‗oqsimon tojli tovuqlarni olinishi; 4) bug‗doy doning rangini irsiylanishi; 5) uzunchoq qovoqlarni chatishtirib gardishsimon qovoqlarni olinishi; 6) allel bo‗lmagan genlarning o‗zaro ta'siri",
        options: ["A) 1, 6", "B) 3, 4", "C) 1, 4", "D) 3, 5"],
        correctAnswer: "D",
      },
      {
        id: 15,
        number: 15,
        question: "Do‘lana va pistani qaysi xususiyat birlashtirib turadi.",
        options: [
          "A) noyob mevaga ega ekanligi",
          "B) sekin o‘sishi",
          "C) kambiyga ega emasligi",
          "D) hayotiy shakli butaligi",
        ],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 16,
        question:
          "Korall aspidi (a), kallima (b), dafniya (c), sariq falanga (d) mansub bo‗lgan sinf uchun (I), tip uchun (II) xos xususiyatlarni aniqlang. 1) yopiq qon aylanish sistemasi; 2) qorin nerv zanjir; 3) to‗liq o‗zgarish bilan rivojlanish; 4) ichki urug‗lanish; 5) tullab o‗sish; 6) xitindan iborat tashqi po‗st; 7) metamorfoz; 8) halqum atrofi nerv halqasi; 9) oyoq paypaslagich; 10) ochiq qon aylanish sistemasi; 11) mo‗ylovlar; 12) uch kamerali yurak; 13) orqa miya; 14) to‗g‗ri rivojlanish; 15) mozaik ko‗rish; 16) embrionida nerv nayining bo‗lishi; 17) ko‗krak qafasi; 18) ko‗p kamerali yurak.",
        options: [
          "A) a-I-4, 13, 17; II-1, 12, 16; b-I-7, 11; II-2, 5, 6, 15, 18; c-I- 11, 15; II-8, 10; d-I-9, 14; II-5, 8, 10",
          "B) a-I-4, 12, 17; II-1, 16; b-I-7, 11, 18; II-2, 5, 6; c-I-11, 15; II-8, 10; d-I-3, 9, 14; II-11, 5, 8, 10",
          "C) a-I-4, 5, 17; II-1, 16; b-I-7, 11, 18; II-2, 5, 6; c-I-11, 15, 13; II-8, 10, 11; d-II-5, 8, 10",
          "D) a-I-4, 17; II-1, 16; b-I-7, 11, 18; II-2, 5, 8; c-I-11, 15; II- 2, 10; d-II-5, 6, 10",
        ],
        correctAnswer: "A",
      },
      {
        id: 17,
        number: 17,
        question: "Quyidagi jadvaldagi no`malum o`simliklarni aniqlang.",
        options: [
          "A) a – sholi, b – soya",
          "B) a – soya, b – suli",
          "C) a – shakarqamish, b – zig`ir",
          "D) a – sabzi, b – karam",
        ],
        correctAnswer: "B",
      },
      {
        id: 18,
        number: 18,
        question:
          "Qirqquloqlarga xos belgilarni ko‘rsating. 1 )arxeoniy va anteridiyga ega; 2) jinsiy bo‘g‘in ustunlik qiladi; 3) jinsiy va jinssiz bo‘g‘in gallanadi; 4) spermatozoidi 2 xivchinli; 5) spermatozoidi ko‘p xivchinli; 6) sporalari boshoqda hosil bo‘ladi; 7) sporangiysi ko‘sakcha shaklda; 8) sporangiysi sorusda rivojlanadi; 9) tropik va subtropik mintaqalarda daratsimon vakillari uchraydi; 10) erkak va urg‘ochi o‘simta farqlanadi; 11 ) bahorgi va yozgi poya hosil qiladi; 12) gametofiti yuraksimon; 13) ildiz va o‘tkazuvchi sistemasi yo‘q; 14) ildizpoyali ko‘p yillik o‘t",
        options: [
          "A) 1,3,5,8,9,12,14",
          "B) 2,4,6,10,12,13",
          "C) 1,2,3,4,7,13",
          "D) 1,3,5,6,10,11,14",
        ],
        correctAnswer: "B",
      },
      {
        id: 19,
        number: 19,
        question:
          "Pinset (I), Petri (II) va probirka (III) qanday maqsadda ishlatildi. 1) moddalarni xususiyatini o‘rganish uchun; 2) moddalarni ko‘chirishda; 3) bakteriya va zamburug‘larni o‘stirishda.",
        options: [
          "A) I-1; II-2; III-3",
          "B) I-3; II-2; III-1",
          "C) I-2; II-3; III-1",
          "D) I-2; II-1; III-3",
        ],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "Keltirilganlardan fenotipiga qarab genotipini aniqlash mumkin bo‘lgan misollarni ko‘rsating. 1) to‘lqinsimon sochli qiz; 2) uchinchi qon guruhli qiz; 3) yashil, burushgan donli no‘xat;4) qizil ko‘zli urg‘ochi drozofila; 5) qizil ko‘zli erkak drozofila; 6) no‘xatsimon shaklli tojga ega tovuq.",
        options: ["A) 2,4,6", "B) 2,4,5", "C) 1,3,5", "D) 1,3,6 3"],
        correctAnswer: "B",
      },
      {
        id: 21,
        number: 21,
        question: "Echki (a) va baqa (b) qonining 1mm da nechta (million) eritrotsit bo`ladi?",
        options: ["A) a-5; b-0,4", "B) a-7; b-4", "C) a-0,4; b-7", "D) a-10; b-0,4"],
        correctAnswer: "A",
      },
      {
        id: 22,
        number: 22,
        question:
          "Quyida berilgan jadvalda tushib qoldirilgan organizmga xos xususiyatlarni mos ravishda juftlang.",
        options: [
          "A) A-aerob,",
          "B) anaerob,",
          "C) parazit B) A-aerob, B-aerob, C-parazit C) A-anaerob, B-anaerob, C-geterotrof",
          "D) A-anaerob, B-anaerob, C-golozoy",
        ],
        correctAnswer: "D",
      },
      {
        id: 23,
        number: 23,
        question:
          "Na‘matak o‘simligini quyidagi belgilari bo‘yicha morfologik analiz qiling: a) hayotiy shakli; b) barg tuzilishi; v) meva xili",
        options: [
          "A) a-yarim buta; b-oddiy, bandli; v-quruq, soxta, bir urug‘li",
          "B) a-buta; b-murakkab; v-soxta",
          "C) a-buta; b-oddiy bandsiz; v-xo‘l, chin, bir urug‘li",
          "D) a-buta; b-murakkab, yon bargli; v-quruq, chin, ko‘p urug‘li",
        ],
        correctAnswer: "C",
      },
      {
        id: 24,
        number: 24,
        question:
          "Quydagilardan qaysilari konnusimon tuzilishga ega emas? 1) delfinning tishi; 2) qalqontumshuqninig nog‘ara pardasi; 3) kaltakesakning boshi; 4) itning qoziq tishlari; 5) odamdagi katta oziq tishlar koronkasi; 6) yomg‘ir chuvalchangini tanasini oldingi qismi",
        options: ["A) 1, 3", "B) 2, 4", "C) 5, 6", "D) 2, 3"],
        correctAnswer: "A",
      },
      {
        id: 25,
        number: 25,
        question:
          "Plankton (a) va nekton (b) organizmlardagi moslanishlarni belgilang. 1) gazli kiritmalar; 2) terining tangachalar bilan qoplanganligi; 3) uzun o‘simtalar; 4) muskularning kuchli rivojlanganligi; 5) tanasi yassilashgan; 6) xitin qobiq",
        options: [
          "A) a- 1, 3; b- 2, 4",
          "B) a- 1, 4; b- 2, 3",
          "C) a- 1, 6; b- 2, 5",
          "D) a- 1, 3; b- 4, 5",
        ],
        correctAnswer: "B",
      },
      {
        id: 26,
        number: 26,
        question: "Energiya oqimi tasvirlangan rasmdagi xatolikni aniqlang.",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correctAnswer: "D",
      },
      {
        id: 27,
        number: 27,
        question:
          "Bug'doyda boshoqning uzun bo'lishi kalta bo'lishiga nisbatan dominantlik qiladi, geterozigotalarda boshoq o'rtacha uzunlikda, qiltiqlarning bo'lishi esa, qiltiqlarning bo'lmasligiga nisbatan resessiv hisoblanadi. Uzun boshoqli, qiltiqsiz va kalta boshoqli, qiltiqli o'simliklar chatishtirildi. F da hosil bo'lgan kalta boshoqqa ega 2 bo'lgan qiltiqsiz o'simliklar foizini aniqlang.",
        options: ["A) 37,5%", "B) 12,5%", "C) 18,75%", "D) 25%"],
        correctAnswer: "D",
      },
      {
        id: 28,
        number: 28,
        question:
          'Bir urug‗li ho‗l (I) va ko‗p urug‗li quruq (II) mevali o‗simlik navlarini aniqlang. 1) "Omad"; 2) "Gultish"; 3) "Tritikale"; 4) "Yulduz‖; 5) "Lola"; 6) Ulug‗bek-600"; 7) "Namangan-34"; 8) "Vatan"',
        options: [
          "A) 1-5, 6; 11-7, 8",
          "B) 1-3, 6; II-l, 2, 7",
          "C) 1-1, 8; II-2, 3",
          "D) 1-5, 8; II-l, 4, 7",
        ],
        correctAnswer: "C",
      },
      {
        id: 29,
        number: 29,
        question:
          "Biotik munosabatlarning simbioz (a) va antibioz (b) tiplariga mos shartli belgilarni juftlang.",
        options: [
          "A) a- (0 0), (+ +); b- (+ -), (- -)",
          "B) a- (- 0), (+ +); b- (+ -), (- -)",
          "C) a- (0 0), (+ +); b- (+ 0), (- -)",
          "D) a- (+ +), (0 +); b- (0 -), (- -)",
        ],
        correctAnswer: "C",
      },
      {
        id: 30,
        number: 30,
        question:
          "Shizofreniya bo`yicha sog` (onasi shizofrenik), polidaktiliya, daltonizm kasalliklari bilan og`rigan va Shershevskiy-Terner sindromiga uchragan ayolning genotipini aniqlang?",
        options: ["A) AABb XdXd", "B) aaBb XdXd", "C) AaBB XdXd", "D) AAbb XdXd"],
        correctAnswer: "C",
      },
    ],
  },
  {
    id: 8,
    title: "Variant 8",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Kabarga (a) va nandu (b) ga mos keluvchi ma‘lumotlar to‗g‗ri ko‗rsatilgan javobni aniqlang. 1) erkagi gomogametali; 2) hidni yaxshi sezmaydi; 3) embrioni tashqi muhitda rivojlanadi; 4) Paleoarktik biogeografik viloyatida tarqalgan; 5) faqat miyachasi po‗stlog‗ida burmalari rivojlangan; 6) bel, dumg‗aza va dum umurtqalari o‗zaro birikib, yagona dumg‗aza suyagini hosil qiladi; 7) urg‗ochisi gomogametali; 8) bel umurtqalari o‗zaro harakatchan qo‗shilgan; 9) bosh miya katta yarim sharlariga ega emas; 10) Neotropik biogeografik viloyatida tarqalgan; 11) bosh miya katta yarimsharining po‗stlog‗ida ilonizi burmalari rivojlangan; 12) panja suyagi mustahkamligi barmoqlar sonining kamayishi va mayda suyaklarining qo‗shilishi bilan bog‗liq",
        options: [
          "A) a-4, 7, 8; b-5, 6, 10",
          "B) a-7, 8, 9; b-1, 2, 3, 12",
          "C) a-3, 4, 12; b-5, 6, 11",
          "D) a-2, 8, 11; b-1, 3, 9, 10",
        ],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question:
          "Rasmda odam skeletining tarkibiy qismi berilgan. 2 raqami bilan ko‗rsatilgan suyakka xos xususiyatlar to‗g‗ri keltirilgan javobni belgilang.",
        options: [
          "A) uzun naysimon suyak, tarkibiga anorganik moddalardan kalsiy karbonat va kalsiy fosfat tuzlari kiradi",
          "B) yelka suyagi bilan birikadi; embrional rivojlanish davrida entoderma qavatidan rivojlanadi",
          "C) qo‗lning erkin suyaklariga kiradi, kovagi qizil ilik bilan, ko‗migidagi g‗ovak moddasi oralig‗i esa sariq ilik bilan to‗lgan bo‗ladi",
          "D) panja suyaklari bilan birikadi, tarkibiga organik moddalardan kalsiy karbonat va kaliy fosfat tuzlari kiradi",
        ],
        correctAnswer: "D",
      },
      {
        id: 3,
        number: 3,
        question:
          "RNK polimeraza fermenti ta‘sirida sintezlangan nuklein kislota tarkibidagi guanin nukleotidi matritsa vazifasini bajargan zanjirdagi timindan 42 taga, adenindan 10 taga kam, guanindan esa 8 taga ko‗pligi aniqlandi. Agar i-RNK tarkibida 102 ta sitozin borligi ma‘lum bo‗lsa, DNK qo‗sh zanjiri tarkibidagi adenin nukleotidlari sonini aniqlang.",
        options: ["A) 110", "B) 102", "C) 272", "D) 212"],
        correctAnswer: "C",
      },
      {
        id: 4,
        number: 4,
        question:
          "Quyida berilgan o‗simliklarning gul formulalari bilan juftlang. a) cherkez; b) oksitrops c) kanop 1) Gk Gt Ch U ; 2) Gk Gt , Ch U ; 3) 5 5 ∞ 1 4-5 5 (5) 5 (2) Gk Gt Ch U ; 4) Og Ch U ; 5) Gk Gt Ch U ; (3)+(5) 5 (∞) (∞) 0;5 2-5 2-5 6) Gk Gt Ch U; (5) 1+2+(2) (9)+1 1 7) Gk Gt Ch U ; 8) Gk Gt Ch U (5) (5) 5 1 5 5 ∞ ∞",
        options: [
          "A) a - 4; b - 3; с – 5",
          "B) a - 3; b - 8; с – 6",
          "C) a - 5; b - 6; с – 3",
          "D) a - 4; b - 6; с – 3",
        ],
        correctAnswer: "A",
      },
      {
        id: 5,
        number: 5,
        question:
          "Quyida rasmda berilgan hayvon uchun xos bo`lgan (I) va xos bo`lmagan (II) xususiyatlarni toping g- tanasi uzun qillar bilan qoplangan; d – tuxum qo`yib uni bosiqb yotadi; a – tuxumini qornidagi haltasida olib yuradi; w – piyoz uchramaydigan joyda uchraydi; k – ko`payishi jihatdan sudralib yuruvchilarga o`xshaydi; m – tana harorati 38ᵒC; y – urg`ochisi bitta tuxum qo`yadi; o – daryo qirg`oqlarida uyasida yashaydi; e – keng va uzun muguz tumshug`I bor",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question:
          "Somatik hujayrasida jinsiy xromosomalari o‗zaro gomolog bo‗lmagan organizmlarni aniqlang. 1) erkak drozofila; 2) tovuq; 3) erkak turna; 4) ona asalari; 5) erkak asalari; 6) xo‗roz; 7) erkak kaputsin; 8) Gereford zotli buqa; 9) erkak kolibri; 10) Kostroma zotli sigir; 11) urg‗ochi agama; 12) urg‗ochi g‗izol",
        options: [
          "A) 1, 2, 7, 8, 11",
          "B) 3, 4, 6, 9, 10",
          "C) 2, 4, 10, 11, 12",
          "D) 1, 3, 5, 6, 8",
        ],
        correctAnswer: "B",
      },
      {
        id: 7,
        number: 7,
        question:
          "Umurtqali hayvonlar haqidagi to‗g‗ri ma‘lumotlar ko‗rsatilgan javobni aniqlang. 1) dengiz olabug‗asining yurak qorinchasidagi venoz qon qorin aortasiga, undan jabra arteriyalariga o‗tadi; 2) kvakshada qon yurak qorinchasidan o‗pka arteriyalari orqali o‗pkaga, undan esa yurakning chap bo‗lmasiga quyiladi; 3) assidiyaning regressiv metamorfozi umumiy degeneratsiya bilan bog‗liq; 4) okunning jabralaridan arterial qon qorin aorta orqali organlarga boradi; 5) paleozoy erasining devon davrida paydo bo‗lgan stegosefallar panjaqanotli baliqlarning ajdodi hisoblanadi; 6) qizilto‗shning katta ko‗krak muskullari qisqarganida qanotlari tushiriladi; 7) skunsning kichik qon aylanish doirasi arteriyalarida venoz qon harakatlanadi; 8) qurbaqalarda gastrulyatsiya jarayoni blastulaning o‗sib kirishi orqali boradi; 9) krevetka 4 4 4+2 (2) yuragidan chiqqan qon to‗qimalarga kislorod olib boradi va u yerdan qon tomirlarga yig‗ilib, jabralarga boradi; 10) bulbul o‗mrov muskullarining qisqarishi tufayli qanotlar ko‗tariladi; 11) suv shillig‗i tanasining orqa tomonida yurak joylashgan, va u yurak oldi bo‗lmasi va yurak qorinchasidan iborat; 12) lansetnikda kislorod bilan to‗yingan qon qorin aortasi orqali jabralarga, undan esa orqa aortaga o‗tadi",
        options: [
          "A) 2, 4, 6, 8, 10",
          "B) 1, 2, 5, 6, 10",
          "C) 3, 7, 9, 11, 12",
          "D) 1, 6, 7, 8, 10",
        ],
        correctAnswer: "C",
      },
      {
        id: 8,
        number: 8,
        question:
          "Drozofila melanagasterning qaysi belgilari har xil gomologik xromasomalarda joylashmagan? 1) qora tana qizil ko‗zli; 2) kulurang tana normal qanot; 3) normal qanot oq ko‗zli; 4) qora tana kalta qanot; 5) kulurang tana qizil ko‗zli; 6) qora tana uzun qanot",
        options: ["A) 1, 3, 5", "B) 2, 4, 6", "C) 1, 4, 6", "D) 2, 3, 5"],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 9,
        question:
          "Rasmda berilgan birikma nomini hamda uning 1 va 2 raqamlariga mos keluvchi tarkibiy qismlarini aniqlang.",
        options: [
          "A) DNK; 1-dezoksiriboza; 2-fosfat kislota qoldig‗i",
          "B) RNK; 1-riboza; 2-fosfat kislota qoldig‗i",
          "C) DNK; 1-dezoksiriboza; 2-monosaxarid",
          "D) Oqsil; 1-dezoksiriboza; 2-monosaxarid",
        ],
        correctAnswer: "B",
      },
      {
        id: 10,
        number: 10,
        question:
          "Yo'rg'a tuvaloq (a) va xongul (b) uchun xos bo'lgan ma'lumotlarni aniqlang 1) Juft tuyoqlilar turkumi vakili; 2) Turnasimonlar turkumi vakili; 3) Tuvaloqlar oilasi; 4) Bug'ular oilasi; 5) Bolalari 1 yilcha onasidan ajramaydi; 6) Aprel oylarida 2- 3 ta tuxum qo'yadi",
        options: [
          "A) a-2,3,6; b-1,4,5",
          "B) a-1,3,5; b-2,4,6",
          "C) a-2,5,6; b-1,3,4",
          "D) a-3,4,5; b-1,2,6",
        ],
        correctAnswer: "C",
      },
      {
        id: 11,
        number: 11,
        question:
          "Quydagi keltirilganlardan ikki xivchinli (a) va ko‘p xivchinli (b) larni ko‘rsating. 1) xlomidomonada hujayrasi; 2) qirqbo‘g‘imning erkaklik gametasi; 3)ulotriks gametasi; 4) qirqquloqning erkaklik gametasi; 5) funariyaning erkaklik gametasi; 6) volvoks hujayrasi; 7) ulotriksning zoosporasi",
        options: [
          "A) a-2, 4, 7; b-1, 3, 5, 6",
          "B) a-1, 3, 4, 7; b-2, 5, 6",
          "C) a-1, 3, 5, 6; b-2, 4",
          "D) a-2, 7; b-3, 5, 6",
        ],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 12,
        question:
          "Ma`lum bir hayvonni maydalanish davrida jami blastomerlardagi hujayra markaziga kiruvchi mikronaychalar soni 27648 taga yetgan vaqtda jami hujayralardagi autosomalar soni jinsiy xromosomalarga nisbatan 11264 taga ko`p bo`lsa u holda maydalanish bosqichida 6 marta meridional bo`linish sodir bo`lgandan so`ng hosil bo`lgan hujayralardagi xromosomalar sonini aniqlang.",
        options: ["A) 26624", "B) 24576", "C) 13312", "D) 12288"],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question:
          "Nuqtalar o‘rniga kerakli javobni qo‘ying! …….. hayotida bir marta ko‗payadi va ikkitagina avlod qoldiradi.",
        options: [
          "A) sarkodalilar",
          "B) radiolyariya",
          "C) pseudomonas bakteriyasi",
          "D) ichak tayoqchasi bakteriyasi",
        ],
        correctAnswer: "B",
      },
      {
        id: 14,
        number: 14,
        question:
          "Shakli o‘zgargan yerosti novdalari o‘zaro o‘xshash o‘simliklar keltirilgan javobni toping.",
        options: [
          "A) lola, boychechak, gulsafsar",
          "B) kartoshka, shirinmiya,batat",
          "C) nargis, bosh piyoz,yeryong‘oq",
          "D) g‘umay, yalpiz, qizilmiya",
        ],
        correctAnswer: "C",
      },
      {
        id: 15,
        number: 15,
        question:
          "Odam o‘rta qulog‘idagi eshitish suyakchalaridan qaysi birlari nog‘ara pardaga eng uzoq (a) va eng yaqin (b) joylashganligini ko‘rsating.",
        options: [
          "A) a- bolg‘acha; b- sandoncha",
          "B) a- sandoncha; bolg‘acha",
          "C) a- uzangicha; b- bolg‘acha",
          "D) a- bolg‘acha; b- uzangicha",
        ],
        correctAnswer: "C",
      },
      {
        id: 16,
        number: 16,
        question:
          "1977-yilda Shotlandiyaning Roslin institut olimlari tomonidan qo‗y kloni yaratilish ketma-ketligini aniqlang. 1) donor qo‗yning urug‗langan tuxum hujayrasi; 2) embrionning rivojlanishi; 3) Fin dorset zotli qo‗yning sut bezlaridan donor hujayralarning olinishi; 4) donor hujayra oziq muhitida saqlanishi; 5) donor hujayra yadrosini tuxum hujayraga kiritish; 6) donor qo‗yning urug‗langan tuxum hujayra yadrosini olib tashlash; 7) Dolli zotli qo‗zichoqning tug‗ilishi; 8) surrogat ona qo‗yga embrionning implantatsiyasi. 1. 2. 3. 4.",
        options: ["A) 4", "B) 3", "C) 2", "D) 1"],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question: "O‘simliklar haqidagi to‘g‘ri malumotlarni aniqlang",
        options: [
          "A) Mastak urug‘i tarkibida zaharli moddalar saqlashi bilan ziraga o‘xshaydi",
          "B) Olmaning bitta gulida ham changchi ham urug‘chisi bo‘lishi bilan terakka o‘xshaydi",
          "C) Sholining murakkab to‘pgulida boshoqchalarining bo‘lishi bilan urug‘chili makkajo‘xoriga o‘xshaydi",
          "D) Qoraqat parxesh yo‘li bilan ko‘payishi bilan atirgulga o‘xshaydi",
        ],
        correctAnswer: "B",
      },
      {
        id: 18,
        number: 18,
        question:
          "Asosan hayvon mahsuloti orqali organizmga tushadigan vitaminga xos bo‘lgan xususiyatlarni belgilan?",
        options: [
          "A) start kadon aminokislotasini sintezida ishtirok etadi, bu vitamin tanqisligi, odatda oshqozon-ichak kasalliklari ta‘sirida uning ichak orqali so‘rilishini buzilishi natijasida kelib chiqadi",
          "B) suyuq biriktiruvchi to‘qima hosil bo‘lishida ishtirok etadi, bakteriyalar ishtirokida oshqozonda sintezlanadi",
          "C) biologik o‘ta faol modda, yetishmaganda diafragma muskulining faoliyati o‘zgaradi",
          "D) bakteriyalar ishtirokida ichakda ko‘p miqdorda sintezlanadi, nuklein kislota sintezida ishtirok etadi",
        ],
        correctAnswer: "C",
      },
      {
        id: 19,
        number: 19,
        question: "O‗simliklarni bargda jo‗ylashishiga ko‗ra to‗g'ri juflangan javobni aniqlang.",
        options: [
          "A) a - nastarin, b - do‗lana",
          "B) b - kiyiko‗t, c - qumrio‗t",
          "C) a - chinnigul, c - ligistrum",
          "D) b - gazanda, c - kampircho‗pon",
        ],
        correctAnswer: "A",
      },
      {
        id: 20,
        number: 20,
        question:
          "Agar Ab/ gametasi Ab//aB genotipli organizm hosil qilgan gametalarning 25% ini tashkil qilsa, hosil bo`lgan gametalarning necha foizini Ab/ gametalar tashkil etadi.",
        options: ["A) 25", "B) 12", "C) 50", "D) 38"],
        correctAnswer: "D",
      },
      {
        id: 21,
        number: 21,
        question:
          "Quyidagi berilgan javoblarni to‘g‘risini juftlab ko‘rsating. a-uzun kun; b-qisqa kun; d-neytral kun o‘simlikla. 1-gullashi kun uzunligiga bo‘gliq emas, 2-13 soatdan uzun kunda gullaydi, 3-yoz oylarda gullaydi, 4-tropik va suptropik mintaqalarda o‘sadi, 5-bahor va kuz oylarida gullaydi, 6-12 soatdan kam kunda sharoitda gullaydi, 7- agar kun qisaqa bo‘lsa va yorug‘lik yetishmasa, bu o‘simliklar o‘sishda davom etadi va gullaydi, 8-mo‘tadil iqlim mintaqalaridagi o‘simliklar, 9- agar kun qisaqa bo‘lsa va yorug‘lik yetishmasa, bu o‘simliklar o‘sishda davom etadi va gullamaydi.",
        options: [
          "A) a-2,3,4,9; b-5,6,8 d-1",
          "B) a-2,3,7,8; b-4,5,6 d-1",
          "C) a-4,5,6; b-2,3,8,9 d-1",
          "D) a-2,3,8,9; b-4,5,6 d-1",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 22,
        question:
          "Bolalarda bo‗y o‗sishi (akseleratsiya) yildan yilga yaxshilanib bormoqda. Gollandiyada 1895-1995-yillar oralig'idagi 18 yoshli o'smirlar bo‗yining o'rtacha uzunligi tekshirilganda har o‗n yilda bu ko‗rsatkich 0,6 cm oshganligi va 1895-yilda o'smirlar bo'yining o'rtacha uzunligi 166 cm bo'lganligi aniqlandi. Quyidagi grafikdan 1915- hamda 1935-yillardagi o‘smirlarning bo‘yini uzunligi to‘g‘ri berilgan javobni toping.",
        options: ["A) c hamda d", "B) b hamda e", "C) c hamda e", "D) c hamda f"],
        correctAnswer: "A",
      },
      {
        id: 23,
        number: 23,
        question:
          "Chatnaydigan mevaga ega bo‘lgan lolasimonlar (a) va magnoliyasimonlar (b) ni aniqlang. 1) bosh piyoz, 2) achambiti, 3) chuchumoma, 4) mingdevona, 5) qora ituzum, 6) boychechak",
        options: [
          "A) a- 1, 3; b-2, 4",
          "B) a- 1, 6; b-2, 3",
          "C) a- 1, 2; b-3",
          "D) a- 3, 6; b-4, 5",
        ],
        correctAnswer: "A",
      },
      {
        id: 24,
        number: 24,
        question:
          "Tuxumdon joylashgan joy haqidagi to‘g‘ri berilgan ma‘lumotni toping. A kichik chanoqning orqa devori va bachadon devoriga yopishgan, voronkaga botib kirgan B) kichik chanoqning yon devori va bachadon devoriga yopishgan, voronkaga botib kirgan C) kichik chanoqning yon devori va voronka devoriga yopishgan, bachadonga botib kirgan D) kichik chanoqning old devori va bachadon devoriga yopishgan, voronkaga botib kirgan",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 25,
        number: 25,
        question:
          "Membranalari silliq va to‘p-to‘p bo‘lib joylashgan yassilangan bo‘shliqlardan iborat organoid qaysi?",
        options: [
          "A) poliribosomalar",
          "B) endoplazmatik to‘r",
          "C) mitoxondriya",
          "D) go‘lji majmuasi",
        ],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 26,
        question:
          "Aleksandr Gumbold fikrlariniq toping? 1-o‘simliklar hayotida muhit omillarini ahamiyatini birinchi bo‘lib o‘rgandi, 2- atrof muhidning jansiz organizmga tasirini o‘rganishni boshladi, 3-hayvonlar hayotida muhid omillarini ahamiyatini birinchi bo‘lib o‘rgandi, 4- atrof muhitning jonli organizmga tasirini o‘rganishni boshladi",
        options: ["A) 1,2", "B) 2,3", "C) 1,3", "D) 1,4"],
        correctAnswer: "B",
      },
      {
        id: 27,
        number: 27,
        question:
          "Barglari oddiy yonbargsiz ko‘p yillik (a) va barglari murakkab yonbargchali bir yillik (b) o‘simliklarni aniqlang.",
        options: [
          "A) a-keyreuk, tereskin; b-beda, sebarga",
          "B) a-saksovul, teresken; b-mosh, no‘xat",
          "C) a-keyreuk, saksovul; b-yeryong‘oq, shirinmiya",
          "D) a-terakbargli leftok va tok; b-beda, sebarga",
        ],
        correctAnswer: "B",
      },
      {
        id: 28,
        number: 28,
        question:
          "No‗xat o‗simligining qaysi genlari meyoz jarayonida har xil gametalarga o‗tib qoladi? 1) silliq va yashil don tuzilishini ta‘minlovchi genlar; 2) uzun va kalta poya tuzilishini ta‘minlovchi genlar; 3) oq va qizil gul rangini ta‘minlovchi genlar; 4) burushgan va sariq don tuzilishini ta‘minlovchi genlar; 5) bo‗g‗imli va oddiy dukkak tuzilishini ta‘minlovchi genlar.",
        options: ["A) 1, 3, 5", "B) 2, 4, 5", "C) 2, 3, 5", "D) 1, 2, 4"],
        correctAnswer: "B",
      },
      {
        id: 29,
        number: 29,
        question:
          "Xolmon isirg'aguli (a) va yovvoyi tok (b) uchun xos bo'lgan ma'lumotlarni aniqlang 1) Loladoshlar oilasi; 2) Tokdoshlar oilasi; 3) To'pguli ro'vak; 4) To'pguli soyabon; 5) Aprelda gullaydi; 6) May- iyun oylarida gullaydi",
        options: [
          "A) a-2,3,4; b-1,5,6",
          "B) a-1,3,6; b-2,4,5",
          "C) a-1,4,5; b-2,3,6",
          "D) a-1,4,6; b-2,3,5",
        ],
        correctAnswer: "C",
      },
      {
        id: 30,
        number: 30,
        question:
          "Quyidagi atamalarni o‘ziga xos ravishda juftlab ko‘rsating. 1-demekologiya, 2-autekologiya, 3-sinekologiya, 4- biogetsenologiya, 5-global ekologiya a-faktorial ekologiya; b-populyatsialar ekologiyasi; d- jamoa ekologiyasi; e-ekotizm ekologiyasi; f-biosfera ekologiyasi",
        options: [
          "A) 1-b, 2-a 3-d, 4-f 5-e",
          "B) 1-b, 2-a 3-d, 4-e 5-f",
          "C) 1-a, 2-b 3-d, 4-e 5-f",
          "D) 1-b, 2-a 3-e, 4-d 5-f",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 9,
    title: "Variant 9",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Ultrabinafsha nurlariga oid to‘g‘ri ma‘lumotlarni juftlab ko‘rsating. a-ultrabinafsha nurlar 290 nm dan kam bo‘lsa, b- ultrabinafsha nurlar 290-380 nm bolganda, d- ultrabinafsha nurlarining to‘lqin uzunligi nechiga teng, 1-ultrabinafsha nurlarning kam qismigina ozon ekranidan o‘tib yer yuziga yetib keldi; 2-tirik organizmlar uchun halokatli ta ‘sir etadi; 3-bakteriyalarni nobud qiladi; 4-30400 nm; 5-ozon ekranidan o ‗tmaydi; 6-400-750 nm",
        options: [
          "A) a-2,3 b-1,5 d-4",
          "B) a-2,4 b-1,3 d-6",
          "C) a-2,5 b-1,3 d-4",
          "D) a-2,5 b-1,3 d-6",
        ],
        correctAnswer: "C",
      },
      {
        id: 2,
        number: 2,
        question:
          "Odam organizmidagi quyidagi tog‘aylarni joylashgan o‘rnini toping. 1-silliq va yaltiroq tog‘ay; 2-yarm halqa tog‘ay; 3- hiqildoqusti tog‘ayi;",
        options: [
          "A) 1-suyaklarning birikish yuzasida; 2-kekirdakning orqa devori; 3-hiqildoq yo‘lini berkitadigan tog‘ay",
          "B) 1- hiqildoq yo‘lini berkitadigan tog‘ay 2-kekirdakning oldingi devori; 3- suyaklarning birikish yuzasida;",
          "C) 1-suyaklarning birikish yuzasida; 2-kekirdakning oldingi devori; 3-hiqildoq yo‘lini berkitadigan tog‘ay",
          "D) 1-suyaklarning birikish yuzasida; 2- hiqildoq yo‘lini berkitadigan tog‘ay 3- kekirdakning oldingi devori;",
        ],
        correctAnswer: "A",
      },
      {
        id: 3,
        number: 3,
        question:
          "Meyozning ushbu bosqichida pomidorda xromosomalar soni 24 ta bo‘lsa, meyozning anafaza I bosqichida xromosoma soni qancha bo‘ladi?",
        options: ["A) 12", "B) 24", "C) 36", "D) 48"],
        correctAnswer: "D",
      },
      {
        id: 4,
        number: 4,
        question: "To‘g‘ri bo‘lgan ma‘lumotni aniqlang.",
        options: [
          "A) jabra mezoderma qavatidan shakllanadi;",
          "B) mitoxondriya tashqi kristalarida fermentlar mavjud;",
          "C) nostok iste‘mol qilinadigan prokariot hisoblanadi;",
          "D) penitsill bir hujayrali zambrug‘ hisoblanadi",
        ],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Organizmlardagi qaysi genlar bir-biridan mustaqil holda irsiylanishini aniqlang. 1) xo‗rozlarda toj shaklini ta‘minlovchi komplementar genlar; 2) drozofila pashshasi tanasining rangi va qanotining uzun-kaltaligini ta‘minlovchi genlar; 3) xushbo‗y no‗xat changchisining shakli va gulining rangini ta‘minlovchi genlar; 4) no‗xat donining rangi va shaklini ta‘minlovchi genlar; 5) bug‗doy doni rangining irsiylanishini ta‘minlovchi ikki juft polimer genlar",
        options: ["A) 1, 4, 5", "B) 1, 3, 5", "C) 2, 4", "D) 2, 3"],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question:
          "Oziq zanjiri sxemasini koʻring. Jadvalning qaysi qatoridagi maʼlumotlar quyonning ekologik tavsifiga mos keladi?",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correctAnswer: "D",
      },
      {
        id: 7,
        number: 7,
        question:
          "Organizm rivojlanish davriga oid bo‘lgan to‘g‘ri ma‘lumotlarni juftlang. 1) chaqaloqlik davri; 2) go‘daklik davri; 3) maktabgacha tarbiya davri; 4) maktab yoshi davri; a) nutq, tafakkur jadal rivojlanadi; b) ovqat hazm qilish sistemasi ishlay boshlaydi; c) bola juda tez o‘sadi; d) o‘sish tezlashadi, aqliy rivojlanishda keskin o‘zgarishlar sodir bo‘ladi; e) serharakat va tinchimas; f) alveolalar ish bajara boshlaydi; g) harakat faolligi ortadi; h) tana vazni ortadi;",
        options: [
          "A) 1-b,f; 2-c,h; 3-e,g; 4-d,a",
          "B) 1-b,h; 2-c,f; 3-a,e,g; 4-d",
          "C) 1-b,f; 2-c,h; 3-a,e,g; 4-d",
          "D) 1-b,f; 2-c,d; 3-a,e,g; 4-d",
        ],
        correctAnswer: "D",
      },
      {
        id: 8,
        number: 8,
        question:
          "Urug‘li o‘simliklarda erkaklik gametalarining rivojlanishi bilan bog‘liq terminlarni belgilang. 1) urug‘chi; 2) mikrospora; 3) megasporatsit hujayra; 4) murtak xalta; 5) generativ hujayra; 6) megaspora; 7) mikrosporatsit hujayra; 8) chang donasi;",
        options: ["A) 1,3,8", "B) 2,3,5", "C) 1,4,6", "D) 5,7,8"],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 9,
        question:
          "Qaysi vitaminlar yetishmasa kamqonlik kelib chiqadi? 1→ A vitamin; 2→ C vitamin; 3→ B12 vitamini; 4→ D vitamin; 5→ B1 vitamini;",
        options: ["A) 2↔3", "B) 1↔4", "C) 2↔5", "D) 3↔4"],
        correctAnswer: "D",
      },
      {
        id: 10,
        number: 10,
        question:
          "Tovuq va xo‗rozlarda toj shakli allel bo‗lmagan gen ta‘sirida komplementar irsiylanadi. Tajribada oddiy va digomozigota yong‗oqsimon tojli tovuq va xo‗rozlar chatishtirildi. F da olingan tovuq va xo‗rozlar o‗zaro 1 qayta chatishtirilganda hosil bo‗ladigan F avlodning fenotipi qaysi diagrammada to‗g‗ri ifodalangan?",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 11,
        question:
          "Yo‘sinlar bo‘limi uchun xos bo‘lmagan fikrlar qaysi javobda berilgan? 1-arxegoniysi ko‘p hujayrali, 2-tuhum hujayrasi ko‘p hujayrali, 3-anteriydiysi novdalarni pastidagi barglar orasida joylashgan,4-hayotida sporofiti ustunlik qila olmaydi, 5-kurtaklari zigotasidagi yashil iplarda hosil bo‘ladi, 6-barg eti hujayralari bir necha qavat, 7- urug‘langan tuhum hujayrasidan sporofit boshlanadi, 8- yuksak o‘simlik, 9-tuban o‘simlik",
        options: ["A) 1,2,5,6", "B) 2,3,5,9", "C) 3,4,6,8", "D) 1,4,5,6,9"],
        correctAnswer: "A",
      },
      {
        id: 12,
        number: 12,
        question: "Vektor konstruksiya deganda nimani tushunasiz?",
        options: [
          "A) Biror ahamiyatga ega DNK bo‘lagi kiritilgan plazmida",
          "B) Hujayra xromosomalari tarkibiga rekombinatsiyalana oladigan plasmid",
          "C) Bir zanjirli RNK molekulasidan qo‘shaloq zanjirli DNK molekulasining sintezlanishi;",
          "D) Bir hujayra DNK bo‘lagining ikkinchi hujayra genomiga funksional aktiv holatda ko‘chib o‘tishi",
        ],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question:
          "Suttikandoshchalar oilachasiga mansub o'simliklardan nechta turkum keltirilgan? 1) kakra; 2) qora jusan; 3) andiz; 4) qoqio't; 5) maxsar; 6) karrak; 7) topinambur. 8) bo'yirnodaron.",
        options: ["A) 6 ta", "B) 4 ta", "C) 3 ta", "D) 5 ta"],
        correctAnswer: "B",
      },
      {
        id: 14,
        number: 14,
        question:
          "Berilgan sxema asosida A va B katakchalarga mos ravishda kasalliklarni juftlang. 2",
        options: [
          "A) A-albinizm;",
          "B) braxidaktiliya B) A- Daun sindromi; B- daltonizm",
          "C) A- Shereshevckiy-Terner sindromi; B- Klaynfelter sindromi",
          "D) A-fenilketanuriya; B- Klaynfelter sindromi",
        ],
        correctAnswer: "D",
      },
      {
        id: 15,
        number: 15,
        question:
          "Biologiya tirik organizmlarning ayrim jihatlarini o`rganish bo`yicha fanlarni juftlang? 1) anatomiya. 2) fiziologiya. 3) embriologiya. 4) sistematika. 5) etologiya. a) organizm organlari tuzilishi b) funksiysi c) murtak(embrion) rivojlanishi, d) organizmlarning sistematik guruhlarini, e) hayvonot olamining xulq- atvorini tadqiq etadi,",
        options: [
          "A) 1- a; 2- c; 3- d; 4- e; 5- b",
          "B) 1- a; 2- b; 3- c; 4- d; 5- e",
          "C) 1- e; 2- d; 3- c; 4- a; 5- b",
          "D) 1- b; 2- a; 3- c; 4- d; 5- e w+ w+",
        ],
        correctAnswer: "C",
      },
      {
        id: 16,
        number: 16,
        question:
          "X X genotipga ega urg‘ochi drozofila pashsha bilan w X Y genotibga ega erkak drozofila pashshasi chatishtirilganda, olingan erkak pashshalarning ko‘zining rangi qanday bo‘ladi?",
        options: ["A) qizil", "B) oq", "C) qizil va oq", "D) ko‘k"],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question:
          "Quyida ko‘rsatilgan to‘g‘ri javobni aniqlang. a- Sochlari tekis yoki to‗lqinsimon, rangi sarg‗ish yoki qo‗ng‗ir, ko‗zlari ko‗k yoki kulrang-yashil, lablari yupqa, burni ingichka, erkaklarida soqol-mo‗ylovlari yaxshi o‗sadigan odamlar Yevropoid irqqa mansub. b- noxatning gajaklari hamda liftokning gajaklari o‘zaro analogik organ.",
        options: ["A) a-ha; b-yo‘q", "B) a-yo‘q; b-ha", "C) a-yo‘q; b-yo‘q", "D) a-ha; b-ha"],
        correctAnswer: "B",
      },
      {
        id: 18,
        number: 18,
        question:
          "Quyida keltirilgan atamalar ma‘nolari to‗g‗ri ko‗rsatilgan javobni aniqlang. 1) biotsenoz – tirik organizmlar uyushmasi; 2) epidemiya – kasallikning ko‗pchilik aholi o‗rtasida yoppasiga tarqalishi; 3) produtsent – iste‘mol qiluvchilar; 4) qattana yoki tallom – tuban o‗simliklarning organlarga bo‗linmagan tanasi; 5) xitin – suvda eriydigan modda bo‗lib, bo‗g‗imoyoqlilarda tashqi tayanch vazifasini bajaradi.",
        options: ["A) 1, 4, 5", "B) 2, 3, 4", "C) 1, 2, 4", "D) 2, 4, 5"],
        correctAnswer: "A",
      },
      {
        id: 19,
        number: 19,
        question:
          "Rasmda keltirilgan t-RNK qaysi aminokislotani translatsiya joyiga tashib keltirishini aniqlang. (genetik kod jadvalidan foydalaning!)",
        options: ["A) lizin", "B) metionin", "C) glutamin", "D) fenilalanin"],
        correctAnswer: "A",
      },
      {
        id: 20,
        number: 20,
        question:
          "Odamda interferon oqsilining hosil bo'lishi dominant autosoma geniga bog'liq. Epilepsiya (tutqanoq) kasalligi esa X xromosomaga bog'liq dominant belgi hisoblanadi. Ona digeterozigotali, ota dominant genlarni faqat onadan olgan bo'lsa, ushbu oilada tug'ilgan interferon oqsilini sintezlay oladigan farzandlarning necha foizi epilepsiya bilan kasallangan bo'ladi?",
        options: ["A) 56,25", "B) 25", "C) 91,67", "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif"],
        correctAnswer: "A",
      },
      {
        id: 21,
        number: 21,
        question:
          "Aureliyaning quyidagi hujayralari gastrulaning qaysi qismidan rivojlanishini aniqlang. a) ektoderma b) mezoderma c) endoderma 1) teri-muskul hujayralari; 2) oraliq hujayralar; 3) tuxum hujayralari; 4) yirik xivchinli va bezli hujayralar; 5) otuvchi hujayralar; 6) nerv hujayralar.",
        options: [
          "A) a-1,6; b- 2.3; c-4,5",
          "B) a-2,5; c-3,4",
          "C) a- 1,4; b-2,5; c- 3,6",
          "D) a-1,6; b- 2,5",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 22,
        question:
          "Toxirning ovqat ratsionida umumiy 750 g ozuqa mavjud. Ozuqaning 4 % izi mineral tuzdan iborat. Oqsildan ajralgan energiya yog‘dan ajralgan energiyadan 438 kkal kam, Uglevoddan ajralgan energiya esa yog‘dan ajralgan energiyadan 1120 kkal ga ko‘p bo‘lsa, Toxirning ratsional ovqatlanishiga xos bo‘lgan noto‘g‘ri ma‘lumotlarni belgilang. 1) ovqati tarkibida 500 g uglevod mavjud; 2) ovqati tarkibidagi oqsildan ajralgan energiya 410 kkal ga teng; 3) tushki ovqatidan ajralgan energiya 1654 kkal; 4) ovqat tarkibidagi yog‘ miqdori 100 g; 5) oqsil va uglevod miqdori farqi 400 g; 6) nonushtadan ajralgan energiya 1041,6 kkal",
        options: ["A) 1, 2, 5", "B) 3, 4, 6", "C) 1, 4, 6", "D) 2, 3, 5"],
        correctAnswer: "C",
      },
      {
        id: 23,
        number: 23,
        question:
          "Bosh miya og‘irligining ortishi quyidagilarning qay birini hisobiga amalga oshadi?",
        options: [
          "A) nervlarning miyelin qobiq bilan qoplanishi, qobiqning qalinlashuvi va nerv hujayralarining yiriklashuvi hisobiga",
          "B) oliy nerv faoliyatining murakkablashishi, funksiyasining ko‘payishi, neyronlarning miyelin qobiq bilan qoplanishi hisobiga",
          "C) kulrang modda oq moddani o‘rab turadigan po‘stloq hosil qilishi hisobiga",
          "D) dendritni miyelin qobiq bilan qoplanishi, qobiqning qalinlashuvi va nerv hujayralarining yiriklashuvi hisobiga",
        ],
        correctAnswer: "D",
      },
      {
        id: 24,
        number: 24,
        question:
          "I - istemol qilinadigan; II - zaharli zamburug‘larni juftlang. a) shampion; b) qizil muxomor; d) sariq soxta qo‘ziqorin; e) oq qo‘ziqorin; f) qo‘zidumba",
        options: [
          "A) I - a,f; II - d,e",
          "B) I - a,e; II - b,d",
          "C) I - b,f; II - a,d",
          "D) I - a,f; II - b,e",
        ],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 25,
        question:
          "Quyidagi berilgan genotiplarni ulardan olinadigan gametalar xili ortib borish tartibida joylashtirilgan javobni toping. 1) AABB; 2) AaBB; 3) AaBbCC; 4) AaBbCcDdEe; 5) AaBbCcDd; 6) AaBBCcDd",
        options: [
          "A) 1, 2, 3, 5, 6, 4",
          "B) 1, 2, 6, 3, 4, 5",
          "C) 2, 1, 3, 5, 6, 4",
          "D) 1, 2, 3, 6, 5, 4",
        ],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 26,
        question: "Quyidagi javaldagi x, y, z, w lar sonini toping. D) 75",
        options: [
          "A) x – 1; y – 1; z – 9; w - 27",
          "B) x – 1; y – 1; z – 18; w - 54",
          "C) x – 2; y – 2; z – 36; w - 108",
          "D) x – 2; y – 2; z – 36; w - 54",
        ],
        correctAnswer: "D",
      },
      {
        id: 27,
        number: 27,
        question:
          "Nuqtalar o‘rniga kerakli javobni moslang! Sovuq haroratli suv muhitida yashovchi baliqlar tanasida muz kristallari hosil bo‗lishiga yo‗l qo‗ymaydigan ……. , hasharotlarda …… esa to‗planadi",
        options: [
          "A) glitsirin; mioglobin",
          "B) glikoproteinlar; glitsirin",
          "C) glikoproteinlar; gemosianin",
          "D) mioglobin; gemosianin",
        ],
        correctAnswer: "C",
      },
      {
        id: 28,
        number: 28,
        question:
          "Ma‘lum papulyatsiyada A genning uchrash chastotasi 60% ni a genni uchrach chastotasi 40% tashkil etsa, Ushbu papulyatsiyada jami 8000 ta organizmdan nechtasi geterazigotali bo‘ladi.",
        options: ["A) 2560", "B) 2880", "C) 3840", "D) 4800"],
        correctAnswer: "B",
      },
      {
        id: 29,
        number: 29,
        question:
          "Ildiz, poya, bargidagi o‗tkazuvchi to‗qima devori o‗lik hujayralardan iborat naychalardan hosil bo‗lgan o‗simliklarni belgilang. 1) nemalion; 2) kladoniya; 3) batsidiya; 4) qirqbo‗g‗im; 5) funariya; 6) machin; 7) suv qirqqulog‗i; 8) qoraboyalich; 9) rovoch",
        options: ["A) 6, 8, 9", "B) 2, 4, 7", "C) 4, 5, 7", "D) 1, 2, 3"],
        correctAnswer: "B",
      },
      {
        id: 30,
        number: 30,
        question:
          "Odamlarda qon guruhini namoyon qiluvchi genlar autosoma xromosomada joylashgan bo'lib, I qon guruhida 0 0 A A A 0 B B I I , II qon guruhida I I yoki I I , III qon guruhida I I B 0 A B yoki I I , va IV qon guruhida l I holatda namoyon bo'ladi. Raxit kasalligi X xromosomada joylashgan dominant gen ta‘sirida yuzaga chiqadi. Raxit bilan kasallangan II qon guruhli ayol va III qon guruhli sog'lom erkak oilasida I qon guruhili sog‗lom qiz tug'ildi. Ushbu oila haqida bildirilgan qaysi fikr noto‘g‗ri?",
        options: [
          "A) Barcha o‗g‗il farzandlardan 50% i sog‗lom tug‗iladi",
          "B) Sog'lom va kasal farzandlarning tug‗ilish ehtimolligi 2:1 nisbatda bo‗ladi",
          "C) II qon guruhli sog‗lom qizlar va II qon guruhli kasal o‗g‗il farzandlarning tug‗ilish ehtimolligi 1:1 nisbatda bo‗ladi",
          "D) I va II qon guruhiga ega farzandlarning tug'ilish ehtimolligi 1:1 nisbatda bo‗ladi",
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 10,
    title: "Variant 10",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Kladoforaga xos bo'lmagan xususiyatlar to'g'ri ko‗rsatilgan javobni belgilang. 1) yuksak o‗simliklarning tubani; 2) tuban o'simlik; 3 ) o‘sish davrida hujayralari to'xtovsiz bo‗linib turadi; 4) qo‗ng‗ir suvo‗t bo‗limiga mansub; 5) yirik, tallomi shoxlangan 6 ) sporoflllari sporangiybandda joylashgan",
        options: [
          "A) 2, 4, 5",
          "B) 2, 3, 5 С) 1, 3, 6 D) 1, 4, 6",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 2,
        number: 2,
        question:
          "Jingalagi novdaning shakl o‗zgarishidan hosil bo‗lgan (a) va ikki qavatli gulkosachaga ega bo‗lgan (b) o‗simlik navlarini aniqlang.",
        options: [
          "A) a – Rizamat, Daroyi; b – Toshkent-1, Sanzor",
          "B) a – Sohibi, Qorago‗zal; b – Samarqand-3, Yulduz",
          "C) a – Buvaki, Toyipi; b – Toshkent-3, Obidov",
          "D) a – Xiloliy, Gultish; b – Sanzor, Nimrang",
        ],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question: "Quyidagi tuzilmalar uchun xos bo‗lmagan ma‘lumotlarni aniqlang.",
        options: [
          "A) a – qo‗sh zanjirli tuzilma; b – bir zanjirli tuzilma",
          "B) a – oqsil biosintezi jarayonida bir zanjiri matritsa bo‗lib xizmat qiladi; b – 3 xil turi mavjud",
          "C) a – tarkibida A,G,S,U kabi nukleotidlar bo‗ladi; b – tarkibidagi nukleotidlar vodarod bog‗lar orqali bog‗lanadi",
          "D) a – irsiy axborotni saqlaydi va nasldan naslga o‗tkazadi; b – sitoplazmad ham uchraydi",
        ],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 4,
        question: "To‘g‘ri fikrni toping. ?.",
        options: [
          "A) Fotositez jarayonida quyoshning kosmik energiyasi organic birikmalarning tarkibidagi kimyoviy bog`lar shaklida jamlanadi",
          "B) Fotosintez natijasida hosil bo`lgan organic moddalarning parchalanishi natijasida, barcha tirik organizm uchun universal va yagona energiya ega makroenergik bog‘larga ega ADF(adenozindifosfat)",
          "C) ATF barcha tirik organizmlar uchun, ayniqsa, avtotrof organizmlar uchun asosiy energiya manbayi bo`lib hizmat qiladi.",
          "D) Fotosintez jarayonining mukammal o`rganilishi kelgusida sayyoramiz hayotini saqlab qolish, ekologik muammolarni oldini olish, qishloq xo‘lalik ekinlari mahsulotlari hosildorligini ortirish omillarini aniqlash imkonini beradi.",
        ],
        correctAnswer: "C",
      },
      {
        id: 5,
        number: 5,
        question: "Ushbu rasmda qaysi fan bilan bog‘liq jarayon tasvirlangan.",
        options: ["A) fiziologiya", "B) morfologiya", "C) ekologiya", "D) geobotanika"],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question:
          "Rangni ajrata olmaslik kasalligiga chalingan ayol (onasi va akasi rangni normal ajrata oladi) sog‗lom erkakka turmushga chiqdi. Ushbu oila uchun mos keladigan to‗g‗ri fikrni aniqlang.",
        options: [
          "A) ayolning otasi ushbu belgi bo‗yicha sog‗lom",
          "B) ayolning o‗g‗il farzandlaridan biri rang ajrata oladi",
          "C) ayol kasallikni yuzaga chiqaruvchi genni faqat onasidan olgan",
          "D) oilada sog‗lom o‗g‗il farzandlarning tug‗ilish ehtimolligi 0%",
        ],
        correctAnswer: "D",
      },
      {
        id: 7,
        number: 7,
        question: "Jadvalni qaysi qatorida hatolik kuzatilgan?",
        options: ["A) a-4 b-2", "B) a-1 b-3", "C) a-1 b-4", "D) a-3 b-2"],
        correctAnswer: "B",
      },
      {
        id: 8,
        number: 8,
        question:
          "Odam organizmidagi ikkita silindr shaklidagi naydan iborat bo‘lgan organ haqidagi ma‘lumotlarni toping?",
        options: [
          "A) har ikkala naycha ham yagona keng bachadonga ochiladi",
          "B) har ikkala nay yo‘li o‘n ikki barmoqli ichakka ochiladi",
          "C) qorin bo‘shlig‘i orqa devori bo‘ylab joylashgan, qovuq bilan tutashgan",
          "D) ichida harakatlanayotgan suyuqligi ferment deb ataladi",
        ],
        correctAnswer: "C",
      },
      {
        id: 9,
        number: 9,
        question:
          "Odamlarda jingalak soch silliq soch ustidan chala dominantlik qiladi, geterozigotalilarda soch to'lqinsimon bo‗ladi. Sepkillilik sepkilsizlik ustidan to‗liq dominantlik qiladi. Gemofiliya esa X xromosomada joylashgan retsessiv belgi hisoblanadi. Barcha genlari bo'yicha geterozigotali ayol va silliq sochli, sepkilsiz, sog‗lom erkak oilasida tug‗ilgan farzandlarning necha foizi gemofiliya bilan kasallanganligini aniqlang.",
        options: ["A) 56,5", "B) 25", "C) 75", "D) 50"],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question: "Oq planariyada alangasimon hujayralar qaysi organlar sistemasiga tegishli?",
        options: [
          "A) Nerv sistemasi",
          "B) Ayirish sistemasi",
          "C) Ovqat hazm qilish sistemasi",
          "D) Jinsiy sistemasi",
        ],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 11,
        question:
          "Quyidagi ma‘lumotlardan nechtasi noto‘g‘ri? 1) suvarak va ninachilar toshko‘mir davrida rivojlangan 2) assidiya voyaga yetganda koloniya hosil qiladi; 3) sholi - murakkab boshoq to‘pgulli; 4) falanga va ayrim kanalar traxeyalar orqali nafas oladi; 5) yomg‘ir chuvalchangi gidrostatik skletga ega;",
        options: ["A) 1 ta", "B) 2 ta", "C) 3 ta", "D) 4 ta"],
        correctAnswer: "D",
      },
      {
        id: 12,
        number: 12,
        question:
          "Vestibular aparatga tegishli fikrlarni belgilang. a) o‘rta quloqda joylashgan ikkita ovalsimon xaltacha va uchta halqasimon naychadan iborat; b) ohaktosh-chalar holati o‘zgarishi retseptorlarda qo‘zg‘alish paydo qiladi; c) endolimfa ichida retseptorlar joylashgan; d) retseptorlari bir-biriga taqalib turadigan ellipssimon hujayralardan iborat; f) retseptorlarida bo‘ladigan o‘zgarishlar ,,Dengiz kasalligi‖ni keltirib chiqaradi;",
        options: ["A) a,f", "B) b,c", "C) a,d", "D) b,f"],
        correctAnswer: "C",
      },
      {
        id: 13,
        number: 13,
        question:
          "Bolalarda bo‗y o‗sishi (akseleratsiya) yildan yilga yaxshilanib bormoqda. Gollandiyada 1890-1990-yillar oralig'idagi 18 yoshli o'smirlar bo‗yining o'rtacha uzunligi tekshirilganda har o‗n yilda bu ko‗rsatkich 0,6 cm oshganligi va 1890-yilda o'smirlar bo'yining o'rtacha uzunligi 166 cm bo'lganligi aniqlandi. Ushbu grafikdan foydalanib 1930-yildagi o'smirlar bo'yining o'rtacha uzunligi qaysi javobda to'g'ri ifodalangan?",
        options: ["A) d", "B) с", "C) f", "D) e"],
        correctAnswer: "C",
      },
      {
        id: 14,
        number: 14,
        question:
          "Odamlarda katarakta va polidaktiliya autasomada joylashgan dominant gen tomonidan yuzaga chiqariladi. Bu genlar o‗zaro to‗liq bo‗g‗langan (krasingover kuzatilmaydi). Ikki belgi bo‗yicha geterozigota genotipli ayol va erkak nikoxidan qanday fenotipli farzandlar kutish mumkin ?",
        options: [
          "A) 3 ta kasal, 1 ta sog‗lom",
          "B) 1 ta kasal, 1 ta sog‗lom",
          "C) 3 ta sog‗lom, 1 ta kasal",
          "D) barchasi kasal farzand",
        ],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 15,
        question:
          "Xlorofillari piastidalarida (a) xromatoforlarda (b) joylashgan o‘simliklarni aniqlang. 1) xara, 2) funariya 3) terak, 4) tredeskansiy, 5)porfira, 6) nemalion, 7) ulva, 8) rafleziya",
        options: [
          "A) a-2, 3; b-5, 7",
          "B) a-3, 4; b-1, 7",
          "C) a-4, 8; b-5, 6",
          "D) a-2, 4; b-6, 7",
        ],
        correctAnswer: "C",
      },
      {
        id: 16,
        number: 16,
        question:
          "Bo‘linish urchug‘ining hujayra markazi sentriolasi hosil qiladigan organizmlar guruhini toping.",
        options: [
          "A) xlorella, amyoba, evglena, xrokok",
          "B) rizosfera, agrobakterium, sianobakteriyalar",
          "C) kladoniya, molodilo, skerda, ulva",
          "D) bitiniya, treska, kana, chupchik",
        ],
        correctAnswer: "A",
      },
      {
        id: 17,
        number: 17,
        question: "Nuqtalar o'rniga mos javobni tanlang. Boshoyoqli molluskalarning ..…..",
        options: [
          "A) sezgi organlaridan eshitish va tuyg'u organlari ko'proq rivojlangan",
          "B) protonefridiylarning bir uchi yurak oldi bo'lmasiga tutashadi",
          "C) yurak bitta qorincha va ikki yoki to'rtta bo'lmachadan iborat",
          "D) atmosfera kislorodi bilan nafas oladi",
        ],
        correctAnswer: "B",
      },
      {
        id: 18,
        number: 18,
        question:
          "AaBBCc genotipli organizmda barcha juft allel gen oraliq irsiylanadi. Shunday genotipli organizmlar o‗zaro chatshtirilganda fenotipik (a), genotipik (b) sinflar sonini aniqlang.",
        options: ["A) a-27; b-9", "B) a-12; b-27", "C) a-18; b-9", "D) a-9; b-9"],
        correctAnswer: "D",
      },
      {
        id: 19,
        number: 19,
        question: "Quyidagi sxemada berilgan raqamlarga mos keluvchi javobni belgilang.",
        options: [
          "A) 7-suv o`tlar",
          "B) 1-qirqquloq",
          "C) 5-yopiq urug`li",
          "D) 3-urug`li o`simliklar",
        ],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "Quyidagilarni juftlab yozing. a) sutkani yorug‘ kunida faol hayot kechiradi b) tunda faol hayot kechiradi d) faoliyatini quyosh botganda boshlaydigan hayvonlarni juftlab yozing. 1-quyon, 2-mayqo‘ng‘izi, 3-qaldirg‘och, 4-suvarak, 5- asalari, 6-chirildoq, 7-ukki, 8-ko‘rshapalak, 9-bo‘ri",
        options: [
          "A) a-1,3,5; b-4,6,7,9 d-2,8",
          "B) a-1,3,6; b-4,5,7,9 d-2,8",
          "C) a-1,3,5; b-4,6,7,8 d-2,9",
          "D) a-1,3,6; b-4,5,7, d-2,8,9",
        ],
        correctAnswer: "C",
      },
      {
        id: 21,
        number: 21,
        question:
          "Ochiq urug'lilar bo'limi (a), bir urug'pallalilar sinfi (b) va ikki urug'pallalilar sinfi (c) ga mansub o'simliklarni aniqlang.",
        options: [
          "A) a — archa; b — xolmon; с — qora, qarag‗ay",
          "B) a — saur; b — kakra; с — topinambur",
          "C) a — qarag'ay; b — chuchmoma; с — kakra",
          "D) a — andiz; b — olg‗i; с — itqovun",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 22,
        question:
          "Tanasi uzun qillar (x) va uzun ninalar (y) bilan qoplangan sutemizuvchilarga mos javobni aniqlang.",
        options: [
          "A) x – tuxumini qornidagi xaltasida olib yuradi; y – homiladorlik davri qisqa bo‘ladi;",
          "B) x – kurak tishlari o‘tmaslashmaydi; y – tana harorati o 26 C bo‘ladi;",
          "C) x – sut bezlari rivojlangan; y – barcha tishlari ixtisoslashgan;",
          "D) x – yuragi to‘rt kamerali, issiq qonli y – oziqni kurak tishlari yordamida ezib maydalaydi",
        ],
        correctAnswer: "D",
      },
      {
        id: 23,
        number: 23,
        question:
          "Arilarda qanotining osilib turgan holatda bo'lishini belgilaydigan gen faqat geterozigota holatda (Aa) namoyon bo'lib, gomozigota holatda o'limga olib keladi. Arilarning erkaklari urug'lanmagan tuxumdan rivojlanib, gomozigotali (aa) bo'ladi. Osilgan qanotli arilar avlodi bo'lgan erkak arilarni genotip va fenotipini aniqlang.",
        options: [
          "A) Aa-osilgan qanotli;",
          "B) Faqat aa-normal qanotli;",
          "C) AA-osilgan qanotli;",
          "D) AA,Aa-normal qanotli;",
        ],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question:
          "Quydagilardan qaysilari silindirsimon shaklga ega? 1) laminariyaning pastki qismi; 2) piyozning pastki qismi; 3) hujayra markazining kichik tanachalari; 4) mitoxondriya; 5) yadroning tashqi qismi; 6) donador endoplazmatik to‘r",
        options: ["A) 1, 3", "B) 2, 4", "C) 1, 5", "D) 2, 3"],
        correctAnswer: "A",
      },
      {
        id: 25,
        number: 25,
        question:
          "Quyida tirik organizmlar Eyler-Venn diagrammasi bo‘yicha ifodalangan. Shunga ko‘ra I, II, III qismlarga xos xususiyatlarni aniqlang. 1-may oyida gullaydi; 2-odamlar tomonidan istemol qilinganligi uchun kamayib ketgan; 3-ko‘p yillik o‘t; 4- urug‘idan va vegetativ yo‘l bilan ko‘payadi; 5-to‘pgul hosil qiladi; 6-iyun oyida gullaydi; 7-barglari oddiy panjasimon; 8-madaniy navlar yaratishda qo‘llaniladi;",
        options: [
          "A) I – 1,3; II – 6,7; III – 3,6",
          "B) I – 5,6; II – 3,5; III – 1,7",
          "C) I – 2,5; II – 7,8; III – 4,5",
          "D) I – 1,7; II – 1,8; III – 2,5",
        ],
        correctAnswer: "D",
      },
      {
        id: 26,
        number: 26,
        question:
          "Kaptar uchishi va dam olishi uchun ketgan vaqt umumiy 14 minutni tashkil qiladi. Bu vaqtda uning yuragi 5390 martta qisqargani ma‘lum bo‘lsa, dam olish ketgan vaqtda qush necha martta nafas olgan?",
        options: ["A) 156", "B) 2400", "C) 208", "D) 3200"],
        correctAnswer: "C",
      },
      {
        id: 27,
        number: 27,
        question:
          "O‘simliklarning o‘xshash organlari to‘g‘ri berilgan javoblarni toping. 1) na‘matak sohta meva hosil qilishi bilan qovoqqa o‘xshaydi; 2) zuhrasoch tuxum hujayrasi arxegoniyda yetilishi bilan sharq sauriga o‘xshaydi; 3) zuhrasochning sporasi sorusda yetilishi bilan suv qirqulog‘iga o‘xshaydi; 4) ismaloq va donasho‘r bitta oilaga kirishi bilan o‘xshaydi; 5) tuxumak chatnaydigan meva hosil qilishi astrogalga o‘xshaydi ; 6) ulotriks chuchuksuvda o‘sishi bilan laminariyaga o‘xshaydi; 7) nemalion qizil suv o‘tlariga kirishi bilan ulvaga o‘xshaydi; 8) besh yaproqli partenasissus bargi murakkab panjasimon bo‘lishi bilan sohta kashtanga o‘xshaydi",
        options: ["A) 1,2,4,6", "B) 2,3,6,7", "C) 1,3,5,8", "D) 4,5,7,8"],
        correctAnswer: "B",
      },
      {
        id: 28,
        number: 28,
        question:
          "To‘g‘ri fikrlar soni nechta? 1) Qisqichbaqasimonlarda yurak besh qirrali bo‗lib, boshko‗krakning orqa tomonida joylashgan; 2) Birinchi bo‗lib suvda hamda quruqlikda yashovchilarda hiqildoqning tog‗aylari shakllangan; 3) Sakkizoyoqning qizilo‗ngach atrofida joylashgan oldingi (bosh) nerv tugunlaridan hosil bo‗lgan gangliylar o‗zaro birlashib bosh miyani hosil qiladi; 4) Halqali chuvalchanglar qoni qizil, lekin temir gemoglobin tarkibida emas, balki plazmada erigan holda bo‗ladi; 5) Sudralib yuruvchilarda ingichka ichak bilan yo‗g‗on ichak chegarasida ko‗richak shakllangan;",
        options: ["A) 2", "B) 3", "C) 4", "D) 5"],
        correctAnswer: "C",
      },
      {
        id: 29,
        number: 29,
        question:
          "Agar funariya yo'sinining gametofitidan 100 ta spermatazoid hosil bo‗lib urug‗lanishda 25% i qatnashsa, arxegoniylarda nechta sporangiyband o‗sib chiqadi.",
        options: ["A) 25 ta", "B) 50 ta", "C) 75 ta", "D) 100 ta"],
        correctAnswer: "A",
      },
      {
        id: 30,
        number: 30,
        question:
          "Ichagi yuzasi burma shaklida botiqliklarni hosil qiladigan hayvonlarni aniqlang 1) yomg‘ir chuvalachangi, 2) nerida, 3) oq planariya, 4) odam askaridasi, 5) bolalar gijjasi, 6) qizil chuvalchang, 7) keng tasmasimon chuvalchang,",
        options: ["A) 1,2,6", "B) 2,4,5", "C) 1,4,5,7", "D) 4,5,7"],
        correctAnswer: "D",
      },
    ],
  },
  {
    id: 11,
    title: "Variant 11",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Organizmlarni xususiyatlari bilan juftlab yozing. a) toron; b) penitsill; c) aguti; 1-alkaloidlar mitselliy gifalari orqali barcha hujayralarga yetkaziladi, 2-gumoral boshqarish fitogormonlar orqali amalga oshiriladi, 3-gormonlar qon, limfa va to‗qima suyuqligi orqali tanaga tarqaladi, 4-fitogormonlar o‗tkazuvchi to‗qimalar orqali barcha hujayralarga yetkaziladi, 5-o‗z-o‗zini boshqarishning nerv va gumoral usullari bir-biri bilan chambarchas bog‗liq, 6-gumoral boshqarish alkaloidlar orqali amalga oshiriladi",
        options: [
          "A) a-1,2; b-1,6; c-3,4",
          "B) a-3,5; b-1,6; c-2,4",
          "C) a-2,4; b-1,6; c-3,5",
          "D) a-3,4; b-1,2; 1,6",
        ],
        correctAnswer: "C",
      },
      {
        id: 2,
        number: 2,
        question:
          "Quyidagi jadvalda beda o‘simligi chatishtirilishi berilgan bo‘lib urug‘lanish jarayonida ishtirok etgan Ab genotipli hujayralar soni 10 000 ta bo‘lsa u holda hosil bo‘lgan beda o‘simliklarini nechtasini genotipi AaBb bo‘ladi?",
        options: ["A) 1500", "B) 2000", "C) 3000", "D) 4000"],
        correctAnswer: "A",
      },
      {
        id: 3,
        number: 3,
        question:
          "Oyoq muskullarining funksiyalari to'g'ri ko'rsatilgan javobni aniqlang. a) uch boshli; b) to'rt boshli; c) ikki boshli. 1) oyoqni chanoqdan bukish; 2) oyoqni tovondan bukish; 3) oyoqni chanoqdan yozish;",
        options: [
          "A) a – 3; b – 1; c – 2",
          "B) a – 2; b – 1; c – 3",
          "C) a – 1; b – 2; c – 3",
          "D) a – 2; b – 3; c – 1",
        ],
        correctAnswer: "D",
      },
      {
        id: 4,
        number: 4,
        question:
          "Atirgul o`simligida gulining rangi qizil bo`lishi, sariq bo`lishi ustidan dominantlik qiladi. Geterozigotali organizmlar o`zaro chatishtirildi. A gen barcha populyatsiyalarning 60% ini, a gen 40% ni tashkil qiladi. F da 1000 ta olingan o`simliklarning nechtasi qizil gulli 1 o`simliklar tashkil etadi?",
        options: ["A) 160", "B) 480", "C) 360", "D) 840"],
        correctAnswer: "A",
      },
      {
        id: 5,
        number: 5,
        question: "Tufelka haqidagi to‘g‘ri ma‘lumot berilgan javobni aniqlang.",
        options: [
          "A) tayoqchasimon tanachalari qobig‘ining ustida kipriklarini ostida joylashgan",
          "B) chiqarish teshikchasi tananing orqa tomonida jolashgan",
          "C) galma-galdan ishlaydigan yadroga ega",
          "D) suyuqlik to‘plovchi pufakchaga ega",
        ],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question:
          "Tiriklikning populatsiya darajasidagi jarayonlari berilgan javobni aniqlang. 1) manjur kenja turining hosil bo‗lishi; 2) uglerodning davriy aylanishi; 3) pingvinlarning koloniya hosil qilishi; 4) kommensalizm; 5) xemosintez.",
        options: [
          "A) 2, 5",
          "B) 3, 4 С) 1, 4 D) 1, 3",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 7,
        number: 7,
        question:
          "Quyidagi ma‘lumotlarni taxlil qilib, Eyler-Venn diagrammasi bo‗yicha ifodalangan javobni aniqlang. 1) tanasida gidrostatik skeleti tayanch funksiyani bajaradi; 2) to‘qima suyuqligini muskullarga ko‘rsatgan bosim kuchidan muskullar qisqaradi va organizmda harakat yuzaga keladi; 3) vorankasimon ayirish tizimiga ega; 4) qoni tana bo‘shlig‘ini to‘ldirib turadi; 5) qoni tarkibida gemosianin uchraydi; 6) jinsiy dimorfizmga ega emas.",
        options: [
          "A) I – 2, 5; II – 1, 3; III – 6",
          "B) I – 1, 2; II – 3, 4; III – 5, 6",
          "C) I – 2; II – 1; III – 5, 6",
          "D) I – 1; II – 2, 3, 4; III – 6",
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Xrizantema changdonining bitta hujayrasidan hosil bo'lgan mikrosporalarida jami 36 ta xromosoma bor. Qo'sh urug'lanish jarayonida hosil bo'lgan murtak hujayrasining xromosomalar soni (a) va xrizantema o'simligining genomida genlar sonini (b) aniqlang. (har bir xromosomasida taxminan 2000 ta gen bor)",
        options: [
          "A) a – 18; b – 36 000",
          "B) a – 72; b – 36 000",
          "C) a – 18; b – 18 000",
          "D) a – 18; b – 72 000",
        ],
        correctAnswer: "C",
      },
      {
        id: 9,
        number: 9,
        question:
          "Cho`rtan (a), ko`l baqasi (b) va jayron (c) ni teri bezlarini vazifalarini juftlab ko`rsating. 1) suvni yuqtirmaslik; 2) terini qurub qolishdan saqlash; 3) harakatlanishni osonlashtirish; 4) tana haroratini doimiyligini saqlash; 5) nafas olishni yengillashtirish; 6) ajratish",
        options: [
          "A) a-3; b-2,5; c-4,6",
          "B) a-3,6; b-1,3,2,6; c-2,4",
          "C) a-1,3,6; b-1,2,5,3; c-3,5,6",
          "D) a-6; b-2,3; c-5,6",
        ],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question:
          "Moddalar almashinuvi aks ettirilgan sxemada hayvonlarda kechadigan jarayon to‘g‘ri berilgan javobni aniqlang.",
        options: ["A) I, II va IV", "B) I, III va VI", "C) II, III va V", "D) II, IV va VI"],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 11,
        question: "Noto‗g‘ri fikrni aniqlang.",
        options: [
          "A) ko‘rinadigan nurlar o‗simliklarda, fotosintezda jarayonining amalga oshishida katta ahamiyatga ega",
          "B) Shumtol, qarag‗ay, eman, paporotnik daraxtlari soyaga chidamli o'simlik hisoblanadi",
          "C) kun uzunligining mavsumiy o‘zgarishlariga nisbatan tirik organzimlarning javob reaksiyalari fotoperiodizmdir",
          "D) o‗simliklarda fotosintez jadalligi yorug'likning to'yinishiga, bog'liq, optimal darajadan o'tganda fotosintez sekinlashadi",
        ],
        correctAnswer: "A",
      },
      {
        id: 12,
        number: 12,
        question:
          "Odam organizmida qon ivish jarayonida tromb hosil bo'lishini ketma-ketligi to'g'ri berilgan javobni aniqlang. 1) qon plazmasida trombin hosil bo'lishi; 2) tromb hosil bo'lishi; 3) trombotsitlarning yorilishi; 4) qon tomirlarning shikastlanishi; 5) qon plazmasida fibrinogen oqsilining fibringa aylanishi.",
        options: ["A) 4→1→3→5→2", "B) 4→3→5→1→2", "C) 4→3→1→2→5", "D) 4→3→1→5→2"],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question: "Oddiy amyobaning ichburug‗ amyobasidan farq qiluvchi belgilarini aniqlang.",
        options: [
          "A) osmotik bosimni saqlovchi organoidga ega emas, o‗z xo‗jayiniga ega",
          "B) geterotrof organizm, jinssiz ko‗payadi",
          "C) qisqaruvchi vakuolaga ega, erkin yashaydi",
          "D) parazit organizm, ribosomaga ega emas",
        ],
        correctAnswer: "D",
      },
      {
        id: 14,
        number: 14,
        question:
          "Qovoq urug‘lari uzunligiga qarab taqsimlanishi aks ettirilgan o‘zgaruvchanlikning variotsion chizig‘i grafigini tahlil qiling va to‘g‘ri javoblarni aniqlang. 1) urug‘larning maksimal uzunligi 14-15 mm; 2) uzunligi 11 dan 12 mm gacha bo‘lgan urug‘lar juda kam uchraydi; 3) eng ko‘p uchraydigan urug‘lar o‘rtacha uzunlikda; 4) urug‘larning o‘rtacha uzunligi 14-15 mm",
        options: ["A) 1, 2", "B) 3, 4", "C) 2, 4", "D) 1, 3"],
        correctAnswer: "C",
      },
      {
        id: 15,
        number: 15,
        question:
          "Sog'lom odamning tirsak suyagi haqidagi to‗g‗ri fikrlarni aniqlang. 1) murtak varaqasining ektoderma qavatidan rivojlanadi; 2) tuzilishiga ko‗ra to‗sh suyagiga o‗xshaydi; 3) murtak varaqasining mezoderma qavatidan rivojlanadi; 4) ustki pardasi epiteliy to‗qimasidan tashkil topgan; 5) qo'lning erkin suyagi.",
        options: ["A) 3, 4", "B) 1, 2", "C) 2, 4", "D) 3, 5"],
        correctAnswer: "D",
      },
      {
        id: 16,
        number: 16,
        question:
          "O‘simliklarning changchisi (a) va urug‘chisi (b) uchun mos keladigan javobni aniqlang.",
        options: [
          "A) a-gulqo‘rg‘on ustida joylashgan; b-ikki qismdan iborat",
          "B) a-tokda alohida gulda joylashib, bir jinsli gul hosil qiladi; b-na‘ma tak gulida bitta bo‘ladi",
          "C) a-bosh piyozda 6 ta bo‘ladi; b-tugunchasida urug‘kurtak joylashgan",
          "D) a-oqqurayda 6 ta, 4 tasi qo‘shilgan; b-tugunchasida urug‘kurtak joylashgan",
        ],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question:
          "Olcha va tog‘olcha chatishishidan olingan chatishishidan olingan, nasl qoldira oladigan olxo‘rining endospermi yadrosida nechta xromasoma bo‘ladi?",
        options: ["A) 36", "B) 24", "C) 48", "D) 72"],
        correctAnswer: "C",
      },
      {
        id: 18,
        number: 18,
        question:
          "Quyda shajarasi berilgan probandning shajarasida qaysi kaslikning irsilanishi berilgan?",
        options: [
          "A) Sitoplazmatik irsiylanishga oid kasalik",
          "B) Y – xromosomaga birikkan kaslik",
          "C) X – xromosomaga birikkan dominant tipidagi kaslik",
          "D) X – xromosomaga birikkan retsessiv tipidagi kaslik",
        ],
        correctAnswer: "B",
      },
      {
        id: 19,
        number: 19,
        question:
          "Organizmlarning individual rivojlanishi haqidagi quyidagi ma'lumotlar to'g'rimi? a) Hayvonlar rivojlanishining embrional davrida hujayralar sonining ko'payishi, keyin esa ularning farqlanishi kuzatiladi. b) Ikki qavatli embrionni shakllantirish jarayoni maydalash davrida, blastomeralarning bo'linishi vaqtida sodir bo'ladi.",
        options: [
          "A) faqat b to'g'ri",
          "B) ikkala fikr to'g'ri",
          "C) ikkala fikr noto'g'ri",
          "D) faqat a to'g'ri",
        ],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          'Otasi daltonizm bilan kasallangan, onasi sog‘lom oilada tug‘ilgan "Daun sindrom" li o‘g‘il kariotipini aniqlang. D D',
        options: ["A) 44 + X Y", "B) 45 + X Y d d", "C) 45 + X Y", "D) 44 + X Y"],
        correctAnswer: "B",
      },
      {
        id: 21,
        number: 21,
        question:
          "Eng sodda nafas olish reflekslari nerv yoyi ketma- ketligini tartib bilan joylashtiring. 1 – burun bo'shlig‘i shilliq pardasidagi retseptor; 2 – harakatlantiruvchi nerv tola; 3 – nafas olish markazi; 4 – sezuvchi nerv tola; 5 – burunga chang tushganida; 6 – ishchi organ;",
        options: [
          "A) 1 → 2 → 3 → 4 → 5 → 6",
          "B) 5 → 1 → 4 → 3 → 2 → 6",
          "C) 6 → 2 → 3 → 4 → 1 → 5",
          "D) 5 → 2 → 4 → 3 → 2 → 6",
        ],
        correctAnswer: "C",
      },
      {
        id: 22,
        number: 22,
        question: "Hayotiy shakliga ko‘ra X o‘simlikni aniqlang.",
        options: ["A) betaga", "B) kamxastak", "C) uchqat", "D) qatrong‗i"],
        correctAnswer: "A",
      },
      {
        id: 23,
        number: 23,
        question:
          "Quyidagi matnda xatoga yo'l quyilgan jumlalar sonini aniqlang. «Sog'lom odam qon aylanish sistemasi». 1) Odamning qon aylanish sistemasi, boshqa sutemizuvchilar kabi, qon aylanish ikki doiradan iborat; 2) Yurak qorin bo'shlig'ida joylashgan va to'rt kameradan iborat; 3) Qon aylanish sistemasi chap qorinchadan boshlanadi va yurakdan organlar va to'qimalarga arterial qonni tashiydi; 4) Qon aylanish sistemasining venoz qoni pastki va yuqori kovak venasida to'planadi va chap bo'lmachga keltiriladi; 5) O'pka arteriyalari venoz qonni o'ng qorinchadan o'pkaga olib boradi; 6) Qon o'pkada kislorod bilan to'yingan; 7) O'pkadan arterial qon bitta qon tomir orqali yurakning chap bo'lmachasiga qaytadi;",
        options: ["A) 4 ta", "B) 5 ta", "C) 3 ta", "D) 2 ta"],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question:
          "2000 nukleotidi o'z ichiga olgan DNK molekulasida 200 ta timin nukleotidi mavjud. Demak ushbu DNK molekulasida ……",
        options: [
          "A) 600 ta sitozin nukleotidi bor",
          "B) vodorod bog‘lar soni 2000 ta",
          "C) 1998 ta fosfat qoldig‘i mavjud",
          "D) umumiy purin asoslari soni 1000 taga teng",
        ],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 25,
        question:
          "Jadvalning qaysi qatorida gormonlar, ular ishlab chiqaradigan ichki sekretsiya bezlari va gormonlarining funksiyalari muvofiq tarzda berilgan?",
        options: ["A) 2,3,5", "B) 1,4,5", "C) 1,4,6", "D) 2,3,6"],
        correctAnswer: "B",
      },
      {
        id: 26,
        number: 26,
        question: "Kovul …….",
        options: [
          "A) efemer organizm",
          "B) bo‘yi past o‘simlik",
          "C) gomoyoterm organizm",
          "D) bargi buralgan o‘simlik",
        ],
        correctAnswer: "D",
      },
      {
        id: 27,
        number: 27,
        question: "Odamda tug‘ma yaqinni ko‘rishni davolash uchun anday linzadan foydalaniladi",
        options: ["A) 4", "B) 1", "C) 2", "D) 3"],
        correctAnswer: "B",
      },
      {
        id: 28,
        number: 28,
        question:
          "Bir tanada ♂ va ♀ jinsiy a‘zoga ega avtotrof (a) va geterotrof (b) organizmlarni ko‘rsating.",
        options: [
          "A) a – olma, archa, no‘xat; b – gidra, yomg‘ir chuvalchangi, oq planariya",
          "B) a – turkiston ismalog‘i, bug‘doy, funariya; b – qoramol tasmasimon chuvalchangi, exinakokk",
          "C) a – qarag‘ay, makkajo‘xori, funariya; b – oq planariya, gidra, exinakokk",
          "D) a – na‘matak, ituzum, lola; b – rishta, exinakokk, cho‘chqa tasmasimon chuvalchangi",
        ],
        correctAnswer: "B",
      },
      {
        id: 29,
        number: 29,
        question:
          "Spermatidalarida 23 ta xromasoma bo‘lgan organizm embrional rivojlanishning maydalanish bosqichida blastomerlar soni nechtaga yetganda xromasomalar soni 23552 ni tashkil etadi.",
        options: ["A) 128", "B) 256", "C) 512", "D) 1024"],
        correctAnswer: "A",
      },
      {
        id: 30,
        number: 30,
        question:
          "Organizmlarning ko'payish va rivojlanish jarayoni bilan bog'liq bo'lgan noto'g'ri ma‘lumotlarni aniqlang. 1) qirg‗ovulning tuxumdan chiqqan bolasining ko'zi yumuq, tanasi siyrak par bilan qoplangan bo'ladi; 2) uy pashshasi tuxumidan boshi va oyog'I bo'lmaydigan lichinka chiqadi; 3) nam tuproqda odam askaridasi tuxumida lichinkalar rivojlanadi; 4) suv shillig'I germafrodit ekanligi bilan oq planariyadan farq qiladi; 5) qum bo'g'ma iloni tirik tug'ishi bilan kaltakesakdan farq qiladi; 6) tulkilar va tyulenlar bolasining tug'ilganda ko'zi yumuq bo'ladi В) 1, 4, 6 B) 1, 3, 4 C) 2, 5, 6 D) 2, 3, 5",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 12,
    title: "Variant 12",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "To‘g‘ri ma‘lumotlar ko‗rsatilgan javobni aniqlang. 1) monosaxaridlar kichik tarkibiy qismlarga gidrolizlanmaydigan biomolekulalardir; 2) geparin hayvonlarda qon ivishini ta‘minlaydi; 3) buyrak usti bezida, jinsiy bezlarda xolesterindan steroid gormonlar sintezlanadi; 4) UGA, UAA, UAG aminokislotalarni ifodalamaydi; 5) gibberellin o‗simliklarda o‗sish va morfofiziologik rivojlanishni boshqaradi; 6) rux (Zn) umurtqasiz hayvonlar qonidagi gemosianin tarkibida kislorod tashish funksiyasini bajaradi.",
        options: ["A) 2, 4, 5", "B) 1, 3, 6", "C) 2, 3, 5", "D) 1, 3, 5"],
        correctAnswer: "A",
      },
      {
        id: 2,
        number: 2,
        question:
          "Tovuqlarda tojlarning shakli komplementar noallel A va В genlari bilan ifodalanadi. С geni tovuq oyog‘i va tumshug‘i ning kalta bo‘lishini ta‘minlaydi, ya‘ni pleyotrop ta‘sirga ega. С geni dominant gomozigota holatda letal xususiyatga ega, chunki bunday holatda embrion tumshug‘i keskin kaltalashib ular tuxum po‘chog‘ini yorib chiqolmasdan halok bo‘ladi. Geterozigotalilar yashaydi. Retsessiv holatda tovuq oyog‘i va tumshug‘i normal bo‘ladi. Toj shakli bo‘yicha geterozigota gulsimon tojli, kalta oyoqli tovuq va toj shakli bo‘yicha digeterozigota yong‘oqsimon tojli, kalta oyoqli xo‘roz avlodida 240 ta kalta oyoqli jo‘jalar olindi. Olingan normal oyoqli jo‘jalarning nechtasi oddiy tojga ega?",
        options: ["A) 45", "B) 30", "C) 15", "D) 40"],
        correctAnswer: "A",
      },
      {
        id: 3,
        number: 3,
        question:
          "Mitoz jarayoniga asoslangan holda 2- va 3- raqamlarga mos javobni toping. barglari oddiy; 4) gullari bir jinsli; a) bir DNK (xromatid) li xromosomalarning gaploid to‗plami b) bir DNK (xromatid) li xromosomalarning diploid to‗plami c) ikki DNK (xromatid) li xromosomalarning diploid to‗plami d) bir DNK (xromatid) li xromosomalarning tetraploid to‗plami e) ikki DNK (xromatid) li xromosomalarning gaploid to‗plami",
        options: ["A) 2-c; 3-a", "B) 2-e; 3-b", "C) 2-c; 3-d", "D) 2-e; 3-d"],
        correctAnswer: "B",
      },
      {
        id: 4,
        number: 4,
        question:
          "Ushbu ifodani qanoatlantirsin! 6/3=? a) dumg‘aza; b) ensa; c) yuqori jag‘; d) tepa;",
        options: ["A) (b+c)/d=a", "B) (a+c)/(c=d)=c", "C) (a+b)/(b+c)=d", "D) (c+b)/(c+d)=b"],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Halqumining ustida va ostida umumiy 4 ta nerv gangliyalari mavjud bo‘lgan hayvonlar qatorini toping. 1) oq planariya; 2) askarida; 3) jigar qurti; 4) zuluk; 5) rishta; 6) qizil chuvalchang; 7) bolalar gijjasi; 8) nereida; 9) o‘troq yashovchi dengiz ko‘p tuklisi",
        options: ["A) 4, 8, 9", "B) 1, 2, 3", "C) 5, 6, 7", "D) 4, 6, 7"],
        correctAnswer: "C",
      },
      {
        id: 6,
        number: 6,
        question:
          "Quyidagi sxemada organizmlar va ular hujayralaridagi xromosomalar soni tasvirlangan. Ushbu sxemadan foydalanib tetraploid navli tog‘ olcha (a) va oktaploid navli bug‗doy (b) ning spermiysi tarkibidagi xromosomalar soni qaysi raqam (I, II, III, IV, V, VI,VII, VIII) orqali ifodalanganligini aniqlang.",
        options: ["A) a - IV; b - I", "B) a - V; b – I", "C) a - II; b -VIII", "D) a - IV; b – IV"],
        correctAnswer: "C",
      },
      {
        id: 7,
        number: 7,
        question:
          "Nargisga mos kelmaydigan javoblarni aniqlang. 1) gullari to‗g‗ri; 2) magnoliyatoifalarga mansub; 3) 5) changchilari 6 juft; 6) urug'chisi 3 ta urug'chibargning qo‗shilishidan hosil bo‘lgan; 7) barglari poyada qarama-qarshi joylashgan",
        options: ["A) 1, 2, 7", "B) 2, 4, 6", "C) 3, 5, 7", "D) 4, 5, 7"],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          'Aholisi 1 mln dan iborat shahar tumanlarining birida 125000 ta aholi yashaydi va ularning 40 % ni erkaklar tashkil etadi. Ushbu aholining "Shereshevskiy-Terner sindromi" bilan kasallangan odam sonini aniqlang.',
        options: ["A) 10 ta", "B) 15 ta", "C) 25 ta", "D) 250"],
        correctAnswer: "B",
      },
      {
        id: 9,
        number: 9,
        question:
          "Qaysi javobda yirtqichlar turkumining 3 ta oilasiga mansub organizmlar guruhi berilgan?",
        options: [
          "A) silovsin, yenotsimon it, korsak, to'qay mushugi, ilvirs, yaguar, tulki, suvsar",
          "B) qo‗ng‗ir ayiq, qashqaldoq, silovsin, yenotsimon it, chiyabo'ri, ilvirs, olaqo'zan",
          "C) yo‗lbars, arslon, gepard, suvsar, latcha, norka, qunduz, qashqaldoq",
          "D) tulki, ilvirs, silovsin, qashqaldoq, oq ayiq, nutriya, norka",
        ],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question:
          "Madaniy o‗simliklarning kelib chiqish markazlari to‗g‗ri ko‗rsatilgan javobni aniqlang. 1) zaytun daraxti - O‗rta yer dengizi; 2) zig‗ir – Janubiy g‗arbiy Osiyo; 3) yovvoyi no‗xat – Janubiy g‗arbiy Osiyo; 4) shakarqamish – Janubiy Osiyo tropik markazi; 5) tariq – markaziy Amerika; 6) kofe daraxti – Efiopiya",
        options: ["A) 1, 3, 4", "B) 2, 4, 5", "C) 1, 4, 6", "D) 2, 3, 4"],
        correctAnswer: "C",
      },
      {
        id: 11,
        number: 11,
        question:
          "Urg'ochilarida mitozning anafaza davrida hujayra qutblariga bir xil (a) va har xil (b) jinsiy xromosomalar tarqaladigan yirtqich organizmlarni belgilang. 1) kalxat; 2) qunduz; 3) qaldirg'och; 4) tulki; 5) gepard; 6) qashqaldoq; 7) qarchig'ay; 8) ukki",
        options: [
          "A) a-2, 4, 5; b-1, 7, 8",
          "B) a-1, 3, 8; b-2, 6, 5 С) a-1, 7, 8; b-2, 4, 5 D) a-1, 6, 8; b-3, 4, 7",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 12,
        number: 12,
        question:
          "Yogʻochligi qattiq, mayda kurtakli chin(a) va soxta (b) mevali daraxtlarni aniqlang.",
        options: [
          "A) a - oʻrik; b - olma",
          "B) a - tut; b - saksovul",
          "C) a - yongʻoq; b - zarang",
          "D) a - oʻrik; b - qayragʻoch",
        ],
        correctAnswer: "C",
      },
      {
        id: 13,
        number: 13,
        question:
          "Quyonlar yung rangining irsiylanishida ko`p allellik hodisasi kuzatiladi. Quyidagi jadvalda ushbu allel genlar ta`sirida vujudga keluvchi 4 xil fenotip va ularga mos keluvchi genotip keltirilgan. Ushbu jadvalga asoslanib quyidagilardan qaysilari to`g`ri ekanligini aniqlang 1. Genotipning 60%ini geterozigotali organizmlar tashkil etadi; 2. Shinshilla rangli urg`ochi quyon bilan himolay rangli erkak quyonlarning o`zaro chatishtirilishidan shinshilla, himolay va albinos rangli quyonlar tug`ilishi mumkin; 3. Quyonlarda yung rangi 2 xil allel gen ta`sirida irsiylanadi; 4. Allel genlar dominantligi quyidagi tartibda ortib boradi qiladi: A <A <A <A 4 3 2 1",
        options: ["A) 1,2,3", "B) 2,3,4", "C) 1,2,4", "D) faqat 1,4"],
        correctAnswer: "D",
      },
      {
        id: 14,
        number: 14,
        question:
          "Quyidagilarni juftlang! a-sentriola rivojlanmagan b-sentromera rivojlanmagan 1) qoqshol qoʻzgʻatuvchisi; 2) lola; 3) qaldirgʻoch; 4) quturish qoʻzgʻatuvchisi; 5) ossilotoriya;",
        options: ["A) a – 1; b – 2", "B) a – 4; b – 3", "C) a – 5; b – 2", "D) a – 1; b – 1"],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 15,
        question:
          "Ikki xil biogeografik viloyatda tarqalgan ikkita hayvonni toping. 1) kar ↔ kabarga; 2) lira ↔ nandu; 3) lemur ↔ xameleon; 4) yalqov ↔ iguana; 5) gorilla ↔ gibbon; 6) dingo ↔ giyena",
        options: ["A) 1, 3, 4", "B) 1, 3, 5", "C) 2, 4, 6", "D) 2, 5, 6"],
        correctAnswer: "A",
      },
      {
        id: 16,
        number: 16,
        question:
          "Inson tanasida yugurish paytida …… Nechta to‘g‘ri javob berilganligini aniqlang? 1) jigar hujayralari tomonidan o‘t suyuqligi sintezining oshishi; 2) skelet muskullarida oqsil biosintezi tezlashadi; 3) qon plazmasida qizil qon tanachalarining soni kamayadi; 4) terida qon oqimining oshishi; 5) ter ajralishi kuchayadi; 6) simpatik nerv sistemasining faolligi oshishi;",
        options: ["A) 1 ta", "B) 2 ta", "C) 3 ta", "D) 4 ta"],
        correctAnswer: "C",
      },
      {
        id: 17,
        number: 17,
        question:
          "Tayoqchasimon tanachaga ega golji majmuasi qaysi organizmlarda bo‘lishi mumkin. 1) amyoba; 2) nereida; 3) bitiniya; 4) foraminifera; 5) midiya; 6) volvoks; 7) leyshmaniya; 8) zaxkash; 9) nursimonlar; 10) qoraqurt;",
        options: ["A) 2,5,8", "B) 4,6,7", "C) 1,3,4", "D) 9,10,5"],
        correctAnswer: "C",
      },
      {
        id: 18,
        number: 18,
        question: "Embrion ma'lum izchillikda rivojlanadi degan fikr qaysi olimga tegishli?",
        options: ["A) Lukretsiy Kar", "B) Karl Ber", "C) Aristotel", "D) K. Linney"],
        correctAnswer: "D",
      },
      {
        id: 19,
        number: 19,
        question:
          "Fotosintezning qorong‗ulik bosqichida 45 molekula ADF hosil bo‗lgan bo‗lsa, shu jarayon uchun yorug‗lik bosqichida necha mol NADF sarflanganligini aniqlang. (6CO2 +24NADF•H +18ATF → C6H12O6 + 24NADF + 18H3PO4 + 18ADF + 6H2O)",
        options: ["A) 60", "B) 36", "C) 45", "D) 48"],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question:
          "Suv muhitida yashovchi organizmlarning ekologik guruhlari to‗g‗ri ko‗rsatilgan javobni aniqlang. 1) Grenlandiya tyuleni; 2) lansetnik; 3) dafniya",
        options: [
          "A) 1 − nekton; 2 − plankton; 3 – bentos",
          "B) 1 − bentos; 2 − plankton; 3 − nekton",
          "C) 1 − bentos; 2 − nekton; 3 – plankton",
          "D) 1 − nekton; 2 − bentos; 3 – plankton",
        ],
        correctAnswer: "A",
      },
      {
        id: 21,
        number: 21,
        question:
          "Diploid xromasoma to‘plamiga ega bo‘lgan hujayrada bo‘linish quyidagi grafik asosida kechgan. Bunga ko‘ra a,b,c ifodalarga keltirilgan javoblardan qaysilari to‘g‘ri?",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correctAnswer: "D",
      },
      {
        id: 22,
        number: 22,
        question:
          "Populyatsiyada rezus manfiy odamlar 16% (dd) rezus musbat odamlar esa 84% ni tashkil qiladi. Populyatsiyada rezus musbat odamlar orasida gomozigota (DD) va geterozigota (Dd) lar chastotasini aniqlang. (Xardi-Vaynberg qonuni asosida aniqlang)",
        options: ["A) 60%, 24%", "B) 36%, 48%", "C) 68%, 16%", "D) 40%, 44%"],
        correctAnswer: "C",
      },
      {
        id: 23,
        number: 23,
        question:
          "O‗z to‗qimalari va organlarida suvni zaxirada saqlash va so‗ngra tejab sarflash kuzatiluvchi o`simliklar guruhi nima deb ataladi?",
        options: [
          "A) gomoyoterm organizmlar",
          "B) anemofill o`simliklar",
          "C) sukkulent organizmlar",
          "D) gigrofit o`simliklar",
        ],
        correctAnswer: "D",
      },
      {
        id: 24,
        number: 24,
        question:
          'Nazariy jihatdan tarozi birinchi "X" pallasiga qaysi qush qo‘yilsa, pallalar tenglashadi?',
        options: ["A) g‘oz", "B) pingvin", "C) kurka", "D) tuyaqush"],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 25,
        question:
          "Odamda rezus omilni belgilovchi genlar autosomada joylashgan dominant gen bilan, gemofiliya esa jinsiy X xromosomada joylashgan retsessiv gen bilan ifodalanadi. Otasi gemofilik, rezus faktor bo‗yicha dominant gomozigota, onasi esa gemofiliya bo‗yicha genotipik sog‗lom, rezus manfiy bo‗lgan ayol va rezus manfiy, gemofilik erkak oilasida tug‗ilgan qiz farzandlarning rezus omil (a) va qon ivish xususiyati (b) bo‗yicha ajralish nisbatini toping.",
        options: [
          "A) a − 1:2; b − 1:2",
          "B) а − 1:1; b − 1:1",
          "C) а − 1:1; b − 1:2",
          "D) a − 1:2; b − 1:1",
        ],
        correctAnswer: "B",
      },
      {
        id: 26,
        number: 26,
        question:
          "Shajarada keltirilgan irsiylanishida I, II va III avlodlarga mos keladigan javoblarni aniqlang 1) qizning otasi kasal; 2) kasal o‘g‘il tug‘ilgan; 3) sog‘lom o‘g‘il tug‘ilgan; 4) ona sog‘lom; 5) qizning onasi kasal; 6) kasal qiz tug‘ilgan;",
        options: [
          "A) I-1, 4; II-3, 2",
          "B) I-1, 4; III-3, 2",
          "C) I-1, 6; II-3, 4; III-3, 2",
          "D) I-3, 1; II-1, 4; III-2, 3",
        ],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 27,
        question:
          "Qaysi era va davrda dastlabki hashoratlar rivojlangan (a) va hashoratlar avj olib rivojlangan (b). A) a – paleozoy-ordovik; b – mezozoy-bo‘r D) a – kaynozoy-to‘rtlamchi; b – paleozoy-trias C) a – paleozoy-devon; b – kaynazoy-uchlamchi D) a – paleozoy-devon; b – kaynazoy-to‘rtlamchi",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 28,
        question:
          "AUG GGA GUU UCG AAG UGG GAU AUU GUG CCC UGA kodonlardan iborat bo‗lgan i-RNK tarkibidagi fosfodiefir bog‗lar sonini (a) va ushbu zanjir asosida sintezlangan polipeptid zanjirning og‗irligini (b) aniqlang (bitta aminokislotaning o‗rtacha og‗irligi 120 ga teng).",
        options: ["A) a-32; b-1320", "B) a-32; b-1200", "C) a-11; b-840", "D) a-33; b-1080"],
        correctAnswer: "A",
      },
      {
        id: 29,
        number: 29,
        question: "Quyidagi sxemada berilgan noma‘lum X ni aniqlang.",
        options: [
          "A) ichburug‘ amyobasi",
          "B) quturish qo‘zg‘atuvchisi",
          "C) qoqshol qo‘zg‘atuvchisi",
          "D) qizamiq qo‘zg‘atuvchisi",
        ],
        correctAnswer: "A",
      },
      {
        id: 30,
        number: 30,
        question: "Tufelka haqidagi to‗g‗ri javobni toping.",
        options: [
          "A) Sirka kislota ta‘sir ettirilganda ikkiga bo‗linib ko'payadi",
          "B) Loviyasimon kichik va yumaloq katta yadroga ega",
          "C) Pichan ivitmasiga osh tuzi tushirilsa, taksis orqali javob qaytaradi",
          "D) Yashil metil bo‗yog‗i yadroni qizil rangga bo'yaydi",
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 13,
    title: "Variant 13",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Berilgan DNK molekulasidagi noma‘lum nukleotidlarni aniqlang. (berilgan tartibda)",
        options: ["A) TTCGT", "B) CACCT", "C) TACGT", "D) TAGCT"],
        correctAnswer: "A",
      },
      {
        id: 2,
        number: 2,
        question:
          "Gidra (a), triton (b), kabarga (c) va aureliya (d) blastula devori necha qavat hujayradan iborat?",
        options: [
          "A) a- 2; b- 3; c- 3; d- 2",
          "B) a- 2; b- 3; c- 3; d- 3",
          "C) a- 1; b- 2; c- 2; d- 1",
          "D) a- 1; b- 1; c- 1; d- 1 3. Yuqoridagi hayvon hujayrasida disaxarid sintezi berilgan reaktsiya. Shunga ko'ra; I. M ning tuzilishida glikozidli bog bor. II. K va L monosaxaridlardir. III. K va L dan biri shubhasiz glyukoza. Gaplarning qaysi biri to'g'ri? A) faqat I B) faqat I va II C) faqat II va III D) I, II, III",
        ],
        correctAnswer: "D",
      },
      {
        id: 3,
        number: 4,
        question:
          "Quyidagi tuzilmalarga xos muvofiqlikni aniqlnag. a) adenovirus; b) bakteriofag(DNK) 1) riboza; 2) sitozin; 3) fosfat kislotasi qoldig‗i; 4) timin; 5) dezoksiriboza; 6) uratsil",
        options: [
          "A) a - 2, 3; b - 1, 3",
          "B) a - 1, 6; b - 3, 4",
          "C) a - 2, 5; b - 2, 6",
          "D) a - 3, 5; b - 2, 4",
        ],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 5,
        question: "Murakkab barg va oddiy to'pgulga ega o'simlik",
        options: ["A) olma", "B) zubturum", "C) rovoch", "D) yong‘oq"],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 6,
        question:
          "AaBb genotipiga ega ota-onalardagi genlarning bog'lanish holati quyidagi rasmda keltirilgan. Ushbu shaxslarni chatishib o'tish natijasida. l. AB; ll. Ab; lll. ab Fenotiplarning qaysi birida nasl krossingover natijasida paydo bo'lgan?",
        options: ["A) faqat l", "B) faqat ll", "C) faqat ll", "D) l va lll"],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 7,
        question: "Quyidagilardan qaysi biri katabolik reaksiya hisoblanadi?",
        options: [
          "A) Maltoza → Glyukoza C) ADP → ATP",
          "B) Aminokislota → Oqsil D) Glyukoza → Kraxmal",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 7,
        number: 8,
        question: "Meksika g‘ozasi qaysi ajdod va bo‘limga mansub",
        options: [
          "A) gulhayridoshlar , magnoliyasimonlar",
          "B) ikki urug‘ pallalilar, magnoliyasimonlar",
          "C) magnoliyasimonlar, yopiq urug‘lilar",
          "D) gulhayridoshlar, ikki urug‘ pallalilar",
        ],
        correctAnswer: "B",
      },
      {
        id: 8,
        number: 9,
        question: "Odamlarda parazitlik qiladigan tripanasomaning bezgak parazitidan farqi",
        options: [
          "A) doimiy shaklga egaligi",
          "B) qonda parazitlik qilishi",
          "C) harakatlanish organoidiga egaligi",
          "D) qon hujayralariga kira olmasligi",
        ],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 10,
        question:
          "2n = 4 xromosomali hujayraning mitoz bo'linishining ayrim bosqichlari quyida keltirilgan. Ushbu fazalar quyidagi tartiblardan qaysi biri bilan sodir bo'ladi?",
        options: [
          "A) ll – lll – l – lV",
          "B) lll – ll – l – lV",
          "C) ll – lV – l – lll",
          "D) l – ll – lll – lV",
        ],
        correctAnswer: "C",
      },
      {
        id: 10,
        number: 11,
        question:
          "Makkajo‗xorining tuxum hujayrasidagi xromasomalar sonini (a), somatik hujayrasidagi bitta belgining allel genlari sonini (b) aniqlang.",
        options: ["A) a – 10; b – 1", "B) a – 10; b – 2", "C) a – 20; b – 1", "D) a – 20; b – 2"],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 12,
        question:
          "Kulrang satirning hayot sikli aks ettirilgan sxemadagi 1 va 2-raqamlarga qanday bosqichlar mos keladi? 1 tinim davri 2 lichinka",
        options: [
          "A) 1-voyaga yetgan organism; 2-g’umbak;",
          "B) 1-g’umbak; 2-voyaga yetgan organism;",
          "C) 1-voyaga yetgan organism; 2- uyqu davri",
          "D) 1-pilla ichidagi tuxum; 2-uyqu davri",
        ],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 13,
        question:
          "Nuqtalar o'rniga mos javobni tanlang. Odamda yurakning chap qorinchasidan qon ……. 1) qisqarganda, qon aortaga chiqadi; 2) sistola holatida, chap bo'lmachaga chiqadi; 3) tana hujayralarini kislorod bilan ta'minlanadi; 4) o'pka arteriyasiga chiqadi; 5) yuqori bosim ostida qon oqish tezligi; 6) past bosim ostida o'pkaga qon boradi.",
        options: ["A) 2, 3, 5", "B) 1, 4, 6", "C) 1, 3, 5", "D) 2, 5, 6"],
        correctAnswer: "C",
      },
      {
        id: 13,
        number: 14,
        question:
          "Jadvalning qaysi qatoriarida (№) hayvonlar, ularning xususiyatlari va ular mansub turkumlar muvofiq tarzda berilgan? № Orga- Organizmlarning Turkum nizm xususiyatlari 1 dorivor ko‘p yillik o‘t, guli ikki qo‘qio‘t qo‘qio‘t jinsli sariq og‘iz organi ikki juft, 2 chayon ayrim jinsli, harakat chayonlar organlari 4 juft 3 chigirtka to‘liq o‘zgarish bilan ninachilar rivojlanadi ishchisiko‘payish pardaqanot- 4 chumoli qobiliyatini yo’qotgan lilar urg'ochilar tanasi boshko‘krak o‘rgimchak- 5 biy va qorin qismlardan lar iborat 6 Iskabto- yomon yara kasalligi pardaqanot- parlar qo‘zg‘atuvchisi lilar",
        options: ["A) 1, 2, 4;", "B) 2, 4, 6;", "C) 3, 4, 6;", "D) 2, 4, 5;"],
        correctAnswer: "D",
      },
      {
        id: 14,
        number: 15,
        question:
          "Emal (a)% mineral (fosfor va kalsiy, biroz ftor) tuzlardan, dentin (b) % organik va (c) % mineral (fosfor, kalsiy, magniy, ftorli kaliy)dan iborat.",
        options: [
          "A) a- 96-97 b-38 c-70",
          "B) a- 95-96 b-28 c-72",
          "C) a- 96-97 b-28 c-72",
          "D) a- 96-97 b-72 c-28",
        ],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 16,
        question:
          "Qaysi javobda o‘simlik urug‘larning unib chiqish harorati quyidagi tartida joylashtirilgan? tuxum 1 pasayadi 2 ortadi 3 (1-o‘simlik va 3-o‘simlik bir xil haroratda unib chiqadi)",
        options: [
          "A) sabzi  g‘o‘za  pomidor",
          "B) karam  rediska  g‘o‘za",
          "C) no‘xat  beda  rediska",
          "D) pomidor  qovun  g‘o‘za",
        ],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 17,
        question:
          "Odamda qon shakarini tartibga solish haqida quyidagi diagramma: Ba'zi hodisalar raqamlash orqali ko'rsatilgan. Raqamlar bilan ifodalangan hodisalardan 3 – hodisaga hos to‘g‘ri ma‘lumot aniqlang?",
        options: [
          "A) glyukoza molekulalarining glikogen sifatida parchalanishi",
          "B) glikogen molekulalarining glyukoza sifatida parchalanishi",
          "C) glyukozaning qonga o'tishiga erishilmaydi.",
          "D) Qon shakarini tartibga solishda jigar gormonlari samarali bo'ldi.",
        ],
        correctAnswer: "A",
      },
      {
        id: 17,
        number: 18,
        question:
          "Nazariy jihatdan DNK molekulasining birinchi zanji- rida nukleotidlar GCC ACG TGG TAG TGG GGT TCG GAT GCC ACG TGG GCC ACG TGG GCC ketma- ketlikda joylash-gan bo‘lib, 1,3,5,7,8,10,12-tripletlardagi hamma nukleo-tid transversiya uchragandan so‘ng hosil bo‘lgan DNK molekulasida vodorod bog‘lar soni o‘zgarmadi. Shu DNK molekulasiga xos malumot berilgan javobni aniqlang. A) B) C) D)",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 18,
        number: 19,
        question:
          "Urg‘ochi kaptar (2n=80) autosomalarining 16 jufti faqat gomozigota holatdagi genlarga, qolgan autosomalar esa geterozigota genlarga ega bo‘lsa, urg‘ochi kaptar kariotipida necha xil DNK va necha xil xromosoma mavjud?",
        options: ["A) 80; 41", "B) 68; 41", "C) 64; 41", "D) 66; 80"],
        correctAnswer: "A",
      },
      {
        id: 19,
        number: 20,
        question: "Quyidagi ko'rsatilgan qaysi rasmlarda ko'z nuqsonlari haqida aytib bo'lmaydi?",
        options: [
          "A) I holatda ko'z olmasining diametri odatdagidan uzunroq bo'lishi mumkin.",
          "B) II Bunday holda, ko'zning linzalari odatdagidan ko'ra yupqaroq bo'lishi mumkin.",
          "C) I xolatda shox pardaning tartibsiz egriligi tufayli, ob'ektiv nurlarni muntazam ravishda sindira olmaydi.",
          "D) I. botiq linzali II. Qavariq linza yordamida tuzatish mumkin.",
        ],
        correctAnswer: "A",
      },
      {
        id: 20,
        number: 21,
        question:
          "Sholi o‗simligining changdonida 90 ta diploid to‗plamli hujayra gametalar hosil qilishda ishtirok etdi. Agar o‗sim- likda 216 ta urug‗ hosil bo‗lgan bo‗lsa, hosil bo‗lgan spermiylarning necha foizi markaziy hujayraning urug‗lanishida qatnashmagan?",
        options: [
          "A) 35",
          "B) 30",
          "C) 70",
          "D) 60 22. Daraxt Qo‘ziqorin Tulki Yuqoridagi mavjudotlarga tegishli; I. Nafas olish orqali CO ning hosil bo'lishi; 2 II. Fosforlanish yo'li bilan ATF hosil bo'lishi; III. ko'p hujayrali bo'lish; IV. Yadro mavjud Yuqoridagi xususiyatlardan qaysi biri rasmda tasvirlanga barcha tirik mavjudotlarga xos? A) Faqat III B) faqat II, IV C) I, II, III, IV D) Faqat I",
        ],
        correctAnswer: "B",
      },
      {
        id: 21,
        number: 23,
        question:
          "Gorilla ovogenezining reduksion bo‘linishning anafaza bosqichida mutatsiya tufayli 8-12-gomologik xromosoma- lar tarqalmay bir qutbga o‗tib, shu qutbdan ovotsit rivojlangan. Hosil bo‗lgan tuxum hujayra normal spermatozoid bilan urug‗lansa, hosil bo‗lgan zigotadagi xromosomalar holatini aniqlang.",
        options: ["A) 49", "B) 48", "C) 47", "D) 50"],
        correctAnswer: "D",
      },
      {
        id: 22,
        number: 24,
        question:
          "Oqsil sintezida sodir bo‗ladigan jarayonlar to‗g‗ri ketma-ketlikda berilgan javobni aniqlang. 1) DNK asosida i-RNKning sintezlanishi; 2) oqsilning tuzilmasi haqidagi axborot yadrodan sitoplazmaga o‗tishi; 3) polipeptid zanjirning ribosomadan ajralishi; 4) i-RNK kodonlariga t-RNK antikodonlarining komplementar tarzda bog‗lanishi.",
        options: ["A) 4, 1, 2, 3", "B) 3, 1, 4, 2", "C) 4, 1, 3, 2", "D) 1, 2, 4, 3"],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 25,
        question:
          "Quyida olimlar o'simliklarni tasniflashda foydalanadi- gan filogenetik daraxt keltirilgan. Filogenetik daraxtdagi tallanish nuqtalari tirik mavju- dotlarning har xil xususiyatlariga bog'liq. Masalan, X xususiyati qirqquloqlarni moxlardan ajratib turadigan xususiyatdir. Quyidagi juftliklarning qaysi biri X, Y va Z xususiyatla- riga to'g'ri keladi? X Y Z A Hujayra O‘tkazuvchi Gul devori to‘qima B O‘tkazuvchi Qo‘sh urug‘lanish Meva to‘qima C Ildiz Spermi Murtak xalta sistemasi D Spora Urug‘ Qo‘sh urug‘lanish",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 24,
        number: 26,
        question:
          "Kasalliklarni sabablarini juftlangan to‘g‘ri javobni aniqlang. a) nevrit; b) nevralgiya; d) radikulit; e) polimiyelit; 1) orqa miyani bel va dumg‘aza qismidan chiqadigan nervlarni qisilib qolishi; 2) orqa miyani harakatlan- tiruvchi neyronlarning virusli kasalligi; 3) sezuvchi nerv tolasini yallig‘lanishi; 4) harakatlanuvchi nervlarni zararlanishi",
        options: [
          "A) a-4; b-1; d-3; e-2;",
          "B) a-4; b-3; d-1; e-2;",
          "C) a-1; b-2; d-3; e-2;",
          "D) a-3; b-2; d-4; e-1; 27. Yuqoridagi reaktsiyalarga kelsak, K, L va N aminokislota-lar ekanligi ma'lum. I. M - dipeptid va uning tarkibida tuzilishida peptid aloqasi mavjud. II. T ning molekulyar og'irligi, K, L va N ning umumiy molekulyar og'irligi uning vazniga teng. III. M va T hosil bo'lganda suvsizlanish sodir bo'ladi. IV. T sintezi paytida hosil bo'lgan bog'lanishlar soni suv molekulalari soniga teng. Qaysi gaplar to'g'ri? A) Faqat I B) I va II C) II va IV D) I, II va IV",
        ],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 28,
        question:
          "Eshitish (a), muvozanat (b) markazlarining retseptorlari quloqning qaysi qismida joylashgan?",
        options: [
          "A) a-perelimfa suyuqligida, b-endolimfa suyuqligida",
          "B) a-endolimfa suyuqligida b-ovalsimon xaltachalar va naychalar ichida",
          "C) a-yarim doira kanalchalar; b- chig‘anoq",
          "D) a-chig‘anoqda; b- ichki quloqning bo‘shliq qismida",
        ],
        correctAnswer: "D",
      },
      {
        id: 26,
        number: 29,
        question:
          "Pista meva hosil qiladigan to'g'ri (a) va qiyshiq gulli (b) o'simliklarni aniqlang.",
        options: [
          "A) a - kungaboqar, bo'tako'z; b - karrak, kakra",
          "B) a - andiz, topinambur; b - shuvoq, kungaboqar",
          "C) a - tirnoqgul, bo'yimadaron; b - bo'tako'z, maxsar",
          "D) a - olma, na'matak; b - beda, nastarin",
        ],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 30,
        question:
          "Insonda oziqlanish orqali organizmga qabul qilingan X moddasining ovqat hazm qilish trakti bo‘ylab o‘zgarish miqdori quyidagi grafikda keltirilgan. Quyidagilardan qaysi biri X bo'lishi mumkin?",
        options: ["A) tuzlar", "B) oqsil", "C) lipid", "D) kraxmal"],
        correctAnswer: "C",
      },
      {
        id: 28,
        number: 28,
        question:
          "Biologik membranalar va hujayra organoidlarining tuzilishi hamda funksiyasiga oid umumiy qonuniyatlarni aniqlang.",
        options: [
          "A) Plazmatik membrana yarim o‘tkazuvchanlik xususiyatiga ega",
          "B) Faqat hayvon hujayralarida xloroplastlar mavjud bo‘ladi",
          "C) Ribosomalar ikki qavat membrana bilan o‘ralgan organoid",
          "D) Mitoxondriyalarda ATF sintezi amalga oshmaydi",
        ],
        correctAnswer: "A",
      },
      {
        id: 29,
        number: 29,
        question:
          "DNK replikatsiyasi va oqsil biosintezi (transkripsiya, translatsiya) jarayonlariga xos xususiyatlarni aniqlang.",
        options: [
          "A) Transkripsiya jarayonida i-RNK molekulasi sintezlanadi",
          "B) Translatsiya hujayra yadrosida amalga oshadi",
          "C) Replikatsiya jarayonida riboza qandlari ishtirok etadi",
          "D) Komplementarlik qoidasiga ko'ra adenin har doim sitozinga birikadi",
        ],
        correctAnswer: "A",
      },
      {
        id: 30,
        number: 30,
        question:
          "Genetika qonuniyatlari: Mendelning birinchi va ikkinchi qonunlariga muvofiq F2 bo'g'indagi ajralish nisbatini ko'rsating.",
        options: [
          "A) Monoduragay chatishtirishda fenotip bo'yicha 3:1 nisbat",
          "B) Diduragay chatishtirishda genotip bo'yicha 9:3:3:1 nisbat",
          "C) Chala dominantlikda fenotip bo'yicha 3:1 nisbat",
          "D) Tahliliy chatishtirishda doimo 1:2:1 nisbat",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 14,
    title: "Variant 14",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Yeryong‗oq o‗simligi tuzilishiga mos keladigan mantiqiy tushunchalarni aniqlang.",
        options: [
          "A) oddiy barg, o‗t poya, murakkab gulqo‗rg‗on",
          "B) urug‗chi, dukkak meva, oddiy gulqo‗rg‗on",
          "C) murakkab barg, gul, o‗tkazuvchi nay",
          "D) murakkab barg, qo‗zoq meva, yog‗och poya",
        ],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question: "Quyidagi sxema qaysi hayvonning qon aylanish sistemasini ifodalaydi?",
        options: ["A) vapiti", "B) agama", "C) xumbosh", "D) qalqontumshuq"],
        correctAnswer: "A",
      },
      {
        id: 3,
        number: 3,
        question: "Aloe uchun xos xususiyatlar to‘g‘ri berilgan javobni toping.",
        options: [
          "A) Ildizpoyali ko‗p yillik o‗simlik. Barg va poyalari hushbo‗y hidga ega. C vitamini qonni suyultiradi, arterial bosimni tushiradi",
          "B) ildizpoyali ko‗p yillik o‗t. Xalq tabobatida ildizpoyasidan tayyorlangan qaynatma quruq yo‗tal, tomoq og‗rig‗iga davo sifatida ishlatiladi",
          "C) Ildizpoyali ko‗p yillik o‗simlik. Barg va poyalari hushbo‗y hidga ega. Nafas yo‗li kasalliklarining oldini olishda, jigar xastaliklarini davolashda keng qo‗llaniladi.",
          "D) shamollash, oshqozon-ichak kasalliklarini davolashda foyda beradi",
        ],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 4,
        question:
          "Nozima maktabga ketayotganida notanish kimdur uni chaqirdi, notanish ovoz edi, u sergak tortdi va boshini burib tovush kelgan tomonga qaradi. Bu holatda qanday refleks yuzga keldi?",
        options: [
          "A) shartsiz refleks",
          "B) ichki shartli refleks",
          "C) chamalash refleksi",
          "D) induksion tormozlanish refleksi",
        ],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question: "Rasmdagi organoid haqidagi to‗g‗ri fikrni aniqlang.",
        options: [
          "A) turgorlikni ta‘minlaydi",
          "B) tillakoid va stroma qismlarga ega",
          "C) bir qavat membrana bilan o‗ralgan",
          "D) umumiy ichki aylanma tizimini hosil qiladi",
        ],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question:
          "Ikkita kolbada go‗sht qaynatib, birinchi idish og‗zini ochiq qoldirdi. Ikkinchi idishga «S» shaklidagi naycha uladi. Uch kundan so‗ng birinchi idishdagi qaynatmaning aynib qolganligi, ikkinchi idishdagi qaynatmaning buzilmaganligini aniqladi. Quyidagi tajribani kim o‘tkazgan.",
        options: [
          "A) Yolqin Xolmatovich To‘raqulov",
          "B) Franchesko Redi",
          "C) Jozeff Pristli",
          "D) Lui Paster",
        ],
        correctAnswer: "B",
      },
      {
        id: 7,
        number: 7,
        question:
          "Noma‘lum organizm 3 marta meridianal bo‘linganda blastomerlaridagi jinsiy xromosomalar soni somatik hujayrasidagi xromosomalari sonining 5% ini tashkil etsa, shu organizm hujayrasi mitoz bo‘linishining anafaza bosqichida nechta DNK bo‘ladi?",
        options: ["A) 20", "B) 40", "C) 60", "D) 80"],
        correctAnswer: "B",
      },
      {
        id: 8,
        number: 8,
        question:
          "Olimlarning biologiya fani rivojiga qo‗shgan hissalari va aniqlagan kashfiyotlari to‗g‗ri ko‗rsatilgan javobni aniqlang. 1) Tatum – bakteriyalarda jinsiy ko‗payish sodir bo‗lishini; 2) Navashin – irsiy o‗zgaruvchanlikning gomologik qatori; 3) Jinder – transduksiya hodisasi; 4) Shpeman – yuksak hayvonlarni klonlash.",
        options: ["A) 1, 3", "B) 2, 3", "C) 2, 4", "D) 3, 4"],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 9,
        question: "Quyidagi sxemada qaysi o‗simlikning ko‗payish jarayoni keltilgan?",
        options: [
          "A) funariya yo‗sini",
          "B) dala qirqbo‗g‗imi",
          "C) virgin archasi",
          "D) zuhrasoch qirqqulog‗i",
        ],
        correctAnswer: "D",
      },
      {
        id: 10,
        number: 10,
        question: "To‗g‗ri fikrni aniqlang.",
        options: [
          "A) Mezozoy erasining trias davrida ochiq urug‗lilar paydo bo‗lgan",
          "B) Paleozoy erasining devon davrida ochiq urug‗lilar paydo bo‗lgan",
          "C) Idioadaptatsiya natijasida parazit o‗simliklar paydo bo‗lgan",
          "D) Degeneratsiya natijasida organizm tuzilishi soddalashadi",
        ],
        correctAnswer: "B",
      },
      {
        id: 11,
        number: 11,
        question:
          "Makkajoʻxorini soʻtasiga tushgan 450 ta changni 60% ushlab qolindi. Ulardan xosil boʻlgan spermiylarni 40% i urugʻlanishda qatnashishi natijasida hosil boʻlgan donlarning barchasi yetilib urugʻ hosil boʻldi. Urugʻlar tinim davrini oʻtagach tuproqqa ekildi va 25% i unib chiqmadi. Shu unib chiqqan makkajoʻxorilar bir yoz davomida necha litr suv bugʻlatishini aniqlang.",
        options: ["A) 18600 l", "B) 16200 l", "C) 14800 l", "D) 21400 l"],
        correctAnswer: "B",
      },
      {
        id: 12,
        number: 12,
        question:
          "Siklopni nerv sistemasi qanday tuzilgan? a) halqum usti tugunlari; b) halqum osti nerv tugunlari; c) bosh miya; d) halqum atrofi nerv halqasi; e) qorin nerv zanjiridan; f) yelka nerv zanjiri;",
        options: ["A) a, b, c, d", "B) b, d, e, f", "C) a, b, d, e", "D) b, e, f, a"],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question:
          "Ayirish organlari evolutsiyasida paydo bo‗l-gan parenximada joylashgan uchi berk bir qavatli epiteliy to‗qimalardan iborat tarmoqlan-gan naychalar nima deyiladi?",
        options: ["A) metanefridiy", "B) bo‗yin bezlari", "C) protonefridiy", "D) malpigi naylari"],
        correctAnswer: "B",
      },
      {
        id: 14,
        number: 14,
        question:
          "Shumelyanskiy – Baumen kapsulasi(a), Genle halqasi(b), Malpigi chigali(c) ga tegishli to‗g‗ri fikrlarni belgilang. 1) ichida mayda qon tomirlar joylashgan; 2) ikkilamchi naychalardan boshlanib, piramida so‗rg‗ichlariga ochiladi; 3) buyrak mag‗iz qismida joylashgan; 4) suvning ortiqcha qismi qonga qayta shimilib, haqiqiy siydik hosil bo‗ladi; 5) birlamchi siydik hosil bo‗ladi.",
        options: [
          "A) a – 5; b – 4; c – 1",
          "B) a – 2; b – 3; c – 5",
          "C) a – 1; b – 4; c – 3",
          "D) a – 5; b – 2; c – 4",
        ],
        correctAnswer: "C",
      },
      {
        id: 15,
        number: 15,
        question:
          "Quyidagi sxemada keltirilgan oziq zanjirida o‗simlik 100 tonna massaga ega bo‗lsa, chittak tana massasi qanchaga (kg) ortgan?",
        options: ["A) 2100", "B) 210", "C) 1500", "D) 150"],
        correctAnswer: "A",
      },
      {
        id: 16,
        number: 16,
        question:
          "Otning gemoglobin oqsili zanjiri sinteziga javobgar gen tarkibidagi nukleotidlar sonini aniqlang.",
        options: ["A) 363 yoki 513", "B) 696 yoki 996", "C) 726 yoki 1026", "D) 348 yoki 498"],
        correctAnswer: "A",
      },
      {
        id: 17,
        number: 17,
        question: "X qismda qaysi oqsil bo‗lmaydi?",
        options: ["A) albumin", "B) fibrinogen", "C) trombin", "D) tromboplastin"],
        correctAnswer: "C",
      },
      {
        id: 18,
        number: 18,
        question:
          "Kanakunjut uchun tegishli javobni aniqlang? 1-hayotiy shakli bir yillik o`t, 2-hayotiy shakli ko`p yillik o`t, 3-urug`i tarkibida zaharli modda bor, 4-urug`i tarkibida zaharli modda yo‘q, 5-bo‗yi 2-3 metr keladi, 6- bo‗yi 1 metr keladi",
        options: ["A) 1,4,6", "B) 2,4,6", "C) 2,3,5", "D) 1,3,5"],
        correctAnswer: "A",
      },
      {
        id: 19,
        number: 19,
        question:
          "Orttirilgan immun tanqisligi sindromining latentlik davriga xos belgilarni aniqlang. 1) limfa bezlarining og‗riqsiz yiriklashuvi kuzatiladi; 2) eshakyemi toshadi; 3) 5-10 yil davom etadi; 4) ich ketishi kuzatiladi; 5) stomatit, gerpes, kandidoz kuzatiladi; 6) virusli infeksiyaning so‗nggi o‗limoldi davri hisoblanadi; 7) harorat ko‗tariladi;",
        options: ["A) 2, 4", "B) 3, 6", "C) 1, 3", "D) 5, 7"],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question: "Sxemaga mos javobni aniqlang.",
        options: [
          "A) K – RNK; L – DNK; M – kraxmal; N – saxaroza",
          "B) K – ATF; L – DNK; M – maltoza; N – laktoza",
          "C) K – ADF; L – ATF; M – selluloza; N – maltoza",
          "D) K – timin; L – uratsil; M – laktoza; N – saxaroza",
        ],
        correctAnswer: "B",
      },
      {
        id: 21,
        number: 21,
        question: "Quyidagi ketma-ketlikdagi hayvonlarda yurak bo‗lmalari soni qanday o‗zgaradi?",
        options: [
          "A) a – ortadi; b – ortadi",
          "B) a – o‗zgarmaydi; b – ortadi",
          "C) a – ortadi; b – o‗zgarmaydi",
          "D) a – o‗zgarmaydi; b – kamayadi",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 22,
        question:
          "Tish emali gipoplaziyasi X xromosomaga birikkan, polidaktiliya autosomaga birikkan dominant belgilar sifatida irsiylanadi. Onasi oltibarmoqli, otasi tish emali gipoplaziyasi bilan kasallangan oilada sog‗lom va normal barmoqli o‗g‗il tug‗ildi. Ota-ona genotipini aniqlang.",
        options: [
          "A) ♀ aaXbXb ˟ ♂ AaXBY",
          "B) ♀ AaXbXb ˟ ♂ aaXBY",
          "C) ♀ AaXBXb ˟ ♂ aaXBY",
          "D) ♀ AaXBXB ˟ ♂AAXBY",
        ],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 23,
        question:
          "Quyidagi sxemada hayvon, o‗simlik, zamburug‗ uchun tegishli ma‘lumotlar keltirilgan. Bunga ko‗ra quyidagi qaysi ma‘lumotlar 4- va 3- ifodalarga mos keladi?",
        options: [
          "A) 4 – ATF ni sitoplazma va mezasomada sintezlaydi; 3 – hujayra qobig‗i sellulozadan iborat",
          "B) 4 – zahira modda sifatida glikogen to‗playdi; 3 – irsiy axboroti xromasomalarda joylashgan",
          "C) 4 – parazit oziqlanish usuliga ega; 3 – zahira modda sifatida kraxmal to‗playdi",
          "D) 4 – birga yashashi mikoriza deyiladi; 3 – hujayra qobig‗i xitindan iborat",
        ],
        correctAnswer: "A",
      },
      {
        id: 24,
        number: 24,
        question: "Pushti gulli nomozshomgul o‗simligi o‗zidan changlanishi natijasida, …",
        options: [
          "A) avlodning 75% i qizil gulli o‗simliklar olinadi",
          "B) 3 xil genotipik, 2 xil fenotipik sinf hosil bo‗ladi",
          "C) Mendelning ajralish qonuni yuz beradi",
          "D) dominantlik qonuni kuzatiladi",
        ],
        correctAnswer: "B",
      },
      {
        id: 25,
        number: 25,
        question:
          "Quyida gemofiliya kasalligini irsiylanishiga oid shajara keltirilgan. Unga ko‗ra qaysi raqamlar bilan ko‗rsatilgan organizmlar ushbu belgi bo‗yicha geterozigota genotipli?",
        options: ["A) 1, 2", "B) 1, 3", "C) 2, 3", "D) 3, 4"],
        correctAnswer: "B",
      },
      {
        id: 26,
        number: 26,
        question: "Jinsni aniqlashning qaysi usuli berilgan?",
        options: ["A) progam", "B) gametofit", "C) singam", "D) sporofit"],
        correctAnswer: "C",
      },
      {
        id: 27,
        number: 27,
        question:
          "Shershevskiy-Terner sindromi bilan kasallangan qizning 1 ta birlamchi jinsiy hujayrasining 3 marta mitoz bo‘linishidan hosil bo‘lgan hujayralarda meyoz kuzatildi. Meyoz bo‘linishdan keyin hosil bo‘lgan hujayralarning nechtasi 22 ta xromasomaga ega bo‘ladi.",
        options: ["A) 4 tasi", "B) 12 tasi", "C) 16 tasi", "D) 8 tasi"],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 28,
        question: "Orqa oyoqning erkin suyaklari tasqarada qaysi qismlardan tashkil topgan?",
        options: [
          "A) son, boldir, ilik, barmoq",
          "B) son, boldir, tovon, panja",
          "C) yelka, bilak, tirsak, panja",
          "D) yelka, bilak, kurak, barmoq",
        ],
        correctAnswer: "A",
      },
      {
        id: 29,
        number: 29,
        question: "Qaysi hayvonlar orasida ―yirtqich – o‗lja‖ munosabati bo‗lmaydi?",
        options: [
          "A) jirafa va sher",
          "B) karkidon va tasqara",
          "C) jirafa va sichqon",
          "D) tasqara va gepard",
        ],
        correctAnswer: "B",
      },
      {
        id: 30,
        number: 30,
        question:
          "G1 davrida DNK miqdori X bo‗lgan hujayra-ning G2, profaza va anafaza davrlaridagi DNK miqdori uchun qaysi javob mos keladi?",
        options: ["A) X – X – X", "B) X – 2X – X", "C) 2X – X – X/2", "D) 2X – 2X – 2X"],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 15,
    title: "Variant 15",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Quyidagi rasmda qanday mutatsiya berilgan? 1) deletsiyasi; 2) dublikatsiyasi; 3) inversiyasi; 4) translokatsiya;",
        options: ["A) 1;", "B) 2;", "C) 3;", "D) 4;"],
        correctAnswer: "B",
      },
      {
        id: 2,
        number: 2,
        question:
          "Tiriklikning hujayra darajasida sodir bo‘lmaydigan jarayonlarni aniqlang. 1) silliq endoplazmatik to‘rda uglevod sintezining amalga oshishi; 2) uglerodning biogen migratsiyasi; 3) nerv-gumoral boshqarilish; 4) mitoxondriyaning bo‘linib ko‘payisbi; 5) murg‘ob kenja turining hosil bo‘lishi.",
        options: [
          "A) 2, 5",
          "B) 3, 4 С) 1, 3 D) 1, 4",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 3,
        number: 3,
        question:
          "Postembrional davri to‘g‘ri rivojlanish yo‘li bilan amalga oshuvchi umurtqasiz organizmlarni aniqlang. 1) belyanka; 2) butli o‘rgimchak; 3) qoramol tasmasimon chuvalchangi; 4) suvarak; 5) dreysena; 6) sariq chayon; 7) assidiya; 8) qoraqurt; 9) langust; 10) mangust; 11) kana; 12) falanga; 13) agama; 14) xameleon;",
        options: ["A) 2, 6, 8, 10;", "B) 2, 6, 13, 14;", "C) 8, 9, 11, 12;", "D) 2, 6, 8, 12;"],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 4,
        question:
          "Rasmdagi bo‗linish jarayonlari (I, II) gametogenezning qaysi davrlarida amalga oshadi?",
        options: [
          "A) I – ovogenezning yetilish davri; II – ovogenezning ko‗payish davri;",
          "B) I – spermatogenezning yetilish davri; II – ovogenezning ko‗payish davri;",
          "C) I – spermatogenezning yetilish davri; II – spermatogenezning ko‗payish davri",
          "D) I – spermatogenezning ko‗payish davri; II – spermatogenezning yetilish davri",
        ],
        correctAnswer: "A",
      },
      {
        id: 5,
        number: 5,
        question:
          "Quyidagilardan buyrakni po‘stloq qismida bo‘ladigan- larni aniqlang. 1) nefron kapsulasi; 2) konussimon piramidalar 3) sorg‘ichlar; 4) ikkilamchi kapillar; 5) birlamchi nay; 6) ikkilamchi nay; 7) birlamchi kapillar; 8) Genle halqasi; 9) sfinkter;",
        options: ["A) 5, 7, 6, 1;", "B) 1, 8, 9;", "C) 5, 6, 7, 4, 2;", "D) 3, 2, 8, 9;"],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question:
          "Noto‘g‘ri ma‘lumotni aniqlang. 1) 89 ta peptid bog‘iga ega oqsil sintezida qatnashgan i-RNK da 270 ta nukleotid bo‘ladi; 2) 210 ta nukleotiddan iborat DNK asosida sintezlangan oqsil molekulasida 70 ta amino-kislota bo‘ladi; 3) 120 ta riboza molekulasi bo‘lgan i-RNK dan 40 ta peptid bog‘li oqsil molekulasi hosil bo‘ladi; 4) 358 ta fosfodiefirli nukleotiddan iborat DNK dan 180 molekula ribozaga ega i-RNK hosil bo‘ladi",
        options: [
          "A) 2 ,3",
          "B) 2, 4 С) 1, 3 D) 1, 4",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 7,
        number: 7,
        question:
          "Qaysi organizmlar postembrional davrda xordaga (a), nerv nayiga (b), jabra yoriqlariga (c) ega bo‘ladi? 1) qilqquruq; 2) zog‘ora; 3) lansetnik; 4) povituxa; 5) ko‘k kit; 6) assidiya; 7) sterlyad; 8) kit akulasi;",
        options: [
          "A) a - 1, 7; b - 3; с - 2, 8;",
          "B) a - 1, 3 ; b - 6; с - 5, 8;",
          "C) a - 3; b - 2,3 ; с - 4, 5;",
          "D) a - 4, 6; b - 3, 5; с",
        ],
        correctAnswer: "D",
      },
      {
        id: 8,
        number: 8,
        question:
          "Jadvalda va organizmlar uchun ayrim xususiyatlar berilgan. Xususiyat K L Plazmid + + Fotosintez qilish -- + Oqsil sintezi + + Endoplazmatik to‘r + -- Shunga ko‘ra K va L ga mos bo‘lishi mumkin bo‘lgan organizmlarni belgilang.",
        options: [
          "A) K-rishta; L-fillofora;",
          "B) L-achitqi; K-xrokokk;",
          "C) K-achitqi; L-nostok;",
          "D) L-ulotriks; K-achitqi;",
        ],
        correctAnswer: "D",
      },
      {
        id: 9,
        number: 9,
        question:
          "Meyozning anafaza I bosqichi uchun mos holatlarni belgilang. a) konyugatsiyalashgan xromosomalar ekvator tekisligida joylashadi; b) xromosomaning xromatidalari birlamchi belbog‘ bilan birikkan; c) xromosomalar qutblarda to‘planadi; d) xromosomalar kuchli spirallashgan holatda bo‘ladi; e) xromosomalarning gaploid to‘plami",
        options: ["A) b, с;", "B) d, e;", "C) a, c, e;", "D) a, b, d;"],
        correctAnswer: "B",
      },
      {
        id: 10,
        number: 10,
        question:
          "Xirzutum g‘o‘zasida urug‘lanish natijasida bir nechta zigota hosil bo‘ldi. Zigotalardagi xromosomalarning umumiy soni 9360 ta bo‘lsa, markaziy hujayrani urug‘lantirishda ishtirok etgan spermiylar sonini toping.",
        options: ["A) 180", "B) 120", "C) 240", "D) 360"],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 11,
        question: "O‘simliklarning rivojlanishi haqidagi ma‘lumotlardan noto‘g‘risini aniqlang.",
        options: [
          "A) Funariyaning rizoidi zigotaning, sporangiybandi sporaning rivojlanishidan hosil bo‘ladi",
          "B) Zuhrasochning poya-barglari zigotaning, rizoidi sporaning rivojlanishidan hosil b o ‗ladi",
          "C) Dala qirqbo‘g ‗imining ildizpoyali bo‘g‘ini zigotaning, erkak o‘simtasi sporaning rivojlanishidan hosil bo‘ladi",
          "D) Archa ikki uyli o‘simlik bo‘lib, tuxum hujayrasi arxegoniyda yetiladi",
        ],
        correctAnswer: "B",
      },
      {
        id: 12,
        number: 12,
        question:
          "Bir kunlik iste‘mol qilingan ozuqaning organizmda ishlatilishi quyidagicha: Ozuqa katabolizm Anabolizm Oqsil(100g) Yog‘(100g) Uglevod(500g) Bunda oqsil va uglevoddan hosil bo‘lgan energiya jami dissimilatsiyadan hosil bo‘lgan energiyaning necha % ni tashkil etadi?",
        options: ["A) 35,8;", "B) 60;", "C) 50,33;", "D) 30,6;"],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question:
          "Quyda shajarasi berilgan probandning shajarasida qaysi kaslikning irsilanishi berilgan? - 2;",
        options: [
          "A) Y – xromosomaga birikkan kaslik",
          "B) Sitoplazmatik irsiylanishga oid kasalik",
          "C) X – xromosomaga birikkan dominant tipidagi kaslik",
          "D) X – xromosomaga birikkan retsessiv tipidagi kaslik",
        ],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 14,
        question:
          "Modifikatsion o‘zgaruvchanlikka xos xususiyatlarni aniqlang. 1) dominant yoki retsessiv xarakterga ega; 2) irsiylanmaydi; 3) irsiylanadi; 4) o‘zgaruvchanlik chegaralari genotip bilan aniqlanishi; 5) belgilarning o‘zgarishlari chegaralanmagan; 6) guruhli xarakterga ega;",
        options: ["A) 4, 6;", "B) 1, 3;", "C) 2, 5;", "D) 5, 6;"],
        correctAnswer: "B",
      },
      {
        id: 15,
        number: 15,
        question:
          "Bir oilaga mansub bo‗lgan qaysi o‗simliklar quyidagi ko‗rinishda unib chiqadi? 1) bug‗doy; 2) mosh; 3) sholi; 4) makkajo‗xori;5) karam; 6) xolmon; 7) soya; 8) o‗sma; 9) loviya.",
        options: ["A) 1, 3, 4", "B) 1, 4, 6", "C) 2, 5, 8", "D) 2, 7, 9"],
        correctAnswer: "C",
      },
      {
        id: 16,
        number: 16,
        question:
          "Tovuqlarda no‘xotsimon toj (Р) oddiy toj ustidan (p) dominantlik qiladi, patning qora rangi (В) oq rang (b) ustidan chala dominantlik qiladi. Bb genotipli tovuqlarning patlari havo rang bo‘ladi. Ikki belgisi bo‘yicha geterozigota organiz-mlar chatishtilsa avlodning qancha qismi oddiy tojli (a) va oq rang (b) bo‘ladi?",
        options: [
          "A) а – 1/4 ; b –1/2;",
          "B) а – 3/4; b – 6/16;",
          "C) а – 1/4 ; b – 1/4 ;",
          "D) а – 3/16; b – 1/8 ;",
        ],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question:
          "Tiriklikning organizm darajasidagi jarayonlarni aniqlang. 1) kenja turlarning paydo bo‗lishi; 2) nerv sistemasi orqali boshqarilish; 3) azotning davriy aylanishi; 4) exinokokkning finna hosil qilishi; 5) qorayaloqning uchib ketishi.",
        options: ["A) 1 va 4", "B) 2 va 3", "C) 2 va 4", "D) 3 va 5"],
        correctAnswer: "A",
      },
      {
        id: 18,
        number: 18,
        question:
          "O'simlikning erkak va urg'ochi jinsiy organlarining tuzilishi quyida ko'rsatilgan. Tuzilmalar haqidagi quyidagi fikrlardan qaysi biri noto'g'ri?",
        options: [
          "A) t va r - erkak organning qismlari.",
          "B) x, y va z urg'ochi jinsiy organ qismlari.",
          "C) x urug'lanish sodir bo'ladigan qisim.",
          "D) urug'lantirish nayidagi sperma yadrolari mikropile deb ataladigan teshik orqali z ga kiradi.",
        ],
        correctAnswer: "B",
      },
      {
        id: 19,
        number: 19,
        question: "Quyidagilardan qaysi biri viruslar haqida to'g'ri tushuntirish emas?",
        options: [
          "A) Ularda hujayra membranasi, yadro va organellalar yo'q.",
          "B) Ularning tarkibida genom sifatida DNK yoki RNK mavjud.",
          "C) Hujayin hujayralarni topa olmaganda, ular kristall tuzilish hosil qiladi.",
          "D) Prokariotik hujayralarda ko'paya olmaydi.",
        ],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question:
          "Odamlarda qon guruhlarining irsiylanishiga retsessiv epistatik genning ta‘siri Bombey fenomeni deyildi. Dominant allel qon guruhlariga ta‘sir qilmaydi, retsessiv allel esa istalgan genotipda 1-qon guruhini namoyon qiladi. 2 va 3 qon guruhli digeterozigota ota-onadan qanday avlod olindi?",
        options: [
          "A) 7 ta 1-qon guruh, 3 ta 2- qon guruh, 3 ta 3- qon guruh, 3 ta 4- qon guruh",
          "B) 4 ta 1- qon guruh, 4 ta 2- qon guruh, 4 ta 3- qon guruh, 4 ta 4- qon guruh",
          "C) 6ta 1- qon guruh, 4 ta 2- qon guruh, 3 ta 3- qon guruh, 3 ta 4- qon guruh",
          "D) 6 ta 1- qon guruh, 3 ta 2- qon guruh, 4 ta 3- qon guruh, 3 ta 4- qon guruh",
        ],
        correctAnswer: "D",
      },
      {
        id: 21,
        number: 21,
        question:
          "Organizmn tuzilishini umumiy darajasini, hayot faoliyatini yuksalishi (a) va murakkab tuzilishdan oddiy tuzilishga o‘tish (b) qanday nomlanadi?",
        options: [
          "A) a - aromorfoz; b - degeneratsiya",
          "B) a - mutualizm; b - sinoykiya",
          "C) a - idioadaptatsiya; b - degeneratsiya",
          "D) a - degeneratsiya;b - divergensiya",
        ],
        correctAnswer: "D",
      },
      {
        id: 22,
        number: 22,
        question:
          "Agar oshqozon hujayralaridan ajralib chiqqan karbonat angidrid burun orqali chiqib ketsa, u quyidagi qaysi struk-turadan o‘tmaydi?",
        options: ["A) O‘ng bo‘lmacha", "B) O‘pka venasi", "C) Alveola", "D) Bronx"],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 23,
        question:
          "Divergensiya (a) va konvergensiya (b) hodisalari to‘g‘ri ko‘rsatilgan jabovni aniqlang.",
        options: [
          "A) a – dengiz toshbaqasi va delfinlarda oyoqlarning eshkaksimon bo‘lishi; b – boychechak turkumiga mansub 30 ga yaqin turning mavjudligi",
          "B) a – ixtiozavr va sutemizuvchilardan delfinning tana tuzilishining o‘zaro o‘xshashligi; b – delfinning oldingi oyog‘i suzishga, otning oldingi oyog‘i chopishga moslashganligi",
          "C) a – odam va boshqa hayvonlar gemoglobin zanjiridagi aminokislotalar tarkibidagi farq; b – ko‘rshapalak va qushlarning qanoti",
          "D) a – xaltali krot va oddiy krot tashqi qiyofasining o‘zaro o‘xshashligi; b – chigirtka oyog‘ining sakrashga, suv qandalasi oyog‘ining suzishga moslashganligi",
        ],
        correctAnswer: "A",
      },
      {
        id: 24,
        number: 24,
        question: "Klaynfelter sindromi qaysi javobda tog'ri klassifikatsi- yalangan?",
        options: [
          "A) modifikatsion -mutatsion-genom- trisomiya",
          "B) modifikatsion -mutatsion-xromosoma-trisomiya",
          "C) genotipik-mutatsion-gen- trisomiya",
          "D) genotipik-mutatsion-genom–trisomiya",
        ],
        correctAnswer: "D",
      },
      {
        id: 25,
        number: 25,
        question:
          "Qoqshol qo‘zg‘atuvchisi hujayrasiga xos bo‘lmagan xususiyatlarni aniqlang. 1) yadro shakllanmagan; 2) lizosomalarga ega; 3) qalin hujayra qobig‘iga ega; 4) mitoxondriyalarga ega emas; 5) ribosomalarga ega emas.",
        options: ["A) 4,5;", "B) 2,4;", "C) 2, 5;", "D) 1,3;"],
        correctAnswer: "D",
      },
      {
        id: 26,
        number: 26,
        question:
          "Birlamchi suksessiya davrida o'simlik jamoalarida o'zga-rishlarning ketma-ketligi to'g'ri berilgan javobni aniqlang. 1) daraxtlar; 2) lishayniklar va suvo'tlar; 3) yo'sinlar; 4) o't o'simliklar; 5) aralash o'rmon; 6) butalar;",
        options: ["A) 1→2→3→4→5→6", "B) 2→4→3→5→1→6", "C) 2→4→6→5→1→3", "D) 2 →3→4→6→1→5"],
        correctAnswer: "B",
      },
      {
        id: 27,
        number: 27,
        question:
          "Quyidagi jadvalda X, Y, Z va T bilan tasvirlangan xorda- li hayvonlar guruhlari ba'zi xususiyatlarga ega (/) yoki yo'qligi ko'rsatilgan (0). Quyidagi gaplardan qaysi biri to‘g‘ri?",
        options: [
          "A) Z guruhidagi organizmlarning barchasida suyakdan tuzilgan skelet bor.",
          "B) X guruhning barchasida tanasi jun bilan qoplangan",
          "C) Z guruhning barchasi suzgi pufakka ega",
          "D) T guruh organizmlarda naysimon nerv sistemasi mavjud",
        ],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 28,
        question:
          "Genealogik metod orqali aniqlanga dominant(a) va retsessiv(b) kasaliklar berilgan javobni aniqlang. 1) gemofiliya; 2) braxidaktiliya; 3) ko‗z shox pardasining ko‗rlikka olib keladigan irsiy degeneratsiyasi; 4) qandli diabet; 5) sil kasalligiga moyillik; 6) shizofreniya; 7) kaltabarmoqlik;",
        options: [
          "A) a-1,4,6; b-2,3,5,7;",
          "B) b-7,2,3,5; a-4,1,6",
          "C) a-4,3,1; b-7,6,5,2;",
          "D) b-6,1,4; a-3,2,7,5",
        ],
        correctAnswer: "C",
      },
      {
        id: 29,
        number: 29,
        question:
          "Jayron (a), irbis (b), nitrifikator bakteriya (c) uchun mos tushunchalar to‗g‗ri berilgan javobni aniqlang.",
        options: [
          "A) a - xemotrof organizm; b - zararkunanda organizm; с - fototrof organizm",
          "B) a - konsument; b - yirtqich organizm; с - xemotrof organizm",
          "C) a - yirtqich organizm; b - konsument; с - geterotrof organizm",
          "D) a - konsument; b - xemotrof organizm; с - yirtqich organizm",
        ],
        correctAnswer: "B",
      },
      {
        id: 30,
        number: 30,
        question: "Odam organizmida himoyalanish xususiyatining uchinchi bosqichini aniqlang.",
        options: [
          "A) organizmga kirgan yot moddalarga qarshi antitelo va antitoksinlar ishlab chiqariladi.",
          "B) organizmga yuqumli kasallik qo‘zg‘atuvchilari kirishini oldi olinishi",
          "C) qonning oq qon tanachalari leykotsitlari faoliyat ko‘rsatadi.",
          "D) ichki sekretsiya bezlaridan ajraladigan timozin gormoni faoliyati tufayli",
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 16,
    title: "Variant 16",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question: "Quyidagi shajarada",
        options: [
          "A) R irsilanadigan belgi ko'rsatilga Shunga ko'ra, I. X, Y va Z bir xil genotipga ega emas. II. X, Y va Z bir xil fenotipga ega bo'lishi mumkin. III. X, Y va Z retsessiv fenotiplar bo'lishi ehtimoldan yiroq. Fikrlarning qaysi biri to'g'ri? A) faqat I",
          "B) faqat II D) I va III",
          "C) I va II",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question: "Bug‘doy avlodida 42 xromosomali turning paydo bo‘lishiga xos javobni aniqlang.",
        options: [
          "A) genotipik → mutatsion → xromosoma mutatsiya",
          "B) fenotipik → mutatsion → nuqtali mutatsiya",
          "C) genotipik → mutatsion → genom mutatsiya",
          "D) genotipik → kombinativ → gen mutatsiya",
        ],
        correctAnswer: "C",
      },
      {
        id: 3,
        number: 3,
        question: "Quyidagilardan qaysi biri limfa suyuqligi va qonning umumiy xususiyatidir?",
        options: [
          "A) Gemoglobinni tashish",
          "B) Ko'p sonli qizil qon tanachalariga ega bo'lish",
          "C) ular qizil rangda",
          "D) hazm bo'ladigan oziq -ovqat monomerini tashish",
        ],
        correctAnswer: "B",
      },
      {
        id: 4,
        number: 4,
        question:
          "Quyidagi rasmda odamdagi ayrim ichki sekretsiya bezlari raqamlash orqali berilgan. Shunga ko'ra, organizmdagi ayrim hodisalar va ularni amalga oshirishda ishtirok etuvchi ichki sekretsiya bezlari haqida qaysi biri to'g'ri berilgan? Moddalar Ichki Qondagi qand almashinuvini sekretsi-ya miqtorini tezlashtiradi bezlarini narmalashtiradi boshqaradi A I II III B II I III C III I II D II III I",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Hujayrada murakkab membrane tizimidan tashkil topgan (a), murakkab bog‘lamlarni hosil qiladigan (b) organoidlarga tegishli malumotlarni aniqlang. 1) bir qavat membrana bilan o‘raglan 2) faqat eukariotlar uchun xos 3) barcha hujayralar uchun umumiy 4) moddalarni sintez qilish va tashish 5) hujayra shaklini aniqlash 6) hujayraning ichki aylana tizimi hisoblanadi 7) yadro qobig‘i bilan bog‘langan 8) assimiliyatsiya jaroyonida qatnashadi 9) hujayra ichki tuzilmalarini haraktini ta‘minlaydi",
        options: [
          "A) a-2,4,9,1,4,7; b-2,9,4,7,9",
          "B) a-1,2,4,6,7,8; b-3,5,7,9",
          "C) a-8,1,2,4,6,7; b-2,5,7,9",
          "D) a-2,5,7,9; b-8,1,2,4,6",
        ],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question:
          "Quyida berilgan jadvaldagi dengiz suvo`tlarini ularga mos rang bilan to`g`ri juftlangan qatorlarni aniqlang. № Suvo`t nomi Rangi 1 Nemalion qizil 2 Ulva yashil 3 Spirogira yashil 4 Porfira sariq 5 Laminariya zarg`aldoq 6 Fillafora qizil",
        options: ["A) 1, 3, 5", "B) 1, 2, 6", "C) 3, 4, 5", "D) 2, 4, 6"],
        correctAnswer: "D",
      },
      {
        id: 7,
        number: 7,
        question:
          "Glikolipid(a), lipoprotein(b) qaysi organoidning mahsuloti? 1) Donador endoplazmatik to‗r; 2) Silliq endoplazmatik to‗r;",
        options: ["A) a-1,2; b-1,2;", "B) a-2; b-1;", "C) a-1,2; b-2,1;", "D) a-1; b-1,2;"],
        correctAnswer: "C",
      },
      {
        id: 8,
        number: 8,
        question:
          "Bitiniyaning somatik hujayrasi tuzilmalarida kechuv- chi jarayonlarni aniqlang. a) ribosoma; b) mitoxondriya; c) silliq endoplazmatik to‗r; 1) oqsil sintezlanishi; 2) yog‗ning parchalanishi; 3) uglevod sintezi; 4) karbonat angidridning ajralib chiqishi; 5) ATF energiyasining sarflanishi.",
        options: [
          "A) a-1, 5; b-3; с-2",
          "B) a-3; b-4; с-5",
          "C) a-4; b-1; с-3",
          "D) a-5; b-4; с-3",
        ],
        correctAnswer: "C",
      },
      {
        id: 9,
        number: 9,
        question:
          "Quyida keltirilgan X va Y apparatlarida nafas olish mexanizmi sxematiklashtirilgan. I. X majmuasi nafas olishni tasvirlash uchun ishlatiladi. II. nafas chiqarish tasvirlash uchun Y mexanizmi qo'llaniladi. III. X majmuasi insonda amalga oshishi uchun tashqi qovurg‘alar aro muskullar qisqaradi Bayonotlarning qaysi biri to'g'ri?",
        options: [
          "A) faqat I",
          "B) faqat II",
          "C) faqat III",
          "D) I, II va III 9. To'rt xil jonzotning o'zaro ta'siri quyida ko'rsatilgan. Diagrammaga ko'ra, qaysi ikkita tirik mavjudot o'rtasida-gi o'zaro ta'sirni raqobat deb aytish mumkin? A) 1 va 2 B) 1 va 3 C) 2 va 3 D) 2 va 4",
        ],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question: "Askaniya rambulesi bilan bog‘liq ma‘lumotni toping.",
        options: [
          "A) postinbop terili qo‘y zoti",
          "B) exinakokning asosiy xo‘jayini",
          "C) muflon bilan bir turkumga mansub",
          "D) toq tuyoqli hayvon",
        ],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 11,
        question:
          "Qaysi o‘simliklarning to‘pgulida qiyshiq gullar joylashadi? 1) sebarga boshchasida; 2) tangao‘t boshchasida; 3) qashqarbeda shingilida; 4) nastarin to‘pgulida; 5) gilos qalqonchasida; 6) piyoz soyabonida.",
        options: ["A) 1, 3", "B) 2, 4", "C) 3, 5", "D) 2, 6"],
        correctAnswer: "A",
      },
      {
        id: 12,
        number: 12,
        question:
          "Quloqning ba'zi qismlari rasmda raqamlangan. Raqamlangan qismlarning vazifalari haqidagi quyidagi fikrlardan qaysi biri noto'g'ri?",
        options: [
          "A) 1 Tovush to’lqinlarini to’playdi va quloq kanaliga uzatadi.",
          "B) 2 Tovush to`lqinlarini ichki quloqqa uzatadi.",
          "C) 2 Tovush to‘lqinlarini kuchaytiradi.",
          "D) 3 Tananing holatini aniqlaydi",
        ],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question:
          "Nereida(a), nematoda(b), rishta(c), exinakokk(d), jigar qurti(e)ni sistematik birliglari to‘g‘ri berilgan javobning aniqlang.",
        options: [
          "A) a-ko‘p tullilar sinfi; b-hayvonot dunyosi; c-to‘garak chuvalchanglar tipi; d-tasmasimon chuvalchanglar sinfi; e-yassi chuvalchanglar tipi;",
          "B) a-halqali chuvalchanglar tipi; b-to‘garak chuvalchang- lar tipi; c-hayvonot olami; d-yassi chuvalchanglar tipi; e-so‘rg‘ichlilar",
          "C) a-ko‘p tullilar sinfi; b-to‘garak chuvalchanglar tipi; c-to‘garak chuvalchanglar tipi; d-tasmasimon chuvalchang-lar sinfi; e-so‘rg‘ichlilar",
          "D) A, B, C",
        ],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 14,
        question:
          "Quyida ko'rsatilgan hujayrada meyoz fazasi ko'rinadi. Bu bosqichda meyozga uchragan ona hujayraning xromosoma soni qaysi variantda to‘g‘ri berilgan? Xromosoma Bosqich to’plammi A Metafaza I 2n=4 B Profaza II 2n=8 C Anafaza II 2n=8 D Anafaza I 2n=4 15. Yuqorida keltirilgan bargning kesimini tekshirganda, harflar bilan ko'rsatilgan bo'limlar uchun variantlarning qaysi so'zlari to'g'ri? I. d hujayralarida xloroplastlar mavjud emas. II. e tuzilishi o'simlikning epidermis to'qimalari III. a hujayralar asosiy to‘qimaga tegishli IV. b hujayralari atmosferaga fotosintez orqali kislorod yuboradi. V. c hujayralarda bargdagi asosiy fotosintez amalga oshadi",
        options: ["A) faqat I", "B) II, III", "C) faqat IV", "D) V, I"],
        correctAnswer: "B",
      },
      {
        id: 15,
        number: 16,
        question:
          "Quyida keltirilgan qon aylanish sistemasi organlari uchun xos bo'lgan ma'lumotlarni aniqlang. 1) ikki bo'lmali yurak; 2) uch kamerali yurak;",
        options: [
          "A) 1 – yurakdan faqat venoz qon o'tadi; 2 – chap bo'lmachasiga arterial qon quyiladi",
          "B) 1 – o'ng aorta ravog'ini hosil qiladi; 2 – qon yurakdan ikki marta o'tadi",
          "C) 1 – chap aorta ravog'ini hosil qiladi; 2 – qon yurakdan bir marta o'tadi",
          "D) 1 – yurakdan faqat arterial qon o'tadi; 2 – yurakdan aralash qon chiqadi",
        ],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 17,
        question:
          "X va Y disaxaridlarning sintezi quyida sxematik tarzda ko'rsatilgan. Quyidagi gaplardan qaysi biri to'g'ri emas?",
        options: [
          "A) X va Y tuzilishida glikozid bog‘lar mavjud.",
          "B) X va Y gidrolizlanmagan holda hujayra membranasi- dan o'talomaydi.",
          "C) X va Y suvsizlanish sintezi natijasida hosil bo'ladi.",
          "D) 1 va 2 - monosaxaridlar.",
        ],
        correctAnswer: "A",
      },
      {
        id: 17,
        number: 18,
        question: "Nuqtalar o'rniga mos javobni tanlang. Mezodermadan …………. rivojlanadi.",
        options: [
          "A) bo'ri va mushukning suyak to'qimasi",
          "B) kapalak va qo'ng'iz qanotlari",
          "C) gambuziya va karplarning ichak epiteliysi",
          "D) tipratikan va ilon teri epiteliysi",
        ],
        correctAnswer: "C",
      },
      {
        id: 18,
        number: 19,
        question:
          "Quyidagilardan qaysi birini sudralib yuruvchilar, qushlar va sutemizuvchilarning xususiyatlarini ko'rsatish uchun yaratilgan yuqoridagi venn diagrammasida \"X\" bilan ko'rsatilgan joyga yozib bo'lmaydi?",
        options: [
          "A) Albinoz kasaligi uchrashi",
          "B) Ikkilamchi buyraklar orqali ayirish",
          "C) yopiq qon aylanish tizimiga ega",
          "D) to‘qimalarga arteriyal qon borishi",
        ],
        correctAnswer: "D",
      },
      {
        id: 19,
        number: 20,
        question:
          "Avtopoliploidiyaning muvozanatsiz (a) va muvozanatli (b) turlarini ajrating. 1) 21 xromosomali bug‘doy; 2) 52 xromosomali go‘za; 3) 36 xromosomali xrizantema; 4) 72 xromosomali karam; 5) 24 xromosomali tog`olcha; 6) 21 xromosomali no‘xat;",
        options: [
          "A) a-2,3,4; b-1,5,6",
          "B) a-1,5,6; b-2,3,4",
          "C) a-2,5,6; b-1,3,4",
          "D) a-1,3,4; b-2,5,6",
        ],
        correctAnswer: "D",
      },
      {
        id: 20,
        number: 21,
        question:
          "Nuqtalar o‘rniga mos javobni tanlang. 1) trisomik - ….. 2) monosomik - ……. 3) tetrasomik - ……..",
        options: [
          "A) 1 – Daun sindromi; 2 – Shereshevskiy – terner sindromi; 3 – Klaynfelter sindromi",
          "B) 1 – X trisomiya; 2 – Daun sindromi; 3 - Klaynfelter sindromi",
          "C) 1 - Klaynfelter sindromi; 2 - Shereshevskiy – terner sindromi; 3 – X trisomiya",
          "D) 1 – Daun sindromi; 2 – Shereshevskiy – Terner sindromi; 3 – feneilketonuriya",
        ],
        correctAnswer: "B",
      },
      {
        id: 21,
        number: 22,
        question:
          "Quyida keltirilgan hayvonlardagi moslanishlar to‘g‘ri ketma-ketlikda keltirilgan javobni belgilang. 1) belyanka; 2) ninabaliq 3) gornastoy; 4) gelekonius; 5) chupchik; 6) korall aspidi.",
        options: [
          "A) 1-mimikriya; 2-maskirovka; 3-himoya rang; 4-ogohlan- tiruvchi rang; 5-maskirovka; 6-ogohlantiruvchi rang",
          "B) 1-ogohlantiruvchi rang; 2-mimikriya; 3-maskirovka; 4-himoya rang; 5-maskirovka; 6-mimikriya",
          "C) 1-mimikriya; 2-maskirovka; 3-ogohlantiruvchi rang; 4-himoya rang; 5-mimikriya; 6-ogohlantiruvchi rang",
          "D) 1-ogohlantiruvchi rang; 2-mimikriya; 3- himoya rang; 4-maskirovka; 5-himoya rang; 6-ogohlantiruvchi rang",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 23,
        question:
          "Quyidagi oziq-ovqat piramidasiga ko'ra, ekotizimda yashaydigan mavjudotlar yaratgan, qaysi hayvonlar hayvon oqsillarini oziq-ovqat sifatida iste'mol qilishi mumkin?",
        options: [
          "A) M, N va H C) K, L, M va N",
          "B) X, Y, Z va T D) K, L, M, N va H",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 24,
        question:
          "Ikki organizmning genotipi bir xil bo‘lib, quyidagi ko‘rinishga ega: WwPpRrSsDd. Agar 1 – va 5 alternativ belgilar chala, qolgan alternativ belgilar esa to‘liq dominant irsiylanish xarakteriga ega bo‘lsa, ushbu organizmlar o‘zaro chatishtirilishidan hosil bo‘lgan fenotipik (a) va genotipik (b) sinflar sonini aniqlang.",
        options: [
          "A) a = 72; b = 243",
          "B) a = 162; b = 243",
          "C) a = 48; b = 243",
          "D) a = 108; b = 243",
        ],
        correctAnswer: "A",
      },
      {
        id: 24,
        number: 26,
        question:
          "Jadvalning qaysi qatorida berilgan misollar evolutsiyaning yo'nalishiga muvofiq tarzda berilmagan? T/r Evolutsion jarayonda hosil Evolutsiya bo'lgan moslanishlar yo'nalishlari 1 Fotosintez jarayonining idioadaptatsiya paydo bo‗lishi Qishda sutemizuvchilarda 2 qalin yung qatlami hosil idioadaptatsiya bo‗lishi Jigar qurtida harakat 3 a‘zolarining yo‗qligi aramorfoz Gulli o‗simliklarda qo‗sh 4 urug‗lanishning paydo aramorfoz bo‗lishi Qovog‗arining Umumiy 5 ogohlantiruvchi rangining degradatsiya paydo bo‗lishi 6 Gulning paydo bo‗lishi aramorfoz",
        options: ["A) 2, 4, 6", "B) 1, 4, 5", "C) 2, 3, 5", "D) 1, 3, 5"],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 27,
        question:
          "Meyoz bo‘linishning Profaza I bosqichida 24 juft xromatidlar tetradasi bo‘lgan hayvonning bitta somatik hujayrasida mitozning postsintetik davrida jinsga bog‘liq bo‘lmagan nechta xromatid bo‘ladi?",
        options: ["A) 44", "B) 92", "C) 188", "D) 46"],
        correctAnswer: "D",
      },
      {
        id: 26,
        number: 28,
        question:
          "Quyidagi berilgan rasmga asoslangan holda (a) va (b) jarayonlar to‘g‘ri ifodalanmagan javobni aniqlang.",
        options: [
          "A) a - denaturatsiya; b - renaturatsiya;",
          "B) b - denaturatsiya; a - renaturatsiya;",
          "C) a - denaturatsiya; b - subbirlik;",
          "D) b - renaturatsiya; a - denaturatsiya;",
        ],
        correctAnswer: "D",
      },
      {
        id: 27,
        number: 29,
        question: "Nuqtalar o'rniga mos javobni tanlang. Kaptar zoti….",
        options: ["A) Leggorn", "B) Turman", "C) Gereford", "D) Yettiso"],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 30,
        question:
          "Do`lana tikani (a), maymunjon tikani (b), burgutning qanoti (c), zirk tikoni (d), oq akatsiya tikoni (e), qaysi organlarning o`zgarishidan hosil bo`lgan? 1)po`stloqning; 2) barg; 3) oldingi oyoq; 4) novda; 5) yon barg",
        options: [
          "A) a-4; b-2; c-3; d-1; e-5",
          "B) a-2; b-5; c-3; d-1; e-5",
          "C) a-4; b-1; c-3; d-2; e-5",
          "D) a-4; b-1; c-3; d-5; e-2",
        ],
        correctAnswer: "C",
      },
      {
        id: 29,
        number: 29,
        question:
          "DNK replikatsiyasi va oqsil biosintezi (transkripsiya, translatsiya) jarayonlariga xos xususiyatlarni aniqlang.",
        options: [
          "A) Transkripsiya jarayonida i-RNK molekulasi sintezlanadi",
          "B) Translatsiya hujayra yadrosida amalga oshadi",
          "C) Replikatsiya jarayonida riboza qandlari ishtirok etadi",
          "D) Komplementarlik qoidasiga ko'ra adenin har doim sitozinga birikadi",
        ],
        correctAnswer: "A",
      },
      {
        id: 30,
        number: 30,
        question:
          "Genetika qonuniyatlari: Mendelning birinchi va ikkinchi qonunlariga muvofiq F2 bo'g'indagi ajralish nisbatini ko'rsating.",
        options: [
          "A) Monoduragay chatishtirishda fenotip bo'yicha 3:1 nisbat",
          "B) Diduragay chatishtirishda genotip bo'yicha 9:3:3:1 nisbat",
          "C) Chala dominantlikda fenotip bo'yicha 3:1 nisbat",
          "D) Tahliliy chatishtirishda doimo 1:2:1 nisbat",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 17,
    title: "Variant 17",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Quyidagi rasmda qanday mutatsiya berilgan? 1) deletsiyasi; 2) dublikatsiyasi; 3) inversiyasi; 4) translokatsiya;",
        options: ["A) 1;", "B) 2;", "C) 3;", "D) 4;"],
        correctAnswer: "B",
      },
      {
        id: 2,
        number: 2,
        question:
          "Umurtqalilarda ichki urug‘lanish boshlanishidan oldin sodir bo‘lgan hayvonlardagi aromorfozlar berilgan javobni aniqlang. 1) qalqondor baliqlar paydo bo‘lishi; 2) suyakli baliqlar kelib chiqish; 3) dastlabki gulli o‘simliklarning paydo bo‘lishi; 4) sutemizuvchilarning xaltali va yo‘ldoshli kenja sinf vakillari paydo bo‘lishi; 5) bosh skeletsizlar kenja tipi paydo bo‘l; 6) uchuvchi hasharot – suvaraklar, ninachilar paydo bo‘lishi; 7) stegotsefallar paydo bo‘lishi; 8) qon aylanishining ikkita – katta va kichik doirali bo‘lishi; 9) arterial va venoz qon aralashmasligi; 10) ochiq urug‘li o‘simliklar paydo bo‘lishi",
        options: ["A) 1, 2, 3;", "B) 5, 7, 10;", "C) 4, 8, 9;", "D) 2, 5, 6;"],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question: "To'g'ri fikrni aniqlang.",
        options: [
          "A) Qo'ypechak havo harorati iliq kelgan kuz oylarida gullashda davom etadigan yovvoyi, o'rmalovchi poyali o'simlik",
          "B) Qulupnay qo'shimcha ildizli, 3 bargchali, poyasidan ko'payadigan bir yillik o't",
          "C) Pastki shoxlarida ko'saklari yetilib, uchki shoxlaridagi gullari ochilib turadigan o'simlik – madaniy, o'q ildiz tizimli, bir yillik o't",
          "D) Jag' - jag' mevasi qo'zoqcha, bir yillik madaniy o'simlik",
        ],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 4,
        question:
          "Somatik hujayrasida jinsiy xromasomlar gomolog bo‘lma-gan organizlarni ko‘rsating 1) urg‘ochi kaptar; 2)erkak gatteriya; 3)urg‘ochi zarg‘aldoq; 4) erkak shimpanze; 5) erkak drozofilla; 6) erkak nandu;",
        options: ["A) 2,4,6", "B) 1,4,6", "C) 1,3,5", "D) 3,2,1"],
        correctAnswer: "C",
      },
      {
        id: 5,
        number: 5,
        question:
          "38400 molekulyar og‘irlikdagi oqsil sintezlashda i-RNK ning 20% qismi ishtirok etmagan bo‘lsa, oqsil sintezida ishtirok etgan DNK dagi nukleotidlar yig‘indisini toping.",
        options: ["A) 1200", "B) 2400", "C) 3600", "D) 4200"],
        correctAnswer: "D",
      },
      {
        id: 6,
        number: 6,
        question:
          "II qon guruhiga ega rezus musbat, sog‘lom o‘g‘il bolaning katta qon aylanish doirasi arteriyalardagi qon plazmasida qanday moddalar bo‘ladi?",
        options: [
          "A) insulin, agglyutinin β, gemoglobin, glyukoza, fermentlar;",
          "B) gormonlar, vitaminlar, antitanalar, agglyutinogen A;",
          "C) tromboplasti, agglyutinin β, gormonlar, vitaminlar;",
          "D) aminokislota, mochevina, kreatinin, agglyutinin β;",
        ],
        correctAnswer: "A",
      },
      {
        id: 7,
        number: 7,
        question:
          "Ribosoma labaratoriyada gidroliz qilindi. Shu organoid gidrolizdan so‘ng necha tipdagi (a) va necha xil (b) monomer hosil qiladi?",
        options: ["A) a-2; b-24;", "B) a-2; b-25;", "C) a-1; b-4;", "D) a-2; b-5;"],
        correctAnswer: "C",
      },
      {
        id: 8,
        number: 8,
        question:
          "Quyida berilgan sxemada nuqtali mutatsiyaning turlari berilgan. Shunga ko‘ra 1,2,3,4,5,6ni aniqlang. a-transversiya; b- tranzitsiya;",
        options: [
          "A) b-3, 5, 2, 6; a-1,4;",
          "B) b-1,4; a-3, 5, 2, 6;",
          "C) b-5, 6; a-2, 1, 4, 3;",
          "D) b-2, 1, 4, 3; a-5, 6;",
        ],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 9,
        question:
          "Urg‘ochi kaptar (2n=80) autosomalarining 12 jufti faqat gomozigota holatdagi genlarga, qolgan autosoma- lar esa geterozigota genlarga ega bo‘lsa, urg‘ochi kaptar kariotipida necha xil DNK va necha xil xromosoma mavjud?",
        options: ["A) 80; 40", "B) 68; 40", "C) 66; 80", "D) 68; 41"],
        correctAnswer: "B",
      },
      {
        id: 10,
        number: 10,
        question: "Krot sistematikasiga oid ma‟lumotlarni aniqlang.",
        options: [
          "A) sudralib yuruvchilar sinfi, tangachalilar turkumi",
          "B) sutmizuvchilar sinfi, yirtqichlar turkumi",
          "C) sutemizuvchilar sinfi, hasharotxo'rlar turkumi",
          "D) qushlar sinfi, tuvaloqlar turkumi",
        ],
        correctAnswer: "C",
      },
      {
        id: 11,
        number: 11,
        question: "Jigar bezi rivojlanmagan organizmlami aniqlang.",
        options: [
          "A) lansetnik, suv shillig'i, cho'rtan",
          "B) suv shillig'i, treska, askarida, planariya",
          "C) lansetnik, jigar qurti, gambuziya",
          "D) jigar qurti, tasmasimon chuvalchang",
        ],
        correctAnswer: "A",
      },
      {
        id: 12,
        number: 12,
        question:
          "Itning koker zoti junining qora rangi dominant noallel A va B genlarga bog‘liq. Faqat A genining dominant holatda bo‘lishi junning malla, B genining dominant holatda bo‘lishi junning jigarrang, dominantgenlarning uchramasligi junning oq rangda bo‘lishini ta‘minlasa, digeterozigota genotipli organizmlar o‘zaro chatishti- rilgandan olingan avlodning necha foizini genotip jihatdan ota-onadan farq qiluvchi organizmlar tashkil qiladi?",
        options: ["A) 75", "B) 25", "C) 37,5", "D) 31,25"],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question: "Quyida ko‘rsatilgan organizmning genotipini aniqlang B 0 A 0 0 0 A A",
        options: ["A) I I", "B) I I", "C) I I", "D) I I"],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 14,
        question:
          "Embrional rivojlanishda ektodermadan (a) , mezoder- madan (b) va endodermadan (c) xosil bo‘ladigan organlar- ni aniqlang. 1) buyrak; 2) oshqozon; 3) muskul; 4) sezgi organlari; 5) tish email; 6) ingichka ichak;",
        options: [
          "A) a— 4, 5; b— 1, 3; c— 2, 6",
          "B) a— 1, 3; b— 2, 5; c— 4, 6",
          "C) a— 3, 6; b— 2, 5; c— 1, 4",
          "D) a— 3, 5; b— 4, 6; c— 1, 2",
        ],
        correctAnswer: "D",
      },
      {
        id: 15,
        number: 15,
        question:
          "Quyidagi xodisalarga mos javoblarni juftlang. 1) mitoz G 9 juft xromosoma; 2) meyoz profaza I 16 ta 1 xromatida; 3) mitoz anafaza 48 xromosoma",
        options: [
          "A) 1— xrizantema; 2— drozofila; 3— tamaki",
          "B) 1— karam; 2— tog‘olcha; 3— shimpanze",
          "C) 1— olcha; 2— bug‘doy; 3— xirzutum",
          "D) 1— herbatsium; 2— makkajo‘xori; 3— olxo‘ri",
        ],
        correctAnswer: "D",
      },
      {
        id: 16,
        number: 16,
        question:
          "Fenilketonuriya (a) va albinizm (b) da xos belgilarni aniqlang. 1) ressiv belgi; 2) moddalar almashinuvibuzilishi bilan bog‘liq; 3) jinsiy xromosoma bilan bog‘liq; 4) faqat Y- xromosoma bilan bog‘liq; 5) nerv sistemasi jarohatlana-di; 6) aqliy zaiflik paydo bo‘ladi; 7) terida pigmentlar bo‘lmaydi; 8) ko‘rish qobiliyati pasayadi;",
        options: [
          "A) a-1,2,5,6; b-1,2,7,8;",
          "B) a-1,4,6,8 b-2,5,7,8;",
          "C) a-1,2,5,6; b-1,3,7,8;",
          "D) a-1,2,7,8 b-1,2,5,6;",
        ],
        correctAnswer: "C",
      },
      {
        id: 17,
        number: 17,
        question:
          "Ikki xil gul formulaga ega bo‘lgan lolasimon (a) va mag-noliyasimon (b) larni aniqlang.",
        options: [
          "A) a-makkajo‘xori; b-ismaloq",
          "B) a-bug‘doy; b-oshqovoq",
          "C) a-makkajo‘xori; b-shuvoq",
          "D) a-bosh piyoz; b-terak",
        ],
        correctAnswer: "D",
      },
      {
        id: 18,
        number: 18,
        question:
          "Gidra (a), triton (b), kabarga (c) va aureliya (d) blastula devori necha qavat hujayradan iborat?",
        options: [
          "A) a- 2; b- 3; c- 3; d- 2;",
          "B) a- 2; b- 3; c- 3; d- 3;",
          "C) a- 1; b- 2; c- 2; d- 1;",
          "D) a- 1; b- 1; c- 1; d- 1;",
        ],
        correctAnswer: "D",
      },
      {
        id: 19,
        number: 19,
        question:
          "Quyidagi hayvonlarni ularning fandagi nomi bilan to‘g‘ri juftlab ko‘rsatilgan javobni toping. 1) o‘txo‘r kaltakesak; 2) toshbaqalar avlodi; 3) baliq kaltakesak; 4) yirtqich kaltakesak; 5) uch shohli kaltakesak; 6) ilon kaltakesak; a) plakoxelis; b) tritsopetops; c) tiranozavr; d) mezozavr; e) brontozavr; f) ixtiozavr",
        options: [
          "A) 1-c; 2-e; 3-f; 4-a; 5-b; 6-d;",
          "B) 1-b; 2-a; 3-d; 4-e; 5-c; 6-f;",
          "C) 1-e; 2-a; 3-f; 4-c; 5-b; 6-d;",
          "D) 1-e; 2-d; 3-f; 4-b; 5-c; 6-a;",
        ],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "Rizosfera prokariot organizm hisoblanadi. Chunki ... 1) yadroga ega emas; 2) sitoplazmaga ega; 3) halqasimon DNKga ega; 4) plazmatik membranaga ega; 5) mitoxond- riyaga ega emas; 6) ribosomalarga ega",
        options: [
          "A) 1, 4, 5;",
          "B) 2, 4, 6; С) 1, 3, 5; D) 1, 3, 6;",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 21,
        number: 21,
        question:
          "Qaysi javobda tapir bilan bitta biogeografik viloyatda tarqalgan qushlar to‘g‘ri keltirilgan?",
        options: [
          "A) bankiv, qirg‘ovul, sesarka, kotib qush",
          "B) kondor, nandu, nektar yig‘uvchi, sesarka",
          "C) kolibri, yapaloq qush, bankiv, tovus",
          "D) kondor, kakadu, bankiv, emu",
        ],
        correctAnswer: "A",
      },
      {
        id: 22,
        number: 22,
        question:
          "Qaysi javobda gulli o‘simliklarning qo‘sh urug‘lanish jarayonida chang hosil bo‘lishidan urug‘ hosil bo‘lishi- gacha bo‘lgan davr ketma-ketligi to‘g‘ri keltirilgan? 1) spermiylarning murtak xaltasiga kirishi; 2) triploid hujayraning hosil bo‘lishi; 3) chang naychasining hosil bo‘lishi; 4) urug‘kurtakdan urug‘ning hosil bo‘lishi; 5) generativ va vegetativ hujayraning hosil bo‘lishi",
        options: ["A) 3, 1, 5, 2, 4;", "B) 5, 3, 1, 4, 2;", "C) 3, 1, 5, 4, 2;", "D) 5, 3, 2,4;"],
        correctAnswer: "C",
      },
      {
        id: 23,
        number: 23,
        question:
          "Ayollar aralash bez hujayralarida glitserin va yog‗ kis- lotalaridan (a) va aminokislotalardan (b) sintezlanuvchi moddalarni aniqlang. 1) insulin; 2) esterogen; 3) pepsin; 4) androsteron; 5) amilaza; 6) lipaza",
        options: [
          "A) a- 2, 6; b- 1, 3;",
          "B) a- 2; b- 1, 6;",
          "C) a- 6; b- 1, 5;",
          "D) a- 2, 4; b- 3, 5;",
        ],
        correctAnswer: "A",
      },
      {
        id: 24,
        number: 24,
        question:
          "Rangni ajrata olmaslik kasalligiga chalingan ayol (onasi va akasi rangni normal ajrata oladi) sog‘lom erkakka tur-mushga chiqdi. Ushbu oila uchun mos keladigan to‘g‗ri fikr-ni aniqlang.",
        options: [
          "A) ayolning otasi ushbu belgi bo‘yicha sog‘lom",
          "B) ayolning o‘g‘il farzandlaridan biri rang ajrata oladi",
          "C) ayol kassallik genini faqat onasidan olgan",
          "D) oilada sog‘lom o‘g‘illarning tug‘ilish ehtimolligi 0 %",
        ],
        correctAnswer: "B",
      },
      {
        id: 25,
        number: 25,
        question:
          "To‘g‘ri rivojlanish bilan yetiladigan pilla hosil qiluvchi organizmlarni belgilang. 1) butli o‘rgimchak; 2) burga; 3) oq planariya; 4) podalariy; 5) tut ipak qurti; 6) yomg‘ir chuvalchangi.",
        options: ["A) 3, 6", "B) 1, 5", "C) 4, 5", "D) 2, 6"],
        correctAnswer: "D",
      },
      {
        id: 26,
        number: 26,
        question:
          "Qaysi to'qima hujayrasini postembrional davrining barcha bosqichlarida yadrochasi hech qachon yo'qolmaydi?",
        options: [
          "A) yog' to'qima hujayralari",
          "B) suyak to'qima hujayralari",
          "C) muskul to'qima hujayralari",
          "D) kallus to'qima hujayralari",
        ],
        correctAnswer: "D",
      },
      {
        id: 27,
        number: 27,
        question:
          "O‘simliklarning meva nomlari to‘g‘ri juftlangan javobni aniqlang. 1) anzurning ko‘sagi; 2) nokning olma mevasi; 3) tarvuzning rezavor mevasi; 4) bangidevonaning ko‘sagi; 5) lavlagining ildizmevasi; 6) makkajo‘xorining so‘tasi.",
        options: ["A) 2, 4, 6", "B) 1, 3, 5", "C) 1, 5, 6", "D) 1, 2, 4"],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 28,
        question:
          "Sistematik birliklarni kattalashib borish tartibida keltirilgan javobni aniqlang. 1) ayiqtovondoshlar; 2) yopiqurug‘lilar; 3) achishtiruv-chi ayiqtovon; 4) ikki urug‘pallalilar; 5) ayiqtovon",
        options: ["A) 3, 1, 5, 4", "B) 2, 4, 1, 3", "C) 5, 3, 1, 4", "D) 3, 5, 1, 2"],
        correctAnswer: "C",
      },
      {
        id: 29,
        number: 29,
        question:
          "Quyida ko'zning asosiy qismlari sxematik tarzda tuzilgan va ba'zi tuzilmalar harflar bilan ko'rsatilgan. 1, Tasvir to‘r pardaga aniq tushishi uchun harfli tuzilmalardan qaysi biri qisqaradi va bo'shashadi?",
        options: ["A) R.", "B) R.", "C) F", "D) X"],
        correctAnswer: "B",
      },
      {
        id: 30,
        number: 30,
        question:
          "Quyida hasharotlarga misollar keltirilgan. Shunga ko'ra, rasmda berilgan barcha hasharotlar uchun; I. uch juft oyoqli II. bosh sohasidan mo‘ylov chiqishi; III. traxeya orqali nafas olish IV. parazit sifatida ovqatlanish Ularni qanday umumiy jihatlari bor?",
        options: ["A) faqat I", "B) I va IV", "C) I, II va III", "D) III va IV"],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 18,
    title: "Variant 18",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Tashqi muhitning muayyan ta‘siri tufayli yuzaga keladigan o‘zgaruvchanlikning asosiy xususiyatlarini aniqlang. 1) irsiylanadigan o‘zgaruvchanlik; 2) irsiylanish xususiyatiga ega emas; 3) guruhli xarkterga ega; 4) oraliq formalar-siz paydo bo‘ladigan o‘zgaruvchanlik; 5) sifat jihatdan farq qiladigan o‘zgaruvchanlik; 6) namoyon bo‘lish darajasi har xil organizmda turlicha bo‘ladi;",
        options: ["A) 1, 3, 6;", "B) 1, 3, 5;", "C) 1, 4, 5;", "D) 2, 3, 6; 0 0 A"],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question:
          "Odamlarda I qon guruhi I I , II qon guruhi I I ; I I ; B B B O A B III qon guruhi I I ; I I ; IV qon guruhi I I genotipi bilan ifodalanadi. Gomozigota II qon guruhiga ega ayol gomozigota III qon guruhli erkakka turmushga chiqdi. Ushbu oilada tug‘lishi mumkin bo‘lgan farzandlarning qonida qanday moddalar bo‘lmaydi? a) agglyutinogen A; b) agglyutinogen B; c) agglyutinin α; d) agglyutinin β;",
        options: ["A) b, c;", "B) c, d;", "C) a, d;", "D) a, b;"],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question:
          "Meyozning bosqichlari yakuni uchun mos holatlarni belgilang. 1) telofaza I; 2) anafaza I a) diploid to‘plarndagi xromosomalarda ikkitadan xromatida bo‘ladi; b) gaploid to‘plamdagi xromosomalarda ikkitadan xromatida bo‘ladi; c) gaploid to‘plarndagi xromosomalarda bittadan xromatida bo‘ladi; d) diploid to‘plarndagi xromosomalarda bittadan xromatida bo‘ladi",
        options: [
          "A) 1-b; 2-a;",
          "B) 1-d; 2-b; С) 1-a; 2-c; D) 1-c; 2-d;",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 4,
        number: 4,
        question:
          "Gekkon kariotipida jami xromasomalar soni 24 ta bo‘lib, o‘rganilayotgan barcha belgilarni ifodalovchi genlar gomozigota holatida. Erkak gekkon tana hujayrasida necha xil DNK molekulasi mavjud?",
        options: ["A) 13", "B) 24", "C) 12", "D) 22"],
        correctAnswer: "C",
      },
      {
        id: 5,
        number: 5,
        question:
          "Noto‘g‘ri (a) va to‘g‘ri (b) rivojlanuvchi umurtqali organizmlarni aniqlang. 1) ildam kaltakesak; 2) karam kapalagi; 3) planariya; 4) ko‘l baqasi; 5) chuchuk suv gidrasi; 6) baqachanoq; 7) yashil qurbaqa; 8) chittak",
        options: [
          "A) a-4, 7; b-1, 8",
          "B) a-4, 6; b-2, 5",
          "C) a-2, 5; b-1, 3",
          "D) a-2, 6; b-3, 5",
        ],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question:
          "Birikkan (a) va mustaqil (b) holda nasldan-naslga o‘tadigan belgilar to‘g‘ri ko‘rsatilgan javobni aniqlang. 1) odamda gemofiliya kasalligi va rangni ajrata olmaslik; 2) drozofila pashshasi tanasining kulrang rangi va qanoti- ning uzunligi; 3) bug‘doy donining pushti va qizil rangda bo‘lishi; 4) no‘xat donining sariq rangi va silliq shakli",
        options: ["A) a-1, 2; b-3,4", "B) a- 1,3; b-2,4", "C) a-2, 3; b-1,4", "D) a- 3,4; b-1,2"],
        correctAnswer: "B",
      },
      {
        id: 7,
        number: 7,
        question: "O‗simliklarning rivojlanishi haqidagi ma‘lumotlardan noto‘g‘risini aniqlang.",
        options: [
          "A) Dala qirqbo‘g‗imining qo‘ng‘ir rangli poyasi sporaning, yashil chetlari bo‘lingan o‗simtasi zigotaning rivojlanishidan hosil bo‘ladi",
          "B) Qarag‘ay bir uyli bo‘lib, tangachalarning ustida 2 tadan urug‘kurtak joylashadi",
          "C) Funariya.ning yashil ipi sporaning, Poya- barglari zigotaning rivojlanishidan hosil bo‘ladi",
          "D) Zuhrasochning ildizpoyasi zigotaning, ko‘p xivchinli hujayrasi sporaning rivojlanishidan hosil bo‘ladi",
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Quyidagi rasmda K,L,M organizmlari o‘rtasidagi + belgisi foydali munosabatni, – belgisi esa zararli A A 0 munosabatni ifodalaydi. Bunga ko‘ra K-L va L-M organizmlari o‘rtasidagi to‘g‘ri munosabatni aniqlang K-L L-M",
        options: [
          "A) K-L parazitizm L-M mutualizm",
          "B) K-L mutualizm L-M kommensalizm",
          "C) K-L kommensalizm L-M parazitizm",
          "D) K-L parazitizm L-M kommensalizm",
        ],
        correctAnswer: "D",
      },
      {
        id: 9,
        number: 9,
        question:
          "Funariyaning jinsiy bo‘g‘mi uchun mos kelmaydigan javobni aniqlang. 1) sporadan rivojlanadi; 2) sporofit hisobiga rivojlanadi; 3) har bir arxegoniyda bir necha tuxum hujayralar yetiladi; 4) arxegoniysi bir hujayrali; 5) poya-bargli o‘simlik; 6) yashil ip hosil qiladi; 7) spora hosil qiladi.",
        options: [
          "A) 3, 4",
          "B) 5, 7 С) 1 ,6 D) 3, 6",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 10,
        number: 10,
        question:
          "O‘simliklar va hayvonlarda aromorfoz tipdagi o‘zgarishlarni aniqlang. 1) spora bilan ko‘payishdan urug‘ bilan ko‘payishga o‘tish; 2) sudralib yuruvchilarda qalin po‘stli tuxumlar paydo bo‘lishi; 3) rovoch mevasining atrofida qanotchalarning paydo bo‘lishi; 4) elektr skatda ko‘krak suzgichlarining yassi tanaga tutashib ketishi. 5) gulli o‘simliklarda qo‘sh urug‘lanishning paydo bo‘lishi; 6) tuyoqli hayvonlarda tuyoq paydo bo‘lishi.",
        options: ["A) 3, 4, 6;", "B) 1, 2, 5;", "C) 2, 3, 5;", "D) 1, 4, 5;"],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 11,
        question:
          "O‘simliklarning floema naylariga xos bo‘lgan xususiyatlarni aniqlang. 1) suvni ildizdan barglarga o‘tkazish uchun xizmat qiladi; 2) o‘simlikning o‘tkazuvchi to‘qimasi; 3) hujayralarida hujayra qobigí yo‘q; 4) hujayralar tarkibida xloroplastlar mavjud; 5) hujayralarida yadro yo‘q; 6) hujayralarida yo‘ldosh hujayralari mavjud.",
        options: ["A) 1, 3, 6", "B) 2, 4, 5", "C) 2, 5, 6", "D) 1, 3, 6"],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 12,
        question:
          "Dominant belgilarni ajrating. 1) bug‘doy donining qizil rangi; 2) yashil donli no‘xat; 3) pakanalik; 4) hushbo‘y hidli no‘xatning oq rangi; 5) odamda sochning erta to‘kilishi; 6) pakanalik; 7) xoldor to‘tilar patining yashil rangi; 8) odamning qo‘y ko‘zli bo‘lishi",
        options: [
          "A) 1, 3, 8",
          "B) 4, 7, 8 С) 1, 2, 6 D) 2, 4, 5",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question:
          "Yapon lamirayasi qanday belgilari bilan yapon saforasidan farq qiladi? 1) hujayra qobig‘i sellulozadan iborat; 2) vegetativ organ- larga ega; 3) xlorofillga ega; 4) sporalar orqali jinssiz ko‘payadi; 5) tuban o‘simlik; 6) urug‘ orqali jinsiy ko‘payadi",
        options: [
          "A) 4 ,5",
          "B) 2 ,4 С) 3, 6 D) 1, 6",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 14,
        number: 14,
        question:
          "Kakku (a) va salamandra (b) embrional rivojlanish davriga xos ma‘lumotlarni aniqlang. 1) urug‘lanish ichki; 2) gastrulatsiya blastulaning qat-qat joylashuvi hisobiga bo‘ladi; 3) 2 marta ekvatorial bo‘linish-dan so‘ng 32 ta blastomer hosil bo‘ladi; 4) urug‘lanish tash-qi; 5) 3 marta meridinal bo‘linishdan so‘ng 8 ta hujayra ho-sil bo‘ladi; 6) maydalanish blastulaning hosil bo‘lishi bilan tugallanadi",
        options: [
          "A) a-1, 2; b-3, 6",
          "B) a-3, 6; b-1, 4",
          "C) a-1, 5; b-4, 6",
          "D) a-1, 2; b-4, 5",
        ],
        correctAnswer: "B",
      },
      {
        id: 15,
        number: 15,
        question:
          "Drozofila pashshasida tanasining kulrang bo‘lishi, ensiz qanot va tukchalarning bo‘lishi dominant holda irsiylanadi. Tana rangi va qanot shaklini aniqlovchi genlar to‘liq birik-kan autosom genlardir. Tukchalarning mavjudligi boshqa autosomada joylashgan gen orqali aniqlanadi. Trigomozi-gota sariq rangli, normal qanotli va tukchalarsiz drozofila barcha belgilar bo‘yicha gomozigota kulrang tanali, ensiz qanotli, tukchalarga ega drozofila bilan chatishtirildi. F duragaylarini o‘zaro 1 chatishtirishdan olingan avlodning qancha qismi kulrang tanali, ensiz qanotli, tuksiz bo‘ladi?",
        options: ["A) 1/16", "B) 3/8", "C) 1/8", "D) 3/16"],
        correctAnswer: "A",
      },
      {
        id: 16,
        number: 16,
        question:
          "Ovogenezning o‘sish bosqichiga mos kelmaydigan ma‘lumotlarni aniqlang. 1) interkinez kuzatiladi; 2) xromosomalar spirallashadi; 3) har bir xromosoma ikkitadan xromatidaga ega; 4) hujayra hajmi ortadi; 5) meyoz bo‘linish kuzatiladi; 6) hujayralardagi xromosomalar diploid to‘plamga ega",
        options: ["A) 1, 2, 5", "B) 1, 5, 6", "C) 3, 4, 6", "D) 2, 3, 4"],
        correctAnswer: "C",
      },
      {
        id: 17,
        number: 17,
        question:
          "Kordait (a), kalmar (b) va karakatitsa (c) ga tegishli ma‘lumotlarni to‘g‘ri juftlang. 1) produtsent organizm; 2) prokariot organizm; 3) umurt-qali hayvon; 4) aerob nafas oladi; 5) konsument organizm; 6) umurtqasiz hayvon",
        options: [
          "A) a - 4; b - 6; с – 5",
          "B) a - 2; b - 1; с - 5 С) a - 3; b - 4; с - 1 D) a - 4; b - 5; с - 2",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 18,
        number: 18,
        question:
          "Quyidagi sxemada 4 ta organizmning bog‗liqligi keltirilgan. Sxema uchun qaysi javob mos keladi?",
        options: [
          "A) c – o‗ljasini ta‘qib qilib tutadi",
          "B) b – tirnoqlari maxsus xaltachaga kirib turadi",
          "C) a – qoziq tishlari rivojlanmagan, kurak tishlari doim o‗sib turadi",
          "D) b – kemiruvchilar turkumiga mansub",
        ],
        correctAnswer: "C",
      },
      {
        id: 19,
        number: 19,
        question:
          "Pseudomonas hujayrasining qaysi tuzilmasi nuklein kislotaga ega? 1) ribosoma; 2) yadro; 3) mitoxondriya; 4) xloroplast; 5) yadrocha; 6) plazmida; 7) hujayra markazi",
        options: ["A) 1,6", "B) 2, 5", "C) 6, 7", "D) 3, 4"],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "Agroekosistema (a) va ko‘l (b) ekosistemasiga xos to‘g‘ri javobni aniqlang. 1) asosiy produtsentlar – fitoplankton; 2) yovvoyi o‘simlik- lar begona o‘tlar hisoblanadi; 3) Birinchi tartib konsumen-tlar – zooplanktonlar; 4) turlar xilma-xilligi kam; 5) modda-lar aylanishi muvozanatsiz. tezlashtiradi.",
        options: ["A) a – 2; b – 3", "B) a – 1; b – 5", "C) a – 5; b – 4", "D) a – 3; b – 1"],
        correctAnswer: "A",
      },
      {
        id: 21,
        number: 21,
        question:
          "Xrizantema meyoz siklining anafaza II bosqichida xro-masoma soni 36 ta bo‘lsa, anafaza I dagi xromatin sonini aniqlang?",
        options: ["A) 36", "B) 18", "C) 72", "D) 9"],
        correctAnswer: "D",
      },
      {
        id: 22,
        number: 22,
        question:
          "Sianobakteriyalar (ko‘k yashil suvo‘tlar) uchun xos bo‘lmagan noto‘g‘ri fikrlarni aniqlang. 1) ko‘k – yashil suvo‘tlar eng qadimgi organizmlar bo‘lib ular prokariot hisoblanadi; 2) hujayralari qalin hujayra qobig‘iga ega; 3) sianobakteriyalarda halqasimon DNK si yadro qobig‘i bilan sitoplazmadan ajralib turadi; 4) ko‘k – yashil suvo‘tlar xlorofilg ega; 5) sianobakteriyalarda fotosintez xloroplastlarda kechadi; 6) ribosomalarida oqsil biosintezi amalga oshadi; 7) ATF sintezi mitoxondriyada kechadi.",
        options: ["A) 1, 2, 4", "B) 3, 4, 6", "C) 1, 2, 5", "D) 3, 5, 7"],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 23,
        question:
          "Noto'g'ri fikrlarni aniqlang. 1) Uglevodlar uglerod, azot, vodorod va kisloroddan tashkil topgan organik birikmalardir; 2) Uglevodlar mono, di- va polisaxarid guruhlarga bo'linadi; 3) Monosaxaridlar suvda juda yaxshi eriydi; 4) Uglevodlar organizmda energetik, plastik va fermentativ funksiyalarni bajaradi; 5) Glikogen polimer bo'lib, o'simlik to'qimalarida uchraydi; 6) Ayrim monosaxaridlar nuklein kislotalar va ATF tarkibiga kiradi; 7) kraxmal va glikogen zaxira funksiyasini bajaradi;",
        options: ["A) 2, 3, 7", "B) 1, 2, 6", "C) 1, 4, 5", "D) 3, 4, 6"],
        correctAnswer: "D",
      },
      {
        id: 24,
        number: 24,
        question: "Qaysi o‘simlik(lar) tuproqdan mineral moddalarni o‘zlashtirmaydi.",
        options: [
          "A) sorgo",
          "B) orxideya",
          "C) sholi",
          'D) sutlama 25. Yuqoridagi organik birikmada "K" bilan ko\'rsatilgan qismning nomi va nomi nima? A) nukleotid B) ATF C) ADP D) Adenin',
        ],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 26,
        question:
          "Noto‘g‘ri fikr berilgan javobni aniqlang. 1) adrenalin gormoni stressli holatda yurak o‘rishini 2) gipotalamus o‘rta miyada joylashgan; 3) gipotalamus organizmning hayotiy faoliyatini nerv sistema va gumoral boshqarishni tartibga solishda javobgardir; 4) gipotalamus gipofiz beziga signal yuboradi, gipofiz bezi gormonlari boshqa endokrin bezlarning faoliyatini nazorat qiladi; 5) gipofez bezining asosiy gormonlari samototropin va adrenalin; 6) somototrop gormoni bo‘y o‘sishini ta‘minlaydi.",
        options: ["A) 1, 3, 4", "B) 2, 3, 5", "C) 2, 4, 6", "D) 1, 5, 6"],
        correctAnswer: "B",
      },
      {
        id: 26,
        number: 27,
        question: "Karam kapalagining hayotiy siklini ekologiyaning qaysi bo'limi o'rganadi?",
        options: ["A) autekologiya", "B) sinekologiya", "C) demekologiya", "D) biogeotsenologiya"],
        correctAnswer: "C",
      },
      {
        id: 27,
        number: 28,
        question:
          "Shimpanze zigotasining nazariy jihatdan 3 marta meridianal, 2 marta ekvatorial bo‗linishidan hosil bo‗lgan blas-tomerlardagi jami autosoma xromosomalari sonini toping.",
        options: ["A) 3072", "B) 2208", "C) 1472", "D) 1536"],
        correctAnswer: "D",
      },
      {
        id: 28,
        number: 29,
        question:
          "Hindomalay biogeografik viloyatida orangutang, Haba-shiston biogeografik viloyatida shimpanze mavjudligi (a), Avstraliya biogeografik viloyati xashaki tovuqlarning, Hindomalay biogeografik viloyatida yovvoyi bankiv tovuqlarning uchrashi (b) tur paydo bolishining qaysi yo‗nalishiga misol boladi?",
        options: [
          "A) a - simpatrik; b - allopatrik",
          "B) a - allopatrik; b - allopatrik",
          "C) a - simpatrik; b - simpatrik",
          "D) a - allopatrik; b – simpatrik",
        ],
        correctAnswer: "D",
      },
      {
        id: 29,
        number: 30,
        question:
          "Quyidagi organizmlarni produtsent (a) va konsu- mentlarga (b) ajrating. 1) sigillariya; 2) sikas; 3) kaklik; 4) fillafora; 5) tamaki; 6) tuxumak; 7) kalina; 8) tyulen; 9) vyurok",
        options: [
          "A) a - 1, 4, 5, 6; b - 2, 3, 8, 9",
          "B) a - 1, 3, 4, 7; b - 2, 5, 6, 8",
          "C) a - 4, 5, 6, 7; b - 1, 2, 3, 9",
          "D) a - 1, 4, 5, 8; b - 2 , 6, 7, 9",
        ],
        correctAnswer: "D",
      },
      {
        id: 30,
        number: 30,
        question:
          "Genetika qonuniyatlari: Mendelning birinchi va ikkinchi qonunlariga muvofiq F2 bo'g'indagi ajralish nisbatini ko'rsating.",
        options: [
          "A) Monoduragay chatishtirishda fenotip bo'yicha 3:1 nisbat",
          "B) Diduragay chatishtirishda genotip bo'yicha 9:3:3:1 nisbat",
          "C) Chala dominantlikda fenotip bo'yicha 3:1 nisbat",
          "D) Tahliliy chatishtirishda doimo 1:2:1 nisbat",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 19,
    title: "Variant 19",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question: "Quyidagi jadvalga mos keluvchi javobni aniqlang.",
        options: [
          "A) a-gen-nokaut; d-―saratov-29‖;",
          "B) f-turkumlar aro duragaylash; c-Oston Jalilov",
          "C) b-―porloq‖; c-Oston Jalilov",
          "D) e-Nabijon Nazirov; b-―porloq-4‖;",
        ],
        correctAnswer: "C",
      },
      {
        id: 2,
        number: 2,
        question: "Poyasi ilashib o‘suvchi, murakkab bargli, kambiyga ega o‘simlikni aniqlang.",
        options: ["A) no‘xot", "B) qovoq", "C) tok", "D) partenosissus"],
        correctAnswer: "D",
      },
      {
        id: 3,
        number: 3,
        question:
          "Quyidagi to‘qimalarga tegishli ma‘lumotlar noto‘g‘ri ko‘rsatilgan javobni aniqlang. a) qoplovchi to’qima; b) mexanik to’qima; c) asosiy to’qima: 1) ksilema va floema naylaridan iborat; 2) sklereid hujayralariga ega; 3) o‘simliklarni quruqlikka chiqishi bilan bog‘liq holda paydo bo‘lgan; 4) hujayralari yupqa va egiluvchan bo‘ladi; 5) hujayrasining vakuolalarida efir moylari to‘planadi; 6) xlorenxima hujayralaridan iborat.",
        options: [
          "A) b-1,2; a-3; c-5,4;",
          "B) b-2; a-3; c-6;",
          "C) c-4,6; b-2,3; a-5;",
          "D) b-1; c-5; a-2;",
        ],
        correctAnswer: "C",
      },
      {
        id: 4,
        number: 4,
        question:
          "O‘simlik navlari va ularga xos xususiyatlar noto‘g‘ri ko‘rsatilgan javobni aniqlang. 1 ―Saratov-29‖ Ostki gulkosacha ega 2 ―Yulduz‖ Chanchilari qo‘shilib urug‘chini o‘rab turadi 3 ―Sulton‖ Hayotiy shakli daraxt 4 ―Targ‘il‖ oddiy qalqonsimon to‘pgulga ega Gultojibargi qo‘shilib nay hosil 5 ―Obidov‖ qiladi",
        options: ["A) 1, 4, 5;", "B) 2, 3;", "C) 4, 5, 2;", "D) 2, 4, 3;"],
        correctAnswer: "B",
      },
      {
        id: 5,
        number: 5,
        question: "Ildiz haqidagi noto‘g‘ri ma‘lumotni belgilang.",
        options: [
          "A) ildizning shimuvchi qismidan yangi ildiz tukchalar shakillanadi",
          "B) barcha gulli o‘simliklarda urugdan dastlab asosiy ildiz shakillanadi",
          "C) kartoshkaning qo‘shimcha ildizi yon ildizdan hosil bo‘ladi",
          "D) ildizning po‘st hujayaralari tirik bo‘ladi",
        ],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question: "Poyaning qaysi qismi doim bo‘linib ko‘payib turadigan hujayralardan iborat?",
        options: ["A) floema", "B) ksilema", "C) kambiy", "D) o‘zak"],
        correctAnswer: "B",
      },
      {
        id: 7,
        number: 7,
        question:
          "Tekshirishlar natijasiga ko‘ra bemorga qon plazmasida agglutininning ham α ham β turlar bor bo‘lgan qon guruhlarni quyish munkin bo‘ladi. Bemorning o‘zi esa qanida faqat agglutininlar bor bo‘lgan qon guruhga retsipiyent bo‘lsa. Bemorning qon guruhini aniqlang?",
        options: ["A) I", "B) II", "C) III", "D) IV"],
        correctAnswer: "B",
      },
      {
        id: 8,
        number: 8,
        question:
          "10 gr yog‘ parchalanganda hosil bo‘ladigan energiya qancha(l) suvni 1 °C haroratga isitish uchun yetarli bo‘ladi?",
        options: ["A) 389", "B) 93000", "C) 93", "D) 389000"],
        correctAnswer: "D",
      },
      {
        id: 9,
        number: 9,
        question:
          "Baliq moyi va baliq ikrasi shuning dek boshqa hayvon mahsulotlarida mavjud bo‘lgan vitamin yetishmaganda qanday kasalik paydo bo‘ladi?",
        options: ["A) singa", "B) shabko‘rlik", "C) beri-beri", "D) kamqonlik"],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question: "Parasimpatik nervlar siydik ajralishini qanday boshqaradi?",
        options: [
          "A) buyrak qon tomirlarini kengaytirib, siydik ajralishini kuchaytiradi",
          "B) reabsorbsiya jarayonini pasaytirib, siydik ajralishini ko‘paytiradi",
          "C) sfinkterlarni muskullarini qisqartirib, siydik ajralishini ko‘paytiradi",
          "D) A,B,C",
        ],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 11,
        question:
          "Qon aylanish sistemasi quyidagicha bo‘lmagan hayvonlarni aniqlang. ������������������������������ ������������������������������������ℎ������������������ → ������������������������������������������������������������������ →������������������������������������������������ ������������’������ℎ������������������’������ → ������������������������ ������������������ ������������������������������������ → ������’������������������ → ������������������������������ ������������’������������������������������",
        options: [
          "A) dafniya, siklop, tok shillig‘i",
          "B) nereida, beda poya shillig'i, yomg‘ir chuvalchangi",
          "C) beda poya shillig'i, tok shillig‘i, chuchuk suv shillig‘i",
          "D) ustritsa, taroqcha, midiyalar",
        ],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 12,
        question:
          "DNKning bir zanjiridagi nukleotidlar ketma ketligi quyidagicha bo‘lsa: AATGTTSGGSASS. Shu DNKning ikkinchi zanjiridagi nukleotidlar va ular orasidagi umumiy vodorod bog‘lar sonini toping.",
        options: [
          "A) TTATAAGSSGTSS; 30 ta",
          "B) TTASAAGSSGUTG; 32 ta",
          "C) TTASAAGSSGTSS; 33 ta",
          "D) TTASAAGSSGTGG; 33 ta",
        ],
        correctAnswer: "B",
      },
      {
        id: 13,
        number: 13,
        question: "To‘rt tepalik, miya suv yo‘li, miya oyoqchalari qaysi miyada joylashgan?",
        options: ["A) orqa miya", "B) uzunchoq miya", "C) o‘rta miya", "D) Varoliy ko‘prigi"],
        correctAnswer: "C",
      },
      {
        id: 14,
        number: 14,
        question:
          "Arpa o‗simligida xlorofill sintezida ikkita ferment ishtirok etadi. Bu fermentlarning yetishmasligi natijasida xlorofill sintezi buziladi. Birinchi ferment yetishmasa o‗simlik oq rangli ikkinchisi yetishmasa sariq rangli bo‗lib qoladi. Ikkala ferment yetishma-sa ham o‗simlik oq rangda bo‗ladi. Har bir ferment sintezi boshqaruvchi genlar har xil xromosomalar-da joylashgan dominant gen nazoratida amalga oshiriladi. Digeterozigota o‗simliklar o‗zaro chatishtirilsa, fenotip bo‗yicha qanday nisbat kuzatiladi?",
        options: [
          "A) 12(yashil): 3(oq): 1 (sariq)",
          "B) 12(oq): 3(yashil): l (sariq)",
          "C) 4(oq): 9(yashil): 3 (sariq)",
          "D) 4(yashil): 3(oq): l (sariq)",
        ],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 15,
        question:
          "Kichik yoshdagi odamlarda tiroksin ishlab chiqarilish kamaysa qaysi kasalik paydo bo‘ladi?",
        options: ["A) kretinizm", "B) miksidema", "C) bazedov", "D) tireotoksikoz"],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 16,
        question:
          "Noma‘lum genotipli organizmlar o‘zaro chatishtrilishi natijasida birinchi avlodda 32 xil fenotipik sinf hosil bo‘lgan, genotipik sinflar sonini aniqlang.",
        options: ["A) 743", "B) 243", "C) 243", "D) 256"],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question:
          "Jinslar nisbati 1:1 bo‘lmagan organizm(lar)ni belgilang. 1) planariya; 2) perlovitsa; 3) bolalar gijjasi; 4) bitiniya; 5) askarida; 6) exinokokk; 7) yomg‘ir chuvalchangi;",
        options: ["A) faqat 2;", "B) 2,3,4;", "C) 1,4,6;", "D) 3,2,5;"],
        correctAnswer: "A",
      },
      {
        id: 18,
        number: 18,
        question:
          "Qirqquloqlarning hayot siklidagi a, b, c va d hujayralarning xromosoma to‗plami qaysi qatorda to‗g‗ri berilgan?",
        options: [
          "A) a – n; b – n; c – n; d – 2n",
          "B) a – n; b – n; c – 2n; d – 2n",
          "C) a – 2n; b – n; c – n; d – n",
          "D) a – 2n; b – n; c – n; d – 2n",
        ],
        correctAnswer: "B",
      },
      {
        id: 19,
        number: 19,
        question: "Popuklari bo‘lmagan uchma mevalarni aniqlang.",
        options: [
          "A) baliqko‘z, cherkez, qo‘g‘a",
          "B) shumtol, qarag‘ay, zarang",
          "C) ruvoch, jud, boyalish",
          "D) qoqio‘t, terak, tol",
        ],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question: "Katta sadafdorning ayirish sistemasi berilgan qatorni aniqlang.",
        options: [
          "A) tasmaga o‘xshash yagona buyrak",
          "B) sirtmoqqa o‘xshash ingichka uzun naycha",
          "C) malpigi naychalari",
          "D) bir juft yashil bezlar",
        ],
        correctAnswer: "B",
      },
      {
        id: 21,
        number: 21,
        question:
          "Qaysi turkum vakillari jamoa bo‘lib yashaydi, oilada bittadan urg‘ochi va erkak jinsi hamda bir necha yuzdan milliongacha ishchi va qo'ri‘chilardan iborat?",
        options: [
          "A) to‘g‘riqanotlilar",
          "B) pardaqanotlilar",
          "C) tangachaqanotlilar",
          "D) termitlar",
        ],
        correctAnswer: "A",
      },
      {
        id: 22,
        number: 22,
        question: "Quyidagi jadvalga mos keluvchi javobni aniqlang",
        options: [
          "A) a-nastarin; b-nok; c-ituzum;",
          "B) b-targ‘il; a-qirmizi; c-nimrang;",
          "C) c-obidov; b-qirmizi; a-gultish;",
          "D) a-daroyi; c-samarqand-3; b-qozi dastor;",
        ],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 23,
        question:
          "Oddiy(a) va toq patsimon(b) bargli o‘simlik keltirilgan javobni aniqlang. 1) shirinmiya; 2) majnuntol; 3) no‘xot; 4) mosh; 5) yong‘oq.",
        options: ["A) a-2; b-4;", "B) a-5; b-1;", "C) b-3; a-4;", "D) b-5; a-2"],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question: "Penitsill zamburug‘iga tegishli ma‘lumotni belgilang.",
        options: [
          "A) avtotrof organizm",
          "B) mitseliysida to‘siqlar bo‘lmaydi",
          "C) jinsiy ko‘payishi suv o‘tlaridagidek boradi",
          "D) ko‘p hujayrali zamburug‘",
        ],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 25,
        question:
          "Qaysi organizmning ko‘payishida sporalari o‘sishidan ko‘p hujayrali, shoxlangan, ingichka, yashil iplar shakillanadi?",
        options: ["A) zuxrasoch", "B) manna", "C) manta", "D) funariya"],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 26,
        question:
          'Quyidagi jadvalda RNK va DNK ning tarkibi ko`rsatil-gan. Bunga ko`ra a,b,c,d larni aniqlang Tarkib DNK RNK Fosfat kislota HPO HPO 3 4 3 4 Pentoza qoldig`i a b Bog fosfodiefir, "H" fosfodiefir Purin asosi c d',
        options: [
          "A) a-dezoksiriboza; b-riboza; c-uratsil; d-timin",
          "B) b-riboza; a-dezoksiriboza; c,d-uratsil",
          "C) a-dezoksiriboza; b-riboza; c-timin; d-uratsil",
          "D) b-riboza; a-dezoksiriboza; c,d-guanin",
        ],
        correctAnswer: "C",
      },
      {
        id: 27,
        number: 27,
        question: "Qonda karbanat angidrid miqdori ko‘payib ketsa ......",
        options: [
          "A) uzunchoq miyadagi nafas olish markazi qo‘zg‘ladi",
          "B) endokrin sistemasidan ajralgan gormonlar nafas olishni muvozanatlashtiradi",
          "C) nafas olishning shartli refkekslar markaziga ta‘sir qiladi",
          "D) aksirish sodir bo‘ladi",
        ],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 28,
        question:
          "Hujayrada qaysi kichik molekulali organic moddalar uchraydi? 1) aminokislota; 2) pigment; 3) glikogen; 4) gormon; 5) nukleotid; 6) lipoprotein; 7) shakar.",
        options: ["A) 2, 4, 5, 7;", "B) 1, 3, 5, 6;", "C) faqat 7", "D) 3, 5, 6;"],
        correctAnswer: "B",
      },
      {
        id: 29,
        number: 29,
        question:
          "Dissimilatsiya jarayonida bir necha molekula gulekoza oksidlandi va 15 molekula karbonat angidrit hosil bo‘ldi. Sintezlangan ATF miqdorini aniqlang.",
        options: ["A) 95", "B) 100", "C) 185", "D) 90"],
        correctAnswer: "C",
      },
      {
        id: 30,
        number: 30,
        question:
          "Agar rasmda qora kalamushning (2n = 38) gametogenez jarayoni tasvirlangan bo‗lsa, 6-raqam bilan ifodalangan hujayrada xromasomalar soni (a), DNK soni (b) qaysi javobda to‗g‗ri ko‗rsatilgan?",
        options: [
          "A) a = 19; b = 19",
          "B) a = 19; b = 38",
          "C) a = 38; b = 19",
          "D) a = 38; b = 38",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 20,
    title: "Variant 20",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Odamning yurak sikli aks etirilgan sxemadagi har bir bosqichga xos tushunchalarni aniqlang.",
        options: [
          "A) 0,1 sekund – yurak bo‘lmachalari sistola holatida; 0,3 sekund – yurak bo‘lmachalari diastola holatida; 0,4 sekund – bo‘lmacha qorinchalar sistola holatida",
          "B) 0,1 sekund – yurak bo‘lmachalari diastole holatida; 0,3 sekund – yurak qorinchalari sistola holatida; 0,4 sekund – yurak dam oladi.",
          "C) 0,1 sekund – yurak bo'lmachalari sistola holatida; 0,3 sekund – yurak qorinchalarining sistola holatida; 0,4 sekund – yurak bo'lmacha va qorinchalarining bo‘shashgan holatida",
          "D) 0,1 sekund – yurak o‘ng bo‘lmachasi sistola holatida; 0,3 sekund – yurak chap bo‘lmachasining bo‘shashgan holatda; 0,4 sekund– yurak qorinchalarining bo‘shashgan holatida",
        ],
        correctAnswer: "C",
      },
      {
        id: 2,
        number: 2,
        question:
          "Quyida berilgan rasmda 1, 2-raqamda ko'rsatilgan murtak varaq tuzilmalaridan hosil bo'lgan organlarni aniqlang. 1) ektoderma; 2) mezoderma a) tirnoqlar; b) sezgi organlari; c) qon; d) limfa e) muskul to'qimasi",
        options: [
          "A) 1 – a, b; 2 – c, d",
          "B) 1 – a, e; 2 – c, d",
          "C) 1 – b, c; 2 – a, e",
          "D) 1 – d, e; 2 – a, b",
        ],
        correctAnswer: "D",
      },
      {
        id: 3,
        number: 3,
        question:
          "Quyida berilgan rasmda umurtqalilarning evolutsion o‘zgarishlarning tipiga xos ma‘lumotni aniqlang.",
        options: [
          "A) har xil yashash sharoitlariga moslashish natijasida ajdod tur belgilarining tarqalishi",
          "B) har xil turlarning tashqi muhit ta‘siriga moslanishlari natijasi hisoblanadi",
          "C) bir-biriga yaqin turlarda belgilarning o‘xshashligi",
          "D) gomologik organlar hosil bo‘lishi natijasida yuzaga keladi",
        ],
        correctAnswer: "C",
      },
      {
        id: 4,
        number: 4,
        question:
          "Hujayrada tripeptid sintezi ko'rsatilgan. Berilgan reaktsiya haqidagi quyidagi gaplardan qaysi biri noto'g'ri?",
        options: [
          "A) K, L va M molekulalari o'rtasida peptid aloqalari hosil bo'ladi.",
          "B) Reaktsiya suvsizlanishdir.",
          "C) Reaksiya oxirida hujayradagi zichlik oshadi.",
          "D) Qancha bog'lanishlar hosil bo'lsa, shuncha suv molekulalari ajralib chiqadi.",
        ],
        correctAnswer: "C",
      },
      {
        id: 5,
        number: 5,
        question:
          "Quyidagi zavodda energiyaning qaytishi diagramma bilan ko'rsatilgan. Bu sxema haqida nima deyish mumkin emas?",
        options: [
          "A) Energiya konversiyasida xloroplast va mitoxondriya ham ishtirok etadi.",
          "B) mitoxondriya, xloroplast va kisloroddan foydalanadi.",
          "C) mitoxondriyalar ATF ni faqat yorug'lik ishtirokida ishlab chiqaradi",
          "D) O'simliklar fotosintezda nafas olish natijasida hosil bo'lgan ba'zi moddalarni ishlatadi.",
        ],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question:
          "G'izollarning ikkita populyatsiyasi har xil yashash muhitida yashagani uchun bu holat ularning yosh tarkibiga ta'sir ko'rsatgan. Birinchi populyatsiyada 160 ta yuvenil yoshdagi, 90 ta pubertat yoshdagi va 50 ta qari organizmlar bo'lgan. Ikkinchi populyatsiyada 80 ta yuvenil, 160 ta pubertat yoshdagi va 100 ta qari organizmlar bo'lgan. Ikkinchi populyatsiyaning kelajagi to'g'ri berilgan javobni aniqlang.",
        options: [
          "A) populyatsiyada organizmlar soni ortadi",
          "B) populyatsiya barqaror holatda",
          "C) populyatsiyada organizmlar soni kamayadi",
          "D) populyatsiyada voyaga yetgan organizmlar soni 80 ta",
        ],
        correctAnswer: "B",
      },
      {
        id: 7,
        number: 7,
        question: "Nuqtalar o‗rniga mos javobni tanlang. Yaylovda uchraydiga arxar ... hayvon.",
        options: [
          "A) kavsh qaytaruvchi juft tuyoqli",
          "B) oshqozoni ikki bo‗lmali",
          "C) kavsh qaytarmaydigan juft tuyoqli",
          "D) toq tuyoqli 8. Sxemalarda ifodalangan to‗pgul turlarini aniqlang. A) 1 - oddiy boshoq, 2 - oddiy shingil, 3 - so‗ta B) 1 - kuchala, 2 - murakkab shingil, 3 - savatcha C) 1 - qalqoncha, 2 - murakkab boshoq, 3 - savatcha D) 1 - oddiy boshoq, 2 - kuchala, 3 - so‗ta",
        ],
        correctAnswer: "C",
      },
      {
        id: 8,
        number: 9,
        question:
          "Barglari poyada qarama-qarshi joylashgan ko‘p yillik o‘tlarni (a) va butalarni (b) aniqlang.",
        options: [
          "A) a-shirinmiya, kiyiko‘t; b-ligusturum, sebarga",
          "B) a-ligusturum, kiyiko‘t; b-nastarin, maymunjon",
          "C) a-rayhon, kiyiko‘t; b-ligusturum, nastarin",
          "D) a-yalpiz, kiyiko‘t; b-nastarin, ligusturum",
        ],
        correctAnswer: "D",
      },
      {
        id: 9,
        number: 10,
        question:
          "Shakli o'zgargan yer osti (a) yer usti (b) novdaga, shakli o'gargan bargga (c) ega bo'lgan ko‘p yillik o'simliklarni aniqlang.",
        options: [
          "A) a-g'umay; b- bodring; c-zirk",
          "B) a-qamish; b-do'lana; c-no'xat",
          "C) a-kartoshka; b-qulupnay; c-akatsiya",
          "D) a-gulsafsar; b-topinambur; c-no'xot",
        ],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 11,
        question:
          "Quyonlar va bo‗rilar biomasssasi 220 kg ga ortgan bo'lsa. Quyonlarning dastlabki biomassasi 120 kg bo‗rilariki esa 25 kg bo‗lgan.O'simliklarning birlamchi biomassasi qancha kg (a) va quyonlar sonini (b) aniqlang. Oziq zanjiri: o'simlik→quyon→bo‗ri. Izoh: 1 ta quyon massasi 4 kg",
        options: [
          "A) a – 120000 kg; b – 80 ta",
          "B) a – 2000 kg; b – 40 ta",
          "C) a – 25000 kg; b – 10 ta",
          "D) a – 2000 kg; b – 80 ta",
        ],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 12,
        question:
          "Sochga nisbatan 50 marta ingichka bo‘lgan qon tomir haqidagi to‘g‘ri malumotni aniqlang.",
        options: [
          "A) birlashib arteriya qon tomirni hosilqiladi",
          "B) tashqi devori epiteliy to‘qimadan tashkil topgan",
          "C) qon bosimi eng past bo‘ladi",
          "D) maksimal bosimi 1,5 sm simob ustuniga teng",
        ],
        correctAnswer: "D",
      },
      {
        id: 12,
        number: 13,
        question:
          "Nereidaning lichinkasiga tegishli bo‘lgan javoblarni ko‘rsating. 1) tanasi kipriklar bilan qoplangan; 2) tanasida kipriklar rivojlanmagan; 3) ayirish naychalarining ikki uchi ochiq; 4) ayirish naychalarining bir uchi berk; 5) boshi tanasidan alohida ixtisoslashgan.",
        options: ["A) 2, 4, 5", "B) 1, 3", "C) 1, 4", "D) 2, 3, 5"],
        correctAnswer: "B",
      },
      {
        id: 13,
        number: 14,
        question:
          "Ninachiga mos kelmaydigan ma‘lumotlarni belgilang. 1) perm davrda paydo bo‗lgan; 2) toshko‗mir davrida rivojlangan; 3) chala metamorfoz bilan rivojlanadi; 4) to‗liq metamorfoz bilan rivojlanadi; 5) qon aylanish sistemasi ochiq; 6) qoni nafas olishda ishtirok etmaydi; 7) traxeya va o‗pka orqali nafas oladi; 8) ko‗krak bo‗limida 3 juft oyoq va 3 juft qanotlari mavjud.",
        options: [
          "A) 2, 4, 6, 8",
          "B) 2, 3, 5, 6 С) 1, 4, 5, 8 D) 1, 4, 7, 8",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 15,
        question:
          "Makkajo`xori gulining qizil rangi A_B_ gen ta`sirida yuzaga chiqadi. Dominat genlarning birining bo`lishi sariq rangni uchramasligi oq rangni yuzaga chiqaradi. Qizil va oq gulli makkajo`xorilar chatishtirilganda F1 da qizil gulli o`simliklar olindi. F2 olingan o`simliklarning necha foizi fenotipi qizil rangli makkajo`xoriga o`xshab genotip jihatdan farq qiladi.",
        options: ["A) 31,25", "B) 25", "C) 56,25", "D) 75"],
        correctAnswer: "B",
      },
      {
        id: 15,
        number: 16,
        question:
          "Quydagi fikirlardan nechtasi to'g'ri? 1) dala va yaylovlarda sudraluvchi ayiqtovonning uchrashi ekologik mezon; 2) qora kalamushning ikkita qiyofadosh turining birida 38ta, ikkinchisida 42ta xromosoma borligi genetik mezon; 3) mutatsiyalar mutatsion o'zgaruvchanlik tufayli nasldan naslga beriladi; 4) K. D. Bempes suniy tanlanish yo'li bilan yovvoyi hayvonlarni xonakilashtirish mumkinligini tajriba orqali isbotlab berdi.",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correctAnswer: "A",
      },
      {
        id: 16,
        number: 17,
        question:
          "Quyidagi muskullardan silliq muskullarni aniqlang. 1) mimika; 2) teriosti; 3) qon tomirlar devoir muskullari; 4) yelkaning to‘rt boshli muskul; 5) qovuq devoir muskullari; 6) sonning orqa tomonidagi uch boshli muskul; 7) so‘rg‘ichsimon; 8) gavdani rostlaydigan muskulda; 9) narvonsimon; 10) ichak devoir muskullari; B) 4,7,9 B) 3,5,10 C) 8,2,9 D) 7,1,6",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 17,
        number: 18,
        question:
          "Miroz bo‗linish natijasida hosil bo‘ladigan hujayralarni aniqlang. 1) akatsiyanig vegetativ hujayrasi; 2) zog‗ora baliqning tuxum hujayrasi; 3) oq planariyani tuxum hujayrasi; 4) sigirquyruqning tuxum hujayrasi; 5) isfarakning generativ hujayrasi; 6) gazandaning tuxum hujayrasi; 7) midiyaning spermatozoidi.",
        options: ["A) 1, 4, 5", "B) 2, 3, 7", "C) 3, 4, 7", "D) 2, 5, 6"],
        correctAnswer: "A",
      },
      {
        id: 18,
        number: 19,
        question:
          "Sholi o‗simligining changdonida 90 ta diploid to‗plamli hujayra gametalar hosil qilishda ishtirok etdi. Agar o‗simlikda 216 ta urug‗ hosil bo‗lgan bo‗lsa, hosil bo‗lgan spermiylarning necha foizi markaziy hujayraning urug‗lanishida qatnashgan?",
        options: ["A) 35", "B) 30", "C) 25", "D) 60"],
        correctAnswer: "A",
      },
      {
        id: 19,
        number: 20,
        question:
          "Jigar qurtining postembrional rivojlanish bosqichlari ketma-ketligi to‗g‗ri berilgan javobni aniqlang. 1) sista davri; 2) voyaga yetgan jigar qurti; 3) kiprikli lichinka bosqichi; 4) parazitning jigar o‗t yo‗liga o‗tishi; 5) lichinkaning molluska tanasida rivojlanishi; 6) dumli lichinka bosqichi.",
        options: [
          "A) 2, 3, 6, 5, 4, 1",
          "B) 5, 2, 3, 6, 4, 1",
          "C) 3, 5, 6, 1, 4, 2",
          "D) 5, 2, 1, 4, 6, 3",
        ],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 21,
        question:
          "Kvaksha baqasining postembrional rivojlanish davrida kuzatiladigan jarayonlarni aniqlang. 1) jabraning o‗pkaga aylanishi; 2) jigarning hosil bo‗li-shi; 3) ikki kamerali yurakning uch kamerali yurakka aylanishi; 4) buyrakning hosil bo‗lishi; 5) xordaning hosil bo‗lishi; 6) nerv nayining hosil bo‗lishi; 7) yurish oyoqlarining hosil bo‗lishi; 8) arteriya qon tomirining mezoderma qavatidan hosil bo‗lishi.",
        options: ["A) 4, 5", "B) 1, 6", "C) 3, 7", "D) 2, 8"],
        correctAnswer: "A",
      },
      {
        id: 21,
        number: 22,
        question:
          "Postembrional rivojlanishi metamorfoz yo‗li bilan amalga oshuvchi xordalilar tipi vakillarini aniqlang. 1) tovusko‗z; 2) agama; 3) ko‗l baqasi; 4) trixogramma; 5) kvaksha baqasi; 6) suqsun; 7) assidiya; 8) gavial",
        options: [
          "A) 6, 8",
          "B) 3, 7 С) 1, 4 D) 2, 5",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 23,
        question:
          "Allopatrik (a) simpatrik (b) turlarning turlaming paydo bo‘lishi haqida to‘g‘ri fikrlarni aniqlang.",
        options: [
          "A) a-Hindomalay biogeografik viloyatida Gibbon va Habashiston biogeografik viloyatda gorillaning uchrashi; b- Lanao ko‘lida 18 ta baliq turining paydo bo‘lishi",
          "B) a-qirg‘ovullarning yapon kenja turlarining paydo bo‘lishi; b-Amudaryoda soxta kurakburun balig‘ining uchrashi;",
          "C) a-yonsuzar qisqichbaqasining 250 ta yangi turlarining kelib chiqishi; b-keng burunli maymunlarning Janubiy Amerikada uchrab tor burunli maymunlarning Afrikada uchrashi",
          "D) a-Lanao ko‘lida yonsuzar qisqichbaqasining bitta ajdod turidan bir nechta turlarining paydo bo‘lishi, b- Avstraliyada hashaki tovuqlarning va Hindomalay biogeografik viloyatda bankiv tovuqlarning uchrashi",
        ],
        correctAnswer: "D",
      },
      {
        id: 23,
        number: 24,
        question:
          "Hayvonot olamida sodir bo'lgan umumiy degeneratesiyalarni aniqlang. 1) assidiya lichinkasining voyaga yetish davrida nerv sistemasining asosiy qismi yo'qolib ketishi; 2) cho‗chqa tasmasimon chuvalchangida hazm qilish sistemasining yo‗qolishi; 3) suvda hamda quruqlikda yashovchilar sinfida katta va kichik qon aylanish sistemasining paydo bolishi; 4) lansetnikda nerv nayining paydo bolishi.",
        options: ["A) 2, 4", "B) 3, 4", "C) 1, 3", "D) 1, 2"],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 25,
        question:
          "Biokimyoviy evolyutsiya bosqichlari va ularga mos jarayonlarni muvofiqlashtiring.",
        options: [
          "A) biologik evolyutsiya;",
          "B) kimyoviy evolyutsiya. 1) atmosferada ozon ekranining hosil bo‗lishi; 2) atmosferaning kislorod bilan bo‗yishi; 3) abiogen usulda. hosil bo‗lgan organik moddalar uchun raqobatning susayishi; 4) ATF va fermentlarning abiogen usulda sintezi; 5) koatservatlarda membrananing hosil bo‗lishi; 6) ATF va fermentlarning biogen usulda sintezi; 7) koatservatlarda bo‗linish xususiyatining paydo bo'lishi; 8) protobiontlarning paydo bo‗lishi. А) A - 2, 3, 6; В - 4, 7, 8 В) A - 2, 5, 6; В - 3, 4, 8 С) A - 1, 3, 4; В - 5 , 6, 8 D) A - 4, 5, 8; В - 2, 3, 6",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 25,
        number: 26,
        question:
          "Digeterozigota xushbo‘y hidli no‘xat o‘simligi o‘zaro chatishtirilganda 9:7 nisbatta qizil va oq gulli organizm hosil bo‘ldi. Oq gulli genotipini toping 1) AaBb; 2) Aabb; 3) aaBB; 4) aabb; 5) AaBB; 6 )AABB; 7)aaBb; 8 )AABb",
        options: ["A) 1,5,6,8", "B) 2,3,4,7", "C) 3,4,6,8", "D) 2,5,6,7"],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 27,
        question:
          "Nuqtalar o'rniga mos javobni tanlang. Biosferada tirik moddalar…….. 1) Tirik moddalar butun atmosferaga tarqaladi. 2) Tirik materiya butun gidrosferani qamrab oladi. 3) Tirik moddaning funksiyalaridan biri muhit yaratish funksiyasidir. 4) Tirik moddalar biosferada teng taqsimlanadi. 5) Evolyutsiya jarayonida tirik moddaning funktsiyalari o'zgarmaydi. 6) Biogen moddalar – tirik moddalarning qoldiqlaridir.",
        options: ["A) 2, 3, 6", "B) 1, 3, 6", "C) 2, 4, 5", "D) 2, 3, 5"],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 28,
        question:
          "Cho‘lda yashaydigan organizmlar ekologik piramidasi quyidagicha iloq – hashorat – kaltakesak – burgut tashkil etadi. Iloq biomassasi 200 kg bo‘lsa, I va II darajali konsumentlarning umumiy biomassasini (t) aniqlang.",
        options: ["A) 22", "B) 22,2", "C) 0,0222", "D) 0,022"],
        correctAnswer: "C",
      },
      {
        id: 28,
        number: 29,
        question: "Tapir qaysi biogeografik viloyatda uchraydi?",
        options: ["A) Avstraliya", "B) Paleoarktik", "C) Neoarktik", "D) Hindomalay"],
        correctAnswer: "C",
      },
      {
        id: 29,
        number: 30,
        question:
          "Qirg'ovullarning yettisoy, murg'ob, yapon kabi kenja turlarining paydo bo'lishi (a), tur doirasida yangi populyatsiyalarning paydo bo'lishi (b) qanday jarayonlarni aks ettiradi?",
        options: [
          "A) a-divergensiya; b-konvergensiya",
          "B) a-mikroevolyutsiya; b-mikroevolyutsiya",
          "C) a-mikroevolyutsiya; b-makroevolyutsiya",
          "D) a-makroevolyutsiya; b-makroevolyutsiya",
        ],
        correctAnswer: "B",
      },
      {
        id: 30,
        number: 30,
        question:
          "Genetika qonuniyatlari: Mendelning birinchi va ikkinchi qonunlariga muvofiq F2 bo'g'indagi ajralish nisbatini ko'rsating.",
        options: [
          "A) Monoduragay chatishtirishda fenotip bo'yicha 3:1 nisbat",
          "B) Diduragay chatishtirishda genotip bo'yicha 9:3:3:1 nisbat",
          "C) Chala dominantlikda fenotip bo'yicha 3:1 nisbat",
          "D) Tahliliy chatishtirishda doimo 1:2:1 nisbat",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 21,
    title: "Variant 21",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Tibbiyot fanlari rivojlanishiga hissa qo‘shgan olimlar va ularning xizmatlari berilgan jadvalni to‘ldiring. Olimlar nomi Xizmatlari Gippokrat I Odam organizmi tuzilishini II rasmlar orqali aniq tasvirlab bergan Galen III Bosh miya reflekslarini kashf IV etgan Aristotel V VI Odam tuzilishini yorib ko’rib o’rgangan",
        options: [
          "A) I – immunitetning fagositar nazariyasini yaratgan; II – Leonardo da Vinchi; III – hayvonlar ustida tajriba olib borgan; IV – I.I.Mechnikov; V – bosh miya reflekslarini kashf etgan; VI – A. Vezaliy",
          "B) I – uning asarlari klinik tibbiyotga asos soldi; II – A. Vezaliy; III – uning asarlaridan 14 asr davomida foydalanib kelingan; IV – I.M.Sechenov; V – odam ijtimoiy jonzot, o‘z aql va idroki bilan hayvonlardan farq qilishi to‘g‘risidagi fikrni ilgari surgan; VI – A. Vezaliy",
          "C) I – hayvonlar ustida tajribalar o‘tkazgan; II– Galen; III – ―Odam tanasi qismlari‖ asar muallifi; IV – I.P.Pavlov; V – fanga aorta tushunchasini kiritgan; VI - Leonardo da Vinchi",
          "D) I – odam tanasi tuzilishi, organizmning bir butunligi to‘g‘risidagi jahonga mashhur g‘oyalarni ishlab chiqqan; II – A. Vezaliy; III – ilk bor rasmlar orqali odam organizmining realistik tasvirini yaratib bergan; IV – I.I.Mechnikov; V – tabiatning asosiy pog‘onalari – anorganik dunyo, o‘simlik, hayvon, odam to‘g‘risidagi g‘oyani ilgari surgan; VI - Leonardo da Vinchi",
        ],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question:
          "Kapalaklarda tananing rangli va qanotlarida o‘simtalar-ning bo‘lishi dominant autosomada birikkan holda irsiyla-nadi. Digeterozigota urg‘ochi kapalak (dominant genlar faqat otasidan o‘tgan) tanasi rangli, qanotida o‘simtalar bo‘lma-gan erkak kapalak bilan chatishtirilganda 800 ta avlod olindi. Avlodlarning nechtasi tanasi rangli, qanotlari-da o‘simtalar bo‘lagan nokrossoverlar bo‘ladi? (krossingover 6%)",
        options: ["A) 188", "B) 200", "C) 12", "D) 752"],
        correctAnswer: "D",
      },
      {
        id: 3,
        number: 3,
        question:
          "Quyida keltirilgan hayvonlardagi moslanishlar to‘g‘ri ketma-ketlikda keltirilgan javobni belgilang. 1) belyanka; 2) ninabaliq 3) gornastoy; 4) gelekonius; 5) chupchik; 6) korall aspidi.",
        options: [
          "A) 1-mimikriya; 2-maskirovka; 3-himoya rang; 4-ogoh- lanti-ruvchi rang; 5-maskirovka; 6-ogohlantiruvchi rang",
          "B) 1-ogohlantiruvchi rang; 2-mimikriya; 3-maskirovka; 4- himoya rang; 5-maskirovka; 6-mimikriya",
          "C) 1-mimikriya; 2-maskirovka; 3-ogohlantiruvchi rang; 4- himoya rang; 5-mimikriya; 6-ogohlantiruvchi rang",
          "D) 1-ogohlantiruvchi rang; 2-mimikriya; 3- himoya rang; 4-maskirovka; 5-himoya rang; 6-ogohlantiruvchi rang",
        ],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 4,
        question:
          "Sog‘lom odamda katta qon aylanish doirasining qaysi qismlari arterial qon harakatida ishtirok etadi? 1) chap qorincha; 2) o‘ng bo‘lmacha; 3) aorta; 4) kovak vena; 5) o‘pka arteriyasi; 6) o‘ng qorincha; 7) chap bo‘lmacha; 8) o‘pka venalari; 9) o‘ng qorincha va o‘pka arteriyasi o‘rta-sidagi yarimoysimon klapan; 10) chap qorincha va aorta o‘rtasidagi yarimoysimon klapan.",
        options: ["A) 1, 3, 7, 8;", "B) 2, 4, 6;", "C) 3, 10;", "D) 5, 6;"],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Toshko‘mir davrida ro‘y bergan aramarfozlarni ko‘rsa- ting. 1) ko‘poyoqlilar va dastlabki hasharotlar rivojlangan; 2) uchuvchi hasharot - suvaraklar, ninachilar rivojlangan; 3) sudralib yuruvchilar sinfi vakillari paydo bo‘lgan; 4) ochiq urug‘li o‘simliklar paydo bo‘lgan; 5) suvda hamda quruqlikda yashovchilarning dastlabki turlari vujudga kelgan.",
        options: ["A) 1, 3", "B) 2, 4", "C) 2, 4, 5", "D) 1, 3, 4"],
        correctAnswer: "C",
      },
      {
        id: 6,
        number: 6,
        question:
          "Sog‘lom odamning tirsak suyagi haqidagi to‘g‘ri fikrlarni aniqlang. 1) murtak varaqasining ektoderma qavatidan rivojlanadi; 2) tuzilishiga ko‘ra to‘sh suyagiga o‘xshaydi; 3) murtak varaqasining mezoderma qavatidan rivojlanadi; 4) ustki pardasi epiteliy to‘qimasidan tashkil topgan; 5) qo‘lning erkin suyagi.",
        options: ["A) 3, 4", "B) 1, 2", "C) 2, 4", "D) 3, 5"],
        correctAnswer: "C",
      },
      {
        id: 7,
        number: 7,
        question:
          "Odamning muskullarida hosil bo‘lgan karbonat angidirid-ni tashqi muhitga chiqarilish ketma-ketligi to‘g‘ri ko‘rsatil-gan javobni aniqlang.",
        options: [
          "A) muskul kapillyarlari→venula→arteriya tomiri→ yurak o‘ng bo‘lmasi→yurak o‘ng qorinchasi→o‘pka arteriyasi→ o‘pka kapillari→nafas a‘zolari→tashqi muhit",
          "B) muskul kapillyarlari→venula→vena→yurak o‘ng bo‘lmasi→ yurak o‘ng qorinchasi→aorta→o‘pka kapillyari→nafas a‘zolari tashqi muhit",
          "C) muskul kapillyarlari→venula→vena→yurak chap bo‘lmasi→yurak chap qorinchasi→o‘pka arteriyasi→o‘pka kapillya-ri→nafas a‘zolari→tashqi muhit",
          "D) muskul kapillyarlari→venula→vena→yurak o‘ng bo‘lma-si→yurak o‘ng qorinchasi→o‘pka arteriya- si→o‘pka kapillya-ri→nafas a‘zolari→tashqi muhit",
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Quyida tur hosil bo‘lishining bir necha turi sxema ko‘rinishida berilgan. Bunga ko‘ra, keltirilgan javoblar ichidan to‘g‘risini toping. I II II",
        options: [
          "A) poliploidiya duragaylash filetik",
          "B) filetik divergensiya duragaylash",
          "C) filetik duragaylash divergensiya",
          "D) divergensiya duragaylash divergensiya",
        ],
        correctAnswer: "B",
      },
      {
        id: 9,
        number: 9,
        question: "Grafiklardan qaysi sxema stabillashtiruvchi tanlanishni ifodalaydi?",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correctAnswer: "B",
      },
      {
        id: 10,
        number: 10,
        question:
          "Ochiq urug‘lilar bo‘limi (a), bir urug‘pallalilar sinfi (b) va ikki urug‘pallalilar sinfi (c) ga mansub o‘simliklarni aniqlang.",
        options: [
          "A) a — sekvoyadendron; b — donasho‘r; c — baobab",
          "B) a — nargis; b — boychechak; c — izen",
          "C) a — kordait; b — nargis; c — kam xastak",
          "D) a — oddiy qarag‘ay; b — g‘umay; c — tog‘arpa",
        ],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 11,
        question: "Yo‘sinlarning sporofiti uchun mos keladigan to‘g‘ri javobni aniqlang.",
        options: [
          "A) sporangiyband va sporangiydan iborat, zigota hosil qiladi",
          "B) poya-bargli o‘simlik, jinssiz bo‘g‘in hisoblanadi G) jinssiz bo‘g‘in hisoblanadi, spora hosil qiladi D) jinsiy bo‘g‘in hisoblanadi, zigota hosil qiladi",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 12,
        question: "O‘simliklarning tirik (1) va o‘lik (2) mexanik to‘qima hujayralarni aniqlang.",
        options: [
          "A) 1 - kollenxima; 2 - traxeidlar",
          "B) 1 - kollenxima; 2 - sklereid hujayralar",
          "C) 1 - elaksimon naylar; 2 - traxeidlar",
          "D) 1 - elaksimon naylar; 2 - sklereid hujayralar",
        ],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question:
          "Esherichia coli hujayrasiga xos bo‘lmagan xususiyat- larni aniqlang. 1) yadro shakllanmagan; 2) plazmatik membranaga ega; 3) ribosomalarga ega emas; 4) mitoxondriyalarga ega emas; 5) qalin hujayra qobig‘iga ega; 6) qalin hujayra qobig‘iga ega emas.",
        options: ["A) 1, 2", "B) 3, 6", "C) 4, 5", "D) 3 ,4"],
        correctAnswer: "C",
      },
      {
        id: 14,
        number: 14,
        question:
          "Polinukleotidli zanjirda nukleotidlar fosfodiefir bog‘lari yordamida, ikkita zanjir o‘zaro vodorod bog‘lari yordamida bog‘langan. Translyatsiya jarayonida 310 ta t- RNK ishtirok etgan va DNK qo‘sh zanjiridagi guanin nukleotidlari soni 410 ta bo‘lsa, fosfodiefir (a) va vodorod bog‘larining (b) sonini toping.",
        options: [
          "A) a - 1860; b - 2270",
          "B) a - 1338; b - 1750",
          "C) a - 958; b - 2270",
          "D) a - 1858; b - 2270",
        ],
        correctAnswer: "C",
      },
      {
        id: 15,
        number: 15,
        question:
          "Ninachiga xos ma‘lumotlarni belgilang. 1) perm davrda paydo bo‘lgan; 2) toshko‘mir davrida rivojlangan; 3) chala metamorfoz bilan rivojlanadi; 4) to‘liq metamorfoz bilan rivojlanadi; 5) qon aylanish sistemasi ochiq; 6) qoni nafas olishda ishtirok etmaydi; 7) traxeya va o‘pka orqali nafas oladi; 8) ko‘krak bo‘limida 3 juft oyoq va 3 juft qanotlari mavjud.",
        options: ["A) 1, 3, 5, 8;", "B) 1, 4, 7, 8;", "C) 2, 4, 6, 7;", "D) 2, 3, 5, 6;"],
        correctAnswer: "C",
      },
      {
        id: 16,
        number: 16,
        question:
          "O‘simlik barglarining novdada joylashishi ifodalangan bo‘lib, qaysi oilalarga xos.",
        options: [
          "A) 1 – Ra‘nodoshlar, Karamdoshlar, Burchoqdoshlar 1, 2 – Sho‘radoshlar, Qoqio‘tdoshlar",
          "B) 1 – Gulxayridoshlar, Sho‘radoshlar; 1,2 – Karamdoshlar, Ituzumdoshlar",
          "C) 1 – Ra‘nodoshlar, Qoqio‘tdoshlar; 1,2 – Sho‘radoshlar, Karamdoshlar",
          "D) 1 – Loladoshlar; 1,2 – Karamdoshlar",
        ],
        correctAnswer: "B",
      },
      {
        id: 17,
        number: 17,
        question:
          "Tana bo‘shlog‘i g‘ovak to‘qima bilan to‘lgan organism- larni aniqlang. 1) dreysena; 2) chuchuk suv shillig‘i; 3) midiya; 4) perlo- vitsa; 5) gidra; 6) daryo qisqichbaqasi; 7) oq planariya;",
        options: ["A) 1, 6", "B) 3, 7", "C) 2, 4", "D) 1, 2, 3, 4, 7;"],
        correctAnswer: "A",
      },
      {
        id: 18,
        number: 18,
        question:
          "Ulotriksning hayot sikli haqida to‘g‘ri fikrlarni aniqlang. 1) 8 ta zoosporadan 8 ta yangi o‘simlik rivojlanadi; 2) 5 ta zigotaning hosil bo‘lishida 10 ta zoospora qatnashadi; 3) 24 ta izogametadan hosil b o‘lgan zigotalardan 48 ta yangi o‘simlik hosil bo‘ladi; 4) 8 ta zigota va 4 ta zoospora-dan 20 ta yangi o‘simlik rivojlanadi; 5) 32 ta yangi o‘simlik hosil bo‘lishida 8 ta izogameta qatnashadi; 6) 10 ta izogame-ta ishtirokida 20 ta yangi avlod rivojlanadi; 7) 8 ta zoospora va 8 ta izogametadan 40 ta yangi avlod rivojlanadi.",
        options: ["A) 5, 7", "B) 4 , 6", "C) 2, 6", "D) 1, 3"],
        correctAnswer: "C",
      },
      {
        id: 19,
        number: 19,
        question:
          "Jadvalning qaysi qatoriarida (№) organizmlar, ular- ning xususiyatlari va ular mansub oilalar to‘g‘ri tarzda berilgan? № Organizm Organizmlarning Oila xususiyatlari 1 Qoqio‘t Mevalarning Karamdoshlar uchida joylashgan bir tutam popuklar hisobiga uchadi 2 Saksovul Mevalar atrofini Sho‘radoshlar o‘rab olgan qanotchalar orqali shamolda tarqaladi 3 G‘umay Mevalari suv Bug‘doydoshlar o‘tkazmaydigan qobiqqa ega 4 Baliqko‘z Mevalarning Sho‘radoshlar uchida joylashgan bir tutam popuklar hisobiga uchadi 5 Cherkez Mevalar atrofini Sho‘radoshlar o‘rab olgan qanotchalar orqali shamolda tarqaladi 6 Itqovun Meva va Qovoqdoshlar urug‘larini o‘z kuchi bilan tarqatadi",
        options: ["A) 2, 3, 4;", "B) 1, 3, 5;", "C) 2, 5, 6;", "D) 4, 2 ,6"],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "Genotipik o‘zgaruvchanlikni aniqlang. 1) assidiya lichinkasida xordaning yo‘qolishi; 2) odam barmoqlarining ortiqcha bo‘lishi; 3) odamda albinizm holati; 4) odam umurtqa pog‘onasida bo‘yin lordozining hosil bo‘lishi;",
        options: ["A) 1, 4", "B) 1, 3", "C) 2, 4", "D) 2 ,3"],
        correctAnswer: "D",
      },
      {
        id: 21,
        number: 21,
        question:
          "Ma‘lum bir biotsenozda yarus bo‘yicha 1,2,3- raqamlarga mos hayvonlarni aniqlang.",
        options: [
          "A) 1 – zlatka; 2 – tulki; 3 – mo‘ylovdor",
          "B) 1 – zorka; 2 – kemiruvchilar; 3 – po‘stloqxo‘r",
          "C) 1 – mo‘ylovdor qo‘ng‘izlar; 2 – kemiruvchilar; 3 – ko‘poyoqlilar",
          "D) 1 – kemiruvchilar; 2 – tuyoqli hayvvonlar; 3 – kanalar",
        ],
        correctAnswer: "A",
      },
      {
        id: 22,
        number: 22,
        question:
          "Tapir uchun mantiqiy bog‘liq bo‘lgan tushunchalarni aniqlang. 1) to‘sh toji; 2) to‘rt kamerali yurak; 3) ko‘richak; 4) kurak tish; 5) metamorfoz; 6) muguz",
        options: ["A) 2, 3, 6", "B) 3, 4, 5", "C) 1, 2, 6", "D) 1, 4, 5"],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 23,
        question:
          "Manfatli va majburiy (a) manfatli, lekin majburiy bo‘lmagan (b) biotik munosabatni aniqlang.",
        options: [
          "A) 1 – antibioz; 2 – parazitizm",
          "B) 1 – simbioz; 2 – amensalizm",
          "C) 1 – mutualizm; 2 – protokooperatsiya",
          "D) 1 – mutualizm; 2 – komensalizm",
        ],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question:
          "Qora ituzum va g‘umay uchun umumiy bo‘lgan tushunchalarni aniqlang. 1) murtak; 2) ikki jinsli gul; 3) qo‘sh urug‘lanish; 4) yonbargcha; 5) gajak to‘pgul; 6) oddiy gulqo‘rg‘on",
        options: ["A) 3, 4, 6", "B) 1, 5, 6", "C) 1, 2, 3", "D) 2, 4, 5"],
        correctAnswer: "D",
      },
      {
        id: 25,
        number: 25,
        question:
          "Quyida keltirilgan o‘simliklar nechta bo‘limga tegishli? 1) tut; 2) sekvoyadendron; 3) bangidevona; 4) zuhrasoch; 5) sharq sauri; 6) dala qirqbo‘g‘imi; 7) angishvonagul; 8) chuchmoma",
        options: ["A) ikkita", "B) beshta", "C) oltita", "D) to‘rtta"],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 26,
        question:
          "To‘g‘ri fikrlarni aniqlang. Ozig‘i va yashash sharoiti yaxshilanganda ... ortadi. 1) Xolmagor zotining tana vazni; 2) Kornuel zotining tana vazni; 3) Shortgorn zotining sut miqdori; 4) Plimutrok zotining tana vazni; 5) Lekgorn zotining tuxum qo‘yishi; 6) Bushuyev zotining sut miqdori",
        options: ["A) 3, 4, 6", "B) 2, 5, 6", "C) 3, 4, 5", "D) 1, 2, 6"],
        correctAnswer: "C",
      },
      {
        id: 27,
        number: 27,
        question: "Gidraning ektoderma va endoderma qavatlari nima bilan ajralgan?",
        options: [
          "A) yupqa parda",
          "B) teri-muskul hujayrasi",
          "C) oraliq hujayralar",
          "D) mezoderma",
        ],
        correctAnswer: "D",
      },
      {
        id: 28,
        number: 28,
        question: "Qoziq tishlari bo‘lmaydigan sutemizuvchilar keltirilgan javobni belgilang.",
        options: [
          "A) kalamush, tyin, nutriya, ondatra",
          "B) jayron, ondatra, kalamush, norka",
          "C) ko‘k sug‘ur, jayra, nutriya, qunduz",
          "D) sichqon, tyin, ko‘k sug‘ur, qunduz",
        ],
        correctAnswer: "A",
      },
      {
        id: 29,
        number: 29,
        question:
          "Ozuqa zanjirida o‘simlik biomassasi - 65000 kg. Bitta lochinning biomassasi - 6,5 kg ga ortgan. Lochinlar nechanchi tartib konsument hisoblanadi?",
        options: [
          "A) beshinchi darajali",
          "B) ikkinchi darajali",
          "C) uchinchi darajali",
          "D) to‘rtinchi darajali",
        ],
        correctAnswer: "D",
      },
      {
        id: 30,
        number: 30,
        question:
          "Odamlarda jingalak soch silliq soch ustidan chala dorninantlik qiladi, geterozigotalilarda soch to‘lqinsimon bo‘ladi. Sepkillilik sepkilsizlik ustidan to‘liq dorninantlik qiladi. Gemofiliya esa X xromosomada joylashgan retsessiv belgi hisoblanadi. Barcha genlari bo‘yicha geterozigotali ayol va silliq sochli, sepkilsiz, sog‘lom erkak oilasida tug‘ilgan gemofiliya bo‘yicha sog‘lom, silliq sochli o‘g‘il bolaning genotipini aniqlang. H H H",
        options: ["A) AaBbX Y", "B) aaBBX Y", "C) AAbbX Y", "D) aabbX Y"],
        correctAnswer: "C",
      },
    ],
  },
  {
    id: 22,
    title: "Variant 22",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Quyidagi olimlarning biogetsenologiya bo'limi rivojiga qo'shgan hissalari va aniqlagan kashfiyotlari to'g'ri ko'rsatilgan javobni aniqlang. a) Ch. Elton – «oziq zanjiri» atamasini taklif etgan; b) R. Lindeman – oziq zanjirining har bir trofik darajasida energiyaning 90% i yo'qoladi, faqat 10% i keyingi darajaga o'tish qonuniyatni –ekologik piramida qoidasi deb ta'rifladi; c)",
        options: [
          "A) Tensli – biogeotsenoz atamasini fanga kiritdi; d) G.F.Gauze – turlararo raqobatni tajribada infuzoriyalarda kuzatdi. A) a, b",
          "B) a, d",
          "C) b, d",
          "D) a, c",
        ],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question:
          "Quyda shajarasi berilgan probandning shajarasida qaysi kaslikning irsilanishi berilgan?",
        options: [
          "A) Autosomadagi dominant tipidaga kasallik",
          "B) Autosomadagi retsessiv tipidagi kasallik",
          "C) X – xromosomaga birikkan dominant tipidagi kasallik",
          "D) X – xromosomaga birikkan retsessiv tipidagi kasallik",
        ],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question:
          "Quyida berilgan qaysi birikmalar T-DNK tarkibida uchramaydi? 1) timin; 2) fosfat kislotasi qoldig'i; 3) guanin; 4) riboza;5) tirozin; 6) alanin; 7) uratsil; 8) sitozin; 9) adenin.",
        options: ["A) 4, 6, 7;", "B) 2, 3, 8", "C) 4, 5, 8", "D) 2, 6 , 7"],
        correctAnswer: "D",
      },
      {
        id: 4,
        number: 4,
        question:
          "Noto‗g‗ri javobni toping. 1) hujayralar tuzilishiga ko‗ra prokariot va eukariotlarga bo'linadi; 2) prokariotlarga bir hujayrali organizmlardan: bakteriya, suvo't va sodda hayvonlar kiradi; 3) prokariot- lar yadrosiz organizmlar; 4) prokariotlar eukariotlarga o'xshab ribosoma va mitoxondriyaga ega; 5) barcha eukariotlar ko‗p hujayrali organizmlar; 6) sianobakte- riyalar fotosintez-lovchi prokariotlardir",
        options: ["A) 2, 4, 5", "B) 3, 4, 6", "C) 1, 2, 6", "D) 2, 3, 5"],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Yo‗sinlar qaysi jihatlari bilan boshqa yuksak sporali o'simliklardan farq qilmaydi? 1) jinsiy bo‗g‗inida rizoidlarining bo'lishi; 2) o‗tkazuvchi to‗qimaning rivojlanmaganligi; 3) hayotida jinsiy bo‗g‗in ustunlik qilishi; 4) sporadan shoxlangan yashil ipchalar- ning hosil bo‗lishi; 5) garnetofitning poya-bargli bo‗lishi; 6) zi-gotadan jinssiz bo‗g‗in boshlanishi; H 7) urug‗lanishning suv ishtirokida borishi.",
        options: ["A) 1, 7", "B) 2, 6", "C) 3, 4", "D) 5, 7"],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question:
          "Quyida murakkabguldoshlar oilasiga mansub nechta turkumga oid o ‗simliklar keltirilgan? 1) oq shuvoq; 2) yerbag‗ir tugmachagul; 3) moyli kungabo- qar; 4) qora jusan; 5) ermon shuvog‗i; 6) zangori sachratqi; 7) dorivor qoqio‗t",
        options: ["A) 6", "B) 5", "C) 1", "D) 4"],
        correctAnswer: "C",
      },
      {
        id: 7,
        number: 7,
        question:
          "Agama uchun xos bo'lmagan belgilarni aniqlang. 1) yuragi uch kamerali; 2) ko'payishi metamorfozsiz rivojlanadi; 3) uchinchi qovog'i rivojlanmagan; 4) yuragi to‘rt kamerali; 5) yurak qorinchasida yarim to‗siq bo'ladi; 6) anal teshigi mavjud; 7) Habashiston biogeografik viloyatida uchraydi; 8) Neotropik biogeografik viloyatida uchraydi",
        options: ["A) 1, 3, 7", "B) 2, 5, 7", "C) 3, 4, 8", "D) 1, 2. 6"],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "To‗garak chuvalchanglar uchun xos bo'lmagan xususiyat-larni ko‗rsating. 1) tanasi kutikula bilan qoplangan; 2) germafrodit organizm; 3) tanasi nurli simmetriyaga ega; 4) ichki organlari tana bo‗shlig‗ida joylashgan; 5) tana bo'shlig'iga ega emas; 6) ayrim jinsli organizm",
        options: ["A) 2, 3, 6", "B) 1, 3, 5", "C) 2, 3, 5", "D) 1, 4, 6"],
        correctAnswer: "D",
      },
      {
        id: 9,
        number: 9,
        question: "Noto‗g‗ri fikrni aniqlang.",
        options: [
          "A) jo‘ka, eman daraxtlari yorug‘ sevar o'simlik hisoblanadi",
          "B) biologik jarayonlar jadalligining davriy takrorlanuvchi o'zgarishi konkurensiya hisoblanadi",
          "C) ko‗rinadigan nurlar o‗simliklarda fotosintezda jarayoni-ning amalga oshishida katta ahamiyatga ega",
          "D) o‗simliklarda fotosintez jadalligi yorug'likning to'yinishi-ga bog'liq va optimal darajadan o'tganda fotosintez sekinla-shadi",
        ],
        correctAnswer: "B",
      },
      {
        id: 10,
        number: 10,
        question:
          "Immunologik metod hozirda nima maqsadda foydalaniladi? 1) immun tizimining irsiylanish xillarini o‗rganishda; 2) xromosomalar to‗plamidagi ko‗rinadigan darajadagi o‗zgarishlarni o‗rganishda; 3) gemolitik kaslikni oldini olishda; 4) xromosomalardagi ancha nozik o‗zgarishlarni ham o‗rganishda; 5) transplantatsiyasi uchun donorlarni tanlashda;",
        options: ["A) 1,3,5;", "B) 2,4;", "C) 1,3,4;", "D) 1,2,5;"],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 11,
        question:
          "Quyidagi rasmda qanday mutatsiya berilgan? 1) deletsiyasi; 2) dublikatsiyasi; 3) inversiyasi; 4) translokatsiya;",
        options: ["A) 1;", "B) 2;", "C) 3;", "D) 4;"],
        correctAnswer: "D",
      },
      {
        id: 12,
        number: 12,
        question:
          "Odamlarda A va В genlari bitta autosoma xromoso- masida joylashgan bo'lib, ikki xil kasallikni yuzaga chiqaradi. Ayol ikkala kasallik bilan kasallangan bo'lib, unga bu genlar faqat onasidan o'tgan. Erkak ikki belgi bo'yicha sog'lom. Agar nazariy jihatdan krossingover 3% ni tashkil etsa, shu oilada В geni bo'yicha kasal farzandlarning tug'ilish ehtimolini aniqlang.",
        options: ["A) 47%", "B) 50%", "C) 97%", "D) 48,5%"],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question:
          "Otlarda tanasi qora rangda bo'lishi malla rang ustidan ustunlik qiladi. Lekin bu ranglar ikkinchi juft allel bo'lma-gan gen tomonidan boshqarilib, uning retsessiv alleli (b) rang ta’sirini bo‘g‘ib, oq rangni yuzaga chiqaradi. Digeterozigota otlar chatishtirilganda necha xil genotipik (a) va fenotipik (b) sinf hosil bo'ladi?",
        options: ["A) a-9 b-4", "B) а-16 b-8", "C) a-16 b-16", "D) a-9 b-3"],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 14,
        question:
          "Quyidagi atamalarni ularga mos keluvchi ta’riflar bilan 1) turgor; 2) plazmoliz; 3) deplazmoliz; 4) buferlik; a) vakuolaga suv kirib, hujayraning tarangligini saqlashi; b) hujayra tarangligining yo'qolishi; c) tarangligi yo'qolgan hujayraning toza suvda o'z holatiga qaytishi; d) hujayraning kuchsiz ishqoriy holatni saqlab turishi",
        options: [
          "A) 1-d; 2-c; 3-h; 4-a",
          "B) 1-a; 2-b; 3-c; 4-d",
          "C) 1-b; 2-c; 3-d; 4-a",
          "D) 1-е; 2-d; 3-a; 4-b",
        ],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 15,
        question:
          "Bir yillik(a) va ko‘p yillik(b) guli qiyshiq o‘simliklarni aniqlang? 1) rayhon; 2) beda; 3) lola; 4) yeryong‘oq; 5) shirinmiya 6) na‘matak; 7) sebarga; 8) loviya; 9) kiyiko‘t; 10) no‘xot",
        options: [
          "A) a-6,7,9,3; b-2,10,4",
          "B) a-8,10,4,1; b-6,3,9",
          "C) a-2,1,10; b-3,9,6",
          "D) a-8,1,4; b-9,7,5 16. ,,Hayot zaxmatkashlari‖ deb ataladigan kishilar qanday tipga kiradi? A) Harakatchan, muvozanatlashgan B) Kamharakat, muvozanatlashgan C) Harakatchan, muvozanatlashmagan D) Kamharakat, muvozanatlashmagan",
        ],
        correctAnswer: "A",
      },
      {
        id: 16,
        number: 17,
        question:
          "Gorilla ovogenezining reduksion bo‘linishning anafaza bosqichida mutatsiya tufayli 8-12-gomologik xromosomalar tarqalmay bir qutbga o‗tib, shu qutbdan ovotsit rivojlangan. Hosil bo‗lgan tuxum hujayra normal spermatozoid bilan urug‗lansa, hosil bo‗lgan zigotadagi xromosomalar holatini aniqlang.",
        options: ["A) 49", "B) 48", "C) 47", "D) 50"],
        correctAnswer: "C",
      },
      {
        id: 17,
        number: 18,
        question:
          "Quyida berilganlardan to‗g‗ri fikrlarni aniqlang. 1) somatik hujayra mitoz siklining S davrida DNK miqdori ikki hissa ortadi; 2) somatik hujayra meyoz siklining anafaza II bosqichida hujayrada xromosoma soni ikki hissa ortadi; 3) meyozning anafaza I bosqichida xromosomalar bir DNKli holatda bo‗ladi; 4) somatik hujayra mitoz siklining postsintetik davrida xromosoma va DNK 1:2 nisbatda bo‗ladi.",
        options: ["A) 3, 4", "B) 1, 3", "C) 1, 4", "D) 1, 2"],
        correctAnswer: "C",
      },
      {
        id: 18,
        number: 19,
        question:
          "Otasi daltonizm bo‗yicha sog‗, onasi esa daltonizm bilan kasal erkak somatik hujayrasining mitoz sikli metafazasida d (I), D (II) allellari sonini aniqlang.",
        options: ["A) I - 0; II - 1", "B) I - 2; II - 0", "C) I - 1; II - 0", "D) I - 2; II – 2"],
        correctAnswer: "D",
      },
      {
        id: 19,
        number: 20,
        question:
          "Postebmrional rivojlanish davri metamorfoz yo‗li bilan amalga oshuvchi umurtqasiz organizmlarni aniqlang. 1) sariq falanga; 2) butli o‗rgimchak; 3) exinokokk; 4) nereida; 5) yomg‗ir chuvalchangi; 6) odam askaridasi; 7) sariq chayon; 8) chuchuk suv gidrasi.",
        options: ["A) 4, 8", "B) 3, 6", "C) 4, 5", "D) 1, 7 xromosomalar;"],
        correctAnswer: "D",
      },
      {
        id: 20,
        number: 21,
        question:
          "Kvaksha baqasining postembrional rivojlanish davrida kuzatiladigan jarayonlarni aniqlang. 1) jabraning o‗pkaga aylanishi; 2) jigarning hosil bo‗li-shi; ferment geniga ega; 3) ikki kamerali yurakning uch kamerali yurakka aylanishi; 4) buyrakning hosil bo‗lishi; 5) xordaning hosil bo‗lishi; 6) nerv nayining hosil bo‗lishi; 7) yurish oyoqlarining hosil bo‗lishi; 8) arteriya qon tomirining mezoderma qavatidan hosil bo‗lishi.",
        options: ["A) 4, 5", "B) 1, 6", "C) 3, 7", "D) 2, 8"],
        correctAnswer: "C",
      },
      {
        id: 21,
        number: 22,
        question:
          "Nuqtalar o'rniga mos javobni tanlang. Sog'lom odam yuragida qon o'ng bo'lmachaga keladi ………..(a), o'ng qorinchadan chiqadi……….(b) 1) o'pka arteriyasi; 2) katta qon aylanish doirasi; 3) karbonat angidrid bilan to'yingan qon; 4) venoz qon; 5) o'ng qorinchadan; 6) kovak vena qon tomirlardan.",
        options: [
          "A) a – 2, 5, 4; b – 2, 3, 1",
          "B) a – 1, 3, 5; b – 2, 4, 6",
          "C) a – 2, 1, 6; b – 5, 4, 3",
          "D) a – 2, 4, 6; b – 5, 1, 3",
        ],
        correctAnswer: "D",
      },
      {
        id: 22,
        number: 23,
        question:
          "Odam to'qimalarining tuzilishi xususiyati va funktsiyasi to'g'ri juftlangan javobni aniqlang. 1) epiteliy; 2) biriktiruvchi a) hujayralar bir-biriga zich joylashadi; b) hujayralar orasi-da hujayralararo modda mavjud; c) hujayralararo modda, suyuq yoki qattiq d) tirnoq va soch hosil qiladi; e) organlar o'rtasidagi aloqani ta'minlaydi, yordamchi funktsiyani bajaradi.",
        options: [
          "A) 1 – a, c; 2 – b, d",
          "B) 1 – b, d; 2 – a, c",
          "C) 1 – a, d; 2 – c, e",
          "D) 1 – a, e; 2 – b, c",
        ],
        correctAnswer: "D",
      },
      {
        id: 23,
        number: 24,
        question:
          "Noma‘lum uzunlikdagi ikkita DNK molekulasining ma‘lum bir fragmentlari mavjud. Birinchi DNK fragmen- tining uzunligi ikkinchi DNK fragmenti uzunligida 1,5 marta uzun. Agar ikkinchi DNK fragmentiga 60 ta adenin, 25 ta guanin ligaza fermenti yordamida ulansa, ikkala DNK fragmenti uzunlik jihatdan bir biriga teng bo‘lib qoladi. Birinchi DNK fragmentining uzunligini toping?",
        options: ["A) 86,7 nm", "B) 28,9 nm", "C) 57,8 nm", "D) 0,34 nm"],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 25,
        question:
          "Nafas olishda havo xaltachasi ham ishtirok etuvchi organizmning hazm sistemasi ketmaketligini toping.",
        options: [
          "A) og‗iz → halqum → qizilo‗ngach → katta muskulli oshqozon → kichik bezli oshqozon → ichak → kloaka → chiqarish teshigi",
          "B) og‗iz → halqum → qizilo‗ngach → jig‗ildon → oshqozon → ichak → anal teshigi",
          "C) og‗iz → halqum → qizilo‗ngach → jig‗ildon → kichik bezli oshqozon → katta muskulli oshqozon → ichak → kloaka → anal teshigi",
          "D) og‗iz → halqum → kichik muskulli oshqozon → katta bezli oshqozon → anal teshigi",
        ],
        correctAnswer: "B",
      },
      {
        id: 25,
        number: 26,
        question:
          "Plazmidlar (a) va transpozonlar (b) uchun xos xususiyatlarni ko‗rsating. 1) tuban eukariotlar hujayralaridagi qo‗shimcha 2) ko‗chib yuruvchi genetik elementlardir; 3) o‗simlik va hayvon hujayralarida topilgan; 4) DNK molekulasini yopishqoq uchlar hosil qilib kesuvchi 5) monomeri nukleotidlardan iborat; 6) zaharli toksinni parchalovchi ferment geniga ega",
        options: [
          "A) a - 3, 5, 6; b - 1, 4, 5",
          "B) a - 1 ,2 , 6; b - 3, 4, 5",
          "C) a - 4, 5, 6; b - 1, 3, 5",
          "D) a - 1, 5, 6; b - 2, 3, 4",
        ],
        correctAnswer: "C",
      },
      {
        id: 26,
        number: 27,
        question:
          "''Porloq – 1'' navi chigitining unishidan dastlab bargni yaxlit plastinkasimon bo`lib chiqishi qaysi hodisa?",
        options: [
          "A) fenotipik-ontogenetik",
          "B) genotipik-mutatsion",
          "C) fenotipik-modifikatsion",
          "D) ontogenetik-modifikatsion",
        ],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 28,
        question:
          "Paleoarktik biogeografik viloyatiga mansub tuyoqli sutemizuvchi hayvonlarni aniqlang. 1) zubr; 2) mufton; 3) sayg‘oq; 4) koala; 5) maral; 6) kanna; 7) kabarga; 8) tog‘ echkisi; 9) muskusli qo‘y; 10) qunduz",
        options: ["A) 1,4,7", "B) 3,5,8", "C) 2,6,9", "D) 2,5,10"],
        correctAnswer: "D",
      },
      {
        id: 28,
        number: 29,
        question:
          "Nuqtalar o'rniga mos javobni tanlang. 1) Moskovka chittak ……. 2) Lazorevka chittak ……. 3) Kokkilchali chittak ……..",
        options: [
          "A) 1 – hashoratlar tuxumlari bilan oziqlanadi; 2 – daraxt, butalar po'stlog'i orasidagi mayda hashoratlar bilan oziqlanadi; 3 – o'simlik urug'lari bilan oziqlanadi.",
          "B) 1 – bog'larda yirik hashoratlar bilan oziqlanadi; 2 – hashoratlar tuxumlari va qurtlari bilan oziqlanadi; 3 – daraxt, butalar po'stlog'i orasidagi mayda hashoratlar bilan oziqlanadi.",
          "C) 1 – hashoratlar tuxumlari va qurtlari bilan oziqlanadi; 2 – bog'larda yirik hashoratlar bilan oziqlanadi; 3 – o'simlik urug'lari bilan oziqlanadi.",
          "D) 1 – o'simlik urug'lari bilan oziqlanadi; 2 – daraxt, butalar po'stlog'i orasidagi mayda hashoratlar bilan oziqlanadi; 3 – hashoratlar qurtlari bilan oziqlanadi.",
        ],
        correctAnswer: "C",
      },
      {
        id: 29,
        number: 30,
        question:
          "Oziq zanjirlardagi 1, 2, 3, 4 – raqamlarga xos tushuncha va organizmlarni aniqlang.",
        options: [
          "A) 1 – yirtqichlik; 2 – bo'ri; 3 – sichqon; 4 – ukki",
          "B) 1 – hamxo'rak; 2 – yenot; 3 – qo'ng'ir ayiq; 4 –arslon",
          "C) 1 – konkurensiya; 2 – bo'ri; 3 – quyon; 4 –boyqush",
          "D) 1 – antogonistik; 2 – qoplon; 3 – sichqon; 4 –tasqara",
        ],
        correctAnswer: "B",
      },
      {
        id: 30,
        number: 30,
        question:
          "Genetika qonuniyatlari: Mendelning birinchi va ikkinchi qonunlariga muvofiq F2 bo'g'indagi ajralish nisbatini ko'rsating.",
        options: [
          "A) Monoduragay chatishtirishda fenotip bo'yicha 3:1 nisbat",
          "B) Diduragay chatishtirishda genotip bo'yicha 9:3:3:1 nisbat",
          "C) Chala dominantlikda fenotip bo'yicha 3:1 nisbat",
          "D) Tahliliy chatishtirishda doimo 1:2:1 nisbat",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 23,
    title: "Variant 23",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Quyidagi jadvalga mos keluvchi javobni aniqlang. Odam ajdodlarining xususiyatlari Odam ajdodi Miyasining hajmi 800–1100 sm3 Pitekantrop Sinantrop 3 Miyasining hajmi 1600 sm Neandertal Bo‘yi 135–150 sm. Avstralopitek",
        options: [
          "A) a-Bo‘yi 150–160 sm; b-Kromanyon",
          "B) c-Bo‘yi 155–165 sm; d- Avstralopitek 3",
          "C) e-Kalla suyagining hajmi 500–600 sm ; b-Neandertal;",
          "D) a-Bo‘yi 120–140 sm; d- Homo habilis",
        ],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question:
          "Nazariy jihatdan DNK molekulasining birinchi zanjirida nukleotidlar GCC ACG TGG TAG TGG GGT TCG GAT ketma-ketlikda joylashgan bo‘lib, uchinchi tripletdagi hamma nukleotid tranzitsiyaga uchragandan so‘ng, shu qo‘sh zanjirdagi har bir nukleotid yig‘indisini aniqlang.",
        options: [
          "A) A-13, С-11, T-13, G-11;",
          "B) G-14, T-10, С-14, A-10;",
          "C) T-5, A-7, С-9, G-3;",
          "D) A-5, T-7, С-3, G-9;",
        ],
        correctAnswer: "A",
      },
      {
        id: 3,
        number: 3,
        question:
          "Quyida berilgan organizmlar mansub sistematik birliklar-ni aniqlang. 1) kutora; 2) latcha; 3) sterlyad; 4) skuns;",
        options: [
          "A) 1-sudralib yuruvchilar sinfi; 2-yirtqich sutemizuv- chilar turkumi; 3-bakra baliqlar turkumi; 4-yirtqich sutemizuvchilar turkumi",
          "B) 1-oz tishlilar turkumi; 2-suvsarsimonlar oilasi; 3- suyakli baliqlar sinfi; 4-xordalilar tipi",
          "C) 1-kemiruvchilar turkumi; 2-yirtqich sutemizuvchilar turkumi; 3-bakra baliqlar sinfi; 4-xordalilar tipi",
          "D) 1-hasharotxo‘rlar turkumi; 2-suvsarsimonlar oilasi; 3- suyakli baliqlar sinfi; 4-sutemizuvchilar sinfi",
        ],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 4,
        question:
          "Tupaylar tarqalgan biogeografik viloyatdagi gastrulyatsiya jarayoni blastula devorining qat-qat joylashuv yo‘li bilan amalga oshadigan organizmlar berilgan javobni aniqlang.",
        options: [
          "A) qirg‘ovil, tustovuq",
          "B) gavial, agama",
          "C) bankiv, tovus",
          "D) zaharli ilon, chittak",
        ],
        correctAnswer: "B",
      },
      {
        id: 5,
        number: 5,
        question:
          "Tamaki mozaikasi va achitqi uchun umumiy bo‘lmagan tuzilmalarni aniqlang. 1) timin asosi; 2) oqsil; 3) hujayra qobig‘i; 4) ATF; 5) riboza; 6) polinukleotid zanjir; 7) aminokislota;",
        options: ["A) 2, 6, 7;", "B) 1, 3, 5;", "C) 2, 4;", "D) 2, 5, 6;"],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question:
          "11 % madaniy o‘simliklar markazi sanalgan davlatlardan kelib chiqan ko‘p yillik o‘simliklarni aniqalng.",
        options: [
          "A) karam, qand lavlagi;",
          "B) banan, kofe daraxti;",
          "C) sholi, shakarqamish;",
          "D) beda, zaytun;",
        ],
        correctAnswer: "D",
      },
      {
        id: 7,
        number: 7,
        question:
          "Quyida keltirilgan hayvonlar nerv sistemasi murak- kablashib borishi tartibida to‘g‘ri joylashtirilgan javobni toping. 1) ko‘l baqasi; 2) beluga; 3) sariq ilon; 4) norka; 5) gepard; 6) triton; 7) kasatka.",
        options: ["A) 4, 3, 1, 2;", "B) 7, 6, 3, 5;", "C) 2, 1, 3, 5;", "D) 4, 1, 3, 6;"],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Quyida berilgan qaysi birikmalar T-RNK tarkibida uchramaydi? 1) dezoksiriboza; 2) fosfat kislotasi qoldig‘i; 3)sistein; 4) riboza; 5) prolin; 6) tiamin; 7) uratsil; 8) sitozin; 9) adenin.",
        options: [
          "A) 1, 5, 6;",
          "B) 5, 6, 7; С) 1, 3, 8; D) 4, 6, 9;",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 9,
        number: 9,
        question:
          "DNKning bitta zanjirida 600 ta pirimidin asosi bo‘lib, u umumiy nukleotidlarning 20%ini tashkil qiladi. Shu DNK zanjiri asosida sintezlangan oqsil tarkibidagi monomer- lar sonini toping.",
        options: ["A) 400", "B) 480", "C) 800", "D) 500"],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question:
          "Quyidagi holatlar o‘zgaruvchanlikning qaysi turiga misol bo‘lishini aniqlang. 1) daltonizm kasalligi; 2) translokatsiya hodisasi; 3) qandli diabet kasalligi; 4) deletsiya hodisasi; 5) aneuploidiya; 6) xromosoma sonini karra oshishi; a) gen mutatsiyasi; b) xromosoma mutatsiyasi; c) genom mutatsiyasi",
        options: [
          "A) a-1, 3; b-2, 4; с-5, 6",
          "B) a-2, 3; b-4, 5; с-1, 6",
          "C) a-1, 4; b-2, 6; с-3, 5",
          "D) a-3, 5; b-1, 4; с-2, 6",
        ],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 11,
        question:
          "Kungaboqarga xos bo‘lmagan belgilarni aniqlang. 1) moychechakdoshlar oilachasi vakili; 2) qovoqdoshlar oilasiga kiradi; 3) ozuqasini ildizpoyada to‘playdi; 4) shakli o‘zgargan yer osti novdaga ega emas; 5) urug‘i meva ichida yopiq holda yetiladi; 6) ko‘payish a‘zosi arxegoniy hisoblanadi",
        options: ["A) 1, 4, 5", "B) 2, 4, 6", "C) 2, 3, 6", "D) 1, 3, 6"],
        correctAnswer: "B",
      },
      {
        id: 12,
        number: 12,
        question:
          "Aktiniya uchun xos xususiyatlarni aniqlang. 1) jinsiy ko‘payish kuzatiladi; 2) embrioni organogenez bos-qichini o‘taydi; 3) hujayralarida biokimyoviy ixtisoslashish mavjud; 4) jinsiy organlarga ega; 5) mantiyaga ega; 6) yirt-qich hayvon",
        options: [
          "A) 1, 3, 6",
          "B) 2, 4, 5",
          "C) 3, 5, 6",
          "D) 1, 2, 4 hujayra; 6) blastamer; 7) suyak;",
        ],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question:
          "Yoshi 20 dan oshgan sog‘lom yigitning og‘iz bo‘shlig‘i- da tuzilishiga ko‘ra 4 xil (А, В, С , D) tishlar mavjud bo‘lib, quyi-dagi ma‘lumotlar asosida A va B tishlarni aniqlang. ( B/C=0,5), (A + C ) / ( B + D )= 1",
        options: [
          "A) A-katta oziq tish,",
          "B) kichik oziq tish B) A-kurak tish, B-katta oziq tish",
          "C) A-kurak tish, B-qoziq tish",
          "D) A-kichik oziq tish, B-katta oziq tish",
        ],
        correctAnswer: "D",
      },
      {
        id: 14,
        number: 14,
        question:
          "Jadvalning qaysi qatoriarida (№) organizmlar va ular- ning rudiment organlari va ular mansub turkumlar muvofiq tarzda berilgan? № Rudiment organ Organiz Turkum m 1 Ikkinchi va Vladimir Toq to‘rtinchi tuyoqlila barmoqlari 2 Dumg‘aza va orqa Kivi Tuyaqush oyoq suyaklari 3 Bir juft kichik Bo‘ka Ikki qanotlar qanotlilar 4 Qanot skeleti Poliksina Tangacha- suyaklari qanotlilar 5 Uchinchi qovoq Odam Primat",
        options: ["A) 1, 4, 5;", "B) 2, 3, 4;", "C) 1, 3, 5;", "D) 1, 2, 5;"],
        correctAnswer: "D",
      },
      {
        id: 15,
        number: 15,
        question:
          "Ekologik piramida fitoplankton-zooplankton-mayda ba-liqlardan iborat. Fitoplankton 5000 t bo‘lib, 80% qismi iste‘mol qilindi, zooplankton ortgan massasining 20% qismi iste‘mol qilinmadi. Zooplankton va mayda baliqlarninglar-ning massaslari necha kilogrammga ortadi?",
        options: ["A) 432000", "B) 550000", "C) 44000", "D) 400000"],
        correctAnswer: "D",
      },
      {
        id: 16,
        number: 16,
        question: "Quyidagi ma‘lumotlardan qaysi biri kalamit uchun mos kelmaydi?",
        options: [
          "A) Infraqizil nurlarning har xil spektrlarini fotopigment- lar orqali o‘zlashtiradi",
          "B) Harakat yo‘nalishi yorug‘likning ta‘sir yo‘nalishiga bog‘liq bo‘lmagan harakatlanish fotonastiya deyiladi",
          "C) Energetik almashinuv jarayonining anaerob bosqichi sitoplazmada, aerob bosqichi mitoxondriyada kechadi",
          "D) Biogeotsenoz tarkibida produsent sifatida birlamchi uglevod sintezida qatnashadi",
        ],
        correctAnswer: "B",
      },
      {
        id: 17,
        number: 17,
        question:
          "Quyidagi tushunchalarni tiriklikning tuzilish daraja- lariga mos ravishda to‘g‘ri ketma-ketlikda joylashtiring. 1) kommensalizm; 2) ontogenez; 3) epiteli; 4) azot migratsiyasi; 5) mitoz; 6) inversiya; 7) genofond;",
        options: [
          "A) 6; 5; 3; 2; 7; 1; 4",
          "B) 4; 1; 7; 3; 2; 6; 5",
          "C) 3; 2; 5; 7; 6; 4; 1",
          "D) 5; 3; 6; 1; 2; 4; 7",
        ],
        correctAnswer: "C",
      },
      {
        id: 18,
        number: 18,
        question:
          "Gekkonning embrional rivojlanishini ketma-ketligini to‘g‘ri belgilang. 1) blastula; 2) xorda; 3) mezoderma; 4) zigota 5) tuxum 8) gastralu;",
        options: [
          "A) 4,6,1,8,3,2,7;",
          "B) 5,4,6,8,3,2,7;",
          "C) 4,1,6,8,3,2,7;",
          "D) 4,6,1,3,8,2,7;",
        ],
        correctAnswer: "D",
      },
      {
        id: 19,
        number: 19,
        question:
          "Ko‘lbuqaning ovogenez va spermatogenez uchun umumiy bo‘lmagan hodisalar qaysi javobda to‘g‘ri berilgan? 1) ko‘payish davrida transkripsiya va replikatsiya sodir bo‘ladi; 2) 1ta gaploid to‘plamga ega bo‘lgan yirik hujayra hosil bo‘ladi; 3) hujayralarning 50% X ba 50% Y xromasomaga ega; 4) o‘sish davrida hujayralarda translyatsiya kuzatiladi; 5) yetilish davridan so‘ng hujayralarning barchasi X xromasoma ega bo‘ladi 6) ko‘payishda diploid to‘plamli hujayralar hosil bo‘ladi;",
        options: ["A) 1,4,6", "B) 2,3,5", "C) 3,5,6", "D) 2,4,6"],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question:
          "Oddiy amyoba (a), nursimonlar (b), yashil evglena (c), tufelka (d) uchun xos bolgan xususiyatlarni aniqlang. 1) bakteriyalar, mayda suv o‘tlari va organik qoldiqlar bilan oziqlanadi; 2) xromatoforidagi xlorofill pigmenti yordamida fotosintez qiladi; 3) qisqaruvchi vakuolaga ega; 4) kremniy skeletli; 5) hazm qilish va ayirish organoidlari nisbatan murakkab tuzilgan.",
        options: [
          "A) a - 3; b - 4; с - 2; d - 5",
          "B) a - 2; b - 4, 5; с - 1, 2; d - 3",
          "C) a - 4; b - 1, 5; с - 1, 3; d - 2",
          "D) a - 1, 2; b - 4; с - 5; d - 3",
        ],
        correctAnswer: "A",
      },
      {
        id: 21,
        number: 21,
        question:
          "Ovqat hazm qilish sistemasi og‘izteshigi, halqum, qizi- lo‘ngach, ikki bo‘lmali oshqozon, ichak, jigar naylari va anal teshigidan iborat bo‘lgan dengiz hayvonlarini aniqlang.",
        options: [
          "A) baqachanoq, suv shillig‘i, lansetnik",
          "B) siklop, dafniya, oq planariya",
          "C) exinokokk, tridakna, qoraqurt",
          "D) krevetka, langust, omar",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 22,
        question:
          "Umurtqasiz hayvonlarning ajdodlari haqidagi to‘g‘ri ma‘lumotlarni aniqlang. 1) trilobitlar halqali chuvalchanglar bilan bo‘g‘imoyoqlilar o‘rtasidagi oraliq hayvonlar hisoblanadi; 2) hasharotlar o‘r-gimchaksimonlardan paydo bolgan; 3) halqali chuval- changlar erkin yashovchi qadimgi yassi chuvalchanglar- dan kelib chiqqan; 4) to‘garak chuvalchanglar yassi chuvalchanglardan kelib chiqqan; 5) baliqlarning qadimgi ajdodlari lanset-nikka o‘xshash sodda tuzilgan xordalilar bolgan.",
        options: [
          "A) 2, 5",
          "B) 3, 5 С) 1, 3 D) 4, 5",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 23,
        number: 23,
        question:
          "Dengiz mushugining yuragiga ... (I) keladi, maralning yuragidan ... (II) chiqadi. Nuqtalar o‘rniga mos keluvchi to‘g‘ri ma‘lumotlar ko‘rsatilgan javobni belgilang. 1) kichik qon aylanish doirasi venalari orqali arterial qon; 2) kichik qon aylanish doirasi venalari orqali venoz qon; 3) katta qon aylanish doirasi venalari orqali venoz qon; 4) kichik qon aylanish doirasi arteriyalari orqali venoz qon; 5) katta qon aylanish doirasi venalari orqali arterial qon; 6) katta qon aylanish doirasi arteriyalari orqali venoz qon; 7) katta qon aylanish doirasi arteriyalari orqali arterial qon; 8) kichik qon aylanish doirasi arteriyalari orqali arterial qon",
        options: [
          "A) I - 2, 5; II - 3, 8",
          "B) I - 4, 6; II - 2, 7",
          "C) I - 1, 5; II - 4, 7",
          "D) I - 1, 3; II - 4, 7",
        ],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question:
          "Kiprikli chuvalchanglarning parazit yashashga mos- lashgan vakillaridan so‘rg‘ichlilar hamda tasmasimon chuval-changlarning kelib chiqishi (a), yettisoy, murg‘ob, xiva qir-g‘ovul kenja turlarining paydo bolishi (b), xaltali krot va oddiy krot tashqi qiyofasining o‘zaro o‘xshashligi (c) qaysi biologik hodisalarni aks ettiradi?",
        options: [
          "A) a-divergensiya; b-makroevolutsiya; с- konvergensiya",
          "B) a-mikroevolutsiya; b-divergensiya; с-makroevolutsiya",
          "C) a-mikroevolutsiya; b-makroevolutsiya; с-divergensiya",
          "D) a-makroevolutsiya; b-mikroevolutsiya; с- konvergensiya",
        ],
        correctAnswer: "A",
      },
      {
        id: 25,
        number: 25,
        question:
          "Xordalilar tipining evolutsiyasida aromorfozlarning paydo bolish ketmaketligini aniqlang. 1) miya yarimsharining po‘stlog‘ida ilonizi burmalar; 2) o‘pka devorining ko‘plab katakchalarga bo‘linganligi; 3) katta va kichik qon aylanish doiralari; 4) nerv nayi; 5) ikki kamerali yurak.",
        options: ["A) 4, 3, 2, 5, 1", "B) 4, 3, 5, 1, 2", "C) 4, 5, 3, 2, 1", "D) 5, 4, 2, 3, 1"],
        correctAnswer: "D",
      },
      {
        id: 26,
        number: 26,
        question:
          "Pavlov fikri bo‘yicha, qobiliyatli, zehnli, yuvosh, kuchli, muvozanatlashgan, kamharakat, har bir ishni nihoyasiga yetkazib bajaradigan bolalar tipini aniqlang.",
        options: ["A) xolerik", "B) flegmatik", "C) sangvinik", "D) melanxolik"],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 27,
        question: "Nerv sistemasi kasalligi to‘g‘ri ta‘riflangan javobni aniqlang.",
        options: [
          "A) poliomiyelit - bosh miya to‘qimasining yalliglanishi",
          "B) radikulit - bosh miyani o‘rab turgan pardaning yalliglanishi",
          "C) nefrit - buyraklarning yalliglanish kasalliklari",
          "D) nevrit - harakatlantiruvchi nerv tolalarining yalliglanishi",
        ],
        correctAnswer: "D",
      },
      {
        id: 28,
        number: 28,
        question:
          "Urug`kurtakka ega bo`lgan o`simliklarni aniqlang. 1.spiragira 2.nitella 3.Virgin archasi 4.ulva 6.nostok",
        options: ["A) 3,5", "B) 1,5", "C) 3,4", "D) 2,6"],
        correctAnswer: "D",
      },
      {
        id: 29,
        number: 29,
        question:
          "Mitozning metafaza (1) va meyozning metafaza II (1) bosqichlari uchun umumiy bo‘lgan holatlarni belgilang. a) konyugatsiyalashgan xromosomalar ekvator tekisligi- da joylashuvi; b) bir xromosomaning xromatidalari birlamchi belbog‘ bilan birikkan holati; c) xromosomalar- ning diploid to‘plami; d) xromosomalarning spirallash-gan holati; e) xromosomalarning gaploid to‘plami",
        options: [
          "A) 1-b; 2-e",
          "B) 1-a; 2-d С) 1-d; 2- c D) 1-a; 2-c",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 30,
        number: 30,
        question:
          "To‘g‘ri ma‘lumotni aniqlang. 1) 89 ta peptid bog‘iga ega oqsil sintezida qatnashgan i- RNK da 266 ta nukleotid bo‘ladi; 2) 210 ta nukleotiddan iborat i-RNK asosida sintezlangan oqsil molekulasida 70 ta amino-kislota bo‘ladi; 3) 120 ta riboza molekulasi bo‘lgan i-RNK dan 39 ta peptid bog‘li oqsil molekulasi hosil bo‘ladi; 4) 358 ta nukleotiddan iborat DNK dan 180 molekula ribozaga ega i-RNK hosil bo‘ladi",
        options: [
          "A) 2 ,3",
          "B) 2, 4 С) 1, 3 D) 1, 4",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
    ],
  },
  {
    id: 24,
    title: "Variant 24",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Quyidagi sxemada mushak hujayralarida energiya almas-hinuvining ikkinchi bosqichidagi ayrim jarayon berilgan. Bunga ko‘ra quyidagilarning qaysi biri to‘g‘ri",
        options: [
          "A) 2 ifodasi glyukozani ko‘rsatadi",
          "B) 2 ifodasi CO ni ko‘rsatadi 2",
          "C) 1 ifodasi O2 ko‘rsatadi",
          "D) 2 ifodasi sut kislotani ko‘rsatadi",
        ],
        correctAnswer: "A",
      },
      {
        id: 2,
        number: 2,
        question:
          "Nazariy jihatdan DNK molekulasining birinchi zanjirida nukleotidlar GCC ACG TGG TAG TGG GGT TCG GAT GCC ACG TGG GCC ACG TGG GCC ACG TGG ketma-ketlikda joylashgan bo‘lib, 1,3,5,7,8,10,12,15,17-tripletlardagi hamma nukleotid tranzitsiyaga uchragandan so‘ng, shu qo‘sh zanjirdagi purin va pirimidin asoslari nisbati qanday bo‘ladi.",
        options: ["A) 1:3", "B) 3:1", "C) 1:1", "D) 3:2"],
        correctAnswer: "A",
      },
      {
        id: 3,
        number: 3,
        question:
          "Maral mansub tip (1), lori mansub sinf (2), yalqov man- sub turkum (3), vidra mansub oila (4) ni aniqlang.",
        options: [
          "A) 1 - umurtqalilar; 2 - sutemizuvchilar; 3 - oz tishlilar; 4 - kemiruvchilar",
          "B) 1 - xordalilar; 2 - sutemizuvchilar; 3 - hasharotxo‘rlar; 5.lipa 4 - suvsarsimonlar",
          "C) 1 - xordalilar; 2 - sutemizuvchilar; 3 - oz tishlilar; 4 - suvsarsimonlar",
          "D) 1 - umurtqalilar; 2 - sudralib yuruvchilar; 3 - hasharotxo‘rlar; 4 - suvsarsimonlar",
        ],
        correctAnswer: "B",
      },
      {
        id: 4,
        number: 4,
        question:
          "Ma‘lum bir xromasoma bo‘lagida А, В va С genlari o‘zaro birikkan holda irsiylanadi. A va В geni orasidagi krossingover foizi 4,7 % ni, В va С geni orasidagi krossingover foizi 2,1 % ni tashkil qilsa, A va С genlari orasidagi maksimal masofani (morganida) aniqlang.",
        options: ["A) 2,6", "B) 6,8", "C) 9,8", "D) 4,7"],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Qovoq mevasining sariq rangi U geniga, yashil rangi esa u geniga bog‘liq. Ikkinchi juftning dominant geni (S) ingibitor vazifasini bajaradi. s gen ranga ta‘sir ko‘rsatmaydi. Quyidagi chatishtirishlarning qaysi birida 50 % oq, 37,5 % sariq, 12,5 % yashil rangli qovoqlar olinadi",
        options: ["A) UuSs x uuSs", "B) UuSs x UuSs", "C) UuSs x Uuss", "D) UUSs x Uuss"],
        correctAnswer: "D",
      },
      {
        id: 6,
        number: 6,
        question: "Qaysi javobda juft yassi(a) va toq galvirsimon(b) suyak berilgan?",
        options: [
          "A) a-ensa; b-yuqorigi jag‘;",
          "B) b-tepa; a-peshana;",
          "C) a-kurak; b-yuqorigi jag‘;",
          "D) b-peshana; a-pastki jag‘;",
        ],
        correctAnswer: "B",
      },
      {
        id: 7,
        number: 7,
        question:
          "Nerv sistemasi halqum atrofi nerv halqasi, undan tana-ning oldingi va keyingi tomoniga uch juft nerv stvoli hamda stvollarni tutashtiruvchi ko‘ndalang nervlardan iborat. Yuqoridagi jumla qaysi organizlarga xos?",
        options: [
          "A) oq planariya, jigar qurti;",
          "B) jigar qurti, qoramol tasmasimon chuvalchangi",
          "C) rishta, bo‘rtma nematodasi;",
          "D) gijja, exinakokk;",
        ],
        correctAnswer: "B",
      },
      {
        id: 8,
        number: 8,
        question:
          "Quyidagi ta‘riflar odam organizmidagi qaysi to‘qima va uning hajayralariga mos ekanligini juftlab ko‘rsating. a) muskul to‘qima; b) epitely to‘qimasi;",
        options: [
          "A) a-postembrional davrda DNK reduplikatsiyasi kuzatil- maydi ; b-mintozning anafaza bosqichda 92 ta xromosomaga ega",
          "B) a-yadrosiz hujayralarga ham ega; b- tolasi miyelin parda-si bilan o‘ralgan",
          "C) a- mintozning anafaza bosqichda 92 ta xromosomaga ega; b- ichki organlar shilliq qavati deb ataladi",
          "D) a-miofibrill tolalariga ega b- postembrional davrda DNK reduplikatsiyasi kuzatilmaydi",
        ],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 9,
        question:
          "Tangachalilar uchun xos bo‘lgan sitokinez (a) ontoge- nez (b) va gastrulyatsiya(c) tiplari? 1) invaginatsiya; 2) lichinkali; 3) qat-qat; 4) lichinkasiz; 5) o‘sib kirish; 6) migratsiya.",
        options: ["A) a-1; b-2; c-1", "B) a-1; b-4; c-3", "C) a-1; b-4; c-5", "D) a-1; b-2; c-3"],
        correctAnswer: "C",
      },
      {
        id: 10,
        number: 10,
        question:
          "Buyrak po`stlog`ida(I) va mag`iz(II) qavatida nechilamchi siydik bo`lishligini aniqlang. a) birlamchi; b) ikkilamchi",
        options: ["A) I-b; II-a", "B) I-a; II-a,b", "C) I-a,b; II-b", "D) I-a,b; II-a,b"],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 11,
        question:
          "Havo massalarining gorizontal va vertikal ravishda harakatlanishi natijasida nima hosil bo`ladi?",
        options: [
          "A) harorat ko`tarilishi",
          "B) haroratning pasayishi",
          "C) shamol",
          "D) suvning harakatlanishi",
        ],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 12,
        question:
          "Modifikator (I), letal (II) va pleyotrop(III) genga ega organizmlarni to‘g‘ri juftlangan javobni belgilang. 1) drozofila pashshasi ko‘zida pigment bo‘lmasligi pushtli- ligni kamaytirishi; 2) AA genotipli sichqonning embrionlik davrida nobud bo‘lishi; 3) qoramollarda oq va qora yungning turli miqdorda irsiylanishi",
        options: [
          "A) I-3; II-2; III-1",
          "B) I-2; II-1; III-3",
          "C) I-2; II-3; III-1",
          "D) I-3; II-1; III-2",
        ],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question: "Qirqbo‘g‘imlarning gametofiti uchun mos keladigan javobni aniqlang.",
        options: [
          "A) zigotadan rivojlanadi, sporofit hisobiga oziqlanadi",
          "B) zigotadan rivojlanadi, avtotrof organizm",
          "C) ayrim jinsli, sporadan rivojlanadi",
          "D) yashil rangli poyasi bo‘g‘imlarga bo‘lingan",
        ],
        correctAnswer: "C",
      },
      {
        id: 14,
        number: 14,
        question:
          "Dengiz tulkisining qon aylanish sistemasida qon harakati to‘g‘ri ko‘rsatilgan javobni aniqlang. a) jabralarga keladi; b) yurak bolmachasiga keladi; c) yurak qorinchasidan chiqadi; d) organlarga keladi; 1) arteriyalarda venoz qon; 2) yurak venasida arterial qon; 3) qorin aortasida arterial qon; 4) yurak venasida venoz qon; 5) orqa aortada venoz qon; 6) qorin aortasida venoz qon; 7) orqa aortada arterial qon; 8) venalarda venoz qon.",
        options: [
          "A) a - 1, b - 3, с - 5, d - 7",
          "B) a - 2, b - 5, с - 7, d - 8",
          "C) a - 1, b - 4, с - 6, d - 7",
          "D) a - 2, b - 3, с - 6, d - 8",
        ],
        correctAnswer: "C",
      },
      {
        id: 15,
        number: 15,
        question:
          "Baqlajon (a), o‘sma (b), g‘umay (c) o‘simliklari haqidagi to‘g‘ri ma‘lumotlarni aniqlang. 1) gulkosachabarglari to‘rtta; 2) popuk ildiz tizimiga ega; 3) gullari shingil to‘pgulda joylashgan; 4) mevasi ko‘sak- cha; 5) barglari ildiz bo‘g‘zida va poyada joylashgan; 6) xarduma bilan bir sinfga mansub; 7) ituzum turkumiga mansub.",
        options: [
          "A) a - 1, 7; b - 5; с - 2, 4",
          "B) a - 4; b - 6; с - 3, 5",
          "C) a - 1, 6; b - 4; с - 6",
          "D) a - 7; b - 3, 1; с - 2, 6",
        ],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 16,
        question:
          "Ovqat hazm qilish sistemasi og‘iz, halqum, qizilo‘ngach, jig‘ildon, oshqozon, ichak va anal teshigidan iborat bo‘lgan hayvonlarni aniqlang.",
        options: [
          "A) odam askaridasi, bolalar gijjasi, nereida",
          "B) zuluklar, sadafdor, bo‘rtma nematoda",
          "C) midiya, perlovitsa, oq planariya",
          "D) yomg‘ir chuvalchangi, qizil chuvalchang, nereida",
        ],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question:
          "Quyidagi misollarni mutatsiya jarayon (1) va populatsiya to'lqini (2) biologik hodisalarga moslang? a) evolyutsiyaning boshlang‘ich materiali hisoblanadi; b) bu jarayon populyatsiya genofondini o'zgartiradi; c) kombinativ o‘zgaruvchanlik tufayli nasldan naslga beriladi; d) jarayon oziq-ovqatning ortiqcha yoki yetishmasligidan kelib chiqadi; e) irsiy o'zgaruvchanlik- ning asosiy manbayidir; f) ma'lum bir davriylikka ega;",
        options: [
          "A) 1 – c, d; 2 – b",
          "B) 1 – d, f; 2 – a, e",
          "C) 1 – b, e; 2 – a, d",
          "D) 1 – a, b; 2 – b, f",
        ],
        correctAnswer: "B",
      },
      {
        id: 18,
        number: 18,
        question:
          "Baqa lichinkasida tashqi jabralarining ichki jabralari- ga almashinishi o'zgaruvchanlikning qaysi turiga misol bo'ladi?",
        options: [
          "A) genotipik-ontogenetik",
          "B) fenotipik-modifikatsion",
          "C) fenotipik-ontogenetik",
          "D) genotipik-rekombinativ",
        ],
        correctAnswer: "B",
      },
      {
        id: 19,
        number: 19,
        question:
          "Baqachanoqning qaysi xususiyatlari turning morfologik (a) va ekologik (b), mezonlarini ifodalaydi? 1) lichinkasi parazit hayot kechiradi; 2) chig‗anog‗ining sirti muguz moddadan iborat, ichki yuzasi har xil rangda tovlanadigan sadaf bilan qoplangan; 3) tanasi mantiya bilan qoplangan; 4) suv muhitidagi organizmlar bilan oziqlanadi; 5) qon aylanish sistemasi ochiq; 6) voyaga yetganda suv tubida hayot kechiradi;",
        options: [
          "A) a – 2, 5; b – 1, 4",
          "B) a – 3, 6; b – 2, 5",
          "C) a – 1, 2; b – 5, 6",
          "D) a – 4, 6; b – 2, 5",
        ],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question: "Embrion ma'lum izchillikda rivojlanadi degan fikir qaysi olimga tegishli?",
        options: ["A) Aristotel", "B) Lukretsiy Kar", "C) Karl Ber", "D) K. Linne"],
        correctAnswer: "A",
      },
      {
        id: 21,
        number: 21,
        question:
          "Qora kalamushning zigotasi 4 marata meridianal bo`lin-gandan so`ng uning blastulasidagi blastamerlarida jami xromasomalr soni 2688 taga yetgan bo`lsa, unig somatik hujayrasidagi autosomalar xromasomalar sonini aniqlang.",
        options: [
          "A) 36",
          "B) 40 D)42 D)44",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 22,
        question: "Turkum sistematik birligiga mos keluvchi javobni aniqlang.",
        options: [
          "A) bo‗g‗imoyoqlilar, bo‗risimonlar",
          "B) xordalilar, ayiqsimonlar",
          "C) ayiqsimonlar, halqali chuvalchanglar",
          "D) na‘matak, laylaksimonlar",
        ],
        correctAnswer: "A",
      },
      {
        id: 23,
        number: 23,
        question: "Chala o‗zgarish bilan rivojlanadigan turkumlarni aniqlang.",
        options: [
          "A) burgalar, ninachilar",
          "B) qandalalar, termitlar",
          "C) pardaqanotlilar, qandalalar",
          "D) bitlar, burgalar",
        ],
        correctAnswer: "C",
      },
      {
        id: 24,
        number: 24,
        question:
          "Yong'oq o'simligining to'pgulda yig'ilgan gullining qaysi qismi rivojlanmagan ? 1)gulband 2)gulo'rni 3)gulkosacha 4)gultoji 5)changchi 6)urug'chi 7)gulqo'rg'on",
        options: ["A) faqat 7", "B) 7,5", "C) barchasi", "D) 1,6"],
        correctAnswer: "B",
      },
      {
        id: 25,
        number: 25,
        question:
          "Lola va g’o’za uchun umumiy hususiyatlarni aniqlang 1) gullari ikki jinsli 2) gulqo’rg’oni oddiy 3) qiyshiq gulli 4) gulqo’rg’on bo’laklari qoshilgan 5) ost gulkosacha- bargli 6) quruq mevali 7) gulqorg’oni murakkab 8) mevasi ko’sak",
        options: ["A) 1, 6, 8", "B) 2, 4, 6", "C) 1, 4, 8", "D) 3, 4, 7"],
        correctAnswer: "B",
      },
      {
        id: 26,
        number: 26,
        question:
          "Birinchi bo‗lib o‗simliklar hayotida muhit omillari- ning ahamiyatini o‗rgangan olim?",
        options: ["A) Aleksandr Gumbold", "B) A.Tensli", "C) V.N.Sukachev", "D) V.I.Vernadskiy"],
        correctAnswer: "B",
      },
      {
        id: 27,
        number: 27,
        question:
          "Simbioz(a) va parazit(b) organizmlarning yashash muhiti noto‘g‘ri ko‘rsatilgan javobni aniqlang.",
        options: [
          "A) a-tuproq; b-tirik organizm",
          "B) a,b-tirik organizm",
          "C) a,b-havo;",
          "D) a-tirik organizm; b-suv",
        ],
        correctAnswer: "D",
      },
      {
        id: 28,
        number: 28,
        question: "Nemalion haqidagi noto‘g‘ri malumotni aniqlang.",
        options: [
          "A) yashil suvo‘tlar bo‘limiga mansub emas",
          "B) Suv havzalarining sayoz qismlarida uchraydi",
          "C) Suv havzalarining eng chuqur qismida uchraydi",
          "D) Suv havzalarining chuqurroq qatlamlarida uchramaydi",
        ],
        correctAnswer: "A",
      },
      {
        id: 29,
        number: 29,
        question:
          "Membrana orqali turli moddalarni, nerv hujayralarida hosil bo‘lgan qo‘zg‘alishni o‘tkazish funksiyasini qaysi element bajaradi?",
        options: ["A) Na,Ca,P;", "B) Na,Fe,Cl;", "C) Na, K, Cl;", "D) Fe,Zn,P;"],
        correctAnswer: "C",
      },
      {
        id: 30,
        number: 30,
        question: "4HO = xH O + yO reaksiyada x(a) va y(b)ning son 2 2 qiymatini aniqlang.",
        options: ["A) b-2; a-1;", "B) b-4; a-1;", "C) b-1; a-2;", "D) b-3; a-2;"],
        correctAnswer: "D",
      },
    ],
  },
  {
    id: 25,
    title: "Variant 25",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Metamorfoz jarayonida yashash muhiti almashinadi- gan organizmlarni aniqlang. 1) kolorado qo‘ng‘izi; 2) assidiya; 3) zog‘ora baliq; 4) alliga-tor; 5) povituxa qurbaqasi; 6) suqsun; 7) podalariy; 8) kuropatka.",
        options: ["A) 1, 5", "B) 3, 4", "C) 6, 7", "D) 2, 8"],
        correctAnswer: "C",
      },
      {
        id: 2,
        number: 2,
        question:
          "Rasmga diqqat qiling. Bosh skeleti tuzilishi aks ettirilgan rasmda 7-raqam bilan berilgan suyakda qanday birikish turi uchraydi?",
        options: ["A) harakatsiz", "B) choksiz", "C) chokli", "D) A,B"],
        correctAnswer: "C",
      },
      {
        id: 3,
        number: 3,
        question:
          "Odamda murtak ektodermasidan rivojlanuvchi tuzulmalarni aniqlang. 1) uzunchoq miya; 2) ichak epiteliysi; 3) terining epider- mis qavati; 4) o‘mrov osti muskuli; 5) kolbachasimon va tayoqchasimon retseptorlar; 6) o‘pka arteriyasi; 7) o‘ng va chap o‘pka; 8) jabra.",
        options: [
          "A) 2, 4",
          "B) 5, 8 С) 1, 3 D) 6, 7",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 4,
        question:
          "Gorillada ovogenezning ko‘payish davrida sodir bo‘lmaydigan jarayonlarni aniqlang. 1) jinsiy hujayralarda 24 ta xromosoma bo‘ladi; 2) diploid to‘plamli hujayralar hosil bo‘ladi; 3) hujayralar meyoz usulida bo‘linadi; 4) hujayralar mitoz usulida bo‘linadi.",
        options: [
          "A) 1, 3",
          "B) 3, 4 С) 1, 2 D) 2, 4",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 5,
        number: 5,
        question:
          "Quyidagilardan meyozning bosqichlariga mos keladi- gan xromosomalar to‘plami to‘g‘ri ko‘rsatilgan javobni belgilang. a) bir DNKli xromosomalarning diploid to‘plami; b) bir DNKli xromosomalarning gaploid to‘plami; c) ikki DNKli xromosomalaming diploid to‘plami; d) bir DNKli xromosomalarning tetraploid to‘plami; e) ikki DNKli xromosomalarning gaploid to‘plami.",
        options: [
          "A) b - interfaza S davri; с - metafaza I; d - anafaza I; e - telofaza I",
          "B) a - interfaza presintetik davri; с - metafaza II; с - anafaza I; e - telofaza II",
          "C) с - interfaza postsintetik davri; с - metafaza I; с - anafaza I; b - telofaza II",
          "D) с - interfaza presintetik davri; с - metafaza I; с - anafaza II; e - telofaza I",
        ],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question:
          "Otasi gemofiliya bilan kasal, onasining ajdodlarida esa gemofiliya uchramagan erkak somatik hujayrasining mitoz sikli profazasida H (I), h (II) allellari sonini aniqlang.",
        options: ["A) I - 2; II - 0", "B) I - 1; II - 0", "C) I - 0; II - 2", "D) I - 1; II - 1"],
        correctAnswer: "C",
      },
      {
        id: 7,
        number: 7,
        question: "Quyidagi sixema asosida X, Z ni aniqlang. Koroll poliplari X gidrasimonlar Z",
        options: [
          "A) X-soxta oyoqlilar; Z-aktiniya",
          "B) X-koloniyali, bir hujayrali xivchinlilar; Z-aktiniya",
          "C) X-koloniyali, bir hujayrali xivchinlilar; Z-meduza",
          "D) X-yakka yashaydigan xivchinlilar; Z-meduza",
        ],
        correctAnswer: "C",
      },
      {
        id: 8,
        number: 8,
        question:
          "Quydagi jadvalda o‘simlik, zamburug‘, bakteriya, hayvon hujayralari uchun ayrim xususiyatlar berilgan. Shunga kora I raqamga mos keluvchi organizmlarni aniqlang. 1) dront; 2) kedr; 3) protenor; 4) anturium; 5) betaga; 6) monstera; 7) birqozon; 8) oqquyruq; 9) oqquray;10) oqsla; 11) lepidodendronlar; 12) oqcha; 13) zea mays; 14) barssia oleraceae;",
        options: ["A) 1, 3, 7, 8;", "B) 2, 4, 8, 7, 12;", "C) 3, 9, 10, 12;", "D) 8, 13, 14;"],
        correctAnswer: "B",
      },
      {
        id: 9,
        number: 9,
        question:
          "Bo‘kalarning qurti qoramol(1) va ot(2)ning qaysi organi-da parazitlik qilishini aniqlang?",
        options: [
          "A) 1-burun bo‘shlig‘i; 2-oshqozoni",
          "B) 1-oshqozoni; 2-terisi ustida",
          "C) 1-terisi ustida; 2-oshqozoni",
          "D) 1-terisi ostida; 2-oshqozoni",
        ],
        correctAnswer: "C",
      },
      {
        id: 10,
        number: 10,
        question:
          "Nafas olishda qaysi muskullar qisqaradi(a), bo‘shashadi(b). 1) tashqi qovurg‘alararo; 2) ichki qovurg‘alararo; 3) ko‘krak diafragmasi; 4) qorin muskullari;",
        options: ["A) a-1,4,3; b-2;", "B) a-2; b-1,4,3;", "C) a-1,3; b-2,4;", "D) a-2,4;b-1,3;"],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 11,
        question:
          "Qo‘lning uch boshli muskuli qo‘lni qaysi qismida joy- lashganligi (a) va vazifasi (b) to‘g‘ri ko‘rsatilgan javobni anoqlang.",
        options: [
          "A) a-yelkaning orqa qismida; b-tirsakdan bukish;",
          "B) a-yelkaning oldingi qismida; b-tirsakdan bukish;",
          "C) a-yelkaning orqa qismida; b-tirsakdan yozish;",
          "D) a-yelkaning oldingi qismida; b-tirsakdan yozish;",
        ],
        correctAnswer: "D",
      },
      {
        id: 12,
        number: 12,
        question: "Dumi ikki yonidan siqilgan, orqa oyoqlarida pardasi bo‘lgan hayvonni belgilang.",
        options: ["A) triton", "B) gavial", "C) baqa", "D) salamandra"],
        correctAnswer: "B",
      },
      {
        id: 13,
        number: 13,
        question:
          "Quyidagi jadvalda ayrim organizmlarning energiya va uglevod manbalari berilgan. Bunga ko‘ra qaysi javobda II turga kiravchi organizm berilgan?",
        options: ["A) rafleziya", "B) temiz bakteriyasi", "C) lori", "D) bennetit"],
        correctAnswer: "B",
      },
      {
        id: 14,
        number: 14,
        question: "Morfologik jihatdan o‘xshash hayvonlar berilmagan javobni ko‘rsating?",
        options: [
          "A) iskaptopar, chivin C) temirchak, tovusko‘z",
          "B) yehidna, tipratikan D) bo‘ka, pashsha",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 15,
        number: 15,
        question:
          "Oqsil tarkibida 130 ta aminokislota mavjud. Ushbu oqsil sinteziga javobgar i-RNK bo‘lagidagi jami nukleotidlarning 30% ni urotsil, 20% adenin tashkil qilsa, oqsil sinteziga javobgar DNK tarkibidagi adenin va timin orasidagi vodorod bog‘lar sonini toping.",
        options: ["A) 117", "B) 390", "C) 351", "D) 195"],
        correctAnswer: "D",
      },
      {
        id: 16,
        number: 16,
        question:
          "DNK molekulasi haqidagi ma‘lumotlarga ma‘lumot- larga asoslanib DNKga tegishli to‘g‘ri tenglamani ko‘rsating. A) B) C) D)",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question:
          "K, L, M va N organizmlari tomonidan yaratilgan yuqoridagi oziq-ovqat zanjiriga ko‘ra, quyidagi so‘zlarning qaysi biri to‘g‘ri emas?",
        options: [
          "A) K eng katta biomassaga ega",
          "B) N eng kichik biomassaga ega",
          "C) K dan N ga qadar biologik birikmalarni yig‘ish kamayadi",
          "D) K dan N ga qadar biologik birikmalarni yig‘ish kamaymaydi",
        ],
        correctAnswer: "C",
      },
      {
        id: 18,
        number: 18,
        question:
          "Energiya almashinuvining 2-bosqichida hosil bo‘lgan energiya 3-bosqichida hosil bo‘lgan energiyaga teng bo‘lsa, glyukoza molekulalarining necha foizi chala parchalangan?",
        options: ["A) 92,3", "B) 85,7", "C) 92,8", "D) 100"],
        correctAnswer: "D",
      },
      {
        id: 19,
        number: 19,
        question:
          "Agar o‘simlikda hosil bo‘lgan mikrosporalarning 40% dan chang hosil bo‘lib, changning 50% urug‘lanishda qat- nashgan bo‘lsa hamda o‘simlikda 160 ta urug‘ hosil bo‘lgan bo‘lsa, ushbu jarayonda ishtirok etgan changdondagi mikrosporotsitlar sonini aniqlang.",
        options: ["A) 160", "B) 200", "C) 800", "D) 320"],
        correctAnswer: "B",
      },
      {
        id: 20,
        number: 20,
        question:
          "Qora kalamushning zigotasi 4 marta meridianal bo‘lin-gandan so‘ng uning blastulasidagi blastamerlarida jami xromasomalr soni 2688 taga yetgan bo‘lsa, unig somatik hujayrasidagi autosomalar xromasomalar sonini aniqlang.",
        options: [
          "A) 36",
          "B) 40 D) 42 D) 44",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 21,
        number: 21,
        question:
          "Modifikatsion o‘zgaruvchanlikka xos xususiyatlarni aniqlang. 1) to‘satdan paydo bo‘ladi; 2) populyatsiyaning ayrim individlarida sodir bo‘ladi; 3) o‘zgarishlar reaksiya normasi bilan belgilarnadi; 4) populyatsiyaning barcha individlarida kuzatiladi; 5) organizmlarning muhitga moslanishini ta ‗minlaydi; 6) irsiylanadi.",
        options: [
          "A) 1,2",
          "B) 3, 4 С) 3 ,6 D) 2, 5",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 22,
        number: 22,
        question:
          "Avstraliya biogeografik viloyatida emu, Neotropik biogeografik viloyatida nandu uchrashi (a), Baykal ko‘lida qisqichbaqasimonlarni boshqa ko‘llarda uchramaydigan turlarining paydo bolishi (b) tur paydo bolishining qaysi yo‘nalishiga misol boladi?",
        options: [
          "A) a-allopatrik; b-simpatrik",
          "B) a - simpatrik; b-simpatrik",
          "C) a-allopatrik; b-allopatrik",
          "D) a-simpatrik; b-allopatrik",
        ],
        correctAnswer: "D",
      },
      {
        id: 23,
        number: 23,
        question:
          "Evolutsiyani isbotlashda xizmat qiladigan molekular biologiya (1), solishtirma anatomiya (2) fanlari dalillari to‘g‘ri berilgan javobni aniqlang.",
        options: [
          "A) 1 - har xil turga mansub hayvonlar oqsillaridagi o‘xshashlik; 2 - gomologik organlar, atavizmlar",
          "B) 1 - biogenetik qonun, analogik organlar; 2 - rudiment organlar va atavizmlar",
          "C) 1 - turli hayvonlar gemoglobini tarkibidagi farq; 2 - yirtqich tishli kaltakesakning qazilma qoldiqlari",
          "D) 1 - konvergensiya hodisasi; 2 - rudiment organlar, analogik organlar",
        ],
        correctAnswer: "C",
      },
      {
        id: 24,
        number: 24,
        question:
          "To‘g‘ri (a) va noto‘g‘ri (b) fikrlarni aniqlang. 1) mezozavrlar - ilon kaltakesaklar; 2) pleziozavr – toshbaqa avlodi; 3) ixtiozavrlar - baliq kaltakesaklar; 4) trilobitlar - qadimgi bo‘g‘imoyoqlilar; 5) tiranozavrlar - o‘txo‘r kaltakesaklar; 6) brontozavrlar - yirtqich kaltakesaklar; 7) qalqondorlar - umurtqali hayvonlar.",
        options: [
          "A) a - 1, 3; b - 4 ,7",
          "B) a - 1, 4; b - 2, 6",
          "C) a - 2, 5; b - 3, 4",
          "D) a -4 ,5; b - 6, 7",
        ],
        correctAnswer: "B",
      },
      {
        id: 25,
        number: 25,
        question: "Nuqtalar o‘rniga mos javobni tanlang. Qobon ... hayvon.",
        options: [
          "A) kavsh qaytaruvchi juft tuyoqli",
          "B) oshqozoni ikki bo‘lmali",
          "C) kavsh qaytarmaydigan juft tuyoqli",
          "D) toq tuyoqli",
        ],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 26,
        question:
          "Kuydirgi kasalligining qo‘zg‘atuvchisiga xos bolgan xususiyatlarni aniqlang. 1) eukariot organizm; 2) prokariot organizm; 3) lizosomaga ega; 4) mitoz usulida ko‘payadi; 5) mitoxondriyaga ega; 6) geterotrof.",
        options: ["A) 2, 5", "B) 1, 4", "C) 3, 5", "D) 2, 6"],
        correctAnswer: "C",
      },
      {
        id: 27,
        number: 27,
        question:
          "Gigrofit (a), kserofit (b) yuksak o‘simliklarni aniqlang. 1) sarsazan; 2) yapon laminariyasi; 3) elodeya; 4) ro‘vak; 5) baliqko‘z; 6) qirqbo‘g‘im; 7) agava; 8) yantoq; 9) qamish; 10) nitella; 11) qo‘g‘a.",
        options: [
          "A) a - 3, 10; b - 1, 9",
          "B) a - 4, 10; b - 7, 8",
          "C) a - 9, 11; b - 7, 5",
          "D) a - 2, 6; b - 1, 8",
        ],
        correctAnswer: "D",
      },
      {
        id: 28,
        number: 28,
        question: "Funariya (a) va zuhrasoch (b) ning sporalari yetiladigan organlarni aniqlang.",
        options: [
          "A) a - sporangiy; b - sporangiy",
          "B) a - arxegoniy; b - arxegoniy",
          "C) a - sporangiy; b - arxegoniy",
          "D) a - anteridiy; b - sporangiy",
        ],
        correctAnswer: "C",
      },
      {
        id: 29,
        number: 29,
        question:
          "Quyidagilardan to‘g‘ri malumotni aniqlang. 1) nemalion suv havzalarining sayoz qismlarida uchrashi bilan porfiraga o‘xshaydi; 2) ulva suv havzalarining eng chuqur qismida uchrashi bilan ―Dengiz karami‖ farq qiladi; 3) fillofora suv havzalarining eng chuqur qismida uchrashi bilan ulvaga o‘xshaydi; 4) laminariya suv havzalarining chuqurroq qatlamlarida uchrashi bilan nemaliondan farq qiladi; 5) porfira suv havzalarining eng chuqur qismida uchrashi bilan nemaliondan farq qiladi; 6) nemalion suv havzalarining eng chuqur qismida uchrashi bilan filloforaga o‘xshaydi;",
        options: ["A) 1, 2,3 ;", "B) 2, 3, 4;", "C) 6, 5, 4;", "D) 4, 6;"],
        correctAnswer: "A",
      },
      {
        id: 30,
        number: 30,
        question:
          "Quyida DNK molekulasining bir qismi joylashgan. DNKning 1 -chi ipi mRNK sintezida matritsa ipi sifatida ishlatilganligi sababli, sintez qilingan mRNK molekulasi uchun qaysi biri to'g'ri?",
        options: [
          "A) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "B) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 26,
    title: "Variant 26",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Kaltakesakda tangachalarning tekis taqsimlanishi va tanasining kulrang bo‘lishi tangachalarning notekis va tanasi yashil bo‘lishiga nisbatan dominantlik qiladi. Bu belgilar faqat jinsiy X xromosomada birikkan holda irsiylanadi. Tangachalari tekis taqsimlangan yashil urg‘ochi organizm digeterozigotali (dominant belgilardan birini otasidan, ikkinchisini onasidan olgan) erkak kaltakesak bilan chatishtirilsa, nasllarning necha foizi kulrang, tangachalari tekis taqsimlangan krossoverlar bo‘ladi? (Krossingover foizi 8 ga teng.)",
        options: ["A) 27", "B) 46", "C) 69", "D) 4"],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question:
          "Genealogik usulni amalga oshirish bosqichlari to‘g‘ri ketma-ketlikda berilgan javobni aniqlang 1) Shajarani tahlil qilish. 2) Shajara (genealogik xarita) tuzish. 3) Xulosa yozish. 4) Ma‘lumotlar yig‘ish.",
        options: ["A) 2,4,1,3;", "B) 4,1,2,3;", "C) 4,2,1,3;", "D) 2,4,3,1;"],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question:
          "Quyda berilgan zotlarni yovvoyi ajdod turlari bilan to‘g‘ri juftlanga javobni aniqlang. 1) turman; 2) xolmagor; 3) yakobin; 4) laqay; 5) viandot; 6) karam; 7) pekin; a) yevropa turi; b) tapir; c) yovvoyi karam; d) ko‘k qoya kaptari; e) bankiv; f) yovvoyi o‘rdak;",
        options: ["A) 1,3-d; 2,5-a;", "B) 6-c; 7-f;", "C) 4-b; 3-d;", "D) 5-e; 7-f;"],
        correctAnswer: "A",
      },
      {
        id: 4,
        number: 4,
        question: "Qaysi turkumning urg‘ochisi geterogametali?",
        options: [
          "A) qushlar, sudralib yuruvchilar;",
          "B) reptiliya, anfibiya;",
          "C) ninachilar, to‘g‘riqanotlilar;",
          "D) timsohlar, tangachaqanotlilar;",
        ],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Gushti uchun reaksiya normasi keng bo‘lgan, chap aorta yoyiga ega organizmlar to‘g‘ri berilgan javobni aniqlang.",
        options: [
          "A) kornuel, plimutrok;",
          "B) gereford, yaroslavl;",
          "C) zagorsk, pervomaysk",
          "D) Qozog‘iston oqboshi, shortgorn",
        ],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question: "Nuqtalar o‘rniga mos javobni tanlang. Xongul... hayvon.",
        options: [
          "A) kavsh qaytaruvchi juft tuyoqli",
          "B) oshqozoni ikki bo‘lmali",
          "C) kavsh qaytarmaydigan juft tuyoqli",
          "D) toq tuyoqli",
        ],
        correctAnswer: "B",
      },
      {
        id: 7,
        number: 7,
        question: "Tishning qaysi qismida 72% mineral modda uchraydi?",
        options: ["A) emal", "B) periodont", "C) dintin", "D) sement"],
        correctAnswer: "B",
      },
      {
        id: 8,
        number: 8,
        question:
          "Quyidagi ta‘riflarga mos keluvchi moddalar to‘g‘ri ko‘rsa-tilgan javobni belgilang. 1) uchlamchi tuzulishli oqsil hisoblanadi; 2) transkripsiyada ishtirok etadi; 3) translyatsiya mahsuloti tarkibida uchramaydi",
        options: [
          "A) 1-mioglobin; 2-adenin; 3-valin;",
          "B) 1-nukleoprotein; 2-glitsin; 3-triptofan;",
          "C) 1-radopsin; 2-timin; 3-eritroza;",
          "D) 1-xolesterol; 2-guanin; 3-gistidin;",
        ],
        correctAnswer: "C",
      },
      {
        id: 9,
        number: 9,
        question:
          "Quyda shajarasi berilgan probandning shajarasida qaysi kaslikning irsilanishi berilgan?",
        options: [
          "A) Autosomadagi dominant tipidaga kaslik",
          "B) Autosomadagi retsessiv tipidagi kaslik",
          "C) X – xromosomaga birikkan dominant tipidagi kaslik",
          "D) X – xromosomaga birikkan retsessiv tipidagi kaslik",
        ],
        correctAnswer: "C",
      },
      {
        id: 10,
        number: 10,
        question:
          "Porfira hujayrasidagi bir membranali (a), ikki membranali (b), membranasiz (c) tuzilmalarni aniqlang. 1) ribosoma; 2) hujayra markazi; 3) lizosoma; 4) vakuol; 5) silliq endoplazmatik to‘r; 6) mitoxondriya; 7) golji majmuasi; 8) donador endoplazmatik to‘r; 9) xloroplast;",
        options: [
          "A) a – 8, 5; b - 6; с – 1, 2;",
          "B) a - 3, 5; b - 9, 6; с - 1;",
          "C) a – 7, 3; b - 6, 9; с -1;",
          "D) a - 4, 8; b - 6; с - 1;",
        ],
        correctAnswer: "C",
      },
      {
        id: 11,
        number: 11,
        question:
          "Kuyakapalagi qurtining spermatozoid hujayrasida kariotipi n = 28 bo‘lsa, urg‘ochi kapalakning epidermis hujayrasidagi xromosoma holatini aniqlang.",
        options: [
          "A) 54 ta autosoma va jinsiy XY xromosoma",
          "B) 56 ta autosoma va bitta jinsiy X xromosoma",
          "C) 56 ta autosoma va jinsiy XX xromosoma",
          "D) 54 ta autosoma va bitta jinsiy X xromosoma",
        ],
        correctAnswer: "D",
      },
      {
        id: 12,
        number: 12,
        question:
          "Noto‘g‘ri fikrlar berilgan javobni aniqlang. 1) bakteriya hujayrasining bakteriofaglar tomonidan nobud qilinishi transformatsiya deyiladi; 2) quyon zigotasiga o‘sish gormoni geni kiritilib, transgen quyon olingan; 3) transpo-zaza - zaharli toksin parchalovchi ferment sintezlovchi genetik tuzilma; 4) ligaza, restriktaza, transpozaza oqsil tabiatiga ega fermentlardir.",
        options: ["A) 2, 4", "B) 1, 3", "C) 3, 4", "D) 1, 2"],
        correctAnswer: "D",
      },
      {
        id: 13,
        number: 13,
        question:
          "Quyidagi a,b,c,d larga mos tushunchalar to‘g‘ri berilgan javobni aniqlang. a) b) c) d)",
        options: [
          "A) a-X–trisomiyasi sindromi; b- Shereshevskiy-Terner sindromi",
          "B) c- Klaynfelter sindromi; d- Daun",
          "C) b- Shereshevskiy-Terner sindromi; c- Klaynfelter sindromi;",
          "D) c- Shereshevskiy-Terner sindromi; d-Embrional rivojlanishning 2-3 oyida tabiiy abort ro‘y beradi",
        ],
        correctAnswer: "B",
      },
      {
        id: 14,
        number: 14,
        question:
          "Fenotipik o‘zgaruvchanlikni aks ettiruvchi misollarni aniqlang. 1) ultrabinafsha nurlar ta‘sirida odam terisida melanin- ning ko‘payishi; 2) nilufar gulida suv usti barglarining voronkasimon, suv osti barglarining ingichka lanset- simon bolishi; 3) xromosoma o‘rta qismining yo‘qolishi; 4) odamlarda barmoqlarning kalta bolishi.",
        options: ["A) 1 ,3", "B) 1 ,2", "C) 3 ,4", "D) 2, 4"],
        correctAnswer: "C",
      },
      {
        id: 15,
        number: 15,
        question:
          "Quyidagi jadvalda ayrim organizmlarning energiya va uglevod manbalari berilgan Bunga ko‘ra qaysi javobda I turga kiravchi organizm berilmagan?",
        options: ["A) anturium", "B) rafleziya", "C) sigillariyalar", "D) lepidodendron"],
        correctAnswer: "C",
      },
      {
        id: 16,
        number: 16,
        question:
          "Magnoliyatoifaga mansub ko‘p yillik, bitta yo‘g‘on yog‘ochlashgan tanaga ega (a), bir nechta yog‘ochlashgan poyatanaga ega (b) o‘simliklarni aniqlang. 1) baobab; 2) kedr; 3) itsigak; 4) sharq sauri; 5) gledi- chiya; 6) tuxumak; 7) uchqat; 8) xarduma; 9) zirk;",
        options: [
          "A) a - 2, 5; b - 7, 9;",
          "B) a - 1, 2; b - 7, 9;",
          "C) a - 1, 6; b - 7, 3;",
          "D) a - 1, 6; b - 7, 9;",
        ],
        correctAnswer: "B",
      },
      {
        id: 17,
        number: 17,
        question: "Abiotik omil ta‘sirini aniqlang.",
        options: [
          "A) chug‗urchuqni dalalardagi hasharotlarni terib yeyishi",
          "B) yangi olma navini yaratish",
          "C) suvning harorati oshganida planariyaning mayda bo‗laklarga bo‗linishi",
          "D) ko‗l baqasini qo‗ng‗iz, pashsha kabi mayda umurtqasiz hayvonlar bilan oziqlanishi",
        ],
        correctAnswer: "B",
      },
      {
        id: 18,
        number: 18,
        question:
          "Gomoyoterm (a) va poykiloterm(b) organizmlar to‘g‘ri berilmagan javobni aniqlang.",
        options: [
          "A) a-chumolixo‗r; b-xameleon;",
          "B) a-jayra; b-olaqo‗zan;",
          "C) a-termit; b-tapir;",
          "D) a-tyin; b-xongul;",
        ],
        correctAnswer: "A",
      },
      {
        id: 19,
        number: 19,
        question:
          "Litosferaning umurtqali (a) va umurtqasiz (b) zoobio- massasi tarkibini aniqlang. 1) yomglr chuvalchangi; 2) nereida; 3) ko‗rsichqon; 4) belu-ga; 5) yumronqoziq; 6) kasatka; 7) zaxkash; 8) aureliya.",
        options: [
          "A) a - 3, 5; b - 1, 7",
          "B) a - 5, 6; b - 2, 7",
          "C) a - 3, 4; b - 1, 2",
          "D) a - 4, 6; b - 2, 8",
        ],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "Odamda ayirish sistemasi organlari ishini boshqaruvchi tizimlar to‗g‗ri ko‗rsatilgan javobni aniqlang. a) antidiuretik gormon; b) tiroksin; c) simpatik nerv sistemasi; d) parasimpatik nerv sistemasi; 1) siydik qopi muskullarini bo‗shashtiradi; 2) siydik qopi muskullarini qisqartiradi; 3) siydik yig‗ilishiga sharoit yaratadi; 4) kalavasimon kanalchalarga ta‘sir ko‗rsatadi;5) reabsorbsiyani susaytiradi; 6) reabsorbsiyani kuchayti-radi; 7) siydik ajralishni ko‗paytiradi; 8) siydik ajralishni kamaytiradi.",
        options: [
          "A) a-6; b-5; с-1, 8; d-2, 7",
          "B) a-6; b-5; с-2, 7; d-1, 8",
          "C) a-3, 5; b-6; с-1, 8; d-2, 7",
          "D) a-5; b-3, 6; с-4, 8; d-2, 7",
        ],
        correctAnswer: "C",
      },
      {
        id: 21,
        number: 21,
        question:
          "Umurtqali(a), umurtqasiz(b) hayvonlar qonida trans- port funksiyasini qaysi oqsillar bajaradi?",
        options: [
          "A) b-gemoglobin; a-gemosianin;",
          "B) b-gemosianin; a-gemoglobin;",
          "C) b-albumin; a-gemosianin;",
          "D) A,C",
        ],
        correctAnswer: "B",
      },
      {
        id: 22,
        number: 22,
        question:
          "Markaziy nerv sistemasining quyidagi qismlarida qanday nerv markazlari joylashgan?",
        options: [
          "A) 6 - nafas olish nerv markazi; 1 - gipofizni boshqaruvchi nerv markazi; 2 - ko‗z soqqasini harakatlantiruvchi nerv; 7 - po‗stloq osti ko‗rish markazi",
          "B) 6-gipofizni boshqaruvchi nervmarkazi; 1- po‗stloq osti ko‗rish markazi; 2-nafas olish nerv markazi; 7 - po‗stloq osti eshitish markazi",
          "C) 6 - nafas olish nerv markazi; 1 - po‗stloq osti ko‗rish markazi; 2 –chanqash va to‘yish markazi; 7 - ko‗z soqqasini harakatlantiruvchi nerv",
          "D) 6 - gipofizni boshqaruvchi nerv markazi; 1 - ovqat hazm qilish nerv markazi; 2- po‗stloq osti eshitish markazi; 7 - ko‗z soqqasini harakatlantiruvchi nerv",
        ],
        correctAnswer: "D",
      },
      {
        id: 23,
        number: 23,
        question:
          "Autosomada dominant tipda irsiylanadigan kasalik- larning belgilang? 1) sochning jingalakligi; 2) ko‗k ko‗z; 3) fenilketonuriya; 4) rezus manfiy (Rh-); 5) o‘nnaqaylik; 6) rezus + 0 musbat(Rh ) qon guruhlari; 7) Albinizm; 8) I qon guruhi; 9) silliq soch 10) miopiya; 11) braxidaktiliya; 12) polidaktiliya; 13) ko‗z qoraligi;",
        options: ["A) 9, 8, 4, 2;", "B) 1, 6, 1, 12;", "C) 7, 3;", "D) 11, 10, 12;"],
        correctAnswer: "C",
      },
      {
        id: 24,
        number: 24,
        question:
          "Braxidaktiliya kasalligining barmoqlar kamroq qisqarishidan tortib ko'proq qisqarishigacha bo'lgan shakllari bor. Barmoqlari qisqa odamlar geterozigota genotipga ega. Ushbu mutatsiyaga uchragan odamlar shajarasini o'rganish tufayli bu belgi fenotipda asosiy va modifikator genlar ish-tirokida namoyon bo'lishi aniqlandi. Modifikator retsessiv genlar-(n) gomozigota holatda bo'lsa, barmoqlarning kes-kin qisqarishiga olib keladi. Modifikator genlarning domi-nant alleli (N) gomozigota holatda barmoqlarning kamroq qisqarishiga olib keladi, geterozigota holatda esa o‘rtacha qisqarishiga sababchi bo‘ladi. Shunga ko'ra barmoqlari keskin qisqargan braxidaktiliyaga uchragan ayol (bir belgisi bilan geterozigota) va retsessiv digomozigotali erkak nikohidan braxidaktiliya bilan kasallangan farzandlarning tug‘ilish ehtimolini (%) aniqlang.",
        options: ["A) 50", "B) 100", "C) 25", "D) 12,5"],
        correctAnswer: "C",
      },
      {
        id: 25,
        number: 25,
        question:
          "Quyidagilardan meyozning bosqichlariga mos keladi- gan xromosomalar to‗plami to‗g‗ri ko‗rsatilgan javobni belgilang. a) bir DNKli xromosomalarning diploid to‗plami; b) bir DNKli xromosomalarning gaploid to‗plami; c) ikki DNKli xromosomalaming diploid to‗plami; d) bir DNKli xromosomalarning tetraploid to‗plami; e) ikki DNKli xromosomalarning gaploid to‗plami.",
        options: [
          "A) b - interfaza S davri; с - metafaza I; d - anafaza I; e - telofaza I",
          "B) a - interfaza presintetik davri; с - metafaza II; с - anafaza I; e - telofaza II",
          "C) с - interfaza postsintetik davri; с - metafaza I; с - anafaza I; b - telofaza II",
          "D) с - interfaza presintetik davri; с - metafaza I; с - anafaza II; e - telofaza I",
        ],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 26,
        question:
          "Mitoz bo‗linish natijasida hosil bo‗ladigan hujayra- larni aniqlang. 1) akatsiyanig vegetativ hujayrasi; 2) ―Fin dorset‖ning tuxum hujayrasi; 3) protenorni tuxum hujayrasi; 4) xitoy primulasining tuxum hujayrasi; 5) Zea maysning tuxum hujayrasi; 6) Raphanus sativusning mikrosporasi; 7) ―Viandot‖ning spermatozoidi.",
        options: ["A) 2, 3, 6", "B) 1, 4 , 5", "C) 2, 5, 7", "D) 1, 4, 6"],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 27,
        question:
          "Sholi o‗simligining changdonida 90 ta diploid to‗plamli hujayra gametalar hosil qilishda ishtirok etdi. Agar o‗simlikda 216 ta urug‗ hosil bo‗lgan bo‗lsa, hosil bo‗lgan spermiylarning necha foizi markaziy hujayraning urug‗lanishida qatnashgan?",
        options: ["A) 35", "B) 30", "C) 25", "D) 60"],
        correctAnswer: "A",
      },
      {
        id: 28,
        number: 28,
        question:
          "To‘liq o‘zgarish bilan rivojlanuvchi hasharotlar haqidagi ma‘lumotlar keltirilgan javoblarni aniqlang. 1) hasva qandalasining qanotlari oldingi qismi qattiq keyingi qismi yupqa va shaffof; 2) kulrang satirning og‘iz apparati so‘ruvchi spiralsimon xartumchaga ega 3) Tropik o‗lkalarda termitlar yer yuzasidan 15 m gachabalandlikda in quradi; 4) gabrabrakon yaydoqchisi- dan biologik kurashda zararkurandalarga qarshi foydalaniladi 5) chirildoqlar maxsus ko‘zachaga tuxum qo‘yadi 6) Yashil bronza qo‘ng‘izining moylovlari yelpig‗ichga o‗xshash, bir juft",
        options: ["A) 1,2,3", "B) 2,4,6", "C) 2,3,6", "D) 1,3,5"],
        correctAnswer: "A",
      },
      {
        id: 29,
        number: 29,
        question:
          "Qand lavlagi ildizmeasida qandning miqdori 3 juft kumulyativ polimer genlar faoliyatiga bog‘liq A A A A A A genotiplilarda qandning miqdori 22,5%, 1 1 2 2 3 3 a a a a a a geno-tiplilarda qandning miqdori 13,5% 1 1 2 2 3 3 bo‘lgan organizmlar o‘zaro chatishtirildi. F2 da olingan 6400 ta lavlagi ichidan qandning miqdori 16,5% va 19,5% bo‘lgan lavlagilar soni, qandning miqdori 18% bo‘lgan lavlagilardan nechtaga ko‘pligini aniqlang.",
        options: ["A) 800", "B) 500", "C) 1000", "D) 1200"],
        correctAnswer: "A",
      },
      {
        id: 30,
        number: 30,
        question: "Quyidagi jadvalga mos keluvchi javobni aniqlang.",
        options: [
          "A) a-nastarin; b-nok; c-ituzum;",
          "B) b-targ‘il; a-targ‘il; c-nimrang;",
          "C) c-obidov; b-qirmizi; a-gultish;s",
          "D) a-daroyi; c-samarqand; b-qozi dastor;",
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 27,
    title: "Variant 27",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question: "Quyidagi jadvalga mos keluvchi javobni aniqlang.",
        options: [
          "A) a-bangidevona; b-yovvoyi uzum; c-baobab;",
          "B) b-qirmizi; a-―Samarqand‖; c-―Sulton‖;",
          "C) c-―Obidov‖; a-―Gultish‖; b-―Porloq-1‖;",
          "D) b-―Sohibi‖; c-―Yulduz‖; a-―Umid‖;",
        ],
        correctAnswer: "C",
      },
      {
        id: 2,
        number: 2,
        question:
          "Quyidagi olimlarning biologiya fani rivojiga qo‗shgan hissalari va aniqlagan kashfiyotlari to‗g‗ri ko‗rsatilmagan javobni aniqlang. a) V.V. Dokuchayev — hujayrasiz hayot yo‗qligini aniqlagan; b) V.I. Vernadskiy biosfera haqidagi ta‘limotni aniqlagan; c) G. F. Gauze — Tur ichida raqobatni o‘rgangan; d) Ch. Elton—ekologik piramida qoidasi; e) R. Lindeman—«1% qoidasi»; f) Eduard Lerua—noosfera atamasini fanga olib kirgan;",
        options: [
          "A) a, c, e; С) b, d, f;",
          "B) b, e, d; D) a, b, f;",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "D",
      },
      {
        id: 3,
        number: 3,
        question:
          "Almashinmaydigan asiklik(a) va siklik(b) amino- kislotalar berilgan javobni aniqlang.",
        options: [
          "A) a-arginin; b-prolin;",
          "B) a-lizin; b-fenilalanin;",
          "C) a-sistein; b-treonin;",
          "D) a-gistidin; b-triptofan;",
        ],
        correctAnswer: "C",
      },
      {
        id: 4,
        number: 4,
        question:
          "Geterotrof oziqlanadigan sellyuloza(a), murein(b) po‘stli organizmlar berilgan to‘g‘ri javobni aniqlang.",
        options: [
          "A) a-xrokokk; b-qoqshol;",
          "B) a-qo‘ypechak; b-o‘lat;",
          "C) a-xara; b-bo‘g‘ma;",
          "D) a-zarpechak; b-kuydirgi;",
        ],
        correctAnswer: "A",
      },
      {
        id: 5,
        number: 5,
        question:
          "Jigar qurtining quyida berilgan xususiyatlari turning qaysi mezonini ifoda etadi? а) ekologik; b) morfologik. 1) lichinkasining tanasi kiprikchalar bilan qoplangan; 2) tanasi yassi; 3) voyaga yetganda parazit hayot kechiradi; 4) ikkita so`rg`ichga ega; 5) lichinkasi mollyuska tanasida parazitlik qiladi.",
        options: [
          "A) а – 3,5; b – 1,4;",
          "B) а – 2,3; b – 1, 5;",
          "C) а – 1,4; b – 2, 3;",
          "D) а – 1,5; b – 2, 4.",
        ],
        correctAnswer: "D",
      },
      {
        id: 6,
        number: 6,
        question:
          "Quyida berilgan o`simliklarning ko`payishi bilan bog`liq xususiyatlarni aniqlang. а) funariya; b) zuhrasoch. 1) hayot siklida sporofit ustunlik qiladi; 2) hayot siklida gametofit ustunlik qiladi; 3) sporalari ko`sakchada yetiladi; 4) sporofiti sporangiyband va sporangiydan iborat; 5) gametofiti yashil o`simta shaklida; 6) gametofiti poya-bargli o`simlik.",
        options: [
          "A) а – 2,4,6; b – 1, 5;",
          "B) а – 2,4; b – 1, 6;",
          "C) а – 1,3,4; b – 2,5;",
          "D) а – 2, 3; b – 1, 6.",
        ],
        correctAnswer: "A",
      },
      {
        id: 7,
        number: 7,
        question:
          "Bir kunlik iste‘mol qilingan ozuqaning organizmda ishlatilishi quyidagicha: Ozuqa katabolizm Anabolizm Oqsil(125g) Yog‘(125g) Uglevod(125g) Bunda oqsil va uglevoddan hosil bo‘lgan energiya jami dissimilatsiyadan hosil bo‘lgan energiyaning necha % ni tashkil etadi?",
        options: ["A) 35,8;", "B) 50;", "C) 33,33;", "D) 30,6;"],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Siydik ayirish organlarida kechadigan jarayonlar va ularning sodir bo`lish mexanizmlari o`rtasidagi muvofiqlikni aniqlang. 1) birlamchi siydikning hosil bo`lishi; 2) ikkilamchi siydikning hosil bo`lishi; 3) siydikning kanali orqali siydik qopiga tushishi; а) shartsiz refleks; b) reabsorbsiya; с) filtratsiya; d) shartli refleks.",
        options: [
          "A) 1 – b, 2 – с, 3 – а;",
          "B) 1 – с, 2 – b, 3 – d;",
          "C) 1 – b, 2 – с, 3 – d;",
          "D) 1 – с, 2 – b, 3 – а.",
        ],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 9,
        question:
          "Quyidagi muskullardan alohida boylamga ega bo‘lganla-rin ko‘rsating. 1) mimika; 2) teriosti; 3) qon tomirlar devoir muskullari; 4) yelkaning to‘rt boshli muskul; 5) qovuq devoir muskullari; 6) sonning orqa tomonidagi uch boshli muskul; 7) so‘rg‘ichsimon; 8) gavdani rostlaydigan muskulda; 9) narvonsimon; 10) ichak devoir muskullari;",
        options: ["A) 3,5,10", "B) 4,7,9", "C) 7,1,6", "D) 8,2,9"],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question:
          "OITSdan oldingi davrga mantiqiy bog‘liq bo‘lgan tushinchalar va malumotlarni aniqlang. 1) til leykoplakiyasi; 2) limfa bezlarning og‘riqsiz yiriklashuvi; 3) 5-10 yil davom etadi; 4) stomatit; 5) kandidoz; 6) limfoma; 7) faringit; 8)toksiplazmoz; 9) eshakyemi toshishi; 10) 1-2 yil davom etadi;",
        options: ["A) 1,4,10;", "B) 2,3;", "C) 1,8,9;", "D) 4,5,7;"],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 11,
        question:
          "Quyidagi jadvalda organizmlarning ontogenezi haqidagi qisqacha ma‘lumot berilgan. Shu jadvalga asoslangan holda va organizmlarni aniqlang",
        options: [
          "A) K-o‘rdakburun; M-salamandra; L-kapachi;",
          "B) K-kvaksha; L-salamandra; M-agama;",
          "C) L-xameleon; K-sterlyad; M-korall aspidi;",
          "D) K-agama; L-kvaksha; M-salamandra;",
        ],
        correctAnswer: "D",
      },
      {
        id: 12,
        number: 12,
        question:
          "Sayyoramizda hayotning paydo bo‘lishi bilan birga ekologik o‘zgarishini, biosfera evolutsiyasiga insonni ta‘sirini o‘rganadigan ekologiya bo‘limini aniqlang.",
        options: [
          "A) Sinekologiya",
          "B) Tarixiy ekologiya",
          "C) Demekologiya",
          "D) Evolutsion ekologiya",
        ],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question:
          "Sxemada kostroma zoti qon aylanishi sistemasinig katta va kichik qon aylanish doiralari aks ettirilgan. Sxemadagi qaysi raqamlar bilan belgilangan qismlarda arterial qon harakatlanmaydi?",
        options: ["A) 2, 3, 4, 7;", "B) 1, 2, 5, 6;", "C) 3, 4, 7, 8;", "D) 2, 4, 7, 8;"],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 14,
        question: "II qon guruh qaysi qon guruh uchun donor sanaladi? 1) II; 2) I; 3) IV; 4) III;",
        options: ["A) 2,4;", "B) 1,3;", "C) 3,4;", "D) 1,2"],
        correctAnswer: "B",
      },
      {
        id: 15,
        number: 15,
        question:
          "Nuqtalar o‗rniga mos javobni tanlang. Qayin odimchisi kapalagi .... 1) o‗pka xaltasi va traxeyalari orqali nafas oladi; 2) sanoatlashgan markazlarda mutatsiyaga uchragan organizmlar tanasi oq rangda; 3) zaharli gelikonius bilan bir turkumga mansub; 4) chala o‗zgarish bilan rivojlanadi; 5) sanoatlashgan markazlarda tana rangining o‗zgarishi gen mutatsiyasi hisoblanadi; 6) qishloq joylarida oq rangli formalar son jihatdan ko‗proq uchraydi.",
        options: ["A) 1, 2, 3", "B) 3, 5, 6", "C) 2, 4, 6", "D) 1, 3, 4"],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 16,
        question:
          "Evolutsiya sintetik nazariyasining asosiy qoidalarini tanlang. 1) evolutsiya birligi – populyatsiya; 2) evolutsiyaning yo'naltiruvchi omili – mutatsion o'zgaruvchanlik asosida paydo bo'ladi; 3) Evolutsiyaning harakatlantiruvchi omillari: populatsiya to‗lqini, genlar dreyfi,migratsiya, alohidalanish, yashash uchun kurash 4) evolutsiya omillari – irsiyat, o'zgaruvchanlik, yashash uchun kurash 5) tabiiy tanlanish turlari – harakatlantiruvchi va dizruptiv emas; 6) evolutsiya divergent xarakterga ega.",
        options: ["A) 1, 3, 6", "B) 2, 4, 6", "C) 1, 4, 5", "D) 2, 3, 6"],
        correctAnswer: "D",
      },
      {
        id: 17,
        number: 17,
        question: "Bug‘doy avlodida 42 xromosomali turning paydo bo‘lishiga xos javobni aniqlang.",
        options: [
          "A) genotipik → mutatsion → xromosoma mutatsiya",
          "B) fenotipik → mutatsion → nuqtali mutatsiya",
          "C) genotipik → mutatsion → genom mutatsiya",
          "D) genotipik → kombinativ → gen mutatsiya",
        ],
        correctAnswer: "D",
      },
      {
        id: 18,
        number: 18,
        question:
          "A va B genlari o'rtasida krossingover foizi 7%, B va C genlari o'rtasida – 10%. A va C genlar orasida esa 17% ni tashkil qilsa, ushbu genlar xromosomada joylashish ketma-ketligi to'g'ri berilgan javobni aniqlang.",
        options: ["A) A –", "B) C B) A –", "C) B C) B – C – A", "D) C – A – B"],
        correctAnswer: "B",
      },
      {
        id: 19,
        number: 19,
        question:
          "Organizmlarning embrional rivojlanishi uchun mos keladigan toshunchalarni to'g'ri ketma-ketlikda joylashtiring. 1) blastula; 2) ichak naychasi; 3) endoderma; 4) zigota; 5) tuxum hujayra; 6) blastomer; 7) o‗pka; 8) gastrula.",
        options: [
          "A) 4, 6, 1, 8, 3, 2, 7",
          "B) 5, 4, 6, 1, 3, 2, 7",
          "C) 4, 1, 6, 2, 8, 7",
          "D) 4, 6, 8, 1, 3, 2, 7",
        ],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "DNK ning 1-zanjiridagi nukleotidlar A , T , G , C 1 1 1 ko‘rinishida, 2-zanjirdagi nukleotidlar esa A , T , G , C 2 2 ko‘rinishida ifodalanadi. T + T = 20% ekanligi ma‘lum 1 2 bo‘lsa, C + C ning qiymatini (%) aniqlang. 1 2",
        options: ["A) 10%", "B) 15%", "C) 20%", "D) 30%"],
        correctAnswer: "C",
      },
      {
        id: 21,
        number: 21,
        question: "Jinsni aniqlashning progam tipi uchun xos bo'lgan to'g'ri javobni belgilang.",
        options: [
          "A) jins tashqi muhitga bog'liq bo'ladi; halqali chuvalchanglarning urug'langan tuxum hujayra parazitlik qilib hayot kechirsa erkak organizm rivojlanadi",
          "B) jins urug'lanish vaqtida ma'lum bo'ladi; kolovratkalarda sitoplazmaga boy tuxum hujayradan urg'ochi organizm rivojlanadi",
          "C) jins urug'languncha ma'lum bo'ladi; kolovratkalarda sitoplazmasi kam tuxum hujayradan erkak organizm rivojlanadi",
          "D) jins tashqi muhitga bog'liq bo'ladi; halqali chuvalchanglarning urug'langan tuxum hujayrasi mustaqil hayot kechirsa urgóchi organizm rivojlanadi",
        ],
        correctAnswer: "D",
      },
      {
        id: 22,
        number: 22,
        question:
          "Xlamidomonada, ulotriks, zuhrasoch uchun xos bo‗lgan jinsiy ko‘payish shakllari to‗g‗ri ketma-ketlikda berilgan javobni aniqlang.",
        options: [
          "A) izogamiya, geterogamiya, oogamiya",
          "B) geterogamiya, izogamiya, oogamiya",
          "C) oogamiya, izogamiya, geterogamiya",
          "D) geterogamiya, oogamiya, izogamiya",
        ],
        correctAnswer: "B",
      },
      {
        id: 23,
        number: 23,
        question:
          "Quyida berilgan baliqlarning sistematik guruhlari uchun xos bo'lgan javoblarni aniqlang. a) suyakli baliqlar sinfi; b) tog'ayli baliqlar;",
        options: [
          "A) a – tangachalari dentindan iborat, usti emal bilan qoplangan; b – tikanga o'xshash shaklga ega",
          "B) a – tangachalari yumaloq shakladagi tog'ay; b – shilliq qavati plakoid tangachalardan iborat",
          "C) a – teri bezlari bir hujayrali; b – og'iz bo'shlig'idagi tangachalar oziq tutish vazifasini bajaradi",
          "D) a – tangachalar mezodermadan rivojlanadi; b- tangacha-lar usti yupqa epidermis bilan qoplangan plastinkalardan iborat",
        ],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question: "Davrlarda yuz bergan aromorfozlar to‗g‗ri berilgan javobni aniqlang.",
        options: [
          "A) silur davrda dastlabki quruqlik o'simligi – psilofitlar paydo bo'lgan.",
          "B) devon davrda ochiq urug'li o'simliklar paydo bo'lgan.",
          "C) toshko'mir davrda dastlabki yopiq urug'li o'simliklar paydo bo'lgan.",
          "D) proterozoy erasida bir hujayrali suvo'tlardan ko'p hujayrali suvo'tlari paydo bo'lgan.",
        ],
        correctAnswer: "B",
      },
      {
        id: 25,
        number: 25,
        question:
          "Daraxtlarning barglari bilan oziqlanadigan hashoratlar (a) qushlar (b) po'stloqxo'r va mo'ylovdor qo'ng'izlar (c) kanalar (d), ko'poyoqlar va mayda hayvonlar (e) qaysi yaruslikda tarqalgan.",
        options: [
          "A) a – 1-yarusda; d,e – 2-yarusda; b,c – 3-yarusda 1",
          "B) d,e – 1-yarusda; b,c – 2-yarusda; a – 3-yarusda 2 2",
          "C) a,b – 1-yarusda; c – 2-yarusda; d,e – 5-yarusda",
          "D) a – 1-yarusda; b,c – 2-yarusda; d,e –5-yarusda",
        ],
        correctAnswer: "A",
      },
      {
        id: 26,
        number: 26,
        question:
          "Qo‗qongul (a), jumagul (b), yerbag‗ir tugmachagul (c) qaysi oila vakillari hisoblanadi?",
        options: [
          "A) a - qoqio‗tdosh; b - ra‘nodosh; с - burchoqdosh",
          "B) a - qoqio‗tdosh; b - gulxayridosh; с - burchoqdosh",
          "C) a - qoqio‗tdosh; b - loladosh; с - gulxayridosh",
          "D) a - qoqio‗tdosh; b - burchoqdosh; с - ra‘nodosh",
        ],
        correctAnswer: "B",
      },
      {
        id: 27,
        number: 27,
        question:
          "Oddiy amyobaning ichburug‘ amyobasidan farq qiluvchi belgilarini aniqlang. 1) erkin yashaydi; 2) parazit yashaydi; 3) qisqaruvchi vakuolaga ega; 4) yashash muhiti; 5) geterotrof.",
        options: ["A) 1, 3", "B) 4, 5", "C) 2, 3", "D) 2, 5"],
        correctAnswer: "C",
      },
      {
        id: 28,
        number: 28,
        question:
          "Kaltakesakda tangachalarning tekis taqsimlanishi va tanasining kulrang bo‘lishi tangachalarning notekis va tanasi yashil bo‘lishiga nisbatan dominantlik qiladi. Bu belgilar faqat jinsiy X xromosomada birikkan holda irsiylanadi. Tangacha-lari tekis taqsimlangan yashil urg‘ochi organizm digeterozi-gotali (dominant belgilardan birini otasidan, ikkinchisini onasidan olgan) erkak kaltakesak bilan chatishtirilsa, nasl-larning necha foizi kulrang, tangachalari tekis taqsimlangan nokrossoverlar bo‘ladi? (Krossingover foizi 8 ga teng.)",
        options: ["A) 27", "B) 23", "C) 69", "D) 4"],
        correctAnswer: "C",
      },
      {
        id: 29,
        number: 29,
        question:
          "DNKning ma‘lum bir qismida 180 ta sitozin bor va u umumiy nukleotidlarning 24% ni tashkil qiladi. Ushbu DNK fragmentining bitta zanjiri tarkibidagi fosfodiefir bog‘lar (a) va DNK asosida sintezlangan oqsil tarkibidagi aminokislotalar sonini (b) toping.",
        options: ["A) a-374 b-124", "B) a-748 b-124", "C) a-750 b-125", "D) a-374 b-125"],
        correctAnswer: "D",
      },
      {
        id: 30,
        number: 30,
        question:
          "Oxunjon bir kecha-kunduzgi ovqati tarkibida 500 g uglevod, 150 g oqsil, 110 g yog' va 5 - 6 g tuz iste'mol qilishi kerak. Agar u rejim qoidasining yuqori foiziga amal qilib iste‘mol qilgan bo'lsa, qo'shimcha ovqat- lanishdan ajralgan energiya miqdorini (kJ) hisoblang.",
        options: ["A) 553,2", "B) 737,6", "C) 847,5", "D) 2323"],
        correctAnswer: "C",
      },
    ],
  },
  {
    id: 28,
    title: "Variant 28",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Pomidor o‘simligida qizil meva (A), sariq meva (a) dan ustunlik qiladi. Tuksizlik geni (T) tuklilik (t) ustidan ♀/♂ AT At aT at AT I At II aT III at Bunga ko‘ra Pennet katakchasida ko‘rsatilgan I,II,III,IV,V organizmlar fenotipi to‘g‘ri ko‘rsatilmagan javobni aniqlang.",
        options: [
          "A) I – qizil, tuksiz",
          "B) II – qizil, tuksiz",
          "C) III – sariq, tukli",
          "D) IV – sariq, tuksiz; V – sariq, tukli",
        ],
        correctAnswer: "A",
      },
      {
        id: 2,
        number: 2,
        question: "Qon aylanish sistemasi quyidagicha bo‘lgan hayvonlarni aniqlang.",
        options: [
          "A) krevetka, dafniya, siklop",
          "B) nereida, qizil chuvalchang, yomg‘ir chuvalchangi",
          "C) beda poya shillig‘i, tok shillig‘i, chuchuk suv shillig‘i",
          "D) ustritsa, taroqcha, midiyalar",
        ],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 3,
        question:
          "Meyoz bo‘linishning Profaza I bosqichida 24 juft xromatidlar tetradasi bo‘lgan hayvonning bitta somatik hujayrasida mitozning postsintetik davrida jinsga bog‘liq bo‘lmagan nechta xromatid bo‘ladi?",
        options: ["A) 44", "B) 92", "C) 188", "D) 46"],
        correctAnswer: "D",
      },
      {
        id: 4,
        number: 4,
        question:
          "Noma‘lum genotipli organizmlar o‘zaro chatishtrilishi na-tijasida birinchi avlodda 729 xil genotipi sinf hosil bo‘lgan, fenotipik k sinflar sonini aniqlang.",
        options: ["A) 32", "B) 16", "C) 64", "D) 128"],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Quyidagi kasalliklar nomlarini ularga mos ta‘riflarga ko‘ra joylashtiring. a-nefrit; b-nevralgiya; c-radikulit. 1) harakatlantiruvchi nervning yallig‘lanishi; 2) sezuvchi nervning yallig‘lanishi; 3) bel va dumg‘aza soxasidan chiquvchi nervlar siqilib qolishi; 4) harakatlantiruvchi neyronlarning yallig‘lanishi; 5) buyrak nefronlarining yallig‘lanishi",
        options: ["A) a–1; b–2; c–3", "B) a–5; b–3; c–2", "C) a–4; b–2; c–3", "D) a–5; b–2; c–3"],
        correctAnswer: "A",
      },
      {
        id: 6,
        number: 6,
        question:
          "Rezus mafiy II-qon guruh eritrotsitlarida uchraydigan oqsil? 1) geparin; 2) tromboplastin; 3) fibrin; 4) girudin; 5) fibri-nogen; 6) trombin; 7) protrombin; 8) antitelo 9) antigen; 10) antitoksin; 11) agglutinogen A; 12) agglutinogen B; 13) agglutinogen α; 14) agglutinogen β; 15) agglutinin α; 16) agglutinin β; 17) yog‘; 18) karbonsuv; 19) tuzlar; 20) natri xlor; 21) glukoza; 22) gemoglobin;",
        options: ["A) 22, 12;", "B) 11, 16;", "C) 22, 11;", "D) 9, 14;"],
        correctAnswer: "C",
      },
      {
        id: 7,
        number: 7,
        question:
          "Qaysi javobda keltirilgan o‘simliklarning gulkosachabarg-lari va gultojibarglari qo‘shilgan bo‘ladi?",
        options: [
          "A) pomidor, tarvuz, baqlajon, qozonyuvg‘ich, kartoshka, itqovun",
          "B) soya, rediska, shirinmiya, karam, sholg‘om, yasmiq IV",
          "C) rediska, kartoshka, bo‘ritaroq, baqlajon, turp, ituzum V",
          "D) karrak, bodring, qovoq, bo‘znoch, gledichiya, tarvuz",
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Quyida tasvirlangan guldagi qaysi ifodalar (a,b,c,d,e,f) gulning organlari nomiga mos kelmaydi?",
        options: [
          "A) e – gulkosacha, g – tuguncha",
          "B) b – changdon, c – changchi ip",
          "C) a – ustuncha, d – gulkosacha",
          "D) g – tumchuqcha, b - changdon",
        ],
        correctAnswer: "D",
      },
      {
        id: 9,
        number: 9,
        question: "Tronbotsitlar haqidagi to‘g‘ri malumotni aniqlang.",
        options: [
          "A) qonda 3-4 kun vazifa bajaradi",
          "B) 1 sm3 qonda 300-400 ming ta bo‘ladi",
          "C) taloqdan hosil bo‘ladi",
          "D) protrombin oqsiliga ega",
        ],
        correctAnswer: "A",
      },
      {
        id: 10,
        number: 10,
        question: "Irsiylanish xususiyatiga ega bo'lgan kasalliklarni aniqlang.",
        options: [
          "A) shizofreniya, albinizm, nevrit",
          "B) yassioyoqlik, kardiomiopatiya, qandli diabet",
          "C) tonzilit, tug'ma karlik, braxidaktiliya",
          "D) gemofiliya, ateroskleroz, daun sindromi",
        ],
        correctAnswer: "B",
      },
      {
        id: 11,
        number: 11,
        question:
          "Quyidagi kasalliklardan qaysi biri bilan kasallangan ota-onadan sog‘lom farzand tug‗ulishi mumkin 1) sil; 2) shizofreniya; 3) braxidaktiliya; 4) tug‗ma karlik; 5) qandli diabet; 6) gemofiliya; 7) albinizm; 8) ko‗z shox pardasining irsiy degeneratsiyasi",
        options: ["A) 2, 3, 5;", "B) 3, 4, 8;", "C) 1, 3, 8;", "D) 5, 6, 7;"],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 12,
        question:
          "Quyidagi rasmda tur paydo bo‘lishining tiplari(I,II) tasvirlangan. Unga asoslanib quyidagilardan to‘g‘ri juftlashtirilgan qatorni aniqlang 1) Populyatsiyalar soni ortadi; 2) populyatsiyalar o‘rtasida-gi genlar almashinuvi to‘xtaydi; 3) tur areali kengayadi; 4) tur areali torayadi; 5) tur areali o‘zgarmaydi; 6) yangi turlar paydo bo‘ladi; 7) Baykal ko‘lida kuzatilgan; 8) Lanao ko‘lida kuzatilgan.",
        options: [
          "A) I-1,4,5; II-2,6,8;",
          "B) I-4,6,7; II-1,5,8;",
          "C) I-1,3,6; II-1,5,6;",
          "D) I-2,4,6; II-3,5,8;",
        ],
        correctAnswer: "B",
      },
      {
        id: 13,
        number: 13,
        question:
          "DNK qo‘sh zanjirida G+S yig‘indisi T sonidan 54 taga ko‘p. A umumiy nukleotidlarning 20 % ini tashkil qiladi. Shu DNK dan sintezlangan oqsildagi aminokislotalar sonini aniqlang.",
        options: ["A) 45", "B) 135", "C) 90", "D) 54"],
        correctAnswer: "B",
      },
      {
        id: 14,
        number: 14,
        question:
          "Odam embrional rivojlanishining maydalanish bosqichi-da bir necha bo‘linishdan so‘ng hosib bo‘lgan blastomerlardagi jami autosomalar 2880 tani, jinsiy xromosomalar esa 128 ni tashkil etsa, homila haqida to‘g‘ri fikr keltirilgan javobni aniqlang.",
        options: [
          "A) Homila Shershevskiy-Terner sindromiga chalingan",
          "B) Homila Klaynfelter sindromiga (jinsiy xromosomalar XXXY holatida) chalingan",
          "C) Homila Daun sindromiga chalingan",
          "D) Homila tabiiy abortga uchraydi",
        ],
        correctAnswer: "C",
      },
      {
        id: 15,
        number: 15,
        question:
          "Molodilo xloroplastida kechayotgan fotosintez jarayoni yorug‘lik bosqichida ajralib chiqqan O va qorong‘ulik 2 bosqichida yutilgan CO ning o‘zaro nisbatini aniqlang. 2 (18 molekula glukoza sintezlangan)",
        options: ["A) 2:1", "B) 1:2", "C) 1:1", "D) 3:1"],
        correctAnswer: "A",
      },
      {
        id: 16,
        number: 16,
        question:
          "Tiroksin gormoni qaysi organlar sistemasiga simpatik(a) va parasimpatik (b) kabi ta‘sir ko‘rsatadi?",
        options: [
          "A) a- qon aylanish sistemasi; b- hazm qilish sistemasi",
          "B) a- ayirish sistemasi; b- hazm qilish sistemasi",
          "C) a- qon aylanish sistemasi; b- ayirish sistemasi",
          "D) a- hazm qilish sistemasi; b- ayirish sistemasi",
        ],
        correctAnswer: "C",
      },
      {
        id: 17,
        number: 17,
        question: "Sariq o‘rmon chumolisi va trixogrammaning umumiy jixatlarini aniqlang.",
        options: [
          "A) zararkunanda hasharotlarga qarshi biologik kurashda qo‘llaniladi",
          "B) bitta sinf va bitta turkum vakillari",
          "C) boshining yirik va jag‘larining kuchli rivojlanganligi",
          "D) postembrional rivojlanish bosqichi metamorfozsiz kechadi",
        ],
        correctAnswer: "D",
      },
      {
        id: 18,
        number: 18,
        question:
          "Quyidagi atamalar qaysi sistematik birlikni ifodalaydi? 1) toshbaqalar; 2) magnoliyasimonlar; 3) qirqbo‘g‘imlar; 4) g‘ozlar; 5) zuluklar; 6) ituzum; 7) suvsarsimonlar; 8) xordalilar a) bo‘lim; b) turkum; c) oila",
        options: [
          "A) a- 3, 8; b- 1, 5; c- 7;",
          "B) a- 3; b- 1, 6; c- 4, 7;",
          "C) a- 2; b- 6, 7; c- 1, 5;",
          "D) a- 3; b- 1, 4; c- 2, 7;",
        ],
        correctAnswer: "C",
      },
      {
        id: 19,
        number: 19,
        question:
          "Qaysi javobda olcha (a) va tog‘olcha (b)ga xos xususiyat-lar to‘g‘ri ko‘rsatilgan? 1) meyoz anafaza II sida axromatin iplari 8 ta; 2) meyoz profaza I ida xromatidalar tetradasi 16 ta; 3) meyoz anafaza I ida bir qutbdagi xromatidalar 16 ta; 4) meyoz anafaza II sida axromatin iplari 32 ta; 5) meyoz profaza I ida xromatidalar tetradasi 32 ta; 6) meyoz profaza I ida xromatidalar tetradasi 8 ta; 7) meyoz anafaza I ida bir qutbdagi xromatidalar 32 ta; 8) meyoz anafaza II sida axromatin iplari 16 ta",
        options: [
          "A) a- 4, 5; b- 1, 6",
          "B) a- 2, 7; b- 3, 8",
          "C) a- 4, 7; b- 1, 8",
          "D) a- 2, 5; b- 3, 6",
        ],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "Changchilari soni kamayib borish tartibida berilgan o‘simliklar qatorini aniqlang.",
        options: [
          "A) gulhayri, o‘sma, liftok, soya",
          "B) lola, lavlagi, kakra, kartoshka",
          "C) kungaboqar, turp, shirinmiya, baobab",
          "D) olcha, gledichiya, olg‘i, andiz",
        ],
        correctAnswer: "A",
      },
      {
        id: 21,
        number: 21,
        question:
          "To‘sh suyagi mavjud, qovurg‘alari yo‘q (a) va qavurg‘alari mavjud, to‘sh suyagi yo‘q (b) organizmlarni aniqlang. 1) salamandra; 2) guattara; 3) sargan; 4) gambuziya; 5) dengiz masxarabozi; 6) nandu; 7) povituxa; 8) triton",
        options: [
          "A) a- 1, 2, 8; b- 4, 5;",
          "B) a- 7, 8; b- 4, 5, 6;",
          "C) a- 3, 5; b- 1, 8;",
          "D) a- 1, 7, 8; b- 3, 4, 5;",
        ],
        correctAnswer: "C",
      },
      {
        id: 22,
        number: 22,
        question:
          "Reaksiya normasi keng bo‘lgan belgilarni ko‘rsating. 1) g‘o‘za tolasining uzunligi; 2) oqquray gul tuzilishi; 3) Kostroma zotida yung uzunligi; 4) primatlarda bosh miya katta-ligi; 5) lekgorn zotida tuxum miqdori",
        options: ["A) 3, 4;", "B) 1, 5;", "C) 2, 5;", "D) 1, 2;"],
        correctAnswer: "C",
      },
      {
        id: 23,
        number: 23,
        question:
          "Gastrulatsiyasi va sinfi har xil (a), gastrulatsiyasi va sinfi bir xil (b), gastrulatsiyasi bir xil, sinfi har xil (c) boʻladigan hayvonlarni juftlang? 1) lansetnik; 2) triton; 3) kapachi; 4) kanna; 5) gidra; 6) salamandra; 7) gambuzya; 8) churrak; 9) korsak; 10) xame-lion; 11) sterlyad; 12) suvkesar;",
        options: [
          "A) a-1, 2, 3; b-7, 11; c-10, 12",
          "B) a-4, 5, 6; b-2, 6; c-3, 8",
          "C) a-1, 8, 10; b-3, 12; c-2, 8",
          "D) a-6, 7, 8; b-4, 9; c-1, 5",
        ],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question:
          "Agar nazariy jixattan olganda hujayrada kodonlar jami 625 xil bo‘lganda u holda …",
        options: [
          "A) nuklein kislotada 5 xil nukleotid bo‘ladi va har bir kod tarkibida 4 tadan nukleotid bo‘ladi",
          "B) nuklein kislotada 4 xil nukleotid bo‘ladi va har bir kod tarkibida 5 tadan nukleotid bo‘ladi",
          "C) nuklein kislotada 5 xil nukleotid bo‘ladi va har bir kod tarkibida 3 tadan nukleotid bo‘ladi",
          "D) nuklein kislotada 3 xil nukleotid bo‘ladi va har bir kod tarkibida 5 tadan nukleotid bo‘ladi",
        ],
        correctAnswer: "D",
      },
      {
        id: 25,
        number: 25,
        question:
          "Bug‘doy donining rangi polimer kumulyativ tipda irsiylanadi. Qizil rangli tetraploid navli bug‘doyning qo‘sh urug‘lanish jarayonida nechta polimer genlar qatnashadi. (o‘rganilyotgan belgi buyicha)",
        options: ["A) 20", "B) 12", "C) 32", "D) 40"],
        correctAnswer: "C",
      },
      {
        id: 26,
        number: 26,
        question: "Olg‘i va jumagul uchun umumiy bo‘lgan xususiyatni toping?",
        options: [
          "A) ko‘sak mevasi yon chokidan ochiladi",
          "B) bargida mexanik kollenxima to‘qimasi yo‘q",
          "C) barg yaprog‘i butun uzun bandli",
          "D) oddiy gulqo‘rg‘oni kosachasimon",
        ],
        correctAnswer: "D",
      },
      {
        id: 27,
        number: 27,
        question:
          "Quyida berilgan ta'rif qaysi tip uchun xos? Ayirish sistemasi tana bo‘ylab joylashgan ikkita uzun naydan iborat bo‘lib, uzun naylar bosh tomonda o‘zaro tutashib «bo‘yin bezlari»ni hosil qiladi.",
        options: [
          "A) odam askaridasi",
          "B) halqali chuvalchanglar",
          "C) to‘garak chuvalchanglar",
          "D) molluskalar",
        ],
        correctAnswer: "C",
      },
      {
        id: 28,
        number: 28,
        question:
          "Amfibiya va sudralib yuruvchilarning qon aylanish sistemasiga xos bo'lgan to'g'ri juftlangan javobni aniqlang. 1) povituxa; 2) alligator; a) uch kamerali yurak; b) to'rt kamerali yurak; c) yurak qorinchasida aralash qon bo'ladi; d) yurak bitta qorinchadan iborat; f) yurakda ikkita qorincha bor; e) yurak qorin-chalari to'siq bilan ajratilgan.",
        options: [
          "A) 1 – c, d; 2 – f, e;",
          "B) 1 – a, f; 2 – b, c;",
          "C) 1 – a, d; 2 – c, e;",
          "D) 1 – b, e; 2 – a, d;",
        ],
        correctAnswer: "A",
      },
      {
        id: 29,
        number: 29,
        question:
          "Quyidagi eralarda yuz bergan aromorfozlar to‗g‗ri berilgan javobni aniqlang. a) Paleozoy; b) Mezozoy; 1) qushlarda to'rt kamerali yurak paydo bo‘lishi; 2) jag‘siz qalqondor baliqlar paydo bo‘lgan; 3) panjaqanotli baliqlar paydo bo‘lgan; 4) stegosefallar paydo bo‘lgan; 5) xaltali va yo‘ldoshli sutemizuvchilar paydo bo‘lgan; 6) dastlabki sudralib yuruvchilar paydo bo‘lgan.",
        options: [
          "A) a – 3, 5; b – 4, 6",
          "B) a – 1, 2; b – 4, 5",
          "C) a – 2, 3; b – 1, 5",
          "D) a – 1, 5; b – 1, 3",
        ],
        correctAnswer: "D",
      },
      {
        id: 30,
        number: 30,
        question:
          "Jadvalning qaysi qatoriarida (№) olimlar, ularning kashfiyotlari va ular qo'llagan usul muvofiq tarzda berilgan?",
        options: ["A) 2, 4, 5;", "B) 1, 3, 6;", "C) 2, 3, 5;", "D) 4, 5, 6;"],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 29,
    title: "Variant 29",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question: "Nuqtalar o‘rniga mos javobni tanlang. Anabioz....",
        options: [
          "A) tashqi muhit ta‘sirlari yoki noqulay sharoit tufayli oqsil-lar tabiiy xususiyatlarining yo‘qolishi",
          "B) noqulay sharoit vujudga kelganda organizmlarda modda-lar almashinuvining sekinlashishi yoki vaqtincha to‘xtashi",
          "C) tashqi muhit omillari o‘zgarishi natijasida organizmda kislorodning yetishmaslik holati",
          "D) organizmlar o‘z tuzilishi va ichki muhitining doimiyligini o‘zgartirmay bir xilda saqlash xususiyati",
        ],
        correctAnswer: "A",
      },
      {
        id: 2,
        number: 2,
        question: "Nuqtalar o‘rniga mos javobni tanlang. Askaniya rambule ....... hayvon.",
        options: [
          "A) murakkab oshqozonga ega juft tuyoqli",
          "B) sodda oshqozonga ega juft tuyoqli",
          "C) oshqozoni bo‘lmalarga bo‘lingan",
          'D) toq tuyoqli 3." Sinf " sistematik birligiga mos keluvchi javobni aniqlang. A) sporalilar, sarkodalilar B) korall poliplar, bo‘shliqichlilar C) bir pallalilar, yassi chuvalchanglar D) xivchinlilar, to‘garak chuvalchanglar',
        ],
        correctAnswer: "B",
      },
      {
        id: 3,
        number: 4,
        question: "Nuqtalar o‘rniga mos javobni tanlang. Bennetitning somatik hujayrasida ....",
        options: [
          "A) glikogenli qobiq va mezosoma bor",
          "B) sellulozali qobiq bor",
          "C) sitokinez plazmatik membrananing o‘rtasidan botiq paydo bo‘lish bilan amalga oshadi",
          "D) fotosintez jarayoni xromotofor va leykoplastlarda kechadi",
        ],
        correctAnswer: "B",
      },
      {
        id: 4,
        number: 5,
        question:
          "Qizil chuvalchang, bitiniya, dreysena uchun xos bo‘lgan xususiyatlar mos ravishda to‘g‘ri ketma-ketlikda berilgan javobni aniqlang.",
        options: [
          "A) qon aylanish sistemasi yopiq; ayirish sistemasi metanefridiydan iborat; ayrim jinsli",
          "B) yirtqich hayvon; qon aylanish sistemasi yopiq; ayrim jinsli",
          "C) biofiltr hisoblanadi; yopiq qon aylanish sistemasiga ega; boshi tanasidan alohida ixtisoslashgan",
          "D) ko‘p tuklilar sinfiga mansub; anal teshigiga ega; metamorfoz orqali rivojlanadi",
        ],
        correctAnswer: "C",
      },
      {
        id: 5,
        number: 6,
        question:
          "DNK qo‘sh spiralini hammasi bo‘lib 9468 ta zotli asos, dezoksiriboza va fosfat kislota qoldig‘i hosil qilgan. Shu DNK fragmentidan oqsil sintezlash uchun nechta t-RNK kerak bo‘ladi.",
        options: ["A) 1 ta", "B) 20 ta", "C) 526 ta", "D) 1578 ta"],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 7,
        question:
          "Nazariy jihatdan na‘matakda hosil bo‘lgan spermiylarning 30%i urug‘lantirishda ishtirok etdi. Shu o‘simlikda 1080 ta urug‘ hosil bo‘lgan bo‘lsa, jami mikrosporalarning hosil bo‘-lishida ishtirok etgan boshlang‘ich diploid hujayralar sonini aniqlang.",
        options: ["A) 840", "B) 450", "C) 860", "D) 900"],
        correctAnswer: "A",
      },
      {
        id: 7,
        number: 8,
        question:
          "Kelib chiqish markazi Janubi-G‘arbiy Osiyo hisoblan- gan o‘simliklar haqida ma‘lumotlar to‘g‘ri ko‘rsatilgan javobni aniqlang. 1) bug‘doy; 2) sabzi; 3) karam; 4) beda; 5) arpa; 6) suli.",
        options: [
          "A) 4-gullari qiyshiq; 6-uch bargchali murakkab bargga ega",
          "B) 1-murakkab boshoqli to‘pgulni hosil qiladi; 2-to‘pguli murakkab soyabon",
          "C) 1-somatik hujayralari mitozni profazasida 96 ta DNK ga ega; 4-gulkosachabargi ikki qavatli",
          "D) 3-gulkosachabargi to‘rtta; 5-hayotiy shakli daraxt",
        ],
        correctAnswer: "C",
      },
      {
        id: 8,
        number: 9,
        question:
          "Seleksiya sohasiga oid noto‘g‘ri ma‘lumotlarni aniqlang. 1) geterozis turlararo chatishtirishda olingan birinchi avlod duragaylarida kuzatiladi; 2) yakka tanlash orqali olingan nav genetik jihatdan bir xil bo‘lmaydi; 3) kofe, banan, arpaning vatani Abissiniya markazi hisoblanadi; 4) yalpi tanlash orqali genetik jihatdan bir xil organizmlar olinadi; 5) tritikale-bug‘doy va bug‘doyiqning duragayi.",
        options: ["A) 1, 2", "B) 4, 5", "C) 2, 4", "D) 1, 3"],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 10,
        question:
          "Genetik injeneriya sohasiga oid noto‘g‘ri ma‘lumotlarni aniqlang. 1) plazmid - transpozaza fermenti kabi monomeri amino- kislotadan tashkil topgan ferment; 2) transpozon-zaharli toksin parchalovchi ferment; 3) EcoRI - DNK molekulasini ≪yopishqoq≫ uchlar hosil qilib kesuvchi restriktaza; 4) restriktazalar - ferment sintez qiluvchi gen saqlovchi tuzilma; 5) ligaza - DNK bolaklarini birbiriga uchma-uch biriktiruvchi enzim.",
        options: [
          "A) 2, 5",
          "B) 1, 2 С) 3, 4 D) 3, 5",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 10,
        number: 11,
        question:
          "Genotipik o‘zgaruvchanlik aks ettirilmagan misollar berilgan jabobni aniqlang. 1) karamning tetraploid turi paydo bolishi; 2) bedaning suv yetarli joyda baland, suv kam joyda past bo‘yli bolib o‘sishi; 3) uchi chilpilgan novdadan yon novdalarning paydo bolishi 4) skerda avlodida 3, 4, 5, 6, 7 xromosomali turlarning paydo bolishi.",
        options: ["A) 1 ,3", "B) 2 ,4", "C) 2, 3", "D) 1 ,4"],
        correctAnswer: "D",
      },
      {
        id: 11,
        number: 12,
        question:
          "Dengiz cho‘chqalarida junning hurpaygan bolishi silliq bo‘lishi ustidan dominantlik qiladi. Hurpaygan junli dengiz cho‘chqalari o‘zaro chatishtirildi. Olingan avlodda geterozi-gotali hurpaygan junli cho‘chqalar soni gomozi- gotali hurpaygan junli cho‘chqalar sonidan 60 taga ko‘p bo‘lgan. Avlodda jami nechtasida silliq jun geni mavjut?",
        options: [
          "A) 60 C) 120",
          "B) 180 D) 240",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 12,
        number: 13,
        question:
          "Askaridaning ontogenez rivojlanish bosqichlari ketma-ketligi to‘g‘ri berilgan javobni aniqlang. 1) lichinkaning qonga o‘tishi; 2) lichinka o‘pkaga o‘tishi; 3) tuxumning odamga yuqishi; 4) lichinkaning jigarga o‘tishi; 5) parazitning ingichka ichakda voyaga yetishi; 6) tuxumdan lichinkaning chiqishi; 7) lichinkaning yurakka borishi.",
        options: [
          "A) 6, 5, 2, 1, 4, 7, 3",
          "B) 3, 6, 1, 4, 7, 2, 5",
          "C) 5, 2, 4, 1, 7, 6, 3",
          "D) 3, 6, 2, 4, 1, 5, 7",
        ],
        correctAnswer: "B",
      },
      {
        id: 13,
        number: 14,
        question:
          "Quyidagi belgilarga ega bo‘lgan organizmlar to‘g‘ri ko‘r-satilgan javobni aniqlang. 1) oraliq ho‘jayinga ega; 2) ikki uchi ochiq ayirish sistemasiga ega; 3) murakkab ko‘zga ega emas",
        options: [
          "A) 1-qoramol tasmasimon chuvalchangi; 2-karam kapalagi; 3-trixogramma",
          "B) 1-exinokokk; 2-nereida; 3-biy",
          "C) 1-jigar qurti; 2-langust; 3-siklop",
          "D) 1-odam askaridasi; 2-tridakna; 3-tovusko‘z",
        ],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 15,
        question: "To‘g‘ri fikrni aniqlang.",
        options: [
          "A) Genlarning epistaz ta‘sirida digeterozigota oq patli tovuq va xo`rozning chatishishi natijasida F olingan 13 2 ta oq patli tovuq zotlari 6 xil genotipga ega",
          "B) DNK ning spirali 5 marta o`z o`qi atrofida aylansa uzunligi 17 nm bo`ladi",
          "C) Sebarganing murtak xaltasida 8 xil yadroli hujayralar bo`ladi",
          "D) azot asoslari 5 xil nukleotid hosil qiladi",
        ],
        correctAnswer: "C",
      },
      {
        id: 15,
        number: 16,
        question:
          "Silur (a), yura (b), toshko‘mir (c) davrlariga xos evolyutsion o‘zgarishlarni aniqlang. 1) ochiq urug‘lilarning paydo bo‘lishi; 2) arxeopteriks-ning paydo bo‘lishi; 3) uchuvchi hasharotlarning paydo bo‘lishi; 4) qisqichbaqa va chayonlarning rivojlanishi; 5) kaltakesak va toshbaqalar ajdodlarining paydo bo‘lishi; 6) dastlabki sutemizuvchilarning paydo bo‘lishi.",
        options: [
          "A) a - 4; b - 6; c - 1, 2;",
          "B) a - 4; b - 2; c - 1, 3;",
          "C) a - 2; b - 4; c - 1, 5;",
          "D) a - 3; b - 2; c - 1, 4;",
        ],
        correctAnswer: "B",
      },
      {
        id: 16,
        number: 17,
        question:
          "Odam organizmi suyaklarining tuzilishiga ko‘ra xillarini aniqlang. 1) g‘ovak suyak; 2) naysimon suyak; 3) yassi suyak; 4) g‘alvirsimon suyak",
        options: [
          "A) 1-o‘mrov; 2-boldir; 3-kaftusti; 4-yuqori jag‘;",
          "B) 1-kurak; 2-bilak; 3-tepa; 4-yuqori ja g‘;",
          "C) 1-umurtqa; 2-barmoq; 3-ensa; 4-kaftusti;",
          "D) 1-to‘sh; 2-son; 3-kurak suyaklari; 4-peshona;",
        ],
        correctAnswer: "B",
      },
      {
        id: 17,
        number: 18,
        question:
          "O‘simlik-sichqon-burgutdan iborat oziq zanjirida. o‘sim-lik biomassasi 150 tonna. Bitta burgutning massasi 5 kg ga ortgan bo‘lsa, populyatsiyadagi burgutlar sonini aniqlang.",
        options: ["A) 1500", "B) 300", "C) 30", "D) 150"],
        correctAnswer: "A",
      },
      {
        id: 18,
        number: 19,
        question:
          "Ma‘lum bir uzunlikdagi DNK fragmenti tarkibidagi vodorod bog‘lar soni adenin nukleotidlari sonidan 1400 taga, sitozin nukleotidlari sonidan 1200 taga ko‘p bo‘lsa, DNK molekulasida nechta fosfodiefir bog‘ mavjud? (Nukleotidlar o‘zaro fosfodiefir bog‘orqali birikadi.)",
        options: ["A) 1448", "B) 998", "C) 1198", "D) 898"],
        correctAnswer: "B",
      },
      {
        id: 19,
        number: 20,
        question:
          "Dengiz mushugi va chug‘urchiq uchun umumiy bo‘lgan muhitning haroratiga binoan moslanish belgilarini aniqlang. 1) ter bezlarining bo‘lishi; 2) arterial va venoz qonning bir-biridan toiiq ajralishi; 3) to‘rt kamerali yurakning paydo bo‘lishi; 4) teri osti yog‘ kletchatkasi mavjudligi; 5) migratsiya qilishi; 6) terming patlar bilan qoplanishi; 7) teri usti jun qoplamining mavjudligi; 8) qon aylanishining nerv sistemasi orqali idora qilinishi",
        options: ["A) 1, 3, 5;", "B) 4, 6, 8;", "C) 2, 3, 8;", "D) 4, 6, 7;"],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 21,
        question:
          "Rasmda odam organizmida issiq ta'sirga nisbatan paydo bo'luvchi refleks yoyi ketma-ketligi tasvirlangan. Rasmda 4 raqam bilan ko'rsatilgan refleks yoyining tarkibiy qismi uchun xos bo'lgan ma'lumotlarni aniqlang.",
        options: [
          "A) tashqi muhitning o'zgarishiga moslanish xususiyatiga ega, ishchi organdan impulsni qabul qiladi",
          "B) tana haroratini boshqarishda muhim ahamiyatga ega, aksonlari orqa miyaning oldingi ildizchalarini hosil qiluvchi neyronlardan nerv impulslarini qabul qiladi",
          "C) refleks yoyining boshlang'ich qismi hisoblanadi, nerv impulslarini tanasi nerv gangliylarida joylashgan neyrondan qabul qiladi",
          "D) refleks yoyining boshlang'ich qismi hisoblanadi, tashqi muhit ta's'irlarini nerv impulslariga aylantiradi va tanasi nerv gangliylarida joylashgan neyronga o'tkazadi",
        ],
        correctAnswer: "A",
      },
      {
        id: 21,
        number: 22,
        question:
          "Qirqbo‘g‘imlarga xos bo‘lmagan xususiyatlarni aniqlang. 1) ildizpoyali o‘simlik; 2) anteridiyda ikki xivchinli sperma-tozoidlar yetiladi; 3) gametofit bo‘g‘in ustunlik qiladi; 4) barglari poyada halqasimon joylashgan; 5) hujayralari xitin qobiqqa ega; 6) tallomdan ajralgan o‘simtalar orqali ko‘payadi; 7) erta bahorda sershox qirqbo‘g‘imining ildizpoyasidagi kurtaklaridan qo‘ng‘ir rangli shoxlanmagan generativ novda o‘sib chiqadi; 8) gametofiti bir uyli ikki jinsli",
        options: [
          "A) 1, 2, 5, 7, 3, 4;",
          "B) 2, 3, 5, 6, 7, 8;",
          "C) 1, 2, 4, 5, 7, 8;",
          "D) 1, 2, 3, 5, 7, 8;",
        ],
        correctAnswer: "D",
      },
      {
        id: 22,
        number: 23,
        question:
          "A turdagi o'simlikning xromosoma diploid to'plami 12 ga, B turdagi o'simlikniki esa 16 ga teng. A va B turlarning o'zaro chatishishi va poliploidiya hodisasi tufayli yangi C tur vujudga kelsa, C turning diploid xromosomalar to'plamini aniqlang.",
        options: ["A) 20", "B) 16", "C) 42", "D) 28"],
        correctAnswer: "C",
      },
      {
        id: 23,
        number: 24,
        question:
          "Gidraning lansetnik gastrulasidan farqini aniqlang. 1) ektoderma va endodermaga ega; 2) tovoni bor; 3) botib kirish orqali hosil bo‘ladi; 4) og‘iz atrofida paypaslagichlari joylashgan; 5) hujayralarning ixtisoslashishi kuzatiladi; 6) blastotselda mezoderma shakllanadi.",
        options: ["A) 2, 4", "B) 1 ,4", "C) 2, 6", "D) 3, 5"],
        correctAnswer: "A",
      },
      {
        id: 24,
        number: 25,
        question:
          "Nukleotidlar uchun xos bo‘lmagan belgilarni toping. 1) fosfat kislota qoldig‘iga ega; 2) tarkibida pentoza bor; 3) rizosfera hujayralaridagi nuklein kislotalarida to‘rt xil turi uchraydi; 4) polinukleotid zanjirda peptid bog‘lari yordamida birikadi; 5) parchalanganda atsetat kislota hosil qiladi; 6) translyatsiya mahsuloti",
        options: ["A) 3, 4, 5", "B) 1, 3, 6", "C) 4, 5, 6", "D) 2, 4, 5"],
        correctAnswer: "D",
      },
      {
        id: 25,
        number: 26,
        question:
          "Temirchak uchun xos bo‘lgan xususiyatlarni aniqlang. 1) hujayralari menibrana o‘simtalari va burmalari orqali o‘zaro bog‘ lanadi; 2) tuxuin hujayrasi mitoz bo‘linish yo‘li bilan hosil bo‘ladi; 3) mitoxondriyasida aerob parchalanish kuzatiladi; 4) qalin hujayra qobig‘iga ega; 5) zaxira holda glikogen to‘playdi; 6) hujayrasida birlamchi uglevod sintez qiladi.",
        options: ["A) 1, 5", "B) 2, 5", "C) 2, 6", "D) 3 ,4"],
        correctAnswer: "B",
      },
      {
        id: 26,
        number: 27,
        question:
          "Odam irsiyatini geneologik usulda o‘rganilganda quyi- dagilardan qaysilarini aniqlash mumkin? 1) Shershevskiy-Terner sindromining populyatsiyada uch-rash foizi; 2) odamdagi qobiliyatning irsiyatga bog‘liqligi; 3) skoliotik qad-qomatning keyingi avlodlarda uchrash foizi; 4) xromosoma deletsiyasi; 5) braxidaktili- yaning dominant genga bog‘liqligi; 6) Daun sindromli bolaning kariotipi",
        options: ["A) 3, 4", "B) 2, 6", "C) 2, 5", "D) 1, 6"],
        correctAnswer: "D",
      },
      {
        id: 27,
        number: 28,
        question:
          "DNK bo‘lagini klonlashda vektor sifatida nimadan foydalanish mumkin emas? 1) virusning DNK molekulasidan; 2) transpozondan; 3) plazmidlardan; 4) endonukleazadan; 5) transpozazadan; 6) agrobakteriumning t-RNK molekulasidan",
        options: ["A) a - 3, 5, 6;", "B) a - 4, 5, 6;", "C) a - 3, 4, 5;", "D) a - 3, 4, 6;"],
        correctAnswer: "C",
      },
      {
        id: 28,
        number: 29,
        question:
          "Quyida berilgan fikrlarning qaysilari hujayra nazariyasiga tegishli emas? 1) barcha tirik organizmlar hujayralardan tashkil topgan; 2) har bir xromosomada joylashgan genlar avloddan avlodga birikkan holda beriladi; 3) fagotsitoz hodisasini tushuntirib beradi; 4) barcha tirik organizmlar bir xil morfologik asosga ega.",
        options: ["A) 1, 3", "B) 2 ,3", "C) 2, 4", "D) 1 ,4"],
        correctAnswer: "D",
      },
      {
        id: 29,
        number: 30,
        question:
          "Mitozning metafaza bosqichi uchun mos holatlarni belgilang. a) konyugatsiyalashgan xromosomalar ekvator tekisligida joylashadi; b) xromatidalar birlamchi belbog‘ bilan birikkan; c) xromosomalar diplod to‘plamga ega; d) xromosomalar kuchli spirallashgan holatda bo‘ladi; e) xromosomalar gaploid to‘plamga ega",
        options: ["A) b, c", "B) d, e", "C) a, c", "D) a, d"],
        correctAnswer: "D",
      },
      {
        id: 30,
        number: 30,
        question:
          "Genetika qonuniyatlari: Mendelning birinchi va ikkinchi qonunlariga muvofiq F2 bo'g'indagi ajralish nisbatini ko'rsating.",
        options: [
          "A) Monoduragay chatishtirishda fenotip bo'yicha 3:1 nisbat",
          "B) Diduragay chatishtirishda genotip bo'yicha 9:3:3:1 nisbat",
          "C) Chala dominantlikda fenotip bo'yicha 3:1 nisbat",
          "D) Tahliliy chatishtirishda doimo 1:2:1 nisbat",
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 30,
    title: "Variant 30",
    subtitle: "Biologiya Milliy sertifikatga tayyorgarlik test savollari",
    questionCount: 30,
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        number: 1,
        question:
          "Algologiya (a) va lixenologiya (b) bo‗limlari qaysi organizmlarni o'rganadi? 1) kladofora; 2) ulotriks; 3) batsidiya; 4) batsilla; 5) xara; 6) parmeliya; 7) kladoniya",
        options: [
          "A) a-1, 3; b-5, 6",
          "B) a-2, 7; b-4, 6",
          "C) a-5, 7; b-3, 4",
          "D) a-1, 5; b-6, 7",
        ],
        correctAnswer: "D",
      },
      {
        id: 2,
        number: 2,
        question:
          "Baliqko'z (a), baqachanoq (b) va leyshmaniya (c) ga tegishli ma‘lumotlarni to‗g‗ri juftlang. 1) avtotrof organizm; 2) prokariot organizm; 3) umurtqali hayvon; 4) eukariot organizm; 5) geterotrof organizm; 6) urnurtqasiz hayvon",
        options: [
          "A) a - 1; b - 5; с - 4",
          "B) a - 2; b - 3; c - 5",
          "C) a - 6; b - 4; c - 1",
          "D) a - 3; b - 4; с - 6",
        ],
        correctAnswer: "C",
      },
      {
        id: 3,
        number: 3,
        question:
          "Mitoz bo‗linishdagi jarayonlarni to‗g‗ri ketma-ketlikda joylashtiring. 1) xromosomalar yorug‗lik mikroskopida ko'rinmaydi; 2) xromatidalar mustaqil xromosomaga aylanadi; 3) xromosomalar qutblarga to‗planadi; 4) xromosomalarning birlamchi belbog‗i uziladi; 5) xromosomalar bo'linish urchug'iga birikadi; 6) sentriolalar hujayra qutblariga tarqaladi",
        options: [
          "A) 6; 5; 4; 2; 3; 1",
          "B) 2; 1; 5; 3; 4; 6",
          "C) 6; 1; 2; 5; 4; 3",
          "D) 2; 3; 1; 5; 4; 6",
        ],
        correctAnswer: "D",
      },
      {
        id: 4,
        number: 4,
        question:
          "Mitozning anafaza va meyozning anafaza II bosqichlari yakuni uchun umumiy bo'lgan holatlarni belgilang. a) xromatidalar mustaqil xromosomalarga aylanadi; b) qutblarda ikki xromatidali xromosomalar to'planadi; c) xromosomalar diploid to‗plamga ega bo'ladi; d) xromosomalar kalta va yo‗g‗on holatda bo'ladi; e) xromatidalarni birlashtiruvchi belbog1 uziladi",
        options: ["A) a, e", "B) b, d", "C) b, с", "D) a, b"],
        correctAnswer: "D",
      },
      {
        id: 5,
        number: 5,
        question:
          "Qalampir mikrosporasida hosil bo'lgan generativ hujayra bo‗linishida mutatsiya sodir bo'lib, mitoz bo'linishining anafaza davrida ikkita nogomologik xromosomalarning mustaqil xromatidalari har xil qutbga tarqalmay, bir qutbga o‗tsa, hosil bo'lgan spermiylar bilan urug'langan normal markaziy hujayradagi xromosomalar soni nechta bo'ladi?",
        options: ["A) 70 yoki 74", "B) 70 yoki 76", "C) 46 yoki 74", "D) 48 yoki 46"],
        correctAnswer: "B",
      },
      {
        id: 6,
        number: 6,
        question:
          "Gulsimon tojli (a) va oddiy tojli (b) xo'roz genotipini aniqlang. 1) AAbb; 2) AABb; 3) ааbb 4) AABB 5) ааВВ; 6) АаВВ; 7) ааВb 8) АаВb; 9) Ааbb",
        options: [
          "A) а-3; b-4, 6",
          "B) а-5, 7; b-3 С) а-2, 8; b-1, 9 D) а-1, 9; b-3",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 7,
        number: 7,
        question:
          "Tulkilar juni rangi ikki juft noallel genlarga bog'liq, kumushrangli junning yuzaga chiqishi bir yoki ikki xil retsessiv allel genlar orqali boshqariladi. Ikki xil allel dominant genlarga ega tulkilar malla rangga ega bo'ladi. AaBb x Aabb genotipli tulkilar chatishishidan hosil bo'lgan organizmlar ajrahsh nisbatini aniqlang.",
        options: [
          "A) 3 malla; 5 kumushsimon rangli",
          "B) 3 malla; 1 kumushsimon rangli",
          "C) 7 malla; 1 kumushsimon rangli",
          "D) 5 malla; 3 kumushsimon rangli",
        ],
        correctAnswer: "A",
      },
      {
        id: 8,
        number: 8,
        question:
          "Roslin tajribasining ketma-ketligi to'g'ri ko'rsatilgan javobni aniqlang. 1) zigotaga somatik hujayra yadrosining kiritilishi; 2) zigotaning maydalanishi; 3) zigotadan yadroning olib tashlanishi; 4) irsiyati o'zgartirilgan zigotaning hosil bo'lishi; 5) blastulaning hosil bo'hshi; 6) embrionning qo'y bachadoniga joylashtirilishi",
        options: [
          "A) 1, 3, 2, 4, 5, 6",
          "B) 3, 1, 4, 2, 5, 6 С) 3, 1, 2, 4, 6, 5 D) 1, 2, 3, 4, 5, 6",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 9,
        number: 9,
        question: "Jinsiy ko'payishda yangi organizm ... rivojlanadi.",
        options: [
          "A) urug‗lanmagan tuxum hujayradan",
          "B) gaploid to'plamli gibridoma hujayrasidan",
          "C) diploid to'plamli bitta somatik hujayradan",
          "D) gaploid to'plamli bitta somatik hujayradan",
        ],
        correctAnswer: "D",
      },
      {
        id: 10,
        number: 10,
        question: "Zuhrasoch qirqqulog'ining gametofiti uchun xos bo'lmagan javobni belgilang.",
        options: [
          "A) rizoidli, k o‗p hujayrali jinsiy a‘zoga ega",
          "B) spora hosil qiladi, poya-bargli o'sirnlik G) zigota hosil qiladi, mustaqil oziqlanadi D) ikki jinsli, sporadan rivojlanadi",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "A",
      },
      {
        id: 11,
        number: 11,
        question:
          "Quyidagi berilgan hujayralarning qaysilari 7 (a) va 8 (b) tadan xromosomaga ega? 1) no‘xat diploid navi asosiy to‘qima hujayralari; 2) olchaning spermiy hujayrasi; 3) tog'olchaning tuxum hujayrasi; 4) bug‘doy diploid navi poyasining epidermis hujayrasi; 5) no'xat diploid navi spermiysi; 6) bug'doy diploid navi generativ hujayrasi",
        options: [
          "A) a-5; b-2,3;",
          "B) a-5,6; b-3; С) a-1,4; b-2,3; D) a-4,5; b-2,6;",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "B",
      },
      {
        id: 12,
        number: 12,
        question: "Baobabga mos kelmaydigan ma‘lumotlar keltirilgan javobni aniqlang.",
        options: [
          "A) umrboqiy daraxt, oddiy bargga ega",
          "B) gulkosachabarglari qolshilgan, urug‘chisi cheksiz",
          "C) changchilari 5 ta, gullari ayrim jinsli",
          "D) qizil daraxt bilan bir biogeografik viloyatda tarqalgan, gullari to‗g ‗ri",
        ],
        correctAnswer: "A",
      },
      {
        id: 13,
        number: 13,
        question:
          "Odam organizmidagi ichki sekretsiya bezlari ishlab chi-qaradigan biologik faol moddalar va ularga xos xususiyatlarni juftlab ko‗rsating. 1) paratgormon; 2) estrogen; 3) adrenalin; a) buyrakusti bezining miya qavatidan ajraladi; b) orga- nizmda pigment almashuvini boshqarishga ishtirok etadi; c) epifiz bezi ishlab chiqaradi; d) jinsiy bezlar funksiyasini pasaytiradi; e) ayollarning jinsiy bezlari funksiyasini kuchaytiradi; f) organizmda kalsiy, fosfor almashinuvini tartibga soladi",
        options: ["A) 1-b; 2-d; 3-c", "B) 1-f; 2-e; 3-a", "C) 1-c; 2-e; 3-b", "D) 1-d; 2-f; 3-a"],
        correctAnswer: "A",
      },
      {
        id: 14,
        number: 14,
        question:
          "Hayvonlar qon aylanish sistemasining qaysi qisralari- da arterial (a) va venoz (b) qon boiadi? 1) kichik suv shilligcining yurak bo‘lmachasida; 2) bizon- ning o‗pka venasida; 3) lansetnikning orqa aortasida; 4) treskaning qorin aortasida; 5) butli o‘rgimchakning yuragida; 6) gorbushaning yurak qorinchasida.",
        options: [
          "A) a - 1, 2; b - 3, 4",
          "B) a - 3, 5; b - 2, 6",
          "C) a - 2, 3; b - 4, 6",
          "D) a - 2, 5; b - I 3",
        ],
        correctAnswer: "B",
      },
      {
        id: 15,
        number: 15,
        question:
          "Askaridaning yomg‗ir chuvalchangidan farqli jihatlarini aniqlang. 1) tashqi tomondan kutikula bilan qoplangan; 2) halqum atrofi nerv halqasiga ega; 3) tuxumidan lichinka rivojlanadi; 4) erkin hayot kechiradi; 5) ichki organlari tana bo'shlig'ida joylashadi; 6) germafrodit hayvon",
        options: [
          "A) 2, 4",
          "B) 1 ,6 С) 1, 3 D) 3, 5",
          "C) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
          "D) Yuqoridagi fikrlar asosida to'g'ri ta'rif",
        ],
        correctAnswer: "C",
      },
      {
        id: 16,
        number: 16,
        question:
          "Yaroslavl va Moskva zotlari uchun umumiy bo‗lgan ma‘lumotlarni belgilang. 1) nafas olishda o‗pka bilan birga havo xaltachalari ham ishtirok etadi; 2) diafragma muskuliga ega; 3) konsu- ment organizm; 4) umurtqalilar kenja tipiga mansub; 5) embrioni faqat ona organizmida rivojlanadi; 6) katta qon aylanish doirasi yurakning chap qorinchasidan boshlanadi",
        options: ["A) 3, 4, 6", "B) 1, 2, 5", "C) 1, 4, 5", "D) 2, 3, 6"],
        correctAnswer: "C",
      },
      {
        id: 17,
        number: 17,
        question:
          "Ikkita DNK molekulasi tarkibida jami 1000 ta nukleo- tid mavjud. Birinchi DNK molekulasidagi nukleotidlar- ning 25%i adenin nukleotididan iborat, ikkinchi DNK molekulasidagi nukleotidlarning 20%i timin nukleotididan iborat. Agar ikkala DNK molekulasi tarkibidagi guanin nukleotidlari yig‗indisi 270 taga teng bo‗lsa, birinchi DNK dagi vodorod bog‗lar sonini aniqlang.",
        options: ["A) 520", "B) 420", "C) 360", "D) 750"],
        correctAnswer: "B",
      },
      {
        id: 18,
        number: 18,
        question:
          "Sachratqi mevasi rangining sariq bo‗lishi och sariq bo‗lishi ustidan chala dominantlik qiladi. Geterozigotalar mevasining rangi oraliq bo‘ladi. Meva rangining yuzaga chiqishi ikkinchi juft dominant I genga bog‗liq. Uning retsessiv alleli ingibitorlik vazifasini bajarib, meva rangining oq bo‗lishiga olib keladi. Och sariq mevali o‗simliklarning genotipini aniqlang.",
        options: ["A) IiAa, liA A", "B) iiaa, Iiaa", "C) IiAA, IIAa", "D) Iiaa, Iiaa"],
        correctAnswer: "B",
      },
      {
        id: 19,
        number: 19,
        question:
          "Noto‗g‗ri fikrlar berilgan javobni aniqlang. 1) regress - parazit hayot kechirishga o‗tish tufayli organizmlar tuzilishining soddalashuvi; 2) makroevolyutsiya - kenja tur va turlarning paydo bo‗lishi; 3) aromorfoz - sinf, tip darajasida yuzaga keladigan tuzilishning yuksalishi bilan bog‘liq evolyutsion o‘zgarishlar; 4) alohidalanish - bir turga mansub individlarning erkin chatishuvini cheklovchi to‗siq; 5) divergensiya - turli sistematik guruhlarga mansub organizmlarning uzoq vaqt mobaynida bir xil sharoitga yashashi tufayli belgilarining o‘xshashligi",
        options: ["A) 3, 4", "B) 3, 5", "C) 2, 4", "D) 1, 5"],
        correctAnswer: "C",
      },
      {
        id: 20,
        number: 20,
        question:
          "Bitta oilaga mansub o'simliklar jufti to‗g‗ri ko‗rsatilgan javobni belgilang. 1) baobab va kanop; 2) ismaloq va shirinmiya; 3) shuvoq va andiz; 4) donasho'r va bo‗znoch; 5) loviya va maxsar",
        options: ["A) 2, 3", "B) 4, 5", "C) 1, 3", "D) 1, 5"],
        correctAnswer: "D",
      },
      {
        id: 21,
        number: 21,
        question:
          "Odam organizmidagi retsessiv mutatsiyalarni aniqlang. 1) tug‘ma karlik; 2) Shereshevskiy-Terner sindromi; 3) daltonizm; 4) braxidaktiliya; 5) shizofreniya; 6) qandli diabet; 7) polidaktiliya",
        options: ["A) 3, 7", "B) 4, 5", "C) 2, 6", "D) 1, 5"],
        correctAnswer: "C",
      },
      {
        id: 22,
        number: 22,
        question:
          "Yashash uchun kurash turlariga mos keladigan misollar to‗g‗ri ko'rsatilgan javobni aniqlang. a) turlararo kurash; b) tur ichida kurash; c) anorganik tabiatning noqulay sharoitlariga qarshi kurash; 1) o'simliklarning viruslar, bakteriyalar, zamburug'lar ta‘sirida nobud bo‗lishi; 2) bir turga mansub o'simliklarning yorug'lik uchun kurashi; 3) o'siraliklar- ning namlik yetishmasligi oqibatida nobud bo'lishi; 4) o'simlik urug'larining sovuqdan nobud bo'lishi; 5) qush va sutemizuvchilarning o'simlik urug'lari bilan oziqlanishi.",
        options: [
          "A) a - 5; b - 1; c - 3",
          "B) a - 1; b - 5; c - 3",
          "C) a - 5; b - 2; c - 1",
          "D) a - 1; b - 2; c - 4",
        ],
        correctAnswer: "A",
      },
      {
        id: 23,
        number: 23,
        question:
          "Yirtqichlik bilan hayot kechiradigan organizmlarni belgilang. 1) aureliya; 2) yenotsimon it; 3) zubr; 4) qashqaldoq; 5) miqqiy; 6) arxar; 7) g'izol; 8) qaldirg'och",
        options: ["A) 2, 3, 4, 7", "B) 1, 2, 6, 8", "C) 3, 5, 7, 8", "D) 1, 2, 4, 5"],
        correctAnswer: "B",
      },
      {
        id: 24,
        number: 24,
        question:
          "Hindomalay biogeografik viloyatdagi diafragmaga ega bo‗lmagan (I) va diafragmaga ega bo'lgan (II) issiqqonli hayvonlarni ko'rsating. 1) gorilla; 2) zubr; 3) bankiv tovug'i; 4) gibbon; 5) tovus; 6) bambuk ayig'i; 7) gavial; 8) kar; 9) Nil timsohi; 10) tupay",
        options: [
          "A) I-4, 6, 10; II-3, 5",
          "B) I-2, 6, 7; II-5, 10",
          "C) I-3, 8; II-1, 4, 9",
          "D) I-3, 5; II-4, 6,",
        ],
        correctAnswer: "B",
      },
      {
        id: 25,
        number: 25,
        question:
          "Fotoperiodizm . . . ga ta‘sir ko'rsatmaydigan jarayonlarini aniqlang. 1) ko'payish davriga; 2) harakat yo'nalishiga; 3) suv miqdori o‗zgarganda tana massasining kamayishi va ko'payishi; 4) qushlarning tullashi; 5) termitlar yerosti suvigacha yo'llar ochishiga; 6) embrional rivojlanish",
        options: ["A) 2, 3, 5", "B) 2, 4, 6", "C) 1, 4, 6", "D) 1, 3, 5"],
        correctAnswer: "D",
      },
      {
        id: 26,
        number: 26,
        question:
          "Odamning xulq atvorining xolerik tipiga xos bo'lgan xususiyatlarini ko'rsating. 1) kuchli; 2) muvozanatlashgan; 3) qo‗zg‗alish tormozla- nishdan ustun; 4) tormozlanish qo'zg'alishdan ustun; 5) kuchsiz; 6) kamharakat; 7) harakatchan; 8) muvozanat- lashmagan",
        options: ["A) 1, 3, 8", "B) 2, 4, 7", "C) 1, 2, 7", "D) 4, 5, 6"],
        correctAnswer: "A",
      },
      {
        id: 27,
        number: 27,
        question:
          "Doni sariq va tekis, qizil gulli, genotipi trigeterozi- gota. no‗xat o'simligini tahliliy chatishtirish natijasida hosil bo'lgan avlodning necha foizida doni sariq va tekis bo‘ladi?",
        options: ["A) 12,5", "B) 50", "C) 37,5", "D) 25"],
        correctAnswer: "D",
      },
      {
        id: 28,
        number: 28,
        question:
          "Tritonning gekkondan farqini aniqlang. 1) bosh skeletoning mavjudligi; 2) qovurg'aning mavjud- ligi; 3) yaxshi rivojlangan miyachaning mavjudligi; 4) ichki urug‘lanish; 5) kloakaning mavjudligi; 6) embrional davrda xordaning bo'lishi; 7) yurak qorinchasida to'siqning bo'lmasligi; 8) terisida muguz tangachalarning bo'lmasligi.",
        options: ["A) 2, 6, 8", "B) 1 ,7", "C) 7, 8", "D) 3, 4, 5"],
        correctAnswer: "A",
      },
      {
        id: 29,
        number: 29,
        question:
          "O'simliklarni oilalari bilan to‗g‗ri juftlangan javobni toping. a) oshqovoq; b) oq jo'xori; c) soya; d) yapon saforasi; e) ismaloq; f) matur; 1) qovoqdoshlar; 2) burchoqdoshlar; 3) loladoshlar; 4) bug'doydoshlar; 5) shoradoshlar; 6) piozdoshlar",
        options: [
          "A) a - 1; b - 4; c, e - 5; d - 2; f – 3;",
          "B) a, b, e - 5; c - 2, d - 3; f - 4;",
          "C) a - 1; b - 4; c, d - 2, e - 5; f - 6;",
          "D) a - 6; b, c, d - 5; e - 2; f - 1;",
        ],
        correctAnswer: "B",
      },
      {
        id: 30,
        number: 30,
        question:
          "Qaysi sistematik guruhlar idioadaptatsiyalar natijasida paydo bo'lgan? 1) suvda hamda quruqlikda yashovchilar; 2) suvsarsi- monlar; 3) qorinoyoqli molluskalar; 4) so'nalar; 5) qisqichba-qasimonlar; 6) ilonlar; 7) tritonlar.",
        options: ["A) 2, 4, 5", "B) 1, 3, 6", "C) 3, 5, 7", "D) 2, 4, 6"],
        correctAnswer: "A",
      },
    ],
  },
];
