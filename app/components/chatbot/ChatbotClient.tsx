'use client';
import { GoogleGenAI } from '@google/genai';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useRef, useEffect } from 'react';
import { IoIosCloseCircle, IoLogoWhatsapp } from 'react-icons/io';
import { IoChatbox } from 'react-icons/io5';

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
                    {message.type === 'user' && (
                        <span className='mr-2 font-bold text-gray-600'>
                            You: {message.text}
                        </span>
                    )}

                    <div>
                        <ReactMarkdown>{message.message}</ReactMarkdown>
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

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
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
                contents: [{ role: 'user', parts: [{ text: userInput }] }],
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

    const clearChat = () => {};

    return (
        <div className='fixed z-[2147483647] left-8 bottom-24'>
            {!homePopupVisible && (
                <button
                    className='bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900 rounded-xl p-3 shadow-md hover:scale-105 transition-transform duration-200 flex justify-center items-center gap-2'
                    onClick={handleToggleModal}
                >
                    Tanya AI <IoChatbox />
                </button>
            )}

            <div
                ref={modalRef}
                className={`fixed left-8 bottom-24 top-24 bg-gradient-to-bl from-neutral-50 to-blue-200 rounded-xl shadow-lg p-8 lg:w-1/5 space-y-2 transform transition-all duration-300 ease-in-out ${
                    isOpen
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-90 pointer-events-none'
                }`}
            >
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

                <div className='my-2 h-[400px] overflow-y-auto gap-2 flex flex-col'>
                    <ChatHistory chatHistory={chatHistory} />
                    <Loading isLoading={isLoading} />
                </div>

                <input
                    value={userInput}
                    type='text'
                    placeholder='Tulis pertanyaan...'
                    className='w-full border border-gray-300 p-2 mt-2 rounded-lg '
                    onChange={handleUserInput}
                />
                <div className='flex gap-4'>
                    <button
                        className='w-full bg-red-700 text-white p-2 mt-2 rounded-lg hover:bg-red-300'
                        onClick={clearChat}
                    >
                        Clear Message
                    </button>
                    <button
                        className='w-full bg-blue-900 text-white p-2 mt-2 rounded-lg hover:bg-blue-300'
                        onClick={sendMessage}
                        disabled={isLoading}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
