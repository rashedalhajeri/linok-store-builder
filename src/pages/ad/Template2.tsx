import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Share2, Heart, Globe, Calendar, Gauge, Car } from "lucide-react";

const AdTemplate2 = () => {
  const navigate = useNavigate();

  const ad = {
    title: "كابرس 90",
    price: "2,100 د.ك",
    date: "منذ ساعة",
    phone: "+965 9999 9999",
    description: "سيارة بحالة ممتازة، صيانة دورية، جميع القطع أصلية",
    specs: {
      year: "1990",
      mileage: "250 كم",
      color: "أبيض",
      location: "الكويت",
      seats: "8"
    },
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto bg-white min-h-screen">
        {/* Header Actions */}
        <div className="flex justify-between items-center p-4">
          <div className="flex gap-4">
            <Share2 className="w-6 h-6 text-gray-700 cursor-pointer hover:text-primary transition-colors" />
            <Heart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-500 transition-colors" />
          </div>
          <button onClick={() => navigate(-1)} className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Main Image */}
        <div className="relative w-full aspect-square">
          <img 
            src={ad.images[0]}
            alt={ad.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title and Price */}
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">{ad.title}</h1>
            <p className="text-sm text-gray-500">{ad.date}</p>
          </div>
          <p className="text-2xl font-bold text-emerald-500">{ad.price}</p>
        </div>

        {/* Specifications */}
        <div className="p-4 border-t border-gray-100">
          <h2 className="text-xl font-bold mb-4">مواصفات الاعلان</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Calendar className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">سنة الصنع</p>
                <span className="text-gray-900">{ad.specs.year}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Car className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">اللون</p>
                <span className="text-gray-900">{ad.specs.color}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Gauge className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">المسافة المقطوعة</p>
                <span className="text-gray-900">{ad.specs.mileage}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Globe className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">المقاعد</p>
                <span className="text-gray-900">{ad.specs.seats}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 border-t border-gray-100">
          <h2 className="text-xl font-bold mb-2">الوصف</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{ad.description}</p>
        </div>

        {/* Contact Buttons */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <div className="flex gap-2 max-w-lg mx-auto">
            <Button 
              variant="outline"
              className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => window.location.href = `tel:${ad.phone}`}
            >
              اتصل الآن
            </Button>
            <Button 
              variant="outline"
              className="flex-1 bg-green-500 text-white hover:bg-green-600"
            >
              واتساب
            </Button>
            <Button 
              variant="outline"
              className="aspect-square bg-blue-900 text-white hover:bg-blue-950 p-2"
            >
              <MessageSquare className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdTemplate2;