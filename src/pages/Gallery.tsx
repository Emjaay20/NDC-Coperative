
import { Image as ImageIcon } from 'lucide-react';

const Gallery = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg hover:opacity-80 transition cursor-pointer flex items-center justify-center text-gray-400">
                    <ImageIcon className="w-8 h-8" />
                </div>
            ))}
        </div>
    </div>
);

export default Gallery;
