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
  return <UnitPumpClient />;
}