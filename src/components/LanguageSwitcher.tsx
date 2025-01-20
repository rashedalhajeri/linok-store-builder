import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language, languageNames } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Globe, Search, Check } from 'lucide-react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredLanguages = Object.entries(languageNames).filter(([code, name]) =>
    name.toLowerCase().includes(search.toLowerCase()) ||
    code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full border border-gray-200 bg-white/95 text-gray-700 font-medium shadow-sm backdrop-blur-sm h-8 px-3 hover:bg-white/100"
        onClick={() => setOpen(true)}
      >
        <Globe className="h-3.5 w-3.5 mr-2" />
        {languageNames[language]}
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              className="pl-9 pr-4"
              placeholder="Search language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        
        <CommandList className="h-[300px] overflow-y-auto">
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {filteredLanguages.map(([code, name]) => (
              <CommandItem
                key={code}
                onSelect={() => {
                  setLanguage(code as Language);
                  setOpen(false);
                }}
                className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{code === 'ar' ? '🇸🇦' : code === 'en' ? '🇺🇸' : '🌐'}</span>
                  <span>{name}</span>
                </div>
                {language === code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="h-4 w-4 text-primary" />
                  </motion.div>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}