import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Phone } from "lucide-react";
import { ReactElement } from "react";

interface SocialLink {
  id: number;
  icon: ReactElement | string;
  label: string;
  href: string;
  bgColor: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col gap-3"
      >
        {links.map((link) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 ${link.bgColor} text-white`}
          >
            {typeof link.icon === 'string' ? (
              <img src={link.icon} alt={link.label} className="w-5 h-5" />
            ) : (
              link.icon
            )}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};