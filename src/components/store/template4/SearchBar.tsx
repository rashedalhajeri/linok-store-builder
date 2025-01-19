import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto px-4 sm:px-6">
      <Search className="absolute right-7 sm:right-9 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <Input
        type="text"
        placeholder="ابحث عن وجبتك المفضلة..."
        className="pr-12 py-5 sm:py-6 text-base sm:text-lg rounded-2xl shadow-sm border-gray-100 bg-white/95 backdrop-blur-sm
                 hover:bg-white transition-colors duration-300 focus:ring-2 focus:ring-gray-200"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};