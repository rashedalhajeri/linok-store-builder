import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
      <Input
        type="text"
        placeholder="أبحث عن أول كلمتين من اسم الإعلان الرئيسي..."
        className="pr-12 py-6 text-lg rounded-2xl shadow-lg border-0 bg-white/80 backdrop-blur-sm
                 hover:bg-white/90 transition-all duration-300 focus:ring-2 focus:ring-primary/20
                 placeholder:text-gray-400"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};