import SupplyPumpClient from './SupplyPumpClient';

export const metadata = {
  title: "Layanan Supply Pump | Indo Teknik",
  description: "Layanan perbaikan dan servis supply pump common rail diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.",
  alternates: {
    canonical: 'https://indo-teknik.com/services/common-rail/supply-pump',
  },
  keywords: [
    "servis supply pump diesel",
    "perbaikan supply pump common rail",
    "supply pump Pekanbaru",
    "Indo Teknik Pekanbaru",
    "teknisi diesel profesional",
    "spare part supply pump",
    "bengkel diesel Pekanbaru",
    "alamat Indo Teknik",
    "jam operasional Indo Teknik",
    "kontak Indo Teknik"
  ],
};

export default function SupplyPumpPage() {
  return <SupplyPumpClient />;
}