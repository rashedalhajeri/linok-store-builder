import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Size {
  id: string;
  label: string;
}

interface Color {
  id: string;
  value: string;
  label: string;
}

interface ProductDetailsProps {
  name: string;
  basePrice: number;
  description: string;
  sizes: Size[];
  colors: Color[];
  onAddToCart: () => void;
  onBack: () => void;
}

export const ProductDetails = ({
  name,
  basePrice,
  description,
  sizes,
  colors,
  onAddToCart,
  onBack
}: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedImage(file);
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  const calculatePrice = () => {
    let finalPrice = basePrice;
    if (selectedSize === 'medium') finalPrice += 2;
    if (selectedSize === 'large') finalPrice += 4;
    return finalPrice.toFixed(3);
  };

  const words = description.split(' ');
  const truncatedDescription = words.slice(0, 10).join(' ');
  const hasMoreDescription = words.length > 10;

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
          {name}
        </h1>
        <p className="text-xl font-medium text-[#ee9ca7]">
          {calculatePrice()} د.ك
        </p>
        <div className="prose text-gray-600 leading-relaxed text-sm">
          {showFullDescription ? description : truncatedDescription}
          {hasMoreDescription && !showFullDescription && (
            <button
              onClick={() => setShowFullDescription(true)}
              className="text-[#ee9ca7] hover:text-[#ffdde1] mr-2 text-sm font-medium transition-colors"
            >
              المزيد
            </button>
          )}
        </div>
      </motion.div>
      
      <div className="space-y-6 bg-gradient-to-b from-gray-50 to-white p-6 rounded-xl border border-gray-100">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          {/* Sizes */}
          <div className="space-y-2 w-full">
            <Label className="text-sm font-medium text-gray-900">المقاس</Label>
            <div className="grid grid-cols-5 gap-1.5">
              {sizes.map((size) => (
                <Button
                  key={size.id}
                  variant={selectedSize === size.id ? "default" : "outline"}
                  className={`h-8 px-2 text-sm ${
                    selectedSize === size.id
                      ? "bg-[#ee9ca7] text-white hover:bg-[#ffdde1]"
                      : "hover:bg-gray-50 border border-gray-200 text-gray-900"
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
            <Label className="text-sm font-medium text-gray-900">اللون</Label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Button
                  key={color.id}
                  variant="outline"
                  className={`w-8 h-8 p-0 rounded-full transition-all duration-200 ${
                    selectedColor === color.id
                      ? "ring-2 ring-[#ee9ca7] scale-110"
                      : "hover:ring-2 hover:ring-gray-400 hover:scale-105"
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
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-900" htmlFor="customerName">
            اسمك
          </Label>
          <Input
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="الرجاء إدخال اسمك"
            className="h-10 rounded-lg border-gray-200 focus:border-[#ee9ca7] focus:ring-2 focus:ring-[#ee9ca7]/20 transition-all bg-white/70"
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-900">
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
              className="flex flex-col items-center justify-center w-full h-28 rounded-lg border-2 border-dashed
                border-gray-200 hover:border-[#ee9ca7] cursor-pointer transition-all bg-white/50
                hover:bg-gray-50 group"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="h-full w-full object-contain rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center space-y-2">
                  <Upload className="h-6 w-6 text-gray-600 group-hover:text-[#ee9ca7] transition-colors" />
                  <span className="text-sm text-gray-600 group-hover:text-[#ee9ca7] transition-colors">اضغط هنا لرفع صورة</span>
                </div>
              )}
            </Label>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button 
          size="lg"
          className="flex-1 rounded-lg bg-[#ee9ca7] hover:bg-[#ffdde1] transition-all shadow-lg shadow-[#ee9ca7]/5 h-12 text-base"
          onClick={onAddToCart}
        >
          إضافة للسلة
        </Button>
        <Button 
          size="lg"
          variant="outline"
          className="rounded-lg hover:bg-gray-50 border-2 border-gray-200 hover:border-[#ee9ca7] transition-all h-12"
          onClick={onBack}
        >
          رجوع
        </Button>
      </div>
    </div>
  );
};