import React from 'react';
import { UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement registration logic
        navigate('/dashboard');
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                        <UserPlus className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Join NDC Cooperative</h2>
                    <p className="text-gray-500">Start your journey to financial freedom</p>
                </div>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" placeholder="+234..." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Create Account
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-500">
                    Already a member? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
