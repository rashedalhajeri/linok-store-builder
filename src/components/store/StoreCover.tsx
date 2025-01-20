import { LanguageToggle } from "./LanguageToggle";

interface StoreCoverProps {
  language: 'en' | 'ar';
  onToggleLanguage: () => void;
}

export const StoreCover = ({ language, onToggleLanguage }: StoreCoverProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-4 left-4 z-10">
        <LanguageToggle 
          language={language}
          onToggle={onToggleLanguage}
        />
      </div>
      <div className="h-[200px] bg-white">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Store Cover"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};