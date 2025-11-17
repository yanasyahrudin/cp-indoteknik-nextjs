'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const OvercomingInjectorProblemsOnMitsubishiTriton2_5 = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730363379/cp-indoteknik-v3/blog/September2024/overcomingInjectorProblemsOnMitsubishiTriton2.5/1_v8ayxf.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Halo Sobat Donik! Kali ini kita kedatangan pasien
                            tangguh dari Mitsubishi, yaitu Triton 2.5, yang
                            mengalami masalah pada injektor. Mobil ini punya
                            keluhan mesin yang pincang, mengeluarkan asap putih
                            saat start awal, dan tiba-tiba mati setelah hidup
                            sejenak. Yuk, langsung kita ulas langkah-langkah
                            perbaikannya!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        1. Deteksi Masalah: Asap Putih dan Mesin Mati Mendadak
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730363381/cp-indoteknik-v3/blog/September2024/overcomingInjectorProblemsOnMitsubishiTriton2.5/2_nc36rj.png'
                            alt='Proses Reparasi Topi Velg di Indo Teknik'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Topi velg yang kami tangani kali ini memiliki
                            ketebalan <strong>14 net</strong>, lho! Untuk
                            memastikan hasilnya maksimal, tim kami melakukan
                            pengelasan sambungan topi velg{' '}
                            <strong>
                                secara penuh, keluar-dalam, tebal, dan merata
                            </strong>
                            . Ini bukan sekadar perbaikan asal-asalan, ya. Kami
                            memastikan bahwa setiap detail dikerjakan secara
                            teliti untuk mendapatkan hasil yang tahan lama dan
                            tentunya aman saat digunakan di jalan.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        2. Eksekusi Pemeriksaan Injektor
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730363374/cp-indoteknik-v3/blog/September2024/overcomingInjectorProblemsOnMitsubishiTriton2.5/3_lvcjv4.png'
                            alt='Penggunaan Kawat Las Berkualitas'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Kami di <strong>Indo Teknik</strong> selalu
                            berkomitmen terhadap{' '}
                            <strong>kualitas dan keselamatan</strong>. Oleh
                            karena itu, kami menggunakan kawat las yang
                            berkualitas tinggi agar hasil pengelasan lebih kuat,
                            tahan lama, dan tidak mudah retak atau rusak. Ini
                            juga memberikan rasa tenang bagi pengendara, karena
                            mereka bisa mengemudi tanpa khawatir terjadi masalah
                            pada velg mobilnya.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        3. Penggantian Spare Part Nozzle
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730363369/cp-indoteknik-v3/blog/September2024/overcomingInjectorProblemsOnMitsubishiTriton2.5/4_ahn6rq.png'
                            alt='Proses Bubut untuk Hasil yang Presisi'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah proses pengelasan selesai, velg akan melalui
                            tahap pembubutan untuk memastikan bahwa sambungan
                            topi velg <strong>benar-benar presisi </strong> dan{' '}
                            <strong>tidak baling</strong> (tidak goyang). Ini
                            penting agar velg tetap stabil saat berputar,
                            sehingga aman saat digunakan. Dengan proses ini,
                            kami memastikan velg yang direparasi di Indo Teknik
                            akan kembali mulus seperti baru.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        4. Membersihkan Selang dan Tangki Bahan Bakar
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730363375/cp-indoteknik-v3/blog/September2024/overcomingInjectorProblemsOnMitsubishiTriton2.5/5_db0rop.png'
                            alt='Proses Bubut untuk Hasil yang Presisi'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah injektor diganti, jangan lupa untuk
                            membersihkan selang dan tangki bahan bakar. Langkah
                            ini penting supaya kotoran yang mungkin tersisa di
                            sistem bahan bakar tidak kembali masuk ke injektor
                            yang baru. Pembersihan ini juga{' '}
                            <strong>
                                mengurangi risiko injektor cepat kotor
                            </strong>{' '}
                            atau <strong>berkarat kembali</strong>.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        5. Hasilnya? Keluhan Selesai!
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730363379/cp-indoteknik-v3/blog/September2024/overcomingInjectorProblemsOnMitsubishiTriton2.5/6_ojabms.png'
                            alt='Proses Bubut untuk Hasil yang Presisi'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah melakukan penggantian nozzle dan
                            membersihkan sistem bahan bakar, keluhan Mitsubishi
                            Triton 2.5 ini langsung sembuh.{' '}
                            <strong>Mesin kini hidup stabil</strong>,{' '}
                            <strong>tanpa asap putih berlebih</strong>, dan{' '}
                            <strong>tidak lagi mati mendadak</strong>. Pastikan
                            selalu merawat injektor dan komponen bahan bakar
                            untuk performa mesin yang optimal.
                        </p>
                    </div>
                </div>

                <div>
                    <p className='text-gray-600 mb-4 mt-6 justify-content text-justify'>
                        Itu dia Sobat Donik, langkah-langkah penanganan injektor
                        yang macet pada <strong>Mitsubishi Triton 2.5</strong>.
                        Jangan lupa, masalah seperti asap putih dan mesin mati
                        mendadak bisa dicegah dengan perawatan rutin. Kalau ada
                        keluhan serupa, jangan ragu hubungi kami seputar{' '}
                        <Link
                            href='/products/fuel-injection-systems/common-rail/injector'
                            className='font-bold text-blue-900 underline'
                        >
                            spare part
                        </Link>
                        ,
                        <Link
                            href='/services/common-rail/injector'
                            className='font-bold text-blue-900 underline'
                        >
                            servis injector
                        </Link>
                        , atau kunjungi langsung <strong>Indo Teknik</strong> di{' '}
                        <Link
                            href='https://maps.app.goo.gl/s3dDCk2y9UtyNWWv5'
                            className='font-bold text-blue-900 underline'
                        >
                            Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                            Pekanbaru – Riau, 28292
                        </Link>
                        ! Terima Kasih sudah mampir di sini, tunggu artikel
                        selanjutnya. Semoga bermanfaat.{' '}
                        <strong>Indo Teknik</strong>, one stop solution all your
                        diesel needs!
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

export default OvercomingInjectorProblemsOnMitsubishiTriton2_5;
