import React, { useState } from 'react';
import { KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement password recovery logic
        setSubmitted(true);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                        <KeyRound className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Forgot Password?</h2>
                    <p className="text-gray-500">No worries, we'll send you reset instructions.</p>
                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" required />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Reset Password
                        </button>
                    </form>
                ) : (
                    <div className="text-center space-y-4">
                        <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                            If an account exists for that email, we have sent password reset instructions.
                        </div>
                    </div>
                )}

                <p className="mt-6 text-center text-sm text-gray-500">
                    Remember your password? <Link to="/login" className="text-blue-600 hover:underline">Back to Login</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
