import StarterAlternatorClient from './StarterAlternatorClient';
import categories from '../../../data/alternatorStarterCategory';

export const revalidate = 60;

export const metadata = {
  title: "Starter dan Alternator | Indo Teknik",
  description:
    "Temukan starter dan alternator berkualitas untuk kendaraan dan mesin industri. Indo Teknik menyediakan berbagai pilihan starter dan alternator asli dari merek terpercaya untuk performa optimal.",
  alternates: {
    canonical: 'https://indo-teknik.com/products/other-products/starter-alternator',
  },
  keywords: [
    "starter",
    "alternator",
    "suku cadang starter",
    "suku cadang alternator",
    "Indo Teknik",
    "sparepart otomotif",
    "starter mobil",
    "alternator mobil",
    "komponen mesin",
    "produk starter alternator",
  ],
  openGraph: {
    title: 'Starter dan Alternator | Indo Teknik',
    description:
      'Temukan starter dan alternator berkualitas untuk kendaraan dan mesin industri. Indo Teknik menyediakan berbagai pilihan starter dan alternator asli dari merek terpercaya untuk performa optimal.',
    url: 'https://indo-teknik.com/products/other-products/starter-alternator',
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
    title: 'Starter dan Alternator | Indo Teknik',
    description:
      'Temukan starter dan alternator berkualitas untuk kendaraan dan mesin industri. Indo Teknik menyediakan berbagai pilihan starter dan alternator asli dari merek terpercaya untuk performa optimal.',
    images: [
      'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
    ],
  },
};

export default function StarterAlternatorPage() {
  return <StarterAlternatorClient categories={categories} />;
}