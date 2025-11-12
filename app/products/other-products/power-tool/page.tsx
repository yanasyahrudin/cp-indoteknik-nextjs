import PowerToolClient from './PowerToolClient';

export const metadata = {
  title: "Power Tool | Indo Teknik",
  description:
    "Temukan berbagai power tool seperti electric drill, grinder, circular saw, jet cleaner, dan alat ukur berkualitas untuk kebutuhan otomotif, industri, dan konstruksi. Indo Teknik menyediakan produk power tool asli dari merek terpercaya.",
  
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/power-tool',
    },
    keywords: [
    "power tool",
    "electric drill",
    "electric grinder",
    "electric circular saw",
    "electric wall drill",
    "electric concrete drill",
    "battery drill",
    "jet cleaner",
    "laser line",
    "distance measuring tool",
    "detection tool",
    "alat listrik",
    "alat industri",
    "Indo Teknik",
    "sparepart power tool",
    "produk power tool",
    "alat bengkel",
    "alat konstruksi",
  ],
};

export default function PowerToolPage() {
  return <PowerToolClient />;
}