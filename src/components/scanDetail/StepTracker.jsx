import {
    Search,
    GitBranch,
    FlaskConical,
    CheckCircle2,
    FileText,
} from "lucide-react";

export default function StepTracker({ activeStep = 0 }) {
    const steps = [
        { label: "Spidering", icon: Search },
        { label: "Mapping", icon: GitBranch },
        { label: "Testing", icon: FlaskConical },
        { label: "Validating", icon: CheckCircle2 },
        { label: "Reporting", icon: FileText },
    ];

    return (
        <div className="flex flex-col w-full">
            <div className="relative flex items-center justify-between">

                {/* Connecting Line */}
                <div className="absolute top-4 left-0 right-0 h-[2px] bg-gray-200 dark:bg-gray-700" />

                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index === activeStep;
                    const isCompleted = index < activeStep;

                    return (
                        <div
                            key={step.label}
                            className="relative flex flex-col items-center z-10"
                        >
                            <div
                                className={`
                  w-9 h-9 rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${isActive
                                        ? "bg-[#0CC8A8] text-white shadow-lg shadow-[#0CC8A8]/30"
                                        : isCompleted
                                            ? "bg-[#0CC8A8]/20 text-[#0CC8A8]"
                                            : "bg-white dark:bg-[#0F172A] border border-gray-300 dark:border-gray-700 text-gray-400"
                                    }
                `}
                            >
                                <Icon size={16} />
                            </div>

                            <span
                                className={`mt-2 text-xs ${isActive
                                    ? "text-[#0CC8A8]"
                                    : isCompleted
                                        ? "text-[#0CC8A8]"
                                        : "text-gray-500 dark:text-gray-400"
                                    }`}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}