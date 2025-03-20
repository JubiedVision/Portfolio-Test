import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const phrases = [
  "UI/UX Designer",
  "AI Developer",
  "Creative Technologist",
  "Vibe Coder"
];

const TypingEffect = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 50 : (charIndex === phrases[phraseIndex].length ? 2000 : 100);
    
    const timer = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setText(phrases[phraseIndex].substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        // If deleted completely, move to next phrase
        if (charIndex === 1) {
          setIsDeleting(false);
          setPhraseIndex(prev => (prev + 1) % phrases.length);
        }
      } 
      // If typing
      else {
        setText(phrases[phraseIndex].substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        // If typed completely, start deleting after pause
        if (charIndex === phrases[phraseIndex].length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, charIndex === phrases[phraseIndex].length || charIndex === 0 ? pauseTime : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [phraseIndex, charIndex, isDeleting]);
  
  return (
    <div className="inline-block">
      <motion.h2 
        className="typing-text text-xl md:text-2xl lg:text-3xl font-medium text-[#94A3B8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>{text}</span>
        <span className="inline-block w-[3px] h-[1em] ml-1 bg-[#06B6D4] animate-[blink_0.75s_step-end_infinite]"></span>
      </motion.h2>
    </div>
  );
};

export default TypingEffect;
