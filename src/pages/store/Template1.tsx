import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const StoreTemplate1 = () => {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">اسم المتجر</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <Button 
                className="w-full"
                onClick={() => navigate(`/product/template1/${product.id}`)}
              >
                عرض المنتج
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StoreTemplate1;