import { motion } from "framer-motion";

const platformLogos = [
    {
        name: "Google Ads",
        icon: (
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg"
                alt="Google Ads"
                className="h-14 md:h-24 w-auto object-contain"
            />
        )
    },
    {
        name: "Meta Ads",
        isComingSoon: true,
        icon: (
            <img
                src="/assets/logometa.png"
                alt="Meta Ads"
                className="h-22 md:h-36 w-auto object-contain"
            />
        )
    },
    {
        name: "TikTok Ads",
        isComingSoon: true,
        icon: (
            <img
                src="/assets/tiktoklogo - Editado.png"
                alt="TikTok Ads"
                className="h-14 md:h-24 w-auto object-contain"
            />
        )
    },
    {
        name: "Kwai",
        isComingSoon: true,
        icon: (
            <img
                src="/assets/kwai.svg"
                alt="Kwai"
                className="h-14 md:h-24 w-auto object-contain"
            />
        )
    },
    {
        name: "WhatsApp",
        isComingSoon: true,
        icon: (
            <img
                src="/assets/logowhatsapp.png"
                alt="WhatsApp"
                className="h-14 md:h-24 w-auto object-contain"
            />
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

                {/* P0-3: Real platform logos with icons */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mb-12">
                    {platformLogos.map((platform, i) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex flex-col items-center gap-2 transition-all duration-300 ${platform.isComingSoon ? "grayscale opacity-30 scale-95" : "opacity-60 hover:opacity-100"
                                }`}
                        >
                            <div className="flex flex-col items-center">
                                <div className="h-24 md:h-40 flex items-center justify-center">
                                    <div className="flex items-center gap-2">
                                        {platform.icon}
                                    </div>
                                </div>
                                <div className="h-4 flex items-center justify-center mt-[-8px] md:mt-1">
                                    {platform.isComingSoon && (
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">
                                            Em breve
                                        </span>
                                    )}
                                </div>
                            </div>
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
