import { motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { Instagram, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoreCoverProps {
  language: 'en' | 'ar';
  onToggleLanguage: () => void;
}

export const StoreCover = ({ language, onToggleLanguage }: StoreCoverProps) => {
  return (
    <div className="relative w-full bg-white">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border border-gray-200 bg-white text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3"
            onClick={() => window.open('https://instagram.com/bowlicious', '_blank')}
          >
            <Instagram className="h-3.5 w-3.5 ml-1" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border border-gray-200 bg-white text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3"
            onClick={() => window.open('https://snapchat.com/add/bowlicious', '_blank')}
          >
            <MessageSquare className="h-3.5 w-3.5 ml-1" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border border-gray-200 bg-white text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3"
            onClick={() => window.open('tel:+1234567890')}
          >
            <Phone className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>

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
              className="w-28 h-28 bg-black rounded-full flex items-center justify-center shadow-xl"
            >
              <span className="text-4xl font-bold text-white">BO</span>
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