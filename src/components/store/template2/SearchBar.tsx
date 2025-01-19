import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A90E2]" />
      <Input
        type="text"
        placeholder="ابحث عن سيارتك..."
        className="pr-10 py-6 text-lg rounded-2xl shadow-sm border-[#4A90E2]/20 
                 bg-white/90 backdrop-blur-sm hover:border-[#4A90E2]/40 
                 focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20
                 transition-all duration-300"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};