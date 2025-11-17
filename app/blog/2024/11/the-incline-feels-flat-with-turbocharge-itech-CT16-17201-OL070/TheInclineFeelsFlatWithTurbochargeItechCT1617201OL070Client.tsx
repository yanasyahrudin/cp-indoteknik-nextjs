'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const TheInclineFeelsFlatWithTurbochargerItechCT16_17201_OL070ForKijangInnova2KD =
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

        const { t } = useTranslation('nov2024Blog');

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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732088435/cp-indoteknik-v3/blog/November2024/theInclineFeelsFlatWithTurbochargeItechCT16_17201_OL070/1_hnfxmw.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Menghadapi tanjakan terjal atau ingin akselerasi yang lebih responsif tanpa kehilangan efisiensi bahan bakar? Kini, itu semua bisa terwujud dengan'
                                )}{' '}
                                <strong>
                                    {t('Turbocharger Itech CT16 17201-OL070')}
                                </strong>
                                ,{' '}
                                {t(
                                    'solusi terbaik untuk Kijang Innova 2KD Anda!'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t(
                                'Keunggulan Turbocharger Itech CT16 17201-OL070'
                            )}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <div className='lg:ml-10'>
                                    <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                        {t('1. Akselerasi Lebih Responsif')}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732088445/cp-indoteknik-v3/blog/November2024/theInclineFeelsFlatWithTurbochargeItechCT16_17201_OL070/2_zr6hi7.png'
                                            alt='Akselerasi Lebih Responsif'
                                            width={600}
                                            height={400}
                                        />
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Dengan Turbocharger Itech, gas terasa lebih ringan dan responsif. Saat menekan pedal gas, tenaga langsung tersalurkan, memberikan pengalaman berkendara yang lebih dinamis.'
                                            )}{' '}
                                            <strong>
                                                {t(
                                                    'Tidak perlu ragu saat harus menyalip atau menghadapi tanjakan berat'
                                                )}
                                            </strong>
                                            {t(
                                                '—mobil Anda siap memberikan performa maksimal kapan saja.'
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className='lg:ml-10'>
                                    <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                        {t(
                                            '2. Efisiensi dan Performa Maksimal'
                                        )}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732088443/cp-indoteknik-v3/blog/November2024/theInclineFeelsFlatWithTurbochargeItechCT16_17201_OL070/3_i1iljw.png'
                                            alt='Efisiensi dan Performa Maksimal'
                                            width={600}
                                            height={400}
                                        />
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Turbocharger bukan hanya soal tenaga besar, tetapi juga efisiensi. Dengan pembakaran yang lebih sempurna, konsumsi bahan bakar bisa menjadi lebih irit. Hasilnya,'
                                            )}{' '}
                                            <strong>
                                                {t(
                                                    'perjalanan jauh menjadi lebih ekonomis tanpa mengurangi kenyamanan'
                                                )}
                                            </strong>
                                            .
                                        </p>
                                    </div>
                                </div>
                                <div className='lg:ml-10'>
                                    <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                        {t('3. Daya Tahan Mesin Lebih Lama')}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732088451/cp-indoteknik-v3/blog/November2024/theInclineFeelsFlatWithTurbochargeItechCT16_17201_OL070/4_tvki7o.png'
                                            alt='Pembersihan Menyeluruh'
                                            width={600}
                                            height={400}
                                        />
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Turbo membantu mesin utama bekerja lebih ringan. Dengan beban mesin yang berkurang'
                                            )}
                                            ,{' '}
                                            <strong>
                                                {t(
                                                    'risiko overheating saat perjalanan panjang atau membawa beban berat juga menurun'
                                                )}
                                            </strong>
                                            .{' '}
                                            {t(
                                                'Ini artinya, mesin Anda lebih awet dan tahan lama!'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('TUNGGU APA LAGI?')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t('Segera dapatkan')}{' '}
                                    <Link
                                        className='text-blue-900 font-bold underline'
                                        href='/products/other-products/turbo-charger'
                                    >
                                        {t(
                                            'Turbocharger Itech CT16 17201-0L070'
                                        )}
                                    </Link>{' '}
                                    {t('untuk Kijang Innova 2KD Anda di')}{' '}
                                    <strong>INDO TEKNIK</strong>.{' '}
                                    {t(
                                        'Nikmati perjalanan tanpa hambatan dengan akselerasi yang mulus dan performa tak tertandingi.'
                                    )}{' '}
                                </p>
                                <p className='text-gray-600 mb-4'>
                                    <Link
                                        className='font-bold underline text-blue-900'
                                        href='/contact'
                                    >
                                        {t('Hubungi kami')}
                                    </Link>{' '}
                                    {t('atau kunjungi langsung')}{' '}
                                    <strong>INDO TEKNIK</strong> {t('di ')}
                                    <Link
                                        className='text-blue-900 font-bold underline'
                                        href='https://maps.app.goo.gl/KAakdunKjm61qC5X8'
                                    >
                                        Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                        Sekaki Pekanbaru Riau, 28292
                                    </Link>
                                    . <strong>INDO TEKNIK</strong>-One stop
                                    solution for all your diesel needs.
                                </p>
                            </div>
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

export default TheInclineFeelsFlatWithTurbochargerItechCT16_17201_OL070ForKijangInnova2KD;
