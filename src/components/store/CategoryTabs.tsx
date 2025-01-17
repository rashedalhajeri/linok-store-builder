import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface Category {
  id: string;
  label: string;
}

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }: CategoryTabsProps) => {
  return (
    <Tabs value={selectedCategory} className="w-full">
      <TabsList className="w-full h-auto flex gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-2xl overflow-x-auto scrollbar-hide shadow-sm border border-gray-100">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <TabsTrigger
              value={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="px-6 py-3 text-base whitespace-nowrap rounded-xl
                data-[state=active]:bg-primary data-[state=active]:text-white
                data-[state=active]:shadow-md transition-all duration-300
                hover:bg-gray-50 hover:text-primary"
            >
              {category.label}
            </TabsTrigger>
          </motion.div>
        ))}
      </TabsList>
    </Tabs>
  );
};