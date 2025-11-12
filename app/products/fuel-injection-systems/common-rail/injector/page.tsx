import InjectorClient from './InjectorClient';

export const metadata = {
  title: "Injector | Indo Teknik",
  description:
    "Temukan berbagai komponen injector seperti nozzle, control valve, command piston, cup nozzle injector, solenoid, repair kit injector, dan lainnya untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan injector dan suku cadang asli untuk kebutuhan otomotif dan industri.",
  
  alternates: {
    canonical: 'https://indo-teknik.com/products/fuel-injection-systems/common-rail/injector',
  },
  keywords: [
    "injector",
    "nozzle",
    "control valve",
    "command piston",
    "cup nozzle injector",
    "solenoid",
    "repair kit injector",
    "shim calibration",
    "micro filter injector",
    "orifice valve",
    "solenoid spring",
    "solenoid valve",
    "valve seat retaining nut",
    "suku cadang diesel",
    "Indo Teknik",
    "komponen injector",
    "sparepart injeksi",
    "produk injector",
  ],
};

export default function InjectorPage() {
  return <InjectorClient />;
}