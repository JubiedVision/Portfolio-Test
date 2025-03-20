import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  
  useEffect(() => {
    // After 3.5 seconds, hide the animation
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Character stagger animation for the name
  const nameLetters = "JUBIED EMON".split("");
  
  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#0F172A] z-50"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Animated circles */}
            <motion.div
              className="absolute w-32 h-32 rounded-full border-4 border-[#06B6D4]/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1.5,
                transition: { duration: 1, ease: [0, 0.55, 0.45, 1] }
              }}
            />
            
            <motion.div
              className="absolute w-48 h-48 rounded-full border-2 border-[#06B6D4]/10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.6, 
                scale: 2,
                transition: { 
                  duration: 1.2, 
                  ease: [0, 0.55, 0.45, 1],
                  delay: 0.2
                }
              }}
            />
            
            {/* Logo animation */}
            <motion.div
              className="mb-8 z-10 text-[#06B6D4]"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ 
                scale: 1,
                rotate: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.3
                }
              }}
            >
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[#06B6D4]/10 blur-xl rounded-full animate-pulse-glow"></div>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative animate-float">
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM8 6C8 5.44772 8.44772 5 9 5H15C15.5523 5 16 5.44772 16 6V14C16 14.5523 15.5523 15 15 15H9C8.44772 15 8 14.5523 8 14V6ZM10 7V13H14V7H10ZM8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
            </motion.div>
            
            {/* Staggered text animation */}
            <div className="flex justify-center mb-4">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`text-2xl font-bold ${letter === ' ' ? 'mr-2' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.3,
                      delay: 0.6 + index * 0.05
                    }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            {/* Subtitle with typing effect */}
            <motion.div
              className="text-[#94A3B8] text-sm"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 1.5, duration: 0.5 }
              }}
            >
              <div className="flex items-center justify-center">
                <span>Designer</span>
                <span className="mx-2 text-[#06B6D4]">•</span>
                <span>Developer</span>
                <span className="mx-2 text-[#06B6D4]">•</span>
                <span>Creator</span>
              </div>
            </motion.div>
            
            {/* Loading bar */}
            <motion.div
              className="w-48 h-1 bg-[#1E293B] rounded-full mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 1.8, duration: 0.5 }
              }}
            >
              <motion.div
                className="h-full bg-[#06B6D4]"
                initial={{ width: 0 }}
                animate={{ 
                  width: "100%",
                  transition: { delay: 2, duration: 1.2 }
                }}
              />
            </motion.div>
            
            {/* Loading text */}
            <motion.div
              className="text-xs text-[#94A3B8] mt-2"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 2, duration: 0.5 }
              }}
            >
              <span>Welcome to my portfolio</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;