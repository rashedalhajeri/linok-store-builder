import {
  Users,
  Store,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const statsCards = [
  {
    title: "إجمالي المتاجر",
    value: "١,٢٣٤",
    change: "+١٢٪",
    icon: Store,
    trend: "up",
  },
  {
    title: "الإيرادات الشهرية",
    value: "٥٤,٣٢١ ريال",
    change: "+٢٣٪",
    icon: CreditCard,
    trend: "up",
  },
  {
    title: "المتاجر النشطة",
    value: "٨٩٪",
    change: "+٥٪",
    icon: TrendingUp,
    trend: "up",
  },
  {
    title: "المستخدمين الجدد",
    value: "١٢٣",
    change: "+١٥٪",
    icon: Users,
    trend: "up",
  },
];

export function StatsCards() {
  return (
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
  );
}