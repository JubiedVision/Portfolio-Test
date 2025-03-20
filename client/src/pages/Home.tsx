import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (!target) return;
      
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.hash;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
