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
      className="bg-white rounded-lg shadow-sm hover:shadow-md 
                 transition-all duration-300 cursor-pointer border border-[#E5E5EA]
                 w-[150px]"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 p-2">
        <div className="p-1.5 bg-primary/10 rounded-lg">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xs font-semibold text-[#1A1A1A] line-clamp-1">{name}</h3>
          <span className="text-[10px] text-muted">{count} إعلان</span>
        </div>
      </div>
    </motion.div>
  );
};