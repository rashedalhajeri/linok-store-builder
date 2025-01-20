import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stores = [
  {
    id: 1,
    name: "متجر الأناقة",
    owner: "أحمد محمد",
    plan: "متقدمة",
    status: "نشط",
    revenue: "١٢,٣٤٥ ريال",
  },
  {
    id: 2,
    name: "متجر التقنية",
    owner: "سارة أحمد",
    plan: "أساسية",
    status: "نشط",
    revenue: "٨,٧٦٥ ريال",
  },
  {
    id: 3,
    name: "متجر الأزياء",
    owner: "محمد علي",
    plan: "متقدمة",
    status: "معلق",
    revenue: "٥,٤٣٢ ريال",
  },
];

export function StoresList() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-foreground">أحدث المتاجر</h3>
        <button className="text-primary text-sm hover:underline">عرض الكل</button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>اسم المتجر</TableHead>
            <TableHead>المالك</TableHead>
            <TableHead>الباقة</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead>الإيرادات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stores.map((store) => (
            <TableRow key={store.id}>
              <TableCell className="font-medium">{store.name}</TableCell>
              <TableCell>{store.owner}</TableCell>
              <TableCell>{store.plan}</TableCell>
              <TableCell>
                <Badge variant={store.status === "نشط" ? "default" : "secondary"}>
                  {store.status}
                </Badge>
              </TableCell>
              <TableCell>{store.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}