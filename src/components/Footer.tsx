import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8 border-b border-gray-700 pb-8">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-4">NDC Cooperative</h3>
                <p className="text-gray-400 max-w-sm">Dedicated to improving the welfare of our members through financial prudence and strategic investments.</p>
            </div>
            <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><Link to="/about" className="hover:text-white cursor-pointer">About Us</Link></li>
                    <li><Link to="/login" className="hover:text-white cursor-pointer">Member Portal</Link></li>
                    <li className="hover:text-white cursor-pointer">Constitution</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <div className="flex space-x-4">
                    <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>
        </div>
        <div className="text-center text-gray-500 text-sm">
            &copy; 2024 NDC Cooperative Society. All rights reserved.
        </div>
    </footer>
);

export default Footer;
