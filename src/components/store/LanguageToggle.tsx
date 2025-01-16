import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  language: 'en' | 'ar';
  onToggle: () => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full border border-gray-200 bg-white text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3"
      onClick={onToggle}
    >
      <Globe className="h-3.5 w-3.5 ml-1" />
      {language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};