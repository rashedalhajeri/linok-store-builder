import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { LanguageToggle } from "@/components/store/LanguageToggle";
import { useState } from "react";
import { translations } from "@/utils/translations";

const StoreTemplate2 = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  
  const categories = [
    { name: "تويوتا لاند كروزر" },
    { name: "لكزس الفطيم" },
    { name: "نيسان العربية" },
    { name: "هونداي الوكالة" },
    { name: "كيا الجبر" },
    { name: "مرسيدس الغانم" },
    { name: "بي ام دبليو الناغي" },
    { name: "أودي سماكو" },
  ];

  const ads = [
    {
      id: 1,
      title: {
        ar: "كاميرا كانون احترافية",
        en: "Professional Canon Camera"
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
              placeholder={language === 'ar' ? "ابحث عن سيارة..." : "Search for a car..."}
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
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-2 bg-white rounded-lg hover:shadow-sm transition-all border border-gray-100"
            >
              <span className="text-xs font-medium text-gray-800 text-center">{category.name}</span>
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
                  <h3 className="text-sm font-medium mb-2 text-gray-800 line-clamp-2">
                    {ad.title[language]}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{ad.location[language]}</span>
                    <span className="mx-1">•</span>
                    <span className="text-gray-400 truncate">{ad.date[language]}</span>
                  </div>
                  <div className="mt-auto text-left">
                    <span className="text-green-500 font-bold text-base">
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