import React from 'react';
import { Users, Send, MessageCircle, Globe } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 md:py-40 px-4 sm:px-6 bg-[#030303] relative scroll-mt-24 overflow-hidden border-t border-white/5">
       {/* High-Tech Grid Background */}
       <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.1)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

       <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-purple-500/5 mb-10 border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.1)] animate-in zoom-in duration-700">
            <Users className="text-purple-500 w-10 h-10" />
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-purple-500/40"></div>
            <span className="text-purple-500 text-[10px] font-orbitron font-bold tracking-[0.5em] uppercase">Global Sync</span>
            <div className="w-12 h-px bg-purple-500/40"></div>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-orbitron font-black tracking-tighter mb-8 leading-[1] uppercase text-white animate-in slide-in-from-bottom-4 duration-700">
            JOIN THE <br className="hidden sm:block" /> <span className="text-purple-500 italic text-glow-purple">HUSTLERS'</span> CIRCLE
          </h2>
          
          <p className="text-base sm:text-xl text-zinc-500 mb-14 max-w-2xl mx-auto leading-relaxed px-2 font-light uppercase tracking-widest animate-in slide-in-from-bottom-8 duration-700 delay-100">
            Connect with a global network of free learners. Access exclusive drops, 
            AI updates, and elite environmental networking.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-in slide-in-from-bottom-12 duration-700 delay-200">
            <a 
              href="https://t.me/sayematrix_public" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-purple-500/5 border border-purple-500/30 text-purple-500 px-12 py-5 rounded-xl font-orbitron font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all hover:bg-purple-500 hover:text-black hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95 duration-500"
            >
              <Send className="w-5 h-5" />
              Join Telegram
            </a>
            
            <a 
              href="https://discord.gg/XRVbtZ8h" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-4 border border-white/20 hover:border-purple-500/50 hover:bg-purple-500/5 text-white hover:text-purple-500 px-12 py-5 rounded-xl font-orbitron font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all backdrop-blur-md active:scale-95 duration-500"
            >
              <MessageCircle className="w-5 h-5" />
              Join Discord
            </a>
          </div>

          <div className="mt-20 flex items-center justify-center gap-10 opacity-20 group">
             <Globe className="animate-spin text-white w-6 h-6" style={{ animationDuration: '10s' }} />
             <span className="font-orbitron font-bold text-[8px] uppercase tracking-[0.8em] text-white">Encrypted Community Access Only</span>
          </div>
       </div>
    </section>
  );
};

export default Community;