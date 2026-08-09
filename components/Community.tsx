import React from 'react';
import { Users, Send, MessageCircle, Globe } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 md:py-40 px-4 sm:px-6 bg-matrix relative scroll-mt-24 overflow-hidden border-t border-white/5">
       {/* High-Tech Grid Background */}
       <div className="absolute inset-0 bg-[radial-gradient(#a855f710_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]"></div>

       <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-neon/5 mb-10 border border-neon/20 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
            <Users className="text-neon w-10 h-10" />
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-neon/40"></div>
            <span className="text-neon text-[10px] font-orbitron font-bold tracking-[0.5em] uppercase">Global Sync</span>
            <div className="w-12 h-px bg-neon/40"></div>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-orbitron font-black tracking-tighter mb-8 leading-[1] uppercase text-white">
            JOIN THE <br className="hidden sm:block" /> <span className="text-neon italic text-glow-purple">HUSTLERS'</span> CIRCLE
          </h2>
          
          <p className="text-base sm:text-xl text-zinc-400 mb-14 max-w-2xl mx-auto leading-relaxed px-2 font-light uppercase tracking-widest">
            Connect with a global network of free learners. Access exclusive drops, 
            and elite environmental networking.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="https://t.me/sayematrix_public" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-neon/5 border border-neon/30 text-neon px-12 py-5 rounded-xl font-orbitron font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all hover:bg-neon hover:text-black hover:shadow-neon active:scale-95 duration-500"
            >
              <Send className="w-5 h-5" />
              Join Telegram
            </a>
            
            <a 
              href="https://discord.gg/XRVbtZ8h" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-4 border border-white/20 hover:border-neon/50 hover:bg-neon/5 text-white hover:text-neon px-12 py-5 rounded-xl font-orbitron font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all backdrop-blur-md active:scale-95 duration-500"
            >
              <MessageCircle className="w-5 h-5" />
              Join Discord
            </a>
          </div>

          <div className="mt-20 flex items-center justify-center gap-10 opacity-20 group">
             <Globe className="animate-spin-slow text-white w-6 h-6" />
             <span className="font-orbitron font-bold text-[8px] uppercase tracking-[0.8em] text-white">Encrypted Community Access Only</span>
          </div>
       </div>
    </section>
  );
};

export default Community;