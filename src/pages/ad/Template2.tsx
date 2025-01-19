import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Share2, Heart } from "lucide-react";

const AdTemplate2 = () => {
  const navigate = useNavigate();

  const ad = {
    title: "عنوان الإعلان",
    price: "1,500 د.ك",
    description: "وصف تفصيلي للإعلان يشرح جميع المميزات والتفاصيل المهمة التي يحتاج المشتري معرفتها",
    location: "الكويت - حولي",
    date: "2024/03/20",
    views: 150,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
    ],
    seller: {
      name: "اسم البائع",
      rating: 4.5,
      memberSince: "2023",
      phone: "+965 9999 9999"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden bg-white shadow-lg rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-8 p-6">
              {/* Images Section */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={ad.images[0]} 
                    alt={ad.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {ad.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={image}
                        alt={`${ad.title} ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {ad.title}
                  </h1>
                  <p className="text-2xl font-bold text-primary">
                    {ad.price}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{ad.location}</span>
                    <span>{ad.date}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {ad.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>المشاهدات: {ad.views}</span>
                  </div>
                </div>

                <Card className="p-4 bg-gray-50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                        <div>
                          <h3 className="font-medium text-gray-900">{ad.seller.name}</h3>
                          <p className="text-sm text-gray-500">عضو منذ {ad.seller.memberSince}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        تقييم: {ad.seller.rating}/5
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        className="w-full flex items-center justify-center gap-2"
                        onClick={() => navigate("/contact/template2")}
                      >
                        <MessageSquare className="w-4 h-4" />
                        راسل البائع
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full"
                        onClick={() => window.location.href = `tel:${ad.seller.phone}`}
                      >
                        اتصل الآن
                      </Button>
                    </div>
                  </div>
                </Card>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Heart className="w-4 h-4 mr-2" />
                    حفظ الإعلان
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    مشاركة
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AdTemplate2;