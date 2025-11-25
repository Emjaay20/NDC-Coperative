import React from 'react';

const Loans = () => {
    return (
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
    );
};

export default Loans;
