import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ProductTemplate4 = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { toast } = useToast();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // تحديث البيانات لتشمل المزيد من الصور
  const product = {
    id: productId,
    name: "برجر لحم واجيو",
    description: "برجر لحم واجيو مشوي على الفحم مع جبنة شيدر ذائبة وصلصة خاصة، يقدم مع بطاطس مقلية وسلطة كول سلو",
    price: "8.500 د.ك",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
      "https://images.unsplash.com/photo-1551782450-17144efb9c50",
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b"
    ],
    category: "برجر",
    preparationTime: "20-25 دقيقة"
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } catch (error) {
      toast({
        title: "تم نسخ الرابط",
        description: "تم نسخ رابط المنتج إلى الحافظة",
      });
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm shadow-sm text-charcoal hover:bg-white/80 transition-all duration-300"
            onClick={() => navigate(-1)}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm shadow-sm text-charcoal hover:bg-white/80 transition-all duration-300"
            onClick={handleShare}
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>

      {/* Product Images Carousel */}
      <div className="w-full aspect-[4/3] relative">
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isImageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Carousel 
            className="w-full h-full overflow-hidden"
            onSlideChange={setCurrentSlide}
          >
            <CarouselContent className="h-full">
              {product.images.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src={image}
                      alt={`${product.name} - صورة ${index + 1}`}
                      className="w-full h-full object-cover"
                      onLoad={() => setIsImageLoaded(true)}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Modern Pagination Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {product.images.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-white w-4 shadow-lg" 
                    : "bg-white/40 backdrop-blur-sm"
                }`}
                whileHover={{ scale: 1.2 }}
                animate={{
                  width: index === currentSlide ? 16 : 8,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Product Details */}
      <motion.div 
        className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-2xl mx-auto -mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg">
          <div className="space-y-6">
            {/* Title and Price */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-charcoal">{product.name}</h1>
              <span className="text-xl font-bold text-primary bg-primary/5 px-4 py-1.5 rounded-full shadow-sm">
                {product.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductTemplate4;