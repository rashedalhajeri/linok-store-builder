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
      <Card className="group relative overflow-hidden border-0 bg-gradient-card rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-500">
        <div className="flex flex-col h-full">
          <div className="relative w-full pt-[70%] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {item.isSpicy && (
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-white bg-red-500/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg text-sm font-medium border border-white/10"
                >
                  <Flame size={16} className="shrink-0" strokeWidth={2.5} />
                  حار
                </motion.div>
              )}
              {item.isPopular && (
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-white bg-amber-500/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg text-sm font-medium border border-white/10"
                >
                  <Star size={16} className="shrink-0 fill-white" strokeWidth={2.5} />
                  مميز
                </motion.div>
              )}
            </div>
          </div>
          
          <div className="relative p-6 bg-gradient-to-b from-white/90 to-gray-50/90 backdrop-blur-sm">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-bold text-gray-900 text-xl group-hover:text-primary-dark transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="font-bold text-primary-dark text-lg bg-primary/5 px-5 py-2 rounded-2xl shadow-sm border border-primary/10">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>
            </div>
            
            <motion.div 
              initial={false}
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};