import React from 'react';
import { memberData } from '../../data/mockData';

const Profile = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
            <form className="space-y-6 max-w-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" defaultValue={memberData.name} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Coop ID</label>
                        <input type="text" defaultValue={memberData.id} disabled className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" defaultValue="member@ndccoop.org" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" defaultValue="+234 800 000 0000" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                </div>

                <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Change Password</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button type="button" onClick={() => alert('Profile Updated!')} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
