import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Dumbbell, Trophy, Calendar, Users } from "lucide-react";

export function SchoolLife() {
  const events = [
    {
      date: "8 mart 2026",
      title: "Xotin-qizlar bayrami",
      description: "O'qituvchi ayollarimizni tabriklash tadbirlari",
    },
    {
      date: "21 mart 2026",
      title: "Navro'z bayrami",
      description: "Milliy an'analarimizni nishonlash tadbirlari",
    },
    {
      date: "1 sentabr 2025",
      title: "Bilim kuni",
      description: "Yangi o'quv yilini tantanali ochish",
    },
    {
      date: "9 may 2025",
      title: "Xotira va qadrdonlik kuni",
      description: "Yurtimiz mustaqilligini ulug'lash tadbirlari",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Sport va maktab hayoti</h1>
        <p className="text-xl text-gray-600">
          Maktabimizning sport inshootlari va faol hayotidan
        </p>
      </div>

      {/* Sports Facilities */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Gym */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-64">
            <img 
              src="/chet.jpg" 
              alt="Direktor" 
              className="w-full h-full object-cover"
              style={{ minHeight: '400px' }}
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl">Sport zali</h2>
            </div>
            <p className="text-gray-700 mb-4">
              600 m² maydonga ega zamonaviy sport zali. Basketbol, voleybol va
              badminton uchun jihozlangan. Zamonaviy trenajyor xonasi mavjud.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>Basketbol va voleybol maydonlari</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>Zamonaviy trenajyor xonasi</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>Almashtirish xonalari va dush</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Football Field */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-64">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563485572254-f7726be2d989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBmb290YmFsbCUyMGZpZWxkJTIwc29jY2VyfGVufDF8fHx8MTc3MzQ4MjM5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Futbol maydoni"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl">Futbol maydoni</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Sun'iy qoplama bilan qoplangan professional futbol maydoni.
              Kechqurun yoritish tizimi va tomoshabinlar uchun tribunalar
              mavjud.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Sun'iy qoplama maydon</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Professional yoritish tizimi</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>200 kishilik tribuna</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* School Life Photos */}
      <div className="mb-12">
        <h2 className="text-3xl mb-6">Maktab hayotidan lavhalar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzQyNDUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dars jarayoni"
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="text-lg">Dars jarayoni</h3>
              <p className="text-gray-600 text-sm">
                Zamonaviy o'quv xonalarimizda darslar
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1771257808250-fa5fbffa8d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBldmVudCUyMGNlbGVicmF0aW9uJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczNDgyMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tadbirlar"
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="text-lg">Maktab tadbirlari</h3>
              <p className="text-gray-600 text-sm">
                Bayram va tantanali tadbirlarimiz
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1676444920926-c8a084ec4003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc3MzQ4MjM5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sport musobaqalari"
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="text-lg">Sport musobaqalari</h3>
              <p className="text-gray-600 text-sm">
                O'quvchilarimizning sport yutuqlari
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Events Calendar */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Calendar className="h-7 w-7 text-purple-600" />
          </div>
          <h2 className="text-3xl">Yaqinlashib kelayotgan tadbirlar</h2>
        </div>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-center flex-shrink-0">
                <div className="text-2xl">{event.date.split(" ")[0]}</div>
                <div className="text-sm">{event.date.split(" ")[1]}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg mb-1">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Teams */}
      <div className="mt-12 bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="h-8 w-8" />
          <h2 className="text-3xl">Sport jamoalari</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl mb-3">O'g'il bolalar jamoalari</h3>
            <ul className="space-y-2">
              <li>⚽ Futbol jamoasi (12-18 yosh)</li>
              <li>🏀 Basketbol jamoasi (13-17 yosh)</li>
              <li>♟️ Shaxmat to'garagi (10-16 yosh)</li>
              <li>🥋 Kurash to'garagi (11-17 yosh)</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl mb-3">Qiz bolalar jamoalari</h3>
            <ul className="space-y-2">
              <li>🏐 Voleybol jamoasi (12-17 yosh)</li>
              <li>🏀 Basketbol jamoasi (13-17 yosh)</li>
              <li>🏸 Badminton to'garagi (11-16 yosh)</li>
              <li>🎾 Tennis to'garagi (10-15 yosh)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
