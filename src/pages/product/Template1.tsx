import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

const ProductTemplate1 = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
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
      { id: 'small', label: 'S' },
      { id: 'medium', label: 'M' },
      { id: 'large', label: 'L' }
    ],
    colors: [
      { id: 'white', value: '#FFFFFF', label: 'أبيض' },
      { id: 'black', value: '#000000', label: 'أسود' },
      { id: 'blue', value: '#2563EB', label: 'أزرق' }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedImage(file);
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  const calculatePrice = () => {
    let finalPrice = product.basePrice;
    if (selectedSize === 'medium') finalPrice += 2;
    if (selectedSize === 'large') finalPrice += 4;
    return finalPrice.toFixed(3);
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Card className="overflow-hidden bg-white shadow-lg rounded-3xl">
        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-square overflow-hidden rounded-2xl border shadow-md"
            >
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(image)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300
                    ${selectedImage === image ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200 hover:border-primary/50'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-primary">
                {calculatePrice()} د.ك
              </p>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {/* Sizes */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  المقاس
                </Label>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex gap-2"
                >
                  {product.sizes.map((size) => (
                    <motion.div
                      key={size.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <RadioGroupItem
                        value={size.id}
                        id={size.id}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={size.id}
                        className="flex h-9 items-center justify-center rounded-lg border-2 cursor-pointer
                          transition-all duration-300 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5
                          hover:border-primary/50 hover:bg-gray-50 text-sm"
                      >
                        {size.label}
                      </Label>
                    </motion.div>
                  ))}
                </RadioGroup>
              </div>

              {/* Colors */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  اللون
                </Label>
                <RadioGroup
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                  className="flex gap-2"
                >
                  {product.colors.map((color) => (
                    <motion.div
                      key={color.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <RadioGroupItem
                        value={color.id}
                        id={color.id}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={color.id}
                        className="flex h-9 items-center justify-center rounded-lg border-2 cursor-pointer
                          transition-all duration-300 peer-data-[state=checked]:border-primary peer-data-[state=checked]:ring-2
                          peer-data-[state=checked]:ring-primary/20 hover:border-primary/50"
                      >
                        <span 
                          className="w-6 h-6 rounded-full border shadow-sm"
                          style={{ backgroundColor: color.value }}
                        />
                      </Label>
                    </motion.div>
                  ))}
                </RadioGroup>
              </div>

              {/* Customer Name */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700" htmlFor="customerName">
                  اسمك
                </Label>
                <Input
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="الرجاء إدخال اسمك"
                  className="h-9 rounded-lg border-gray-200 focus:border-primary/50"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  إرفاق صورة
                </Label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="imageUpload"
                  />
                  <Label
                    htmlFor="imageUpload"
                    className="flex flex-col items-center justify-center w-full h-32 rounded-lg border-2 border-dashed
                      border-gray-300 hover:border-primary/50 cursor-pointer transition-colors bg-gray-50/50
                      hover:bg-gray-50"
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="h-full w-full object-contain rounded-lg"
                      />
                    ) : (
                      <div className="flex flex-col items-center space-y-2">
                        <Upload className="h-8 w-8 text-gray-400" />
                        <span className="text-sm text-gray-500">اضغط هنا لرفع صورة</span>
                      </div>
                    )}
                  </Label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button 
                size="lg"
                className="flex-1 rounded-lg bg-primary hover:bg-primary/90 transition-colors"
                onClick={() => navigate("/cart")}
              >
                إضافة للسلة
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-lg hover:bg-gray-50 border-2"
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