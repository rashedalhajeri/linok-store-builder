import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Language, translations } from "@/utils/translations";

interface FeaturesProps {
  language: Language;
}

export const Features = ({ language }: FeaturesProps) => {
  const t = translations[language];

  const features = [
    {
      title: t.professionalTemplates,
      description: t.templatesDescription,
      icon: "🎨"
    },
    {
      title: t.advancedCustomization,
      description: t.customizationDescription,
      icon: "⚡"
    },
    {
      title: t.continuousSupport,
      description: t.supportDescription,
      icon: "🛟"
    },
    {
      title: t.regularUpdates,
      description: t.updatesDescription,
      icon: "🚀"
    },
    {
      title: t.outstandingUX,
      description: t.uxDescription,
      icon: "🛍️"
    },
    {
      title: t.advancedAnalytics,
      description: t.analyticsDescription,
      icon: "📊"
    }
  ];

  return (
    <section className="py-16 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            {t.platformFeatures}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.featuresDescription}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gradient-to-b from-white to-primary/5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  {t.instantActivation}
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  {t.freeUpdates}
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};