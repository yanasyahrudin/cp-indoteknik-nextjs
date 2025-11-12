import TICSClient from './TICSClient';

export const metadata = {
  title: "Layanan TICS | Indo Teknik",
  description: "Layanan perbaikan dan servis TICS (Timing & Injection Control System) diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.",
  
  alternates: {
    canonical: 'https://indo-teknik.com/services/electric/tics',
  },
  keywords: [
    "servis TICS diesel",
    "perbaikan TICS",
    "Timing & Injection Control System",
    "Toyota TICS",
    "Indo Teknik Pekanbaru",
    "teknisi diesel profesional",
    "spare part TICS",
    "bengkel diesel Pekanbaru",
    "alamat Indo Teknik",
    "jam operasional Indo Teknik",
    "kontak Indo Teknik"
  ],
};

export default function TICSPage() {
  return <TICSClient />;
}