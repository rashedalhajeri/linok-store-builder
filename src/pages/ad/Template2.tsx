import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Share2, Heart, Globe, Calendar, Gauge, Car, Image } from "lucide-react";
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
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    ],
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
          <div className="flex gap-4">
            <Share2 className="w-6 h-6 text-primary hover:text-primary-dark transition-colors" />
            <Heart className="w-6 h-6 text-primary hover:text-red-500 transition-colors" />
          </div>
          <button onClick={() => navigate(-1)} className="text-primary hover:text-primary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="relative w-full aspect-square">
          <Carousel 
            className="w-full" 
            onSlideChange={handleSlideChange}
            opts={{
              loop: true,
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
            {!isMobile && (
              <>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </>
            )}
          </Carousel>
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-3 text-white z-10 transition-all duration-300 hover:bg-black/80">
            <Image className="w-4 h-4" />
            <span className="text-sm font-medium">
              {currentSlide} / {ad.images.length}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-2 border-b bg-gradient-card">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-gray-900 animate-fade-in">{ad.title}</h1>
            <p className="text-sm text-primary">{ad.date}</p>
          </div>
          <p className="text-2xl font-bold text-primary animate-fade-in delay-100">{ad.price}</p>
        </div>

        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            مواصفات الاعلان
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-gray-50/80 p-4 rounded-xl hover:bg-primary/5 transition-colors animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">سنة الصنع</p>
                <span className="text-sm font-medium text-gray-900">{ad.specs.year}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50/80 p-4 rounded-xl hover:bg-primary/5 transition-colors animate-fade-in delay-100">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Car className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">اللون</p>
                <span className="text-sm font-medium text-gray-900">{ad.specs.color}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50/80 p-4 rounded-xl hover:bg-primary/5 transition-colors animate-fade-in delay-200">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Gauge className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">المسافة المقطوعة</p>
                <span className="text-sm font-medium text-gray-900">{ad.specs.mileage}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50/80 p-4 rounded-xl hover:bg-primary/5 transition-colors animate-fade-in delay-300">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">المقاعد</p>
                <span className="text-sm font-medium text-gray-900">{ad.specs.seats}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            الوصف
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">{ad.description}</p>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm border-t">
          <div className="flex gap-2 max-w-lg mx-auto">
            <Button 
              className="flex-1 bg-primary hover:bg-primary-dark text-white transition-colors duration-300"
              onClick={() => window.location.href = `tel:${ad.phone}`}
            >
              اتصل الآن
            </Button>
            <Button 
              className="flex-1 bg-accent hover:bg-accent-dark text-white transition-colors duration-300"
            >
              واتساب
            </Button>
            <Button 
              className="aspect-square bg-primary-dark hover:bg-primary text-white transition-colors duration-300 p-2"
            >
              <MessageSquare className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdTemplate2;