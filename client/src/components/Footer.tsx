const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-[#334155]/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-[#F1F5F9] flex items-center gap-2">
              <span className="text-[#06B6D4]">&lt;</span>JE<span className="text-[#06B6D4]">/&gt;</span>
            </a>
          </div>
          
          <div className="text-center md:text-right text-[#94A3B8]">
            <p>© {new Date().getFullYear()} Jubied Emon. All rights reserved.</p>
            <p className="text-sm">Designed & Built with 💙 in Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
