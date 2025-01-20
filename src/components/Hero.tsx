import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, LogIn, UserPlus } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#D6BCFA,transparent)]" />
        </div>
      </div>

      {/* Login/Signup Buttons */}
      <div className="absolute top-4 left-4 flex gap-3 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border-primary/20 hover:bg-primary/5"
          >
            <LogIn className="w-4 h-4" />
            تسجيل الدخول
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border-primary/20 hover:bg-primary/5"
          >
            <UserPlus className="w-4 h-4" />
            حساب جديد
          </Button>
        </motion.div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary"
              >
                أنشئ متجرك الإلكتروني في ثوانٍ
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400 mx-auto"
              >
                منصة linok.me تتيح لك إنشاء متجر احترافي بسهولة تامة. اختر قالبك المفضل وابدأ البيع اليوم!
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-sm space-y-4 mx-auto"
            >
              <Button 
                className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-all duration-300 text-white group shadow-lg hover:shadow-xl"
                size="lg"
              >
                <span>ابدأ الآن مجاناً</span>
                <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-zinc-500">لا تحتاج إلى بطاقة ائتمان للبدء</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 h-full w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
};