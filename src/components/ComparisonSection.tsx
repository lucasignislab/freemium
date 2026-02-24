import { motion } from "framer-motion";
import { Check, X, Zap, Target } from "lucide-react";
import raadsLogo from "../assets/raads-logo.png";
import filtrifyLogo from "../assets/filtrify-logo.png";
import clickdefenderLogo from "../assets/clickdefender-logo.png";
import gringasFlag from "../assets/gringas-flag.png";

const features = [
    {
        name: "Tracking Real de Conversões",
        description: "Cada venda atribuída ao clique correto. Não 75%. Quase 100%.",
    },
    {
        name: "Bloqueio Automático de Fraudes",
        description: "Bots e cliques de concorrentes bloqueados sem intervenção.",
    },
    {
        name: "Dashboard de Lucro Consolidado",
        description: "Lucro real, CPA, ROI e margem em uma tela. Sem planilha.",
    },
    {
        name: "Proteção de Pixel (Server-Side)",
        description: "Dados limpos chegam ao Google. Algoritmo aprende a converter.",
    },
    {
        name: "Suporte em Português, no Brasil",
        description: "De quem conhece o mercado de afiliado BR.",
    }
];

const competitors = [
    {
        name: "Ratoeira",
        color: "bg-brand-yellow",
        textColor: "text-brand-yellow",
        values: [true, true, true, true, true],
        highlight: true,
        theme: "gold"
    },
    {
        name: "",
        color: "bg-red-600",
        textColor: "text-red-500",
        values: [false, true, false, false, false],
        theme: "dark",
        icon: filtrifyLogo,
        blur: true
    },
    {
        name: "",
        color: "bg-blue-600",
        textColor: "text-blue-500",
        values: [false, true, false, false, false],
        theme: "dark",
        icon: clickdefenderLogo,
        blur: true,
        iconSize: 'h-28'
    },
    {
        name: "",
        color: "bg-gray-500",
        textColor: "text-gray-400",
        values: [true, false, true, false, false],
        theme: "muted",
        icon: gringasFlag,
        blur: false,
        iconSize: 'h-28'
    }
];

const ComparisonCard = ({ comp, idx }: { comp: typeof competitors[number]; idx: number }) => (
    <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        className={`relative rounded-modern overflow-hidden border shrink-0 w-[280px] snap-center md:w-auto md:snap-align-none ${comp.highlight
            ? 'border-brand-yellow/50 bg-brand-dark md:scale-105 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
            : comp.icon ? 'border-gray-300 bg-gray-200 shadow-inner' : 'border-gray-200 bg-gray-100/80 shadow-inner'
            }`}
    >
        {comp.highlight && (
            <div className="absolute top-0 left-0 right-0 bg-brand-yellow text-brand-dark text-[10px] font-black py-1 text-center uppercase tracking-widest">
                A Escolha Definitiva
            </div>
        )}

        <div className="h-[220px] p-8 pb-4 flex flex-col items-center justify-start text-center">
            <div className={`flex items-center justify-center mx-auto mb-6 h-28`}>
                {comp.highlight ? (
                    <img
                        src={raadsLogo}
                        alt="RAADS Logo"
                        className="h-10 w-auto object-contain"
                    />
                ) : comp.icon ? (
                    <img
                        src={comp.icon}
                        alt={`${comp.name} Logo`}
                        className={`${comp.iconSize || 'h-20'} w-auto object-contain ${comp.iconSize ? 'mix-blend-multiply' : ''} ${comp.blur ? 'blur-xs' : ''}`}
                    />
                ) : (
                    <Target className={comp.textColor} />
                )}
            </div>
            <div className="h-12 flex items-center justify-center">
                <h3 className={`text-xl font-black uppercase tracking-tighter ${comp.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {comp.name}
                </h3>
            </div>
        </div>

        <div className="px-4">
            {features.map((_feat, fIdx) => (
                <div key={fIdx} className={`h-28 md:h-24 py-4 md:py-0 flex flex-col md:flex-row items-center justify-center border-b gap-3 md:gap-4 ${comp.highlight ? 'border-white/10' : 'border-gray-100'}`}>
                    <span className={`md:hidden text-[11px] font-black uppercase tracking-widest text-center leading-tight max-w-[90%] ${comp.highlight ? 'text-white/90' : 'text-gray-500'}`}>
                        {_feat.name}
                    </span>
                    {comp.values[fIdx] ? (
                        <div className={`p-2 rounded-full ${comp.highlight ? 'bg-brand-yellow text-brand-dark' : 'bg-brand-green/10 text-brand-green'}`}>
                            <Check size={20} strokeWidth={3} />
                        </div>
                    ) : (
                        <div className={`p-2 rounded-full ${comp.highlight ? 'bg-red-500/20 text-red-500' : 'bg-red-500/10 text-red-500/50'}`}>
                            <X size={20} strokeWidth={3} />
                        </div>
                    )}
                </div>
            ))}
        </div>

        {comp.highlight && (
            <div className="p-8">
                <button className="w-full py-3 bg-brand-yellow text-brand-dark font-black text-xs rounded-sharp hover:scale-110 active:scale-95 transition-all uppercase tracking-widest shadow-lg shadow-brand-yellow/30">
                    EU QUERO A RATOEIRA
                </button>
            </div>
        )}
    </motion.div>
);

export const ComparisonSection = () => {
    return (
        <section className="py-24 bg-white text-brand-dark relative overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 text-brand-yellow font-black text-[10px] tracking-[0.2em] rounded-full mb-6 border border-brand-yellow/20"
                    >
                        <Zap size={12} />
                        POR QUE A RATOEIRA VENCE
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[1.3] mb-6 text-brand-dark">
                        Uma ferramenta. <br />
                        <span className="text-brand-dark underline decoration-brand-yellow decoration-4 underline-offset-8">Três problemas resolvidos.</span>
                    </h2>
                </div>

                {/* Desktop: grid layout */}
                <div className="hidden md:grid md:grid-cols-5 gap-4">
                    <div className="flex flex-col pt-[220px]">
                        {features.map((feature, i) => (
                            <div key={i} className="h-24 flex flex-col justify-center border-b border-gray-100">
                                <span className="text-sm font-black uppercase tracking-widest text-gray-400">{feature.name}</span>
                                <span className="text-[10px] text-gray-500 mt-1">{feature.description}</span>
                            </div>
                        ))}
                    </div>
                    {competitors.map((comp, idx) => (
                        <ComparisonCard key={idx} comp={comp} idx={idx} />
                    ))}
                </div>

                {/* Mobile: horizontal swipeable carousel */}
                <div className="md:hidden">
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 -mx-4 scrollbar-hide">
                        {[...competitors].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0)).map((comp, idx) => (
                            <ComparisonCard key={idx} comp={comp} idx={idx} />
                        ))}
                    </div>
                    <div className="flex justify-center gap-1.5 mt-4">
                        {competitors.map((_, idx) => (
                            <div
                                key={idx}
                                className="w-2 h-2 rounded-full bg-gray-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.05)_0%,transparent_70%)] pointer-events-none" />
        </section>
    );
};
