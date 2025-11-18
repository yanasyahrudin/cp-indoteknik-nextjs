'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import AnimatedSection from '../components/animated-section/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

function BlogPost({ post }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const { t } = useTranslation('blog');

    return (
        <AnimatedSection zoomType='zoomIn'>
            <div className='rounded-lg shadow-md flex flex-col sm:flex-row gap-4 pr-4'>
                <div className='w-full sm:w-1/4 sm:py-4 sm:pl-4'>
                    <Link href={post.link}>
                        <Image
                            className='w-full sm:w-56 rounded-xl'
                            src={post.image}
                            alt={post.title}
                            width={900} 
                            height={600}
                        />
                    </Link>
                </div>

                <div className='w-full sm:py-4 pr-4 px-4 pb-4 lg:px-0 md:px-0'>
                    <Link href={post.link}>
                        <h2 className='text-xl sm:text-2xl font-bold text-blue-900'>
                            {t(`${post.title}`)}
                        </h2>
                    </Link>
                    <p className='text-xs sm:text-sm text-gray-500 mb-2'>
                        <strong>Posted on:</strong>{' '}
                        {new Date(post.date).toLocaleDateString('id-ID')}
                    </p>
                    <p className='text-xs sm:text-sm text-gray-600 mb-4'>
                        <strong>Category:</strong> {post.category}
                    </p>
                    <p className='text-gray-700 text-sm sm:text-base'>
                        {t(`${post.content}`)}...{' '}
                        <Link
                            className='font-bold text-blue-900 hover:text-blue-700'
                            href={post.link}
                        >
                            {t('Selengkapnya')}
                        </Link>
                    </p>
                </div>
            </div>
        </AnimatedSection>
    );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers: number[] = [];
    const maxPageNumbersToShow = 3;

    // Generate visible page numbers
    const startPage = Math.max(
        currentPage - Math.floor(maxPageNumbersToShow / 2),
        1
    );
    const endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav
            aria-label='Pagination'
            className='flex justify-center items-center gap-4 mt-6'
        >
            {startPage > 1 && (
                <>
                    <button
                        onClick={() => onPageChange(1)}
                        className='px-4 py-2 text-blue-900 rounded-xl shadow-md bg-gradient-to-bl from-neutral-50 to-blue-200'
                    >
                        1
                    </button>
                    {startPage > 2 && (
                        <span className='px-2 text-blue-900'>...</span>
                    )}
                </>
            )}

            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-4 py-2 shadow-md  rounded-xl ${
                        number === currentPage
                            ? 'bg-blue-900 text-white shadow-md font-medium'
                            : 'text-blue-900 bg-gradient-to-bl from-neutral-50 to-blue-200'
                    }`}
                >
                    {number}
                </button>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && (
                        <span className='px-2 text-blue-900'>...</span>
                    )}
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className='px-4 py-2 text-blue-900 rounded-xl shadow-md bg-gradient-to-bl from-neutral-50 to-blue-200'
                    >
                        {totalPages}
                    </button>
                </>
            )}
        </nav>
    );
}

export default function BlogPage({ blogPosts }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const router = useRouter();
    const searchParams = useSearchParams();

    // Parse URL query parameters on mount
    useEffect(() => {
        const category = searchParams.get('category') || 'All';
        const search = searchParams.get('search') || '';
        const page = parseInt(searchParams.get('page') || '1', 10);

        setSelectedCategory(category);
        setSearchTerm(search);
        setCurrentPage(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    // Update URL query parameters when search term, category, or page changes
    useEffect(() => {
        const params = new URLSearchParams();
        if (selectedCategory !== 'All')
            params.set('category', selectedCategory);
        if (searchTerm) params.set('search', searchTerm);
        if (currentPage > 1) params.set('page', currentPage.toString());
        router.replace(`?${params.toString()}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, selectedCategory, currentPage]);

    const filteredPosts = blogPosts
        .filter((post) => {
            const matchesCategory =
                selectedCategory === 'All' ||
                post.category === selectedCategory;
            const matchesSearch = post.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const { t } = useTranslation('blog');

    return (
        <AnimatedSection zoomType='zoomIn'>
            <div className='lg:w-[1200px] mx-4 lg:mx-auto py-8 lg:py-10 bg-gradient-to-bl from-neutral-50 to-blue-100 px-4 sm:px-8 mt-10 mb-10 rounded-xl '>


                <header className='text-center mb-6 sm:mb-10'>
                    <h1 className='text-3xl sm:text-4xl font-bold text-blue-900 animate-bounceIn'>
                        {t('Blog Indo Teknik')}
                    </h1>
                    <p className='text-base sm:text-lg text-gray-700 mt-2 animate-bounceIn'>
                        {t(
                            'Sumber inspirasi Anda untuk pengetauhan diesel dan otomotif'
                        )}
                    </p>
                </header>

                <section className='flex flex-col sm:flex-row justify-between mb-6 sm:mb-10 gap-4'>
                    <input
                        type='text'
                        className='w-full sm:w-2/3 p-3 rounded-lg shadow text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900'
                        placeholder='Search blog posts...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className='w-full  sm:w-auto p-3 rounded-lg shadow text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900'
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value='All'>All Categories</option>
                        <option value='Spare Parts'>Spare Parts</option>
                        <option value='Workshop'>Workshop</option>
                        <option value='Fabrication'>Fabrication</option>
                    </select>
                </section>

                <section className='grid grid-cols-1 gap-6'>
                    {currentPosts.length > 0 ? (
                        currentPosts.map((post) => (
                            <BlogPost key={post.id} post={post} />
                        ))
                    ) : (
                        <p className='text-gray-700 text-center'>
                            No blog posts found.
                        </p>
                    )}
                </section>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </AnimatedSection>
    );
}
