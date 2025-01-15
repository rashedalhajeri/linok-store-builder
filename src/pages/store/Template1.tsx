import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, MessageSquare, Instagram, Star, Search, ShoppingBag } from "lucide-react";
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
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Hero Section with Cover Image */}
      <div className="relative h-80 bg-gradient-to-r from-purple-900 to-blue-600 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')] bg-cover bg-center"
          style={{ backgroundBlendMode: 'overlay' }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-40 relative z-10 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          {/* Store Profile Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
              <AvatarImage src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold text-gray-900">Luxury Store</h1>
                <span className="text-blue-500 bg-blue-100 p-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                </span>
              </div>
              <p className="text-gray-600 text-lg mb-6">متجر متخصص في المنتجات الفاخرة والإكسسوارات العصرية</p>
              
              {/* Contact Buttons */}
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="rounded-xl hover:bg-primary hover:text-white transition-colors">
                  <Phone className="h-5 w-5 ml-2" />
                  اتصل بنا
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl hover:bg-primary hover:text-white transition-colors">
                  <MessageSquare className="h-5 w-5 ml-2" />
                  راسلنا
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="h-5 w-5 ml-2" />
                  تابعنا
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="ابحث عن المنتجات..."
            className="w-full px-6 py-4 pr-14 text-lg rounded-2xl border-2 border-gray-100 focus:border-primary/20 shadow-sm"
          />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              className="rounded-xl flex gap-2 whitespace-nowrap px-6 py-6 hover:bg-primary hover:text-white border-2 border-gray-100"
            >
              <category.icon className="h-5 w-5" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group border-0"
                onClick={() => navigate(`/product/template1/${product.id}`)}
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-primary text-xl font-bold">{product.price}</p>
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