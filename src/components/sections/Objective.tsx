import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Objective = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-20 px-6 bg-black">
            <div
                ref={ref}
                className="max-w-4xl mx-auto text-center"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 mb-8"
                >
                    Objective
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-gray-400 leading-relaxed font-light"
                >
                    <p>
                        Second-year BCA IoT student at Kristu Jayanti University, experienced in{" "}
                        <span className="text-blue-400 font-normal">ESP32 programming</span>, sensor
                        integration (DHT11, MQ series), and IoT protocols. I have a basic
                        programming language understanding and a good foundation in DSA and networking.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
