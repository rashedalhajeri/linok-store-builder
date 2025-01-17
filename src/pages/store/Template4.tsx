import { useState } from "react";
import { useParams } from "react-router-dom";
import { QrCode, ChefHat, Timer } from "lucide-react";
import { motion } from "framer-motion";
import { MenuItem } from "@/components/store/template4/MenuItem";
import { SearchBar } from "@/components/store/template4/SearchBar";
import { CategoryTabs } from "@/components/store/template4/CategoryTabs";
import { useToast } from "@/hooks/use-toast";

const StoreTemplate4 = () => {
  const { storeId } = useParams();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [tableNumber, setTableNumber] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // هذه البيانات ستأتي من API في التطبيق الحقيقي
  const categories = [
    { id: "all", label: "جميع الأصناف" },
    { id: "main", label: "الأطباق الرئيسية" },
    { id: "appetizers", label: "المقبلات" },
    { id: "drinks", label: "المشروبات" },
    { id: "desserts", label: "الحلويات" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "برجر لحم واجيو",
      description: "برجر لحم واجيو مشوي مع جبنة شيدر وصلصة خاصة",
      price: "8.500",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      category: "main",
      isSpicy: true,
      isPopular: true,
    },
    // ... المزيد من العناصر
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleOrder = (itemId: number) => {
    if (!tableNumber) {
      toast({
        title: "خطأ",
        description: "الرجاء مسح الباركود الخاص بالطاولة أولاً",
        variant: "destructive",
      });
      return;
    }

    // هنا سيتم إرسال الطلب للمطبخ
    toast({
      title: "تم إرسال الطلب",
      description: `تم إرسال طلبك للمطبخ. رقم الطاولة: ${tableNumber}`,
    });
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FEF7CD]/10">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {!tableNumber ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <QrCode className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-2xl font-bold mb-4">مرحباً بك في مطعمنا</h1>
            <p className="text-gray-600 mb-6">
              الرجاء مسح الباركود الموجود على طاولتك لبدء الطلب
            </p>
            {/* في التطبيق الحقيقي، سيتم استبدال هذا بقارئ باركود حقيقي */}
            <button
              onClick={() => setTableNumber("15")}
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              محاكاة مسح الباركود
            </button>
          </motion.div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold">قائمة الطعام</h1>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Timer className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">طاولة رقم {tableNumber}</span>
              </div>
            </div>

            <SearchBar onSearch={handleSearch} />
            
            <div className="mt-6">
              <CategoryTabs
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
              />
            </div>

            <div className="mt-6 space-y-4">
              {filteredItems.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onOrder={() => handleOrder(item.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StoreTemplate4;