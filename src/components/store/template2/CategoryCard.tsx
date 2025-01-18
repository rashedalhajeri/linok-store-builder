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
      className="bg-white rounded-xl shadow-sm hover:shadow-md 
                 transition-all duration-300 cursor-pointer border border-[#E5E5EA]
                 w-[180px]"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 p-3">
        <div className="p-2.5 bg-primary/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-[#1A1A1A] line-clamp-1">{name}</h3>
          <span className="text-xs text-muted">{count} إعلان</span>
        </div>
      </div>
    </motion.div>
  );
};