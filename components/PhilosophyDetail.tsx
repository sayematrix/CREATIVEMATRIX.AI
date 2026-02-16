
import React from 'react';
import { ArrowLeft, Zap, Layers, Globe, Cpu } from 'lucide-react';

interface PhilosophyDetailProps {
  onBack: () => void;
}

const PhilosophyDetail: React.FC<PhilosophyDetailProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] pt-28 pb-20 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </button>

        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-8 leading-tight tracking-tighter">
            THE <span className="text-purple-500">SAYEMATRIX</span> MANIFESTO
          </h1>
          <p className="text-2xl text-purple-200/60 font-light leading-relaxed">
            "Freedom through structure. Growth through constraint. Mastery through the Matrix."
          </p>
        </header>

        <div className="space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                <Layers className="text-purple-500" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-wider">01. The Principle of Constraint</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-4 text-lg">
              <p>
                In an era of infinite noise, the greatest challenge is not a lack of options, but an abundance of them. SAYEMATRIX posits that true creativity requires a framework—a set of rules that act as the scaffolding for genius.
              </p>
              <h4 className="text-white font-bold mt-8 mb-2">The Structured Loop:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Input: Intentional curation of data and inspiration.</li>
                <li>Processing: Applying logic-based creative systems (The Matrix).</li>
                <li>Output: Iterative production without the friction of "perfectionism."</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                <Cpu className="text-purple-500" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-wider">02. Human-AI Symbiosis</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-6 text-lg">
              <p>
                We do not fear the machine; we orchestrate it. The modern "hustler" or "creator" is no longer a lone artist, but a conductor of algorithms.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="glass-effect p-6 rounded-2xl border-white/5">
                  <h4 className="text-white font-bold mb-2">The AI Role</h4>
                  <p className="text-sm">Handling the heavy lifting, brute-force iteration, and technical execution.</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl border-white/5">
                  <h4 className="text-white font-bold mb-2">The Human Role</h4>
                  <p className="text-sm">Strategic direction, taste-making, emotional resonance, and ethical guidance.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                <Globe className="text-purple-500" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-wider">03. Radical Accessibility</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-4 text-lg">
              <p>
                Knowledge should never be behind a wall. The SAYEMATRIX ecosystem operates on the "Free Learning" model. We believe that by providing the tools for free, we build a smarter, more capable world of creators who can then solve bigger problems.
              </p>
              <p className="italic text-purple-400">
                "No payment. No barrier. Just learning." isn't just a slogan; it's our operating system.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                <Zap className="text-purple-500" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-wider">04. The Infinite Hustle</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-4 text-lg">
              <p>
                The Matrix is not a destination; it's a process. It is about the daily application of structure to achieve creative goals. Whether you are building a brand, writing a book, or designing a world—the Matrix provides the path.
              </p>
              <div className="mt-12 p-8 bg-purple-600/5 border border-purple-500/20 rounded-3xl text-center">
                <p className="text-white font-bold text-2xl mb-4">Are you ready to enter the Matrix?</p>
                <button 
                  onClick={onBack}
                  className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-purple-900/40"
                >
                  Return to Learning Hub
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
};

export default PhilosophyDetail;
