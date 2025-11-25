import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, CreditCard, LogOut } from 'lucide-react';

const AdminLayout = () => {
    const navigate = useNavigate();

    const AdminLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
        <NavLink
            to={to}
            end={to === ''}
            className={({ isActive }) => `flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition ${isActive ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
        >
            {({ isActive }) => (
                <>
                    <span className={`mr-3 ${isActive ? 'text-red-600' : 'text-gray-400'}`}>{icon}</span>
                    {label}
                </>
            )}
        </NavLink>
    );

    return (
        <div className="bg-gray-100 min-h-screen flex">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md min-h-screen fixed left-0 top-0 z-10">
                <div className="p-6 border-b">
                    <h3 className="font-bold text-xl text-slate-800">NDC Admin</h3>
                    <p className="text-xs text-gray-500">Management Console</p>
                </div>
                <nav className="p-4 space-y-2">
                    <AdminLink to="" icon={<LayoutDashboard />} label="Overview" />
                    <AdminLink to="members" icon={<Users />} label="Members" />
                    <AdminLink to="loans" icon={<CreditCard />} label="Loan Requests" />
                </nav>
                <div className="absolute bottom-0 w-full p-4 border-t">
                    <button onClick={() => navigate('/')} className="flex items-center text-gray-600 hover:text-red-600 transition w-full px-4 py-2">
                        <LogOut className="w-5 h-5 mr-3" /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-64 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
