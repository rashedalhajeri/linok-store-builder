import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const StoreTemplate3 = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: "منتج 1",
      price: "100 ريال",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 2,
      name: "منتج 2",
      price: "200 ريال",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 3,
      name: "منتج 3",
      price: "300 ريال",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-900">اسم المتجر</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      className="w-full bg-white text-blue-900 hover:bg-blue-50"
                      onClick={() => navigate(`/product/template3/${product.id}`)}
                    >
                      عرض المنتج
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-blue-600 text-xl">{product.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate3;