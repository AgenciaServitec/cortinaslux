"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[800px] flex items-center justify-center overflow-hidden">

            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
                style={{ backgroundImage: "url('/hero/hero-image.webp')" }}
            />

            <div className="relative z-[2] text-center px-4 max-w-4xl">
                <h1 className="text-black text-3xl md:text-5xl font-bold tracking-tight mb-8 drop-shadow-lg">
                    Introduce tus medidas ⇒ Calcula tu presupuesto ⇒ Haz tu pedido
                </h1>

                <Link
                    href="/cortinas"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg transition-all transform shadow-xl"
                >
                    Cortinas para Sala 2026
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}