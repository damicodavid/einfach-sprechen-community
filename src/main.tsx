import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Promotion message
const promoBanner = document.createElement('div');
promoBanner.innerHTML = `
  <div style="
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9999;
    background: linear-gradient(90deg, #ff9800 0%, #ff5722 100%);
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    padding: 0.75rem 0.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    letter-spacing: 0.03em;
  ">
    🎉 Limitiertes Angebot: Sichere dir jetzt die Probewoche für nur <span style="color:#fff700;">9€</span>! <span style="font-weight:normal;">Nur für kurze Zeit.</span>
  </div>
`;
document.body.prepend(promoBanner);

createRoot(document.getElementById("root")!).render(<App />);
