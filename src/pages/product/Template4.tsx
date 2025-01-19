import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Share2, Heart, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  const [isFavorite, setIsFavorite] = useState(false);

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

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "تمت إزالة المنتج من المفضلة" : "تمت إضافة المنتج للمفضلة",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Now showing only icons */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 text-charcoal hover:bg-white transition-colors"
            onClick={() => navigate(-1)}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 text-charcoal hover:bg-white transition-colors"
              onClick={toggleFavorite}
            >
              <Heart className={`h-5 w-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 text-charcoal hover:bg-white transition-colors"
              onClick={handleShare}
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Product Images Carousel */}
      <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10 rounded-b-[3rem]"></div>
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isImageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Carousel 
            className="w-full h-full overflow-hidden rounded-b-[3rem] shadow-xl"
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
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {product.images.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-white scale-110 shadow-lg" 
                    : "bg-white/40 backdrop-blur-sm"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Product Details */}
      <motion.div 
        className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-2xl mx-auto mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="space-y-6">
            {/* Category & Time Badge */}
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="bg-gray-50 border-gray-200 text-charcoal">
                <Tag className="w-4 h-4 ml-1" />
                {product.category}
              </Badge>
              <Badge variant="outline" className="bg-gray-50 border-gray-200 text-charcoal flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {product.preparationTime}
              </Badge>
            </div>

            {/* Title and Price */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-charcoal">{product.name}</h1>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold text-charcoal">
                  {product.price}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {product.description}
            </p>

            {/* Add to Cart Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="w-full bg-charcoal hover:bg-gray-800 text-white py-6 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              >
                إضافة إلى السلة
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductTemplate4;