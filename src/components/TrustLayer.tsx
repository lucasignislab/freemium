import { motion } from "framer-motion";

const platformLogos = [
    {
        name: "Google Ads",
        svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M12 2L2 19.5h20L12 2z" fill="#FBBC04" />
                <path d="M12 2L2 19.5l4.5 2.5L16 8l-4-6z" fill="#4285F4" />
                <path d="M22 19.5L16 8l-2.5 4L19 19.5l3-0z" fill="#34A853" />
                <circle cx="6.5" cy="19.5" r="3" fill="#EA4335" />
            </svg>
        )
    },
    {
        name: "Meta Ads",
        svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1877F2">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
        )
    },
    {
        name: "TikTok Ads",
        svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" />
            </svg>
        )
    },
    {
        name: "Hotmart",
        svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F04E23">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
        )
    },
    {
        name: "Shopify",
        svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#96BF48">
                <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.035-.03-.066-.042-.1-.053l-.762 17.083zm-2.019-17.39c-.083-.027-.17-.04-.256-.04-.086 0-.385.121-.385.121s-.729-1.535-2.093-1.535c-.082 0-.168.009-.252.026C9.887 4.667 9.5 4 9.5 4c-2.478 0-3.68 3.099-4.053 4.675-.958.297-1.635.507-1.722.534C3.108 9.396 3.079 9.42 3.036 10L1 23.054l11.205 2.098.113-19.563z" />
            </svg>
        )
    }
];

export const TrustLayer = () => {
    return (
        <section className="py-12 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
            <div className="container-wide">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
                    Integrado com as maiores plataformas do mundo
                </p>

                {/* P0-3: Real platform logos with SVG icons */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mb-12">
                    {platformLogos.map((platform, i) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                        >
                            {platform.svg}
                            <span className="text-lg font-black tracking-tight text-brand-dark">
                                {platform.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* P0-4: Social Proof Text */}
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <p className="text-brand-dark font-bold text-lg">
                        +10.000 Anunciantes Protegidos
                    </p>
                    <p className="text-gray-500 text-sm">
                        Recuperando mais de R$ 2M em lucros evitados todos os meses.
                    </p>
                </div>
            </div>
        </section>
    );
};
