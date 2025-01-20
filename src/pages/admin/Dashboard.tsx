import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import {
  Users,
  ShoppingBag,
  CreditCard,
  TrendingUp,
  Package,
  Eye
} from "lucide-react";

// بيانات تجريبية للرسم البياني
const chartData = [
  { name: "يناير", مبيعات: 4000 },
  { name: "فبراير", مبيعات: 3000 },
  { name: "مارس", مبيعات: 5000 },
  { name: "أبريل", مبيعات: 4500 },
  { name: "مايو", مبيعات: 6000 },
  { name: "يونيو", مبيعات: 5500 },
];

const statsCards = [
  {
    title: "إجمالي المبيعات",
    value: "١٢,٥٠٠ ريال",
    change: "+١٢٪",
    icon: CreditCard,
    trend: "up",
  },
  {
    title: "عدد الزيارات",
    value: "٢,١٠٠",
    change: "+١٨٪",
    icon: Eye,
    trend: "up",
  },
  {
    title: "الطلبات",
    value: "١٥٠",
    change: "+٥٪",
    icon: ShoppingBag,
    trend: "up",
  },
  {
    title: "العملاء الجدد",
    value: "٣٢",
    change: "+٢٪",
    icon: Users,
    trend: "up",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* ترحيب */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-foreground">مرحباً بك في لوحة التحكم</h1>
                <p className="text-muted-foreground">هنا يمكنك إدارة متجرك بسهولة</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  إضافة منتج
                </button>
              </div>
            </div>

            {/* البطاقات الإحصائية */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((card) => (
                <Card key={card.title} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{card.title}</p>
                      <h3 className="text-2xl font-bold mt-2 text-foreground">{card.value}</h3>
                      <p className={`text-sm mt-2 ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {card.change} من الشهر الماضي
                      </p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-full">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* الرسم البياني */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">تحليل المبيعات</h3>
                <select className="bg-background border border-input rounded-md px-3 py-1 text-sm">
                  <option>آخر ٦ أشهر</option>
                  <option>آخر سنة</option>
                </select>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="مبيعات"
                      stroke="#00E6CA"
                      strokeWidth={2}
                      dot={{ fill: "#00E6CA" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* آخر الطلبات والمنتجات */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">آخر الطلبات</h3>
                  <button className="text-primary text-sm hover:underline">عرض الكل</button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="flex items-center justify-between p-4 bg-card rounded-lg">
                      <div className="flex items-center gap-4">
                        <ShoppingBag className="w-10 h-10 text-primary p-2 bg-primary/10 rounded-full" />
                        <div>
                          <p className="font-medium text-foreground">طلب #{order}٢٣٤٥</p>
                          <p className="text-sm text-muted-foreground">قبل ٣ ساعات</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        ٢٥٠ ريال
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">أفضل المنتجات</h3>
                  <button className="text-primary text-sm hover:underline">عرض الكل</button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((product) => (
                    <div key={product} className="flex items-center justify-between p-4 bg-card rounded-lg">
                      <div className="flex items-center gap-4">
                        <Package className="w-10 h-10 text-primary p-2 bg-primary/10 rounded-full" />
                        <div>
                          <p className="font-medium text-foreground">منتج #{product}</p>
                          <p className="text-sm text-muted-foreground">١٢ مبيعة</p>
                        </div>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}