'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const KomatsuPC_200_StayPrimeWithoutWorryingAboutBreakdowns_ITechPressureLimitingValveIsTheSolution =
    ({
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
                                Category:{' '}
                                <strong>{currentPost.category}</strong>
                            </span>
                        </div>

                        <div className='mt-5'>
                            <Image
                                className='rounded-xl mx-auto'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732766236/cp-indoteknik-v3/blog/August2024/komatsuPC200_StayExcellentWithoutWorryingAboutCrashes/1_k3jaws.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                Bagi para pengguna alat berat seperti Komatsu
                                PC-200, menjaga performa optimal mesin adalah
                                prioritas utama. Salah satu kunci untuk
                                memastikan alat berat anda tetap bekerja tanpa
                                gangguan adalah dengan menggunakan{' '}
                                <strong>Pressure Limiting Valve ITech</strong>.
                                Komponen ini dirancang khusus untuk memberikan
                                stabilitas tekanan bahan bakar, yang sangat
                                penting untuk menjaga kinerja mesin diesel anda.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Kenapa Memilih Pressure Limiting Valve ITech?
                        </h2>

                        <div className='gap-6 text-justify'>
                            <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                                1. Kualitas Terbaik, Harga Bersahabat
                            </h3>
                            <div className='flex'>
                                <Image
                                    className='rounded-xl w-[400px] h-[320px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732766247/cp-indoteknik-v3/blog/August2024/komatsuPC200_StayExcellentWithoutWorryingAboutCrashes/2_v63bct.png'
                                    alt='Material Tahan Panas dan Korosi'
                                    width={600}
                                    height={400}
                                />
                                <div>
                                    <p className='text-gray-600 mb-4 ml-6'>
                                        Dengan harga yang kompetitif, Pressure
                                        Limiting Valve ITech menawarkan kualitas
                                        unggulan. Ini adalah investasi cerdas
                                        untuk perawatan alat berat jangka
                                        panjang.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gap-6 text-justify'>
                            <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                                2. Menjaga Stabilitas Tekanan Bahan Bakar
                            </h3>
                            <div className='flex'>
                                <Image
                                    className='rounded-xl w-[400px] h-[320px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732766243/cp-indoteknik-v3/blog/August2024/komatsuPC200_StayExcellentWithoutWorryingAboutCrashes/3_ky11ic.png'
                                    alt='Material Tahan Panas dan Korosi'
                                    width={600}
                                    height={400}
                                />
                                <div>
                                    <p className='text-gray-600 mb-4 ml-6'>
                                        Komponen ini memastikan tekanan bahan
                                        bakar tetap stabil. Efeknya? Injektor,
                                        pompa bahan bakar, dan filter lebih awet
                                        sehingga anda bisa menghemat biaya
                                        servis dan mengurangi frekuensi
                                        perawatan.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gap-6 text-justify'>
                            <h3 className='text-md font-semibold text-gray-800 mt-6 mb-2'>
                                3. Material Tahan Panas dan Korosi
                            </h3>
                            <div className='flex'>
                                <Image
                                    className='rounded-xl w-[400px] h-[320px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732766243/cp-indoteknik-v3/blog/August2024/komatsuPC200_StayExcellentWithoutWorryingAboutCrashes/4_jdqp97.png'
                                    alt='Material Tahan Panas dan Korosi'
                                    width={600}
                                    height={400}
                                />
                                <div>
                                    <p className='text-gray-600 mb-4 ml-6'>
                                        Dibuat dari bahan berkualitas tinggi,
                                        valve ini dirancang untuk tahan terhadap
                                        suhu ekstrem dan korosi. Hasilnya, umur
                                        pakai lebih panjang dan performa lebih
                                        handal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Manfaat Langsung untuk Alat Berat Anda
                        </h2>
                        <div className='lg:flex md:flex gap-6 '>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732766245/cp-indoteknik-v3/blog/August2024/komatsuPC200_StayExcellentWithoutWorryingAboutCrashes/5_no9f35.png'
                                alt='Tunggu Apa Lagi?'
                                width={600}
                                height={400}
                            />
                        </div>
                        <div>
                            <p className='text-gray-600 my-4 text-justify'>
                                Dengan menggunakan Pressure Limiting Valve
                                ITech, anda tidak hanya melindungi mesin dari
                                risiko ngadat, tetapi juga meningkatkan
                                efisiensi kerja. Alat berat seperti Komatsu
                                PC-200 akan bekerja lebih lancar, produktivitas
                                meningkat, dan biaya operasional bisa ditekan.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Beli Sekarang di INDO TEKNIK
                        </h2>

                        <div>
                            <p className='text-gray-600 my-4 text-justify'>
                                INDO TEKNIK adalah solusi lengkap untuk semua
                                kebutuhan diesel anda. Dapatkan{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/products/other-products/sensor'
                                >
                                    Pressure Limiting Valve ITech 1110010028
                                </Link>{' '}
                                di toko kami untuk Komatsu PC-200 anda.
                            </p>

                            <p className='text-gray-600 mb-4 text-justify'>
                                <strong>TUNGGU APA LAGI?</strong>
                                <br />
                                <strong
                                    className='font-bold underline text-blue-900'
                                    href='https://indo-teknik.com/contact'
                                >
                                    Hubungi kami sekarang
                                </strong>{' '}
                                dan pastikan Komatsu PC-200 anda tetap tangguh
                                dalam menghadapi tantangan di lapangan! Atau
                                kunjungi INDO TEKNIK di{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='https://maps.app.goo.gl/FXKBHrfEtbtZTLV39'
                                >
                                    Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                    Sekaki, Pekanbaru Riau, 28292
                                </Link>
                                .
                            </p>

                            <p className='text-gray-600 mb-4 text-justify'>
                                <strong>INDO TEKNIK</strong> - One stop solution
                                for all your diesel needs.
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

export default KomatsuPC_200_StayPrimeWithoutWorryingAboutBreakdowns_ITechPressureLimitingValveIsTheSolution;
