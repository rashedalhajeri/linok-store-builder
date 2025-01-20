import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Language, translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";

interface FeaturesProps {
  language: Language;
}

export const Features = ({ language }: FeaturesProps) => {
  const t = translations[language];

  const features = [
    {
      title: t.professionalTemplates,
      description: t.templatesDescription,
      icon: "💼",
      benefits: [t.instantActivation, t.freeUpdates, t.customDomain]
    },
    {
      title: t.advancedCustomization,
      description: t.customizationDescription,
      icon: "⚡",
      benefits: [t.instantActivation, t.freeUpdates, t.analytics]
    },
    {
      title: t.continuousSupport,
      description: t.supportDescription,
      icon: "🛟",
      benefits: [t.instantActivation, t.freeUpdates, t.support24_7]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            {t.platformFeatures}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {t.featuresDescription}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full p-8 md:p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Section */}
                <div className="mb-8 relative">
                  <span className="text-5xl block mb-2">{feature.icon}</span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-full blur-2xl transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between border border-gray-200 hover:border-primary hover:bg-primary/5 text-gray-700 hover:text-primary transition-all group/btn"
                >
                  <span>{t.learnMore}</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};