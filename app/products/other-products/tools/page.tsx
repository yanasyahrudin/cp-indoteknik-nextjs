import ToolsClient from './ToolsClient';

export const metadata = {
  title: "Tools | Indo Teknik",
  description:
    "Temukan berbagai tools berkualitas untuk kebutuhan otomotif, industri, dan bengkel. Indo Teknik menyediakan alat khusus seperti injector tool, nozzle tester, digital caliper, dan lainnya dari merek terpercaya.",
  alternates: {
    canonical: 'https://indo-teknik.com/products/other-products/tools',
  },
  keywords: [
    "tools",
    "alat industri",
    "alat bengkel",
    "injector tool",
    "nozzle tester",
    "digital caliper",
    "pressure gauge",
    "stand sketmat",
    "seal kit removal tool",
    "Indo Teknik",
    "suku cadang alat",
    "produk tools",
    "alat otomotif",
    "alat mekanik",
  ],
  openGraph: {
    title: 'Tools | Indo Teknik',
    description:
      'Temukan berbagai tools berkualitas untuk kebutuhan otomotif, industri, dan bengkel. Indo Teknik menyediakan alat khusus seperti injector tool, nozzle tester, digital caliper, dan lainnya dari merek terpercaya.',
    url: 'https://indo-teknik.com/products/other-products/tools',
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
    title: 'Tools | Indo Teknik',
    description:
      'Temukan berbagai tools berkualitas untuk kebutuhan otomotif, industri, dan bengkel. Indo Teknik menyediakan alat khusus seperti injector tool, nozzle tester, digital caliper, dan lainnya dari merek terpercaya.',
    images: [
      'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
    ],
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}