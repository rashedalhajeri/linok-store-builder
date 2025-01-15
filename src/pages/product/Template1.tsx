import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const ProductTemplate1 = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  
  const product = {
    name: "اسم المنتج",
    price: "25.000 د.ك",
    description: "وصف تفصيلي للمنتج يوضح مميزاته وخصائصه",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ],
    sizes: [
      { id: 'small', label: 'S', price: '25.000 د.ك' },
      { id: 'medium', label: 'M', price: '27.000 د.ك' },
      { id: 'large', label: 'L', price: '29.000 د.ك' }
    ],
    colors: [
      { id: 'white', label: 'أبيض', value: '#FFFFFF' },
      { id: 'black', label: 'أسود', value: '#000000' },
      { id: 'blue', label: 'أزرق', value: '#2563EB' }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === image ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl text-primary mt-2">{product.price}</p>
          </div>
          
          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div>
              <Label>المقاس</Label>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex gap-4 mt-2"
              >
                {product.sizes.map((size) => (
                  <div key={size.id} className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value={size.id} id={`size-${size.id}`} />
                    <Label htmlFor={`size-${size.id}`} className="cursor-pointer">
                      {size.label} - {size.price}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label>اللون</Label>
              <RadioGroup
                value={selectedColor}
                onValueChange={setSelectedColor}
                className="flex gap-4 mt-2"
              >
                {product.colors.map((color) => (
                  <div key={color.id} className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value={color.id} id={`color-${color.id}`} />
                    <div 
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: color.value }}
                    />
                    <Label htmlFor={`color-${color.id}`} className="cursor-pointer">
                      {color.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerName">اسمك</Label>
              <Input
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="الرجاء إدخال اسمك"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerImage">إرفاق صورة</Label>
              <Input
                id="customerImage"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>

          <div className="space-x-4 space-x-reverse mt-8">
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