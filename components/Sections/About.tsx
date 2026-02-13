import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-[#0f0f0f] relative overflow-hidden">
             {/* Layout with text and images */}
             <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2 relative z-10">
                        <span className="text-[#F58220] font-mono text-sm tracking-widest uppercase mb-4 block">Who We Are</span>
                        <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-8 leading-tight">
                            Engineering <br />
                            <span className="text-gray-500">Global Landmarks.</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                            <p>
                                Established in 1989 in Al-Ain, UAE, <strong className="text-white">DEC (Dar Al Khalij) Engineering Consultants</strong> has evolved from a modest firm into a global leader in the construction industry.
                            </p>
                            <p>
                                With a rapidly expanding footprint across Dubai, Abu Dhabi, Cairo, and beyond, we have successfully delivered hundreds of projects—from domestic residences to overseas landmarks. Our passion is imbued in every detail, blending aesthetic vision with structural integrity to create value for our clients.
                            </p>
                            <p>
                                Driven by a vision to stand among the region's top engineering firms, we prioritize transparency and customer value above all. We don't just build structures; we forge lasting relationships and sustainable environments.
                            </p>
                        </div>
                        
                        <div className="mt-12 flex gap-12 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-4xl text-white font-bold tracking-tight">1989</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Established</p>
                            </div>
                            <div>
                                <h4 className="text-4xl text-white font-bold tracking-tight">500+</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Projects Delivered</p>
                            </div>
                             <div>
                                <h4 className="text-4xl text-white font-bold tracking-tight">5</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Global Offices</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Images Grid */}
                    <div className="md:w-1/2 relative h-[600px] w-full">
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
                                src="https://images.unsplash.com/photo-1572979251846-9d224d455d64?q=80&w=1200&auto=format&fit=crop" 
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
                                src="https://images.unsplash.com/photo-1629166938959-1cb4b3017758?q=80&w=1200&auto=format&fit=crop" 
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