import NozzleClient from './NozzleClient';

export const metadata = {
  title: "Layanan Nozzle | Indo Teknik",
  description: "Ini adalah halaman layanan perbaikan nozzle indo teknik",
  keywords: [
    "alamat indo teknik",
    "jam operasional indo teknik",
    "kontak indo teknik",
  ],
};

export default function NozzlePage() {
  return <NozzleClient />;
}