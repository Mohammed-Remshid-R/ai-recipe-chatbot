import { ChefHat, CheckCheck } from "lucide-react";
import ReactMarkdown from "react-markdown";

function ChatBubble({ sender, text }) {
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (sender === "user") {
        return (
            <div className="flex flex-col items-end mb-6 animate-in slide-in-from-right-4 duration-300">
                <div className="bg-[var(--brand-main)] text-white p-4 rounded-3xl rounded-tr-none max-w-[80%] shadow-md transition-colors duration-500">
                    <p className="text-lg">{text}</p>
                    <div className="flex items-center justify-end gap-1 mt-2 text-xs text-white/80 transition-colors duration-500">
                        <span>{time}</span>
                        <CheckCheck size={14} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-4 mb-8 animate-in slide-in-from-left-4 duration-300">
            <div className="w-12 h-12 bg-white border-2 border-[var(--brand-main)] rounded-full flex items-center justify-center shrink-0 shadow-sm transition-colors duration-500">
                <ChefHat className="text-[var(--brand-main)] w-7 h-7 transition-colors duration-500" />
            </div>
            <div className="bg-[var(--brand-bg)] border border-[var(--brand-border)] p-6 rounded-[2rem] rounded-tl-none shadow-sm flex-1 max-w-[85%] transition-colors duration-500">
                <div className="prose prose-orange dark:prose-emerald prose-lg">
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
                <div className="text-xs text-gray-400 mt-4 text-right">
                    {time}
                </div>
            </div>
        </div>
    );
}

export default ChatBubble;