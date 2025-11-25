

const History = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 border-b bg-gray-50">
                            <th className="p-3">Date</th>
                            <th className="p-3">Transaction ID</th>
                            <th className="p-3">Description</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-3">Nov 01, 2024</td>
                            <td className="p-3 font-mono text-xs text-gray-500">TXN-883920</td>
                            <td className="p-3">Monthly Contribution (Deduction)</td>
                            <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Completed</span></td>
                            <td className="p-3 text-right text-green-600">+ ₦50,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-3">Oct 01, 2024</td>
                            <td className="p-3 font-mono text-xs text-gray-500">TXN-772819</td>
                            <td className="p-3">Monthly Contribution (Deduction)</td>
                            <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Completed</span></td>
                            <td className="p-3 text-right text-green-600">+ ₦50,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-3">Sep 01, 2024</td>
                            <td className="p-3 font-mono text-xs text-gray-500">TXN-661708</td>
                            <td className="p-3">Monthly Contribution (Deduction)</td>
                            <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Completed</span></td>
                            <td className="p-3 text-right text-green-600">+ ₦50,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
