import React, { useState, useEffect } from 'react';
import { PencilRuler, BrickWall, Zap, Settings, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import { Service } from '../../types';

const iconMap: Record<string, React.ReactNode> = {
    'ruler': <PencilRuler className="w-6 h-6" />,
    'frame': <BrickWall className="w-6 h-6" />,
    'zap': <Zap className="w-6 h-6" />,
    'hardhat': <Settings className="w-6 h-6" />,
};

const Services: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            const { data } = await supabase.from('services').select('*').order('id', { ascending: true });
            if (data && data.length > 0) {
                setServices(data);
                setActiveServiceId(data[0].id);
            }
        };
        fetchServices();
    }, []);

    const activeService = services.find(s => s.id === activeServiceId) || services[0];

    return (
        <section id="services" className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden py-16 sm:py-24">

            {/* Background Texture/Noise */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-24">

                {services.length === 0 ? (
                    <div className="w-full text-center text-white/50 py-20">Loading Services...</div>
                ) : (
                    <>
                        {/* Left: Navigation */}
                        <div className="lg:w-1/3 flex flex-col">
                            <div className="mb-10 pl-6 border-l-4 border-[#F58220]">
                                <span className="text-[#F58220] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                                    Our Expertise
                                </span>
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-none">
                                    Engineering <br />
                                    <span className="text-[#444] font-thin">Services</span>
                                </h2>
                            </div>

                            <div className="flex flex-row lg:flex-col gap-2 sm:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => setActiveServiceId(service.id)}
                                        className={`group relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all duration-300 border border-transparent flex-shrink-0 lg:flex-shrink ${activeServiceId === service.id
                                            ? 'bg-[#1a1a1a] border-[#F58220]/30'
                                            : 'hover:bg-white/[0.02]'
                                            }`}
                                    >
                                        {/* Icon Box */}
                                        <div className={`p-3 rounded-md transition-all duration-300 ${activeServiceId === service.id
                                            ? 'bg-[#F58220] text-white'
                                            : 'bg-[#111] text-[#666] group-hover:text-white'
                                            }`}>
                                            {iconMap[service.icon]}
                                        </div>

                                        <div className="text-left flex-1">
                                            <h3 className={`text-base font-bold uppercase tracking-wider transition-colors ${activeServiceId === service.id ? 'text-white' : 'text-[#666] group-hover:text-white'}`}>
                                                {service.title}
                                            </h3>
                                            {activeServiceId === service.id && (
                                                <span className="text-[10px] text-[#F58220] uppercase tracking-widest font-bold">View Capabilities</span>
                                            )}
                                        </div>

                                        {activeServiceId === service.id && (
                                            <ChevronRight className="text-[#F58220] w-5 h-5" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Content Card */}
                        <div className="lg:w-2/3 flex flex-col justify-center">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-[#111] border border-white/5 p-6 sm:p-10 lg:p-14 rounded-3xl relative overflow-hidden shadow-2xl"
                                >
                                    {/* Background Glow */}
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#F58220]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                    <div className="relative z-10">
                                        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                                            {activeService.title}
                                        </h3>

                                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 border-l-2 border-[#F58220] pl-4 sm:pl-6">
                                            {activeService.description}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                                            {activeService.details.map((detail, idx) => (
                                                <div key={idx}>
                                                    {detail.title && (
                                                        <div className="flex items-center gap-3 mb-6">
                                                            <div className="w-2 h-2 rounded-full bg-[#F58220]"></div>
                                                            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                                                                {detail.title}
                                                            </h4>
                                                        </div>
                                                    )}

                                                    <ul className="space-y-4">
                                                        {detail.items.map((item, itemIdx) => (
                                                            <li key={itemIdx} className="flex items-start gap-3 group">
                                                                <CheckCircle2 className="w-5 h-5 text-[#333] group-hover:text-[#F58220] transition-colors mt-0.5 flex-shrink-0" />
                                                                <span className="text-[#888] group-hover:text-gray-300 transition-colors text-sm">
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </>
                )}
            </div>
        </section>
    );
};

export default Services;