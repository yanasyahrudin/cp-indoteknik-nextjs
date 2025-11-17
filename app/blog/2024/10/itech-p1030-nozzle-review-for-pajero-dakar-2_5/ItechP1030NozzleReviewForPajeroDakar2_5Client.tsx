'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const ItechP1030NozzleReviewForPajeroDakar2_5TheBestChoiceForMaximumPerformance =
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
                                Category:{' '}
                                <strong>{currentPost.category}</strong>
                            </span>
                        </div>

                        <div className='mt-5'>
                            <Image
                                className='rounded-xl mx-auto'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729219750/cp-indoteknik-v3/blog/October2024/itechP1030NozzleReviewForPajeroDakar2_5/1_ukfhog.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                <Link
                                    className='font-bold text-blue-900'
                                    href='https://itechpersadanusantara.com/products/fuel-injection-systems/conventional/nozzle'
                                >
                                    {t('Nozzle P1030 ITech')}
                                </Link>{' '}
                                {t(
                                    'adalah salah satu komponen yang sering dicari oleh para pemilik'
                                )}{' '}
                                <strong>{t('Pajero Dakar 2.5')}</strong>.{' '}
                                {t(
                                    'Ini bukan tanpa alasan, karena produk ini dikenal dengan kualitas yang unggul dan daya tahan yang luar biasa. Jika kamu sedang mencari spare part yang dapat meningkatkan performa mobil dan membuat sistem bahan bakar lebih stabil, nozzle ini mungkin jawabannya.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Material Berkualitas, Tahan Lama')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729219743/cp-indoteknik-v3/blog/October2024/itechP1030NozzleReviewForPajeroDakar2_5/2_afb2qn.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    <Link
                                        className='font-bold text-blue-900'
                                        href='https://itechpersadanusantara.com/products/fuel-injection-systems/conventional/nozzle'
                                    >
                                        {t('Nozzle P1030 dari Itech')}
                                    </Link>{' '}
                                    {t(
                                        'ini dibuat dengan material pilihan yang membuatnya'
                                    )}{' '}
                                    <strong>{t('awet dan tahan lama')}</strong>.{' '}
                                    {t(
                                        'Kualitas material ini sangat penting, terutama dalam menjaga performa mesin diesel yang terkenal dengan tuntutan performa tinggi. Material yang digunakan membantu mencegah aus dan kerusakan akibat gesekan di dalam sistem injektor.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Coating Hitam Berkualitas')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729219737/cp-indoteknik-v3/blog/October2024/itechP1030NozzleReviewForPajeroDakar2_5/3_tczgbz.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t('Salah satu keunggulan dari')}{' '}
                                    <strong>{t('nozzle P1030')}</strong>{' '}
                                    {t(
                                        'ini adalah lapisan coating hitamnya. Tidak seperti nozzle dengan lapisan coating asal-asalan yang cepat aus, nozzle'
                                    )}{' '}
                                    <strong>
                                        {' '}
                                        {t(
                                            'ITech menggunakan coating berkualitas'
                                        )}
                                    </strong>{' '}
                                    {t(
                                        'yang memperpanjang usia pakai produk ini. Coating ini melindungi nozzle dari gesekan intens yang terjadi di dalam injektor, sehingga tidak hanya membantu menjaga kualitas bahan bakar, tetapi juga performa mesin secara keseluruhan.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Meningkatkan Performa Mobil')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729219747/cp-indoteknik-v3/blog/October2024/itechP1030NozzleReviewForPajeroDakar2_5/4_h4c2yj.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t('Dengan')}{' '}
                                <Link
                                    className='font-bold text-blue-900'
                                    href='https://itechpersadanusantara.com/products/fuel-injection-systems/conventional/nozzle'
                                >
                                    {t('nozzle P1030 ITech')}
                                </Link>
                                , {t('sistem bahan bakar mobil')}{' '}
                                <strong>{t('Pajero Dakar 2.5')}</strong>{' '}
                                {t(
                                    'kamu akan lebih stabil dan optimal. Komponen ini berperan penting dalam memastikan aliran bahan bakar yang lancar dan efisien ke mesin, yang pada akhirnya dapat membantu'
                                )}{' '}
                                <strong>
                                    {t(
                                        'meningkatkan tenaga dan efisiensi bahan bakar'
                                    )}
                                </strong>
                                .
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Keunggulan Belanja di Indo Teknik')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729219741/cp-indoteknik-v3/blog/October2024/itechP1030NozzleReviewForPajeroDakar2_5/5_seawpx.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                <strong>{t('Indo Teknik')}</strong>{' '}
                                {t(
                                    'menjadi tempat yang tepat untuk memenuhi kebutuhan sparepart diesel kamu. Mereka menyediakan berbagai macam komponen berkualitas terbaik, termasuk'
                                )}{' '}
                                <strong>{t('nozzle P1030')}</strong> {t('ini.')}{' '}
                                <strong>{t('Indo Teknik')}</strong>{' '}
                                {t(
                                    'dikenal sebagai one-stop solution untuk semua kebutuhan diesel, dari komponen kecil hingga besar. Produk yang ditawarkan juga'
                                )}{' '}
                                <strong>{t('terjamin keasliannya')}</strong>,{' '}
                                {t(
                                    'sehingga kamu tidak perlu ragu soal kualitasnya.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='gap-6 text-justify'>
                            <p className='text-gray-600 mb-4 mt-6'>
                                <Link
                                    className='font-bold text-blue-900'
                                    href='https://itechpersadanusantara.com/products/fuel-injection-systems/conventional/nozzle'
                                >
                                    {t('Nozzle P1030 ITech')}
                                </Link>{' '}
                                {t('untuk')}{' '}
                                <strong>{t('Pajero Dakar 2.5')}</strong>{' '}
                                {t(
                                    'adalah pilihan yang tepat jika kamu menginginkan performa mesin diesel yang lebih baik dan tahan lama. Material berkualitas serta lapisan coating hitam yang kuat membuat nozzle ini lebih unggul dibandingkan produk sejenis. Jangan ragu untuk mempercayakan kebutuhan sparepart diesel kamu pada'
                                )}{' '}
                                <strong>Indo Teknik</strong>{' '}
                                {t('yang berlokasi di')}{' '}
                                <strong>
                                    Jl. Riau Ujung, Kel. Tampan, Kec. Payung,
                                    Sekaki Pekanbaru - Riau, 28292
                                </strong>
                                .{' '}
                                <strong>
                                    Indo Teknik, One stop solution for all your
                                    diesel needs
                                </strong>
                                .
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t('Tunggu apalagi? Tingkatkan performa')}{' '}
                                <strong>{t('Pajero Dakar 2.5')}</strong>{' '}
                                {t('kamu sekarang juga dengan')}{' '}
                                <strong>{t('nozzle P1030')}</strong> {t('dari')}{' '}
                                <strong>ITech</strong>, {t('hanya di')}{' '}
                                <strong>Indo Teknik!</strong>
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

export default ItechP1030NozzleReviewForPajeroDakar2_5TheBestChoiceForMaximumPerformance;
