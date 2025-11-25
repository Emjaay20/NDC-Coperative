import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const LiveChat = () => {
    const [showChat, setShowChat] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {showChat ? (
                <div className="bg-white rounded-xl shadow-2xl w-80 overflow-hidden border border-gray-200">
                    <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
                        <h4 className="font-bold">Live Support</h4>
                        <button onClick={() => setShowChat(false)}><X className="w-5 h-5" /></button>
                    </div>
                    <div className="h-64 bg-gray-50 p-4 overflow-y-auto space-y-3">
                        <div className="bg-blue-100 text-blue-900 p-2 rounded-lg rounded-tl-none text-sm self-start max-w-[80%]">
                            Hello! How can we help you today?
                        </div>
                    </div>
                    <div className="p-3 border-t bg-white flex">
                        <input type="text" placeholder="Type..." className="flex-1 text-sm outline-none" />
                        <button className="text-blue-600 ml-2"><Send className="w-4 h-4" /></button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setShowChat(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
                >
                    <MessageSquare className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

export default LiveChat;
