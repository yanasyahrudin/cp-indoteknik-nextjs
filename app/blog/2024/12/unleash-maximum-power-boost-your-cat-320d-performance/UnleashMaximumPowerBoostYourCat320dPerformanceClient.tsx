'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import blogPosts from '../../../../data/blogPostsData';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const UnleashMaximumPower_BoostYourCAT320DPerformanceWithThisGame_ChangingInjector =
    () => {
        const currentPostTitle =
            'Tingkatkan Performa CAT 320D Anda: Dapatkan Tenaga Maksimal dengan Injector Hebat Ini!';
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
            <div className='my-10 lg:flex max-w-[1200px] lg:mx-auto gap-8 rounded-xl md:mx-4 mx-4'>

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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734338271/cp-indoteknik-v3/blog/December2024/unleashMaximumPower_BoostYourCAT320DPerformance/1_d7fwfe.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                <strong>
                                    {t(
                                        'Awet dan Tahan Lama: Performa Mesin Terjaga, Hemat Biaya Perawatan, dan Bahan Bakar',
                                    )}
                                </strong>{' '}
                                <br />
                                {t(
                                    'Mesin yang handal adalah investasi jangka panjang. Dengan menggunakan',
                                )}{' '}
                                <strong>{t('Injector CAT 320D,')} </strong>
                                {t(
                                    'performa mesin diesel Anda tetap terjaga dalam kondisi optimal. Selain itu, efisiensi bahan bakar yang lebih baik membuat pengeluaran harian menjadi lebih hemat, sekaligus mengurangi biaya perawatan yang sering muncul karena komponen yang cepat aus.',
                                )}{' '}
                            </p>
                        </div>
                    </div>

                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <div className=''>
                                <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                                    {t('Harga Terjangkau, Kualitas Premium')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734338266/cp-indoteknik-v3/blog/December2024/unleashMaximumPower_BoostYourCAT320DPerformance/2_bxw2nc.png'
                                        alt='Harga Terjangkau, Kualitas Premium'
                                        width={600}
                                        height={400}
                                    />
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t('Injector CAT 320D hadir dengan')}{' '}
                                        <strong>{t('harga ekonomis,')} </strong>
                                        {t(
                                            'tanpa mengorbankan kualitas. Dengan banyak keunggulan yang ditawarkan, produk ini menjadi pilihan ideal untuk menjaga kinerja kendaraan Anda tetap prima. Anda tidak perlu khawatir soal anggaran—solusi hemat ini tetap memberikan standar premium yang layak Anda dapatkan.',
                                        )}{' '}
                                    </p>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                                    {t('Efisiensi dan Kekuatan Mesin Dijamin')}
                                </h2>

                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734338264/cp-indoteknik-v3/blog/December2024/unleashMaximumPower_BoostYourCAT320DPerformance/3_tpi6m6.png'
                                        alt='Efisiensi dan Performa Maksimal'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t('Dirancang menggunakan')}{' '}
                                            <strong>
                                                {t('teknologi canggih,')}{' '}
                                            </strong>
                                            {t('Injector CAT 320D memastikan:')}{' '}
                                        </p>
                                        <ul className='text-gray-600 mb-4 mt-2 lg:mt-0 list-disc ml-4'>
                                            <li className='font-semibold'>
                                                {t('Bahan bakar lebih efisien')}
                                            </li>
                                            <li className='font-semibold'>
                                                {t('Performa mesin optimal')}
                                            </li>
                                            <li className='font-semibold'>
                                                {t(
                                                    'Kekuatan dan daya tahan lebih baik',
                                                )}
                                            </li>
                                        </ul>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Dengan komponen ini, kendaraan Anda siap menghadapi segala tantangan di medan kerja, baik untuk proyek berat maupun aktivitas sehari-hari.',
                                            )}{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Dapatkan Sekarang di INDO TEKNIK')}
                    </h2>
                    <Image
                        className='rounded-xl w-[400px]'
                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734338262/cp-indoteknik-v3/blog/December2024/unleashMaximumPower_BoostYourCAT320DPerformance/4_v1yc7g.png'
                        alt='Dapatkan Sekarang di INDO TEKNIK'
                        width={600}
                        height={400}
                    />
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <p className='text-gray-600 mb-4 mt-6'>
                                <strong>INDO TEKNIK</strong>{' '}
                                {t(
                                    'adalah solusi lengkap untuk semua kebutuhan diesel Anda. Kami menyediakan Injector CAT 320D berkualitas tinggi yang dirancang untuk memberikan tenaga maksimal pada mesin diesel Anda.',
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <strong>
                                    {t(
                                        'BURUAN! BELANJA SEKARANG SEBELUM KEHABISAN!',
                                    )}
                                </strong>
                                <br />
                                {t(
                                    'Pastikan Anda tidak melewatkan kesempatan untuk mendapatkan',
                                )}{' '}
                                <Link className='font-bold underline text-blue-900' href='/products/fuel-injection-systems/common-rail/injector'>{t('Injector CAT 320D')}</Link> {t('hanya di')}{' '}
                                <strong>INDO TEKNIK</strong>.{' '}
                                {t('Rasakan sendiri perbedaannya:')}{' '}
                                <strong>
                                    {t(
                                        'kinerja lebih halus, efisiensi bahan bakar meningkat, dan daya tahan luar biasa.',
                                    )}
                                </strong>
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/contact'
                                >
                                    {t('Hubungi kami')}
                                </Link>{' '}
                                {t('untuk pemesanan online atau kunjungi')}{' '}
                                <strong>INDO TEKNIK</strong>{' '}
                                {t('langsung di alamat')}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='https://maps.app.goo.gl/4xGp2xYfn98Uo5437'
                                >
                                    {' '}
                                    Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                    Sekaki, Pekanbaru - Riau, 28292.
                                </Link>
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <strong>
                                    {t('Tenaga maksimal, efisiensi optimal!')}
                                </strong>{' '}
                                <br />{' '}
                                {t(
                                    'Kunjungi kami sekarang dan buat mesin Anda bekerja lebih baik dari sebelumnya!',
                                )}
                            </p>
                        </div>
                    </div>
                    <SharePost currentPostTitle={currentPostTitle} />
                </div>
                <SidebarPost latestPosts={latestPosts} />
            </div>
        );
    };

export default UnleashMaximumPower_BoostYourCAT320DPerformanceWithThisGame_ChangingInjector;
