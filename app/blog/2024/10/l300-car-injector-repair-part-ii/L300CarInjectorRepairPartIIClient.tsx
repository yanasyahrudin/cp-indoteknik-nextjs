'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const MitsubishiL300InjectorRepairInPekanbaruPartIITankWashingAndInjectorInstallation =
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
                                Category:{' '}
                                <strong>{currentPost.category}</strong>
                            </span>
                        </div>

                        <div className='mt-5'>
                            <Image
                                className='rounded-xl mx-auto'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728894957/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepairPartII/1_ziprej.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Halo Sobat Donik! Selamat datang di Part II dari perjalanan perbaikan Mitsubishi L300 kami. Di'
                                )}{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='https://www.indo-teknik.com/blog/2024/10/l300-car-injector-repair'
                                >
                                    {t('part sebelumnya')}
                                </Link>
                                , {t('kita sudah membahas proses')}{' '}
                                <strong>{t('pembongkaran injektor')}</strong>{' '}
                                {t('dan')}{' '}
                                <strong>{t('kalibrasi injektor')}</strong>.{' '}
                                {t('Kali ini, kami')}
                                {t('akan membahas proses')}{' '}
                                <strong>{t('pencucian tangki')}</strong>{' '}
                                {t('dan')}{' '}
                                <strong>{t('pengetesan di mobil')}</strong>.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Proses Pencucian Tangki')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728894947/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepairPartII/2_c86oeq.png'
                                alt=''
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t(
                                        'Setelah membongkar injektor, langkah selanjutnya adalah memeriksa'
                                    )}{' '}
                                    <strong>{t('tangki bahan bakar')}</strong>.{' '}
                                    {t(
                                        'Ketika kami membuka tangki, kami menemukan bahwa tangki dalam kondisi kotor dan sangat perlu dibersihkan. Tangki yang kotor dapat mempengaruhi performa mesin dan kualitas bahan bakar yang disuplai ke injektor.'
                                    )}
                                </p>
                                <ul>
                                    <li className='mx-5 list-disc text-gray-600'>
                                        <strong>
                                            {t('Pembersihan Tangki:')}
                                        </strong>{' '}
                                        {t(
                                            'Kami melakukan pembersihan menyeluruh pada tangki untuk menghilangkan kotoran dan endapan yang menempel. Proses ini sangat penting untuk memastikan tangki dapat menyuplai bahan bakar dengan bersih dan lancar.'
                                        )}
                                    </li>
                                    <li className='mx-5 list-disc text-gray-600 '>
                                        <strong>
                                            {t('Pengujian Kebocoran:')}
                                        </strong>{' '}
                                        {t(
                                            'Setelah tangki bersih, kami melakukan'
                                        )}{' '}
                                        <strong>{t('tes kebocoran')}</strong>.{' '}
                                        {t(
                                            'Ini adalah langkah kritis untuk memastikan bahwa tidak ada kebocoran yang dapat menyebabkan masalah di masa depan. Tangki yang bocor akan diperbaiki agar tidak menimbulkan masalah saat digunakan.'
                                        )}
                                    </li>
                                    <li className='mx-5 list-disc text-gray-600'>
                                        <strong>{t('Quality Control:')}</strong>{' '}
                                        {t(
                                            'Setelah semua proses pembersihan dan perbaikan selesai, tangki menjalani'
                                        )}{' '}
                                        <strong>{t('quality control')}</strong>.{' '}
                                        {t(
                                            'Kami memastikan bahwa tangki memenuhi standar sebelum dipasang kembali ke mobil.'
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Pemasangan Injektor dan Pengetesan')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728894985/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepairPartII/3_cn35fo.png'
                                alt=''
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t(
                                        'Setelah tangki siap, kami melanjutkan ke proses pemasangan injektor. Proses ini dilakukan oleh mekanik kami yang ahli dan handal.'
                                    )}
                                </p>
                                <ul>
                                    <li className='mx-5 list-disc text-gray-600'>
                                        <strong>
                                            {t('Pemasangan Injektor:')}
                                        </strong>{' '}
                                        {t(
                                            'Injektor dipasang dengan hati-hati ke dalam mesin, mengikuti prosedur yang telah ditetapkan untuk memastikan semuanya terpasang dengan benar.'
                                        )}
                                    </li>
                                    <li className='mx-5 list-disc text-gray-600'>
                                        <strong>{t('Pengujian Akhir:')}</strong>{' '}
                                        {t(
                                            'Setelah semua komponen terpasang, kami melakukan'
                                        )}{' '}
                                        <strong>{t('pengetesan')}</strong>{' '}
                                        {t(
                                            'untuk memastikan bahwa semua sistem bekerja dengan baik dan tidak ada masalah yang tersisa. Tes ini mencakup pengujian performa mesin dan emisi.'
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Serah Terima ke Customer')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728894956/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepairPartII/4_u7h99m.png'
                                alt=''
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Setelah semua proses selesai, kami akhirnya siap untuk menyerahkan Mitsubishi L300 ini kepada pemiliknya. Kami selalu melakukan yang terbaik untuk memastikan bahwa kendaraan yang kami servis kembali dalam kondisi optimal.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className='text-gray-600 my-4'>
                            <strong>{t('Indo Teknik')}</strong>,{' '}
                            {t(
                                'bengkel diesel terdekat di Pekanbaru, selalu siap menjadi solusi atas masalah kendaraan Anda! Jika Anda berdomisili di Pekanbaru atau sekitarnya, jangan ragu untuk menghubungi kami di'
                            )}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                (+62 811-7531-881)
                            </Link>{' '}
                            {t('atau kunjungi bengkel kami di')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/4xGp2xYfn98Uo5437'
                            >
                                {t(
                                    'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki Pekanbaru Riau, 28292'
                                )}
                            </Link>
                            . {t('Sampai jumpa di artikel selanjutnya!')}
                        </p>

                        <p className='text-gray-600 my-4'>
                            {t('Pelajari lebih lanjut tentang')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/services/common-rail/injector'
                            >
                                {t('perbaikan injektor')}
                            </Link>{' '}
                            {t('di Pekanbaru.')}
                        </p>
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

export default MitsubishiL300InjectorRepairInPekanbaruPartIITankWashingAndInjectorInstallation;
