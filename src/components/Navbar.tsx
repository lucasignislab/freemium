// RAADS Navbar

import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md z-40 border-b border-gray-100">
            <div className="container-wide h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/logo_v1.png"
                        alt="RAADS Logo"
                        className="w-40 md:w-52 max-h-full h-auto object-contain"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8 font-medium">
                    <a href="/#pain" className="hover:text-brand-green transition-colors">O Problema</a>
                    <a href="/#solution" className="hover:text-brand-green transition-colors">Como Funciona</a>
                    <a href="/#testimonials" className="hover:text-brand-green transition-colors">Resultados</a>
                    <Link to="/design-system" className="hover:text-brand-green transition-colors font-bold text-brand-green">Design System</Link>
                </div>

                <button className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-modern font-bold hover:scale-105 transition-all active:scale-95 shadow-lg shadow-brand-yellow/20">
                    Comece agora - 14 dias grátis
                </button>
            </div>
        </nav>
    );
};
