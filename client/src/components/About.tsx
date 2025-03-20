import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#334155]">
                {/* Placeholder for image */}
                <svg
                  className="w-full h-full text-[#94A3B8] p-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-5 -right-5 p-6 rounded-lg bg-[#334155]">
                <div className="text-[#06B6D4] text-4xl font-mono font-bold">5+</div>
                <div className="text-[#94A3B8] text-sm">Years of Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              About Me
              <span className="h-px w-16 bg-[#06B6D4]/30 inline-block"></span>
            </h2>
            
            <p className="text-lg text-[#94A3B8] mb-6">
              I'm a multidisciplinary designer and developer based in Bangladesh with a passion 
              for creating digital experiences that are both beautiful and functional. My unique approach 
              combines design thinking with technical expertise to deliver solutions that exceed expectations.
            </p>
            
            <p className="text-lg text-[#94A3B8] mb-8">
              With a foundation in UI/UX design and expertise in AI technologies, I specialize in what 
              I call "Vibe Coding" — creating digital products with a distinctive personality and feel 
              that resonates with users.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#06B6D4] mb-2">50+</div>
                <div className="text-[#94A3B8]">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#06B6D4] mb-2">30+</div>
                <div className="text-[#94A3B8]">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#06B6D4] mb-2">5+</div>
                <div className="text-[#94A3B8]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#06B6D4] mb-2">10+</div>
                <div className="text-[#94A3B8]">Awards Received</div>
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center gap-2 text-[#06B6D4] hover:text-[#06B6D4]/80 transition-colors font-medium">
              Download my resume
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
