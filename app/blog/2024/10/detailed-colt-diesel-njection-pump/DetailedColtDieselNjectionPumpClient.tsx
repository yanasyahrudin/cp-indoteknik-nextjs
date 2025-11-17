'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const ColtDieselInjectionPumpServiceInPekanbaruIndoTeknik = ({
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

    const { t } = useTranslation('oct2024Blog');

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

                    <PublishedDateCategory
                        publicationDate={publicationDate}
                        category={currentPost.category}
                    />

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151893/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/1_fulc1c.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t(
                                'Halo Sobat Donik! Buat kalian yang berada di Pekanbaru, mau tahu kenapa'
                            )}{' '}
                            <strong>{t('Injection Pump Colt Diesel')}</strong>{' '}
                            {t(
                                'kalian bisa lebih bertenaga setelah service di'
                            )}{' '}
                            <strong>{t('Indo Teknik Pekanbaru')}</strong>?{' '}
                            {t('Berikut ini spill lengkapnya!')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Pembongkaran Menyeluruh, Bukan Setengah-Setengah')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151916/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/2_zv1xkr.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t('Ketika kalian')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/services/conventional/fuel-injection-pump'
                            >
                                {t('service Injection Pump')}
                            </Link>{' '}
                            {t(
                                'di Indo Teknik, kami tidak hanya membongkar bagian atas atau sebagian saja, tapi'
                            )}{' '}
                            <strong>{t('membongkar seluruh komponen')}</strong>.{' '}
                            {t(
                                'Ini penting agar semua bagian dicek dan diperiksa dengan detail. Jadi, tidak ada part yang terlewat!'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Pembersihan dan Pemeriksaan Part yang Akurat')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151894/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/3_rj5jas.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t('Setelah pembongkaran,')}{' '}
                            <strong>{t('semua komponen dicuci bersih')}</strong>
                            .
                            {t(
                                'Tujuannya, agar kondisi setiap part terlihat jelas, sehingga kita bisa mengetahui part mana yang sudah rusak atau aus dan harus segera diganti. Selanjutnya, setiap part diperiksa ulang dengan'
                            )}{' '}
                            <strong>{t('part list')}</strong>{' '}
                            {t(
                                'untuk memastikan nomor komponennya sesuai dengan spesifikasi asli. Jika ada part yang tidak sesuai, kita ganti dengan yang seharusnya.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Perakitan Kembali dan Kalibrasi Part')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151906/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/4_yd0f4c.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Setelah semua part dalam kondisi bersih dan sesuai standar, kami merakitnya kembali dengan teliti.'
                            )}{' '}
                            {t(
                                'Setelah itu, kita lanjut ke tahap kalibrasi menggunakan'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/test-bench-and-fabrication-machines'
                            >
                                {t('mesin test bench')}
                            </Link>
                            .{' '}
                            {t(
                                'Ini adalah langkah penting untuk memastikan Injection Pump berfungsi maksimal sebelum dipasang kembali ke mesin.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Hasilnya? Diesel Lebih Bertenaga!')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151899/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/5_imqcl9.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Taraaa! Begitu proses selesai, hasilnya langsung terasa—Colt Diesel kalian akan jadi lebih bertenaga dan halus. Jangan lupa untuk terus rutin melakukan service di Indo Teknik agar kendaraan kalian selalu dalam kondisi prima.'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <strong>
                                    {t(
                                        'Indo Teknik: One Stop Solution for All Your Diesel Needs!'
                                    )}
                                </strong>
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t('Sampai jumpa di service berikutnya, Pak!')}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2 '>
                        {t(
                            'Ayo Servis Injection Pump Colt Diesel Kamu di Indo Teknik!'
                        )}
                    </h2>
                    <p className='text-gray-600 mb-4 justify-content'>
                        {t('Segera lakukan')}{' '}
                        <strong>{t('servis injection pump')}</strong> {t('di')}{' '}
                        <strong>{t('Indo Teknik Pekanbaru')}</strong>{' '}
                        {t(
                            'dan rasakan perbedaannya. Dapatkan hasil maksimal untuk kendaraan diesel Anda.'
                        )}
                    </p>
                    <p className='text-gray-600 mb-4 justify-content'>
                        {t('Pelajari lebih lanjut tentang')}{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='https://www.indo-teknik.com/services/conventional/fuel-injection-pump'
                        >
                            {t('servis injection pump di Pekanbaru')}
                        </Link>
                        .
                    </p>
                    <p className='text-gray-600 mb-4 justify-content'>
                        {t('Kunjungi kami di')}{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='https://www.indo-teknik.com/contact'
                        >
                            {t(
                                'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau, 28292,'
                            )}
                        </Link>{' '}
                        {t('atau')}{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='/contact'
                        >
                            {t('hubungi tim kami')}
                        </Link>{' '}
                        {t('untuk servis Colt Diesel yang berkualitas.')}
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

export default ColtDieselInjectionPumpServiceInPekanbaruIndoTeknik;
