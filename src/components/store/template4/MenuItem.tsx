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
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-card relative">
        <div className="flex gap-6 p-5">
          <motion.div 
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          
          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <motion.h3 
                  className="font-bold text-gray-900 text-xl group-hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {item.name}
                </motion.h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
              <span className="font-bold text-primary text-lg bg-primary/5 px-5 py-2 rounded-full shadow-sm border border-primary/10">
                {item.price}
              </span>
            </div>
            
            <div className="flex gap-2 mt-4">
              {item.isSpicy && (
                <Badge variant="secondary" className="bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-300 shadow-sm">
                  حار 🌶️
                </Badge>
              )}
              {item.isPopular && (
                <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors duration-300 shadow-sm">
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