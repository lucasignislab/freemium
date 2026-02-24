import { motion } from "framer-motion";
import { AlertTriangle, Ghost, EyeOff, ShieldX } from "lucide-react";
import { CardSpotlight } from "./ui/card-spotlight";

const pains = [
    {
        tag: "HEMORRAGIA INVISÍVEL",
        title: "Bots e Concorrentes Consumindo Seu Orçamento",
        description: "Até <span class='text-brand-dark font-black'>40% do seu tráfego</span> não é humano. Cada bot que clica drena orçamento e ainda ensina o Google a buscar mais gente que <span class='text-brand-dark font-black'>nunca vai comprar</span>.",
        image: "/assets/pains/dashboard_resumo.png",
        bullets: ["Saldo desaparece sem conversão real", "Métricas parecem boas, mas o caixa sangra", "Algoritmo otimizando para o perfil errado"]
    },
    {
        tag: "PONTO CEGO NO DADO",
        title: "Você Tem Pixel. Mas Não Tem Certeza.",
        description: "Ter pixel instalado <span class='text-brand-dark font-black'>não é ter rastreamento</span>. Se você está rastreando 60–75% das conversões, está escalando com base em <span class='text-brand-dark font-black'>dados errados</span> — sem perceber.",
        image: "/assets/pains/economizometro.png",
        bullets: ["Vendas reais que somem do painel", "Você não sabe qual criativo é realmente o campeão", "CPA irreal mascarando prejuízo real"]
    },
    {
        tag: "RISCO DA OPERAÇÃO",
        title: "Uma Suspensão Encerra o Que Você Construiu",
        description: "Cliques inválidos <span class='text-brand-dark font-black'>não passam despercebidos</span> pelo Google. Uma suspensão não apaga só o acesso — leva junto o pixel, o histórico e <span class='text-brand-dark font-black'>meses de aprendizado</span> do algoritmo.",
        image: "/assets/pains/ip_bloqueado.png",
        bullets: ["Operação pode parar do dia para a noite", "Histórico e inteligência do pixel perdidos", "Sem receita enquanto tenta recuperar o acesso"]
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
                    <h2 className="text-[28px] xs:text-4xl md:text-6xl font-black tracking-tighter leading-[1.1]">
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
                                className="flex-1 text-left flex flex-col items-start"
                            >
                                <span className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase mb-4 block">
                                    {pain.tag}
                                </span>
                                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">
                                    {pain.title}
                                </h3>
                                <p
                                    className="text-base sm:text-xl text-gray-500 mb-8 leading-relaxed max-w-[300px] xs:max-w-none"
                                    dangerouslySetInnerHTML={{ __html: pain.description }}
                                />
                                <div className="space-y-4 pt-4 border-t border-gray-100 w-full flex flex-col items-start">
                                    {pain.bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex gap-3 items-start justify-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wide text-left">{bullet}</p>
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
                                <div className="overflow-hidden rounded-modern shadow-2xl border-4 border-white">
                                    <img
                                        src={pain.image}
                                        alt={pain.title}
                                        className={`w-full h-auto ${(i === 0 || i === 1 || i === 2) ? 'scale-[1.3] origin-top-left' : ''}`}
                                    />
                                </div>
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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-32"
                >
                    <CardSpotlight className="p-10 md:p-16 bg-brand-dark rounded-modern text-white relative overflow-hidden border-none shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 blur-[100px] z-0" />
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h4 className="text-xl md:text-2xl font-black mb-8 text-brand-yellow uppercase tracking-tight">
                                "EU ACHEI QUE O PROBLEMA ERA O CRIATIVO..."
                            </h4>
                            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                                <p>
                                    Um afiliado que rodava R$8.000 por mês no Google Ads veio até nós achando que o problema era criativo. Ele já tinha testado 12 variações de anúncio. Já tinha trocado a oferta. Já tinha pausado e reativado campanhas mais vezes do que conseguia contar.
                                </p>
                                <p>
                                    Quando conectou a Ratoeira pela primeira vez, descobriu três coisas em menos de 24 horas: <strong className="text-white">29% das suas conversões nunca tinham sido registradas</strong>. Um concorrente direto estava clicando nos anúncios dele todos os dias. E o criativo que ele tinha pausado "por não performar" era, na verdade, o melhor da conta.
                                </p>
                                <p className="text-white font-black italic">
                                    O problema nunca tinha sido o criativo. Era que ele não conseguia ver o que estava acontecendo de verdade.
                                </p>
                            </div>
                        </div>
                    </CardSpotlight>
                </motion.div>
            </div>
        </section>
    );
};
