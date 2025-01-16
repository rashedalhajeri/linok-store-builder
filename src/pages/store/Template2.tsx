import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

const StoreTemplate2 = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      name: "تويوتا لاند كروزر",
      logo: "https://www.carlogos.org/car-logos/toyota-logo-2020-europe.png",
      description: "وكيل معتمد"
    },
    {
      name: "لكزس الفطيم",
      logo: "https://www.carlogos.org/car-logos/lexus-logo-2013.png",
      description: "وكيل حصري"
    },
    {
      name: "نيسان العربية",
      logo: "https://www.carlogos.org/car-logos/nissan-logo-2020-black.png",
      description: "وكيل رسمي"
    },
    {
      name: "هونداي الوكالة",
      logo: "https://www.carlogos.org/car-logos/hyundai-logo-2011.png",
      description: "وكيل معتمد"
    },
    {
      name: "كيا الجبر",
      logo: "https://www.carlogos.org/car-logos/kia-logo-2021.png",
      description: "وكيل حصري"
    },
    {
      name: "مرسيدس الغانم",
      logo: "https://www.carlogos.org/car-logos/mercedes-benz-logo-2011.png",
      description: "وكيل رسمي"
    },
    {
      name: "بي ام دبليو الناغي",
      logo: "https://www.carlogos.org/car-logos/bmw-logo-2020.png",
      description: "وكيل معتمد"
    },
    {
      name: "أودي سماكو",
      logo: "https://www.carlogos.org/car-logos/audi-logo-2016.png",
      description: "وكيل حصري"
    },
  ];

  const ads = [
    {
      id: 1,
      title: "كاميرا كانون احترافية",
      price: "450 د.ك",
      location: "حولي",
      date: "منذ 3 أيام",
      description: "كاميرا احترافية بحالة ممتازة مع جميع الملحقات",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
    },
    {
      id: 2,
      title: "لابتوب ماك برو 2023",
      price: "800 د.ك",
      location: "السالمية",
      date: "منذ يومين",
      description: "جهاز جديد لم يستخدم - ضمان سنة",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 3,
      title: "ساعة آبل الجيل الثامن",
      price: "120 د.ك",
      location: "الجهراء",
      date: "منذ 5 أيام",
      description: "ساعة آبل الإصدار الأخير مع جميع الملحقات",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-6">تصفح الإعلانات</h1>
          <div className="max-w-xl mx-auto flex gap-2">
            <Input 
              placeholder="ابحث عن سيارة..." 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">الوكلاء المعتمدون</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-2 bg-white rounded-lg hover:shadow-sm transition-all border border-gray-100"
            >
              <div className="w-10 h-10 mb-2">
                <img
                  src={category.logo}
                  alt={category.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-800 text-center mb-0.5 line-clamp-1">{category.name}</span>
              <span className="text-[10px] text-gray-500">{category.description}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">أحدث الإعلانات</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ads.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full flex flex-col"
                onClick={() => navigate(`/product/template2/${ad.id}`)}
              >
                <div className="aspect-square relative">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="text-base font-semibold mb-2 text-gray-800 line-clamp-1">{ad.title}</h3>
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{ad.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{ad.date}</span>
                    </div>
                    <div className="pt-2 border-t text-primary font-semibold">
                      {ad.price}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate2;
