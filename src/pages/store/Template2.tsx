import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const StoreTemplate2 = () => {
  const navigate = useNavigate();
  const [myAds] = useState([
    {
      id: 1,
      title: "مرسيدس S-Class 2023",
      price: "45,000 د.ك",
      location: "العاصمة",
      date: "اليوم",
      status: "نشط",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 2,
      title: "بي ام دبليو X7 2024",
      price: "38,000 د.ك",
      location: "حولي",
      date: "أمس",
      status: "معلق",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">إدارة إعلاناتي</h1>
          <Button 
            onClick={() => navigate("/ad/template2/new")}
            className="bg-primary hover:bg-primary-dark flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            إضافة إعلان جديد
          </Button>
        </div>
      </div>

      {/* Ads Management Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-4">
          {myAds.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center p-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 mr-4">
                  <h3 className="font-medium text-lg mb-1">{ad.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{ad.price}</span>
                    <span>{ad.location}</span>
                    <span>{ad.date}</span>
                  </div>
                  <div className="mt-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      ad.status === 'نشط' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {ad.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/ad/template2/${ad.id}/edit`)}
                    className="flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    تعديل
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                    حذف
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreTemplate2;