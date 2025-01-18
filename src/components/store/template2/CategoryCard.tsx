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
      className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg 
                 transition-all cursor-pointer border border-green-100"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="p-3 bg-green-50 rounded-xl">
          <Icon className="w-7 h-7 text-green-600" />
        </div>
        <span className="font-medium text-gray-800 text-lg">{name}</span>
        <span className="text-sm text-gray-500">{count} إعلان</span>
      </div>
    </motion.div>
  );
};