import { motion } from "framer-motion";

interface SpotlightEffectProps {
  mousePosition: { x: number; y: number };
}

const SpotlightEffect = ({ mousePosition }: SpotlightEffectProps) => {
  return (
    <motion.div
      className="fixed h-screen w-screen top-0 left-0 pointer-events-none z-10"
      style={{
        background: `radial-gradient(
          circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(6, 182, 212, 0.06) 0%,
          transparent 25%
        )`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default SpotlightEffect;
