import UnitPumpClient from './UnitPumpClient';

export const metadata = {
  title: "Layanan Unit Pump | Indo Teknik",
  description: "Layanan perbaikan dan servis Unit Pump diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.",
  
  alternates: {
    canonical: 'https://indo-teknik.com/services/electric/unit-pump',
  },
  keywords: [
    "servis unit pump diesel",
    "perbaikan unit pump",
    "unit pump Pekanbaru",
    "Indo Teknik Pekanbaru",
    "teknisi diesel profesional",
    "spare part unit pump",
    "bengkel diesel Pekanbaru",
    "alamat Indo Teknik",
    "jam operasional Indo Teknik",
    "kontak Indo Teknik"
  ],
};

export default function UnitPumpPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Layanan Unit Pump',
    description: 'Unit Pump adalah komponen penting dalam sistem bahan bakar yang memastikan pengiriman bahan bakar yang tepat ke mesin. Kami menawarkan layanan perbaikan dan pemeliharaan Unit Pump untuk berbagai jenis kendaraan dan peralatan industri. Layanan kami meliputi identifikasi masalah, perbaikan, penggantian komponen, dan memastikan Unit Pump berfungsi dengan efisiensi dan akurasi yang diperlukan.',
  };
    
  return <UnitPumpClient jsonLd={jsonLd} />;
}