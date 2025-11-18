'use client';
import React from 'react';
import FindMarketplace from './../../../../../components/find-market-place/page';
import GoBack from './../../../../../components/go-back/page';
import RelatedCategories from './../../../../../components/related-categories/page';
import categories from './../../../../../data/supplyPumpCategory';
import { descriptionDetailCategory } from './../../../../../data/descriptionDetailCategory';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const categoryDetails = {
    name: 'Supply Pump Assy',
    description: descriptionDetailCategory,   imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_600/v1721810813/cp-indoteknik-v3/products/supply_Pump_assy_w4li42.png', // Replace with actual image URL
};

// Function to shuffle array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const SupplyPumpAssyDetails = () => {
    const filteredCategories = categories.filter(
        (category) => category.name !== categoryDetails.name,
    );
    
    const shuffledCategories = shuffleArray([...filteredCategories]);

    const { t } = useTranslation();
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: categoryDetails.name,
        image: categoryDetails.imageUrl,
        description: categoryDetails.description,
    };
    return (
        <div className='mx-auto py-10 lg:w-[1200px] px-4 lg:px-0'>
            
            <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl'>
                <GoBack />
                <div className='flex flex-col md:flex-row rounded-xl gap-8 p-8'>
                    <div className='md:w-1/2 lg:ml-8 md:ml-8 xs:m-6 mb-8 bg-gradient-to-bl from-neutral-50 to-blue-200 rounded-xl'>
                        <Image
                            src={categoryDetails.imageUrl}
                            alt={categoryDetails.name}
                            className='h-full w-full object-contain'
                            width={900}
                            height={600}
                            priority
                        />
                    </div>
                    <div className='md:w-1/2 py-6 lg:pr-8 md:pr-8 xs:pr-6 xs:pl-6 md:pl-0 lg:pl-0 flex flex-col justify-start pb-10'>
                        <h3 className='text-4xl font-bold text-gray-800 mb-4'>
                            {categoryDetails.name}
                        </h3>
                        <p className='text-lg text-gray-600 mb-6 text-justify'>
                        {t(categoryDetails.description)}
                        </p>

                        <FindMarketplace />
                    </div>
                </div>
            </div>

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Use the RelatedCategories component */}
            <RelatedCategories categories={shuffledCategories} />
        </div>
    );
};

export default SupplyPumpAssyDetails;