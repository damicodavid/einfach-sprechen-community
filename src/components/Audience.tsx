
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Audience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const targetAudience = [
    {
      id: 1,
      text: "Du lernst bereits Deutsch auf B1-Niveau oder höher",
      description: "Du hast die Grundlagen der deutschen Sprache bereits gemeistert und möchtest nun deine Fähigkeiten vertiefen und verfeinern."
    },
    {
      id: 2,
      text: "Du möchtest spontan besser sprechen",
      description: "Du suchst nach Möglichkeiten, deine mündliche Ausdrucksfähigkeit zu verbessern und flüssiger in Alltagssituationen zu kommunizieren."
    },
    {
      id: 3,
      text: "Du möchtest deinen Wortschatz erweitern",
      description: "Du willst deinen deutschen Wortschatz vergrößern, um dich präziser und vielfältiger ausdrücken zu können."
    },
    {
      id: 4,
      text: "Du willst Deutschlernen zur Gewohnheit machen",
      description: "Du bist bereit, regelmäßig und konsequent zu üben, um langfristige Fortschritte zu erzielen."
    }
  ];

  return (
    <section id="audience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Für wen ist die Community?</h2>
          <p className="section-subtitle">
            Unsere Community wurde speziell für motivierte Deutschlernende geschaffen, die ihre Sprachkenntnisse in einem unterstützenden Umfeld verbessern möchten.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {targetAudience.map((item) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className="flex bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 text-blue-dark mr-4">
                  <CheckCircle size={24} className="mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.text}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-lg mx-auto text-center p-8 glassmorphism"
        >
          <h3 className="text-xl font-semibold mb-4">Nicht sicher, ob die Community das Richtige für dich ist?</h3>
          <p className="mb-6 text-gray-600">
            Kontaktiere uns für ein unverbindliches Gespräch, in dem wir deine Fragen beantworten und gemeinsam herausfinden können, ob unsere Community zu deinen Lernzielen passt.
          </p>
          <button className="btn-primary mx-auto">Unverbindlich anfragen</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Audience;
