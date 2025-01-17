import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { QrCode, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ScanQR = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [scanning, setScanning] = useState(false);

  // محاكاة عملية مسح الباركود
  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      // افتراض أن رقم الطاولة هو 5
      toast({
        title: "تم مسح الباركود بنجاح",
        description: "جاري تحويلك إلى قائمة الطعام",
      });
      navigate("/restaurant/menu/5");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="text-center space-y-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
          >
            <QrCode className="w-10 h-10 text-primary" />
          </motion.div>
          <h1 className="text-2xl font-bold">مرحباً بك في مطعمنا</h1>
          <p className="text-gray-500">
            قم بمسح الباركود الموجود على طاولتك لعرض قائمة الطعام
          </p>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Table className="w-6 h-6 text-gray-400" />
          <div className="flex-1">
            <p className="text-sm font-medium">رقم الطاولة</p>
            <p className="text-xs text-gray-500">سيتم تحديده تلقائياً بعد مسح الباركود</p>
          </div>
        </div>

        <Button 
          className="w-full h-12 text-lg"
          onClick={handleScan}
          disabled={scanning}
        >
          {scanning ? "جاري المسح..." : "مسح الباركود"}
        </Button>
      </Card>
    </div>
  );
};

export default ScanQR;