'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import blogPosts from '../../../../data/blogPostsData';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const KeepYourDieselEngineInTopConditionWithTheKobelcoSK130CommonRailPipe =
    () => {
        const currentPostTitle =
            'Jaga Mesin Diesel Anda Tetap Prima dengan Pipa Common Rail Kobelco SK130!';
        // Find the current post in blogPosts using the title
        const currentPost = blogPosts.find(
            (post) => post.title === currentPostTitle,
        );

        // Extract the publication date from the current post
        const publicationDate = currentPost
            ? new Date(currentPost.date).toLocaleDateString()
            : 'Unknown Date';

        // Sort blog posts by date (latest first)
        const latestPosts = [...blogPosts].sort(
            (a, b) => new Date(b.date) - new Date(a.date),
        );

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
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735554411/cp-indoteknik-v3/blog/December2024/keepYourDieselEngineInTopCondition/1_urpj1p.png'
                                alt={currentPostTitle}
                                width={600}
                                height={400}
                            />
                            <p className='text-justify mt-5 text-gray-600 mb-4'>
                                {t(
                                    'Mesin diesel yang andal dan efisien adalah kunci untuk produktivitas dan performa terbaik. Salah satu komponen vital yang memengaruhi kinerja mesin diesel adalah pipa common rail. Dalam artikel ini, kita akan membahas mengapa',
                                )}{' '}
                                <strong>
                                    {t('Pipa Common Rail Kobelco SK130')}
                                </strong>{' '}
                                {t(
                                    'adalah pilihan terbaik untuk menjaga mesin diesel tetap dalam kondisi prima.',
                                )}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='lg:flex md:flex gap-6 text-justify'>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        'Pipa Common Rail Kobelco SK130: Awet dan Tahan Lama',
                                    )}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735554411/cp-indoteknik-v3/blog/December2024/keepYourDieselEngineInTopCondition/2_bek9cb.png'
                                        alt='Pipa Common Rail Kobelco SK130: Awet dan Tahan Lama'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Pipa Common Rail Kobelco SK130 dirancang dengan daya tahan tinggi dan desain yang efisien. Komponen ini dibuat untuk menghadapi tantangan berat, baik di jalan maupun di lingkungan kerja yang keras. Dengan material berkualitas tinggi, pipa ini memiliki ketahanan yang luar biasa terhadap tekanan dan keausan, menjadikannya solusi andal untuk kebutuhan mesin diesel Anda.',
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t('Harga Terjangkau, Kualitas Premium')}
                                </h2>
                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735554408/cp-indoteknik-v3/blog/December2024/keepYourDieselEngineInTopCondition/3_bcdo2v.png'
                                        alt='Harga Terjangkau, Kualitas Premium'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Salah satu keunggulan utama dari Pipa Common Rail Kobelco SK130 adalah harganya yang ekonomis tanpa mengorbankan kualitas. Ini adalah pilihan realistis bagi Anda yang ingin mendapatkan produk premium dengan anggaran yang bersahabat. Dengan investasi ini, Anda mendapatkan performa optimal sekaligus efisiensi biaya.',
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <h2 className='text-xl font-semibold text-gray-800 mt-4 mb-2'>
                                    {t(
                                        'Performa Terbaik untuk Mesin Diesel Anda',
                                    )}
                                </h2>

                                <div className='lg:flex gap-4'>
                                    <Image
                                        className='rounded-xl w-[400px]'
                                        src='https://res.cloudinary.com/dcbryptkx/image/upload/v1735554409/cp-indoteknik-v3/blog/December2024/keepYourDieselEngineInTopCondition/4_wb6pnp.png'
                                        alt='Performa Terbaik untuk Mesin Diesel Anda'
                                        width={600}
                                        height={400}
                                    />
                                    <div>
                                        <p className='text-gray-600 mb-4 mt-2 lg:mt-0'>
                                            {t(
                                                'Pipa common rail dirancang untuk menahan tekanan tinggi yang diperlukan dalam sistem injeksi mesin diesel. Hal ini memastikan pembakaran bahan bakar yang lebih efisien, meningkatkan tenaga mesin, dan mengurangi emisi. Dengan Pipa Common Rail Kobelco SK130, Anda dapat mengandalkan kinerja mesin diesel yang maksimal setiap saat.',
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Belanja Sekarang Sebelum Kehabisan!')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Jangan sampai ketinggalan! Dapatkan')} <Link href="#" className='font-bold text-blue-900 underline'>{t('Pipa Common Rail Kobelco SK130')}</Link> {t('berkualitas tinggi ini hanya di')} <strong>INDO TEKNIK</strong>. {t('Dengan stok terbatas, pastikan Anda segera melakukan pembelian agar tidak kehabisan.',
                                )}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                <Link className='font-bold text-blue-900 underline' href="/contact">{t('Hubungi kami')}</Link> {t('untuk pemesanan online atau kunjungi langsung')} <strong>INDO TEKNIK</strong> {t('di alamat')} <Link className='font-bold text-blue-900 underline' href='https://maps.app.goo.gl/4xGp2xYfn98Uo5437'>Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru - Riau, 28292.</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                            {t('Keunggulan Pipa Common Rail Kobelco SK130')}
                        </h2>
                        <div className=' gap-6 text-justify'>
                            <ul className='text-gray-600 mb-4'>
                                <li>
                                    <strong>{t('Daya Tahan Tinggi')}:</strong> {t('Material berkualitas yang tahan terhadap tekanan dan keausan.')}
                                </li>
                                <li>
                                    <strong>{t('Desain Efisien')}:</strong> {t('Memastikan pembakaran bahan bakar yang optimal.')}
                                </li>
                                <li>
                                    <strong>{t('Harga Kompetitif')}:</strong> {t('Solusi ekonomis untuk kebutuhan premium.')}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className=' gap-6 text-justify'>
                            <p className='text-gray-600 mb-4'>
                                {t('Buruan, belanja sekarang juga dan pastikan mesin diesel Anda tetap dalam kondisi terbaik dengan Pipa Common Rail Kobelco SK130!')}
                            </p>
                            
                        </div>
                    </div>

                    <SharePost currentPostTitle={currentPostTitle} />
                </div>
                <SidebarPost latestPosts={latestPosts} />
            </div>
        );
    };

export default KeepYourDieselEngineInTopConditionWithTheKobelcoSK130CommonRailPipe;
