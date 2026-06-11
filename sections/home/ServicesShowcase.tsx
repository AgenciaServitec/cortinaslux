import { ContentWidth } from "@/components/ContentWidth";
import Image from "next/image";
import Link from "next/link";

export const ServicesShowcase = () => {
    const services = [
        {
            title: "MEDIR & INSTALAR – HAZLO SIMPLE",
            description: "Para garantizar el ajuste perfecto, <strong>nuestro equipo de profesionales se encargará de todas las mediciones e instalación</strong> a nivel nacional.",
            linkText: "SOLICITE TOMA DE MEDIDAS >",
            linkHref: "#",
            image: "/servicesShowcase/showcase1.webp",
            imageAlign: "left"
        },
        {
            title: "AGENDA UNA COTIZACIÓN GRATIS",
            description: "Nuestros <strong>asesores expertos en cortinas</strong> y persianas <strong>se encargarán de todo por usted</strong>: comience con un presupuesto.",
            linkText: "SOLICITE UN PRESUPUESTO >",
            linkHref: "#",
            image: "/servicesShowcase/showcase2.webp",
            imageAlign: "right"
        },
        {
            title: "VISITE NUESTRO SHOWROOM MÁS CERCANO",
            description: "<strong>+ de 475 modelos de telas</strong> y materiales para <strong>cortinas, toldos, persianas y rollers</strong> personalizados.",
            linkText: "VER TIENDAS >",
            linkHref: "#",
            image: "/servicesShowcase/showcase3.webp",
            imageAlign: "left"
        }
    ];

    return (
        <section className="py-20 bg-[#eef5f5]">
            <ContentWidth>
                <div className="flex flex-col gap-16 md:gap-24 px-4 max-w-5xl mx-auto">
                    {services.map((service, index) => {
                        const isImageLeft = service.imageAlign === "left";

                        return (
                            <div
                                key={index}
                                className={`flex flex-col gap-8 md:gap-16 items-center ${
                                    isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className="relative w-[310px] h-[310px] shadow-md bg-white">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={310}
                                            height={310}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <div className={`w-full md:w-1/2 flex flex-col justify-center ${
                                    isImageLeft ? "text-left" : "text-left md:text-right"
                                }`}>
                                    <h2 className="text-2xl md:text-3xl font-light text-gray-800 tracking-wide mb-6">
                                        {service.title}
                                    </h2>

                                    <p
                                        className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base font-light"
                                        dangerouslySetInnerHTML={{ __html: service.description }}
                                    />

                                    <div>
                                        <Link
                                            href={service.linkHref}
                                            className="inline-block text-sm text-gray-800 tracking-widest uppercase border-b border-gray-400 hover:border-gray-800 hover:text-black transition-colors pb-1"
                                        >
                                            {service.linkText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </ContentWidth>
        </section>
    );
};