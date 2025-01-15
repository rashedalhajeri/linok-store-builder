import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  
  const cartItems = [
    {
      id: 1,
      name: "منتج 1",
      price: "100 ريال",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 2,
      name: "منتج 2",
      price: "200 ريال",
      quantity: 2,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">سلة المشتريات</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center space-x-4 space-x-reverse">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                  <div className="flex items-center space-x-2 space-x-reverse mt-2">
                    <Button variant="outline" size="sm">-</Button>
                    <span>{item.quantity}</span>
                    <Button variant="outline" size="sm">+</Button>
                  </div>
                </div>
                <Button variant="destructive" size="sm">حذف</Button>
              </div>
            </Card>
          ))}
        </div>
        <Card className="p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">ملخص الطلب</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>المجموع</span>
              <span>500 ريال</span>
            </div>
            <div className="flex justify-between">
              <span>الشحن</span>
              <span>مجاناً</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>الإجمالي</span>
                <span>500 ريال</span>
              </div>
            </div>
          </div>
          <Button className="w-full">إتمام الشراء</Button>
        </Card>
      </div>
    </div>
  );
};

export default Cart;