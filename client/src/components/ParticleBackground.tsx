import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  element: HTMLDivElement;
  size: number;
  speedX: number;
  speedY: number;
  posX: number;
  posY: number;
  opacity: number;
  color: string;
}

const ParticleBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);
  
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particleCount = window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 30 : 40; // Adjusted for device performance
    
    // Clear existing particles
    container.innerHTML = '';
    particles.current = [];
    
    // Colors array
    const colors = [
      'rgba(6, 182, 212, 0.3)', // cyan
      'rgba(6, 182, 212, 0.2)', // lighter cyan
      'rgba(124, 58, 237, 0.15)', // purple
      'rgba(255, 255, 255, 0.1)' // white
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 4 + 1; // Slightly smaller particles for better performance
      const element = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.5 + 0.15; // Reduced opacity range
      
      element.style.position = 'absolute';
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.backgroundColor = color;
      element.style.borderRadius = '50%';
      element.style.top = `${Math.random() * 95}%`; // Keep particles away from edges
      element.style.left = `${Math.random() * 95}%`; // Keep particles away from edges
      element.style.opacity = opacity.toString();
      element.style.boxShadow = size > 3 ? `0 0 ${size}px ${color}` : 'none';
      element.style.willChange = 'transform, opacity'; // Performance optimization
      
      container.appendChild(element);
      
      particles.current.push({
        element,
        size,
        speedX: (Math.random() * 0.1 - 0.05) * (window.innerWidth < 768 ? 0.7 : 1), // Slower on mobile
        speedY: (Math.random() * 0.1 - 0.05) * (window.innerWidth < 768 ? 0.7 : 1), // Slower on mobile
        posX: parseFloat(element.style.left),
        posY: parseFloat(element.style.top),
        opacity,
        color
      });
    }
    
    // Animation loop with performance optimizations
    let animationFrameId: number;
    let lastTime = 0;
    const fps = 30; // Target 30 FPS for smooth animation without too much CPU usage
    const fpsInterval = 1000 / fps;
    
    const animateParticles = (timestamp: number) => {
      const elapsed = timestamp - lastTime;
      
      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);
        
        particles.current.forEach(particle => {
          // Update position
          particle.posX += particle.speedX;
          particle.posY += particle.speedY;
          
          // Boundary check - keep particles contained
          if (particle.posX > 97) {
            particle.posX = 97;
            particle.speedX *= -1;
          }
          if (particle.posX < 1) {
            particle.posX = 1;
            particle.speedX *= -1;
          }
          if (particle.posY > 97) {
            particle.posY = 97;
            particle.speedY *= -1;
          }
          if (particle.posY < 1) {
            particle.posY = 1;
            particle.speedY *= -1;
          }
          
          // Subtle opacity fluctuation (lower frequency to save performance)
          if (Math.random() > 0.95) {
            particle.opacity += Math.random() * 0.01 - 0.005;
            if (particle.opacity > 0.7) particle.opacity = 0.7;
            if (particle.opacity < 0.1) particle.opacity = 0.1;
            particle.element.style.opacity = particle.opacity.toString();
          }
          
          // Update DOM efficiently using transforms instead of left/top
          particle.element.style.transform = `translate(${particle.posX}%, ${particle.posY}%)`;
        });
      }
      
      animationFrameId = requestAnimationFrame(animateParticles);
    };
    
    animationFrameId = requestAnimationFrame(animateParticles);
    
    // Handle window resize with debounce for better performance
    let resizeTimeout: number | null = null;
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      
      resizeTimeout = window.setTimeout(() => {
        if (container) {
          // Recreate particles on window resize
          cancelAnimationFrame(animationFrameId);
          container.innerHTML = '';
          particles.current = [];
          
          const newParticleCount = window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 30 : 40;
          
          for (let i = 0; i < newParticleCount; i++) {
            const size = Math.random() * 4 + 1;
            const element = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const opacity = Math.random() * 0.5 + 0.15;
            
            element.style.position = 'absolute';
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.backgroundColor = color;
            element.style.borderRadius = '50%';
            element.style.opacity = opacity.toString();
            element.style.boxShadow = size > 3 ? `0 0 ${size}px ${color}` : 'none';
            element.style.willChange = 'transform, opacity'; 
            
            // Set initial position using transform instead of top/left
            const posX = Math.random() * 95; // Keep particles away from edges
            const posY = Math.random() * 95; // Keep particles away from edges
            element.style.transform = `translate(${posX}%, ${posY}%)`;
            
            container.appendChild(element);
            
            particles.current.push({
              element,
              size,
              speedX: (Math.random() * 0.1 - 0.05) * (window.innerWidth < 768 ? 0.7 : 1),
              speedY: (Math.random() * 0.1 - 0.05) * (window.innerWidth < 768 ? 0.7 : 1),
              posX,
              posY,
              opacity,
              color
            });
          }
          
          lastTime = 0;
          animationFrameId = requestAnimationFrame(animateParticles);
        }
      }, 250); // Debounce time
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <motion.div 
      ref={particlesRef}
      className="particles absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-hidden="true"
    ></motion.div>
  );
};

export default ParticleBackground;
