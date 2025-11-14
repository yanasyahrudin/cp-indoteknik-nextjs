import FuelInjectionPumpClient from './FuelInjectionPumpClient';

export const revalidate = 60;

export const metadata = {
    title: 'Layanan Fuel Injection Pump | Indo Teknik',
    description:
        'Layanan perbaikan dan servis fuel injection pump diesel konvensional di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',

    alternates: {
        canonical:
            'https://indo-teknik.com/services/conventional/fuel-injection-pump',
    },
    keywords: [
        'servis fuel injection pump diesel',
        'perbaikan fuel injection pump',
        'fuel injection pump Pekanbaru',
        'Indo Teknik Pekanbaru',
        'teknisi diesel profesional',
        'spare part fuel injection pump',
        'bengkel diesel Pekanbaru',
        'alamat Indo Teknik',
        'jam operasional Indo Teknik',
        'kontak Indo Teknik',
    ],
    openGraph: {
        title: 'Layanan Fuel Injection Pump | Indo Teknik',
        description:
            'Layanan perbaikan dan servis fuel injection pump diesel konvensional di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
        url: 'https://indo-teknik.com/services/conventional/fuel-injection-pump',
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
        title: 'Layanan Fuel Injection Pump | Indo Teknik',
        description:
            'Layanan perbaikan dan servis fuel injection pump diesel konvensional di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function FuelInjectionPumpPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Layanan Fuel Injection Pump',
        description: 'Kami menyediakan layanan perbaikan dan perawatan untuk berbagai jenis Fuel Injection Pump. Layanan kami mencakup perbaikan untuk pompa injeksi bahan bakar tipe in-line dan rotary, menggunakan mesin terbaru, tools dan spare part yang lengkap, serta teknisi handal dan berpengalaman.',
    };
    return <FuelInjectionPumpClient jsonLd={jsonLd} />;
}
