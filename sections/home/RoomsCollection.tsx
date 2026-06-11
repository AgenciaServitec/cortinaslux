import { ContentWidth } from "@/components/ContentWidth";
import Image from "next/image";

export const RoomsCollection = () => {
    const items = [
        { title: "CORTINAS POR DORMITORIO", image: "/roomsCollection/room1.webp" },
        { title: "CORTINAS PARA SALA", image: "/roomsCollection/room2.webp" },
        { title: "CORTINAS DE OFICINA", image: "/roomsCollection/room3.webp" },
        { title: "CORTINAS PARA COCINA", image: "/roomsCollection/room4.webp" },
        { title: "INFANTILES", image: "/roomsCollection/room5.webp" },
        { title: "EXTERIORES", image: "/roomsCollection/room6.webp" },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <ContentWidth>
                <div className="text-center max-w-3xl mx-auto mb-12 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        CORTINAS Y PERSIANAS POR HABITACIÓN
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Encuentra la solución perfecta para cada espacio de tu hogar.
                        Desde cortinas elegantes para sala, hasta persianas funcionales
                        para dormitorios y soluciones prácticas para oficinas.
                        Combina el estilo de tus ambientes con la mejor calidad.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md"
                        >
                            <div className="relative w-full pt-[121.5%]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                                <h3 className="text-sm md:text-base font-semibold leading-tight">
                                    {item.title}
                                </h3>
                                <div className="h-0.5 w-8 bg-primary mt-2 transition-all duration-300 group-hover:w-16" />
                            </div>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
};