'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const HereAreTheMandatorySparePartsForPC200_KomatsuPC200_8SupplyPump = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732527324/cp-indoteknik-v3/blog/August2024/hereAreTheMandatorySparePartsForPC200/1_e4ohie.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Komatsu PC200 adalah salah satu alat berat yang
                            terkenal tangguh di berbagai medan kerja. Agar
                            performanya tetap optimal, pemilihan sparepart
                            berkualitas tinggi adalah kunci. Salah satu komponen
                            yang sangat penting untuk mendukung kinerja
                            excavator ini adalah{' '}
                            <strong>
                                Supply Pump Komatsu PC200-8 (0 445 020 122
                                ITech)
                            </strong>
                            . Berikut adalah alasan mengapa supply pump ini
                            wajib kamu miliki:
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        1. Presisi dalam Pengaturan Tekanan Bahan Bakar
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732527345/cp-indoteknik-v3/blog/August2024/hereAreTheMandatorySparePartsForPC200/2_lccdfm.png'
                            alt='Presisi dalam Pengaturan Tekanan Bahan Bakar'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                <strong>Supply Pump Komatsu PC200-8</strong>{' '}
                                dirancang dengan teknologi canggih untuk
                                memastikan pasokan bahan bakar yang stabil.
                                Dalam berbagai kondisi kerja—baik medan berat,
                                suhu ekstrem, maupun beban kerja tinggi—komponen
                                ini tetap mampu menjaga aliran bahan bakar
                                dengan presisi. Hasilnya? Mesin tetap bertenaga
                                tanpa hambatan, memastikan pekerjaan selesai
                                lebih cepat dan efisien.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        2. Konsistensi Tekanan Bahan Bakar untuk Kinerja Optimal
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732527326/cp-indoteknik-v3/blog/August2024/hereAreTheMandatorySparePartsForPC200/3_hfkb9s.png'
                            alt='Konsistensi Tekanan Bahan Bakar untuk Kinerja Optimal'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Keunggulan supply pump ini adalah kemampuannya
                                menjaga tekanan bahan bakar tetap konsisten
                                dalam sistem injeksi. Konsistensi ini sangat
                                penting untuk:
                            </p>
                            <ul className='text-gray-600 list-disc ml-4'>
                                <li>
                                    <strong>Menjaga efisiensi mesin.</strong>
                                </li>
                                <li>
                                    <strong>
                                        Menghindari penurunan tenaga
                                    </strong>{' '}
                                    yang bisa mengganggu produktivitas.
                                </li>
                            </ul>

                            <p className='text-gray-600 my-4'>
                                Komponen ini memberikan jaminan performa yang
                                tak tergoyahkan, bahkan dalam operasi yang
                                paling menantang sekalipun.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        3. Daya Tahan Tinggi dan Umur Pakai Lebih Lama
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732527325/cp-indoteknik-v3/blog/August2024/hereAreTheMandatorySparePartsForPC200/4_ok4msa.png'
                            alt='Daya Tahan Tinggi dan Umur Pakai Lebih Lama'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Supply Pump PC200-8 dibuat dari material
                                berkualitas tinggi yang:
                            </p>
                            <ul className='text-gray-600 list-disc ml-4'>
                                <li>
                                    Tahan terhadap{' '}
                                    <strong>aus dan korosi.</strong>
                                </li>
                                <li>
                                    Memiliki{' '}
                                    <strong>umur pakai lebih lama</strong>{' '}
                                    dibandingkan pompa sejenis.
                                </li>
                            </ul>
                            <p className='text-gray-600 my-4'>
                                Dengan perawatan yang tepat, komponen ini dapat
                                mengurangi biaya perawatan jangka panjang dan
                                meminimalkan frekuensi penggantian suku cadang,
                                membuat investasi ini sangat berharga.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Tunggu Apa Lagi?
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732527334/cp-indoteknik-v3/blog/August2024/hereAreTheMandatorySparePartsForPC200/5_i30sy5.png'
                            alt='Tunggu Apa Lagi?'
                            width={600}
                            height={400}
                        />
                    </div>
                    <div>
                        <p className='text-gray-600 my-4'>
                            Jangan tunggu sampai performa alat berat kamu
                            menurun!{' '}
                            <strong>
                                Supply Pump Komatsu PC200-8 (0 445 020 122
                                ITech)
                            </strong>{' '}
                            adalah solusi terbaik untuk memastikan excavator
                            tetap bertenaga maksimal.
                        </p>

                        <p className='text-gray-600 mb-4'>
                            <strong>BELANJA SEKARANG!</strong>
                            <br />
                            Hanya di <strong>INDO TEKNIK</strong>, dapatkan
                            sparepart berkualitas yang dirancang khusus untuk
                            kebutuhan alat berat kamu!
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <Link
                                className='text-blue-900 font-bold underline'
                                href='/contact'
                            >
                                Hubungi kami
                            </Link>{' '}
                            untuk informasi lebih lanjut! Atau kunjungi{' '}
                            <strong>INDO TEKNIK</strong> langsung di{' '}
                            <Link
                                className='text-blue-900 font-bold underline'
                                href='https://maps.app.goo.gl/JdBCY78yASsqwAgz9'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292
                            </Link>
                            .
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <Link
                                className='text-blue-900 font-bold underline'
                                href='https://www.indo-teknik.com/products/fuel-injection-systems/common-rail/supply-pump'
                            >
                                Supply Pump Komatsu PC200-8 (0 445 020 122
                                ITech)
                            </Link>
                            : Pilihan cerdas untuk ketangguhan yang tidak perlu
                            diragukan.
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

export default HereAreTheMandatorySparePartsForPC200_KomatsuPC200_8SupplyPump;
