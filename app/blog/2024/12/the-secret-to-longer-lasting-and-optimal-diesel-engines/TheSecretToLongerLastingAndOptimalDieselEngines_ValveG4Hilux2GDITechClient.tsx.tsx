'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const TheSecretToLongerLastingAndOptimalDieselEngines_ValveG4Hilux2GDITech = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734084284/cp-indoteknik-v3/blog/December2024/theSecretToLongerLastingAndOptimalDieselEngines/1_blauhb.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                            {t(
                                'Apakah Anda ingin mesin diesel Anda lebih awet, efisien, dan bebas dari masalah? Jika iya, jawabannya ada pada'
                            )}{' '}
                            <strong>
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href=''
                                >
                                    {t('VALVE G4 HILUX 2GD ITECH')}.
                                </Link>
                            </strong>{' '}
                            {t(
                                'Dengan teknologi mutakhir dan kualitas premium, komponen ini adalah solusi terbaik untuk menjaga performa kendaraan Anda tetap optimal.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                {t('Mengapa Memilih VALVE G4 HILUX 2GD ITECH?')}
                            </h2>

                            <div className='ml-4'>
                                <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('1. Harga Terjangkau, Kualitas Premium')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734084280/cp-indoteknik-v3/blog/December2024/theSecretToLongerLastingAndOptimalDieselEngines/2_h6tzx4.png'
                                        alt='Presisi Tinggi untuk Performa Optimal'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'VALVE G4 ITECH menawarkan keseimbangan sempurna antara harga dan kualitas. Dengan harga yang ekonomis, Anda tidak perlu mengorbankan performa mesin.'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='ml-4'>
                                <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        '2. Daya Tahan Terhadap Panas dan Tekanan Tinggi'
                                    )}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734084283/cp-indoteknik-v3/blog/December2024/theSecretToLongerLastingAndOptimalDieselEngines/3_szui3e.png'
                                        alt='Harga Terjangkau, Kualitas Premium'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Dirancang menggunakan teknologi canggih, valve ini memastikan:'
                                            )}
                                        </p>
                                        <ul className='list-disc ml-4'>
                                            <li className='text-gray-600'>
                                                {t(
                                                    'Aliran bahan bakar yang akurat.'
                                                )}
                                            </li>
                                            <li className='text-gray-600'>
                                                {t(
                                                    'Tekanan bahan bakar tetap stabil.'
                                                )}
                                            </li>
                                            <li className='text-gray-600'>
                                                {t(
                                                    'Pengurangan getaran berlebih pada mesin.'
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='ml-4'>
                                <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('3. Awet dan Tahan Lama')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734084280/cp-indoteknik-v3/blog/December2024/theSecretToLongerLastingAndOptimalDieselEngines/4_bpktv2.png'
                                        alt='Awet dan Tahan Lama'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Fungsi aliran bahan bakar yang terkontrol membuat komponen lain, seperti injector dan nozzle, lebih awet. Hasilnya, Anda bisa menghemat biaya perawatan dalam jangka panjang.'
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
                        {t('Keunggulan Utama')}
                    </h2>
                    <div className=' gap-6 text-justify'>
                        <ul className='list-disc ml-4 text-gray-600 mb-4'>
                            <li className='text-gray-600'>
                                <strong>{t('Teknologi Mutakhir:')}</strong>
                                {'  '}
                                {t('Mendukung performa mesin yang stabil.')}
                            </li>
                            <li className='text-gray-600'>
                                <strong>{t('Efisiensi Maksimal:')}</strong>{' '}
                                {t(
                                    'Membantu meningkatkan efisiensi bahan bakar.'
                                )}
                            </li>
                            <li className='text-gray-600'>
                                <strong>{t('Tahan Lama:')}</strong>{' '}
                                {t(
                                    'Komponen dibuat untuk menghadapi kondisi ekstrem.'
                                )}
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='text-lg font-semibold text-gray-800 mt-6 mb-2'>
                        {t('BELI SEKARANG SEBELUM KEHABISAN!')}
                    </h2>
                    <div className='gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Jangan lewatkan kesempatan untuk meningkatkan sistem aliran bahan bakar Anda dengan'
                            )}
                            <strong>
                                {' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='/products/fuel-injection-systems/common-rail/injector'
                                >
                                    {t('VALVE G4 HILUX 2GD ITECH')}.{' '}
                                </Link>
                            </strong>
                            {t('Tersedia eksklusif di')}{' '}
                            <strong>{t('INDO TEKNIK.')}</strong>{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='/contact'
                            >
                                {t('Hubungi kami')}
                            </Link>{' '}
                            {t('untuk pemesanan online atau kunjungi alamat')}{' '}
                            <strong>{t('INDO TEKNIK')}</strong> {t('di')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='https://maps.app.goo.gl/dsXQnx9m83xDV4rcA'
                            >
                                {t(
                                    'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau.'
                                )}
                            </Link>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>
                                {t('Upgrade kendaraan Anda hari ini!')}
                            </strong>
                            <br />
                            <strong>
                                {t(
                                    'VALVE G4 HILUX 2GD ITECH: Kualitas Terbaik untuk Performa Optimal.'
                                )}
                            </strong>
                            <br />
                            <strong>
                                {t('Buru Cepat! Jangan sampai kehabisan!')}
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

export default TheSecretToLongerLastingAndOptimalDieselEngines_ValveG4Hilux2GDITech;
