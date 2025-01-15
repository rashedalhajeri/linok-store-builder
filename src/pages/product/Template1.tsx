import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
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
  const [showFullDescription, setShowFullDescription] = useState(false);
  
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2FCE2] to-[#E5DEFF] py-12">
      <Card className="max-w-6xl mx-auto overflow-hidden bg-white/80 backdrop-blur-sm shadow-2xl rounded-[2rem] border-0">
        <div className="grid lg:grid-cols-2 gap-12 p-8">
          {/* Product Images */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden border-0 shadow-xl"
            >
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(image)}
                  className={`relative aspect-square rounded-2xl overflow-hidden shadow-lg transition-all duration-300
                    ${selectedImage === image ? 'ring-4 ring-[#9b87f5] scale-105' : 'hover:ring-2 hover:ring-[#9b87f5]/50'}`}
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
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold text-[#1A1F2C] tracking-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-semibold text-[#7E69AB]">
                {calculatePrice()} د.ك
              </p>
              <div className="prose text-gray-600 leading-relaxed">
                {showFullDescription ? product.description : truncatedDescription}
                {hasMoreDescription && !showFullDescription && (
                  <button
                    onClick={() => setShowFullDescription(true)}
                    className="text-[#9b87f5] hover:text-[#7E69AB] mr-2 text-sm font-medium transition-colors"
                  >
                    المزيد
                  </button>
                )}
              </div>
            </motion.div>
            
            <div className="space-y-8 bg-[#F1F0FB] p-6 rounded-2xl">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                {/* Sizes */}
                <div className="space-y-2 w-full">
                  <Label className="text-sm font-medium text-[#1A1F2C]">المقاس</Label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {product.sizes.map((size) => (
                      <Button
                        key={size.id}
                        variant={selectedSize === size.id ? "default" : "outline"}
                        className={`h-8 px-2 text-sm ${
                          selectedSize === size.id
                            ? "bg-[#9b87f5] hover:bg-[#7E69AB]"
                            : "hover:bg-[#F1F0FB] border border-[#D6BCFA]"
                        }`}
                        onClick={() => setSelectedSize(size.id)}
                      >
                        {size.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="space-y-2 w-full">
                  <Label className="text-sm font-medium text-[#1A1F2C]">اللون</Label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <Button
                        key={color.id}
                        variant="outline"
                        className={`w-8 h-8 p-0 rounded-full transition-all duration-200 ${
                          selectedColor === color.id
                            ? "ring-2 ring-[#9b87f5] scale-110"
                            : "hover:ring-2 hover:ring-[#9b87f5]/50 hover:scale-105"
                        }`}
                        style={{
                          backgroundColor: color.value,
                          border: color.value === '#FFFFFF' ? '1px solid #E5E7EB' : 'none'
                        }}
                        onClick={() => setSelectedColor(color.id)}
                        title={color.label}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Customer Name */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-[#1A1F2C]" htmlFor="customerName">
                  اسمك
                </Label>
                <Input
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="الرجاء إدخال اسمك"
                  className="h-12 rounded-xl border-[#D6BCFA] focus:border-[#9b87f5] focus:ring-2 focus:ring-[#9b87f5]/20 transition-all bg-white/70"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-[#1A1F2C]">
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
                    className="flex flex-col items-center justify-center w-full h-32 rounded-xl border-2 border-dashed
                      border-[#D6BCFA] hover:border-[#9b87f5] cursor-pointer transition-all bg-white/50
                      hover:bg-white/70 group"
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="h-full w-full object-contain rounded-xl"
                      />
                    ) : (
                      <div className="flex flex-col items-center space-y-2">
                        <Upload className="h-8 w-8 text-[#7E69AB] group-hover:text-[#9b87f5] transition-colors" />
                        <span className="text-sm text-gray-500 group-hover:text-[#7E69AB] transition-colors">اضغط هنا لرفع صورة</span>
                      </div>
                    )}
                  </Label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg"
                className="flex-1 rounded-xl bg-[#9b87f5] hover:bg-[#7E69AB] transition-all shadow-lg shadow-[#9b87f5]/20 h-14 text-lg"
                onClick={() => navigate("/cart")}
              >
                إضافة للسلة
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-xl hover:bg-[#F1F0FB] border-2 border-[#D6BCFA] hover:border-[#9b87f5] transition-all h-14"
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
