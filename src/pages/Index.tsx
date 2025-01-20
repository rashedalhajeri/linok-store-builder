import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { motion } from "framer-motion";
import { Building2, Users, ShoppingBag, Globe } from "lucide-react";

const Index = () => {
  const stats = [
    { icon: <Building2 className="w-6 h-6" />, value: "1000+", label: "متجر نشط" },
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "عميل سعيد" },
    { icon: <ShoppingBag className="w-6 h-6" />, value: "100K+", label: "طلب شهري" },
    { icon: <Globe className="w-6 h-6" />, value: "24/7", label: "دعم فني" },
  ];

  const plans = [
    {
      name: "مجاني",
      price: "0",
      features: ["متجر أساسي", "دعم محدود", "تخصيص بسيط"],
      popular: false
    },
    {
      name: "احترافي",
      price: "49",
      features: ["متجر متقدم", "دعم على مدار الساعة", "تخصيص كامل", "تحليلات متقدمة"],
      popular: true
    },
    {
      name: "أعمال",
      price: "99",
      features: ["متجر متعدد", "دعم VIP", "تخصيص غير محدود", "تقارير مفصلة", "API كامل"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-2 p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">باقات الاشتراك</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl shadow-lg ${
                  plan.popular ? 'border-2 border-primary relative' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    الأكثر شعبية
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/شهرياً</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  اختر الباقة
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">هل لديك أسئلة؟</h2>
            <p className="text-muted-foreground mb-8">
              فريقنا جاهز للمساعدة في أي وقت. تواصل معنا الآن!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              تواصل معنا
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;