import { motion } from "framer-motion";

interface SocialLink {
  id: number;
  icon: string;
  label: string;
  href: string;
  bgColor: string;
}

interface Template1SocialLinksProps {
  links: SocialLink[];
}

export const Template1SocialLinks = ({ links }: Template1SocialLinksProps) => {
  return (
    <div className="flex gap-2 md:gap-3 mt-4">
      {links.map((link) => (
        <motion.button
          key={link.id}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2.5 rounded-full shadow-lg transition-all duration-300 
            hover:shadow-xl bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] relative group`}
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
  );
};