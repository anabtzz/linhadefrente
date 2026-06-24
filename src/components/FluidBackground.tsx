import { motion } from "framer-motion";

const FluidBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main fluid blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full fluid-blob fluid-blob-1 opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--fluid-1)) 0%, transparent 70%)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 100, 50, -50, 0],
          y: [0, -50, 100, 50, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full fluid-blob fluid-blob-2 opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(var(--fluid-2)) 0%, transparent 70%)",
          top: "20%",
          right: "-5%",
        }}
        animate={{
          x: [0, -80, 40, -40, 0],
          y: [0, 80, -40, 60, 0],
          scale: [1, 0.9, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full fluid-blob fluid-blob-3 opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--fluid-3)) 0%, transparent 70%)",
          bottom: "10%",
          left: "20%",
        }}
        animate={{
          x: [0, 60, -80, 40, 0],
          y: [0, -60, 40, -30, 0],
          scale: [1, 1.1, 0.85, 1.05, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full fluid-blob fluid-blob-4 opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--fluid-1)) 0%, transparent 70%)",
          bottom: "30%",
          right: "15%",
        }}
        animate={{
          x: [0, -40, 70, -60, 0],
          y: [0, 50, -50, 30, 0],
          scale: [1, 0.95, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional smaller accents */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 100, -100, 50, 0],
          y: [0, -80, 60, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-50 dark:opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(var(--background)) 80%)",
        }}
      />
    </div>
  );
};

export default FluidBackground;
