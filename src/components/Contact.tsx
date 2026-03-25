import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-5xl lg:text-7xl leading-[1.1] font-medium tracking-tight text-white mb-12"
        >
          Ready to <span className="font-serif italic text-gray-400">power</span> your future?
        </motion.h4>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <a 
            href="mailto:contact@nihcesolar.com" 
            className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all"
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
