
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About: React.FC = () => {
    const { ref: contentRef, animationClass: contentAnimation } = useScrollAnimation<HTMLDivElement>('slide-in-left');
    
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div ref={contentRef} className={`max-w-4xl mx-auto ${contentAnimation}`}>
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-blue-900">About Ron J Smith Plumbing</h2>
                    </div>
                    <div className="bg-blue-50/50 p-10 rounded-xl border border-blue-100">
                        <p className="text-lg text-gray-700 mb-6 text-center">
                            A local Belleville plumbing company committed to fast, dependable service. We specialize in serving residential properties and older buildings with practical, effective solutions that stand the test of time.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <p><strong className="font-semibold text-blue-900">Decades of Hands-On Experience:</strong> Bringing years of practical knowledge to every job, ensuring quality workmanship.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <p><strong className="font-semibold text-blue-900">Known for Quick Turnaround:</strong> We pride ourselves on efficiency, like replacing a hot water tank within hours of your call.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <p><strong className="font-semibold text-blue-900">Honest Advice & Straightforward Service:</strong> No upselling, just clear communication and the right solution for your needs.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <p><strong className="font-semibold text-blue-900">Locally Owned and Operated:</strong> Proudly serving our community in Belleville and the surrounding area with integrity.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
