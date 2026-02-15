import { motion } from "framer-motion";

const education = [
    {
        institution: "Kristu Jayanti (Deemed to be University)",
        qualification: "Under Graduate (BCA IoT)",
        year: "2027",
        score: "Aggregate: N/A",
    },
    {
        institution: "Deeksha PU College (Kengeri)",
        qualification: "PUC / Higher Secondary",
        year: "2024",
        score: "495",
    },
    {
        institution: "Sheth Vidya Mandhir English High School",
        qualification: "SSLC / CBSE",
        year: "2022",
        score: "392",
    },
];

export const Education = () => {
    return (
        <section id="education" className="py-20 px-6 bg-[#050505]">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic Details</h2>
                    <p className="text-gray-500 text-lg">My educational journey so far.</p>
                </div>

                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l border-white/10"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-xl md:text-2xl font-semibold text-white">
                                    {edu.institution}
                                </h3>
                                <span className="text-gray-500 font-mono text-sm md:text-base mt-1 md:mt-0">
                                    {edu.year}
                                </span>
                            </div>

                            <div className="text-gray-400 text-lg mb-1">{edu.qualification}</div>
                            {edu.score && (
                                <div className="text-gray-500 text-sm font-medium">
                                    Score: <span className="text-gray-300">{edu.score}</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
