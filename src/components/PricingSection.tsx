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
    link?: string;
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
        icon: <Zap size={24} className="text-brand-green" />,
        link: "https://clkdmg.site/subscribe/a0fc08f9-b7ef-4572-9d60-e6393199563c"
    },
    {
        name: "Rato",
        price: "R$ 167",
        originalPrice: "R$ 187,00",
        discount: "11% NO MENSAL",
        period: "/mês",
        description: "A escolha favorita dos afiliados.",
        limits: [
            "E-Book de Estratégia Mensal",
            "50 Produtos Rastreados Simultaneamente",
            "5 com Conversão 100% Automática",
            "Integrações com Plataformas Ilimitadas",
            "3 Contas Google Ads Conectadas",
            "5 Links de Produtor com Rastreamento Automático"
        ],
        buttonText: "GARANTIR MEU ACESSO AGORA",
        highlight: false,
        customTag: "O MAIS ESCOLHIDO",
        icon: <Rocket size={24} className="text-brand-green" />,
        link: "https://clkdmg.site/subscribe/ratoeiraads-ratomensal"
    },
    {
        name: "Ratazana",
        price: "R$ 247",
        originalPrice: "R$ 297,00",
        discount: "17% NO MENSAL",
        period: "/mês",
        description: "Para grandes operações e agências.",
        limits: [
            "E-Book de Estratégia Mensal",
            "100 Ratoeiras (Produtos Simultâneos)",
            "50 Ratoeiras com Conversão Automática",
            "Plataformas Conectadas Ilimitadas",
            "10 Perfis do Google Conectados",
            "50 URLs de Produtor com Conversão Automática"
        ],
        buttonText: "GARANTIR MEU ACESSO AGORA",
        highlight: true,
        customTag: "PARA OPERAÇÕES MAIORES",
        icon: <Shield size={24} className="text-brand-dark" />,
        link: "https://clkdmg.site/subscribe/a0fc08d6-ae0a-4d89-9cb6-98bfc9763851"
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
            discount: "11% NO SEMESTRAL",
            link: "https://clkdmg.site/subscribe/a0fc08d6-bf5e-4475-963e-40960af2d577"
        } : p.name === "Rato" ? {
            price: "R$ 205",
            cents: ",80",
            originalPrice: "R$1.397,00",
            cashPrice: "por R$1.097,00 à vista",
            discount: "21% NO SEMESTRAL",
            link: "https://clkdmg.site/subscribe/ratoeiraads-ratosemestral"
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
            discount: "16% NO ANUAL",
            link: "https://clkdmg.site/subscribe/a0fc08d6-cfb7-4321-ab3b-01e729162465"
        } : p.name === "Rato" ? {
            price: "R$ 185",
            cents: ",85",
            originalPrice: "R$2.597,00",
            cashPrice: "por R$1.797,00 à vista",
            discount: "31% NO ANUAL",
            link: "https://clkdmg.site/subscribe/a0fe91e6-3880-48db-833d-e2db3576154d"
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
            className={`relative flex flex-col shrink-0 w-[280px] snap-center md:w-auto md:snap-align-none rounded-modern overflow-hidden border transition-all duration-300 self-stretch ${plan.highlight
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
                <div className="mb-6 flex-1">
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

                <div className="mt-8">
                    <a href={plan.link || "#pricing"} target={plan.link ? "_blank" : undefined} rel={plan.link ? "noopener noreferrer" : undefined}>
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

const ROICalculator = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 mx-auto max-w-4xl p-8 rounded-modern border border-brand-green/30 bg-white/5 backdrop-blur-sm relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src="/mascote.png" alt="Ratoeira Mascote" className="w-[120px] h-[120px] object-contain" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-200">
                        A conta é simples: se você investe <span className="text-white font-black">R$3.000</span> por mês em Google Ads e <span className="text-red-500 font-black">25%</span> vai para fraude — média do mercado — você está desperdiçando <span className="text-red-500 font-black underline decoration-2">R$750</span> por mês em cliques que nunca vão converter.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 bg-black/40 p-6 rounded-xl border border-white/5">
                        <div className="text-center">
                            <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Investimento Mensal</span>
                            <span className="text-2xl font-black text-white">R$ 3.000</span>
                        </div>
                        <span className="text-2xl font-black text-brand-green">×</span>
                        <div className="text-center">
                            <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Taxa de Fraude</span>
                            <span className="text-2xl font-black text-red-500">25%</span>
                        </div>
                        <span className="text-2xl font-black text-brand-green">=</span>
                        <div className="text-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                            <span className="block text-[10px] uppercase tracking-widest text-red-400 mb-1">Seu Desperdício</span>
                            <span className="text-2xl font-black text-red-500">R$ 750 / mês</span>
                        </div>
                    </div>
                </div>

                <div className="w-px h-32 bg-white/10 hidden md:block" />

                <div className="flex-1 text-center md:text-left pt-12">
                    <p className="text-lg font-bold text-brand-green mb-4">
                        O plano Rato custa R$ 167 por mês.
                        <span className="block text-white font-medium text-sm mt-1">Você recupera o investimento antes do fim do primeiro ciclo de cobrança.</span>
                    </p>
                    <p className="text-xl font-black text-white italic">
                        "Não é um custo. É a ferramenta que faz o seu orçamento atual render mais."
                    </p>
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
                        Escolha Seu <span className="text-brand-yellow italic">Nível de Proteção</span>
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

                <ROICalculator />

                {/* Shared Features Grid */}
                <div className="mt-24 pt-16 border-t border-white/10 max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                            O Que Você <span className="text-brand-yellow italic">Recebe</span>
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                            Recursos poderosos presentes em todos os planos da Ratoeira.
                        </p>
                    </div>

                    <div
                        onScroll={handleFeatureScroll}
                        className="flex md:grid overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 -mx-4 px-4 pb-8 md:pb-0 md:mx-0 md:px-0 md:grid-cols-3"
                    >
                        {[
                            {
                                category: "📊 Rastreamento e Conversão",
                                features: [
                                    { title: "Conversão 100% Automática", desc: "Seus eventos chegam no Google Ads sem atraso e sem erro manual." },
                                    { title: "Rastreamento Automático por URL de Produtor", desc: "Monitore vendas mesmo sem ter acesso direto à página de vendas." },
                                    { title: "Marcação Automática de Checkout", desc: "Identifique quem chegou na beira da compra e otimize seu funil." },
                                    { title: "Exportação de Dados de Conversão", desc: "Leve seus dados para onde precisar com exportação completa." },
                                    { title: "Construtor de UTM Avançado", desc: "Crie links profissionais rastreáveis em poucos segundos." }
                                ]
                            },
                            {
                                category: "🧠 Inteligência e Estratégia",
                                features: [
                                    { title: "E-Book de Estratégia Mensal", desc: "Conteúdo exclusivo sobre como escalar e proteger suas operações." },
                                    { title: "+70 Plataformas de Afiliados Integradas", desc: "Conecte com Hotmart, Kiwify, Braip e dezenas de outras gringas." },
                                    { title: "Relatórios Completos de Performance", desc: "Analise lucro real, CPA e ROI em um único dashboard profissional." },
                                    { title: "Histórico Completo de Acessos", desc: "Veja exatamente o caminho que cada cliente fez antes de comprar." }
                                ]
                            },
                            {
                                category: "🛡️ Proteção e Segurança",
                                features: [
                                    { title: "Bloqueio Automático de IPs Fraudulentos", desc: "Economize seu orçamento bloqueando cliques inválidos em tempo real." },
                                    { title: "Biblioteca de Bots Identificados", desc: "Nossa base de dados global protege você contra padrões já conhecidos." },
                                    { title: "Alertas de Atividade Suspeita em Tempo Real", desc: "Seja notificado no momento em que um ataque de fraude for detectado." }
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
                        * Cobrança recorrente. Cancele quando quiser. Sujeito à política de uso justo.
                    </p>
                </div>
            </div>
        </section>
    );
};
