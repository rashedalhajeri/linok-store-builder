import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Car, Home, Phone, Laptop, Filter } from "lucide-react";
import { SearchBar } from "@/components/store/SearchBar";

const StoreTemplate2 = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "سيارات", icon: Car, count: 150 },
    { id: 2, name: "عقارات", icon: Home, count: 89 },
    { id: 3, name: "موبايلات", icon: Phone, count: 234 },
    { id: 4, name: "إلكترونيات", icon: Laptop, count: 167 },
  ];

  const featuredAds = [
    {
      id: 1,
      title: "مرسيدس S-Class 2023",
      price: "45,000 د.ك",
      location: "العاصمة",
      date: "اليوم",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "سيارات",
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
      category: "سيارات",
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
      category: "سيارات",
      views: 234,
      condition: "جديد"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-shadow"
            >
              اكتشف أفضل العروض
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SearchBar onSearch={(query) => console.log(query)} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => navigate("/search/template2")}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="font-medium text-lg">{category.name}</span>
                <span className="text-sm text-muted">{category.count} إعلان</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Ads */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">إعلانات مميزة</h2>
          <button className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
            <Filter className="w-5 h-5" />
            تصفية
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredAds.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer card-hover"
              onClick={() => navigate(`/ad/template2/${ad.id}`)}
            >
              <div className="aspect-video relative">
                <img 
                  src={ad.image} 
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {ad.category}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    ad.condition === "جديد" 
                    ? "bg-green-500/80 text-white" 
                    : "bg-orange-500/80 text-white"
                  }`}>
                    {ad.condition}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{ad.title}</h3>
                <p className="text-primary font-bold text-xl mb-3">
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
                  <span className="text-primary hover:text-primary-dark transition-colors">
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