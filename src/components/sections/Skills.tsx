import { motion } from "framer-motion";
import { Code, Cpu, Terminal, Wifi } from "lucide-react";

const skills = [
    {
        category: "Languages",
        items: ["C++", "Java", "C", "Python", "HTML", "Node.js"],
        icon: Code,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        category: "Hardware",
        items: ["ESP32", "Arduino", "Raspberry Pi"],
        icon: Cpu,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        category: "Sensors & IoT",
        items: ["DHT11", "MQ Series", "Ultrasonic", "Networking"],
        icon: Wifi,
        gradient: "from-orange-500 to-yellow-500",
    },
    {
        category: "Tools",
        items: ["VS Code", "Replit", "GitHub", "Wireshark", "ChatGPT"],
        icon: Terminal,
        gradient: "from-green-500 to-emerald-500",
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Technical Arsenal</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        A comprehensive toolkit for building connected solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className="group relative bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${skill.gradient} bg-opacity-20`}>
                                        <skill.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white">{skill.category}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/5 rounded-full border border-white/5 hover:text-white hover:border-white/20 transition-colors"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
