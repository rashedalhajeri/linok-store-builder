import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

interface SocialLink {
  id: number;
  icon: string;
  label: string;
  href: string;
  bgColor: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-12 mb-8">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Share2 className="w-4 h-4" />
        <span className="text-sm font-medium">تواصل معنا</span>
      </div>
      <div className="flex gap-3 md:gap-4">
        {links.map((link) => (
          <motion.button
            key={link.id}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 
              hover:shadow-xl ${link.bgColor} relative group`}
            onClick={() => window.open(link.href, '_blank')}
            aria-label={link.label}
          >
            <div className="relative w-6 h-6 md:w-7 md:h-7">
              <img 
                src={link.icon} 
                alt={link.label}
                className="w-full h-full object-contain"
              />
              <motion.div 
                className="absolute inset-0 bg-black/5 rounded-full opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ scale: [0.9, 1], opacity: [0, 1] }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};