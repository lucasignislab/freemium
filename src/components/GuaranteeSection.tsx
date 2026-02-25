import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle } from "lucide-react";

export const GuaranteeSection = () => {
    return (
        <section className="py-24 bg-gray-50 text-brand-dark relative overflow-hidden">
            {/* Subtle Texture/Gradient Background */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,200,83,0.05)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,184,0,0.03)_0%,transparent_60%)] pointer-events-none" />

            <div className="container-wide relative z-10 px-4 md:px-8">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Left Column: Layered Cards Setup (No Brutalism, Elegant Overlap) */}
                    <div className="w-full lg:w-7/12 flex flex-col md:flex-row relative items-center md:items-stretch gap-6 md:gap-0">
                        {/* Main Guarantee Layer */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-white p-8 md:p-14 rounded-3xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-full md:w-[70%] z-10 relative overflow-hidden shrink-0"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                                <ShieldCheck size={160} className="text-brand-green" />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow text-brand-dark rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6">
                                    <ShieldCheck size={14} />
                                    <span>Proteção Total</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-6">
                                    Garantia <br /> <span className="text-brand-green italic">Incondicional</span>
                                </h2>

                                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                                    Teste a Ratoeira na prática. Se você não economizar em cliques fraudulentos ou achar que a ferramenta não é para você, basta solicitar o reembolso.
                                </p>

                                <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl">
                                    <p className="font-bold text-brand-dark text-sm">
                                        Devolvemos 100% do seu dinheiro. Sem letras miúdas.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Support Layer */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, x: 20 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                            className="bg-brand-dark text-white p-8 md:p-10 rounded-3xl border border-brand-yellow/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] w-full md:w-[50%] md:-ml-12 md:mt-24 z-20 relative group hover:shadow-[0_40px_80px_-15px_rgba(255,184,0,0.15)] transition-shadow duration-500 shrink-0"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                <MessageCircle size={100} className="text-brand-yellow" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-6 text-brand-yellow group-hover:scale-110 transition-transform duration-500">
                                    <MessageCircle size={24} />
                                </div>

                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-4 leading-none">
                                    Suporte <br /><span className="text-brand-yellow">Todos os Dias</span>
                                </h3>

                                <p className="text-gray-300 leading-relaxed font-medium text-sm">
                                    Nossa equipe está disponível <strong className="text-brand-green font-black">7 dias por semana</strong> para ajudar você a configurar integrações e escalar com segurança.
                                </p>

                                <div className="mt-6 pt-5 border-t border-white/10">
                                    <p className="text-[10px] md:text-xs text-brand-yellow font-bold uppercase tracking-widest">
                                        Você nunca estará sozinho
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Support Rat Image */}
                    <div className="w-full lg:w-5/12 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-sm lg:max-w-md pointer-events-none select-none"
                        >
                            {/* Decorative Glow Behind Image */}
                            <div className="absolute -inset-4 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />

                            <img
                                src="/assets/rato_suporte.png"
                                alt="Mascote Ratoeira no Suporte"
                                className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl group-hover:drop-shadow-[0_20px_40px_rgba(255,184,0,0.2)] transition-all"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
