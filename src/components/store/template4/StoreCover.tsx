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
      
      <div className="relative px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center space-y-6 mb-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl"
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
        </div>
      </div>
    </div>
  );
};