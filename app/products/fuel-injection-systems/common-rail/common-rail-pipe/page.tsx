import CommonRailPipeClient from './CommonRailPipeClient';
import categories from '../../../../data/commonRailPipeCategory';
export const revalidate = 60;
export const metadata = {
    title: 'Common Rail Pipe | Indo Teknik',
    description:
        'Temukan berbagai pilihan pipa common rail diesel berkualitas di Indo Teknik Pekanbaru. Produk original, harga kompetitif, dan dukungan teknisi profesional untuk kebutuhan industri dan otomotif Anda.',

    alternates: {
        canonical:
            'https://indo-teknik.com/products/fuel-injection-systems/common-rail/common-rail-pipe',
    },
    keywords: [
        'pipa common rail diesel',
        'produk common rail',
        'spare part common rail',
        'pipa common rail Pekanbaru',
        'Indo Teknik Pekanbaru',
        'kategori produk diesel',
        'spare part diesel',
        'teknisi diesel profesional',
        'bengkel diesel Pekanbaru',
        'jual pipa common rail',
    ],
    openGraph: {
        title: 'Common Rail Pipe | Indo Teknik',
        description:
            'Temukan berbagai pilihan pipa common rail diesel berkualitas di Indo Teknik Pekanbaru. Produk original, harga kompetitif, dan dukungan teknisi profesional untuk kebutuhan industri dan otomotif Anda.',
        url: 'https://indo-teknik.com/products/fuel-injection-systems/common-rail/common-rail-pipe',
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
        title: 'Common Rail Pipe | Indo Teknik',
        description:
            'Temukan berbagai pilihan pipa common rail diesel berkualitas di Indo Teknik Pekanbaru. Produk original, harga kompetitif, dan dukungan teknisi profesional untuk kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function CommonRailPipePage() {
    return <CommonRailPipeClient categories={categories} />;
}
