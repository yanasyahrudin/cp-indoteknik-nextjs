import UnitPumpClient from './UnitPumpClient';

export const metadata = {
  title: "Unit Pump | Indo Teknik",
  description: "Menyediakan suku cadang diesel dan otomotif purnajual asli dan lengkap dengan beragam merek dari Eropa, Jepang, dan Tiongkok. Kami hanya menjual suku cadang asli dan suku cadang pengganti berkualitas yang telah kami uji dan gunakan untuk perbaikan di bengkel kami.",
  
  alternates: {
    canonical: 'https://indo-teknik.com/products/fuel-injection-systems/electric/unit-pump',
  },
  keywords: [
    "electric kategori",
    "indo teknik",
    "bosch",
    "itech",
    "zexel",
  ],
    openGraph: {
    title: 'Unit Pump | Indo Teknik',
    description:
      'Menyediakan suku cadang unit pump diesel dan otomotif purnajual asli dari berbagai merek ternama. Produk berkualitas, bergaransi, dan telah diuji di bengkel Indo Teknik Pekanbaru.',
    url: 'https://indo-teknik.com/products/fuel-injection-systems/electric/unit-pump',
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
    title: 'Unit Pump | Indo Teknik',
    description:
      'Menyediakan suku cadang unit pump diesel dan otomotif purnajual asli dari berbagai merek ternama. Produk berkualitas, bergaransi, dan telah diuji di bengkel Indo Teknik Pekanbaru.',
    images: [
      'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
    ],
  },
};

export default function UnitPumpPage() {
  return <UnitPumpClient />;
}
