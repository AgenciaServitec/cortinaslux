import Image from "next/image";
import Link from "next/link";
import {ChevronDown, Menu, Phone, Search, X} from "lucide-react";
import {Input} from "@/components/ui/input";
import {ContentWidth} from "@/components/ContentWidth";

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
    return (
        <header className="w-full bg-white select-none">
            <div className="w-full bg-chart-5 text-white text-[13px] py-2 px-4 md:px-8 flex items-center justify-between font-light tracking-wide">
                <div className="flex-1 flex justify-center items-center gap-2">
                    <Phone className="w-4 h-4 text-white/90" />
                    <span>Cotización a domicilio, sin compromiso</span>
                </div>
                <button className="text-white/80 hover:text-white transition-colors cursor-pointer">
                    <X className="w-4 h-4" />
                </button>
            </div>

            <ContentWidth>
                <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">

                    <Link href="/" className="shrink-0">
                        <Image
                            src="/logo.webp"
                            alt="Cortinas LUX Logo"
                            width={190}
                            height={55}
                            priority
                            className="object-contain"
                        />
                    </Link>

                    <div className="relative w-full max-w-xl flex-1">
                        <Input
                            type="text"
                            placeholder="Buscar..."
                            className="w-full pl-4 pr-12 py-2.5 bg-muted/40 focus-visible:ring-primary text-sm text-foreground"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground pointer-events-none">
                            <Search className="w-5 h-5" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5 text-foreground font-semibold text-lg whitespace-nowrap">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                        <span className="tracking-tight">931 388 892</span>
                    </div>
                </div>
            </ContentWidth>

            <nav className="w-full bg-primary text-primary-foreground font-medium text-[13px] shadow-sm">
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
        </header>
    );
}