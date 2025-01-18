import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface FeaturedAdProps {
  id: number;
  title: string;
  price: string;
  location: string;
  date: string;
  image: string;
  category: string;
  views: number;
  condition: string;
  onClick: () => void;
}

export const FeaturedAdCard = ({ 
  title, price, location, date, image, category, condition, onClick 
}: FeaturedAdProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl 
                 transition-all duration-300 cursor-pointer border border-[#E5E5EA]"
      onClick={onClick}
    >
      <div className="aspect-[4/3] relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-black/60 text-white px-4 py-1.5 rounded-full text-sm backdrop-blur-sm">
            {category}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className={`px-4 py-1.5 rounded-full text-sm backdrop-blur-sm ${
            condition === "جديد" 
            ? "bg-[#34C759]/90 text-white" 
            : "bg-[#007AFF]/90 text-white"
          }`}>
            {condition}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-[#1A1A1A] line-clamp-1">{title}</h3>
        <p className="text-[#007AFF] font-bold text-xl mb-3">
          {price}
        </p>
        <div className="flex items-center justify-between text-sm text-[#8E8E93]">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
          <span>{date}</span>
        </div>
      </div>
    </motion.div>
  );
};