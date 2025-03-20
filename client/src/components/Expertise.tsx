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
      period: "2023 - Present",
      title: "Lead UI/UX Designer",
      company: "TechVision Studios",
      description: "Leading design strategy for enterprise applications with focus on AI-augmented interfaces and accessibility."
    },
    {
      period: "2020 - 2023",
      title: "Senior Frontend Developer",
      company: "Innovate Solutions",
      description: "Developed responsive web applications with modern JavaScript frameworks and integrated AI components."
    },
    {
      period: "2018 - 2020",
      title: "UI Designer",
      company: "CreativeMinds Agency",
      description: "Created user interfaces for mobile applications and websites focusing on intuitive user experiences."
    },
    {
      period: "2017 - 2018",
      title: "Freelance Designer",
      company: "Self-employed",
      description: "Collaborated with various clients to deliver custom design solutions and web development projects."
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
            
            <div className="relative pl-8 pb-10">
              <div className="timeline-line"></div>
              
              {timeline.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative mb-10" 
                  key={index}
                >
                  <div className="timeline-dot"></div>
                  <div className="mb-1 text-[#06B6D4]">{item.period}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-[#94A3B8] mb-2">{item.company}</p>
                  <p className="text-[#94A3B8]">{item.description}</p>
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
