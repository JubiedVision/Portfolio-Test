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
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#1E293B] relative shadow-[0_15px_40px_rgba(0,0,0,0.4)] border-2 border-[#334155]">
                <img 
                  src="/images/jubied-portrait.png" 
                  alt="Jubied Emon Portrait" 
                  className="w-full h-full object-cover transform scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-[#0F172A]/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-xl bg-[#1E293B] border-2 border-[#06B6D4]/30 shadow-[0_10px_25px_rgba(6,182,212,0.25)]">
                <div className="text-[#06B6D4] text-4xl font-bold">5+</div>
                <div className="text-[#94A3B8] text-sm font-medium">Years of Experience</div>
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
              <div className="text-center p-4 rounded-lg bg-[#1E293B]/50 border border-[#334155] hover:border-[#06B6D4]/30 transition-colors">
                <div className="text-4xl font-bold text-[#06B6D4] mb-2">50+</div>
                <div className="text-[#94A3B8] font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#1E293B]/50 border border-[#334155] hover:border-[#06B6D4]/30 transition-colors">
                <div className="text-4xl font-bold text-[#06B6D4] mb-2">30+</div>
                <div className="text-[#94A3B8] font-medium">Happy Clients</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#1E293B]/50 border border-[#334155] hover:border-[#06B6D4]/30 transition-colors">
                <div className="text-4xl font-bold text-[#06B6D4] mb-2">5+</div>
                <div className="text-[#94A3B8] font-medium">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#1E293B]/50 border border-[#334155] hover:border-[#06B6D4]/30 transition-colors">
                <div className="text-4xl font-bold text-[#06B6D4] mb-2">10+</div>
                <div className="text-[#94A3B8] font-medium">Awards Received</div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E293B] hover:bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] rounded-lg shadow-md transition-all duration-300 font-medium group"
            >
              Download my resume
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-y-0.5 transition-transform" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
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
