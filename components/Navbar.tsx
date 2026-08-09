import React from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { ViewType } from '../App';

interface NavbarProps {
  onNavigate: (target: ViewType | string) => void;
  currentView: ViewType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: '#home', isActive: currentView === 'landing' },
    { name: 'About', target: '#about', isActive: false },
    { name: 'Lessons', target: 'lessons-list', isActive: currentView === 'lessons-list' || currentView === 'lesson-detail' },
    { name: 'Social', target: '#social', isActive: false },
    { name: 'Community', target: '#community', isActive: false },
  ];

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    onNavigate(target);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-effect border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate('landing')}
        >
          <Cpu className="text-neon w-8 h-8 transition-transform group-hover:rotate-12" />
          <span className="font-orbitron font-black text-xl tracking-tighter text-white">
            ARTEN<span className="text-neon">IXO</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.target}
              onClick={(e) => handleLinkClick(e, link.target)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase font-orbitron transition-colors hover:text-neon ${link.isActive ? 'text-neon' : 'text-gray-400'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => onNavigate('lessons-list')}
            className="ml-4 bg-neon/5 border border-neon/30 text-neon px-6 py-2.5 rounded-xl font-orbitron text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-neon hover:text-black hover:shadow-neon transition-all duration-500"
          >
            START LEARNING
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[76px] bg-[#030303] z-40 p-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.target}
              onClick={(e) => handleLinkClick(e, link.target)}
              className={`text-xl font-bold uppercase font-orbitron ${link.isActive ? 'text-neon' : 'text-gray-400'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { onNavigate('lessons-list'); setIsOpen(false); }}
            className="w-full bg-neon/5 border border-neon/30 text-neon py-4 rounded-xl font-orbitron text-xs font-bold tracking-[0.2em] uppercase hover:bg-neon hover:text-black transition-all duration-500 mt-4"
          >
            START LEARNING
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;