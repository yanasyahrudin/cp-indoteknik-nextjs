'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const TheSecretToDieselEnginesStayingPowerful_ChooseSCVPajeroDakarFromIndoTeknik =
    ({
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
                                Category:{' '}
                                <strong>{currentPost.category}</strong>
                            </span>
                        </div>

                        <div className='mt-5'>
                            <Image
                                className='rounded-xl mx-auto'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733804637/cp-indoteknik-v3/blog/December2024/theSecrettoDieselEnginesStayingPowerful/1_vmrhqh.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                                {t(
                                    'Apakah Anda pemilik Pajero Dakar yang ingin mesin diesel tetap bertenaga maksimal? Jangan biarkan performa menurun karena komponen yang kurang optimal. Saatnya upgrade'
                                )}{' '}
                                <strong>
                                    {t('Suction Control Valve (SCV) Pajero')}
                                </strong>{' '}
                                {t(
                                    'Anda dengan produk berkualitas tinggi dari'
                                )}{' '}
                                <strong>{t('INDO TEKNIK!')}</strong>
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        'Kenapa Harus Pilih SCV Pajero Dakar dari INDO TEKNIK?'
                                    )}
                                </h2>

                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                        {t(
                                            'Presisi Tinggi untuk Performa Optimal'
                                        )}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733804634/cp-indoteknik-v3/blog/December2024/theSecrettoDieselEnginesStayingPowerful/2_pbg5qq.png'
                                            alt='Presisi Tinggi untuk Performa Optimal'
                                            width={600}
                                            height={400}
                                        />
                                        <div>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t(
                                                    'SCV ini dirancang dengan presisi luar biasa untuk memastikan suplai bahan bakar yang akurat. Hasilnya? Performa mesin diesel Anda tetap optimal, baik di jalan raya maupun medan berat.'
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                        {t(
                                            'Harga Terjangkau, Kualitas Premium'
                                        )}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733804635/cp-indoteknik-v3/blog/December2024/theSecrettoDieselEnginesStayingPowerful/3_hh0m8c.png'
                                            alt='Harga Terjangkau, Kualitas Premium'
                                            width={600}
                                            height={400}
                                        />
                                        <div>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t(
                                                    'Siapa bilang kualitas bagus harus mahal?'
                                                )}{' '}
                                                <strong>
                                                    {t('SCV Itech')}
                                                </strong>{' '}
                                                {t(
                                                    'menawarkan teknologi unggul dengan harga yang sangat ekonomis. Solusi ini memungkinkan Anda mendapatkan'
                                                )}{' '}
                                                <strong>
                                                    {' '}
                                                    {t(
                                                        'kualitas premium tanpa harus menguras kantong.'
                                                    )}
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                        {t('Awet dan Tahan Lama')}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733804640/cp-indoteknik-v3/blog/December2024/theSecrettoDieselEnginesStayingPowerful/4_ihjywk.png'
                                            alt='Awet dan Tahan Lama'
                                            width={600}
                                            height={400}
                                        />
                                        <div>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t(
                                                    'Material berkualitas tinggi menjamin SCV ini'
                                                )}{' '}
                                                <strong>
                                                    {t('tahan panas dan aus,')}
                                                </strong>{' '}
                                                {t(
                                                    'menjadikannya pilihan tepat untuk kendaraan Anda. Investasi jangka panjang yang pasti menguntungkan!'
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-gray-600 mt-6 font-semibold'>
                                    Part Number: 1460A062
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-lg font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Buru Sekarang Sebelum Kehabisan!')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/products/fuel-injection-systems/common-rail/supply-pump'
                                >
                                    {t('SCV terbaik untuk Pajero Dakar')}
                                </Link>{' '}
                                {t('Anda hanya tersedia di')}{' '}
                                <strong>{t('INDO TEKNIK')}</strong>.{' '}
                                {t(
                                    'Jangan tunggu lama-lama, stok terbatas dan permintaan terus meningkat.'
                                )}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/contact'
                                >
                                    {t('Hubungi kami')}
                                </Link>{' '}
                                {t(
                                    'untuk pemesanan online atau kunjungi langsung'
                                )}{' '}
                                <strong>{t('INDO TEKNIK')}</strong> {t('di')}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='https://maps.app.goo.gl/oJdVeabpuftBaSkL6'
                                >
                                    {t(
                                        'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau, 28292.'
                                    )}
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Kenapa Pilih INDO TEKNIK?')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                <strong>{t('INDO TEKNIK')}</strong>{' '}
                                {t(
                                    'adalah one-stop solution untuk semua kebutuhan diesel Anda. Dengan produk-produk berkualitas, kami membantu bisnis Anda bekerja lebih efisien, hemat bahan bakar, dan tetap kuat di berbagai medan.'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <strong>
                                    {t(
                                        'Jangan tunggu! Upgrade sekarang dan rasakan bedanya. Mesin diesel Anda lebih hemat di jalan, lebih tangguh di medan, dan lebih menguntungkan bagi usaha Anda.'
                                    )}
                                </strong>
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <strong>INDO TEKNIK</strong>{' '}
                                {t(
                                    '- One stop solution for all your diesel needs'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Bekerja lebih efisien, untung lebih banyak!'
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

export default TheSecretToDieselEnginesStayingPowerful_ChooseSCVPajeroDakarFromIndoTeknik;
