'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const ReplaceInjectorPartsEasily_UseITech1465A257RepairKit = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732337237/cp-indoteknik-v3/blog/September2024/ReplaceInjectorPartsEasily/1_cr0jxz.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Ingin mengganti part injector kendaraan Anda dengan
                            mudah dan cepat? Kini, Anda tidak perlu bingung
                            lagi! Dengan{' '}
                            <strong>Repair Kit Injector 1465A257 ITECH</strong>,
                            pekerjaan servis injector jadi lebih praktis dan
                            efisien.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Isi Repair Kit 1465A257 ITech
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        Repair kit ini dilengkapi dengan komponen-komponen yang
                        lengkap untuk memastikan injector kendaraan Anda kembali
                        berfungsi optimal:
                    </p>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731982724/cp-indoteknik-v3/blog/September2024/ReplaceInjectorPartsEasily/2_tdwfwt.png'
                            alt='Pengosongan Tangki'
                            width={600}
                            height={400}
                        />
                        <ul className='text-gray-600 mb-4 ml-4 list-disc'>
                            <li>Tiang Injector</li>
                            <li>Nozzle</li>
                            <li>Cup Injector</li>
                            <li>O-Ring</li>
                            <li>Ring Injector</li>
                            <li>Valve</li>
                            <li>Pin</li>
                        </ul>
                    </div>
                    <p className='text-gray-600 my-4'>
                        <strong>Lengkap, bukan?</strong> Semua yang Anda
                        butuhkan tersedia dalam satu paket!
                    </p>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Pemasangan Mudah & Cepat
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        Repair Kit 1465A257 ITech dirancang dengan presisi untuk
                        memudahkan pemasangan.
                    </p>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731914863/cp-indoteknik-v3/blog/September2024/ReplaceInjectorPartsEasily/3_q66vgd.png'
                            alt='Pengosongan Tangki'
                            width={600}
                            height={400}
                        />
                        <ul className='text-gray-600 mb-4 ml-4 list-disc'>
                            <li>Tidak perlu alat khusus.</li>
                            <li>Menghemat waktu mekanik.</li>
                            <li>Mempercepat proses servis kendaraan.</li>
                        </ul>
                    </div>
                    <p className='text-gray-600 my-4'>
                        Bagi mekanik profesional maupun pemilik kendaraan,
                        repair kit ini memberikan solusi praktis untuk perbaikan
                        injector.
                    </p>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Kualitas Teruji
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        Repair Kit ITECH telah melalui berbagai{' '}
                        <strong>uji kualitas</strong>
                        untuk memastikan performanya:
                    </p>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731914863/cp-indoteknik-v3/blog/September2024/ReplaceInjectorPartsEasily/4_majwji.png'
                            alt='Pengosongan Tangki'
                            width={600}
                            height={400}
                        />
                        <ul className='text-gray-600 mb-4 ml-4 list-disc'>
                            <li>
                                Memberikan perlindungan optimal pada sistem
                                bahan bakar.
                            </li>
                            <li>
                                Menjaga kendaraan tetap aman dan nyaman saat
                                digunakan.
                            </li>
                            <li>Tahan lama untuk pemakaian jangka panjang.</li>
                        </ul>
                    </div>
                </div>

                <div className=' mt-6 gap-6 text-justify'>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Dapatkan Sekarang
                    </h2>
                    <div className='text-gray-600 mb-4'>
                        Jangan tunggu sampai masalah injektor mengganggu
                        aktivitas Anda! Dapatkan{' '}
                        <Link
                            className='font-bold underline text-blue-900'
                            href='/products/fuel-injection-systems/common-rail/injector'
                        >
                            Repair Kit Injector 1465A257 ITECH
                        </Link>{' '}
                        hanya di <strong>INDO TEKNIK</strong>, solusi terpercaya
                        untuk semua kebutuhan diesel Anda.{' '}
                        <strong>Belanja sekarang</strong> dan buktikan kemudahan
                        memperbaiki injector dengan produk berkualitas ini!{' '}
                        <Link
                            className='font-bold underline text-blue-900'
                            href='/contact'
                        >
                            Hubungi kami
                        </Link>{' '}
                        atau kunjungi <strong>INDO TEKNIK</strong> langsung di{' '}
                        <Link
                            className='font-bold underline text-blue-900'
                            href='https://maps.app.goo.gl/iwQHVPgiApsn5T8R9'
                        >
                            Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                            Pekanbaru - Riau, 28292
                        </Link>
                        . <strong>INDO TEKNIK</strong> – One stop solution for
                        all your diesel needs.
                    </div>
                </div>

                <SharePost currentPostTitle={currentPostTitle} />
            </div>
            <SidebarPost latestPosts={latestPosts} />
        </div>
    );
};

export default ReplaceInjectorPartsEasily_UseITech1465A257RepairKit;
