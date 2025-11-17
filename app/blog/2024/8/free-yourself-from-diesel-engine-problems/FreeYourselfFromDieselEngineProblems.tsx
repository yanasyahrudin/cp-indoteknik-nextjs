'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const FreeYourselfFromDieselEngineProblemsWithThisInjector = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735194295/cp-indoteknik-v3/blog/August2024/freeYourselfFromDieselEngineProblemsWithThisInjector/1_ft89gi.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Apakah Anda sering menghadapi masalah pada mesin
                            diesel kendaraan Anda? Jangan khawatir lagi! Kini,
                            solusi terbaik hadir untuk Anda dengan{' '}
                            <strong>INJECTOR 0445110250 ITECH</strong>, yang
                            dirancang khusus untuk Ford Everest 2.5 TDCI.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Kenapa Harus INJECTOR 0445110250 ITECH?
                    </h2>
                    <div>
                        <h3 className='my-2 font-semibold'>
                            1. Bahan Berkualitas Tinggi
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735194293/cp-indoteknik-v3/blog/August2024/freeYourselfFromDieselEngineProblemsWithThisInjector/2_qce0uu.png'
                                alt='Bahan Berkualitas Tinggi'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                Injector ini dibuat dengan material premium yang
                                menjamin ketahanan dan keandalan terbaik. Anda
                                tidak perlu khawatir soal umur pakai, karena
                                produk ini tahan lama dan memberikan
                                perlindungan maksimal terhadap keausan mesin.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className='my-2 font-semibold'>
                            2. Performa Optimal
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735194285/cp-indoteknik-v3/blog/August2024/freeYourselfFromDieselEngineProblemsWithThisInjector/3_vzrewv.png'
                                alt='Performa Optimal'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                    Didesain untuk memberikan semprotan bahan
                                    bakar yang presisi, INJECTOR 0445110250
                                    ITECH mampu:
                                </p>
                                <ul className='list-disc text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4 ml-4'>
                                    <li>Meningkatkan tenaga mesin</li>
                                    <li>Mencegah kebocoran bahan bakar</li>
                                    <li>
                                        Menjaga performa mesin tetap optimal
                                        dalam jangka panjang
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='my-2 font-semibold'>
                            3. Hemat Bahan Bakar
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735194282/cp-indoteknik-v3/blog/August2024/freeYourselfFromDieselEngineProblemsWithThisInjector/4_kpuwqv.png'
                                alt='Hemat Bahan Bakar'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                Efisiensi bahan bakar adalah prioritas. Komponen
                                yang dirancang dengan presisi ini memastikan
                                pembakaran yang sempurna, sehingga konsumsi
                                bahan bakar menjadi lebih hemat.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className='my-2 font-semibold'>
                            4. Umur Mesin Lebih Panjang
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735194285/cp-indoteknik-v3/blog/August2024/freeYourselfFromDieselEngineProblemsWithThisInjector/5_eldrv4.png'
                                alt='Umur Mesin Lebih Panjang'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                Dengan perlindungan maksimal terhadap keausan,
                                injector ini membantu memperpanjang umur mesin
                                Anda. Tidak hanya itu, performa mesin Anda akan
                                tetap stabil bahkan dalam kondisi kerja berat.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='lg:w-[800px]'>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        INDO TEKNIK: One Stop Solution untuk Kebutuhan Diesel
                        Anda
                    </h2>
                    <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                        Kami memahami betapa pentingnya komponen berkualitas
                        untuk menjaga performa kendaraan Anda. Oleh karena itu,
                        kami hanya menyediakan produk terbaik untuk memenuhi
                        kebutuhan Anda.
                    </p>

                    <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                        <strong>Tunggu Apa Lagi?</strong>
                        <br />
                        Dapatkan{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='/products/fuel-injection-systems/common-rail/injector'
                        >
                            INJECTOR 0445110250 ITECH
                        </Link>{' '}
                        sekarang juga di toko kami! Pastikan Ford Everest 2.5
                        TDCI Anda selalu dalam kondisi prima dan bertenaga.
                    </p>

                    <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                        <strong>
                            Belanja Sekarang dan Rasakan Perbedaannya!
                        </strong>
                        <br />
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='/contact'
                        >
                            Hubungi kami
                        </Link>{' '}
                        segera atau kunjungi toko kami di alamat Jl. Riau Ujung,
                        Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Raiu,
                        28292.
                    </p>

                    <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                        INDO TEKNIK – One stop solution for all your diesel
                        needs.
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

export default FreeYourselfFromDieselEngineProblemsWithThisInjector;
