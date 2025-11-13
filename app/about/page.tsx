import AboutUsClient from './AboutClient';

export const metadata = {
    title: 'Tentang Kami | Indo Teknik',
    description:
        'Kenali Indo Teknik Pekanbaru, distributor dan bengkel resmi spare part diesel terpercaya sejak 1997. Temukan sejarah, visi, misi, keunggulan, dan komitmen kami dalam menyediakan produk serta layanan terbaik untuk kebutuhan industri dan otomotif Anda.',
    alternate: {
        canonical: 'https://indoteknik.co/about',
    },
    keywords: [
        'Tentang Indo Teknik',
        'Profil perusahaan diesel',
        'Sejarah Indo Teknik',
        'Distributor spare part diesel',
        'Bengkel diesel Pekanbaru',
        'Spare part diesel Indonesia',
        'Layanan mesin diesel',
        'Indo Teknik Pekanbaru',
    ],
    openGraph: {
        title: 'Tentang Kami | Indo Teknik',
        description:
            'Kenali Indo Teknik Pekanbaru, distributor dan bengkel resmi spare part diesel terpercaya sejak 1997. Temukan sejarah, visi, misi, keunggulan, dan komitmen kami dalam menyediakan produk serta layanan terbaik untuk kebutuhan industri dan otomotif Anda.',
        url: 'https://indoteknik.co/about',
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
        title: 'Tentang Kami | Indo Teknik',
        description:
            'Kenali Indo Teknik Pekanbaru, distributor dan bengkel resmi spare part diesel terpercaya sejak 1997. Temukan sejarah, visi, misi, keunggulan, dan komitmen kami dalam menyediakan produk serta layanan terbaik untuk kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Tentang Indo Teknik",
        "description": "Kenali Indo Teknik Pekanbaru, distributor dan bengkel resmi spare part diesel terpercaya sejak 1997. Temukan sejarah, visi, misi, keunggulan, dan komitmen kami dalam menyediakan produk serta layanan terbaik untuk kebutuhan industri dan otomotif Anda.",
        "url": "https://indoteknik.co/about"
    };
    return <AboutUsClient jsonLd={jsonLd} />;
}
