
import { Heart, MapPin, Shield, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Išmanus derinimas",
      description: "Pažangūs algoritmai analizuoja jūsų pomėgius ir siūlo tobulus partnerius, su kuriais tikrai sutapsite."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Vietinis radimas",
      description: "Raskite žmones savo aplinkoje. Susitinkite kafeinėje, parke ar jūsų mėgstamoje vietoje."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Profilio saugumas",
      description: "Jūsų saugumas mums svarbiausias. Tikrinami profiliai, patikimi ryšiai ir apsauga nuo sukčiavimo."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Tikri ryšiai",
      description: "Ne tik paviršutiniški susitikimai - mes padedame rasti ilgalaikius, prasmingus santykius."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
            Kodėl pasirinkti Finderis?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sukūrėme tobulą pažinčių patirtį, kuri padės jums rasti tikrą meilę
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6 p-4 bg-gradient-to-br from-teal-100 to-green-100 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                <div className="text-teal-600">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-teal-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
