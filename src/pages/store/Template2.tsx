import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { LanguageToggle } from "@/components/store/LanguageToggle";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const StoreTemplate2 = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  
  const agencies = [
    { 
      name: "تويوتا الكويت",
      nameEn: "Toyota Kuwait",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    { 
      name: "لكزس الكويت",
      nameEn: "Lexus Kuwait",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    },
    { 
      name: "نيسان الكويت",
      nameEn: "Nissan Kuwait",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    { 
      name: "هونداي الكويت",
      nameEn: "Hyundai Kuwait",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
  ];

  const ads = [
    {
      id: 1,
      title: {
        ar: "كاميرا كانون احترافية مع عدسة وملحقات",
        en: "Professional Canon Camera with Lens and Accessories"
      },
      price: {
        ar: "450 د.ك",
        en: "KWD 450"
      },
      location: {
        ar: "حولي",
        en: "Hawally"
      },
      date: {
        ar: "منذ 3 أيام",
        en: "3 days ago"
      },
      agency: agencies[0],
      description: {
        ar: "كاميرا احترافية بحالة ممتازة مع جميع الملحقات",
        en: "Professional camera in excellent condition with all accessories"
      },
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
    },
    {
      id: 2,
      title: {
        ar: "لابتوب ماك برو 2023",
        en: "MacBook Pro 2023"
      },
      price: {
        ar: "800 د.ك",
        en: "KWD 800"
      },
      location: {
        ar: "السالمية",
        en: "Salmiya"
      },
      date: {
        ar: "منذ يومين",
        en: "2 days ago"
      },
      description: {
        ar: "جهاز جديد لم يستخدم - ضمان سنة",
        en: "Brand new device - one year warranty"
      },
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 3,
      title: {
        ar: "ساعة آبل الجيل الثامن",
        en: "Apple Watch Series 8"
      },
      price: {
        ar: "120 د.ك",
        en: "KWD 120"
      },
      location: {
        ar: "الجهراء",
        en: "Jahra"
      },
      date: {
        ar: "منذ 5 أيام",
        en: "5 days ago"
      },
      description: {
        ar: "ساعة آبل الإصدار الأخير مع جميع الملحقات",
        en: "Latest Apple Watch with all accessories"
      },
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a"
    }
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              {language === 'ar' ? 'تصفح الإعلانات' : 'Browse Ads'}
            </h1>
            <LanguageToggle language={language} onToggle={toggleLanguage} />
          </div>
          <div className="max-w-xl mx-auto flex gap-2">
            <Input 
              placeholder={language === 'ar' ? "ابحث عن منتج..." : "Search for a product..."}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {language === 'ar' ? 'الوكلاء المعتمدون' : 'Authorized Dealers'}
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {agencies.map((agency) => (
            <motion.div
              key={agency.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2"
            >
              <Avatar className="w-12 h-12">
                <AvatarImage src={agency.image} alt={agency.name} />
                <AvatarFallback>{agency.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium text-gray-800 text-center">
                {language === 'ar' ? agency.name : agency.nameEn}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {language === 'ar' ? 'أحدث الإعلانات' : 'Latest Ads'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ads.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full flex flex-col"
                onClick={() => navigate(`/product/template2/${ad.id}`)}
              >
                <div className="aspect-square relative">
                  <img 
                    src={ad.image} 
                    alt={ad.title[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={ad.agency.image} alt={ad.agency.name} />
                      <AvatarFallback>{ad.agency.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-600">
                      {language === 'ar' ? ad.agency.name : ad.agency.nameEn}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 h-10">
                    {ad.title[language]}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{ad.location[language]}</span>
                    <Clock className="w-3 h-3 ml-2" />
                    <span>{ad.date[language]}</span>
                  </div>
                  <div className="mt-auto text-left">
                    <span className="text-green-500 font-bold text-sm">
                      {ad.price[language]}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate2;