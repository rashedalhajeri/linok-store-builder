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
      title: language === 'ar' ? "قوالب احترافية" : "Professional Templates",
      description: language === 'ar' 
        ? "مجموعة متنوعة من القوالب الجاهزة للاستخدام الفوري"
        : "A variety of ready-to-use templates for immediate use",
      icon: "🎨"
    },
    {
      title: language === 'ar' ? "تخصيص متقدم" : "Advanced Customization",
      description: language === 'ar'
        ? "أدوات تخصيص متقدمة لتعديل كل تفاصيل متجرك"
        : "Advanced customization tools to modify all your store details",
      icon: "⚡"
    },
    {
      title: language === 'ar' ? "دعم متواصل" : "Continuous Support",
      description: language === 'ar'
        ? "فريق دعم فني متخصص على مدار الساعة"
        : "Specialized technical support team available 24/7",
      icon: "🛟"
    },
    {
      title: language === 'ar' ? "تحديثات مستمرة" : "Regular Updates",
      description: language === 'ar'
        ? "تحديثات وتحسينات مستمرة لمتجرك"
        : "Continuous updates and improvements for your store",
      icon: "🚀"
    },
    {
      title: language === 'ar' ? "تجربة مستخدم مميزة" : "Outstanding UX",
      description: language === 'ar'
        ? "واجهة سهلة وبسيطة لعملائك"
        : "Easy and simple interface for your customers",
      icon: "🛍️"
    },
    {
      title: language === 'ar' ? "تحليلات متقدمة" : "Advanced Analytics",
      description: language === 'ar'
        ? "إحصائيات وتقارير تفصيلية عن أداء متجرك"
        : "Detailed statistics and reports about your store performance",
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
            {language === 'ar' ? "مميزات المنصة" : "Platform Features"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar' 
              ? "كل ما تحتاجه لإدارة متجرك الإلكتروني في مكان واحد"
              : "Everything you need to manage your online store in one place"}
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
                  {language === 'ar' ? "تفعيل فوري" : "Instant activation"}
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  {language === 'ar' ? "تحديثات مجانية" : "Free updates"}
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};