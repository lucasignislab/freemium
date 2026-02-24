import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
    {
        question: "Nunca usei traqueamento. Por onde começo?",
        answer: (
            <div className="space-y-4">
                <p>
                    A Ratoeira foi projetada para quem nunca rastreou — não apenas para quem já tem ferramenta. O processo é direto: você cria seu link de tracking, conecta sua plataforma de vendas (ClickBank, BuyGoods, Hotmart ou +60 outras) e insere o pixel no Google Ads.
                </p>
                <p>
                    Configuração básica entre 15 e 30 minutos, sem saber programar. Documentação passo a passo para cada plataforma, e suporte que acompanha até o tracking estar ativo.
                </p>
                <p className="p-4 bg-brand-yellow/10 border-l-4 border-brand-yellow rounded-r-lg text-brand-yellow font-medium italic">
                    Para ter noção do que você perde hoje sem tracking: acesse sua plataforma de vendas, veja os pedidos confirmados dos últimos 30 dias. Esse número deveria estar no seu painel de conversões. Se você não tem painel de conversões — e esse número for maior que zero — você está investindo no Google Ads no escuro.
                </p>
            </div>
        )
    },
    {
        question: "Já uso outra ferramenta de traqueamento. Vale a pena migrar para a Ratoeira?",
        answer: (
            <div className="space-y-4">
                <p>
                    Faça um teste simples agora: compare as conversões registradas na sua ferramenta atual com os pedidos confirmados na plataforma de vendas nos últimos 30 dias. Se os números forem iguais, você está bem.
                </p>
                <p>
                    Se a plataforma mostrar mais pedidos do que o tracking registrou, cada unidade de diferença é uma venda que o Google não soube que aconteceu — e o Smart Bidding está otimizando com dados incompletos.
                </p>
                <p className="font-bold text-brand-dark">
                    A maioria dos afiliados que faz esse teste encontra diferença de 15% a 35%. A migração para a Ratoeira leva menos de 30 minutos, o tracking funciona imediatamente, e a garantia de 7 dias existe para você comparar os dois lado a lado sem risco.
                </p>
            </div>
        )
    },
    {
        question: "Quanto tempo leva para configurar a Ratoeira?",
        answer: "Configuração básica entre 15 e 30 minutos, sem precisar saber programar. Criar o link de tracking, conectar a plataforma de vendas e inserir o pixel no Google Ads. Documentação passo a passo para cada uma das +60 plataformas integradas, e suporte disponível via chat ou WhatsApp se travar em algum ponto."
    },
    {
        question: "Como o bloqueio de IPs funciona na prática?",
        answer: (
            <div className="space-y-4">
                <p>
                    Quando um clique chega no seu link de tracking, a Ratoeira analisa automaticamente sinais como padrão de comportamento, fingerprint do dispositivo, histórico de IP em bases de fraude e comportamento na página. Se o clique é identificado como fraudulento, o IP entra automaticamente na lista de exclusão do Google Ads — sem você precisar fazer nada.
                </p>
                <p>
                    No painel, você vê em tempo real quantos IPs foram bloqueados, o tipo de fraude identificada e o budget estimado protegido. Não é infalível — nenhum sistema é. Mas é substancialmente mais eficiente do que fazer isso manualmente ou não fazer.
                </p>
            </div>
        )
    },
    {
        question: "Tem mensalidade? Posso cancelar quando quiser?",
        answer: "Sim, tem mensalidade e todos os planos contam com RENOVAÇÃO AUTOMÁTICA para sua maior comodidade. Você poderá cancelar a renovação automática quando quiser, mas o período de reembolso é garantido, por lei, até 7 dias após a compra. Caso adquira um plano anual e cancele a assinatura após os 7 dias de garantia, as parcelas restantes continuarão na sua fatura, mas não haverá cobrança alguma após o período da assinatura."
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Cartão de crédito (parcelado no semestral e anual) e PIX. O acesso é liberado imediatamente após a confirmação do pagamento."
    },
    {
        question: "Como funciona a garantia?",
        answer: "7 dias de garantia incondicional. Se em 7 dias, por qualquer motivo que for, você quiser seu dinheiro de volta, basta solicitar pelo suporte. Simples e sem perguntas."
    },
    {
        question: "Mais alguém terá acesso às minhas vendas?",
        answer: "Não. Os dados das suas campanhas e conversões são exclusivamente seus. Não compartilhamos, vendemos ou acessamos dados de usuários para fins comerciais. Nossa política de privacidade está disponível no rodapé e você pode ler antes de contratar."
    },
    {
        question: "Posso anunciar com estrutura própria e página do produtor?",
        answer: "Sim. A Ratoeira funciona com links de presell, páginas próprias e URLs de produtor. A funcionalidade de Conversão Automática com URL de Produtor está disponível nos planos Rato e Ratazana"
    },
    {
        question: "Preciso saber programar?",
        answer: "Não. A configuração é feita no painel, sem código. Para casos avançados (como integração com páginas personalizadas), o suporte acompanha o processo passo a passo."
    },
    {
        question: "Como funciona o suporte?",
        answer: "Nosso suporte acontece via WhatsApp todos os dias, incluindo sábado, domingo e feriados. Para dúvidas técnicas de configuração, o suporte acompanha até o rastreamento estar funcionando."
    },
    {
        question: "Como solicito reembolso?",
        answer: "Pelo suporte, dentro do prazo de garantia de 7 dias. Processamos em até 5 dias úteis para o mesmo método de pagamento usado na compra."
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-brand-dark text-white overflow-hidden relative border-t border-white/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow/5 blur-[120px] rounded-full -z-10" />

            <div className="container-wide max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 text-gray-400 font-black text-xs tracking-widest rounded-full mb-6 border border-white/10"
                    >
                        <HelpCircle size={14} />
                        DÚVIDAS FREQUENTES
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        FAQ
                    </h2>
                    <p className="text-xl text-gray-400">
                        Tudo o que você precisa saber para começar a blindar sua escala hoje mesmo.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={cn(
                                    "rounded-modern border transition-all duration-300 overflow-hidden",
                                    isOpen
                                        ? "bg-white/10 border-white/20 shadow-xl"
                                        : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                                >
                                    <span className={cn(
                                        "text-lg md:text-xl font-bold transition-colors duration-300",
                                        isOpen ? "text-brand-yellow" : "text-white"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                                        isOpen
                                            ? "bg-brand-yellow border-brand-yellow text-brand-dark rotate-0"
                                            : "border-white/20 text-white rotate-0"
                                    )}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed text-base md:text-lg">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 font-medium">
                        Ainda tem alguma dúvida? <br className="sm:hidden" />
                        <a href="#solution" className="text-brand-yellow hover:underline ml-1">Fale com nosso suporte via WhatsApp.</a>
                    </p>
                </div>
            </div>
        </section>
    );
};
