import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Share2, Heart, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const AdTemplate2 = () => {
  const navigate = useNavigate();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const ad = {
    title: "عنوان الإعلان",
    price: "1,500 د.ك",
    description: "وصف تفصيلي للإعلان يشرح جميع المميزات والتفاصيل المهمة التي يحتاج المشتري معرفتها",
    location: "الكويت - حولي",
    date: "2024/03/20",
    views: 150,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200"
      },
      {
        type: "video",
        url: "https://example.com/video.mp4",
        thumbnail: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
        thumbnail: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=200"
      }
    ],
    seller: {
      name: "اسم البائع",
      rating: 4.5,
      memberSince: "2023",
      phone: "+965 9999 9999",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
    }
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === ad.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === 0 ? ad.media.length - 1 : prev - 1
    );
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
              {/* Media Gallery Section */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                  {ad.media[currentMediaIndex].type === 'video' ? (
                    <video 
                      src={ad.media[currentMediaIndex].url}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={ad.media[currentMediaIndex].url}
                      alt={`صورة ${currentMediaIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevMedia}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextMedia}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-5 gap-2">
                  {ad.media.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        currentMediaIndex === index 
                          ? 'border-primary ring-2 ring-primary/20' 
                          : 'border-transparent hover:border-gray-200'
                      }`}
                    >
                      <img 
                        src={media.thumbnail}
                        alt={`صورة مصغرة ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {media.type === 'video' && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {ad.title}
                  </h1>
                  <p className="text-2xl font-bold text-emerald-500">
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

                <Card className="p-6 bg-gray-50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={ad.seller.avatar} 
                          alt={ad.seller.name}
                          className="w-12 h-12 rounded-full bg-gray-200"
                        />
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
                    <Heart className="w-4 h-4 ml-2" />
                    حفظ الإعلان
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 ml-2" />
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