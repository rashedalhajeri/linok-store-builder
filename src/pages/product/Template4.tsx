import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductTemplate4 = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { toast } = useToast();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Temporary mock data - replace with actual data fetching
  const product = {
    id: productId,
    name: "برجر لحم واجيو",
    description: "برجر لحم واجيو مشوي على الفحم مع جبنة شيدر ذائبة وصلصة خاصة، يقدم مع بطاطس مقلية وسلطة كول سلو",
    price: "8.500 د.ك",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
    ],
    ingredients: ["لحم واجيو", "جبنة شيدر", "خس", "طماطم", "بصل", "مخلل", "صلصة خاصة"]
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

  const handleSlideChange = (api: any) => {
    setCurrentSlide(api.selectedScrollSnap());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button and Share */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-black hover:bg-black/10"
            onClick={() => navigate(-1)}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-black hover:bg-black/10"
            onClick={handleShare}
          >
            <Share2 className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Product Images Carousel */}
      <div className="relative w-full h-[60vh] bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isImageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Carousel 
              className="w-full h-full"
              onSelect={handleSlideChange}
            >
              <CarouselContent className="h-full">
                {product.images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <motion.div
                      className="relative w-full h-full"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        filter: "brightness(0.9)"
                      }}
                      transition={{ 
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - صورة ${index + 1}`}
                        className="w-full h-full object-cover"
                        onLoad={() => setIsImageLoaded(true)}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="left-6 bg-white/10 backdrop-blur-md hover:bg-white/20 border-0 transition-all duration-300" />
              <CarouselNext className="right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 border-0 transition-all duration-300" />
              
              {/* Image Counter and Progress */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
                <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium">
                  {currentSlide + 1} / {product.images.length}
                </div>
                <div className="flex gap-2">
                  {product.images.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/30'}`}
                      animate={{
                        scale: index === currentSlide ? 1.2 : 1,
                        opacity: index === currentSlide ? 1 : 0.5
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </Carousel>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Product Details */}
      <motion.div 
        className="relative px-4 pb-8 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-black">{product.name}</h1>

          {/* Price */}
          <div className="inline-block bg-black/5 backdrop-blur-sm px-6 py-2 rounded-full">
            <span className="text-2xl font-bold text-black">{product.price}</span>
          </div>

          {/* Description */}
          <p className="text-black/80 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* Ingredients */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-black">المكونات:</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white/80 hover:bg-white text-black border-black/10"
                >
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductTemplate4;