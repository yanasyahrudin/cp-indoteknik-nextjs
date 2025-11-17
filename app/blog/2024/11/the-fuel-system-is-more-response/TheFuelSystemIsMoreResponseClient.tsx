'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const TheFuelSystemIsMoreResponseWithTheItechCommonRailPipeLimiterSwitch = ({
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
                            Category: <strong>{currentPost.category}</strong>
                        </span>
                    </div>

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732090463/cp-indoteknik-v3/blog/November2024/thefuelSystemIsMoreResponsive/1_tikpqd.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t(
                                'Apakah Anda menginginkan performa mesin diesel yang optimal dan responsif setiap saat, bahkan dalam kondisi kerja yang berat? Sistem bahan bakar diesel yang cepat tanggap kini bukan sekadar impian. Dengan'
                            )}{' '}
                            <strong>
                                {t(
                                    'Switch Limiter Pipa Common Rail ITech 23810-30100'
                                )}
                            </strong>
                            ,{' '}
                            {t(
                                'Anda bisa meningkatkan akurasi dan ketahanan bahan bakar mesin diesel Anda secara signifikan.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t(
                            'Mengapa Harus Menggunakan Switch Limiter Pipa Common Rail ITech 23810-30100?'
                        )}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('1. Akurasi Tinggi')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732090463/cp-indoteknik-v3/blog/November2024/thefuelSystemIsMoreResponsive/2_bliuss.png'
                                        alt='Pembongkaran Tangki'
                                        width={600}
                                        height={300}
                                    />
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Sensor ini dirancang untuk memberikan'
                                        )}{' '}
                                        <strong>
                                            {t(
                                                'pembacaan tekanan yang sangat akurat'
                                            )}
                                        </strong>{' '}
                                        {t(
                                            'dalam sistem bahan bakar. Dengan akurasi yang tinggi, sensor ini membantu mesin mengontrol bahan bakar secara presisi sesuai kebutuhan. Ini berarti pembakaran bahan bakar yang lebih efisien dan pemborosan bahan bakar yang minimal.'
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('2. Performa Mesin yang Optimal')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732090453/cp-indoteknik-v3/blog/November2024/thefuelSystemIsMoreResponsive/3_dbjclt.png'
                                        alt='Pengosongan Tangki'
                                        width={600}
                                        height={400}
                                    />
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Performa mesin diesel sangat bergantung pada tekanan bahan bakar yang stabil, terutama dalam kondisi beban berat.'
                                        )}{' '}
                                        <strong>
                                            {t(
                                                'Switch Limiter Pipa Common Rail ITech'
                                            )}
                                        </strong>{' '}
                                        {t(
                                            'memastikan tekanan bahan bakar di tingkat yang ideal, yang membuat mesin tetap kuat dan responsif. Dengan kontrol tekanan yang optimal, mesin tidak hanya menjadi lebih cepat tanggap, tapi juga mengurangi risiko keausan komponen akibat ketidakstabilan tekanan.'
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('3. Desain Tahan Lama')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732090451/cp-indoteknik-v3/blog/November2024/thefuelSystemIsMoreResponsive/4_qeigqd.png'
                                        alt='Pembersihan Menyeluruh'
                                        width={600}
                                        height={400}
                                    />
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Menghadapi kondisi ekstrem pada mesin diesel bukanlah tugas yang mudah, namun sensor ini terbuat dari material berkualitas yang tahan terhadap tekanan tinggi dan suhu panas.'
                                        )}{' '}
                                        <strong>
                                            {t('Desainnya yang tahan lama')}
                                        </strong>{' '}
                                        {t(
                                            'membuat sensor ini lebih awet, bahkan dalam kondisi kerja yang paling berat sekalipun. Jadi, Anda dapat mengandalkan kinerja mesin diesel Anda tanpa harus sering mengganti sensor.'
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Mengapa Memilih INDO TEKNIK?')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            {t('Sebagai')}{' '}
                            <strong>
                                {t(
                                    'one-stop solution untuk semua kebutuhan diesel, INDO TEKNIK'
                                )}
                            </strong>{' '}
                            {t(
                                'menghadirkan produk-produk berkualitas yang menjamin kepuasan dan kenyamanan Anda. Setiap produk yang kami tawarkan, termasuk'
                            )}{' '}
                            <strong>
                                {t(
                                    'Switch Limiter Pipa Common Rail ITech 23810-30100'
                                )}
                            </strong>
                            ,{' '}
                            {t(
                                'telah teruji kualitasnya sehingga Anda bisa mendapatkan performa terbaik dari mesin diesel Anda.'
                            )}
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                        {t('TUNGGU APA LAGI? BELANJA SEKARANG!')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            {t('Dapatkan segera')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/other-products/sensor'
                            >
                                {t(
                                    'Switch Limiter Pipa Common Rail ITech 23810-30100'
                                )}
                            </Link>{' '}
                            {t(
                                'dan rasakan peningkatan signifikan dalam performa mesin diesel Anda.'
                            )}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                {t('Hubungi kami')}
                            </Link>{' '}
                            {t('atau kunjungi')}{' '}
                            <strong>{t('INDO TEKNIK')}</strong>{' '}
                            {t('langsung sekarang juga di')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/tv6LFpPkjZWqS6xU8'
                            >
                                {t(
                                    'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau, 28292'
                                )}
                            </Link>{' '}
                            {t(
                                'dan nikmati pengalaman berkendara dengan mesin yang lebih responsif dan hemat bahan bakar.'
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

export default TheFuelSystemIsMoreResponseWithTheItechCommonRailPipeLimiterSwitch;
