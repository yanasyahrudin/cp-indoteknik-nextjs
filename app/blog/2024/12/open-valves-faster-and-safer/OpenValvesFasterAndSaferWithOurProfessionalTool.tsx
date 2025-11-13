'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const OpenValvesFasterAndSaferWithOurProfessionalTool = ({
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
            <div className='max-w-4xl px-8 pb-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100 '>
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735293540/cp-indoteknik-v3/blog/December2024/openValvesFasterAndSaferwithOurProfessionalTool/1_gxkin1.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                            {t(
                                'Apakah Anda sedang mencari solusi praktis dan aman untuk membuka valve injektor pada kendaraan Anda?'
                            )}{' '}
                            <strong>{t('Itech Tool Injector Ford 2.2')}</strong>{' '}
                            {t(
                                'adalah jawabannya! Dengan desain yang presisi dan material berkualitas tinggi, alat ini dirancang untuk mempermudah pekerjaan Anda tanpa mengorbankan kualitas hasil.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                        {t('Keunggulan Tool Injector Ford 2.2')}
                    </h2>
                    <div className='ml-4 lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                {t('1. Awet dan Tahan Lama')}
                            </h3>
                            <div className='lg:flex gap-4'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735293548/cp-indoteknik-v3/blog/December2024/openValvesFasterAndSaferwithOurProfessionalTool/2_fnsr0j.png'
                                    alt='Awet dan Tahan Lama'
                                    width={600}
                                    height={400}
                                />
                                <div>
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Tool Injector ini terbuat dari bahan premium yang dirancang untuk bertahan di kondisi kerja berat. Kualitas materialnya memastikan alat ini tetap kokoh dan awet digunakan dalam jangka panjang.'
                                        )}
                                    </p>
                                </div>
                            </div>

                            <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                {t('2. Harga Terjangkau, Kualitas Premium')}
                            </h3>
                            <div className='lg:flex gap-4'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735293547/cp-indoteknik-v3/blog/December2024/openValvesFasterAndSaferwithOurProfessionalTool/3_n6c797.png'
                                    alt='Harga Terjangkau, Kualitas Premium'
                                    width={600}
                                    height={400}
                                />
                                <div>
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Dengan segala keunggulan yang ditawarkan, Tool Injector ini hadir dengan harga yang sangat ekonomis. Anda tidak perlu merogoh kocek dalam-dalam untuk mendapatkan alat berkualitas tinggi.'
                                        )}
                                    </p>
                                </div>
                            </div>

                            <h3 className='text-lg font-semibold text-gray-800 mt-4 mb-2'>
                                {t('3. Performa Terbaik')}
                            </h3>
                            <div className='lg:flex gap-4'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735293539/cp-indoteknik-v3/blog/December2024/openValvesFasterAndSaferwithOurProfessionalTool/4_bh8lpx.png'
                                    alt='Performa Terbaik'
                                    width={600}
                                    height={400}
                                />
                                <div>
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Dirancang dengan teknologi canggih, Tool Injector Ford 2.2 memastikan pekerjaan lebih cepat dan efisien. Selain itu, alat ini membantu mengurangi risiko kerusakan pada komponen injector, menjadikannya pilihan yang ideal untuk para profesional maupun pengguna rumahan.'
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Kenapa Harus Pilih Itech Tool Injector Ford 2.2?')}
                    </h2>
                    <Image
                        className='rounded-xl w-[400px]'
                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735293543/cp-indoteknik-v3/blog/December2024/openValvesFasterAndSaferwithOurProfessionalTool/5_gjyjco.png'
                        alt='Kenapa Harus Pilih Itech Tool Injector Ford 2.2?'
                        width={600}
                        height={400}
                    />
                    <div className='gap-6 text-justify mt-4'>
                        <ul className='text-gray-600 mb-4'>
                            <li>
                                <span className='font-bold'>
                                    {t('Efisien')}:
                                </span>{' '}
                                {t(
                                    'Mempermudah proses perawatan dan perbaikan injektor.'
                                )}
                            </li>
                            <li>
                                <span className='font-bold'>{t('Kuat')}:</span>{' '}
                                {t(
                                    'Dibuat untuk tahan terhadap tekanan dan penggunaan berat.'
                                )}
                            </li>
                            <li>
                                <span className='font-bold'>{t('Aman')}:</span>{' '}
                                {t(
                                    'Mengurangi risiko kerusakan komponen selama proses kerja.'
                                )}
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('BELI SEKARANG SEBELUM KEHABISAN!')}
                    </h2>
                    <div className='gap-6 text-justify mt-4'>
                        <p className='text-gray-600 mb-4'>
                            {t('Jangan lewatkan kesempatan untuk memiliki')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/other-products/tools'
                            >
                                {t('Itech Tool Injector Ford 2.2')}
                            </Link>{' '}
                            {t('ini.')}{' '}
                            {t('Dapatkan produk berkualitas ini hanya di')}{' '}
                            <strong>{t('INDO TEKNIK!')}</strong>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>{t('Tool Injector Ford 2.2')}</strong>{' '}
                            {t(
                                '– Solusi cerdas untuk pekerjaan yang lebih mudah, aman, dan efisien.'
                            )}
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {t('Buruan, stok terbatas!')}
                        </p>
                    </div>
                </div>

                <div>
                    <div className='gap-6 text-justify mt-4'>
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Tingkatkan produktivitas Anda dengan alat yang tepat. Kunjungi'
                            )}{' '}
                            <strong>{t('INDO TEKNIK')}</strong>{' '}
                            {t('sekarang juga di alamat')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='https://maps.app.goo.gl/4xGp2xYfn98Uo5437'
                            >
                                {t(
                                    'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau, 28292'
                                )}
                            </Link>{' '}
                            {t('atau')}{' '}
                            <Link
                                className='underline font-bold text-blue-900'
                                href='/contact'
                            >
                                {t('hubungi kami')}
                            </Link>{' '}
                            {t(
                                'untuk pemesanan online dan dapatkan penawaran terbaik!'
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

export default OpenValvesFasterAndSaferWithOurProfessionalTool;
