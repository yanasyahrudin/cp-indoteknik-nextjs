import SupplyPumpClient from './SupplyPumpClient';
import categories from '../../../../data/supplyPumpCategory';
export const metadata = {
    title: 'Supply Pump | Indo Teknik',
    description:
        'Temukan berbagai komponen supply pump seperti camshaft supply pump, filter supply pump, plunger, SCV, sensor temperature, repair kit, dan lainnya untuk sistem bahan bakar diesel. Indo Teknik menyediakan supply pump dan suku cadang asli untuk kebutuhan otomotif dan industri.',

    alternates: {
        canonical:
            'https://indo-teknik.com/products/fuel-injection-systems/common-rail/supply-pump',
    },
    keywords: [
        'supply pump',
        'camshaft supply pump',
        'filter supply pump',
        'plunger',
        'SCV',
        'sensor temperature',
        'repair kit',
        'pipe hose',
        'rotor set feed pump',
        'spring plunger',
        'supply pump assy',
        'valve pressure regulator',
        'suku cadang diesel',
        'Indo Teknik',
        'komponen supply pump',
        'sparepart bahan bakar',
        'produk supply pump',
    ],
    openGraph: {
        title: 'Supply Pump | Indo Teknik',
        description:
            'Temukan berbagai komponen supply pump seperti camshaft supply pump, filter supply pump, plunger, SCV, sensor temperature, repair kit, dan lainnya untuk sistem bahan bakar diesel. Indo Teknik menyediakan supply pump dan suku cadang asli untuk kebutuhan otomotif dan industri.',
        url: 'https://indo-teknik.com/products/fuel-injection-systems/common-rail/supply-pump',
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
        title: 'Supply Pump | Indo Teknik',
        description:
            'Temukan berbagai komponen supply pump seperti camshaft supply pump, filter supply pump, plunger, SCV, sensor temperature, repair kit, dan lainnya untuk sistem bahan bakar diesel. Indo Teknik menyediakan supply pump dan suku cadang asli untuk kebutuhan otomotif dan industri.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function SupplyPumpPage() {
    return <SupplyPumpClient categories={categories}/>;
}
