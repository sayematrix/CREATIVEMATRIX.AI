
import React from 'react';
import { ArrowLeft, User, Share2, BookOpen, Target, Layers, Zap, CheckCircle2, Trophy, ArrowRight, Download, Loader2 } from 'lucide-react';
import { Lesson } from '../types';
import ShareModal from './ShareModal';
import { generateSingleLessonPDF } from '../utils/pdfExport';

interface LessonDetailProps {
  lesson: Lesson;
  onBack: () => void;
}

const LessonDetail: React.FC<LessonDetailProps> = ({ lesson, onBack }) => {
  const [isShareOpen, setIsShareOpen] = React.useState(false);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isGenerating, setIsGenerating] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCompleteSession = () => {
    setIsCompleted(true);
    setTimeout(() => onBack(), 3500);
  };

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      await generateSingleLessonPDF(lesson);
    } catch (e) { 
      console.error(e); 
      alert("Error generating PDF."); 
    } finally { 
      setIsGenerating(false); 
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] pt-24 md:pt-32 pb-20 animate-in fade-in slide-in-from-right-4 duration-500 overflow-x-hidden">
      {isCompleted && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500">
          <div className="text-center max-w-md animate-in zoom-in-95 duration-500 w-full">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Trophy className="w-8 h-8 md:w-12 md:h-12 text-white" />
            </div>
            <h2 className="text-2xl md:text-4xl font-orbitron font-black text-white mb-4 text-balance">Module Mastered!</h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 text-pretty px-4">You've successfully synchronized with the {lesson.tag} Matrix. Returning to hub...</p>
            <div className="w-full bg-white/5 h-1 md:h-1.5 rounded-full overflow-hidden max-w-xs mx-auto">
              <div className="bg-purple-600 h-full animate-[progress_3.5s_linear_forwards]"></div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group font-bold text-xs md:text-sm tracking-wide font-orbitron uppercase">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            Library
          </button>
          
          <button onClick={handleDownloadPDF} disabled={isGenerating} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white px-5 py-3 rounded-xl transition-all border border-white/10 text-[9px] md:text-[10px] font-orbitron font-bold tracking-[0.2em] disabled:opacity-50">
            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            {isGenerating ? "SAVING..." : "EXPORT PDF"}
          </button>
        </div>

        <div className="mb-10 md:mb-12">
          <div className="flex justify-between items-start mb-6">
            <span className="bg-purple-600 px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold font-orbitron text-white inline-block uppercase tracking-wider">
              {lesson.tag}
            </span>
            <button onClick={() => setIsShareOpen(true)} className="p-3 bg-white/5 hover:bg-purple-600/20 rounded-2xl text-purple-400 border border-white/5 hover:border-purple-500/30 transition-all active:scale-95">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-8 leading-[1.2] tracking-tight text-balance">
            {lesson.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-400 text-[9px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] font-orbitron mb-10 md:mb-12 border-y border-white/5 py-6 md:py-8">
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-500/40" />
              <span>By ARTENIXO</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-500/40" />
              <span>Open Source Learning</span>
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden mb-12 md:mb-16 border border-white/10 bg-white/5 shadow-2xl">
          <img src={lesson.image} alt={lesson.title} className="w-full h-full object-cover transition-all duration-700 opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        </div>

        <article className="prose prose-invert max-w-none text-gray-300 mb-16 md:mb-20">
          <div className="mb-8 md:mb-10 p-6 md:p-12 glass-effect rounded-[1.5rem] md:rounded-[32px] border-purple-500/5 shadow-inner">
            <p className="text-base md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light mb-0 text-pretty">
              {lesson.content}
            </p>
          </div>
        </article>

        <div className="space-y-16 md:space-y-20">
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-purple-500/10">
                <Target className="text-purple-500 w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h2 className="text-lg md:text-2xl font-orbitron font-bold text-white uppercase tracking-wider md:tracking-widest">Learning Objective</h2>
            </div>
            <div className="glass-effect p-6 md:p-10 rounded-2xl md:rounded-3xl border-purple-500/5">
              <p className="text-base md:text-xl text-purple-100 leading-relaxed italic text-pretty">
                "{lesson.learningObjective}"
              </p>
            </div>
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-purple-500/10">
                <Layers className="text-purple-500 w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h2 className="text-lg md:text-2xl font-orbitron font-bold text-white uppercase tracking-wider md:tracking-widest">Core Principles</h2>
            </div>
            <div className="grid gap-4 md:gap-6">
              {lesson.corePrinciples.map((principle, idx) => (
                <div key={idx} className="flex gap-4 md:gap-6 p-6 md:p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-white/5 hover:border-purple-500/10 transition-all group">
                  <div className="text-purple-500 font-orbitron font-bold text-base md:text-xl mt-0.5 md:mt-1">0{idx + 1}.</div>
                  <p className="text-gray-300 text-sm md:text-xl group-hover:text-white transition-colors leading-relaxed text-pretty">{principle}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 pb-12">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-purple-500/10">
                <Zap className="text-purple-500 w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h2 className="text-lg md:text-2xl font-orbitron font-bold text-white uppercase tracking-wider md:tracking-widest">Action Breakdown</h2>
            </div>
            <div className="grid gap-4 md:gap-6">
              {lesson.actionBreakdown.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-dashed border-white/10 hover:border-purple-500/20 transition-colors bg-black/20">
                  <div className="bg-purple-600/20 p-2 md:p-2.5 rounded-xl mt-0.5 md:mt-1">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-1 md:mb-2 text-base md:text-lg uppercase tracking-wider font-orbitron">Step 0{idx + 1}</h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed text-pretty">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-16 md:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 pb-10">
            <div className="text-center md:text-left">
              <p className="text-[10px] text-gray-400 mb-2 font-orbitron tracking-[0.2em] md:tracking-[0.3em] uppercase">Next Connection</p>
              <button onClick={onBack} className="text-white font-bold hover:text-purple-400 transition-colors flex items-center gap-2 group text-base md:text-lg font-orbitron tracking-wider">
                Browse Library
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button onClick={() => setIsShareOpen(true)} className="flex items-center justify-center gap-2 bg-white/5 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all text-white border border-white/10 active:scale-95 font-bold tracking-wide text-sm md:text-base">
                <Share2 className="w-5 h-5 text-purple-500/60" />
                Share
              </button>
              <button onClick={handleCompleteSession} className="flex items-center justify-center gap-2 bg-purple-600 px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-purple-500 transition-all text-white font-bold active:scale-95 group tracking-widest font-orbitron text-sm md:text-base">
                COMPLETE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} title={lesson.title} url={window.location.origin + '#lessons?id=' + lesson.id} />
      <style>{`@keyframes progress { from { width: 0%; } to { width: 100%; } }`}</style>
    </div>
  );
};

export default LessonDetail;
