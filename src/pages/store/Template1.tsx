import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Instagram, MapPin, ExternalLink, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { translations } from "@/utils/translations";

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
  { id: 1, name: "bestSellers", icon: Star },
  { id: 2, name: "bags", icon: ShoppingBag },
  { id: 3, name: "watches", icon: Star },
  { id: 4, name: "sunglasses", icon: Star },
  { id: 5, name: "perfumes", icon: Star },
];

const StoreTemplate1 = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  
  const t = translations[language];
  
  const socialLinks = [
    { id: 1, icon: Phone, label: t.contactUs, href: "tel:+96500000000" },
    { id: 2, icon: MessageSquare, label: t.whatsapp, href: "https://wa.me/96500000000" },
    { id: 3, icon: Instagram, label: t.instagram, href: "https://instagram.com/luxury_store" },
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Kuwait+City+Kuwait', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F7F9FA]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <div className="relative h-[200px] md:h-[300px] bg-gradient-to-b from-gray-900/70 to-gray-900/50">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Store Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>

      {/* Main Content */}
      <div className="max-w-[90%] md:max-w-4xl mx-auto px-4 relative">
        {/* Profile Section */}
        <div className="relative -mt-20 md:-mt-32 mb-6 md:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 md:gap-6"
          >
            {/* Avatar & Social Links */}
            <div className="flex justify-between items-end">
              <Avatar className="w-28 h-28 md:w-40 md:h-40 border-4 border-white rounded-full shadow-xl">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" 
                  className="object-cover"
                />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
              
              <div className="flex gap-2 md:gap-3 mt-4">
                <Button
                  variant="outline"
                  size={isMobile ? "sm" : "lg"}
                  className="rounded-full border-2 bg-white/95 hover:bg-white text-gray-900 font-medium shadow-sm"
                  onClick={toggleLanguage}
                >
                  <Globe className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" />
                  {!isMobile && (language === 'en' ? 'العربية' : 'English')}
                </Button>
                {socialLinks.map((link) => (
                  <Button
                    key={link.id}
                    variant="outline"
                    size={isMobile ? "sm" : "lg"}
                    className="rounded-full border-2 bg-white/95 hover:bg-white text-gray-900 font-medium shadow-sm"
                    onClick={() => window.open(link.href, '_blank')}
                  >
                    <link.icon className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" />
                    {!isMobile && link.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Store Info */}
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {t.storeName}
                  </h1>
                  <p className="text-sm md:text-base text-gray-500">
                    {t.storeHandle}
                  </p>
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
                <button 
                  onClick={handleMapClick}
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {t.location}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <nav className="bg-white shadow-sm rounded-2xl mb-6 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex-1 min-w-[100px] md:min-w-[120px] text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 py-3 md:py-4 px-4 md:px-6 font-medium text-xs md:text-sm transition-colors relative group"
              >
                <category.icon className="h-4 w-4 md:h-5 md:w-5 mx-auto mb-1 md:mb-1.5" />
                <span className="block text-center">{t[category.name]}</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
            ))}
          </div>
        </nav>

        {/* Products Grid */}
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
                    alt={t[product.name]} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm md:text-base text-gray-900">{t[product.name]}</h3>
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
