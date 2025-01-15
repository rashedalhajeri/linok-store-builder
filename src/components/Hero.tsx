import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                أنشئ متجرك الإلكتروني في ثوانٍ
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400 mx-auto">
                منصة linok.me تتيح لك إنشاء متجر احترافي بسهولة تامة. اختر قالبك المفضل وابدأ البيع اليوم!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                ابدأ الآن مجاناً
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C8B6FF,transparent)]" />
      </div>
    </div>
  );
};