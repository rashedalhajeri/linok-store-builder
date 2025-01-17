import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { ChevronRight, Minus, Plus } from "lucide-react";

const ProductTemplate4 = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [extras, setExtras] = useState<string[]>([]);

  // Mock product data (in real app, fetch from API)
  const product = {
    id: productId,
    name: "برجر لحم واجيو",
    description: "برجر لحم واجيو مع جبنة شيدر وصلصة خاصة",
    price: "8.500",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    isSpicy: true,
    isPopular: true,
    calories: "850",
    preparationTime: "20-25",
    sizes: [
      { id: "small", label: "صغير", price: "7.500" },
      { id: "medium", label: "وسط", price: "8.500" },
      { id: "large", label: "كبير", price: "9.500" },
    ],
    extras: [
      { id: "lettuce", label: "خس", price: "0.250" },
      { id: "cheese", label: "جبنة إضافية", price: "0.500" },
      { id: "onion", label: "بصل", price: "0.250" },
      { id: "tomato", label: "طماطم", price: "0.250" },
      { id: "pickles", label: "مخلل", price: "0.250" },
    ]
  };

  const calculateTotal = () => {
    const selectedSizePrice = product.sizes.find(s => s.id === selectedSize)?.price || "0";
    const extrasTotal = extras.reduce((total, extraId) => {
      const extra = product.extras.find(e => e.id === extraId);
      return total + (extra ? parseFloat(extra.price) : 0);
    }, 0);
    
    return ((parseFloat(selectedSizePrice) + extrasTotal) * quantity).toFixed(3);
  };

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10">
      <div className="relative">
        <Button
          variant="ghost"
          className="absolute top-4 right-4 z-10"
          onClick={() => navigate(-1)}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
        
        <div className="h-[250px] md:h-[300px] relative">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-20 relative z-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex gap-2 mt-2">
                {product.isSpicy && (
                  <Badge variant="secondary" className="bg-red-50 text-red-600 hover:bg-red-50">
                    حار 🌶️
                  </Badge>
                )}
                {product.isPopular && (
                  <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-50">
                    الأكثر طلباً ⭐️
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">اختر الحجم</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex gap-4">
                {product.sizes.map((size) => (
                  <div key={size.id} className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value={size.id} id={size.id} />
                    <label htmlFor={size.id} className="text-sm">
                      {size.label} ({size.price} د.ك)
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">الإضافات</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.extras.map((extra) => (
                  <div key={extra.id} className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id={extra.id}
                      checked={extras.includes(extra.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setExtras([...extras, extra.id]);
                        } else {
                          setExtras(extras.filter(e => e !== extra.id));
                        }
                      }}
                    />
                    <label htmlFor={extra.id} className="text-sm">
                      {extra.label} (+{extra.price} د.ك)
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="px-8">
                إضافة للسلة ({calculateTotal()} د.ك)
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductTemplate4;