import ClientNozzle from './ClientNozzle';
import categories from '../../../../data/nozzleCategory';
export const metadata = {
  title: "Nozzle | Indo Teknik",
  description: "Temukan berbagai pilihan nozzle fuel injection diesel original dan berkualitas dari Bosch, Itech, Zexel, dan merek ternama lainnya di Indo Teknik Pekanbaru. Produk bergaransi, harga kompetitif, dan dukungan teknisi profesional untuk kebutuhan industri dan otomotif Anda.",
  
  alternates: {
    canonical: 'https://indo-teknik.com/products/fuel-injection-systems/conventional/nozzle',
  },
  keywords: [
    "nozzle fuel injection diesel",
    "produk nozzle diesel",
    "spare part nozzle",
    "bosch nozzle",
    "itech nozzle",
    "zexel nozzle",
    "Indo Teknik Pekanbaru",
    "kategori produk diesel",
    "spare part diesel",
    "teknisi diesel profesional",
    "bengkel diesel Pekanbaru",
    "jual nozzle diesel"
  ],
    openGraph: {
    title: 'Nozzle | Indo Teknik',
    description:
      'Temukan berbagai pilihan nozzle fuel injection diesel original dan berkualitas dari Bosch, Itech, Zexel, dan merek ternama lainnya di Indo Teknik Pekanbaru. Produk bergaransi, harga kompetitif, dan dukungan teknisi profesional untuk kebutuhan industri dan otomotif Anda.',
    url: 'https://indo-teknik.com/products/fuel-injection-systems/conventional/nozzle',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        width: 1200,
        height: 630,
        alt: 'Indo Teknik - Spare Part Diesel & Servis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nozzle | Indo Teknik',
    description:
      'Temukan berbagai pilihan nozzle fuel injection diesel original dan berkualitas dari Bosch, Itech, Zexel, dan merek ternama lainnya di Indo Teknik Pekanbaru. Produk bergaransi, harga kompetitif, dan dukungan teknisi profesional untuk kebutuhan industri dan otomotif Anda.',
    images: [
      'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
    ],
  },
};

export default function NozzlePage() {
  return <ClientNozzle categories={categories} />;
}