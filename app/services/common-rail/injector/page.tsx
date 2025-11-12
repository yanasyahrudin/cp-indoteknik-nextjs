import InjectorClient from './InjectorClient';

export const metadata = {
  title: "Layanan Injector | Indo Teknik",
  description: "Layanan perbaikan dan servis injector common rail diesel di Indo Teknik Pekanbaru. Teknisi profesional, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.",
  
  alternates: {
    canonical: 'https://indo-teknik.com/services/common-rail/injector',
  },
  keywords: [
    "servis injector diesel",
    "perbaikan injector common rail",
    "injector Pekanbaru",
    "Indo Teknik Pekanbaru",
    "teknisi diesel profesional",
    "spare part injector",
    "bengkel diesel Pekanbaru",
    "alamat Indo Teknik",
    "jam operasional Indo Teknik",
    "kontak Indo Teknik"
  ],
};

export default function InjectorPage() {
  return <InjectorClient />;
}