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

  console.log("Current storeId:", storeId);

  if (!storeId) {
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
    <div className="min-h-screen bg-[#F2FCE2]">
      {/* Updated Header Section with Single Line Layout */}
      <div className="relative bg-white/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Store Logo and Info */}
            <div className="flex items-center gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-200 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1549924231-f129b911e442"
                    alt="متجر السيارات الفاخرة"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">متجر السيارات الفاخرة</h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>الكويت - شارع الخليج العربي</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <Tooltip key={link.id}>
                  <TooltipTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2.5 rounded-lg shadow-md transition-all ${link.bgColor} 
                                hover:shadow-lg text-white relative group`}
                      onClick={() => window.open(link.href, '_blank')}
                    >
                      <link.icon className="w-5 h-5 relative z-10" />
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 rounded-lg" />
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <SearchBar onSearch={(query) => console.log(query)} />
        </motion.div>
      </div>

      {/* Categories and Featured Ads */}
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
