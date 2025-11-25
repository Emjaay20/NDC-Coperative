import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { memberData } from '../../data/mockData';

const Savings = () => {
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

    return (
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
    );
};

export default Savings;
