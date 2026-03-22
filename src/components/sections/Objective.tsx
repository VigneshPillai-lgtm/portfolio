import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GradientText } from "../common/GradientEffects";
import { Briefcase } from "lucide-react";

export const Objective = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                />
            </div>

            <div ref={ref} className="max-w-4xl mx-auto relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium">
                        <Briefcase className="w-4 h-4" />
                        About Me
                    </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl font-bold text-center mb-12"
                >
                    <GradientText colors="from-cyan-400 via-blue-400 to-purple-500">
                        Objective & Background
                    </GradientText>
                </motion.h2>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        Second-year{" "}
                        <span className="font-semibold text-cyan-400">BCA IoT</span> student at{" "}
                        <span className="font-semibold text-purple-400">Kristu Jayanti University</span>,
                        deeply passionate about building connected, intelligent systems that solve
                        real-world problems. I specialize in{" "}
                        <span className="font-semibold text-blue-400">ESP32 programming</span>, sensor
                        integration (DHT11, MQ series), and IoT protocols.
                    </p>

                    <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Core Skills",
                                items: ["ESP32", "Arduino", "Python", "C++"],
                            },
                            {
                                title: "Expertise Area",
                                items: ["IoT Systems", "Sensor Networks", "Embedded Systems"],
                            },
                            {
                                title: "Technical Foundation",
                                items: ["DSA", "Networking", "Hardware Programming"],
                            },
                        ].map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                            >
                                <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3">
                                    {section.title}
                                </h4>
                                <div className="space-y-2">
                                    {section.items.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2 text-gray-400"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-purple-400" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
