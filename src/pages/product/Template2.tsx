import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductTemplate2 = () => {
  const navigate = useNavigate();
  
  const product = {
    name: "اسم المنتج",
    price: "100 ريال",
    description: "وصف تفصيلي للمنتج يوضح مميزاته وخصائصه",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover rounded-lg" />
            </div>
            <div className="p-8 flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold text-purple-900">{product.name}</h1>
              <p className="text-3xl text-purple-600">{product.price}</p>
              <p className="text-gray-600 text-lg">{product.description}</p>
              <div className="space-x-4 space-x-reverse">
                <Button 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => navigate("/cart")}
                >
                  إضافة للسلة
                </Button>
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
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

export default ProductTemplate2;