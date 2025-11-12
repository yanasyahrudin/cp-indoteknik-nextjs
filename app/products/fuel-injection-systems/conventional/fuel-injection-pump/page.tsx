import FuelInjectionClient from './FuelInjectionPumpClient';

export const metadata = {
  title: "Fuel Injection Pump | Indo Teknik",
  description:
    "Temukan berbagai komponen fuel injection pump seperti arm assy, camshaft, delivery valve, plunger, rotor head, dan lainnya untuk sistem injeksi bahan bakar diesel konvensional. Indo Teknik menyediakan suku cadang asli dan berkualitas untuk kebutuhan otomotif dan industri.",
  
  alternates: {
    canonical: 'https://indo-teknik.com/products/fuel-injection-systems/conventional/fuel-injection-pump',
  },
  keywords: [
    "fuel injection pump",
    "arm assy",
    "camshaft",
    "delivery valve",
    "plunger",
    "rotor head",
    "pump assy",
    "governor",
    "bushing",
    "gasket inline",
    "gasket rotary",
    "roller inline",
    "roller rotary",
    "solenoid FIP",
    "suku cadang diesel",
    "Indo Teknik",
    "komponen injeksi bahan bakar",
    "sparepart konvensional",
    "produk fuel injection pump",
  ],
};

export default function FuelInjectionPumpPage() {
  return <FuelInjectionClient />;
}