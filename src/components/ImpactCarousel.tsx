import { ArrowLeftCircle, ArrowRightCircle, ShieldCheck } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definitions ---
interface ImpactSlide {
    id: number;
    title: string;
    description: string;
    bgImage: string;
}

const IMPACT_SLIDES: ImpactSlide[] = [
    {
        id: 1,
        title: "Você descobre o que realmente dá lucro",
        description: "Identifique as campanhas que enchem o caixa, não apenas as que geram cliques irrelevantes.",
        bgImage: "/assets/impact_card_bg_profit_1770916691471.png"
    },
    {
        id: 2,
        title: "Para de escalar campanhas erradas",
        description: "Corte o desperdício imediatamente e foque o orçamento onde o retorno é 100% real.",
        bgImage: "/assets/impact_card_bg_data_sec_1770916727213.png"
    },
    {
        id: 3,
        title: "Economiza orçamento com fraude bloqueada",
        description: "Proteção automática contra bots e cliques repetidos desde o primeiro segundo de ativação.",
        bgImage: "/assets/impact_card_bg_economy_1770916787535.png"
    },
    {
        id: 4,
        title: "Consegue otimizar com confiança",
        description: "Use dados precisos para ajustar lances e públicos sem medo de errar ou queimar verba.",
        bgImage: "/assets/impact_card_bg_optimization_1770916802323.png"
    },
    {
        id: 5,
        title: "Sai do achismo",
        description: "Decisões baseadas em lucro, ROI e margem real. Troque suposições por resultados no caixa.",
        bgImage: "/assets/impact_card_bg_profit_1770916691471.png" // Fallback using the first one
    }
];

// --- Embedded CSS for the 3D Cascade Logic ---
const CASCADE_CSS = `
.impact-carousel_container {
    position: relative;
    max-width: 1200px;
    height: 500px;
    margin: 0 auto;
    z-index: 20;
    user-select: none;
    touch-action: pan-y;
}

.impact-carousel_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0.3);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    z-index: 1;
}

.impact-carousel_item.now {
    transform: translateY(-50%) translateX(-50%) scale(1);
    opacity: 1;
    z-index: 10;
}

.impact-carousel_item.next {
    transform: translateY(-50%) translateX(20%) scale(0.7);
    opacity: 0.6;
    z-index: 5;
}

.impact-carousel_item.prev {
    transform: translateY(-50%) translateX(-120%) scale(0.7);
    opacity: 0.6;
    z-index: 5;
}

.impact-carousel_item.next2 {
    transform: translateY(-50%) translateX(60%) scale(0.4);
    opacity: 0.2;
    z-index: 2;
}

.impact-carousel_item.prev2 {
    transform: translateY(-50%) translateX(-160%) scale(0.4);
    opacity: 0.2;
    z-index: 2;
}

.impact-carousel_item:not(.now) {
    pointer-events: none;
    filter: blur(4px) grayscale(0.5);
}

@media (max-width: 768px) {
    .impact-carousel_container { height: 480px; }
    .impact-carousel_item { transform: translateY(-50%) translateX(-50%) scale(0.9); }
    .impact-carousel_item.now { transform: translateY(-50%) translateX(-50%) scale(1); }
    .impact-carousel_item.next { transform: translateY(-50%) translateX(10%) scale(0.65); }
    .impact-carousel_item.prev { transform: translateY(-50%) translateX(-110%) scale(0.65); }
    .impact-carousel_item.next2, .impact-carousel_item.prev2 { display: none; }
}
`;

const getSlideClasses = (index: number, activeIndex: number, total: number): string => {
    const diff = index - activeIndex;
    if (diff === 0) return 'now';
    if (diff === 1 || diff === -total + 1) return 'next';
    if (diff === 2 || diff === -total + 2) return 'next2';
    if (diff === -1 || diff === total - 1) return 'prev';
    if (diff === -2 || diff === total - 2) return 'prev2';
    return '';
};

export const ImpactCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = IMPACT_SLIDES.length;

    const navigate = useCallback((direction: 'next' | 'prev') => {
        setActiveIndex(current => {
            if (direction === 'next') return (current + 1) % total;
            return (current - 1 + total) % total;
        });
    }, [total]);

    useEffect(() => {
        const interval = setInterval(() => navigate('next'), 5000);
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
            <style dangerouslySetInnerHTML={{ __html: CASCADE_CSS }} />

            <div className="container-wide mb-16 relative z-10 text-center md:text-left">
                <div className="max-w-4xl flex flex-col items-center md:items-start mx-auto md:mx-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 text-brand-yellow font-black text-[10px] tracking-[0.2em] rounded-full mb-6 border border-brand-yellow/20"
                    >
                        <ShieldCheck size={12} />
                        IMPACTO REAL
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-tight mb-4">
                        O que muda de verdade <br />
                        <span className="text-brand-yellow italic">na sua prática:</span>
                    </h2>
                </div>
            </div>

            <div className="impact-carousel_container">
                <div className="relative h-full">
                    {IMPACT_SLIDES.map((slide, index) => {
                        const classes = getSlideClasses(index, activeIndex, total);
                        const isActive = classes === 'now';

                        return (
                            <div
                                key={slide.id}
                                className={`impact-carousel_item ${classes} w-[280px] xs:w-[320px] md:w-[600px] aspect-10/14 md:aspect-16/10 group`}
                            >
                                <div className="relative h-full w-full rounded-modern overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                    {/* Background Image */}
                                    <img
                                        src={slide.bgImage}
                                        alt={slide.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Technical Overlays - Legibility Mandate */}
                                    <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />

                                    {/* Content Container */}
                                    <div className="absolute inset-0 p-6 xs:p-8 md:p-12 flex flex-col justify-end items-center md:items-start text-center md:text-left">
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.5, delay: 0.3 }}
                                                >
                                                    <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-normal leading-[1.1]">
                                                        {slide.title}
                                                    </h3>
                                                    <p className="text-brand-gray-300 font-medium text-sm md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                                                        {slide.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Progressive Line */}
                                        <div className="absolute bottom-0 left-0 h-1 bg-brand-yellow w-0 group-hover:w-full transition-all duration-700" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Controls */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-8 z-30">
                    <button
                        onClick={() => navigate('prev')}
                        className="text-white/30 hover:text-brand-yellow transition-colors"
                    >
                        <ArrowLeftCircle size={40} strokeWidth={1} />
                    </button>
                    <div className="flex gap-2">
                        {IMPACT_SLIDES.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-brand-yellow w-8' : 'bg-white/20'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => navigate('next')}
                        className="text-white/30 hover:text-brand-yellow transition-colors"
                    >
                        <ArrowRightCircle size={40} strokeWidth={1} />
                    </button>
                </div>
            </div>

            <div className="mt-20 flex justify-center relative z-20">
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-accent uppercase text-lg tracking-tight"
                >
                    Teste Já - 14 dias grátis
                </motion.button>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 blur-[120px] pointer-events-none -z-1" />
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-brand-green/5 blur-[120px] pointer-events-none -z-1" />
        </section>
    );
};
