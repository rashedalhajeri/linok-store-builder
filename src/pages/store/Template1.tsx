import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, MessageSquare, Instagram, Star, Search, ShoppingBag, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const StoreTemplate1 = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
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
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Header - Responsive height */}
      <div className="relative h-[200px] md:h-[300px] bg-gradient-to-b from-gray-900/70 to-gray-900/50">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Store Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>

      {/* Main Content - Responsive padding and width */}
      <div className="max-w-[90%] md:max-w-4xl mx-auto px-4 relative">
        {/* Profile Section - Responsive positioning and sizing */}
        <div className="relative -mt-20 md:-mt-32 mb-6 md:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 md:gap-6"
          >
            {/* Avatar & Actions - Responsive layout */}
            <div className="flex justify-between items-end">
              <Avatar className="w-28 h-28 md:w-40 md:h-40 border-4 border-white rounded-full shadow-xl">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" 
                  className="object-cover"
                />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
              
              <div className="flex gap-2 md:gap-3">
                <Button 
                  variant="outline"
                  size={isMobile ? "sm" : "lg"}
                  className="rounded-full border-2 bg-white/95 hover:bg-white text-gray-900 font-medium shadow-sm"
                >
                  <MessageSquare className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" />
                  {!isMobile && "راسلنا"}
                </Button>
                <Button 
                  variant="outline"
                  size={isMobile ? "sm" : "lg"}
                  className="rounded-full border-2 bg-white/95 hover:bg-white text-gray-900 font-medium shadow-sm"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" />
                  {!isMobile && "اتصل بنا"}
                </Button>
              </div>
            </div>

            {/* Store Info - Responsive padding and text sizes */}
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                    Luxury Store
                    <span className="inline-block">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">@luxurystore</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-gray-50"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm md:text-base text-gray-700 mt-4 leading-relaxed">
                متجر متخصص في المنتجات الفاخرة والإكسسوارات العصرية
              </p>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mt-4 md:mt-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  الرياض، السعودية
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  انضم في 2024
                </span>
              </div>
              
              <div className="flex gap-4 md:gap-6 mt-4 md:mt-6 pt-4 md:pt-6 border-t text-xs md:text-sm">
                <span className="text-gray-500">
                  <strong className="text-gray-900 font-semibold">٥٢٣</strong> يتابع
                </span>
                <span className="text-gray-500">
                  <strong className="text-gray-900 font-semibold">١,٢٤٥</strong> متابع
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation - Responsive scrolling */}
        <nav className="bg-white shadow-sm rounded-2xl mb-6 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex-1 min-w-[100px] md:min-w-[120px] text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 py-3 md:py-4 px-4 md:px-6 font-medium text-xs md:text-sm transition-colors relative group"
              >
                <category.icon className="h-4 w-4 md:h-5 md:w-5 mx-auto mb-1 md:mb-1.5" />
                <span className="block text-center">{category.name}</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
            ))}
          </div>
        </nav>

        {/* Products Grid - Responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 pb-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-0 rounded-2xl bg-white"
                onClick={() => navigate(`/product/template1/${product.id}`)}
              >
                <div className="relative aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm md:text-base text-gray-900">{product.name}</h3>
                  <p className="text-primary mt-1 font-bold text-sm md:text-base">{product.price}</p>
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