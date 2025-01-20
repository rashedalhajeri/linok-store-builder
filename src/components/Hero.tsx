import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#000000] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222222_1px,transparent_1px),linear-gradient(to_bottom,#222222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              منصة احترافية لإدارة روابطك
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-[600px] mx-auto">
              اجمع كل روابطك في مكان واحد مع تصميم احترافي وإحصائيات متقدمة
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-colors duration-300 min-w-[200px]"
            >
              ابدأ الآن
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 transition-colors duration-300 min-w-[200px]"
            >
              عرض الباقات
            </Button>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              "تصاميم احترافية",
              "إحصائيات متقدمة",
              "دعم فني متميز"
            ].map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <p className="text-lg font-medium">{feature}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 h-full w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"
        />
      </div>
    </div>
  );
};