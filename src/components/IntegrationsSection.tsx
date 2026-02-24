import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    type LucideIcon,
    TrendingUp,
    Search,
    DeleteIcon,
    Globe,
    CreditCard,
    Target,
    Zap,
    Database,
    Share2,
    Activity,
    DollarSign,
    ShoppingCart,
    Layers,
    Shield,
    Smartphone,
    Package,
    BarChart3
} from 'lucide-react';

// NOTE: Placeholder for your custom Input component
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...props} className={`grow outline-none text-white bg-brand-dark/50 px-4 placeholder-gray-600 text-lg rounded-full border-gray-700 pr-10 pl-10 py-2 cursor-pointer border focus:border-brand-yellow/50 transition-colors ${props.className || ''}`} />
);

// --- Core Data Interface ---
export interface ChainItem {
    id: string | number;
    name: string;
    icon: LucideIcon;
    details?: string;
    logo?: string;
    bgClass?: string;
    imgClass?: string;
}

// --- Internal Animated Type ---
type AnimatedChainItem = ChainItem & {
    distanceFromCenter: number;
    originalIndex: number;
};

// --- Component Props Interfaces ---

interface CarouselItemProps {
    chain: AnimatedChainItem;
    side: 'left' | 'right';
}

interface ChainCarouselProps {
    items: ChainItem[];
    scrollSpeedMs?: number;
    visibleItemCount?: number;
    className?: string;
    onChainSelect?: (chainId: ChainItem['id'], chainName: string) => void;
}

// --- Helper Components ---

const CarouselItemCard: React.FC<CarouselItemProps> = ({ chain, side }) => {
    const { distanceFromCenter, id, name, details, logo, icon: FallbackIcon } = chain;
    const distance = Math.abs(distanceFromCenter);
    const opacity = 1 - distance / 4;
    const scale = 1 - distance * 0.1;
    const yOffset = distanceFromCenter * 90;
    const xOffset = side === 'left' ? -distance * 50 : distance * 50;

    const IconOrLogo = (
        <div className={`rounded-full border border-white/10 shadow-xl overflow-hidden flex items-center justify-center ${logo ? 'size-12 ' + (chain.bgClass || '') : 'size-12 p-2 bg-brand-dark'}`}>
            {logo ? (
                <img src={logo} alt={`${name} logo`} className={`size-full ${chain.imgClass || 'object-cover rounded-full'}`} />
            ) : (
                <FallbackIcon className="size-8 text-brand-yellow" />
            )}
        </div>
    );

    return (
        <motion.div
            key={id}
            className={`absolute flex items-center gap-4 px-6 py-3 ${side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
            animate={{
                opacity,
                scale,
                y: yOffset,
                x: xOffset,
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            {IconOrLogo}

            <div className={`flex flex-col mx-4 ${side === 'left' ? 'text-right' : 'text-left'}`}>
                <span className="text-md lg:text-lg font-bold text-white whitespace-nowrap">{name}</span>
                <span className="text-xs lg:text-sm text-gray-500">{details}</span>
            </div>
        </motion.div>
    );
};

// --- Main Component ---

const ChainCarousel: React.FC<ChainCarouselProps> = ({
    items,
    scrollSpeedMs = 1200,
    visibleItemCount = 9,
    className = '',
    onChainSelect,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const rightSectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(rightSectionRef, { margin: '-100px 0px -100px 0px' });
    const totalItems = items.length;

    useEffect(() => {
        if (isPaused || totalItems === 0 || searchTerm) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalItems);
        }, scrollSpeedMs);

        return () => clearInterval(interval);
    }, [isPaused, totalItems, scrollSpeedMs, searchTerm]);

    const getVisibleItems = useCallback(
        (): AnimatedChainItem[] => {
            const visibleItems: AnimatedChainItem[] = [];
            if (totalItems === 0) return [];

            const itemsToShow = visibleItemCount % 2 === 0 ? visibleItemCount + 1 : visibleItemCount;
            const half = Math.floor(itemsToShow / 2);

            for (let i = -half; i <= half; i++) {
                let index = currentIndex + i;
                while (index < 0) index += totalItems;
                while (index >= totalItems) index -= totalItems;

                visibleItems.push({
                    ...items[index],
                    originalIndex: index,
                    distanceFromCenter: i,
                });
            }
            return visibleItems;
        },
        [currentIndex, items, totalItems, visibleItemCount]
    );

    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [items, searchTerm]);

    const handleSelectChain = (id: ChainItem['id'], name: string) => {
        const index = items.findIndex((c) => c.id === id);
        if (index !== -1) {
            setCurrentIndex(index);
            setIsPaused(true);
            if (onChainSelect) {
                onChainSelect(id, name);
            }
        }
        setSearchTerm(name);
        setShowDropdown(false);
    };

    const currentItem = items[currentIndex];

    return (
        <div className={`md:space-y-12 ${className}`}>
            <div className='flex flex-col xl:flex-row max-w-7xl mx-auto px-4 md:px-8 gap-4 md:gap-12 justify-center items-center'>
                <motion.div
                    className="relative w-full max-w-md xl:max-w-2xl h-[450px] items-center justify-center hidden xl:flex -left-14"
                    onMouseEnter={() => !searchTerm && setIsPaused(true)}
                    onMouseLeave={() => !searchTerm && setIsPaused(false)}
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 0.8 }}
                >
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <div className="absolute top-0 h-1/4 w-full bg-linear-to-b from-brand-dark to-transparent"></div>
                        <div className="absolute bottom-0 h-1/4 w-full bg-linear-to-t from-brand-dark to-transparent"></div>
                    </div>

                    {getVisibleItems().map((chain) => (
                        <CarouselItemCard
                            key={`left-${chain.id}-${chain.originalIndex}`}
                            chain={chain}
                            side="left"
                        />
                    ))}
                </motion.div>

                <div className="flex flex-col text-center gap-4 max-w-md z-20">
                    {currentItem && (
                        <motion.div
                            key={currentItem.id}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center justify-center gap-0 mt-2 md:mt-4"
                        >
                            <div className={`shadow-[0_0_30px_rgba(255,184,0,0.3)] rounded-full overflow-hidden flex items-center justify-center ${currentItem.logo ? 'size-20 ' + (currentItem.bgClass || '') : 'size-20 p-4 bg-brand-yellow'}`}>
                                {currentItem.logo ? (
                                    <img src={currentItem.logo} alt={`${currentItem.name} logo`} className={`size-full ${currentItem.imgClass || 'object-cover rounded-full'}`} />
                                ) : (
                                    <currentItem.icon className="size-10 text-brand-dark" />
                                )}
                            </div>
                            <h3 className="text-2xl xl:text-3xl font-black text-white mt-4 uppercase tracking-tighter">
                                {currentItem.name}
                            </h3>
                            <p className="text-sm xl:text-lg text-brand-yellow font-bold uppercase tracking-widest">{currentItem.details}</p>
                        </motion.div>
                    )}

                    <div className="mt-3 md:mt-6 relative max-w-lg mx-auto xl:mx-0">
                        <div className="px-3 flex items-center relative">
                            <Input
                                type="text"
                                value={searchTerm}
                                placeholder="Buscar integração..."
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setSearchTerm(val);
                                    setShowDropdown(val.length > 0);
                                    if (val === '') setIsPaused(false);
                                }}
                                onFocus={() => {
                                    if (searchTerm.length > 0) setShowDropdown(true);
                                    setIsPaused(true);
                                }}
                                onBlur={() => {
                                    setTimeout(() => setShowDropdown(false), 200);
                                }}
                            />
                            <Search className="absolute text-gray-500 w-5 h-5 left-8 pointer-events-none" />
                            {searchTerm && (
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setShowDropdown(false);
                                        setIsPaused(false);
                                    }}
                                    className="absolute right-8 text-gray-500 hover:text-white"
                                >
                                    <DeleteIcon size={20} />
                                </button>
                            )}
                        </div>

                        {showDropdown && filteredItems.length > 0 && (
                            <div className="absolute left-0 right-0 mt-2 bg-brand-dark rounded-xl border border-white/10 z-30 max-h-60 overflow-y-auto shadow-2xl">
                                {filteredItems.slice(0, 10).map((chain) => (
                                    <div
                                        key={`dropdown-${chain.id}`}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            handleSelectChain(chain.id, chain.name);
                                        }}
                                        className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors duration-150 rounded-lg m-2 border border-transparent hover:border-white/5"
                                    >
                                        {chain.logo ? (
                                            <img src={chain.logo} alt={`${chain.name} logo`} className={`size-6 rounded-full ${chain.imgClass || 'object-cover'} ${chain.bgClass || ''}`} />
                                        ) : (
                                            <chain.icon size={20} className="text-brand-yellow" />
                                        )}
                                        <span className="text-white font-bold">{chain.name}</span>
                                        <span className="ml-auto text-[10px] text-gray-500 font-black uppercase tracking-widest">{chain.details}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <motion.div
                    ref={rightSectionRef}
                    className="relative w-full max-w-md xl:max-w-2xl h-[450px] hidden xl:flex items-center justify-center -right-14"
                    onMouseEnter={() => !searchTerm && setIsPaused(true)}
                    onMouseLeave={() => !searchTerm && setIsPaused(false)}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 0.8 }}
                >
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <div className="absolute top-0 h-1/4 w-full bg-linear-to-b from-brand-dark to-transparent"></div>
                        <div className="absolute bottom-0 h-1/4 w-full bg-linear-to-t from-brand-dark to-transparent"></div>
                    </div>

                    {getVisibleItems().map((chain) => (
                        <CarouselItemCard
                            key={`right-${chain.id}-${chain.originalIndex}`}
                            chain={chain}
                            side="right"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

const integrationItems: ChainItem[] = [
    { id: 1, name: "ClickBank", icon: DollarSign, details: "Affiliate Network", logo: "/assets/clickbank.svg" },
    { id: 2, name: "BuyGoods", icon: ShoppingCart, details: "Checkout & Affiliate", logo: "/assets/buygoods.png" },
    { id: 3, name: "MaxWeb", icon: TrendingUp, details: "CPA Network", logo: "/assets/maxweb.png" },
    { id: 4, name: "DrCash", icon: Activity, details: "Nutra CPA", logo: "/assets/drcash.png" },
    { id: 5, name: "SmartAdv", icon: Zap, details: "Performance Marketing", logo: "/assets/smartadv_logo.png" },
    { id: 6, name: "GuruMedia", icon: BarChart3, details: "Affiliate Network", logo: "/assets/gurumedia.png" },
    { id: 7, name: "Digistore24", icon: Globe, details: "Global Marketplace", logo: "/assets/digistore.png" },
    { id: 8, name: "AdCombo", icon: Target, details: "CPA Network", logo: "/assets/AdCombo-logo.png" },
    { id: 9, name: "MediaScalers", icon: Layers, details: "Media Buying", logo: "/assets/mediascalers.png" },
    { id: 10, name: "TerraLeads", icon: Globe, details: "CPA Network", logo: "/assets/terraleads.png" },
    { id: 11, name: "Braip", icon: TrendingUp, details: "Produtos Físicos", logo: "/assets/braip.webp" },
    { id: 12, name: "Webvork", icon: Shield, details: "Nutra CPA", logo: "/assets/webvork.png" },
    { id: 13, name: "TrafficLight", icon: Activity, details: "CPA Network", logo: "/assets/traffic_light.png" },
    { id: 14, name: "LemonAd", icon: Zap, details: "Performance Marketing", logo: "/assets/lemonad.png" },
    { id: 15, name: "CartPanda", icon: ShoppingCart, details: "Checkout & E-commerce", logo: "/assets/cartpanda.png" },
    { id: 16, name: "SmashLoud", icon: BarChart3, details: "Affiliate Network", logo: "/assets/smashloud.png" },
    { id: 17, name: "LeadBit", icon: Target, details: "Lead Generation", logo: "/assets/leadbeat.png" },
    { id: 18, name: "BlitzAds", icon: Zap, details: "CPA Network", logo: "/assets/blitzads_limited_logo.jpeg" },
    { id: 20, name: "NutriProfits", icon: Activity, details: "Nutra CPA", logo: "/assets/nutriprofits.png" },
    { id: 21, name: "ProfitPay", icon: DollarSign, details: "Payment Gateway", logo: "/assets/profitpay.png" },
    { id: 22, name: "LeadRock", icon: Layers, details: "CPA Network", logo: "/assets/leadrock.png" },
    { id: 23, name: "Monetizze", icon: Database, details: "Checkout Robusto", logo: "/assets/monetizze.png", bgClass: "bg-white", imgClass: "object-contain p-2" },
    { id: 24, name: "EverAD", icon: Target, details: "CPA Network", logo: "/assets/EverAd.png" },
    { id: 25, name: "Netvork", icon: Globe, details: "Affiliate Network", logo: "/assets/netvork.png" },
    { id: 26, name: "EverFlow", icon: Share2, details: "Partner Marketing", logo: "/assets/everflow.png" },
    { id: 27, name: "ClickHunts", icon: Zap, details: "CPA Network", logo: "/assets/clickhunts.png" },
    { id: 28, name: "ShakesPRO", icon: TrendingUp, details: "Affiliate Network", logo: "/assets/shakespro.png" },
    { id: 29, name: "ClicksAdv", icon: Activity, details: "Performance Marketing", logo: "/assets/clicksadv.jpeg" },
    { id: 30, name: "SellHealth", icon: Activity, details: "Nutra CPA", logo: "/assets/sellhealth.png" },
    { id: 31, name: "AffBay", icon: Target, details: "CPA Network", logo: "/assets/affbay.png" },
    { id: 32, name: "CPAGetti", icon: Layers, details: "Global CPA", logo: "/assets/cpagetti.png" },
    { id: 33, name: "MetaCPA", icon: Shield, details: "Lead Generation", logo: "/assets/metacpa.jpg" },
    { id: 34, name: "Adexico", icon: BarChart3, details: "CPA Network", logo: "/assets/adexico_logo.jpg" },
    { id: 35, name: "ClickDealer", icon: Globe, details: "Global Affiliate", logo: "/assets/clickdealerltd_logo.jpeg" },
    { id: 36, name: "CashFactories", icon: DollarSign, details: "CPA Network", logo: "/assets/cahsfactories.webp", bgClass: "bg-white", imgClass: "object-contain p-2" },
    { id: 37, name: "Ambalaya", icon: Target, details: "Affiliate Network", logo: "/assets/ambalaya.jpeg" },
    { id: 38, name: "Aff1", icon: Zap, details: "Global CPA", logo: "/assets/aff1.png" },
    { id: 39, name: "HealthTrader", icon: Activity, details: "Nutra CPA", logo: "/assets/health_trader.png" },
    { id: 40, name: "GiantMobi", icon: Smartphone, details: "Mobile CPA", logo: "/assets/giant_mobi.png" },
    { id: 41, name: "CPAHouse", icon: Layers, details: "Affiliate Network", logo: "/assets/cpa_house.png" },
    { id: 42, name: "CPACombo", icon: Target, details: "CPA Network", logo: "/assets/cpacombo.webp" },
    { id: 43, name: "Gasmobi", icon: Zap, details: "Performance Marketing", logo: "/assets/gasmobi.webp", bgClass: "bg-white", imgClass: "object-contain p-2" },
    { id: 44, name: "Kma", icon: Database, details: "Affiliate Network", logo: "/assets/kma.png" },
    { id: 45, name: "ProfitNXT", icon: TrendingUp, details: "CPA Network", logo: "/assets/profitnxt.png" },
    { id: 46, name: "SkyLead", icon: Globe, details: "Lead Generation", logo: "/assets/skylead_logo.png", bgClass: "bg-white", imgClass: "object-contain p-2" },
    { id: 47, name: "MoreNiche", icon: Activity, details: "Health & Beauty", logo: "/assets/moreniche.png" },
    { id: 48, name: "Logzz", icon: Package, details: "Logística & Checkout", logo: "/assets/logzz.png" },
    { id: 49, name: "Maxbounty", icon: DollarSign, details: "Leading CPA Network", logo: "/assets/maxbounty.png" },
    { id: 50, name: "SharkPlatform", icon: Shield, details: "Ads Shield", logo: "/assets/SHARK-Platform-logo.png" },
    { id: 51, name: "MyLead", icon: Globe, details: "Global Affiliate", logo: "/assets/mylead.png" },
    { id: 52, name: "PerfectPay", icon: CreditCard, details: "Gateway de Vendas", logo: "/assets/perfectpay.png" },
    { id: 53, name: "Orbio", icon: Zap, details: "Performance Marketing", logo: "/assets/orbio.png" },
    { id: 54, name: "Payt", icon: DollarSign, details: "Checkout de Conversão", logo: "/assets/payt.png" },
    { id: 55, name: "LeadReaktor", icon: Target, details: "CPA Network", logo: "/assets/lead_reaktor.png" },
    { id: 56, name: "Ticto", icon: Zap, details: "Plataforma de Vendas", logo: "/assets/ticto.png" },
    { id: 57, name: "Hebreus", icon: Shield, details: "Gestão & CRM", logo: "/assets/hebreus.png" },
    { id: 58, name: "NutraBank", icon: Database, details: "Financial & CPA", logo: "/assets/nutrabank.png", bgClass: "bg-brand-dark border-brand-yellow/30", imgClass: "object-contain p-2" },
    { id: 59, name: "NetvŌrk", icon: Globe, details: "Affiliate Network", logo: "/assets/NetvŌrk.png" },
    { id: 63, name: "Kwai", icon: Smartphone, details: "Social Ads", logo: "/assets/kwai.svg" },
    { id: 64, name: "MetaCPA Plus", icon: Target, details: "CPA Hub", logo: "/assets/metacpa.jpg" },
    { id: 65, name: "Affiliate World", icon: Globe, details: "Event Partner", logo: "/assets/affiliateworld.jpeg" },
    { id: 66, name: "AdTech", icon: Zap, details: "Technology Provider", logo: "/assets/adtech.webp" },
    { id: 67, name: "Nutra Hub", icon: Activity, details: "Nutra Solutions", logo: "/assets/nutrahub.jpeg" },
    { id: 68, name: "CPA Pro", icon: TrendingUp, details: "Performance Network", logo: "/assets/cpapro.png" },
    { id: 69, name: "Marketeers Hub", icon: Search, details: "Training Center", logo: "/assets/marketeershub.png" },
    { id: 70, name: "Ads Insider", icon: Shield, details: "Insights App", logo: "/assets/adsinsider.png" },
    { id: 71, name: "Traffic Guru", icon: Activity, details: "Media Buying App" },
    { id: 72, name: "Elite Affiliate", icon: Target, details: "Private Network", logo: "/assets/eliteaffiliates.png" },
];

export const IntegrationsSection = () => {
    return (
        <section id="explore-section" className="py-24 bg-brand-dark relative overflow-hidden scroll-mt-24">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-yellow/20 to-transparent" />

            <div className="container-wide relative z-10">
                <div className="text-center mb-2 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 text-brand-yellow font-black text-[10px] tracking-[0.2em] rounded-full mb-1 md:mb-6 border border-brand-yellow/20"
                    >
                        <Globe size={12} />
                        ECOSSISTEMA COMPLETO
                    </motion.div>
                    <h2 className="text-[28px] xs:text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[1.2] mb-1 md:mb-6 text-white">
                        Mais de <br className="xs:hidden" /> <span className="text-brand-yellow italic">70 plataformas</span> <br />
                        totalmente integradas
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Conecte seu rastreamento com as principais redes de anúncios, checkouts e ferramentas do mercado em poucos segundos.
                    </p>
                </div>

                <ChainCarousel items={integrationItems} />
            </div>

            {/* Decorative background circle */}
            <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};
