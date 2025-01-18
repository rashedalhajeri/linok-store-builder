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
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow 
                 transition-all cursor-pointer border border-[#E5E5EA]"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium text-[#1A1A1A]">{name}</h3>
          <span className="text-sm text-muted">{count} إعلان</span>
        </div>
      </div>
    </motion.div>
  );
};