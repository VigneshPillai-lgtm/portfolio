import { motion } from "framer-motion";
import { GradientText, AnimatedGlyph } from "../common/GradientEffects";
import { DecorativeBackground } from "../common/DecorativeBackground";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <DecorativeBackground />

      {/* Main content */}
      <div className="relative z-10 px-4 text-center max-w-5xl">
        {/* Animated title with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            <span className="block mb-4">
              <GradientText colors="from-cyan-400 via-blue-400 to-purple-500">
                Vignesh Pillai
              </GradientText>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with animated glyph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide">
            <AnimatedGlyph
              text="Creating Digital Experiences"
              delayPerCharacter={0.02}
            />
          </p>
          <p className="text-base md:text-lg text-gray-400 mt-4">
            Full Stack Developer × IoT Enthusiast × Problem Solver
          </p>
        </motion.div>

        {/* Glowing CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 glow"
          >
            Explore My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={scrollVariants}
          animate="animate"
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Scroll to explore
            </span>
            <ChevronDown className="w-5 h-5 text-cyan-400" />
          </div>
        </motion.div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(79, 172, 254, 0.05) 25%, rgba(79, 172, 254, 0.05) 26%, transparent 27%, transparent 74%, rgba(79, 172, 254, 0.05) 75%, rgba(79, 172, 254, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-5" />
    </section>
  );
};
