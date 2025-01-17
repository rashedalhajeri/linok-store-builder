import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ProductTemplate4 = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [removedItems, setRemovedItems] = useState<string[]>([]);

  // This would normally come from an API
  const product = {
    id: productId,
    name: "برجر لحم واجيو",
    description: "برجر لحم واجيو مع جبنة شيدر وصلصة خاصة",
    price: "8.500 د.ك",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    sizes: [
      { id: 'small', label: 'صغير', price: '8.500 د.ك' },
      { id: 'medium', label: 'وسط', price: '10.500 د.ك' },
      { id: 'large', label: 'كبير', price: '12.500 د.ك' }
    ],
    extras: [
      { id: 'cheese', label: 'جبنة إضافية', price: '0.500 د.ك' },
      { id: 'bacon', label: 'لحم مقدد', price: '1.000 د.ك' },
      { id: 'egg', label: 'بيض مقلي', price: '0.750 د.ك' }
    ],
    removableItems: [
      { id: 'lettuce', label: 'خس' },
      { id: 'tomato', label: 'طماطم' },
      { id: 'onion', label: 'بصل' },
      { id: 'pickle', label: 'مخلل' }
    ]
  };

  const handleToggleRemoveItem = (itemId: string) => {
    setRemovedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleToggleExtra = (extraId: string) => {
    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-8">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ChevronRight className="ml-2" />
          رجوع
        </Button>

        <Card className="overflow-hidden bg-white rounded-2xl shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 p-6"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-xl text-primary mt-2">{product.price}</p>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">اختر الحجم</h3>
                  <RadioGroup
                    value={selectedSize}
                    onValueChange={setSelectedSize}
                    className="space-y-2"
                  >
                    {product.sizes.map((size) => (
                      <div key={size.id} className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value={size.id} id={`size-${size.id}`} />
                        <Label htmlFor={`size-${size.id}`}>
                          {size.label} - {size.price}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">إضافات</h3>
                  {product.extras.map((extra) => (
                    <div key={extra.id} className="flex items-center space-x-2 space-x-reverse mb-2">
                      <Checkbox
                        id={`extra-${extra.id}`}
                        checked={selectedExtras.includes(extra.id)}
                        onCheckedChange={() => handleToggleExtra(extra.id)}
                      />
                      <Label htmlFor={`extra-${extra.id}`}>
                        {extra.label} (+{extra.price})
                      </Label>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">إزالة المكونات</h3>
                  {product.removableItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2 space-x-reverse mb-2">
                      <Checkbox
                        id={`remove-${item.id}`}
                        checked={removedItems.includes(item.id)}
                        onCheckedChange={() => handleToggleRemoveItem(item.id)}
                      />
                      <Label htmlFor={`remove-${item.id}`}>
                        بدون {item.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full py-6 text-lg">
                إضافة للسلة
              </Button>
            </div>
          </motion.div>
        </Card>
      </div>
    </div>
  );
};

export default ProductTemplate4;