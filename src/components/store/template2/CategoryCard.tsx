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
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md 
                 transition-all duration-300 cursor-pointer border border-[#E5E5EA]/30
                 w-[85px] mx-1.5"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-1.5 p-2">
        <div className="p-2 bg-[#F8F7FD] rounded-lg">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-[11px] font-medium text-[#1A1A1A] line-clamp-1">{name}</h3>
          <span className="text-[9px] text-muted-dark mt-0.5">{count} إعلان</span>
        </div>
      </div>
    </motion.div>
  );
};