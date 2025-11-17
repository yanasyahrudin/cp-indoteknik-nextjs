'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const UseThis_KnowYourNozzleConditionAccurately = ({
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

    return (
        <div className='my-16 lg:flex max-w-[1200px] lg:mx-auto gap-8 rounded-xl md:mx-4 mx-4'>
            <div className='max-w-4xl px-8 pb-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100'>
                <div>
                    <div className='-mx-5 mb-5'>
                        <GoBack />
                    </div>
                    <h1 className='text-4xl font-bold text-blue-900 mb-4'>
                        {currentPostTitle}
                    </h1>

                    <PublishedDateCategory
                        publicationDate={publicationDate}
                        category={currentPost.category}
                    />

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732005997/cp-indoteknik-v3/blog/September2024/useThis_FindOutTheConditionOfYourNozzleAccurately/1_xdnihi.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Apakah Anda sering merasa ragu dengan performa
                            nozzle kendaraan atau alat berat Anda? Jangan
                            biarkan keraguan itu menjadi masalah besar. Gunakan
                            Nozzle Tester untuk memastikan performa injektor
                            Anda tetap optimal!
                        </p>
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            <strong>Kenapa Harus Tes Nozzle?</strong>
                            <br /> Nozzle yang tidak berfungsi dengan baik dapat
                            menyebabkan:
                            <ul className='list-disc ml-6'>
                                <li>Penurunan performa mesin</li>
                                <li>Konsumsi bahan bakar yang boros</li>
                                <li>Emisi gas buang yang tidak efisien</li>
                            </ul>
                            Dengan melakukan tes nozzle, Anda bisa mendeteksi
                            masalah sejak dini dan menghemat biaya perbaikan di
                            kemudian hari.
                        </p>
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            <strong>
                                Pilihan Terbaik untuk Anda: Nozzle Tester ITech
                            </strong>
                            <br />
                            Berikut adalah produk unggulan yang bisa Anda
                            dapatkan hanya di <strong>Indo Teknik</strong>:
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        1. NOZZLE TESTER ITECH
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732005993/cp-indoteknik-v3/blog/September2024/useThis_FindOutTheConditionOfYourNozzleAccurately/2_qanllx.png'
                            alt='NOZZLE TESTER ITECH'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 lg:my-0 md:my-0 my-4'>
                            Tersedia dalam dua varian: <br />
                            <ul className='list-disc ml-6'>
                                <li className='font-semibold'>
                                    Plastic Base Type
                                </li>
                                <li className='font-semibold'>
                                    Steel Base Type
                                </li>
                            </ul>
                            Produk ini dirancang untuk memberikan pengujian
                            nozzle dengan akurasi tinggi, cocok untuk berbagai
                            jenis kebutuhan.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        2. CR-C (V2) PRO – COMMON RAIL INJECTOR TESTER ITECH
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732005994/cp-indoteknik-v3/blog/September2024/useThis_FindOutTheConditionOfYourNozzleAccurately/3_hazr5r.png'
                            alt='CR-C (V2) PRO – COMMON RAIL INJECTOR TESTER ITECH'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 lg:my-0 md:my-0 my-4'>
                            Alat ini dirancang khusus untuk menguji injektor
                            common rail dengan mudah dan akurat. Teknologi
                            terbaru memastikan kinerja terbaik untuk setiap
                            pengujian.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        3. PRESSURE GAUGE ITECH
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732005993/cp-indoteknik-v3/blog/September2024/useThis_FindOutTheConditionOfYourNozzleAccurately/4_m0zgv7.png'
                            alt='PRESSURE GAUGE ITECH'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 lg:my-0 md:my-0 my-4'>
                            Kapasitas tekanan:{' '}
                            <strong>60 MPA / 8000 PSI</strong> Alat pengukur
                            tekanan ini memastikan hasil pengujian nozzle yang
                            presisi dan andal.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Keunggulan Produk dari ITech
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <ul className='list-disc ml-6 text-gray-600'>
                            <li>
                                <strong>Akurat:</strong> Hasil pengujian yang
                                dapat diandalkan
                            </li>
                            <li>
                                <strong>Tahan Lama:</strong> Material
                                berkualitas tinggi
                            </li>
                            <li>
                                <strong>Mudah Digunakan:</strong> Dirancang
                                untuk kenyamanan pengguna
                            </li>
                            <li>
                                <strong>Harga Terjangkau:</strong> Investasi
                                terbaik untuk perawatan alat dan kendaraan Anda
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Tunggu Apa Lagi?
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify lg:w-[800px]'>
                        <p className='text-gray-600 mb-4'>
                            Jangan biarkan masalah nozzle menghambat
                            produktivitas Anda! Belanja sekarang juga di{' '}
                            <strong>Indo Teknik</strong> dan dapatkan{' '}
                            <Link
                                className='font-semibold underline text-blue-900'
                                href='/products/other-products/tools'
                            >
                                Nozzle Tester Set
                            </Link>{' '}
                            terbaik:
                            <ul className='list-disc ml-6 text-gray-600 font-semibold'>
                                <li>Nozzle Tester ITECH</li>
                                <li>CR-C V2 PRO ITECH</li>
                                <li>Pressure Gauge ITECH</li>
                            </ul>
                            Ayo!{' '}
                            <Link
                                className='font-semibold underline text-blue-900'
                                href='/contact'
                            >
                                Hubungi kami
                            </Link>{' '}
                            atau kunjungi langsung <strong>Indo Teknik</strong>{' '}
                            di{' '}
                            <Link
                                className='font-semibold underline text-blue-900'
                                href='https://maps.app.goo.gl/wk6X2gKcjMoUVrwf6'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru Riau, 28292
                            </Link>
                            . <strong>Indo Teknik</strong>, One stop solution
                            all your diesel needs.
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

export default UseThis_KnowYourNozzleConditionAccurately;
