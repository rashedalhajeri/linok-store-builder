import { motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";

interface StoreCoverProps {
  language: 'en' | 'ar';
  onToggleLanguage: () => void;
}

export const StoreCover = ({ language, onToggleLanguage }: StoreCoverProps) => {
  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-10">
        <LanguageToggle 
          language={language} 
          onToggle={onToggleLanguage}
        />
      </div>
      <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-b-[2.5rem]">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1544025162-d76694265947"
          alt="Store Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6"
          >
            <img 
              src="/logo.png" 
              alt="Restaurant Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-shadow-lg">
            مرحباً بكم في مطعمنا
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto text-gray-100 leading-relaxed">
            نقدم لكم أشهى المأكولات المحضرة بعناية من أجود المكونات
          </p>
        </motion.div>
      </div>
    </div>
  );
};