import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const ProductTemplate4 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: "2",
    name: "برجر لحم واجيو",
    description: "برجر لحم واجيو مشوي على الفحم مع جبنة شيدر ذائبة وصلصة خاصة، يقدم مع بطاطس مقلية وسلطة كول سلو",
    price: "8.500 د.ك",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
      "https://images.unsplash.com/photo-1586816001966-79b736744398",
    ],
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
    } catch {
      toast({
        title: "تم نسخ الرابط",
        description: "تم نسخ رابط المنتج إلى الحافظة",
      });
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
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

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Image Gallery */}
          <motion.div 
            className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Thumbnail Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedImage === index ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews} تقييم)</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <span className="text-2xl font-bold text-white">{product.price}</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2">
              {product.isSpicy && (
                <Badge variant="secondary" className="bg-red-500/10 text-red-400 hover:bg-red-500/20">
                  حار 🌶️
                </Badge>
              )}
              {product.isPopular && (
                <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20">
                  الأكثر طلباً ⭐️
                </Badge>
              )}
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
                    className="bg-white/5 hover:bg-white/10 border-white/10 text-white transition-colors"
                  >
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button 
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-6 text-lg rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => {
                toast({
                  title: "تمت الإضافة للسلة",
                  description: "تم إضافة المنتج إلى سلة المشتريات",
                });
              }}
            >
              إضافة للسلة
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductTemplate4;