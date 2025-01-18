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
  title, price, location, date, image, category, views, condition, onClick 
}: FeaturedAdProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg 
                 transition-all cursor-pointer border border-[#D3E4FD]"
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-black/50 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm">
            {category}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1.5 rounded-full text-sm backdrop-blur-sm ${
            condition === "جديد" 
            ? "bg-[#6B4EFF]/80 text-white" 
            : "bg-[#4EA8FF]/80 text-white"
          }`}>
            {condition}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{title}</h3>
        <p className="text-[#6B4EFF] font-bold text-xl mb-3">
          {price}
        </p>
        <div className="flex items-center justify-between text-sm text-[#8E9196]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
          <span>{date}</span>
        </div>
        <div className="mt-3 pt-3 border-t border-[#D3E4FD] flex items-center justify-between text-sm">
          <span className="text-[#8E9196]">{views} مشاهدة</span>
          <span className="text-[#6B4EFF] hover:text-[#5B3EEF] transition-colors">
            عرض التفاصيل
          </span>
        </div>
      </div>
    </motion.div>
  );
};