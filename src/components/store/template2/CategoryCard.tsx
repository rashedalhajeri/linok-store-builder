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
      className="bg-white rounded-2xl shadow-sm hover:shadow-md 
                 transition-all duration-300 cursor-pointer border border-[#E5E5EA]
                 flex-1 min-w-[220px] max-w-[250px]"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 px-5 py-4">
        <div className="p-3.5 bg-primary/10 rounded-xl">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-base font-semibold text-[#1A1A1A]">{name}</h3>
          <span className="text-sm text-muted">{count} إعلان</span>
        </div>
      </div>
    </motion.div>
  );
};