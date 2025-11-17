'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const TurboChargerRHV41515A170ITech_MakesThePajeroDakarEvenFasterAndMorePowerful =
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
                <div className='max-w-4xl px-8 pb-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100 '>
                    <div>
                        <div className='-mx-5 mb-5'>
                            <GoBack />
                        </div>

                        <h1 className='text-4xl font-bold text-blue-900 mb-4'>
                            {t(`${currentPostTitle}`)}
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733468886/cp-indoteknik-v3/blog/December2024/turboChargerRHV41515A170Itech/1_opempv.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                                {t(
                                    'Apakah Anda pemilik Pajero Dakar yang ingin meningkatkan performa kendaraan?'
                                )}{' '}
                                <strong>Turbo Charger RHV4 1515A170</strong>{' '}
                                {t(
                                    'dari ITech adalah solusi terbaik! Dengan kombinasi teknologi canggih dan material premium, turbo charger ini siap memberikan tenaga ekstra untuk perjalanan Anda, tanpa kompromi!'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                            {t('Keunggulan Turbo Charger RHV4 ITech')}
                        </h2>
                        <div className='ml-4 lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('Mudah dalam Perawatan')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733468891/cp-indoteknik-v3/blog/December2024/turboChargerRHV41515A170Itech/2_vblxwy.png'
                                        alt='Mudah dalam Perawatan'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Dengan desain yang sederhana, Anda tidak perlu khawatir soal perawatan. Komponen turbo ini dirancang agar'
                                            )}{' '}
                                            <strong>
                                                {t('mudah diakses')}
                                            </strong>
                                            {
                                                ', sehingga perawatan menjadi lebih ekonomis dan efisien.'
                                            }
                                        </p>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('Harga Terjangkau, Kualitas Premium')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733468885/cp-indoteknik-v3/blog/December2024/turboChargerRHV41515A170Itech/3_l6fpoy.png'
                                        alt='Harga Terjangkau, Kualitas Premium'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Turbo ITech menawarkan performa luar biasa dengan harga yang'
                                            )}{' '}
                                            <strong>{t('ekonomis')}</strong>.{' '}
                                            {t(
                                                'Solusi ideal untuk Anda yang ingin meningkatkan tenaga mesin tanpa menguras kantong.'
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('Tahan Terhadap Suhu Tinggi')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733468883/cp-indoteknik-v3/blog/December2024/turboChargerRHV41515A170Itech/4_aqols7.png'
                                        alt='Tahan Terhadap Suhu Tinggi'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Turbo ini dibuat dengan material berkualitas tinggi yang memungkinkan'
                                            )}{' '}
                                            <strong>
                                                {t('stabilitas performa')}
                                            </strong>
                                            {
                                                ', bahkan saat mesin bekerja pada suhu ekstrem. Cocok untuk pengendara yang sering menghadapi medan berat atau perjalanan jauh.'
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Kenapa Harus Memilih Turbo Charger ITech?')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <Image
                                className='rounded-xl mb-4'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733468880/cp-indoteknik-v3/blog/December2024/turboChargerRHV41515A170Itech/5_uyd7g2.png'
                                alt='Kenapa Harus Memilih Turbo Charger ITech?'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t('Dengan')}{' '}
                                <strong>{t('Turbo Charger RHV4 ITech')}</strong>
                                {t(
                                    ', Anda tidak hanya mendapatkan tenaga lebih besar, tetapi juga efisiensi bahan bakar yang optimal. Performa kendaraan Anda akan jauh lebih gacor, siap menghadapi segala tantangan di jalan.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                            {t('BELANJA SEKARANG!')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='/products/other-products/turbo-charger'
                                >
                                    Turbo Charger RHV4 1515A170 ITech
                                </Link>{' '}
                                {t('hanya tersedia di')}{' '}
                                <strong>INDO TEKNIK</strong>.{' '}
                                {t('Jangan sampai kehabisan!')}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='/contact'
                                >
                                    {t('Hubungi kami')}
                                </Link>{' '}
                                {t(
                                    'performa Turbo Charger ITech di Pajero Dakar Anda atau kunjungi langsung'
                                )}{' '}
                                <strong>INDO TEKNIK</strong> {t('di')}{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='https://maps.app.goo.gl/rLA8KGZ8RNyqFhDM7'
                                >
                                    Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                    Sekaki, Pekanbaru - Riau, 28292
                                </Link>
                                .{' '}
                                {t(
                                    'Jadikan setiap perjalanan lebih menyenangkan dengan tenaga turbo yang maksimal!'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                {t('Dengan')}{' '}
                                <strong>{t('Turbo Charger RHV4 ITech')}</strong>
                                {t(
                                    ', Pajero Dakar Anda siap melaju lebih jauh, lebih cepat, dan lebih efisien. Tingkatkan pengalaman berkendara Anda sekarang juga!'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                INDO TEKNIK – One stop solution for all your
                                diesel needs.
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

export default TurboChargerRHV41515A170ITech_MakesThePajeroDakarEvenFasterAndMorePowerful;
