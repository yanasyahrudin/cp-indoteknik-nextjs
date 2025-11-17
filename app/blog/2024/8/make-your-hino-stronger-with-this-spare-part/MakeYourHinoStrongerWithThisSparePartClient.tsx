'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const MakeYourHinoStrongerWithThisSparePart = ({
    currentPost,
    publicationDate,
    latestPosts,
    currentPostTitle,
    jsonLd,
}) => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []); // Empty dependency array to run only once on mount

    const { t } = useTranslation('aug2024Blog');

    return (
        <div className='my-16 lg:flex max-w-[1200px] lg:mx-auto gap-8 rounded-xl md:mx-4 mx-4'>
            <div className='max-w-4xl px-8 pb-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100'>
                <div>
                    <div className='-mx-5 mb-5'>
                        <GoBack />
                    </div>
                    <h1 className='text-4xl font-bold text-blue-900 mb-4'>
                        {currentPostTitle}
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734581975/cp-indoteknik-v3/blog/August2024/makeYourHinoStrongerWithThisSparePart/1_wjl1ak.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                            {t(
                                'Untuk menjaga performa kendaraan niaga Anda tetap maksimal,'
                            )}{' '}
                            <strong>{t('Hino J08E Truck 500 Euro 4')}</strong>{' '}
                            {t('hadir dengan solusi terbaik:')}{' '}
                            <strong>
                                {t(
                                    'SUPPLY PUMP 294050-0940/22100-E0532 ITECH!'
                                )}
                            </strong>
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Apa yang Membuat Supply Pump Ini Spesial?')}
                    </h2>

                    <div className='gap-6 text-justify lg:ml-4 md:ml-4'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            {t(
                                '1. Dirancang untuk Semprotan Bahan Bakar yang Presisi'
                            )}
                        </h3>
                        <div className='lg:flex md:flex gap-4'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/v1734581986/cp-indoteknik-v3/blog/August2024/makeYourHinoStrongerWithThisSparePart/2_sswsyv.png'
                                alt='Dirancang untuk Semprotan Bahan Bakar yang Presisi'
                                width={400}
                                height={300}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                    {t(
                                        'Supply pump ini meningkatkan tenaga mesin dengan memberikan semprotan bahan bakar yang akurat dan efisien. Hasilnya? Mesin Hino Anda bekerja lebih optimal dan hemat bahan bakar.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-6 text-justify lg:ml-4 md:ml-4'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            {t('2. Mengalirkan Bahan Bakar dengan Stabil')}
                        </h3>
                        <div className='lg:flex md:flex gap-4'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734581966/cp-indoteknik-v3/blog/August2024/makeYourHinoStrongerWithThisSparePart/3_sbrxfe.png'
                                alt='Harga Kompetitif, Kualitas Unggulan'
                                width={400}
                                height={300}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                    {t(
                                        'Supply pump ini memastikan bahan bakar mengalir dari tangki ke sistem bahan bakar tanpa hambatan.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-6 text-justify lg:ml-4 md:ml-4'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            {t('3. Menjaga Tekanan dan Aliran yang Konsisten')}
                        </h3>
                        <div className='lg:flex md:flex gap-4'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734581974/cp-indoteknik-v3/blog/August2024/makeYourHinoStrongerWithThisSparePart/4_fsjgu9.png'
                                alt='Menjaga Tekanan dan Aliran yang Konsisten'
                                width={400}
                                height={300}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                    {t(
                                        'Stabilitas adalah kunci performa. Supply pump ini menjaga tekanan dan aliran bahan bakar agar tetap stabil sehingga mesin dapat bekerja dengan maksimal.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Kenapa Indo Teknik?')}
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        <strong>Indo Teknik</strong>{' '}
                        {t(
                            'adalah solusi lengkap untuk semua kebutuhan diesel Anda. Dengan produk berkualitas tinggi dan layanan terpercaya, kami memastikan kendaraan Anda selalu dalam kondisi terbaik.'
                        )}
                    </p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Tunggu Apa Lagi?')}
                    </h2>

                    <div>
                        <p className='text-gray-600 my-4 text-justify'>
                            <strong>{t('Belanja sekarang')}</strong>{' '}
                            {t('dan dapatkan')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/fuel-injection-systems/common-rail/supply-pump'
                            >
                                {t('SUPPLY PUMP 294050-0940/22100-E0532 ITECH')}
                            </Link>{' '}
                            {t('hanya di')} <strong>{t('Indo Teknik!')}</strong>
                        </p>
                        <p className='text-gray-600 my-4 text-justify'>
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                {t('Hubungi kami')}
                            </Link>{' '}
                            {t('untuk pemesanan online atau kunjungi langsung')}{' '}
                            <strong>{t('Indo Teknik')}</strong> {t('di')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/iwKriKECj8gdpsnV9'
                            >
                                {t(
                                    'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau, 28292.'
                                )}
                            </Link>
                        </p>
                        <p className='text-gray-600 my-4 text-justify'>
                            {t(
                                'Jadikan tenaga Hino Anda lebih kuat dan siap menghadapi tantangan apa pun di jalan.'
                            )}
                        </p>
                    </div>
                </div>

                <SharePost currentPostTitle={currentPostTitle} />
            </div>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SidebarPost latestPosts={latestPosts} />
        </div>
    );
};

export default MakeYourHinoStrongerWithThisSparePart;
