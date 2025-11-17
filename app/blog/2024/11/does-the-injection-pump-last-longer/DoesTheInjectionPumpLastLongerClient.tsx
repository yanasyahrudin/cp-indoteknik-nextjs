'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const DoesTheInjectionPumpLastLongerThisIsTheSecret = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732087409/cp-indoteknik-v3/blog/November2024/doesTheInjectionPumpLastMore/1_amsusd.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t(
                                'Injection pump merupakan salah satu komponen penting pada mesin diesel yang berperan dalam mengatur distribusi bahan bakar ke ruang bakar. Namun, sering kali kita menghadapi masalah seperti kebocoran, tekanan bahan bakar yang tidak stabil, hingga performa mesin yang menurun. Solusinya?'
                            )}{' '}
                            <strong>{t('Feed Pump Itech 146100-0120')}</strong>{' '}
                            {t('dari')} <strong>Indo Teknik!</strong>
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t(
                            'Kenapa Feed Pump Itech 146100-0120 Wajib Anda Miliki?'
                        )}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('1. Melindungi Dari Kebocoran')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732087402/cp-indoteknik-v3/blog/November2024/doesTheInjectionPumpLastMore/2_vhlewk.png'
                                        alt='Melindungi Dari Kebocoran'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Salah satu penyebab utama efisiensi bahan bakar menurun adalah kebocoran pada sistem pompa. Dengan'
                                            )}{' '}
                                            <strong>
                                                {t('liner berkualitas tinggi')}
                                            </strong>
                                            ,{' '}
                                            {t(
                                                'kebocoran dapat dicegah secara efektif. Hasilnya?'
                                            )}
                                        </p>
                                        <ul className='ml-8 list-disc text-gray-600'>
                                            <li>
                                                {t(
                                                    'Optimalisasi penggunaan bahan bakar.'
                                                )}
                                            </li>
                                            <li>
                                                {t(
                                                    'Pengurangan pemborosan bahan bakar.'
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('2. Kualitas yang Terjamin')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732087406/cp-indoteknik-v3/blog/November2024/doesTheInjectionPumpLastMore/3_earu5l.png'
                                        alt='Pengosongan Tangki'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Liner pada Feed Pump 146100-0120 dibuat dari'
                                            )}{' '}
                                            <strong>
                                                {t('material unggulan')}
                                            </strong>{' '}
                                            {t(
                                                'yang mampu menahan suhu tinggi. Ini memberikan beberapa keunggulan:'
                                            )}
                                        </p>
                                        <ul className='ml-8 list-disc text-gray-600'>
                                            <li>
                                                {t(
                                                    'Mesin tetap stabil meski bekerja pada beban berat.'
                                                )}
                                            </li>
                                            <li>
                                                {t(
                                                    'Ketahanan lebih lama, sehingga mengurangi frekuensi perawatan.'
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:ml-10'>
                                <h3 className='text-md font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('3. Tekanan Bahan Bakar Lebih Stabil')}
                                </h3>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732087406/cp-indoteknik-v3/blog/November2024/doesTheInjectionPumpLastMore/4_ovmfeq.png'
                                        alt='Pembersihan Menyeluruh'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Dengan desain presisi, liner ini membantu menjaga tekanan bahan bakar tetap stabil. Apa dampaknya?'
                                            )}
                                        </p>
                                        <ul className='ml-8 list-disc text-gray-600'>
                                            <li>
                                                {t(
                                                    'Proses pembakaran menjadi lebih efisien.'
                                                )}
                                            </li>
                                            <li>
                                                {t(
                                                    'Tenaga mesin meningkat, sehingga performa lebih maksimal.'
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Belanja Sekarang, Buktikan Kualitasnya!')}{' '}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            {t('Tidak perlu menunda lagi!')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://indo-teknik.com/products/fuel-injection-systems/conventional/fuel-injection-pump'
                            >
                                {t('Feed Pump ITech 146100-0120')}
                            </Link>{' '}
                            {t('ini hanya tersedia di')}{' '}
                            <strong>Indo Teknik</strong>,{' '}
                            {t(
                                'distributor terpercaya untuk produk berkualitas tinggi.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <div className='gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            <strong>
                                {t(
                                    'Jangan lewatkan kesempatan untuk membuat injection pump Anda lebih awet dan efisien!'
                                )}
                            </strong>
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('TUNGGU APA LAGI? BELANJA SEKARANG!')}
                    </h2>
                    <div className=' gap-6 text-justify'>
                        <p className='text-gray-600 mb-4 lg:w-[800px]'>
                            {t(
                                'Untuk informasi lebih lanjut dan pembelian, kunjungi langsung'
                            )}{' '}
                            <strong>Indo Teknik</strong> {t('di')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='https://maps.app.goo.gl/iwQHVPgiApsn5T8R9'
                            >
                                {t(
                                    'Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru Riau, 28292.'
                                )}
                            </Link>{' '}
                            {t('atau')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href=''
                            >
                                {t('hubungi layanan pelanggan kami.')}
                            </Link>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            <strong>
                                {t(
                                    'Investasikan pada kualitas, dan buktikan kualitas!'
                                )}
                            </strong>
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

export default DoesTheInjectionPumpLastLongerThisIsTheSecret;
