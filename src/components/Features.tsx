import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Features = () => {
  const features = [
    "قوالب احترافية جاهزة للاستخدام",
    "تخصيص سهل وسريع",
    "دعم فني على مدار الساعة",
    "تحديثات مجانية مستمرة",
    "تجربة تسوق سلسة لعملائك",
    "إحصائيات متقدمة لمتجرك",
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          مميزات المنصة
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center space-x-4 space-x-reverse p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <Check className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-lg text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {feature}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};