import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import GovernmentBuildings from '../Sections/GovernmentBuildings';
import Navbar from '../Layout/Navbar';

const GovernmentBuildingsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#0f0f0f] min-h-screen text-white selection:bg-primary selection:text-white">
            <Navbar />

            {/* Spacer for fixed navbar */}
            <div className="pt-28" />

            {/* Back Navigation */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-primary transition-colors duration-300 group"
                >
                    <motion.span
                        className="inline-block"
                        whileHover={{ x: -4 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <ArrowLeft size={16} />
                    </motion.span>
                    Back to Home
                </Link>
            </div>

            {/* Section Content */}
            <GovernmentBuildings />

            {/* Footer spacer */}
            <div className="py-16 text-center">
                <Link
                    to="/"
                    className="inline-block px-8 py-3 border border-primary text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default GovernmentBuildingsPage;
