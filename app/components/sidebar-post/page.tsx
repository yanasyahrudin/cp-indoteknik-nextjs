import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const SidebarPost = ({ latestPosts }) => {
    const postsToDisplay = latestPosts.slice(0, 4);
    const { t } = useTranslation('blog');

    return (
        <div className='w-full mt-5 lg:mt-0 md:mt-5'>
            <div className='p-6 md:p-8 bg-gradient-to-bl from-neutral-50 to-blue-100 shadow-md rounded-xl'>
                <h3 className='text-gray-700 font-semibold text-lg md:text-xl'>
                    {t('Post Terbaru')}{' '}
                </h3>
                <div className='p-2 rounded-xl mt-2'>
                    <ul>
                        {postsToDisplay.map((post) => (
                            <li key={post.id} className='my-3 md:my-4'>
                                <Image
                                    className='rounded-xl w-full md:w-3/4 lg:w-full object-cover'
                                    src={post.image}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                />
                                <a
                                    href={post.link}
                                    className='block text-blue-900 hover:underline mt-2 md:mt-3 text-base md:text-lg'
                                >
                                    {t(post.title)}
                                </a>
                                <p className='text-xs md:text-sm text-gray-500'>
                                    {new Date(post.date).toLocaleDateString('id-ID')}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='p-6 md:p-8 bg-gradient-to-bl from-neutral-50 to-blue-100 shadow-md rounded-xl mt-6 '>
                <h3 className='text-gray-700 font-semibold text-lg md:text-xl'>
                    {t('Kategori')}
                </h3>
                <div className='p-2 rounded-xl mt-2'>
                    <ul>
                        <li className='my-2 md:my-3 pb-2'>
                            <a
                                href='/blog?category=Spare+Parts'
                                className='text-blue-900 max-w-fit bg-gradient-to-bl from-neutral-50 to-blue-100 py-2 px-4 rounded-xl shadow-md hover:text-blue-500 block md:inline-block text-sm md:text-base'
                            >
                                Spare Parts
                            </a>
                        </li>
                        <li className='my-2 md:my-3 pb-2'>
                            <a
                                href='/blog?category=Workshop'
                                className='text-blue-900 max-w-fit bg-gradient-to-bl from-neutral-50 to-blue-100 py-2 px-4 rounded-xl shadow-md hover:text-blue-500 block md:inline-block text-sm md:text-base'
                            >
                                Workshop
                            </a>
                        </li>
                        <li className='my-2 md:my-3 pb-2'>
                            <a
                                href='/blog?category=Fabrication'
                                className='text-blue-900 max-w-fit bg-gradient-to-bl from-neutral-50 to-blue-100 py-2 px-4 rounded-xl shadow-md hover:text-blue-500 block md:inline-block text-sm md:text-base'
                            >
                                Fabrication
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarPost;
