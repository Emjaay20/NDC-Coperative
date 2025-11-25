import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import DashboardLayout from './pages/dashboard/Layout';
import Overview from './pages/dashboard/Overview';
import Loans from './pages/dashboard/Loans';
import Savings from './pages/dashboard/Savings';
import History from './pages/dashboard/History';
import Profile from './pages/dashboard/Profile';
import Support from './pages/dashboard/Support';
import AdminLogin from './pages/admin/Login';
import AdminLayout from './pages/admin/Layout';
import AdminOverview from './pages/admin/Overview';
import Members from './pages/admin/Members';
import LoanRequests from './pages/admin/LoanRequests';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/dashboard" element={isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />}>
                        <Route index element={<Overview />} />
                        <Route path="loans" element={<Loans />} />
                        <Route path="savings" element={<Savings />} />
                        <Route path="history" element={<History />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="support" element={<Support />} />
                    </Route>
                    <Route path="/admin" element={<AdminLogin />} />
                    <Route path="/admin/dashboard" element={<AdminLayout />}>
                        <Route index element={<AdminOverview />} />
                        <Route path="members" element={<Members />} />
                        <Route path="loans" element={<LoanRequests />} />
                    </Route>
                </Routes>
            </main>

            <Footer />
            <LiveChat />
        </div>
    );
};

export default App;
