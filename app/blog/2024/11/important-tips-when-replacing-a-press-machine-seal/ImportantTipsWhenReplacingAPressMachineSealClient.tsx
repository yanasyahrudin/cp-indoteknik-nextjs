'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const ImportantTipsWhenReplacingAPressMachineSeal_StepsToRepairALeaking300BarPressMachineJackCylinder =
    ({
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

        const {t} = useTranslation('nov2024Blog')

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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731295310/cp-indoteknik-v3/blog/November2024/importantTipsWhenReplacingAPressMachineSeal/1_ec3qwu.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t('Bagi kamu yang sering berurusan dengan mesin press, penting banget nih untuk tahu cara yang benar saat mengganti seal, terutama pada mesin bertekanan tinggi seperti mesin press 300 bar. Kali ini, kita bakal bahas langkah-langkah perbaikan')}{' '} <strong>{t('silinder jack mesin press')}</strong> {t('yang mengalami kebocoran seal.')}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Proses Penggantian Seal')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731295329/cp-indoteknik-v3/blog/November2024/importantTipsWhenReplacingAPressMachineSeal/2_p24pai.png'
                                alt='Proses Penggantian Seal'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t('Para mekanik kita menunjukkan proses reparasinya mulai dari')}{' '}
                                    <strong>
                                        {t('penggantian seal silinder dengan bahan berkualitas tinggi')}
                                    </strong>
                                    {t(' dan ')}<strong>{t('tahan lama.')}</strong> {t('Seal yang kuat dan tepat sangat penting agar mesin press bekerja optimal tanpa hambatan dan tekanan tetap terjaga dengan kuat.')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Proses Pemasangan dengan Ketepatan dan Keseimbangan')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px] h-[320px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731295314/cp-indoteknik-v3/blog/November2024/importantTipsWhenReplacingAPressMachineSeal/3_af2lw2.png'
                                alt='Proses Pemasangan dengan Ketepatan dan Keseimbangan'
                                width={600}
                                height={400}
                            />
                            <div>
                                <p className='text-gray-600 mb-4'>
                                    {t('Pada proses pengerjaan, hal yang paling diperhatikan adalah')} <strong>{t('tingkat ketepatan (presisi)')}</strong> {t('dan')} <strong>{t('keseimbangan (center)')}</strong> {t('silinder jack. Dengan pengerjaan yang tepat, risiko kebocoran bisa diminimalkan dan performa mesin press tetap maksimal. Sebagai catatan, mesin press yang digunakan untuk proses ini harus memiliki tekanan yang besar agar bisa menahan silinder jack dengan optimal.')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Proses Pengujian di Mesin Tes')}
                        </h2>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <Image
                                className='rounded-xl w-[400px]'
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731295327/cp-indoteknik-v3/blog/November2024/importantTipsWhenReplacingAPressMachineSeal/4_daj2zs.png'
                                alt='Proses Pengujian di Mesin Tes'
                                width={600}
                                height={400}
                            />
                            <p className='text-gray-600 mb-4'>
                                {t('Setelah pemasangan seal baru selesai, dilakukan pengujian mesin press untuk')} <strong>{t('memastikan semua berfungsi dengan baik.')}</strong> {t('Dari suara "dentuman" yang kuat saat tes, kita tahu bahwa misi reparasi silinder jack mesin press 300 bar berhasil dengan sukses.')}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className=' mt-6 gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                {t('Ayo segera')} <Link className='font-bold underline text-blue-900' href='/contact'>{t('hubungi Indo Teknik')}</Link> {t('atau kunjungi langsung di ')}<Link className='font-bold underline text-blue-900' href='https://maps.app.goo.gl/UmnGnk7as4gnoCmZ6'>{t('Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki Pekanbaru Riau, 28292')}</Link>, {t('untuk konsultasi dan jadwalkan')} <Link className='font-bold underline text-blue-900' href='/services/fabrication/press'>{t('servis')}</Link> {t('kalian!')}
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

export default ImportantTipsWhenReplacingAPressMachineSeal_StepsToRepairALeaking300BarPressMachineJackCylinder;
