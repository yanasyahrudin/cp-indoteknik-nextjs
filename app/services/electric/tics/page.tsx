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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Layanan TICS',
    description: 'TICS (Timing & Injection Control Systems) adalah komponen penting dalam sistem injeksi bahan bakar diesel yang berfungsi mengatur waktu dan jumlah bahan bakar yang diinjeksikan ke dalam mesin. Kami menyediakan layanan perbaikan, kalibrasi, dan penggantian spare part TICS untuk memastikan mesin Anda beroperasi dengan efisiensi maksimal.',
  };

  return <TICSClient jsonLd={jsonLd} />;
}