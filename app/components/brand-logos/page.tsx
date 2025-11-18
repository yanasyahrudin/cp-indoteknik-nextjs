import React from 'react';
import brandLogos from './../../data/brandLogos';
import Image from 'next/image';

const BrandLogos = () => {
    return (
        <div className='px-4'>
            <div className='lg:w-[1200px] lg:mx-auto mx-auto px-5 mt-5 mb-14 bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl mx-5'>
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-wrap items-center gap-5 md:justify-around justify-center p-5 '>
                        {brandLogos.map((logo, index) => (
                            <div key={index} className='text-gray-100'>
                                <Image
                                    className='h-auto w-[100px]'
                                    src={logo}
                                    alt={`Brand Logo ${index}`}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandLogos;
