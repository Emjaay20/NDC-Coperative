import React, { useState } from 'react';
import { Building, LogIn, Menu, X } from 'lucide-react';

interface NavbarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const NavBtn = ({ page, label }: { page: string; label: string }) => (
        <button
            onClick={() => setCurrentPage(page)}
            className={`${currentPage === page ? 'text-blue-400 font-bold' : 'text-gray-300 hover:text-white'} px-3 py-2 rounded-md text-sm transition`}
        >
            {label}
        </button>
    );

    const MobileNavBtn = ({ page, label }: { page: string; label: string }) => (
        <button
            onClick={() => { setCurrentPage(page); setIsMobileMenuOpen(false); }}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
        >
            {label}
        </button>
    );

    return (
        <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
                        <div className="bg-blue-600 p-2 rounded-lg mr-2">
                            <Building className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <span className="font-bold text-xl block leading-none">NDC</span>
                            <span className="text-xs text-blue-300 tracking-wider">COOPERATIVE</span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {!isLoggedIn ? (
                                <>
                                    <NavBtn page="home" label="Home" />
                                    <NavBtn page="about" label="About Us" />
                                    <NavBtn page="gallery" label="Gallery" />
                                    <NavBtn page="blog" label="News" />
                                    <NavBtn page="contact" label="Contact" />
                                    <button
                                        onClick={() => setCurrentPage('login')}
                                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium flex items-center transition"
                                    >
                                        <LogIn className="w-4 h-4 mr-2" /> Member Login
                                    </button>
                                </>
                            ) : (
                                <>
                                    <NavBtn page="dashboard" label="Dashboard" />
                                    <button
                                        onClick={() => { setIsLoggedIn(false); setCurrentPage('home'); }}
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
                                <MobileNavBtn page="home" label="Home" />
                                <MobileNavBtn page="about" label="About Us" />
                                <MobileNavBtn page="gallery" label="Gallery" />
                                <MobileNavBtn page="login" label="Member Login" />
                            </>
                        ) : (
                            <MobileNavBtn page="dashboard" label="Dashboard" />
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
