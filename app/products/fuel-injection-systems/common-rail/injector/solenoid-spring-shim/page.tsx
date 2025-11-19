import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import SolenoidSpringShimClient from './SolenoidSpringShimDetailsClient'; // Pastikan file dan komponen ini ada
export const dynamic = "force-static";
const categoryDetails = {
    name: 'Solenoid Spring Shim',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721616553/cp-indoteknik-v3/productsInjetcor/solenoid_spring_shim_b24-removebg-preview_yfxkbv.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Solenoid Spring Shim',
        'solenoid spring shim',
        'common rail injector',
        'sistem injeksi bahan bakar',
        'diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/fuel-injection-systems/common-rail/injector/solenoid-spring-shim',
    },
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: categoryDetails.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
        images: [
            categoryDetails.imageUrl,
        ],
    },
};

export default function SolenoidSpringShimDetailsPage() {
    return <SolenoidSpringShimClient />;
}