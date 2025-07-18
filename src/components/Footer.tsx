import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="Finderis logo" 
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-orange-400 to-green-400 bg-clip-text text-transparent">
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
              className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
            >
              Privatumo politika
            </Link>
            <Link 
              to="/delete-account" 
              className="text-gray-300 hover:text-green-400 transition-colors font-medium"
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
          <p>&copy; 2025 Finderis. Visos teisės saugomos.</p>
          
          {/* Dekoratyvinis elementas su logotipo spalvomis */}
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-teal-500 rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;