import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface StoreHeaderProps {
  storeName: string;
  location: string;
  description: string;
  logo: string;
}

export const StoreHeader = ({ storeName, location, description, logo }: StoreHeaderProps) => {
  return (
    <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-green-200 shadow-lg">
                  <img 
                    src={logo}
                    alt={storeName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              
              <div className="flex flex-col">
                <motion.h1 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                >
                  {storeName}
                </motion.h1>
                <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-2">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl bg-green-50/50 p-4 rounded-xl border border-green-100"
          >
            <p className="text-gray-600 leading-relaxed text-sm">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};