import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Templates } from "@/components/Templates";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <Hero />

      {/* Features Section with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Features language={language} />
      </motion.div>

      {/* Templates Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-16"
      >
        <Templates language={language} />
      </motion.div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/90 to-primary-dark/90 text-white py-12">
        <div className="container mx-auto px-4">
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
                  {language === 'ar' ? "البريد الإلكتروني" : "Email"}: support@linok.me
                </li>
                <li className="text-white/80">
                  {language === 'ar' ? "الهاتف" : "Phone"}: +966 50 000 0000
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