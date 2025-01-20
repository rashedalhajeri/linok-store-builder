import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, LogIn, UserPlus } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="absolute top-4 left-4 flex gap-2">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <LogIn className="w-4 h-4" />
          تسجيل الدخول
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          حساب جديد
        </Button>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
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
                className="w-full bg-primary hover:bg-primary/90 text-white group" 
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
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#D6BCFA,transparent)]" />
      </div>
    </div>
  );
};