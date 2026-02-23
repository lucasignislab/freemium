import { motion } from "framer-motion";
import { Check, Zap, Shield, Rocket, ChevronDown, ChevronUp, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

type Period = "ANUAL" | "SEMESTRAL" | "MENSAL";

interface Plan {
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    period: string;
    description: string;
    features: string[];
    limits: string[];
    unavailable?: string[];
    buttonText: string;
    highlight: boolean;
    icon: React.ReactNode;
    installments?: string;
    cents?: string;
    cashPrice?: string;
    customTag?: string;
}

const periods: Period[] = ["ANUAL", "SEMESTRAL", "MENSAL"];

const MENSAL_PLANS: Plan[] = [
    {
        name: "Camundongo",
        price: "R$ 77",
        originalPrice: "R$ 97,00",
        discount: "21% DE DESCONTO",
        period: "/mês",
        description: "Para quem está começando a escalar.",
        features: [
            "E-Book Mensal",
            "+40 Plataformas conectadas",
            "Relatórios Diversos",
            "Marcação de Checkout",
            "Exportação de Conversão e Checkout",
            "Biblioteca de Ratos",
            "Notificação de Ratos",
            "Dados completos dos acessos à suas páginas",
            "Construtor de URL completo"
        ],
        limits: [
            "3 Ratoeiras (Produtos Simultâneos)",
            "2 Plataformas Conectadas (receber notificação)"
        ],
        unavailable: [
            "Conversão Automática",
            "Conversão Automática com URL de Produtor",
            "Bloqueio Automático de IP"
        ],
        buttonText: "GARANTIR MEU ACESSO",
        highlight: false,
        icon: <Zap size={24} className="text-brand-green" />
    },
    {
        name: "Rato",
        price: "R$ 167",
        originalPrice: "R$ 187,00",
        discount: "11% DE DESCONTO",
        period: "/mês",
        description: "A escolha favorita dos afiliados.",
        features: [
            "E-Book Mensal",
            "+40 Plataformas conectadas",
            "Relatórios Diversos",
            "Marcação de Checkout",
            "Exportação de Conversão e Checkout",
            "Biblioteca de Ratos",
            "Notificação de Ratos",
            "Dados completos dos acessos à suas páginas",
            "Construtor de URL completo",
            "Conversão Automática",
            "Conversão Automática com URL de Produtor",
            "Bloqueio Automático de IP"
        ],
        limits: [
            "50 Ratoeiras (Produtos Simultâneos)",
            "5 Ratoeiras com Conversão Automática",
            "Plataformas Conectadas Ilimitadas",
            "3 Perfis do Google Conectados",
            "5 URLs de Produtor com Conversão Automática"
        ],
        buttonText: "GARANTIR MEU ACESSO",
        highlight: false,
        customTag: "O MAIS ESCOLHIDO",
        icon: <Rocket size={24} className="text-brand-green" />
    },
    {
        name: "Ratazana",
        price: "R$ 247",
        originalPrice: "R$ 297,00",
        discount: "17% DE DESCONTO",
        period: "/mês",
        description: "Para grandes operações e agências.",
        features: [
            "E-Book Mensal",
            "+40 Plataformas conectadas",
            "Relatórios Diversos",
            "Marcação de Checkout",
            "Exportação de Conversão e Checkout",
            "Biblioteca de Ratos",
            "Notificação de Ratos",
            "Dados completos dos acessos à suas páginas",
            "Construtor de URL completo",
            "Conversão Automática",
            "Conversão Automática com URL de Produtor",
            "Bloqueio Automático de IP"
        ],
        limits: [
            "100 Ratoeiras (Produtos Simultâneos)",
            "50 Ratoeiras com Conversão Automática",
            "Plataformas Conectadas Ilimitadas",
            "10 Perfis do Google Conectados",
            "50 URLs de Produtor com Conversão Automática"
        ],
        buttonText: "GARANTIR MEU ACESSO",
        highlight: true,
        icon: <Shield size={24} className="text-brand-dark" />
    }
];

const pricingData: Record<Period, Plan[]> = {
    MENSAL: MENSAL_PLANS,
    SEMESTRAL: MENSAL_PLANS.filter(p => p.name !== "Camundongo").map(p => ({
        ...p,
        installments: "6X",
        ...(p.name === "Ratazana" ? {
            price: "R$ 149",
            cents: ",52",
            originalPrice: "R$897,00",
            cashPrice: "por R$797,00 à vista",
            discount: "11% DE DESCONTO"
        } : p.name === "Rato" ? {
            price: "R$ 205",
            cents: ",80",
            originalPrice: "R$1.397,00",
            cashPrice: "por R$1.097,00 à vista",
            discount: "21% DE DESCONTO"
        } : {})
    })),
    ANUAL: MENSAL_PLANS.filter(p => p.name !== "Camundongo").map(p => ({
        ...p,
        installments: "12X",
        ...(p.name === "Ratazana" ? {
            price: "R$ 139",
            cents: ",31",
            originalPrice: "R$1.597,00",
            cashPrice: "por R$1.347,00 à vista",
            discount: "16% DE DESCONTO"
        } : p.name === "Rato" ? {
            price: "R$ 185",
            cents: ",85",
            originalPrice: "R$2.597,00",
            cashPrice: "por R$1.797,00 à vista",
            discount: "31% DE DESCONTO"
        } : {})
    }))
};

const PricingCard = ({
    plan
}: {
    plan: Plan;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative flex flex-col shrink-0 w-[280px] snap-center md:w-auto md:snap-align-none rounded-modern overflow-hidden border transition-all duration-300 ${plan.highlight
                ? 'bg-white text-brand-dark border-brand-yellow shadow-[0_20px_50px_rgba(255,184,0,0.15)] md:scale-105 z-20'
                : 'bg-white/5 border-white/10 text-white'
                }`}
        >
            {(plan.highlight || plan.customTag) && (
                <div className={`absolute top-0 left-0 right-0 ${plan.highlight ? 'bg-brand-yellow text-brand-dark' : 'bg-brand-green text-dark'} text-[10px] font-black py-1 text-center uppercase tracking-widest rounded-t-modern`}>
                    {plan.customTag || "A Escolha Definitiva"}
                </div>
            )}

            <div className={`p-8 pb-4 text-center border-b border-gray-100/10 ${(plan.highlight || plan.customTag) ? 'pt-10' : ''}`}>
                <h3 className={`text-4xl font-black mb-6 ${plan.highlight ? 'text-brand-dark' : 'text-white'}`}>
                    {plan.name}
                </h3>

                <div className={`relative inline-block px-4 py-6 md:py-8 w-full ${plan.highlight ? 'bg-brand-yellow' : 'bg-gray-400/20'}`}>
                    <div className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 inline-block mb-2">
                        {plan.discount}
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        {plan.installments && (
                            <span className="text-base md:text-xl font-black">{plan.installments}</span>
                        )}
                        <span className="text-base md:text-xl font-black">R$</span>
                        <span className="text-5xl md:text-6xl font-black leading-none">{plan.price.replace("R$ ", "")}</span>
                        <div className="text-left">
                            <span className="text-sm md:text-lg font-black block leading-none">{plan.cents || ",00"}/mês</span>
                        </div>
                    </div>
                    <div className="text-xs line-through opacity-50 mt-2">de {plan.originalPrice}</div>
                    {plan.cashPrice && (
                        <div className="text-xs font-bold mt-1">{plan.cashPrice}</div>
                    )}
                    <div className="text-[10px] font-bold opacity-60 mt-2 uppercase tracking-tighter">
                        Com renovação automática
                    </div>
                </div>
            </div>

            <div className="p-8 pt-6 flex-1 flex-col flex">
                <div className="mb-6 min-h-[180px]">
                    <h4 className={`text-2xl font-black mb-4 ${plan.highlight ? 'text-brand-dark' : 'text-white'}`}>
                        Limites do Plano
                    </h4>
                    <div className="space-y-3">
                        {plan.limits?.map((limit: string, lIdx: number) => (
                            <div key={lIdx} className="flex items-start gap-3">
                                <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-brand-dark' : 'text-brand-green'}`} />
                                <span className="text-sm font-medium leading-tight">{limit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-100/10">
                    <h4 className={`text-2xl font-black mb-6 ${plan.highlight ? 'text-brand-dark' : 'text-white'}`}>
                        Funcionalidades
                    </h4>

                    <motion.div
                        animate={{ height: isExpanded ? 'auto' : '240px' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden relative"
                    >
                        <div className="space-y-3 mb-6">
                            {plan.features?.map((feature: string, fIdx: number) => (
                                <div key={fIdx} className="flex items-start gap-3">
                                    <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-brand-dark' : 'text-brand-green'}`} />
                                    <span className="text-sm font-medium leading-tight">{feature}</span>
                                </div>
                            ))}
                            {plan.unavailable?.map((feature: string, fIdx: number) => (
                                <div key={fIdx} className="flex items-start gap-3 opacity-40">
                                    <X size={16} className="mt-0.5 shrink-0 text-red-600" />
                                    <span className="text-sm font-medium leading-tight line-through text-red-600">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {!isExpanded && (
                            <div className={`absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t ${plan.highlight ? 'from-white' : 'from-[#1a1a1a]'} to-transparent pointer-events-none`} />
                        )}
                    </motion.div>
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center justify-center gap-2 mt-4 py-2 text-xs font-black uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                >
                    {isExpanded ? (
                        <>Fechar <ChevronUp size={16} /></>
                    ) : (
                        <>Leia mais <ChevronDown size={16} /></>
                    )}
                </button>

                <div className="mt-auto pt-8">
                    <a href="#solution">
                        <button
                            className={`w-full py-4 font-black text-xs rounded-modern uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl ${plan.highlight
                                ? 'bg-brand-green text-white'
                                : 'bg-brand-green text-white'
                                }`}
                        >
                            {plan.buttonText}
                        </button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export const PricingSection = () => {
    const [activePeriod, setActivePeriod] = useState<Period>("ANUAL");
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    }, [activePeriod]);

    return (
        <section id="pricing" className="py-24 bg-brand-dark text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(0,200,83,0.05)_0%,transparent_50%)] pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-8"
                    >
                        Conheça nossos <span className="text-brand-yellow italic">Planos</span>
                    </motion.h2>

                    <div className="flex justify-center mb-16">
                        <div className="relative p-1 bg-white/5 border border-white/10 rounded-full flex items-center">
                            {periods.map((period) => (
                                <button
                                    key={period}
                                    onClick={() => setActivePeriod(period)}
                                    className={`relative z-10 px-6 py-2 md:px-10 md:py-3 text-[10px] md:text-xs font-black tracking-widest uppercase transition-colors duration-300 ${activePeriod === period ? 'text-brand-dark' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {period}
                                    {activePeriod === period && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute inset-0 bg-brand-green rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div ref={sliderRef} className={`flex md:grid overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-8 mx-auto px-4 py-8 -my-8 md:items-start ${pricingData[activePeriod].length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-7xl'}`}>
                    {pricingData[activePeriod]?.map((plan) => (
                        <PricingCard
                            key={plan.name}
                            plan={plan}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-brand-yellow text-sm italic">
                        * Sujeito a política de uso justo. Cobrança recorrente. Cancele quando quiser.
                    </p>
                </div>
            </div>
        </section>
    );
};
