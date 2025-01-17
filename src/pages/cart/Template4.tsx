import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, ArrowRight, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const CartTemplate4 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "برجر لحم واجيو",
      price: 8.500,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      size: "وسط",
      extras: ["جبنة إضافية"]
    },
    {
      id: 2,
      name: "برجر دجاج مقرمش",
      price: 6.500,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6",
      size: "كبير",
      extras: ["مشروم"]
    }
  ]);

  const handleQuantityChange = (id: number, type: "increase" | "decrease") => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = type === "increase" ? 
          Math.min(item.quantity + 1, 10) : 
          Math.max(item.quantity - 1, 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "تم حذف المنتج",
      description: "تم حذف المنتج من السلة بنجاح",
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">سلة المشتريات</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="p-4 bg-white/90 backdrop-blur-sm">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-bold text-gray-900">{item.name}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5 text-red-500" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          الحجم: {item.size}
                        </p>
                        {item.extras.length > 0 && (
                          <p className="text-sm text-gray-600">
                            الإضافات: {item.extras.join(', ')}
                          </p>
                        )}
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, "decrease")}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-lg font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, "increase")}
                              disabled={item.quantity >= 10}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <span className="font-bold text-primary">
                            {(item.price * item.quantity).toFixed(3)} د.ك
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="md:sticky md:top-4 h-fit">
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">ملخص الطلب</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>المجموع</span>
                    <span>{calculateTotal().toFixed(3)} د.ك</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>التوصيل</span>
                    <span>مجاناً</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>الإجمالي</span>
                      <span className="text-primary">
                        {calculateTotal().toFixed(3)} د.ك
                      </span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6 text-lg py-6"
                  onClick={() => navigate("/checkout/template4")}
                >
                  متابعة الدفع
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Card>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h2 className="text-xl text-gray-600">السلة فارغة</h2>
            <Button
              className="mt-4"
              onClick={() => navigate(-1)}
            >
              العودة للمتجر
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CartTemplate4;