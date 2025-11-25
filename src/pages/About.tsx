import { useState } from 'react';
import { UserCheck, Building, History } from 'lucide-react';
import { leadership } from '../data/mockData';

const About = () => {
    const [activeTab, setActiveTab] = useState('exco');
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center border-b pb-4">About NDC Cooperative</h2>
            <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1 space-y-2">
                    <button onClick={() => setActiveTab('exco')} className={`w-full text-left p-4 rounded-lg font-semibold ${activeTab === 'exco' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>Current Executives</button>
                    <button onClick={() => setActiveTab('bot')} className={`w-full text-left p-4 rounded-lg font-semibold ${activeTab === 'bot' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>Board of Trustees</button>
                    <button onClick={() => setActiveTab('past')} className={`w-full text-left p-4 rounded-lg font-semibold ${activeTab === 'past' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>Past Chairmen</button>
                </div>
                <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    {activeTab === 'exco' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-blue-800">Executive Committee</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {leadership.excos.map((item, i) => (
                                    <div key={i} className="flex items-center p-4 bg-blue-50 rounded-lg">
                                        <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                                        <span className="font-medium text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === 'bot' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-blue-800">Board of Trustees</h3>
                            <ul className="space-y-4">
                                {leadership.bot.map((item, i) => (
                                    <li key={i} className="flex items-center text-lg text-gray-700 border-b pb-2">
                                        <Building className="w-5 h-5 text-gray-400 mr-3" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === 'past' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-blue-800">Past Leadership</h3>
                            <div className="space-y-4">
                                {leadership.pastChairmen.map((item, i) => (
                                    <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                                        <History className="w-6 h-6 text-gray-500 mr-3" />
                                        <span className="font-medium text-lg text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
