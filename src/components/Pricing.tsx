
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactButtons from './ContactButtons';

const Pricing = () => {
  const plans = [
    {
      name: "Probeabo",
      duration: "1 Woche",
      price: "0",
      description: "Lerne die Community kennen",
      features: [
        "Zugang zur Telegram-Gruppe",
        "Tägliche Lernaktivitäten",
        "Teilnahme am Sprachklub",
        "Feedback zu deinen Beiträgen"
      ],
      highlight: false
    },
    {
      name: "Basis",
      duration: "4 Wochen",
      price: "39",
      description: "Ideal zum Einstieg",
      features: [
        "Alles aus dem Probeabo",
        "Individuelle Sprechübungen",
        "Persönliches Feedback",
        "Zusätzliche Lernmaterialien"
      ],
      highlight: true
    },
    {
      name: "Standard",
      duration: "8 Wochen",
      price: "69",
      description: "Für kontinuierlichen Fortschritt",
      features: [
        "Alles aus dem Basispaket",
        "2 private Übungssessions",
        "Zugang zu archivierten Materialien",
        "Erweiterte Grammatikübungen"
      ],
      highlight: false
    },
    {
      name: "Premium",
      duration: "12 Wochen",
      price: "99",
      description: "Maximale Fortschritte",
      features: [
        "Alles aus dem Standardpaket",
        "4 private Übungssessions",
        "Priorisiertes Feedback",
        "Individuelle Lernberatung"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="section bg-gradient-to-b from-pastel-blue/30 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Preise & Mitgliedschaft</h2>
          <p className="section-subtitle">
            Wähle die Mitgliedschaft, die am besten zu deinen Lernzielen und deinem Budget passt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2 duration-300 ${
                plan.highlight ? 'ring-2 ring-blue' : ''
              }`}
            >
              {plan.highlight && (
                <div className="bg-blue text-white py-2 text-center text-sm font-medium">
                  Beliebteste Option
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.duration}</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">€</span>
                </div>
                
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-blue mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-2 px-4 rounded-lg transition-colors ${
                  plan.highlight 
                    ? 'bg-blue-dark hover:bg-blue text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}>
                  Auswählen
                </button>
              </div>
            </motion.div>
          ))}
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
            Alle Preise sind Einmalzahlungen für den angegebenen Zeitraum. Keine versteckten Kosten oder automatische Verlängerungen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
