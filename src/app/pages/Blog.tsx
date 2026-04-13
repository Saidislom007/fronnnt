import { 
  Calendar, 
  User, 
  MessageCircle, 
  ArrowRight, 
  Search, 
  Filter, 
  Sparkles, 
  Eye, 
  Heart, 
  Share2, 
  Tag, 
  Clock, 
  ChevronRight,
  BookOpen,      // ← BU QO'SHILDI!
  Award,
  TrendingUp,
  Globe
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function Blog() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Hammasi");
  const [stats, setStats] = useState({
    total: 0,
    views: 0,
    comments: 0
  });

  // API dan ma'lumot olish
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:8000/api/blog/');
      
      if (!response.ok) {
        throw new Error('Ma\'lumot olishda xatolik');
      }
      
      const data = await response.json();
      console.log('Blog postlar:', data);
      
      const postsData = data.results || data;
      setPosts(postsData);
      
      // Featured postni aniqlash
      const featured = postsData.find(p => p.featured) || postsData[0];
      setFeaturedPost(featured);
      
      // Statistikani hisoblash
      const totalViews = postsData.reduce((sum, p) => sum + (p.views || 0), 0);
      const totalComments = postsData.reduce((sum, p) => sum + (p.comments_count || 0), 0);
      
      setStats({
        total: postsData.length,
        views: totalViews,
        comments: totalComments
      });
      
      setError(null);
    } catch (err) {
      console.error('Xatolik:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Kategoriyalarni dinamik olish
  const categories = [
    "Hammasi",
    ...new Set(posts.map(post => post.category))
  ];

  // Filtrlangan postlar
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Hammasi" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Featured postdan tashqari postlar
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost?.id);

  // Yuklanayotganda
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-500">Maqolalar yuklanmoqda...</p>
          </div>
        </div>
      </div>
    );
  }

  // Xatolik bo'lsa
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <User className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-red-500 mb-2">Xatolik yuz berdi</p>
            <p className="text-gray-500 text-sm mb-4">{error}</p>
            <button 
              onClick={fetchBlogPosts}
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.15);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">69-IDUM • Direktor blogi</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Direktor <span className="text-blue-600 dark:text-blue-400">blogi</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Maslahatlar, yangiliklar va fikr-mulohazalar
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in">
              <div className="inline-flex p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mb-3">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.total}</div>
              <div className="text-gray-600 dark:text-gray-400">Jami maqolalar</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex p-3 bg-green-50 dark:bg-green-900/30 rounded-xl mb-3">
                <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.views}</div>
              <div className="text-gray-600 dark:text-gray-400">Ko'rishlar</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl mb-3">
                <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.comments}</div>
              <div className="text-gray-600 dark:text-gray-400">Izohlar</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 animate-fade-in-up">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Maqola qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">{filteredPosts.length} ta maqola</span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
                {category !== "Hammasi" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({posts.filter(p => p.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === "Hammasi" && (
            <div className="mb-12 animate-fade-in-up">
              <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-[350px] overflow-hidden">
                    <ImageWithFallback
                      src={featuredPost.image || "/default-blog.jpg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        ⭐ Tavsiya etilgan
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm w-fit mb-4">
                      <Tag className="w-3 h-3" />
                      {featuredPost.category}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {featuredPost.comments_count || 0} izoh
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views || 0} ko'rish
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group"
                    >
                      To'liq o'qish
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          {regularPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                <Calendar className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">Hech qanday maqola topilmadi</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image || "/default-blog.jpg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    <button className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors" />
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views || 0}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.comments_count || 0}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      Davomini o'qish
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* About Director's Blog */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-2xl p-8 text-white animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-white/20 backdrop-blur w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 animate-float">
                <User className="h-10 w-10" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Direktor haqida</h2>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  Erkinov Ziyodullo Rahimovich - pedagogika fanlari nomzodi, 28 yillik
                  tajribaga ega. Har hafta o'quvchilar, ota-onalar va o'qituvchilar
                  uchun foydali maslahatlar, yangiliklar va fikr-mulohazalar bilan
                  bo'lishadi.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  Blogda ta'lim, tarbiya, sport va maktab hayoti bilan bog'liq turli
                  mavzular yoritiladi. Savollaringiz bo'lsa, izohlar qoldiring!
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <div className="flex items-center gap-2 text-sm text-blue-200">
                    <BookOpen className="w-4 h-4" />
                    <span>39 yil tajriba</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-200">
                    <Heart className="w-4 h-4" />
                    <span>100+ maqola</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-200">
                    <MessageCircle className="w-4 h-4" />
                    <span>500+ izoh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-gray-100 dark:border-gray-700 animate-fade-in-up">
            <Sparkles className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Yangiliklardan xabardor bo'ling
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Direktor blogidagi eng so'nggi maqolalarni email orqali oling
            </p>
            <div className="flex max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                Obuna bo'lish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}