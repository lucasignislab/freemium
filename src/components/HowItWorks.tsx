import { motion } from "framer-motion";
import { Search, Filter, Rocket, ChevronRight, Activity } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Escaneamento de Elite",
        description: "Nossa IA analisa cada clique em tempo real, cruzando padrões de comportamento, IP e hardware para identificar bots e cliques maliciosos.",
        icon: <Search className="text-brand-green" size={32} />,
        detail: "99.8% de Precisão",
        color: "brand-green"
    },
    {
        number: "02",
        title: "Filtragem Inteligente",
        description: "O tráfego 'sujo' é isolado instantaneamente. Apenas usuários reais e com intenção de compra passam pelo nosso filtro de segurança.",
        icon: <Filter className="text-brand-yellow" size={32} />,
        detail: "Bloqueio em < 10ms",
        color: "brand-yellow"
    },
    {
        number: "03",
        title: "Escala Blindada",
        description: "Seu pixel recebe apenas dados limpos, otimizando a inteligência do Google Ads e reduzindo seu CPA drasticamente.",
        icon: <Rocket className="text-brand-green" size={32} />,
        detail: "ROI Maximizado",
        color: "brand-green"
    }
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white text-brand-dark overflow-hidden">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
                    <div className="max-w-2xl flex flex-col items-center md:items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green font-black text-[10px] tracking-[0.2em] rounded-full mb-6 border border-brand-green/20"
                        >
                            <Activity size={12} />
                            FLUXO DE PROTEÇÃO
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter uppercase">
                            Como a <span className="text-brand-yellow italic">Ratoeira</span> <br />
                            Constrói seu Lucro
                        </h2>
                    </div>
                    <p className="text-gray-500 font-medium text-lg max-w-sm border-l-0 md:border-l-2 border-brand-green pl-0 md:pl-6 md:mb-2 text-center md:text-left">
                        Um processo invisível que blinda sua conta enquanto você foca na escala.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line - Desktop Only */}
                    <div className="hidden md:block absolute top-[120px] left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-100 to-transparent z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="flex flex-col h-full items-center md:items-start text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-between mb-8 w-full">
                                        <div className="text-6xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500 hidden md:block">
                                            {step.number}
                                        </div>
                                        <div className={`p-4 bg-gray-50 border border-gray-100 rounded-sharp group-hover:border-${step.color}/40 transition-all duration-500 shadow-xl mx-auto md:mx-0`}>
                                            {step.icon}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                        <div className={`h-px w-8 bg-${step.color} hidden md:block`} />
                                        <span className={`text-${step.color} text-xs font-black tracking-widest uppercase`}>
                                            {step.detail}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter uppercase leading-none">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-500 leading-relaxed font-medium">
                                        {step.description}
                                    </p>

                                    {index < steps.length - 1 && (
                                        <div className="mt-8 flex md:hidden justify-center text-gray-200">
                                            <ChevronRight size={32} className="rotate-90" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
