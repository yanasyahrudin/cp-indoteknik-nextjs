import AboutUsClient from './HomeClient';

export const metadata = {
  title: "Beranda | Indo Teknik",
  description:
    "Indo Teknik adalah pusat servis dan distributor spare part diesel terpercaya sejak 1997. Layanan: Fuel Injection Pump, Injector, Supply Pump, Fabrikasi, Pengelasan, dan Automotive Aftermarket. Hubungi kami untuk solusi mesin diesel terbaik.",
  keywords: [
    "Indo Teknik Pekanbaru",
    "Spare part diesel",
    "Distributor diesel",
    "Servis injector Pekanbaru",
    "Fuel Injection Pump",
    "Supply Pump",
    "Fabrikasi mesin",
    "Bengkel diesel Pekanbaru",
    "Automotive Aftermarket",
    "Layanan mesin diesel",
    "Common Rail",
    "Baterai mobil",
    "Perbaikan mesin diesel",
    "Teknisi diesel profesional",
    "Diesel Pekanbaru",
    "Bengkel resmi diesel",
    "Spare part original",
    "Layanan purna jual diesel",
    "Diesel Fuel Injection",
    "Bengkel alat berat Pekanbaru"
  ],
  openGraph: {
    title: "Beranda | Indo Teknik",
    description:
      "Pusat servis dan distributor spare part diesel terpercaya di Pekanbaru. Layanan lengkap untuk mesin diesel, injector, supply pump, fabrikasi, dan automotive aftermarket.",
    url: "https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png",
    type: "website",
    images: [
      {
        url: "/logoit.png",
        width: 1200,
        height: 630,
        alt: "Indo Teknik - Spare Part Diesel & Servis"
      }
    ]
  }
};

export default function AboutPage() {
  return <AboutUsClient />;
}