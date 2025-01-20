import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, Search, User, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Index = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Linok.me
              </span>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <motion.div 
                className="flex items-center gap-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <a href="#" className="text-muted hover:text-primary transition-colors duration-200 flex items-center gap-1">
                  {t.features}
                  <ChevronDown className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted hover:text-primary transition-colors duration-200">
                  {t.templates}
                </a>
                <a href="#" className="text-muted hover:text-primary transition-colors duration-200">
                  {t.pricing}
                </a>
                <a href="#" className="text-muted hover:text-primary transition-colors duration-200">
                  {t.support}
                </a>
              </motion.div>
            </nav>

            {/* Actions */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-muted hover:text-primary">
                  {t.signIn}
                </Button>
                <Button 
                  variant="default"
                  size="sm"
                  className="bg-gradient-button text-white shadow-sm hover:shadow-md transition-shadow"
                >
                  {t.startNow}
                </Button>
              </div>
              
              <LanguageSwitcher />
              
              <Button variant="ghost" size="icon" className="text-muted hover:text-primary">
                <Search className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-muted hover:text-primary md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Index;