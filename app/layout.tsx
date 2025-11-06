import './globals.css';
import Header from './components/header/page';
import Footer from './components/footer/page';
import I18nProvider from './i18nextProvider';
import Head from 'next/head';

export const metadata = {
    title: 'Indo Teknik',
    description:
        'Jika Anda mencari spare part diesel berkualitas, Indo Teknik adalah pilihan terbaik. Tersedia berbagai merk part diesel. Jangan ragu untuk menghubungi Indo Teknik dan konsultasikan kebutuhan Anda. Hubungi Indo Teknik sekarang juga untuk informasi lebih lanjut.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='id'>
            <Head>
                <meta property="og:title" content="Indo Teknik" />
                <meta property="og:description" content="Jika Anda mencari spare part diesel berkualitas, Indo Teknik adalah pilihan terbaik. Tersedia berbagai merk part diesel. Jangan ragu untuk menghubungi Indo Teknik dan konsultasikan kebutuhan Anda. Hubungi Indo Teknik sekarang juga untuk informasi lebih lanjut." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://indo-teknik.com/" />
                <meta property="og:image" content="https://res.cloudinary.com/dcbryptkx/image/upload/w_500/v1729242284/cp-indoteknik-v3/logo/Logoss_ifnfyn_whkos3.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Indo Teknik" />
                <meta name="twitter:description" content="Jika Anda mencari spare part diesel berkualitas, Indo Teknik adalah pilihan terbaik. Tersedia berbagai merk part diesel. Jangan ragu untuk menghubungi Indo Teknik dan konsultasikan kebutuhan Anda. Hubungi Indo Teknik sekarang juga untuk informasi lebih lanjut." />
                <meta name="twitter:image" content="https://res.cloudinary.com/dcbryptkx/image/upload/w_500/v1729242284/cp-indoteknik-v3/logo/Logoss_ifnfyn_whkos3.png" />
            </Head>
            <body className='bg-gradient-to-bl from-neutral-50 to-blue-200 pb-1'>
                <I18nProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}
