import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowDown, FiShield, FiAward, FiCode, FiCpu } from 'react-icons/fi';

const qualities = [
  { icon: <FiShield size={24} className="text-[#E11D48]" />, top: "SECURITY", bottom: "CERTIFIED" },
  { icon: <FiCode size={24} className="text-[#E11D48]" />, top: "FULL STACK", bottom: "DEVELOPER" },
  { icon: <FiAward size={24} className="text-[#E11D48]" />, top: "CEO &", bottom: "FOUNDER" },
  { icon: <FiCpu size={24} className="text-[#E11D48]" />, top: "SOFTWARE", bottom: "ENGINEER" }
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [qIndex, setQIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setQIndex(i => (i + 1) % qualities.length), 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative z-10 overflow-hidden flex flex-col items-center justify-start mt-24 md:mt-32 pt-20 md:pt-32 pb-40 md:pb-60">

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ y: ['-100%', '100vh'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#E11D48]/30 to-transparent absolute"
        />
      </div>

      <div className="container-fluid py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">

        {/* Text Content - Displayed first on mobile, left on desktop */}
        <div className="order-2 lg:order-1 flex flex-col items-start text-left pt-12 md:pt-0">
          {/* Spacer to push content below fixed Navbar */}
          <div className="h-10 md:hidden" />
          
          {/* Status badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-ping" />
            <span className="mono text-slate-400 text-xs tracking-widest uppercase">
              SYSTEM ONLINE
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1.5rem,6vw,3.75rem)] whitespace-nowrap font-black leading-tight mb-4 tracking-tighter">
            <span className="text-slate-100">Engr. </span>
            <span className="text-[#E11D48] drop-shadow-[0_0_40px_rgba(225,29,72,0.5)]">Faisal </span>
            <span className="text-slate-100">Khan</span>
          </motion.h1>

          {/* Typewriter tagline */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mb-6 min-h-[3rem] text-sm md:text-base lg:text-lg">
            <span className="text-[#E11D48] mono">$ </span>
            <span className="mono text-slate-400">
              {mounted && (
                <TypeAnimation
                  sequence={[
                    'Software Engineering Student',
                    2000,
                    'Web Developer',
                    2000,
                    'Cybersecurity Analyst',
                    2000,
                    'CEO & Founder of IqraSofts',
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              )}
            </span>
          </motion.div>

          {/* CEO Badge */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}
            className="mb-8">
            <div className="ceo-badge">
              <FiShield size={16} />
              <span>CEO & Founder — IqraSofts</span>
              <FiAward size={16} />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-slate-400 leading-relaxed mb-10 max-w-lg text-sm md:text-base">
            I am passionate about solving real-world problems through clean code, intuitive design, and emerging technologies. Bridging robust software engineering with proactive defense.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-red w-full sm:w-auto text-center !py-2.5 !px-6 !text-xs">
              View Projects
            </a>
            <a href="/Images/Faisal Khan -CV.pdf" download className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 !py-2.5 !px-6 !text-xs">
              <FiDownload size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mt-12 w-full">
            {[
              { value: '3+', label: 'Years Coding' },
              { value: '10+', label: 'Certifications' },
              { value: '5+', label: 'Projects Built' },
              { value: '1', label: 'Company Founded' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-extrabold text-[#E11D48] mb-1">{stat.value}</div>
                <div className="text-[0.65rem] md:text-xs text-slate-500 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile Image - Displayed first on mobile, right on desktop */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center items-center relative w-full mt-8 lg:mt-0">

          {/* Rotating ring container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 md:-inset-6 rounded-full border-2 border-dashed border-red-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-8 md:-inset-12 rounded-full border border-dashed border-red-500/15"
            />

            {/* Image */}
            <div className="hero-image-ring w-full h-full rounded-full border-4 border-red-500/40 overflow-hidden relative bg-[#0a0a0a]">
              <img
                src="/Images/Engr Faisal Khan.jpeg"
                alt="Engr. Faisal Khan"
                className="w-full h-full object-cover scale-110"
                onError={e => { e.target.src = '/Images/Faisal pic Fivcon.jpeg'; }}
              />
              {/* Red overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 md:-bottom-2 md:-right-8 bg-[#050505]/90 border border-red-500/30 rounded-xl w-[100px] md:w-[120px] h-[90px] md:h-[100px] flex items-center justify-center backdrop-blur-xl shadow-lg shadow-red-500/20 z-20 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={qIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-1 text-center w-full absolute inset-0 justify-center">
                  {qualities[qIndex].icon}
                  <span className="text-[#E11D48] text-[0.6rem] md:text-xs font-bold tracking-widest">{qualities[qIndex].top}</span>
                  <span className="text-slate-400 text-[0.6rem] md:text-[0.65rem]">{qualities[qIndex].bottom}</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on very small screens to avoid overlap */}
      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-500 hover:text-[#E11D48] transition-colors z-20">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown size={18} />
        </motion.div>
      </motion.a>

    </section>
  );
}
