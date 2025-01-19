import { motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { Search } from "lucide-react";

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
      
      <div className="relative px-4 py-8">
        {/* Main Content Container */}
        <div className="max-w-2xl mx-auto">
          {/* Logo and Title */}
          <div className="flex flex-col items-center space-y-3 mb-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100"
            >
              <span className="text-2xl font-bold text-charcoal">BO</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-2xl font-semibold text-charcoal">Bowlicious</h1>
              <p className="text-sm text-muted mt-1">
                Exquisite bowls and diverse culinary delights
              </p>
            </motion.div>
          </div>

          {/* Order Type Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-2 mb-6"
          >
            <button className="py-2.5 bg-charcoal text-white text-sm font-medium rounded-full">
              Delivery
            </button>
            <button className="py-2.5 bg-gray-100 text-charcoal text-sm font-medium rounded-full">
              Takeaway
            </button>
            <button className="py-2.5 bg-gray-100 text-charcoal text-sm font-medium rounded-full">
              Dine-in
            </button>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Choose a delivery address"
                className="w-full px-4 py-3 pr-10 bg-gray-50 rounded-xl text-sm text-charcoal placeholder-muted focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};