import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card } from "@/components/ui/card";

const revenueData = [
  { month: "يناير", إيرادات: 40000 },
  { month: "فبراير", إيرادات: 35000 },
  { month: "مارس", إيرادات: 50000 },
  { month: "أبريل", إيرادات: 45000 },
  { month: "مايو", إيرادات: 60000 },
  { month: "يونيو", إيرادات: 55000 },
];

export function RevenueChart() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">إيرادات المنصة</h3>
        <select className="bg-background border border-input rounded-md px-3 py-1 text-sm">
          <option>آخر ٦ أشهر</option>
          <option>آخر سنة</option>
        </select>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="إيرادات"
              stroke="#00E6CA"
              strokeWidth={2}
              dot={{ fill: "#00E6CA" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}