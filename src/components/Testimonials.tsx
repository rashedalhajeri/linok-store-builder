import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      role: "صاحب متجر",
      content: "منصة رائعة ساعدتني في إنشاء متجري الإلكتروني بكل سهولة",
      rating: 5
    },
    {
      name: "سارة أحمد",
      role: "مديرة تسويق",
      content: "أفضل منصة لإدارة المتاجر الإلكترونية، الدعم الفني ممتاز",
      rating: 5
    },
    {
      name: "محمد علي",
      role: "رائد أعمال",
      content: "سهولة الاستخدام والتصميم الاحترافي جعل متجري يبدو مميزاً",
      rating: 5
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-black" id="testimonials">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">آراء العملاء</h2>
          <p className="text-gray-400">ماذا يقول عملاؤنا عن خدماتنا</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="mt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};