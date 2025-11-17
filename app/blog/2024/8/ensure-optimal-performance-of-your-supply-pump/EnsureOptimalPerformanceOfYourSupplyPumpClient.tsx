'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const EnsureOptimalPerformanceOfYourSupplyPumpWithITechHP3Plunger = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/v1732614100/cp-indoteknik-v3/blog/August2024/ensureOptimalPerformanceOfYourSupplyPump/1_shxo6n.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Apakah Anda ingin mesin diesel Anda selalu dalam
                            performa terbaik? Kini saatnya Anda beralih ke{' '}
                            <strong>Plunger HP 3 ITech</strong>, solusi sempurna
                            untuk memastikan supply pump kendaraan Anda bekerja
                            optimal!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Keunggulan Utama Plunger HP 3 ITech:
                    </h2>

                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/v1732614104/cp-indoteknik-v3/blog/August2024/ensureOptimalPerformanceOfYourSupplyPump/2_obvvdn.png'
                            alt='Keunggulan Utama Plunger HP 3 ITech:'
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className='gap-6 text-justify'>
                        <h3 className='text-lg font-semibold text-gray-800 mt-6 mb-2'>
                            1. Tekanan Lebih Stabil
                        </h3>
                        <div>
                            <p className='text-gray-600 mb-4 ml-6'>
                                Plunger ITech dirancang dengan{' '}
                                <strong>teknologi presisi tinggi</strong>,
                                menjamin tekanan bahan bakar yang{' '}
                                <strong>konsisten</strong> dan{' '}
                                <strong>stabil</strong>. Dengan tekanan yang
                                stabil, kinerja supply pump akan meningkat
                                secara signifikan, mendukung efisiensi mesin
                                Anda.
                            </p>
                        </div>
                    </div>
                    <div className='gap-6 text-justify'>
                        <h3 className='text-lg font-semibold text-gray-800 mt-6 mb-2'>
                            2. Tenaga Mesin Maksimal
                        </h3>
                        <div>
                            <p className='text-gray-600 mb-4 ml-6'>
                                Ketika supply pump Anda bekerja optimal, tekanan
                                bahan bakar juga menjadi lebih baik. Ini
                                artinya:
                            </p>
                            <ul className='list-disc text-gray-600 mb-4 ml-12'>
                                <li>
                                    <strong>Performa mesin meningkat:</strong>{' '}
                                    Mesin diesel Anda akan bekerja dengan tenaga
                                    maksimal.
                                </li>
                                <li>
                                    <strong>
                                        Efisiensi bahan bakar terjaga:
                                    </strong>{' '}
                                    Konsumsi bahan bakar menjadi lebih hemat
                                    tanpa mengorbankan kekuatan.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='gap-6 text-justify'>
                        <h3 className='text-lg font-semibold text-gray-800 mt-6 mb-2'>
                            3. Harga Terjangkau, Kualitas Terjamin
                        </h3>
                        <div>
                            <p className='text-gray-600 mb-4 ml-6'>
                                Dibuat dari material{' '}
                                <strong>berkualitas tinggi</strong>, Plunger HP
                                3 ITech dirancang untuk tahan lama dan handal.
                                Dengan harga yang{' '}
                                <strong>ramah di kantong</strong>, produk ini
                                memberikan nilai tambah yang luar biasa untuk
                                kendaraan diesel Anda.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Kenapa Harus INDO TEKNIK?
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/v1732614102/cp-indoteknik-v3/blog/August2024/ensureOptimalPerformanceOfYourSupplyPump/3_korebv.png'
                            alt='Kenapa Harus INDO TEKNIK?'
                            width={600}
                            height={400}
                        />
                    </div>
                    <div>
                        <p className='text-gray-600 my-4'>
                            <strong>INDO TEKNIK</strong> adalah solusi lengkap
                            untuk kebutuhan diesel Anda. Dari suku cadang
                            berkualitas hingga pelayanan yang terpercaya, kami
                            hadir untuk mendukung performa kendaraan Anda.
                        </p>

                        <p className='text-gray-600 mb-4'>
                            <strong>BELANJA SEKARANG!</strong>
                            <br />
                            Jangan tunggu lagi! Dapatkan{' '}
                            <strong>Plunger HP 3 ITech</strong> hanya di{' '}
                            <strong>INDO TEKNIK</strong> dan rasakan
                            perbedaannya.
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <Link
                                className='text-blue-900 font-bold underline'
                                href='/contact'
                            >
                                Hubungi kami
                            </Link>{' '}
                            untuk informasi lebih lanjut! Atau kunjungi{' '}
                            <strong>INDO TEKNIK</strong> langsung di{' '}
                            <Link
                                className='text-blue-900 font-bold underline'
                                href='https://maps.app.goo.gl/JdBCY78yASsqwAgz9'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292
                            </Link>
                            .
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>INDOTEKNIK</strong> <br />
                            One stop solution for all your diesel needs.
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

export default EnsureOptimalPerformanceOfYourSupplyPumpWithITechHP3Plunger;
