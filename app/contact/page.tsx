import ContactClient from './ContactClient';

export const metadata = {
    title: 'Kontak | Indo Teknik',
    description:
        'Hubungi Indo Teknik Pekanbaru untuk konsultasi, pemesanan spare part diesel, servis mesin, dan informasi alamat serta jam operasional. Kami siap melayani kebutuhan industri dan otomotif Anda.',
    alternates: {
        canonical: 'https://indo-teknik.com/contact',
    },
    keywords: [
        'kontak Indo Teknik',
        'alamat Indo Teknik Pekanbaru',
        'telepon bengkel diesel',
        'jam operasional Indo Teknik',
        'spare part diesel Pekanbaru',
        'servis mesin diesel',
        'konsultasi mesin diesel',
    ],
    openGraph: {
        title: 'Kontak | Indo Teknik',
        description:
            'Hubungi Indo Teknik Pekanbaru untuk konsultasi, pemesanan spare part diesel, servis mesin, dan informasi alamat serta jam operasional. Kami siap melayani kebutuhan industri dan otomotif Anda.',
        url: 'https://indo-teknik.com/contact',
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
        title: 'Kontak | Indo Teknik',
        description:
            'Hubungi Indo Teknik Pekanbaru untuk konsultasi, pemesanan spare part diesel, servis mesin, dan informasi alamat serta jam operasional. Kami siap melayani kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
