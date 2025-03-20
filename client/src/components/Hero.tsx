import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <ParticleBackground />
      
      <div className="container mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block p-1 px-3 rounded-full bg-[#334155]/60 text-[#06B6D4] text-sm font-medium"
        >
          Based in Bangladesh
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Jubied Emon
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <TypingEffect />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10"
        >
          Creating seamless experiences at the intersection of design, artificial intelligence, and development.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#portfolio" 
            className="px-8 py-3 rounded-lg bg-[#06B6D4] text-[#0F172A] font-medium transition-all hover:bg-[#06B6D4]/90 hover:shadow-lg hover:shadow-[#06B6D4]/20"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-lg border border-[#334155] bg-[#334155]/40 hover:bg-[#334155]/60 font-medium transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
