import SocketClient from './SocketClient';
import categories from '../../../data/socketCategory';

export const revalidate = 60;
export const metadata = {
    title: 'Socket | Indo Teknik',
    description:
        'Temukan berbagai socket seperti oil temperature sensor socket, SCV injector socket, dan solenoid valve hydraulic socket untuk kebutuhan otomotif, industri, dan bengkel. Indo Teknik menyediakan socket asli dan tahan lama untuk berbagai aplikasi.',

    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/socket',
    },
    keywords: [
        'socket',
        'oil temperature sensor socket',
        'SCV injector socket',
        'solenoid valve hydraulic socket',
        'suku cadang socket',
        'socket industri',
        'socket otomotif',
        'Indo Teknik',
        'alat bengkel',
        'produk socket',
        'komponen mesin',
    ],
    openGraph: {
        title: 'Socket | Indo Teknik',
        description:
            'Temukan berbagai socket seperti oil temperature sensor socket, SCV injector socket, dan solenoid valve hydraulic socket untuk kebutuhan otomotif, industri, dan bengkel. Indo Teknik menyediakan socket asli dan tahan lama untuk berbagai aplikasi.',
        url: 'https://indo-teknik.com/products/other-products/socket',
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
        title: 'Socket | Indo Teknik',
        description:
            'Temukan berbagai socket seperti oil temperature sensor socket, SCV injector socket, dan solenoid valve hydraulic socket untuk kebutuhan otomotif, industri, dan bengkel. Indo Teknik menyediakan socket asli dan tahan lama untuk berbagai aplikasi.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function SocketPage() {
    return <SocketClient categories={categories} />;
}
