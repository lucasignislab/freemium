import { motion } from "framer-motion";
import { CheckCircle2, MousePointerClick } from "lucide-react";

const features = [
    {
        tag: "RASTREAMENTO DE PRECISÃO",
        title: "Cada venda rastreada. Cada clique identificado.",
        description: "Identifica <span class='text-brand-dark font-black'>quase 100% das conversões</span> — inclusive as que o Google não registrou; Mostra qual clique, campanha e criativo gerou cada venda real; Permite usar Smart Bidding com <span class='text-brand-dark font-black'>dados limpos</span> para escalar com segurança",
        image: "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/tracking-de-conversoes-de-verdade.webp"
    },
    {
        tag: "BLINDAGEM ANTI-FRAUDE",
        title: "Bots e concorrentes bloqueados. Orçamento preservado.",
        description: "Detecta bots e cliques de concorrentes antes de atingirem seu anúncio; <span class='text-brand-dark font-black'>Bloqueia IPs fraudulentos automaticamente</span>, sem intervenção manual; Orçamento 100% direcionado a tráfego humano desde o primeiro dia",
        image: "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/BLOQUEIO-DE-RATOS-E-BOTS.webp"
    },
    {
        tag: "VISÃO CONSOLIDADA",
        title: "Todas as métricas que importam. Uma tela só.",
        description: "Chega de abrir 4 plataformas para saber se está no lucro. <span class='text-brand-dark font-black'>Margem real, ROI, CPA e caixa</span> em um painel feito para quem anuncia no Google.",
        image: "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/UM-DASHBOARD-INCRIVEL.webp"
    }
];

export const ExclusiveTool = () => {
    return (
        <section id="features" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container-wide">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 bg-brand-yellow/10 text-brand-yellow font-black text-xs tracking-widest rounded-full mb-6"
                    >
                        A PRIMEIRA E MAIS COMPLETA FERRAMENTA BRASILEIRA PARA GOOGLE ADS
                    </motion.div>
                    <h2 className="text-[26px] xs:text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-[1.2] md:leading-[1.15]">
                        A única ferramenta brasileira <br className="sm:hidden" />
                        que rastreia, <span className="text-brand-yellow">protege</span> e dá <br className="sm:hidden" />
                        <span className="text-brand-green">visão total</span> da sua <br className="sm:hidden" />
                        operação no Google Ads.
                    </h2>
                </div>

                <div className="space-y-20">
                    {features.map((feature, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 text-left flex flex-col items-start"
                            >
                                <span className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase mb-4 block">
                                    {feature.tag}
                                </span>
                                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter uppercase">
                                    {feature.title}
                                </h3>
                                <div className="space-y-4">
                                    {feature.description.split(';').map((bullet, idx) => (
                                        <div key={idx} className="flex gap-3 items-start justify-start">
                                            <CheckCircle2 className="text-brand-green shrink-0 mt-1" size={20} />
                                            <p
                                                className="text-lg text-gray-600 font-medium text-left"
                                                dangerouslySetInnerHTML={{ __html: bullet.trim() }}
                                            />
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
                                <div className="absolute -inset-4 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto rounded-modern shadow-2xl border-4 border-white"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* P0-5: Intermediate CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <a href="#solution">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="btn-accent btn group"
                        >
                            <span>Testar Grátis — 7 Dias</span>
                            <MousePointerClick className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </a>
                    <p className="text-sm text-gray-400 mt-3 font-medium">Sem cartão de crédito · Cancele quando quiser</p>
                </motion.div>
            </div>
        </section>
    );
};
