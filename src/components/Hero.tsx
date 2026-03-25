import { motion } from 'motion/react';
import Background3D from './Background3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden pt-20">
      {/* 3D Animated Background */}
      <Background3D />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col justify-between min-h-[80vh]">
        
        <div className="flex-grow flex flex-col justify-center mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-8"
          >
            / Scroll down
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-[100px] leading-[1.1] font-medium tracking-tight text-white max-w-5xl"
          >
            Powering the <br className="hidden sm:block" />
            <span className="font-serif italic text-gray-300">next generation</span> of <br className="hidden sm:block" />
            clean energy.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12"
          >
            <a 
              href="#contact" 
              className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-sm hover:bg-gray-200 transition-all"
            >
              Get in Touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a 
              href="#about" 
              className="text-white px-8 py-4 rounded-full font-medium text-sm border border-white/20 hover:bg-white/5 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pb-12 max-w-2xl"
        >
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-light">
            We help residential, commercial, and industrial clients transition to sustainable power through cutting-edge solar technology, expert installation, and intelligent energy management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
