import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, Search, ChevronDown, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageToggle } from "@/components/LanguageSwitcher";
import { Features } from "@/components/Features";

const Index = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FA] to-[#E9ECEF]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm z-50">
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
                {[
                  { label: t.features, icon: <ChevronDown className="h-4 w-4" /> },
                  { label: t.templates },
                  { label: t.pricing },
                  { label: t.support }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="group relative text-gray-600 hover:text-primary transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.icon}
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Actions */}
            <motion.div 
              className="flex items-center gap-3 md:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="hidden md:flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-600 hover:text-primary hover:bg-primary/5 font-medium"
                >
                  {t.signIn}
                </Button>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-primary to-primary-light text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 font-medium"
                >
                  {t.startNow}
                </Button>
              </div>
              
              <LanguageToggle />
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-primary hover:bg-primary/5"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-primary hover:bg-primary/5 md:hidden"
              >
                <Menu className="h-5 w-5" />
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {t.storeDescription}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.storeSubDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-light text-white group px-8"
              >
                {t.startFreeTrial}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                {t.features}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5" />
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
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary-light/10 to-primary/10 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <Features language={language} />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Stores" },
              { number: "50M+", label: "Monthly Views" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;