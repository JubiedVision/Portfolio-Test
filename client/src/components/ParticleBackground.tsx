import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  element: HTMLDivElement;
  size: number;
  speedX: number;
  speedY: number;
  posX: number;
  posY: number;
}

const ParticleBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);
  
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particleCount = 30;
    
    // Clear existing particles
    container.innerHTML = '';
    particles.current = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 4 + 1;
      const element = document.createElement('div');
      
      element.style.position = 'absolute';
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.backgroundColor = 'rgba(6, 182, 212, 0.2)';
      element.style.borderRadius = '50%';
      element.style.top = `${Math.random() * 100}%`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      
      container.appendChild(element);
      
      particles.current.push({
        element,
        size,
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
        posX: parseFloat(element.style.left),
        posY: parseFloat(element.style.top)
      });
    }
    
    // Animation loop
    let animationFrameId: number;
    
    const animateParticles = () => {
      particles.current.forEach(particle => {
        // Update position
        particle.posX += particle.speedX;
        particle.posY += particle.speedY;
        
        // Boundary check
        if (particle.posX > 100) particle.posX = 0;
        if (particle.posX < 0) particle.posX = 100;
        if (particle.posY > 100) particle.posY = 0;
        if (particle.posY < 0) particle.posY = 100;
        
        // Update DOM
        particle.element.style.left = `${particle.posX}%`;
        particle.element.style.top = `${particle.posY}%`;
      });
      
      animationFrameId = requestAnimationFrame(animateParticles);
    };
    
    animateParticles();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <motion.div 
      ref={particlesRef}
      className="particles absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-hidden="true"
    ></motion.div>
  );
};

export default ParticleBackground;
