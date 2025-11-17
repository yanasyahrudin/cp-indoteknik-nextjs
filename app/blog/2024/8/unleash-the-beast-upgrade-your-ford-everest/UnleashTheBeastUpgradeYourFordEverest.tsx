'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const UnleashTheBeastUpgradeYourFordEverestWithTheDNOPDN121ITECHNozzle = ({
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

    const { t } = useTranslation('aug2024Blog');

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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735534731/cp-indoteknik-v3/blog/August2024/unleashTheBeast_UpgradeYourFordEverest/1_fbbqhb.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Apakah Anda pemilik Ford Everest yang ingin
                            meningkatkan performa kendaraan kesayangan Anda?
                            Kini saatnya memberikan sentuhan terbaik dengan{' '}
                            <strong>Nozzle DNOPDN121 ITECH</strong>! Produk ini
                            dirancang khusus untuk memberikan performa optimal
                            dan ketahanan luar biasa pada kendaraan diesel Anda.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Kenapa Harus Memilih Nozzle DNOPDN121 ITECH?
                    </h2>

                    <div className='gap-6 text-justify'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            1. Material Berkualitas Tinggi
                        </h3>
                        <div className='flex'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735534701/cp-indoteknik-v3/blog/August2024/unleashTheBeast_UpgradeYourFordEverest/2_tzcdw5.png'
                                alt='Material Berkualitas Tinggi'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 ml-6'>
                                    Nozzle DNOPDN121 ITECH dibuat dari material
                                    yang tahan terhadap keausan, memberikan umur
                                    pakai yang lebih lama. Dengan kualitas
                                    terbaik, Anda tidak perlu khawatir soal
                                    ketahanan produk ini.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-6 text-justify'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            2. Performa Mesin yang Lebih Baik
                        </h3>
                        <div className='flex'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735534702/cp-indoteknik-v3/blog/August2024/unleashTheBeast_UpgradeYourFordEverest/3_de5s15.png'
                                alt='Performa Mesin yang Lebih Baik'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 ml-6'>
                                    Penyemprotan bahan bakar yang lebih efisien
                                    memberikan daya tambahan pada mesin Anda.
                                    Ideal untuk Anda yang sering menghadapi
                                    medan berat atau membutuhkan tenaga ekstra
                                    dalam perjalanan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-6 text-justify'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            3. Efisiensi Perawatan
                        </h3>
                        <div className='flex'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735534695/cp-indoteknik-v3/blog/August2024/unleashTheBeast_UpgradeYourFordEverest/4_pi6aqb.png'
                                alt='Efisiensi Perawatan'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 ml-6'>
                                    Dengan ketahanan tinggi, nozzle ini membantu
                                    mengurangi frekuensi perawatan mesin.
                                    Hasilnya? Penghematan biaya jangka panjang
                                    yang signifikan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Manfaat Utama Nozzle DNOPDN121 ITECH
                    </h2>
                    <div>
                        <ul className='text-gray-600 my-4 text-justify'>
                            <li>
                                <strong>Tenaga Maksimal</strong>: Memberikan
                                daya lebih besar untuk kebutuhan berat.
                            </li>
                            <li>
                                <strong>Hemat Biaya</strong>: Lebih tahan lama,
                                lebih sedikit perawatan.
                            </li>
                            <li>
                                <strong>Kualitas Premium</strong>: Material
                                terbaik untuk performa terbaik.
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        BELI SEKARANG di INDO TEKNIK
                    </h2>

                    <div>
                        <p className='text-gray-600 my-4 text-justify'>
                            Sebagai one-stop solution untuk kebutuhan diesel
                            Anda, INDO TEKNIK menyediakan Nozzle DNOPDN121 ITECH
                            dengan harga terbaik dan kualitas terjamin.
                        </p>
                        <p className='text-gray-600 my-4 text-justify'>
                            <strong>TUNGGU APA LAGI?</strong>
                            <br />
                            Dapatkan{' '}
                            <Link
                                className='underline text-blue-900 font-bold'
                                href='https://maps.app.goo.gl/4xGp2xYfn98Uo5437'
                            >
                                Nozzle DNOPDN121 ITECH
                            </Link>{' '}
                            sekarang juga dan rasakan perubahan signifikan pada
                            performa Ford Everest Anda.
                        </p>
                        <p className='text-gray-600 my-4 text-justify'>
                            <strong>BELANJA SEKARANG!</strong>
                            <br />
                            <Link
                                className='underline text-blue-900 font-bold'
                                href='/contact'
                            >
                                Hubungi kami
                            </Link>{' '}
                            untuk pemesanan online atau kunjungi toko langsung
                            di alamat{' '}
                            <Link
                                className='underline text-blue-900 font-bold'
                                href=''
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292.
                            </Link>
                        </p>
                        <p className='text-gray-600 my-4 text-justify'>
                            <strong>INDO TEKNIK</strong>
                            <br />
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

export default UnleashTheBeastUpgradeYourFordEverestWithTheDNOPDN121ITECHNozzle;
