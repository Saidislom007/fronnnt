import { Award, Trophy, Medal, Star, Sparkles, TrendingUp, Users, Calendar, ChevronRight, Quote, Zap, Heart, Crown, Target, Globe, Flame, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export function Achievements() {
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const achievements = {
    science: [
      {
        title: "Viloyat matematika olimpiadasi",
        award: "1-o'rin",
        year: "2025",
        student: "Karimov Azizbek (10-sinf)",
        medal: "🥇",
        level: "Viloyat",
      },
      {
        title: "Respublika fizika olimpiadasi",
        award: "2-o'rin",
        year: "2025",
        student: "Yusupova Madina (11-sinf)",
        medal: "🥈",
        level: "Respublika",
      },
      {
        title: "Viloyat kimyo olimpiadasi",
        award: "1-o'rin",
        year: "2024",
        student: "Toshmatov Sardor (10-sinf)",
        medal: "🥇",
        level: "Viloyat",
      },
      {
        title: "Respublika informatika olimpiadasi",
        award: "3-o'rin",
        year: "2024",
        student: "Rahimova Dilnoza (9-sinf)",
        medal: "🥉",
        level: "Respublika",
      },
    ],
    sports: [
      {
        title: "Viloyat futbol chempionati",
        award: "Chempion",
        year: "2025",
        team: "Maktab futbol jamoasi",
        medal: "🏆",
        level: "Viloyat",
      },
      {
        title: "Shahar basketbol musobaqasi",
        award: "2-o'rin",
        year: "2025",
        team: "Qizlar basketbol jamoasi",
        medal: "🥈",
        level: "Shahar",
      },
      {
        title: "Viloyat yengil atletika musobaqasi",
        award: "1-o'rin",
        year: "2024",
        student: "Ergashev Javohir (8-sinf)",
        medal: "🥇",
        level: "Viloyat",
      },
      {
        title: "Respublika shaxmat turniri",
        award: "3-o'rin",
        year: "2024",
        student: "Sodiqova Malika (7-sinf)",
        medal: "🥉",
        level: "Respublika",
      },
    ],
    contests: [
      {
        title: "Eng yaxshi sinf tanlovi",
        award: "G'olib",
        year: "2025",
        winner: "10-A sinf",
        medal: "🏅",
        level: "Maktab",
      },
      {
        title: "Ijodiy tanlov",
        award: "1-o'rin",
        year: "2025",
        student: "Nurmatova Dilnoza (9-sinf)",
        medal: "🥇",
        level: "Viloyat",
      },
      {
        title: "Kitob o'qish marafoni",
        award: "Chempion",
        year: "2024",
        student: "Xolmatov Aziz (8-sinf)",
        medal: "🏆",
        level: "Shahar",
      },
      {
        title: "Ingliz tili tanlovi",
        award: "1-o'rin",
        year: "2024",
        student: "Sobirova Nigora (11-sinf)",
        medal: "🥇",
        level: "Respublika",
      },
    ],
  };

  const allAchievements = [
    ...achievements.science.map(a => ({ ...a, category: 'science' })),
    ...achievements.sports.map(a => ({ ...a, category: 'sports' })),
    ...achievements.contests.map(a => ({ ...a, category: 'contests' })),
  ];

  const filteredAchievements = activeTab === 'all' 
    ? allAchievements 
    : allAchievements.filter(a => a.category === activeTab);

  const stats = [
    { icon: Trophy, value: 28, label: "1-o'rinlar", color: "yellow", gradient: "from-yellow-400 to-yellow-600", trend: "+12%" },
    { icon: Medal, value: 35, label: "2-o'rinlar", color: "gray", gradient: "from-gray-400 to-gray-600", trend: "+8%" },
    { icon: Award, value: 42, label: "3-o'rinlar", color: "orange", gradient: "from-orange-400 to-orange-600", trend: "+15%" },
    { icon: Star, value: 105, label: "Jami yutuqlar", color: "blue", gradient: "from-blue-400 to-blue-600", trend: "+25%" },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 20px rgba(59, 130, 246, 0); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 40px -12px rgba(0, 0, 0, 0.25);
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shine 2s infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white font-medium">Yutuqlar • 2024-2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Bizning <span className="gradient-text">Yutuqlarimiz</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                O'quvchilarimizning fan, sport va ijod sohasidagi muvaffaqiyatlari
              </p>
            </div>
          </div>
          
          {/* Wave */}
          <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${stat.gradient} text-white rounded-2xl p-6 text-center hover-lift animate-on-scroll`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
                <div className="mt-2 text-xs text-white/60">{stat.trend}</div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
            {[
              { id: 'all', label: "Barcha yutuqlar", icon: Star, color: "blue" },
              { id: 'science', label: "Fan olimpiadalari", icon: Award, color: "blue" },
              { id: 'sports', label: "Sport musobaqalari", icon: Trophy, color: "green" },
              { id: 'contests', label: "Tanlovlar", icon: Medal, color: "purple" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r from-${tab.color}-600 to-${tab.color}-700 text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredAchievements.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-on-scroll"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className={`h-2 ${
                  item.medal === '🥇' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                  item.medal === '🥈' ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                  item.medal === '🥉' ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                  'bg-gradient-to-r from-blue-400 to-purple-500'
                }`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{item.medal}</span>
                      <div>
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs">
                          <Target className="w-3 h-3" />
                          <span>{item.level}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.award.includes('1') || item.award.includes('Chempion') || item.award.includes('G\'olib')
                        ? 'bg-yellow-100 text-yellow-800'
                        : item.award.includes('2')
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {item.award}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Users className="w-4 h-4" />
                    <p className="text-sm">{item.student || item.team || item.winner}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{item.year} yil</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">Batafsil</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Awards Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-8 text-white hover-lift animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Crown className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Eng yaxshi o'quvchi</h3>
                  <p className="text-yellow-100">2024-2025 o'quv yili</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl">
                  🏆
                </div>
                <div>
                  <p className="text-xl font-bold">Karimov Azizbek</p>
                  <p className="text-yellow-100">10-A sinf o'quvchisi</p>
                  <p className="text-sm mt-1">Matematika fanidan respublika olimpiadasi g'olibi</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 text-white hover-lift animate-on-scroll delay-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Eng faol sinf</h3>
                  <p className="text-blue-100">2024-2025 o'quv yili</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl">
                  🎓
                </div>
                <div>
                  <p className="text-xl font-bold">10-A sinf</p>
                  <p className="text-blue-100">Sinf rahbari: M. Rahimova</p>
                  <p className="text-sm mt-1">10 ta olimpiada va tanlov g'oliblari</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent News */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold">So'nggi yutuqlar</h2>
            </div>
            <div className="space-y-4">
              {[
                { date: "14 mart 2026", text: "10-sinf o'quvchisi Karimov Azizbek viloyat matematika olimpiadasida 1-o'rinni qo'lga kiritdi!", icon: "🏆" },
                { date: "10 mart 2026", text: "Maktab futbol jamoasi viloyat chempionatida g'olib bo'ldi!", icon: "⚽" },
                { date: "5 mart 2026", text: "11-sinf o'quvchisi Yusupova Madina respublika fizika olimpiadasida 2-o'rinni egalladi!", icon: "🔬" },
                { date: "1 mart 2026", text: "9-sinf o'quvchisi Rahimova Dilnoza ingliz tili tanlovida 1-o'rinni qo'lga kiritdi!", icon: "📚" },
              ].map((news, idx) => (
                <div key={idx} className="group bg-white/5 backdrop-blur rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{news.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">{news.date}</div>
                      <p className="text-white leading-relaxed">{news.text}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-12 text-center py-10 border-t border-gray-100 animate-on-scroll">
            <Quote className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 italic max-w-2xl mx-auto">
              "Har bir yutuq - bu birgalikdagi mehnat, fidoyilik va maqsad sari intilishning natijasidir"
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Heart className="w-4 h-4 text-red-400" />
              <p className="text-sm text-gray-400">69-IDUM jamoasi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}