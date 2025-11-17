'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const MaintainYourEnginePerformanceWiththisITECHSCVItechSuctionControlValve294200_4970 =
    ({
        currentPost,
        publicationDate,
        latestPosts,
        jsonLd,
        currentPostTitle,
    }) => {
        useEffect(() => {
            // Scroll to the top when the component is mounted
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, []); // Empty dependency array to run only once on mount

        const { t } = useTranslation('nov2024Blog');

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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732092713/cp-indoteknik-v3/blog/November2024/maintainYourEnginePerformanceWithThisITECHSCV/1_xshb52.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Apakah Anda ingin menjaga performa mesin diesel Anda tetap prima meski digunakan dalam aktivitas berat? Kini Anda dapat mengandalkan'
                                )}{' '}
                                <strong>
                                    {t('Suction Control Valve (SCV)')}
                                </strong>{' '}
                                {t('dari')} <strong>{t('Itech')}</strong>{' '}
                                {t('dengan model')}{' '}
                                <strong>{t('294200-4970')}</strong>.{' '}
                                {t(
                                    'Dengan kualitas terbaik dan desain khusus, SCV Itech menawarkan berbagai keunggulan yang bisa membantu meningkatkan efisiensi mesin diesel Anda. Yuk, simak lebih lanjut!'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Menggunakan Material Berkualitas Tinggi')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732092696/cp-indoteknik-v3/blog/November2024/maintainYourEnginePerformanceWithThisITECHSCV/2_dwracq.png'
                                alt=''
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t(
                                        'SCV Itech telah melalui uji ketahanan dalam berbagai kondisi ekstrem dan terbukti memiliki daya tahan yang luar biasa. Terbuat dari material pilihan, SCV Itech ini dirancang untuk'
                                    )}{' '}
                                    <strong>
                                        {t(
                                            'mengurangi frekuensi penggantian suku cadang'
                                        )}
                                    </strong>
                                    ,{' '}
                                    {t(
                                        'sehingga Anda dapat fokus pada pekerjaan tanpa perlu khawatir akan kerusakan yang kerap terjadi.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Tekanan Bahan Bakar Lebih Stabil')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732092707/cp-indoteknik-v3/blog/November2024/maintainYourEnginePerformanceWithThisITECHSCV/3_a83gmy.png'
                                alt='Tekanan Bahan Bakar Lebih Stabil'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t(
                                        'Salah satu faktor penting untuk menjaga performa mesin adalah aliran bahan bakar yang stabil. SCV Itech menggunakan teknologi presisi tinggi yang memastikan tekanan bahan bakar tetap konsisten, bahkan dalam suhu tinggi, beban berat, atau saat mesin berjalan pada kecepatan tinggi. Ini memberikan'
                                    )}{' '}
                                    <strong>
                                        {t('kinerja optimal pada mesin')}
                                    </strong>
                                    ,{' '}
                                    <strong>
                                        {t('mengurangi potensi kerusakan')}
                                    </strong>
                                    , {t('dan')}{' '}
                                    <strong>
                                        {t(
                                            'memastikan proses pembakaran yang efisien'
                                        )}
                                    </strong>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Dirancang Khusus untuk Mesin Diesel Berat')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732092700/cp-indoteknik-v3/blog/November2024/maintainYourEnginePerformanceWithThisITECHSCV/5_rafbyq.png'
                                alt='Dirancang Khusus untuk Mesin Diesel Berat'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t('Model')}{' '}
                                <strong>{t('SCV 294200-4970 Itech')}</strong>{' '}
                                {t(
                                    'ini dirancang secara khusus agar cocok dengan Supply Pump mesin Isuzu 6HK1 dan mesin Faw 6DL2H yang kerap digunakan untuk aktivitas berat. Dengan desain yang presisi, SCV ini memberikan'
                                )}{' '}
                                <strong>{t('performa')}</strong> dan{' '}
                                <strong>
                                    {t('kompatibilitas yang optimal')}
                                </strong>{' '}
                                {t(
                                    'untuk mesin diesel komersial yang digunakan dalam kondisi kerja berat dan medan yang sulit.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className=' mt-6 gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                <strong>
                                    Indo Teknik - One Stop Solution for All Your
                                    Diesel Needs!
                                </strong>
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Untuk informasi lebih lanjut atau pemesanan, jangan ragu'
                                )}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/contact'
                                >
                                    {t('menghubungi kami')}
                                </Link>{' '}
                                {t(
                                    'atau anda bisa langsung mengunjungi kami di alamat'
                                )}{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='https://maps.app.goo.gl/UmnGnk7as4gnoCmZ6'
                                >
                                    Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                    Sekaki, Pekanbaru Riau, 28292
                                </Link>
                                .{' '}
                                {t(
                                    'untuk melihat produk-produk berkualitas kami secara langsung.'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <strong>{t('TUNGGU APA LAGI?')}</strong>
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t('Jaga performa mesin Anda dan dapatkan')}{' '}
                                <Link
                                    className='text-blue-900 font-bold underline'
                                    href='/products/fuel-injection-systems/common-rail/supply-pump/scv'
                                >
                                    {t('SCV berkualitas')}
                                </Link>{' '}
                                {t('ini sekarang juga hanya di')}{' '}
                                <strong>INDO TEKNIK!</strong>
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

export default MaintainYourEnginePerformanceWiththisITECHSCVItechSuctionControlValve294200_4970;
