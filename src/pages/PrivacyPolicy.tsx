import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

export const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50">
            <div className="container-wide bg-white rounded-organic shadow-xl p-8 md:p-16 border border-gray-100 max-w-5xl">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 border-b border-gray-100 pb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-brand-dark rounded-xl flex items-center justify-center text-brand-green">
                            <Lock size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-dark">Política de <span className="text-brand-green">Privacidade</span></h1>
                            <p className="text-lg text-gray-500 font-medium">Sua segurança e privacidade são nossa prioridade.</p>
                        </div>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed space-y-10"
                >
                    <section>
                        <p className="text-lg font-medium">
                            Esta Política de Privacidade (“Política”) se aplica a todos os serviços prestados pela RATOEIRA ADS DIGITAL MARKETING LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº CNPJ: 55.824.986/0001-06, sediada na Alameda Rio Negro, 503, sala 2020, Alphaville, Barueri/SP, CEP: 06.454-000, doravante denominada (“RATOEIRA ADS”)
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                            <Shield className="text-brand-green" /> 1. Do Objeto
                        </h2>
                        <div className="space-y-4">
                            <p>Visando proteger a sua privacidade, além de garantir a liberdade e o exercício de direitos ao titular de dados, a RATOEIRA ADS apresenta a presente Política de Privacidade.</p>
                            <p>Este documento tem o objetivo de informar, de forma clara e objetiva, sobre como é realizada a coleta, tratamento e armazenamento de dados pessoais essenciais para a prestação de seus serviços.</p>
                            <p>O titular dos dados pessoais declara-se ciente com esta Política e dá expresso consentimento para o Tratamento de suas Informações Pessoais pela RATOEIRA ADS.</p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
                                <p className="text-red-700 font-bold">Caso não concorde com o Tratamento de suas Informações Pessoais, na forma prevista nesta Política, deverá se abster de utilizar os serviços da RATOEIRA ADS.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                            <FileText className="text-brand-green" /> 2. Conceitos Importantes
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-gray-50 rounded-modern border border-gray-100">
                                <h3 className="font-bold text-brand-dark mb-2">LGPD</h3>
                                <p className="text-sm">Lei Geral de Proteção de Dados (13.709/2018), que regula o tratamento, proteção e privacidade de Dados Pessoais no Brasil.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-modern border border-gray-100">
                                <h3 className="font-bold text-brand-dark mb-2">Dados Pessoais</h3>
                                <p className="text-sm">Informações que podem ser associadas a uma pessoa física identificada ou identificável (nome, CPF, e-mail, etc).</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-modern border border-gray-100">
                                <h3 className="font-bold text-brand-dark mb-2">Tratamento</h3>
                                <p className="text-sm">Toda operação realizada com dados pessoais, desde a coleta até a eliminação.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-modern border border-gray-100">
                                <h3 className="font-bold text-brand-dark mb-2">Titular de Dados</h3>
                                <p className="text-sm">Toda pessoa natural a quem se referem os dados que são objeto de tratamento.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                            <Database className="text-brand-green" /> 3. Dados Tratados e Finalidade
                        </h2>
                        <div className="space-y-4">
                            <p>A RATOEIRA ADS coleta dados pessoais para garantir a execução dos serviços, segurança e melhoria da experiência:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                <li className="flex items-start gap-2 bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span><strong>Credenciamento:</strong> Nome, CPF, Telefone, Endereço e E-mail.</span>
                                </li>
                                <li className="flex items-start gap-2 bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span><strong>Financeiro:</strong> Dados bancários para repasse de comissões.</span>
                                </li>
                                <li className="flex items-start gap-2 bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span><strong>Suporte:</strong> Informações relacionadas à dúvida ou demanda.</span>
                                </li>
                                <li className="flex items-start gap-2 bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                                    <span><strong>Técnico:</strong> Endereço IP, cookies e registros de acesso.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                            <Eye className="text-brand-green" /> 4. Compartilhamento de Dados
                        </h2>
                        <p>Os dados podem ser compartilhados com parceiros e fornecedores para garantir as medidas contratadas, autoridades competentes quando requisitado, e em operações societárias, sempre exigindo as mesmas diretrizes de segurança.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                            <Lock className="text-brand-green" /> 5. Armazenamento e Segurança
                        </h2>
                        <div className="space-y-4">
                            <p>As informações são armazenadas em servidores seguros com criptografia e firewalls. A RATOEIRA ADS adota medidas rigorosas contra perda, roubo ou acesso não autorizado.</p>
                            <p>Os dados de cadastro são mantidos enquanto o usuário estiver ativo, podendo ser guardados por até 10 anos após o encerramento para cumprimento de obrigações legais (Banco Central).</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                            <UserCheck className="text-brand-green" /> 6. Seus Direitos (Art. 18 LGPD)
                        </h2>
                        <div className="bg-gray-50 p-8 rounded-modern border border-gray-100">
                            <p className="mb-4 font-bold">Você tem o direito de solicitar a qualquer momento:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                <li>• Confirmação de tratamento</li>
                                <li>• Acesso e correção de dados</li>
                                <li>• Anonimização ou bloqueio</li>
                                <li>• Eliminação de dados</li>
                                <li>• Portabilidade</li>
                                <li>• Revogação do consentimento</li>
                            </ul>
                            <div className="mt-8 p-4 bg-brand-dark text-white rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                                <span>Para exercer seus direitos, contate nosso DPO:</span>
                                <a href="mailto:suporte@ratoeiraads.com" className="text-brand-green font-black hover:underline">suporte@ratoeiraads.com</a>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};
