import { motion } from 'motion/react';
import { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('contact@nihcesolar.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-24">
          
          <div className="md:w-1/2">
            <div className="flex items-center mb-8">
              <a href="#" className="font-sans font-bold text-3xl tracking-tighter text-white">
                Nihce Solar.
              </a>
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight text-white mb-8">
              Speak to your new <br className="hidden sm:block" />
              energy partner today.
            </h3>
            
            <button 
              onClick={handleCopy}
              className="group relative inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <span className="font-mono text-lg sm:text-xl tracking-tight border-b border-gray-600 group-hover:border-white pb-1 transition-colors">
                contact@nihcesolar.com
              </span>
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded">
                  Copied
                </span>
              )}
            </button>
          </div>

          <div className="md:w-1/2 flex flex-col md:items-end gap-8">
            <div className="flex flex-col gap-4 text-lg font-medium tracking-wide">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#clients" className="text-gray-400 hover:text-white transition-colors">Partners</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm font-mono tracking-wider">
          <p>© 2026 Nihce Solar Energy Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
