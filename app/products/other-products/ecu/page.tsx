import ECUClient from './ECUClient';

export const metadata = {
  title: "ECU | Indo Teknik",
  description:
    "Temukan ECU (Electronic Control Unit) asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan berbagai pilihan ECU untuk kebutuhan otomotif dan industri.",
 
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/ecu',
    },
    keywords: [
    "ECU",
    "Electronic Control Unit",
    "suku cadang diesel",
    "sparepart ECU",
    "Indo Teknik",
    "kontrol injeksi",
    "sparepart otomotif",
    "injeksi bahan bakar",
    "produk ECU",
  ],
};

export default function ECUPage() {
  return <ECUClient />;
}