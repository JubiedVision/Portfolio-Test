import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";
  const isProjectsPage = location === "/projects" || location.startsWith("/projects/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to handle navigation
  const navigateTo = (path: string) => {
    closeMobileMenu();
    
    // If it's an anchor link and we're on the home page, scroll to it
    if (path.startsWith('#') && isHomePage) {
      const element = document.querySelector(path);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <header className={`fixed top-0 w-full py-4 px-6 md:px-16 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-[#0F172A]/80" : ""
      }`}>
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-[#F1F5F9] flex items-center gap-2">
            <span className="text-[#06B6D4] text-2xl">&lt;</span>JE<span className="text-[#06B6D4] text-2xl">/&gt;</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-10">
            {isProjectsPage ? (
              // Only show Home and Projects on Projects page
              <>
                <a href="/" className="nav-link">Home</a>
                <a href="/projects" className="nav-link">Projects</a>
              </>
            ) : (
              // Show all nav items on other pages
              <>
                {isHomePage ? (
                  <a href="#about" className="nav-link">About</a>
                ) : (
                  <a href="/#about" className="nav-link">About</a>
                )}
                
                {isHomePage ? (
                  <a href="#portfolio" className="nav-link">Portfolio</a>
                ) : (
                  <a href="/#portfolio" className="nav-link">Portfolio</a>
                )}
                
                <a href="/projects" className="nav-link">Projects</a>
                
                {isHomePage ? (
                  <a href="#expertise" className="nav-link">Expertise</a>
                ) : (
                  <a href="/#expertise" className="nav-link">Expertise</a>
                )}
                
                {isHomePage ? (
                  <a href="#contact" className="nav-link">Contact</a>
                ) : (
                  <a href="/#contact" className="nav-link">Contact</a>
                )}
              </>
            )}
          </nav>
          
          <button 
            className="md:hidden text-[#F1F5F9]" 
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#0F172A]/95 z-40 md:hidden"
          >
            <div className="flex flex-col h-full items-center justify-center space-y-8 text-2xl">
              <button 
                className="absolute top-6 right-6 text-[#F1F5F9]" 
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {isProjectsPage ? (
                // Only show Home and Projects on Projects page mobile menu
                <>
                  <a href="/" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>Home</a>
                  <a href="/projects" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>Projects</a>
                </>
              ) : (
                // Show all nav items on other pages mobile menu
                <>
                  {isHomePage ? (
                    <a href="#about" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>About</a>
                  ) : (
                    <a href="/#about" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>About</a>
                  )}
                  
                  {isHomePage ? (
                    <a href="#portfolio" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>Portfolio</a>
                  ) : (
                    <a href="/#portfolio" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>Portfolio</a>
                  )}
                  
                  <a href="/projects" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>Projects</a>
                  
                  {isHomePage ? (
                    <a href="#expertise" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>Expertise</a>
                  ) : (
                    <a href="/#expertise" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>Expertise</a>
                  )}
                  
                  {isHomePage ? (
                    <a href="#contact" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>Contact</a>
                  ) : (
                    <a href="/#contact" className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors" onClick={closeMobileMenu}>Contact</a>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
