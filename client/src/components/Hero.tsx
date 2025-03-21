import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-6 py-16 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto text-center z-10 flex flex-col items-center justify-center max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center p-1 px-3 rounded-full bg-[#334155]/60 text-sm font-medium border border-[#334155] group hover:border-[#06B6D4] transition-all duration-300"
        >
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse-glow mr-2"></span>
            <span className="text-[#06B6D4] flex items-center">
              Based in Bangladesh 
              <svg className="ml-1.5 w-4 h-3" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <path fill="#006a4e" d="M0 0h640v480H0z"/>
                <circle cx="280" cy="240" r="160" fill="#f42a41"/>
              </svg>
            </span>
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
          className="mb-6 flex justify-center"
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
        
        {/* Tech stack icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10"
        >
          {["React", "AI", "TypeScript", "UI/UX", "Node.js"].map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-[#1E293B]/80 text-[#94A3B8] rounded-md text-sm font-medium border border-[#334155] flex items-center"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mr-2"></span>
              {tech}
            </span>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
        >
          <a 
            href="#portfolio" 
            className="relative px-6 py-3 rounded-lg group overflow-hidden w-full sm:w-auto text-center"
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
            className="relative px-6 py-3 rounded-lg group w-full sm:w-auto text-center"
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
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center w-full">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-[#94A3B8] mb-2">Scroll Down</span>
          <div className="w-7 h-10 border-2 border-[#334155] rounded-full flex justify-center items-start p-1">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Decorative gradient elements - contained within the section */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#06B6D4]/10 rounded-full filter blur-[100px] transform -translate-x-1/3 translate-y-1/4 z-0 opacity-60"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-[100px] transform translate-x-1/4 -translate-y-1/3 z-0 opacity-60"></div>
    </section>
  );
};

export default Hero;
