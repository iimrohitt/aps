import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Folder,
    Scan,
    Calendar,
    Bell,
    Settings,
    LifeBuoy,
    ChevronRight
} from "lucide-react";

const topNav = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard, enabled: true },
    { label: "Projects", path: "/projects", icon: Folder, enabled: false },
    { label: "Scans", path: "/scan/scan-1", icon: Scan, enabled: true },
    { label: "Schedule", path: "/schedule", icon: Calendar, enabled: false },
];

const bottomNav = [
    { label: "Notifications", path: "/notifications", icon: Bell, enabled: false },
    { label: "Settings", path: "/settings", icon: Settings, enabled: false },
    { label: "Support", path: "/support", icon: LifeBuoy, enabled: false },
];

export default function Sidebar() {
    return (
        <aside className="w-64  h-screen bg-white dark:bg-[#0F172A]  transition-colors duration-300 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between">

            <div className="">
                {/* Logo */}
                <div className="px-6 pt-4 cursor-pointer pb-10 flex items-center gap-2">
                    <div className="w-5 h-5 flex justify-center items-center rounded-full bg-[#0CC8A8]">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        aps
                    </span>
                </div>

                {/* Top Nav */}
                <nav className="px-3 space-y-1">
                    {topNav.map((item) => {
                        const Icon = item.icon;

                        if (!item.enabled) {
                            return (
                                <div
                                    key={item.label}
                                    className="
                  flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium
                  text-gray-400 dark:text-gray-600
                  cursor-not-allowed opacity-60
                "
                                >
                                    <Icon size={18} />
                                    {item.label}
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition
                ${isActive
                                        ? "bg-teal-500/10 text-teal-500"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`
                                }
                            >
                                <Icon size={18} />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Divider after Schedule */}
                <div className="my-8 border-t border-gray-200 dark:border-gray-800  transition-colors duration-300" />

                {/* Bottom Nav */}
                <nav className="px-3 space-y-1">
                    {bottomNav.map((item) => {
                        const Icon = item.icon;

                        // Disabled Item
                        if (!item.enabled) {
                            return (
                                <div
                                    key={item.label}
                                    className="
            flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium
            text-gray-400 dark:text-gray-600
            cursor-not-allowed opacity-60
          "
                                >
                                    <Icon size={18} />
                                    {item.label}
                                </div>
                            );
                        }

                        // Enabled Item
                        return (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
          ${isActive
                                        ? "bg-teal-500/10 text-teal-500"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`
                                }
                            >
                                <Icon size={18} />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>

            {/* Profile Section */}
            <div className="border-t border-gray-200 dark:border-gray-800 p-4  transition-colors duration-300">
                <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition">

                    <div className="flex items-center gap-3">
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="avatar"
                            className="w-9 h-9 rounded-full"
                        />
                        <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                admin@edu.com
                            </div>

                            <div className="text-sm font-medium text-gray-900 dark:text-white  transition-colors duration-300">
                                Security Lead
                            </div>
                        </div>
                    </div>

                    <ChevronRight size={16} className="text-gray-400" />
                </div>
            </div>
        </aside>
    );
}