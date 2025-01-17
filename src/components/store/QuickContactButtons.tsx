import { MessageSquare, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface QuickContactButtonsProps {
  whatsappNumber: string;
  phoneNumber: string;
}

export const QuickContactButtons = ({ whatsappNumber, phoneNumber }: QuickContactButtonsProps) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 rounded-full w-12 h-12 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5" />
              </Button>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <p>تواصل عبر واتساب</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={handlePhoneClick}
                className="bg-blue-500 hover:bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center"
              >
                <PhoneCall className="w-5 h-5" />
              </Button>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <p>اتصل الآن</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};