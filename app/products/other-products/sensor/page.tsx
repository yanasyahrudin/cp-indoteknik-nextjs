import SensorClient from './SensorClient';

export const metadata = {
  title: "Sensor | Indo Teknik",
  description:
    "Temukan berbagai sensor seperti CKP sensor, common rail sensor, limiter sensor, dan MAP sensor berkualitas untuk sistem otomotif dan industri. Indo Teknik menyediakan sensor asli untuk monitoring dan kontrol mesin.",
  
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/sensor',
    },
    keywords: [
    "sensor",
    "CKP sensor",
    "common rail sensor",
    "limiter sensor",
    "MAP sensor",
    "sensor otomotif",
    "sensor industri",
    "suku cadang sensor",
    "Indo Teknik",
    "komponen sensor",
    "monitoring mesin",
    "kontrol mesin",
    "produk sensor",
  ],
};

export default function SensorPage() {
  return <SensorClient />;
}