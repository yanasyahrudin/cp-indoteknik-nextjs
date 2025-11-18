import React, { Suspense } from 'react';
import BlogClient from './BlogClient';
import blogPosts from '../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Blog | Indo Teknik',
    description:
        'Temukan artikel terbaru seputar mesin diesel, tips perawatan, berita industri, dan informasi produk dari Indo Teknik Pekanbaru. Dapatkan wawasan dan solusi terbaik untuk kebutuhan otomotif dan industri Anda.',
    alternate: {
        canonical: 'https://indo-teknik.com/blog',
    },
    keywords: [
        'blog Indo Teknik',
        'artikel mesin diesel',
        'tips perawatan diesel',
        'berita industri otomotif',
        'info spare part Pekanbaru',
        'solusi mesin industri',
        'update teknologi diesel',
    ],
    openGraph: {
        title: 'Blog | Indo Teknik', // Judul halaman
        description:
            'Temukan artikel terbaru seputar mesin diesel, tips perawatan, berita industri, dan informasi produk dari Indo Teknik Pekanbaru. Dapatkan wawasan dan solusi terbaik untuk kebutuhan otomotif dan industri Anda.', // Deskripsi halaman
        url: 'https://indo-teknik.com/blog', // URL halaman
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
        title: 'Blog | Indo Teknik', // Judul halaman
        description:
            'Temukan artikel terbaru seputar mesin diesel, tips perawatan, berita industri, dan informasi produk dari Indo Teknik Pekanbaru. Dapatkan wawasan dan solusi terbaik untuk kebutuhan otomotif dan industri Anda.', // Deskripsi halaman
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function BlogPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogClient blogPosts={blogPosts} />;
        </Suspense>
    );
}
