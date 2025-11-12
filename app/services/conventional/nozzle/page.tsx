import NozzleClient from './NozzleClient';

export const metadata = {
  title: "Layanan Nozzle | Indo Teknik",
  description: "Layanan perbaikan, pembersihan, penggantian, dan pengujian nozzle oleh Indo Teknik. Hubungi kami untuk solusi nozzle terbaik.",
  alternates: {
    canonical: 'https://indo-teknik.com/services/conventional/nozzle',
  },
  keywords: [
    "perbaikan nozzle",
    "jasa nozzle",
    "service nozzle",
    "Indo Teknik",
    "alamat indo teknik",
    "jam operasional indo teknik",
    "kontak indo teknik",
    "nozzle diesel",
    "nozzle injektor",
    "nozzle mesin"
  ],
};

export default function NozzlePage() {
  return <NozzleClient />;
}