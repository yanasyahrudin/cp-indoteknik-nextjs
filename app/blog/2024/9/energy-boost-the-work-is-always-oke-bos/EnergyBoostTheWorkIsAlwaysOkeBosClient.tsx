'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const EnergyBoost_TheWorkIsAlwaysOKEBOS_ForTheKomatsuPC_200 = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732158324/cp-indoteknik-v3/blog/September2024/energyBoostTheWorkIsAlwaysOKE%20BOS_ForTheKomatsuPC_200/1_hbj6ws.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Apakah alat berat Anda membutuhkan performa ekstra
                            untuk menghadapi pekerjaan berat sehari-hari? Kini
                            saatnya Anda meningkatkan kekuatan dan efisiensi
                            dengan{' '}
                            <strong>Catridge Turbo ITech HX35 4031507</strong>,
                            solusi terbaik untuk Komatsu PC-200 Anda!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Kenapa Memilih Catridge Turbo ITech HX35 4031507?
                    </h2>
                    <div>
                        <h3 className='font-semibold text-gray-600 py-4'>
                            1. Tenaga Maksimal, Bahan Bakar Tetap Irit
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732158328/cp-indoteknik-v3/blog/September2024/energyBoostTheWorkIsAlwaysOKE%20BOS_ForTheKomatsuPC_200/2_hbj2yn.png'
                                alt='Tenaga Maksimal, Bahan Bakar Tetap Irit'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4 lg:mt-0 mt-4'>
                                Dibuat dengan teknologi manufaktur terkini,
                                Catridge Turbo ITech HX35 memastikan mesin
                                diesel Anda bekerja lebih{' '}
                                <strong>efisien tanpa boros bahan bakar</strong>
                                . Aliran tenaga yang stabil memastikan pekerjaan
                                tetap lancar, bahkan di medan yang paling
                                menantang.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h3 className='font-semibold text-gray-600 py-4'>
                            2. Peningkatan Performa yang Luar Biasa
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732158324/cp-indoteknik-v3/blog/September2024/energyBoostTheWorkIsAlwaysOKE%20BOS_ForTheKomatsuPC_200/3_zy1vfl.png'
                                alt='Peningkatan Performa yang Luar Biasa'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4 lg:mt-0 mt-4'>
                                Catridge Turbo ini dirancang khusus untuk{' '}
                                <strong>
                                    meningkatkan kekuatan dan performa alat
                                    berat
                                </strong>
                                , memastikan Komatsu PC-200 Anda selalu siap
                                menghadapi tantangan pekerjaan berat.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h3 className='font-semibold text-gray-600 py-4'>
                            3. Keandalan Tinggi
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732158331/cp-indoteknik-v3/blog/September2024/energyBoostTheWorkIsAlwaysOKE%20BOS_ForTheKomatsuPC_200/4_co9dhj.png'
                                alt='Keandalan Tinggi'
                                width={600}
                                height={400}
                            />

                            <p className='text-gray-600 mb-4 lg:mt-0 mt-4'>
                                Dengan konstruksi berkualitas tinggi, turbo ini
                                memberikan kinerja yang tahan lama dan andal,{' '}
                                <strong>
                                    mengurangi risiko downtime alat berat Anda
                                </strong>
                                .
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Tunggu Apa Lagi?
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify lg:w-[800px]'>
                        <p className='text-gray-600 mb-4'>
                            Jangan biarkan mesin Anda bekerja setengah hati!
                            Segera lengkapi Komatsu PC-200 Anda dengan{' '}
                            <Link
                                href='/products/other-products/turbo-charger/cartridge-turbo'
                                className='font-bold underline text-blue-900'
                            >
                                Catridge Turbo ITech HX35 4031507
                            </Link>{' '}
                            dan rasakan perbedaannya.
                        </p>
                    </div>
                    <div className='lg:flex md:flex gap-6 text-justify lg:w-[800px]'>
                        <p className='text-gray-600 mb-4'>
                            <strong>Beli Sekarang Hanya di Indo Teknik!</strong>{' '}
                            <br />
                            Dapatkan produk berkualitas tinggi dengan layanan
                            terbaik hanya di sini. Jangan tunda lagi, tenaga
                            tambahan menunggu alat berat Anda!
                        </p>
                    </div>
                    <div className='lg:flex md:flex gap-6 text-justify lg:w-[800px]'>
                        <p className='text-gray-600 mb-4'>
                            <strong>
                                Kinerja Lebih Baik. Efisiensi Optimal. Hasil
                                Maksimal.
                            </strong>{' '}
                            <br />
                            Dengan{' '}
                            <Link
                                href='/products/other-products/turbo-charger/cartridge-turbo'
                                className='font-bold underline text-blue-900'
                            >
                                Catridge Turbo ITech HX35 4031507
                            </Link>{' '}
                            , pekerjaan Anda akan selalu{' '}
                            <strong>&quot;OKE BOS!&quot;</strong>.
                        </p>
                    </div>
                    <div className='lg:flex md:flex gap-6 text-justify lg:w-[800px]'>
                        <p className='text-gray-600 mb-4'>
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='/contact'
                            >
                                Hubungi kami
                            </Link>{' '}
                            atau kunjungi langsung{' '}
                            <Link
                                href='/'
                                className='font-bold underline text-blue-900'
                            >
                                Indo Teknik
                            </Link>{' '}
                            di{' '}
                            <Link
                                className='underline text-blue-900 font-bold'
                                href='https://maps.app.goo.gl/4SxvjvmkanadMQ2q6'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292.
                            </Link>{' '}
                            dan tingkatkan performa alat berat Anda hari ini!
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

export default EnergyBoost_TheWorkIsAlwaysOKEBOS_ForTheKomatsuPC_200;
