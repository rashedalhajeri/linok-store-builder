import { motion } from "framer-motion";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative aspect-square rounded-xl overflow-hidden border-0 shadow-md bg-gradient-to-b from-gray-50 to-white"
      >
        <img 
          src={selectedImage} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
        />
      </motion.div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
            className="flex flex-col items-center"
          >
            <div className={`relative aspect-square w-full rounded-lg overflow-hidden shadow-sm transition-all duration-300
              ${selectedImage === image ? 'ring-2 ring-[#ee9ca7] scale-105' : 'hover:ring-2 hover:ring-gray-400'}`}
            >
              <img 
                src={image} 
                alt={`${name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};