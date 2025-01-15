import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const ProductTemplate1 = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
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

  const words = product.description.split(' ');
  const truncatedDescription = words.slice(0, 10).join(' ');
  const hasMoreDescription = words.length > 10;

  const handleSizeSliderChange = (value: number[]) => {
    setCurrentSizeIndex(value[0]);
    setSelectedSize(product.sizes[value[0]].id);
  };

  const handleColorSliderChange = (value: number[]) => {
    setCurrentColorIndex(value[0]);
    setSelectedColor(product.colors[value[0]].id);
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
              <div className="text-gray-600 leading-relaxed">
                {showFullDescription ? product.description : truncatedDescription}
                {hasMoreDescription && !showFullDescription && (
                  <button
                    onClick={() => setShowFullDescription(true)}
                    className="text-primary hover:text-primary/80 mr-1 text-sm font-medium"
                  >
                    المزيد
                  </button>
                )}
              </div>
            </motion.div>
            
            <div className="space-y-4">
              {/* Sizes */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  المقاس: {product.sizes[currentSizeIndex].label}
                </Label>
                <Slider
                  value={[currentSizeIndex]}
                  max={product.sizes.length - 1}
                  step={1}
                  onValueChange={handleSizeSliderChange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  {product.sizes.map((size) => (
                    <span key={size.id}>{size.label}</span>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  اللون: {product.colors[currentColorIndex].label}
                </Label>
                <Slider
                  value={[currentColorIndex]}
                  max={product.colors.length - 1}
                  step={1}
                  onValueChange={handleColorSliderChange}
                  className="w-full"
                />
                <div className="flex justify-between">
                  {product.colors.map((color) => (
                    <span
                      key={color.id}
                      className="w-6 h-6 rounded-full border shadow-sm"
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
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
