import { motion } from "framer-motion";

export const HowItWorksVideo = () => {
    return (
        <section id="how-it-works-video" className="py-24 bg-brand-dark relative overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 bg-brand-yellow/10 text-brand-yellow font-black text-xs tracking-widest rounded-full mb-6"
                    >
                        PASSO A PASSO
                    </motion.div>
                    <h2 className="text-[28px] xs:text-4xl md:text-6xl font-black tracking-tighter leading-[1.15] mb-6 text-white">
                        Como Funciona
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Veja na prática como a Ratoeira protege suas campanhas e recupera seu lucro em poucos passos simples.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto relative group"
                >
                    {/* Glow effect behind video */}
                    <div className="absolute -inset-4 bg-brand-yellow/20 rounded-4xl blur-3xl -z-10 group-hover:bg-brand-yellow/30 transition-colors duration-500" />

                    {/* Video Container */}
                    <div className="relative aspect-video bg-brand-dark rounded-2xl md:rounded-4xl border-4 md:border-8 border-white/5 shadow-2xl overflow-hidden">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/iG3RtYyQ8qI"
                            title="Como funciona a Ratoeira Ads"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
