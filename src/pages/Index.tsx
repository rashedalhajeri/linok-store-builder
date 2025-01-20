import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;