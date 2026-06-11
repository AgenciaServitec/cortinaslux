import { ContentWidth } from "@/components/ContentWidth";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa"

export const NewArrivals = () => {
    const items = [
        { title: "Riel Ripplefold Blanco", image: "/newArrivals/newArrival1.webp", price: 175.00, discount: 0 },
        { title: "Cortinas Roller Negras", image: "/newArrivals/newArrival2.webp", price: 300.00, discount: 12 },
        { title: "Cortinas Inteligentes Alexa", image: "/newArrivals/newArrival3.webp", price: 175.00, discount: 0 },
        { title: "Cortinas Rusbell", image: "/newArrivals/newArrival4.webp", price: 189.00, discount: 0 },
        { title: "Persianas Blancas", image: "/newArrivals/newArrival5.webp", price: 197.00, discount: 0 },
        { title: "Duette Blackout Negro", image: "/newArrivals/newArrival6.webp", price: 495.00, discount: 0 },
        { title: "Persianas Horizontales Maple Wood", image: "/newArrivals/newArrival7.webp", price: 225.00, discount: 0 },
        { title: "Estores Traslúcidos", image: "/newArrivals/newArrival8.webp", price: 250.00, discount: 40 },
    ];

    const calculatePrice = (price: number, discount: number) => {
        return price - (price * (discount / 100));
    };

    return (
        <section className="py-16 bg-white">
            <ContentWidth>
                <div className="text-center max-w-2xl mx-auto mb-12 px-4">
                    <h2 className="text-3xl font-bold text-foreground mb-4">CORTINAS ROLLERS NUEVOS INGRESOS</h2>
                    <p className="text-muted-foreground text-sm">Descubre las últimas tendencias en cortinas y persianas que acaban de llegar a nuestra tienda. Innovación, diseño y funcionalidad.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                    {items.map((item, index) => {
                        const finalPrice = item.discount > 0 ? calculatePrice(item.price, item.discount) : item.price;

                        return (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                                    {item.discount > 0 && (
                                        <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                                            -{item.discount}%
                                        </span>
                                    )}
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>

                                <h3 className="text-sm font-medium text-gray-800 mb-2">{item.title}</h3>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`text-lg font-bold ${item.discount > 0 ? 'text-red-600' : 'text-foreground'}`}>
                                        S/ {finalPrice.toFixed(2)}
                                    </span>
                                    {item.discount > 0 && (
                                        <span className="text-xs text-gray-400 line-through">S/ {item.price.toFixed(2)}</span>
                                    )}
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors py-2 rounded-lg text-sm font-semibold">
                                    <FaWhatsapp className="w-4 h-4" />
                                    Cotizar
                                </button>
                            </div>
                        );
                    })}
                </div>
            </ContentWidth>
        </section>
    );
};