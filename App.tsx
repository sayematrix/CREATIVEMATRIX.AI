import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import LearningHub from './components/LearningHub.tsx';
import Tools from './components/Tools.tsx';
import PhilosophySection from './components/PhilosophySection.tsx';
import PhilosophyDetail from './components/PhilosophyDetail.tsx';
import SocialConnect from './components/SocialConnect.tsx';
import Community from './components/Community.tsx';
import Footer from './components/Footer.tsx';
import LessonsList from './components/LessonsList.tsx';
import LessonDetail from './components/LessonDetail.tsx';
import { ALL_LESSONS } from './data/lessons.ts';
import { Lesson } from './types.ts';

export type ViewType = 'landing' | 'philosophy' | 'lessons-list' | 'lesson-detail';

const App: React.FC = () => {
  const [view, setView] = React.useState<ViewType>('landing');
  const [selectedLesson, setSelectedLesson] = React.useState<Lesson | null>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (target: ViewType | string) => {
    // Handle view switches
    if (target === 'landing' || target === 'philosophy' || target === 'lessons-list' || target === 'lesson-detail') {
      setView(target as ViewType);
      return;
    }

    // Handle section scrolling
    if (target.startsWith('#')) {
      const sectionId = target.substring(1);
      
      if (view !== 'landing') {
        setView('landing');
        // Wait for state transition to finish rendering landing
        requestAnimationFrame(() => {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              const yOffset = -80; 
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 150);
        });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setView('lesson-detail');
  };

  const handleSelectLessonById = (id: string) => {
    const lesson = ALL_LESSONS.find(l => l.id === id);
    if (lesson) {
      setSelectedLesson(lesson);
      setView('lesson-detail');
    }
  };

  const renderContent = () => {
    switch (view) {
      case 'philosophy':
        return <PhilosophyDetail onBack={() => setView('landing')} />;
      case 'lessons-list':
        return (
          <LessonsList 
            onBack={() => setView('landing')} 
            onSelectLesson={handleSelectLesson} 
          />
        );
      case 'lesson-detail':
        if (selectedLesson) {
          return (
            <LessonDetail 
              lesson={selectedLesson} 
              onBack={() => setView('lessons-list')} 
            />
          );
        }
        return (
          <LessonsList 
            onBack={() => setView('landing')} 
            onSelectLesson={handleSelectLesson} 
          />
        );
      default:
        return (
          <div className="animate-in fade-in duration-700">
            <Hero onNavigate={handleNavigate} />
            <About />
            <PhilosophySection onReadMore={() => setView('philosophy')} />
            <LearningHub 
              onExploreAll={() => setView('lessons-list')} 
              onSelectLesson={handleSelectLessonById}
            />
            <Tools />
            <SocialConnect />
            <Community />
          </div>
        );
    }
  };

  return (
    <div className="bg-[#030303] text-gray-300 min-h-screen selection:bg-purple-500 selection:text-white">
      <Navbar onNavigate={handleNavigate} currentView={view} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;