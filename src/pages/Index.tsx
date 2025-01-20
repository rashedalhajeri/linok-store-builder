import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary">Linok.me</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {language === 'ar' ? 'المميزات' : 'Features'}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {language === 'ar' ? 'التسعير' : 'Pricing'}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {language === 'ar' ? 'تواصل معنا' : 'Contact'}
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Index;