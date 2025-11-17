'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const HinoLohanPekanbaruInjectionPumpServiceOptimalPerformance = ({
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

                    <PublishedDateCategory
                        publicationDate={publicationDate}
                        category={currentPost.category}
                    />

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066690/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/1_i4eefv.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t(
                                'Halo, sobat Donik! Kali ini kita kedatangan tamu istimewa, si putih raksasa,'
                            )}{' '}
                            <strong>{t('truk Hino Lohan')}</strong>,{' '}
                            {t('untuk melakukan')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='/services/conventional/fuel-injection-pump'
                            >
                                {t('servis injection pump ')}
                            </Link>{' '}
                            {t('di ')} <strong>{t('Pekanbaru')}</strong>.{' '}
                            {t('Mari kita simak prosesnya bersama!')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Proses Pembongkaran Injection Pump')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066712/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/2_lufnwk.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Pertama-tama, kita mulai dengan membongkar injection pump dari truk Hino Lohan ini. Setelah dibongkar, kita melakukan pemeriksaan menyeluruh untuk memastikan semua komponen dalam keadaan baik. Nah, ternyata ada masalah! Setelah kita cek,'
                            )}{' '}
                            <strong>
                                {t('plungernya mengalami kerusakan')}
                            </strong>{' '}
                            {t('dan perlu segera diganti.')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Pembersihan dan Penggantian Komponen')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066697/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/3_nhv9r4.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <div className='gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Sebelum melakukan penggantian, kita bersihkan terlebih dahulu bagian dalam (inner part) dan komponen lainnya. Ini penting agar semua bagian bersih dari kotoran dan sisa-sisa bahan bakar yang bisa memengaruhi kinerja mesin.'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t('Untuk penggantian sparepart, kita memilih')}{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='https://itechpersadanusantara.com/products/fuel-injection-systems/conventional/fuel-injection-pump'
                                >
                                    {t('merek ITech')}
                                </Link>{' '}
                                {t('yang terkenal dengan harga terjangkau dan')}{' '}
                                <strong>
                                    {t(
                                        'kualitas yang tak perlu diragukan lagi'
                                    )}
                                </strong>
                                .{' '}
                                {t(
                                    'Mari kita lanjut ke proses pemasangan komponen baru ini!'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Pemasangan dan Kalibrasi')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066688/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/4_rncfvr.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Dalam tahap ini, kita menggunakan tenaga ahli profesional untuk memastikan semuanya terpasang dengan tepat. Setelah semua komponen terpasang, kita lakukan kalibrasi terlebih dahulu di'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/test-bench-and-fabrication-machines'
                            >
                                {t('mesin tes bench')}
                            </Link>
                            .{' '}
                            {t(
                                'Proses kalibrasi ini penting untuk memastikan bahwa injection pump berfungsi dengan optimal sebelum dipasang kembali ke truk.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Hasil Akhir yang Memuaskan')}
                    </h2>
                    {/* Add video here */}
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <video className='rounded-xl mx-auto' controls>
                            <source
                                src='https://res.cloudinary.com/dcbryptkx/video/upload/w_300/v1729065295/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/Untitled_video_-_Made_with_Clipchamp_1_if6xqw.mp4'
                                type='video/mp4'
                            />
                            {t('Your browser does not support the video tag.')}
                        </video>
                        <div className='gap-6 text-justify mt-5 lg:mt-0 md:mt-0'>
                            <p className='text-gray-600 mb-4 justify-content'>
                                {t(
                                    'Setelah semua proses selesai, kita pasang kembali injection pump ke truknya. Suara mesin pun jadi'
                                )}{' '}
                                <strong>{t('lebih halus')}</strong>,{' '}
                                {t('dan tenaga yang dihasilkan')}{' '}
                                <strong>{t('semakin optimal')}</strong>.{' '}
                                {t('Dengan')}{' '}
                                <strong>{t('service yang tepat')}</strong>,{' '}
                                {t(
                                    'truk Hino Lohan ini siap kembali beroperasi di jalan!'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4 justify-content'>
                                {t(
                                    'Jadi, jika kalian memiliki masalah serupa pada truk atau kendaraan lainnya di'
                                )}{' '}
                                <strong>{t('Pekanbaru')}</strong>,{' '}
                                {t(
                                    'jangan ragu untuk melakukan service berkala di'
                                )}{' '}
                                <strong>{t('Indo Teknik')}</strong>.{' '}
                                {t('Hubungi kami')}{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='https://www.indo-teknik.com/contact'
                                >
                                    {t('di sini')}
                                </Link>{' '}
                                {t('untuk informasi lebih lanjut!')}
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

export default HinoLohanPekanbaruInjectionPumpServiceOptimalPerformance;
