import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, MapPin, Clock, Phone, Instagram, Star } from "lucide-react";

const StoreTemplate4 = () => {
  const [selectedCategory, setSelectedCategory] = useState("main");

  const categories = [
    { id: "main", label: "الأطباق الرئيسية" },
    { id: "appetizers", label: "المقبلات" },
    { id: "drinks", label: "المشروبات" },
    { id: "desserts", label: "الحلويات" }
  ];

  const menuItems = {
    main: [
      {
        id: 1,
        name: "برجر لحم واجيو",
        description: "برجر لحم واجيو مع جبنة شيدر وصلصة خاصة",
        price: "8.500 د.ك",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        isSpicy: true,
        isPopular: true
      },
      {
        id: 2,
        name: "ستيك تندرلوين",
        description: "ستيك تندرلوين مشوي مع صلصة الفطر",
        price: "12.000 د.ك",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        isPopular: true
      }
    ],
    appetizers: [
      {
        id: 3,
        name: "سلطة سيزر",
        description: "خس روماني مع صلصة سيزر وقطع الدجاج المشوي",
        price: "4.500 د.ك",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
      }
    ],
    drinks: [
      {
        id: 4,
        name: "عصير برتقال طازج",
        description: "عصير برتقال طبيعي 100%",
        price: "2.000 د.ك",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423"
      }
    ],
    desserts: [
      {
        id: 5,
        name: "تشيز كيك",
        description: "تشيز كيك نيويورك مع صلصة التوت",
        price: "3.500 د.ك",
        image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd",
        isPopular: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-gray-900 to-black">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Restaurant Cover"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end gap-6">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white rounded-full">
                <AvatarImage src="https://images.unsplash.com/photo-1581991717893-55f4b9f62be0" />
                <AvatarFallback>RN</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-white mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">مطعم الذواقة</h1>
                <p className="text-gray-300 mt-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  الكويت، شارع سالم المبارك، السالمية
                </p>
                <div className="flex gap-4 mt-4">
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="w-3 h-3" /> مفتوح
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Star className="w-3 h-3" fill="currentColor" /> 4.8
                  </Badge>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
                  <Phone className="w-4 h-4 text-white" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
                  <Instagram className="w-4 h-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">قائمة الطعام</h2>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث في القائمة..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="w-full justify-start mb-6 bg-transparent border-b">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-900 rounded-full px-6"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems[category.id].map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="flex gap-4 p-4">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-gray-900">{item.name}</h3>
                              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            <span className="font-bold text-orange-600">{item.price}</span>
                          </div>
                          
                          <div className="flex gap-2 mt-3">
                            {item.isSpicy && (
                              <Badge variant="secondary" className="bg-red-50 text-red-600 hover:bg-red-50">
                                حار
                              </Badge>
                            )}
                            {item.isPopular && (
                              <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-50">
                                الأكثر طلباً
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default StoreTemplate4;