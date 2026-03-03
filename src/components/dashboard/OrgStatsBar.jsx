import { RefreshCw } from "lucide-react";

export default function OrgStatsBar() {
    const Item = ({ label, value }) => (
        <div className="flex items-center gap-1 whitespace-nowrap transition-colors duration-300 ease-in-out">
            <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                {label}:
            </span>
            <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
                {value}
            </span>
        </div>
    );

    const Divider = () => (
        <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 transition-colors duration-300" />
    );

    return (
        <div className="w-full flex items-center gap-10 text-sm pb-4 transition-colors duration-300 ease-in-out">
            <Item label="Org" value="Project X" />
            <Divider />

            <Item label="Owner" value="Nammagiri" />
            <Divider />

            <Item label="Total Scans" value="100" />
            <Divider />

            <Item label="Scheduled" value="1000" />
            <Divider />

            <Item label="Rescans" value="100" />
            <Divider />

            <Item label="Failed Scans" value="100" />

            {/* Right side */}
            <div className="ml-auto flex items-center gap-2 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                <RefreshCw
                    size={14}
                    className="text-[#0CC8A8] transition-transform duration-300 hover:rotate-180"
                />
                <span className="text-xs transition-colors duration-300">
                    10 mins ago
                </span>
            </div>
        </div>
    );
}