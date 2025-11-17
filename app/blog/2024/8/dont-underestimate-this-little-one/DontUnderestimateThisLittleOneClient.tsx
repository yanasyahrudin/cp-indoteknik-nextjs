'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const DontUnderestimateThisLittleOne_MicroFilterInjectorDenso = ({
    jsonLd,
    currentPostTitle,
    publicationDate,
    latestPosts,
    currentPost,

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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732956999/cp-indoteknik-v3/blog/August2024/dontUnderestimateThisLittleOne/1_qljqv1.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Tahukah Anda?{' '}
                            <strong>Micro Filter Injector Denso</strong> adalah
                            komponen kecil dengan peran besar dalam sistem
                            injector kendaraan diesel. Jika filter ini
                            bermasalah, kinerja mesin bisa terganggu. Solusinya?
                            Anda bisa mendapatkannya di{' '}
                            <strong>Indo Teknik</strong>.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Apa Itu Micro Filter Injector Denso?
                    </h2>
                    <p className='text-gray-600'>
                        Micro filter ini terletak di dalam struktur injector dan
                        memiliki fungsi utama sebagai:
                    </p>
                    <div>
                        <h3 className='my-2 font-semibold'>
                            1. Penyaring Partikel Kecil
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732956994/cp-indoteknik-v3/blog/August2024/dontUnderestimateThisLittleOne/2_yammeh.png'
                                alt='Penyaring Partikel Kecil'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                Melindungi aliran bahan bakar agar tetap lancar
                                tanpa hambatan partikel halus.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className='my-2 font-semibold'>
                            2. Material Berkualitas Tinggi
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732956992/cp-indoteknik-v3/blog/August2024/dontUnderestimateThisLittleOne/3_xzvkuq.png'
                                alt='Material Berkualitas Tinggi'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                Dibuat dari material terbaik untuk meningkatkan
                                daya tahan dan keawetan injector.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className='my-2 font-semibold'>
                            3. Perlindungan Injector
                        </h3>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732956995/cp-indoteknik-v3/blog/August2024/dontUnderestimateThisLittleOne/4_bzdxfc.png'
                                alt='Perlindungan Injector'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                Membantu mencegah kerusakan pada injector
                                sekaligus memperpanjang usia pakai mesin diesel
                                Anda.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='lg:w-[800px]'>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Kenapa Penting?
                    </h2>

                    <p className='text-gray-600 mb-4'>
                        Kerusakan pada micro filter dapat menyebabkan:
                    </p>

                    <ul className='text-gray-600 mb-4 list-disc ml-4'>
                        <li>Aliran bahan bakar menjadi tersumbat</li>
                        <li>Injector cepat rusak</li>
                        <li>Biaya perawatan mesin menjadi lebih mahal</li>
                    </ul>
                </div>

                <div className='lg:w-[800px]'>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Dapatkan Micro Filter Injector Denso di Indo Teknik
                    </h2>

                    <Image
                        className='rounded-xl w-[400px]'
                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732956997/cp-indoteknik-v3/blog/August2024/dontUnderestimateThisLittleOne/5_ie583s.png'
                        alt='Perlindungan Injector'
                        width={600}
                        height={400}
                    />

                    <ul className='text-gray-600 my-4 list-disc ml-4'>
                        <li>Produk original dengan kualitas terbaik</li>
                        <li>Menjamin usia pakai injector lebih lama</li>
                    </ul>

                    <p className='text-gray-600 my-4'>
                        Segera lengkapi kebutuhan kendaraan diesel Anda dengan{' '}
                        <Link
                            className='font-bold underline text-blue-900'
                            href='/products/fuel-injection-systems/common-rail/injector'
                        >
                            Micro Filter Injector Denso
                        </Link>
                        .
                    </p>

                    <p className='text-gray-600 my-4'>
                        Belanja sekarang hanya di <strong>Indo Teknik</strong>{' '}
                        dan pastikan kendaraan Anda tetap dalam kondisi terbaik.
                    </p>

                    <p className='text-gray-600 my-4'>
                        <Link
                            className='font-bold underline text-blue-900'
                            href='/contact'
                        >
                            Hubungi kami
                        </Link>{' '}
                        atau kunjungi langsung di{' '}
                        <Link
                            className='font-bold underline text-blue-900'
                            href='https://maps.app.goo.gl/FXKBHrfEtbtZTLV39'
                        >
                            Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                            Pekanbaru - Riau, 28292
                        </Link>
                        .
                    </p>

                    <p className='text-gray-600 mb-4'>
                        <strong>Indo Teknik</strong>, One stop solution for all
                        your diesel needs.
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

export default DontUnderestimateThisLittleOne_MicroFilterInjectorDenso;
