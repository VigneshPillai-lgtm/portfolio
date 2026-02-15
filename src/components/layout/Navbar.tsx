import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-black/80 backdrop-blur-md border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="text-xl font-medium tracking-tight text-white">
                    VIGNESH PILLAI
                </span>
                <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    <a href="#home" className="hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#about" className="hover:text-white transition-colors">
                        About
                    </a>
                    <a href="#skills" className="hover:text-white transition-colors">
                        Skills
                    </a>
                    <a href="#projects" className="hover:text-white transition-colors">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-blue-500 transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};
