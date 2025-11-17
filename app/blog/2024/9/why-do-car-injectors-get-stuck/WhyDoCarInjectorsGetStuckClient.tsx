'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const WhyDoCarInjectorsGetStuck = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730345342/cp-indoteknik-v3/blog/September2024/whyDoCarInjectorsGetStuck/1_vi9ml6.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Halo, Sobat Donik! Kalian pernah menghadapi masalah{' '}
                            <strong>injektor</strong> mobil yang tersendat? Nah,
                            kali ini kita akan membahas{' '}
                            <strong>penyebabnya dan cara mencegahnya</strong>.
                            Sudah siap? Yuk, langsung kita mulai!
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Mengenal Injektor dan Pentingnya Peranannya
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730345342/cp-indoteknik-v3/blog/September2024/whyDoCarInjectorsGetStuck/3_wzbdwf.png'
                            alt='Proses Reparasi Topi Velg di Indo Teknik'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            <strong>Injektor</strong> adalah bagian krusial pada
                            mesin yang tugasnya{' '}
                            <strong>menyemprotkan bahan bakar</strong> ke ruang
                            pembakaran. Kalau injektor sampai macet, bisa
                            runyam! Mesin jadi mudah ngadat, performa turun, dan
                            bikin kesal, bukan?
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Penyebab Injektor Sering Macet
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/v1730345339/cp-indoteknik-v3/blog/September2024/whyDoCarInjectorsGetStuck/2_sj7yy6.png'
                            alt='Penggunaan Kawat Las Berkualitas'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Salah satu alasan utama <strong>injektor</strong>{' '}
                            sering macet adalah <strong>as di dalam</strong>{' '}
                            <strong>nozzle</strong> yang menjadi sulit bergerak.
                            Kebayang kan, kalau as ini seret, bahan bakar yang
                            disemprotkan jadi tidak merata. Akibatnya, mesin
                            bisa “batuk-batuk” atau bahkan mogok.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Tanda-Tanda Nozzle Masih Berfungsi Baik
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <p className='text-gray-600 mb-2'>
                            Nah, bagaimana cara mengetahui{' '}
                            <strong>nozzle</strong> masih dalam kondisi prima?
                            Cek poin-poin ini:
                        </p>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li className='text-gray-600 mb-2'>
                            <strong>As Mudah Bergerak:</strong> Jika as pada{' '}
                            <strong>nozzle</strong> sulit digerakkan, ini bisa
                            jadi sinyal bahaya!
                        </li>
                        <li className='text-gray-600 mb-2'>
                            <strong>Lapisan Hitam Pelindung:</strong>{' '}
                            <strong>Nozzle</strong> yang berkualitas baik
                            biasanya memiliki lapisan hitam pelindung. Lapisan
                            ini berfungsi melindungi as dari macet akibat
                            kotoran.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Tips Agar Injektor Tetap Optimal
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            Untuk menjaga injektor tetap optimal, berikut
                            beberapa tips yang bisa kalian ikuti:
                        </p>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li className='text-gray-600 mb-2'>
                            <strong>Gunakan Bahan Bakar Berkualitas:</strong>{' '}
                            Bahan bakar yang bersih akan membantu mencegah
                            kotoran menumpuk pada injektor.
                        </li>
                        <li className='text-gray-600 mb-2'>
                            <strong>Rutin Servis:</strong> Jangan malas untuk
                            membersihkan injektor secara berkala!
                        </li>
                        <li className='text-gray-600 mb-2'>
                            <strong>Gunakan Aditif Pelindung:</strong> Ada
                            beberapa produk yang dapat membantu menjaga injektor
                            tetap bersih dari dalam.
                        </li>
                    </ul>
                </div>

                <div>
                    <p className='text-gray-600 mb-4 mt-6 justify-content'>
                        Oke, Sobat Donik, itulah pembahasan singkat mengenai{' '}
                        <strong>injektor</strong> dan kenapa bisa macet.{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='https://www.indo-teknik.com/contact'
                        >
                            Hubungi kami
                        </Link>{' '}
                        jika ada pertanyaan seputar{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='/products/fuel-injection-systems/common-rail/injector'
                        >
                            produk
                        </Link>{' '}
                        dan{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='/services/common-rail/injector'
                        >
                            servis injector
                        </Link>{' '}
                        atau kunjungi <strong>Indo Teknik</strong> di{' '}
                        <strong>
                            Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                            Pekanbaru - Riau, 28292
                        </strong>{' '}
                        dan temukan solusi terbaik untuk kendaraan kalian!
                        Terima kasih sudah membaca, sampai jumpa di artikel
                        berikutnya! Semoga bermanfaat!
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

export default WhyDoCarInjectorsGetStuck;
