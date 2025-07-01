
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background decoration with new color scheme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/30 via-orange-100/20 to-emerald-100/30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-200/20 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Updated Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/3833bcf0-4d2e-4c53-8ecf-612f964ac340.png" 
            alt="Finderis logo" 
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent animate-fade-in">
          Finderis
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-fade-in font-light">
          Rask savo tikrąją meilę
        </p>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Išmanus pažinčių taikomoji programa, kuri jungia širdis ir kuria tikrus ryšius. 
          Saugus, paprastas ir veiksmingus būdas rasti savo gyvenimo žmogų.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Apple className="mr-3 h-6 w-6" />
            App Store
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-3 h-6 w-6" />
            Google Play
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
