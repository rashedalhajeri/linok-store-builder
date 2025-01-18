import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();

  // Sample store ID - you can replace this with your actual store ID
  const demoStoreId = "demo-store";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2FCE2] to-[#E8F5D9] flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 max-w-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          مرحباً بك في متجر السيارات الفاخرة
        </h1>
        
        <p className="text-gray-600 text-lg">
          اكتشف تشكيلتنا الواسعة من السيارات الفاخرة والرياضية
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate(`/store/template2/${demoStoreId}`)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg"
          >
            عرض المتجر
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;