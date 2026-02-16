
import React from 'react';
import { ArrowUpRight, Share2, Download } from 'lucide-react';
import { ALL_LESSONS } from '../data/lessons';
import { Lesson } from '../types';
import ShareModal from './ShareModal';
import { generateSingleLessonPDF } from '../utils/pdfExport';

interface LearningHubProps {
  onExploreAll: () => void;
  onSelectLesson: (lessonId: string) => void;
}

const LearningHub: React.FC<LearningHubProps> = ({ onExploreAll, onSelectLesson }) => {
  const [shareData, setShareData] = React.useState<{ title: string; url: string } | null>(null);

  const PREVIEW_LESSONS = ALL_LESSONS.slice(0, 3);

  const handleShare = (e: React.MouseEvent, lesson: Lesson) => {
    e.stopPropagation();
    setShareData({
      title: lesson.title,
      url: window.location.origin + '#lessons?id=' + lesson.id
    });
  };

  const handleDownload = (e: React.MouseEvent, lesson: Lesson) => {
    e.stopPropagation();
    generateSingleLessonPDF(lesson);
  };

  return (
    <section id="lessons" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-purple-500 font-orbitron tracking-[0.2em] text-xs uppercase mb-2 block">Course Catalog</span>
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white text-balance leading-tight">The Learning Hub</h2>
          </div>
          <button 
            onClick={onExploreAll}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group font-bold tracking-wide"
          >
            Explore All Free Lessons
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PREVIEW_LESSONS.map((lesson) => (
            <div 
              key={lesson.id} 
              onClick={() => onSelectLesson(lesson.id)}
              className="group relative glass-effect rounded-3xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 border-white/5 hover:border-purple-500/20 cursor-pointer flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button 
                  onClick={(e) => handleDownload(e, lesson)}
                  className="p-2 bg-black/40 backdrop-blur-md rounded-lg text-white/70 hover:text-white hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button 
                  onClick={(e) => handleShare(e, lesson)}
                  className="p-2 bg-black/40 backdrop-blur-md rounded-lg text-white/70 hover:text-white hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                  title="Share Lesson"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-video relative overflow-hidden bg-white/5">
                <img 
                  src={lesson.image} 
                  alt={lesson.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-purple-600 px-3 py-1 rounded-full text-[10px] font-bold font-orbitron text-white uppercase tracking-wider">
                  {lesson.tag}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug group-hover:text-purple-400 transition-colors line-clamp-2 min-h-[3.5rem] text-balance font-orbitron">
                  {lesson.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed line-clamp-3 text-pretty">
                  {lesson.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-white/80 font-bold group/btn text-xs tracking-widest uppercase font-orbitron">
                  <span className="h-[2px] w-6 bg-purple-600 group-hover/btn:w-10 transition-all"></span>
                  Start Module
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ShareModal 
        isOpen={!!shareData} 
        onClose={() => setShareData(null)} 
        title={shareData?.title || ''} 
        url={shareData?.url || ''} 
      />
    </section>
  );
};

export default LearningHub;
