import AppLayout from "../../components/layout/AppLayout";
import CircularProgress from "../../components/scanDetail/CircularProgess";
import StepTracker from "../../components/scanDetail/StepTracker";
import MetadataRow from "../../components/scanDetail/MetadataRow";
import LiveConsole from "../../components/scanDetail/LiveConsole";


export default function ScanDetail() {
    return (
        <AppLayout>
            <div className="flex flex-col gap-6 h-full">

                {/* Top Section */}
                <div className="flex  border border-gray-200  transition-colors duration-300 dark:border-gray-700 pt-3 pb-7 px-3 rounded-md flex-col xl:flex-row gap-6">

                    <div className="flex w-full items-center gap-8">
                        <CircularProgress progress={42} />
                        <div
                            className="
    w-full
    border-l
    border-gray-200 dark:border-gray-700
    pl-10
    transition-colors duration-300
  "
                        >
                            <StepTracker />
                            <MetadataRow />
                        </div>
                    </div>

                </div>

                <LiveConsole />
                {/* Bottom Split */}


            </div>
        </AppLayout>
    );
}