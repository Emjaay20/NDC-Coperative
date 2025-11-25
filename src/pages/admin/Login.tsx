import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement admin login logic
        navigate('/admin/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
                        <ShieldCheck className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Admin Portal</h2>
                    <p className="text-gray-500">Authorized personnel only</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Admin ID</label>
                        <input type="text" placeholder="ADMIN-001" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none" required />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition"
                    >
                        Access Dashboard
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
