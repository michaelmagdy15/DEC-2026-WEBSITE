import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../Layout/Navbar';

const TermsOfService: React.FC = () => {
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
                    Terms of <span className="text-[#F58220]">Service</span>
                </h1>
                <p className="text-sm text-gray-500 mb-12">Last updated: February 17, 2026</p>

                <div className="space-y-10 text-gray-300 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing and using the DEC Engineering Consultant website ("Site"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this Site.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">2. Description of Services</h2>
                        <p>DEC Engineering Consultant provides architectural, structural, electrical, mechanical, and construction management consulting services across the United Arab Emirates and the Middle East. This website serves as an informational platform to showcase our portfolio, capabilities, and contact information.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">3. Intellectual Property</h2>
                        <p>All content on this Site, including but not limited to text, graphics, logos, images, project photos, design renderings, and software, is the property of DEC Engineering Consultant or its licensors and is protected by international copyright, trademark, and intellectual property laws. Unauthorized reproduction, distribution, or modification of any materials on this Site is strictly prohibited without prior written consent.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">4. Use of the Website</h2>
                        <p>You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site. Prohibited conduct includes but is not limited to:</p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Using the Site for any unlawful or fraudulent purpose</li>
                            <li>Attempting to gain unauthorized access to the Site's systems or networks</li>
                            <li>Reproducing, duplicating, or copying material from this Site for commercial purposes</li>
                            <li>Redistributing content from DEC Engineering Consultant without explicit permission</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">5. Project Information Disclaimer</h2>
                        <p>The project details, images, and statistics presented on this Site are for informational and portfolio purposes only. While we strive to ensure accuracy, DEC Engineering Consultant makes no warranties regarding the completeness, reliability, or accuracy of this information. Project specifications may vary from what is displayed.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">6. Limitation of Liability</h2>
                        <p>DEC Engineering Consultant shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from the use of, or inability to use, this Site or its content. This includes but is not limited to damages for loss of profits, data, or other intangible losses.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">7. Third-Party Links</h2>
                        <p>This Site may contain links to third-party websites or services that are not owned or controlled by DEC Engineering Consultant. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">8. Governing Law</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Abu Dhabi, UAE.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">9. Changes to Terms</h2>
                        <p>DEC Engineering Consultant reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site following any changes constitutes acceptance of those changes.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">10. Contact Information</h2>
                        <p>For any questions regarding these Terms of Service, please contact us at:</p>
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

export default TermsOfService;
