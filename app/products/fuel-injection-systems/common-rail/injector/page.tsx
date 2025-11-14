import InjectorClient from './InjectorClient';
import categories from '../../../../data/injectorCategory';

export const revalidate = 60;
export const metadata = {
    title: 'Injector | Indo Teknik',
    description:
        'Temukan berbagai komponen injector seperti nozzle, control valve, command piston, cup nozzle injector, solenoid, repair kit injector, dan lainnya untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan injector dan suku cadang asli untuk kebutuhan otomotif dan industri.',

    alternates: {
        canonical:
            'https://indo-teknik.com/products/fuel-injection-systems/common-rail/injector',
    },
    keywords: [
        'injector',
        'nozzle',
        'control valve',
        'command piston',
        'cup nozzle injector',
        'solenoid',
        'repair kit injector',
        'shim calibration',
        'micro filter injector',
        'orifice valve',
        'solenoid spring',
        'solenoid valve',
        'valve seat retaining nut',
        'suku cadang diesel',
        'Indo Teknik',
        'komponen injector',
        'sparepart injeksi',
        'produk injector',
    ],
    openGraph: {
        title: 'Injector | Indo Teknik',
        description:
            'Temukan berbagai komponen injector seperti nozzle, control valve, command piston, cup nozzle injector, solenoid, repair kit injector, dan lainnya untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan injector dan suku cadang asli untuk kebutuhan otomotif dan industri.',
        url: 'https://indo-teknik.com/products/fuel-injection-systems/common-rail/injector',
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
        title: 'Injector | Indo Teknik',
        description:
            'Temukan berbagai komponen injector seperti nozzle, control valve, command piston, cup nozzle injector, solenoid, repair kit injector, dan lainnya untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan injector dan suku cadang asli untuk kebutuhan otomotif dan industri.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function InjectorPage() {
    return <InjectorClient categories={categories} />;
}
