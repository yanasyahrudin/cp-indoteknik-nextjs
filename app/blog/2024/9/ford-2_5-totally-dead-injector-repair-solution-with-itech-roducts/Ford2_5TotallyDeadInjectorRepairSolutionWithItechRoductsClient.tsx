'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const Ford2_5TotallyDeadInjectorRepairSolutionWithITechProductsThatMakesTheEnginePowerfulAgain =
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

                        <PublishedDateCategory
                            publicationDate={publicationDate}
                            category={currentPost.category}
                        />

                        <div className='mt-5'>
                            <Image
                                className='rounded-xl mx-auto'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730701362/cp-indoteknik-v3/blog/September2024/ford2_5TotallyDeadInjectorRepairSolutionWithITechProducts/1_rmsyec.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                Halo, Sobat Donik! Saya Admin dari{' '}
                                <strong>Indo Teknik</strong>, dan kali ini mau
                                berbagi pengalaman menarik soal perbaikan{' '}
                                <strong>Ford 2.5</strong> yang masuk ke workshop
                                dalam kondisi mati total. Awalnya, masalahnya
                                bikin pusing, tapi akhirnya ketemu juga
                                solusinya. Buat yang punya kendaraan diesel,
                                terutama <strong>Ford 2.5</strong>, artikel ini
                                mungkin bisa jadi panduan kalau nanti ketemu
                                masalah serupa.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Masalah Awal: Ford 2.5 Mati Total
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730701367/cp-indoteknik-v3/blog/September2024/ford2_5TotallyDeadInjectorRepairSolutionWithITechProducts/2_mb7sog.png'
                                alt='Proses Reparasi Topi Velg di Indo Teknik'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Mobil ini datang di workshop kami dengan keluhan
                                utama mesin mati total dan nggak mau hidup sama
                                sekali. Pemiliknya cerita kalau sebelum mati,
                                <strong>
                                    mobil sempat kehilangan tenaga
                                </strong>,{' '}
                                <strong>
                                    ada sedikit hentakan waktu gas diinjak
                                </strong>
                                , dan <strong>mesin terasa agak berat</strong>.
                                Dari tanda-tandanya, kami langsung curiga
                                masalahnya ada di sistem injeksi bahan bakarnya.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Diagnosa: Injektor Rusak Parah
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730701365/cp-indoteknik-v3/blog/September2024/ford2_5TotallyDeadInjectorRepairSolutionWithITechProducts/3_lpqmfi.png'
                                alt='Penggunaan Kawat Las Berkualitas'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah proses pengecekan dan pembongkaran,
                                akhirnya ketahuan bahwa masalah utamanya memang
                                ada di injektor. Kondisi injektor sudah sangat
                                parah: <strong>body injektor berkarat</strong>{' '}
                                dan <strong>solenoid-nya sampai pecah!</strong>{' '}
                                Ini tanda bahwa komponen injeksi sudah aus,
                                mungkin karena pemakaian atau adanya kotoran
                                yang masuk ke dalam tangki bahan bakar. Injektor
                                yang rusak seperti ini bisa langsung bikin mesin
                                mogok dan nggak bisa hidup sama sekali.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Solusi: Ganti Injektor dengan Produk dari ITech
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730701380/cp-indoteknik-v3/blog/September2024/ford2_5TotallyDeadInjectorRepairSolutionWithITechProducts/4_ulb0bo.png'
                                alt='Proses Bubut untuk Hasil yang Presisi'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Karena kondisi injektor lama sudah nggak bisa
                                diperbaiki, kami sarankan ke pemilik mobil untuk
                                menggantinya dengan injektor baru. Setelah
                                diskusi, akhirnya dipilihlah injektor dari brand{' '}
                                <strong>ITech</strong>.{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='https://itechpersadanusantara.com/products/fuel-injection-systems/common-rail/injector'
                                >
                                    Injektor ITech
                                </Link>{' '}
                                ini terkenal dengan{' '}
                                <strong>
                                    performa yang handal untuk mesin diesel
                                </strong>
                                , dan{' '}
                                <strong>
                                    harganya juga masih cukup terjangkau
                                    dibandingkan beberapa brand lain
                                </strong>
                                . Dengan kualitasnya, kami yakin ITech adalah
                                pilihan yang pas buat <strong>Ford 2.5</strong>{' '}
                                ini.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Langkah Penting: Pastikan Tangki Bahan Bakar Bebas
                            Kotoran
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730701383/cp-indoteknik-v3/blog/September2024/ford2_5TotallyDeadInjectorRepairSolutionWithITechProducts/5_bnber8.png'
                                alt='Proses Bubut untuk Hasil yang Presisi'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Sebelum mengganti injektor, kami juga melakukan
                                pembersihan menyeluruh pada tangki bahan bakar.{' '}
                                <strong>
                                    Ini langkah yang sangat penting, guys!
                                </strong>{' '}
                                Kotoran di{' '}
                                <strong>
                                    tangki bisa merusak injektor baru
                                </strong>
                                ,<strong>mempercepat karat</strong>, dan{' '}
                                <strong>
                                    bahkan merusak komponen injeksi lainnya
                                </strong>
                                . Jadi, bagi kalian yang sering mengalami
                                masalah injektor, coba cek juga kebersihan
                                tangki bahan bakarnya.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Hasilnya? Mobil Langsung Bertenaga Lagi!
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/v1730701373/cp-indoteknik-v3/blog/September2024/ford2_5TotallyDeadInjectorRepairSolutionWithITechProducts/6_j65atf.png'
                                alt='Proses Bubut untuk Hasil yang Presisi'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                Setelah <strong>injektor ITech</strong>{' '}
                                dipasang, mobil kembali prima!{' '}
                                <strong>
                                    Mesin langsung hidup dengan lancar
                                </strong>
                                , <strong>akselerasi terasa halus</strong>, dan{' '}
                                <strong>tenaga kembali seperti semula</strong>.
                                Pemilik mobil juga puas banget dengan performa
                                baru <strong>Ford 2.5</strong>
                                -nya.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            Tips dari Tim Kami untuk Pemilik Mobil Diesel:
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify ml-4'>
                            <ul>
                                <li className='text-gray-600 mb'>
                                    <strong className='text-gray-800'>
                                        1. Periksa Kondisi Injektor Secara
                                        Berkala:
                                    </strong>{' '}
                                    Perawatan injektor bisa dilakukan setiap
                                    20.000 - 30.000 km, terutama jika mobil
                                    sering dipakai. Ini akan{' '}
                                    <strong>
                                        mencegah masalah lebih besar di kemudian
                                        hari
                                    </strong>
                                    .
                                </li>
                                <li className='text-gray-600'>
                                    <strong className='text-gray-800'>
                                        2. Bersihkan Tangki Bahan Bakar Secara
                                        Berkala:
                                    </strong>{' '}
                                    Bersihkan tangki bahan bakar setiap beberapa
                                    tahun sekali, atau lebih sering jika sering
                                    mengisi bahan bakar di tempat yang kurang
                                    terjamin kebersihannya.{' '}
                                    <strong>
                                        Tangki yang bersih akan memperpanjang
                                        umur injektor
                                    </strong>{' '}
                                    dan <strong>komponen mesin lainnya</strong>.
                                </li>
                                <li className='text-gray-600 mb-4'>
                                    <strong className='text-gray-800'>
                                        3. Gunakan Suku Cadang Berkualitas:
                                    </strong>{' '}
                                    Seperti yang kami lakukan pada{' '}
                                    <strong>Ford 2.5</strong> ini, memilih
                                    injektor berkualitas dari{' '}
                                    <strong>ITech</strong> memang{' '}
                                    <strong>
                                        investasi yang penting untuk performa
                                        jangka panjang
                                    </strong>
                                    . Jangan tergiur suku cadang murah yang
                                    belum tentu tahan lama!
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <p className='text-gray-600 mb-4'>
                            Itu tadi pengalaman di workshop kami dalam menangani{' '}
                            <strong>Ford 2.5</strong> yang mati total karena
                            injektor rusak. Semoga tips ini bermanfaat buat
                            kalian para pemilik mobil diesel. Kalau ada
                            pertanyaan atau ingin konsultasi masalah injektor,
                            jangan ragu untuk{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                hubungi kami
                            </Link>{' '}
                            atau datang ke <strong>Indo Teknik</strong> di{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/XvpatKvyhzNeRbGB9'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292
                            </Link>
                            . Kami siap membantu menjaga kendaraan Anda tetap
                            dalam performa terbaik!
                        </p>

                        <p className='text-gray-600 mb-4'>
                            <strong>
                                Indo Teknik, One Stop Solution for All Your
                                Diesel Needs.
                            </strong>
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

export default Ford2_5TotallyDeadInjectorRepairSolutionWithITechProductsThatMakesTheEnginePowerfulAgain;
