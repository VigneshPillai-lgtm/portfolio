import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { GradientText } from "../common/GradientEffects";

const contactMethods = [
    {
        icon: Mail,
        title: "Email",
        value: "24iota64@kristujayanti.com",
        href: "mailto:24iota64@kristujayanti.com",
        color: "from-cyan-500 to-blue-600",
        glowColor: "cyan",
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+91 7219439555",
        href: "tel:7219439555",
        color: "from-green-500 to-emerald-600",
        glowColor: "green",
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        value: "vignesh-pillai",
        href: "https://www.linkedin.com/in/vignesh-pillai-520446271/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHuzNuaMsSHOgJtsJiwKaTg%3D%3D",
        color: "from-blue-500 to-purple-600",
        glowColor: "blue",
        external: true,
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Bengaluru, 560084",
        href: "#",
        color: "from-purple-500 to-pink-600",
        glowColor: "purple",
    },
];

export const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-black relative overflow-hidden border-t border-white/10">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-pink-400 text-sm font-medium mb-6">
                        <Send className="w-4 h-4" />
                        Contact
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">
                        Let's{" "}
                        <GradientText colors="from-cyan-400 via-purple-400 to-pink-400">
                            Connect
                        </GradientText>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Open for opportunities, collaborations, and exciting conversations. 
                        Reach out and let's build something amazing together!
                    </p>
                </motion.div>

                {/* Contact cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        const isExternal = method.external;
                        
                        return (
                            <motion.a
                                key={index}
                                href={method.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                {/* Glowing border on hover */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500 z-0" />
                                
                                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col items-center text-center border border-white/10 hover:border-white/20 transition-all duration-300">
                                    {/* Icon */}
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${method.color} bg-opacity-10 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {method.title}
                                    </h3>

                                    {/* Value */}
                                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors break-all">
                                        {method.value}
                                    </p>

                                    {/* Hover indicator */}
                                    <div className="mt-4 pt-4 border-t border-white/10 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                                            {isExternal ? "Open ↗" : "Contact"}
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center pt-12 border-t border-white/10"
                >
                    <p className="text-gray-400 mb-6">
                        Prefer to discuss something specific? Let's have a conversation!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.location.href = "mailto:24iota64@kristujayanti.com"}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 glow"
                    >
                        Start a Conversation
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};
