import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import InjectorRemovalToolDetails from './InjectorRemovalToolDetailsClient';

const categoryDetails = {
    name: 'Injector Removal Tool',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721964747/cp-indoteknik-v3/productsTools/DSC_1282-removebg-preview_pnjpsn.png',
};
export const revalidate = 60;
export const metadata = {
    title: 'Injector Removal Tool | Indo Teknik',
    description: 'Injector Removal Tool untuk melepas injektor pada mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Injector Removal Tool',
        'alat pelepas injektor',
        'diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
        'removal tool',
        'injektor',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/injector-removal-tool',
    },
    openGraph: {
        title: 'Injector Removal Tool | Indo Teknik',
        description: 'Injector Removal Tool untuk melepas injektor pada mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Injector Removal Tool',
            },
        ],
    },
};

export default function InjectorRemovalToolDetailsPage() {
    return <InjectorRemovalToolDetails />;
}