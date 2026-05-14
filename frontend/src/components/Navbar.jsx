import { ChefHat, Sparkles, Moon, Sun } from "lucide-react";

function Navbar({ isFresh, setIsFresh }) {

    return (
        <div className="flex justify-between items-center mb-8">

            <div className="flex items-center gap-3">
                <div className="bg-[var(--brand-main)] p-2 rounded-2xl sm:hidden transition-colors duration-500">
                    <ChefHat className="text-white w-6 h-6" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    AI Recipe <span className="text-[var(--brand-main)] transition-colors duration-500">Chatbot</span>
                    <Sparkles className="text-[var(--brand-light)] w-6 h-6 transition-colors duration-500" />
                </h1>
            </div>

            <button
                onClick={() => setIsFresh(!isFresh)}
                className="flex items-center gap-2 bg-white border border-[var(--brand-border)] px-5 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all text-gray-600 font-medium"
            >
                {isFresh ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} />}
                <span>{isFresh ? "Classic Theme" : "Fresh Theme"}</span>
            </button>

        </div>
    );
}

export default Navbar;