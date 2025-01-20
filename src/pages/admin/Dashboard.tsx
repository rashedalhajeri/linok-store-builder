import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import { StatsCards } from "@/components/admin/dashboard/StatsCards";
import { RevenueChart } from "@/components/admin/dashboard/RevenueChart";
import { StoresList } from "@/components/admin/dashboard/StoresList";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      toast({
        title: "غير مصرح",
        description: "يجب تسجيل الدخول كمشرف أولاً",
        variant: "destructive"
      });
      navigate("/");
    }
  }, [navigate, toast]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* ترحيب */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-foreground">مرحباً بك في لوحة التحكم الرئيسية</h1>
                <p className="text-muted-foreground">تابع إحصائيات وأداء المنصة من هنا</p>
              </div>
            </div>

            {/* البطاقات الإحصائية */}
            <StatsCards />

            {/* الرسم البياني للإيرادات */}
            <RevenueChart />

            {/* قائمة المتاجر */}
            <StoresList />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}