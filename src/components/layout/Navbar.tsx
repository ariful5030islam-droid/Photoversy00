import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Camera, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', path: '/' },
    { name: 'সার্ভিস', path: '/services' },
    { name: 'প্যাকেজ', path: '/pricing' },
    { name: 'বুকিং', path: '/booking' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-black text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Camera size={24} />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">
            Photoversy
            <span className="text-gray-400 font-normal ml-2 hidden sm:inline text-sm">ফটোভার্সি</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide hover:text-gray-500 transition-colors relative py-1',
                location.pathname === link.path ? 'text-black' : 'text-gray-600'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                />
              )}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
          >
            বুক করুন
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-medium',
                location.pathname === link.path ? 'text-black font-semibold' : 'text-gray-500'
              )}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
