'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const HereItIs_ThePowerfulSolutionForYourCanter_PlungerSupplyPumpEuro4FE7_8 =
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
                                Category:{' '}
                                <strong>{currentPost.category}</strong>
                            </span>
                        </div>

                        <div className='mt-5'>
                            <Image
                                className='rounded-xl mx-auto'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732180744/cp-indoteknik-v3/blog/November2024/HereItIs_ThePowerfulSolutionForYourCanter/1_oqtwoc.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Apakah Anda pemilik Canter Euro 4 FE 7.8? Jika iya, Anda pasti menginginkan kendaraan yang selalu dalam kondisi prima, kuat, dan efisien.'
                                )}{' '}
                                <strong>
                                    {t(
                                        'Plunger Supply Pump Canter Euro 4 FE 7.8 (0445020539)'
                                    )}
                                </strong>{' '}
                                {t(
                                    'dari ITech hadir sebagai solusi untuk meningkatkan performa kendaraan Anda!'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Kenapa Harus Plunger ITech?')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <div className='lg:ml-10'>
                                    <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                        {t('1. Mengoptimalkan Kinerja Mesin')}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732180752/cp-indoteknik-v3/blog/November2024/HereItIs_ThePowerfulSolutionForYourCanter/2_yaucar.png'
                                            alt='Mengoptimalkan Kinerja Mesin'
                                            width={600}
                                            height={400}
                                        />
                                        <div>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t('Dengan')}{' '}
                                                <strong>
                                                    {t('Plunger ITech')}
                                                </strong>
                                                ,
                                                {t(
                                                    'mesin Canter Anda akan bekerja lebih maksimal. Sistem bahan bakar yang lebih efisien memastikan:'
                                                )}
                                            </p>
                                            <ul className='ml-8 list-disc text-gray-600'>
                                                <li>
                                                    <strong>
                                                        {t(
                                                            'Tenaga lebih besar'
                                                        )}
                                                    </strong>{' '}
                                                    {t(
                                                        'untuk mendukung aktivitas harian Anda.'
                                                    )}
                                                </li>
                                                <li>
                                                    <strong>
                                                        {t(
                                                            'Akselerasi lebih responsif'
                                                        )}
                                                    </strong>
                                                    ,{' '}
                                                    {t(
                                                        'terutama saat membawa beban berat.'
                                                    )}
                                                </li>
                                                <li>
                                                    <strong>
                                                        {t(
                                                            'Efisiensi bahan bakar'
                                                        )}
                                                    </strong>{' '}
                                                    {t(
                                                        'yang akan menghemat biaya operasional.'
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:ml-10'>
                                    <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                        {t(
                                            '2. Aliran Bahan Bakar Stabil dan Lancar'
                                        )}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732180746/cp-indoteknik-v3/blog/November2024/HereItIs_ThePowerfulSolutionForYourCanter/3_yfk4zb.png'
                                            alt='Aliran Bahan Bakar Stabil dan Lancar'
                                            width={600}
                                            height={400}
                                        />
                                        <div>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t(
                                                    'Bagi kendaraan yang sering digunakan untuk pekerjaan berat, seperti:'
                                                )}
                                            </p>
                                            <ul className='ml-8 list-disc text-gray-600'>
                                                <li>
                                                    {t(
                                                        'Mengangkut muatan sawit,'
                                                    )}
                                                </li>
                                                <li>
                                                    {t('Mengirim barang, atau')}
                                                </li>
                                                <li>
                                                    {t('Beban berat lainnya,')}
                                                </li>
                                            </ul>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t(
                                                    'Plunger ini memastikan aliran bahan bakar tetap stabil. Hasilnya? Mesin tidak cepat panas dan performa tetap tangguh di berbagai kondisi!'
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:ml-10'>
                                    <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                        {t('3. Kemudahan Pemasangan')}
                                    </h3>
                                    <div className='lg:flex gap-4'>
                                        <Image
                                            className='rounded-xl w-[400px]'
                                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732180750/cp-indoteknik-v3/blog/November2024/HereItIs_ThePowerfulSolutionForYourCanter/4_lgojiz.png'
                                            alt='Kemudahan Pemasangan'
                                            width={600}
                                            height={400}
                                        />
                                        <div>
                                            <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                                {t('Plunger ini')}{' '}
                                                <strong>
                                                    {t('dirancang khusus')}
                                                </strong>{' '}
                                                {t(
                                                    'sesuai dengan spesifikasi teknis Canter Euro 4 FE 7.8. Anda tidak perlu khawatir soal pemasangan:'
                                                )}
                                            </p>
                                            <ul className='ml-8 list-disc text-gray-600'>
                                                <li>
                                                    <strong>
                                                        {t(
                                                            'Proses instalasi mudah,'
                                                        )}
                                                    </strong>
                                                </li>
                                                <li>
                                                    <strong>
                                                        {t(
                                                            'Sudah diuji kualitasnya'
                                                        )}
                                                    </strong>{' '}
                                                    {t(
                                                        'untuk keamanan maksimal'
                                                    )}
                                                    ,
                                                </li>
                                                <li>
                                                    <strong>
                                                        {t('Tahan lama')}
                                                    </strong>
                                                    ,{' '}
                                                    {t(
                                                        'sehingga Anda tidak perlu sering mengganti.'
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Tunggu Apa Lagi? Belanja Sekarang!')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Saatnya meningkatkan performa Canter Anda dengan solusi yang'
                                )}{' '}
                                <strong>
                                    {t('praktis, hemat, dan efisien!')}
                                </strong>{' '}
                                {t('Kami memiliki produk unggulan,')}{' '}
                                <Link
                                    className='text-blue-900 font-bold underline'
                                    href='/products/fuel-injection-systems/common-rail/supply-pump'
                                >
                                    {t(
                                        'Plunger Supply Pump Canter Euro 4 FE 7.8 (0445020539)'
                                    )}
                                </Link>{' '}
                                {t(
                                    'dari ITech. Jangan sampai ketinggalan, tingkatkan performa kendaraan Anda hari ini juga!'
                                )}{' '}
                                <Link
                                    className='text-blue-900 font-bold underline'
                                    href='/contact'
                                >
                                    {t('Hubungi kami')}
                                </Link>{' '}
                                {t(
                                    'untuk pemesanan atau kunjungi Indo Teknik langsung di'
                                )}{' '}
                                <Link
                                    className='text-blue-900 font-bold underline'
                                    href='https://maps.app.goo.gl/192kGVpUAVA7uDRq8'
                                >
                                    Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                    Sekaki, Pekanbaru Riau, 28292
                                </Link>
                                . Indo Teknik, One stop solution all your diesel
                                needs.
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

export default HereItIs_ThePowerfulSolutionForYourCanter_PlungerSupplyPumpEuro4FE7_8;
