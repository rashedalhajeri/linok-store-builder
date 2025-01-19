import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto px-4">
      <Search className="absolute right-7 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <Input
        type="text"
        placeholder="ابحث عن وجبتك المفضلة..."
        className="pr-12 py-5 text-base rounded-2xl shadow-sm border-gray-100"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};