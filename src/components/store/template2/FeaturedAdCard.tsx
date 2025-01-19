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
  title, price, location, date, image, condition, onClick 
}: FeaturedAdProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md 
                 transition-all duration-300 cursor-pointer border border-[#E9ECEF]"
      onClick={onClick}
    >
      <div className="aspect-[4/3] relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
            condition === "جديد" 
            ? "bg-[#4A90E2]/90 text-white" 
            : "bg-[#5C6BC0]/90 text-white"
          }`}>
            {condition}
          </span>
        </div>
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="space-y-1">
          <h3 className="font-medium text-sm text-[#2C3E50] line-clamp-1">{title}</h3>
          <p className="text-[#4A90E2] font-bold text-base">
            {price}
          </p>
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#6C757D]">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {location}
          </span>
          <span>{date}</span>
        </div>
      </div>
    </motion.div>
  );
};