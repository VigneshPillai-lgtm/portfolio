import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16"
        >
            <div className="text-center z-10 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-6"
                >
                    Vignesh Pillai
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
                >
                    IoT Enthusiast & Full Stack Developer
                </motion.p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 pointer-events-none" />
        </section>
    );
};
