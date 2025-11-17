'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const WhyITechFeedPumpAssyMustBeYourChoice = ({
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

    const {t} = useTranslation('nov2024Blog')

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
                            Category: <strong>{currentPost.category}</strong>
                        </span>
                    </div>

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732091277/cp-indoteknik-v3/blog/November2024/whyFeedPumpAssyITechMustBeYourChoice/1_fruoco.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t('Saat menentukan komponen mesin diesel, terutama untuk kendaraan dengan pemakaian jangka panjang, kualitas dan performa optimal menjadi hal penting. Salah satu opsi terbaik adalah')}{' '} <strong>{t('Feed Pump ITech 105237-4410')}</strong> {t('dari')}{' '} <strong>{t('INDO TEKNIK')}</strong>. {t('Berikut beberapa alasan kenapa feed pump ini adalah pilihan tepat untuk meningkatkan performa kendaraan Anda:')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('1. Efisiensi Bahan Bakar Lebih Tinggi')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732091288/cp-indoteknik-v3/blog/November2024/whyFeedPumpAssyITechMustBeYourChoice/2_nfrwir.png'
                            alt='Mencegah Kerusakan Lebih Lanjut'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                <strong>{t('Feed Pump ITech 105237-4410')}</strong>{' '}
                                {t('memiliki keunggulan utama dalam memberikan aliran bahan bakar yang stabil, yang penting untuk pembakaran sempurna dalam mesin. Aliran yang konsisten ini membuat konsumsi bahan bakar lebih hemat, terutama pada kendaraan yang beroperasi dalam durasi panjang atau di bawah kondisi berat.')}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('2. Tekanan Bahan Bakar Stabil')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732091285/cp-indoteknik-v3/blog/November2024/whyFeedPumpAssyITechMustBeYourChoice/3_mnxvdz.png'
                            alt='Memastikan Pemasangan Presisi'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                {t('Tekanan bahan bakar yang konstan adalah kunci mempertahankan performa mesin.')}{' '} <strong>{t('Feed Pump ITech')}</strong> {t('menggunakan teknologi presisi yang mampu menjaga aliran stabil, bahkan saat mesin dalam kondisi suhu tinggi, beban berat, atau kecepatan tinggi. Dengan komponen ini, kendaraan tetap dalam performa terbaiknya, mengurangi risiko gangguan, dan memperpanjang usia mesin.')}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('3. Material Berkualitas untuk Daya Tahan Lebih Lama')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732091290/cp-indoteknik-v3/blog/November2024/whyFeedPumpAssyITechMustBeYourChoice/4_dfbhlf.png'
                            alt='Melakukan Proses Tes dengan Baik'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            <strong>{t('Feed Pump ITech')}</strong> {t('dibuat dari material berkualitas tinggi yang mendukung penggunaan jangka panjang. Dengan material terbaik, feed pump ini lebih tahan lama, mengurangi frekuensi perawatan, dan menekan biaya tambahan.')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Mengapa Pilih INDO TEKNIK?')}
                    </h2>
                    <p className='text-gray-600 mb-4 text-justify'>
                        {t('Sebagai pusat solusi kebutuhan diesel')},{' '}
                        <strong>INDO TEKNIK</strong> {t('memastikan Anda mendapatkan komponen terbaik untuk performa mesin. Dengan jaminan kualitas dan harga kompetitif')},{' '}
                        <strong>INDO TEKNIK</strong> {t('adalah tempat terbaik untuk membeli')} <strong>Feed Pump ITech 105237-4410</strong>.
                    </p>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Jangan Tunggu Lagi! Beli Sekarang di INDO TEKNIK!')}
                    </h2>
                    <p className='text-gray-600 mb-4 text-justify'>
                       {t('Dengan efisiensi, stabilitas, dan daya tahan yang superior')} <Link className='font-bold underline text-blue-900' href='/products/fuel-injection-systems/conventional/fuel-injection-pump/fuel-hand-pump-assy'>{t('Feed Pump ITech 105237-4410')}</Link>{' '}
                        {t('menjadi pilihan utama untuk perawatan mesin diesel Anda.')}
                    </p>
                    <p className='text-gray-600 mb-4 text-justify'>
                        {t('Dapatkan segera di')} <strong>INDO TEKNIK</strong> {t('dan buktikan keunggulannya!')}
                    </p>
                    <p className='text-gray-600 mb-4 text-justify'>
                        <Link
                            className='font-bold underline text-blue-900'
                            href='/contact'
                        >
                            {t('Hubungi kami')}
                        </Link>{' '}
                        {t('atau kunjungi langsung di')}{' '}
                        <Link
                            className='font-bold underline text-blue-900'
                            href='https://maps.app.goo.gl/mfVNTbmihf8q5Lnr8'
                        >
                            Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki, Pekanbaru, Riau, 28292.
                        </Link>
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

export default WhyITechFeedPumpAssyMustBeYourChoice;
