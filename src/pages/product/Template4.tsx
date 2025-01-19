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
    <div className="min-h-screen bg-gray-100">
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
      </motion.div>

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