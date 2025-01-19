import { motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";

interface StoreCoverProps {
  language: 'en' | 'ar';
  onToggleLanguage: () => void;
}

export const StoreCover = ({ language, onToggleLanguage }: StoreCoverProps) => {
  return (
    <div className="relative w-full bg-white">
      <div className="absolute top-4 left-4 z-10">
        <LanguageToggle 
          language={language} 
          onToggle={onToggleLanguage}
        />
      </div>
      
      <div className="relative min-h-[400px] px-4">
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto pt-16 pb-8 flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-20 h-20 bg-charcoal rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">BO</span>
            </div>
          </motion.div>
          
          {/* Restaurant Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-charcoal mb-2"
          >
            Bowlicious
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted text-sm mb-8 text-center"
          >
            Exquisite bowls and diverse culinary delights await you
          </motion.p>

          {/* Order Type Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-3 mb-8"
          >
            <button className="px-6 py-2 bg-charcoal text-white rounded-full text-sm font-medium">
              Delivery
            </button>
            <button className="px-6 py-2 bg-gray-100 text-charcoal rounded-full text-sm font-medium">
              Takeaway
            </button>
            <button className="px-6 py-2 bg-gray-100 text-charcoal rounded-full text-sm font-medium">
              Dine-in
            </button>
          </motion.div>

          {/* Address Selection Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full max-w-md px-4 py-3 bg-gray-50 rounded-lg text-left text-sm text-charcoal flex items-center justify-between"
          >
            <span>Choose a delivery address</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};