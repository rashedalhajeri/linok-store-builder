import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const ProductTemplate3 = () => {
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
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 p-8">
            <div className="space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 ${
                      selectedImage === image ? 'border-blue-600' : 'border-transparent'
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

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-blue-900">{product.name}</h1>
                <p className="text-3xl text-blue-600 mt-2">{product.price}</p>
              </div>
              
              <p className="text-gray-600 text-xl leading-relaxed">{product.description}</p>

              <div className="space-y-6">
                <div>
                  <Label className="text-lg text-blue-900">المقاس</Label>
                  <RadioGroup
                    value={selectedSize}
                    onValueChange={setSelectedSize}
                    className="flex gap-4 mt-3"
                  >
                    {product.sizes.map((size) => (
                      <div key={size.id} className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value={size.id} id={`size-${size.id}`} />
                        <Label htmlFor={`size-${size.id}`} className="cursor-pointer text-lg">
                          {size.label} - {size.price}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg text-blue-900">اللون</Label>
                  <RadioGroup
                    value={selectedColor}
                    onValueChange={setSelectedColor}
                    className="flex gap-4 mt-3"
                  >
                    {product.colors.map((color) => (
                      <div key={color.id} className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value={color.id} id={`color-${color.id}`} />
                        <div 
                          className="w-8 h-8 rounded-full border shadow-sm"
                          style={{ backgroundColor: color.value }}
                        />
                        <Label htmlFor={`color-${color.id}`} className="cursor-pointer text-lg">
                          {color.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-lg text-blue-900" htmlFor="customerName">اسمك</Label>
                  <Input
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="الرجاء إدخال اسمك"
                    className="text-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-lg text-blue-900" htmlFor="customerImage">إرفاق صورة</Label>
                  <Input
                    id="customerImage"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="text-lg"
                  />
                </div>
              </div>

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