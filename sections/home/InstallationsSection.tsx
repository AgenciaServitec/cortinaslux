import { ContentWidth } from "@/components/ContentWidth";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const InstallationsSection = () => {
    return (
        <section className="bg-[#333333] py-16 md:py-24 text-white">
            <ContentWidth>
                <div className="flex flex-col lg:flex-row items-center gap-12 px-4">

                    <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                            src="/installations/installations.webp"
                            alt="Instalaciones de toldos y cortinas"
                            width={768}
                            height={768}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                TOLDOS Y CORTINAS EN LIMA METROPOLITANA Y MÁS
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                La satisfacción de nuestros clientes es nuestra prioridad. Ofrecemos visitas a domicilio en todos los distritos de Lima y casas de playa, con una garantía extendida de hasta 5 años en toldos, rollers y persianas americanas.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <CheckCircle2 className="text-primary w-5 h-5" />
                                Instalaciones en Provincia:
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Distribuimos nuestros productos a Trujillo, Arequipa, Cusco, Puno, Ayacucho, Piura, Huánuco, Ica y más. Conoce la calidad de nuestro trabajo viendo nuestros proyectos recientes.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                                Toldos Motorizados + LED <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/20">
                                Pérgolas para Terraza
                            </button>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};