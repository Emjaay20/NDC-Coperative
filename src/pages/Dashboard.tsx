import React, { useState } from 'react';
import { LayoutDashboard, CreditCard, Wallet, MessageSquare, AlertCircle, Send } from 'lucide-react';
import { memberData, coopStats } from '../data/mockData';

const Dashboard = () => {
    const [dashView, setDashView] = useState('overview');
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [withdrawMsg, setWithdrawMsg] = useState('');

    const handleWithdrawCheck = () => {
        const maxWithdrawable = memberData.totalContribution * 0.3;
        if (Number(withdrawAmount) > maxWithdrawable) {
            setWithdrawMsg(`Error: Cannot withdraw more than 30% of savings (₦${maxWithdrawable.toLocaleString()}).`);
        } else {
            setWithdrawMsg("Success: Application submitted for processing.");
        }
    };

    const DashLink = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
        <button
            onClick={onClick}
            className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition ${active ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
        >
            <span className={`mr-3 ${active ? 'text-blue-600' : 'text-gray-400'}`}>{icon}</span>
            {label}
        </button>
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-6">

                    {/* Sidebar */}
                    <div className="md:w-64 bg-white rounded-xl shadow-sm h-fit">
                        <div className="p-6 border-b">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 text-2xl font-bold text-blue-600">
                                AD
                            </div>
                            <h3 className="font-bold text-lg">{memberData.name}</h3>
                            <p className="text-xs text-gray-500">{memberData.id}</p>
                        </div>
                        <nav className="p-4 space-y-2">
                            <DashLink icon={<LayoutDashboard />} label="Overview" active={dashView === 'overview'} onClick={() => setDashView('overview')} />
                            <DashLink icon={<CreditCard />} label="Loan Application" active={dashView === 'loan'} onClick={() => setDashView('loan')} />
                            <DashLink icon={<Wallet />} label="Partial Withdrawal" active={dashView === 'withdraw'} onClick={() => setDashView('withdraw')} />
                            <DashLink icon={<MessageSquare />} label="Complaints / Help" active={dashView === 'support'} onClick={() => setDashView('support')} />
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {dashView === 'overview' && (
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
                                        <button onClick={() => setDashView('loan')} className="text-xs text-blue-600 underline mt-2">Apply Now</button>
                                    </div>
                                </div>

                                {/* Recent Activity Mock */}
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="font-bold text-lg mb-4 text-slate-700">Recent Transactions</h3>
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
                        )}

                        {dashView === 'withdraw' && (
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl font-bold mb-4">Partial Withdrawal Application</h2>
                                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6 text-sm text-yellow-800">
                                    <div className="flex items-start">
                                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                                        <div>
                                            <strong>Policy Note:</strong>
                                            <ul className="list-disc ml-4 mt-1">
                                                <li>You can only withdraw once every 2 years.</li>
                                                <li>Maximum withdrawal limit is 30% of total savings.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 max-w-md">
                                    <div>
                                        <label className="block text-gray-600 text-sm mb-1">Last Withdrawal Date</label>
                                        <input type="text" disabled value={memberData.lastWithdrawalDate} className="w-full bg-gray-100 border rounded px-3 py-2 text-gray-500" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 text-sm mb-1">Max Withdrawable Amount (30%)</label>
                                        <input type="text" disabled value={`₦${(memberData.totalContribution * 0.3).toLocaleString()}`} className="w-full bg-gray-100 border rounded px-3 py-2 text-gray-500 font-bold" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 text-sm mb-1">Amount Requested</label>
                                        <input
                                            type="number"
                                            value={withdrawAmount}
                                            onChange={(e) => setWithdrawAmount(e.target.value)}
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter amount"
                                        />
                                    </div>

                                    {withdrawMsg && (
                                        <div className={`p-3 rounded text-sm ${withdrawMsg.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                            {withdrawMsg}
                                        </div>
                                    )}

                                    <button onClick={handleWithdrawCheck} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full font-medium">
                                        Check Eligibility & Apply
                                    </button>
                                </div>
                            </div>
                        )}

                        {dashView === 'loan' && (
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl font-bold mb-6">Loan Application</h2>
                                <form className="space-y-4 max-w-lg">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase">Loan Type</label>
                                            <select className="w-full border p-2 rounded mt-1 bg-white">
                                                <option>Normal Loan (200%)</option>
                                                <option>Emergency Loan</option>
                                                <option>Commodity Loan</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase">Duration</label>
                                            <select className="w-full border p-2 rounded mt-1 bg-white">
                                                <option>6 Months</option>
                                                <option>12 Months</option>
                                                <option>24 Months</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase">Amount Required</label>
                                        <input type="number" className="w-full border p-2 rounded mt-1" placeholder="₦ 0.00" />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase">Guarantor ID 1</label>
                                        <input type="text" className="w-full border p-2 rounded mt-1" placeholder="NDC/COOP/..." />
                                    </div>
                                    <button type="button" onClick={() => alert('Application Submitted!')} className="bg-blue-600 text-white w-full py-3 rounded font-bold hover:bg-blue-700">Submit Application</button>
                                </form>
                            </div>
                        )}

                        {dashView === 'support' && (
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl font-bold mb-4">Member Support</h2>
                                <div className="space-y-4 max-w-lg">
                                    <p className="text-gray-600 mb-4">Send a complaint or inquiry directly to the secretariat.</p>
                                    <textarea className="w-full border border-gray-300 rounded p-3 h-32" placeholder="Describe your issue..."></textarea>
                                    <button onClick={() => alert('Message Sent')} className="bg-slate-800 text-white px-6 py-2 rounded hover:bg-slate-700 flex items-center">
                                        <Send className="w-4 h-4 mr-2" /> Send Message
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
