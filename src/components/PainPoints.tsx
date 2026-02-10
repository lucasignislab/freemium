import { motion } from "framer-motion";
import { AlertTriangle, Ghost, EyeOff, ShieldX } from "lucide-react";

const pains = [
    {
        tag: "DESPERDÍCIO OCULTO",
        title: "Cliques de Bots e Concorrência",
        description: "Até <span class='text-brand-dark font-black'>40% do seu orçamento</span> pode estar sendo drenado por robôs. Sem um escudo digital, você está <span class='text-brand-dark font-black'>pagando para ser atacado</span>.",
        image: "/assets/pains/pain-bots.png",
        bullets: ["Drenagem silenciosa de saldo", "Inflação artificial de métricas", "Perda de vantagem competitiva"]
    },
    {
        tag: "FALTA DE VISIBILIDADE",
        title: "Ponto Cego no Rastreamento",
        description: "O Google Ads não revela a jornada completa. Se você não sabe <span class='text-brand-dark font-black'>EXATAMENTE</span> qual clique gerou o lucro, você não está escalando, está <span class='text-brand-dark font-black'>apostando</span>.",
        image: "/assets/pains/pain-tracking.png",
        bullets: ["Vendas que não marcam no painel", "Dificuldade em identificar o criativo campeão", "CPA irreal mascarando prejuízo"]
    },
    {
        tag: "SEGURANÇA DO ATIVO",
        title: "Bloqueio de Contas por Fraude",
        description: "Atividades suspeitas e cliques inválidos são as principais causas de suspensão. Um bloqueio hoje pode significar o <span class='text-brand-dark font-black'>fim da sua operação</span> amanhã.",
        image: "/assets/pains/pain-ban.png",
        bullets: ["Risco constante de suspensão", "Perda de pixel e inteligência", "Interrupção imediata do fluxo de caixa"]
    }
];

export const PainPoints = () => {
    return (
        <section id="pain" className="py-24 bg-white overflow-hidden">
            <div className="container-wide">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1 bg-red-50 text-red-600 font-black text-xs tracking-widest rounded-full mb-6"
                    >
                        <AlertTriangle size={14} />
                        OBSTÁCULOS DA ESCALA
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                        POR QUE SUA ESCALA <br />
                        <span className="text-red-600 font-black">ESTÁ TRAVADA?</span>
                    </h2>
                </div>

                <div className="space-y-20">
                    {pains.map((pain, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex-1"
                            >
                                <span className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase mb-4 block">
                                    {pain.tag}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">
                                    {pain.title}
                                </h3>
                                <p
                                    className="text-xl text-gray-500 mb-8 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: pain.description }}
                                />
                                <div className="space-y-4 pt-4 border-t border-gray-100">
                                    {pain.bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex gap-3 items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">{bullet}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative"
                            >
                                <div className="absolute -inset-4 bg-red-100/30 rounded-full blur-3xl -z-10" />
                                <img
                                    src={pain.image}
                                    alt={pain.title}
                                    className="w-full h-auto rounded-modern shadow-2xl border-4 border-white"
                                />
                                {/* Overlay icon for impact */}
                                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-brand-dark rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white">
                                    {i === 0 && <Ghost className="text-red-500 w-10 h-10" />}
                                    {i === 1 && <EyeOff className="text-brand-yellow w-10 h-10" />}
                                    {i === 2 && <ShieldX className="text-red-500 w-10 h-10" />}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
