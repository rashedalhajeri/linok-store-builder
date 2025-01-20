import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Settings,
  FileText,
  Palette,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "لوحة التحكم",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    title: "المنتجات",
    icon: Package,
    path: "/admin/products",
  },
  {
    title: "الطلبات",
    icon: ShoppingBag,
    path: "/admin/orders",
  },
  {
    title: "العملاء",
    icon: Users,
    path: "/admin/customers",
  },
  {
    title: "المحتوى",
    icon: FileText,
    path: "/admin/content",
  },
  {
    title: "التصميم",
    icon: Palette,
    path: "/admin/design",
  },
  {
    title: "الترجمة",
    icon: Globe,
    path: "/admin/translations",
  },
  {
    title: "الإعدادات",
    icon: Settings,
    path: "/admin/settings",
  },
];

export function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-900">لوحة التحكم</h1>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.path)}
                    className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}