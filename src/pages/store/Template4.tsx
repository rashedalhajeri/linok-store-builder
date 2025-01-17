import { useState } from "react";
import { StoreCover } from "@/components/store/StoreCover";
import { SearchBar } from "@/components/store/SearchBar";
import { CategoryTabs } from "@/components/store/CategoryTabs";
import { MenuItem } from "@/components/store/MenuItem";
import { SocialLinks } from "@/components/store/SocialLinks";

const StoreTemplate4 = () => {
  const [selectedCategory, setSelectedCategory] = useState("main");
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');

  const categories = [
    { id: "main", label: "الأطباق الرئيسية" },
    { id: "appetizers", label: "المقبلات" },
    { id: "drinks", label: "المشروبات" },
    { id: "desserts", label: "الحلويات" }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: "/icons/instagram.svg",
      label: "Instagram",
      href: "https://instagram.com",
      bgColor: "bg-gradient-to-tr from-purple-600 to-pink-500"
    },
    {
      id: 2,
      icon: "/icons/phone.svg",
      label: "Phone",
      href: "tel:+1234567890",
      bgColor: "bg-green-500"
    }
  ];

  const menuItems = {
    main: [
      {
        id: 1,
        name: "برجر لحم واجيو",
        description: "برجر لحم واجيو مع جبنة شيدر وصلصة خاصة",
        price: "8.500 د.ك",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        isSpicy: true,
        isPopular: true
      },
      {
        id: 2,
        name: "ستيك تندرلوين",
        description: "ستيك تندرلوين مشوي مع صلصة الفطر",
        price: "12.000 د.ك",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        isPopular: true
      }
    ],
    appetizers: [
      {
        id: 3,
        name: "سلطة سيزر",
        description: "خس روماني مع صلصة سيزر وقطع الدجاج المشوي",
        price: "4.500 د.ك",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
      }
    ],
    drinks: [
      {
        id: 4,
        name: "عصير برتقال طازج",
        description: "عصير برتقال طبيعي 100%",
        price: "2.000 د.ك",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423"
      }
    ],
    desserts: [
      {
        id: 5,
        name: "تشيز كيك",
        description: "تشيز كيك نيويورك مع صلصة التوت",
        price: "3.500 د.ك",
        image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd",
        isPopular: true
      }
    ]
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10">
      <StoreCover 
        language={language}
        onToggleLanguage={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      />
      
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <SearchBar onSearch={handleSearch} />
        
        <div className="mt-8">
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4">
          {menuItems[selectedCategory].map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center mt-8 pb-8">
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate4;