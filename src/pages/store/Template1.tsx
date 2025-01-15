import { 
  Phone, 
  MessageSquare, 
  Instagram, 
  MapPin, 
  ExternalLink, 
  Globe,
  Star,
  ShoppingBag,
  Sparkles,
  Glasses,
  FlaskConical,
  BadgeCheck,
  Search
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

const products = [
  {
    id: 1,
    name: "luxuryBags",
    price: "125 د.ك",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
  },
  {
    id: 2,
    name: "classicWatch",
    price: "250 د.ك",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314"
  },
  {
    id: 3,
    name: "sunglassesProduct",
    price: "75 د.ك",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f"
  },
  {
    id: 4,
    name: "luxuryPerfume",
    price: "95 د.ك",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f"
  }
];

const categories = [
  { 
    id: 0,
    name: "allProducts", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    showImage: true
  },
  { 
    id: 1, 
    name: "bestSellers", 
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    showImage: true
  },
  { 
    id: 2, 
    name: "bags", 
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
    showImage: true
  },
  { 
    id: 3, 
    name: "watches", 
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    showImage: true
  },
  { 
    id: 4, 
    name: "sunglasses", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    showImage: true
  },
  { 
    id: 5, 
    name: "perfumes", 
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    showImage: true
  },
  { 
    id: 6, 
    name: "accessories", 
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
    showImage: true
  }
];

const StoreTemplate1 = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  const [showSearch, setShowSearch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0); // للفئة "الكل"
  const searchRef = useRef<HTMLDivElement>(null);
  
  const t = translations[language];

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

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Kuwait+Capital+Governorate+Kuwait', '_blank');
  };

  const handleSearchClick = () => {
    if (showSearch) {
      setShowSearch(false);
      setSelectedCategory(0); // العودة إلى فئة "الكل"
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
    <div className="min-h-screen bg-[#F7F9FA]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border border-gray-200 bg-white/95 hover:bg-white text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3"
            onClick={toggleLanguage}
          >
            <Globe className="h-3.5 w-3.5 ml-1" />
            {language === 'en' ? 'العربية' : 'English'}
          </Button>
        </div>
        <div className="h-[200px] md:h-[300px] bg-gradient-to-b from-gray-900/70 to-gray-900/50">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Store Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
        </div>
      </div>

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
              
              <div className="flex gap-2 md:gap-3 mt-4">
                {socialLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-full shadow-sm transition-all duration-300 ${link.bgColor}`}
                    onClick={() => window.open(link.href, '_blank')}
                  >
                    <img 
                      src={link.icon} 
                      alt={link.label}
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                    {t.storeName}
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-sm opacity-30 animate-pulse" />
                      <BadgeCheck className="w-6 h-6 text-primary relative z-10" />
                    </div>
                  </h1>
                  <p className="text-sm md:text-base text-gray-500 font-medium">
                    @yourstorehandle
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-gray-50"
                    onClick={handleSearchClick}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-gray-50"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-700 mt-4 leading-relaxed">
                {isExpanded ? t.storeDescription : t.storeDescription.slice(0, 75)}
                {t.storeDescription.length > 75 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mr-1 text-primary hover:underline focus:outline-none"
                  >
                    {isExpanded ? t.showLess : t.showMore}
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
          <Carousel
            opts={{
              align: "end",
              loop: true,
              dragFree: true,
            }}
            className="w-full p-4"
            dir="rtl"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categories.map((category) => (
                <CarouselItem 
                  key={category.id} 
                  className={`pl-2 md:pl-4 basis-1/4 md:basis-1/5 lg:basis-1/6 ${category.id === 0 ? 'order-first' : ''}`}
                >
                  <button
                    className="w-full group focus:outline-none"
                  >
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-2 bg-gray-50">
                      <img 
                        src={category.image} 
                        alt={t[category.name]}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-colors" />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={`text-xs md:text-sm font-medium ${category.id === 0 ? 'text-[#33C3F0]' : 'text-gray-700'} group-hover:text-[#33C3F0] transition-colors`}>
                        {t[category.name]}
                      </span>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {showSearch && (
          <div 
            ref={searchRef}
            className="bg-white rounded-2xl shadow-sm p-4 mb-6 animate-fade-in"
          >
            <Input
              placeholder="ابحث عن المنتجات..."
              className="w-full"
              autoFocus
            />
          </div>
        )}

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
                <div className="p-4">
                  <h3 className="font-medium text-sm md:text-base text-gray-900 mb-2">
                    {t[product.name]}
                  </h3>
                  <p className="text-primary font-bold text-base md:text-lg">
                    {product.price}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full py-8 bg-gradient-to-r from-white via-gray-50 to-white border-t">
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
