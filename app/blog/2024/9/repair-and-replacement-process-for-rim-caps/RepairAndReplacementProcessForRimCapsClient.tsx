'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const RepairAndReplacementProcessForRimCapsAtIndoTeknik = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730175461/cp-indoteknik-v3/blog/September2024/repairAndReplacementProcessforRimCapsAtIndoTeknik/1_rob9uj.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Halo Sobat Donik! Kali ini, mimin mau berbagi
                            tentang proses reparasi penggantian topi velg di{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://www.indo-teknik.com/services/fabrication/lathe'
                            >
                                warehouse bubut
                            </Link>{' '}
                            <strong>Indo Teknik</strong>. Buat yang belum tahu,
                            topi velg adalah salah satu bagian penting yang
                            mempengaruhi stabilitas dan keamanan roda mobil.
                            Jadi, perbaikannya perlu dilakukan dengan teliti dan
                            berkualitas!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Proses Reparasi Topi Velg di Indo Teknik
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730175484/cp-indoteknik-v3/blog/September2024/repairAndReplacementProcessforRimCapsAtIndoTeknik/2_l7fjue.png'
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
                        Penggunaan Kawat Las Berkualitas
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730175467/cp-indoteknik-v3/blog/September2024/repairAndReplacementProcessforRimCapsAtIndoTeknik/3_g0ppwp.png'
                            alt='Penggunaan Kawat Las Berkualitas'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Kami di Indo Teknik selalu berkomitmen terhadap{' '}
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
                        Proses Bubut untuk Hasil yang Presisi
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730175477/cp-indoteknik-v3/blog/September2024/repairAndReplacementProcessforRimCapsAtIndoTeknik/4_bvojva.png'
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
                    <p className='text-gray-600 mb-4 mt-6 justify-content'>
                        Jadi, buat Sobat Donik yang ingin memperbaiki topi velg
                        dengan kualitas dan keamanan yang terjamin, langsung
                        saja hubungi Mimin untuk{' '}
                        <Link href='https://indo-teknik.com/contact' className='underline text-blue-900 font-bold'>informasi lebih lanjut</Link> atau kunjungi
                        tempat kami di{' '}
                        <strong>Jl. Riau Ujung No.898-904 Pekanbaru!</strong>{' '}
                        Terima kasih dan sampai jumpa di proses reparasi
                        berikutnya!
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

export default RepairAndReplacementProcessForRimCapsAtIndoTeknik;
