import { Link } from "react-router";
import {
  Users,
  Award,
  Image as ImageIcon,
  Phone,
  Newspaper,
  ArrowRight,
  BookOpen,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Heart,
  Sparkles,
  Quote,
  Play,
  ChevronRight,
  Clock,
  UserCheck,
  Trophy,
  Target,
  Zap,
  GraduationCap,
  CheckCircle,
  ExternalLink,
  Mail,
  MessageCircle,
  Youtube,
  Instagram,
  Facebook,
  ChevronLeft,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedCounter } from "../components/AnimatedCounter";

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    {
      title: "O'qituvchilar",
      icon: Users,
      href: "/teachers",
      description: "45+ tajribali pedagog",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
      color: "blue",
    },
    {
      title: "Yangiliklar",
      icon: Newspaper,
      href: "/blog",
      description: "So'nggi yangiliklar",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
      color: "green",
    },
    {
      title: "Yutuqlar",
      icon: Award,
      href: "/achievements",
      description: "128 ta sovrin",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.3,
      color: "yellow",
    },
    {
      title: "Galereya",
      icon: ImageIcon,
      href: "/gallery",
      description: "1500+ foto va video",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4,
      color: "purple",
    },
    {
      title: "Aloqa",
      icon: Phone,
      href: "/contact",
      description: "24/7 bog'laning",
      gradient: "from-red-500 to-rose-500",
      delay: 0.5,
      color: "red",
    },
  ];

  const achievements = [
    {
      year: "2024",
      title: "Eng innovatsion maktab",
      description: "Viloyat miqyosidagi tanlovda 1-o'rin",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      year: "2023",
      title: "Xalqaro matematika olimpiadasi",
      description: "3 ta oltin, 2 ta kumush medal",
      icon: Star,
      color: "from-blue-400 to-blue-600",
    },
    {
      year: "2023",
      title: "Eng yaxshi o'quv dasturi",
      description: "Respublika ta'lim forumida taqdirlandi",
      icon: Award,
      color: "from-green-400 to-green-600",
    },
  ];

  const testimonials = [
    {
      name: "Karimov Aziz",
      role: "Bitiruvchi 2024",
      image: "/student1.jpg",
      text: "Bu maktab meni nafaqat bilim, balki hayotiy ko'nikmalar bilan ham qurollantirdi. O'qituvchilar har bir o'quvchiga alohida e'tibor berishadi.",
      rating: 5,
    },
    {
      name: "Rustamova Malika",
      role: "Ota-ona",
      image: "/parent1.jpg",
      text: "Farzandimning muvaffaqiyatlari meni juda xursand qiladi. Maktabdagi zamonaviy yondashuv va professional o'qituvchilar tufayli u sevimli fanlarini topdi.",
      rating: 5,
    },
    {
      name: "Shodmonov Jasur",
      role: "10-sinf o'quvchisi",
      image: "/student2.jpg",
      text: "Robototexnika to'garagi va IT darslari eng sevimli mashg'ulotlarimga aylandi. Kelajakda dasturchi bo'lishni orzu qilaman.",
      rating: 5,
    },
  ];

  const news = [
    {
      title: "Xalqaro konferensiyada ishtirok",
      date: "15.03.2026",
      image: "/ustozlar.jpg",
      category: "Tadbir",
      excerpt: "O'quvchilarimiz Buxoroda bo'lib o'tgan yosh olimlar konferensiyasida 5 ta loyiha bilan ishtirok etishdi.",
    },
    {
      title: "Yangi sport zali ochildi",
      date: "10.03.2026",
      image: "/sport.jpg",
      category: "Yangilik",
      excerpt: "Zamonaviy jihozlar bilan ta'minlangan 500 kv.m sport zali o'z eshiklarini ochdi.",
    },
    {
      title: "Bitiruvchilar uchrashuvi",
      date: "05.03.2026",
      image: "/chet.jpg",
      category: "An'ana",
      excerpt: "30 yillik an'anaga aylangan bitiruvchilar uchrashuvida 200 dan ortiq mehmon qatnashdi.",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Maqsadli ta'lim",
      description: "Har bir o'quvchining qobiliyatiga qarab individual yondashuv",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Zap,
      title: "Zamonaviy texnologiyalar",
      description: "AI va VR texnologiyalari asosida interaktiv darslar",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: Heart,
      title: "Qulay muhit",
      description: "Psixologik jihatdan sog'lom va ijodiy muhit",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      icon: TrendingUp,
      title: "Yuqori natijalar",
      description: "85% bitiruvchilar grant asosida o'qishga kiradi",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
  ];

  const socialLinks = [
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: MessageCircle, href: "#", color: "hover:text-green-600" },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="overflow-hidden bg-white dark:bg-gray-950">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{
            y: scrollY * 0.5,
          }}
        >
          <img 
            src="/maktab.jpg" 
            alt="Maktab binosi" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
        </motion.div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">O'zbekiston Top 10 maktabi</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Kelajakni
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                bugundan quring
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed"
            >
              69-IDUM - innovatsion ta'lim, tajribali ustozlar va 
              zamonaviy infratuzilma bilan kelajak avlodni tayyorlaymiz.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <span className="relative z-10">Batafsil ma'lumot</span>
                <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVideoPlaying(true)}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                <Play className="h-5 w-5 fill-white" />
                Video namoyish
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: "39", label: "Yillik tajriba" },
                { value: "45+", label: "Mutaxassis" },
                { value: "1500+", label: "Bitiruvchilar" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
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
          <ChevronRight className="h-4 w-4 rotate-90" />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute right-8 bottom-8 flex flex-col gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, x: -5 }}
              className={`text-white/60 hover:text-white transition-colors ${social.color}`}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Video Modal - O'zbekcha video */}
      <AnimatePresence>
        {videoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video player */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                >
                  {/* O'zingizning video faylingiz nomini yozing */}
                  <source src="/maktab-video.mp4" type="video/mp4" />
                  <source src="/maktab-video.webm" type="video/webm" />
                  Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
                </video>
              </div>

              {/* Video info */}
              <div className="absolute -bottom-16 left-0 right-0 text-white/80 text-center">
                <p className="text-lg">69-IDUM maktabi - Bilim maskani</p>
              </div>

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setVideoPlaying(false)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X className="h-8 w-8" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Nega aynan{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                69-IDUM?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Eng yaxshi ta'lim va rivojlanish imkoniyatlari
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  animate={{
                    scale: hoveredCard === index ? 1.5 : 1,
                    opacity: hoveredCard === index ? 0.1 : 0,
                  }}
                  className={`absolute inset-0 ${feature.bgColor}`}
                />
                
                <div className={`${feature.color} mb-4`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            
            <div className="relative grid lg:grid-cols-2 gap-8">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] lg:h-full"
              >
                <img 
                  src="/rasm2.jpg" 
                  alt="Direktor Erkinov Ziyodullo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Quote Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white border border-white/30"
                >
                  <Quote className="h-4 w-4 inline mr-2" />
                  <span className="text-sm">30+ yillik tajriba</span>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 lg:p-12 flex flex-col justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6 w-fit"
                >
                  <UserCheck className="h-4 w-4" />
                  <span className="text-sm font-medium">Maktab direktori</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl lg:text-4xl font-bold mb-2"
                >
                  Erkinov Ziyodullo
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 dark:text-gray-400 mb-6"
                >
                  Pedagogika fanlari nomzodi
                </motion.p>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative mb-8"
                >
                  <Quote className="absolute -top-4 -left-2 h-10 w-10 text-blue-200 dark:text-gray-700" />
                  <p className="relative text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-8">
                    "Har bir bola - bu alohida olam. Bizning vazifamiz - shu olamni kashf etishga yordam berish 
                    va ularning eng yaxshi versiyasini yaratish."
                  </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-3 gap-4 mb-8"
                >
                  {[
                    { value: "39", label: "Ish staji" },
                    { value: "1500+", label: "Bitiruvchilar" },
                    { value: "50+", label: "Mukofotlar" },
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    to="/director"
                    className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                  >
                    Direktor bilan tanishing
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Tezkor <span className="font-bold">bo'limlar</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Sizni qiziqtirgan bo'limga tezda o'ting
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: link.delay }}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={link.href}
                  className="group relative block bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${link.gradient}`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`bg-${link.color}-50 dark:bg-gray-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
                    >
                      <link.icon className={`h-7 w-7 text-${link.color}-600 dark:text-${link.color}-400 group-hover:text-white transition-colors`} />
                    </motion.div>
                    
                    <h3 className="font-semibold mb-1 group-hover:text-white transition-colors">
                      {link.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                      {link.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              So'nggi <span className="font-bold">yutuqlar</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Maktabimiz faxrlanadigan natijalar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with Counter */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: 850, label: "O'quvchilar", delay: 0 },
              { icon: Award, value: 128, label: "Yutuqlar", delay: 0.1 },
              { icon: GraduationCap, value: 45, label: "O'qituvchilar", delay: 0.2 },
              { icon: Clock, value: 39, label: "Yillik tajriba", delay: 0.3 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, type: "spring" }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-4"
                >
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} />
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-4">
                So'nggi <span className="font-bold">yangiliklar</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Maktab hayotidan eng so'nggi xabarlar
              </p>
            </div>
            
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
            >
              <span>Barcha yangiliklar</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {item.category}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                    >
                      <span>Batafsil</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Ota-onalar <span className="font-bold">fikri</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Biz haqimizda ular nima deydi
            </p>
          </motion.div>

          <div className="relative">
            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>

            {/* Testimonials Slider */}
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: `-${activeTestimonial * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12">
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <Quote className="h-12 w-12 text-blue-600/20 mb-6" />
                      </motion.div>
                      
                      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          src="/rasm2.jpg"
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 dark:ring-gray-700"
                        />
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                          
                          {/* Rating */}
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeTestimonial === index 
                      ? "w-8 bg-blue-600" 
                      : "w-2 bg-gray-300 dark:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <img 
            src="/maktab.jpg" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/90" />
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Farzandingiz kelajagi uchun
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                to'g'ri tanlov qiling
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/80 mb-10 leading-relaxed"
            >
              Bizning maktabimizda farzandingiz nafaqat bilim, balki hayotiy ko'nikmalar,
              do'stlik va muvaffaqiyat sirlarini o'rganadi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
                >
                  <span>Qabulga yozilish</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Maktab bilan tanishing</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mt-12 text-white/70"
            >
              <motion.a
                whileHover={{ scale: 1.05, color: "#fff" }}
                href="tel:+998950571017"
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                <span>+998 95 057 10 17</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: "#fff" }}
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                <span>Andijon vil, Paxtaobod tumani</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: "#fff" }}
                href="mailto:ziyodulloerkinov906"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>ziyodulloerkinov906</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}