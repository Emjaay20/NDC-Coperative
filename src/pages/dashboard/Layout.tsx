import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, CreditCard, Wallet, MessageSquare, History, User } from 'lucide-react';
import { memberData } from '../../data/mockData';

const DashboardLayout = () => {
    const DashLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
        <NavLink
            to={to}
            end={to === ''}
            className={({ isActive }) => `flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
        >
            {({ isActive }) => (
                <>
                    <span className={`mr-3 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>{icon}</span>
                    {label}
                </>
            )}
        </NavLink>
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <div className="md:w-64 bg-white rounded-xl shadow-sm h-fit">
                        <div className="p-6 border-b">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 text-2xl font-bold text-blue-600">
                                AD
                            </div>
                            <h3 className="font-bold text-lg">{memberData.name}</h3>
                            <p className="text-xs text-gray-500">{memberData.id}</p>
                        </div>
                        <nav className="p-4 space-y-2">
                            <DashLink to="" icon={<LayoutDashboard />} label="Overview" />
                            <DashLink to="loans" icon={<CreditCard />} label="Loan Application" />
                            <DashLink to="savings" icon={<Wallet />} label="Savings & Withdrawals" />
                            <DashLink to="history" icon={<History />} label="Transaction History" />
                            <DashLink to="profile" icon={<User />} label="Profile Settings" />
                            <DashLink to="support" icon={<MessageSquare />} label="Complaints / Help" />
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
