import { motion } from 'motion/react';

const clients = [
  { name: "SunPower", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/SunPower_logo.svg/512px-SunPower_logo.svg.png" },
  { name: "Tesla Energy", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/512px-Tesla_Motors.svg.png" },
  { name: "Enphase", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Enphase_Energy_logo.svg/512px-Enphase_Energy_logo.svg.png" },
  { name: "SolarEdge", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/SolarEdge_logo.svg/512px-SolarEdge_logo.svg.png" },
  { name: "First Solar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/First_Solar_logo.svg/512px-First_Solar_logo.svg.png" },
  { name: "Canadian Solar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Canadian_Solar_logo.svg/512px-Canadian_Solar_logo.svg.png" },
  { name: "Jinko Solar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/JinkoSolar_logo.svg/512px-JinkoSolar_logo.svg.png" },
  { name: "Trina Solar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Trina_Solar_logo.svg/512px-Trina_Solar_logo.svg.png" }
];

export default function Clients() {
  return (
    <section id="clients" className="py-32 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h5 className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase mb-8">
                Partners
              </h5>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight text-white mb-12">
                <span className="font-serif italic text-gray-400">Trusted</span> by Leading<br/>
                Innovators in Energy.
              </h2>
              
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-200 transition-all w-fit"
              >
                Get Started
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed font-light mb-16"
            >
              We partner with forward-thinking manufacturers, grid operators, and technology brands shaping the future of renewable energy. Whether you're powering a single home or scaling a commercial grid, our partners rely on us to turn sunlight into sustainable power.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-70">
              {clients.map((client, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-12 max-w-full object-contain filter brightness-0 invert"
                    onError={(e) => {
                      // Fallback to text if image fails
                      (e.target as HTMLImageElement).style.display = 'none';
                      const span = document.createElement('span');
                      span.className = 'font-sans font-bold text-lg tracking-tight';
                      span.innerText = client.name;
                      (e.target as HTMLImageElement).parentElement?.appendChild(span);
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
