import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const CheckoutTemplate4 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cartItems = [
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
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سنتواصل معك قريباً لتأكيد الطلب",
      });
      
      navigate("/success/template4");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "الرجاء المحاولة مرة أخرى",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-center mb-8">إتمام الطلب</h1>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم</Label>
                  <Input id="name" required placeholder="أدخل اسمك الكامل" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الجوال</Label>
                  <Input id="phone" required type="tel" placeholder="05xxxxxxxx" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tableNumber">رقم الطاولة</Label>
                  <Input id="tableNumber" required type="number" placeholder="أدخل رقم الطاولة" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">ملاحظات إضافية</Label>
                  <Input id="notes" placeholder="أي ملاحظات خاصة بالطلب" />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "جاري إرسال الطلب..." : "تأكيد الطلب"}
                </Button>
              </form>
            </Card>

            <Card className="p-6 h-fit lg:sticky lg:top-4 bg-white/90 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4">ملخص الطلب</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-2 border-b">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        الحجم: {item.size}
                        {item.extras.length > 0 && ` • ${item.extras.join(', ')}`}
                      </p>
                      <p className="text-gray-600">الكمية: {item.quantity}</p>
                      <p className="font-semibold text-primary">
                        {(item.price * item.quantity).toFixed(3)} د.ك
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>المجموع</span>
                    <span>{calculateTotal().toFixed(3)} د.ك</span>
                  </div>
                  <div className="flex justify-between">
                    <span>التوصيل</span>
                    <span>مجاناً</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>الإجمالي</span>
                    <span className="text-primary">{calculateTotal().toFixed(3)} د.ك</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutTemplate4;