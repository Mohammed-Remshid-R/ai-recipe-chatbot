import { useState, useEffect } from "react";
import axios from "axios";
import { Send } from "lucide-react";

import Navbar from "./components/Navbar";
import ChatBubble from "./components/ChatBubble";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import CategoryFilter from "./components/CategoryFilter";

function App() {

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFresh, setIsFresh] = useState(false);

    const [history, setHistory] = useState(
        JSON.parse(localStorage.getItem("history")) || []
    );

    useEffect(() => {
        localStorage.setItem("history", JSON.stringify(history));
    }, [history]);

    const sendMessage = async (overrideMessage) => {
        const msgToSend = overrideMessage || message;
        if (!msgToSend) return;

        const userMessage = {
            sender: "user",
            text: msgToSend
        };

        setChat((prev) => [...prev, userMessage]);
        
        if (!history.includes(msgToSend)) {
            setHistory((prev) => [msgToSend, ...prev]);
        }

        setLoading(true);
        if (!overrideMessage) setMessage("");

        try {
            const response = await axios.post("/chat", { message: msgToSend });
            const botMessage = {
                sender: "bot",
                text: response.data.reply
            };
            setChat((prev) => [...prev, botMessage]);
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <div data-theme={isFresh ? "fresh" : "classic"}>
            <div className="flex bg-[var(--brand-page)] text-gray-800 h-screen overflow-hidden font-sans transition-all duration-500">

                <Sidebar 
                    history={history} 
                    setHistory={setHistory} 
                    setMessage={sendMessage} 
                />

                <div className="flex-1 flex flex-col p-8 h-full">
                    
                    <Navbar 
                        isFresh={isFresh} 
                        setIsFresh={setIsFresh} 
                    />

                    <CategoryFilter setMessage={sendMessage} />

                    <div className="flex-1 overflow-y-auto space-y-4 mb-8 pr-4 custom-scrollbar">
                        {chat.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                <h3 className="text-xl font-medium">Ready to cook something delicious?</h3>
                                <p>Select a category or ask me for a recipe!</p>
                            </div>
                        )}
                        {chat.map((msg, index) => (
                            <ChatBubble
                                key={index}
                                sender={msg.sender}
                                text={msg.text}
                            />
                        ))}
                        {loading && <Loader />}
                    </div>

                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask for recipes..."
                            className="flex-1 p-6 pr-32 rounded-[2rem] bg-white border border-[var(--brand-border)] shadow-sm focus:shadow-md focus:border-[var(--brand-main)] outline-none transition-all text-lg"
                        />
                        <button
                            onClick={() => sendMessage()}
                            className="absolute right-2 bg-[var(--brand-main)] hover:brightness-95 text-white px-8 py-4 rounded-[1.5rem] flex items-center gap-2 transition-all shadow-lg active:scale-95"
                        >
                            <Send size={20} />
                            <span className="font-bold">Send</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;