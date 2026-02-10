import { Shield, Zap, AlertTriangle, CheckCircle2, Info, ArrowRight, MousePointerClick, Copy, Type, Grid3X3, Layers } from "lucide-react";
import { useState } from "react";

const ColorScale = ({ name, variableBase, colors, onCopy, copied }: { name: string, variableBase: string, colors: Record<number, string>, onCopy: (text: string) => void, copied: string | null }) => {
    return (
        <div className="mb-8">
            <h4 className="font-bold text-lg mb-4 capitalize flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full bg-[var(--color-${variableBase}-500)]`} />
                {name} Scale
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((step) => (
                    <div key={step} className="flex flex-col gap-1 group cursor-pointer hover:-translate-y-1 transition-transform">
                        <div
                            className="h-16 w-full rounded-lg shadow-sm border border-gray-200 flex items-center justify-center relative overflow-hidden"
                            style={{ backgroundColor: colors[step] }}
                            onClick={() => onCopy(colors[step])}
                        >
                            {copied === colors[step] ? (
                                <span className={`text-[10px] font-bold ${step > 400 ? 'text-white' : 'text-gray-900'}`}>COPIED!</span>
                            ) : (
                                <span className={`text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ${step > 400 ? 'text-white' : 'text-gray-900'}`}>
                                    <Copy size={10} /> Copy
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col px-1">
                            <span className="text-xs font-bold text-gray-700">{step}</span>
                            <span className="text-[10px] text-gray-400 font-mono uppercase">{colors[step]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DesignSystem = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    const brandYellows = {
        50: "#FFF8E1", 100: "#FFECB3", 200: "#FFE082", 300: "#FFD54F", 400: "#FFCA28",
        500: "#FFB800", 600: "#FFA000", 700: "#FF8F00", 800: "#FF6F00", 900: "#E65100", 950: "#BF360C"
    };

    const brandGreens = {
        50: "#E8F5E9", 100: "#C8E6C9", 200: "#A5D6A7", 300: "#81C784", 400: "#4CAF50",
        500: "#00C853", 600: "#00A844", 700: "#008535", 800: "#066C2E", 900: "#075828", 950: "#023114"
    };

    const brandGrays = {
        50: "#FAFAFA", 100: "#F5F5F5", 200: "#EEEEEE", 300: "#E0E0E0", 400: "#BDBDBD",
        500: "#9E9E9E", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", 950: "#0A0A0A"
    };

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50">
            <div className="container-wide bg-white rounded-organic shadow-xl p-8 md:p-16 border border-gray-100">
                <header className="mb-20 border-b border-gray-100 pb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-brand-dark rounded-xl flex items-center justify-center text-brand-yellow">
                            <Layers size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-brand-dark">Design System <span className="text-brand-yellow">PRO</span></h1>
                            <p className="text-xl text-gray-500 font-medium">Enterprise-grade UI documentation for Ratoeira Ads.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest mt-8">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" /> v2.2.0 Direct-Link</span>
                        <span>•</span>
                        <span>Last Updated: Feb 2026</span>
                    </div>
                </header>

                {/* 1. Colors Section */}
                <section className="mb-32">
                    <div className="flex items-end gap-4 mb-12 border-b-4 border-brand-yellow pb-4 w-fit px-2">
                        <h2 className="text-4xl font-black uppercase text-brand-dark">01. Colors & Palettes</h2>
                    </div>

                    <div className="bg-white rounded-modern p-1 mb-12">
                        <ColorScale name="Brand Yellow" variableBase="brand-yellow" colors={brandYellows} onCopy={handleCopy} copied={copied} />
                        <ColorScale name="Brand Green" variableBase="brand-green" colors={brandGreens} onCopy={handleCopy} copied={copied} />
                        <ColorScale name="Brand Gray (Dark)" variableBase="brand-gray" colors={brandGrays} onCopy={handleCopy} copied={copied} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-modern border border-gray-200">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <Info size={16} /> Semantic Status Colors
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-green-500" />
                                        <span className="font-bold text-gray-700">Success</span>
                                    </div>
                                    <code className="text-xs text-gray-400">bg-green-500 (#22C55E)</code>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-amber-500" />
                                        <span className="font-bold text-gray-700">Warning</span>
                                    </div>
                                    <code className="text-xs text-gray-400">bg-amber-500 (#F59E0B)</code>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-red-500" />
                                        <span className="font-bold text-gray-700">Error</span>
                                    </div>
                                    <code className="text-xs text-gray-400">bg-red-500 (#EF4444)</code>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-dark text-white p-8 rounded-modern relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Shield size={120} />
                            </div>
                            <h3 className="font-bold text-lg mb-4 text-brand-yellow">Dark Theme Usage</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                Our dark theme uses <code className="text-white">brand-gray-950</code> (#0A0A0A) as the base background,
                                avoiding pure black (#000000) to reduce eye strain and allow for better shadow depth overlap.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-brand-gray-900 rounded-lg shadow-xl border border-white/10 flex items-center justify-center text-xs text-gray-500">900</div>
                                <div className="w-12 h-12 bg-brand-gray-800 rounded-lg shadow-xl border border-white/10 flex items-center justify-center text-xs text-gray-500">800</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Typography Section */}
                <section className="mb-32">
                    <div className="flex items-end gap-4 mb-12 border-b-4 border-brand-green pb-4 w-fit px-2">
                        <h2 className="text-4xl font-black uppercase text-brand-dark">02. Typography</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Font Family Info */}
                        <div className="lg:col-span-1">
                            <div className="bg-brand-yellow/10 border border-brand-yellow p-8 rounded-modern mb-8">
                                <Type size={32} className="text-brand-yellow mb-4" />
                                <h3 className="text-2xl font-black mb-2">Plus Jakarta Sans</h3>
                                <p className="text-sm font-bold text-gray-600 mb-6 uppercase tracking-widest">Primary Typeface</p>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex justify-between border-b border-brand-yellow/20 pb-2">
                                        <span>Weights Used</span>
                                        <span className="font-bold">400, 500, 700, 900</span>
                                    </div>
                                    <div className="flex justify-between border-b border-brand-yellow/20 pb-2">
                                        <span>Letter Spacing</span>
                                        <span className="font-bold">-0.02em (Tight)</span>
                                    </div>
                                    <div className="pt-2">
                                        <span>Availability</span>
                                        <span className="font-bold block">Google Fonts (OFL)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Typescale */}
                        <div className="lg:col-span-2 space-y-10">
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Display Large</span>
                                <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-brand-dark">The quick brown fox</h1>
                                <code className="text-xs text-gray-400 mt-2 block">text-4xl md:text-7xl font-black</code>
                            </div>

                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Heading 1</span>
                                <h2 className="text-4xl md:text-5xl font-black uppercase text-brand-dark">Jumps over the lazy dog</h2>
                                <code className="text-xs text-gray-400 mt-2 block">text-4xl md:text-5xl font-black</code>
                            </div>

                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Heading 2</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">Pack my box with five dozen liquor jugs</h3>
                                <code className="text-xs text-gray-400 mt-2 block">text-2xl md:text-3xl font-bold</code>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Body Regular</span>
                                    <p className="text-lg text-gray-500 leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                    <code className="text-xs text-gray-400 mt-2 block">text-lg text-gray-500 leading-relaxed</code>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Micro Copy</span>
                                    <p className="text-sm font-bold text-brand-green uppercase tracking-widest">
                                        Secure · Fast · Reliable
                                    </p>
                                    <code className="text-xs text-gray-400 mt-2 block">text-sm font-bold uppercase tracking-widest</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Components Section */}
                <section className="mb-20">
                    <div className="flex items-end gap-4 mb-12 border-b-4 border-brand-dark pb-4 w-fit px-2">
                        <h2 className="text-4xl font-black uppercase text-brand-dark">03. UI Components</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Buttons Frame */}
                        <div className="space-y-8">
                            <h3 className="font-bold text-2xl flex items-center gap-3">
                                <MousePointerClick className="text-brand-yellow" /> Interactive Elements
                            </h3>

                            <div className="p-8 border border-gray-100 rounded-modern bg-gray-50/50 space-y-8">
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase block mb-4">Primary Actions</span>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <button className="btn btn-primary group">
                                            Primary Button
                                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <button className="btn btn-primary opacity-50 cursor-not-allowed">
                                            Disabled
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase block mb-4">Accent Actions</span>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <button className="btn btn-accent group text-sm">
                                            Accent Button
                                            <Zap className="ml-2 w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase block mb-4">Secondary Actions</span>
                                    <button className="px-6 py-2 border-2 border-brand-dark rounded-modern font-bold hover:bg-brand-dark hover:text-white transition-all">
                                        Secondary Outline
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Data Display */}
                        <div className="space-y-8">
                            <h3 className="font-bold text-2xl flex items-center gap-3">
                                <Grid3X3 className="text-brand-green" /> Data & Status
                            </h3>

                            <div className="p-8 border border-gray-100 rounded-modern bg-gray-50/50 space-y-8">
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase block mb-4">Floating Badges</span>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="bg-brand-dark text-white px-4 py-2 rounded-modern shadow-xl flex items-center gap-2 text-sm font-bold">
                                            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                                            Live Status
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase block mb-4">Alerts</span>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="bg-brand-yellow/10 text-brand-yellow px-4 py-2 rounded-full font-bold text-sm border border-brand-yellow/20 flex items-center gap-2">
                                            <AlertTriangle size={14} /> Warning Message
                                        </div>
                                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black uppercase flex items-center gap-1">
                                            <CheckCircle2 size={12} /> Success
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Grid & Spacing */}
                <section>
                    <div className="flex items-end gap-4 mb-12 border-b-4 border-gray-300 pb-4 w-fit px-2">
                        <h2 className="text-4xl font-black uppercase text-brand-dark">04. Spacing & Radius</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-brand-gray-900 text-white p-8 rounded-modern text-center">
                            <div className="w-16 h-16 bg-white/20 mx-auto rounded-sharp mb-4 flex items-center justify-center">2px</div>
                            <h4 className="font-bold mb-1">Sharp Radius</h4>
                            <code className="text-xs text-gray-500">rounded-sharp</code>
                            <p className="text-xs text-gray-400 mt-2">Used for small internal elements, progress bars.</p>
                        </div>
                        <div className="bg-brand-gray-900 text-white p-8 rounded-modern text-center">
                            <div className="w-16 h-16 bg-white/20 mx-auto rounded-modern mb-4 flex items-center justify-center">12px</div>
                            <h4 className="font-bold mb-1">Modern Radius</h4>
                            <code className="text-xs text-gray-500">rounded-modern</code>
                            <p className="text-xs text-gray-400 mt-2">Standard UI radius for cards, buttons, inputs.</p>
                        </div>
                        <div className="bg-brand-gray-900 text-white p-8 rounded-modern text-center">
                            <div className="w-16 h-16 bg-white/20 mx-auto rounded-organic mb-4 flex items-center justify-center">32px</div>
                            <h4 className="font-bold mb-1">Organic Radius</h4>
                            <code className="text-xs text-gray-500">rounded-organic</code>
                            <p className="text-xs text-gray-400 mt-2">Used for large containers, hero sections, modals.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};
