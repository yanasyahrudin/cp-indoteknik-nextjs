'use client';
import React, { useEffect } from 'react';
import SharePost from '../../../../components/share-post/page';
import SidebarPost from '../../../../components/sidebar-post/page';
import Link from 'next/link';
import GoBack from '../../../../components/go-back/page';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const ImportantTipsForExcavatorBucketRepairToSaveOperationalCosts = ({
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
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729237233/cp-indoteknik-v3/blog/October2024/importantTipsforExcavatorBucketRepair/1_nkcese.png'
                            alt={currentPostTitle}
                            width={600}
                            height={400}
                        />
                        <p className='text-justify mt-5 text-gray-600 mb-4'>
                            <strong>{t('Bucket ekskavator')}</strong>{' '}
                            {t(
                                'merupakan komponen penting dalam operasional alat berat ini. Mengingat peran krusialnya, perawatan dan'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/services/fabrication/welding'
                            >
                                {t('reparasi bucket ekskavator')}
                            </Link>{' '}
                            {t(
                                'harus dilakukan dengan tepat agar tidak hanya memperpanjang usia pakai tetapi juga mengurangi biaya operasional secara keseluruhan. Salah satu aspek utama dalam reparasi bucket adalah proses pengelasan. Berikut beberapa poin penting yang harus diperhatikan saat'
                            )}{' '}
                            <Link
                                className='font-bold text-blue-900 underline'
                                href='http://indo-teknik.com/services/fabrication/welding'
                            >
                                {t('reparasi bucket ekskavator,')}
                            </Link>{' '}
                            {t(
                                'terutama dalam pemilihan dan penggunaan kawat las.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t(
                            '1. Pilih Kawat Las yang Sesuai dengan Material Bucket'
                        )}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729237263/cp-indoteknik-v3/blog/October2024/importantTipsforExcavatorBucketRepair/2_v8njeb.png'
                            alt='Pilih Kawat Las yang Sesuai dengan Material Bucket'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                {t('Setiap')}{' '}
                                <strong>{t('bucket ekskavator')}</strong>{' '}
                                {t(
                                    'dibuat dari bahan yang berbeda, dan pemilihan kawat las harus disesuaikan dengan bahan tersebut.'
                                )}{' '}
                                <strong>
                                    {t('Penggunaan kawat las yang sesuai')}
                                </strong>{' '}
                                {t(
                                    'akan memastikan hasil las yang kuat dan tahan lama. Sebaliknya, jika kawat las yang dipakai tidak cocok atau berkualitas rendah, akan meningkatkan risiko terjadinya retak di titik las.'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('2. Pengelasan Harus Dilakukan Tebal dan Penuh')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px] h-[320px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729237250/cp-indoteknik-v3/blog/October2024/importantTipsforExcavatorBucketRepair/3_l3ajhe.png'
                            alt='Pengelasan Harus Dilakukan Tebal dan Penuh'
                            width={600}
                            height={400}
                        />
                        <div>
                            <p className='text-gray-600 mb-4'>
                                {t(
                                    'Selain pemilihan kawat las yang sesuai, pengelasan harus dilakukan dengan teknik yang tepat, yaitu'
                                )}{' '}
                                <strong>
                                    {t(
                                        'dilas tebal dan penuh di semua bagian.'
                                    )}{' '}
                                </strong>
                                {t(
                                    'Hal ini akan memastikan bahwa titik las menjadi lebih kuat dan tidak mudah mengalami keretakan. Pengelasan yang tidak sempurna atau tidak merata dapat menyebabkan keausan lebih cepat, yang pada akhirnya membuat'
                                )}{' '}
                                <strong>{t('bucket ekskavator')}</strong>{' '}
                                {t('sering rusak')}.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t(
                            '3. Pertimbangan Jangka Panjang untuk Hemat Biaya Operasional'
                        )}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729237253/cp-indoteknik-v3/blog/October2024/importantTipsforExcavatorBucketRepair/4_zads5f.png'
                            alt='Pertimbangan Jangka Panjang untuk Hemat Biaya
                        Operasional'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Memang benar, penggunaan kawat las kualitas terbaik dan melakukan pengelasan yang baik mungkin membutuhkan biaya lebih di awal. Namun, hal ini sebenarnya akan menghemat biaya dalam jangka panjang.'
                            )}{' '}
                            <strong>
                                {t(
                                    'Bucket yang dilas dengan benar dan kuat akan bertahan lebih lama'
                                )}
                            </strong>
                            ,{' '}
                            {t(
                                'sehingga ekskavator bisa terus bekerja tanpa sering bolak-balik ke bengkel untuk reparasi. Jika ekskavator berhenti bekerja karena bucket rusak, tentu saja biaya kerugiannya jauh lebih besar, apalagi jika terkena penalti akibat downtime.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('4. Risiko Kerugian Jika Salah Pilih Kawat Las')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729237236/cp-indoteknik-v3/blog/October2024/importantTipsforExcavatorBucketRepair/5_soxx1c.png'
                            alt='Risiko Kerugian Jika Salah Pilih Kawat Las'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Bayangkan saja, jika ekskavator tidak beroperasi selama satu hari, kerugian yang timbul bisa sangat besar. Downtime berarti kehilangan produktivitas dan potensi pendapatan, belum lagi risiko penalti yang harus ditanggung. Dengan'
                            )}{' '}
                            <strong>{t('memperhitungkan kerugian')}</strong>{' '}
                            {t(
                                'ini, biaya yang dikeluarkan untuk menggunakan kawat las kualitas terbaik menjadi sangat masuk akal.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mt-6 mb-2'>
                        {t('5. Reparasi Berkualitas di Indo Teknik')}
                    </h2>
                    <div className='lg:flex md:flex gap-6 text-justify'>
                        <Image
                            className='rounded-xl w-[400px]'
                            src='https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729237245/cp-indoteknik-v3/blog/October2024/importantTipsforExcavatorBucketRepair/6_foufat.png'
                            alt='Reparasi Berkualitas di Indo Teknik'
                            width={600}
                            height={400}
                        />
                        <p className='text-gray-600 mb-4'>
                            {t('Bagi Anda yang ingin memastikan')}{' '}
                            <strong>{t('bucket ekskavator')}</strong>{' '}
                            {t('direparasi dengan standar terbaik,')}{' '}
                            <strong>Indo Teknik</strong>{' '}
                            {t('siap membantu. Berlokasi di')}{' '}
                            <Link
                                className='font-bold underline text-blue-900'
                                href='https://maps.app.goo.gl/xwQz7LK1dUdQtcMF8'
                            >
                                Jl. Riau Ujung, Kel. Tampan, Kec. Payung Sekaki,
                                Pekanbaru - Riau, 28292
                            </Link>
                            , <strong>Indo Teknik</strong>{' '}
                            {t(
                                'menawarkan solusi one-stop untuk kebutuhan diesel Anda'
                            )}
                            , {t('termasuk perbaikan')}{' '}
                            <strong>{t('bucket ekskavator')}</strong>.{' '}
                            {t(
                                'Kami bekerja sesuai dengan SOP, memastikan setiap bucket yang direparasi lebih awet dan kuat sehingga Anda dapat menghemat biaya operasional jangka panjang.'
                            )}
                        </p>
                    </div>
                </div>

                <div>
                    <div className=' mt-6 gap-6 text-justify'>
                        <p className='text-gray-600 mb-4'>
                            <strong>
                                Indo Teknik - One Stop Solution for All Your
                                Diesel Needs!
                            </strong>
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {t(
                                'Jangan ragu untuk menghubungi kami dan pastikan ekskavator Anda tetap dalam kondisi prima dengan reparasi berkualitas dari kami!'
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

export default ImportantTipsForExcavatorBucketRepairToSaveOperationalCosts;
