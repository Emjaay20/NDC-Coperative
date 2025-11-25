import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

export default FeatureCard;
