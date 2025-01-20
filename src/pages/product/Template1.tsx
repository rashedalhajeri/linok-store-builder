import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ProductGallery } from "@/components/product/template1/ProductGallery";
import { ProductDetails } from "@/components/product/template1/ProductDetails";

const ProductTemplate1 = () => {
  const navigate = useNavigate();
  
  const product = {
    name: "اسم المنتج",
    basePrice: 25.000,
    description: "وصف تفصيلي للمنتج يوضح مميزاته وخصائصه بشكل مفصل ودقيق مع ذكر جميع المواصفات المهمة التي يحتاج العميل معرفتها",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ],
    sizes: [
      { id: 'xs', label: 'XS' },
      { id: 'small', label: 'S' },
      { id: 'medium', label: 'M' },
      { id: 'large', label: 'L' },
      { id: 'xl', label: 'XL' }
    ],
    colors: [
      { id: 'white', value: '#FFFFFF', label: 'أبيض' },
      { id: 'black', value: '#000000', label: 'أسود' },
      { id: 'blue', value: '#2563EB', label: 'أزرق' },
      { id: 'red', value: '#DC2626', label: 'أحمر' },
      { id: 'green', value: '#059669', label: 'أخضر' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <Card className="max-w-6xl mx-auto overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl border border-gray-100">
        <div className="grid lg:grid-cols-2 gap-8 p-6">
          <ProductGallery images={product.images} name={product.name} />
          <ProductDetails 
            {...product}
            onAddToCart={() => navigate("/cart")}
            onBack={() => window.history.back()}
          />
        </div>
      </Card>
    </div>
  );
};

export default ProductTemplate1;