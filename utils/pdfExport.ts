
import { jsPDF } from 'jspdf';
import { Lesson } from '../types';

export const generateSingleLessonPDF = async (lesson: Lesson) => {
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

  // Background
  doc.setFillColor(clrBg[0], clrBg[1], clrBg[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  
  // Neon Top border
  doc.setFillColor(clrNeon[0], clrNeon[1], clrNeon[2]);
  doc.rect(0, 0, pageWidth, 1.5, 'F');
  
  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(clrNeon[0], clrNeon[1], clrNeon[2]);
  doc.text("ARTENIXO", margin, 12);
  
  doc.setFontSize(8);
  doc.setTextColor(clrMuted[0], clrMuted[1], clrMuted[2]);
  doc.text("ARTENIXO FREE-LEARNING ECOSYSTEM", pageWidth - margin, 12, { align: 'right' });

  let cursorY = 25;
  
  // Tag Pill
  doc.setFillColor(clrNeon[0], clrNeon[1], clrNeon[2]);
  const tagText = `  ${lesson.tag.toUpperCase()}  `;
  const tagW = doc.getTextWidth(tagText);
  doc.roundedRect(margin, cursorY - 4, tagW, 6, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text(tagText, margin, cursorY);
  cursorY += 12;

  // Title
  doc.setFontSize(22);
  doc.setTextColor(clrText[0], clrText[1], clrText[2]);
  const titleLines = doc.splitTextToSize(lesson.title.toUpperCase(), contentWidth);
  doc.text(titleLines, margin, cursorY);
  cursorY += (titleLines.length * 9) + 8;

  // Main Content Box (Boxed and visually balanced)
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

  const drawSec = (t: string, items: string[]) => {
    // Check if we need a new page
    if (cursorY + 30 > pageHeight - 20) {
        doc.addPage();
        doc.setFillColor(clrBg[0], clrBg[1], clrBg[2]);
        doc.rect(0, 0, pageWidth, pageHeight, 'F');
        cursorY = 20;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(clrNeon[0], clrNeon[1], clrNeon[2]);
    doc.text(t, margin, cursorY);
    cursorY += 6;
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(clrMuted[0], clrMuted[1], clrMuted[2]);
    
    items.forEach(it => {
      const lns = doc.splitTextToSize(`• ${it}`, contentWidth - 5);
      // Check for page overflow on individual bullet
      if (cursorY + (lns.length * 5) > pageHeight - 15) {
          doc.addPage();
          doc.setFillColor(clrBg[0], clrBg[1], clrBg[2]);
          doc.rect(0, 0, pageWidth, pageHeight, 'F');
          cursorY = 20;
      }
      doc.text(lns, margin + 2, cursorY);
      cursorY += (lns.length * 4.5);
    });
    cursorY += 6;
  };

  drawSec("LEARNING OBJECTIVE", [lesson.learningObjective]);
  drawSec("CORE PRINCIPLES", lesson.corePrinciples);
  drawSec("ACTION BREAKDOWN", lesson.actionBreakdown);
  
  // Footer
  doc.setFontSize(7);
  doc.setTextColor(60, 60, 70);
  doc.text("NO PAYMENT. NO BARRIER. JUST LEARNING. | @ARTENIXO", pageWidth / 2, pageHeight - 10, { align: 'center' });
  
  doc.save(`ARTENIXO_${lesson.id}_${lesson.tag}.pdf`);
};
