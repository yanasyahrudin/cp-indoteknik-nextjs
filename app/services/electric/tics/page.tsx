import TICSClient from './TICSClient';

export const metadata = {
  title: "Layanan TICS | Indo Teknik",
  description: "Ini adalah halaman layanan TICS indo teknik",
  keywords: [
    "alamat indo teknik",
    "jam operasional indo teknik",
    "kontak indo teknik",
  ],
};

export default function TICSPage() {
  return <TICSClient />;
}