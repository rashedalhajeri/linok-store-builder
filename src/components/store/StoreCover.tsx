import { motion } from "framer-motion";

export const StoreCover = () => {
  return (
    <div className="relative">
      <div className="h-[200px] md:h-[300px] bg-gradient-to-b from-gray-900/70 to-gray-900/50">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Store Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>
    </div>
  );
};