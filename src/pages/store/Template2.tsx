import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Car, Home, Phone, Laptop } from "lucide-react";

const StoreTemplate2 = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "سيارات", icon: Car },
    { id: 2, name: "عقارات", icon: Home },
    { id: 3, name: "موبايلات", icon: Phone },
    { id: 4, name: "إلكترونيات", icon: Laptop },
  ];

  const featuredAds = [
    {
      id: 1,
      title: "مرسيدس S-Class 2023",
      price: "45,000 د.ك",
      location: "العاصمة",
      date: "اليوم",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 2,
      title: "بي ام دبليو X7 2024",
      price: "38,000 د.ك",
      location: "حولي",
      date: "أمس",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
    },
    {
      id: 3,
      title: "لكزس LX 600 2024",
      price: "42,000 د.ك",
      location: "السالمية",
      date: "منذ يومين",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold text-center mb-6">
              ابحث عن سيارتك المثالية
            </h1>
            <div className="flex gap-4">
              <Input 
                placeholder="ابحث عن سيارة..." 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button 
                className="bg-primary hover:bg-primary-dark"
                onClick={() => navigate("/search/template2")}
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => navigate("/search/template2")}
            >
              <div className="flex flex-col items-center gap-3">
                <category.icon className="w-8 h-8 text-primary" />
                <span className="font-medium">{category.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Ads */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">إعلانات مميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredAds.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => navigate(`/ad/template2/${ad.id}`)}
            >
              <div className="aspect-video relative">
                <img 
                  src={ad.image} 
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{ad.title}</h3>
                <p className="text-primary font-bold text-xl mb-2">
                  {ad.price}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {ad.location}
                  </span>
                  <span>{ad.date}</span>
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