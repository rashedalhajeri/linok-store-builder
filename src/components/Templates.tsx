import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Templates = () => {
  const templates = [
    {
      id: 1,
      name: "القالب الكلاسيكي",
      description: "تصميم أنيق وبسيط يناسب جميع أنواع المتاجر",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "القالب العصري",
      description: "تصميم عصري مع تأثيرات حركية جذابة",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "القالب المتقدم",
      description: "تصميم متقدم مع ميزات إضافية للمتاجر الكبيرة",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">قوالب احترافية جاهزة</h2>
          <p className="text-zinc-500">اختر القالب المناسب لمتجرك من بين مجموعة من القوالب الاحترافية</p>
        </div>
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
                    <Button className="w-full">معاينة القالب</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};