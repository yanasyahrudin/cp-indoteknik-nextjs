'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import blogPosts from '../../../../data/blogPostsData';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const MaximizeYourHeavyEquipmentPerformanceWithTheCAT320DInjectionPump = () => {
    const currentPostTitle =
        'Maksimalkan Performa Alat Berat Anda dengan Injection Pump CAT 320D!';
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

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: t(currentPostTitle),
        datePublished: currentPost ? currentPost.date : '',
        image: currentPost ? currentPost.image : '',
    };

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
                            Category: <strong>{currentPost.category}</strong>
                        </span>
                    </div>

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734686279/cp-indoteknik-v3/blog/December2024/MaximizeYourHeavyEquipmentPerformance/1_mn5sfe.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                            {t(
                                'Apakah Anda ingin meningkatkan performa alat berat Anda sambil tetap menghemat biaya operasional?',
                            )}{' '}
                            <strong>{t('Injection Pump CAT 320D')}</strong>{' '}
                            {t(
                                'adalah solusi terbaik untuk kebutuhan alat berat Anda. Dirancang untuk memberikan kinerja maksimal, produk ini telah menjadi pilihan utama bagi para profesional di industri alat berat.',
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                {t('Keunggulan Injection Pump CAT 320D')}
                            </h2>

                            <div className='ml-4'>
                                <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('1. Awet dan Tahan Lama')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734686277/cp-indoteknik-v3/blog/December2024/MaximizeYourHeavyEquipmentPerformance/2_dqqckf.png'
                                        alt='Awet dan Tahan Lama'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            <strong>
                                                {t('Injection Pump CAT 320D ')}
                                            </strong>{' '}
                                            {t(
                                                'dibuat dengan material unggulan yang dirancang untuk menghadapi kondisi kerja paling ekstrem. Banyak pengguna yang telah membuktikan keandalannya. Anda tidak perlu khawatir soal ketahanan, karena produk ini mampu bertahan dalam jangka waktu yang lama.',
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='ml-4'>
                                <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('2. Harga Terjangkau, Kualitas Premium')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734686304/cp-indoteknik-v3/blog/December2024/MaximizeYourHeavyEquipmentPerformance/3_vh3qpy.png'
                                        alt='Harga Terjangkau, Kualitas Premium'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Meski memiliki banyak keunggulan,',
                                            )}{' '}
                                            <strong>
                                                {t('Injection Pump CAT 320D')}
                                            </strong>{' '}
                                            {t(
                                                'tetap hadir dengan harga yang ekonomis. Ini menjadikannya pilihan yang sangat realistis tanpa harus mengorbankan kualitas. Dengan produk ini, Anda mendapatkan performa premium tanpa membebani anggaran.',
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='ml-4'>
                                <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        '3. Hemat Bahan Bakar dan Performa Tinggi',
                                    )}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734686281/cp-indoteknik-v3/blog/December2024/MaximizeYourHeavyEquipmentPerformance/4_thv4o1.png'
                                        alt='Hemat Bahan Bakar dan Performa Tinggi'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Teknologi canggih yang digunakan dalam',
                                            )}{' '}
                                            <strong>
                                                {t('Injection Pump CAT 320D')}
                                            </strong>{' '}
                                            {t(
                                                'dirancang untuk menyelesaikan proyek besar dengan lebih cepat dan efisien. Selain itu, produk ini membantu Anda menghemat bahan bakar, sehingga operasional alat berat Anda menjadi lebih hemat biaya.',
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
                        {t(
                            'Mengapa Pilih Injection Pump CAT 320D dari INDO TEKNIK?',
                        )}
                    </h2>
                    <div className=' gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            <strong>{t('INDO TEKNIK')} </strong>
                            {t(
                                'adalah tempat terpercaya untuk mendapatkan',
                            )}{' '}
                            <strong>{t('Injection Pump CAT 320D.')}</strong>{' '}
                            {t(
                                'Dengan reputasi yang telah teruji, kami menyediakan produk berkualitas tinggi yang siap membantu Anda menyelesaikan proyek-proyek besar dengan lebih mudah.',
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-lg font-semibold text-gray-800 mt-6 mb-2'>
                        {t('BELI SEKARANG SEBELUM KEHABISAN!')}
                    </h2>
                    <div className='gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            {t('Jangan lewatkan kesempatan untuk memiliki')}
                                {' '}
                            <Link className='font-bold underline text-blue-900' href='/products/fuel-injection-systems/conventional/fuel-injection-pump'>

                                {t('Injection Pump CAT 320D.')}
                            </Link>{' '}
                            {t('Stok terbatas! Pesan sekarang hanya di')}{' '}
                            <strong>{t('INDO TEKNIK')}</strong>{' '}
                            {t(
                                'dan rasakan sendiri keunggulan produk ini.',
                            )}
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {' '}
                            <Link className='font-bold underline text-blue-900' href='/contact'>
                            {t('Hubungi kami')}
                            </Link>
                            {' '}
                            {t('untuk pemesan online atau kunjungi')}{' '}
                            <strong>{t('INDO TEKNIK')} </strong>
                            {t('langsung di')}{' '}
                            <Link className='font-bold underline text-blue-900' href="https://maps.app.goo.gl/4xGp2xYfn98Uo5437">
                            {t(
                                'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau, 28292.',
                            )}
                            </Link>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Tingkatkan efisiensi kerja alat berat Anda hari ini juga!',
                            )}
                        </p>
                    </div>
                </div>

                <SharePost currentPostTitle={currentPostTitle} />
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SidebarPost latestPosts={latestPosts} />
        </div>
    );
};

export default MaximizeYourHeavyEquipmentPerformanceWithTheCAT320DInjectionPump;
