import FuelInjectionPumpClient from './FuelInjectionPumpClient';

export const metadata = {
  title: "Layanan Fuel Injection Pump | Indo Teknik",
  description: "Layanan perbaikan dan servis fuel injection pump diesel konvensional di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.",
  
  alternates: {
    canonical: 'https://indo-teknik.com/services/conventional/fuel-injection-pump',
  },
  keywords: [
    "servis fuel injection pump diesel",
    "perbaikan fuel injection pump",
    "fuel injection pump Pekanbaru",
    "Indo Teknik Pekanbaru",
    "teknisi diesel profesional",
    "spare part fuel injection pump",
    "bengkel diesel Pekanbaru",
    "alamat Indo Teknik",
    "jam operasional Indo Teknik",
    "kontak Indo Teknik"
  ],
};

export default function FuelInjectionPumpPage() {
  return <FuelInjectionPumpClient />;
}