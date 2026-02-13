
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const services = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657zM12 12c-2 0-4-1-4-4 2 0 4 2 4 4z" />,
    title: 'Hot Water Tank Installation & Replacement',
    description: 'Expert installation and rapid replacement of hot water tanks to restore your comfort.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
    title: 'Leak Detection & Repairs',
    description: 'Advanced detection to find and fix leaks quickly, preventing water damage and saving money.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: 'Emergency Plumbing',
    description: 'Available for urgent plumbing issues, providing fast and reliable emergency services.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
    title: 'Old Building Plumbing Solutions',
    description: 'Specialized in servicing and upgrading plumbing systems in older, historic buildings.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.556 15.556l-1.414-1.414M18.364 5.636l-1.414 1.414m-12.728 12.728l-1.414 1.414" />,
    title: 'General Plumbing Maintenance',
    description: 'Proactive maintenance to keep your plumbing system in top condition and prevent future issues.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    title: 'Plumbing Advice & Troubleshooting',
    description: 'Honest, expert advice to help you understand your plumbing and troubleshoot minor problems.'
  }
];

const ServiceCard: React.FC<{ service: typeof services[0], delay: number }> = ({ service, delay }) => {
    const { ref, animationClass } = useScrollAnimation<HTMLDivElement>('slide-up');

    return (
        <div ref={ref} style={{ animationDelay: `${delay}ms` }} className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${animationClass}`}>
            <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-blue-100 text-blue-700">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{service.icon}</svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
        </div>
    );
};

const Services: React.FC = () => {
  const { ref: titleRef, animationClass: titleAnimation } = useScrollAnimation<HTMLHeadingElement>('slide-up');
    
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className={`text-4xl font-extrabold text-blue-900 ${titleAnimation}`}>Our Plumbing Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
