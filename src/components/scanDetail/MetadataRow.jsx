export default function MetadataRow() {
    return (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 grid grid-cols-6 gap-10 text-sm">
            <Meta label="Scan Type" value="Grey Box" />
            <Meta label="Targets" value="google.com" />
            <Meta label="Started At" value="Nov 22, 09:00AM" />
            <Meta label="Credentials" value="2 Active" />
            <Meta label="Files" value="Control.pdf" />
            <Meta label="Checklists" value="40/350" highlight />
        </div>
    );
}

function Meta({ label, value, highlight }) {
    return (
        <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
                {label}
            </div>
            <div
                className={`font-semibold ${highlight ? "text-[#0CC8A8]" : ""
                    }`}
            >
                {value}
            </div>
        </div>
    );
}