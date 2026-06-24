import { useMemo } from "react";

interface Stars3DProps {
  scrollY?: number;
  reduced?: boolean;
}

interface Star {
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

/**
 * Lightweight CSS-only star field — replaces the previous Three.js implementation.
 * Avoids creating any WebGL contexts (the browser limit was being exceeded by
 * multiple concurrent <Canvas> instances and crashing the page).
 */
const Stars3D = ({ scrollY = 0, reduced = false }: Stars3DProps) => {
  const stars = useMemo<Star[]>(() => {
    const colors = ["#a855f7", "#7c3aed", "#22c55e"];
    const count = reduced ? 20 : 60;
    return Array.from({ length: count }, (_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1.5,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      color: colors[i % colors.length],
    }));
  }, [reduced]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full ldf-star"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.color,
            boxShadow: `0 0 ${s.size * 4}px ${s.color}`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default Stars3D;
