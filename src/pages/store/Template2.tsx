import { useNavigate, useParams } from "react-router-dom";
import { StoreHeader } from "@/components/store/template2/StoreHeader";
import { FeaturedAdCard } from "@/components/store/template2/FeaturedAdCard";
import { SearchBar } from "@/components/store/SearchBar";
import { motion } from "framer-motion";

const StoreTemplate2 = () => {
  const navigate = useNavigate();
  const { storeId } = useParams();

  const storeInfo = {
    name: "متجر السيارات الفاخرة",
    location: "الكويت - شارع الخليج العربي",
    description: "نحن متجر متخصص في بيع السيارات الفاخرة والرياضية. نقدم مجموعة واسعة من أفخم السيارات العالمية مع خدمة عملاء متميزة وضمان الجودة.",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    socialLinks: {
      whatsapp: "+96512345678",
      phone: "+96587654321",
      tiktok: "@luxurycars"
    }
  };

  const featuredAds = [
    {
      id: 1,
      title: "مرسيدس S-Class 2023",
      price: "45,000 د.ك",
      location: "العاصمة",
      date: "اليوم",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "سيارات فاخرة",
      views: 156,
      condition: "جديد"
    },
    {
      id: 2,
      title: "بي ام دبليو X7 2024",
      price: "38,000 د.ك",
      location: "حولي",
      date: "أمس",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      category: "سيارات فاخرة",
      views: 98,
      condition: "مستعمل"
    },
    {
      id: 3,
      title: "لكزس LX 600 2024",
      price: "42,000 د.ك",
      location: "السالمية",
      date: "منذ يومين",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      category: "سيارات فاخرة",
      views: 234,
      condition: "جديد"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F6F8]">
      <StoreHeader 
        storeName={storeInfo.name}
        location={storeInfo.location}
        description={storeInfo.description}
        logo={storeInfo.logo}
        socialLinks={storeInfo.socialLinks}
      />

      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <SearchBar onSearch={(query) => console.log(query)} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold mb-8 text-[#1A1A1A]"
        >
          إعلانات مميزة
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {featuredAds.map((ad, index) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="w-full"
            >
              <FeaturedAdCard
                {...ad}
                onClick={() => navigate(`/ad/template2/${ad.id}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StoreTemplate2;
