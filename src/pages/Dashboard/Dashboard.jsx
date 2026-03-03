import OrgStatsBar from '../../components/dashboard/OrgStatsBar'
import ScanTable from '../../components/dashboard/ScanTable'
import StatsBar from '../../components/dashboard/Statsbar'
import AppLayout from '../../components/layout/AppLayout'

const Dashboard = () => {
    return (
        <AppLayout>
            <OrgStatsBar />
            <StatsBar />
            <div className="flex-1 mt-8 overflow-hidden">
                <ScanTable />
            </div>
        </AppLayout>
    )
}

export default Dashboard
