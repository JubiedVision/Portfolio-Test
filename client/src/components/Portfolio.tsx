import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/data/portfolioItemsData";

type CategoryType = "all" | "uiux" | "ai" | "vibe";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>("all");
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;

  // Reset page to 0 when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeFilter]);

  const handleFilterClick = (filter: CategoryType) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const totalPages = Math.ceil(filteredItems.length / projectsPerPage);
  
  // Get current projects
  const currentProjects = filteredItems.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#1E293B]/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            My Portfolio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#94A3B8] max-w-2xl mx-auto"
          >
            Explore my recent projects across UI/UX Design, AI Technology, and Vibe Coding
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button 
            className={`px-6 py-2 rounded-full border transition-all ${
              activeFilter === "all" 
                ? "bg-[#06B6D4] text-[#0F172A] border-[#06B6D4] shadow-lg shadow-[#06B6D4]/30 font-bold transform scale-105" 
                : "border-[#334155] bg-[#334155]/40 text-[#F1F5F9] hover:bg-[#334155]/60"
            }`}
            onClick={() => handleFilterClick("all")}
          >
            All Projects
          </button>
          <button 
            className={`px-6 py-2 rounded-full border transition-all ${
              activeFilter === "uiux" 
                ? "bg-[#06B6D4] text-[#0F172A] border-[#06B6D4] shadow-lg shadow-[#06B6D4]/30 font-bold transform scale-105" 
                : "border-[#334155] bg-[#334155]/40 text-[#F1F5F9] hover:bg-[#334155]/60"
            }`}
            onClick={() => handleFilterClick("uiux")}
          >
            UI/UX Design
          </button>
          <button 
            className={`px-6 py-2 rounded-full border transition-all ${
              activeFilter === "ai" 
                ? "bg-[#06B6D4] text-[#0F172A] border-[#06B6D4] shadow-lg shadow-[#06B6D4]/30 font-bold transform scale-105" 
                : "border-[#334155] bg-[#334155]/40 text-[#F1F5F9] hover:bg-[#334155]/60"
            }`}
            onClick={() => handleFilterClick("ai")}
          >
            AI Technology
          </button>
          <button 
            className={`px-6 py-2 rounded-full border transition-all ${
              activeFilter === "vibe" 
                ? "bg-[#06B6D4] text-[#0F172A] border-[#06B6D4] shadow-lg shadow-[#06B6D4]/30 font-bold transform scale-105" 
                : "border-[#334155] bg-[#334155]/40 text-[#F1F5F9] hover:bg-[#334155]/60"
            }`}
            onClick={() => handleFilterClick("vibe")}
          >
            Vibe Coding
          </button>
        </motion.div>
        
        {/* Project Grid with Slideshow */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentProjects.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                key={item.id}
                className="portfolio-card relative group bg-[#1A2234] rounded-xl overflow-hidden shadow-xl hover:shadow-[#06B6D4]/10 transition-all duration-300"
              >
                <div className="overflow-hidden bg-[#334155] border-b border-[#06B6D4]/20">
                  <div className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center p-8">
                    <div className="text-8xl filter drop-shadow-lg" role="img" aria-label={item.categoryLabel}>
                      {item.iconType}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className={`text-xs py-1 px-3 rounded-full font-medium
                        ${item.category === "uiux" ? "bg-[#06B6D4]/10 text-[#06B6D4]" : 
                        item.category === "ai" ? "bg-[#8B5CF6]/10 text-[#8B5CF6]" : 
                        "bg-[#06B6D4]/10 text-[#06B6D4]"}`}
                    >
                      {item.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#06B6D4] transition-colors">{item.title}</h3>
                  <p className="text-[#94A3B8] mb-4">{item.description}</p>
                  <a href={item.link} className="mt-2 inline-flex items-center gap-2 text-[#06B6D4] font-medium hover:text-[#06B6D4]/80 transition-colors">
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 gap-4">
              <button 
                onClick={goToPrevPage}
                className="w-12 h-12 rounded-full bg-[#334155]/50 text-white flex items-center justify-center hover:bg-[#06B6D4] transition-all"
                aria-label="Previous projects"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentPage === index 
                        ? "bg-[#06B6D4] w-8" 
                        : "bg-[#334155]/50 hover:bg-[#334155]"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={goToNextPage}
                className="w-12 h-12 rounded-full bg-[#334155]/50 text-white flex items-center justify-center hover:bg-[#06B6D4] transition-all"
                aria-label="Next projects"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        <div className="text-center mt-20">
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href="/projects" 
            className="px-10 py-4 rounded-xl border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#0F172A] transition-all font-bold shadow-lg hover:shadow-[#06B6D4]/20 inline-flex items-center gap-2"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
