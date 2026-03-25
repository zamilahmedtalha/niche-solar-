import { motion } from 'motion/react';

export default function Agency() {
  return (
    <section id="about" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/4"
          >
            <h5 className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">
              Our Agency
            </h5>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="md:w-3/4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.2] font-medium tracking-tight text-white">
              We specialize in renewable energy for the modern world. From residential solar installations to large-scale commercial grids, we connect businesses and homes with the power that matters most.
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
