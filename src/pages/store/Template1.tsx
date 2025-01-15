import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, MessageSquare, Instagram, Star, Car, Shirt, Search } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const StoreTemplate1 = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: "تي شيرت كاجوال",
      price: "199 ريال",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 2,
      name: "فستان صيفي أنيق",
      price: "299 ريال",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-purple-900 to-blue-600 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-[url('/lovable-uploads/2d88c32c-62d4-41d8-a279-4a96b9a88d08.png')] bg-cover bg-center"
          style={{ backgroundBlendMode: 'overlay' }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl p-6 mb-6"
        >
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Demo Store</h1>
                <span className="text-blue-500 bg-blue-100 p-1 rounded-full">✓</span>
              </div>
              <p className="text-gray-600 mb-4">متجر متخصص في الأزياء العصرية والإكسسوارات</p>
              
              {/* Contact Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-colors">
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="ابحث عن المنتجات..."
            className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        {/* Categories */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <Button variant="default" className="rounded-full flex gap-2 whitespace-nowrap bg-primary hover:bg-primary/90">
            <Star className="h-4 w-4" />
            الكل
          </Button>
          <Button variant="outline" className="rounded-full flex gap-2 whitespace-nowrap hover:bg-primary hover:text-white border-gray-200">
            <Shirt className="h-4 w-4" />
            فاشن
          </Button>
          <Button variant="outline" className="rounded-full flex gap-2 whitespace-nowrap hover:bg-primary hover:text-white border-gray-200">
            <Car className="h-4 w-4" />
            سيارات
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => navigate(`/product/template1/${product.id}`)}
              >
                <div className="relative aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-primary font-semibold">{product.price}</p>
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