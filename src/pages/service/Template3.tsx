import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const ServiceTemplate3 = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("");

  const service = {
    id: 1,
    name: "خدمة التجميل",
    description: "خدمة متكاملة للعناية بالبشرة والشعر",
    price: "200 ريال",
    duration: "60 دقيقة",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035"
  };

  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <div className="relative h-64 md:h-96">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">تفاصيل الخدمة</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>المدة</span>
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>السعر</span>
                      <span className="font-bold text-primary">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">اختر الوقت المناسب</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className="w-full"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-8"
                size="lg"
                onClick={() => navigate("/booking/template3")}
                disabled={!selectedTime}
              >
                <Calendar className="w-5 h-5 ml-2" />
                احجز الآن
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceTemplate3;