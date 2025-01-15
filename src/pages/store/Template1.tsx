import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, MessageSquare, Instagram, Star, Search, ShoppingBag, MapPin, Calendar } from "lucide-react";
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
      {/* Header Background - Twitter Style */}
      <div className="relative h-[200px] bg-[#F7F9F9]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')",
            backgroundPosition: 'center 40%'
          }}
        />
      </div>

      {/* Profile Section - Twitter Style */}
      <div className="max-w-[600px] mx-auto px-4">
        <div className="relative -mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Avatar */}
            <div className="flex justify-between items-start">
              <Avatar className="w-32 h-32 border-4 border-white rounded-full shadow-md">
                <AvatarImage src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" className="object-cover" />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 hover:bg-gray-50"
                >
                  <MessageSquare className="h-5 w-5 ml-2" />
                  راسلنا
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 hover:bg-gray-50"
                >
                  <Phone className="h-5 w-5 ml-2" />
                  اتصل بنا
                </Button>
              </div>
            </div>

            {/* Store Info */}
            <div className="mt-2">
              <h1 className="text-xl font-bold text-gray-900">
                Luxury Store
                <span className="inline-block ml-1">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                </span>
              </h1>
              <p className="text-gray-500 text-sm">@luxurystore</p>
              
              <p className="text-gray-900 mt-3 text-base">
                متجر متخصص في المنتجات الفاخرة والإكسسوارات العصرية
              </p>
              
              <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  الرياض، السعودية
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  انضم في 2024
                </span>
              </div>
              
              <div className="flex gap-4 mt-2 text-sm">
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

        {/* Navigation Tabs - Twitter Style */}
        <div className="border-b border-gray-200 mt-4">
          <nav className="flex -mb-px">
            {categories.map((category) => (
              <button
                key={category.id}
                className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium text-sm border-b-2 border-transparent hover:border-gray-300 transition-colors"
              >
                <category.icon className="h-5 w-5 inline-block ml-2" />
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 py-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-0"
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