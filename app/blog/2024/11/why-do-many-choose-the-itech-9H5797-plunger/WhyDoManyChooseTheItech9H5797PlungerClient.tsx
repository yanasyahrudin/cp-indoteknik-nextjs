'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const WhyDoManyChooseTheItech9H5797Plunger = ({
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
                            Category: <strong>{currentPost.category}</strong>
                        </span>
                    </div>

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732089235/cp-indoteknik-v3/blog/November2024/whyDoManyChooseTheITech9H5797Plunger/1_gjfxht.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t(
                                'Jika Anda sedang mencari solusi injeksi bahan bakar yang andal untuk mesin diesel berat, jawabannya ada di'
                            )}{' '}
                            <strong>{t('Plunger ITech 9H5797')}</strong>.{' '}
                            {t(
                                'Artikel ini akan mengungkap alasan mengapa produk ini menjadi pilihan favorit pemilik kendaraan dan bengkel profesional di seluruh Indonesia.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('1. Mengurangi Risiko Kerusakan pada Komponen Lain')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732089235/cp-indoteknik-v3/blog/November2024/whyDoManyChooseTheITech9H5797Plunger/2_ksfkic.png'
                            alt={currentPostTitle}
                            width={400}
                            height={320}
                        />
                        <div>
                            <p className='text-gray-600 mb-4 mt-4'>
                                {t('Salah satu keunggulan utama')}{' '}
                                <strong>{t('Plunger ITech')}</strong>{' '}
                                {t(
                                    'adalah kemampuannya menjaga kestabilan sistem injeksi bahan bakar. Stabilitas ini penting untuk melindungi komponen lain, seperti pompa dan injector, dari risiko kerusakan akibat tekanan bahan bakar yang tidak stabil. Dengan menggunakan plunger ini, Anda dapat memperpanjang usia mesin sekaligus menghemat biaya perbaikan.'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('2. Harga Kompetitif dengan Kualitas Premium')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732089239/cp-indoteknik-v3/blog/November2024/whyDoManyChooseTheITech9H5797Plunger/3_iesouj.png'
                            alt={currentPostTitle}
                            width={400}
                            height={320}
                        />
                        <div>
                            <p className='text-gray-600 mb-4 mt-4'>
                                {t(
                                    'Banyak yang mengira kualitas premium selalu identik dengan harga tinggi. Tapi'
                                )}{' '}
                                <strong>{t('Plunger ITech')}</strong>{' '}
                                {t(
                                    'membuktikan sebaliknya! Dengan harga yang ramah di kantong, produk ini memberikan nilai lebih bagi para pemilik kendaraan dan bengkel. Jadi, Anda tidak perlu mengorbankan kualitas hanya demi menyesuaikan anggaran.'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('3. Dirancang Khusus untuk Mesin Berat')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732089238/cp-indoteknik-v3/blog/November2024/whyDoManyChooseTheITech9H5797Plunger/4_tsospi.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4 mt-4'>
                            <strong>{t('Plunger 9H5797 ITech')}</strong>{' '}
                            {t(
                                'dirancang secara presisi untuk kompatibilitas sempurna dengan mesin'
                            )}{' '}
                            <strong>{t('CAT D330A')}</strong> {t('dan')}{' '}
                            <strong>{t('pompa D333 Fist Caterpillar')}</strong>.{' '}
                            {t(
                                'Mesin-mesin ini sering digunakan dalam pekerjaan berat seperti konstruksi dan pertambangan. Dengan plunger yang dirancang khusus, Anda mendapatkan performa optimal sekaligus menghindari risiko kerusakan yang disebabkan oleh sparepart yang tidak sesuai.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Tunggu Apa Lagi?')}
                    </h2>
                    <div className='lg:flex md:flex  gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732089236/cp-indoteknik-v3/blog/November2024/whyDoManyChooseTheITech9H5797Plunger/5_hgnsr5.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4 mt-4'>
                            {t('Dapatkan')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                            >
                                {t('Plunger ITech 9H5797')}
                            </Link>{' '}
                            {t('sekarang juga di')}{' '}
                            <strong>{t('INDO TEKNIK!')}</strong>{' '}
                            {t(
                                'Kualitas terbaik buktikan sendiri untuk kendaraan anda. Jangan lewatkan kesempatan untuk meningkatkan performa mesin Anda dengan sparepart unggulan ini.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <div className='lg:flex md:flex mt-6 gap-6 text-justify'>
                        <div>
                            <p className='text-gray-600 mb-4'>
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='/contact'
                                >
                                    {t('Hubungi kami')}
                                </Link>{' '}
                                {t('atau kunjungi langsung')}{' '}
                                <strong>{t('Indo Teknik')}</strong>
                                {t(' di ')}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='https://maps.app.goo.gl/iwQHVPgiApsn5T8R9'
                                >
                                    {t(
                                        'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau, 28292'
                                    )}
                                </Link>
                                .
                            </p>

                            <p className='text-gray-600 mb-4'>
                                <strong>INDO TEKNIK</strong> –{' '}
                                {'One-stop solution for all your diesel needs.'}
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

export default WhyDoManyChooseTheItech9H5797Plunger;
