import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn, FiShield, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const certs = [
  { img: '/Images/develperhub inten.png', title: 'DevelopersHub Internship' },
  { img: '/Images/Google Cybersecurity.jpeg', title: 'Google Cybersecurity' },
  { img: '/Images/SEO.png', title: 'SEO Verification' },
  { img: '/Images/AI Tools.jpg', title: 'AI Tools' },
  { img: '/Images/Profitable AI.png', title: 'Profitable AI' },
  { img: '/Images/Prompting.jpg', title: 'AI Prompting' },
  { img: '/Images/WordPress.png', title: 'WordPress Development' },
  { img: '/Images/Canva.png', title: 'Canva Design' },
  { img: '/Images/Freelancing.png', title: 'Freelancing Mastery' },
  { img: '/Images/English Course.png', title: 'English Proficiency' },
  { img: '/Images/C++.png', title: 'C++ Programming' },
  { img: '/Images/javaScript.png', title: 'JavaScript Essentials' },
  { img: '/Images/React App.png', title: 'React JS' },
  { img: '/Images/Web Design.png', title: 'Web Design' },
  { img: '/Images/communication.png', title: 'Communication Skills' },
  { img: '/Images/Problem Solving.png', title: 'Problem Solving' },
  { img: '/Images/Cyber Security Course.png', title: 'Cyber Security Basic' },
  { img: '/Images/cyber 02.png', title: 'Cyber Security Advanced' },
  { img: '/Images/cyber 3.png', title: 'Network Security' },
  { img: '/Images/cyber security VU.png', title: 'VU Cyber Security' },
  { img: '/Images/AI.png', title: 'Artificial Intelligence' },
  { img: '/Images/Github.png', title: 'GitHub Version Control' },
  { img: '/Images/CF Webinar.png', title: 'CF Webinar' },
  { img: '/Images/CPPS.png', title: 'CPPS Training' },
  { img: '/Images/50 design.png', title: '50 UI/UX Designs' },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll ? certs : certs.slice(0, 10);

  return (
    <section id="certifications" ref={ref} className="py-32 lg:py-40 relative z-10">
      <div className="container-fluid">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Certifications Gallery</h2>
          <div className="red-line" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
          <AnimatePresence>
            {displayedCerts.map((cert, index) => (
              <motion.div 
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                className="w-40 h-28 sm:w-48 sm:h-32 md:w-52 md:h-36 rounded-xl border border-[#E11D48]/30 bg-[#0a0a0a] shadow-[0_0_15px_rgba(225,29,72,0.1)] hover:shadow-[0_0_30px_rgba(225,29,72,0.3)] hover:border-[#E11D48] flex flex-col items-center justify-center p-4 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-[#E11D48]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="text-slate-100 font-bold text-[0.7rem] sm:text-xs text-center leading-tight mb-3 sm:mb-4 relative z-10 line-clamp-3 uppercase tracking-tighter">
                  {cert.title}
                </span>
                
                <button 
                  onClick={() => setSelectedImg(cert)}
                  className="px-4 py-1.5 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-widest border border-[#E11D48] text-[#E11D48] rounded-full hover:bg-[#E11D48] hover:text-white transition-all duration-300 relative z-10"
                >
                  View
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        {certs.length > 10 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 bg-transparent border border-[#E11D48]/50 text-[#E11D48] px-6 py-3 rounded-md hover:bg-[#E11D48]/10 transition-all duration-300 font-mono tracking-widest uppercase text-sm"
            >
              {showAll ? 'Collapse Archive' : 'View Full Archive'}
              {showAll ? <FiChevronUp className="group-hover:-translate-y-1 transition-transform" /> : <FiChevronDown className="group-hover:translate-y-1 transition-transform" />}
            </button>
          </motion.div>
        )}
      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[#050505]/98 backdrop-blur-3xl flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            {/* Main Wrapper */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Card */}
              <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_100px_rgba(225,29,72,0.15)] overflow-hidden relative">
                <img 
                  src={selectedImg.img} 
                  alt={selectedImg.title} 
                  className="w-full h-auto max-h-[60vh] md:max-h-[70vh] object-contain mx-auto" 
                />
              </div>
              
              {/* Controls Section */}
              <div className="flex flex-col items-center gap-4 w-full">
                <h3 className="text-white font-bold text-center text-sm md:text-xl tracking-widest uppercase px-4">
                  {selectedImg.title}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => setSelectedImg(null)}
                    className="btn-red !py-2 !px-8 !text-xs flex items-center gap-2 shadow-lg shadow-red-500/20"
                  >
                    Back to Site
                  </button>
                  <button 
                    onClick={() => setSelectedImg(null)}
                    className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all"
                    aria-label="Close"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              </div>

              {/* Mobile Hint */}
              <p className="text-slate-500 text-[0.6rem] uppercase tracking-[0.3em] font-bold">Secure Verification Protocol</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
