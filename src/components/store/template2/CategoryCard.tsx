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
      <div className="flex flex-col items-center gap-4 py-2">
        <div className="p-4 bg-primary/10 rounded-xl">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-[#1A1A1A] text-lg mb-1">{name}</h3>
          <span className="text-sm text-muted">{count} إعلان</span>
        </div>
      </div>
    </motion.div>
  );
};