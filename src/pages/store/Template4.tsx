import { useState } from "react";
import { StoreCover } from "@/components/store/StoreCover";
import { SearchBar } from "@/components/store/SearchBar";
import { CategoryTabs } from "@/components/store/CategoryTabs";
import { MenuItem } from "@/components/store/MenuItem";
import { SocialLinks } from "@/components/store/SocialLinks";
import { Twitter, Instagram, Phone, MessageCircle } from "lucide-react";

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
    { id: "desserts", label: "حلويات" },
    { id: "sides", label: "إضافات" },
    { id: "shawarma", label: "شاورما" },
    { id: "grills", label: "مشويات" },
    { id: "rice", label: "أرز" },
    { id: "pizza", label: "بيتزا" }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <Twitter className="w-5 h-5 text-white" />,
      label: "Twitter",
      href: "https://twitter.com",
      bgColor: "bg-[#1DA1F2]"
    },
    {
      id: 2,
      icon: <Instagram className="w-5 h-5 text-white" />,
      label: "Instagram",
      href: "https://instagram.com",
      bgColor: "bg-[#E4405F]"
    },
    {
      id: 3,
      icon: <MessageCircle className="w-5 h-5 text-white" />,
      label: "WhatsApp",
      href: "https://wa.me/1234567890",
      bgColor: "bg-[#25D366]"
    },
    {
      id: 4,
      icon: <Phone className="w-5 h-5 text-white" />,
      label: "Phone",
      href: "tel:+1234567890",
      bgColor: "bg-[#34B7F1]"
    }
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
          {menuItems[selectedCategory]?.map((item) => (
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