import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Calendar,
  Users,
  GraduationCap,
  Target,
  BookOpen,
  Award,
  Sparkles,
  Heart,
  Globe,
  Clock,
  Zap,
  TrendingUp,
  Shield,
  Star,
  ChevronRight,
  Quote,
  Building2,
  Library,
  FlaskConical,
  Trophy,
  Laptop,
  Dumbbell,
  ChevronLeft,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Play,
  X,
} from "lucide-react";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { 
      icon: Calendar, 
      value: 1985, 
      label: "Tashkil topgan", 
      gradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      delay: 0,
      suffix: "",
      description: "39 yillik tarix"
    },
    { 
      icon: Users, 
      value: 850, 
      label: "O'quvchilar", 
      gradient: "from-emerald-500 to-emerald-600",
      lightBg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      delay: 0.1,
      suffix: "+",
      description: "Faol o'quvchilar"
    },
    { 
      icon: GraduationCap, 
      value: 60, 
      label: "O'qituvchilar", 
      gradient: "from-violet-500 to-violet-600",
      lightBg: "bg-violet-50",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      delay: 0.2,
      suffix: "+",
      description: "Tajribali pedagog"
    },
    { 
      icon: Award, 
      value: 39, 
      label: "Yillik tajriba", 
      gradient: "from-amber-500 to-amber-600",
      lightBg: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      delay: 0.3,
      suffix: "",
      description: "Uzluksiz ta'lim"
    },
  ];

  const achievements = [
    { year: "2024", title: "Eng innovatsion maktab", desc: "Viloyat miqyosidagi tanlovda 1-o'rin", icon: Trophy, color: "from-yellow-400 to-yellow-600" },
    { year: "2023", title: "Xalqaro matematika olimpiadasi", desc: "3 ta oltin, 2 ta kumush medal", icon: Star, color: "from-blue-400 to-blue-600" },
    { year: "2023", title: "Eng yaxshi o'quv dasturi", desc: "Respublika ta'lim forumida taqdirlandi", icon: Award, color: "from-green-400 to-green-600" },
    { year: "2022", title: "Eng yaxshi maktab", desc: "Toshkent shahar reytingi 1-o'rin", icon: Trophy, color: "from-purple-400 to-purple-600" },
  ];

  const facilities = [
    { icon: FlaskConical, title: "Zamonaviy laboratoriyalar", desc: "Fizika, kimyo va biologiya fanlari bo'yicha to'liq jihozlangan", color: "blue", stats: "3 ta laboratoriya" },
    { icon: Laptop, title: "Kompyuter xonalari", desc: "50 ta zamonaviy kompyuter bilan jihozlangan 2 ta kompyuter xonasi", color: "emerald", stats: "50+ kompyuter" },
    { icon: Dumbbell, title: "Sport majmuasi", desc: "Zamonaviy sport zali, futbol va basketbol maydonlari", color: "orange", stats: "500 m²" },
    { icon: Library, title: "Kutubxona", desc: "15,000 dan ortiq kitob va zamonaviy o'quv qo'llanmalari", color: "purple", stats: "15,000+ kitob" },
  ];

  const values = [
    { icon: Heart, title: "Sifatli ta'lim", desc: "Eng zamonaviy uslublar bilan ta'lim berish", color: "rose" },
    { icon: Shield, title: "Axloqiy tarbiya", desc: "Yuksak axloq va odob-axloq qoidalari", color: "blue" },
    { icon: Zap, title: "Innovatsiya", desc: "Zamonaviy texnologiyalar va yangicha yondashuv", color: "amber" },
    { icon: Globe, title: "Xalqaro standartlar", desc: "Jahon ta'lim standartlariga mos", color: "emerald" },
  ];

  const historyEvents = [
    { year: "1985", title: "Maktab ochilishi", desc: "400 o'quvchi, 35 o'qituvchi bilan faoliyat boshladi", icon: Building2 },
    { year: "2010", title: "Maktab ta'miri", desc: "Binoning to'liq ta'miri va zamonaviy jihozlar", icon: Sparkles },
    { year: "2018", title: "Sport majmuasi", desc: "Yangi sport zali va maydonchalar qurilishi", icon: Dumbbell },
    { year: "2024", title: "Raqamlashtirish", desc: "AI va VR texnologiyalari joriy etildi", icon: Laptop },
  ];

  const [isVisible, setIsVisible] = useState({});

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

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
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
          50% { transform: translateY(-20px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes shine {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(59, 130, 246, 0.2); }
          50% { border-color: rgba(59, 130, 246, 0.6); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-shine { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); background-size: 200% 100%; animation: shine 2s infinite; }
        .animate-on-scroll { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }
        .hover-lift { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 25px 40px -12px rgba(0, 0, 0, 0.25); }
        .gradient-text { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hero-gradient { background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%); background-size: 200% 200%; animation: gradientShift 10s ease infinite; }
        .card-gradient { background: radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%); }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden hero-gradient min-h-[60vh] flex items-center">
        <motion.div 
          className="absolute inset-0"
          style={{ y, opacity }}
        >
          <img 
            src="/maktab.jpg" 
            alt="Maktab" 
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm text-white font-medium">69-IDUM • 39 yillik an'ana</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            >
              Maktab 
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> haqida</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              39 yillik tarix, 850+ o'quvchi, 60+ malakali pedagog — sifatli ta'lim va barkamol avlod maskani
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center mt-8"
            >
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:shadow-xl transition-all flex items-center gap-2">
                <Play className="w-4 h-4" />
                Video namoyish
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all">
                Maktabga tashrif
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-wider">SKROLL</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 mb-16 relative z-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className={`${stat.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`h-7 w-7 ${stat.iconColor}`} />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-gray-800 font-semibold text-sm">{stat.label}</div>
              <div className="text-gray-400 text-xs mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* History & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Tariximiz</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Maktab <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">tarixi</span>
            </h2>
            
            <div className="space-y-6">
              {historyEvents.map((event, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <event.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    {idx < historyEvents.length - 1 && (
                      <div className="absolute top-12 left-5 w-0.5 h-12 bg-gradient-to-b from-blue-200 to-transparent" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="text-sm font-bold text-blue-600 mb-1">{event.year}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-gray-500 text-sm">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border-l-4 border-blue-500 mt-6">
              <p className="text-gray-700 italic leading-relaxed">
                Bugungi kunda maktabimizda <strong className="text-gray-900">850 ta o'quvchi</strong> va 
                <strong className="text-gray-900"> 60 ta malakali pedagog</strong> faoliyat yuritmoqda.
                O'tgan 39 yil davomida <strong className="text-gray-900">5000+ bitiruvchi</strong> tayyorlandi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center animate-pulse">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">So'nggi yutuqlar</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-yellow-400">{item.year}</span>
                      <span className="text-white font-semibold text-sm">{item.title}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Jami yutuqlar soni</span>
                <span className="text-2xl font-bold text-white">128+</span>
              </div>
              <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Maqsadimiz</h2>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg">
                Har bir o'quvchini bilimli, axloqli, vatanparvar va zamonaviy
                talablar darajasida tayyorlash. O'quvchilarning ijodiy va aqliy
                qobiliyatlarini rivojlantirish, ularni mustaqil fikrlashga o'rgatish.
              </p>
              <div className="mt-6 flex items-center gap-2 text-blue-200 group-hover:gap-3 transition-all">
                <span className="text-sm">Batafsil</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Vazifamiz</h2>
              </div>
              <p className="text-emerald-100 leading-relaxed text-lg">
                Zamonaviy ta'lim texnologiyalaridan foydalanib sifatli ta'limni tashkil etish.
                O'quvchilarning fan, sport va san'at sohasidagi iste'dodlarini rivojlantirish.
                Har bir o'quvchiga individual yondashuv.
              </p>
              <div className="mt-6 flex items-center gap-2 text-emerald-200 group-hover:gap-3 transition-all">
                <span className="text-sm">Batafsil</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4 text-rose-600" />
              <span className="text-sm text-rose-600 font-medium">Qadriyatlarimiz</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Asosiy <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">qadriyatlar</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Biz quyidagi qadriyatlar asosida faoliyat yuritamiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-full bg-${value.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-600 font-medium">Imkoniyatlar</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Maktab <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">imkoniyatlari</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Zamonaviy infratuzilma va jihozlar bilan ta'minlangan maktabimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-${facility.color}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <facility.icon className={`w-7 h-7 text-${facility.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{facility.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400">{facility.stats}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-shine" />
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Quote className="w-8 h-8 text-white" />
            </motion.div>
            <p className="text-white text-xl md:text-2xl italic max-w-3xl mx-auto leading-relaxed">
              "Har bir bola - bu dunyo. Bizning vazifamiz - ularga o'z dunyosini kashf etishga yordam berish"
            </p>
            <div className="mt-6">
              <div className="w-12 h-12 rounded-full bg-white/20 mx-auto mb-2 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/90 font-medium">69-IDUM jamoasi</p>
              <p className="text-white/60 text-sm">39 yillik an'ana</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Farzandingiz kelajagi uchun to'g'ri tanlov</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Maktabimiz haqida batafsil ma'lumot olish va qabulga yozilish uchun biz bilan bog'laning
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Bog'lanish
            </button>
            <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-all flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Elektron pochta
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}