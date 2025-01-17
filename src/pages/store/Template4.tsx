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
    { id: "sandwiches", label: "السندويشات" },
    { id: "appetizers", label: "المقبلات" },
    { id: "salads", label: "السلطات" },
    { id: "drinks", label: "المشروبات" },
    { id: "desserts", label: "الحلويات" },
    { id: "sides", label: "الإضافات" }
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
      },
      {
        id: 3,
        name: "دجاج مشوي",
        description: "دجاج مشوي متبل مع الأعشاب",
        price: "7.500 د.ك",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b",
        isPopular: true
      }
    ],
    sandwiches: [
      {
        id: 4,
        name: "كلوب ساندويتش",
        description: "دجاج مشوي مع جبنة وخضار",
        price: "4.500 د.ك",
        image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847",
        isPopular: true
      },
      {
        id: 5,
        name: "فيليه ستيك ساندويتش",
        description: "شرائح لحم مع صلصة خاصة",
        price: "5.750 د.ك",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
        isSpicy: true
      }
    ],
    appetizers: [
      {
        id: 6,
        name: "سلطة سيزر",
        description: "خس روماني مع صلصة سيزر وقطع الدجاج المشوي",
        price: "4.500 د.ك",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
      },
      {
        id: 7,
        name: "حلقات البصل المقلية",
        description: "حلقات بصل مقرمشة مع صلصة خاصة",
        price: "3.250 د.ك",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d",
        isPopular: true
      }
    ],
    salads: [
      {
        id: 8,
        name: "سلطة يونانية",
        description: "خضار طازجة مع جبنة فيتا",
        price: "4.000 د.ك",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
      },
      {
        id: 9,
        name: "سلطة الكينوا",
        description: "كينوا مع خضار وصلصة خاصة",
        price: "4.750 د.ك",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      }
    ],
    drinks: [
      {
        id: 10,
        name: "عصير برتقال طازج",
        description: "عصير برتقال طبيعي 100%",
        price: "2.000 د.ك",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423"
      },
      {
        id: 11,
        name: "سموذي المانجو",
        description: "مانجو طازج مع الحليب",
        price: "2.500 د.ك",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4"
      }
    ],
    desserts: [
      {
        id: 12,
        name: "تشيز كيك",
        description: "تشيز كيك نيويورك مع صلصة التوت",
        price: "3.500 د.ك",
        image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd",
        isPopular: true
      },
      {
        id: 13,
        name: "براونيز",
        description: "براونيز شوكولاتة مع آيس كريم فانيليا",
        price: "3.250 د.ك",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e"
      }
    ],
    sides: [
      {
        id: 14,
        name: "بطاطس مقلية",
        description: "بطاطس مقلية مقرمشة",
        price: "2.000 د.ك",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d"
      },
      {
        id: 15,
        name: "أرز بالزعفران",
        description: "أرز بسمتي مع الزعفران",
        price: "2.250 د.ك",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6"
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