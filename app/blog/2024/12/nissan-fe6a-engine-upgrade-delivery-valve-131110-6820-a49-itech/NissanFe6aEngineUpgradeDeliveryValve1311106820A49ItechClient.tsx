'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const NissanFE6AEngineUpgrade_DeliveryValve131110_6820_A49_ITechForMaximumPerformance =
    ({
        currentPost,
        latestPosts,
        currentPostTitle,
        publicationDate,
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733294737/cp-indoteknik-v3/blog/December2024/nissanFE6ADieselEngineUpgrade/1_kzpasm.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Mesin diesel Anda kurang bertenaga? Jangan khawatir! Saatnya menggunakan'
                                )}{' '}
                                <strong>
                                    {t(
                                        'Delivery Valve 131110-6820 (A49) ITech'
                                    )}
                                </strong>
                                .{' '}
                                {t(
                                    'Komponen kecil ini bisa membuat mesin Nissan FE6A Anda bekerja lebih maksimal. Yuk, simak keunggulannya di bawah ini!'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        'Desain yang Praktis dan Mudah Dipasang'
                                    )}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733294738/cp-indoteknik-v3/blog/December2024/nissanFE6ADieselEngineUpgrade/2_mlzkfm.png'
                                        alt='Desain yang Praktis dan Mudah Dipasang'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Delivery Valve ITech dirancang dengan desain yang kompatibel dengan berbagai jenis mesin, termasuk Nissan FE6A. Pemasangannya sangat mudah dan tidak memerlukan perubahan besar pada mesin Anda. Praktis dan hemat waktu!'
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        'Meningkatkan Performa Secara Keseluruhan'
                                    )}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733294738/cp-indoteknik-v3/blog/December2024/nissanFE6ADieselEngineUpgrade/3_wtu1id.png'
                                        alt='Meningkatkan Performa Secara Keseluruhan'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Komponen ini memiliki presisi tinggi yang membuat aliran bahan bakar lebih optimal, menghasilkan:'
                                            )}
                                        </p>
                                        <ul className='text-gray-600 list-disc ml-4'>
                                            <li>
                                                {t(
                                                    'Pembakaran lebih sempurna.'
                                                )}
                                            </li>
                                            <li>
                                                {t(
                                                    'Mesin bekerja lebih efisien dan bertenaga.'
                                                )}
                                            </li>
                                            <li>
                                                {t(
                                                    'Performa maksimal tanpa membebani mesin.'
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        'Harga Bersahabat, Kualitas Tidak Diragukan'
                                    )}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733294736/cp-indoteknik-v3/blog/December2024/nissanFE6ADieselEngineUpgrade/4_vwhi7n.png'
                                        alt='Harga Bersahabat, Kualitas Tidak Diragukan
'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Salah satu keunggulan Delivery Valve ITech adalah'
                                            )}{' '}
                                            <strong>
                                                {t(
                                                    'kualitas premium dengan harga terjangkau'
                                                )}
                                            </strong>
                                            .{' '}
                                            {t(
                                                'Anda bisa mendapatkan komponen berkinerja tinggi tanpa perlu merogoh kantong terlalu dalam.'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Mengapa Delivery Valve Penting?')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] mb-4'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733294737/cp-indoteknik-v3/blog/December2024/nissanFE6ADieselEngineUpgrade/5_l5svw7.png'
                                alt='Mengapa Delivery Valve Penting?'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Meskipun ukurannya kecil, Delivery Valve memiliki peran penting untuk:'
                                )}
                            </p>
                            <ul className='text-gray-600 list-disc ml-4 mb-4'>
                                <li>
                                    {t(
                                        'Mencegah aliran balik bahan bakar ke pompa injeksi, menjaga tekanan tetap stabil.'
                                    )}
                                </li>
                                <li>{t('Menjamin efisiensi bahan bakar.')}</li>
                                <li>
                                    {t(
                                        'Membantu meningkatkan respons dan keandalan mesin diesel Anda.'
                                    )}
                                </li>
                            </ul>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Jangan remehkan peran kecilnya—komponen ini adalah kunci untuk menjaga performa mesin tetap optimal!'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('DAPATKAN SEKARANG DI INDO TEKNIK!')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                {t('Jangan sampai kelewatan!')}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                                >
                                    Delivery Valve 131110-6820 (A49) ITech
                                </Link>{' '}
                                {t('tersedia hanya di')}{' '}
                                <strong>INDO TEKNIK</strong>,{' '}
                                {t(
                                    'toko terpercaya untuk semua kebutuhan mesin diesel Anda.'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/contact'
                                >
                                    {t('Hubungi kami')}
                                </Link>{' '}
                                {t(
                                    'untuk pemesanan online dan kunjungi langsung'
                                )}{' '}
                                <strong>INDO TEKNIK</strong> {t('di')}{' '}
                                <Link
                                    href='https://goo.gl/maps/your-map-link'
                                    className='font-bold underline text-blue-900'
                                >
                                    Jl. Riau Ujung, Kel. Tampan. Kec. Payung
                                    Sekaki, Pekanbaru - Riau, 28292
                                </Link>
                                .
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <strong>INDO TEKNIK</strong>, One stop solution
                                for all your diesel needs
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Tingkatkan performa mesin Anda hari ini juga!'
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

export default NissanFE6AEngineUpgrade_DeliveryValve131110_6820_A49_ITechForMaximumPerformance;
