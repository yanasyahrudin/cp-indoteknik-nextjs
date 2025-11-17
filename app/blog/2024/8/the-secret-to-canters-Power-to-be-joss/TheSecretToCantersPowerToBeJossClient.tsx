'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const TheSecretToCantersPowerToBeJoss_ItechsDeliveryValveIsTheSolution = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732851868/cp-indoteknik-v3/blog/August2024/theSecretOfCantersPowerToBeJoss/1_exvc0x.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Apakah Canter Anda sering menghadapi medan berat
                            atau membawa beban besar? Anda tentu membutuhkan
                            performa yang maksimal agar perjalanan tetap lancar.
                            Salah satu rahasia agar tenaga Canter tetap
                            bertenaga adalah{' '}
                            <strong>Delivery Valve ITech!</strong>
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Mengapa Memilih DELIVERY VALVE ITECH?
                    </h2>

                    <div className='gap-6 text-justify'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            1. Dibuat dari Material Pilihan
                        </h3>
                        <div className='flex'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732851882/cp-indoteknik-v3/blog/August2024/theSecretOfCantersPowerToBeJoss/2_ddj3nh.png'
                                alt='Dibuat dari Material Pilihan'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 ml-6'>
                                    Delivery Valve ITech (Part Number:
                                    090140-2590) dirancang dengan bahan
                                    berkualitas tinggi sehingga tahan lama dan
                                    awet digunakan dalam jangka panjang. Tidak
                                    perlu khawatir soal ketahanan—ini adalah
                                    investasi pintar untuk Canter Anda!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-6 text-justify'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            2. Harga Kompetitif, Kualitas Unggulan
                        </h3>
                        <div className='flex'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732851865/cp-indoteknik-v3/blog/August2024/theSecretOfCantersPowerToBeJoss/3_jt29xs.png'
                                alt='Harga Kompetitif, Kualitas Unggulan'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 ml-6'>
                                    Siapa bilang kualitas premium selalu mahal?
                                    Delivery Valve ITech menawarkan harga
                                    bersaing, tetapi tetap memberikan performa
                                    terbaik untuk kendaraan Anda. Pilihan yang
                                    sempurna untuk efisiensi biaya jangka
                                    panjang!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-6 text-justify'>
                        <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                            3. Aliran Bahan Bakar Stabil dan Konsisten
                        </h3>
                        <div className='flex'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732851866/cp-indoteknik-v3/blog/August2024/theSecretOfCantersPowerToBeJoss/4_m14pmu.png'
                                alt='Aliran Bahan Bakar Stabil dan Konsisten'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4 ml-6'>
                                    Keunggulan lain dari Delivery Valve ITech
                                    adalah kemampuannya memastikan aliran bahan
                                    bakar yang stabil. Hal ini sangat penting,
                                    terutama ketika menghadapi medan sulit atau
                                    membawa beban berat. Dengan aliran bahan
                                    bakar yang optimal, Canter Anda tetap
                                    bertenaga di segala kondisi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        TUNGGU APA LAGI?
                    </h2>
                    <div className='lg:flex md:flex gap-6 '>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732851867/cp-indoteknik-v3/blog/August2024/theSecretOfCantersPowerToBeJoss/5_bl49hi.png'
                            alt='Tunggu Apa Lagi?'
                            width={600}
                            height={400}
                        />
                    </div>
                    <div>
                        <p className='text-gray-600 my-4 text-justify'>
                            Jangan biarkan performa Canter Anda menurun! Segera
                            tingkatkan efisiensinya dengan{' '}
                            <Link
                                className='text-blue-900 underline font-bold'
                                href='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                            >
                                Delivery Valve ITech (Part Number: 090140-2590)
                            </Link>
                            .
                        </p>
                        <p className='text-gray-600 my-4 text-justify'>
                            <strong>BELANJA SEKARANG!</strong>
                            <br />
                            Dapatkan hanya di <strong>Indo Teknik</strong> dan
                            nikmati pengiriman cepat dengan harga bersahabat!{' '}
                            <Link
                                className='text-blue-900 underline font-bold'
                                href='/contact'
                            >
                                Ayo hubungi kami
                            </Link>{' '}
                            atau kunjungi Indo Teknik langsung di{' '}
                            <Link
                                className='text-blue-900 underline font-bold'
                                href='https://maps.app.goo.gl/FXKBHrfEtbtZTLV39'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292
                            </Link>
                            .
                        </p>
                        <p className='text-gray-600 my-4 text-justify'>
                            <strong>DELIVERY VALVE ITECH:</strong> Solusi cerdas
                            untuk performa Canter Anda.
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

export default TheSecretToCantersPowerToBeJoss_ItechsDeliveryValveIsTheSolution;
