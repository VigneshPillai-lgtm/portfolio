import { motion } from "framer-motion";
import { Trophy, Star, ExternalLink } from "lucide-react";
import { GlowCard } from "../common/GlowCard";
import { GradientText } from "../common/GradientEffects";

export const Projects = () => {
  const achievements = [
    {
      title: "1st Place - InnoPitch",
      description: "Inter-collegiate fest organized by Kristu Jayanti University.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7376449023269908480/?rcm=ACoAAEJzb2gByD0h7K2hUGlSpNdodUHpug8iem4",
      color: "purple" as const,
      icon: Trophy,
    },
    {
      title: "1st Place - Innovation Mela",
      description:
        "Inter-college fest organized by CMR University and NASCOM foundation.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7428127171472420864/?rcm=ACoAAEJzb2gByD0h7K2hUGlSpNdodUHpug8iem4",
      color: "cyan" as const,
      icon: Trophy,
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-5xl md:text-7xl font-bold">
            Projects &{" "}
            <GradientText colors="from-cyan-400 via-purple-400 to-pink-400">
              Achievements
            </GradientText>
          </h2>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl">
            Recognized work and successful projects built with passion and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Featured project coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-25 group-hover:opacity-75 blur transition duration-1000 group-hover:duration-200 animate-pulse z-0" />
            <div className="relative bg-black rounded-3xl p-12 h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/0">
              <div className="text-center">
                <div className="mb-6 inline-block">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, linear: true }}
                  >
                    <Star className="w-16 h-16 text-cyan-400" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-gray-300 mb-2">
                  Coming Soon
                </h3>
                <p className="text-gray-500 text-sm">
                  Exciting new projects in development...
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements column */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <GlowCard
                  delay={0.2 + index * 0.1}
                  glowColor={achievement.color}
                  hoverable={true}
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                        View on LinkedIn
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </a>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10"
        >
          {[
            { number: "2", label: "Awards Won" },
            { number: "10+", label: "Projects Built" },
            { number: "100%", label: "Passion Delivered" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center py-8 px-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
