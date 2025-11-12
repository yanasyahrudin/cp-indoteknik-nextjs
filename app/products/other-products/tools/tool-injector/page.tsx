import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import ToolInjectorDetailsClient from './ToolInjectorDetailsClient';

const categoryDetails = {
    name: 'Tool Injector',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839443/cp-indoteknik-v3/productsTools/TOOL_INJECTOR_DENSO_3_PINS_DSC_0815_maqcxw_u89aeb_wgksp5.png',
};

export const metadata = {
    title: 'Tool Injector | Indo Teknik',
    description: 'Tool Injector untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Tool Injector',
        'tool injector',
        'alat injector',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/tool-injector',
    },
    openGraph: {
        title: 'Tool Injector | Indo Teknik',
        description: 'Tool Injector untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Tool Injector',
            },
        ],
    },
};

export default function ToolInjectorDetailsPage() {
    return <ToolInjectorDetailsClient />;
}