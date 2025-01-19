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
      
      <div className="relative min-h-[400px] bg-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="Food Background"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src="/logo.png"
                alt="Restaurant Logo"
                className="w-20 h-20 mx-auto object-contain"
              />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            >
              مطعمنا
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              نقدم لكم تجربة طعام فريدة مع أشهى المأكولات المحضرة بعناية
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex justify-center gap-4"
          >
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
              توصيل
            </button>
            <button className="px-6 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-50 transition-colors border border-gray-200">
              استلام
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};