
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/92e90712-25d0-4626-bf7a-c1e9b35e627d.png" 
                alt="Finderis logo" 
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                Finderis
              </h3>
            </div>
            <p className="text-gray-400 max-w-md">
              Rask savo tikrąją meilę su išmaniąja pažinčių programa, 
              kuri jungia širdis ir kuria tikrus ryšius.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 text-center">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-teal-400 transition-colors font-medium"
            >
              Pagrindinis
            </Link>
            <Link 
              to="/privacy" 
              className="text-gray-300 hover:text-teal-400 transition-colors font-medium"
            >
              Privatumo politika
            </Link>
            <Link 
              to="/delete-account" 
              className="text-gray-300 hover:text-teal-400 transition-colors font-medium"
            >
              Ištrinti paskyrą
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-300 hover:text-teal-400 transition-colors font-medium"
            >
              Naudojimo taisyklės
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Finderis. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
