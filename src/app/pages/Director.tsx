import { Award, BookOpen, Users, Target, Quote, Star, Heart, Mail, Phone, MapPin, Calendar, ChevronRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function Director() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Modern Hero Section with Parallax */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20" />
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              >
                <Sparkles className="w-4 h-4 text-white/20" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white text-sm font-medium">Rahbariyat</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Maktab
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Direktori</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ta'lim sifati va kelajak avlod tarbiyasi bizning asosiy maqsadimiz
            </p>
            <div className="mt-8 animate-bounce-slow">
              <ChevronRight className="w-6 h-6 text-white/60 mx-auto rotate-90" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Director Profile - Premium Card */}
        <div className="animate-on-scroll" id="profile">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition duration-700" />
            
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Image Section with Overlay Effects */}
                <div className="lg:col-span-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                  <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10" />
                  <img 
                    src="/rasm2.jpg" 
                    alt="Direktor" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    style={{ minHeight: '500px', objectPosition: 'top 20% center' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-900">Faoliyatda</span>
                      </div>
                    </div>
                  </div>
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-2 gap-3">
                    <div className="bg-black/50 backdrop-blur-md rounded-xl p-3">
                      <p className="text-2xl font-bold text-white">28+</p>
                      <p className="text-xs text-blue-200">Yil tajriba</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-md rounded-xl p-3">
                      <p className="text-2xl font-bold text-white">12+</p>
                      <p className="text-xs text-blue-200">Direktorlik</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                      <Sparkles className="w-4 h-4" />
                      Rahbar
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Erkinov Ziyodullo
                    </h2>
                    <p className="text-xl text-gray-500">Rahimovich</p>
                  </div>

                  {/* Info Cards Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Award, label: "Lavozimi", value: "Maktab direktori", color: "blue" },
                      { icon: BookOpen, label: "Ma'lumoti", value: "Pedagogika fanlari nomzodi", color: "purple" },
                      { icon: Users, label: "Tajribasi", value: "28 yil pedagogik", color: "green" },
                      { icon: Target, label: "Mutaxassisligi", value: "Matematika o'qituvchisi", color: "orange" },
                    ].map((item, idx) => (
                      <div key={idx} className="group/card p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                        <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center mb-3 group-hover/card:scale-110 transition-transform`}>
                          <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                        </div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="font-semibold text-gray-900">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Awards Section */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-amber-600" />
                      <h3 className="font-bold text-gray-900">Mukofotlar va unvonlar</h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        { medal: "🥇", title: "A'lo darajali o'qituvchi", year: "2018", color: "amber" },
                        { medal: "🏅", title: "Xalq ta'limi ustasi", year: "2020", color: "orange" },
                        { medal: "⭐", title: "Respublika eng yaxshi direktori", year: "2022", color: "yellow" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item.medal}</span>
                            <span className="font-medium text-gray-700">{item.title}</span>
                          </div>
                          <span className={`text-sm text-${item.color}-600 bg-${item.color}-100 px-3 py-1 rounded-full`}>
                            {item.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Director's Message - Premium Quote Section */}
        <div className="animate-on-scroll mt-20" id="message">
          <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-20 p-10 md:p-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <Quote className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Direktor so'zi</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
                </div>
                
                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  {[
                    "Hurmatli o'quvchilar, ota-onalar va hamkasblar! Sizlarni 12-sonli umumiy o'rta ta'lim maktabi rasmiy saytida ko'rganimdan xursandman.",
                    "Bizning maktabimiz 1985 yilda o'z faoliyatini boshlagan va shu vaqt davomida minglab bilimli, ma'rifatli yoshlarni hayotga tayyorlab kelmoqda. Bugungi kunda maktabimizda 850 ta o'quvchi va 60 ta malakali pedagog faoliyat yuritmoqda.",
                    "Biz nafaqat bilim berish, balki o'quvchilarimizni har tomonlama rivojlangan, vatanparvar, zamonaviy talablar darajasida tayyorlashni maqsad qilganmiz. Maktabimizda zamonaviy laboratoriyalar, kompyuter xonalari, sport zali va kutubxona mavjud.",
                    "O'quvchilarimiz har yili viloyat va respublika miqyosidagi olimpiadalarda, tanlovlarda ishtirok etib, yuqori natijalarga erishadilar. Sport sohasida ham maktabimiz o'z mavqeiga ega.",
                    "Bizning eng asosiy maqsadimiz - har bir o'quvchining iste'dodini ochish va uni rivojlantirishdir. Biz bu yo'lda davom etamiz va sizlarni ham ushbu jarayonda faol ishtirokchilar bo'lishingizga ishonaman."
                  ].map((text, idx) => (
                    <p key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                      {text}
                    </p>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/20 text-center">
                  <p className="text-blue-200 mb-2">Hurmat bilan,</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">Erkinov Ziyodullo Rahimovich</p>
                  <p className="text-blue-300 mt-1">Maktab direktori</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission - Premium Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {[
            {
              title: "Maqsadimiz",
              icon: Target,
              text: "Har bir o'quvchini bilimli, axloqli, vatanparvar va zamonaviy talablar darajasida tayyorlash. O'quvchilarning ijodiy va aqliy qobiliyatlarini rivojlantirish, ularni mustaqil fikrlashga o'rgatish.",
              gradient: "from-blue-600 to-blue-400",
              color: "blue"
            },
            {
              title: "Vazifamiz",
              icon: Heart,
              text: "Zamonaviy ta'lim texnologiyalaridan foydalangan holda sifatli ta'limni tashkil etish. O'quvchilarning fan, sport va san'at sohasidagi iste'dodlarini aniqlash va rivojlantirish.",
              gradient: "from-green-600 to-emerald-400",
              color: "green"
            }
          ].map((item, idx) => (
            <div key={idx} className="animate-on-scroll group" id={`vision-${idx}`}>
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl blur" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))`, ...(item.color === 'blue' ? { '--tw-gradient-from': '#2563eb', '--tw-gradient-to': '#3b82f6' } : { '--tw-gradient-from': '#10b981', '--tw-gradient-to': '#34d399' }) }} />
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                  <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                  <div className="p-8">
                    <div className={`w-20 h-20 rounded-2xl bg-${item.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-10 h-10 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.text}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-gray-400 group-hover:text-gray-600 transition-colors">
                      <span className="text-sm font-medium">Batafsil</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}