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
          className="mb-4 inline-flex items-center p-1 px-3 rounded-full bg-[#334155]/60 text-sm font-medium border border-[#334155] group hover:border-[#06B6D4] transition-all duration-300"
        >
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse-glow mr-2"></span>
            <span className="text-[#06B6D4]">Based in Bangladesh</span>
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="relative z-10">Jubied Emon</span>
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#06B6D4] to-[#06B6D4] mx-auto w-24 rounded-full opacity-70"></span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex justify-center"
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
            className="relative px-8 py-3 rounded-lg group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-[#06B6D4] group-hover:bg-[#0891b2] transition-colors duration-300"></span>
            <span className="relative flex items-center justify-center text-[#0F172A] font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
              </svg>
              View My Work
            </span>
          </a>
          <a 
            href="#contact" 
            className="relative px-8 py-3 rounded-lg group"
          >
            <span className="absolute inset-0 w-full h-full border border-[#334155] bg-[#334155]/40 rounded-lg group-hover:bg-[#334155]/60 transition-all duration-300"></span>
            <span className="relative flex items-center justify-center font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Get In Touch
            </span>
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-[#94A3B8] mb-2">Scroll Down</span>
        <div className="w-8 h-12 border-2 border-[#334155] rounded-full flex justify-center items-start p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 bg-[#06B6D4] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
