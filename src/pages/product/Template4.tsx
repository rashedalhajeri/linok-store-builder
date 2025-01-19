import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SocialLinks } from "@/components/store/SocialLinks";

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
  };

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
    <div className="min-h-screen bg-[#1A1F2C] py-6">
      <div className="max-w-2xl mx-auto px-4">
        <Button
          variant="ghost"
          className="text-white mb-6 hover:bg-white/10"
          onClick={() => navigate(-1)}
        >
          <ArrowRight className="h-5 w-5 ml-2" />
          رجوع
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* صورة المنتج */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* تفاصيل المنتج */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">
              {product.name}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>
            <div className="text-2xl font-bold text-white">
              {product.price.toFixed(3)} د.ك
            </div>
          </div>

          {/* أزرار المشاركة */}
          <div className="pt-6">
            <SocialLinks links={socialLinks} />
          </div>

          <div className="text-center pt-8 pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5"
            >
              <span className="text-sm text-gray-400">صنع بكل حب بواسطة</span>
              <img 
                src="/logo.png" 
                alt="Platform Logo" 
                className="w-5 h-5 object-contain"
              />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                منصتنا
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductTemplate4;