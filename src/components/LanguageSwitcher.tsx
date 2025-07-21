import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'lt' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('lt')}
        className="min-w-[50px]"
      >
        LT
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="min-w-[50px]"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;