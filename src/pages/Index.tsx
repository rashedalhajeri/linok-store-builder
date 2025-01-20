import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Index = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-white/10 z-50">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center order-2 md:order-1"
            >
              <span className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer">
                Linok.me
              </span>
            </motion.div>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-8 order-1 md:order-2">
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/5"
              >
                {t.features}
                <ChevronDown className="mr-2 h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/5"
              >
                {t.templates}
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/5"
              >
                {t.pricing}
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/5"
              >
                {t.support}
              </Button>
            </div>

            {/* Actions */}
            <motion.div 
              className="flex items-center gap-3 md:gap-4 order-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <LanguageSwitcher />
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:text-primary hover:bg-primary/5"
              >
                {t.signIn}
              </Button>
              
              <Button 
                size="sm"
                className="bg-primary text-background hover:bg-primary/90"
              >
                {t.startNow}
              </Button>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              {language === 'ar' ? 'أنشئ متجرك الاحترافي في دقائق' : t.storeDescription}
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {language === 'ar' ? 'أنشئ وأدر متجرك الإلكتروني بأدوات ومميزات قوية' : t.storeSubDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5 order-2 sm:order-1"
              >
                {t.features}
              </Button>
              <Button 
                size="lg"
                className="bg-primary text-background hover:bg-primary/90 order-1 sm:order-2"
              >
                {language === 'ar' ? 'سجل الآن' : t.startFreeTrial}
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
    </div>
  );
};

export default Index;