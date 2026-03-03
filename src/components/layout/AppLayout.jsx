import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F172A] text-gray-900 dark:text-gray-200 transition-colors duration-300 overflow-hidden">

            <Sidebar />

            <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}