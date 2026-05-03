import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const education = [
  {
    degree: 'BS, Software Engineering',
    institution: 'Bahria University',
    date: 'Sep 2023 – Present',
    desc: 'Currently pursuing a BS in Software Engineering at Bahria University Islamabad, developing strong expertise in software development, system design, and modern engineering practices.',
    skills: ['Problem Solving', 'Engineering', '+10 skills'],
    status: 'active'
  },
  {
    degree: 'ICS, Computer Science',
    institution: 'GDC Madyan Swat',
    date: 'Aug 2021 – Aug 2023',
    desc: 'Grade: A',
    skills: ['Research Skills', 'Computer Literacy', '+1 skill'],
    status: 'completed'
  },
  {
    degree: 'DIT, Diploma Information Technology',
    institution: 'ICST',
    date: 'May 2021 – Aug 2022',
    desc: 'Grade: A+',
    skills: ['Research Skills', 'Computer Literacy', '+3 skills'],
    status: 'completed'
  }
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={ref} className="py-32 lg:py-40 relative z-10 overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[#050505] z-0" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E11D48]/10 to-transparent" />

      <div className="container-fluid relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Academic Foundation</h2>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg">
            A track record of academic excellence and continuous learning in software engineering and technology.
          </p>
          <div className="red-line !ml-0 mt-6" />
        </motion.div>

        <div className="relative mt-20 lg:mt-32">
          
          {/* Vertical line - hidden on mobile, centered on md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px top-0 bottom-0 bg-gradient-to-b from-transparent via-white/10 to-transparent z-0" />

          {/* Vertical line - visible on mobile, left-aligned */}
          <div className="block md:hidden absolute left-6 w-px top-0 bottom-0 bg-gradient-to-b from-transparent via-[#E11D48]/30 to-transparent z-0" />

          {education.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col md:flex-row items-start justify-between w-full mb-12 md:mb-24 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }} 
                  animate={inView ? { opacity: 1, x: 0 } : {}} 
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                  className="w-full pl-12 md:pl-0 md:w-[44%] z-10">
                  
                  <div className="group relative bg-[#0a0a0a]/50 backdrop-blur-sm border border-white/5 hover:border-[#E11D48]/30 p-8 rounded-2xl transition-all duration-500 shadow-xl overflow-hidden">
                    <div className="flex flex-col mb-6 relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`px-4 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-widest border ${
                          edu.status === 'active' 
                            ? 'bg-[#E11D48]/10 text-[#E11D48] border-[#E11D48]/20 shadow-[0_0_15px_rgba(225,29,72,0.1)]' 
                            : 'bg-white/5 text-slate-500 border-white/10'
                        }`}>
                          {edu.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">{edu.degree}</h3>
                      <div className="text-[#E11D48] font-bold text-sm md:text-base flex items-center gap-2">
                        <FiBookOpen className="w-4 h-4" /> {edu.institution}
                      </div>
                    </div>
                    
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-8 relative z-10">{edu.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {edu.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[0.7rem] text-slate-500 font-mono group-hover:border-[#E11D48]/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for alignment */}
                <div className="hidden md:block w-[44%]" />

                {/* Empty space for alignment */}
                <div className="hidden md:block w-[44%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
