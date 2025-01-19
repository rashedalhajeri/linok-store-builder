import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { SocialLinks } from "@/components/store/template4/SocialLinks";

const ProductTemplate4 = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // هذه البيانات ستأتي من API في التطبيق الحقيقي
  const product = {
    id: productId,
    name: "برجر لحم واجيو",
    description: "برجر لحم واجيو مشوي مع جبنة شيدر وصلصة خاصة",
    price: 8.500,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    isSpicy: true,
    isPopular: true,
  };

  // بيانات وسائل التواصل الاجتماعي
  const socialLinks = [
    {
      id: 1,
      icon: "/lovable-uploads/f4e6c555-66b3-45c1-a211-25bca9083a81.png",
      label: "واتساب",
      href: "https://wa.me/1234567890",
      bgColor: "bg-[#25D366]/10",
    },
    {
      id: 2,
      icon: "/lovable-uploads/b7fc8d57-a3ea-476d-a1c2-c5f272c432e9.png",
      label: "انستغرام",
      href: "https://instagram.com",
      bgColor: "bg-[#E4405F]/10",
    },
    {
      id: 3,
      icon: "/lovable-uploads/5d02b4d3-9041-47ca-8ac3-08cf337c2be1.png",
      label: "تويتر",
      href: "https://twitter.com",
      bgColor: "bg-[#1DA1F2]/10",
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10 py-6">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-4">
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => navigate(-1)}
          >
            رجوع
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* صورة المنتج */}
            <div className="relative aspect-video">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* تفاصيل المنتج */}
            <div className="p-6">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="text-xl font-bold text-primary">
                {product.price.toFixed(3)} د.ك
              </div>
            </div>
          </motion.div>
        </Card>

        {/* أزرار المشاركة */}
        <SocialLinks links={socialLinks} />
      </div>
    </div>
  );
};

export default ProductTemplate4;