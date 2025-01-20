import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageToggle } from "@/components/store/LanguageToggle";

const Index = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FA] to-[#E9ECEF]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm z-50">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
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
                <a href="#" className="group relative text-gray-600 hover:text-[#8B5CF6] transition-colors duration-200 flex items-center gap-1">
                  <span className="font-medium">{t.features}</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
                <a href="#" className="group relative text-gray-600 hover:text-[#8B5CF6] transition-colors duration-200">
                  <span className="font-medium">{t.templates}</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
                <a href="#" className="group relative text-gray-600 hover:text-[#8B5CF6] transition-colors duration-200">
                  <span className="font-medium">{t.pricing}</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
                <a href="#" className="group relative text-gray-600 hover:text-[#8B5CF6] transition-colors duration-200">
                  <span className="font-medium">{t.support}</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
                  className="text-gray-600 hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/5 font-medium"
                >
                  {t.signIn}
                </Button>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 font-medium"
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
                className="text-gray-600 hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/5"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/5 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden">
        <div className="fixed inset-0 bg-gray-800/40 backdrop-blur-sm z-40 hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="flex flex-col space-y-6">
                  <a href="#" className="text-gray-600 hover:text-[#8B5CF6] font-medium transition-colors">
                    {t.features}
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#8B5CF6] font-medium transition-colors">
                    {t.templates}
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#8B5CF6] font-medium transition-colors">
                    {t.pricing}
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#8B5CF6] font-medium transition-colors">
                    {t.support}
                  </a>
                </nav>
              </div>
              <div className="border-t border-gray-100 py-6 px-4">
                <div className="flex flex-col space-y-3">
                  <Button 
                    variant="ghost"
                    className="w-full justify-center text-gray-600 hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/5"
                  >
                    {t.signIn}
                  </Button>
                  <Button 
                    className="w-full justify-center bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white"
                  >
                    {t.startNow}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;