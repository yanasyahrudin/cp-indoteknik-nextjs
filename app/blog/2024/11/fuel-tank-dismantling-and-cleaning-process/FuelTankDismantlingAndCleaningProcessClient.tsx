'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const FuelTankDismantlingAndCleaningProcessAtIndoTeknik = ({
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

    const { t } = useTranslation('nov2024Blog');

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
                            Category: <strong>{currentPost.category}</strong>
                        </span>
                    </div>

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730781971/cp-indoteknik-v3/blog/November2024/fuelTankDismantlingAndCleaningProcess/1.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t(
                                'Halo Sobat Donik! Di kesempatan kali ini, kita akan mengintip proses pembersihan tangki bahan bakar di'
                            )}{' '}
                            <strong>{t('Indo Teknik')}</strong>,{' '}
                            {t(
                                'mulai dari pembongkaran hingga pemasangan kembali. Buat kalian yang penasaran tentang pentingnya proses ini, yuk kita bahas!'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Mengapa Tangki Bahan Bakar Perlu Dibersihkan?')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Tangki bahan bakar pada mobil, terutama diesel, sangat rentan menimbun kotoran, karat, dan bahkan lumut. Kotoran ini dapat mengganggu sistem bahan bakar, mengakibatkan masalah pada komponen penting seperti injektor, supply pump, dan filter. Jika dibiarkan, penyumbatan ini bisa menyebabkan mobil mogok atau menurunkan performa mesin. Nah, dengan rutin membersihkan tangki, kita bisa'
                                )}{' '}
                                <strong>
                                    {t('menjaga kebersihan sistem bahan bakar')}
                                </strong>{' '}
                                {t('dan')}{' '}
                                <strong>
                                    {t(
                                        'memperpanjang usia komponen di dalamnya.'
                                    )}
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t(
                            'Proses Pembersihan Tangki Bahan Bakar di Indo Teknik'
                        )}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <p className='text-gray-600 mb-4'>
                                {t('Di')} <strong>Indo Teknik</strong>
                                {t(
                                    ', pembersihan tangki tidak dilakukan secara asal-asalan. Kami memastikan setiap langkah dilakukan dengan'
                                )}{' '}
                                <strong>{t('teliti')}</strong> {t('dan ')}{' '}
                                <strong>{t('menyeluruh')}</strong>,{' '}
                                {t(
                                    'sehingga tangki benar-benar bersih dari kotoran maupun karat. Berikut adalah tahapan pembersihan tangki yang kami lakukan:'
                                )}
                            </p>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('1. Pembongkaran Tangki')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730781967/cp-indoteknik-v3/blog/November2024/fuelTankDismantlingAndCleaningProcess/2.png'
                                        alt='Pembongkaran Tangki'
                                        width={600}
                                        height={400}
                                    />
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Proses ini dimulai dengan membongkar tangki bahan bakar dari mobil. Pembongkaran ini memerlukan ketelitian, karena harus menghindari kerusakan pada komponen di sekitar tangki.'
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('2. Pengosongan Tangki')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730782002/cp-indoteknik-v3/blog/November2024/fuelTankDismantlingAndCleaningProcess/3.png'
                                        alt='Pengosongan Tangki'
                                        width={600}
                                        height={400}
                                    />
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Setelah tangki dilepas, sisa-sisa bahan bakar di dalamnya dikosongkan. Ini untuk memastikan tidak ada bahan bakar yang tersisa yang dapat menimbulkan risiko selama proses pembersihan.'
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('3. Pembersihan Menyeluruh')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730781998/cp-indoteknik-v3/blog/November2024/fuelTankDismantlingAndCleaningProcess/4.png'
                                        alt='Pembersihan Menyeluruh'
                                        width={600}
                                        height={400}
                                    />
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Di sinilah proses utama dilakukan. Kami mencuci bagian dalam tangki dengan teknik khusus yang mampu menghilangkan lumut, karat, dan endapan kotoran lainnya. Pembersihan ini memastikan semua partikel asing yang bisa menyebabkan penyumbatan benar-benar terangkat.'
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('4. Pembersihan Menyeluruh')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730781948/cp-indoteknik-v3/blog/November2024/fuelTankDismantlingAndCleaningProcess/5.png'
                                        alt='Pembersihan Menyeluruh'
                                        width={600}
                                        height={400}
                                    />
                                    <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                        {t(
                                            'Setelah dicuci, tangki harus dikeringkan dengan sempurna sebelum dipasang kembali. Ini penting agar tidak ada air atau kelembapan yang tertinggal yang bisa memicu karat atau kerusakan komponen lain di sistem bahan bakar.'
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t(
                            'Perbandingan Tangki Sebelum dan Setelah Dibersihkan'
                        )}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730781974/cp-indoteknik-v3/blog/November2024/fuelTankDismantlingAndCleaningProcess/7.png'
                            alt='Perbandingan Tangki Sebelum dan Setelah Dibersihkan'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Untuk Sobat Donik yang penasaran, perbedaan antara tangki sebelum dan sesudah dibersihkan sangat jelas terlihat! Tangki yang sebelumnya tampak penuh dengan kerak, lumut, dan noda hitam akan berubah menjadi bersih, seperti baru. Proses ini bukan hanya untuk penampilan, tetapi juga berdampak besar pada performa dan umur panjang sistem bahan bakar mobil.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <div className=' mt-6 gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            <strong>
                                {t(
                                    'Indo Teknik - One stop solution for all your diesel needs'
                                )}
                            </strong>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Membersihkan tangki bahan bakar adalah investasi kecil yang dapat menyelamatkan kamu dari masalah besar di kemudian hari. Di'
                            )}{' '}
                            <strong>Indo Teknik</strong>,{' '}
                            {t(
                                'kami menyediakan layanan pembersihan tangki dengan metode dan teknologi terbaik, sehingga mobil kamu bisa tetap dalam kondisi optimal.'
                            )}{' '}
                            <Link
                                href='contact'
                                className='font-bold underline text-blue-900'
                            >
                                {t('Hubungi kami')}
                            </Link>{' '}
                            {t('atau kunjungi')} <strong>Indo Teknik</strong>{' '}
                            {t('langsung di')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/mg8Ju3ThddBRPssp8'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292
                            </Link>
                            .{' '}
                            {t(
                                'Bagi para pengguna mobil diesel, jangan sampai lupa untuk merawat bagian ini agar perjalanan kamu selalu nyaman dan aman!'
                            )}
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Sekian dulu ulasan dari kami, Sobat Donik! Semoga bermanfaat, dan sampai jumpa di artikel berikutnya!'
                            )}
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

export default FuelTankDismantlingAndCleaningProcessAtIndoTeknik;
