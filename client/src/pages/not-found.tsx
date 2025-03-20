import { motion } from "framer-motion";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg className="w-28 h-28 mx-auto mb-8 opacity-90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle className="fill-none stroke-[#06B6D4] stroke-[5] rounded-full" cx="50" cy="50" r="45" />
          <path className="fill-none stroke-[#06B6D4] stroke-[5] rounded-full" d="M35 35 L65 65" />
          <path className="fill-none stroke-[#06B6D4] stroke-[5] rounded-full" d="M65 35 L35 65" />
        </svg>

        <h1 className="text-9xl font-bold mb-6 bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] bg-clip-text text-transparent">404</h1>
        
        <h2 className="text-3xl font-semibold mb-4 text-white">Page Not Found</h2>
        
        <p className="text-[#94A3B8] mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/">
          <a className="inline-block bg-[#06B6D4] text-[#0F172A] px-8 py-3 rounded-lg font-medium transition-all hover:bg-[#0891B2] hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#06B6D4]/20">
            Back to Home
          </a>
        </Link>
      </motion.div>
    </div>
  );
}
