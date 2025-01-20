import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, ArrowRight, Check, Star, Users, ShoppingBag } from "lucide-react";
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
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

      {/* Features Grid */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              {language === 'ar' ? 'مميزات المنصة' : 'Platform Features'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'ar' ? 'كل ما تحتاجه لإدارة متجرك بكفاءة' : 'Everything you need to manage your store efficiently'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingBag className="w-6 h-6" />,
                title: language === 'ar' ? 'متجر احترافي' : 'Professional Store',
                description: language === 'ar' ? 'واجهة احترافية مع تخصيص كامل' : 'Professional interface with full customization'
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: language === 'ar' ? 'تجربة مميزة' : 'Premium Experience',
                description: language === 'ar' ? 'سرعة في التحميل وسهولة في الاستخدام' : 'Fast loading and easy to use'
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: language === 'ar' ? 'دعم متواصل' : 'Continuous Support',
                description: language === 'ar' ? 'دعم فني على مدار الساعة' : '24/7 technical support'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-6 rounded-2xl border border-white/10 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-8 md:p-12 rounded-3xl border border-primary/20 relative"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {language === 'ar' ? 'ابدأ رحلتك مع Linok.me اليوم' : 'Start Your Journey with Linok.me Today'}
              </h2>
              <p className="text-lg mb-8 text-white/80">
                {language === 'ar' 
                  ? 'انضم إلى آلاف المتاجر الناجحة وابدأ في بناء متجرك الإلكتروني' 
                  : 'Join thousands of successful stores and start building your online store'}
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 group"
              >
                {language === 'ar' ? 'ابدأ الآن' : 'Start Now'}
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
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
