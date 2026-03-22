
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Heart } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/vignesh-pillai-520446271/",
            label: "LinkedIn",
            color: "hover:text-blue-400",
        },
        {
            icon: Github,
            href: "https://github.com/vignesh-pillai",
            label: "GitHub",
            color: "hover:text-gray-300",
        },
        {
            icon: Mail,
            href: "mailto:24iota64@kristujayanti.com",
            label: "Email",
            color: "hover:text-cyan-400",
        },
    ];

    return (
        <footer className="py-16 px-6 border-t border-white/10 bg-black relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Vignesh Pillai
                            </span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Full Stack Developer & IoT Enthusiast creating innovative digital solutions
                            with passion and precision.
                        </p>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="font-semibold text-white mb-4">Navigation</h4>
                        <div className="space-y-2">
                            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-gray-400 text-sm hover:text-cyan-400 transition-colors font-light"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="font-semibold text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 ${social.color}`}
                                        title={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                {/* Bottom section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
                >
                    <div className="flex items-center gap-2">
                        <span>&copy; {currentYear} Vignesh Pillai. All rights reserved.</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Made with</span>
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Heart className="w-4 h-4 text-pink-500" fill="currentColor" />
                        </motion.span>
                        <span>and</span>
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                            code
                        </span>
                    </div>
                </motion.div>

                {/* Scroll to top button */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 mx-auto block p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                    title="Scroll to top"
                >
                    <svg
                        className="w-5 h-5 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </motion.button>
            </div>
        </footer>
    );
};
