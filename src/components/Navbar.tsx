import React, { useState } from 'react';
import { Building, LogIn, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => location.pathname === path;

    const NavBtn = ({ path, label }: { path: string; label: string }) => (
        <Link
            to={path}
            className={`${isActive(path) ? 'text-blue-400 font-bold' : 'text-gray-300 hover:text-white'} px-3 py-2 rounded-md text-sm transition`}
        >
            {label}
        </Link>
    );

    const MobileNavBtn = ({ path, label }: { path: string; label: string }) => (
        <Link
            to={path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
        >
            {label}
        </Link>
    );

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center cursor-pointer">
                        <div className="bg-blue-600 p-2 rounded-lg mr-2">
                            <Building className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <span className="font-bold text-xl block leading-none">NDC</span>
                            <span className="text-xs text-blue-300 tracking-wider">COOPERATIVE</span>
                        </div>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {!isLoggedIn ? (
                                <>
                                    <NavBtn path="/" label="Home" />
                                    <NavBtn path="/about" label="About Us" />
                                    <NavBtn path="/gallery" label="Gallery" />
                                    <NavBtn path="/blog" label="News" />
                                    <NavBtn path="/contact" label="Contact" />
                                    <Link
                                        to="/login"
                                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium flex items-center transition"
                                    >
                                        <LogIn className="w-4 h-4 mr-2" /> Member Login
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <NavBtn path="/dashboard" label="Dashboard" />
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {!isLoggedIn ? (
                            <>
                                <MobileNavBtn path="/" label="Home" />
                                <MobileNavBtn path="/about" label="About Us" />
                                <MobileNavBtn path="/gallery" label="Gallery" />
                                <MobileNavBtn path="/login" label="Member Login" />
                            </>
                        ) : (
                            <MobileNavBtn path="/dashboard" label="Dashboard" />
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
