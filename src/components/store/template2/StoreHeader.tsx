import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoreHeaderProps {
  storeName: string;
  location: string;
  description: string;
  logo: string;
  socialLinks: {
    whatsapp: string;
    phone: string;
    tiktok: string;
  };
}

export const StoreHeader = ({ 
  storeName, 
  location, 
  logo,
  socialLinks 
}: StoreHeaderProps) => {
  const handleSocialClick = (type: 'whatsapp' | 'phone' | 'tiktok') => {
    switch(type) {
      case 'whatsapp':
        window.open(`https://wa.me/${socialLinks.whatsapp}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${socialLinks.phone}`, '_blank');
        break;
      case 'tiktok':
        window.open(`https://tiktok.com/${socialLinks.tiktok}`, '_blank');
        break;
    }
  };

  const handleLocationClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FA] to-[#E9ECEF]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-center gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#4A90E2]/10 shadow-lg">
                  <img 
                    src={logo}
                    alt={storeName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              
              <div className="flex flex-col gap-3">
                <motion.h1 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl md:text-3xl font-bold text-[#2C3E50]"
                >
                  {storeName}
                </motion.h1>
                <div 
                  className="flex items-center gap-2 text-sm text-[#6C757D] cursor-pointer hover:text-[#4A90E2] transition-colors group"
                  onClick={handleLocationClick}
                >
                  <MapPin className="w-4 h-4 text-[#4A90E2]" />
                  <span className="group-hover:underline">{location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-[#4A90E2]/5 border-[#4A90E2]/20 hover:bg-[#4A90E2]/10 text-[#4A90E2]"
                onClick={() => handleSocialClick('whatsapp')}
              >
                <MessageSquare className="w-5 h-5 ml-2" />
                واتساب
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-[#4A90E2]/5 border-[#4A90E2]/20 hover:bg-[#4A90E2]/10 text-[#4A90E2]"
                onClick={() => handleSocialClick('phone')}
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصال
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};