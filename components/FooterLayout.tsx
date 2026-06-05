import Link from "next/link";
import {FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube} from "react-icons/fa6";
import {ContentWidth} from "@/components/ContentWidth";

const footerSections = [
    {
        title: "PRODUCTOS + VENDIDOS",
        links: [
            { name: "Cortinas Motorizadas", href: "#", badge: "HOT", badgeColor: "bg-rose-600 text-white" },
            { name: "Cortinas modernas", href: "#", isFeatured: true },
            { name: "Roller Black out", href: "#" },
            { name: "Cortinas para dormitorio", href: "#" },
            { name: "Persianas de madera", href: "#" },
            { name: "Cortinas Roller", href: "#" },
            { name: "Persianas verticales", href: "#" },
            { name: "Cortinas para oficina", href: "#" },
        ],
    },
    {
        title: "AYUDA",
        links: [
            { name: "Tienda de cortinas en Lima", href: "#", badge: "REBAJA", badgeColor: "bg-amber-500 text-black font-semibold" },
            { name: "Fotos Antes/Después", href: "#" },
            { name: "Proyectos instalados", href: "#", badge: "HOT", badgeColor: "bg-rose-600 text-white" },
            { name: "Galería de Fotos", href: "#" },
            { name: "Cortinas y persianas en Lima", href: "#", badge: "NUEVO", badgeColor: "bg-lime-600 text-white" },
            { name: "Trabaja con nosotros", href: "#" },
            { name: "Servicio postventa", href: "#" },
        ],
    },
    {
        title: "ATENCIÓN AL CLIENTE",
        links: [
            { name: "Contacto", href: "#" },
            { name: "Nuestro equipo", href: "#" },
            { name: "Política de privacidad", href: "#" },
            { name: "Términos y condiciones", href: "#" },
            { name: "Blog", href: "#" },
        ],
    },
];

const paymentMethods = [
    { name: "Apple Pay", logo: "https://cdn.jsdelivr.net/gh/aayusharyan/fluentui-payment-icons/flat/apple-pay.svg" },
    { name: "Visa", logo: "https://cdn.jsdelivr.net/gh/aayusharyan/fluentui-payment-icons/flat/visa.svg" },
    { name: "Mastercard", logo: "https://cdn.jsdelivr.net/gh/aayusharyan/fluentui-payment-icons/flat/mastercard.svg" },
    { name: "American Express", logo: "https://cdn.jsdelivr.net/gh/aayusharyan/fluentui-payment-icons/flat/amex.svg" },
    { name: "Diners Club", logo: "https://cdn.jsdelivr.net/gh/aayusharyan/fluentui-payment-icons/flat/diners.svg" },
];

export default function FooterLayout() {
    return (
        <footer className="w-full bg-[#111111] text-gray-300 text-[14px] select-none font-sans pt-16 pb-8 relative">

            <ContentWidth>
                <div className="md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">

                    {footerSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-4 text-center md:text-left">
                            <h3 className="text-white font-bold tracking-wider text-[15px]">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col gap-2.5">
                                {section.links.map((link) => (
                                    <li key={link.name} className="flex items-center justify-center md:justify-start gap-2">
                                        <Link
                                            href={link.href}
                                            className={`hover:text-white transition-colors ${
                                                link.isFeatured ? "text-primary hover:text-primary/80 font-medium" : ""
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.badge && (
                                            <span className={`text-[10px] px-1.5 py-0.5 rounded-sm font-bold tracking-wide scale-90 ${link.badgeColor}`}>
                      {link.badge}
                    </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h3 className="text-white font-bold tracking-wider text-[15px]">
                            INFORMACIÓN DE CONTACTO
                        </h3>
                        <div className="flex flex-col gap-4 text-gray-400 font-light leading-relaxed">
                            <p>
                                <strong className="text-gray-200 block font-normal">Tienda (atención al público):</strong>
                                Jirón Hipólito Unanue 1617 3er piso, La Victoria – Lima, Perú
                            </p>
                            <p>
                                <strong className="text-gray-200 block font-normal">Oficinas:</strong>
                                Jirón Cárcamo 785 E1103 – Breña
                            </p>
                            <p>
                                <strong className="text-gray-200 block font-normal">e-mail:</strong>
                                <a href="mailto:ventas05@cortinaslux.net.pe" className="hover:text-white transition-colors text-gray-300">
                                    ventas05@cortinaslux.net.pe
                                </a>
                            </p>
                            <p>
                                <strong className="text-gray-200 block font-normal">Teléfono:</strong>
                                <span className="text-gray-300 font-medium text-[15px]">931 388 892</span>
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="border-white/10 my-6" />

                <div className="px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">

                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wider px-6 py-3.5 rounded-sm text-[13px] transition-transform active:scale-95 cursor-pointer uppercase shadow-md w-full sm:w-auto text-center">
                        Agenda una visita gratis
                    </button>

                    <div className="flex items-center gap-5 text-gray-400">
                        <a href="#" className="hover:text-white transition-colors"><FaFacebookF className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaInstagram className="w-4.5 h-4.5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaXTwitter className="w-4.5 h-4.5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaTiktok className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaYoutube className="w-5 h-5" /></a>
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-md border border-white/10">
                        {paymentMethods.map((method) => (
                            <img
                                key={method.name}
                                src={method.logo}
                                alt={method.name}
                                className="h-7 w-auto object-contain rounded-sm bg-white/90 px-1 py-0.5"
                                loading="lazy"
                            />
                        ))}
                    </div>

                    <div className="text-[12px] text-gray-500 font-light tracking-wide text-center lg:text-right">
                        Copyright © 1994 - 2026 | Cortinas LUX
                    </div>
                </div>
            </ContentWidth>
        </footer>
    );
}