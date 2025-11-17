'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const TheImportanceOfProperRepairOfTheBucketCylinderForOptimalMachinePerformance =
    ({
        currentPost,
        latestPosts,
        currentPostTitle,
        publicationDate,
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
            <div className='my-10 lg:flex max-w-[1200px] lg:mx-auto gap-8 rounded-xl md:mx-4 mx-4'>
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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730262737/cp-indoteknik-v3/blog/November2024/theImportanceOfProperRepairOfTheBucketCylinder/1_yydqed.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Jika Anda menghadapi masalah kebocoran pada seal'
                                )}{' '}
                                <strong>{t('silinder bucket PC-130')}</strong>,{' '}
                                {t(
                                    'segera perhatikan dan atasi sebelum kerusakan semakin parah! Kebocoran pada seal silinder bisa'
                                )}{' '}
                                <strong>
                                    {t(
                                        'mempengaruhi tekanan hidrolik alat berat'
                                    )}
                                </strong>
                                ,{' '}
                                <strong>
                                    {t('mengganggu stabilitas operasional')}
                                </strong>
                                , {t('dan')}{' '}
                                <strong>
                                    {t('menurunkan efisiensi kerja')}
                                </strong>
                                .{' '}
                                {t(
                                    'Selain itu, risiko kerusakan lebih lanjut, seperti goresan pada'
                                )}{' '}
                                <strong>{t('as rod bucket')}</strong>
                                {t(
                                    '—batang silinder yang bergerak keluar-masuk—juga bisa terjadi. Goresan ini tidak hanya memperparah kondisi silinder tetapi juga membuat alat berat tidak dapat berfungsi dengan baik.'
                                )}
                            </p>
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Berikut langkah-langkah penting yang harus Anda perhatikan agar perbaikan pada'
                                )}{' '}
                                <strong>{t('silinder bucket PC-130')}</strong>{' '}
                                {t('menjadi lebih efektif dan tahan lama:')}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('1. Mencegah Kerusakan Lebih Lanjut')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730262728/cp-indoteknik-v3/blog/November2024/theImportanceOfProperRepairOfTheBucketCylinder/2_bohwmn.png'
                                alt='Mencegah Kerusakan Lebih Lanjut'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t(
                                        'Ketika seal pada cylinder bucket mengalami kebocoran, kebocoran ini bisa memperparah kondisi alat berat jika tidak segera diperbaiki. Lama-kelamaan, goresan pada'
                                    )}{' '}
                                    <strong>{t('as rod bucket')}</strong>{' '}
                                    {t(
                                        'akan mengakibatkan kerusakan yang lebih dalam'
                                    )}
                                    ,{' '}
                                    <strong>
                                        {' '}
                                        {t(
                                            'memengaruhi kinerja dan daya tahan'
                                        )}
                                    </strong>{' '}
                                    {t(
                                        'alat berat Anda. Segera lakukan perbaikan untuk menghindari masalah yang lebih serius dan memperpanjang umur alat.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('2. Memastikan Pemasangan Presisi')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730262730/cp-indoteknik-v3/blog/November2024/theImportanceOfProperRepairOfTheBucketCylinder/3_aoi4rq.png'
                                alt='Memastikan Pemasangan Presisi'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t(
                                        'Setelah perbaikan, pemasangan kembali komponen, seperti pompa hidrolik dan silinder, harus dilakukan dengan teliti dan presisi. Pemasangan yang tidak sesuai dapat menyebabkan tekanan hidrolik yang tidak stabil, yang kemudian berpengaruh pada kinerja silinder. Pastikan semua'
                                    )}{' '}
                                    <strong>
                                        {' '}
                                        {t(
                                            'komponen dipasang senter dan presisi'
                                        )}
                                    </strong>{' '}
                                    , {t('agar')}{' '}
                                    <strong>
                                        {t('silinder bucket PC-130')}
                                    </strong>{' '}
                                    {t(
                                        'bisa bekerja lebih optimal dan efisien.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('3. Melakukan Proses Tes dengan Baik')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730262749/cp-indoteknik-v3/blog/November2024/theImportanceOfProperRepairOfTheBucketCylinder/4_ovccqb.png'
                                alt='Melakukan Proses Tes dengan Baik'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Setelah pemasangan ulang, penting untuk melakukan tes untuk'
                                )}{' '}
                                <strong>
                                    {t(
                                        'memastikan tidak ada kebocoran yang tersisa dan tekanan bekerja dengan optimal'
                                    )}
                                </strong>
                                .{' '}
                                {t(
                                    'Proses tes ini sangat penting untuk memastikan bahwa alat berat siap beroperasi dengan maksimal tanpa adanya gangguan yang disebabkan oleh tekanan hidrolik yang tidak stabil atau kebocoran tambahan.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('4. Menghemat Biaya Jangka Panjang')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730262754/cp-indoteknik-v3/blog/November2024/theImportanceOfProperRepairOfTheBucketCylinder/5_sh3by2.png'
                                alt=''
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Melakukan perbaikan dan perawatan secara rutin akan sangat bermanfaat dalam jangka panjang. Alat berat yang dirawat dengan baik akan lebih jarang mengalami kerusakan besar, sehingga dapat menghemat biaya operasional dan perbaikan di masa depan. Perawatan yang tepat juga'
                                )}{' '}
                                <strong>
                                    {t('memperpanjang umur alat berat')}
                                </strong>
                                ,{' '}
                                {t(
                                    'sehingga Anda bisa mengoptimalkan investasi yang sudah Anda keluarkan.'
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Jangan Tunda Perbaikan!')}
                        </h2>
                        <p className='text-gray-600 mb-4 text-justify'>
                            {t(
                                'Jadi, jika Anda mengalami masalah kebocoran pada'
                            )}{' '}
                            <strong>{t('silinder bucket PC-130')}</strong>,{' '}
                            {t(
                                'jangan tunda perbaikan. Selain untuk menjaga performa alat berat, penanganan cepat akan mencegah kerusakan semakin parah. Temukan solusi perbaikan berkualitas untuk memastikan alat berat Anda dapat kembali beroperasi dengan efisiensi optimal.'
                            )}
                        </p>
                        <p className='text-gray-600 mb-4 text-justify'>
                            {t('Ayo segera')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/contact'
                            >
                                {t('Hubungi kami')}
                            </Link>{' '}
                            {t('atau datang ke')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='/services/fabrication/lathe'
                            >
                                {t('workshop fabrikasi')}
                            </Link>{' '}
                            <strong>{t('Indo Teknik')}</strong>{' '}
                            {t('yang berlokasi di')}{' '}
                            <Link
                                className='underline font-bold text-blue-900'
                                href='https://maps.app.goo.gl/4xGp2xYfn98Uo5437'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki
                                Pekanbaru Riau, 28292
                            </Link>
                            {t(', one stop solution all your diesel needs!')}{' '}
                            {t(
                                'Untuk info menarik dan tips lainnya tentang dunia peralatan berat, pastikan selalu cek halaman ini, ya!'
                            )}
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

export default TheImportanceOfProperRepairOfTheBucketCylinderForOptimalMachinePerformance;
