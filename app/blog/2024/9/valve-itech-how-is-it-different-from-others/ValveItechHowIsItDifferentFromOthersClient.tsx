'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import PublishedDateCategory from '../../../../components/published-date-category-post/page';

const ValveItechHowIsItDifferentFromOthers = ({
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

    return (
        <div className='my-16 lg:flex max-w-[1200px] lg:mx-auto gap-8 rounded-xl md:mx-4 mx-4'>
            <div className='max-w-4xl px-8 pb-10 rounded-lg bg-gradient-to-bl from-neutral-50 to-blue-100'>
                <div>
                    <div className='-mx-5 mb-5'>
                        <GoBack />
                    </div>
                    <h1 className='text-4xl font-bold text-blue-900 mb-4'>
                        {currentPostTitle}
                    </h1>

                    <PublishedDateCategory
                        publicationDate={publicationDate}
                        category={currentPost.category}
                    />

                    <div className='mt-5'>
                        <Image
                            className='rounded-xl mx-auto'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732260884/cp-indoteknik-v3/blog/September2024/valveItechHowisitDifferentfromOthers/1_o8d8io.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            Bagi Anda yang mencari komponen kendaraan
                            berkualitas tinggi dengan harga yang ramah,{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://itechpersadanusantara.com/products/fuel-injection-systems/common-rail/injector'
                            >
                                Valve Itech
                            </Link>{' '}
                            adalah jawabannya. Produk ini menawarkan berbagai
                            kelebihan yang menjadikannya pilihan ideal bagi
                            mekanik dan pemilik kendaraan yang menginginkan{' '}
                            <strong>
                                performa unggul dengan anggaran yang terjangkau
                            </strong>
                            . Mari kita bahas apa saja yang membuat{' '}
                            <strong>Valve Itech</strong> lebih unggul dibanding
                            produk sejenis.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        1. Kualitas Tinggi dan Presisi Tanpa Cacat
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732260887/cp-indoteknik-v3/blog/September2024/valveItechHowisitDifferentfromOthers/2_yrsq0v.png'
                            alt='Kualitas Tinggi dan Presisi Tanpa Cacat'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            <strong>Valve Itech</strong> dirancang dengan
                            standar produksi ketat untuk memastikan kualitas
                            terbaik. Setiap unit melalui proses pengawasan ketat
                            sehingga hasilnya bebas dari cacat. Komponen ini{' '}
                            memiliki presisi tinggi, memastikan bahwa setiap
                            detailnya{' '}
                            <strong>
                                mendukung kinerja mesin dengan optimal
                            </strong>{' '}
                            dan{' '}
                            <strong>
                                aman digunakan dalam jangka waktu lama.
                            </strong>
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        2. Spesifikasi Mudah Dicocokkan di Mesin Uji dan
                        Kalibrasi
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732260889/cp-indoteknik-v3/blog/September2024/valveItechHowisitDifferentfromOthers/3_cgcden.png'
                            alt='Spesifikasi Mudah Dicocokkan di Mesin Uji dan
                        Kalibrasi'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            <strong>Valve Itech</strong> mudah diuji dan
                            disesuaikan dalam pengaturan mesin dan kalibrasi.
                            Hal ini memudahkan mekanik dalam memastikan bahwa
                            valve ini cocok dan berfungsi dengan baik pada
                            kendaraan. Kemudahan kalibrasi ini membantu{' '}
                            <strong>Valve Itech</strong> dalam mencapai standar
                            performa tinggi, sehingga pengguna dapat{' '}
                            <strong>lebih cepat memastikan kecocokan</strong>{' '}
                            dan <strong>efektivitasnya</strong>.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        3. Harga Terjangkau dan Ekonomis
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732260878/cp-indoteknik-v3/blog/September2024/valveItechHowisitDifferentfromOthers/4_zx8tdh.png'
                            alt='Harga Terjangkau dan Ekonomis'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            <strong>Valve Itech</strong> memberikan kombinasi
                            yang langka: kualitas tinggi dengan harga yang
                            terjangkau. Bagi Anda yang ingin menjaga kualitas
                            kendaraan tanpa harus mengeluarkan biaya besar,{' '}
                            <strong>Valve Itech</strong> memberikan solusi hemat
                            tanpa mengorbankan performa. Ini menjadikannya{' '}
                            <strong>
                                alternatif terbaik di pasar dengan nilai lebih
                                pada setiap pembelian
                            </strong>
                            .
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        4. Kuat dan Tahan Lama
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732260879/cp-indoteknik-v3/blog/September2024/valveItechHowisitDifferentfromOthers/5_ke8kei.png'
                            alt='Kuat dan Tahan Lama'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            <strong>Valve Itech</strong> dirancang untuk daya
                            tahan yang tinggi, membuatnya tahan lama
                            dibandingkan produk lainnya. Komponen ini dibuat
                            dari material pilihan, menjamin ketahanan di
                            berbagai kondisi. Dengan menggunakan{' '}
                            <strong>Valve Itech</strong>, Anda bisa mengurangi
                            frekuensi penggantian suku cadang, yang pada
                            akhirnya <strong>menghemat waktu</strong> dan{' '}
                            <strong>biaya perawatan kendaraan</strong>.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        5. Pilihan Terbaik untuk Mekanik Profesional
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732260892/cp-indoteknik-v3/blog/September2024/valveItechHowisitDifferentfromOthers/6_on9jqx.png'
                            alt='Pilihan Terbaik untuk Mekanik Profesional'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            Banyak mekanik profesional memilih{' '}
                            <strong>Valve Itech</strong> karena kualitasnya yang
                            dapat diandalkan. Selain harga yang bersahabat,
                            produk ini menawarkan kualitas yang stabil dan
                            performa konsisten. <strong>Valve Itech</strong>{' '}
                            juga dikenal kompatibel dengan berbagai jenis mesin,
                            sehingga menjadi pilihan favorit bagi mereka yang
                            membutuhkan <strong>suku cadang praktis</strong> dan{' '}
                            <strong>efisien</strong>.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        Mengapa Memilih Valve Itech?
                    </h2>
                    <p className='text-gray-600 mb-4 text-justify'>
                        <strong>Valve Itech</strong> adalah investasi jangka
                        panjang untuk Anda yang ingin menjaga performa kendaraan
                        tetap optimal tanpa menguras anggaran. Dirancang khusus
                        untuk kendaraan seperti{' '}
                        <strong>Mitsubishi Triton</strong>, valve ini
                        memungkinkan mesin bekerja secara efisien dan stabil
                        tanpa perlu pengeluaran besar untuk perawatan.
                    </p>
                    <p className='text-gray-600 mb-4 text-justify'>
                        Segera dapatkan <strong>Valve Itech</strong> di{' '}
                        <strong>Indo Teknik</strong>,{' '}
                        <Link
                            className='font-bold underline text-blue-900'
                            href='/contact'
                        >
                            hubungi kami
                        </Link>{' '}
                        atau kunjungi langsung yang berlokasi di{' '}
                        <Link
                            className='font-bold underline text-blue-900'
                            href='https://maps.app.goo.gl/XvpatKvyhzNeRbGB9'
                        >
                            Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki
                            Pekanbaru Riau, 28292
                        </Link>{' '}
                        dan rasakan sendiri kualitasnya!{' '}
                        <strong>Valve Itech</strong> adalah pilihan yang
                        mendukung performa kendaraan, menjaga anggaran, dan
                        menjadi favorit bagi para mekanik yang cerdas dalam
                        memilih suku cadang.
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

export default ValveItechHowIsItDifferentFromOthers;
