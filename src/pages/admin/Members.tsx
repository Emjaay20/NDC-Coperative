import React from 'react';

const Members = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Member Management</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 border-b bg-gray-50">
                            <th className="p-3">Name</th>
                            <th className="p-3">Coop ID</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-100">
                            <td className="p-3 font-medium">Yusuf Abubakar</td>
                            <td className="p-3 text-gray-500">NDC/COOP/0023</td>
                            <td className="p-3 text-gray-500">yusuf@example.com</td>
                            <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Active</span></td>
                            <td className="p-3 text-right">
                                <button className="text-blue-600 hover:underline text-xs">Edit</button>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="p-3 font-medium">Jane Doe</td>
                            <td className="p-3 text-gray-500">NDC/COOP/0024</td>
                            <td className="p-3 text-gray-500">jane@example.com</td>
                            <td className="p-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Pending</span></td>
                            <td className="p-3 text-right">
                                <button className="text-blue-600 hover:underline text-xs">Approve</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Members;
