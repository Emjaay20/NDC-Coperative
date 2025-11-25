import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
            <Navbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />

            <main className="flex-grow">
                {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
                {currentPage === 'about' && <About />}
                {currentPage === 'gallery' && <Gallery />}
                {currentPage === 'blog' && <Blog />}
                {currentPage === 'contact' && <Contact />}
                {currentPage === 'login' && <Login setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />}
                {currentPage === 'dashboard' && <Dashboard />}
            </main>

            <Footer setCurrentPage={setCurrentPage} />
            <LiveChat />
        </div>
    );
};

export default App;
