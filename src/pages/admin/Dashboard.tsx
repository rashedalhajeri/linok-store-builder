import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Dashboard() {
  const navigate = useNavigate();
  
  // TODO: Add proper authentication check
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">لوحة التحكم</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* إحصائيات سريعة */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-sm font-medium">إجمالي المبيعات</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">٠ ريال</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-sm font-medium">عدد الطلبات</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">٠</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-sm font-medium">عدد المنتجات</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">٠</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}