import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Language } from "@/utils/translations";

const languageNames = {
  en: "English",
  ar: "العربية"
};

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border border-gray-200 bg-white/95 text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3 hover:bg-white/100"
        >
          <Globe className="h-3.5 w-3.5 mr-2" />
          {languageNames[language]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {(Object.keys(languageNames) as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => onToggle(lang)}
            className={`${
              language === lang ? "bg-primary/10 text-primary" : ""
            } cursor-pointer`}
          >
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};