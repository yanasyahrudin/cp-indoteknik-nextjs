'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const IsuzuElfPekanbaruRotaryPumpDismantlingProcessSafeAndDetailedTips = ({
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

    const { t } = useTranslation('oct2024Blog');

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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136937/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/1_mfb9g4.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t(
                                'Halo Sobat Donik! Kali ini kita mau spill proses pembongkaran'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='https://indo-teknik.com/services/conventional/fuel-injection-pump'
                            >
                                {'Pump Rotary'}
                            </Link>{' '}
                            {t('dari')} <strong>{t('Isuzu Elf')}</strong>{' '}
                            {t('di')} <strong>{t('Indo Teknik')}</strong>.{' '}
                            {t(
                                'Buat kalian yang penasaran dengan langkah-langkahnya, yuk kita bahas satu per satu!'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Langkah Penting dalam Pembongkaran Pump Rotary')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136944/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/2_afqhtz.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4 mt-4 lg:mt-0 md:mt-0'>
                                {t(
                                    'Sebelum mulai, ada beberapa hal penting yang harus diperhatikan saat membongkar'
                                )}{' '}
                                <strong>{t('Pump Rotary')}</strong>.{' '}
                                {t(
                                    'Jangan pernah membongkar paksa komponen-komponennya. Ini sangat krusial karena komponen'
                                )}{' '}
                                <strong>{t('Pump Rotary')}</strong>{' '}
                                {t(
                                    'sangat sensitif dan mudah rusak jika tidak ditangani dengan hati-hati. Pastikan kamu menggunakan'
                                )}{' '}
                                <strong>{t('tools yang tepat')}</strong>{' '}
                                {t(
                                    'agar tidak merusak baut-baut Fuel Pump dan komponen lainnya di dalamnya.'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Proses Pembongkaran dan Pembersihan')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136947/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/3_ocess5.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4 mt-4 lg:mt-0 md:mt-0'>
                                {t(
                                    'Setelah semua komponen berhasil dilepas, kita lanjutkan ke proses pembersihan. Setiap'
                                )}{' '}
                                <strong>
                                    {t('part harus dicuci bersih')}{' '}
                                </strong>{' '}
                                {t(
                                    'untuk mengetahui kondisi komponen yang ada di dalam pump. Tujuannya, kita bisa melihat apakah ada part yang sudah aus atau rusak dan harus segera diganti. Selain itu, kita juga'
                                )}{' '}
                                <strong>{t('perlu mengecek')}</strong>{' '}
                                {t(
                                    'apakah part yang ada masih sesuai dengan standar atau ada yang tidak memenuhi kriteria.'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Tips: Menyusun Komponen dengan Rapi')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136936/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/4_obcwxn.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4 mt-4 lg:mt-0 md:mt-0'>
                            <strong> {t('Satu tips penting:')}</strong>{' '}
                            {t(
                                'pastikan semua part yang sudah dibongkar disusun rapi di satu tempat. Ini penting supaya tidak ada komponen yang hilang atau tercecer, yang nantinya akan mempersulit pemasangan kembali. Ingat,'
                            )}{' '}
                            <strong>
                                {t('satu part saja lupa terpasang')}
                            </strong>
                            ,{' '}
                            {t(
                                'bisa berdampak buruk pada performa mobil dan bahkan bisa berbahaya saat mobil digunakan.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Ayo Service Pump di Indo Teknik!')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <p className='text-gray-600 mb-4 mt-4 lg:mt-0 md:mt-0'>
                            {t(
                                'Ingin kendaraan Anda tetap optimal? Indo Teknik Pekanbaru adalah pilihan terbaik untuk servis rotary pump kendaraan diesel Anda, seperti Isuzu Elf, dengan tenaga ahli berpengalaman dan alat kalibrasi modern. Untuk kalian yang membutuhkan'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='https://indo-teknik.com/services/conventional/fuel-injection-pump'
                            >
                                {t('service fuel injection pump Pekanbaru')}
                            </Link>
                            ,{' '}
                            {t(
                                'Indo Teknik siap jadi one-stop solution buat semua kebutuhan diesel kalian. Dengan tenaga ahli profesional dan peralatan lengkap, kendaraan diesel kalian akan kembali dalam kondisi prima.'
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

export default IsuzuElfPekanbaruRotaryPumpDismantlingProcessSafeAndDetailedTips;
