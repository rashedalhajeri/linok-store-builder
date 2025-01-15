import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductTemplate1 = () => {
  const navigate = useNavigate();
  
  const product = {
    name: "اسم المنتج",
    price: "100 ريال",
    description: "وصف تفصيلي للمنتج يوضح مميزاته وخصائصه",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl text-gray-600">{product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <div className="space-x-4 space-x-reverse">
            <Button onClick={() => navigate("/cart")}>
              إضافة للسلة
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              رجوع
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTemplate1;