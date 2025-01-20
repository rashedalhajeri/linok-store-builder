import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Templates } from "@/components/Templates";

const Index = () => {
  const navigate = useNavigate();
  const demoStoreId = "demo-store";

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Templates />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 max-w-2xl mx-auto my-12"
      >
        <Button
          onClick={() => navigate(`/store/template2/${demoStoreId}`)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg"
        >
          عرض المتجر
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;