import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      <div className="relative w-full">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
        <Input
          type="text"
          placeholder="ابحث عن إعلان..."
          className="pr-12 py-6 text-lg rounded-2xl shadow-md border border-gray-100 bg-white/95 backdrop-blur-sm
                   hover:bg-white transition-all duration-300 focus:ring-2 focus:ring-primary/20
                   placeholder:text-gray-400"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 hover:bg-gray-100"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="w-5 h-5 text-gray-500" />
        </Button>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 animate-fade-in space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="luxury">سيارات فاخرة</SelectItem>
                <SelectItem value="sports">سيارات رياضية</SelectItem>
                <SelectItem value="family">سيارات عائلية</SelectItem>
                <SelectItem value="economy">سيارات اقتصادية</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">جديد</SelectItem>
                <SelectItem value="used">مستعمل</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="الموقع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="capital">العاصمة</SelectItem>
                <SelectItem value="hawally">حولي</SelectItem>
                <SelectItem value="salmiya">السالمية</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};