import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/data/portfolioItemsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CategoryType = "all" | "uiux" | "ai" | "vibe";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleFilterClick = (filter: CategoryType) => {
    setActiveFilter(filter);
  };

  const filteredItems = portfolioItems
    .filter(item => 
      (activeFilter === "all" || item.category === activeFilter) &&
      (searchTerm === "" || 
       item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#F1F5F9]">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              My <span className="text-[#06B6D4]">Projects</span>
            </h1>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Browse my complete portfolio of projects across UI/UX Design, AI Technology, and Vibe Coding
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
          
          {filteredItems.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔎</div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-[#94A3B8]">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredItems.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
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
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects; 