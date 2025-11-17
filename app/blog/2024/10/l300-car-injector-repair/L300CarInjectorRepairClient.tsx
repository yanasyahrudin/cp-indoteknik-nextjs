'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const MitsubishiL300InjectorRepairInPekanbaruSolutionsToPowerAndEmissionProblems =
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888378/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/1_yni2hh.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Halo Sobat Donik! Kali ini kita akan membahas kasus menarik yang terjadi pada Mitsubishi L300 yang masuk ke Indo Teknik dengan beberapa keluhan serius. Mari kita simak bagaimana kami menangani masalah tersebut dan apa hasil akhirnya!'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Keluhan Awal')}
                        </h2>
                        <div className='gap-6 text-justify'>
                            <p className='text-gray-600'>
                                {t(
                                    'Mitsubishi L300 ini datang dengan beberapa masalah yang cukup signifikan:'
                                )}
                            </p>
                            <ul className='text-gray-600'>
                                <li className='mx-5 list-disc'>
                                    <strong>{t('Tenaga Tidak Ada:')}</strong>{' '}
                                    {t(
                                        'Pengemudi merasa mobil tidak memiliki tenaga saat digunakan.'
                                    )}
                                </li>
                                <li className='mx-5 list-disc'>
                                    <strong>{t('Starter Panjang:')}</strong>{' '}
                                    {t(
                                        'Diperlukan waktu lama untuk memulai mesin.'
                                    )}
                                </li>
                                <li className='mx-5 list-disc'>
                                    <strong>{t('Asap Hitam Tebal:')}</strong>{' '}
                                    {t(
                                        'Tanda bahwa ada masalah dalam pembakaran bahan bakar.'
                                    )}
                                </li>
                                <li className='mx-5 list-disc'>
                                    <strong>
                                        {' '}
                                        {t('Lampu Engine Menyala:')}
                                    </strong>{' '}
                                    {t(
                                        'Indikator bahwa ada masalah serius yang perlu ditangani.'
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Proses Diagnosa')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728889247/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/2_ymipmp.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Setelah menerima mobil, langkah pertama kami adalah melakukan pengecekan di'
                                )}{' '}
                                <Link
                                    className='font-bold text-blue-900'
                                    href='https://www.indo-teknik.com/test-bench-and-fabrication-machines'
                                >
                                    {t('mesin tes')}
                                </Link>
                                . {t('Hasilnya? Ternyata')}{' '}
                                <strong>{t('keempat injektor')}</strong>{' '}
                                {t(
                                    'perlu diperbaiki. Ini adalah masalah yang umum terjadi dan bisa sangat mempengaruhi performa kendaraan.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Pembongkaran dan Penggantian Sparepart')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888392/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/3_t05suq.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Setelah mengetahui masalahnya, kami segera membongkar injektor menggunakan tool khusus. Selama proses pembongkaran, kami menemukan bahwa beberapa bagian dari injektor perlu diganti. Kami mengganti sparepart tersebut dengan merek original, yaitu'
                                )}{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='https://itechpersadanusantara.com/'
                                >
                                    {t('ITech')}
                                </Link>{' '}
                                {t('dan')} <strong>Liwei</strong>,{' '}
                                {t('yang terkenal akan kualitasnya.')}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Perakitan Kembali Injektor')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888389/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/4_jwlmwn.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Setelah mengganti komponen yang rusak, injektor dirakit kembali menggunakan tool khusus. Kami memastikan bahwa semua proses perakitan sesuai dengan'
                                )}{' '}
                                <strong>
                                    {t('standar perakitan injektor')}
                                </strong>
                                .{' '}
                                {t(
                                    'Proses ini sangat penting untuk memastikan injektor bekerja dengan optimal.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Pengujian dan Kalibrasi')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888380/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/5_aytji3.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4 justify-content'>
                                {t(
                                    'Setelah perakitan selesai, injektor kembali dites di mesin tes untuk memastikan bahwa semuanya berfungsi dengan baik. Selanjutnya, injektor dilanjutkan ke'
                                )}{' '}
                                <strong>{t('mesin kalibrasi')}</strong>{' '}
                                {t(
                                    'untuk melihat hasil kalibrasi injektornya. Kalibrasi ini penting untuk memastikan bahwa injektor dapat menyuplai bahan bakar dengan tepat sesuai kebutuhan mesin.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Penasaran dengan Hasilnya?')}
                        </h2>
                        <p className='text-gray-600 mb-4'>
                            {t('Tunggu')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline    '
                                href='http://www.indo-teknik.com/blog/2024/10/l300-car-injector-repair-part-ii'
                            >
                                {t('part II')}
                            </Link>{' '}
                            {t(
                                'ya! Kami akan segera membagikan hasil akhir perbaikan ini dan bagaimana performa Mitsubishi L300 setelah'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='https://www.indo-teknik.com/services/common-rail/injector'
                            >
                                {' '}
                                {t('servis injektor. ')}
                            </Link>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Indo Teknik, bengkel diesel terpercaya di Pekanbaru, siap membantu Anda mengatasi masalah injektor Mitsubishi L300 dengan teknologi terbaru. Jika Anda memiliki masalah serupa atau ingin melakukan perawatan pada kendaraan Anda, jangan ragu untuk'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='https://www.indo-teknik.com/contact'
                            >
                                {t('menghubungi kami')}
                            </Link>
                            !
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

export default MitsubishiL300InjectorRepairInPekanbaruSolutionsToPowerAndEmissionProblems;
