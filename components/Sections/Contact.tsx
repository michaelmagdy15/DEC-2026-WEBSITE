import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
              Let's Build <br />
              <span className="text-[#F58220]">The Future.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mb-8">
              Start a conversation with DEC Engineering Consultant about your next visionary project.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#F58220] hover:text-white transition-colors duration-300">
                Start Project
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:border-[#F58220] hover:text-[#F58220] transition-colors duration-300">
                Careers
              </button>
            </div>
          </div>

          <div className="space-y-8 md:pl-20">
            <div className="p-1 bg-white inline-block rounded-sm mb-4">
              <img src={LOGO_URL} alt="DEC Logo" className="w-32" />
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#F58220] uppercase tracking-widest mb-2">Abu Dhabi Branch</h4>
              <p className="text-white">P.O. BOX: 45080<br />Abu Dhabi, United Arab Emirates</p>
              <p className="text-white mt-1">Tel: +971 26443200</p>
              <p className="text-white">Fax: +971 26443321</p>
              <p className="text-white hover:text-[#F58220] transition-colors cursor-pointer">dec2000@emirates.net.ae</p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#F58220] uppercase tracking-widest mb-2">Cairo Branch</h4>
              <p className="text-white">P.O. BOX: 24, Fawzy, el Motaiee st.</p>
              <p className="text-white mt-1">Tel: +20224153765</p>
              <p className="text-white hover:text-[#F58220] transition-colors cursor-pointer">decegypt@gmail.com</p>
            </div>

            <div className="flex gap-6 pt-4">
              {['LinkedIn', 'Instagram', 'Behance'].map((social) => (
                <a key={social} href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase font-bold">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} DEC Engineering Consultant. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;