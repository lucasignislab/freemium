import { motion } from "framer-motion";

const mentorStrips = [
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/mentores-01-1024x62.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/mentores-02-1024x64.webp"
];

export const ClientsCarousel = () => {
    return (
        <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container-wide mb-8">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400">
                        UTILIZAM A RATOEIRA
                    </h2>
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                </div>
            </div>

            <div className="relative flex overflow-hidden">
                {/* First Marquee Row */}
                <motion.div
                    animate={{
                        x: [0, -1024],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-12 whitespace-nowrap min-w-full"
                >
                    {[...mentorStrips, ...mentorStrips, ...mentorStrips].map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt="Mentores Ratoeira"
                            className="h-12 md:h-16 w-auto opacity-100 transition-all"
                        />
                    ))}
                </motion.div>
            </div>

            {/* Second Marquee Row (Reverse) */}
            <div className="relative flex overflow-hidden mt-8">
                <motion.div
                    animate={{
                        x: [-1024, 0],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-12 whitespace-nowrap min-w-full"
                >
                    {[...mentorStrips, ...mentorStrips, ...mentorStrips].map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt="Plataformas Ratoeira"
                            className="h-12 md:h-16 w-auto opacity-50 grayscale transition-all hover:opacity-100"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
