
import { Image as ImageIcon, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const Blog = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest News & Updates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-100">
                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                        <ImageIcon className="w-12 h-12" />
                    </div>
                    <div className="p-6">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{post.date}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 hover:text-blue-600 cursor-pointer">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                        <button className="text-blue-600 font-semibold text-sm flex items-center">Read More <ChevronRight className="w-4 h-4 ml-1" /></button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Blog;
