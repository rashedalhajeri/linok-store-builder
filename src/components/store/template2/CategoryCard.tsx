import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  name: string;
  count: number;
  onClick: () => void;
}

export const CategoryCard = ({ icon: Icon, name, count, onClick }: CategoryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md 
                 transition-all duration-300 cursor-pointer border border-[#E5E5EA]/50
                 w-[100px] mx-1"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-2 p-3">
        <div className="p-2 bg-[#F1F0FB] rounded-xl">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xs font-medium text-[#1A1A1A] line-clamp-1">{name}</h3>
          <span className="text-[10px] text-muted-dark">{count} إعلان</span>
        </div>
      </div>
    </motion.div>
  );
};