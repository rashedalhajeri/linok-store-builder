import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SuccessTemplate4 = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 bg-white/90 backdrop-blur-sm">
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
            className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              تم استلام طلبك بنجاح!
            </h1>
            <p className="text-xl text-gray-600">
              رقم الطلب: #{orderNumber}
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-gray-600">
            <p className="text-lg">سيتم تحضير طلبك وتقديمه لك على الطاولة</p>
            <p className="mt-2">يمكنك متابعة حالة طلبك من خلال رقم الطلب</p>
          </div>

          <div className="space-y-3">
            <Button 
              className="w-full text-lg py-6"
              onClick={() => navigate("/")}
            >
              العودة للقائمة
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </Card>
    </div>
  );
};

export default SuccessTemplate4;