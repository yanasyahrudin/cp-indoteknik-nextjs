import ECUClient from './ECUClient';

export const metadata = {
  title: "ECU | Indo Teknik",
  description: "Ini adalah halaman ecu indo teknik",
  keywords: [
    "alamat indo teknik",
    "jam operasional indo teknik",
    "kontak indo teknik",
  ],
};

export default function ECUPage() {
  return <ECUClient />;
}