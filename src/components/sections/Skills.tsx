import { motion } from "framer-motion";
import { Code, Cpu, Terminal, Wifi, Zap } from "lucide-react";

interface SkillItem {
    name: string;
    description: string;
}

interface SkillCategory {
    category: string;
    description: string;
    items: SkillItem[];
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    glowColor: string;
    accentBorder: string;
}

const skills: SkillCategory[] = [
    {
        category: "Languages",
        description: "Core programming languages powering my projects",
        items: [
            { name: "C++", description: "Systems-level programming, competitive coding, and embedded firmware development" },
            { name: "Java", description: "Object-oriented applications, data mining systems, and enterprise solutions" },
            { name: "C", description: "Low-level hardware interfacing, microcontroller programming, and memory management" },
            { name: "Python", description: "Rapid prototyping, data analysis, automation scripts, and IoT dashboards" },
            { name: "HTML/CSS", description: "Semantic markup, responsive layouts, modern CSS animations, and web standards" },
            { name: "Node.js", description: "Server-side JavaScript, REST APIs, real-time data streaming, and backend services" },
        ],
        icon: Code,
        gradient: "from-blue-500 to-cyan-400",
        glowColor: "shadow-blue-500/20",
        accentBorder: "border-l-blue-400",
    },
    {
        category: "Hardware",
        description: "Microcontrollers & boards I build projects with",
        items: [
            { name: "ESP32", description: "Wi-Fi & Bluetooth enabled IoT prototyping with dual-core processing power" },
            { name: "Arduino", description: "Rapid hardware prototyping, sensor integration, and embedded control systems" },
            { name: "Raspberry Pi", description: "Edge computing, mini-servers, camera modules, and complex IoT gateways" },
        ],
        icon: Cpu,
        gradient: "from-purple-500 to-pink-500",
        glowColor: "shadow-purple-500/20",
        accentBorder: "border-l-purple-400",
    },
    {
        category: "Sensors & IoT",
        description: "Connected devices and environmental monitoring",
        items: [
            { name: "DHT11", description: "Temperature & humidity monitoring for smart environment systems" },
            { name: "MQ Series", description: "Gas & air quality detection for safety-critical alert systems" },
            { name: "Ultrasonic", description: "Distance measurement and obstacle detection for smart navigation" },
            { name: "Networking", description: "MQTT, HTTP protocols, and real-time IoT communication architectures" },
        ],
        icon: Wifi,
        gradient: "from-orange-500 to-yellow-400",
        glowColor: "shadow-orange-500/20",
        accentBorder: "border-l-orange-400",
    },
    {
        category: "Tools",
        description: "Development environment and productivity stack",
        items: [
            { name: "VS Code", description: "Primary IDE with custom extensions, debugging, and integrated terminal workflows" },
            { name: "Replit", description: "Cloud-based collaborative coding, quick prototyping, and live sharing" },
            { name: "GitHub", description: "Version control, CI/CD pipelines, open-source collaboration, and project management" },
            { name: "Wireshark", description: "Network packet analysis, protocol debugging, and security auditing" },
            { name: "ChatGPT", description: "AI-assisted development, code review, documentation, and problem-solving" },
        ],
        icon: Terminal,
        gradient: "from-green-500 to-emerald-400",
        glowColor: "shadow-green-500/20",
        accentBorder: "border-l-emerald-400",
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-6">
                        <Zap className="w-4 h-4" />
                        Skills & Expertise
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">
                        Technical{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-gradient">
                            Arsenal
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A comprehensive toolkit for building connected, intelligent solutions
                        — from hardware to cloud.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className={`group relative bg-white/[0.03] rounded-3xl p-8 md:p-10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl ${skill.glowColor}`}
                        >
                            {/* Hover gradient overlay */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700`} />

                            <div className="relative z-10">
                                {/* Category header */}
                                <div className="flex items-center gap-4 mb-2">
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${skill.gradient}`}>
                                        <skill.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider bg-white/[0.06] border border-white/10 text-gray-400 font-mono`}>
                                            {skill.items.length}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mb-6 ml-[3.5rem]">{skill.description}</p>

                                {/* Skill items — individual mini-cards */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                    {skill.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.4 }}
                                            className={`group/item relative rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 
                                                border-l-2 ${skill.accentBorder}
                                                hover:bg-white/[0.07] hover:border-white/[0.12] hover:scale-[1.02] 
                                                hover:shadow-lg ${skill.glowColor}
                                                transition-all duration-300 ease-out cursor-default`}
                                        >
                                            {/* Skill name — monospace for that technical feel */}
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${skill.gradient} shrink-0`} />
                                                <span className="text-white font-mono font-bold text-sm tracking-wide group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-gray-300 transition-all duration-300">
                                                    {item.name}
                                                </span>
                                            </div>
                                            {/* Description */}
                                            <p className="text-gray-400 text-xs leading-relaxed pl-3.5">
                                                {item.description}
                                            </p>
                                        </motion.div>
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
