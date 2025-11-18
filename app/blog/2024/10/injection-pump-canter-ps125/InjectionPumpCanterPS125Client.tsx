'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';
import Image from 'next/image';

const InjectionPumpCanterPS125TheSecretOfPowerOnAllTerrains = ({
    blogPosts,
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732263898/cp-indoteknik-v3/blog/October2024/injectionPumpCanterPS125/1_x3blh5.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Jika kamu mengandalkan Mitsubishi Canter PS125 untuk
                            kebutuhan operasional sehari-hari, memastikan
                            performa kendaraan tetap optimal adalah sebuah
                            keharusan. Salah satu kunci untuk mencapai performa
                            maksimal adalah penggunaan{' '}
                            <strong>
                                Injection Pump Genuine Denso ME226698
                            </strong>
                            . Berikut alasan kenapa komponen ini wajib kamu
                            miliki:
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        1. Efisiensi Aliran Bahan Bakar untuk Tenaga Maksimal
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732263893/cp-indoteknik-v3/blog/October2024/injectionPumpCanterPS125/2_bcq3q1.png'
                            alt={currentPostTitle}
                            width={400}
                            height={300}
                        />
                        <p className='text-gray-600 mb-4'>
                            Injection pump ini dirancang untuk mengoptimalkan
                            aliran bahan bakar, meningkatkan tenaga dan torsi
                            mesin Canter PS125. Dengan begitu, kemampuan angkut
                            dan akselerasi kendaraan pun meningkat, memungkinkan
                            Canter bekerja keras di medan apa pun.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        2. Material Berkualitas Tinggi untuk Ketahanan Maksimal
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732263891/cp-indoteknik-v3/blog/October2024/injectionPumpCanterPS125/3_o2ocrq.png'
                            alt={currentPostTitle}
                            width={400}
                            height={300}
                        />
                        <div className='gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                Pompa injeksi ini dibuat menggunakan material
                                premium yang dirancang khusus untuk kondisi
                                kerja berat. Baik saat melewati medan ekstrem
                                maupun saat menjalani tugas berat, Injection
                                Pump Genuine Denso memberikan daya tahan yang
                                tidak tertandingi.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        3. Performa Stabil di Segala Putaran Mesin
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732263891/cp-indoteknik-v3/blog/October2024/injectionPumpCanterPS125/4_apo2sl.png'
                            alt={currentPostTitle}
                            width={400}
                            height={300}
                        />
                        <p className='text-gray-600 mb-4'>
                            Keunggulan lain dari pompa injeksi ini adalah
                            performa stabil di segala situasi. Baik saat mesin
                            berputar rendah untuk manuver halus maupun saat
                            dipacu dalam kecepatan tinggi,{' '}
                            <strong>
                                Injection Pump Genuine Denso ME226698
                            </strong>{' '}
                            memastikan Canter tetap bertenaga.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Genuine Denso
                    </h2>
                    {/* Add video here */}
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div className='gap-6 text-justify mt-5 lg:mt-0 md:mt-0'>
                            <p className='text-gray-600 mb-4 justify-content'>
                                Produk ini adalah komponen asli dengan kualitas
                                yang telah teruji. Menggunakan produk genuine
                                seperti ini memastikan mesin Canter PS125 kamu
                                tetap awet, efisien, dan siap menghadapi
                                tantangan berat tanpa kompromi.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                        TUNGGU APA LAGI? BELI SEKARANG!
                    </h2>
                    {/* Add video here */}
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div className='gap-6 text-justify mt-5 lg:mt-0 md:mt-0'>
                            <p className='text-gray-600 mb-4 justify-content lg:w-[800px]'>
                                Dapatkan{' '}
                                <Link
                                    className='underline text-blue-900 font-bold'
                                    href='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                                >
                                    Injection Pump Canter PS125 Genuine Denso
                                    ME226698
                                </Link>{' '}
                                hanya di <strong>INDO TEKNIK</strong>, tempat
                                terbaik untuk suku cadang berkualitas.
                            </p>
                            <p className='text-gray-600 mb-4 justify-content lg:w-[800px]'>
                                <strong>
                                    Jangan tunggu sampai terlambat, perkuat
                                    Canter kamu hari ini!
                                </strong>
                            </p>
                            <p className='text-gray-600 mb-4 justify-content lg:w-[800px]'>
                                <strong>BELI SEKARANG!</strong>{' '}
                                <Link
                                    href='/contact'
                                    className='underline text-blue-900 font-bold'
                                >
                                    Hubungi kami
                                </Link>{' '}
                                atau kunjungi <strong>INDO TEKNIK</strong>{' '}
                                langsung di{' '}
                                <Link
                                    href='https://maps.app.goo.gl/mUA3wDC6eVwbAkfy6'
                                    className='underline text-blue-900 font-bold'
                                >
                                    Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                    Sekaki, Pekanbaru - Riau, 28292
                                </Link>
                                . <strong>INDO TEKNIK</strong>, One stop
                                solution for all your diesel needs.
                            </p>
                        </div>
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

export default InjectionPumpCanterPS125TheSecretOfPowerOnAllTerrains;
