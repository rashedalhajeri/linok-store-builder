import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { LanguageToggle } from "@/components/store/LanguageToggle";
import { Language, translations } from "@/utils/translations";

export const Hero = () => {
  const [storeHandle, setStoreHandle] = useState("");
  const { toast } = useToast();
  const [language, setLanguage] = useState<Language>('ar');

  const t = translations[language];

  const handleStoreSearch = () => {
    if (!storeHandle) {
      toast({
        title: language === 'ar' ? "الرجاء إدخال اسم المتجر" : "Please enter a store name",
        description: language === 'ar' ? "أدخل اسم متجرك للبدء" : "Enter your store name to get started",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: language === 'ar' ? "البحث عن المتجر" : "Store search",
      description: language === 'ar' ? "جاري البحث عن المتجر: " : "Searching for store: " + storeHandle,
    });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container px-4 md:px-6">
        {/* Language Toggle */}
        <div className="absolute top-4 right-4">
          <LanguageToggle 
            language={language}
            onToggle={(newLang) => setLanguage(newLang)}
          />
        </div>

        {/* Auth Buttons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Button variant="outline" size="sm">
            {t.signIn}
          </Button>
          <Button variant="default" size="sm">
            {t.register}
          </Button>
        </div>

        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                {t.storeDescription}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400 mx-auto"
              >
                {language === 'ar' 
                  ? "كل ما تحتاجه لإنشاء وإدارة متجرك الإلكتروني بكفاءة"
                  : "Everything you need to build and manage your e-commerce store efficiently"}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-sm mx-auto space-y-4"
            >
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder={language === 'ar' ? "أدخل اسم متجرك" : "Enter your store name"}
                  value={storeHandle}
                  onChange={(e) => setStoreHandle(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleStoreSearch}
                  className="bg-gradient-button text-white"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-zinc-500">{language === 'ar' ? "أو" : "or"}</p>
              <Button 
                className="w-full bg-gradient-button text-white hover:opacity-90 group text-lg py-6" 
                size="lg"
              >
                <span>{language === 'ar' ? "ابدأ الآن مجاناً" : "Start Free Trial"}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-zinc-500">
                {language === 'ar' ? "لا تحتاج إلى بطاقة ائتمان" : "No credit card required"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm"
                >
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