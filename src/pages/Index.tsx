import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-white/10 z-50">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer">
                Linok.me
              </span>
            </motion.div>

            <motion.div 
              className="flex items-center gap-2 md:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex md:hidden items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-white bg-transparent border border-white/20 hover:bg-white/5"
                >
                  {t.signIn}
                </Button>
                
                <Button 
                  size="sm"
                  className="bg-white text-background hover:bg-white/90"
                >
                  {t.startNow}
                </Button>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-white hover:text-primary hover:bg-primary/5"
                >
                  {t.signIn}
                </Button>
                
                <Button 
                  size="sm"
                  className="bg-primary text-background hover:bg-primary/90 whitespace-nowrap"
                >
                  {t.startNow}
                </Button>
              </div>
            </motion.div>
          </div>
        </nav>
      </header>

      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-light to-primary bg-clip-text text-transparent leading-tight tracking-tight">
              {t.storeDescription}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              {t.storeSubDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="relative w-full sm:w-2/3">
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-gray-500 pointer-events-none font-medium">
                    linok.me/
                  </div>
                  <Input
                    type="text"
                    className="h-12 text-base bg-white text-black border-2 border-primary/20 focus:border-primary transition-colors placeholder:text-gray-500 pl-[85px] rounded-xl"
                    placeholder="yourname"
                  />
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-primary text-background hover:bg-primary/90 w-full sm:w-auto h-12 text-base font-medium rounded-xl"
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        </div>

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

      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-6 md:p-12 rounded-3xl border border-primary/20 relative"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                Start Your Journey with Linok.me Today
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-white/80">
                Join thousands of successful stores and start building your online store
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 group w-full sm:w-auto"
              >
                Start Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-6 md:py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Linok.me. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;