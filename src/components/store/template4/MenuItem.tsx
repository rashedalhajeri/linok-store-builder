import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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
  onOrder: () => void;
}

export const MenuItem = ({ item, onOrder }: MenuItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="flex gap-4 p-4">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <span className="font-bold text-primary text-lg">{item.price} د.ك</span>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                {item.isSpicy && (
                  <Badge variant="secondary" className="bg-red-50 text-red-600 hover:bg-red-50">
                    حار 🌶️
                  </Badge>
                )}
                {item.isPopular && (
                  <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-50">
                    الأكثر طلباً ⭐️
                  </Badge>
                )}
              </div>
              
              <Button
                onClick={onOrder}
                variant="default"
                size="sm"
                className="rounded-full"
              >
                <Plus className="w-4 h-4 mr-1" />
                طلب
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};