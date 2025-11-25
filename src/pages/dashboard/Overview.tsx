import React from 'react';
import { Link } from 'react-router-dom';
import { memberData, coopStats } from '../../data/mockData';

const Overview = () => {
    return (
        <div className="space-y-6">
            {/* Cooperative Stats Banner */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-xl shadow-lg">
                <h3 className="text-sm uppercase tracking-widest text-blue-300 mb-4 font-semibold">Cooperative Transparency Board</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <p className="text-xs text-gray-400">Total Assets</p>
                        <p className="text-xl font-bold">{coopStats.totalAssets}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Monthly Inflow</p>
                        <p className="text-xl font-bold">{coopStats.monthlyInflow}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Loans Disbursed (Total)</p>
                        <p className="text-xl font-bold">{coopStats.totalLoansGiven}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Loans (This Month)</p>
                        <p className="text-xl font-bold text-green-400">{coopStats.loansThisMonth}</p>
                    </div>
                </div>
            </div>

            {/* Personal Stats */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                    <p className="text-gray-500 mb-1">My Total Contribution</p>
                    <h2 className="text-3xl font-bold text-slate-800">₦{memberData.totalContribution.toLocaleString()}</h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                    <p className="text-gray-500 mb-1">Quarterly Profit Share</p>
                    <h2 className="text-3xl font-bold text-green-600">+ ₦{memberData.quarterlyProfit.toLocaleString()}</h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                    <p className="text-gray-500 mb-1">Active Loan Balance</p>
                    <h2 className="text-3xl font-bold text-slate-800">₦0.00</h2>
                    <Link to="loans" className="text-xs text-blue-600 underline mt-2 inline-block">Apply Now</Link>
                </div>
            </div>

            {/* Recent Activity Mock */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-slate-700">Recent Transactions</h3>
                    <Link to="history" className="text-sm text-blue-600 hover:underline">View All</Link>
                </div>
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 border-b">
                            <th className="pb-2">Date</th>
                            <th className="pb-2">Description</th>
                            <th className="pb-2 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-100">
                            <td className="py-3">Nov 01, 2024</td>
                            <td>Monthly Contribution (Deduction)</td>
                            <td className="text-right text-green-600">+ ₦50,000</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3">Oct 01, 2024</td>
                            <td>Monthly Contribution (Deduction)</td>
                            <td className="text-right text-green-600">+ ₦50,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Overview;
