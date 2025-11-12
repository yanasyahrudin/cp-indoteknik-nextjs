import BlogClient from './BlogClient';

export const metadata = {
  title: "Blog | Indo Teknik Pekanbaru",
  description: "Temukan artikel terbaru seputar mesin diesel, tips perawatan, berita industri, dan informasi produk dari Indo Teknik Pekanbaru. Dapatkan wawasan dan solusi terbaik untuk kebutuhan otomotif dan industri Anda.",
  keywords: [
    "blog Indo Teknik",
    "artikel mesin diesel",
    "tips perawatan diesel",
    "berita industri otomotif",
    "info spare part Pekanbaru",
    "solusi mesin industri",
    "update teknologi diesel"
  ],
};

export default function BlogPage() {
  return <BlogClient />;
}