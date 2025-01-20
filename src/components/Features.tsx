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
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">مميزات المنصة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 space-x-reverse p-4 rounded-lg bg-white shadow-sm"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};