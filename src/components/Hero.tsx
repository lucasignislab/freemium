import { motion } from "framer-motion";
import { MousePointerClick, AlertTriangle, Shield, BarChart3, Zap } from "lucide-react";

export const Hero = () => {
    return (
        <section className="pt-32 pb-20 overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-yellow/5 to-transparent -z-10" />

            <div className="container-wide">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Left side — Copy (55%) */}
                    <div className="flex-1 md:max-w-[55%] flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-yellow px-4 py-2 rounded-full font-bold text-sm mb-6 border border-brand-yellow/20"
                        >
                            <AlertTriangle size={16} />
                            CONTEÚDO PARA ANUNCIANTES NO GOOGLE ADS
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[28px] xs:text-4xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 uppercase"
                        >
                            VOCÊ ESTÁ <span className="text-brand-yellow">PAGANDO</span> <br className="sm:hidden" />
                            PARA OS BOTS <span className="underline decoration-brand-green underline-offset-8">ROUBAREM</span> <br className="sm:hidden" />
                            SEU DINHEIRO?
                        </motion.h1>

                        {/* P0-2: Micro-copy explicativo */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-sm font-bold text-brand-green uppercase tracking-widest mb-4"
                        >
                            Ferramenta brasileira de proteção e rastreamento para Google Ads
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 leading-relaxed max-w-[320px] xs:max-w-xl mx-auto md:mx-0"
                        >
                            Milhões de reais são perdidos todos os dias por anunciantes que não rastreiam 100% das vendas e permitem que cliques fraudulentos esgotem seu orçamento.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-8"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="btn-accent btn scale-110 group whitespace-nowrap"
                            >
                                Teste Já - 14 dias grátis
                                <MousePointerClick className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </motion.div>

                        {/* Quick value props */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-wrap gap-6 text-sm text-gray-500 justify-center md:justify-start"
                        >
                            <span className="flex items-center gap-1.5 font-semibold">
                                <Shield size={16} className="text-brand-green" /> Anti-Fraude
                            </span>
                            <span className="flex items-center gap-1.5 font-semibold">
                                <BarChart3 size={16} className="text-brand-yellow" /> Tracking Real
                            </span>
                            <span className="flex items-center gap-1.5 font-semibold">
                                <Zap size={16} className="text-brand-green" /> Dashboard Completo
                            </span>
                        </motion.div>
                    </div>

                    {/* Right side — Product Mockup (45%) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex-1 relative"
                    >
                        {/* Glow behind image */}
                        <div className="absolute -inset-8 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />

                        <div className="relative">
                            <img
                                src="https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/UM-DASHBOARD-INCRIVEL.webp"
                                alt="Dashboard Ratoeira Ads - Painel de proteção e rastreamento"
                                className="w-full h-auto rounded-modern shadow-2xl border-4 border-white"
                            />
                            <div className="absolute -bottom-4 -left-4 bg-brand-dark text-white px-4 py-2 rounded-modern shadow-xl flex items-center gap-2 text-sm font-bold z-10 transition-transform hover:scale-105">
                                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                                Proteção ativa 24/7
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
