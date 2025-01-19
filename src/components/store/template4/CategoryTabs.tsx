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
    <div className="px-4">
      <Tabs value={selectedCategory} className="w-full">
        <TabsList className="w-full h-auto flex gap-3 p-3 bg-gray-50/80 backdrop-blur-sm rounded-2xl overflow-x-auto scrollbar-hide">
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
                className="px-6 py-2.5 text-sm whitespace-nowrap rounded-xl
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-sm transition-all duration-300
                  hover:bg-gray-100 group relative overflow-hidden"
              >
                <span className="relative z-10">{category.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ scale: [0.9, 1], opacity: [0, 1] }}
                  transition={{ duration: 0.3 }}
                />
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};