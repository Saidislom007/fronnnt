import { GraduationCap, Award, TrendingUp, Users } from "lucide-react";

export function Graduates() {
  const graduatingClasses = [
    {
      year: "2025",
      total: 98,
      university: 92,
      honors: 15,
      abroad: 8,
      achievements: [
        "12 ta o'quvchi DTM testida 190+ ball",
        "8 ta o'quvchi chet elga grant asosida o'qishga ketdi",
        "15 ta o'quvchi diplom bilan tamomladi",
      ],
      notable: [
        {
          name: "Karimov Azizbek",
          university: "TATU",
          score: "196.4 ball",
          achievement: "Respublika matematika olimpiadasi g'olibi",
        },
        {
          name: "Yusupova Madina",
          university: "TDPU",
          score: "194.8 ball",
          achievement: "Respublika fizika olimpiadasi 2-o'rin",
        },
        {
          name: "Rahimov Sardor",
          university: "TATU (Janubiy Koreya granti)",
          score: "195.2 ball",
          achievement: "Xalqaro informatika olimpiadasi ishtirokchisi",
        },
      ],
    },
    {
      year: "2024",
      total: 95,
      university: 88,
      honors: 12,
      abroad: 6,
      achievements: [
        "10 ta o'quvchi DTM testida 190+ ball",
        "6 ta o'quvchi xorijiy universitetlarga grant oldi",
        "12 ta o'quvchi diplom bilan tamomladi",
      ],
      notable: [
        {
          name: "Sobirova Dilnoza",
          university: "NUUz",
          score: "193.6 ball",
          achievement: "Viloyat kimyo olimpiadasi g'olibi",
        },
        {
          name: "Toshmatov Javohir",
          university: "TATU",
          score: "192.4 ball",
          achievement: "Respublika informatika olimpiadasi 3-o'rin",
        },
      ],
    },
    {
      year: "2023",
      total: 92,
      university: 85,
      honors: 10,
      abroad: 5,
      achievements: [
        "8 ta o'quvchi DTM testida 190+ ball",
        "5 ta o'quvchi xorijda o'qishga ketdi",
        "10 ta o'quvchi diplom bilan tamomladi",
      ],
      notable: [
        {
          name: "Nurmatova Nigora",
          university: "TDTU",
          score: "191.8 ball",
          achievement: "Viloyat matematika olimpiadasi 1-o'rin",
        },
        {
          name: "Ergashev Aziz",
          university: "TIIAME",
          score: "189.6 ball",
          achievement: "Respublika fizika olimpiadasi ishtirokchisi",
        },
      ],
    },
  ];

  const statistics = [
    { value: "285", label: "Bitiruvchilar (3 yil)", icon: GraduationCap },
    { value: "94%", label: "OTMga kirganlar", icon: TrendingUp },
    { value: "37", label: "Diplom bilan", icon: Award },
    { value: "19", label: "Chet elda o'qiydi", icon: Users },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Bitiruvchilar</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Maktabimiz bitiruvchilarining yutuqlari va muvaffaqiyatlari
        </p>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 text-white rounded-xl p-6 text-center"
          >
            <stat.icon className="h-12 w-12 mx-auto mb-3" />
            <div className="text-4xl mb-2">{stat.value}</div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Graduating Classes */}
      <div className="space-y-8">
        {graduatingClasses.map((classData, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl">{classData.year} yil bitiruvchilari</h2>
                <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-2xl">{classData.total}</span> o'quvchi
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-1">{classData.university}</div>
                  <div className="text-blue-200 text-sm">OTMga kirdi</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">{classData.honors}</div>
                  <div className="text-blue-200 text-sm">Diplom bilan</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">{classData.abroad}</div>
                  <div className="text-blue-200 text-sm">Chet elda</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">
                    {Math.round((classData.university / classData.total) * 100)}%
                  </div>
                  <div className="text-blue-200 text-sm">Qabul foizi</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Achievements */}
              <div className="mb-6">
                <h3 className="text-xl mb-4">Asosiy yutuqlar</h3>
                <ul className="space-y-2">
                  {classData.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notable Graduates */}
              <div>
                <h3 className="text-xl mb-4">A'lo natijalar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {classData.notable.map((student, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-1">{student.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {student.university}
                          </p>
                          <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                            {student.score}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            {student.achievement}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* University Distribution */}
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl mb-6">Qabul qilingan OTMlar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-3xl mb-2">45%</div>
            <div className="text-gray-700 dark:text-gray-300">
              Texnika yo'nalishi
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              TATU, TDTU, TIIAME
            </div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-3xl mb-2">30%</div>
            <div className="text-gray-700 dark:text-gray-300">
              Pedagogika va tillar
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              NUUz, TDPU, UzSWLU
            </div>
          </div>
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="text-3xl mb-2">25%</div>
            <div className="text-gray-700 dark:text-gray-300">
              Tibbiyot va boshqalar
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              ToshDTU, TDIU, boshqalar
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="mt-12 bg-gradient-to-br from-green-600 to-green-800 dark:from-green-800 dark:to-green-950 text-white rounded-2xl p-8">
        <h2 className="text-3xl mb-6">Muvaffaqiyat tarixi</h2>
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl mb-2">Xalqaro muvaffaqiyatlar</h3>
            <p className="text-green-100">
              So'nggi 3 yilda 19 ta bitiruvchimiz xorijiy universitetlarga grant
              asosida o'qishga ketdi. Janubiy Koreya, Rossiya, Turkiya va boshqa
              davlatlardagi nufuzli universitetlarda ta'lim olishmoqda.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl mb-2">Yuqori natijalar</h3>
            <p className="text-green-100">
              Maktab bitiruvchilarining 94% OTMlarga kirishi respublikadagi
              eng yuqori ko'rsatkichlardan biri hisoblanadi. 30 dan ortiq
              bitiruvchimiz DTM testida 190+ ball to'pladi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
