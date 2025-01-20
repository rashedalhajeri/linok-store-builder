import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageToggle } from "@/components/store/LanguageToggle";

const Index = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
                Linok.me
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <motion.div 
                className="flex items-center gap-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <a href="#" className="group relative text-muted-dark hover:text-primary transition-colors duration-200 flex items-center gap-1">
                  <span>{t.features}</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
                <a href="#" className="group relative text-muted-dark hover:text-primary transition-colors duration-200">
                  <span>{t.templates}</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
                <a href="#" className="group relative text-muted-dark hover:text-primary transition-colors duration-200">
                  <span>{t.pricing}</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
                <a href="#" className="group relative text-muted-dark hover:text-primary transition-colors duration-200">
                  <span>{t.support}</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </motion.div>
            </div>

            {/* Actions */}
            <motion.div 
              className="flex items-center gap-3 md:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-dark hover:text-primary hover:bg-primary/5"
                >
                  {t.signIn}
                </Button>
                <Button 
                  size="sm"
                  className="bg-gradient-button text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  {t.startNow}
                </Button>
              </div>
              
              <LanguageToggle 
                language={language === 'ar' ? 'ar' : 'en'} 
                onToggle={() => {}} 
              />
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-muted-dark hover:text-primary hover:bg-primary/5"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-muted-dark hover:text-primary hover:bg-primary/5 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Index;