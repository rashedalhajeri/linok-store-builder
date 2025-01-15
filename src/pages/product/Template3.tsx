import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductTemplate3 = () => {
  const navigate = useNavigate();
  
  const product = {
    name: "اسم المنتج",
    price: "100 ريال",
    description: "وصف تفصيلي للمنتج يوضح مميزاته وخصائصه",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 p-8">
            <div className="relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[600px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-blue-900 mb-4">{product.name}</h1>
                <p className="text-3xl text-blue-600">{product.price}</p>
              </div>
              <p className="text-gray-600 text-xl leading-relaxed">{product.description}</p>
              <div className="space-x-6 space-x-reverse">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
                  onClick={() => navigate("/cart")}
                >
                  إضافة للسلة
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
                  onClick={() => window.history.back()}
                >
                  رجوع
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTemplate3;