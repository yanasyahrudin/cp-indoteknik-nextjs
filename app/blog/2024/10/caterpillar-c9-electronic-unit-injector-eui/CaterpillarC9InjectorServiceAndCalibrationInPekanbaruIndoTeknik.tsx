'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const CaterpillarC9InjectorServiceAndCalibrationInPekanbaruIndoTeknik = ({
    currentPost,
    currentPostTitle,
    publicationDate,
    latestPosts,
    jsonLd,
}) => {


    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []); // Empty dependency array to run only once on mount

    const {t} = useTranslation('oct2024Blog')

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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729159574/cp-indoteknik-v3/blog/October2024/caterpillarC9ElectronicUnitInjectorEUI/1_mdxe7q.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t('Di Indo Teknik Pekanbaru, kami memiliki pengalaman luas dalam menangani')}{' '}
                            <strong>
                                {t('Electronic Unit Injector Caterpillar C9')}
                            </strong>
                            . {t('Jika Anda berada di Pekanbaru dan memiliki mesin alat berat, pastikan injektor Anda selalu dalam kondisi terbaik dengan layanan kalibrasi dan pengetesan kami.')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Pengetesan Electronic Unit Injector dengan Mesin Khusus')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729159598/cp-indoteknik-v3/blog/October2024/caterpillarC9ElectronicUnitInjectorEUI/2_qdpalf.png'
                            alt='Kalibrasi injektor Caterpillar di Indo Teknik Pekanbaru'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t('Di Indo Teknik, kami menggunakan')}{' '} <strong>{t('mesin dan data khusus')}</strong> {t('untuk kalibrasi injektor Caterpillar C9. Mesin ini dirancang untuk melakukan pengetesan dengan sangat akurat, memastikan bahwa injektor berfungsi sesuai dengan spesifikasi pabrikan. Semua prosedur dilakukan sesuai dengan')}{' '} <strong>{t('standarisasi bengkel resmi')}</strong>, {t('sehingga kamu nggak perlu ragu dengan hasilnya.')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Pentingnya Kalibrasi Injector yang Tepat')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729159598/cp-indoteknik-v3/blog/October2024/caterpillarC9ElectronicUnitInjectorEUI/3_epcmbs.png'
                            alt='Mesin kalibrasi injektor Pekanbaru'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t('Kalibrasi yang tepat sangat penting untuk menjaga kinerja mesin agar tetap efisien dan kuat. Jika kalibrasi tidak akurat, bisa menyebabkan masalah seperti penurunan tenaga, konsumsi bahan bakar yang boros, hingga kerusakan komponen mesin lainnya. Di Indo Teknik, setiap injektor Caterpillar C9 melalui proses kalibrasi dengan')}{' '} <strong>{t('akurasi tinggi')}</strong> {t('menggunakan data yang disesuaikan untuk injektor tipe ini.')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Layanan Kalibrasi Berkualitas di Indo Teknik')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            {t('Kami memahami pentingnya injektor bagi performa kendaraan atau alat berat kamu. Oleh karena itu, kami selalu menggunakan')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/test-bench-and-fabrication-machines'
                            >
                                {t('peralatan terbaik')}
                            </Link>{' '}
                            {t('dan didukung oleh teknisi yang berpengalaman dalam penanganan injektor Caterpillar. Hasilnya?')} <strong> {t('Kalibrasi akurat')}</strong> {t('yang membuat injektor kamu bekerja optimal dan tahan lama.')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2 '>
                        {t('Ayo Servis Electronic Unit Injector Kamu di Indo Teknik!')}
                    </h2>
                    
                    <p className='text-gray-600 mb-4 justify-content'>
                        {t('Ayo segera lakukan kalibrasi injektor di')}{' '} <strong>{t('Indo Teknik')}</strong> {t('Pekanbaru, dan rasakan performa maksimal mesin alat berat Anda.')}
                    </p>

                    <p className='text-gray-600 mb-4 justify-content'>
                        {t('Kunjungi kami di')}{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='https://www.indo-teknik.com/contact'
                        >
                            {t('lokasi Indo Teknik Pekanbaru')}
                        </Link>{' '}
                        {t('untuk layanan kalibrasi injektor terbaik di kota.')}
                    </p>

                    <p className='text-gray-600 mb-4 justify-content'>
                        {t('Pelajari lebih lanjut tentang')}{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='https://www.indo-teknik.com/services/common-rail/injector'
                        >
                            {t('servis injektor di Pekanbaru')}
                        </Link>
                        .
                    </p>
                </div>

                <SharePost currentPostTitle={currentPostTitle} />
            </div>
            <SidebarPost latestPosts={latestPosts} />
        </div>
    );
};

export default CaterpillarC9InjectorServiceAndCalibrationInPekanbaruIndoTeknik;
