import AboutUsClient from './AboutClient';

export const metadata = {
  title: "Tentang Kami | Indo Teknik",
  description: "Kenali Indo Teknik Pekanbaru, distributor dan bengkel resmi spare part diesel terpercaya sejak 1997. Temukan sejarah, visi, misi, keunggulan, dan komitmen kami dalam menyediakan produk serta layanan terbaik untuk kebutuhan industri dan otomotif Anda.",
  alternate: {
    canonical: "https://indoteknik.co/about",
  },
  keywords: [
    "Tentang Indo Teknik",
    "Profil perusahaan diesel",
    "Sejarah Indo Teknik",
    "Distributor spare part diesel",
    "Bengkel diesel Pekanbaru",
    "Spare part diesel Indonesia",
    "Layanan mesin diesel",
    "Indo Teknik Pekanbaru"
  ],
};

export default function AboutPage() {
  return <AboutUsClient />;
}