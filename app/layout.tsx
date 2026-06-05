import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://cortinaslux.net.pe";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: "Cortinas LUX | Tienda de Cortinas, Rollers y Persianas en Lima",
  description:
      "Especialistas en venta e instalación de cortinas modernas, rollers black out, toldos y persianas en Lima. Cotización a domicilio sin compromiso. ¡Dale estilo a tus ambientes!",
  keywords: [
    "tienda de cortinas en lima",
    "cortinas modernas peru",
    "rollers black out lima",
    "persianas de madera brenia",
    "toldos y pergolas",
    "Cortinas Lux",
    "venta de cortinas la victoria",
  ],
  openGraph: {
    title: "Cortinas LUX | Cortinas, Rollers y Persianas a Medida",
    description:
        "Transforma tus espacios con cortinas motorizadas, rollers y persianas de la mejor calidad. Servicio de instalación en Lima Metropolitana.",
    url: SITE_URL,
    siteName: "Cortinas LUX",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Cortinas LUX - Cortinas y Persianas a Medida",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Store"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Cortinas LUX",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.webp`,
  image: `${SITE_URL}/og-image.webp`,
  telephone: "+51931388892",
  priceRange: "$$",
  description:
      "Tienda especializada en diseño, venta e instalación de cortinas modernas, rollers, persianas, toldos y accesorios para el hogar y la oficina en Lima, Perú.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Jirón Hipólito Unanue 1617 3er piso",
      addressLocality: "La Victoria",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Jirón Cárcamo 785 E1103",
      addressLocality: "Breña",
      addressRegion: "Lima",
      addressCountry: "PE",
    }
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: {
    "@type": "Place",
    name: "Lima Metropolitana",
  },
  sameAs: [
    "https://www.facebook.com/#",
    "https://www.instagram.com/#",
    "https://www.tiktok.com/#",
    "https://www.youtube.com/#",
  ],
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode;
}>) {
  return (
      <html
          lang="es"
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/20">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeaderLayout />
      <main className="flex-1">{children}</main>
      <FooterLayout />
      </body>
      </html>
  );
}