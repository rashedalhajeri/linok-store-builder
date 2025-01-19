import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Share2 } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Back Button and Share */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/20 to-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-900 hover:bg-white/20"
            onClick={() => navigate(-1)}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-900 hover:bg-white/20"
            onClick={handleShare}
          >
            <Share2 className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Product Image */}
      <motion.div 
        className="relative w-full h-[40vh] overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent" />
      </motion.div>

      {/* Product Details */}
      <motion.div 
        className="relative px-4 pb-8 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="space-y-6">
          {/* Badges - Moved above product name */}
          <div className="flex gap-2">
            {product.isSpicy && (
              <Badge variant="secondary" className="bg-red-500/10 text-red-500 hover:bg-red-500/20">
                حار 🌶️
              </Badge>
            )}
            {product.isPopular && (
              <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
                الأكثر طلباً ⭐️
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          {/* Price - Changed to black */}
          <div className="inline-block bg-gray-100/80 backdrop-blur-sm px-6 py-2 rounded-full">
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* Ingredients */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">المكونات:</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white/80 text-gray-700 hover:bg-gray-100 transition-colors"
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