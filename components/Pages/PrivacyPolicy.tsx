import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../Layout/Navbar';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#0f0f0f] min-h-screen text-white selection:bg-[#F58220] selection:text-white">
            <Navbar />
            <div className="pt-28" />

            <div className="max-w-4xl mx-auto px-6 pb-24">
                {/* Back Navigation */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-[#F58220] transition-colors duration-300 mb-12"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                    Privacy <span className="text-[#F58220]">Policy</span>
                </h1>
                <p className="text-sm text-gray-500 mb-12">Last updated: February 17, 2026</p>

                <div className="space-y-10 text-gray-300 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">1. Introduction</h2>
                        <p>DEC Engineering Consultant ("we," "our," or "us") is committed to protecting the privacy of our website visitors and clients. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you visit our website or engage with our services.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">2. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and company name when you submit inquiries through our contact form or email us directly.</li>
                            <li><strong className="text-white">Project Information:</strong> Details about your construction or engineering project requirements shared during consultations.</li>
                            <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent on pages, and browser type.</li>
                            <li><strong className="text-white">Technical Data:</strong> IP address, browser type, operating system, and device information collected automatically.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Respond to your inquiries and provide requested information about our services</li>
                            <li>Communicate with you regarding potential or ongoing projects</li>
                            <li>Improve our website and user experience</li>
                            <li>Comply with legal obligations and resolve any disputes</li>
                            <li>Send relevant updates about our services and projects (with your consent)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">4. Data Sharing and Disclosure</h2>
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>With trusted service providers who assist in operating our website and business</li>
                            <li>When required by law or to respond to legal proceedings</li>
                            <li>To protect the rights, property, or safety of DEC Engineering Consultant, our clients, or the public</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">5. Data Security</h2>
                        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">6. Cookies</h2>
                        <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain features on our website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">7. Data Retention</h2>
                        <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Contact information submitted through inquiry forms is retained for up to 3 years unless you request earlier deletion.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">8. Your Rights</h2>
                        <p>Depending on your jurisdiction, you may have the right to:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate or incomplete data</li>
                            <li>Request deletion of your personal information</li>
                            <li>Object to or restrict the processing of your data</li>
                            <li>Withdraw consent at any time where processing is based on consent</li>
                        </ul>
                        <p className="mt-3">To exercise any of these rights, please contact us using the information provided below.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">9. Changes to This Policy</h2>
                        <p>DEC Engineering Consultant reserves the right to update this Privacy Policy at any time. We will notify you of significant changes by posting a prominent notice on our website. We encourage you to review this page periodically to stay informed about how we protect your information.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">10. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                        <div className="mt-3 p-4 border border-white/10 rounded-lg bg-white/[0.02]">
                            <p className="font-bold text-white">DEC Engineering Consultant</p>
                            <p>P.O. BOX 45080, Abu Dhabi, United Arab Emirates</p>
                            <p>Email: <a href="mailto:dec2000@emirates.net.ae" className="text-[#F58220] hover:underline">dec2000@emirates.net.ae</a></p>
                            <p>Tel: +971 26443200</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
