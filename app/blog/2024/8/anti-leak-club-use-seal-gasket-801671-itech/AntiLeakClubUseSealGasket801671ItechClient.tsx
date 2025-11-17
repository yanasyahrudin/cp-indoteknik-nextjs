'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const AntiLeakClub_UseSealGasket801671ITech = ({
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
                    <div className='-mx-5 mb-5 '>
                        <GoBack />
                        <div id='google_translate_element'></div>
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732346200/cp-indoteknik-v3/blog/August2024/anti_LeakClub_UseItech801671GasketSeal/1_ych8wn.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Kebocoran pada kendaraan bukan hanya masalah kecil.
                            Selain mengganggu kenyamanan, kebocoran juga bisa
                            berujung pada kerusakan serius dan biaya perbaikan
                            yang besar. Untungnya, kini ada solusi andal untuk
                            mencegah kebocoran:{' '}
                            <strong>Seal Gasket 801671 ITECH!</strong> Yuk,
                            kenali keunggulannya!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Kenapa Harus Pilih Seal Gasket 801671 ITECH?
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    1. Kinerja Teruji
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732346190/cp-indoteknik-v3/blog/August2024/anti_LeakClub_UseItech801671GasketSeal/2_v24pfb.png'
                                        alt='Kinerja Teruji'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            Produk ITECH telah melewati
                                            serangkaian uji kualitas untuk
                                            memastikan performanya. Seal gasket
                                            ini dirancang untuk{' '}
                                            <strong>
                                                menjaga tekanan dengan optimal
                                            </strong>{' '}
                                            dan{' '}
                                            <strong>
                                                mencegah kebocoran secara
                                                efektif
                                            </strong>
                                            . Dengan begitu, kendaraan Anda
                                            tetap beroperasi dengan aman dan
                                            nyaman dalam berbagai kondisi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    2. Isi yang Lengkap!
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732346206/cp-indoteknik-v3/blog/August2024/anti_LeakClub_UseItech801671GasketSeal/3_x5ntc1.png'
                                        alt='Pengosongan Tangki'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            Tidak perlu khawatir soal
                                            kelengkapan. Seal Gasket 801671
                                            ITECH hadir dengan semua komponen
                                            yang Anda butuhkan. Siap digunakan
                                            langsung untuk memastikan hasil yang
                                            maksimal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    3. Pemasangan Mudah dan Cepat
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732346199/cp-indoteknik-v3/blog/August2024/anti_LeakClub_UseItech801671GasketSeal/4_ouirne.png'
                                        alt='Pemasangan Mudah dan Cepat'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            Didesain agar praktis, pemasangan{' '}
                                            <strong>
                                                Seal Gasket 801671 ITech
                                            </strong>{' '}
                                            tidak memerlukan modifikasi khusus
                                            pada injection pump. Ini sangat
                                            memudahkan pekerjaan mekanik,
                                            mengurangi waktu pemasangan, dan
                                            mempercepat proses servis. Hemat
                                            waktu, hemat biaya!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        TUNGGU APA LAGI? BELANJA SEKARANG!
                    </h2>
                    <div className='lg:flex gap-4'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732346200/cp-indoteknik-v3/blog/August2024/anti_LeakClub_UseItech801671GasketSeal/5_kcbdnu.png'
                            alt='Pengosongan Tangki'
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className='gap-6 text-justify mt-6'>
                        <p className='text-gray-600 mb-4'>
                            Sudah saatnya Anda memastikan kendaraan tetap prima
                            tanpa risiko kebocoran. Dapatkan{' '}
                            <Link
                                className='underline text-blue-900 font-bold'
                                href='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                            >
                                Seal Gasket 801671 ITECH
                            </Link>{' '}
                            sekarang juga dan bergabunglah dengan{' '}
                            <strong>Anti Bocor-Bocor Club!</strong>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            Produk ini hanya tersedia di{' '}
                            <strong>Indo Teknik</strong>. Jangan lewatkan
                            kesempatan untuk membawa pulang perlindungan terbaik
                            untuk kendaraan Anda.
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>BELANJA SEKARANG!</strong>{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                Hubungi kami
                            </Link>{' '}
                            atau kunjungi langsung <strong>Indo Teknik</strong>{' '}
                            di{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/JdBCY78yASsqwAgz9'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru Riau, 28292
                            </Link>
                            .
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>Indo Teknik</strong>, One stop solution all
                            your diesel needs.
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

export default AntiLeakClub_UseSealGasket801671ITech;
