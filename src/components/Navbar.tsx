import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuLinks = [
        { name: "O Problema", href: "/#pain" },
        { name: "Como Funciona", href: "/#how-it-works-video" },
        { name: "Resultados", href: "/#testimonials" },
        { name: "Design System", href: "/design-system", isSpecial: true },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="container-wide h-20 flex items-center justify-between relative z-50">
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center justify-center md:justify-start gap-2 flex-1 md:flex-initial"
                >
                    <img
                        src="/logoraads.png"
                        alt="RAADS Logo"
                        className="w-40 md:w-52 max-h-full h-auto object-contain"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8 font-medium">
                    {menuLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`hover:text-brand-green transition-colors ${link.isSpecial ? 'font-bold text-brand-green' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a href="#solution" className="hidden md:block">
                        <button className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-modern font-bold hover:scale-105 transition-all active:scale-95 shadow-lg shadow-brand-yellow/20">
                            Teste Já - 14 dias grátis
                        </button>
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-brand-dark hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4 items-center text-center">
                            {menuLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`py-3 w-full text-lg font-black tracking-tight border-b border-gray-50 last:border-0 hover:text-brand-green transition-colors ${link.isSpecial ? 'text-brand-green' : 'text-brand-dark'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#solution" className="w-full" onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-brand-yellow text-brand-dark px-6 py-4 rounded-modern font-black uppercase text-sm tracking-widest shadow-lg shadow-brand-yellow/20 active:scale-95 transition-transform text-center">
                                    <span>Teste Já - 7 dias grátis</span>
                                </button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
