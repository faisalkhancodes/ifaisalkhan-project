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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12">
          <AnimatePresence>
            {displayedCerts.map((cert, index) => (
              <motion.div 
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#E11D48]/50 transition-all duration-500 shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/0a0a0a/e11d48?text=Certificate'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                  
                  {/* View Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/20">
                    <button 
                      onClick={() => setSelectedImg(cert)}
                      className="bg-[#E11D48] text-white p-4 rounded-full shadow-[0_0_20px_rgba(225,29,72,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <FiZoomIn size={24} />
                    </button>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-5 flex flex-col items-center">
                  <h3 className="text-slate-100 font-bold text-sm md:text-base text-center line-clamp-1 mb-3">
                    {cert.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedImg(cert)}
                    className="w-full py-2.5 text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:bg-[#E11D48]/10 hover:border-[#E11D48]/30 hover:text-[#E11D48] transition-all duration-300"
                  >
                    Examine Certificate
                  </button>
                </div>

                {/* Premium Accent */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#E11D48] text-white text-[0.6rem] font-black uppercase tracking-tighter rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Certified
                </div>
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
            className="fixed inset-0 z-[1000] bg-[#050505]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
            onKeyDown={(e) => e.key === 'Escape' && setSelectedImg(null)}
            tabIndex={0}
          >
            {/* Main Close Button - Enhanced for Mobile */}
            <button 
              className="absolute top-4 right-4 md:top-10 md:right-10 bg-[#E11D48] text-white p-4 md:p-5 rounded-full transition-all duration-300 hover:scale-110 active:scale-90 shadow-[0_0_30px_rgba(225,29,72,0.5)] z-[1100] group" 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
              aria-label="Close modal"
            >
              <FiX className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full p-2 md:p-3 bg-[#0a0a0a] border-2 border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_80px_rgba(225,29,72,0.2)] relative overflow-hidden group">
                {/* Modal Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <img 
                  src={selectedImg.img} 
                  alt={selectedImg.title} 
                  className="w-full h-full max-h-[75vh] object-contain rounded-lg md:rounded-2xl relative z-10" 
                />
              </div>
              
              <div className="mt-8 flex items-center gap-4 bg-[#E11D48] px-8 py-3 rounded-full shadow-[0_0_30px_rgba(225,29,72,0.3)] border border-white/20">
                <FiShield className="text-white w-5 h-5 animate-pulse" />
                <span className="text-white font-bold text-sm md:text-lg tracking-[0.2em] uppercase">{selectedImg.title}</span>
              </div>

              {/* Mobile-only hint */}
              <p className="mt-4 text-slate-500 text-[0.6rem] uppercase tracking-widest md:hidden">Tap outside to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
