"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ContentWidth } from "@/components/ContentWidth";

const menuItems = [
    { name: "Por Ambientes", href: "#", hasDropdown: true, isFirst: true },
    { name: "TOLDOS & PÉRGOLAS", href: "#", hasDropdown: true },
    { name: "ROLLERS", href: "#", hasDropdown: true },
    { name: "CORTINAS", href: "#", hasDropdown: true },
    { name: "PERSIANAS", href: "#", hasDropdown: true },
    { name: "ACCESORIOS", href: "#", hasDropdown: true },
    { name: "NUEVOS", href: "#", hasDropdown: true },
    { name: "TIENDA", href: "#" },
    { name: "Cómo Medir | Instalar", href: "#" },
];

export default function HeaderLayout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

    return (
        <header className="w-full bg-white select-none relative z-50">
            {isAnnouncementVisible && (
                <div className="w-full bg-chart-5 text-white text-[12px] md:text-[13px] py-2 px-4 md:px-8 flex items-center justify-between font-light tracking-wide transition-all">
                    <div className="flex-1 flex justify-center items-center gap-2 text-center">
                        <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/90" />
                        <span>Cotización a domicilio, sin compromiso</span>
                    </div>
                    <button
                        onClick={() => setIsAnnouncementVisible(false)}
                        className="text-white/80 hover:text-white transition-colors cursor-pointer p-1"
                        aria-label="Cerrar anuncio"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}

            <ContentWidth>
                <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 px-4 md:px-0">

                    <div className="w-full md:w-auto flex items-center justify-between">
                        <Link href="/" className="shrink-0">
                            <Image
                                src="/logo.webp"
                                alt="Cortinas LUX Logo"
                                width={250}
                                height={115}
                                priority
                                className="object-contain w-40 md:w-[250px]"
                            />
                        </Link>

                        <button
                            className="md:hidden p-2 text-foreground bg-gray-50 rounded-md"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Abrir menú"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="relative w-full max-w-xl flex-1">
                        <Input
                            type="text"
                            placeholder="Buscar..."
                            className="w-full pl-4 pr-12 py-2.5 md:py-3 bg-muted/40 border-transparent focus-visible:ring-primary text-sm text-foreground rounded-lg"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground pointer-events-none">
                            <Search className="w-5 h-5" />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2.5 text-foreground font-semibold text-lg whitespace-nowrap">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                        <span className="tracking-tight">931 388 892</span>
                    </div>
                </div>
            </ContentWidth>

            <nav className="hidden md:block w-full bg-primary text-primary-foreground font-medium text-[13px] shadow-sm">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-wrap items-center justify-start">
                    {menuItems.map((item, idx) => (
                        <div key={item.name} className="flex items-center">
                            {idx > 0 && <span className="text-primary-foreground/20 text-xs select-none">|</span>}

                            <Link
                                href={item.href}
                                className={`flex items-center gap-1.5 py-3.5 px-4 hover:bg-black/10 dark:hover:bg-white/10 transition-colors whitespace-nowrap ${
                                    item.isFirst ? "font-bold" : ""
                                }`}
                            >
                                {item.isFirst && <Menu className="w-4 h-4" />}
                                <span className="tracking-wide">{item.name}</span>
                                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-80" />}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <Image
                        src="/logo.webp"
                        alt="Cortinas LUX"
                        width={130}
                        height={60}
                        className="object-contain"
                    />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-gray-500 hover:bg-gray-100 rounded-full bg-gray-50"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-2 hide-scrollbar">
                    <ul className="flex flex-col">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center justify-between px-6 py-4 text-sm text-gray-800 border-b border-gray-50 hover:bg-primary/5 hover:text-primary transition-colors ${
                                        item.isFirst ? "font-bold" : "font-medium"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-3">
                                        {item.isFirst && <Menu className="w-4 h-4 text-primary" />}
                                        {item.name}
                                    </div>
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
                        Línea de atención
                    </p>
                    <a
                        href="tel:+51931388892"
                        className="flex items-center gap-3 text-foreground font-bold text-xl hover:text-primary transition-colors"
                    >
                        <div className="bg-primary/10 p-2 rounded-full text-primary">
                            <Phone className="w-5 h-5" />
                        </div>
                        <span>931 388 892</span>
                    </a>
                </div>
            </div>
        </header>
    );
}