import React from "react";
import { createRoot } from "react-dom/client";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden relative">
      
      {/* Main Content */}
      <main className="h-screen w-full flex flex-col justify-center items-center text-center px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-2 fade-up">
            FRWD SPACE.
          </h1>
          <p className="text-4xl md:text-6xl font-black uppercase text-transparent text-stroke mb-12 fade-up delay-200">
            For the Future
          </p>
        </div>

        {/* Social Icons - Positioned at bottom center */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-8 fade-up delay-300">
            <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors duration-300 transform hover:scale-110"><Instagram size={24} /></a>
            <a href="#" aria-label="Twitter" className="text-white/50 hover:text-white transition-colors duration-300 transform hover:scale-110"><Twitter size={24} /></a>
            <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors duration-300 transform hover:scale-110"><Linkedin size={24} /></a>
        </div>
      </main>
        
      {/* Abstract Background Element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);