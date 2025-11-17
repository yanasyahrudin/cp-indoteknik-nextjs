'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const KomatsuPC200_7GalileoInjectionPumpCalibrationProcessDetailedStepsYouNeedToKnow =
    ({
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

                        <PublishedDateCategory
                            publicationDate={publicationDate}
                            category={currentPost.category}
                        />

                        <div className='mt-5'>
                            <Image
                                className='rounded-xl mx-auto'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730950958/cp-indoteknik-v3/blog/September2024/galileoKomatsuPC200_7InjectionPumpCalibrationProcess/1_s02zu4.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                Halo Sobat Donik! Kali ini kami akan membagikan
                                informasi seputar proses kalibrasi injection
                                pump untuk{' '}
                                <strong>Komatsu PC200-7 Galileo</strong>.
                                Kalibrasi ini bukan hanya sekadar pembersihan
                                dan pemasangan, tetapi mencakup tahap-tahap
                                detail untuk memastikan injection pump{' '}
                                <strong>berfungsi sesuai</strong> standar
                                pabrik. Berikut penjelasan lengkapnya:
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            1. Pembersihan dan Pembongkaran Injection Pump
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730950970/cp-indoteknik-v3/blog/September2024/galileoKomatsuPC200_7InjectionPumpCalibrationProcess/2_jlcppb.png'
                                alt='Proses Reparasi Topi Velg di Indo Teknik'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Proses kalibrasi dimulai dengan membersihkan
                                injection pump untuk menghilangkan kotoran yang
                                mungkin menumpuk di komponen luar dan dalamnya.
                                Pembersihan menyeluruh ini penting untuk{' '}
                                <strong>
                                    mencegah kontaminasi selama proses
                                    berikutnya
                                </strong>
                                . Setelah pembersihan, injection pump dibongkar
                                menggunakan alat khusus. Semua bagian dibuka
                                agar <strong>bisa diperiksa</strong> dan{' '}
                                <strong>dipastikan kondisinya</strong>.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            2. Pemeriksaan Komponen Bagian Dalam
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730950973/cp-indoteknik-v3/blog/September2024/galileoKomatsuPC200_7InjectionPumpCalibrationProcess/3_gxkjwt.png'
                                alt='Penggunaan Kawat Las Berkualitas'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Pada tahap ini, setiap bagian dalam (inner part)
                                injection pump diperiksa satu per satu.
                                Pemeriksaan ini bertujuan untuk{' '}
                                <strong>
                                    menentukan komponen mana yang sudah tidak
                                    layak pakai
                                </strong>
                                , dan{' '}
                                <strong>mana yang masih bisa digunakan</strong>.
                                Selain itu, semua komponen akan dicek apakah
                                mereka sesuai dengan part yang tercantum di
                                katalog, sehingga tidak ada kesalahan atau
                                ketidaksesuaian dalam pemasangan nantinya.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            3. Pemasangan Komponen Baru Berdasarkan Katalog
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730950982/cp-indoteknik-v3/blog/September2024/galileoKomatsuPC200_7InjectionPumpCalibrationProcess/4_g4oh7f.png'
                                alt='Proses Bubut untuk Hasil yang Presisi'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah pemeriksaan, part-part yang sudah tidak
                                layak pakai diganti dengan yang baru. Setiap
                                part baru ini dipilih dengan nomor part yang
                                sesuai katalog, memastikan bahwa{' '}
                                <strong>semua komponen kompatibel</strong> dan{' '}
                                <strong>sesuai dengan spesifikasi</strong>{' '}
                                injection pump Komatsu PC200-7 Galileo.
                                Ketelitian dalam pemasangan sangat penting untuk
                                menjamin performa optimal dari injection pump .
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            4. Pengujian Injection Pump di Mesin Test Bench
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730950956/cp-indoteknik-v3/blog/September2024/galileoKomatsuPC200_7InjectionPumpCalibrationProcess/5_rraf8h.png'
                                alt='Proses Bubut untuk Hasil yang Presisi'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah proses pemasangan selesai, injection
                                pump diujikan pada mesin test bench. Pengujian
                                ini tidak hanya untuk menguji rata minyak saja;
                                kami melakukan uji mendalam untuk{' '}
                                <strong>
                                    memastikan semua data spesifikasi yang
                                    ditentukan telah terpenuhi
                                </strong>
                                . Karena tes ini membutuhkan ketelitian,
                                prosesnya pun memakan waktu lebih lama, namun
                                hasilnya sepadan karena injection pump akan
                                berfungsi dengan performa yang maksimal.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Hasil Akhir: Injection Pump Siap Digunakan
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730950988/cp-indoteknik-v3/blog/September2024/galileoKomatsuPC200_7InjectionPumpCalibrationProcess/6_in2daq.png'
                                alt='Proses Bubut untuk Hasil yang Presisi'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah lulus pengujian, injection pump siap
                                digunakan kembali dengan{' '}
                                <strong>performa yang optimal</strong> dan{' '}
                                <strong>sesuai spesifikasi pabrik</strong>.
                                Proses kalibrasi ini memastikan injection pump
                                bisa bekerja dengan efisien dan tahan lama.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='lg:flex md:flex gap-6 text-justify mt-6'>
                            <p className='text-gray-600 mb-4'>
                                Jika Anda tertarik untuk melakukan kalibrasi
                                atau membutuhkan informasi lebih lanjut, jangan
                                ragu untuk{' '}
                                <Link
                                    href='/contact'
                                    className='font-bold underline font-bold'
                                >
                                    menghubungi kami
                                </Link>{' '}
                                atau kunjungi langsung workshop{' '}
                                <strong>Indo Teknik</strong> di{' '}
                                <Link
                                    href='https://maps.app.goo.gl/C7wWFvusP9R2RSoG7'
                                    className='font-bold underline font-bold'
                                >
                                    Jl. Riau Ujung No.898-904, Pekanbaru
                                </Link>
                                . Terima kasih sudah membaca, Sobat Donik! Kami
                                siap membantu{' '}
                                <Link href='#' className='font-bold underline font-bold'>
                                    kebutuhan perawatan
                                </Link>{' '}
                                dan{' '}
                                <Link href='#' className='font-bold underline font-bold'>
                                    kalibrasi injection pump
                                </Link>{' '}
                                Anda.
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

export default KomatsuPC200_7GalileoInjectionPumpCalibrationProcessDetailedStepsYouNeedToKnow;
