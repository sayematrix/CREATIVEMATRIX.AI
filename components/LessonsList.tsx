
import React from 'react';
import { ArrowLeft, Search, Download, Loader2, Share2 } from 'lucide-react';
import { ALL_LESSONS } from '../data/lessons';
import { Lesson } from '../types';
import { jsPDF } from 'jspdf';
import ShareModal from './ShareModal';
import { generateSingleLessonPDF } from '../utils/pdfExport';

interface LessonsListProps {
  onBack: () => void;
  onSelectLesson: (lesson: Lesson) => void;
}

const LessonsList: React.FC<LessonsListProps> = ({ onBack, onSelectLesson }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [shareData, setShareData] = React.useState<{ title: string; url: string } | null>(null);

  const filteredLessons = ALL_LESSONS.filter(lesson => 
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadFullCurriculum = async () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      const clrBg = [3, 3, 3];
      const clrNeon = [168, 85, 247];
      const clrGlass = [15, 15, 20];
      const clrText = [248, 250, 252];
      const clrMuted = [156, 163, 175];

      const drawModulePage = (lesson: Lesson, index: number) => {
        if (index >= 0) doc.addPage();
        doc.setFillColor(clrBg[0], clrBg[1], clrBg[2]);
        doc.rect(0, 0, pageWidth, pageHeight, 'F');
        doc.setDrawColor(clrNeon[0], clrNeon[1], clrNeon[2]);
        doc.setLineWidth(1.5);
        doc.line(0, 0, pageWidth, 0);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(clrNeon[0], clrNeon[1], clrNeon[2]);
        doc.text("CREATIVEMATRIX", margin, 12);
        doc.setFontSize(8);
        doc.setTextColor(clrMuted[0], clrMuted[1], clrMuted[2]);
        doc.text("SAYEMATRIX FREE-LEARNING ECOSYSTEM", pageWidth - margin, 12, { align: 'right' });

        let cursorY = 25;
        doc.setFillColor(clrNeon[0], clrNeon[1], clrNeon[2]);
        const tagText = `  ${lesson.tag.toUpperCase()}  `;
        const tagW = doc.getTextWidth(tagText);
        doc.roundedRect(margin, cursorY - 4, tagW, 6, 1, 1, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.text(tagText, margin, cursorY);
        cursorY += 12;

        doc.setFontSize(22);
        doc.setTextColor(clrText[0], clrText[1], clrText[2]);
        const titleLines = doc.splitTextToSize(lesson.title.toUpperCase(), contentWidth);
        doc.text(titleLines, margin, cursorY);
        cursorY += (titleLines.length * 9) + 8;

        doc.setFillColor(clrGlass[0], clrGlass[1], clrGlass[2]);
        doc.setDrawColor(40, 40, 50);
        doc.setLineWidth(0.2);
        const mainLines = doc.splitTextToSize(lesson.content, contentWidth - 10);
        const mainH = (mainLines.length * 5.5) + 10;
        doc.roundedRect(margin - 2, cursorY - 5, contentWidth + 4, mainH, 3, 3, 'FD');
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(clrText[0], clrText[1], clrText[2]);
        doc.text(mainLines, margin + 3, cursorY + 2);
        cursorY += mainH + 12;

        const drawSubSection = (title: string, items: string[]) => {
          doc.setFont("helvetica", "bold");
          doc.setFontSize(11);
          doc.setTextColor(clrNeon[0], clrNeon[1], clrNeon[2]);
          doc.text(title, margin, cursorY);
          cursorY += 6;
          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          doc.setTextColor(clrMuted[0], clrMuted[1], clrMuted[2]);
          items.forEach(item => {
            const lines = doc.splitTextToSize(`• ${item}`, contentWidth - 5);
            doc.text(lines, margin + 2, cursorY);
            cursorY += (lines.length * 4.5);
          });
          cursorY += 6;
        };
        drawSubSection("LEARNING OBJECTIVE", [lesson.learningObjective]);
        drawSubSection("CORE PRINCIPLES", lesson.corePrinciples);
        drawSubSection("ACTION BREAKDOWN", lesson.actionBreakdown);
        doc.setFontSize(7);
        doc.setTextColor(60, 60, 70);
        doc.text("NO PAYMENT. NO BARRIER. JUST LEARNING. | @CREATIVEMATRIX", pageWidth / 2, pageHeight - 10, { align: 'center' });
        doc.text(`PAGE ${index + 2} OF ${ALL_LESSONS.length + 1}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
      };

      doc.setFillColor(clrBg[0], clrBg[1], clrBg[2]);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      doc.setFont("helvetica", "bold");
      doc.setFontSize(50);
      doc.setTextColor(clrNeon[0], clrNeon[1], clrNeon[2]);
      doc.text("THE", margin, 80);
      doc.text("MATRIX", margin, 100);
      doc.setFontSize(16);
      doc.setTextColor(clrText[0], clrText[1], clrText[2]);
      doc.text("COMPLETE CREATIVE CURRICULUM", margin, 115);
      doc.setFontSize(10);
      doc.setTextColor(clrMuted[0], clrMuted[1], clrMuted[2]);
      doc.text("Masterclass Modules on Design, Systems, and Strategy", margin, 125);
      doc.setDrawColor(clrNeon[0], clrNeon[1], clrNeon[2]);
      doc.setLineWidth(2);
      doc.line(margin, 135, margin + 50, 135);

      ALL_LESSONS.forEach((lesson, i) => drawModulePage(lesson, i));
      doc.save("CreativeMatrix_Full_Curriculum.pdf");
    } catch (error) {
      console.error(error);
      alert("Failed to generate PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadSingle = (e: React.MouseEvent, lesson: Lesson) => {
    e.stopPropagation();
    generateSingleLessonPDF(lesson);
  };

  const openShare = (e: React.MouseEvent, lesson: Lesson) => {
    e.stopPropagation();
    setShareData({
      title: lesson.title,
      url: window.location.origin + '#lessons?id=' + lesson.id
    });
  };

  return (
    <div className="min-h-screen bg-[#030303] pt-28 pb-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group text-sm font-bold tracking-wider"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Hub
            </button>

            <button
              onClick={handleDownloadFullCurriculum}
              disabled={isGenerating}
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-xl font-bold transition-all hover:border-purple-500/20 disabled:opacity-50 group active:scale-95 w-full md:w-auto justify-center"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin text-purple-500" /> : <Download className="w-5 h-5 text-purple-500/80" />}
              <span className="font-orbitron tracking-widest text-[10px]">
                {isGenerating ? "ENCRYPTING..." : "DOWNLOAD FULL CURRICULUM"}
              </span>
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
           <h1 className="text-4xl md:text-7xl font-orbitron font-black uppercase leading-[1.1] tracking-tighter mb-8">
            THE KNOWLEDGE <span className="text-purple-400">RECAP</span> 
             </h1>
                        <p className="text-gray-400 text-lg text-pretty">Masterclasses on Creative Systems & Strategy</p>
            </div>
            
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Filter by title or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all font-medium"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLessons.map((lesson) => (
            <div 
              key={lesson.id} 
              onClick={() => onSelectLesson(lesson)}
              className="group glass-effect rounded-2xl overflow-hidden hover:translate-y-[-2px] transition-all cursor-pointer border-white/5 hover:border-purple-500/20 flex flex-col h-full relative"
            >
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button 
                  onClick={(e) => handleDownloadSingle(e, lesson)}
                  className="p-2 bg-black/40 backdrop-blur-md rounded-lg text-white/70 hover:text-white hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button 
                  onClick={(e) => openShare(e, lesson)}
                  className="p-2 bg-black/40 backdrop-blur-md rounded-lg text-white/70 hover:text-white hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                  title="Share Lesson"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-video relative overflow-hidden bg-white/5">
                <img src={lesson.image} alt={lesson.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" loading="lazy" />
                <div className="absolute top-3 left-3 bg-purple-600 px-2 py-0.5 rounded-full text-[9px] font-bold font-orbitron text-white uppercase tracking-wider">
                  {lesson.tag}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-snug font-orbitron text-balance min-h-[3rem]">
                  {lesson.title}
                </h3>
                <p className="text-gray-400 text-xs mb-4 line-clamp-3 leading-relaxed text-pretty">
                  {lesson.description}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold font-orbitron text-purple-500 uppercase tracking-[0.2em] group-hover:text-purple-300">
                  Read Module
                  <ArrowLeft className="rotate-180 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ShareModal isOpen={!!shareData} onClose={() => setShareData(null)} title={shareData?.title || ''} url={shareData?.url || ''} />
    </div>
  );
};

export default LessonsList;
