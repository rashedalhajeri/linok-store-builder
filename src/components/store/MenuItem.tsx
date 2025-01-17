import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/product/template4/${item.id}`)}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all">
        <div className="flex gap-3 p-3">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2">
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 truncate">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <span className="font-bold text-primary whitespace-nowrap">{item.price}</span>
            </div>
            
            <div className="flex gap-2 mt-2">
              {item.isSpicy && (
                <Badge variant="secondary" className="bg-red-50 text-red-600 hover:bg-red-50">
                  حار 🌶️
                </Badge>
              )}
              {item.isPopular && (
                <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-50">
                  مميز ⭐️
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};