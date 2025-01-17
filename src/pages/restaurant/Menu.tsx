import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// بيانات تجريبية للمنيو
const menuItems = [
  {
    id: 1,
    name: "برجر لحم",
    description: "برجر لحم مشوي مع جبنة شيدر وخضروات طازجة",
    price: 8.5,
    category: "برجر",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: 2,
    name: "بيتزا مارجريتا",
    description: "بيتزا مع صلصة طماطم وجبنة موزاريلا وريحان",
    price: 12,
    category: "بيتزا",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
  }
];

const categories = [
  { id: "all", name: "الكل" },
  { id: "burger", name: "برجر" },
  { id: "pizza", name: "بيتزا" },
  { id: "drinks", name: "مشروبات" }
];

const Menu = () => {
  const { tableId } = useParams();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Array<{ id: number; quantity: number }>>([]);

  const addToCart = (itemId: number) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === itemId);
      if (existingItem) {
        return prev.map(item =>
          item.id === itemId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: itemId, quantity: 1 }];
    });

    toast({
      title: "تمت الإضافة إلى السلة",
      description: "يمكنك مراجعة طلبك في أي وقت",
    });
  };

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory;
    const matchesSearch = item.name.includes(searchQuery) || 
                         item.description.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* رأس الصفحة */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">قائمة الطعام</h1>
            <p className="text-gray-500">طاولة رقم {tableId}</p>
          </div>
          <Button variant="outline" className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cart.length > 0 && (
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </Badge>
            )}
          </Button>
        </div>

        {/* البحث والتصفية */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="ابحث عن وجبتك المفضلة..."
              className="pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex-shrink-0"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* قائمة الأطباق */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <span className="font-bold text-primary">{item.price} د.ك</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                  <Button 
                    onClick={() => addToCart(item.id)}
                    className="w-full"
                  >
                    إضافة للطلب
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;