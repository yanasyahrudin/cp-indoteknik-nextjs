import InjectorClient from './InjectorClient';

export const metadata = {
  title: "Layanan Injector | Indo Teknik",
  description: "Ini adalah halaman layanan perbaikan injector indo teknik",
  keywords: [
    "alamat indo teknik",
    "jam operasional indo teknik",
    "kontak indo teknik",
  ],
};

export default function InjectorPage() {
  return <InjectorClient />;
}