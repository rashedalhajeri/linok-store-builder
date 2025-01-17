import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const BookingTemplate3 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "تم استلام حجزك بنجاح",
        description: "سنتواصل معك قريباً لتأكيد الحجز",
      });
      
      navigate("/booking/success/template3");
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-lg mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-8">تأكيد الحجز</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم</Label>
                <Input
                  id="name"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">رقم الجوال</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="05xxxxxxxx"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">ملاحظات إضافية</Label>
                <Input
                  id="notes"
                  placeholder="أي ملاحظات خاصة بالحجز"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري تأكيد الحجز..." : "تأكيد الحجز"}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingTemplate3;