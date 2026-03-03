import { Home, ChevronRight } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
    return (
        <header className="h-16 px-6 flex items-center justify-between 
                       border-b border-gray-200 dark:border-gray-800 
                       bg-white dark:bg-[#0F172A]  transition-colors duration-300">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm 
                      text-gray-500 dark:text-gray-400">
                <span className="font-semibold mr-2 text-lg text-gray-900 dark:text-white">
                    Scan
                </span>

                <Home size={14} className="text-gray-400" />

                <ChevronRight size={14} className="text-gray-400" />

                <span>Private Assets</span>

                <ChevronRight size={14} className="text-gray-400" />

                <span className="text-[#0CC8A8] font-medium">
                    New Scan
                </span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm border 
                           border-gray-300 dark:border-gray-700
                           rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                    Export Report
                </button>

                <button className="px-4 py-2 text-sm 
                           bg-red-500 text-white 
                           rounded-md hover:bg-red-600 transition">
                    Stop Scan
                </button>

                <ThemeToggle />
            </div>
        </header>
    );
}