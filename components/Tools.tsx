import React from 'react';
import { Brain, LineChart, Loader2, Wand2, Copy, Check } from 'lucide-react';
import { generateCreativePrompt, generateWorkflow } from '../services/geminiService';

const Tools: React.FC = () => {
  const [activeTool, setActiveTool] = React.useState<'prompt' | 'workflow' | null>(null);
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handlePromptGen = async () => {
    if (!input) return;
    setLoading(true);
    const res = await generateCreativePrompt(input);
    setOutput(res);
    setLoading(false);
  };

  const handleWorkflowGen = async () => {
    if (!input) return;
    setLoading(true);
    const res = await generateWorkflow(input);
    setOutput(res);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tools" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4 text-balance">Matrix Quick-Tools</h2>
        <p className="text-gray-400 mb-10 md:mb-12 text-base md:text-lg text-pretty max-w-2xl mx-auto">Harness the power of AI instantly to jumpstart your creative session.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-12">
          <button 
            onClick={() => { setActiveTool('prompt'); setOutput(''); setInput(''); }}
            className={`flex items-center justify-center gap-3 p-5 md:p-6 rounded-2xl border transition-all ${activeTool === 'prompt' ? 'bg-purple-600 border-purple-500 text-white shadow-lg' : 'glass-effect border-white/10 text-gray-400 hover:border-purple-500/50'}`}
          >
            <Brain className="w-5 md:w-6 h-5 md:h-6" />
            <span className="font-bold font-orbitron text-xs md:text-sm tracking-wide">Generate Creative Prompt</span>
          </button>
          <button 
            onClick={() => { setActiveTool('workflow'); setOutput(''); setInput(''); }}
            className={`flex items-center justify-center gap-3 p-5 md:p-6 rounded-2xl border transition-all ${activeTool === 'workflow' ? 'bg-purple-600 border-purple-500 text-white shadow-lg' : 'glass-effect border-white/10 text-gray-400 hover:border-purple-500/50'}`}
          >
            <LineChart className="w-5 md:w-6 h-5 md:h-6" />
            <span className="font-bold font-orbitron text-xs md:text-sm tracking-wide">Build Content Workflow</span>
          </button>
        </div>

        {activeTool && (
          <div className="glass-effect p-6 md:p-10 rounded-3xl text-left border-purple-500/20 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-2xl">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3 font-orbitron uppercase tracking-widest">
              {activeTool === 'prompt' ? <Brain className="text-purple-500 w-5 h-5" /> : <LineChart className="text-purple-500 w-5 h-5" />}
              {activeTool === 'prompt' ? 'AI Art Prompt Generator' : 'Content Strategy Builder'}
            </h3>
            <div className="space-y-6">
              <div className="relative flex flex-col sm:block">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={activeTool === 'prompt' ? "e.g. Cyberpunk samurai..." : "e.g. Launching a TikTok..."}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 md:px-5 py-4 md:py-5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all font-medium text-base md:text-lg pr-14"
                  onKeyPress={(e) => e.key === 'Enter' && (activeTool === 'prompt' ? handlePromptGen() : handleWorkflowGen())}
                />
                <button 
                  onClick={activeTool === 'prompt' ? handlePromptGen : handleWorkflowGen}
                  disabled={loading || !input}
                  className="absolute right-2 md:right-2.5 top-2 md:top-2.5 h-10 md:h-12 w-10 md:w-12 flex items-center justify-center bg-purple-600 rounded-lg hover:bg-purple-500 disabled:opacity-50 transition-all shadow-lg"
                >
                  {loading ? <Loader2 className="w-5 md:w-6 h-5 md:h-6 animate-spin" /> : <Wand2 className="w-5 md:w-6 h-5 md:h-6" />}
                </button>
              </div>

              {output && (
                <div className="mt-8 bg-black/60 border border-purple-500/10 rounded-2xl p-5 md:p-8 relative group shadow-inner">
                  <button 
                    onClick={copyToClipboard}
                    className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-gray-400 hover:text-white z-10"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 md:w-5 h-4 md:h-5 text-green-500" /> : <Copy className="w-4 md:w-5 h-4 md:h-5" />}
                  </button>
                  <div className="text-gray-300 whitespace-pre-wrap leading-relaxed pr-6 md:pr-8 text-sm md:text-xl font-light text-pretty">
                    {output}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;