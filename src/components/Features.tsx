import { Check } from "lucide-react";
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
      icon: "🎨",
      benefits: [t.instantActivation, t.freeUpdates]
    },
    {
      title: t.advancedCustomization,
      description: t.customizationDescription,
      icon: "⚡",
      benefits: [t.instantActivation, t.freeUpdates]
    },
    {
      title: t.continuousSupport,
      description: t.supportDescription,
      icon: "🛟",
      benefits: [t.instantActivation, t.freeUpdates]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            {t.platformFeatures}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t.featuresDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="mb-6 relative">
                  <span className="text-4xl block mb-2">{feature.icon}</span>
                  <motion.div
                    initial={false}
                    animate={{ scale: [0.9, 1], opacity: [0, 1] }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-full blur-2xl transition-opacity"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="w-full justify-center border border-gray-200 hover:border-primary hover:bg-primary/5 text-gray-600 hover:text-primary transition-colors"
                >
                  {t.features}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};