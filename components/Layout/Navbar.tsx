import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const PROJECT_SUBITEMS = [
  { name: 'All Projects', href: '/#projects' },
  { name: 'Government & Office Buildings', href: '/projects/government-buildings' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProjectsOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProjectsOpen(false);
    }, 200);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);
    setMobileProjectsOpen(false);

    // If it's a hash link (e.g. /#projects)
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (location.pathname !== '/') {
        // Navigate home first, then scroll
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Who We Are', href: '#leadership' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? `py-4 ${isMobileMenuOpen ? 'bg-transparent' : 'bg-black/90 backdrop-blur-md border-b border-white/5'}`
        : 'py-8 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="relative z-50 group">
          <div className="p-2 bg-black/50 backdrop-blur-sm rounded-md border border-white/5 group-hover:border-[#F58220]/50 transition-colors">
            <Logo />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 lg:gap-12">

          {/* Projects Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="flex items-center gap-1 text-xs lg:text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-[#F58220] transition-colors relative group"
              onClick={() => handleNavClick('/#projects')}
            >
              Projects
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${isProjectsOpen ? 'rotate-180 text-[#F58220]' : ''}`}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F58220] transition-all duration-300 group-hover:w-full" />
            </button>

            <AnimatePresence>
              {isProjectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl shadow-black/50 overflow-hidden"
                >
                  {/* Orange accent bar at top */}
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-[#F58220] to-transparent" />

                  <div className="py-2">
                    {PROJECT_SUBITEMS.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left px-5 py-3 text-sm tracking-wide text-gray-300 hover:text-white hover:bg-[#F58220]/10 transition-all duration-200 flex items-center gap-3 group/item"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]/40 group-hover/item:bg-[#F58220] transition-colors duration-200" />
                        {item.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Nav Links */}
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-xs lg:text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-[#F58220] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F58220] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden lg:block px-6 py-2 border border-[#F58220] text-[#F58220] text-xs font-bold uppercase tracking-widest hover:bg-[#F58220] hover:text-white transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-[#0f0f0f] flex flex-col items-center justify-center gap-6 md:hidden z-[60]"
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white hover:text-[#F58220] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
              {/* Projects with expandable sub-menu */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white hover:text-[#F58220] transition-colors"
                >
                  Projects
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${mobileProjectsOpen ? 'rotate-180 text-[#F58220]' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileProjectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden flex flex-col items-center gap-3 mt-3"
                    >
                      {PROJECT_SUBITEMS.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavClick(item.href)}
                          className="text-base text-gray-400 hover:text-[#F58220] transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Links */}
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-bold tracking-tight text-white hover:text-[#F58220]"
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;