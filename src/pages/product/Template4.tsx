import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const ProductTemplate4 = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { toast } = useToast();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Temporary mock data - replace with actual data fetching
  const product = {
    id: productId,
    name: "برجر لحم واجيو",
    description: "برجر لحم واجيو مشوي على الفحم مع جبنة شيدر ذائبة وصلصة خاصة، يقدم مع بطاطس مقلية وسلطة كول سلو",
    price: "8.500 د.ك",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    rating: 4.8,
    reviews: 245,
    isSpicy: true,
    isPopular: true,
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => navigate(-1)}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={handleShare}
          >
            <Share2 className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div 
        className="relative w-full h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
      </motion.div>

      {/* Product Details */}
      <motion.div 
        className="relative -mt-32 px-6 pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="space-y-6">
          {/* Title and Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {product.isSpicy && (
                <Badge variant="secondary" className="bg-red-500/10 text-red-400 hover:bg-red-500/20 text-sm">
                  حار 🌶️
                </Badge>
              )}
              {product.isPopular && (
                <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 text-sm">
                  الأكثر طلباً ⭐️
                </Badge>
              )}
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 text-amber-400">
              <Star className="fill-amber-400 h-5 w-5" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-gray-400 text-sm">({product.reviews} تقييم)</span>
            </div>
          </div>

          {/* Price */}
          <div className="inline-block bg-gradient-to-r from-emerald-600/20 to-emerald-500/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-emerald-500/20">
            <span className="text-3xl font-bold text-emerald-400">{product.price}</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* Ingredients */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">المكونات:</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 border-white/10 transition-colors text-sm"
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