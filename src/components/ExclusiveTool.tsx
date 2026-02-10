import { motion } from "framer-motion";
import { CheckCircle2, MousePointerClick } from "lucide-react";

const features = [
    {
        tag: "TECNOLOGIA BRASILEIRA",
        title: "Tracking de conversões de verdade",
        description: "Identifica <span class='text-brand-dark font-black'>quase 100% das vendas</span>; Mostra qual clique gerou cada conversão; Permite usar CPA, Maximizar Conversões e <span class='text-brand-dark font-black'>escala segura</span>.",
        image: "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/tracking-de-conversoes-de-verdade.webp"
    },
    {
        tag: "ESCUDO ANTI-BOTS",
        title: "Anti-fraude automático",
        description: "Detecta bots e “ratos”; <span class='text-brand-dark font-black'>Bloqueia IPs fraudulentos automaticamente</span>; Reduz desperdício desde o primeiro dia.",
        image: "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/BLOQUEIO-DE-RATOS-E-BOTS.webp"
    },
    {
        tag: "GESTÃO SIMPLIFICADA",
        title: "Dashboard Consolidado Total",
        description: "Acompanhe seu <span class='text-brand-dark font-black'>lucro real</span>, ROI e métricas vitais em um só lugar, de forma clara e objetiva para quem anuncia no Google.",
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
                        PIONEIRISMO NACIONAL
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.15]">
                        A primeira ferramenta brasileira <br />
                        criada <span className="text-brand-green">exclusivamente</span> para <br />
                        afiliados de Google Ads.
                    </h2>
                </div>

                <div className="space-y-20">
                    {features.map((feature, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex-1"
                            >
                                <span className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase mb-4 block">
                                    {feature.tag}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                                    {feature.title}
                                </h3>
                                <div className="space-y-4">
                                    {feature.description.split(';').map((bullet, idx) => (
                                        <div key={idx} className="flex gap-3 items-start">
                                            <CheckCircle2 className="text-brand-green shrink-0 mt-1" size={20} />
                                            <p
                                                className="text-lg text-gray-600 font-medium"
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
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="btn-accent btn group"
                    >
                        Teste grátis por 14 dias
                        <MousePointerClick className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <p className="text-sm text-gray-400 mt-3 font-medium">Sem cartão de crédito · Cancele quando quiser</p>
                </motion.div>
            </div>
        </section>
    );
};
