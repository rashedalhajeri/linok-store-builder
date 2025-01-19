import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StoreTemplate1 from "./pages/store/Template1";
import StoreTemplate2 from "./pages/store/Template2";
import StoreTemplate3 from "./pages/store/Template3";
import StoreTemplate4 from "./pages/store/Template4";
import ProductTemplate1 from "./pages/product/Template1";
import ProductTemplate2 from "./pages/product/Template2";
import ProductTemplate3 from "./pages/product/Template3";
import CartTemplate1 from "./pages/cart/Template1";
import CartTemplate2 from "./pages/cart/Template2";
import CartTemplate3 from "./pages/cart/Template3";
import CheckoutTemplate1 from "./pages/checkout/Template1";
import SuccessTemplate1 from "./pages/success/Template1";
import AdTemplate2 from "./pages/ad/Template2";
import SearchTemplate2 from "./pages/search/Template2";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Store Routes */}
            <Route path="/store/template1/:storeId" element={<StoreTemplate1 />} />
            <Route path="/store/template2/:storeId" element={<StoreTemplate2 />} />
            <Route path="/store/template3/:storeId" element={<StoreTemplate3 />} />
            <Route path="/store/template4/:storeId" element={<StoreTemplate4 />} />
            
            {/* Product Routes */}
            <Route path="/product/template1/:productId" element={<ProductTemplate1 />} />
            <Route path="/product/template2/:productId" element={<ProductTemplate2 />} />
            <Route path="/product/template3/:productId" element={<ProductTemplate3 />} />
            
            {/* Cart Routes */}
            <Route path="/cart/template1" element={<CartTemplate1 />} />
            <Route path="/cart/template2" element={<CartTemplate2 />} />
            <Route path="/cart/template3" element={<CartTemplate3 />} />
            
            {/* Checkout Routes */}
            <Route path="/checkout/template1" element={<CheckoutTemplate1 />} />
            
            {/* Success Routes */}
            <Route path="/success/template1" element={<SuccessTemplate1 />} />
            
            {/* Ad Routes */}
            <Route path="/ad/template2/:adId" element={<AdTemplate2 />} />
            <Route path="/search/template2" element={<SearchTemplate2 />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;