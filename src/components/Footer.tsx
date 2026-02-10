// RAADS Footer

export const Footer = () => {
    return (
        <footer className="py-20 bg-white border-t border-gray-100">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/logo_v1.png"
                                alt="RAADS Logo"
                                className="h-36 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            A ferramenta definitiva para anunciantes profissionais que não aceitam perder dinheiro para robôs.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="font-bold text-brand-dark mb-4 text-xs uppercase tracking-widest">Produto</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-brand-yellow transition-colors">Funcionalidades</a></li>
                                <li><a href="#" className="hover:text-brand-yellow transition-colors">Integrações</a></li>
                                <li><a href="#" className="hover:text-brand-yellow transition-colors">Preços</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-dark mb-4 text-xs uppercase tracking-widest">Suporte</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-brand-yellow transition-colors">WhatsApp</a></li>
                                <li><a href="#" className="hover:text-brand-yellow transition-colors">Central de Ajuda</a></li>
                                <li><a href="#" className="hover:text-brand-yellow transition-colors">Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-dark mb-4 text-xs uppercase tracking-widest">Legal</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacidade</a></li>
                                <li><a href="#" className="hover:text-brand-yellow transition-colors">Termos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 gap-4 text-center">
                    <p className="text-xs text-gray-400">
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
