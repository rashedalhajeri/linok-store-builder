import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Car, Instagram, WhatsApp, MessageCircle } from "lucide-react";
import { SearchBar } from "@/components/store/SearchBar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const StoreTemplate2 = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "سيارات فاخرة", icon: Car, count: 150 },
    { id: 2, name: "سيارات رياضية", icon: Car, count: 89 },
    { id: 3, name: "سيارات عائلية", icon: Car, count: 234 },
    { id: 4, name: "سيارات اقتصادية", icon: Car, count: 167 },
  ];

  const featuredAds = [
    {
      id: 1,
      title: "مرسيدس S-Class 2023",
      price: "45,000 د.ك",
      location: "العاصمة",
      date: "اليوم",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "سيارات فاخرة",
      views: 156,
      condition: "جديد"
    },
    {
      id: 2,
      title: "بي ام دبليو X7 2024",
      price: "38,000 د.ك",
      location: "حولي",
      date: "أمس",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      category: "سيارات فاخرة",
      views: 98,
      condition: "مستعمل"
    },
    {
      id: 3,
      title: "لكزس LX 600 2024",
      price: "42,000 د.ك",
      location: "السالمية",
      date: "منذ يومين",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      category: "سيارات فاخرة",
      views: 234,
      condition: "جديد"
    }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: Instagram,
      label: "تابعنا على انستغرام",
      href: "https://instagram.com/store",
      color: "hover:text-pink-500"
    },
    {
      id: 2,
      icon: WhatsApp,
      label: "تواصل عبر واتساب",
      href: "https://wa.me/1234567890",
      color: "hover:text-green-500"
    },
    {
      id: 3,
      icon: MessageCircle,
      label: "راسلنا على تليغرام",
      href: "https://t.me/store",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with Store Info */}
      <div className="relative bg-gradient-to-b from-green-100/50 to-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 pt-12 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-xl relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1549924231-f129b911e442"
                  alt="متجر السيارات الفاخرة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl font-bold text-gray-800 mb-3">متجر السيارات الفاخرة</h1>
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="text-lg">الكويت - شارع الخليج العربي</span>
                </div>

                <TooltipProvider>
                  <div className="flex items-center justify-center gap-4">
                    {socialLinks.map((link) => (
                      <Tooltip key={link.id}>
                        <TooltipTrigger asChild>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-3 rounded-xl bg-white shadow-md transition-all ${link.color}`}
                            onClick={() => window.open(link.href, '_blank')}
                          >
                            <link.icon className="w-6 h-6" />
                          </motion.button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <SearchBar 
                placeholder="أبحث عن أول كلمتين من اسم الإعلان الرئيسي"
                onSearch={(query) => console.log(query)} 
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-green-100/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Rest of the content */}
      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
              onClick={() => navigate("/search/template2")}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="p-2 bg-[#F2FCE2] rounded-lg">
                  <category.icon className="w-6 h-6 text-gray-700" />
                </div>
                <span className="font-medium text-sm text-center">{category.name}</span>
                <span className="text-xs text-gray-500">{category.count} إعلان</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Ads */}
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-6">إعلانات مميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredAds.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
              onClick={() => navigate(`/ad/template2/${ad.id}`)}
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={ad.image} 
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {ad.category}
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    ad.condition === "جديد" 
                    ? "bg-green-500/80 text-white" 
                    : "bg-orange-500/80 text-white"
                  } backdrop-blur-sm`}>
                    {ad.condition}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{ad.title}</h3>
                <p className="text-green-600 font-bold text-xl mb-3">
                  {ad.price}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {ad.location}
                  </span>
                  <span>{ad.date}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                  <span>{ad.views} مشاهدة</span>
                  <span className="text-green-600 hover:text-green-700 transition-colors">
                    عرض التفاصيل
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate2;
