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
      whileHover={{ scale: 1.02, y: -2 }}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md 
                 transition-all cursor-pointer border border-[#E5E5EA]"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="p-3 bg-[#007AFF]/10 rounded-xl">
          <Icon className="w-7 h-7 text-[#007AFF]" />
        </div>
        <span className="font-medium text-[#1A1A1A] text-lg">{name}</span>
        <span className="text-sm text-[#8E8E93]">{count} إعلان</span>
      </div>
    </motion.div>
  );
};