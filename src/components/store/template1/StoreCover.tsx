import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface StoreCoverProps {
  language: 'en' | 'ar';
  onToggleLanguage: () => void;
}

export const StoreCover = ({ language, onToggleLanguage }: StoreCoverProps) => {
  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleLanguage}
          className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
        >
          <Globe className="w-5 h-5 text-gray-700" />
        </Button>
      </div>
      <div className="h-[200px] md:h-[300px] bg-gradient-to-b from-[#fdfcfb] to-[#e2d1c3]">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Store Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcfb]/10 to-[#e2d1c3]/30" />
      </div>
    </div>
  );
};