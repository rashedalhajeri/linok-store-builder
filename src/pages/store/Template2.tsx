import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

const StoreTemplate2 = () => {
  const navigate = useNavigate();
  
  const ads = [
    {
      id: 1,
      title: "ايفون 15 برو ماكس - جديد",
      price: "4,500 د.ك",
      location: "حولي",
      date: "منذ 3 أيام",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 2,
      title: "شقة فاخرة للإيجار",
      price: "800 د.ك",
      location: "السالمية",
      date: "منذ يومين",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 3,
      title: "طاولة طعام خشب زان",
      price: "220 د.ك",
      location: "الجهراء",
      date: "منذ 5 أيام",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">أفضل منصة للإعلانات المبوبة</h1>
          <div className="max-w-2xl mx-auto flex gap-4">
            <Input 
              placeholder="ابحث عن إعلان..." 
              className="bg-white text-black"
            />
            <Button className="bg-black hover:bg-gray-800">
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
          {["إلكترونيات", "عقارات", "أثاث", "سيارات"].map((category) => (
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
        <h2 className="text-2xl font-semibold mb-8">أحدث الإعلانات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ads.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate(`/product/template2/${ad.id}`)}>
                <div className="aspect-video relative">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full">
                    {ad.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{ad.title}</h3>
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

      {/* Add Listing Button */}
      <div className="fixed bottom-8 left-8">
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white rounded-full h-16 px-8 text-lg shadow-lg"
          onClick={() => navigate("/add-listing")}
        >
          + أضف إعلانك
        </Button>
      </div>
    </div>
  );
};

export default StoreTemplate2;