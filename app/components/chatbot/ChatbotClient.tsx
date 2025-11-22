'use client';
import { GoogleGenAI } from '@google/genai';
import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import ReactMarkdown from 'react-markdown';
import { IoIosCloseCircle } from 'react-icons/io';
import { RiRobot2Fill } from 'react-icons/ri';
import i18next from 'i18next';
import { FiDelete } from 'react-icons/fi';
import { IoSend } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AI_ASSISTANT_NAME = 'AI Assistant';
const MODAL_OFFSET = 60;

const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
});

type Message = {
    sender: 'user' | 'ai';
    text: string;
    type: 'user' | 'ai';
    message?: string;
};

type ChatHistoryProps = {
    chatHistory: Message[];
};

const ChatHistory = ({ chatHistory }: ChatHistoryProps) => {
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

type LoadingProps = {
    isLoading: boolean;
};

const Loading = ({ isLoading }: LoadingProps) =>
    isLoading ? (
        <div className='flex items-center justify-center mt-2'>
            <div className='spinner-border text-blue-500' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    ) : null;

export default function ChatbotClient({ data, allItechProducts }) {
    const [userInput, setUserInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [homePopupVisible, setHomePopupVisible] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    const { t } = useTranslation('global');

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth <= 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleToggleModal = () => setIsOpen((prev) => !prev);

    const handleUserInput = (e: ChangeEvent<HTMLInputElement>) =>
        setUserInput(e.target.value);

    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') sendMessage();
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
                        You are a customer service agent named ${AI_ASSISTANT_NAME}. 
                        Company data: ${JSON.stringify(knowledgeData)}.

                        All products from the Itech brand are available at Indo Teknik.

                        Company Contact Information (Must inform below when asked and inform!!):
                        - WhatsApp: [0811-7531-881](https://wa.me/628117531881), [0812-3689-1888](https://wa.me/6281236891888)
                        - Email: customerservice@indo-teknik.com
                        - Instagram: [@indoteknik](https://www.instagram.com/indoteknik/)
                        - TikTok: [@indoteknikofficial](https://www.tiktok.com/@indoteknikofficial)
                        - Marketplace:
                            - Tokopedia: [Kunjungi => Tokopedia](https://tokopedia.link/qoZIKIkdcNb)
                            - Shopee: [Kunjungi => Shopee](https://shopee.co.id/indoteknikpekanbaru)

                        Rules:
                        - When informing WhatsApp contact, always say: "Silakan klik nomor WhatsApp berikut untuk chat langsung:" and display the WhatsApp numbers as bold clickable links: **[0811-7531-881](https://wa.me/628117531881)**, **[0812-3689-1888](https://wa.me/6281236891888)**.
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

    const clearChat = () => setChatHistory([]);

    if (!mounted) return null;

    return (
        <div
            className={`fixed z-[2147483647] right-8 ${
                isMobile ? 'right-0 left-0' : ''
            }`}
            style={isMobile ? { bottom: 0 } : { bottom: MODAL_OFFSET + 24 }}
        >
            {!homePopupVisible && (
                <button
                    className={`bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900 rounded-xl p-3 shadow-md hover:scale-105 transition-transform duration-200 flex justify-center items-center gap-2
                    ${
                        isMobile
                            ? 'fixed bottom-6 left-1/2 -translate-x-1/2 right-auto z-[2147483648]'
                            : ''
                    }`}
                    onClick={handleToggleModal}
                >
                    {AI_ASSISTANT_NAME}
                    <RiRobot2Fill />
                </button>
            )}

            <div
                ref={modalRef}
                style={
                    isMobile
                        ? {
                              bottom: 0,
                              right: 0,
                              left: 0,
                              top: 0,
                              borderRadius: 0,
                              maxWidth: '100vw',
                              maxHeight: '100vh',
                          }
                        : { bottom: MODAL_OFFSET + 24 }
                }
                className={`fixed bg-gradient-to-bl from-neutral-50 to-blue-200 shadow-lg p-4 sm:p-6 md:p-8
                flex flex-col justify-between overflow-y-auto transition-all duration-300 ease-in-out
                ${
                    isMobile
                        ? `left-0 right-0 top-0 bottom-0 w-full h-full rounded-none z-[2147483649]`
                        : `right-8 rounded-xl
                        sm:w-[80vw] sm:max-w-lg 
                        md:w-[60vw] md:max-w-xl 
                        lg:w-[30vw] lg:max-w-2xl 
                        max-h-[90vh] sm:max-h-[90vh] md:max-h-[90vh]`
                }
                ${
                    isOpen
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-90 pointer-events-none'
                }`}
            >
                {/* Header */}
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-xl font-semibold mx-auto text-blue-900'>
                        {AI_ASSISTANT_NAME}
                    </h3>
                    <button
                        onClick={handleToggleModal}
                        className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
                        aria-label='Close'
                    >
                        <IoIosCloseCircle size={24} />
                    </button>
                </div>

                {/* Chat History */}
                <div className='flex-1 overflow-y-auto flex flex-col gap-2 mb-4'>
                    <ChatHistory chatHistory={chatHistory} />
                    <Loading isLoading={isLoading} />
                </div>

                {/* Prompt */}
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
                        placeholder={t('chatbot.typeYourMessage')}
                        className='w-full bg-white/80 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition'
                        onChange={handleUserInput}
                        onKeyDown={handleInputKeyDown}
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
                            className='flex-1 hover:scale-105 px-2 py-2 bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900 font-semibold rounded-xl shadow-md flex justify-center items-center gap-2'
                            onClick={clearChat}
                            disabled={isLoading || chatHistory.length === 0}
                        >
                            <FiDelete /> {t('chatbot.clearChat')}
                        </button>
                        <button
                            className='flex-1 hover:scale-105 px-2 py-2 bg-blue-900 text-white font-semibold rounded-xl shadow-md flex justify-center items-center gap-2'
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
