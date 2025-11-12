import ContactClient from './ContactClient';

export const metadata = {
  title: "Kontak | Indo Teknik",
  description: "Hubungi Indo Teknik Pekanbaru untuk konsultasi, pemesanan spare part diesel, servis mesin, dan informasi alamat serta jam operasional. Kami siap melayani kebutuhan industri dan otomotif Anda.",
  alternates: {
    canonical: 'https://indo-teknik.com/contact',
  },
  keywords: [
    "kontak Indo Teknik",
    "alamat Indo Teknik Pekanbaru",
    "telepon bengkel diesel",
    "jam operasional Indo Teknik",
    "spare part diesel Pekanbaru",
    "servis mesin diesel",
    "konsultasi mesin diesel"
  ],
};

export default function ContactPage() {
  return <ContactClient />;
}