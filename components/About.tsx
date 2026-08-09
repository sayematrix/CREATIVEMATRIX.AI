import React from 'react';
import { Shield, LockOpen, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      id: '01',
      title: 'No Payment',
      description: 'Access every lesson and tool without reaching for your wallet. Education is a right, not a luxury.',
      icon: <Shield className="text-purple-500" size={24} />
    },
    {
      id: '02',
      title: 'No Barrier',
      description: 'No sign-up. No tracking. Just the pure flow of information straight to your creative mind.',
      icon: <LockOpen className="text-purple-500" size={24} />
    },
    {
      id: '03',
      title: 'Just Learning',
      description: 'Master your journey. Master your tools. Master your freedom in the digital Matrix.',
      icon: <Zap className="text-purple-500" size={24} />
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#030303] relative scroll-mt-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-purple-600/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Highlighted Points Column */}
        <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
          {highlights.map((item) => (
            <div 
              key={item.id}
              className="group relative glass-effect p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/5 hover:border-purple-500/30 transition-all duration-500 shadow-xl"
            >
              <div className="flex items-start gap-4 md:gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-purple-500 font-orbitron font-black text-xl md:text-3xl mb-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    {item.id}
                  </span>
                  <div className="w-px h-10 md:h-16 bg-white/5 group-hover:bg-purple-500/20 transition-colors"></div>
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-orbitron font-black text-white uppercase tracking-tight mb-2 md:mb-3 flex items-center gap-3">
                    {item.title}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:inline">
                      {item.icon}
                    </span>
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-lg font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Text Content Column */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-purple-500 mb-6 md:mb-8 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-xs">
            <span className="w-6 md:w-8 h-px bg-purple-500"></span>
            THE MISSION
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-black mb-6 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter uppercase text-white text-balance">
            BREAKING THE <br />
            <span className="text-purple-500 text-glow-purple">GATEKEEPING</span>
          </h2>
          
          <div className="space-y-6 md:space-y-8 text-zinc-400 text-base md:text-xl leading-relaxed font-light text-pretty">
            <p>
              CreativeMatrix is born from the conviction that the most valuable digital skills aren't found in expensive degrees, but in the focused application of logic and creative systems.
            </p>
            <p>
              As a proud part of the <span className="text-white font-bold">SAYEMATRIX</span> ecosystem, we believe that education should be accessible to everyone, everywhere, without hidden costs or friction.
            </p>
            <div className="relative p-6 md:p-10 border-l-4 border-purple-500 bg-purple-900/10 italic text-white text-lg md:text-2xl rounded-r-[1.5rem] md:rounded-r-[2rem] font-light shadow-2xl">
              "No payment. No barrier. Just learning."
              <Zap className="absolute top-2 md:top-4 right-4 md:right-6 text-purple-500/10 w-10 h-10 md:w-16 md:h-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;