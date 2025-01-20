import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Templates } from "@/components/Templates";
import { motion } from "framer-motion";
import { Building2, Users, ShoppingBag, Globe2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Language } from "@/utils/translations";

const Index = () => {
  const { toast } = useToast();
  const [language, setLanguage] = useState<Language>('ar');
  
  const stats = [
    { icon: <Building2 className="w-6 h-6 text-primary" />, value: "10K+", label: language === 'ar' ? "متجر نشط" : "Active Stores" },
    { icon: <Users className="w-6 h-6 text-primary" />, value: "100K+", label: language === 'ar' ? "عميل سعيد" : "Happy Clients" },
    { icon: <ShoppingBag className="w-6 h-6 text-primary" />, value: "1M+", label: language === 'ar' ? "طلب شهري" : "Monthly Orders" },
    { icon: <Globe2 className="w-6 h-6 text-primary" />, value: "24/7", label: language === 'ar' ? "دعم فني" : "Support" },
  ];

  const handleDemoRequest = () => {
    toast({
      title: language === 'ar' ? "تم استلام طلبك" : "Request Received",
      description: language === 'ar' ? "سيتواصل معك فريقنا قريباً لعرض المنصة" : "Our team will contact you soon for a platform demo",
    });
  };

  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Hero />
      <Features language={language} />
      <Templates language={language} />
      
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
                {language === 'ar' 
                  ? "جاهز لبدء رحلة نجاحك في التجارة الإلكترونية؟"
                  : "Ready to start your e-commerce success journey?"}
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                {language === 'ar'
                  ? "انضم إلى آلاف التجار الناجحين على منصتنا"
                  : "Join thousands of successful merchants on our platform"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg group"
                  onClick={handleDemoRequest}
                >
                  {language === 'ar' ? "اطلب عرضاً تجريبياً" : "Request Demo"}
                  <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 text-lg"
                >
                  {language === 'ar' ? "تواصل معنا" : "Contact Us"}
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