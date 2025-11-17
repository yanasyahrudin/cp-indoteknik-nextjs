'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const NozzleJosMaximumEfficiencyForToyotaDyna130HT = ({
    currentPost,
    latestPosts,
    publicationDate,
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
            <div className='max-w-4xl px-8 pb-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100 '>
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733368454/cp-indoteknik-v3/blog/December2024/nozzleJos_maximumEffeciencyForToyotaDyna130HT/1_x2ynpw.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4 lg:w-[800px]'>
                            Bagi Anda pengguna setia Toyota Dyna 130HT, kini
                            saatnya meningkatkan kinerja kendaraan Anda dengan{' '}
                            <strong>
                                NOZZLE 093400-3460 DLLA150SND346 ITech
                            </strong>
                            . Produk ini dirancang khusus untuk memberikan
                            efisiensi bahan bakar dan performa mesin yang
                            optimal.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                        Keunggulan NOZZLE 093400-3460 DLLA150SND346 ITech
                    </h2>
                    <div className='ml-4 lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                Efisiensi Bahan Bakar yang Lebih Baik
                            </h2>
                            <div className='lg:flex gap-4'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733368449/cp-indoteknik-v3/blog/December2024/nozzleJos_maximumEffeciencyForToyotaDyna130HT/2_ajs9df.png'
                                    alt='Efisiensi Bahan Bakar yang Lebih Baik'
                                    width={600}
                                    height={400}
                                />
                                <div>
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        Dengan desain mutakhir, nozzle ini
                                        membantu mengurangi pemborosan bahan
                                        bakar, sehingga kendaraan Anda lebih
                                        hemat dan ramah kantong.
                                    </p>
                                </div>
                            </div>

                            <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                Kinerja Mesin yang Optimal
                            </h2>
                            <div className='lg:flex gap-4'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733368463/cp-indoteknik-v3/blog/December2024/nozzleJos_maximumEffeciencyForToyotaDyna130HT/3_vqvaw0.png'
                                    alt='Kinerja Mesin yang Optimal'
                                    width={600}
                                    height={400}
                                />
                                <div>
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        Teknologi pada nozzle ini memastikan
                                        aliran bahan bakar berjalan lancar,
                                        menghasilkan performa mesin yang
                                        maksimal, cocok untuk kebutuhan
                                        operasional yang berat dan menuntut
                                        keandalan tinggi.
                                    </p>
                                </div>
                            </div>

                            <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                Durabilitas yang Tinggi
                            </h2>
                            <div className='lg:flex gap-4'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/v1733368457/cp-indoteknik-v3/blog/December2024/nozzleJos_maximumEffeciencyForToyotaDyna130HT/4_nfuhx6.png'
                                    alt='Durabilitas yang Tinggi'
                                    width={600}
                                    height={400}
                                />
                                <div>
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        Dibuat dari material berkualitas tinggi,
                                        nozzle ini dirancang untuk tahan lama
                                        dan mampu menghadapi kondisi kerja yang
                                        berat, menjadikannya solusi yang
                                        ekonomis untuk jangka panjang.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Dirancang Khusus untuk Toyota Dyna 130HT
                    </h2>
                    <div className=' gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            <strong>Nozzle DLLA150SND346 ITech</strong> adalah
                            pilihan tepat bagi kendaraan Toyota Dyna 130HT.
                            Produk ini memastikan sistem bahan bakar bekerja
                            secara optimal, meningkatkan efisiensi, sekaligus
                            memberikan kenyamanan dalam operasional sehari-hari.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Tersedia Eksklusif di Indo Teknik
                    </h2>
                    <div className=' gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            Dapatkan{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/fuel-injection-systems/conventional/nozzle'
                            >
                                NOZZLE 093400-3460 DLLA150SND346 ITech
                            </Link>{' '}
                            hanya di toko kami.
                        </p>
                        <ul className='list-disc ml-4 text-gray-600 mb-4 font-semibold'>
                            <li>Spesifikasi Premium</li>
                            <li>Efisiensi Tinggi</li>
                            <li>Performa Terbaik</li>
                            <li>Harga Terjangkau</li>
                        </ul>
                        <p className='text-gray-600 mb-4'>
                            Tingkatkan produktivitas kendaraan Anda dengan
                            komponen berkualitas tinggi. Segera{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                hubungi kami
                            </Link>{' '}
                            atau kunjungi <strong>Indo Teknik</strong> di{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/dMotipGz2koKeu8y8'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292
                            </Link>
                            . Pastikan kendaraan Anda mendapatkan perawatan
                            terbaik!
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

export default NozzleJosMaximumEfficiencyForToyotaDyna130HT;
