import { 
  BookOpen, 
  Download, 
  FileText, 
  GraduationCap, 
  Search, 
  Sparkles, 
  Star,
  Eye,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

export function Library() {
  const [ebooks, setEbooks] = useState([]);
  const [textbooks, setTextbooks] = useState([]);
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("ebooks");

  useEffect(() => {
    fetchLibraryData();
  }, []);

  const fetchLibraryData = async () => {
    try {
      setLoading(true);
      
      // Elektron kitoblar
      const ebooksRes = await fetch(`${import.meta.env.VITE_API_URL}/api/library/?type=ebook`);
      const ebooksData = await ebooksRes.json();
      setEbooks(ebooksData.results || ebooksData);
      
      // Darsliklar
      const textbooksRes = await fetch(`${import.meta.env.VITE_API_URL}/api/library/?type=textbook`);
      const textbooksData = await textbooksRes.json();
      setTextbooks(textbooksData.results || textbooksData);
      
      // Qo'llanmalar
      const guidesRes = await fetch(`${import.meta.env.VITE_API_URL}/api/library/?type=guide`);
      const guidesData = await guidesRes.json();
      setGuides(guidesData.results || guidesData);
      
      setError(null);
    } catch (err) {
      console.error('Xatolik:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Yuklab olish funksiyasi
  const handleDownload = async (fileUrl, fileName) => {
    try {
      // To'liq URL ni yaratish
      const fullUrl = fileUrl.startsWith('http') 
        ? fileUrl 
        : `${import.meta.env.VITE_API_URL}${fileUrl}`;
      
      console.log('Yuklab olish URL:', fullUrl);
      
      // Fetch orqali faylni olish
      const response = await fetch(fullUrl);
      
      if (!response.ok) {
        throw new Error('Faylni yuklab olishda xatolik');
      }
      
      const blob = await response.blob();
      
      // Blob dan URL yaratish
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Download link yaratish
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName || 'download.pdf';
      document.body.appendChild(link);
      link.click();
      
      // Tozalash
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      
    } catch (err) {
      console.error('Yuklab olish xatosi:', err);
      alert('Faylni yuklab olishda xatolik yuz berdi');
    }
  };

  const getFilteredData = () => {
    let data = [];
    if (activeTab === "ebooks") data = ebooks;
    else if (activeTab === "textbooks") data = textbooks;
    else data = guides;
    
    return data.filter(item => 
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.author && item.author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.publisher && item.publisher.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const filteredData = getFilteredData();

  // Statistikalar
  const totalItems = ebooks.length + textbooks.length + guides.length;
  const totalEbooks = ebooks.length;
  const totalTextbooks = textbooks.length;
  const totalGuides = guides.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-500">Kutubxona ma'lumotlari yuklanmoqda...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <BookOpen className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-red-500 mb-2">Xatolik yuz berdi</p>
            <p className="text-gray-500 text-sm mb-4">{error}</p>
            <button 
              onClick={fetchLibraryData}
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

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">69-IDUM • Kutubxona</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Elektron <span className="text-blue-600 dark:text-blue-400">kutubxona</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Elektron kitoblar, darsliklar va o'quv qo'llanmalari - 24/7 bepul foydalanish
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in">
              <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{totalItems}+</div>
              <div className="text-gray-600 dark:text-gray-400">Jami kitoblar</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <FileText className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{totalEbooks}</div>
              <div className="text-gray-600 dark:text-gray-400">Elektron kitoblar</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <GraduationCap className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{totalTextbooks}</div>
              <div className="text-gray-600 dark:text-gray-400">Rasmiy darsliklar</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <Download className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{totalGuides}</div>
              <div className="text-gray-600 dark:text-gray-400">O'quv qo'llanmalar</div>
            </div>
          </div>

          {/* Search */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Kitob nomi yoki muallif..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up">
            {[
              { id: "ebooks", label: "📚 Elektron kitoblar", count: ebooks.length },
              { id: "textbooks", label: "📖 Rasmiy darsliklar", count: textbooks.length },
              { id: "guides", label: "📘 O'quv qo'llanmalar", count: guides.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-xs ${activeTab === tab.id ? 'text-white/80' : 'text-gray-400'}`}>
                  ({tab.count})
                </span>
              </button>
            ))}
          </div>

          {/* Items Grid */}
          {filteredData.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                <BookOpen className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">Hech qanday kitob topilmadi</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item, index) => (
                <div
                  key={item.id || index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl ${
                        activeTab === "ebooks" ? 'bg-blue-100 dark:bg-blue-900/50' :
                        activeTab === "textbooks" ? 'bg-green-100 dark:bg-green-900/50' :
                        'bg-purple-100 dark:bg-purple-900/50'
                      } flex items-center justify-center`}>
                        <FileText className={`w-6 h-6 ${
                          activeTab === "ebooks" ? 'text-blue-600' :
                          activeTab === "textbooks" ? 'text-green-600' :
                          'text-purple-600'
                        }`} />
                      </div>
                      {item.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                      {item.author ? `✍️ ${item.author}` : item.publisher ? `🏛️ ${item.publisher}` : item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        {item.format || 'PDF'}
                      </span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        {item.size}
                      </span>
                      {item.class_level && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          {item.class_level}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Eye className="w-3 h-3" />
                        <span>{item.downloads || 0} yuklama</span>
                      </div>
                      <button
                        onClick={() => handleDownload(item.file, `${item.title}.${item.format?.toLowerCase() || 'pdf'}`)}
                        className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 transition px-3 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30"
                      >
                        <Download className="w-4 h-4" />
                        Yuklab olish
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Information */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white rounded-2xl p-8 animate-fade-in-up">
            <h2 className="text-3xl mb-4">Kutubxonadan foydalanish</h2>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div>
                <h3 className="text-xl mb-3">O'quvchilar uchun</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Barcha materiallar bepul</li>
                  <li>• 24/7 onlayn kirish</li>
                  <li>• Cheksiz yuklab olish</li>
                  <li>• Yangi kitoblar har hafta</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-3">O'qituvchilar uchun</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• O'quv materiallari</li>
                  <li>• Metodikalar to'plami</li>
                  <li>• Test savollari bazasi</li>
                  <li>• Multimedia resurslar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}