import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

interface PhilosophySectionProps {
  onReadMore: () => void;
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onReadMore }) => {
  return (
    <section id="philosophy" className="py-20 md:py-32 relative border-y border-purple-900/10 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-effect p-6 sm:p-10 md:p-20 rounded-[2.5rem] md:rounded-[40px] border-white/5 flex flex-col lg:flex-row items-center gap-10 md:gap-20 shadow-2xl">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-purple-400/80 font-orbitron text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6">
              <BookOpen className="w-3 md:w-4 h-3 md:h-4" />
              ARTENIXO Core
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 md:mb-8 leading-tight">
              The Philosophy of <span className="text-purple-500 text-glow-purple">Structure</span>
            </h2>
            <p className="text-base md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10 text-pretty font-light">
              We believe that absolute freedom is found only through rigid structure. By mastering the systems of logic and AI, the modern creator transcends the chaos of the blank canvas. 
              <span className="hidden sm:inline"> It is about the intentional application of rules to achieve infinite expression.</span>
            </p>
            <button 
              onClick={onReadMore}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold transition-all shadow-xl active:scale-95 text-sm md:text-base font-orbitron tracking-widest"
            >
              READ MORE
              <ArrowRight className="group-hover:translate-x-1 transition-transform text-purple-500 w-4 md:w-5 h-4 md:h-5" />
            </button>
          </div>
          <div className="flex-1 relative flex justify-center order-1 lg:order-2 w-full">
            <div className="w-full aspect-square max-w-[240px] sm:max-w-md relative flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-600/15 rounded-full blur-[40px] md:blur-[100px] animate-pulse"></div>
              <div className="relative z-10 p-6 sm:p-10 md:p-14 border border-purple-500/20 rounded-full bg-black/40 backdrop-blur-2xl animate-float">
                <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 border-t-purple-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin duration-[15s]"></div>
                <div className="absolute inset-0 flex items-center justify-center font-orbitron text-2xl sm:text-4xl md:text-5xl font-black text-white/90">AI</div>
              </div>
              {/* Floating orbits */}
              <div className="absolute top-0 right-0 w-6 md:w-8 h-6 md:h-8 bg-purple-500/40 rounded-full blur-sm"></div>
              <div className="absolute bottom-6 md:bottom-10 left-0 w-4 md:w-6 h-4 md:h-6 bg-indigo-500/30 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;