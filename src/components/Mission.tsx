
import { Clock, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="mission" className="section bg-gradient-to-b from-white to-pastel-lila/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Unsere Mission
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="glassmorphism p-8 md:p-12 max-w-3xl mx-auto"
          >
            <blockquote className="text-xl md:text-2xl font-heading italic text-gray-700 mb-4">
              „Wir möchten eine unterstützende Community von Gleichgesinnten und einen sicheren Raum für dich schaffen, um dein Deutsch zu üben und zu verbessern."
            </blockquote>
            <div className="w-16 h-1 bg-orange mx-auto"></div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="card p-6 text-center card-hover">
            <div className="feature-icon mx-auto">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Kontinuität & Regelmäßigkeit</h3>
            <p className="text-gray-600">
              Tägliche Übungen und konsequentes Lernen sind der Schlüssel zum Erfolg beim Spracherwerb. Wir bieten eine Struktur, die dir hilft, Deutsch zu einem festen Bestandteil deines Alltags zu machen.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="card p-6 text-center card-hover">
            <div className="feature-icon mx-auto">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Microlearning</h3>
            <p className="text-gray-600">
              Kleine, aber regelmäßige Lerneinheiten sorgen für bessere Ergebnisse als seltene, lange Lernsessions. Unsere Aktivitäten sind so gestaltet, dass sie leicht in deinen Alltag passen.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="card p-6 text-center card-hover">
            <div className="feature-icon mx-auto">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Erfahrene Lehrerin</h3>
            <p className="text-gray-600">
              Lerne mit professioneller Unterstützung einer qualifizierten Sprachlehrerin, die dich gezielt fördert und dir wertvolles Feedback gibt, um deine Sprachfähigkeiten zu verbessern.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
