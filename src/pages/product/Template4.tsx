import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Share2, ShoppingCart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SocialLinks } from "@/components/store/SocialLinks";

const ProductTemplate4 = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { toast } = useToast();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const socialLinks = [
    {
      id: 1,
      icon: "/lovable-uploads/f4e6c555-66b3-45c1-a211-25bca9083a81.png",
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${product.name} - ${window.location.href}`)}`,
      bgColor: "bg-[#25D366]/10 hover:bg-[#25D366]/20"
    },
    {
      id: 2,
      icon: "/lovable-uploads/b7fc8d57-a3ea-476d-a1c2-c5f272c432e9.png",
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${product.name} - ${window.location.href}`)}`,
      bgColor: "bg-black/10 hover:bg-black/20"
    }
  ];

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

  const handleAddToCart = () => {
    toast({
      title: "تمت الإضافة إلى السلة",
      description: "تم إضافة المنتج إلى سلة المشتريات",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Main Content */}
      <div className="w-full">
        {/* Product Images Carousel */}
        <div className="w-full aspect-square relative">
          <motion.div 
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isImageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Carousel 
              className="w-full h-full"
              onSlideChange={setCurrentSlide}
              opts={{
                loop: true,
                align: "start",
              }}
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
                      <img
                        src={image}
                        alt={`${product.name} - صورة ${index + 1}`}
                        className="w-full h-full object-cover"
                        onLoad={() => setIsImageLoaded(true)}
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>

        {/* Product Details */}
        <motion.div 
          className="relative px-4 sm:px-6 lg:px-8 pb-8 -mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            {/* Title and Price */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold text-charcoal">{product.name}</h1>
              <span className="text-lg font-bold text-primary">
                {product.price}
              </span>
            </div>

            {/* Preparation Time */}
            <div className="flex items-center gap-2 text-muted mb-4">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{product.preparationTime}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Social Links */}
            <div className="flex justify-center mb-6">
              <SocialLinks links={socialLinks} />
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-gradient-button hover:opacity-90 transition-opacity duration-300 gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              إضافة إلى السلة
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="mt-4">
            <div className="grid grid-cols-5 gap-1">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative aspect-square w-full rounded-md overflow-hidden transition-all duration-300 ${
                    index === currentSlide 
                      ? 'ring-1 ring-primary ring-offset-1' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`صورة مصغرة ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductTemplate4;
