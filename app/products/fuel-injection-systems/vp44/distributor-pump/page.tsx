import VP44Client from './VP44Client';

export const metadata = {
    title: 'VP44 Distributor Pump | Indo Teknik',
    description:
        'Temukan VP44 Distributor Pump asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan produk dari merek terpercaya, cocok untuk berbagai aplikasi otomotif dan industri.',

    alternates: {
        canonical:
            'https://indo-teknik.com/products/fuel-injection-systems/vp44/distributor-pump',
    },
    keywords: [
        'VP44 Distributor Pump',
        'suku cadang diesel',
        'fuel injection',
        'Bosch',
        'Indo Teknik',
        'pompa injeksi VP44',
        'sparepart diesel',
        'distributor pump',
        'injeksi bahan bakar',
    ],
    openGraph: {
        title: 'VP44 Distributor Pump | Indo Teknik',
        description:
            'Temukan VP44 Distributor Pump asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan produk dari merek terpercaya, cocok untuk berbagai aplikasi otomotif dan industri.',
        url: 'https://indo-teknik.com/products/fuel-injection-systems/vp44/distributor-pump',
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
        title: 'VP44 Distributor Pump | Indo Teknik',
        description:
            'Temukan VP44 Distributor Pump asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan produk dari merek terpercaya, cocok untuk berbagai aplikasi otomotif dan industri.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function VP44Page() {
     const categories = [
            {
                id: 1,
                name: 'Distributor Pump VP44',
                type: 'VP44',
                description:
                    'Reliable distributor pump for efficient fuel injection in diesel engines.',
                imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721888185/cp-indoteknik-v3/productsDistributorPump/CIMG4447-removebg-preview_pzeimm.png',
                link: '/products/fuel-injection-systems/vp44/distributor-pump/distributor-pump-vp44',
            },
        ];
    return <VP44Client categories={categories} />;
}
