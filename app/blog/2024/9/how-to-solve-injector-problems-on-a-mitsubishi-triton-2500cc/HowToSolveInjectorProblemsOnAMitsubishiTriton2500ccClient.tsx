'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const HowToSolveInjectorProblemsOnAMitsubishiTriton2500ccStepByStep = ({
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

                    <PublishedDateCategory
                        publicationDate={publicationDate}
                        category={currentPost.category}
                    />

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731061501/cp-indoteknik-v3/blog/September2024/howToSolveInjectorProblemsOnAMitsubishiTriton/1_ih29rh.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Hai, sobat Donik! Kali ini kita akan membahas
                            pengalaman seru menangani{' '}
                            <strong>Mitsubishi Triton 2500cc</strong> yang
                            mengalami masalah pada mesinnya. Mesin Triton ini
                            rewel dan susah hidup, sehingga kami perlu melakukan
                            pemeriksaan menyeluruh. Setelah discan dan diperiksa
                            oleh mekanik berpengalaman, ternyata{' '}
                            <strong>masalah utamanya ada di injektor!</strong>{' '}
                            Berikut ini proses lengkap yang kami lakukan untuk
                            mengembalikan performa injektor agar mesin Triton
                            kembali bertenaga dan mudah dinyalakan. Simak yuk!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        1. Pemeriksaan Awal dan Pembongkaran Injektor
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731061480/cp-indoteknik-v3/blog/September2024/howToSolveInjectorProblemsOnAMitsubishiTriton/2_orep9m.png'
                            alt='Proses Reparasi Topi Velg di Indo Teknik'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Langkah pertama setelah menemukan masalah adalah
                            membongkar injektor. Sobat, perlu diingat ya, saat
                            membongkar injektor, pastikan untuk{' '}
                            <strong>tidak membongkar paksa</strong>. Karena,
                            kalau injektor dikunci dalam posisi yang salah, ini
                            bisa mempengaruhi performanya dan membuatnya sulit
                            terpasang dengan sempurna kembali. Pembongkaran
                            harus dilakukan menggunakan <i>tools khusus</i>{' '}
                            sesuai dengan tipe injektornya. Jadi, ini bukan
                            pekerjaan asal-asalan—alat yang tepat sangat
                            penting!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        2. Pembersihan Menggunakan Ultrasonic Cleaner
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731061486/cp-indoteknik-v3/blog/September2024/howToSolveInjectorProblemsOnAMitsubishiTriton/3_dwz3cr.png'
                            alt='Penggunaan Kawat Las Berkualitas'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah injektor dibongkar, proses selanjutnya
                            adalah pembersihan. Kami menggunakan{' '}
                            <i>ultrasonic cleaner</i>, alat yang efektif untuk
                            menghilangkan karat dan kotoran halus yang menempel
                            di injektor. Pembersihan ini penting untuk
                            mendapatkan hasil servis yang optimal dan
                            memperpanjang umur injektor. Jadi, ini adalah
                            langkah penting agar pemeriksaan berikutnya lebih
                            akurat dan performa injektor tetap awet.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        3. Pemeriksaan Detail Menggunakan Mikroskop
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731061477/cp-indoteknik-v3/blog/September2024/howToSolveInjectorProblemsOnAMitsubishiTriton/4_xpllle.png'
                            alt='Proses Bubut untuk Hasil yang Presisi'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Dengan bantuan mikroskop, tim mekanik kami memeriksa
                            bagian-bagian dalam injektor untuk melihat kerusakan
                            pada komponen-komponennya. Pemeriksaan detail ini
                            membantu kami mengidentifikasi part mana saja yang
                            rusak dan harus diganti. Menggunakan alat seperti
                            mikroskop memastikan setiap detail kerusakan
                            terlihat dan dapat diperbaiki dengan tepat.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        4. Penggantian Part yang Rusak
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731061475/cp-indoteknik-v3/blog/September2024/howToSolveInjectorProblemsOnAMitsubishiTriton/5_r5hp2m.png'
                            alt='Proses Bubut untuk Hasil yang Presisi'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah menemukan bagian yang rusak, kami
                            menggantinya dengan <i>part</i> baru yang sesuai
                            dengan
                            <i>part number</i> asli dari Mitsubishi. Menggunakan{' '}
                            <i>part</i>
                            sesuai standar sangat penting untuk menjaga performa
                            dan ketahanan injektor. Setelah <i>part</i> diganti,
                            injektor dipasang kembali oleh mekanik ahli yang
                            sudah berpengalaman, dan dikunci dengan <i>tools</i>{' '}
                            khusus agar terpasang dengan sempurna.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        5. Pengujian di Mesin Test Khusus
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731061480/cp-indoteknik-v3/blog/September2024/howToSolveInjectorProblemsOnAMitsubishiTriton/6_mnpnyg.png'
                            alt='Proses Bubut untuk Hasil yang Presisi'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Untuk memastikan bahwa injektor sudah berfungsi
                            dengan baik, kami mengujinya di mesin test khusus.
                            Pengujian ini dilakukan dengan menggunakan minyak
                            kalibrasi agar hasilnya akurat. Proses ini
                            memastikan bahwa injektor bisa memberikan tekanan
                            yang tepat, sehingga mobil akan mudah dinyalakan dan
                            performanya stabil.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        6. Pemasangan Kembali dan Pengecekan Sistem Bahan Bakar
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731061481/cp-indoteknik-v3/blog/September2024/howToSolveInjectorProblemsOnAMitsubishiTriton/7_jffag1.png'
                            alt='Proses Bubut untuk Hasil yang Presisi'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Setelah injektor lulus uji, injektor dipasang
                            kembali ke mesin. Sebelum mobil siap digunakan,
                            semua selang dan tangki minyak harus dibersihkan
                            terlebih dahulu menggunakan kompresor. Langkah ini
                            penting agar kotoran atau residu tidak mengganggu
                            sistem bahan bakar yang bisa menurunkan performa
                            mesin lagi.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Mobil Siap Digunakan!
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        Setelah semua proses selesai, Mitsubishi Triton kembali
                        dalam kondisi sehat dan siap diajak jalan-jalan lagi!
                        Semoga perawatan ini bisa membuat performa mesin tetap
                        stabil dan tahan lama ya, sobat.
                    </p>
                    <p className='text-gray-600 mb-4'>
                        Sekian langkah-langkah lengkap{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='/services/common-rail/injector'
                        >
                            servis injektor
                        </Link>{' '}
                        pada <strong>Mitsubishi Triton 2500cc</strong>. Semoga
                        tips ini bermanfaat buat kalian yang ingin tahu lebih
                        banyak soal perawatan mobil atau sekedar berbagi info
                        kepada teman-teman yang mengalami masalah serupa. Jangan
                        ragu untuk menghubungi kami atau kunjungi langsung{' '}
                        <strong>Indo Teknik</strong> di{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='https://maps.app.goo.gl/3Cx8HoDRULZeKCKp9'
                        >
                            Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                            Pekanbaru Riau, 28292
                        </Link>
                        .{' '}
                        <strong>
                            One stop solution for all your diesel needs
                        </strong>
                        , Sampai jumpa di artikel perawatan lainnya, dan tetap
                        jaga kesehatan mobil kalian!
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

export default HowToSolveInjectorProblemsOnAMitsubishiTriton2500ccStepByStep;
