import { 
  Phone, 
  MessageSquare, 
  Instagram, 
  MapPin, 
  ExternalLink, 
  ShoppingBag,
  Sparkles,
  Glasses,
  FlaskConical,
  Search,
  CircleCheck
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { StoreCover } from "@/components/store/StoreCover";
import { SocialLinks } from "@/components/store/SocialLinks";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: "29.99 KD",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: "39.99 KD",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
  }
];

const StoreTemplate1 = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ar'>('ar');
  const [showSearch, setShowSearch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const t = translations[currentLanguage] || translations.ar; // Provide a fallback

  const socialLinks = [
    { 
      id: 1, 
      icon: "/lovable-uploads/5d02b4d3-9041-47ca-8ac3-08cf337c2be1.png", 
      label: "Instagram", 
      href: "https://instagram.com/yourusername",
      bgColor: "bg-white"
    },
    { 
      id: 2, 
      icon: "/lovable-uploads/17454f1f-bb90-4fcd-91fc-664c8942f958.png", 
      label: "WhatsApp", 
      href: "https://wa.me/96500000000",
      bgColor: "bg-white"
    },
    { 
      id: 3, 
      icon: "/lovable-uploads/b7fc8d57-a3ea-476d-a1c2-c5f272c432e9.png", 
      label: "TikTok", 
      href: "https://tiktok.com/@yourusername",
      bgColor: "bg-white"
    }
  ];

  const categories = [
    { id: 0, name: "allProducts" },
    { id: 1, name: "bestSellers" },
    { id: 2, name: "bags" },
    { id: 3, name: "watches" },
    { id: 4, name: "sunglasses" },
    { id: 5, name: "perfumes" },
    { id: 6, name: "accessories" }
  ];

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Kuwait+Capital+Governorate+Kuwait', '_blank');
  };

  const handleSearchClick = () => {
    if (showSearch) {
      setShowSearch(false);
      setSelectedCategory(0);
    } else {
      setShowSearch(true);
      searchRef.current?.scrollIntoView({ behavior: 'instant' });
      const inputElement = searchRef.current?.querySelector('input');
      if (inputElement) {
        inputElement.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FA]" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      <StoreCover 
        language={currentLanguage}
        onToggleLanguage={toggleLanguage}
      />

      <div className="max-w-[90%] md:max-w-4xl mx-auto px-4 relative">
        <div className="relative -mt-20 md:-mt-32 mb-6 md:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="flex justify-between items-end">
              <div className="relative group">
                <Avatar className="w-28 h-28 md:w-40 md:h-40 border-4 border-white rounded-full shadow-xl bg-white">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" 
                    className="object-cover"
                  />
                  <AvatarFallback>LS</AvatarFallback>
                </Avatar>
                <motion.div 
                  className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              
              <SocialLinks links={socialLinks} />
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                    {t.storeName || 'Store Name'}
                    <CircleCheck className="w-5 h-5 text-[#1DA1F2] inline-block" />
                  </h1>
                  <p className="text-sm md:text-base text-gray-500 font-medium">
                    @yourstorehandle
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-gray-50 text-[#8E9196] border-[#F1F0FB]"
                    onClick={handleSearchClick}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-gray-50 text-[#8E9196] border-[#F1F0FB]"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-700 mt-4 leading-relaxed">
                {isExpanded ? t.storeDescription || 'Store Description' : (t.storeDescription || 'Store Description').slice(0, 75)}
                {(t.storeDescription || 'Store Description').length > 75 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mr-1 text-primary hover:underline focus:outline-none"
                  >
                    {isExpanded ? t.showLess || 'Show Less' : t.showMore || 'Show More'}
                  </button>
                )}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm mt-4 md:mt-6">
                <motion.button 
                  onClick={handleMapClick}
                  className="flex items-center gap-1.5 hover:text-primary transition-colors group relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="relative"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, -10, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    <div className="absolute -inset-1 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </motion.div>
                  <span className="relative">
                    العاصمة، الكويت
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-white shadow-sm rounded-2xl mb-6 overflow-hidden">
          <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-300 ${
                  category.id === selectedCategory
                    ? 'bg-primary text-white font-medium'
                    : 'text-[#8E9196] hover:bg-gray-50'
                }`}
              >
                {t[category.name] || category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card 
                className="overflow-hidden transition-all duration-300 cursor-pointer border-0 rounded-2xl bg-white hover:shadow-lg"
                onClick={() => navigate(`/product/template1/${product.id}`)}
              >
                <div className="relative aspect-square">
                  <img 
                    src={product.image} 
                    alt={t[product.name]} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 pt-6">
                  <h3 className="font-medium text-sm md:text-base text-gray-900 mb-1.5">
                    {t[product.name]}
                  </h3>
                  <p className="text-gray-900 font-bold text-base md:text-lg">
                    {product.price}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full py-8 bg-gradient-to-r from-[#fdfcfb] via-[#e2d1c3] to-[#fdfcfb] border-t">
        <div className="max-w-[90%] md:max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-sm text-gray-500">صنع بكل</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ❤️
              </motion.div>
              <span className="text-sm text-gray-500">في</span>
            </motion.div>
            
            <motion.a
              href="https://linok.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70" />
              <div className="relative bg-white px-4 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-bold">
                  linok.me
                </span>
              </div>
            </motion.a>
            
            <p className="text-xs text-gray-400 mt-2">
              منصة متخصصة في إنشاء المتاجر الإلكترونية
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate1;