'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const DieselEngineFansMustKnow_ThisPencilNozzleAssyMakesTheMachineMorePowerful =
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733115188/cp-indoteknik-v3/blog/September2024/dieselManiacsMustKnow_ThisPencilNozzleAssy/1_ush70v.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Mesin diesel Anda butuh komponen yang tidak hanya kuat, tetapi juga meningkatkan efisiensi dan daya tahan. Kenalan dengan'
                                )}{' '}
                                <strong>{t('Nozzle Pensil Assy')}</strong>{' '}
                                {t(
                                    'yang satu ini! Dirancang khusus untuk memaksimalkan performa mesin Anda, produk ini adalah solusi sempurna untuk berbagai kebutuhan mesin diesel.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        '1. Tingkatkan Efisiensi dan Performa Mesin'
                                    )}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733115185/cp-indoteknik-v3/blog/September2024/dieselManiacsMustKnow_ThisPencilNozzleAssy/2_vq7xg1.png'
                                        alt='Tingkatkan Efisiensi dan Performa Mesin'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Dengan kontrol pembakaran yang lebih baik, mesin Anda'
                                            )}{' '}
                                            <strong>
                                                {t('bekerja lebih optimal.')}{' '}
                                            </strong>
                                            {t(
                                                'Pembakaran yang sempurna memberikan tenaga yang konsisten, bahkan dalam kondisi berat sekalipun. Baik itu untuk muatan besar atau medan yang sulit, mesin Anda'
                                            )}{' '}
                                            <strong>
                                                {t(
                                                    'tetap memberikan performa maksimal.'
                                                )}
                                            </strong>
                                        </p>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('2. Kuat dan Tahan Lama')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733115187/cp-indoteknik-v3/blog/September2024/dieselManiacsMustKnow_ThisPencilNozzleAssy/3_mlnwdt.png'
                                        alt='Kuat dan Tahan Lama'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Terbuat dari material pilihan yang tahan terhadap panas dan tekanan tinggi, Nozzle Pensil Injector ini'
                                            )}{' '}
                                            <strong>
                                                {t('tidak mudah rusak')}
                                            </strong>
                                            ,{' '}
                                            {t(
                                                'bahkan dalam kondisi kerja ekstrem. Cocok untuk Anda yang mengandalkan mesin diesel untuk pekerjaan berat setiap hari. Ketahanan luar biasanya akan membuat mesin Anda'
                                            )}{' '}
                                            <strong>
                                                {' '}
                                                {t(
                                                    'lebih awet dan dapat diandalkan.'
                                                )}
                                            </strong>
                                        </p>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('3. Hemat Biaya Operasional')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733115191/cp-indoteknik-v3/blog/September2024/dieselManiacsMustKnow_ThisPencilNozzleAssy/4_argwxk.png'
                                        alt='Hemat Biaya Operasional'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Mengganti nozzle lama dengan Nozzle Pensil Assy dari Itech adalah'
                                            )}{' '}
                                            <strong>
                                                {t('investasi yang cerdas')}
                                            </strong>
                                            .{' '}
                                            {t(
                                                'Komponen ini tidak hanya membuat bahan bakar lebih irit, tetapi juga mengurangi biaya perawatan. Dengan efisiensi yang lebih tinggi, Anda bisa menikmati'
                                            )}{' '}
                                            <strong>
                                                {t(
                                                    'pengeluaran operasional yang jauh lebih hemat.'
                                                )}
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t(
                                'INDO TEKNIK: One Stop Solution For All Your Diesel Needs'
                            )}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                <strong>
                                    {t('JANGAN TUNDA LAGI! BELI SEKARANG!')}
                                </strong>
                                <br />
                                {t(
                                    'Jadikan mesin diesel Anda lebih tangguh dengan komponen berkualitas dari'
                                )}{' '}
                                <strong>INDO TEKNIK</strong>.{' '}
                                {t(
                                    'Kami menyediakan produk-produk terbaik yang siap membantu Anda menjaga performa mesin tetap prima kapan pun dibutuhkan.'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t('Temukan')}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/products/fuel-injection-systems/common-rail/injector'
                                >
                                    {t(
                                        'Nozzle Pensil Injector Cat 3204 4W-7015 Itech'
                                    )}
                                </Link>{' '}
                                {t('hanya di')} <strong>INDO TEKNIK!</strong>{' '}
                                {t(
                                    'Pastikan Anda mendapatkan produk berkualitas dengan harga terbaik.'
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='/contact'
                                >
                                    {t('Hubungi kami')}
                                </Link>{' '}
                                {t('atau kunjungi langsung')}{' '}
                                <strong>INDO TEKNIK</strong> {t('di')}{' '}
                                <Link
                                    className='font-bold underline text-blue-900'
                                    href='https://maps.app.goo.gl/FXKBHrfEtbtZTLV39'
                                >
                                    Jl. Riau Ujung, Kel. Tampan, Kec. Payung
                                    Sekaki, Pekanbaru - Riau, 28292
                                </Link>
                                .
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Terima kasih sudah membaca sampai tuntas, tunggu artikel selanjutnya untuk mendapatkan informasi lainnya dari kami.'
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

export default DieselEngineFansMustKnow_ThisPencilNozzleAssyMakesTheMachineMorePowerful;
