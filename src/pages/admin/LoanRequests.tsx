import React from 'react';

const LoanRequests = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Pending Loan Requests</h2>
            <div className="space-y-4">
                <div className="border rounded-lg p-4 flex justify-between items-center bg-gray-50">
                    <div>
                        <h3 className="font-bold">John Doe</h3>
                        <p className="text-sm text-gray-500">Requesting ₦500,000 (Normal Loan)</p>
                        <p className="text-xs text-gray-400 mt-1">Guarantor: NDC/COOP/0012</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">Approve</button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition">Reject</button>
                    </div>
                </div>
                <div className="border rounded-lg p-4 flex justify-between items-center bg-gray-50">
                    <div>
                        <h3 className="font-bold">Sarah Smith</h3>
                        <p className="text-sm text-gray-500">Requesting ₦200,000 (Emergency Loan)</p>
                        <p className="text-xs text-gray-400 mt-1">Guarantor: NDC/COOP/0045</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">Approve</button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition">Reject</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanRequests;
