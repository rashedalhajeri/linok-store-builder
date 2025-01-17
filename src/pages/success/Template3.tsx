import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SuccessTemplate3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        </motion.div>

        <h1 className="text-2xl font-bold mb-4">تم تأكيد الحجز بنجاح!</h1>
        <p className="text-gray-600 mb-8">
          شكراً لك على الحجز. سنقوم بالتواصل معك قريباً لتأكيد موعد الحجز وتفاصيل الخدمة.
        </p>

        <div className="space-y-4">
          <Button
            onClick={() => navigate("/store/template3/1")}
            className="w-full"
          >
            العودة للخدمات
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate("/cart/template3")}
            className="w-full"
          >
            العودة للسلة
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessTemplate3;