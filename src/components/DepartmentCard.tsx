import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useTransition } from "@/context/TransitionContext";
import { useRef } from "react";

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  gradient: string;
  delay?: number;
}

const DepartmentCard = ({ title, description, icon: Icon, path, gradient, delay = 0 }: DepartmentCardProps) => {
  const { triggerTransition } = useTransition();
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  
  const iconX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const iconY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerTransition(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="glass-card-strong group h-full min-h-[320px] flex flex-col items-center text-center p-8 rounded-3xl relative overflow-hidden glow-card">
          {/* Icon container with parallax */}
          <motion.div
            className="w-20 h-20 mb-6 relative"
            style={{
              x: iconX,
              y: iconY,
              transformStyle: "preserve-3d",
              transform: "translateZ(50px)",
            }}
          >
            <div className={`w-20 h-20 rounded-2xl ${gradient} flex items-center justify-center glow-icon`}>
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className={`absolute inset-0 ${gradient} rounded-full blur-2xl opacity-30 -z-10`} />
          </motion.div>

          {/* Content */}
          <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow max-w-xs">
            {description}
          </p>

          {/* Arrow indicator */}
          <motion.div
            className="mt-6 flex items-center gap-2 text-primary font-medium text-sm"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <span>Explorar</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>

          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none">
            <div className={`w-full h-full ${gradient} rounded-bl-[120px] blur-xl`} />
          </div>
          
          {/* Bottom gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DepartmentCard;
