import React from 'react';
import { Send } from 'lucide-react';

const Support = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Member Support</h2>
            <div className="space-y-4 max-w-lg">
                <p className="text-gray-600 mb-4">Send a complaint or inquiry directly to the secretariat.</p>
                <textarea className="w-full border border-gray-300 rounded p-3 h-32" placeholder="Describe your issue..."></textarea>
                <button onClick={() => alert('Message Sent')} className="bg-slate-800 text-white px-6 py-2 rounded hover:bg-slate-700 flex items-center">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                </button>
            </div>
        </div>
    );
};

export default Support;
