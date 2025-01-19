import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Share2, Heart, Globe, Calendar, Gauge, Car, Image, Phone, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

const AdTemplate2 = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(1);

  const ad = {
    title: "كابرس 90",
    price: "2,100 د.ك",
    date: "منذ ساعة",
    phone: "+965 9999 9999",
    description: "سيارة بحالة ممتازة، صيانة دورية، جميع القطع أصلية",
    specs: {
      year: "1990",
      mileage: "250 كم",
      color: "أبيض",
      location: "الكويت",
      seats: "8"
    },
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    ],
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-24">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-green-100">
          <div className="flex gap-4">
            <Share2 className="w-6 h-6 text-black hover:text-gray-700 transition-colors cursor-pointer" />
            <Heart className="w-6 h-6 text-black hover:text-gray-700 transition-colors cursor-pointer" />
          </div>
          <button onClick={() => navigate(-1)} className="text-black hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="relative w-full aspect-square bg-green-50">
          {ad.images.length > 0 ? (
            <Carousel 
              className="w-full" 
              onSlideChange={handleSlideChange}
              opts={{
                loop: ad.images.length > 1,
                align: "start"
              }}
            >
              <CarouselContent>
                {ad.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full aspect-square">
                      <img 
                        src={image}
                        alt={`${ad.title} - صورة ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {!isMobile && ad.images.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                </>
              )}
            </Carousel>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Image className="w-16 h-16 text-gray-400" />
            </div>
          )}
          {ad.images.length > 0 && (
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-3 text-white z-10 transition-all duration-300 hover:bg-black/80">
              <Image className="w-4 h-4" />
              <span className="text-sm font-medium">
                {currentSlide} / {ad.images.length}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 space-y-2 border-b bg-gradient-card">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-gray-900 animate-fade-in">{ad.title}</h1>
            <p className="text-sm text-black">{ad.date}</p>
          </div>
          <p className="text-2xl font-bold text-secondary-dark animate-fade-in delay-100">{ad.price}</p>
        </div>

        <div className="p-6 border-b border-green-100">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            مواصفات الاعلان
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-green-50/80 p-4 rounded-xl hover:bg-primary/5 transition-colors animate-fade-in group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Calendar className="w-4 h-4 text-primary-dark" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">سنة الصنع</p>
                <span className="text-sm font-medium text-gray-900">{ad.specs.year}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50/80 p-4 rounded-xl hover:bg-primary/5 transition-colors animate-fade-in delay-100 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Car className="w-4 h-4 text-primary-dark" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">اللون</p>
                <span className="text-sm font-medium text-gray-900">{ad.specs.color}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50/80 p-4 rounded-xl hover:bg-primary/5 transition-colors animate-fade-in delay-200 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Gauge className="w-4 h-4 text-primary-dark" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">المسافة المقطوعة</p>
                <span className="text-sm font-medium text-gray-900">{ad.specs.mileage}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50/80 p-4 rounded-xl hover:bg-primary/5 transition-colors animate-fade-in delay-300 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Globe className="w-4 h-4 text-primary-dark" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">المقاعد</p>
                <span className="text-sm font-medium text-gray-900">{ad.specs.seats}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-b border-green-100">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            الوصف
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">{ad.description}</p>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm border-t border-green-100">
          <div className="flex gap-2 max-w-lg mx-auto">
            <Button 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              onClick={() => window.location.href = `tel:${ad.phone}`}
            >
              <Phone className="w-5 h-5" />
              اتصل الآن
            </Button>
            <Button 
              className="flex-1 bg-secondary hover:bg-secondary-dark text-white transition-colors duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              واتساب
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdTemplate2;