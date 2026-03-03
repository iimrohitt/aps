export default function ScanRow({ scan }) {
    const statusColor = {
        Completed: "bg-green-100 text-green-600 dark:bg-green-500/20",
        Scheduled: "bg-gray-100 text-gray-600 dark:bg-gray-500/20",
        Failed: "bg-red-100 text-red-600 dark:bg-red-500/20",
    };

    return (
        <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#0F172A] transition-colors duration-200">
            <td className="px-6 py-4 font-medium">
                {scan.name}
            </td>

            <td className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">
                {scan.type}
            </td>

            <td className="px-6 py-4">
                <span
                    className={`px-3 py-1 text-xs rounded-md font-medium ${statusColor[scan.status]}`}
                >
                    {scan.status}
                </span>
            </td>

            <td className="px-6 py-4 w-48">
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                        style={{ width: `${scan.progress}%` }}
                        className="h-2 bg-[#0CC8A8] transition-all duration-500"
                    />
                </div>
            </td>

            <td className="px-6 py-4 flex gap-2">
                <Badge color="bg-red-500" value={scan.vulnerabilities.critical} />
                <Badge color="bg-orange-500" value={scan.vulnerabilities.high} />
                <Badge color="bg-yellow-500" value={scan.vulnerabilities.medium} />
                <Badge color="bg-green-500" value={scan.vulnerabilities.low} />
            </td>

            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                {scan.lastScan}
            </td>
        </tr>
    );
}

function Badge({ color, value }) {
    return (
        <span className={`px-2 py-1 text-xs text-white rounded-md ${color}`}>
            {value}
        </span>
    );
}