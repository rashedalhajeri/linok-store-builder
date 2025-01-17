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
      <TabsList className="w-full h-auto flex gap-2 p-2 bg-gray-50/50 rounded-2xl overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <TabsTrigger
              value={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="px-6 py-3 text-base whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
            >
              {category.label}
            </TabsTrigger>
          </motion.div>
        ))}
      </TabsList>
    </Tabs>
  );
};