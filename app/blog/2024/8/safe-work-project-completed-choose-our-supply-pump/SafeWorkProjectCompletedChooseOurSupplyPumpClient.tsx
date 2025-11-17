'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const SafeWork_ProjectCompleted_ChooseOurSupplyPumpForKomatsuPC_70 = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732508504/cp-indoteknik-v3/blog/August2024/safeWork_ProjectCompleted_ChooseOurPumpSupply/1_bvsw13.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Jika Anda mencari solusi terbaik untuk memastikan
                            performa excavator Komatsu PC70-8 tetap optimal,{' '}
                            <strong>
                                Supply Pump Komatsu PC70-8 0445020070 dari ITech
                            </strong>{' '}
                            adalah jawabannya! Produk ini dirancang dengan
                            teknologi unggul untuk menjamin kinerja terbaik di
                            lapangan, bahkan di kondisi kerja paling menantang.
                            Berikut alasan mengapa supply pump ini wajib Anda
                            miliki:
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        1. Konsistensi Tekanan Bahan Bakar: Stabilitas Kinerja
                        Maksimal
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732508513/cp-indoteknik-v3/blog/August2024/safeWork_ProjectCompleted_ChooseOurPumpSupply/2_trhavm.png'
                            alt='Konsistensi Tekanan Bahan Bakar: Stabilitas Kinerja Maksimal'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Supply pump ini mampu menjaga tekanan bahan
                                bakar tetap stabil sepanjang operasi. Dengan
                                konsistensi seperti ini, mesin excavator Anda
                                akan tetap bertenaga tanpa khawatir mengalami
                                penurunan performa. Ini sangat penting untuk
                                memastikan proyek Anda selesai tepat waktu tanpa
                                hambatan.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        2. Presisi dalam Pengaturan Tekanan: Pasokan Bahan Bakar
                        Optimal
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732508523/cp-indoteknik-v3/blog/August2024/safeWork_ProjectCompleted_ChooseOurPumpSupply/3_izat4x.png'
                            alt='Pengelasan Harus Dilakukan Tebal dan Penuh'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                Dirancang khusus untuk Komatsu PC70, pompa ini
                                bekerja dengan presisi tinggi di berbagai
                                kondisi medan. Tidak peduli seberapa berat medan
                                kerja, supply pump ini memastikan mesin tetap
                                mendapatkan pasokan bahan bakar optimal,
                                sehingga tenaga excavator Anda tidak akan
                                berkurang.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        3. Daya Tahan Tinggi: Investasi Jangka Panjang
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732508534/cp-indoteknik-v3/blog/August2024/safeWork_ProjectCompleted_ChooseOurPumpSupply/4_mgkjih.png'
                            alt='Pertimbangan Jangka Panjang untuk Hemat Biaya
                        Operasional'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Dibuat dari material berkualitas tinggi,{' '}
                            <strong>
                                Supply Pump Komatsu PC70-8 0445020070
                            </strong>{' '}
                            tahan terhadap aus dan korosi. Dengan perawatan
                            rutin, komponen ini mampu bertahan lebih lama
                            dibandingkan pompa sejenis. Hasilnya? Anda bisa
                            menghemat biaya perawatan dan penggantian suku
                            cadang dalam jangka panjang!
                        </p>
                    </div>
                </div>

                <div>
                    <div className=' mt-6 gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            <strong>BELI SEKARANG DI INDO TEKNIK!</strong>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            Sebagai penyedia solusi diesel terlengkap, INDO
                            TEKNIK menawarkan produk ini dengan kualitas
                            terjamin dan harga kompetitif. Jangan biarkan proyek
                            Anda terhambat karena masalah teknis pada excavator.
                            Pastikan Anda menggunakan{' '}
                            <Link
                                className='underline text-blue-900 font-bold'
                                href='/products/fuel-injection-systems/common-rail/supply-pump'
                            >
                                Supply Pump Komatsu PC70-8 0445020070 dari ITech
                            </Link>{' '}
                            untuk kinerja maksimal.
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>INDO TEKNIK</strong> – One Stop Solution for
                            All Your Diesel Needs
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>COBA SEKARANG</strong> dan buktikan
                            keunggulan produk kami!
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <Link
                                className='text-blue-900 underline font-bold'
                                href='/contact'
                            >
                                Hubungi kami sekarang
                            </Link>{' '}
                            untuk informasi lebih lanjut! Atau kunjungi{' '}
                            <strong>Indo Teknik</strong> langsung di{' '}
                            <Link
                                className='text-blue-900 underline font-bold'
                                href='https://maps.app.goo.gl/JdBCY78yASsqwAgz9'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292
                            </Link>
                            .
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

export default SafeWork_ProjectCompleted_ChooseOurSupplyPumpForKomatsuPC_70;
