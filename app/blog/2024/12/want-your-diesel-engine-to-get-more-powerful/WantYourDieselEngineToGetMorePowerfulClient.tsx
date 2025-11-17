'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const WantYourDieselEngineToGetMorePowerful_ThisIsTheKey_RotorHead7189_039LITech =
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

        const { t } = useTranslation('dec2024Blog');

        return (
            <div className='my-16 lg:flex max-w-[1200px] lg:mx-auto gap-8 rounded-xl md:mx-4 mx-4'>

                <div className='max-w-4xl px-8 pb-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100'>
                    <div>
                        <div className='-mx-5 mb-5'>
                            <GoBack />
                        </div>
                        <h1 className='text-4xl font-bold text-blue-900 mb-4'>
                            {t(currentPostTitle)}
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733198815/cp-indoteknik-v3/blog/December2024/1_g0za0d.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Jika Anda mencari cara untuk meningkatkan performa mesin diesel, menjaga efisiensi bahan bakar, dan mengurangi risiko kerusakan,'
                                )}{' '}
                                <strong>
                                    {t('Rotor Head 7189-039L ITech')}
                                </strong>{' '}
                                {t(
                                    'adalah jawabannya! Kenapa? Yuk, kita bahas keunggulan utamanya.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('1. Akurasi Tinggi')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733198806/cp-indoteknik-v3/blog/December2024/2_zxa3um.png'
                                        alt='Akurasi Tinggi'
                                        width={400}
                                        height={300}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Rotor Head ITech dirancang dengan akurasi tingkat tinggi, membantu memastikan proses pembakaran berjalan sempurna. Dengan teknologi canggihnya, produk ini mampu meningkatkan performa mesin dieselmu, memberikan tenaga lebih besar, dan mengurangi risiko pembakaran tidak sempurna yang bisa menyebabkan kerusakan mesin.'
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('2. Efisiensi Bahan Bakar Optimal')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733198811/cp-indoteknik-v3/blog/December2024/3_fuebvp.png'
                                        alt='Efisiensi Bahan Bakar Optimal'
                                        width={400}
                                        height={300}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Salah satu masalah utama pada kendaraan diesel adalah boros bahan bakar. Dengan Rotor Head ITech, Anda tidak perlu khawatir lagi!'
                                            )}
                                        </p>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Teknologi mutakhir pada produk ini memastikan tekanan bahan bakar stabil, sehingga mendukung efisiensi konsumsi bahan bakar secara maksimal. Hemat bahan bakar, hemat biaya!'
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('3. Harga Kompetitif')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733198813/cp-indoteknik-v3/blog/December2024/4_thamyt.png'
                                        alt='Harga Kompetitif'
                                        width={400}
                                        height={300}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Meski memiliki kualitas premium,'
                                            )}
                                            <strong>
                                                {' '}
                                                {t(
                                                    'Rotor Head 7189-039L ITech'
                                                )}
                                            </strong>{' '}
                                            {t(
                                                'ditawarkan dengan harga yang sangat kompetitif. Artinya, Anda bisa mendapatkan performa maksimal tanpa perlu merogoh kantong terlalu dalam.'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Kenapa Harus Beli di INDO TEKNIK?')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600'>
                                <strong>{t('Produk Original')}</strong>
                                <br />
                                {t('Rotor Head ITech yang dijual di')}{' '}
                                <strong>INDO TEKNIK</strong>{' '}
                                {t(
                                    'adalah 100% original. Tidak perlu khawatir soal kualitas dan keaslian!'
                                )}
                            </p>
                            <p className='text-gray-600'>
                                <strong>{t('Umur Pakai Lebih Lama')}</strong>
                                <br />
                                {t(
                                    'Produk ini dirancang untuk tahan lama, memberikan kinerja terbaik untuk kendaraanmu dalam waktu yang lama.'
                                )}
                            </p>
                            <p className='text-gray-600'>
                                <strong>{t('Pengiriman Cepat & Aman')}</strong>
                                <br />
                                {t(
                                    'Pesananmu akan diproses dengan cepat dan dikemas dengan aman, memastikan produk sampai di tanganmu dalam kondisi terbaik.'
                                )}
                            </p>
                            <p className='text-gray-600'>
                                <strong>
                                    {t('Layanan Pelanggan Profesional')}
                                </strong>
                                <br />
                                {t(
                                    'Tim kami selalu siap membantu menjawab pertanyaan dan memberikan solusi terbaik untuk kebutuhan sparepart kendaraanmu.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('BELANJA SEKARANG JUGA!')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Jadikan kendaraan dieselmu lebih optimal dengan'
                                )}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                                >
                                    {t('Rotor Head 7189-039L ITech')}
                                </Link>
                                . {t('Dapatkan hanya di')}{' '}
                                <strong>INDO TEKNIK</strong>,{' '}
                                {t(
                                    'solusi terpercaya untuk kebutuhan sparepart kendaraanmu.'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/contact'
                                >
                                    {t('Hubungi kami')}
                                </Link>{' '}
                                {t(
                                    'untuk pemesanan online atau kunjungi langsung'
                                )}{' '}
                                <strong>INDO TEKNIK</strong> {t('di')}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='https://maps.app.goo.gl/FXKBHrfEtbtZTLV39'
                                >
                                    Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                    Sekaki, Pekanbaru Riau, 28292
                                </Link>
                                .
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <strong>INDO TEKNIK</strong>, One Stop Solution
                                For All Your Diesel Needs
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

export default WantYourDieselEngineToGetMorePowerful_ThisIsTheKey_RotorHead7189_039LITech;
