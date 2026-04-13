import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail, Phone, Award, BookOpen, Users, Star, Clock, GraduationCap, Heart, Trophy, Sparkles, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    highCategory: 0,
    avgExperience: 0
  });

  // API dan ma'lumot olish
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      // Backend API manzili
      const response = await fetch('http://127.0.0.1:8000/api/teachers/');
      
      if (!response.ok) {
        throw new Error('Ma\'lumot olishda xatolik');
      }
      
      const data = await response.json();
      console.log('API dan kelgan ma\'lumot:', data);
      
      // API dan results ichida keladi
      let teachersData = [];
      if (data.results) {
        teachersData = data.results;
      } else if (Array.isArray(data)) {
        teachersData = data;
      }
      
      setTeachers(teachersData);
      
      // Statistikani hisoblash
      const total = teachersData.length;
      const highCategory = teachersData.filter(t => t.category === 'Oliy toifali').length;
      
      // Tajribani hisoblash (yil sonini olish)
      let totalExp = 0;
      teachersData.forEach(t => {
        const exp = parseInt(t.experience);
        if (!isNaN(exp)) totalExp += exp;
      });
      const avgExperience = teachersData.length > 0 ? Math.round(totalExp / teachersData.length) : 0;
      
      setStats({
        total: total || teachersData.length,
        highCategory: highCategory || 0,
        avgExperience: avgExperience || 0
      });
      
      setError(null);
    } catch (err) {
      console.error('Xatolik:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Yuklanayotganda
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-500">O'qituvchilar ma'lumotlari yuklanmoqda...</p>
          </div>
        </div>
      </div>
    );
  }

  // Xatolik bo'lsa
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-red-500 mb-2">Xatolik yuz berdi</p>
            <p className="text-gray-500 text-sm mb-4">{error}</p>
            <button 
              onClick={fetchTeachers}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Qayta urunish
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">69-IDUM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O'qituvchilar
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bizning tajribali va malakali pedagog jamoamiz ({teachers.length} ta)
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 text-center hover-lift animate-scale-in">
              <div className="inline-flex p-3 bg-white/20 rounded-xl mb-3">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-1">{stats.total}</div>
              <div className="text-sm text-blue-100">Jami o'qituvchilar</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex p-3 bg-white/20 rounded-xl mb-3">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-1">{stats.highCategory}</div>
              <div className="text-sm text-green-100">Oliy toifali</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex p-3 bg-white/20 rounded-xl mb-3">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-1">{stats.avgExperience}</div>
              <div className="text-sm text-purple-100">O'rtacha tajriba (yil)</div>
            </div>
          </div>

          {/* Teachers Grid */}
          {teachers.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <Users className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">Hozircha o'qituvchilar mavjud emas</p>
              <p className="text-gray-400 text-sm mt-2">Admin panel orqali o'qituvchi qo'shing</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teachers.map((teacher, index) => (
                <div
                  key={teacher.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                 {/* Image Container */}
<div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
  <ImageWithFallback
    src={teacher.image ? teacher.image : "/default-avatar.jpg"}
    alt={teacher.name}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute top-3 right-3">
    <div className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm ${
      teacher.category === 'Oliy toifali' 
        ? 'bg-yellow-400 text-yellow-900' 
        : 'bg-gray-600 text-white'
    }`}>
      {teacher.category === 'Oliy toifali' ? '⭐ Oliy toifali' : '📚 1-toifali'}
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
    <div className="flex items-center gap-2 text-white text-xs">
      <Clock className="w-3 h-3" />
      <span>Tajriba: {teacher.experience} yil</span>
    </div>
  </div>
</div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-3">
                      <div className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full mb-2">
                        {teacher.subject}
                      </div>
                      <h3 className="font-bold text-gray-900 text-base leading-tight">
                        {teacher.name}
                      </h3>
                      {teacher.qualification && (
                        <p className="text-xs text-gray-500 mt-1">{teacher.qualification}</p>
                      )}
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-4">
                      <p className="line-clamp-2">{teacher.category}</p>
                      {teacher.students_count > 0 && (
                        <p className="text-xs mt-1">📚 {teacher.students_count}+ o'quvchi</p>
                      )}
                    </div>
                    
                    {/* Contact Buttons */}
                    <div className="flex gap-2 pt-3 border-t border-gray-100">
                      <button 
                        onClick={() => window.location.href = `mailto:${teacher.email}`}
                        className="flex-1 flex items-center justify-center gap-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all py-2 rounded-lg"
                      >
                        <Mail className="w-3 h-3" />
                        Email
                      </button>
                      <button 
                        onClick={() => window.location.href = `tel:${teacher.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all py-2 rounded-lg"
                      >
                        <Phone className="w-3 h-3" />
                        Telefon
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Additional Info Section */}
          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Malaka oshirish</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Barcha o'qituvchilarimiz muntazam ravishda malaka oshirish kurslarida qatnashadilar 
                  va zamonaviy ta'lim metodlarini o'rganishadi. Har yili xalqaro sertifikatlar va treninglar tashkil etiladi.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Tajriba almashish</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  O'qituvchilarimiz respublika va xalqaro darajadagi konferensiya, seminar va treninglarda 
                  faol ishtirok etadilar. Eng yaxshi tajribalarni hamkasblari bilan baham ko'radilar.
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-12 text-center py-8 border-t border-gray-100">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <p className="text-gray-500 italic max-w-2xl mx-auto">
              "Eng yaxshi o'qituvchi - bu bilim berish bilan birga, o'quvchining qalbini ham tarbiyalaydigan ustozdir"
            </p>
            <p className="text-sm text-gray-400 mt-2">- 69-IDUM pedagogik jamoasi</p>
          </div>
        </div>
      </div>
    </>
  );
}