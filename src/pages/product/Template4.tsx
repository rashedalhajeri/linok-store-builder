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
    ingredients: ["لحم واجيو", "جبنة شيدر", "خس", "طماطم", "بصل", "مخلل", "صلصة خاصة"],
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-charcoal hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => navigate(-1)}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-charcoal hover:bg-gray-100 rounded-full transition-colors"
              onClick={toggleFavorite}
            >
              <Heart className={`h-6 w-6 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-charcoal hover:bg-gray-100 rounded-full transition-colors"
              onClick={handleShare}
            >
              <Share2 className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Product Images Carousel */}
      <motion.div 
        className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Carousel 
          className="w-full h-full"
          onSlideChange={setCurrentSlide}
        >
          <CarouselContent className="h-full">
            {product.images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <motion.img
                  src={image}
                  alt={`${product.name} - صورة ${index + 1}`}
                  className="w-full h-full object-cover rounded-b-3xl"
                  onLoad={() => setIsImageLoaded(true)}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
          {product.images.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-110 shadow-lg" 
                  : "bg-white/40 backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Product Details */}
      <motion.div 
        className="relative -mt-8 px-6 pb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-100/50">
          <div className="space-y-6">
            {/* Category & Time Badge */}
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                <Tag className="w-4 h-4 ml-1" />
                {product.category}
              </Badge>
              <Badge variant="outline" className="bg-gray-50 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {product.preparationTime}
              </Badge>
            </div>

            {/* Title and Price */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-charcoal">{product.name}</h1>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  {product.price}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              {product.description}
            </p>

            {/* Ingredients */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-charcoal">المكونات:</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-gray-50/50 text-muted border-gray-100 text-sm py-1.5 px-3 rounded-full"
                  >
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="w-full bg-gradient-button text-white py-6 rounded-xl text-lg font-semibold shadow-lg shadow-primary/20 transition-all duration-300"
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