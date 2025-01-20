import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Zap, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                منصة متكاملة لإدارة
                <br />
                متجرك الإلكتروني
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400 mx-auto"
              >
                نقدم لك كل ما تحتاجه لبناء وإدارة متجرك الإلكتروني بكفاءة عالية
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-sm space-y-4 mx-auto"
            >
              <Button 
                className="w-full bg-gradient-button text-white hover:opacity-90 group text-lg py-6" 
                size="lg"
              >
                <span>ابدأ الآن مجاناً</span>
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-zinc-500">لا تحتاج إلى بطاقة ائتمان للبدء</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            >
              {[
                {
                  icon: <ShoppingBag className="h-6 w-6 text-primary" />,
                  title: "متجر احترافي",
                  description: "قوالب جاهزة وتخصيص كامل"
                },
                {
                  icon: <Zap className="h-6 w-6 text-primary" />,
                  title: "أداء عالي",
                  description: "سرعة تحميل فائقة وتجربة سلسة"
                },
                {
                  icon: <Shield className="h-6 w-6 text-primary" />,
                  title: "حماية متكاملة",
                  description: "تشفير SSL وحماية ضد الاختراق"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm"
                >
                  <div className="p-2 bg-primary/10 rounded-full mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#bbf7d0,transparent)]" />
      </div>
    </div>
  );
};