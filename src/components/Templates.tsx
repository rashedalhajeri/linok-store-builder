import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Language, translations } from "@/utils/translations";

interface TemplatesProps {
  language: Language;
}

export const Templates = ({ language }: TemplatesProps) => {
  const t = translations[language];

  const templates = [
    {
      id: 1,
      name: language === 'ar' ? "القالب الكلاسيكي" : "Classic Template",
      description: language === 'ar' 
        ? "تصميم أنيق وبسيط يناسب جميع أنواع المتاجر"
        : "Elegant and simple design suitable for all types of stores",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: language === 'ar' ? "القالب العصري" : "Modern Template",
      description: language === 'ar'
        ? "تصميم عصري مع تأثيرات حركية جذابة"
        : "Modern design with attractive animations",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: language === 'ar' ? "القالب المتقدم" : "Advanced Template",
      description: language === 'ar'
        ? "تصميم متقدم مع ميزات إضافية للمتاجر الكبيرة"
        : "Advanced design with additional features for large stores",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                  <p className="text-zinc-500 mb-4">{template.description}</p>
                  <Button className="w-full">
                    {language === 'ar' ? "معاينة القالب" : "Preview Template"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};