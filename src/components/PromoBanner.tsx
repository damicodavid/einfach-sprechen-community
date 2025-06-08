import React from "react";
import { Timer } from "lucide-react";

const PromoBanner = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed top-20 right-4 md:right-8 w-[300px] z-40 transition-transform duration-300 ease-in-out hover:scale-105"
      data-aos="zoom-in"
      data-aos-delay="800"
    >
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-1 rounded-xl shadow-xl">
        <div className="bg-white dark:bg-gray-900 rounded-xl px-4 py-2 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-1">
            <Timer className="w-5 h-5 text-orange-500" />
            <span
              className="text-xl font-extrabold tracking-wide text-orange-500"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Limitiertes Angebot!
            </span>
          </div>
          <h3
            className="text-sm font-extrabold mb-1 text-black dark:text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Probewoche
          </h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg font-extrabold text-orange-500">9€</span>
            <span className="text-xs text-gray-400 line-through">15€</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
              -60% gespart
            </span>
          </div>
          <p className="text-xs font-semibold text-black dark:text-white mb-2">
            Nur für kurze Zeit verfügbar!
          </p>
          <a
            href="#contact"
            onClick={handleScroll}
            className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-1.5 px-3 rounded-lg transition-colors duration-200 text-center text-xs"
          >
            Jetzt starten
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;