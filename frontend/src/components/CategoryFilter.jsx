import { Sun, UtensilsCrossed, ChefHat, Cake, Leaf, Flame } from "lucide-react";

function CategoryFilter({ setMessage }) {

    const categories = [
        { name: "Breakfast", icon: <Sun size={18} className="text-yellow-500" />, bg: "bg-yellow-50" },
        { name: "Lunch", icon: <UtensilsCrossed size={18} className="text-green-500" />, bg: "bg-green-50" },
        { name: "Dinner", icon: <ChefHat size={18} className="text-orange-500" />, bg: "bg-orange-50" },
        { name: "Dessert", icon: <Cake size={18} className="text-pink-500" />, bg: "bg-pink-50" },
        { name: "Healthy", icon: <Leaf size={18} className="text-emerald-500" />, bg: "bg-emerald-50" },
        { name: "Spicy", icon: <Flame size={18} className="text-red-500" />, bg: "bg-red-50" }
    ];

    return (
        <div className="flex gap-3 flex-wrap mb-8">

            {categories.map((cat) => (

                <button
                    key={cat.name}
                    onClick={() => setMessage(cat.name)}
                    className={`flex items-center gap-2 ${cat.bg} border border-transparent hover:border-gray-200 px-5 py-3 rounded-2xl font-medium text-gray-700 transition-all hover:shadow-sm`}
                >
                    {cat.icon}
                    {cat.name}
                </button>

            ))}

        </div>
    );
}

export default CategoryFilter;