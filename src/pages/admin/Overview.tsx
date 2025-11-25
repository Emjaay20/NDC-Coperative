
import { coopStats } from '../../data/mockData';

const AdminOverview = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                    <p className="text-gray-500 mb-1">Total Assets</p>
                    <h2 className="text-2xl font-bold text-slate-800">{coopStats.totalAssets}</h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                    <p className="text-gray-500 mb-1">Monthly Inflow</p>
                    <h2 className="text-2xl font-bold text-green-600">{coopStats.monthlyInflow}</h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                    <p className="text-gray-500 mb-1">Total Loans</p>
                    <h2 className="text-2xl font-bold text-slate-800">{coopStats.totalLoansGiven}</h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                    <p className="text-gray-500 mb-1">Pending Requests</p>
                    <h2 className="text-2xl font-bold text-orange-600">12</h2>
                </div>
            </div>
        </div>
    );
};

export default AdminOverview;
