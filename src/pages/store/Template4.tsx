import { useState } from "react";
import { motion } from "framer-motion";
import { StoreCover } from "@/components/store/template4/StoreCover";
import { MenuItem } from "@/components/store/template4/MenuItem";
import { CategoryTabs } from "@/components/store/template4/CategoryTabs";
import { SearchBar } from "@/components/store/template4/SearchBar";

const StoreTemplate4 = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "الكل" },
    { id: "cakes", label: "كيك" },
    { id: "cookies", label: "كوكيز" },
    { id: "donuts", label: "دونات" },
    { id: "drinks", label: "مشروبات" },
  ];

  const menuItems = {
    main: [
      {
        id: 1,
        name: "تشيز كيك",
        description: "تشيز كيك كريمي مع صوص التوت الطازج",
        price: "15.500 د.ك",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947",
        isPopular: true
      },
      {
        id: 2,
        name: "كوكيز شوكولاتة",
        description: "كوكيز طري محشو بالشوكولاتة الداكنة",
        price: "12.000 د.ك",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        isPopular: true
      }
    ]
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-white">
      <StoreCover 
        language={language}
        onToggleLanguage={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="space-y-8">
          <SearchBar onSearch={handleSearch} />
          
          <CategoryTabs 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 py-8"
          >
            {menuItems.main.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate4;