import { useState } from "react";
import { motion } from "framer-motion";
import { StoreCover } from "@/components/store/template4/StoreCover";
import { MenuItem } from "@/components/store/template4/MenuItem";

const StoreTemplate4 = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');

  const menuItems = {
    main: [
      {
        id: 1,
        name: "مشاوي مشكل",
        description: "تشكيلة من اللحوم المشوية مع الأرز والخضار",
        price: "15.500 د.ك",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947",
        isPopular: true
      },
      {
        id: 2,
        name: "مندي لحم",
        description: "لحم ضأن مطهو على الطريقة اليمنية",
        price: "12.000 د.ك",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        isPopular: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <StoreCover 
        language={language}
        onToggleLanguage={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 gap-4">
          {menuItems.main.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate4;