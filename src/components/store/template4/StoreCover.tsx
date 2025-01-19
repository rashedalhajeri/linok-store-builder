import { motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { Search } from "lucide-react";

interface StoreCoverProps {
  language: 'en' | 'ar';
  onToggleLanguage: () => void;
}

export const StoreCover = ({ language, onToggleLanguage }: StoreCoverProps) => {
  return (
    <div className="relative w-full bg-white border-b border-gray-100">
      <div className="absolute top-4 left-4 z-10">
        <LanguageToggle 
          language={language} 
          onToggle={onToggleLanguage}
        />
      </div>
      
      <div className="relative px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Logo and Title */}
          <div className="flex flex-col items-center space-y-6 mb-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-200"
            >
              <span className="text-4xl font-bold text-black">BO</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center space-y-2"
            >
              <h1 className="text-3xl font-bold text-black">Bowlicious</h1>
              <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                Exquisite bowls and diverse culinary delights crafted with passion
              </p>
            </motion.div>
          </div>

          {/* Order Type Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mb-10"
          >
            <button className="py-3.5 px-4 bg-black text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform">
              Delivery
            </button>
            <button className="py-3.5 px-4 bg-white text-black text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform border border-gray-200">
              Takeaway
            </button>
            <button className="py-3.5 px-4 bg-white text-black text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform border border-gray-200">
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
                className="w-full px-6 py-4 bg-white rounded-xl text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};