import './globals.css';
import Header from './components/header/page';
import Footer from './components/footer/page';
import I18nProvider from './i18nextProvider';
import WebVitalsReporter from './WebVitalsReporter';
import ContactModal from './components/contact-modal/page';
import { GoogleAnalytics } from '@next/third-parties/google';
import ChatbotPage from './components/chatbot/page';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='id'>
            <body className='bg-gradient-to-bl from-neutral-50 to-blue-200 pb-1'>
                <WebVitalsReporter />
                <I18nProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    {/* <ContactModal /> */}
                    <ChatbotPage />
                </I18nProvider>
                <GoogleAnalytics gaId='G-HWTRNMB1SN' />
            </body>
        </html>
    );
}
