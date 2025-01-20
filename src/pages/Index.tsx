import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Globe, ArrowRight, Check, Star, Users, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Index = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-white/10 z-50">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer">
                Linok.me
              </span>
            </motion.div>

            {/* Actions */}
            <motion.div 
              className="flex items-center gap-2 md:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <LanguageSwitcher />
              
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:text-primary hover:bg-primary/5 hidden md:inline-flex"
              >
                {t.signIn}
              </Button>
              
              <Button 
                size="sm"
                className="bg-primary text-background hover:bg-primary/90 whitespace-nowrap"
              >
                {t.startNow}
              </Button>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent leading-tight">
              {language === 'ar' ? 'أنشئ متجرك الاحترافي في دقائق' : t.storeDescription}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              {language === 'ar' ? 'أنشئ وأدر متجرك الإلكتروني بأدوات ومميزات قوية' : t.storeSubDescription}
            </p>
            
            {/* Username Input and Register Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto px-4">
              <div className="relative w-full sm:w-2/3">
                <Input
                  type="text"
                  placeholder="linok.me/yourname"
                  className="h-12 text-base bg-white text-background border-2 border-primary/20 focus:border-primary transition-colors"
                  dir="ltr"
                />
              </div>
              <Button 
                size="lg"
                className="bg-primary text-background hover:bg-primary/90 w-full sm:w-auto h-12 text-base font-medium"
              >
                {language === 'ar' ? 'سجل الآن' : 'Register Now'}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-6 md:p-12 rounded-3xl border border-primary/20 relative"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                {language === 'ar' ? 'ابدأ رحلتك مع Linok.me اليوم' : 'Start Your Journey with Linok.me Today'}
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-white/80">
                {language === 'ar' 
                  ? 'انضم إلى آلاف المتاجر الناجحة وابدأ في بناء متجرك الإلكتروني' 
                  : 'Join thousands of successful stores and start building your online store'}
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 group w-full sm:w-auto"
              >
                {language === 'ar' ? 'ابدأ الآن' : 'Start Now'}
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Linok.me. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;