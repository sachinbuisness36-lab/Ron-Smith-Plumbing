
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
    const { ref: contentRef, animationClass: contentAnimation } = useScrollAnimation<HTMLDivElement>('fade-in');

    const address = "507 Dundas St W, Belleville, ON K8P 1B6";
    const gmapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

    return (
        <section id="contact" className="py-20 bg-white">
            <div ref={contentRef} className={`container mx-auto px-6 ${contentAnimation}`}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-blue-900">Contact Ron J Smith Plumbing</h2>
                    <p className="text-lg text-gray-600 mt-2">Ready for fast, reliable service? Get in touch today.</p>
                </div>
                
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100 text-lg space-y-6">
                        <div className="flex items-start gap-4">
                            <span className="text-blue-700 mt-1">📍</span>
                            <div>
                                <h3 className="font-bold text-blue-900">Address</h3>
                                <p className="text-gray-700">{address}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-blue-700 mt-1">📞</span>
                            <div>
                                <h3 className="font-bold text-blue-900">Phone</h3>
                                <a href="tel:6139689201" className="text-gray-700 hover:text-blue-800 transition-colors">(613) 968-9201</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-blue-700 mt-1">🕒</span>
                            <div>
                                <h3 className="font-bold text-blue-900">Business Hours</h3>
                                <p className="text-gray-700">Open ⋅ Closes 5 PM (Monday - Friday)</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="h-96 rounded-xl overflow-hidden shadow-xl border border-gray-200">
                        <iframe
                            src={gmapsUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map of Ron J Smith Plumbing"
                        ></iframe>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <a href="tel:6139689201" className="bg-orange-500 text-white font-bold py-3 px-8 text-xl md:py-4 md:px-12 md:text-2xl rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        📞 Call For A Free Estimate
                    </a>
                    <p className="text-gray-600 mt-4">Fast Response. Reliable Service.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
