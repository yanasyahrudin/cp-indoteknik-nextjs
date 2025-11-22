'use client';
import { GoogleGenAI } from '@google/genai';
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { IoIosCloseCircle } from 'react-icons/io';
import { RiRobot2Fill } from 'react-icons/ri';
import data from '../../translations/id/global.json';
import allItechProducts from '../../data/allItechProducts/allProducts.json';
import i18next from 'i18next';
import { FiDelete } from 'react-icons/fi';
import { IoSend } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
});

// Add type for messages
type Message = {
    sender: string;
    text: string;
};

const ChatHistory = ({ chatHistory }) => {
    return (
        <>
            {chatHistory.map((message, index) => (
                <div
                    key={index}
                    className={`flex items-start py-2 px-4 rounded-lg ${
                        message.type === 'user'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-blue-100 text-blue-800'
                    }`}
                >
                    <div className='mt-1'>
                        {message.type === 'user' ? (
                            <FaUser className='text-gray-500' size={20} />
                        ) : (
                            <RiRobot2Fill className='text-blue-700' size={20} />
                        )}
                    </div>
                    <div className='flex-1 gap-2 ml-2'>
                        {message.type === 'user' ? (
                            <span>{message.text}</span>
                        ) : (
                            <ReactMarkdown>
                                {message.message || message.text}
                            </ReactMarkdown>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

const Loading = ({ isLoading }) => {
    return (
        <div>
            {isLoading && (
                <div className='flex items-center justify-center mt-2'>
                    <div className='spinner-border text-blue-500' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default function ChatbotClient() {
    const [userInput, setUserInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [homePopupVisible, setHomePopupVisible] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const [modalBottom, setModalBottom] = useState(24);

    useEffect(() => {
        // Hanya berjalan di browser yang mendukung visualViewport
        const handleResize = () => {
            if (window.visualViewport) {
                // Jika viewport height berkurang drastis, kemungkinan keyboard muncul
                const keyboardHeight =
                    window.innerHeight - window.visualViewport.height;
                setModalBottom(keyboardHeight > 0 ? keyboardHeight + 8 : 24);
            }
        };

        window.visualViewport?.addEventListener('resize', handleResize);
        return () => {
            window.visualViewport?.removeEventListener('resize', handleResize);
        };
    }, []);

    const { t } = useTranslation('global');

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    };

    const knowledgeData = {
        global: data,
        translation: i18next.options?.resources?.id?.translation || {},
        products: allItechProducts,
    };

    const sendMessage = async () => {
        if (!userInput.trim()) return;
        setIsLoading(true);

        setChatHistory((prev) => [
            ...prev,
            { sender: 'user', text: userInput, type: 'user' },
        ]);

        try {
            const result = await ai.models.generateContent({
                model: 'gemini-2.5-pro',
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: userInput }],
                    },
                ],
                config: {
                    systemInstruction: `
                    You are a customer service agent named AI Assistant. 
                    Company data: ${JSON.stringify(knowledgeData)}.

                    All products from the Itech brand are available at Indo Teknik.

                    Company Contact Information:
                    - WhatsApp: +62 811-7531-881, +62 8123-6891-888
                    - Email: customerservice@indo-teknik.com
                    - Instagram: [@indoteknik](https://www.instagram.com/indoteknik/)
                    - TikTok: [@indoteknikofficial](https://www.tiktok.com/@indoteknikofficial)
                    - Marketplace:
                        - Tokopedia: [Kunjungi => Tokopedia](https://tokopedia.link/qoZIKIkdcNb)
                        - Shopee: [Kunjungi => Shopee](https://shopee.co.id/indoteknikpekanbaru)

                    Rules:
                    - Always respond in Indonesian or English based on the user's input language.
                    - Answer briefly, clearly, accurately, and politely.
                    - Only provide answers based on the company data provided.
                    - If the answer is not found in the data, respond with:
                    • "Maaf, saya tidak memiliki informasi tersebut saat ini."  
                    • or "Sorry, I don't have that information at the moment."
                    - Do NOT create or assume information that is not included in the data.
                            `,
                },
            });

            const responseText =
                result?.candidates?.[0]?.content?.parts?.[0]?.text ??
                'No response';

            setChatHistory((prev) => [
                ...prev,
                {
                    sender: 'ai',
                    text: responseText,
                    type: 'ai',
                    message: responseText,
                },
            ]);
            console.log('Ai Response"', userInput);
        } catch (error) {
            console.error('Error communicating with AI:', error);
            setChatHistory((prev) => [
                ...prev,
                {
                    sender: 'ai',
                    text: 'Sorry, there was an error processing your request.',
                    type: 'ai',
                },
            ]);
        } finally {
            setIsLoading(false);
            setUserInput('');
        }
    };

    const clearChat = () => {
        setChatHistory([]);
    };

    return (
        <div
            className='fixed z-[2147483647] right-8'
            style={{ bottom: modalBottom + 60 }}
        >
            {!homePopupVisible && (
                <button
                    className='bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900 rounded-xl p-3 shadow-md hover:scale-105 transition-transform duration-200 flex justify-center items-center gap-2'
                    onClick={handleToggleModal}
                >
                    AI Assistant
                    <RiRobot2Fill />
                </button>
            )}

            <div
                ref={modalRef}
                style={{ bottom: modalBottom + 60 }}
                className={`fixed right-8 bg-gradient-to-bl from-neutral-50 to-blue-200 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 
                sm:w-[80vw] sm:max-w-lg 
                md:w-[60vw] md:max-w-xl 
                lg:w-[30vw] lg:max-w-2xl 
                flex flex-col justify-between 
                max-h-[90vh] sm:max-h-[90vh] md:max-h-[90vh] overflow-y-auto
                transition-all duration-300 ease-in-out ${
                    isOpen
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-90 pointer-events-none'
                }`}
            >
                {/* Header */}
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-xl font-semibold mx-auto text-blue-900'>
                        AI Assistant
                    </h3>
                    <button
                        onClick={handleToggleModal}
                        className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
                    >
                        <IoIosCloseCircle size={24} />
                    </button>
                </div>

                {/* Chat History */}
                <div className='flex-1 overflow-y-auto flex flex-col gap-2 mb-4'>
                    <ChatHistory chatHistory={chatHistory} />
                    <Loading isLoading={isLoading} />
                </div>

                {/* apa yang anda butuhkan */}
                {chatHistory.length === 0 && (
                    <div className='mb-4 text-center text-blue-900 font-medium'>
                        <span>{t('chatbot.whatDoYouNeed')}</span>
                    </div>
                )}

                {/* Input & Buttons */}
                <div className='flex flex-col gap-3 backdrop-blur rounded-lg'>
                    <input
                        value={userInput}
                        type='text'
                        placeholder={`${t('chatbot.typeYourMessage')}`}
                        className='w-full bg-white/80 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition'
                        onChange={handleUserInput}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        onFocus={() => {
                            setTimeout(() => {
                                modalRef.current?.scrollTo({
                                    top: modalRef.current.scrollHeight,
                                    behavior: 'smooth',
                                });
                            }, 300);
                        }}
                        disabled={isLoading}
                    />
                    <div className='flex gap-3'>
                        <button
                            className='flex-1 hover:scale-105 px-2 py-2 bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900 font-semibold rounded-xl shadow-md flex justify-center items-center gap-2 '
                            onClick={clearChat}
                            disabled={isLoading || chatHistory.length === 0}
                        >
                            <FiDelete /> {t('chatbot.clearChat')}
                        </button>
                        <button
                            className='flex-1 hover:scale-105 px-2 py-2 bg-blue-900 text-blue-900 font-semibold rounded-xl shadow-md flex justify-center items-center gap-2 text-white'
                            onClick={sendMessage}
                            disabled={isLoading || !userInput.trim()}
                        >
                            <IoSend /> {t('chatbot.sendMessage')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
