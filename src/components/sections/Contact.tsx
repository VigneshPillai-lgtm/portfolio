import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-black border-t border-white/10">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-500">
                        Open for opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.a
                        href="mailto:24iota64@kristujayanti.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                        <div className="p-4 rounded-full bg-blue-500/10 text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                        <p className="text-gray-400 text-sm">24iota64@kristujayanti.com</p>
                    </motion.a>

                    <motion.a
                        href="tel:7219439555"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                        <div className="p-4 rounded-full bg-green-500/10 text-green-500 mb-4 group-hover:scale-110 transition-transform">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                        <p className="text-gray-400 text-sm">7219439555</p>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/vignesh-pillai-520446271/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHuzNuaMsSHOgJtsJiwKaTg%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                        <div className="p-4 rounded-full bg-blue-600/10 text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                        <p className="text-gray-400 text-sm">vignesh-pillai</p>
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                        <div className="p-4 rounded-full bg-purple-500/10 text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                        <p className="text-gray-400 text-sm max-w-[200px]">
                            Bengaluru, 560084
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
