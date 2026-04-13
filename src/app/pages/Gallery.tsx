import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { 
  Camera, 
  Image, 
  Video, 
  Calendar, 
  ZoomIn, 
  Heart, 
  Share2, 
  X,
  Download,
  Sparkles,
  LayoutGrid,
  TrendingUp,
  Building2,
  Users,
  Trophy,
  Search,
  Filter,
  Eye
} from "lucide-react";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [stats, setStats] = useState({
    total: 0,
    views: 0,
    likes: 0
  });

  // Kategoriyalar
  const categories = [
    { id: "all", name: "Hammasi", icon: LayoutGrid },
    { id: "building", name: "Maktab binosi", icon: Building2 },
    { id: "classes", name: "Dars jarayoni", icon: Users },
    { id: "events", name: "Tadbirlar", icon: Calendar },
    { id: "sports", name: "Sport", icon: Trophy },
  ];

  // API dan ma'lumot olish
  useEffect(() => {
    fetchGalleryPhotos();
  }, []);

  const fetchGalleryPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/photos/`);
      
      if (!response.ok) {
        throw new Error('Ma\'lumot olishda xatolik');
      }
      
      const data = await response.json();
      console.log('Galereya rasmlari:', data);
      
      const photosData = data.results || data;
      setPhotos(photosData);
      
      // Statistikani hisoblash
      const totalViews = photosData.reduce((sum, p) => sum + (p.views || 0), 0);
      const totalLikes = photosData.reduce((sum, p) => sum + (p.likes || 0), 0);
      
      setStats({
        total: photosData.length,
        views: totalViews,
        likes: totalLikes
      });
      
      setError(null);
    } catch (err) {
      console.error('Xatolik:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filtrlangan rasmlar
  const getFilteredPhotos = () => {
    let filtered = photos;
    
    // Kategoriya bo'yicha filtr
    if (selectedCategory !== "all") {
      filtered = filtered.filter(photo => photo.category === selectedCategory);
    }
    
    // Qidiruv bo'yicha filtr
    if (searchTerm) {
      filtered = filtered.filter(photo => 
        photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const filteredPhotos = getFilteredPhotos();

  // Kategoriya uchun rasm sonini olish
  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return photos.length;
    return photos.filter(p => p.category === categoryId).length;
  };

  // Yuklanayotganda
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-500">Rasmlar yuklanmoqda...</p>
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
              <Camera className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-red-500 mb-2">Xatolik yuz berdi</p>
            <p className="text-gray-500 text-sm mb-4">{error}</p>
            <button 
              onClick={fetchGalleryPhotos}
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
        
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-zoom-in {
          animation: zoomIn 0.3s ease-out forwards;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.15);
        }
        
        .modal-backdrop {
          backdrop-filter: blur(20px);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
              <Camera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">69-IDUM • Galereya</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Maktab <span className="text-blue-600 dark:text-blue-400">galereyasi</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Maktab hayotidan lavhalar va esdalik suratlar
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in">
              <div className="inline-flex p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mb-3">
                <Camera className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.total}</div>
              <div className="text-gray-600 dark:text-gray-400">Jami suratlar</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex p-3 bg-green-50 dark:bg-green-900/30 rounded-xl mb-3">
                <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.views}</div>
              <div className="text-gray-600 dark:text-gray-400">Ko'rishlar</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex p-3 bg-red-50 dark:bg-red-900/30 rounded-xl mb-3">
                <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stats.likes}</div>
              <div className="text-gray-600 dark:text-gray-400">Like'lar</div>
            </div>
          </div>

          {/* Search */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rasm qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className={`text-xs ${
                  selectedCategory === category.id ? 'text-white/80' : 'text-gray-400'
                }`}>
                  ({getCategoryCount(category.id)})
                </span>
              </button>
            ))}
          </div>

          {/* Active Category Info */}
          {selectedCategory !== "all" && (
            <div className="text-center mb-6 animate-fade-in-up">
              <p className="text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </span> - {filteredPhotos.length} ta surat
              </p>
            </div>
          )}

          {/* Photo Grid */}
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-20 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                <Camera className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">Hech qanday rasm topilmadi</p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Qidiruvni tozalash
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => {
                    setSelectedPhoto(photo);
                    setIsModalOpen(true);
                  }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <ImageWithFallback
                      src={photo.image ? `${import.meta.env.VITE_API_URL}${photo.image}` : "/default-image.jpg"}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-1">{photo.title}</h3>
                      <p className="text-sm text-gray-200 mb-2 line-clamp-2">{photo.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs">
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            <span>{photo.likes || 0}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{photo.views || 0}</span>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="p-1.5 bg-white/20 rounded-full hover:bg-white/30 transition"
                        >
                          <ZoomIn className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/50 backdrop-blur text-white px-2 py-1 rounded-full text-xs">
                      {categories.find(c => c.id === photo.category)?.name || photo.category}
                    </span>
                  </div>
                  
                  {/* Date Badge */}
                  {photo.date && (
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/50 backdrop-blur text-white px-2 py-1 rounded-full text-xs">
                        {photo.date}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-2xl p-8 text-white animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8 text-center">Raqamlarda galereya</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-1">{stats.total}+</div>
                <div className="text-sm text-blue-100">Foto suratlar</div>
              </div>
              <div className="hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm text-blue-100">Video lavhalar</div>
              </div>
              <div className="hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm text-blue-100">Tadbirlar</div>
              </div>
              <div className="hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-1">{stats.views}+</div>
                <div className="text-sm text-blue-100">Ko'rishlar</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-black/90 dark:bg-black/95 animate-zoom-in" 
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-[60vh] overflow-hidden">
              <ImageWithFallback
                src={selectedPhoto.image ? `${import.meta.env.VITE_API_URL}${selectedPhoto.image}` : "/default-image.jpg"}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedPhoto.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedPhoto.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500">
                {selectedPhoto.date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedPhoto.date}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{selectedPhoto.likes || 0} like</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{selectedPhoto.views || 0} ko'rish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}