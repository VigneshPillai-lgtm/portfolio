import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverable?: boolean;
  glowColor?: "blue" | "purple" | "pink" | "cyan";
}

const glowColors = {
  blue: "from-cyan-500/20 to-blue-500/20",
  purple: "from-purple-500/20 to-pink-500/20",
  pink: "from-pink-500/20 to-red-500/20",
  cyan: "from-cyan-400/20 to-blue-400/20",
};

export const GlowCard = ({
  children,
  className = "",
  delay = 0,
  hoverable = true,
  glowColor = "blue",
}: GlowCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hoverable ? { y: -5 } : {}}
      className={`
        relative p-6 rounded-2xl
        bg-gradient-to-br ${glowColors[glowColor]}
        border border-white/10 hover:border-white/20
        backdrop-blur-sm
        ${hoverable ? "glow-shadow-hover cursor-pointer" : "glow-shadow"}
        transition-all duration-300
        ${className}
      `}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
