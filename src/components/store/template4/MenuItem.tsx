import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          
          <div className="flex-1 p-3 space-y-2">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h3 className="font-bold text-charcoal text-base group-hover:text-gray-900 transition-colors duration-300 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
              <span className="font-bold text-charcoal text-base bg-gray-50 px-2 py-1 rounded-full shadow-sm whitespace-nowrap">
                {item.price}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {item.isSpicy && (
                <Badge variant="secondary" className="bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-300 shadow-sm text-xs">
                  حار 🌶️
                </Badge>
              )}
              {item.isPopular && (
                <Badge variant="secondary" className="bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors duration-300 shadow-sm text-xs">
                  الأكثر طلباً ⭐️
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};