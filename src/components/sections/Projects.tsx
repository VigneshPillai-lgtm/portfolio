import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";

export const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-[#050505]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">Projects & Achievements</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/5 rounded-[2rem] p-10 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-500 flex items-center justify-center"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-20 transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700">
                            <Star className="w-40 h-40" />
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl font-bold text-gray-500 mb-2">Coming Soon</h3>
                            <p className="text-gray-600 text-sm">New project in the works...</p>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7376449023269908480/?rcm=ACoAAEJzb2gByD0h7K2hUGlSpNdodUHpug8iem4" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors group cursor-pointer"
                            >
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">1st Place - InnoPitch</h4>
                                        <p className="text-gray-400">Inter-collegiate fest organized by Kristu Jayanti University.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </a>

                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7428127171472420864/?rcm=ACoAAEJzb2gByD0h7K2hUGlSpNdodUHpug8iem4" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors group cursor-pointer"
                            >
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">1st Place - Innovation Mela</h4>
                                        <p className="text-gray-400">Inter-college fest organized by CMR University and NASCOM foundation.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
