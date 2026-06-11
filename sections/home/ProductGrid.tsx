import { ContentWidth } from "@/components/ContentWidth";
import Image from "next/image";

export const ProductGrid = () => {
    const items = [
        { title: "CORTINAS", image: "/productGrid/product1.webp" },
        { title: "PERSIANAS VERTICALES", image: "/productGrid/product2.webp" },
        { title: "PERSIANAS HORIZONTALES", image: "/productGrid/product3.webp" },
        { title: "TOLDOS Y PÉRGOLAS", image: "/productGrid/product4.webp" },
        { title: "TUBOS PARA CORTINAS", image: "/productGrid/product5.webp" },
        { title: "ESTORES", image: "/productGrid/product6.webp" },
        { title: "CORTINAS ROLLER", image: "/productGrid/product7.webp" },
        { title: "CORTINAS MOTORIZADAS", image: "/productGrid/product8.webp" },
        { title: "ROLLERS DÚO", image: "/productGrid/product9.webp" },
        { title: "PANEL JAPONÉS", image: "/productGrid/product10.webp" },
        { title: "PERSIANAS DUETTE", image: "/productGrid/product11.webp" },
        { title: "FUNDAS DE MUEBLES", image: "/productGrid/product12.webp" },
    ];

    return (
        <section className="py-12 bg-white">
            <ContentWidth>
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-foreground">
                        VENTA DE CORTINAS, PERSIANAS Y TOLDOS
                    </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <div className="relative w-full pt-[174%] bg-gray-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover p-2"
                                />
                            </div>
                            <div className="p-4 flex items-center justify-center bg-white min-h-[60px]">
                                <h3 className="text-xs font-bold text-center uppercase tracking-wider text-gray-700">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
};