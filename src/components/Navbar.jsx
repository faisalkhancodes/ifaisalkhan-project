import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCpu } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Body scroll lock
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled || menuOpen ? 'backdrop-blur-xl bg-[#050505]/90 border-b border-red-500/20' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container-fluid h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <motion.a href="#home" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
          className="flex items-center gap-2 no-underline group">
          <FiCpu className="text-[#E11D48] w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-500" />
          <span className="mono text-[#E11D48] font-bold text-base md:text-lg tracking-wide whitespace-nowrap">
            Engr. <span className="text-slate-100">Faisal Khan</span>
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link, i) => (
            <motion.a key={link.href} href={link.href}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i, duration: 0.3 }}
              className={`px-2 py-2 rounded-md text-sm xl:text-base font-semibold tracking-widest uppercase transition-all duration-300 ${
                active === link.href.slice(1) 
                  ? 'text-[#E11D48]' 
                  : 'text-slate-400 hover:text-white'
              }`}>
              {link.label}
            </motion.a>
          ))}
          <motion.a href="#contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="ml-2 xl:ml-6 btn-red !py-2 !px-5 !text-[0.7rem] xl:!text-xs">
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-[#E11D48] bg-white/5 rounded-lg border border-white/10"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#050505] z-[90] flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className={`text-2xl font-black uppercase tracking-widest ${
                    active === link.href.slice(1) ? 'text-[#E11D48]' : 'text-slate-500'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 btn-red px-12 py-4"
              >
                Hire Me
              </motion.a>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E11D48]/10 blur-[120px] rounded-full -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
