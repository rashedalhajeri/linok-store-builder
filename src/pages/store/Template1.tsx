import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, MessageSquare, Instagram, Star, Car, Shirt } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const StoreTemplate1 = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: "تي شيرت كاجوال",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 2,
      name: "فستان صيفي أنيق",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Cover Image */}
      <div className="relative h-48 bg-gradient-to-b from-purple-900 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/lovable-uploads/2d88c32c-62d4-41d8-a279-4a96b9a88d08.png')] bg-cover bg-center" />
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="flex flex-col items-start gap-4">
          <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">Demo Store</h1>
              <span className="text-blue-500">✓</span>
            </div>
            <p className="text-gray-600">demostore@</p>
          </div>

          {/* Contact Buttons */}
          <div className="flex gap-4 w-full">
            <Button variant="outline" size="icon" className="rounded-full">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <MessageSquare className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن المنتجات..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
          <Button variant="default" className="rounded-full flex gap-2 whitespace-nowrap">
            <Star className="h-4 w-4" />
            الكل
          </Button>
          <Button variant="outline" className="rounded-full flex gap-2 whitespace-nowrap">
            <Shirt className="h-4 w-4" />
            فاشن
          </Button>
          <Button variant="outline" className="rounded-full flex gap-2 whitespace-nowrap">
            <Car className="h-4 w-4" />
            سيارات
          </Button>
          <Button variant="outline" className="rounded-full flex gap-2 whitespace-nowrap">
            <Star className="h-4 w-4" />
            خدمات
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/product/template1/${product.id}`)}
            >
              <div className="relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-right">{product.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate1;