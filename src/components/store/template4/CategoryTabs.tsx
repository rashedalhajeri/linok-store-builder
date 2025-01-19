import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="relative">
      <h2 className="text-xl font-semibold mb-4 text-charcoal text-center">تصفح قائمة الطعام حسب الفئات</h2>
      <Tabs value={selectedCategory} className="w-full">
        <div className="relative">
          <TabsList className="w-full h-auto flex gap-3 sm:gap-4 p-4 sm:p-6 bg-white backdrop-blur-lg rounded-3xl overflow-x-auto scrollbar-hide shadow-lg border border-gray-100">
            <ChevronRight className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 animate-pulse hidden md:block" />
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <TabsTrigger
                  value={category.id}
                  onClick={() => onSelectCategory(category.id)}
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg whitespace-nowrap rounded-2xl
                    data-[state=active]:bg-gradient-to-r from-primary to-primary-dark
                    data-[state=active]:text-white data-[state=active]:shadow-lg 
                    transition-all duration-300 hover:bg-gray-100 
                    text-gray-600 group relative overflow-hidden font-medium"
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
            <ChevronLeft className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 animate-pulse hidden md:block" />
          </TabsList>
        </div>
      </Tabs>
      <p className="text-sm text-muted text-center mt-2">← اسحب للمزيد من الفئات →</p>
    </div>
  );
};