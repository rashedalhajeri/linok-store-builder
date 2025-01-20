import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const [storeHandle, setStoreHandle] = useState("");
  const { toast } = useToast();
  const { t, language } = useLanguage();

  const handleStoreSearch = () => {
    if (!storeHandle) {
      toast({
        title: t.enterStoreName,
        description: t.enterStoreNameDesc,
        variant: "destructive",
      });
      return;
    }
    toast({
      title: t.storeSearch,
      description: `${t.searchingForStore} ${storeHandle}`,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary-dark/90 mix-blend-multiply" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Language Toggle */}
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>

        {/* Auth Buttons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            {t.signIn}
          </Button>
          <Button 
            variant="default" 
            size="sm"
            className="bg-white text-primary hover:bg-white/90 backdrop-blur-sm"
          >
            {t.register}
          </Button>
        </div>

        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                Linok.me
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/90 max-w-[600px] mx-auto">
                {t.storeDescription}
              </p>
              <p className="text-lg text-white/80">
                {t.storeSubDescription}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-sm mx-auto space-y-4"
            >
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder={t.enterStoreName}
                  value={storeHandle}
                  onChange={(e) => setStoreHandle(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 backdrop-blur-sm"
                />
                <Button 
                  onClick={handleStoreSearch}
                  className="bg-white text-primary hover:bg-white/90 backdrop-blur-sm"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-white/60">{t.or}</p>
              <Button 
                className="w-full bg-white text-primary hover:bg-white/90 group text-lg py-6 backdrop-blur-sm" 
                size="lg"
              >
                <span>{t.startFreeTrial}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-white/60">
                {t.noCreditCard}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            >
              {[
                {
                  title: language === 'ar' ? "متجر احترافي" : "Professional Store",
                  description: language === 'ar' 
                    ? "قوالب جاهزة وتخصيص كامل"
                    : "Ready-made templates & full customization"
                },
                {
                  title: language === 'ar' ? "أداء عالي" : "High Performance",
                  description: language === 'ar'
                    ? "تحميل سريع وتجربة سلسة"
                    : "Lightning-fast loading & smooth experience"
                },
                {
                  title: language === 'ar' ? "حماية كاملة" : "Complete Protection",
                  description: language === 'ar'
                    ? "تشفير SSL وميزات أمان"
                    : "SSL encryption & security features"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <h3 className="font-semibold text-white text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/80 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#7B7EF7,transparent)]" />
      </div>
    </div>
  );
};