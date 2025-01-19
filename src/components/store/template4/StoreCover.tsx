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
      
      <div className="relative h-[600px] overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Restaurant Cover"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
              backdropFilter: 'blur(2px)'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-10"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl">
              <img 
                src="/logo.png"
                alt="Restaurant Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
              />
            </div>
          </motion.div>
          
          {/* Title with Enhanced Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-center tracking-tight"
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
          >
            مطعمنا
          </motion.h1>
          
          {/* Description with Enhanced Style */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl sm:text-2xl text-white/95 max-w-2xl text-center mb-14 leading-relaxed font-light"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
          >
            نقدم لكم تجربة طعام فريدة مع أشهى المأكولات المحضرة بعناية
          </motion.p>

          {/* Action Buttons with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-5 sm:gap-8"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-primary via-primary-light to-primary 
                         text-primary-foreground rounded-2xl font-medium hover:shadow-lg 
                         transition-all duration-300 min-w-[180px] text-lg shadow-xl 
                         shadow-primary/20 backdrop-blur-md"
            >
              توصيل
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/15 backdrop-blur-md text-white rounded-2xl 
                         font-medium hover:bg-white/25 transition-all duration-300 
                         min-w-[180px] text-lg border border-white/30 shadow-xl 
                         shadow-black/5"
            >
              استلام
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced Bottom Gradient */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
            backdropFilter: 'blur(2px)'
          }}
        />
      </div>
    </div>
  );
};