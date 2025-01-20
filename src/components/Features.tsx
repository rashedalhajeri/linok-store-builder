import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      title: "قوالب احترافية",
      description: "مجموعة متنوعة من القوالب الجاهزة للاستخدام",
      icon: "🎨"
    },
    {
      title: "تخصيص سهل",
      description: "واجهة سهلة الاستخدام لتخصيص متجرك",
      icon: "⚡"
    },
    {
      title: "دعم فني",
      description: "دعم فني على مدار الساعة لمساعدتك",
      icon: "🛟"
    },
    {
      title: "تحديثات مجانية",
      description: "تحديثات مستمرة ومجانية لمتجرك",
      icon: "🚀"
    },
    {
      title: "تجربة تسوق سلسة",
      description: "واجهة سهلة وبسيطة لعملائك",
      icon: "🛍️"
    },
    {
      title: "إحصائيات متقدمة",
      description: "تتبع أداء متجرك بسهولة",
      icon: "📊"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">مميزات المنصة</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            كل ما تحتاجه لإدارة متجرك الإلكتروني في مكان واحد
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};