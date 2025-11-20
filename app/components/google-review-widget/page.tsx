'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from './../animated-section/page';
import Script from 'next/script';

const GoogleReviewWidget = () => {
    useEffect(() => {
        // Optional: you can check or manipulate Elfsight script loading logic here
    }, []);

    const { t } = useTranslation('global');

    return (
        <>
            <AnimatedSection zoomType='zoomIn'>
                <div className='lg:w-[1200px] lg:mx-auto'>
                    <div className='lg:p-0 md:p-4 sm:p-4 xs:p-4 mt-8 overflow-hidden'>
                        <Script
                            src='https://static.elfsight.com/platform/platform.js'
                            async
                        ></Script>

                        <h2 className='text-blue-900 font-semibold text-center text-3xl leading-none  max-w-2xl mx-auto mb-6'>
                            {t('services.testimonials')}
                        </h2>

                        {/* This is where your widget will be rendered */}
                        <div
                            className='elfsight-app-096d479d-2347-4f24-aa72-b170551645a9'
                            data-elfsight-app-lazy
                        ></div>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
};

export default GoogleReviewWidget;
