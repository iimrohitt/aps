import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
    const { dark, setDark } = useContext(ThemeContext);

    return (
        <button
            onClick={() => setDark(!dark)}
            className={`relative w-14 h-8 flex items-center rounded-full p-1 
        transition-all duration-300
        ${dark
                    ? "bg-[#0CC8A8]/20 border border-[#0CC8A8]"
                    : "bg-gray-300 border border-gray-300"
                }`}
        >
            <div
                className={`flex items-center justify-center w-6 h-6 rounded-full 
          shadow-md transform transition-all duration-300
          ${dark
                        ? "translate-x-6 bg-[#0CC8A8] text-white"
                        : "translate-x-0 bg-white text-[#0CC8A8]"
                    }`}
            >
                {dark ? <Moon size={14} /> : <Sun size={14} />}
            </div>
        </button>
    );
};

export default ThemeToggle;