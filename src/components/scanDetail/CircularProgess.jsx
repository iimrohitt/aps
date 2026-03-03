export default function CircularProgress({ value = 0 }) {
    return (
        <div className="flex items-center justify-center w-28 h-28">
            <div className="relative w-24 h-24">
                <div className="absolute inset-[5px] rounded-full bg-[#0B1220] flex flex-col items-center justify-center">
                    <span className="text-xl font-semibold text-[#0CC8A8]">
                        {value}%
                    </span>
                    <span className="text-[10px] text-gray-400">
                        In Progress
                    </span>
                </div>
            </div>
        </div>
    );
}