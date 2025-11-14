import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import FilterOpeningToolDetailsClient from './FilterOpeningToolDetails'

const categoryDetails = {
    name: 'Filter Opening Tool',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963153/cp-indoteknik-v3/productsTools/filter_opening_tool_example.png', // Ganti dengan URL gambar Filter Opening Tool yang benar
};
export const revalidate = 60;
export const metadata = {
    title: 'Filter Opening Tool | Indo Teknik',
    description: 'Filter Opening Tool untuk membuka filter oli dan bahan bakar dengan mudah dan aman. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Filter Opening Tool',
        'kunci filter',
        'alat buka filter',
        'alat teknik',
        'Indo Teknik',
        'alat industri',
        'alat bengkel',
        'filter oli',
        'filter solar',
        'alat pertukangan',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/filter-opening-tool',
    },
    openGraph: {
        title: 'Filter Opening Tool | Indo Teknik',
        description: 'Filter Opening Tool untuk membuka filter oli dan bahan bakar dengan mudah dan aman. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Filter Opening Tool',
            },
        ],
    },
};

export default function FilterOpeningToolDetailsPage() {
    return <FilterOpeningToolDetailsClient />;
}