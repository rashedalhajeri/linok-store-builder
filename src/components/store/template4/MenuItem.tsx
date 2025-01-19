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
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-card relative rounded-3xl">
        <div className="flex gap-8 p-6">
          <motion.div 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl"
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
          
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-start gap-4">
              <div>
                <motion.h3 
                  className="font-bold text-gray-900 text-2xl group-hover:text-primary-dark transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {item.name}
                </motion.h3>
                <p className="text-base text-gray-600 mt-3 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <span className="font-bold text-primary-dark text-xl bg-primary/10 px-6 py-3 rounded-full shadow-lg border border-primary/20">
                {item.price}
              </span>
            </div>
            
            <div className="flex gap-3 mt-4">
              {item.isSpicy && (
                <Badge variant="secondary" className="bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-300 shadow-sm px-4 py-1.5 text-sm">
                  حار 🌶️
                </Badge>
              )}
              {item.isPopular && (
                <Badge variant="secondary" className="bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors duration-300 shadow-sm px-4 py-1.5 text-sm">
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