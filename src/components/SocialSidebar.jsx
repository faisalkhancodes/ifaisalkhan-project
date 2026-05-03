import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SocialSidebar() {
  const links = [
    { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/923415009986', label: 'WhatsApp' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/engr-faisal-khan', label: 'LinkedIn' },
    { icon: <FaGithub size={20} />, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <motion.div 
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4"
      initial={{ opacity: 0, x: -20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      {/* Top Line */}
      <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#E11D48]"></div>
      
      {/* Icons */}
      {links.map((link, i) => (
        <motion.a 
          key={link.label} 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={link.label}
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 1.6 + i * 0.1 }}
          className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/5 border border-red-500/20 text-slate-400 hover:text-[#E11D48] hover:border-[#E11D48] hover:scale-110 hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-300"
        >
          {link.icon}
        </motion.a>
      ))}

      {/* Bottom Line */}
      <div className="w-px h-16 bg-gradient-to-b from-[#E11D48] to-transparent"></div>
    </motion.div>
  );
}
