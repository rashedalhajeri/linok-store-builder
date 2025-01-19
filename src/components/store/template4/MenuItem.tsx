import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Star } from "lucide-react";

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    isSpicy?: boolean;
    isPopular?: boolean;
  };
}

export const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 bg-white h-full">
        <div className="flex flex-col h-full">
          <div className="relative w-full pt-[75%] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="flex-1 p-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-charcoal text-sm md:text-base group-hover:text-gray-900 transition-colors duration-300 line-clamp-1">
                  {item.name}
                </h3>
                {item.isSpicy && (
                  <div className="flex items-center gap-0.5 text-red-500">
                    <Flame size={16} />
                    <span className="text-xs">حار</span>
                  </div>
                )}
                {item.isPopular && (
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <Star size={16} className="fill-amber-500" />
                    <span className="text-xs">الأكثر مبيعاً</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-600 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>
            </div>
            
            <div className="mt-3 flex items-center justify-end">
              <span className="font-bold text-charcoal text-sm md:text-base bg-gray-50 px-2.5 py-1 rounded-full shadow-sm">
                {item.price}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};