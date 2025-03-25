
import { motion } from 'framer-motion';
import ContactButtons from './ContactButtons';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pastel-lila rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pastel-orange rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4"></div>
      </div>
      
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center md:text-left"
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-pastel-lila text-lila-dark font-medium text-sm">
              Deutsch lernen mit Community
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
              Einfach <span className="text-orange">Sprechen</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Eine Community von Deutschlernenden und Sprachklubs mit einer Muttersprachlerin
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <button className="btn-primary flex items-center justify-center gap-2">
                <span>Jetzt beitreten</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">Mehr erfahren</button>
            </div>
            
            <div className="hidden md:block">
              <ContactButtons />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/hero-image.jpg" 
                alt="Deutschlernende Community" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-pastel-orange rounded-lg rotate-45 animate-float"></div>
            <div className="absolute -bottom-6 left-1/4 transform w-16 h-16 bg-pastel-lila rounded-lg rotate-12 animate-float"></div>
            <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 w-24 h-24 bg-orange-light/50 rounded-full opacity-60"></div>
          </motion.div>
        </div>
        
        <div className="md:hidden mt-12">
          <ContactButtons className="justify-center" />
        </div>
        
        <div className="mt-16 mx-auto max-w-2xl text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
          <h3 className="font-medium text-xl mb-3 text-lila-dark">Warum alles auf Deutsch?</h3>
          <p className="text-gray-600">
            Unsere Community ist speziell dafür konzipiert, dir zu helfen, dich vollständig in die deutsche Sprache einzutauchen. 
            Alle Inhalte und Interaktionen finden auf Deutsch statt, damit du schneller Fortschritte machst und dein Sprachgefühl entwickelst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
