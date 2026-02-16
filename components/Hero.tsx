import React from 'react';
import { MoveRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate?: (target: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(target);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-20 pb-12 overflow-hidden bg-[#030303]">
      {/* Background Decor - Responsive Centered Glow */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[280px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-purple-600/10 rounded-full blur-[60px] sm:blur-[100px] md:blur-[150px]" />
      </div>

      {/* Cinematic Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2000" 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover opacity-10 md:opacity-20 grayscale contrast-125 scale-110 lg:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-[#030303]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 border border-purple-500/30 bg-purple-500/5 rounded-full mb-8 md:mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="text-purple-400 font-orbitron text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-center">
              PART OF SAYEMATRIX ECOSYSTEM
            </span>
          </div>
          
          <h1 className="font-orbitron text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[9rem] font-black mb-6 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase text-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
            UNLOCK THE <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>CODE OF</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600 text-glow-purple">CREATIVITY</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-2xl text-zinc-400 mb-10 md:mb-20 font-space font-light max-w-4xl mx-auto leading-relaxed uppercase tracking-[0.15em] sm:tracking-[0.2em] px-2">
            High-performance AI lessons on <span className="text-white font-bold">creativity,</span> <span className="text-white font-bold">systems</span> and <span className="text-white font-bold">automation</span> for modern hustlers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <a 
              href="#lessons" 
              onClick={(e) => handleLinkClick(e, 'lessons-list')}
              className="bg-purple-600 text-white px-10 md:px-14 py-4 md:py-6 rounded-xl font-orbitron font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] group uppercase tracking-widest cursor-pointer"
            >
              START LEARNING
              <MoveRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={(e) => handleLinkClick(e, '#about')}
              className="border border-white/20 text-white px-10 md:px-14 py-4 md:py-6 rounded-xl font-orbitron font-bold text-sm md:text-base hover:bg-white/10 hover:border-white/40 transition-all text-center backdrop-blur-md uppercase tracking-widest cursor-pointer active:scale-95"
            >
              THE MISSION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;