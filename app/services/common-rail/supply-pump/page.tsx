'use client';

import React, { useEffect } from 'react';
import { IoIosSettings } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import ContactUsService from './../../../components/contact-us-service/page';
import AnimatedSection from './../../../components/animated-section/page';
import Head from 'next/head';
import GoogleReviewWidget from './../../../components/google-review-widget/page';
import Image from 'next/image';

const SupplyPump = () => {
    const { t } = useTranslation('global');

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className='mx-auto mt-10 mb-10'>
            <Head>
                <title>{t('services.supplyPump.title')} | Indo Teknik</title>
                <meta
                    name='description'
                    content={t('services.supplyPump.imageDescription')}
                />
                <meta
                    name='keywords'
                    content={`${t('services.supplyPump.title')}, ${t(
                        'header.services'
                    )} ${t('services.supplyPump.title')}, ${t(
                        'header.services'
                    )} Indo Teknik`}
                />
            </Head>

            <div>
                <h1 className='text-5xl text-blue-900 font-bold text-center animate-bounceIn'>
                    {t('services.supplyPump.title')}
                </h1>
            </div>

            <AnimatedSection zoomType='zoomIn'>
                <div className='px-4'>
                    <div className='mt-5 flex flex-col sm:flex-row mx-4 lg:w-[1200px] lg:mx-auto mx-auto  overflow-hidden bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl p-6'>
                        <div className='sm:p-4 p-2 sm:w-full flex flex-col justify-between'>
                            <div>
                                <p className='mt-2 text-md text-gray-800 text-justify'>
                                    {t('services.supplyPump.description')}
                                </p>
                                <ul className='list-disc list-inside mt-2 text-gray-700'>
                                    <li className='flex items-start'>
                                        <IoIosSettings className='mr-2 text-blue-900 w-5 h-5' />
                                        {t(
                                            'services.supplyPump.services.identification'
                                        )}
                                    </li>
                                    <li className='flex items-start'>
                                        <IoIosSettings className='mr-2 text-blue-900 w-5 h-5' />
                                        {t(
                                            'services.supplyPump.services.maintenance'
                                        )}
                                    </li>
                                    <li className='flex items-start'>
                                        <IoIosSettings className='mr-2 text-blue-900 w-5 h-5' />
                                        {t(
                                            'services.supplyPump.services.replacement'
                                        )}
                                    </li>
                                    <li className='flex items-start'>
                                        <IoIosSettings className='mr-2 text-blue-900 w-5 h-5' />
                                        {t(
                                            'services.supplyPump.services.calibration'
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection zoomType='zoomIn'>
                <div className='px-4'>
                    <div className='mt-5 flex flex-col sm:flex-row mx-4 lg:w-[1200px] lg:mx-auto mx-auto overflow-hidden bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl p-6'>
                        <div className='p-2 sm:w-1/2'>
                            <Image
                                className='rounded-xl object-cover h-[340px] w-[340px] '
                                src='https://res.cloudinary.com/dcbryptkx/image/upload/v1721441909/cp-indoteknik-v3/services/sp2dfgv_kktxff.jpg' // Ganti dengan URL gambar yang sesuai
                                alt={t('services.supplyPump.imageAlt')}
                                width={900}
                                height={600}
                                priority
                            />
                        </div>
                        <div className='sm:p-4 p-2 sm:w-1/2 lg:p-0 lg:w-full flex flex-col '>
                            <div>
                                <h2 className='text-2xl font-semibold text-gray-800'>
                                    {t('services.supplyPump.imageTitle')}
                                </h2>
                                <p className='mt-2 text-md text-gray-800 text-justify'>
                                    {t('services.supplyPump.imageDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <GoogleReviewWidget />

            <AnimatedSection zoomType='zoomOut'>
                <ContactUsService />
            </AnimatedSection>
        </div>
    );
};

export default SupplyPump;
