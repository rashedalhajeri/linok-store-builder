import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-black" id="contact">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">تواصل معنا</h2>
          <p className="text-gray-400">نحن هنا لمساعدتك في كل خطوة</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">اتصل بنا</h3>
                <p className="text-gray-400">+966 50 000 0000</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">البريد الإلكتروني</h3>
                <p className="text-gray-400">support@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">الدعم المباشر</h3>
                <p className="text-gray-400">متوفر على مدار الساعة</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <div>
              <input
                type="text"
                placeholder="الاسم"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <textarea
                placeholder="رسالتك"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
            </div>
            <Button className="w-full bg-white text-black hover:bg-gray-200 transition-colors">
              إرسال الرسالة
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};