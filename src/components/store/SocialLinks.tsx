import { motion } from "framer-motion";

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
    <div className="flex gap-2 md:gap-3 mt-4">
      {links.map((link) => (
        <motion.button
          key={link.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-full shadow-sm transition-all duration-300 ${link.bgColor}`}
          onClick={() => window.open(link.href, '_blank')}
        >
          <img 
            src={link.icon} 
            alt={link.label}
            className="w-5 h-5 md:w-6 md:h-6 object-contain"
          />
        </motion.button>
      ))}
    </div>
  );
};