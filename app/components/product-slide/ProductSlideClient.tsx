'use client';
// Import Swiper React components
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {
    BiSolidSkipNextCircle,
    BiSolidSkipPreviousCircle,
} from 'react-icons/bi';
import { useState } from 'react';
import 'swiper/css/pagination';

const ProductSlide = ({ product }) => {
    const { t } = useTranslation();
    return (
        <div className='p-2 sm:p-4 '>
            <Link href={`${product.link}`}>
                <div className='relative bg-gradient-to-bl lg:h-[330px] from-neutral-50 to-blue-100 p-4 sm:p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105  '>
                    <Image
                        className='w-full object-cover rounded-md mb-2 sm:mb-4 '
                        src={product.imageUrl}
                        alt={t(product.name)}
                        loading='lazy'
                        width={300}
                        height={200}
                    />
                    <h1 className='text-lg sm:text-2xl font-semibold text-gray-800 '>
                        {t(product.name)}
                    </h1>
                    <div className='absolute  inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100'>
                        <button className='bg-blue-800 text-white py-2 px-4 rounded-xl hover:bg-blue-900'>
                            {t('Learn More')}
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const ProductCarousel = ({ products }) => {
    const { t } = useTranslation();
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
        null
    );
    return (
        <div className='mx-auto p-2 sm:p-4 w-full max-w-6xl '>
            <Swiper
                spaceBetween={0}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductSlide product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='flex justify-center gap-7 mt-7 '>
                <button
                    onClick={() => swiperInstance && swiperInstance.slidePrev()}
                    className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-md items-center border px-3 py-1.5 rounded-xl text-blue-900 hover:text-blue-900 '
                >
                    <BiSolidSkipPreviousCircle />
                    <span className='ml-1 font-bold text-lg'>{t('Prev')}</span>
                </button>
                <button
                    onClick={() => swiperInstance && swiperInstance.slideNext()}
                    className='hover:scale-105 bg-gradient-to-bl from-neutral-50 to-blue-100 inline-flex shadow-md  items-center border px-3 py-1.5 rounded-xl text-blue-900 '
                >
                    <span className='mr-1 font-bold text-lg'>{t('Next')}</span>
                    <BiSolidSkipNextCircle />
                </button>
            </div>
        </div>
    );
};

const ProductCategories = ({ categories }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(Object.keys(categories)[0]);

    return (
        <div>
            <div className='flex justify-center ml-4 mr-4'>
                <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl mt-5 shadow-md flex '>
                    {Object.keys(categories).map((category) => (
                        <button
                            key={category}
                            className={`p-2 sm:p-4 text-l font-normal  ${
                                activeTab === category
                                    ? ' text-blue-900 rounded-xl font-semibold'
                                    : 'text-gray-800'
                            }`}
                            onClick={() => setActiveTab(category)}
                        >
                            {t(category)}
                        </button>
                    ))}
                </div>
            </div>
            <ProductCarousel products={categories[activeTab]} />
        </div>
    );
};

const App = ({ categories }) => {
    const [t] = useTranslation('global');
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-3xl text-blue-900 text-center'>
                {t('home.products')}
            </h2>
            <ProductCategories categories={categories} />
        </div>
    );
};

export default App;
