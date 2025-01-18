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
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md 
                 transition-all duration-300 cursor-pointer border border-[#E5E5EA]"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-4 bg-primary/10 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">{name}</h3>
          <span className="text-sm text-muted">{count} إعلان</span>
        </div>
      </div>
    </motion.div>
  );
};