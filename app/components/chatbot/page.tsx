import ChatBotClient from './ChatbotClient';
import data from '../../translations/id/global.json';
import allItechProducts from '../../data/allItechProducts/allProducts.json';


export default function ChatbotPage() {
    return <ChatBotClient data={data} allItechProducts={allItechProducts} />;
}
