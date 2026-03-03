// export default function LiveConsole() {
//     return (
//         <div className="
//       flex flex-col
//       rounded-xl
//       border border-gray-200 dark:border-gray-800
//       bg-white dark:bg-[#111827]
//       transition-colors duration-300
//       h-full
//       overflow-hidden
//     ">

//             {/* Top Header */}
//             <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800">
//                 <div className="flex items-center gap-3">
//                     <div className="w-2 h-2 rounded-full bg-[#0CC8A8]" />
//                     <span className="text-sm font-medium">
//                         Live Scan Console
//                     </span>
//                     <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-gray-500">
//                         Running...
//                     </span>
//                 </div>

//                 <div className="flex items-center gap-4 text-gray-400 text-sm">
//                     <span>˄</span>
//                     <span>✕</span>
//                 </div>
//             </div>

//             {/* Content Split */}
//             <div className="flex flex-1 overflow-hidden">

//                 {/* LEFT SIDE */}
//                 <div className="flex flex-col flex-[2]">

//                     {/* Tabs */}
//                     <div className="flex gap-6 px-5 pt-4 text-sm border-b border-gray-200 dark:border-gray-800">
//                         <button className="pb-2 border-b-2 border-[#0CC8A8] text-[#0CC8A8]">
//                             Activity Log
//                         </button>
//                         <button className="pb-2 text-gray-500 dark:text-gray-400">
//                             Verification Loops
//                         </button>
//                     </div>

//                     {/* Console Body */}
//                     <div className="
//             flex-1
//             px-5 py-4
//             font-mono text-[12px]
//             text-gray-700 dark:text-gray-300
//             overflow-y-auto
//           ">
//                         <p>[09:00:00] I'll begin a systematic penetration test on <span className="text-[#0CC8A8]">helpdesk.democorp.com</span>.</p>
//                         <br />
//                         <p>[09:02:00] Excellent reconnaissance results:</p>
//                         <p className="ml-4 text-gray-500">| - Apache httpd 2.4.65 on port 80</p>
//                         <br />
//                         <p>[09:03:00] Found login page.</p>
//                         <p>[09:06:00] Accessed dashboard using <span className="bg-[#0CC8A8]/20 text-[#0CC8A8] px-1 rounded">X-UserId: 10032</span></p>
//                         <p>This suggests an <span className="text-red-500 font-medium">IDOR vulnerability</span>.</p>
//                     </div>

//                 </div>

//                 {/* RIGHT SIDE */}
//                 <div className="flex flex-col flex-1 border-l border-gray-200 dark:border-gray-800">

//                     {/* Right Header */}
//                     <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-800 text-sm font-medium">
//                         Finding Log
//                     </div>

//                     {/* Findings */}
//                     <div className="flex-1 p-5 space-y-4 overflow-y-auto">

//                         <FindingCard
//                             severity="Critical"
//                             title="SQL Injection in Authentication Endpoint"
//                         />

//                         <FindingCard
//                             severity="High"
//                             title="Unauthorized Access to User Metadata"
//                         />

//                         <FindingCard
//                             severity="Medium"
//                             title="Broken Authentication Rate Limiting"
//                         />

//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// }

// function FindingCard({ severity, title }) {
//     const severityStyles = {
//         Critical: "bg-red-500 text-white",
//         High: "bg-orange-500 text-white",
//         Medium: "bg-yellow-500 text-white",
//     };

//     return (
//         <div className="
//       p-4
//       rounded-lg
//       border border-gray-200 dark:border-gray-800
//       bg-gray-50 dark:bg-[#0F172A]
//     ">
//             <div className="flex justify-between items-center mb-2">
//                 <span className={`text-xs px-2 py-1 rounded-full ${severityStyles[severity]}`}>
//                     {severity}
//                 </span>
//                 <span className="text-xs text-gray-400">10:45:23</span>
//             </div>

//             <h4 className="text-sm font-medium mb-1">
//                 {title}
//             </h4>

//             <p className="text-xs text-[#0CC8A8] mb-2">
//                 /api/example/endpoint
//             </p>

//             <p className="text-xs text-gray-500 dark:text-gray-400">
//                 Detailed vulnerability description here.
//             </p>
//         </div>
//     );
// }

import {
    Circle,
    ChevronUp,
    X,
    Activity,
    FileSearch
} from "lucide-react";

export default function LiveConsole() {
    return (
        <div className="
      flex flex-col
      rounded-xl
      border border-gray-200 dark:border-gray-800
      bg-white dark:bg-[#111827]
      transition-all duration-300
      h-full
      overflow-hidden
    ">

            {/* HEADER */}
            <div className="
        flex items-center justify-between
        px-6 py-4
        border-b border-gray-200 dark:border-gray-800
        transition-colors duration-300
      ">
                <div className="flex items-center gap-3">
                    <Circle size={8} fill="#0CC8A8" className="text-[#0CC8A8]" />

                    <span className="text-sm font-medium">
                        Live Scan Console
                    </span>

                    <span className="
            text-xs
            bg-gray-100 dark:bg-gray-800
            text-gray-500
            px-2 py-1 rounded-full
            transition-colors duration-300
          ">
                        Running...
                    </span>
                </div>

                <div className="flex items-center gap-4 text-gray-400">
                    <ChevronUp size={16} className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
                    <X size={16} className="cursor-pointer hover:text-red-500 transition-colors" />
                </div>
            </div>

            {/* BODY SPLIT */}
            <div className="flex flex-1 overflow-hidden">

                {/* LEFT SIDE */}
                <div className="flex flex-col flex-[2]">

                    {/* TABS */}
                    <div className="
            flex items-center gap-6
            px-6 pt-[18px]
            text-sm
            border-b border-gray-200 dark:border-gray-800
            transition-colors duration-300
          ">
                        <button className="
              pb-3
              border-b-2 border-[#0CC8A8]
              text-[#0CC8A8]
              transition-all duration-300
            ">
                            <div className="flex items-center gap-2">
                                <Activity size={14} />
                                Activity Log
                            </div>
                        </button>

                        <button className="
              pb-3
              text-gray-500 dark:text-gray-400
              hover:text-gray-700 dark:hover:text-white
              transition-colors duration-300
            ">
                            Verification Loops
                        </button>
                    </div>

                    {/* CONSOLE */}
                    <div className="
            flex-1
            px-6 py-5
            font-mono text-[12px]
            text-gray-700 dark:text-gray-300
            overflow-y-auto
            transition-colors duration-300
          ">
                        <p className="mb-3">
                            [09:00:00] I'll begin a systematic penetration test on
                            <span className="text-[#0CC8A8] ml-1">
                                helpdesk.democorp.com
                            </span>.
                        </p>

                        <p className="mb-3">
                            [09:02:00] Excellent reconnaissance results:
                        </p>

                        <p className="ml-5 text-gray-500 mb-3">
                            | - Apache httpd 2.4.65 on port 80
                        </p>

                        <p className="mb-3">
                            [09:06:00] Accessed dashboard using
                            <span className="bg-[#0CC8A8]/20 text-[#0CC8A8] px-1 rounded ml-1">
                                X-UserId: 10032
                            </span>
                        </p>

                        <p>
                            This suggests an
                            <span className="text-red-500 font-medium ml-1">
                                IDOR vulnerability
                            </span>.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="
          flex flex-col flex-1
          border-l border-gray-200 dark:border-gray-800
          transition-colors duration-300
        ">

                    {/* RIGHT HEADER */}
                    <div className="
            px-6 py-4
            border-b border-gray-200 dark:border-gray-800
            text-sm font-medium
            transition-colors duration-300
          ">
                        <div className="flex items-center gap-2">
                            <FileSearch size={16} />
                            Finding Log
                        </div>
                    </div>

                    {/* FINDINGS */}
                    <div className="flex-1 p-6 space-y-4 overflow-y-auto max-h-[300px]">
                        <FindingCard severity="Critical" />
                        <FindingCard severity="High" />
                        <FindingCard severity="Medium" />
                    </div>
                </div>

            </div>
        </div>
    );
}

function FindingCard({ severity }) {
    const severityStyles = {
        Critical: "bg-red-500 text-white",
        High: "bg-orange-500 text-white",
        Medium: "bg-yellow-500 text-white",
    };

    return (
        <div className="
      p-5
      rounded-lg
      border border-gray-200 dark:border-gray-800
      bg-gray-50 dark:bg-[#0F172A]
      transition-all duration-300
      hover:shadow-md
    ">
            <div className="flex justify-between items-center mb-3">
                <span className={`text-xs px-2 py-1 rounded-full ${severityStyles[severity]}`}>
                    {severity}
                </span>
                <span className="text-xs text-gray-400">10:45:23</span>
            </div>

            <h4 className="text-sm font-medium mb-2">
                Sample Vulnerability Title
            </h4>

            <p className="text-xs text-[#0CC8A8] mb-2">
                /api/example/endpoint
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
                Detailed vulnerability description here.
            </p>
        </div>
    );
}