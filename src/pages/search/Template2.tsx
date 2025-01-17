import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, ArrowUpDown } from "lucide-react";

const SearchTemplate2 = () => {
  const navigate = useNavigate();

  const results = [
    {
      id: 1,
      title: "إعلان 1",
      price: "500 د.ك",
      location: "العاصمة",
      date: "اليوم",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 2,
      title: "إعلان 2",
      price: "750 د.ك",
      location: "حولي",
      date: "أمس",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
    },
    {
      id: 3,
      title: "إعلان 3",
      price: "1,200 د.ك",
      location: "السالمية",
      date: "منذ 3 أيام",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Search Bar */}
          <Card className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder="ابحث عن إعلان..." 
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 md:flex-none">
                  <MapPin className="w-4 h-4 mr-2" />
                  المنطقة
                </Button>
                <Button variant="outline" className="flex-1 md:flex-none">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  الترتيب
                </Button>
                <Button className="flex-1 md:flex-none">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            {results.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/ad/template2/${result.id}`)}
                >
                  <div className="flex">
                    <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                      <img 
                        src={result.image} 
                        alt={result.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg text-gray-900 mb-2">
                            {result.title}
                          </h3>
                          <p className="text-gray-500 text-sm mb-2">
                            <MapPin className="w-4 h-4 inline-block mr-1" />
                            {result.location}
                          </p>
                        </div>
                        <p className="text-xl font-bold text-primary">
                          {result.price}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between items-end">
                        <p className="text-sm text-gray-500">
                          {result.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTemplate2;