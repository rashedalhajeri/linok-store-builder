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
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2.5 rounded-full shadow-lg transition-all duration-300 
            hover:shadow-xl ${link.bgColor} relative group`}
          onClick={() => window.open(link.href, '_blank')}
        >
          <div className="relative w-6 h-6 md:w-7 md:h-7">
            <img 
              src={link.icon} 
              alt={link.label}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {link.label}
          </div>
        </motion.button>
      ))}
    </div>
  );
};