import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { motion } from "framer-motion";
import { Building2, Users, ShoppingBag, Globe2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  const stats = [
    { icon: <Building2 className="w-6 h-6 text-primary" />, value: "10K+", label: "متجر نشط" },
    { icon: <Users className="w-6 h-6 text-primary" />, value: "100K+", label: "عميل سعيد" },
    { icon: <ShoppingBag className="w-6 h-6 text-primary" />, value: "1M+", label: "طلب شهري" },
    { icon: <Globe2 className="w-6 h-6 text-primary" />, value: "24/7", label: "دعم فني" },
  ];

  const handleDemoRequest = () => {
    toast({
      title: "تم استلام طلبك",
      description: "سيتواصل معك فريقنا قريباً لعرض المنصة",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-2 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">كيف تعمل المنصة؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              خطوات بسيطة تفصلك عن متجرك الإلكتروني
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "اختر قالبك",
                description: "مجموعة متنوعة من القوالب الاحترافية الجاهزة",
                icon: "🎨"
              },
              {
                title: "خصص متجرك",
                description: "أضف منتجاتك وخصص تصميم متجرك بسهولة",
                icon: "⚡"
              },
              {
                title: "ابدأ البيع",
                description: "استقبل الطلبات وابدأ في تحقيق المبيعات",
                icon: "🚀"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-gradient-to-b from-white to-primary/5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <span className="text-4xl mb-4">{step.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-store">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                جاهز لبدء رحلة نجاحك في التجارة الإلكترونية؟
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                انضم إلى آلاف التجار الناجحين على منصتنا
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg group"
                  onClick={handleDemoRequest}
                >
                  اطلب عرضاً تجريبياً
                  <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 text-lg"
                >
                  تواصل معنا
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;