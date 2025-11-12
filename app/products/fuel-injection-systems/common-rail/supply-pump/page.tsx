import SupplyPumpClient from './SupplyPumpClient';

export const metadata = {
    title: 'Supply Pump | Indo Teknik',
    description:
        'Temukan berbagai komponen supply pump seperti camshaft supply pump, filter supply pump, plunger, SCV, sensor temperature, repair kit, dan lainnya untuk sistem bahan bakar diesel. Indo Teknik menyediakan supply pump dan suku cadang asli untuk kebutuhan otomotif dan industri.',
    
    alternates: {
        canonical: 'https://indo-teknik.com/products/fuel-injection-systems/common-rail/supply-pump',
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
};

export default function SupplyPumpPage() {
    return <SupplyPumpClient />;
}
