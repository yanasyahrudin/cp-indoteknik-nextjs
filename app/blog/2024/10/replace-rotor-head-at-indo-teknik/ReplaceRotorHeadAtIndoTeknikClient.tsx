'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const ReplaceRotorHeadAtIndoTeknikSafePocketsAndGuaranteedResults = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987448/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/1_jjiddx.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            {t(
                                'Halo sobat otomotif! Buat kalian yang punya kendaraan diesel dan lagi butuh'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/services/conventional/fuel-injection-pump'
                            >
                                {t('servis untuk pump Isuzu')}
                            </Link>
                            , {t('kali ini Mimin mau kasih kabar baik! Di')}{' '}
                            <strong>{t('Indo Teknik Pekanbaru')}</strong>,{' '}
                            {t('ganti')} <strong>{t('Rotor Head')}</strong>{' '}
                            {t(
                                'nggak akan bikin kantong jebol. Nah, kali ini Mimin mau share cerita soal pump Isuzu yang baru aja masuk untuk servis di bengkel kami. Yuk, simak prosesnya!'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Masalah yang Ditemukan: As Rotor Aus')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987466/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/2_d24w9p.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Ketika pump Isuzu ini dibongkar dan dicek, ternyata'
                            )}{' '}
                            <strong>{t('as rotornya sudah aus')}</strong>{' '}
                            {t(
                                'dan wajib diganti. Keausan seperti ini sering terjadi karena pemakaian dalam jangka panjang atau kualitas bahan bakar yang kurang baik. Namun, jangan khawatir! Di'
                            )}{' '}
                            <strong>{t('Indo Teknik Pekanbaru')}</strong>,{' '}
                            {t('kami punya solusi terbaik untuk masalah ini.')}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t(
                            'Proses Servis: Pemasangan Rotor Head Original ITech'
                        )}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987457/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/3_gfpbjt.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Setelah semua komponen dibongkar dan dicuci bersih, kami melanjutkan pemasangan'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='https://itechpersadanusantara.com/products/fuel-injection-systems/conventional/fuel-injection-pump/rotorhead'
                            >
                                {t('Rotor Head original ITech')}
                            </Link>
                            . <strong>{t('Rotor Head')}</strong>{' '}
                            {t(
                                'ini terkenal akan kualitasnya dan sudah terbukti kehandalannya'
                            )}
                            . {t('Pemasangan dilakukan oleh')}{' '}
                            <strong>{t('mekanik ahli')}</strong>{' '}
                            {t('kami menggunakan')}{' '}
                            <strong>{t('tool khusus')}</strong>{' '}
                            {t(
                                'untuk memastikan semuanya terpasang dengan benar dan rapi.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Kalibrasi dengan Mesin Test Khusus')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987462/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/4_lnuown.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Setelah pemasangan selesai, pump langsung dikalibrasi menggunakan'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/test-bench-and-fabrication-machines'
                            >
                                {t('mesin test khusus')}
                            </Link>
                            .{' '}
                            {t(
                                'Proses kalibrasi ini bukan sekadar untuk mengecek retina atau angka saja, tapi harus benar-benar'
                            )}{' '}
                            <strong>{t('lulus semua data kalibrasi')}</strong>{' '}
                            {t('sesuai dengan nomor')}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/services/conventional/fuel-injection-pump'
                            >
                                {t('fuel injection pump')}
                            </Link>
                            .{' '}
                            {t(
                                'Hal ini penting banget supaya pump bisa bekerja maksimal ketika dipasang kembali di mobil.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('Siap Dipasang Tanpa Perlu Penyetelan Tambahan')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987447/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/5_ax0cp1.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Yang paling penting, setelah kalibrasi selesai, pump bisa langsung diserahkan ke customer dan dipasang ke mobil tanpa harus disetel lagi. Jadi, kalian nggak perlu repot-repot menyetel ulang saat pemasangan di mobil. Simple dan praktis!'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2 '>
                        Indo Teknik: One Stop Solution for All Your Diesel Needs
                    </h2>
                    <p className='text-gray-600 mb-4 justify-content'>
                        {t(
                            'Jadi, buat kalian yang punya masalah dengan diesel, percayakan urusan dieselnya ke'
                        )}{' '}
                        <strong>Indo Teknik Pekanbaru</strong>.{' '}
                        {t(
                            'Dengan layanan lengkap dan kualitas sparepart original seperti'
                        )}{' '}
                        <Link
                            className='font-bold text-blue-900 underline'
                            href='https://itechpersadanusantara.com/products/fuel-injection-systems/conventional/fuel-injection-pump/rotorhead'
                        >
                            {t('Rotor Head dari ITech')}
                        </Link>
                        ,{' '}
                        {t(
                            'kendaraan diesel kalian pasti kembali bekerja dengan optimal.'
                        )}
                    </p>
                    <p className='text-gray-600 mb-4 justify-content'>
                        {t('Ayo segera datang ke')} <strong>Indo Teknik</strong>{' '}
                        {t('yang berlokasi')}{' '}
                        <strong>
                            Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki
                            Pekanbaru Riau, 28292
                        </strong>
                        , one stop solution all your diesel needs!
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

export default ReplaceRotorHeadAtIndoTeknikSafePocketsAndGuaranteedResults;
