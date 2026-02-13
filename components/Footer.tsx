
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-900 text-white py-6">
            <div className="container mx-auto px-6 text-center text-blue-200">
                <p>&copy; {currentYear} Ron J Smith Plumbing. All Rights Reserved.</p>
                <p className="text-sm mt-1">Serving Belleville, Ontario and surrounding areas.</p>
            </div>
        </footer>
    );
};

export default Footer;
