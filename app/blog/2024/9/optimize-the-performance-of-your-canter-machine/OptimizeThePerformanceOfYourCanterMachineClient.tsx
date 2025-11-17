'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const OptimizeThePerformanceOfYourCanterMachineWithTheITech092130_0050HandPump =
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732094571/cp-indoteknik-v3/blog/September2024/optimizeThePerformanceOfYourCanterMachine/1_vmx0l2.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                Kinerja truk Canter Anda terganggu karena aliran
                                bahan bakar yang tidak stabil? Kini saatnya
                                beralih ke{' '}
                                <strong>
                                    Priming Pump/Hand Pump ITech 092130-0050
                                </strong>
                                , solusi terbaik untuk menjaga tekanan bahan
                                bakar tetap optimal!
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Keunggulan Hand Pump ITech 092130-0050
                        </h2>
                        <div>
                            <h3 className='my-2 font-semibold'>
                                1. Performa Mesin Lebih Optimal
                            </h3>
                            <div className='lg:flex md:flex gap-6 text-justify'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732094557/cp-indoteknik-v3/blog/September2024/optimizeThePerformanceOfYourCanterMachine/2_uynoau.png'
                                    alt='Performa Mesin Lebih Optimal'
                                    width={600}
                                    height={400}
                                />
                                <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                    Dengan aliran bahan bakar yang lancar, mesin
                                    truk Canter Anda akan bekerja dengan
                                    efisiensi maksimal. Tidak hanya itu, tenaga
                                    mesin menjadi lebih responsif sehingga truk
                                    lebih tangguh di segala kondisi jalan.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className='my-2 font-semibold'>
                                2. Tekanan Bahan Bakar Stabil
                            </h3>
                            <div className='lg:flex md:flex gap-6 text-justify'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732094553/cp-indoteknik-v3/blog/September2024/optimizeThePerformanceOfYourCanterMachine/3_bu5gz4.png'
                                    alt='Tekanan Bahan Bakar Stabil'
                                    width={600}
                                    height={400}
                                />
                                <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                    Hand Pump ITech memastikan tekanan bahan
                                    bakar selalu stabil. Tidak ada lagi masalah
                                    aliran tersendat yang dapat menurunkan
                                    performa mesin Anda.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className='my-2 font-semibold'>
                                3. Hemat Biaya Perawatan
                            </h3>
                            <div className='lg:flex md:flex gap-6 text-justify'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732094555/cp-indoteknik-v3/blog/September2024/optimizeThePerformanceOfYourCanterMachine/4_xvwxw6.png'
                                    alt='Hemat Biaya Perawatan'
                                    width={600}
                                    height={400}
                                />
                                <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                    Terbuat dari material berkualitas tinggi,
                                    Hand Pump ITech sangat awet dan tahan lama.
                                    Anda tidak perlu sering mengganti komponen,
                                    sehingga biaya perawatan pun lebih hemat.
                                    Ditambah lagi, harga produk ini sangat
                                    terjangkau!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[800px]'>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Indo Teknik - One stop solution for all your diesel
                            needs
                        </h2>

                        <p className='text-gray-600 mb-4'>
                            Sebagai pusat solusi kebutuhan diesel,{' '}
                            <strong>Indo Teknik</strong> memastikan Anda
                            mendapatkan komponen terbaik untuk performa mesin.
                            Dengan jaminan kualitas dan harga kompetitif,{' '}
                            <strong>Indo Teknik</strong> adalah tempat terbaik
                            untuk membeli{' '}
                            <strong>Hand Pump ITech 092130-0050</strong>.
                        </p>

                        <p className='text-gray-600 mb-4'>
                            <strong>Tunggu Apa Lagi?</strong> Segera dapatkan{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                            >
                                Hand Pump ITech 092130-0050
                            </Link>{' '}
                            hanya di <strong>Indo Teknik</strong> dan buktikan
                            kualitasnya! .
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                Hubungi kami
                            </Link>{' '}
                            atau kunjungi <strong>Indo Teknik</strong> langsung
                            di{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/iwQHVPgiApsn5T8R9'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292
                            </Link>
                            .
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

export default OptimizeThePerformanceOfYourCanterMachineWithTheITech092130_0050HandPump;
