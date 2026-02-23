import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

export const ConversionForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        faturamento: ""
    });

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

                                <input
                                    type="tel"
                                    value={formData.telefone}
                                    onChange={(e) => setFormData(prev => ({ ...prev, telefone: e.target.value }))}
                                    placeholder="Seu WhatsApp (com DDD)"
                                    className="w-full p-4 bg-gray-50 rounded-modern border border-gray-200 outline-none focus:border-brand-yellow"
                                />

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
