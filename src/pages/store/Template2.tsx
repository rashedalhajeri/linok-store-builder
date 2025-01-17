import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Car, Instagram, MessageCircle, MessageSquare } from "lucide-react";
import { SearchBar } from "@/components/store/SearchBar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

const StoreTemplate2 = () => {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const { toast } = useToast();

  // Log the storeId to help with debugging
  console.log("Current storeId:", storeId);

  if (!storeId) {
    // Show error toast if storeId is missing
    toast({
      variant: "destructive",
      title: "خطأ",
      description: "لم يتم العثور على المتجر",
    });
    return null;
  }

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
      bgColor: "bg-gradient-to-tr from-purple-600 to-pink-500"
    },
    {
      id: 2,
      icon: MessageSquare,
      label: "تواصل عبر تليغرام",
      href: "https://t.me/store",
      bgColor: "bg-gradient-to-tr from-primary to-primary-light"
    },
    {
      id: 3,
      icon: MessageCircle,
      label: "راسلنا على الواتساب",
      href: "https://wa.me/1234567890",
      bgColor: "bg-gradient-to-tr from-green-500 to-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#403E43]">
      {/* Hero Section with Store Info */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#221F26]/80 via-[#1A1F2C]/80 to-[#403E43]/80">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-tr from-accent/20 to-accent-light/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 pt-12 pb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Store Logo */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="w-36 h-36 mb-2 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl 
                             transition-all duration-300 group-hover:shadow-2xl bg-[#221F26]/80 backdrop-blur-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1549924231-f129b911e442"
                    alt="متجر السيارات الفاخرة"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 group-hover:opacity-0 transition-opacity duration-300" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary/90 to-primary-light/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-lg"
                >
                  <span className="text-sm font-medium text-white">متجر معتمد</span>
                </motion.div>
              </motion.div>
              
              {/* Store Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  متجر السيارات الفاخرة
                </h1>
                <div className="flex items-center justify-center gap-2 text-white/90 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/10">
                  <MapPin className="w-5 h-5 text-primary-light" />
                  <span className="text-lg">الكويت - شارع الخليج العربي</span>
                </div>

                {/* Social Links */}
                <TooltipProvider>
                  <div className="flex items-center justify-center gap-4 mt-8">
                    {socialLinks.map((link) => (
                      <Tooltip key={link.id}>
                        <TooltipTrigger asChild>
                          <motion.button
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-3.5 rounded-xl shadow-lg transition-all ${link.bgColor} 
                                      hover:shadow-xl text-white relative group overflow-hidden`}
                            onClick={() => window.open(link.href, '_blank')}
                          >
                            <link.icon className="w-6 h-6 relative z-10" />
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#221F26]/90 backdrop-blur-sm border-primary/20 text-white">
                          <p>{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
              </motion.div>
            </div>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <SearchBar onSearch={(query) => console.log(query)} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-[#221F26]/50 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl 
                       transition-all cursor-pointer border border-white/5"
              onClick={() => navigate("/search/template2")}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary-light" />
                </div>
                <span className="font-medium text-sm text-center text-white/90">{category.name}</span>
                <span className="text-xs text-white/60">{category.count} إعلان</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Ads */}
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-6 text-white/90">إعلانات مميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredAds.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-[#221F26]/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                       transition-all cursor-pointer border border-white/5"
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
                  <span className={`px-3 py-1 rounded-full text-sm backdrop-blur-sm ${
                    ad.condition === "جديد" 
                    ? "bg-primary/80 text-white" 
                    : "bg-accent/80 text-white"
                  }`}>
                    {ad.condition}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1 text-white/90">{ad.title}</h3>
                <p className="text-primary-light font-bold text-xl mb-3">
                  {ad.price}
                </p>
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {ad.location}
                  </span>
                  <span>{ad.date}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-sm">
                  <span className="text-white/60">{ad.views} مشاهدة</span>
                  <span className="text-primary-light hover:text-primary transition-colors">
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
