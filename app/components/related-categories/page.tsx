'use client';
import React, { useRef, useState } from 'react';

import {
    BiSolidSkipNextCircle,
    BiSolidSkipPreviousCircle,
} from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';

type Category = {
    id: string| number;
    name: string;
    imgSrc: string;
    link: string;
}

interface RelatedCategoriesProps {
    categories?: Category[];
}

const RelatedCategories = ({ categories = [] }: RelatedCategoriesProps) => {
    const { t } = useTranslation('');
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
        null
    );
    return (
        <div className='py-8 lg:py-8 sm:py-8 xs:py-6 px-8 lg:px-6 sm:px-6 xs:px-0 mt-10 rounded-xl p-6 lg:p-6 sm:p-0 xs:p-0 bg-gradient-to-bl from-neutral-50 to-blue-200'>
            <h2 className='text-3xl font-bold mb-4 text-center text-blue-900'>
                {t('Related Categories')}
            </h2>
            {categories.length > 0 ? (
                categories.length >= 4 ? (
                    // Kondisi jika ada 4 atau lebih kategori, gunakan slider
                    <Swiper
                        spaceBetween={0}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: { slidesPerView: 4 },
                        }}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.id} className='p-4 '>
                                <a href={category.link}>
                                    <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 shadow-md rounded-lg '>
                                        <Image
                                            src={category.imgSrc}
                                            alt={category.name}
                                            className='h-40 w-full object-contain p-2'
                                            width={400}
                                            height={160}
                                        />
                                        <div className='p-4'>
                                            <h3 className='text-xl font-semibold text-gray-800 text-center'>
                                                {category.name}
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    // Kondisi jika ada kurang dari 4 kategori, tampilkan biasa tanpa slider
                    <Swiper
                        spaceBetween={0}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: { slidesPerView: 4 },
                        }}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        className='flex flex-wrap justify-center gap-4'
                    >
                        {categories.map((category) => (
                            <SwiperSlide
                                key={category.id}
                                className='p-2 w-full sm:max-w-72'
                            >
                                <a href={category.link}>
                                    <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 shadow-md rounded-lg '>
                                        <Image
                                            src={category.imgSrc}
                                            alt={category.name}
                                            className='h-40 w-full object-contain p-2'
                                            width={400}
                                            height={160}
                                        />
                                        <div className='p-4'>
                                            <h3 className='text-xl font-semibold text-gray-800 text-center'>
                                                {category.name}
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )
            ) : (
                <p className='text-gray-600 text-center items-center justify-content'>
                    No related categories available.
                </p>
            )}

            {categories.length > 4 && (
                <div className='flex justify-center gap-7 mt-8 '>
                    <button
                        onClick={() =>
                            swiperInstance && swiperInstance.slidePrev()
                        }
                        className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-md items-center border px-3 py-1.5 rounded-xl text-blue-900 hover:text-blue-900 '
                    >
                        <BiSolidSkipPreviousCircle />
                        <span className='ml-1 font-bold text-lg'>
                            {t('Prev')}
                        </span>
                    </button>
                    <button
                        onClick={() =>
                            swiperInstance && swiperInstance.slideNext()
                        }
                        className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-md  items-center border px-3 py-1.5 rounded-xl text-blue-900 '
                    >
                        <span className='mr-1 font-bold text-lg'>
                            {t('Next')}
                        </span>
                        <BiSolidSkipNextCircle />
                    </button>
                </div>
            )}
        </div>
    );
};

export default RelatedCategories;
