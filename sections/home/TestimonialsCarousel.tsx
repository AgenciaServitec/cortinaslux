"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa"
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ContentWidth } from "@/components/ContentWidth";

export const TestimonialsCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            // Desplaza el ancho visible del contenedor para mostrar las siguientes tarjetas
            const scrollAmount = current.clientWidth;
            current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const testimonials = [
        {
            id: 1,
            name: "Nadeisda Passalacqua",
            location: "Chorrillos | Urb. Brisas de Villa",
            rating: 5,
            review: "Los encontramos a través de su página web sin ninguna recomendación. Sin embargo, la experiencia fue excelente de principio a fin. Cada proceso se cumplió dentro de los plazos establecidos, el servicio y materiales son de excelente calidad y definitivamente tomaría el servicio en cuenta para ambientar otros espacios de nuestra casa.",
            avatar: "/testimonials/avatar1.webp",
        },
        {
            id: 2,
            name: "Angelina de Oliveira",
            location: "Lomas de La Molina vieja",
            rating: 5,
            review: "¡Excelente servicio, atención, instalación y calidad! Los recomiendo.",
            avatar: "/testimonials/avatar2.webp",
        },
        {
            id: 3,
            name: "Milan Prica",
            location: "Miraflores",
            rating: 5,
            review: "Muy Feliz por el trabajo. Contrate sus servicios sin ninguna recomendación solo viendo su página web y me voy muy feliz con el trabajo y la atención. En verdad trabaja 24h por WhatsApp, vino a mi casa a hacer las medidas el día y a la hora acordada, entregó el trabajo el día pactado.",
            avatar: "/testimonials/avatar3.webp",
        },
        {
            id: 4,
            name: "Carlos Mendoza",
            location: "Santiago de Surco",
            rating: 5,
            review: "Impecable. Desde la primera visita para mostrar el catálogo hasta la instalación de las cortinas motorizadas. El equipo es muy profesional y dejaron todo completamente limpio. 100% recomendados.",
            avatar: "/testimonials/avatar4.webp",
        },
        {
            id: 5,
            name: "Sofía Cárdenas",
            location: "San Isidro",
            rating: 4,
            review: "Muy buena variedad de telas y los acabados son de primera. Las persianas de madera le dieron un toque súper elegante a mi oficina. Definitivamente volveré a contactarlos para mi sala.",
            avatar: "/testimonials/avatar5.webp",
        },
        {
            id: 6,
            name: "Jorge Ramírez",
            location: "Jesús María",
            rating: 5,
            review: "Excelente relación calidad-precio. Me ayudaron a elegir el toldo perfecto para mi terraza y resiste muy bien el sol. La instalación fue rápida y el trato muy cordial.",
            avatar: "/testimonials/avatar6.webp",
        },
        {
            id: 7,
            name: "Lucía Fernández",
            location: "San Borja",
            rating: 5,
            review: "Compré unos rollers blackout para el cuarto de mis hijos y cumplen perfectamente su función. Cero luz en las mañanas. Además, la atención por WhatsApp fue muy paciente para resolver todas mis dudas.",
            avatar: "/testimonials/avatar7.webp",
        },
        {
            id: 8,
            name: "Miguel Torres",
            location: "Magdalena del Mar",
            rating: 5,
            review: "Profesionalismo total. Me cotizaron un viernes y el miércoles ya estaban instalando. Los acabados del riel son muy discretos y elegantes. Gran trabajo de todo el equipo de Cortinas LUX.",
            avatar: "/testimonials/avatar8.webp",
        },
        {
            id: 9,
            name: "Valeria Rojas",
            location: "Pueblo Libre",
            rating: 4,
            review: "Quedé encantada con el panel japonés que instalaron para dividir mi sala del comedor. Le da un toque muy moderno a la casa. El material se nota que es duradero.",
            avatar: "/testimonials/avatar9.webp",
        },
        {
            id: 10,
            name: "Andrés Vargas",
            location: "La Victoria",
            rating: 5,
            review: "Son unos verdaderos expertos en lo que hacen. Cambié todas las persianas antiguas de mi empresa por estores nuevos y el ambiente cambió por completo. Facturación transparente y muy puntuales.",
            avatar: "/testimonials/avatar10.webp",
        },
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <ContentWidth>
                <div className="flex items-center justify-center mb-12">
                    <div className="h-px bg-gray-300 flex-1 max-w-[200px] md:max-w-[300px]" />
                    <h2 className="text-2xl md:text-3xl font-light text-slate-800 px-6 tracking-wide">
                        CLIENTES 2026
                    </h2>
                    <div className="h-px bg-gray-300 flex-1 max-w-[200px] md:max-w-[300px]" />
                </div>

                <div className="relative group">
                    <button
                        onClick={() => scroll("left")}
                        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md border border-gray-100 transition-all opacity-0 md:opacity-100 group-hover:opacity-100"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[85vw] md:min-w-[calc(33.333%-1rem)] snap-start bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0">
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-800 text-sm md:text-base">
                                                {item.name}
                                            </h3>
                                            <div className="flex items-center gap-0.5 my-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3.5 h-3.5 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-xs text-slate-500">
                                                {item.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-[#1877F2]">
                                        <FaFacebook className="w-6 h-6 fill-current" strokeWidth={0} />
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gray-100 mb-4" />

                                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                                    {item.review}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md border border-gray-100 transition-all opacity-0 md:opacity-100 group-hover:opacity-100"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </ContentWidth>

            <style dangerouslySetInnerHTML={{__html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};