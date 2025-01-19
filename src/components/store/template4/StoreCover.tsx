import { motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";

interface StoreCoverProps {
  language: 'en' | 'ar';
  onToggleLanguage: () => void;
}

export const StoreCover = ({ language, onToggleLanguage }: StoreCoverProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-6 left-6 z-10">
        <LanguageToggle 
          language={language} 
          onToggle={onToggleLanguage}
        />
      </div>
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1544025162-d76694265947"
          alt="Store Cover"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 sm:mb-8 border-2 border-white/20"
          >
            <img 
              src="/logo.png" 
              alt="Restaurant Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
            />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center text-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            مرحباً بكم في مطعمنا
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl mx-auto text-white/90 leading-relaxed font-medium">
            نقدم لكم أشهى المأكولات المحضرة بعناية من أجود المكونات
          </p>
        </motion.div>
      </div>
    </div>
  );
};