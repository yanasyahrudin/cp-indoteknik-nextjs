import FuelInjectionClient from './FuelInjectionPumpClient';

export const metadata = {
    title: 'Fuel Injection Pump | Indo Teknik',
    description:
        'Temukan berbagai komponen fuel injection pump seperti arm assy, camshaft, delivery valve, plunger, rotor head, dan lainnya untuk sistem injeksi bahan bakar diesel konvensional. Indo Teknik menyediakan suku cadang asli dan berkualitas untuk kebutuhan otomotif dan industri.',

    alternates: {
        canonical:
            'https://indo-teknik.com/products/fuel-injection-systems/conventional/fuel-injection-pump',
    },
    keywords: [
        'fuel injection pump',
        'arm assy',
        'camshaft',
        'delivery valve',
        'plunger',
        'rotor head',
        'pump assy',
        'governor',
        'bushing',
        'gasket inline',
        'gasket rotary',
        'roller inline',
        'roller rotary',
        'solenoid FIP',
        'suku cadang diesel',
        'Indo Teknik',
        'komponen injeksi bahan bakar',
        'sparepart konvensional',
        'produk fuel injection pump',
    ],
    openGraph: {
        title: 'Fuel Injection Pump | Indo Teknik',
        description:
            'Temukan berbagai komponen fuel injection pump seperti arm assy, camshaft, delivery valve, plunger, rotor head, dan lainnya untuk sistem injeksi bahan bakar diesel konvensional. Indo Teknik menyediakan suku cadang asli dan berkualitas untuk kebutuhan otomotif dan industri.',
        url: 'https://indo-teknik.com/products/fuel-injection-systems/conventional/fuel-injection-pump',
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
        title: 'Fuel Injection Pump | Indo Teknik',
        description:
            'Temukan berbagai komponen fuel injection pump seperti arm assy, camshaft, delivery valve, plunger, rotor head, dan lainnya untuk sistem injeksi bahan bakar diesel konvensional. Indo Teknik menyediakan suku cadang asli dan berkualitas untuk kebutuhan otomotif dan industri.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function FuelInjectionPumpPage() {
    return <FuelInjectionClient />;
}
