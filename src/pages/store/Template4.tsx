import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreCover } from "@/components/store/StoreCover";
import { SearchBar } from "@/components/store/SearchBar";
import { CategoryTabs } from "@/components/store/CategoryTabs";
import { MenuItem } from "@/components/store/MenuItem";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Phone } from "lucide-react";

const StoreTemplate4 = () => {
  const [selectedCategory, setSelectedCategory] = useState("main");
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');

  const categories = [
    { id: "main", label: "الأطباق الرئيسية" },
    { id: "burgers", label: "برجر" },
    { id: "sandwiches", label: "سندويشات" },
    { id: "appetizers", label: "مقبلات" },
    { id: "salads", label: "سلطات" },
    { id: "drinks", label: "مشروبات" },
    { id: "desserts", label: "حلويات" }
  ];

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
    ],
    burgers: [
      {
        id: 3,
        name: "برجر لحم واجيو",
        description: "برجر لحم واجيو مع جبنة شيدر وصلصة خاصة",
        price: "8.500 د.ك",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        isSpicy: true,
        isPopular: true
      },
      {
        id: 4,
        name: "برجر دجاج مقرمش",
        description: "برجر دجاج مقرمش مع صلصة الرانش",
        price: "6.500 د.ك",
        image: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6",
        isPopular: true
      }
    ],
    sandwiches: [
      {
        id: 5,
        name: "كلوب ساندويتش",
        description: "دجاج مشوي مع جبنة وخضار",
        price: "4.500 د.ك",
        image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847",
        isPopular: true
      },
      {
        id: 6,
        name: "فيليه ستيك ساندويتش",
        description: "شرائح لحم مع صلصة خاصة",
        price: "5.750 د.ك",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
        isSpicy: true
      }
    ],
    appetizers: [
      {
        id: 7,
        name: "حمص",
        description: "حمص مع زيت زيتون وصنوبر",
        price: "2.500 د.ك",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea",
      },
      {
        id: 8,
        name: "متبل",
        description: "متبل باذنجان طازج",
        price: "2.250 د.ك",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d",
      }
    ]
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <StoreCover 
        language={language}
        onToggleLanguage={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      />
      
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <SearchBar onSearch={handleSearch} />
        
        <div className="mt-8">
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 pb-24">
          {menuItems[selectedCategory]?.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        {/* New Social Links Design */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex gap-3 bg-white/80 backdrop-blur-lg p-3 rounded-full shadow-lg"
          >
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-blue-600 text-white"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-sky-500 text-white"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-green-500 text-white"
            >
              <Phone size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate4;