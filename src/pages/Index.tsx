import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Templates } from "@/components/Templates";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Features language={language} />
      </motion.div>

      {/* Templates Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-white to-primary/5"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              {language === 'ar' ? "قوالبنا المميزة" : "Our Premium Templates"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar' 
                ? "اختر من بين مجموعة متنوعة من القوالب الاحترافية المصممة خصيصاً لمتجرك"
                : "Choose from our collection of professionally designed templates tailored for your store"}
            </p>
          </div>
          <Templates language={language} />
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-linok text-white"
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ar' ? "هل أنت جاهز للبدء؟" : "Ready to Get Started?"}
            </h2>
            <p className="text-lg mb-8 text-white/90">
              {language === 'ar'
                ? "انضم إلى آلاف التجار الناجحين الذين يستخدمون Linok.me"
                : "Join thousands of successful merchants using Linok.me"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 group"
              >
                {language === 'ar' ? "ابدأ الآن مجاناً" : "Start Free Trial"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                {language === 'ar' ? "تواصل معنا" : "Contact Sales"}
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 text-white/90 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>support@linok.me</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/90 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>+966 50 000 0000</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Linok.me</h3>
              <p className="text-white/80">
                {language === 'ar' 
                  ? "منصتك المتكاملة لإنشاء وإدارة متجرك الإلكتروني"
                  : "Your complete platform for creating and managing your online store"}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'ar' ? "روابط سريعة" : "Quick Links"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-white/80 hover:text-white transition-colors">
                    {language === 'ar' ? "المميزات" : "Features"}
                  </a>
                </li>
                <li>
                  <a href="#templates" className="text-white/80 hover:text-white transition-colors">
                    {language === 'ar' ? "القوالب" : "Templates"}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
                    {language === 'ar' ? "الأسعار" : "Pricing"}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'ar' ? "تواصل معنا" : "Contact Us"}
              </h3>
              <ul className="space-y-2">
                <li className="text-white/80">
                  <span className="font-medium">
                    {language === 'ar' ? "البريد الإلكتروني" : "Email"}:
                  </span> support@linok.me
                </li>
                <li className="text-white/80">
                  <span className="font-medium">
                    {language === 'ar' ? "الهاتف" : "Phone"}:
                  </span> +966 50 000 0000
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            <p>
              © {new Date().getFullYear()} Linok.me. 
              {language === 'ar' 
                ? " جميع الحقوق محفوظة"
                : " All rights reserved"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;