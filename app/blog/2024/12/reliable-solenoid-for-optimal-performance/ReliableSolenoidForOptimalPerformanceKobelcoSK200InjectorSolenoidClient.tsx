'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import blogPosts from '../../../../data/blogPostsData';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const ReliableSolenoidForOptimalPerformanceKobelcoSK200InjectorSolenoid =
    () => {
        const currentPostTitle =
            'Solenoid Handal Kinerja Optimal! Selenoid Injektor Kobelco SK200';
        // Find the current post in blogPosts using the title

        const currentPost = blogPosts.find(
            (post) => post.title === currentPostTitle,
        );

        // Extract the publication date from the current post
        const publicationDate = currentPost
            ? new Date(currentPost.date).toLocaleDateString()
            : 'Unknown Date';

        // Sort blog posts by date (latest first)
        const latestPosts = [...blogPosts].sort(
            (a, b) => new Date(b.date) - new Date(a.date),
        );

        useEffect(() => {
            // Scroll to the top when the component is mounted
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, []); // Empty dependency array to run only once on mount

        const { t } = useTranslation('dec2024Blog');

        return (
            <div className='my-16 lg:flex max-w-[1200px] lg:mx-auto gap-8 rounded-xl md:mx-4 mx-4'>


                <div className='max-w-4xl px-8 pb-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100'>
                    <div>
                        <div className='-mx-5 mb-5'>
                            <GoBack />
                        </div>
                        <h1 className='text-4xl font-bold text-blue-900 mb-4'>
                            {t(currentPostTitle)}
                        </h1>

                        <div className='flex justify-between'>
                            <span className='text-gray-500 text-sm'>
                                Published by <strong>Admin</strong> on{' '}
                                <strong>{publicationDate}</strong>
                            </span>
                            <span className='text-gray-500 text-sm'>
                                Category:{' '}
                                <strong>{currentPost.category}</strong>
                            </span>
                        </div>

                        <div className='mt-5'>
                            <Image
                                className='rounded-xl mx-auto'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734947383/cp-indoteknik-v3/blog/December2024/reliableSolenoidForOptimalPerformance/1_czsui4.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                                {t(
                                    'Apakah Anda sedang mencari solenoid injektor berkualitas tinggi untuk mesin Kobelco SK200 Anda? Kami punya solusi terbaik untuk Anda!',
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('Keunggulan Utama Solenoid Kami:')}
                                </h2>

                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                        {t('1. Awet dan Tahan Lama')}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734947383/cp-indoteknik-v3/blog/December2024/reliableSolenoidForOptimalPerformance/2_eix0zd.png'
                                            alt='Awet dan Tahan Lama'
                                            width={600}
                                            height={400}
                                        />
                                        <div>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t(
                                                    'Solenoid kami dirancang dengan',
                                                )}{' '}
                                                <strong>
                                                    {t('material unggul')}
                                                </strong>{' '}
                                                {t('dan')}{' '}
                                                <strong>
                                                    {t('desain efisien,')}
                                                </strong>{' '}
                                                {t(
                                                    'memastikan daya tahan tinggi untuk berbagai kebutuhan teknis Anda. Dengan performa maksimal, solenoid ini adalah pilihan tepat untuk mendukung kelancaran operasional mesin Anda.',
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                        {t(
                                            '2. Harga Terjangkau, Kualitas Premium',
                                        )}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734947384/cp-indoteknik-v3/blog/December2024/reliableSolenoidForOptimalPerformance/3_dvszgy.png'
                                            alt='Harga Terjangkau, Kualitas Premium'
                                            width={600}
                                            height={400}
                                        />
                                        <div>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t(
                                                    'Siapa bilang kualitas premium harus mahal? Dengan harga yang',
                                                )}{' '}
                                                <strong>
                                                    {t('ekonomis,')}
                                                </strong>{' '}
                                                {t('solenoid ini menawarkan')}{' '}
                                                <strong>
                                                    {t('keunggulan luar biasa')}
                                                </strong>{' '}
                                                {t(
                                                    'tanpa mengorbankan kualitas.',
                                                )}{' '}
                                                {t(
                                                    'Pilihan ideal untuk kebutuhan Anda yang mengutamakan efisiensi dan anggaran.',
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                        {t('3. Performa Terbaik')}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734947388/cp-indoteknik-v3/blog/December2024/reliableSolenoidForOptimalPerformance/4_enqjnn.png'
                                            alt='Performa Terbaik'
                                            width={600}
                                            height={400}
                                        />
                                        <div>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t('Menggunakan')}{' '}
                                                <strong>
                                                    {t('teknologi canggih')}
                                                </strong>
                                                {t(
                                                    ', solenoid ini siap meningkatkan',
                                                )}{' '}
                                                <strong>
                                                    {t('efisiensi operasional')}
                                                </strong>{' '}
                                                {t(
                                                    'dan mendukung kinerja optimal mesin Kobelco SK200 Anda.',
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-lg font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Jangan Sampai Kehabisan!')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                {t('Belanja Sekarang di')}{' '}
                                <strong>{t('INDO TEKNIK')}</strong>{' '}
                                {t('dan dapatkan')}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/products/fuel-injection-systems/common-rail/injector'
                                >
                                    {t('solenoid injektor terbaik')}
                                </Link>{' '}
                                {t('sebelum stok habis!')}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/contact'
                                >
                                    {t('Hubungi kami')}
                                </Link>{' '}
                                {t('untuk pemesanan online atau kunjungi')}{' '}
                                <strong>{t('INDO TEKNIK')}</strong> {t('di')}{' '}
                                <Link
                                    className='text-blue-900 underline font-bold'
                                    href='https://maps.app.goo.gl/4xGp2xYfn98Uo5437'
                                >
                                    {t(
                                        'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau, 2829.',
                                    )}
                                </Link>
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Optimalkan kinerja mesin Anda dengan produk berkualitas dari',
                                )}{' '}
                                <strong>{t('INDO TEKNIK!')}</strong>
                            </p>
                        </div>
                    </div>

                    <SharePost currentPostTitle={currentPostTitle} />
                </div>
                <SidebarPost latestPosts={latestPosts} />
            </div>
        );
    };

export default ReliableSolenoidForOptimalPerformanceKobelcoSK200InjectorSolenoid;
