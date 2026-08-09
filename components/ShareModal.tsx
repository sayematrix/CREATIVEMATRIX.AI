
import React from 'react';
import { 
  X as CloseIcon, Copy, Check, Send, Mail, Share2, MessageCircle, Instagram
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, title, url }) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const shareText = `Check out this lesson on ARTENIXO: ${title}`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(url);

  const platforms = [
    { 
      name: 'Twitter / X', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      color: 'bg-black', 
      link: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}` 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      color: 'bg-[#1877F2]', 
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      color: 'bg-[#0A66C2]', 
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` 
    },
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle className="w-5 h-5" />, 
      color: 'bg-[#25D366]', 
      link: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}` 
    },
    { 
      name: 'Telegram', 
      icon: <Send className="w-5 h-5" />, 
      color: 'bg-purple-600', 
      link: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}` 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      color: 'bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-indigo-500', 
      link: `https://www.instagram.com/sayematrix/` 
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-5 h-5" />, 
      color: 'bg-gray-600', 
      link: `mailto:?subject=${encodedText}&body=${encodedUrl}` 
    },
    { 
      name: 'Reddit', 
      icon: <Share2 className="w-5 h-5" />, 
      color: 'bg-purple-500', 
      link: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}` 
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-sm glass-effect border-white/10 rounded-[28px] overflow-hidden shadow-2xl animate-in zoom-in-95 fade-in duration-200">
        <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <h3 className="text-lg font-orbitron font-bold text-white tracking-tight uppercase tracking-[0.1em]">Share Topic</h3>
          <button 
            onClick={onClose} 
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-8">
            {platforms.map((p) => (
              <a 
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 active:scale-90 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]`}>
                  {p.icon}
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-white transition-colors text-center font-orbitron tracking-tight">
                  {p.name.split(' ')[0]}
                </span>
              </a>
            ))}
          </div>

          <div>
            <p className="text-[10px] text-gray-500 mb-3 font-bold uppercase tracking-[0.2em] font-orbitron">Quick Copy</p>
            <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl p-1.5 pl-4">
              <span className="text-xs text-gray-400 truncate flex-1 font-mono">{url}</span>
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-bold transition-all text-xs whitespace-nowrap active:scale-95 shadow-lg shadow-purple-900/20"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
