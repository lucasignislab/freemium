import { motion } from "framer-motion";
import { Check, Zap, Shield, Rocket } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

type Period = "ANUAL" | "SEMESTRAL" | "MENSAL";

interface Plan {
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    period: string;
    description: string;
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
        limits: [
            "E-Book Mensal",
            "3 Ratoeiras (Produtos Simultâneos)",
            "2 Plataformas Conectadas (receber notificação)",
            "Sem Conversão Automática",
            "Sem Conversão Automática com URL de Produtor",
            "Sem Bloqueio Automático de IP"
        ],
        unavailable: [],
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
        limits: [
            "E-Book Mensal",
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
        limits: [
            "E-Book Mensal",
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
    return (
        <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative flex flex-col h-full shrink-0 w-[280px] snap-center md:w-auto md:snap-align-none rounded-modern overflow-hidden border transition-all duration-300 ${plan.highlight
                ? 'bg-white text-brand-dark border-brand-yellow shadow-[0_20px_50px_rgba(255,184,0,0.15)] z-20 hover:scale-[1.02]'
                : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:scale-[1.01]'
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

            <div className="p-8 pt-6 flex-1 flex flex-col text-left">
                <div className="mb-6 min-h-[140px]">
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
    const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleFeatureScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const scrollLeft = container.scrollLeft;
        const width = container.offsetWidth;
        const index = Math.round(scrollLeft / width);
        if (index !== activeFeatureIdx) {
            setActiveFeatureIdx(index);
        }
    };

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

                <div ref={sliderRef} className={`flex md:grid overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-8 mx-auto px-4 py-8 -my-8 items-stretch ${pricingData[activePeriod].length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-7xl'}`}>
                    {pricingData[activePeriod]?.map((plan) => (
                        <PricingCard
                            key={plan.name}
                            plan={plan}
                        />
                    ))}
                </div>

                {/* Shared Features Grid */}
                <div className="mt-24 pt-16 border-t border-white/10 max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                            Funcionalidades <span className="text-brand-green italic">Inclusas</span>
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                            Recursos poderosos presentes em todos os planos da Ratoeira Ads.
                        </p>
                    </div>

                    <div
                        onScroll={handleFeatureScroll}
                        className="flex md:grid overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 -mx-4 px-4 pb-8 md:pb-0 md:mx-0 md:px-0 md:grid-cols-3"
                    >
                        {[
                            {
                                category: "📊 Rastreamento e Conversões",
                                features: [
                                    { title: "Envio automático de checkout e conversão", desc: "Seus eventos chegam no Google Ads sem atraso e sem erro manual" },
                                    { title: "Maior taxa de traqueamento do mercado", desc: "Nenhum concorrente consegue registrar tantas vendas como nós" },
                                    { title: "Conversão automática com URL do produtor", desc: "Traqueia e envia vendas automaticamente mesmo quando anunciando direto para URL do produtor" },
                                    { title: "Construtor de URL completo", desc: "Crie links prontos com UTMs, parâmetros e tracking em segundos." }
                                ]
                            },
                            {
                                category: "🧠 Inteligência e Controle",
                                features: [
                                    { title: "Dashboard financeiro completo", desc: "Veja lucro real, ROI e performance por campanha, produto e criativo." },
                                    { title: "Acesso a todos visitantes das suas páginas", desc: "Saiba exatamente quem clicou, de onde veio e como se comportou." }
                                ]
                            },
                            {
                                category: "🛡️ Proteção e Performance",
                                features: [
                                    { title: "Bloqueio automático de IP", desc: "Corta tráfego ruim e cliques inválidos antes de queimar seu orçamento." },
                                    { title: "Economizômetro", desc: "Nosso bloqueio automático de IP economiza centenas de reais do seu bolso" }
                                ]
                            }
                        ].map((cat, catIdx) => (
                            <div key={catIdx} className="shrink-0 w-[300px] snap-center md:w-auto md:snap-align-none">
                                <h4 className="text-xl font-black mb-8 pb-2 border-b border-brand-green/30 text-white flex items-center gap-3">
                                    {cat.category}
                                </h4>
                                <div className="space-y-6">
                                    {cat.features.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            viewport={{ once: true }}
                                            className="group"
                                        >
                                            <div className="flex items-start gap-3 mb-1">
                                                <div className="mt-1 bg-brand-green/20 p-1 rounded group-hover:bg-brand-green/30 transition-colors shrink-0">
                                                    <Check size={14} className="text-brand-green" />
                                                </div>
                                                <h5 className="font-bold text-white text-base leading-tight">{item.title}</h5>
                                            </div>
                                            <p className="text-gray-400 text-xs leading-relaxed pl-8">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Scroll Indicator Dots */}
                    <div className="flex justify-center gap-2 mt-8 md:hidden">
                        {[0, 1, 2].map((idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeFeatureIdx === idx ? 'bg-brand-green w-4' : 'bg-brand-green/20'
                                    }`}
                            />
                        ))}
                    </div>
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
