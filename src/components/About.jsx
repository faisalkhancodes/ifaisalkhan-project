import { motion } from 'framer-motion';
import { FiCode, FiShield, FiBook, FiUser } from 'react-icons/fi';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: <FiUser className="w-6 h-6 text-[#E11D48]" />, title: 'CEO & Founder', desc: 'Leading iqrasofts, delivering enterprise web and security solutions' },
    { icon: <FiBook className="w-6 h-6 text-[#E11D48]" />, title: 'Bahria University', desc: 'Software Engineering — 6th Semester, CGPA focused on excellence' },
    { icon: <FiCode className="w-6 h-6 text-[#E11D48]" />, title: 'Full-Stack Dev', desc: 'MERN Stack, PHP, Python, C++ — building scalable production apps' },
    { icon: <FiShield className="w-6 h-6 text-[#E11D48]" />, title: 'Cybersecurity', desc: 'Google-Certified: SIEM, Network Security, Vulnerability Analysis' },
  ];

  return (
    <section id="about" ref={ref} className="py-32 lg:py-40 relative z-10 overflow-hidden">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[#050505] z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E11D48]/[0.02] to-transparent pointer-events-none" />

      <div className="container-fluid relative z-10">
        
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>
          <h2 className="section-title !text-left !mx-0">Who Am I?</h2>
          <div className="red-line !ml-0" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 lg:mt-16">
          
          {/* Text Content */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="space-y-6">
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                I am a Software Engineering student at Bahria University, Islamabad, and the founder of{' '}
                <strong className="text-[#E11D48] font-bold">IqraSofts</strong>, a digital services organization dedicated to building modern, user-friendly web applications. I am passionate about solving real-world problems through clean code, intuitive design, and emerging technologies.
              </p>
              
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                With a <strong className="text-slate-100">Google Cybersecurity Professional Certificate</strong>, I integrate a security-first mindset into the development lifecycle. My goal is to bridge the gap between robust software engineering and proactive defense to ensure every application I build is both functional and resilient.
              </p>

              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                <strong className="text-slate-100 font-bold uppercase tracking-widest text-xs block mb-2">Objective:</strong> 
                I am focused on creating impactful digital solutions and am currently open to internships, freelance opportunities, and technical collaborations. I bring a blend of development expertise, creative problem-solving, and a dedicated focus on application security to every project.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-red w-full sm:w-auto text-center !py-2.5 !px-6 !text-xs">
                Get In Touch
              </a>
              <a href="/Images/Faisal Khan -CV.pdf" download className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 !py-2.5 !px-6 !text-xs">
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Picture Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[4/5] max-w-sm mx-auto lg:ml-auto rounded-2xl overflow-hidden border border-[#E11D48]/20 group shadow-2xl shadow-red-500/5">
            <img 
              src="/Images/Faisal pic Fivcon.jpeg" 
              alt="Engr. Faisal Khan" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-6 left-6">
              <span className="text-white font-bold tracking-[0.2em] uppercase text-[0.6rem] md:text-xs">Engr. Faisal Khan</span>
              <div className="h-px w-8 bg-[#E11D48] mt-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
