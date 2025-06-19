import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactButtons from './ContactButtons';

const plans = [
  {
    name: "Probewoche¹",
    duration: "1 Woche",
    price: "9",
    description: "Nur für neue Mitglieder & bei bestehendem Instagram-Follow @hey_alyon_ka",
    features: [
      "Zugang zur Telegram-Gruppe mit täglichen Lernimpulsen",
      "1x wöchentlich: Sprechklub mit Muttersprachler:in",
      "Kommunikative Aufgaben (Text, Audio, Video)",
      "Fragen an eine:n Native Speaker",
      "Wöchentliches Quizlet-Set mit Vokabeln",
      "Zugriff auf Inhalte aus den Vorwochen"
    ],
    highlight: true
  },
  {
    name: "Startklar",
    duration: "1–3 Wochen",
    price: "15",
    description: "Alle Inhalte, flexibel für den Einstieg",
    features: [
      "Alle Inhalte & Vorteile enthalten",
      "Je länger du bleibst, desto günstiger wird es"
    ],
    highlight: false
  },
  {
    name: "Dranbleiben",
    duration: "4–7 Wochen",
    price: "13",
    description: "Für alle, die dranbleiben wollen",
    features: [
      "Alle Inhalte & Vorteile enthalten",
      "Günstigerer Wochenpreis"
    ],
    highlight: false
  },
  {
    name: "Sprachflow",
    duration: "8–11 Wochen",
    price: "12",
    description: "Für kontinuierlichen Fortschritt",
    features: [
      "Alle Inhalte & Vorteile enthalten",
      "Noch günstiger pro Woche"
    ],
    highlight: false
  },
  {
    name: "Sprachexpert:in",
    duration: "ab 12 Wochen",
    price: "11",
    description: "Werde Sprachexpert:in und spare am meisten",
    features: [
      "Alle Inhalte & Vorteile enthalten",
      "Bester Preis pro Woche"
    ],
    highlight: false
  }
];

const Pricing = () => (
  <section id="pricing" className="section bg-gradient-to-b from-pastel-blue/30 to-white">
    <div className="container max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Preise & Mitgliedschaft</h2>
        <p className="section-subtitle">
          Lerne regelmäßig und entspannt – du bestimmst die Dauer.<br />
          Alle Pakete enthalten dieselben Inhalte. Je länger du bleibst, desto günstiger wird es für dich.
        </p>
      </motion.div>

      {/* Probewoche in first line */}
      <div className="flex flex-col md:flex-row gap-8 w-full mb-8 justify-center">
        {plans.slice(0, 1).map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2 duration-300 min-w-[270px] ${
              plan.highlight ? 'ring-2 ring-orange-400 bg-orange-50' : ''
            }`}
          >
            {plan.highlight && (
              <div className="bg-orange-400 text-white py-2 text-center text-sm font-medium">
                Probewoche-Angebot
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
              <p className="text-gray-500 mb-2">{plan.duration}</p>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500">€</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={18} className="text-orange-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 rounded-lg transition-colors bg-orange-500 hover:bg-orange-600 text-white">
                Auswählen
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Other plans in second line */}
      <div className="flex flex-col md:flex-row gap-6 w-full mb-16 overflow-x-auto justify-center min-h-[420px]">
        {plans.slice(1).map((plan, index) => {
          // Icons for savings level (from 1 to 4)
          const savingsIcons = [
            <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
            <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
            <svg key="3" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
            <svg key="4" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" /></svg>
          ];
          const icon = savingsIcons[index % savingsIcons.length];
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 flex-1 min-w-[220px] max-w-full mx-2 p-0 z-10 pt-10 group`}
              style={{ boxSizing: 'border-box' }}
            >
              <div className="flex flex-col items-center w-full">
                <div className="mb-2">{icon}</div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 mt-2 text-center break-words">{plan.name}</h3>
              </div>
              <p className="text-gray-500 mb-2 text-base text-center break-words">{plan.duration}</p>
              {/* Price in a circle */}
              <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex flex-col items-center justify-center mb-2 shadow">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-xs text-gray-500">€/Woche</span>
              </div>
              {/* Savings below price */}
              {(() => {
                let saveUpTo = 0;
                if (plan.name === "Dranbleiben") saveUpTo = 14;
                if (plan.name === "Sprachflow") saveUpTo = 33;
                if (plan.name === "Sprachexpert:in") saveUpTo = 48;
                return saveUpTo > 0 ? (
                  <div className="mb-2 inline-block bg-green-600 text-white text-xs font-bold rounded-full px-3 py-1 shadow z-10">
                    Spare bis zu {saveUpTo}€
                  </div>
                ) : null;
              })()}
              <p className="text-gray-600 mb-6 text-base min-h-[48px] text-center break-words px-2">{plan.description}</p>
              <button className="mt-auto w-[90%] py-2 mb-4 rounded-lg border-2 border-current text-base font-semibold text-gray-900 bg-white transition-colors duration-200 group-hover:bg-orange-500 group-hover:text-white hover:bg-orange-500 hover:text-white">
                Auswählen
              </button>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-md p-8"
      >
        <h3 className="text-2xl font-semibold mb-4">Bereit zum Beitreten?</h3>
        <p className="text-gray-600 mb-8">
          Kontaktiere Aliona direkt über einen der folgenden Kanäle, um deine Mitgliedschaft zu beginnen 
          oder weitere Fragen zu stellen.
        </p>
        
        <ContactButtons className="justify-center" />
        
        <p className="mt-8 text-sm text-gray-500">
          Einstieg ist jede Woche möglich.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
