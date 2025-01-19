import { motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { Instagram, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryTabs } from "./CategoryTabs";
import { SearchBar } from "./SearchBar";

interface StoreCoverProps {
  language: 'en' | 'ar';
  onToggleLanguage: () => void;
}

export const StoreCover = ({ language, onToggleLanguage }: StoreCoverProps) => {
  const categories = [
    { id: "all", label: "الكل" },
    { id: "desserts", label: "حلويات" },
    { id: "cakes", label: "كيك" },
    { id: "cookies", label: "كوكيز" },
    { id: "drinks", label: "مشروبات" },
  ];

  return (
    <div className="relative w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-[200px]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border border-gray-200 bg-white/90 text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3 hover:bg-white/100"
              onClick={() => window.open('https://instagram.com/bowlicious', '_blank')}
            >
              <Instagram className="h-3.5 w-3.5 ml-1" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border border-gray-200 bg-white/90 text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3 hover:bg-white/100"
              onClick={() => window.open('https://snapchat.com/add/bowlicious', '_blank')}
            >
              <MessageSquare className="h-3.5 w-3.5 ml-1" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border border-gray-200 bg-white/90 text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3 hover:bg-white/100"
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
        
        <div className="relative px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-2 border-white/20"
              >
                <span className="text-3xl font-bold text-white">BO</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center space-y-2"
              >
                <h1 className="text-2xl font-bold text-white text-shadow">Bowlicious</h1>
                <p className="text-gray-100 text-sm max-w-md mx-auto leading-relaxed">
                  Exquisite bowls and diverse culinary delights crafted with passion
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Categories Section */}
      <div className="bg-white shadow-sm pt-4 pb-2">
        <div className="max-w-7xl mx-auto">
          <SearchBar onSearch={(query) => console.log(query)} />
          <div className="mt-6">
            <CategoryTabs 
              categories={categories}
              selectedCategory="all"
              onSelectCategory={(category) => console.log(category)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};