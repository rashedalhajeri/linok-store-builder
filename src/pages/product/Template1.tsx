import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

const ProductTemplate1 = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  
  const product = {
    name: "اسم المنتج",
    basePrice: 25.000,
    description: "وصف تفصيلي للمنتج يوضح مميزاته وخصائصه",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ],
    sizes: [
      { id: 'small', label: 'S', priceAdjustment: 0 },
      { id: 'medium', label: 'M', priceAdjustment: 2 },
      { id: 'large', label: 'L', priceAdjustment: 4 }
    ],
    colors: [
      { id: 'white', value: '#FFFFFF' },
      { id: 'black', value: '#000000' },
      { id: 'blue', value: '#2563EB' }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const calculatePrice = () => {
    const selectedSizeData = product.sizes.find(size => size.id === selectedSize);
    const priceAdjustment = selectedSizeData ? selectedSizeData.priceAdjustment : 0;
    return (product.basePrice + priceAdjustment).toFixed(3);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden bg-gradient-to-br from-white to-gray-50">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* صور المنتج */}
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-3xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${
                    selectedImage === image ? 'border-primary ring-4 ring-primary/20' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div className="space-y-8">
            <div className="space-y-4 bg-white/50 p-6 rounded-2xl backdrop-blur-sm">
              <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary animate-fade-in">
                {calculatePrice()} د.ك
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <Label className="text-xl font-semibold inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  المقاس
                </Label>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="grid grid-cols-3 gap-4"
                >
                  {product.sizes.map((size) => (
                    <div
                      key={size.id}
                      className={`relative flex items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md
                        ${selectedSize === size.id ? 'border-primary bg-primary/5 shadow-lg' : 'border-border hover:border-primary/50'}`}
                    >
                      <RadioGroupItem value={size.id} id={`size-${size.id}`} className="absolute inset-0 opacity-0" />
                      <Label htmlFor={`size-${size.id}`} className="cursor-pointer text-center">
                        <div className="text-xl font-semibold">{size.label}</div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-xl font-semibold inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  اللون
                </Label>
                <RadioGroup
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                  className="grid grid-cols-3 gap-4"
                >
                  {product.colors.map((color) => (
                    <div
                      key={color.id}
                      className={`relative flex items-center justify-center p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md
                        ${selectedColor === color.id ? 'border-primary shadow-lg scale-105' : 'border-border hover:border-primary/50'}`}
                    >
                      <RadioGroupItem value={color.id} id={`color-${color.id}`} className="absolute inset-0 opacity-0" />
                      <div 
                        className="w-10 h-10 rounded-full border shadow-lg transition-transform duration-300 hover:scale-110"
                        style={{ backgroundColor: color.value }}
                      />
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-xl font-semibold inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" htmlFor="customerName">
                  اسمك
                </Label>
                <Input
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="الرجاء إدخال اسمك"
                  className="text-lg rounded-xl border-2 focus:border-primary/50 transition-all duration-300"
                />
              </div>

              <div className="space-y-4">
                <Label className="text-xl font-semibold inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" htmlFor="customerImage">
                  إرفاق صورة
                </Label>
                <Input
                  id="customerImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="text-lg rounded-xl border-2 focus:border-primary/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button 
                size="lg" 
                className="flex-1 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg font-semibold"
                onClick={() => navigate("/cart")}
              >
                إضافة للسلة
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-xl hover:bg-primary/5 transition-all duration-300 text-lg font-semibold"
                onClick={() => window.history.back()}
              >
                رجوع
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductTemplate1;