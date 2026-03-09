import React from 'react';
import { motion } from 'framer-motion';
import { useSiteContent } from '../Context/SiteContentContext';

const About: React.FC = () => {
    const { content } = useSiteContent();
    const aboutContent = content.about || {};

    return (
        <section id="about" className="py-16 sm:py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
            {/* Layout with text and images */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2 relative z-10">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">{aboutContent.subtitle || 'Who We Are'}</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold tracking-tighter mb-6 sm:mb-8 leading-tight"
                            dangerouslySetInnerHTML={{ __html: aboutContent.heading || 'Engineering <br /><span class="text-gray-500">Global Landmarks.</span>' }}
                        />
                        <div className="space-y-4 sm:space-y-6 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
                            <p dangerouslySetInnerHTML={{ __html: aboutContent.paragraph1 || 'Established in 1989 in Al-Ain, UAE, <strong class="text-white">DEC (Dar Al Khalij) Engineering Consultants</strong> has evolved from a modest firm into a global leader in the construction industry.' }} />
                            <p dangerouslySetInnerHTML={{ __html: aboutContent.paragraph2 || 'With a rapidly expanding footprint across Dubai, Abu Dhabi, Cairo, and beyond, we have successfully delivered hundreds of projects—from domestic residences to overseas landmarks. Our passion is imbued in every detail, blending aesthetic vision with structural integrity to create value for our clients.' }} />
                        </div>

                        <div className="mt-8 sm:mt-12 flex flex-wrap gap-6 sm:gap-12 border-t border-white/10 pt-6 sm:pt-8">
                            <div>
                                <h4 className="text-3xl sm:text-4xl text-white font-bold tracking-tight">{aboutContent.stat1_value || '1989'}</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">{aboutContent.stat1_label || 'Established'}</p>
                            </div>
                            <div>
                                <h4 className="text-3xl sm:text-4xl text-white font-bold tracking-tight">{aboutContent.stat2_value || '500+'}</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">{aboutContent.stat2_label || 'Projects Delivered'}</p>
                            </div>
                            <div>
                                <h4 className="text-3xl sm:text-4xl text-white font-bold tracking-tight">{aboutContent.stat3_value || '5'}</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">{aboutContent.stat3_label || 'Global Offices'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Images Grid */}
                    <div className="md:w-1/2 relative h-[350px] sm:h-[450px] md:h-[600px] w-full">
                        {/* Decorative background element */}
                        <div className="absolute top-10 right-10 w-full h-full border border-white/5 z-0" />

                        {/* Image 1: Tall Tower */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 right-0 w-[65%] h-[60%] overflow-hidden bg-gray-900 z-10"
                        >
                            <img
                                src={aboutContent.img1 || "/images/dec-iconic-tower.png"}
                                alt="DEC Iconic Tower"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                            />
                        </motion.div>

                        {/* Image 2: Modern Building */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-0 left-0 w-[65%] h-[50%] overflow-hidden bg-gray-900 z-20 shadow-2xl shadow-black/50 border-4 border-[#0f0f0f]"
                        >
                            <img
                                src={aboutContent.img2 || "/images/Screenshot_19.png"}
                                alt="DEC Modern Architecture"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                            />
                        </motion.div>

                        <div className="absolute -bottom-10 -right-10 text-[10rem] font-bold text-white/5 select-none z-0">
                            DEC
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;