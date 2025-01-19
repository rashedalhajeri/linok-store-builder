import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
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
            <div className="absolute top-2 left-2 flex flex-col gap-1.5">
              {item.isSpicy && (
                <div className="inline-flex items-center gap-0.5 text-red-500 bg-red-50/90 px-1.5 py-0.5 rounded-full text-[9px] font-medium border border-red-100 backdrop-blur-sm">
                  <Flame size={10} className="shrink-0" />
                  حار
                </div>
              )}
              {item.isPopular && (
                <div className="inline-flex items-center gap-0.5 text-amber-500 bg-amber-50/90 px-1.5 py-0.5 rounded-full text-[9px] font-medium border border-amber-100 backdrop-blur-sm">
                  <Star size={10} className="shrink-0 fill-amber-500" />
                  الأكثر مبيعاً
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-1 p-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-charcoal text-base group-hover:text-gray-900 transition-colors duration-300 line-clamp-1">
                {item.name}
              </h3>
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