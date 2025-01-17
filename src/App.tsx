import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import CheckoutTemplate1 from "@/pages/checkout/Template1";
import ProductTemplate1 from "@/pages/product/Template1";
import StoreTemplate1 from "@/pages/store/Template1";
import ScanQR from "@/pages/restaurant/ScanQR";
import Menu from "@/pages/restaurant/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout/template1" element={<CheckoutTemplate1 />} />
        <Route path="/product/template1/:id" element={<ProductTemplate1 />} />
        <Route path="/store/template1/:storeId" element={<StoreTemplate1 />} />
        <Route path="/restaurant/scan" element={<ScanQR />} />
        <Route path="/restaurant/menu/:tableId" element={<Menu />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;