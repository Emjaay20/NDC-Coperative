import React from 'react';
import { Wallet, CreditCard, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

const Home: React.FC = () => (
    <div className="animate-fade-in">
        {/* Hero */}
        <div className="bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Members, Building Wealth</h1>
                <p className="text-xl text-gray-300 mb-8">Join the NDC Cooperative Society today. Secure your future with flexible savings, low-interest loans, and annual dividends.</p>
                <div className="flex justify-center gap-4">
                    <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 inline-block">
                        Member Portal
                    </Link>
                    <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 rounded-full transition inline-block">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>

        {/* Features */}
        <div className="py-16 bg-gray-50 max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard icon={<Wallet className="text-blue-600 w-10 h-10" />} title="Smart Savings" desc="Automated monthly deductions with high yield returns." />
                <FeatureCard icon={<CreditCard className="text-blue-600 w-10 h-10" />} title="Quick Loans" desc="Access up to 200% of your savings with low interest rates." />
                <FeatureCard icon={<TrendingUp className="text-blue-600 w-10 h-10" />} title="Annual Dividends" desc="Share in the profits of the cooperative every year." />
            </div>
        </div>
    </div>
);

export default Home;
