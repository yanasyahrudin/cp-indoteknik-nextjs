'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const OptimizeThePerformanceOfYourToyotaHiluxRevoWithInjectorServiceAtIndoTeknikPekanbaru =
    ({
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

        const { t } = useTranslation('oct2024Blog');

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
                                Category:{' '}
                                <strong>{currentPost.category}</strong>
                            </span>
                        </div>

                        <div className='mt-5'>
                            <Image
                                className='rounded-xl mx-auto'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722214/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/1_w52apy.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                Halo Sobat Donik! Jika Anda berada di Pekanbaru
                                atau sekitarnya dan merasakan penurunan performa{' '}
                                <strong>Toyota Hilux Revo</strong> Anda, Indo
                                Teknik Pekanbaru siap membantu dengan layanan{' '}
                                <Link href={'/services/common-rail/injector'} className='font-bold text-blue-900 underline'>
                                    service injector terbaik
                                </Link>
                                . Kami menawarkan layanan terbaik yang dapat
                                mengembalikan performa kendaraan Anda ke kondisi
                                optimal. Yuk, simak proses lengkapnya!
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Pembongkaran oleh Mekanik Ahli
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722232/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/2_twxjgd.png'
                                alt={currentPostTitle}
                                width={400}
                                height={300}
                            />
                            <p className='text-gray-600 mb-4'>
                                Proses dimulai dengan pembongkaran injektor oleh
                                mekanik kami yang berpengalaman dan terlatih.
                                Kami menggunakan <strong>special tools</strong>{' '}
                                untuk memastikan bahwa injektor tidak rusak
                                selama proses pembongkaran. Ini adalah langkah
                                penting yang sering diabaikan di tempat lain.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Pembersihan Ultrasonik
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722234/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/3_puuclv.png'
                                alt={currentPostTitle}
                                width={400}
                                height={300}
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah injektor berhasil dibongkar, kami
                                melanjutkan ke tahap pembersihan menggunakan{' '}
                                <strong>mesin ultrasonic</strong>. Teknologi ini
                                memastikan bahwa semua kotoran dan endapan yang
                                mengganggu kinerja injektor dihilangkan secara
                                menyeluruh. Dengan pembersihan yang efektif,
                                injektor Anda akan berfungsi lebih baik.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Pengecekan Detail dan Penggantian Sparepart
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722236/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/4_nmswie.png'
                                alt={currentPostTitle}
                                width={400}
                                height={300}
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah pembersihan, kami melakukan pengecekan
                                detail pada injektor. Jika ada sparepart yang
                                perlu diganti, kami hanya menggunakan{' '}
                                <strong>sparepart baru dan berkualitas</strong>{' '}
                                dengan nomor part yang sesuai dengan bawaan
                                injektor. Kami tidak menggunakan persamaan part,
                                sparepart berkualitas rendah, atau sparepart
                                bekas, karena kami ingin memberikan yang terbaik
                                untuk kendaraan Anda.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Uji Coba di Mesin Tes Terkini
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722224/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/5_najwgq.png'
                                alt={currentPostTitle}
                                width={400}
                                height={300}
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah semua proses di atas selesai, injektor
                                akan dinaikkan ke{' '}
                                <Link
                                    className='font-bold text-blue-900 underline'
                                    href='https://www.indo-teknik.com/test-bench-and-fabrication-machines'
                                >
                                    mesin tes terkini
                                </Link>
                                . Di sini, semua spesifikasi harus lulus
                                pengetesan sebelum injektor siap digunakan. Ini
                                adalah langkah terakhir untuk memastikan bahwa
                                injektor Anda berfungsi dengan optimal.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2 '>
                            Kenapa Memilih Indo Teknik?
                        </h2>
                        <p className='text-gray-600 mb-4 justify-content'>
                            Indo Teknik adalah solusi lengkap untuk memenuhi
                            segala kebutuhan diesel Anda. Kami berkomitmen untuk
                            memberikan layanan berkualitas tinggi dengan harga
                            yang bersaing. Jangan tunggu lagi! Buruan{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='https://www.indo-teknik.com/services/common-rail/injector'
                            >
                                service injector
                            </Link>{' '}
                            Anda di Indo Teknik dan rasakan perbedaannya!
                        </p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Kontak Kami:
                        </h2>
                        <p className='text-gray-600 mb-4'>
                            Untuk informasi lebih lanjut atau untuk membuat
                            janji, jangan ragu untuk menghubungi kami. Kami siap
                            membantu Anda!
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

export default OptimizeThePerformanceOfYourToyotaHiluxRevoWithInjectorServiceAtIndoTeknikPekanbaru;
