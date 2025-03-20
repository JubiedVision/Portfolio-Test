import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/data/portfolioItemsData";

type CategoryType = "all" | "uiux" | "ai" | "vibe";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>("all");

  const handleFilterClick = (filter: CategoryType) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#1E293B]/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
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
            className={`px-6 py-2 rounded-full border border-[#334155] bg-[#334155]/40 text-[#F1F5F9] transition-all ${activeFilter === "all" ? "bg-[#06B6D4] text-[#0F172A] border-[#06B6D4]" : ""}`}
            onClick={() => handleFilterClick("all")}
          >
            All Projects
          </button>
          <button 
            className={`px-6 py-2 rounded-full border border-[#334155] bg-[#334155]/40 text-[#F1F5F9] transition-all ${activeFilter === "uiux" ? "bg-[#06B6D4] text-[#0F172A] border-[#06B6D4]" : ""}`}
            onClick={() => handleFilterClick("uiux")}
          >
            UI/UX Design
          </button>
          <button 
            className={`px-6 py-2 rounded-full border border-[#334155] bg-[#334155]/40 text-[#F1F5F9] transition-all ${activeFilter === "ai" ? "bg-[#06B6D4] text-[#0F172A] border-[#06B6D4]" : ""}`}
            onClick={() => handleFilterClick("ai")}
          >
            AI Technology
          </button>
          <button 
            className={`px-6 py-2 rounded-full border border-[#334155] bg-[#334155]/40 text-[#F1F5F9] transition-all ${activeFilter === "vibe" ? "bg-[#06B6D4] text-[#0F172A] border-[#06B6D4]" : ""}`}
            onClick={() => handleFilterClick("vibe")}
          >
            Vibe Coding
          </button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              key={item.id}
              className="portfolio-card relative group"
            >
              <div className="overflow-hidden rounded-lg bg-[#334155]">
                <div className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105 flex items-center justify-center p-8">
                  <div className="text-6xl" role="img" aria-label={item.categoryLabel}>
                    {item.iconType}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className={`text-xs py-1 px-2 rounded
                      ${item.category === "uiux" ? "bg-[#06B6D4]/10 text-[#06B6D4]" : 
                      item.category === "ai" ? "bg-[#8B5CF6]/10 text-[#8B5CF6]" : 
                      "bg-[#06B6D4]/10 text-[#06B6D4]"}`}
                  >
                    {item.categoryLabel}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#06B6D4] transition-colors">{item.title}</h3>
                <p className="text-[#94A3B8]">{item.description}</p>
                <a href={item.link} className="mt-4 inline-flex items-center gap-1 text-[#06B6D4] font-medium">
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="px-8 py-3 rounded-lg border border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#0F172A] transition-all">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
