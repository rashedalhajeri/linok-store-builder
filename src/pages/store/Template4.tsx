import { useState } from "react";
import { StoreCover } from "@/components/store/template4/StoreCover";
import { SearchBar } from "@/components/store/template4/SearchBar";
import { CategoryTabs } from "@/components/store/template4/CategoryTabs";
import { MenuItem } from "@/components/store/template4/MenuItem";
import { SocialLinks } from "@/components/store/template4/SocialLinks";

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
      icon: "/icons/instagram.svg",
      label: "Instagram",
      href: "https://instagram.com",
      bgColor: "bg-gradient-to-tr from-purple-600 to-pink-500"
    },
    {
      id: 2,
      icon: "/icons/twitter.svg",
      label: "Twitter",
      href: "https://twitter.com",
      bgColor: "bg-blue-400"
    },
    {
      id: 3,
      icon: "/icons/phone.svg",
      label: "Phone",
      href: "tel:+1234567890",
      bgColor: "bg-green-500"
    },
    {
      id: 4,
      icon: "/icons/map-pin.svg",
      label: "Location",
      href: "https://maps.google.com",
      bgColor: "bg-red-500"
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