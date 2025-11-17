'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageModal from '../components/gallery-modal/page';
import Image from 'next/image';

const TestBenchAndFabricationMachines = ({
    tab1Images,
    tab2Images,
    jsonLd,
}) => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [images, setImages] = useState([]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleImageClick = (index, imageArray) => {
        setSelectedImageIndex(index);
        setImages(imageArray);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(0);
        setImages([]);
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const [t, i18n] = useTranslation('global');

    return (
        <div className='w-full mt-10 mb-20 max-w-6xl mx-auto p-4'>
            <div className='mb-5 rounded overflow-hidden flex flex-col mx-auto text-center'>
                <h1 className='text-blue-900 max-w-xl mx-auto text-4xl sm:text-6xl font-bold transition duration-500 ease-in-out inline-block mb-2'>
                    {t('galleries.title')}
                </h1>
            </div>

            <div className='bg-gradient-to-bl from-neutral-50 to-blue-100 p-2 rounded-t-xl'>
                <div className='flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4'>
                    <button
                        className={`px-4 py-2  font-normal  ${
                            activeTab === 'tab1'
                                ? 'border-blue-900 text-blue-900 font-semibold'
                                : 'border-transparent'
                        } focus:outline-none`}
                        onClick={() => handleTabClick('tab1')}
                        // aria-controls='tab1'
                        // aria-selected={activeTab === 'tab1'}
                    >
                        {t('galleries.testBenches')}
                    </button>
                    <button
                        className={`px-4 py-2  font-normal  ${
                            activeTab === 'tab2'
                                ? 'border-blue-900 text-blue-900 font-semibold'
                                : 'border-transparent'
                        } focus:outline-none`}
                        onClick={() => handleTabClick('tab2')}
                        // aria-controls='tab2'
                        // aria-selected={activeTab === 'tab2'}
                    >
                        {t('galleries.fabrication')}
                    </button>
                </div>
            </div>

            <div className='p-4 tab-content  rounded-b-xl bg-gradient-to-bl from-neutral-50 to-blue-100 '>
                {activeTab === 'tab1' && (
                    <div id='tab1'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-auto-columns: auto; gap-5 p-4'>
                            {tab1Images.map((image, index) => (
                                <div
                                    key={index}
                                    className='group cursor-pointer relative'
                                >
                                    <a
                                        href='#'
                                        className='cursor-zoom-in'
                                        onClick={() =>
                                            handleImageClick(index, tab1Images)
                                        }
                                    >
                                        <Image
                                            src={image.src.trimEnd()}
                                            alt={image.name}
                                            className='w-full h-[250px] object-cover rounded-lg transition-transform transform group-hover:scale-105'
                                            width={600}
                                            height={400}
                                        />
                                        <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 rounded-xl'>
                                            {image.name}
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'tab2' && (
                    <div id='tab2'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-auto-columns: auto; gap-5 p-4'>
                            {tab2Images.map((image, index) => (
                                <div
                                    key={index}
                                    className='group cursor-pointer relative'
                                >
                                    <a
                                        href='#'
                                        className='cursor-zoom-in'
                                        onClick={() =>
                                            handleImageClick(index, tab2Images)
                                        }
                                    >
                                        <Image
                                            src={image.src.trimEnd()}
                                            alt={image.name}
                                            className='w-full h-[250px] object-cover rounded-lg transition-transform transform group-hover:scale-105'
                                            width={600}
                                            height={400}
                                        />
                                        <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 rounded-xl'>
                                            {image.name}
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {isModalOpen && images[selectedImageIndex] && (
                <ImageModal
                    isOpen={isModalOpen}
                    image={images[selectedImageIndex]}
                    onClose={handleCloseModal}
                    onPrev={handlePrevImage}
                    onNext={handleNextImage}
                />
            )}
        </div>
    );
};

export default TestBenchAndFabricationMachines;
