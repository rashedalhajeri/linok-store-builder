import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Share2, Heart } from "lucide-react";
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:bg-gray-100 rounded-full"
            onClick={() => navigate(-1)}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:bg-gray-100 rounded-full"
              onClick={toggleFavorite}
            >
              <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:bg-gray-100 rounded-full"
              onClick={handleShare}
            >
              <Share2 className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Images Carousel */}
      <motion.div 
        className="relative w-full h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] mt-16"
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
                <img
                  src={image}
                  alt={`${product.name} - صورة ${index + 1}`}
                  className="w-full h-full object-cover"
                  onLoad={() => setIsImageLoaded(true)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
          {product.images.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-110 shadow-lg ring-2 ring-white/50" 
                  : "bg-black/20 backdrop-blur-sm"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Product Details */}
      <motion.div 
        className="relative px-6 pb-8 mt-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="space-y-6">
          {/* Category Badge */}
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
            {product.category}
          </Badge>

          {/* Title and Price */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold text-primary">
                {product.price}
              </span>
              <Badge variant="outline" className="bg-gray-50">
                {product.preparationTime}
              </Badge>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            {product.description}
          </p>

          {/* Ingredients */}
          <div className="space-y-3 bg-gray-50 p-4 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900">المكونات:</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white text-gray-700 border-gray-200 text-sm py-1.5 px-3 rounded-full"
                >
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button 
            className="w-full bg-primary hover:bg-primary-dark text-white py-6 rounded-xl text-lg font-semibold shadow-lg shadow-primary/20 transition-all duration-300"
          >
            إضافة إلى السلة
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductTemplate4;