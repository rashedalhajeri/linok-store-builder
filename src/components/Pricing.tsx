import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "أساسي",
      price: "99",
      features: [
        "متجر احترافي",
        "قوالب متنوعة",
        "دعم فني أساسي",
        "تحديثات مجانية"
      ]
    },
    {
      name: "احترافي",
      price: "199",
      features: [
        "جميع مميزات الباقة الأساسية",
        "تخصيص كامل",
        "دعم فني متميز",
        "تقارير متقدمة",
        "تكامل مع أنظمة الدفع"
      ]
    },
    {
      name: "متقدم",
      price: "299",
      features: [
        "جميع مميزات الباقة الاحترافية",
        "تحليلات متقدمة",
        "دعم فني على مدار الساعة",
        "تدريب شخصي",
        "تكامل مع API"
      ]
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">اختر باقتك</h2>
          <p className="text-gray-400">باقات مرنة تناسب احتياجات متجرك</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 mr-2">ريال / شهرياً</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
                >
                  ابدأ الآن
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};