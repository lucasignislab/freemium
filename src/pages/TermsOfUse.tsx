import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const TermsOfUse = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50">
            <div className="container-wide bg-white rounded-organic shadow-xl p-8 md:p-16 border border-gray-100 max-w-5xl">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 border-b border-gray-100 pb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-brand-dark rounded-xl flex items-center justify-center text-brand-yellow">
                            <Shield size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-dark">Termos de <span className="text-brand-yellow">Uso</span></h1>
                            <p className="text-lg text-gray-500 font-medium">Última atualização: 06 de Março de 2025</p>
                        </div>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed space-y-8"
                >
                    <section>
                        <p>
                            RATOEIRA ADS DIGITAL MARKETING LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº CNPJ: 55.824.986/0001-06, sediada na Alameda Rio Negro, 503, sala 2020, Alphaville, Barueri/SP, CEP: 06.454-000, doravante denominada “RATOEIRA ADS”, e, de outro lado, “VOCÊ”, pessoa jurídica ou pessoa física, qualificados no Cadastro, doravante denominado apenas “VOCÊ”, declara que leu, entendeu, está de acordo e deu o aceite eletrônico, firmam o presente Contrato de Licença de Uso não exclusiva da PLATAFORMA RATOEIRA ADS (“Termos de Uso/Instrumento”), do qual é parte integrante a política de privacidade.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">DA ACEITAÇÃO DO CONTRATO E DOCUMENTOS INTEGRANTES</h2>
                        <div className="space-y-4">
                            <p>O aceite das condições dos Termos de Uso da RATOEIRA ADS configura uma licença de uso não exclusiva para acesso, uso e navegação.</p>
                            <p>Ao preencher eletronicamente o Cadastro, após a leitura integral deste Contrato e a marcação da caixa de diálogo “Li e aceito os Termos e Condições de Uso”, VOCÊ estará automaticamente aderindo e concordando com os termos e condições deste Contrato.</p>
                            <p>A RATOEIRA ADS poderá alterar as condições deste Contrato a qualquer tempo, sem comunicação prévia, caso VOCÊ não concorde com a(s) modificação(ões), poderá denunciá-lo, sem qualquer ônus ou penalidade.</p>
                            <p>Os recursos da PLATAFORMA RATOEIRA ADS são licenciados no estado em que se encontram, podendo ser modificados, substituídos ou removidos a qualquer momento, sem aviso prévio.</p>
                            <p>O uso da PLATAFORMA RATOEIRA ADS em discordância com os termos a seguir poderá implicar na suspensão do acesso à conta, cancelamento do seu cadastro, e consequente e imediato encerramento da licença de uso previamente existente e eventuais outras sanções, conforme adiante detalhado.</p>
                            <p>A RATOEIRA ADS pode restringir a disponibilidade da Plataforma ou de certas áreas ou recursos a ela relacionados, se necessário, considerando os limites de capacidade, a segurança, a forma de atuação ou a integridade de seus servidores, bem como para realizar medidas de manutenção ou aprimoramento dos seus serviços.</p>
                            <p>A RATOEIRA ADS pode melhorar e alterar a Plataforma a qualquer tempo, seja para modificar, substituir ou remover serviços/ferramentas/funcionalidades existentes, ou para adicionar serviços/ferramentas/funcionalidades novos.</p>
                            <p>VOCÊ declara estar ciente e concorda, expressamente, que é seu dever ler e se informar sobre eventuais alterações nestes Termos de Uso e nas demais Políticas e Termos da RATOEIRA ADS.</p>
                            <p>O presente instrumento deve ser interpretado em conjunto com as condições de eventuais ANEXOS, sendo que sempre que houver algum conflito entre o disposto neste CONTRATO, e em ANEXO específico, prevalecerá o disposto no ANEXO, por ser regra especial.</p>
                            <p>VOCÊ declara ciência de que poderão ser celebrados Termos Aditivos, com cláusulas específicas em relação a alguns dos serviços prestados pela RATOEIRA ADS, que dependerão do preenchimento de pré-requisitos específicos, os quais serão apresentados conforme o interesse, para leitura e aceitação também por meio eletrônico.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">DO OBJETO</h2>
                        <p>O presente contrato tem por objeto a contratação e afiliação aos serviços da RATOEIRA ADS, uma plataforma tecnológica especializada na detecção e bloqueio de cliques fraudulentos e afiliados mal-intencionados, garantindo a proteção e otimização do orçamento de tráfego.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">DAS DEFINIÇÕES</h2>
                        <div className="space-y-4">
                            <p>Sempre que as expressões abaixo forem usadas nestes Termos de Uso, elas terão o seguinte significado:</p>
                            <div className="pl-4 space-y-4 border-l-2 border-brand-yellow/30">
                                <p><strong>(”Chargeback”):</strong> Procedimento pelo qual o titular do cartão de crédito não reconhece e/ou contesta, junto ao emissor de seu cartão de crédito, uma despesa efetuada com o cartão de que é titular.</p>
                                <p><strong>(“Código de Acesso”):</strong> É a senha utilizada por VOCÊ para acessar sua conta virtual;</p>
                                <p><strong>(“Cookie Stuffing”):</strong> Extensões de navegador maliciosas, concebidas para inserir a identidade ou dados de identificação de um Usuário Afiliado em detrimento de outro.</p>
                                <p><strong>(“Comissões”):</strong> Percentual pago sobre as vendas realizadas pelos afiliados. Os valores serão repassados diretamente pela empresa responsável pelo processamento dos pagamentos.</p>
                                <p><strong>(“Gateway de pagamentos”):</strong> Empresa responsável pelo processamento dos pagamentos das mensalidades dos planos devidos à RATOEIRA ADS, e também pela distribuição das comissões sobre as vendas.</p>
                                <p><strong>(“E-BOOK”):</strong> Livro digital com informações e atualizações a respeito dos serviços da RATOEIRA ADS que será enviado mensalmente a VOCÊ.</p>
                                <p><strong>(“IP do Computador”):</strong> Endereço numérico único atribuído ao dispositivo utilizado para acessar a internet.</p>
                                <p><strong>(“GCLID – Google Ads”):</strong> Parâmetro de rastreamento gerado pelo Google Ads para identificar e monitorar cliques e conversões.</p>
                                <p><strong>(“MSCLKID – Bing Ads”):</strong> Identificador de rastreamento exclusivo gerado pelo Bing Ads para monitorar o desempenho de anúncios.</p>
                                <p><strong>(“Presell”):</strong> Página intermediária utilizada para preparar e direcionar o usuário antes da conversão final.</p>
                                <p><strong>(“VOCÊ”):</strong> São todas as pessoas físicas e/ou jurídicas que utilizam a plataforma ROTEIRA ADS</p>
                                <p><strong>(“Mensalidade”):</strong> É o valor cobrado pela RATOEIRA ADS como remuneração pelo serviço pelo uso da plataforma.</p>
                                <p><strong>(“Tributos”):</strong> São todas as espécies tributárias devidas – impostos, taxas, encargos, contribuições.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">DO CADASTRO DO USUÁRIO</h2>
                        <div className="space-y-4">
                            <p>Poderão acessar à RATOEIRA ADS:</p>
                            <p className="pl-4">a) Pessoa Física, em pleno gozo da capacidade civil e sem impedimento legal; b) Pessoa jurídica, por meio de seu sócio ou representante legal, com capacidade jurídica para contratar.</p>
                            <p>Para acessar a plataforma, VOCÊ deverá escolher o plano disponível, e informar seu nome completo ou razão social, e-mail, login, número de celular com DDD, e escolher a forma de pagamento.</p>
                            <p>Após a confirmação da compra, VOCÊ receberá um e-mail de confirmação da RATOEIRA ADS com um código provisório de acesso. VOCÊ é o único responsável pelas atividades realizadas em sua conta.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">DOS PLANOS E VALORES</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-modern border border-gray-100">
                                <h3 className="font-bold text-brand-dark mb-2">Plano Camundongo</h3>
                                <p className="text-sm">R$67,00 por mês, com renovação automática. Inclui 3 Ratoeiras, 3 Links de Checkout, 2 Plataformas Conectadas e Ebook Mensal.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-modern border border-gray-100">
                                <h3 className="font-bold text-brand-dark mb-2">Plano Stuart Little</h3>
                                <p className="text-sm">Mensal: R$139,00 | Semestral: R$654,00 | Anual: R$1.188,00. Inclui 50 Ratoeiras, Plataformas Ilimitadas e Ebook Mensal.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-modern border border-gray-100">
                                <h3 className="font-bold text-brand-dark mb-2">Plano Rato</h3>
                                <p className="text-sm">Mensal: R$187,00 | Anual: R$1.597,00. Inclui 50 Ratoeiras, Plataformas Ilimitadas, 5 Ratoeiras Automáticas e 3 Perfis do Google.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-modern border border-gray-100">
                                <h3 className="font-bold text-brand-dark mb-2">Plano Ratazana</h3>
                                <p className="text-sm">Mensal: R$297,00 | Anual: R$2.597,00. Inclui 150 Ratoeiras, Plataformas Ilimitadas, 50 Ratoeiras Automáticas e 10 Perfis do Google.</p>
                            </div>
                            <p>A renovação é automática. O cancelamento pode ser feito a qualquer momento, mas não haverá reembolso após 7 dias da compra, conforme o CDC.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">DAS OBRIGAÇÕES E LIMITAÇÃO DE RESPONSABILIDADE</h2>
                        <div className="space-y-4 text-sm">
                            <p>A RATOEIRA ADS não se responsabiliza por falhas ou interrupções causadas por terceiros ou força maior. O serviço depende de infraestruturas como Google Cloud, Digital Ocean, Redis, entre outros.</p>
                            <p>A RATOEIRA ADS não garante a eliminação total de fraudes, embora utilize tecnologia avançada para detecção e bloqueio.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">DO PRAZO E DA RESCISÃO</h2>
                        <p>O contrato vigora conforme o plano escolhido. A RATOEIRA ADS reserva-se o direito de rescindir o contrato em caso de descumprimento das cláusulas, uso indevido de links de afiliado ou práticas fraudulentas.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">DA PROPRIEDADE INTELECTUAL</h2>
                        <p>O domínio, logotipo, código-fonte e algoritmos são de propriedade exclusiva da RATOEIRA ADS. É vedado qualquer tipo de reprodução ou engenharia reversa sem autorização expressa.</p>
                    </section>

                    <section className="bg-brand-dark text-white p-8 rounded-modern">
                        <h2 className="text-2xl font-black text-brand-yellow uppercase tracking-tight mb-4">CANAIS DE ATENDIMENTO</h2>
                        <p className="font-bold">Em caso de dúvidas, entre em contato:</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2"><span>Email:</span> <a href="mailto:suporte@ratoeiraads.com" className="text-brand-yellow hover:underline">suporte@ratoeiraads.com</a></li>
                            <li className="flex items-center gap-2"><span>WhatsApp:</span> <a href="tel:32998313738" className="text-brand-yellow hover:underline">(32) 99831-3738</a></li>
                        </ul>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};
