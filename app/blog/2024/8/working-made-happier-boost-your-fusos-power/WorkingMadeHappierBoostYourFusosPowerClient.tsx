'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const WorkingMadeHappier_BoostYourFuso_sPowerWithThisSparePart = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733991526/cp-indoteknik-v3/blog/August2024/workingMadeHappierBoostYourFusosPower/1_vnwe6f.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                            Fuso Fighter 6M60 adalah andalan banyak pemilik
                            bisnis yang mengandalkan kendaraan tangguh untuk
                            operasional sehari-hari. Untuk menjaga performa
                            terbaik, penting untuk memilih sparepart berkualitas
                            tinggi. Salah satu sparepart unggulan yang bisa
                            menjadi solusi terbaik Anda adalah{' '}
                            <strong>
                                SUPPLY PUMP 294050-0460/294050-0461 ITECH
                            </strong>
                            .
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Apa itu Supply Pump dan Kenapa Penting?
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        Supply pump adalah komponen penting dalam sistem bahan
                        bakar diesel. Fungsinya memastikan bahan bakar dari
                        tangki mengalir dengan lancar ke sistem bahan bakar
                        lainnya. Supply pump yang berkualitas akan:
                    </p>

                    <div className='gap-6 text-justify lg:ml-4 md:ml-4'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            1. Menjaga Aliran Stabil
                        </h3>
                        <div className='lg:flex md:flex gap-4'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733991532/cp-indoteknik-v3/blog/August2024/workingMadeHappierBoostYourFusosPower/2_bnufwc.png'
                                alt='Dibuat dari Material Pilihan'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                    <strong>
                                        SUPPLY PUMP 294050-0460/294050-0461
                                        ITECH
                                    </strong>{' '}
                                    dirancang untuk menjaga tekanan dan aliran
                                    bahan bakar tetap stabil, memastikan mesin
                                    Anda bekerja dengan efisien.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-6 text-justify lg:ml-4 md:ml-4'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            2. Meningkatkan Performa Mesin
                        </h3>
                        <div className='lg:flex md:flex gap-4'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733991529/cp-indoteknik-v3/blog/August2024/workingMadeHappierBoostYourFusosPower/3_qlo88b.png'
                                alt='Harga Kompetitif, Kualitas Unggulan'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                    Dengan semprotan bahan bakar yang presisi,
                                    supply pump ini meningkatkan pembakaran,
                                    sehingga tenaga mesin meningkat secara
                                    signifikan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-6 text-justify lg:ml-4 md:ml-4'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            3. Kinerja yang Konsisten
                        </h3>
                        <div className='lg:flex md:flex gap-4'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733991528/cp-indoteknik-v3/blog/August2024/workingMadeHappierBoostYourFusosPower/4_likuqb.png'
                                alt='Aliran Bahan Bakar Stabil dan Konsisten'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                    Anda bisa mengandalkan supply pump ini untuk
                                    menjaga mesin Fuso Fighter Anda tetap dalam
                                    kondisi terbaik, bahkan dalam penggunaan
                                    jangka panjang.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Kenapa Harus Memilih Indo Teknik?
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        Indo Teknik adalah solusi terpercaya untuk kebutuhan
                        diesel Anda. Dengan produk berkualitas dan pelayanan
                        prima, Anda tidak perlu mencari tempat lain.
                    </p>
                    <ul className='text-gray-600 mb-4 ml-4 list-disc'>
                        <li>
                            <strong>Original dan Berkualitas:</strong> Produk
                            dijamin asli dengan standar tertinggi.
                        </li>
                        <li>
                            <strong>Mudah Didapatkan:</strong> Tersedia dan siap
                            kirim kapan saja.
                        </li>
                        <li>
                            <strong>Harga Terjangkau:</strong> Anda mendapatkan
                            nilai lebih untuk investasi kendaraan Anda.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Tunggu Apa Lagi?
                    </h2>

                    <div>
                        <p className='text-gray-600 my-4 text-justify'>
                            Jangan biarkan performa kendaraan Anda menurun
                            karena sparepart yang tidak sesuai.{' '}
                            <strong>
                                SUPPLY PUMP 294050-0460/294050-0461 ITECH
                            </strong>{' '}
                            adalah pilihan tepat untuk Fuso Fighter Anda.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        BELI SEKARANG di Indo Teknik!
                    </h2>

                    <div>
                        <p className='text-gray-600 my-4 text-justify'>
                            Nikmati pengalaman kerja yang lebih happy dengan
                            performa kendaraan yang maksimal.
                        </p>
                        <p className='text-gray-600 my-4 text-justify'>
                            <strong>
                                Indo Teknik – Your One-Stop Diesel Solution.
                            </strong>
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

export default WorkingMadeHappier_BoostYourFuso_sPowerWithThisSparePart;
