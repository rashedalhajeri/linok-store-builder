import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Templates } from "@/components/Templates";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Templates />
    </div>
  );
};

export default Index;