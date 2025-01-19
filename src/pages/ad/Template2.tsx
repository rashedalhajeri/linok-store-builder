import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Share2, Heart, Globe, Calendar, Gauge, Car, Image, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-store">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl overflow-hidden border border-primary/10"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/10">
          <div className="flex gap-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-primary/5 transition-colors"
            >
              <Share2 className="w-5 h-5 text-primary-foreground" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-red-50 transition-colors"
            >
              <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
            </motion.button>
          </div>
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full hover:bg-primary/5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full aspect-[4/3] bg-gray-50">
          <Carousel 
            className="w-full h-full" 
            onSlideChange={handleSlideChange}
            opts={{
              loop: true,
              align: "start"
            }}
          >
            <CarouselContent>
              {ad.images.map((image, index) => (
                <CarouselItem key={index}>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img 
                      src={image}
                      alt={`${ad.title} - صورة ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {!isMobile && (
              <>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-primary/10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-primary/10" />
              </>
            )}
          </Carousel>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-primary-foreground shadow-sm border border-primary/10">
            <Image className="w-4 h-4" />
            <span className="text-sm font-medium">
              {currentSlide} / {ad.images.length}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title and Price */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-900">{ad.title}</h1>
              <span className="text-xs text-gray-500">{ad.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-gray-600 text-sm">{ad.specs.location}</span>
            </div>
            <p className="text-2xl font-bold text-primary-foreground">{ad.price}</p>
          </motion.div>

          {/* Specifications */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold text-gray-900">المواصفات</h2>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-gradient-card p-4 rounded-2xl shadow-sm"
              >
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">سنة الصنع</p>
                  <span className="font-medium text-gray-900">{ad.specs.year}</span>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-gradient-card p-4 rounded-2xl shadow-sm"
              >
                <Car className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">اللون</p>
                  <span className="font-medium text-gray-900">{ad.specs.color}</span>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-gradient-card p-4 rounded-2xl shadow-sm"
              >
                <Gauge className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">المسافة</p>
                  <span className="font-medium text-gray-900">{ad.specs.mileage}</span>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-gradient-card p-4 rounded-2xl shadow-sm"
              >
                <Globe className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">المقاعد</p>
                  <span className="font-medium text-gray-900">{ad.specs.seats}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-3"
          >
            <h2 className="text-lg font-semibold text-gray-900">الوصف</h2>
            <p className="text-gray-600 leading-relaxed">{ad.description}</p>
          </motion.div>
        </div>

        {/* Contact Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="sticky bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm border-t border-primary/10"
        >
          <div className="flex gap-3 max-w-3xl mx-auto">
            <Button 
              className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground shadow-sm transition-all duration-300"
              onClick={() => window.location.href = `tel:${ad.phone}`}
            >
              اتصال
            </Button>
            <Button 
              className="flex-1 bg-secondary hover:bg-secondary-dark text-secondary-foreground shadow-sm transition-all duration-300"
            >
              واتساب
            </Button>
            <Button 
              variant="outline"
              className="aspect-square bg-white hover:bg-gray-50 border-gray-200"
            >
              <MessageSquare className="w-5 h-5 text-gray-500" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdTemplate2;