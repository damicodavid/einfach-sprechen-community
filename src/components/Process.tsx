
import { Send, HelpCircle, MessageSquare, Calendar, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Process = () => {
  const days = [
    {
      day: "Montag",
      activities: [
        { time: "09:00", title: "Wort des Tages", description: "Ein neues Wort mit Beispielsätzen und Übungen." },
        { time: "15:00", title: "Grammatikübung", description: "Kurze, fokussierte Übung zu einem Grammatikthema." }
      ]
    },
    {
      day: "Dienstag",
      activities: [
        { time: "09:00", title: "Sprachimpuls", description: "Ein Ausdruck oder eine Redewendung für Alltagssituationen." },
        { time: "15:00", title: "Hörverständnis", description: "Kurze Audioaufnahme mit Verständnisfragen." }
      ]
    },
    {
      day: "Mittwoch",
      activities: [
        { time: "09:00", title: "Leseverständnis", description: "Kurzer Text mit Fragen und Diskussion." },
        { time: "19:00", title: "Sprachklub", description: "Gemeinsame Konversationsrunde über Zoom." }
      ]
    },
    {
      day: "Donnerstag",
      activities: [
        { time: "09:00", title: "Kulturtipp", description: "Interessante Fakten über deutschsprachige Länder." },
        { time: "15:00", title: "Sprechübung", description: "Aufgabe zum Sprechen mit Feedback." }
      ]
    },
    {
      day: "Freitag",
      activities: [
        { time: "09:00", title: "Wochenrückblick", description: "Zusammenfassung der Wocheninhalte." },
        { time: "15:00", title: "Freie Diskussion", description: "Offene Gesprächsrunde zu einem aktuellen Thema." }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const faqs = [
    {
      question: "Wie melde ich mich für die Community an?",
      answer: "Du kannst dich einfach über Telegram, Instagram oder WhatsApp bei Aliona melden. Nach einem kurzen Gespräch erhältst du einen Einladungslink zur Telegram-Gruppe."
    },
    {
      question: "Muss ich täglich aktiv sein?",
      answer: "Für den besten Lernerfolg empfehlen wir tägliche Teilnahme, aber es ist keine Pflicht. Du kannst in deinem eigenen Tempo teilnehmen und dich einbringen, wann es dir passt."
    },
    {
      question: "Wie funktionieren die Sprachklubs?",
      answer: "Die Sprachklubs finden jeden Mittwoch über Zoom statt. Wir besprechen verschiedene Themen, üben das freie Sprechen und geben einander Feedback. Die Teilnahme ist freiwillig aber sehr empfehlenswert."
    },
    {
      question: "Ich bin noch nicht auf B1-Niveau. Kann ich trotzdem teilnehmen?",
      answer: "Die Community ist auf Lernende ab B1-Niveau ausgerichtet. Wenn du noch nicht ganz B1 erreicht hast, kontaktiere uns für alternative Lernmöglichkeiten."
    },
    {
      question: "Gibt es eine Mindestvertragsdauer?",
      answer: "Wir bieten verschiedene Mitgliedschaftsoptionen an, beginnend mit einem kostenlosen Probeabo. Du kannst flexibel zwischen 4, 8 oder 12 Wochen wählen."
    }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Wie funktioniert es?</h2>
          <p className="section-subtitle">
            Unsere Community basiert auf täglichen Aktivitäten, die deine Deutschkenntnisse kontinuierlich verbessern.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 mb-16">
          <div className="lg:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Tagesablauf in der Community</h3>
              
              <Tabs defaultValue="montag" className="w-full">
                <TabsList className="grid grid-cols-5 mb-6">
                  {days.map(day => (
                    <TabsTrigger key={day.day} value={day.day.toLowerCase()}>
                      {day.day}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {days.map(day => (
                  <TabsContent key={day.day} value={day.day.toLowerCase()} className="space-y-4">
                    <h4 className="text-xl font-medium text-blue-dark">{day.day}</h4>
                    {day.activities.map((activity, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="timeline-item"
                      >
                        <span className="font-medium text-blue-dark">{activity.time}</span>
                        <h5 className="text-lg font-medium mt-1">{activity.title}</h5>
                        <p className="text-gray-600 mt-1">{activity.description}</p>
                      </motion.div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <div className="flex items-center mb-6">
              <Send size={28} className="text-[#0088cc] mr-3" />
              <h3 className="text-2xl font-semibold">Telegram als Plattform</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Unsere Community nutzt Telegram für die tägliche Kommunikation und Lernaktivitäten. 
              Diese Plattform bietet uns alle nötigen Funktionen für einen reibungslosen Ablauf 
              und eine einfache Organisation.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-pastel-blue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-dark font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Installiere Telegram</h4>
                  <p className="text-gray-600 text-sm">Verfügbar für alle Geräte</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-pastel-blue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-dark font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Kontaktiere Aliona</h4>
                  <p className="text-gray-600 text-sm">Für Zugang zur Community</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-pastel-blue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-dark font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Tritt der Gruppe bei</h4>
                  <p className="text-gray-600 text-sm">Über den Einladungslink</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://telegram.org/dl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#0099E6] text-white py-3 px-4 rounded-lg transition-all duration-300"
            >
              <Download size={20} />
              <span>Telegram herunterladen</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8">
            <HelpCircle size={28} className="text-blue-dark mr-3" />
            <h3 className="text-2xl font-semibold">Häufig gestellte Fragen</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-medium mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
