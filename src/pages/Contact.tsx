
import { Building, Phone } from 'lucide-react';

const Contact = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">Have questions about membership, loans, or investments? Visit us at the secretariat or send a message.</p>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4"><Building className="text-blue-600" /></div>
                        <div>
                            <h4 className="font-bold text-gray-900">Secretariat Office</h4>
                            <p className="text-gray-600">Suite 45, NDC Complex, Central Area, Abuja.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4"><Phone className="text-blue-600" /></div>
                        <div>
                            <h4 className="font-bold text-gray-900">Phone & Email</h4>
                            <p className="text-gray-600">+234 800 NDC COOP</p>
                            <p className="text-gray-600">info@ndccoop.org</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full border p-3 rounded bg-gray-50" />
                    <input type="email" placeholder="Email Address" className="w-full border p-3 rounded bg-gray-50" />
                    <textarea placeholder="How can we help?" className="w-full border p-3 rounded h-32 bg-gray-50"></textarea>
                    <button type="button" className="w-full bg-slate-900 text-white font-bold py-3 rounded hover:bg-slate-800">Send Message</button>
                </form>
            </div>
        </div>
    </div>
);

export default Contact;
