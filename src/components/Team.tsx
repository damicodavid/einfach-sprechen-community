
import { motion } from 'framer-motion';

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="team" className="section bg-gradient-to-b from-pastel-lila/40 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Wer sind wir?</h2>
          <p className="section-subtitle">
            Lerne das engagierte Team kennen, das hinter der Einfach Sprechen Community steht.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="group">
            <div className="relative overflow-hidden rounded-xl mb-6">
              <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden">
                <img 
                  src="/images/aliona.jpg" 
                  alt="Aliona - Gründerin der Einfach Sprechen Community" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-lila-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-medium">Kontakt aufnehmen</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold mb-2">Aliona</h3>
              <p className="text-orange font-medium mb-4">Gründerin & Sprachlehrerin</p>
              <p className="text-gray-600">
                Bildungswissenschaftlerin mit jahrelanger Erfahrung im Sprachunterricht. 
                Aliona hat die Community mit dem Ziel gegründet, einen effektiven und 
                unterstützenden Raum für Deutschlernende zu schaffen.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group">
            <div className="relative overflow-hidden rounded-xl mb-6">
              <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden">
                <img 
                  src="/images/lilia.jpg" 
                  alt="Lilia - Native Speaker und Dolmetscherin" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-lila-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-medium">Mehr erfahren</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold mb-2">Lilia</h3>
              <p className="text-orange font-medium mb-4">Native Speaker & Dolmetscherin</p>
              <p className="text-gray-600">
                Als deutsche Muttersprachlerin und erfahrene Dolmetscherin unterstützt Lilia 
                die Community mit ihrem Sprachwissen. Sie hilft bei Korrekturen und moderiert 
                die Sprachklubs mit viel Geduld und Expertise.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
