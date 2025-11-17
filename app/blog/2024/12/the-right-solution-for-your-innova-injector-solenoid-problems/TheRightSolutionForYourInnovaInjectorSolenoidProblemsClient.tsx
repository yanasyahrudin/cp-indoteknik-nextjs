'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const TheRightSolutionForYourInnovaInjectorSolenoidProblems_ChooseITechSolenoids =
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732934877/cp-indoteknik-v3/blog/August2024/didYouKnow_TheImportanceOfTCoverForYourDieselCar/1_adlswr.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                <strong>
                                    Peran Penting Cover T pada Sistem Bahan
                                    Bakar Diesel
                                </strong>
                                <br />
                                Meskipun berukuran kecil,{' '}
                                <strong>Cover T</strong> memiliki fungsi yang
                                sangat penting dalam menjaga performa sistem
                                bahan bakar kendaraan diesel Anda. Sebagai
                                pelindung injektor, Cover T memastikan aliran
                                bahan bakar berjalan optimal dan membantu
                                menjaga efisiensi mesin.{' '}
                                <strong>Cover T ITech</strong> adalah pilihan
                                tepat untuk Anda yang mengutamakan kualitas dan
                                daya tahan. Produk ini dirancang untuk berbagai
                                jenis kendaraan diesel dan memberikan
                                perlindungan terbaik untuk injektor.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Mengapa Memilih Cover T ITech?
                        </h2>
                        <div>
                            <h3 className='my-2 font-semibold'>
                                1. Material Berkualitas Tinggi
                            </h3>
                            <div className='lg:flex md:flex gap-6 text-justify'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732941003/cp-indoteknik-v3/blog/August2024/didYouKnow_TheImportanceOfTCoverForYourDieselCar/2_fkxayd.png'
                                    alt='Material Berkualitas Tinggi'
                                    width={400}
                                    height={300}
                                />
                                <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                    Dibuat dari bahan pilihan, Cover T ITech
                                    khusus <strong>Injector Denso</strong> tahan
                                    terhadap korosi dan suhu tinggi, sehingga
                                    memiliki daya tahan yang sangat baik untuk
                                    penggunaan jangka panjang.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className='my-2 font-semibold'>
                                2. Efisiensi Bahan Bakar Lebih Baik
                            </h3>
                            <div className='lg:flex md:flex gap-6 text-justify'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732941002/cp-indoteknik-v3/blog/August2024/didYouKnow_TheImportanceOfTCoverForYourDieselCar/3_vf8epp.png'
                                    alt='Efisiensi Bahan Bakar Lebih Baik'
                                    width={600}
                                    height={400}
                                />
                                <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                    Khusus untuk varian{' '}
                                    <strong>Injector Bosch</strong>, Cover T
                                    Itech dirancang untuk meningkatkan efisiensi
                                    aliran bahan bakar, yang berkontribusi pada
                                    penghematan konsumsi bahan bakar kendaraan
                                    Anda.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className='my-2 font-semibold'>
                                3. Kompatibilitas Luas
                            </h3>
                            <div className='lg:flex md:flex gap-6 text-justify'>
                                <Image
                                    className='rounded-xl w-[400px]'
                                    src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732941001/cp-indoteknik-v3/blog/August2024/didYouKnow_TheImportanceOfTCoverForYourDieselCar/4_kfqwlv.png'
                                    alt='Kompatibilitas Luas'
                                    width={400}
                                    height={300}
                                />
                                <p className='text-gray-600 mb-4 lg:mt-0 md:mt-0 sm:mt-4'>
                                    Varian untuk <strong>Canter Euro 4</strong>{' '}
                                    kompatibel dengan berbagai jenis kendaraan
                                    diesel, mulai dari mobil pribadi hingga
                                    truk, sehingga cocok untuk kebutuhan
                                    transportasi apa pun.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[800px]'>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Pilihan Produk Cover T ITech
                        </h2>

                        <ul className='text-gray-600 mb-4 font-semibold'>
                            <li>Cover T ITech for Injector Denso</li>
                            <li>Cover T ITech for Injector Bosch</li>
                            <li>Cover T ITech for Canter Euro 4</li>
                        </ul>
                    </div>

                    <div className='lg:w-[800px]'>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Dapatkan Hanya di Indo Teknik
                        </h2>

                        <p className='text-gray-600 mb-4'>
                            Lindungi injektor kendaraan Anda dengan{' '}
                            <strong>Cover T ITech</strong> yang berkualitas
                            tinggi. Produk ini tersedia secara eksklusif di{' '}
                            <strong>Indo Teknik</strong> dan siap membantu
                            menjaga performa kendaraan diesel Anda tetap
                            optimal.
                        </p>

                        <p className='text-gray-600 mb-4'>
                            <strong>Jangan Tunda Lagi!</strong>
                        </p>

                        <p className='text-gray-600 mb-4'>
                            Kunjungi <strong>Indo Teknik</strong> sekarang juga
                            untuk mendapatkan{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/products/other-products/cover-injector'
                            >
                                Cover T Itech
                            </Link>{' '}
                            sesuai kebutuhan kendaraan Anda di{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/FXKBHrfEtbtZTLV39'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki
                                Pekanbaru Riau, 28292
                            </Link>{' '}
                            atau{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='/contact'
                            >
                                hubungi kami
                            </Link>{' '}
                            untuk pemesanan secara daring.
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>Indo Teknik</strong> One stop solution all
                            your diesel needs.
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

export default TheRightSolutionForYourInnovaInjectorSolenoidProblems_ChooseITechSolenoids;
