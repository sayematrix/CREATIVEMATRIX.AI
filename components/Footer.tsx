import React from 'react';
import { Cpu, Send, Youtube, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (target: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socials = [
    { name: 'Telegram', icon: <Send size={20} />, href: 'https://t.me/sayematrix_public' },
    { name: 'Youtube', icon: <Youtube size={20} />, href: 'https://www.youtube.com/@sayematrix' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/sayematrix/' },
    { name: 'Discord', icon: <MessageCircle size={20} />, href: 'https://discord.gg/XRVbtZ8h' },
  ];

  return (
    <footer className="bg-[#030303] pt-20 md:pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[200px] md:h-[300px] bg-purple-600/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Brand & About Section */}
        <div className="text-center lg:text-left mb-16 md:mb-24 max-w-5xl">
          <div 
            className="flex items-center justify-center lg:justify-start gap-3 mb-8 group cursor-pointer" 
            onClick={() => onNavigate('landing')}
          >
            <div className="p-2 bg-purple-600/10 rounded-xl border border-purple-500/20 group-hover:bg-purple-600/20 transition-all">
              <Cpu className="text-purple-500 w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <span className="font-orbitron text-2xl md:text-3xl font-black tracking-tighter uppercase text-white">
              CREATIVE<span className="text-purple-500 text-glow-purple transition-all group-hover:brightness-125">MATRIX</span>.AI
            </span>
          </div>
          
          <p className="text-gray-400 text-base md:text-2xl leading-relaxed font-light mb-8 md:mb-10 max-w-3xl">
            <span className="text-white font-bold">CREATIVEMATRIX.AI</span> is a high-performance free learning ecosystem dedicated to creativity, systems, and machine intelligence. Part of the global <span className="text-white font-bold underline decoration-purple-500/30 decoration-2 underline-offset-4">SAYEMATRIX</span> ecosystem.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl glass-effect border border-white/10 flex items-center justify-center text-zinc-500 hover:text-purple-400 hover:border-purple-500/50 transition-all shadow-lg hover:shadow-purple-500/10 active:scale-90"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

           {/* Global Footer Line & Copyright */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex justify-center">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[9px] md:text-[10px] text-zinc-600 font-bold uppercase tracking-[0.25em] font-orbitron text-center">
            <span>&copy; CREATIVEMATRIX.AI</span>
            <span className="hidden sm:inline text-zinc-800 font-normal">|</span>
            <span>A SAYEMATRIX PROJECT</span>
            <span className="hidden sm:inline text-zinc-800 font-normal">|</span>
            <span className="text-zinc-500 italic lowercase tracking-[0.15em] md:tracking-[0.2em] font-medium px-4 sm:px-0">No payment. No barrier. Just learning.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;