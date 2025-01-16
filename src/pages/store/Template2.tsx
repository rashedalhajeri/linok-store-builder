import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Plus } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">اعرض منتجاتك بسهولة</h1>
          <div className="max-w-2xl mx-auto flex gap-4">
            <Input 
              placeholder="ابحث عن منتج..." 
              className="bg-white text-black"
            />
            <Button className="bg-green-600 hover:bg-green-700">
              <Search className="ml-2" />
              بحث
            </Button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">تصفح حسب الفئة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["إلكترونيات", "هواتف", "كمبيوترات", "اكسسوارات"].map((category) => (
            <Button
              key={category}
              variant="outline"
              className="h-20 text-lg border-2 border-green-600 hover:bg-green-50"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-8">أحدث المنتجات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ads.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => navigate(`/product/template2/${ad.id}`)}>
                <div className="aspect-video relative">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full">
                    {ad.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{ad.title}</h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">{ad.description}</p>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 ml-1" />
                      {ad.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 ml-1" />
                      {ad.date}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add Product Button */}
      <div className="fixed bottom-8 left-8">
        <Button 
          className="bg-black hover:bg-gray-800 text-white rounded-full h-16 px-8 text-lg shadow-lg flex items-center gap-2"
          onClick={() => navigate("/add-product")}
        >
          <Plus className="w-6 h-6" />
          أضف منتجك
        </Button>
      </div>
    </div>
  );
};

export default StoreTemplate2;