// RAADS Footer
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="py-20 bg-white border-t border-gray-100">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20 text-center md:text-left">
                    <div className="max-w-xs flex flex-col items-center md:items-start">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                            <img
                                src="/logo_v1.png"
                                alt="RAADS Logo"
                                className="h-24 md:h-36 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                            Rastreamento real, proteção anti-fraude e dashboard completo para afiliados profissionais do Google Ads.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
                        <div className="flex flex-col items-center md:items-start">
                            <h4 className="font-bold text-brand-dark mb-4 text-xs uppercase tracking-widest">Produto</h4>
                            <ul className="space-y-3 text-sm text-gray-500 text-center md:text-left">
                                <li><a href="/#how-it-works-video" className="hover:text-brand-yellow transition-colors">Funcionalidades</a></li>
                                <li><a href="/#explore-section" className="hover:text-brand-yellow transition-colors">Integrações</a></li>
                                <li><a href="/#pricing" className="hover:text-brand-yellow transition-colors">Preços</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <h4 className="font-bold text-brand-dark mb-4 text-xs uppercase tracking-widest">Suporte</h4>
                            <ul className="space-y-3 text-sm text-gray-500 text-center md:text-left">
                                <li><a href="https://ratoeiraads.com/site" className="hover:text-brand-yellow transition-colors">WhatsApp</a></li>
                                <li><a href="https://ratoeira-ads.gitbook.io/help-ratoeira" className="hover:text-brand-yellow transition-colors">Central de Ajuda</a></li>

                            </ul>
                        </div>
                        <div className="flex flex-col items-center md:items-start col-span-2 md:col-span-1">
                            <h4 className="font-bold text-brand-dark mb-4 text-xs uppercase tracking-widest">Legal</h4>
                            <ul className="space-y-3 text-sm text-gray-500 text-center md:text-left">
                                <li><Link to="/privacy-policy" className="hover:text-brand-yellow transition-colors">Privacidade</Link></li>
                                <li><Link to="/terms-of-use" className="hover:text-brand-yellow transition-colors">Termos</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 gap-6 text-center md:text-left">
                    <div className="flex flex-col gap-1">
                        <a href="tel:19996837348" className="text-xs text-brand-dark font-bold hover:text-brand-yellow transition-colors">(19) 99683-7348</a>
                        <p className="text-[10px] text-gray-400 leading-tight">
                            Alameda Rio Negro, 503, Alphaville - Sala 2020, Barueri/SP<br />
                            06454-000
                        </p>
                    </div>
                    <p className="text-[10px] text-gray-400">
                        © 2026 Ratoeira Ads Digital Marketing - 55.824.986/0001-06. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        {/* Social icons placeholder */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
