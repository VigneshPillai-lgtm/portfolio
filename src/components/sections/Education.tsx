import { motion } from "framer-motion";
import { GlowCard } from "../common/GlowCard";
import { GradientText } from "../common/GradientEffects";
import { BookOpen, Calendar } from "lucide-react";

const education = [
    {
        institution: "Kristu Jayanti (Deemed to be University)",
        qualification: "Under Graduate (BCA IoT)",
        year: "2027",
        score: "Aggregate: N/A",
        color: "purple" as const,
    },
    {
        institution: "Deeksha PU College (Kengeri)",
        qualification: "PUC / Higher Secondary",
        year: "2024",
        score: "495",
        color: "blue" as const,
    },
    {
        institution: "Sheth Vidya Mandhir English High School",
        qualification: "SSLC / CBSE",
        year: "2022",
        score: "392",
        color: "cyan" as const,
    },
];

export const Education = () => {
    return (
        <section id="education" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/2 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-6">
                        <BookOpen className="w-4 h-4" />
                        Education
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        Academic{" "}
                        <GradientText colors="from-blue-400 via-cyan-400 to-purple-500">
                            Journey
                        </GradientText>
                    </h2>
                    <p className="text-xl text-gray-400">Continuous learning and growth through education</p>
                </motion.div>

                {/* Timeline */}
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlowCard delay={index * 0.1} glowColor={edu.color} hoverable>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-gray-300 font-semibold text-lg mb-2">
                                            {edu.qualification}
                                        </p>
                                        {edu.score && (
                                            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10">
                                                <span className="text-gray-400 text-sm">Score: </span>
                                                <span className="text-white font-semibold text-sm">{edu.score}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5">
                                        <Calendar className="w-5 h-5 text-cyan-400" />
                                        <span className="font-mono font-semibold text-white">{edu.year}</span>
                                    </div>
                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
