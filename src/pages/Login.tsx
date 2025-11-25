import React from 'react';
import { Users } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

interface LoginProps {
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                        <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Member Login</h2>
                    <p className="text-gray-500">Access your dashboard</p>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Coop ID Number</label>
                        <input type="text" defaultValue="NDC/COOP/0023" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" defaultValue="password123" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Secure Login
                    </button>
                </div>
                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
                    <br />
                    <Link to="/forgot-password" className="text-gray-500 hover:text-gray-700">Forgot credentials?</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
