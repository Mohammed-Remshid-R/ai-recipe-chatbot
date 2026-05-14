import { ChefHat, History, Trash2, Clock } from "lucide-react";

function Sidebar({ history, setHistory, setMessage }) {

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem("history");
    };

    return (
        <div className="w-80 bg-[var(--brand-bg)] border-r border-[var(--brand-border)] flex flex-col h-full relative transition-all duration-500">
            
            {/* Logo */}
            <div className="p-8 flex items-center gap-3">
                <div className="bg-[var(--brand-main)] p-2 rounded-2xl transition-colors duration-500">
                    <ChefHat className="text-white w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">
                    AI Recipe <span className="text-[var(--brand-main)] transition-colors duration-500">Chatbot</span>
                </h1>
            </div>

            <div className="px-6 py-4 border-t border-[var(--brand-border)] sm:block">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-[var(--brand-text)] font-semibold transition-colors duration-500">
                        <History size={20} />
                        <span>Search History</span>
                    </div>
                    <button 
                        onClick={clearHistory}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

                <div className="space-y-3 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
                    {history.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setMessage(item)}
                            className="w-full flex items-center gap-3 bg-white border border-[var(--brand-border)] p-3 rounded-2xl text-gray-600 hover:border-[var(--brand-main)] hover:shadow-sm transition-all text-left group"
                        >
                            <Clock size={16} className="text-gray-400 group-hover:text-[var(--brand-main)] transition-colors duration-500" />
                            <span className="truncate">{item}</span>
                        </button>
                    ))}
                    {history.length === 0 && (
                        <p className="text-gray-400 text-sm text-center py-4">No history yet</p>
                    )}
                </div>
            </div>

            {/* Bottom Decoration */}
            <div className="mt-auto pointer-events-none relative h-80 overflow-hidden">
                <img 
                    src="/biriyani_plate.png" 
                    alt="Food decoration" 
                    className="absolute bottom-0 left-0 w-full object-cover object-bottom opacity-90 scale-125 origin-bottom-left"
                />
            </div>
        </div>
    );
}

export default Sidebar;