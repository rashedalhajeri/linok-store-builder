import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const ProductTemplate4 = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // هذه البيانات ستأتي من API في التطبيق الحقيقي
  const product = {
    id: productId,
    name: "برجر لحم واجيو",
    description: "برجر لحم واجيو مشوي مع جبنة شيدر وصلصة خاصة",
    price: 8.500,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    sizes: [
      { id: "small", name: "صغير", price: 7.500 },
      { id: "medium", name: "وسط", price: 8.500 },
      { id: "large", name: "كبير", price: 9.500 },
    ],
    extras: [
      { id: "cheese", name: "جبنة إضافية", price: 0.500 },
      { id: "mushroom", name: "مشروم", price: 0.750 },
      { id: "bacon", name: "لحم مقدد", price: 1.000 },
    ],
    isSpicy: true,
    isPopular: true,
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity(prev => Math.min(prev + 1, 10));
    } else {
      setQuantity(prev => Math.max(prev - 1, 1));
    }
  };

  const handleExtraToggle = (extraId: string) => {
    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const calculateTotalPrice = () => {
    const sizePrice = product.sizes.find(size => size.id === selectedSize)?.price || product.price;
    const extrasPrice = selectedExtras.reduce((total, extraId) => {
      const extra = product.extras.find(e => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);
    return (sizePrice + extrasPrice) * quantity;
  };

  const handleAddToCart = () => {
    toast({
      title: "تمت الإضافة للسلة",
      description: `تمت إضافة ${product.name} إلى سلة المشتريات`,
    });
    // هنا سيتم إضافة المنتج للسلة
    navigate("/cart/template4");
  };

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
          <div className="md:flex">
            {/* صورة المنتج */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <div className="relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* تفاصيل المنتج */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 md:w-1/2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </div>
                <div className="flex gap-2">
                  {product.isSpicy && (
                    <Badge variant="secondary" className="bg-red-50 text-red-600">
                      حار 🌶️
                    </Badge>
                  )}
                  {product.isPopular && (
                    <Badge variant="secondary" className="bg-orange-50 text-orange-600">
                      الأكثر طلباً ⭐️
                    </Badge>
                  )}
                </div>
              </div>

              {/* الأحجام */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">اختر الحجم</h3>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <Button
                      key={size.id}
                      variant={selectedSize === size.id ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSelectedSize(size.id)}
                    >
                      {size.name}
                      <span className="text-sm mr-1">
                        ({size.price.toFixed(3)} د.ك)
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* الإضافات */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">إضافات</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.extras.map((extra) => (
                    <Button
                      key={extra.id}
                      variant={selectedExtras.includes(extra.id) ? "default" : "outline"}
                      className="justify-between"
                      onClick={() => handleExtraToggle(extra.id)}
                    >
                      <span>{extra.name}</span>
                      <span className="text-sm">
                        (+{extra.price.toFixed(3)} د.ك)
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* الكمية */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">الكمية</h3>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium w-8 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange("increase")}
                    disabled={quantity >= 10}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* السعر الإجمالي وزر الإضافة للسلة */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-gray-900">الإجمالي</span>
                  <span className="text-2xl font-bold text-primary">
                    {calculateTotalPrice().toFixed(3)} د.ك
                  </span>
                </div>
                <Button 
                  className="w-full text-lg py-6"
                  onClick={handleAddToCart}
                >
                  إضافة للسلة
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductTemplate4;