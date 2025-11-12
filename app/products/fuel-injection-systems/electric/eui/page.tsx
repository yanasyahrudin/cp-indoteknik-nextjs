import EUIClient from './EUIClient';

export const metadata = {
    title: 'EUI | Indo Teknik',
    description:
        'Temukan suku cadang EUI (Electronic Unit Injector) asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan produk dari merek terpercaya seperti Bosch, Itech, dan Zexel, cocok untuk berbagai aplikasi otomotif dan industri.',
    
    alternates: {
        canonical: 'https://indo-teknik.com/products/fuel-injection-systems/electric/eui',
    },
    keywords: [
        'EUI',
        'Electronic Unit Injector',
        'suku cadang diesel',
        'fuel injection',
        'Bosch',
        'Itech',
        'Zexel',
        'Indo Teknik',
        'kategori EUI',
        'injektor elektrik',
        'sparepart diesel',
    ],
};

export default function EUIPage() {
    return <EUIClient />;
}
