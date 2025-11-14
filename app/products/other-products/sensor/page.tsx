import SensorClient from './SensorClient';
import categories from '../../../data/sensorCategory';
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
    openGraph: {
    title: 'Sensor | Indo Teknik',
    description:
      'Temukan berbagai sensor seperti CKP sensor, common rail sensor, limiter sensor, dan MAP sensor berkualitas untuk sistem otomotif dan industri. Indo Teknik menyediakan sensor asli untuk monitoring dan kontrol mesin.',
    url: 'https://indo-teknik.com/products/other-products/sensor',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        width: 1200,
        height: 630,
        alt: 'Indo Teknik - Spare Part Diesel & Servis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sensor | Indo Teknik',
    description:
      'Temukan berbagai sensor seperti CKP sensor, common rail sensor, limiter sensor, dan MAP sensor berkualitas untuk sistem otomotif dan industri. Indo Teknik menyediakan sensor asli untuk monitoring dan kontrol mesin.',
    images: [
      'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
    ],
  },
};

export default function SensorPage() {
  
  return <SensorClient categories={categories} />;
}