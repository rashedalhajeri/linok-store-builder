import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const SuccessTemplate1 = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
            className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">
              تم استلام طلبك بنجاح!
            </h1>
            <p className="text-gray-600">
              رقم الطلب: #{orderNumber}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
            <p>تم إرسال تفاصيل الطلب إلى بريدك الإلكتروني</p>
            <p className="mt-1">سنقوم بالتواصل معك قريباً لتأكيد الطلب</p>
          </div>

          <div className="space-y-3">
            <Button 
              className="w-full"
              onClick={() => navigate("/")}
            >
              العودة للمتجر
            </Button>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => window.print()}
            >
              طباعة الفاتورة
            </Button>
          </div>
        </motion.div>
      </Card>
    </div>
  );
};

export default SuccessTemplate1;