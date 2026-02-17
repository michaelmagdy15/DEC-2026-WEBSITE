import React from 'react';
import { motion } from 'framer-motion';

interface Client {
    name: string;
    logo?: string;
}

const CLIENTS: Client[] = [
    { name: "J&W" },
    { name: "Open Futures" },
    { name: "RBSD Architects", logo: "/logos/rbsd.png" },
    { name: "TVS" },
    { name: "Krause Bohne" },
    { name: "Stanley Consultants", logo: "/logos/stanley-consultants.png" },
    { name: "Parsons International" },
    { name: "ADNOC", logo: "/logos/adnoc.png" },
    { name: "Abu Dhabi Police", logo: "/logos/abu-dhabi-police.png" },
    { name: "EWEC", logo: "/logos/ewec.png" },
    { name: "Command of Military Works" },
    { name: "Quantum AIP", logo: "/logos/quantum-aip.png" },
    { name: "Gauff Ingenieure JBG", logo: "/logos/gauff.png" },
    { name: "Allied Consultants Ltd.", logo: "/logos/allied-consultants.png" },
    { name: "TRANSCO", logo: "/logos/transco.png" },
    { name: "TAQA", logo: "/logos/taqa.png" },
    { name: "n+p" },
    { name: "Die Reinigungsprofis" },
    { name: "Aldar", logo: "/logos/aldar.png" },
    { name: "Tabreed", logo: "/logos/tabreed.png" },
    { name: "Integrated Transport Centre" },
    { name: "The National Investor", logo: "/logos/national-investor.png" },
    { name: "Castellex", logo: "/logos/castellex.png" },
    { name: "Grade One" },
    { name: "Heaps" },
    { name: "RBS Architects" },
    { name: "F&M Middle East", logo: "/logos/fm-middle-east.png" },
    { name: "Arab Consulting Engineers" },
];

const LogoCard: React.FC<{ client: Client; index: number }> = ({ client, index }) => {
    const [imgError, setImgError] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            className="group bg-white rounded-md border border-gray-100 p-5 flex flex-col items-center justify-center min-h-[100px] gap-3 hover:shadow-lg hover:border-[#F58220]/30 transition-all duration-400 cursor-default"
        >
            {client.logo && !imgError ? (
                <>
                    <img
                        src={client.logo}
                        alt={client.name}
                        className="w-16 h-16 object-contain"
                        onError={() => setImgError(true)}
                    />
                    <span className="text-center text-[10px] font-semibold text-gray-400 leading-tight tracking-wider uppercase">
                        {client.name}
                    </span>
                </>
            ) : (
                <span className="text-center text-xs font-bold text-gray-500 group-hover:text-gray-700 transition-colors duration-300 leading-tight tracking-wider uppercase">
                    {client.name}
                </span>
            )}
        </motion.div>
    );
};

const Clients: React.FC = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Section Header */}
                <div className="mb-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight"
                    >
                        International Companies<br />
                        Collaborations & Clients
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-1.5 w-24 bg-[#F58220] mt-4 origin-left"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold mb-16"
                >
                    Professional Association Agreement
                </motion.p>

                {/* Logo Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/[0.97] rounded-xl p-6 md:p-10 border border-gray-200 shadow-2xl shadow-black/30"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {CLIENTS.map((client, index) => (
                            <LogoCard key={client.name} client={client} index={index} />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Clients;
