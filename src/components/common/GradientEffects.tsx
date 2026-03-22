import { motion } from "framer-motion";

interface AnimatedGlyphProps {
  text: string;
  className?: string;
  delayPerCharacter?: number;
}

export const AnimatedGlyph = ({
  text,
  className = "",
  delayPerCharacter = 0.05,
}: AnimatedGlyphProps) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * delayPerCharacter,
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowingBorder = ({ children, className = "" }: GlowingBorderProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
      <div className="relative bg-black rounded-lg">{children}</div>
    </div>
  );
};

interface GradientTextProps {
  children: string;
  className?: string;
  colors?: string;
}

export const GradientText = ({
  children,
  className = "",
  colors = "from-cyan-400 via-purple-400 to-pink-400",
}: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r ${colors} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};
