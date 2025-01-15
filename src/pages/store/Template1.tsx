import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, MessageSquare, Instagram, Star, Search, ShoppingBag, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

const StoreTemplate1 = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: "حقيبة يد فاخرة",
      price: "1,299 ريال",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
    },
    {
      id: 2,
      name: "ساعة كلاسيكية",
      price: "2,499 ريال",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314"
    },
    {
      id: 3,
      name: "نظارة شمسية",
      price: "799 ريال",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f"
    },
    {
      id: 4,
      name: "عطر فاخر",
      price: "999 ريال",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f"
    }
  ];

  const categories = [
    { id: 1, name: "الأكثر مبيعاً", icon: Star },
    { id: 2, name: "الحقائب", icon: ShoppingBag },
    { id: 3, name: "الساعات", icon: Star },
    { id: 4, name: "النظارات", icon: Star },
    { id: 5, name: "العطور", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Header Background */}
      <div className="relative h-[250px] bg-gradient-to-b from-gray-900/70 to-gray-900/50">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Store Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 relative">
        {/* Profile Section */}
        <div className="relative -mt-24 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Avatar & Actions */}
            <div className="flex justify-between items-end">
              <Avatar className="w-36 h-36 border-4 border-white rounded-full shadow-xl">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" 
                  className="object-cover"
                />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 bg-white hover:bg-gray-50 text-gray-900"
                >
                  <MessageSquare className="h-5 w-5 ml-2" />
                  راسلنا
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 bg-white hover:bg-gray-50 text-gray-900"
                >
                  <Phone className="h-5 w-5 ml-2" />
                  اتصل بنا
                </Button>
              </div>
            </div>

            {/* Store Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    Luxury Store
                    <span className="inline-block">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-gray-500 text-sm">@luxurystore</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-gray-700 mt-4 text-base leading-relaxed">
                متجر متخصص في المنتجات الفاخرة والإكسسوارات العصرية
              </p>
              
              <div className="flex items-center gap-6 text-gray-500 text-sm mt-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  الرياض، السعودية
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  انضم في 2024
                </span>
              </div>
              
              <div className="flex gap-6 mt-4 text-sm border-t pt-4">
                <span className="text-gray-500">
                  <strong className="text-gray-900">٥٢٣</strong> يتابع
                </span>
                <span className="text-gray-500">
                  <strong className="text-gray-900">١,٢٤٥</strong> متابع
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-sm rounded-xl mb-6">
          <div className="flex overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex-1 min-w-[120px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 py-4 px-6 font-medium text-sm transition-colors relative group"
              >
                <category.icon className="h-5 w-5 mx-auto mb-1" />
                <span className="block text-center">{category.name}</span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
            ))}
          </div>
        </nav>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 pb-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-0 rounded-2xl"
                onClick={() => navigate(`/product/template1/${product.id}`)}
              >
                <div className="relative aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-primary mt-1 font-bold">{product.price}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate1;