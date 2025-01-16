import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

const StoreTemplate2 = () => {
  const navigate = useNavigate();
  
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
              placeholder="ابحث عن منتج..." 
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
        <h2 className="text-xl font-semibold mb-4 text-gray-800">الفئات</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {["إلكترونيات", "هواتف", "كمبيوترات", "اكسسوارات", "أجهزة", "كاميرات", "ساعات", "سماعات"].map((category) => (
            <button
              key={category}
              className="px-3 py-2 text-sm bg-white hover:bg-gray-50 text-gray-700 rounded-lg border border-gray-200 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">أحدث الإعلانات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                onClick={() => navigate(`/product/template2/${ad.id}`)}
              >
                <div className="aspect-video relative">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {ad.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{ad.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{ad.description}</p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {ad.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {ad.date}
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