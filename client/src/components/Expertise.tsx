import { motion } from "framer-motion";

const Expertise = () => {
  const skills = [
    { name: "UI/UX Design", percentage: 95 },
    { name: "Frontend Development", percentage: 90 },
    { name: "AI Implementation", percentage: 85 },
    { name: "Motion Design", percentage: 80 },
    { name: "Backend Development", percentage: 75 }
  ];

  const tools = [
    "Figma", "React", "TensorFlow", "Python", "Three.js", 
    "Node.js", "Adobe Creative Suite", "TypeScript", "GSAP", "Next.js"
  ];

  const timeline = [
    {
      period: "Mar 2023 - Present",
      title: "Co-Founder & Principal Design & Development",
      company: "UX Centerd • Self-employed",
      description: "UI design • UX design • Framer Website Development • Web Design • Mobile App Design",
      location: "Remote"
    },
    {
      period: "Jul 2022 - Apr 2023",
      title: "Associate Lead Generation Specialist & Web Researcher",
      company: "Abridge IT Firm • Full-time",
      description: "",
      duration: "10 mos"
    },
    {
      period: "Jun 2021 - Sep 2021",
      title: "Lead UI/UX Designer",
      company: "WAHLREICH • Full-time",
      description: "",
      location: "Germany",
      duration: "4 mos"
    },
    {
      period: "Jun 2019 - Apr 2020",
      title: "Web Researcher",
      company: "Tech Trump • Freelance",
      description: "",
      duration: "11 mos"
    }
  ];

  return (
    <section id="expertise" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            My Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#94A3B8] max-w-2xl mx-auto"
          >
            Specialized skills at the intersection of design, development, and AI
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            
            {skills.map((skill, index) => (
              <div className="mb-6" key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[#06B6D4]">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                    className="skill-progress"
                  ></motion.div>
                </div>
              </div>
            ))}
            
            <h3 className="text-2xl font-bold mt-12 mb-8">Tools & Technologies</h3>
            
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, index) => (
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  key={index} 
                  className="px-4 py-2 rounded-md bg-[#334155] text-[#94A3B8]"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Professional Journey</h3>
            
            <div className="relative pb-10 mt-12">
              {timeline.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative mb-16 last:mb-0" 
                  key={index}
                >
                  <div className="mb-2 text-[#06B6D4] font-semibold text-lg">{item.period}</div>
                  <h4 className="text-2xl font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-[#94A3B8] mb-2 font-medium">{item.company}</p>
                  {item.location && <p className="text-[#94A3B8] mb-2">{item.location}</p>}
                  {item.description && <p className="text-[#94A3B8] leading-relaxed">{item.description}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
