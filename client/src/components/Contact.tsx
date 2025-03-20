import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      // Create form data object (Netlify expects form data, not JSON)
      const formEntries = new FormData();
      formEntries.append("form-name", "contact");
      Object.entries(formData).forEach(([key, value]) => {
        formEntries.append(key, value);
      });

      // Submit to Netlify Forms directly
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formEntries as any).toString(),
      });
      
      if (response.ok) {
        // Success handling
        setFormSubmitted(true);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#1E293B]/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-[#94A3B8] mb-8">
              Have a project in mind or want to discuss a potential collaboration? 
              Feel free to reach out - I'm always open to new opportunities.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#334155] p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#06B6D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:contact@jubiedemon.com" className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors">contact@jubiedemon.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#334155] p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#06B6D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-[#94A3B8]">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/jubied/" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon bg-[#334155] p-3 rounded-lg text-[#94A3B8] hover:text-[#06B6D4]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://x.com/EmonJubied" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon bg-[#334155] p-3 rounded-lg text-[#94A3B8] hover:text-[#06B6D4]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://dribbble.com/jubiedemon" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon bg-[#334155] p-3 rounded-lg text-[#94A3B8] hover:text-[#06B6D4]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.95.67 1.424-4.068 1.287-7.003 3.451-8.763 6.488-1.16-1.798-1.86-3.944-1.87-6.334zm4.281 7.717c1.532-2.807 4.142-4.838 7.85-6.076 1.011 2.619 1.857 5.33 2.525 8.119-.834.25-1.72.402-2.643.402-3.122 0-5.928-1.13-8.117-2.993l.385-.452zm10.778 1.519c-.636-2.636-1.44-5.213-2.396-7.702 1.945-.312 4.05-.33 6.322.118-.418 3.327-1.946 6.202-3.926 7.584z"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/jubiedemon" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon bg-[#334155] p-3 rounded-lg text-[#94A3B8] hover:text-[#06B6D4]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.facebook.com/jubiedemon/" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon bg-[#334155] p-3 rounded-lg text-[#94A3B8] hover:text-[#06B6D4]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {formSubmitted ? (
              <div className="bg-[#334155]/50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#06B6D4]">Thank You!</h3>
                <p className="text-lg mb-4">Your message has been received. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 rounded-lg bg-[#06B6D4] text-[#0F172A] font-medium transition-all hover:bg-[#06B6D4]/90"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                className="space-y-6" 
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#334155]/80 border border-[#1E293B] focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all outline-none" 
                    placeholder="Your Name" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#334155]/80 border border-[#1E293B] focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all outline-none" 
                    placeholder="Your Email" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#334155]/80 border border-[#1E293B] focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all outline-none" 
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={6} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#334155]/80 border border-[#1E293B] focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all outline-none" 
                    placeholder="Your Message" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 rounded-lg bg-[#06B6D4] text-[#0F172A] font-medium transition-all hover:bg-[#06B6D4]/90 hover:shadow-lg hover:shadow-[#06B6D4]/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
