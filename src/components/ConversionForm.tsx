import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, Check } from "lucide-react";

const countries = [
    { code: "BR", flag: "🇧🇷", name: "Brasil", dial: "+55" },
    { code: "PT", flag: "🇵🇹", name: "Portugal", dial: "+351" },
    { code: "US", flag: "🇺🇸", name: "Estados Unidos", dial: "+1" },
    { code: "AR", flag: "🇦🇷", name: "Argentina", dial: "+54" },
    { code: "CL", flag: "🇨🇱", name: "Chile", dial: "+56" },
    { code: "CO", flag: "🇨🇴", name: "Colômbia", dial: "+57" },
    { code: "MX", flag: "🇲🇽", name: "México", dial: "+52" },
    { code: "UY", flag: "🇺🇾", name: "Uruguai", dial: "+598" },
    { code: "PY", flag: "🇵🇾", name: "Paraguai", dial: "+595" },
    { code: "PE", flag: "🇵🇪", name: "Peru", dial: "+51" },
    { code: "BO", flag: "🇧🇴", name: "Bolívia", dial: "+591" },
    { code: "EC", flag: "🇪🇨", name: "Equador", dial: "+593" },
    { code: "VE", flag: "🇻🇪", name: "Venezuela", dial: "+58" },
    { code: "ES", flag: "🇪🇸", name: "Espanha", dial: "+34" },
    { code: "FR", flag: "🇫🇷", name: "França", dial: "+33" },
    { code: "DE", flag: "🇩🇪", name: "Alemanha", dial: "+49" },
    { code: "IT", flag: "🇮🇹", name: "Itália", dial: "+39" },
    { code: "GB", flag: "🇬🇧", name: "Reino Unido", dial: "+44" },
    { code: "JP", flag: "🇯🇵", name: "Japão", dial: "+81" },
    { code: "AO", flag: "🇦🇴", name: "Angola", dial: "+244" },
    { code: "MZ", flag: "🇲🇿", name: "Moçambique", dial: "+258" },
];

export const ConversionForm = () => {
    const [step, setStep] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        faturamento: ""
    });

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setCountryDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const nextStep = () => {
        if (formData.nome && formData.email && formData.telefone) {
            setStep(prev => prev + 1);
        }
    };

    return (
        <section id="solution" className="py-24 bg-brand-dark text-white relative">
            <div className="container-wide flex flex-col md:flex-row gap-20 items-center text-center md:text-left">
                <div className="flex-1 flex flex-col items-center md:items-start">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                        REASSUMA O <span className="text-brand-yellow">CONTROLE</span> HOJE.
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-xl">
                        Em menos de 5 minutos você blinda sua conta do Google Ads e começa a rastrear o que realmente importa: seu lucro.
                    </p>
                    <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
                        {["Rastreamento 100% Precision", "Bloqueio Automático de Bots", "Relatórios de Lucro Real"].map((item) => (
                            <li key={item} className="flex items-center gap-3 font-bold justify-center md:justify-start">
                                <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center shrink-0">
                                    <Check size={14} className="text-white" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-[480px] bg-white rounded-modern p-10 text-brand-dark border-8 border-brand-yellow shadow-2xl relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <p className="text-xs font-black uppercase text-brand-yellow tracking-widest">Passo 01/02</p>
                                    <h3 className="text-2xl font-black">Comece seu teste grátis</h3>
                                </div>

                                <input
                                    type="text"
                                    value={formData.nome}
                                    onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                                    placeholder="Seu nome completo"
                                    className="w-full p-4 bg-gray-50 rounded-modern border border-gray-200 outline-none focus:border-brand-yellow"
                                />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    placeholder="Seu melhor e-mail"
                                    className="w-full p-4 bg-gray-50 rounded-modern border border-gray-200 outline-none focus:border-brand-yellow"
                                />

                                <div ref={dropdownRef} className="relative flex w-full bg-gray-50 rounded-modern border border-gray-200 focus-within:border-brand-yellow">
                                    <button
                                        type="button"
                                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                                        className="flex items-center gap-1.5 px-3 border-r border-gray-200 hover:bg-gray-100 transition-colors shrink-0"
                                    >
                                        <span className="text-lg">{selectedCountry.flag}</span>
                                        <span className="text-sm font-bold text-gray-700">{selectedCountry.dial}</span>
                                        <ChevronDown size={14} className={`text-gray-400 transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    <input
                                        type="tel"
                                        value={formData.telefone}
                                        onChange={(e) => setFormData(prev => ({ ...prev, telefone: e.target.value }))}
                                        placeholder="Seu Telefone (XX) X XXXX-XXXX"
                                        className="flex-1 p-4 bg-transparent outline-none"
                                    />
                                    {countryDropdownOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-modern border border-gray-200 shadow-xl z-50 max-h-60 overflow-y-auto">
                                            {countries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setCountryDropdownOpen(false);
                                                    }}
                                                    className={`flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-sm ${selectedCountry.code === country.code ? 'bg-brand-yellow/10 font-bold' : ''}`}
                                                >
                                                    <span className="text-lg">{country.flag}</span>
                                                    <span className="flex-1">{country.name}</span>
                                                    <span className="text-gray-400 font-medium">{country.dial}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    onClick={nextStep}
                                    disabled={!formData.nome || !formData.email || !formData.telefone}
                                    className="btn-accent btn w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Continuar
                                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <p className="text-xs font-black uppercase text-brand-yellow tracking-widest">Passo 02/02</p>
                                    <h3 className="text-2xl font-black">Quase lá...</h3>
                                </div>

                                <select
                                    value={formData.faturamento}
                                    onChange={(e) => setFormData(prev => ({ ...prev, faturamento: e.target.value }))}
                                    className="w-full p-4 bg-gray-50 rounded-modern border border-gray-200 outline-none focus:border-brand-yellow font-medium"
                                >
                                    <option value="">Qual seu faturamento mensal? (Opcional)</option>
                                    <option value="10k">Até R$ 10k</option>
                                    <option value="50k">R$ 10k a 50k</option>
                                    <option value="plus">Acima de R$ 50k</option>
                                </select>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="btn-primary btn w-full"
                                >
                                    QUERO MEU ACESSO GRÁTIS
                                </motion.button>
                                <p className="text-[10px] text-center text-gray-400">
                                    Ao continuar, você concorda com nossos Termos de Uso.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
