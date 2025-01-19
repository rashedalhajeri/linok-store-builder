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
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947"
          alt="Store Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            مرحباً بكم في مطعمنا
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto text-gray-100">
            نقدم لكم أشهى المأكولات المحضرة بعناية من أجود المكونات
          </p>
        </motion.div>
      </div>
    </div>
  );
};