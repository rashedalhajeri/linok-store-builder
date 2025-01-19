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
      
      <div className="relative h-[500px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Restaurant Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20">
              <img 
                src="/logo.png"
                alt="Restaurant Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
          >
            مطعمنا
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl text-center mb-12"
          >
            نقدم لكم تجربة طعام فريدة مع أشهى المأكولات المحضرة بعناية
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary-dark transition-colors duration-300 min-w-[160px] text-lg shadow-lg shadow-primary/20">
              توصيل
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300 min-w-[160px] text-lg border border-white/20">
              استلام
            </button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  );
};