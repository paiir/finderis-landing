
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Grįžti į pagrindinį
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privatumo politika</h1>
          <p className="text-gray-600">Paskutinį kartą atnaujinta: 2025 m. sausio 1 d.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informacijos rinkimas</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Finderis renka informaciją, kurią pateikiate registruodamiesi ir naudodamiesi mūsų paslauga:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Profilio informacija (vardas, amžius, nuotraukos, aprašymas)</li>
              <li>Kontaktinė informacija (el. paštas, telefono numeris)</li>
              <li>Vietovės duomenys (su jūsų sutikimu)</li>
              <li>Bendravimo duomenys programėlėje</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informacijos naudojimas</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Jūsų duomenis naudojame šiems tikslams:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Pateikti ir tobulinti mūsų paslaugas</li>
              <li>Rodyti tinkamus partnerius pagal jūsų pomėgius</li>
              <li>Užtikrinti saugumą ir apsaugą nuo sukčiavimo</li>
              <li>Komunikuoti su jumis dėl paskyros ir paslaugų</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Informacijos apsauga</h2>
            <p className="text-gray-700 leading-relaxed">
              Naudojame industrijoje pripažintus saugumo standartus jūsų duomenų apsaugai. 
              Jūsų asmeninė informacija yra šifruojama ir saugoma saugiose duomenų bazėse. 
              Prieigą prie duomenų turi tik įgalioti darbuotojai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Duomenų dalijimasis</h2>
            <p className="text-gray-700 leading-relaxed">
              Mes neparduodame ir neperduodame jūsų asmeninių duomenų trečiosioms šalims 
              be jūsų aiškaus sutikimo, išskyrus teisės aktų reikalavimus ar saugumo tikslus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Jūsų teisės</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Jūs turite teisę:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Peržiūrėti savo duomenis</li>
              <li>Prašyti duomenų taisymo</li>
              <li>Ištrinti savo paskyrą ir duomenis</li>
              <li>Atšaukti sutikimą duomenų tvarkymui</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kontaktai</h2>
            <p className="text-gray-700 leading-relaxed">
              Dėl klausimų apie privatumo politiką kreipkitės: 
              <span className="font-medium text-teal-600"> privacy@finderis.lt</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
