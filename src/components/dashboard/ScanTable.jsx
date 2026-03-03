import { Search, Filter, Columns, Plus } from "lucide-react";
import ScanRow from "./ScanRow";
import { scans } from "../../data/scans"

export default function ScanTable() {
    return (
        <div className="mt-2">

            {/* Toolbar */}
            <div className="flex items-center gap-3 mb-4">

                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                    <input
                        placeholder="Search scans by name or type..."
                        className="
              w-full pl-9 pr-3 py-2 text-sm
              rounded-lg
              border border-gray-200 dark:border-gray-700
              bg-white dark:bg-[#111827]
              focus:outline-none focus:ring-1 focus:ring-[#0CC8A8]
              transition-colors duration-300
            "
                    />
                </div>

                <button className="px-3 py-2 text-sm border rounded-lg flex items-center gap-2
                          border-gray-200 dark:border-gray-700
                          hover:bg-gray-100 dark:hover:bg-gray-800
                          transition-colors duration-300">
                    <Filter size={14} />
                    Filter
                </button>

                <button className="px-3 py-2 text-sm border rounded-lg flex items-center gap-2
                          border-gray-200 dark:border-gray-700
                          hover:bg-gray-100 dark:hover:bg-gray-800
                          transition-colors duration-300">
                    <Columns size={14} />
                    Column
                </button>

                <button className="px-4 py-2 text-sm rounded-lg bg-[#0CC8A8] text-white flex items-center gap-2 hover:opacity-90 transition">
                    <Plus size={14} />
                    New Scan
                </button>
            </div>

            {/* Table */}
            <div className="
        overflow-auto
        max-h-[330px]
        rounded-xl
        border border-gray-200 dark:border-gray-800
        bg-white dark:bg-[#111827]
        transition-colors duration-300
      ">

                <table className="w-full text-sm">
                    <thead className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
                        <tr>
                            <th className="text-left text-[12px] px-6 py-3 font-medium">Scan Name</th>
                            <th className="text-left text-[12px] px-6 py-3 font-medium">Type</th>
                            <th className="text-left text-[12px] px-6 py-3 font-medium">Status</th>
                            <th className="text-left text-[12px] px-6 py-3 font-medium">Progress</th>
                            <th className="text-left text-[12px] px-6 py-3 font-medium">Vulnerability</th>
                            <th className="text-left text-[12px] px-6 py-3 font-medium">Last Scan</th>
                        </tr>
                    </thead>

                    <tbody>
                        {scans.map(scan => (
                            <ScanRow key={scan.id} scan={scan} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}