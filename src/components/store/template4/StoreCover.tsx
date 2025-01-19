import { motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { Search } from "lucide-react";

interface StoreCoverProps {
  language: 'en' | 'ar';
  onToggleLanguage: () => void;
}

export const StoreCover = ({ language, onToggleLanguage }: StoreCoverProps) => {
  return (
    <div className="relative w-full bg-gradient-to-b from-white to-gray-50/80">
      <div className="absolute top-4 left-4 z-10">
        <LanguageToggle 
          language={language} 
          onToggle={onToggleLanguage}
        />
      </div>
      
      <div className="relative px-4 py-10">
        <div className="max-w-2xl mx-auto">
          {/* Logo and Title */}
          <div className="flex flex-col items-center space-y-4 mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-lg border border-gray-100/50"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BO</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center space-y-2"
            >
              <h1 className="text-2xl font-bold text-charcoal">Bowlicious</h1>
              <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
                Exquisite bowls and diverse culinary delights crafted with passion
              </p>
            </motion.div>
          </div>

          {/* Order Type Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 mb-8"
          >
            <button className="py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-0.5 transform">
              Delivery
            </button>
            <button className="py-3 px-4 bg-white text-charcoal text-sm font-medium rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-0.5 transform border border-gray-100">
              Takeaway
            </button>
            <button className="py-3 px-4 bg-white text-charcoal text-sm font-medium rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-0.5 transform border border-gray-100">
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
            <div className="relative group">
              <input
                type="text"
                placeholder="Choose a delivery address"
                className="w-full px-6 py-4 bg-white rounded-2xl text-sm text-charcoal placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary transition-colors duration-300 group-hover:text-secondary" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};