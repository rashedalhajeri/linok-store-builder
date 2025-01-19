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
      <Card className="overflow-hidden group border-0 bg-white h-full rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col h-full">
          <div className="relative w-full pt-[75%] overflow-hidden rounded-t-3xl">
            <img
              src={item.image}
              alt={item.name}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              {item.isSpicy && (
                <div className="inline-flex items-center gap-1.5 text-white bg-red-500/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-medium transform hover:scale-105 transition-all duration-200">
                  <Flame size={16} className="shrink-0" strokeWidth={2.5} />
                  حار
                </div>
              )}
              {item.isPopular && (
                <div className="inline-flex items-center gap-1.5 text-white bg-amber-500/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-medium transform hover:scale-105 transition-all duration-200">
                  <Star size={16} className="shrink-0 fill-white" strokeWidth={2.5} />
                  مميز
                </div>
              )}
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="font-bold text-white text-lg bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg">
                {item.price}
              </span>
            </div>
          </div>
          
          <div className="flex-1 p-5">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-gray-900 text-xl group-hover:text-primary-dark transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};