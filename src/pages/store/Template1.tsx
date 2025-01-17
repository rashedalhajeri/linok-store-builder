import { useState } from "react";
import { StoreCover } from "@/components/store/StoreCover";
import { SearchBar } from "@/components/store/SearchBar";
import { CategoryTabs } from "@/components/store/CategoryTabs";
import { MenuItem } from "@/components/store/MenuItem";
import { SocialLinks } from "@/components/store/SocialLinks";
import { Instagram, MessageSquare, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StoreTemplate1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  const navigate = useNavigate();

  const categories = [
    { id: "electronics", label: "إلكترونيات" },
    { id: "clothing", label: "ملابس" },
    { id: "furniture", label: "أثاث" },
    { id: "books", label: "كتب" },
    { id: "sports", label: "رياضة" },
    { id: "toys", label: "ألعاب" },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <Instagram className="w-5 h-5 text-pink-600" />,
      label: "Instagram",
      href: "https://instagram.com",
      bgColor: "bg-white"
    },
    {
      id: 2,
      icon: <MessageSquare className="w-5 h-5 text-green-600" />,
      label: "WhatsApp",
      href: "https://wa.me/1234567890",
      bgColor: "bg-white"
    },
    {
      id: 3,
      icon: <Phone className="w-5 h-5 text-gray-600" />,
      label: "Phone",
      href: "tel:+1234567890",
      bgColor: "bg-white"
    }
  ];

  const products = {
    electronics: [
      {
        id: 1,
        name: "ايفون 15 برو ماكس",
        description: "أحدث هواتف آبل مع كاميرا متطورة وشاشة عالية الجودة",
        price: "1499.000",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        isPopular: true
      },
      {
        id: 2,
        name: "سامسونج جالكسي S23",
        description: "هاتف ذكي بمواصفات عالية وكاميرا احترافية",
        price: "999.000",
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91",
        isPopular: true
      },
      {
        id: 3,
        name: "ماك بوك برو",
        description: "حاسوب محمول للمحترفين مع معالج M2",
        price: "1999.000",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
        isNew: true
      }
    ],
    clothing: [
      {
        id: 4,
        name: "قميص قطني",
        description: "قميص رجالي بجودة عالية",
        price: "45.000",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        isNew: true
      },
      {
        id: 5,
        name: "بنطلون جينز",
        description: "جينز عصري بقصة مستقيمة",
        price: "65.000",
        image: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6",
        isPopular: true
      }
    ],
    furniture: [
      {
        id: 6,
        name: "طاولة طعام",
        description: "طاولة خشبية فاخرة تتسع لـ 6 أشخاص",
        price: "299.000",
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b",
        isPopular: true
      }
    ]
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleItemClick = (itemId: number) => {
    navigate(`/product/template1/${itemId}`);
  };

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10">
      <StoreCover 
        language={language}
        onToggleLanguage={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      />
      
      <div className="max-w-3xl mx-auto px-4 -mt-8 relative z-10">
        <SearchBar onSearch={handleSearch} />
        
        <div className="mt-8">
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4">
          {products[selectedCategory]?.map((item) => (
            <div key={item.id} onClick={() => handleItemClick(item.id)}>
              <MenuItem item={item} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 pb-8">
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate1;