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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Background */}
      <div className="relative h-[300px] bg-gradient-to-r from-primary/10 to-secondary/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')",
            backgroundPosition: 'center 40%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Profile Section */}
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative -mt-32 pb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar className="w-40 h-40 border-4 border-white rounded-full shadow-2xl">
                <AvatarImage src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" className="object-cover" />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
            </motion.div>

            {/* Store Info */}
            <div className="flex-1 pt-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                    Luxury Store
                    <span className="text-primary">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </span>
                  </h1>
                  <div className="flex items-center gap-6 text-gray-600 mt-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      الرياض، السعودية
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      انضم في 2024
                    </span>
                  </div>
                  <p className="text-gray-600 mt-3 text-lg leading-relaxed max-w-2xl">
                    متجر متخصص في المنتجات الفاخرة والإكسسوارات العصرية. نقدم أفضل الماركات العالمية بجودة عالية وخدمة متميزة.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="default"
                    size="lg"
                    className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    اتصل بنا
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2"
                  >
                    <MessageSquare className="h-4 w-4 ml-2" />
                    راسلنا
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2"
                  >
                    <Instagram className="h-4 w-4 ml-2" />
                    تابعنا
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Search and Categories */}
        <div className="py-8 space-y-8">
          {/* Search */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative max-w-2xl mx-auto"
          >
            <Input
              type="text"
              placeholder="ابحث عن المنتجات..."
              className="w-full px-6 py-7 pr-14 text-lg rounded-2xl border-gray-200 focus:border-primary/20 shadow-lg transition-all duration-300"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </motion.div>

          {/* Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className="rounded-full flex gap-2 whitespace-nowrap px-6 py-6 hover:bg-primary hover:text-white transition-all duration-300 border-2 border-gray-200 shadow-md hover:shadow-lg"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group border-0 rounded-2xl bg-white"
                onClick={() => navigate(`/product/template1/${product.id}`)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-primary font-bold text-lg">{product.price}</p>
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