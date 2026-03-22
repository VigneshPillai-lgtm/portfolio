import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-cyan-500/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo / Brand */}
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2"
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">VP</span>
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white hidden sm:inline">
                        Vignesh
                    </span>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full px-8 py-3 border border-white/10">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                        >
                            {item.label}
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden sm:flex items-center gap-4">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm"
                    >
                        Get In Touch
                    </motion.a>
                </div>

                {/* Mobile menu button */}
                <motion.button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
                    )}
                </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={mobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg border-b border-white/10"
            >
                <div className="px-6 py-4 space-y-3">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium"
                        >
                            {item.label}
                        </a>
                    ))}
                    <motion.a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        whileHover={{ scale: 1.02 }}
                        className="block px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                        Get In Touch
                    </motion.a>
                </div>
            </motion.div>
        </motion.nav>
    );
};
