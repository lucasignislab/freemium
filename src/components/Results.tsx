import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { TrendingDown, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const Counter = ({ value, suffix = "", prefix = "", decimals = 0 }: { value: number, suffix?: string, prefix?: string, decimals?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const count = useSpring(0, {
        bounce: 0,
        duration: 2000,
    });

    const rounded = useTransform(count, (latest) => {
        return prefix + latest.toFixed(decimals).replace(".", ",") + suffix;
    });

    useEffect(() => {
        if (isInView) {
            count.set(value);
        } else {
            count.set(0);
        }
    }, [isInView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const stats = [
    {
        icon: <TrendingDown className="text-brand-green" />,
        value: 42,
        suffix: "%",
        prefix: "-",
        label: "Redução média no CPA",
        description: "Anunciantes param de pagar por cliques de bots e focam em humanos."
    },
    {
        icon: <ShieldCheck className="text-brand-yellow" />,
        value: 100,
        suffix: "%",
        label: "Proteção contra bots",
        description: "Nossa IA identifica e bloqueia fraudes em tempo real."
    },
    {
        icon: <Zap className="text-brand-green" />,
        value: 3.5,
        suffix: "x",
        decimals: 1,
        label: "Aumento no ROAS",
        description: "Budget liberado para escalar o que realmente converte."
    }
];

const resultsImages = [
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276381.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276382.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276383.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276384.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276385.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276386.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276387.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276388.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276389.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276390.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276391.webp",
    "https://ratoeiraadsoficial.com.br/wp-content/uploads/2025/09/Frame-1171276392.webp"
];

export const Results = () => {
    return (
        <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden relative">
            {/* P2-11: Sublte background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-brand-yellow)_0%,transparent_20%)] opacity-[0.03] pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center mb-20 text-center md:text-left">
                    <div className="flex-1 flex flex-col items-center md:items-start">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[28px] xs:text-4xl md:text-6xl font-black leading-tight mb-6"
                        >
                            RESULTADOS QUE <br />
                            <span className="text-brand-green">PAGAM</span> <br className="sm:hidden" /> A FERRAMENTA.
                        </motion.h2>
                        <p className="text-xl text-gray-500 max-w-xl">
                            Não é sobre software, é sobre lucro líquido. Veja como as maiores operações do Brasil estão blindando seu caixa.
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div className="bg-white p-8 rounded-modern shadow-2xl border-l-0 md:border-l-8 border-brand-yellow flex flex-col items-center md:items-start text-center md:text-left">
                            <p className="font-bold text-3xl mb-1">
                                <Counter value={1.2} suffix="M" prefix="R$ " decimals={1} />
                            </p>
                            <p className="text-sm text-gray-400 uppercase tracking-widest font-black">Investimento Protegido</p>
                        </div>
                        <div className="bg-brand-dark p-8 rounded-modern shadow-2xl text-white mt-4 md:mt-10 flex flex-col items-center md:items-start text-center md:text-left">
                            <p className="font-bold text-3xl mb-1 text-brand-green">
                                <Counter value={240} suffix="%" prefix="+" />
                            </p>
                            <p className="text-sm text-gray-400 uppercase tracking-widest font-black">Em Conversões Reais</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-modern border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto md:mx-0">
                                {stat.icon}
                            </div>
                            <h3 className="text-5xl font-black mb-2 tracking-tighter">
                                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} decimals={stat.decimals} />
                            </h3>
                            <p className="font-bold text-lg mb-4">{stat.label}</p>
                            <p className="text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Real Results Marquee */}
                <div className="relative mt-20">
                    <div className="flex overflow-hidden gap-6 py-8 mask-fade-edges">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="flex gap-6 shrink-0"
                        >
                            {[...resultsImages, ...resultsImages].map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt="Resultado Real Ratoeira"
                                    className="h-96 md:h-[450px] w-auto rounded-xl shadow-lg border border-gray-200"
                                />
                            ))}
                        </motion.div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                            Estes resultados são de quem já parou de perder dinheiro para o Google.
                        </p>
                    </div>
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
                        Quero blindar minha conta agora
                        <Zap className="ml-2 group-hover:scale-125 transition-transform text-brand-dark" size={20} />
                    </motion.button>
                    <p className="text-sm text-gray-400 mt-3 font-medium">Teste grátis por 14 dias · Sem compromisso</p>
                </motion.div>
            </div>
        </section>
    );
};
