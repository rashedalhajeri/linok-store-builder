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
      className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                 transition-all duration-300 cursor-pointer
                 w-[90px] mx-2"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-2 p-3">
        <div className="p-2.5 bg-[#F8F7FD] rounded-xl">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xs font-medium text-[#1A1A1A] line-clamp-1 mb-0.5">{name}</h3>
          <span className="text-[10px] text-muted">{count} إعلان</span>
        </div>
      </div>
    </motion.div>
  );
};