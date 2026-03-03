export default function SeverityCard({
    title,
    count,
    change,
    changeType = "increase", // "increase" | "decrease"
    icon,
    iconBg,
}) {
    const changeColor =
        changeType === "increase" ? "text-red-500" : "text-green-500";

    return (
        <div
            className="
    w-full
    bg-white dark:bg-[#111827]
    border border-gray-200 dark:border-gray-800
    rounded-2xl
    p-6
    transition-all duration-300 ease-in-out
  "
        >
            {/* Top Row */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                    {title}
                </span>

                <div
                    className={`
            w-10 h-10
            rounded-md
            flex items-center justify-center
            ${iconBg}
          `}
                >
                    {icon}
                </div>
            </div>
            <div className="flex items-end gap-3">
                {/* Count */}
                <div className="text-3xl font-semibold text-gray-900 dark:text-white">
                    {count}
                </div>

                {/* Change */}
                <div className={`mb-[5px] text-xs font-medium ${changeColor}`}>
                    {change}
                </div>
            </div>
        </div>
    );
}
