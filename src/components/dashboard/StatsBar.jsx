import { AlertCircle, AlertTriangle, ShieldAlert, Search } from "lucide-react";
import SeverityCard from "./SeverityCard";

export default function StatsBar() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-4 transition-all duration-300 ease-in-out">

            <SeverityCard
                title="Critical Severity"
                count="86"
                change="+2% increase than yesterday"
                changeType="increase"
                icon={<AlertCircle size={18} className="text-red-500" />}
                iconBg="bg-red-500/15"
            />

            <SeverityCard
                title="High Severity"
                count="16"
                change="+0.9% increase than yesterday"
                changeType="increase"
                icon={<AlertTriangle size={18} className="text-orange-500" />}
                iconBg="bg-orange-500/15"
            />

            <SeverityCard
                title="Medium Severity"
                count="26"
                change="-0.9% decrease than yesterday"
                changeType="decrease"
                icon={<ShieldAlert size={18} className="text-yellow-500" />}
                iconBg="bg-yellow-500/20"
            />

            <SeverityCard
                title="Low Severity"
                count="16"
                change="+0.9% increase than yesterday"
                changeType="increase"
                icon={<Search size={18} className="text-blue-500" />}
                iconBg="bg-blue-500/15"
            />
        </div>
    );
}