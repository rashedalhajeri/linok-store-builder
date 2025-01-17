import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CalendarDays, Clock, MapPin, Phone, User } from "lucide-react";

const StoreTemplate3 = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const services = [
    {
      id: 1,
      title: "استشارة قانونية",
      duration: "60 دقيقة",
      price: "500 ريال",
      description: "استشارة قانونية شاملة مع محامي متخصص",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "استشارة مالية",
      duration: "45 دقيقة",
      price: "400 ريال",
      description: "تخطيط مالي واستثماري مع مستشار معتمد",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "استشارة إدارية",
      duration: "30 دقيقة",
      price: "300 ريال",
      description: "استشارة في إدارة الأعمال وتطوير المشاريع",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
    }
  ];

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      notes: ""
    }
  });

  const onSubmit = (data: any) => {
    if (!selectedDate) {
      toast({
        title: "خطأ في الحجز",
        description: "الرجاء اختيار تاريخ للحجز",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "تم الحجز بنجاح",
      description: "سيتم التواصل معك قريباً لتأكيد الحجز"
    });
    
    console.log({
      ...data,
      date: selectedDate
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">مكتب المحاماة والاستشارات القانونية</h1>
          <p className="text-xl md:text-2xl opacity-90">خدمات قانونية واستشارية احترافية</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
                <p className="text-xl font-semibold text-purple-600 mt-4">{service.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => {
                  const element = document.getElementById('booking-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  احجز الآن
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div id="booking-section" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">احجز موعدك</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-purple-50 p-8 rounded-2xl">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="bg-white rounded-lg p-4"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>الرياض - شارع الملك فهد</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>+966 50 000 0000</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>من 9 صباحاً إلى 9 مساءً</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>معلومات الحجز</CardTitle>
                <CardDescription>الرجاء تعبئة البيانات التالية</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>الاسم</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <User className="w-4 h-4 ml-2 text-gray-500" />
                              <Input placeholder="الاسم الكامل" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>رقم الجوال</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 ml-2 text-gray-500" />
                              <Input type="tel" placeholder="05xxxxxxxx" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>البريد الإلكتروني</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="example@domain.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ملاحظات إضافية</FormLabel>
                          <FormControl>
                            <Textarea placeholder="اكتب ملاحظاتك هنا..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">تأكيد الحجز</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate3;