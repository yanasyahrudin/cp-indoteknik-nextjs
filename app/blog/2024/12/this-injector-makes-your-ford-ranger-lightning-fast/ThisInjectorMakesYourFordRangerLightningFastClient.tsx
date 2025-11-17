'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const ThisInjectorMakesYourFordRangerLightningFast = ({
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
                            Category: <strong>{currentPost.category}</strong>
                        </span>
                    </div>

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733711635/cp-indoteknik-v3/blog/December2024/thisInjectorMakesYourFordRangerLightningFast/1_ljawzz.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                            {t(
                                'Jika Anda ingin meningkatkan performa Ford Ranger Anda, ada kabar baik:',
                            )}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/fuel-injection-systems/common-rail/injector'
                            >
                                {t('Injector Ford Ranger 2200CC Continental')}
                            </Link>{' '}
                            {t(
                                'kini hadir dengan beragam keunggulan yang akan membuat mesin diesel Anda lebih bertenaga, tahan lama, dan hemat biaya!',
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                {t(
                                    'Kenapa Harus Memilih Injector Ford Ranger 2200CC Continental?',
                                )}
                            </h2>

                            <div className='ml-4'>
                                <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('1. Mudah dalam Perawatan')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733711630/cp-indoteknik-v3/blog/December2024/thisInjectorMakesYourFordRangerLightningFast/2_wnmqer.png'
                                        alt='Mudah dalam Perawatan'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Injector ini dirancang dengan komponen yang lebih sederhana, sehingga perawatannya menjadi lebih mudah dan ekonomis. Anda tak perlu repot atau mengeluarkan biaya besar untuk memastikan injektor tetap berfungsi optimal.',
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
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733711641/cp-indoteknik-v3/blog/December2024/thisInjectorMakesYourFordRangerLightningFast/3_ws5ien.png'
                                        alt='Harga Terjangkau, Kualitas Premium'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Meski memiliki banyak keunggulan, Injector Continental ini hadir dengan harga ekonomis. Anda bisa menikmati kualitas premium tanpa harus menguras kantong, menjadikannya pilihan realistis untuk semua pengguna Ford Ranger.',
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='ml-4'>
                                <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        '3. Performa Mesin Diesel Tetap Optimal',
                                    )}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733711630/cp-indoteknik-v3/blog/December2024/thisInjectorMakesYourFordRangerLightningFast/4_hvq0my.png'
                                        alt='Performa Mesin Diesel Tetap Optimal'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Dibuat dengan material berkualitas tinggi, injektor ini memastikan presisi tinggi dalam kinerjanya. Hasilnya? Mesin diesel Anda tetap optimal dengan jangka pakai yang lebih panjang.',
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
                        {t('BURUAN BELI SEKARANG!')}
                    </h2>
                    <div className=' gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Jangan sampai kehabisan kesempatan untuk mendapatkan injektor yang bikin Ford Ranger Anda ngebut abis ini!',
                            )}
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>INDO TEKNIK</strong> -{' '}
                            <strong>
                                {t(
                                    'One-stop solution for all your diesel needs',
                                )}
                            </strong>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Tingkatkan performa kendaraan Anda dan nikmati perjalanan tanpa batas bersama',
                            )}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/fuel-injection-systems/common-rail/injector'
                            >
                                {t('Injector Ford Ranger 2200CC Continental.')}
                            </Link>{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                {t('Hubungi sekarang')}
                            </Link>{' '}
                            {t(
                                'juga untuk membeli dan buktikan kualitasnya! atau kunjungi',
                            )}{' '}
                            <strong>{t('Indo Teknik')}</strong>{' '}
                            {t('langsung di')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/oJdVeabpuftBaSkL6'
                            >
                                {t(
                                    'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru Riau, 28292.',
                                )}
                            </Link>
                        </p>

                        <p className='text-gray-600 mb-4'>
                            <strong>
                                {t(
                                    'Ford Ranger Lebih Kencang, Performa Maksimal!',
                                )}
                            </strong>
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

export default ThisInjectorMakesYourFordRangerLightningFast;
