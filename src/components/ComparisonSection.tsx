import { motion } from "framer-motion";
import { Check, X, Zap, Target } from "lucide-react";
import raadsLogo from "../assets/raads-logo.png";

const features = [
    {
        name: "Tracking Real de Conversões",
        description: "Precisão absoluta no rastreio de cada centavo.",
    },
    {
        name: "Bloqueio Automático de Bots",
        description: "Defesa inteligente sem intervenção manual.",
    },
    {
        name: "Dashboard de Lucro Consolidado",
        description: "Visão única de margem, ROI e caixa real.",
    },
    {
        name: "Proteção de Pixel (Server-Side)",
        description: "Evita que robôs sujem a inteligência da sua conta.",
    },
    {
        name: "Suporte VIP no Brasil",
        description: "Acompanhamento de quem entende o mercado local.",
    }
];

const competitors = [
    {
        name: "Filtrify",
        color: "bg-red-600",
        textColor: "text-red-500",
        values: [true, false, false, true, false],
        theme: "dark"
    },
    {
        name: "Click Defender",
        color: "bg-blue-600",
        textColor: "text-blue-500",
        values: [true, true, false, false, false],
        theme: "dark"
    },
    {
        name: "RAADS (Ratoeira)",
        color: "bg-brand-yellow",
        textColor: "text-brand-yellow",
        values: [true, true, true, true, true],
        highlight: true,
        theme: "gold"
    },
    {
        name: "Gringas",
        color: "bg-gray-500",
        textColor: "text-gray-400",
        values: [false, false, false, false, false],
        theme: "muted"
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
            : 'border-gray-200 bg-gray-100/80 shadow-inner'
            }`}
    >
        {comp.highlight && (
            <div className="absolute top-0 left-0 right-0 bg-brand-yellow text-brand-dark text-[10px] font-black py-1 text-center uppercase tracking-widest">
                A Escolha Definitiva
            </div>
        )}

        <div className="p-8 pb-4 text-center">
            <div className={`flex items-center justify-center mx-auto mb-4 ${comp.highlight ? 'h-16 w-auto' : 'w-12 h-12 rounded-sharp ' + comp.color + '/10'}`}>
                {comp.highlight ? (
                    <img
                        src={raadsLogo}
                        alt="RAADS Logo"
                        className="h-10 w-auto object-contain"
                    />
                ) : (
                    <Target className={comp.textColor} />
                )}
            </div>
            <h3 className={`text-xl font-black uppercase tracking-tighter ${comp.highlight ? 'text-white' : 'text-gray-900'}`}>
                {comp.name}
            </h3>
        </div>

        <div className="px-4">
            {features.map((_feat, fIdx) => (
                <div key={fIdx} className={`h-24 flex items-center justify-center border-b gap-4 ${comp.highlight ? 'border-white/10' : 'border-gray-100'}`}>
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
                    EU QUERO O RAADS
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
                        COMO ÉRAMOS, COMO SOMOS
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[1.3] mb-6 text-brand-dark">
                        Porque escolher a <span className="text-brand-yellow italic">Ratoeira</span> <br />
                        <span className="text-brand-dark">Os benefícios são infinitos</span>
                    </h2>
                </div>

                {/* Desktop: grid layout */}
                <div className="hidden md:grid md:grid-cols-5 gap-4">
                    <div className="flex flex-col pt-32">
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
