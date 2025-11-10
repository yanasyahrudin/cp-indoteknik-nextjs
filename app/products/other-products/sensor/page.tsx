import SensorClient from './SensorClient';

export const metadata = {
  title: "Sensor | Indo Teknik",
  description: "Ini adalah halaman sensor indo teknik",
  keywords: [
    "tentang Indo Teknik",
    "spare part diesel",
    "sejarah perusahaan",
    "profil perusahaan",
    "Indo Teknik",
    "distributor spare part",
    "diesel Indonesia"
  ],
};

export default function SensorPage() {
  return <SensorClient />;
}