
import React from 'react';
import { ExternalLink } from 'lucide-react';

const SocialConnect: React.FC = () => {
  return (
    <section id="social" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            The <span className="text-purple-500 text-glow">Visual</span> Matrix
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-pretty">
            Experience the philosophy in motion. Join our platforms for daily creative breakdowns and behind-the-scenes systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* YouTube Card */}
          <div className="group relative glass-effect rounded-[32px] p-8 md:p-12 border-white/5 hover:border-purple-500/20 transition-all duration-500 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-600/5 rounded-full blur-[80px] group-hover:bg-purple-600/10 transition-all"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-purple-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.1C19.3 3.6 12 3.6 12 3.6s-7.3 0-9.3.5C1.6 4.3.8 5.1.5 6.2 0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.1 1.1 1.9 2.2 2.1 2 1.5 9.3 1.5 9.3 1.5s7.3 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12l-6.3 3.6z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-white mb-4">Masterclass Hub</h3>
              <p className="text-gray-400 mb-8 text-lg text-pretty leading-relaxed">
                Long-form creative systems, software tutorials, and deep-dives into the ARTENIXO philosophy.
              </p>
              <a 
                href="https://www.youtube.com/@sayematrix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all group-hover:scale-105 active:scale-95 shadow-lg shadow-purple-900/20 font-orbitron text-sm tracking-widest"
              >
                Subscribe on YouTube
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="group relative glass-effect rounded-[32px] p-8 md:p-12 border-white/5 hover:border-purple-500/20 transition-all duration-500 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-600/5 rounded-full blur-[80px] group-hover:bg-purple-600/10 transition-all"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-purple-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1.1-.4 2.3-.5 1.2-.1 1.6-.1 4.8-.1m0-2.2c-3.3 0-3.7 0-5 .1-1.3.1-2.2.3-3 .6-.8.3-1.5.7-2.1 1.4C1 2.7.6 3.4.3 4.2c-.3.8-.5 1.7-.6 3-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.1.6.7 1.3 1.1 2.1 1.4.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.1-1.4.7-.6 1.1-1.3 1.4-2.1.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.1-.6-.7-1.3-1.1-2.1-1.4-.8-.3-1.7-.5-3-.6-1.3-.1-1.7-.1-5-.1zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-white mb-4">Daily Insights</h3>
              <p className="text-gray-400 mb-8 text-lg text-pretty leading-relaxed">
                High-speed workflows, visual inspiration, and community spotlights delivered to your feed.
              </p>
              <a 
                href="https://www.instagram.com/sayematrix/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-500 hover:to-fuchsia-400 text-white px-8 py-4 rounded-xl font-bold transition-all group-hover:scale-105 active:scale-95 shadow-lg shadow-purple-900/20 font-orbitron text-sm tracking-widest"
              >
                Follow on Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
        }
      `}</style>
    </section>
  );
};

export default SocialConnect;
