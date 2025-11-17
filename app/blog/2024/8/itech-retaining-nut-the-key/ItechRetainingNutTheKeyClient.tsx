'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const ITechRetainingNut_TheKeyToMaximumTritonInjectorPerformance = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733218756/cp-indoteknik-v3/blog/August2024/importantComponentsInAnInjector/1_vllb0p.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Injector adalah elemen penting dalam sistem bahan
                            bakar kendaraan diesel, terutama pada Triton. Untuk
                            menjaga agar kinerjanya tetap optimal, setiap
                            komponen pendukung injector harus memiliki kualitas
                            terbaik. Salah satu komponen vital yang mendukung
                            performa ini adalah{' '}
                            <strong>
                                Retaining Nut ITech (Mur dan Kupu-Kupu)
                            </strong>
                            .
                        </p>
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Mari kita bahas apa saja yang membuat{' '}
                            <strong>Retaining Nut ITech</strong> menjadi pilihan
                            utama bagi kendaraan Anda.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Memastikan Tekanan Bahan Bakar Tetap Stabil
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733218757/cp-indoteknik-v3/blog/August2024/importantComponentsInAnInjector/2_wvvozx.png'
                            alt='Memastikan Tekanan Bahan Bakar Tetap Stabil'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                <strong>Retaining Nut ITech</strong> dirancang
                                untuk mendukung aliran bahan bakar dengan
                                tekanan yang stabil. Hal ini memungkinkan
                                pembakaran berjalan lebih efisien, meningkatkan
                                tenaga mesin, sekaligus menghemat konsumsi bahan
                                bakar. Dengan komponen ini, kendaraan Anda akan
                                bekerja lebih efektif dan bertenaga.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Dirancang Spesial untuk Injector Triton
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733218753/cp-indoteknik-v3/blog/August2024/importantComponentsInAnInjector/3_v1p5s2.png'
                            alt='Dirancang Spesial untuk Injector Triton'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Bukan hanya sekadar komponen biasa,{' '}
                                <strong>Retaining Nut ITech</strong> dibuat
                                dengan spesifikasi khusus untuk kendaraan
                                Triton. Desain presisinya memastikan pemasangan
                                yang sempurna dan performa yang optimal dalam
                                berbagai kondisi operasional.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Material Tangguh untuk Daya Pakai Maksimal
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733218754/cp-indoteknik-v3/blog/August2024/importantComponentsInAnInjector/4_ctr5lo.png'
                            alt='Material Tangguh untuk Daya Pakai Maksimal'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Salah satu keunggulan utama{' '}
                                <strong>Retaining Nut ITech</strong> adalah
                                bahan berkualitas tinggi yang digunakan dalam
                                proses pembuatannya. Komponen ini tidak hanya
                                tahan lama, tetapi juga mampu bertahan dalam
                                kondisi kerja berat, sehingga mengurangi biaya
                                penggantian dan perawatan.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Mengapa Memilih Indo Teknik?
                    </h2>
                    <div>
                        <p className='text-gray-600 my-4'>
                            Sebagai penyedia solusi terpercaya untuk kebutuhan
                            diesel, Indo Teknik menghadirkan produk unggulan
                            seperti{' '}
                            <strong>
                                Retaining Nut ITech (Mur dan Kupu-Kupu)
                            </strong>
                            . Kami berkomitmen untuk menyediakan komponen
                            berkualitas yang membantu Anda menjaga performa
                            kendaraan.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pesan Sekarang di Indo Teknik!
                    </h2>
                    <div>
                        <p className='text-gray-600 my-4'>
                            Jangan biarkan performa injector kendaraan Anda
                            terganggu oleh komponen yang kurang optimal. Pilih{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/fuel-injection-systems/common-rail/injector'
                            >
                                Retaining Nut ITech (Mur Kupu-Kupu dan Kipas)
                            </Link>{' '}
                            dari Indo Teknik dan nikmati kinerja mesin yang
                            lebih baik.
                        </p>
                        <p className='text-gray-600 my-4'>
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                Hubungi kami
                            </Link>{' '}
                            untuk informasi lebih lanjut dan dapatkan produk ini
                            sekarang juga atau kunjungi langsung Indo Teknik di{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/DMVQMvpjEFZaAZmR9'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki
                                Pekanbaru Riau, 28292
                            </Link>
                            .
                        </p>
                        <p className='text-gray-600 my-4'>
                            <strong>INDO TEKNIK</strong> One stop solution for
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

export default ITechRetainingNut_TheKeyToMaximumTritonInjectorPerformance;
