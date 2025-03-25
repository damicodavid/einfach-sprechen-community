
import { motion } from 'framer-motion';
import { ShieldCheck, Brain, Users } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Lernen ohne Angst",
      description: "Ein sicherer Raum, in dem du ohne Angst vor Fehlern sprechen und üben kannst. Wir fördern eine unterstützende Atmosphäre, in der das Ausprobieren wichtiger ist als Perfektion."
    },
    {
      icon: Brain,
      title: "Wissenschaftlich fundierte Methoden",
      description: "Unsere Lernmethoden basieren auf aktuellen sprachwissenschaftlichen Erkenntnissen. Mit bewährten Techniken zum Spracherwerb maximieren wir deinen Lernerfolg."
    },
    {
      icon: Users,
      title: "Inklusivität & Respekt",
      description: "Wir schätzen Vielfalt und behandeln alle Mitglieder mit Respekt. Jeder hat seine eigene Lernreise und wird darin individuell unterstützt und wertgeschätzt."
    }
  ];

  return (
    <section id="values" className="section bg-gradient-to-b from-white to-pastel-orange/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Unsere Werte</h2>
          <p className="section-subtitle">
            Diese Grundwerte leiten unsere Community und prägen unsere Lernumgebung.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-lila flex items-center justify-center mx-auto mb-6">
                <value.icon size={32} className="text-lila-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto text-center p-8 bg-white rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Unsere Qualitätsversprechen</h3>
          <div className="space-y-3">
            <p className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-light flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span>Qualifizierte muttersprachliche Betreuung</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-light flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span>Regelmäßige Aktivitäten und Übungen</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-light flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span>Persönliches Feedback zu deiner Entwicklung</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-light flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span>Kontinuierliche Verbesserung unserer Angebote</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
